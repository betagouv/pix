const {describe, it, after, afterEach, beforeEach, sinon, expect} = require('../../../test-helper');

const faker = require('faker');
const User = require('../../../../lib/domain/models/data/user');
const Boom = require('boom');

const server = require('../../../../server');

const userController = require('../../../../lib/application/users/user-controller');
const validationErrorSerializer = require('../../../../lib/infrastructure/serializers/jsonapi/validation-error-serializer');

const mailService = require('../../../../lib/domain/services/mail-service');
const userSerializer = require('../../../../lib/infrastructure/serializers/jsonapi/user-serializer');
const googleRecaptcha = require('../../../../lib/domain/services/recaptcha-validator');

describe('Unit | Controller | user-controller', () => {

  after((done) => {
    server.stop(done);
  });

  describe('#save', () => {

    let boomBadRequestMock;
    let validationErrorSerializerStub;
    let replyStub;
    let googleRecaptchaStub;

    beforeEach(() => {
      boomBadRequestMock = sinon.mock(Boom);
      validationErrorSerializerStub = sinon.stub(validationErrorSerializer, 'serialize');
      replyStub = sinon.stub();
      googleRecaptchaStub = sinon.stub(googleRecaptcha, 'verify').returns(true);
    });

    afterEach(() => {
      validationErrorSerializerStub.restore();
      boomBadRequestMock.restore();
      googleRecaptchaStub.restore();
    });

    describe('#Recaptcha Behavior', function() {

      describe('recaptcha error:', function() {
        let codeSpy;
        let request;
        beforeEach(() => {
          codeSpy = sinon.spy();
          replyStub.returns({code: codeSpy});

          request = {
            payload: {
              data: {
                attributes: {
                  firstName: '',
                  lastName: '',
                  captchaResponse: 'VALID_CAPTCHA'
                }
              }
            }
          };

          googleRecaptchaStub.returns(false);
          validationErrorSerializerStub.restore();
        });

        afterEach(() => {

        });

        it('should get Ok only when google verify is called with param', function() {
          // When
          userController.save(request, replyStub);
          // Then
          sinon.assert.calledOnce(googleRecaptcha.verify);
          sinon.assert.calledWith(googleRecaptcha.verify, 'VALID_CAPTCHA');
        });

        it('should get error when there is not captchaResponse in payload', function() {
          // given
          const expectedFormattedCaptchaError = {
            'errors': [
              {
                'detail': 'Le captcha est invalide.',
                'meta': {
                  'field': 'captchaResponse'
                },
                'source': {
                  'pointer': '/data/attributes/captcha-response'
                },
                'status': '400',
                'title': 'Invalid Attribute'
              },
              {
                'detail': 'Le champ CGU doit être renseigné.',
                'meta': {
                  'field': 'cgu'
                },
                'source': {
                  'pointer': '/data/attributes/cgu'
                },
                'status': '400',
                'title': 'Invalid Attribute'
              }
            ]
          };

          // When
          userController.save(request, replyStub);

          // Then
          sinon.assert.calledOnce(replyStub);
          sinon.assert.calledWith(replyStub, expectedFormattedCaptchaError);
          sinon.assert.calledWith(codeSpy, 422);
        });

        it('should get ok for invalid captcha, validationErrors is handle on user', function() {
          // given
          const user = new User({
            email: 'shi@fu.me'
          });

          const expectedMergedErrors = {
            'errors': [
              {
                'detail': 'Le captcha est invalide.',
                'meta': {
                  'field': 'captchaResponse'
                },
                'source': {
                  'pointer': '/data/attributes/captcha-response'
                },
                'status': '400',
                'title': 'Invalid Attribute'
              },
              {
                'detail': 'Le champ CGU doit être renseigné.',
                'meta': {
                  'field': 'cgu'
                },
                'source': {
                  'pointer': '/data/attributes/cgu'
                },
                'status': '400',
                'title': 'Invalid Attribute'
              }
            ]
          };
          const userSerializerStub = sinon.stub(userSerializer, 'serialize').returns(user);

          // When
          userController.save(request, replyStub);

          // then
          sinon.assert.calledWith(replyStub, expectedMergedErrors);
          userSerializerStub.restore();
        });

        // Merge errors data
      });
    });

    describe('when the account is created', () => {

      let userSerializerStub;
      let userSerializerDeserializeStub;
      let mailServiceMock;
      let user;
      let email;

      beforeEach(() => {

        email = faker.internet.email();
        user = new User({
          email
        });

        mailServiceMock = sinon.mock(mailService);
        userSerializerStub = sinon.stub(userSerializer, 'serialize');
        userSerializerDeserializeStub = sinon.stub(userSerializer, 'deserialize').returns({
          save: _ => {
            return Promise.resolve(user);
          }
        });

        replyStub.returns({
          code: _ => {
          }
        });
      });

      afterEach(() => {
        userSerializerDeserializeStub.restore();
        userSerializerStub.restore();
      });

      it('should send an email', () => {
        // Given
        const request = {
          payload: {
            data: {
              attributes: {
                firstName: '',
                lastName: '',
                email
              }
            }
          }
        };
        mailServiceMock.expects('sendAccountCreationEmail').once().withArgs(email);

        // When
        const promise = userController.save(request, replyStub);

        // Then
        return promise.then(() => {
          mailServiceMock.verify();
        });
      });

      it('should send an email', () => {
        // Given
        const expectedSerializedUser = {message: 'serialized user'};
        userSerializerStub.returns(expectedSerializedUser);
        const sendAccountCreationEmail = sinon.stub(mailService, 'sendAccountCreationEmail');
        const request = {
          payload: {
            data: {
              attributes: {
                firstName: '',
                lastName: '',
                email
              }
            }
          }
        };

        // When
        const promise = userController.save(request, replyStub);

        // Then
        return promise.then(() => {
          sinon.assert.calledWith(userSerializerStub, user);
          sinon.assert.calledWith(replyStub, expectedSerializedUser);

          sendAccountCreationEmail.restore();
        });
      });

    });

    it('should reply with a serialized error', () => {
      // Given
      const codeSpy = sinon.spy();
      const expectedSerializedError = {errors: []};
      validationErrorSerializerStub.withArgs().returns(expectedSerializedError);
      replyStub.returns({code: codeSpy});

      const request = {
        payload: {
          data: {
            attributes: {
              firstName: '',
              lastName: ''
            }
          }
        }
      };

      // When
      const promise = userController.save(request, replyStub);

      // Then
      return promise.then(() => {
        sinon.assert.calledWith(replyStub, expectedSerializedError);
        sinon.assert.calledOnce(validationErrorSerializerStub);
        sinon.assert.calledWith(codeSpy, 422);
      });
    });

    describe('should return 422 Bad request', () => {

      let userSerializerStub;
      const request = {
        payload: {
          data: {
            attributes: {
              firstName: '',
              lastName: ''
            }
          }
        }
      };

      beforeEach(() => {
        userSerializerStub = sinon.stub(userSerializer, 'deserialize');
        replyStub.returns({code: sinon.spy()});
      });

      afterEach(() => {
        userSerializerStub.restore();
      });

      describe('when from Sqlite3', () => {

        it('should return an already registered email error message', () => {
          // Given
          validationErrorSerializerStub.withArgs().returns({errors: []});
          const sqliteConstraint = {code: 'SQLITE_CONSTRAINT'};
          userSerializerStub.returns({
            save: () => {
              return Promise.reject(sqliteConstraint);
            }
          });

          // When
          const promise = userController.save(request, replyStub);

          // Then
          return promise.then(() => {
            sinon.assert.calledWith(validationErrorSerializerStub, {
              data: {
                email: ['Cette adresse electronique est déjà enregistrée.']
              }
            });
          });
        });

      });

      describe('when from Postgresql', () => {

        it('should return an already registered email error message', () => {
          // Given
          validationErrorSerializerStub.withArgs().returns({errors: []});
          const sqliteConstraint = {code: '23505'};
          userSerializerStub.returns({
            save: () => {
              return Promise.reject(sqliteConstraint);
            }
          });

          // When
          const promise = userController.save(request, replyStub);

          // Then
          return promise.then(() => {
            sinon.assert.calledWith(validationErrorSerializerStub, {
              data: {
                email: ['Cette adresse electronique est déjà enregistrée.']
              }
            });
          });
        });

      });

      it('when there is not payload', () => {
        // Given
        const request = {};
        boomBadRequestMock.expects('badRequest').exactly(1);

        // When
        userController.save(request, replyStub);

        // Then
        boomBadRequestMock.verify();
      });

      it('when there is an empty payload', () => {
        // Given
        const request = {
          payload: {}
        };
        boomBadRequestMock.expects('badRequest').exactly(1);

        // When
        userController.save(request, replyStub);

        // Then
        boomBadRequestMock.verify();
      });

      it('when there is an payload with empty data', () => {
        // Given
        const request = {
          payload: {
            data: {}
          }
        };
        boomBadRequestMock.expects('badRequest').exactly(1);

        // When
        userController.save(request, replyStub);

        // Then
        boomBadRequestMock.verify();
      });

    });

  });

});
