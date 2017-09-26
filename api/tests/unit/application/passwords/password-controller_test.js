const Boom = require('boom');
const { describe, it, expect, beforeEach, afterEach, sinon } = require('../../../test-helper');
const passwordController = require('../../../../lib/application/passwords/password-controller');
const userService = require('../../../../lib/domain/services/user-service');
const mailService = require('../../../../lib/domain/services/mail-service');
const resetPasswordService = require('../../../../lib/domain/services/password-reset-service');
const resetPasswordRepository = require('../../../../lib/infrastructure/repositories/password-reset-demands-repository');
const errorSerializer = require('../../../../lib/infrastructure/serializers/jsonapi/validation-error-serializer');
const { UserNotFoundError, InternalError, InvalidTemporaryKeyError, PasswordResetDemandNotFoundError } = require('../../../../lib/domain/errors');

describe('Unit | Controller | PasswordController', () => {

  describe('#resetDemand', () => {

    it('should be a function', () => {
      //then
      expect(passwordController.resetDemand).to.be.a('function');
    });

    describe('Payload bad format cases: ', () => {

      let replyStub;
      let sandbox;

      beforeEach(() => {
        sandbox = sinon.sandbox.create();
        replyStub = sandbox.stub();
        sandbox.stub(Boom, 'badRequest').returns({});
      });

      afterEach(() => {
        sandbox.restore();
      });

      [
        { request: {}, description: 'no payload' },
        { request: { payload: {} }, description: 'empty payload' },
        { request: { payload: { key: 'value' } }, description: 'no email or hostEnv key in payload' },
        { request: { payload: { email: 'value' } }, description: 'email is provided but no hostEnv key in payload' },
        { request: { payload: { hostEnv: 'value' } }, description: 'hostEnv is provided but no email key in payload' },

      ].forEach(({ request, description }) => {
        it(`should reply with 400 status, when ${description} provided`, () => {
          // given
          replyStub.returns({
            code: () => {
            }
          });
          // when
          passwordController.resetDemand(request, replyStub);

          // then
          sinon.assert.calledOnce(Boom.badRequest);
          sinon.assert.calledWith(replyStub, Boom.badRequest());
        });
      });
    });

    describe('When payload has a good format: ', () => {

      const request = { payload: { email: 'shi@fu.me', hostEnv: 'dev' } };

      let replyStub;
      let sandbox;

      beforeEach(() => {
        sandbox = sinon.sandbox.create();
        replyStub = sandbox.stub();
        sandbox.stub(userService, 'isUserExisting');
        sandbox.stub(mailService, 'sendResetPasswordDemandEmail');
        sandbox.stub(resetPasswordService, 'generateTemporaryKey');
        sandbox.stub(resetPasswordService, 'invalidOldResetPasswordDemand');
        sandbox.stub(resetPasswordRepository, 'create');
        sandbox.stub(errorSerializer, 'serialize');
      });

      afterEach(() => {
        sandbox.restore();
      });

      describe('User existence test cases', () => {

        it('should verify user existence (by email)', () => {
          // given
          userService.isUserExisting.resolves();
          replyStub.returns({
            code: () => {
            }
          });

          //when
          const promise = passwordController.resetDemand(request, replyStub);

          // then
          return promise.then(() => {
            sinon.assert.calledOnce(userService.isUserExisting);
            sinon.assert.calledWith(userService.isUserExisting, request.payload.email);
          });
        });

        it('should rejects an error, when user is not found', () => {
          // given
          const error = new UserNotFoundError();
          const expectedErrorMessage = UserNotFoundError.getErrorMessage();
          const serializedError = {};
          errorSerializer.serialize.returns(serializedError);
          userService.isUserExisting.rejects(error);
          replyStub.returns({
            code: () => {
            }
          });

          //when
          const promise = passwordController.resetDemand(request, replyStub);

          // then
          return promise.then(() => {
            sinon.assert.calledOnce(errorSerializer.serialize);
            sinon.assert.calledWith(errorSerializer.serialize, expectedErrorMessage);
            sinon.assert.calledOnce(replyStub);
            sinon.assert.calledWith(replyStub, serializedError);
          });
        });

      });

      it('should invalid old reset password demand', () => {
        // given
        userService.isUserExisting.resolves();
        resetPasswordService.invalidOldResetPasswordDemand.resolves();
        replyStub.returns({
          code: () => {
          }
        });

        //when
        const promise = passwordController.resetDemand(request, replyStub);

        // then
        return promise.then(() => {
          sinon.assert.calledOnce(resetPasswordService.invalidOldResetPasswordDemand);
          sinon.assert.calledWith(resetPasswordService.invalidOldResetPasswordDemand, request.payload.email);
        });
      });

      it('should ask for a temporary token generation', () => {
        // given
        const generatedToken = 'token';
        userService.isUserExisting.resolves();
        resetPasswordService.generateTemporaryKey.returns(generatedToken);
        replyStub.returns({
          code: () => {
          }
        });

        //when
        const promise = passwordController.resetDemand(request, replyStub);

        // then
        return promise.then(() => {
          sinon.assert.calledOnce(resetPasswordService.generateTemporaryKey);
        });
      });

      it('should save a new reset password demand', () => {
        // given
        const generatedToken = 'token';
        const demand = { email: 'shi@fu.me', temporaryKey: generatedToken };
        userService.isUserExisting.resolves();
        resetPasswordService.generateTemporaryKey.returns(generatedToken);
        resetPasswordRepository.create.resolves();
        replyStub.returns({
          code: () => {
          }
        });

        //when
        const promise = passwordController.resetDemand(request, replyStub);

        // then
        return promise.then(() => {
          sinon.assert.calledOnce(resetPasswordRepository.create);
          sinon.assert.calledWith(resetPasswordRepository.create, demand);
        });
      });

      it('should send an email with a reset password link', () => {
        // given
        const generatedToken = 'token';
        userService.isUserExisting.resolves();
        resetPasswordService.generateTemporaryKey.returns(generatedToken);
        resetPasswordRepository.create.resolves();

        //when
        const promise = passwordController.resetDemand(request, replyStub);

        // then
        return promise.then(() => {
          sinon.assert.calledOnce(mailService.sendResetPasswordDemandEmail);
          sinon.assert.calledWith(mailService.sendResetPasswordDemandEmail, request.payload.email, request.payload.hostEnv, generatedToken);
        });
      });

      it('should reply ok when all things are good', () => {
        // given
        const generatedToken = 'token';
        userService.isUserExisting.resolves();
        resetPasswordService.generateTemporaryKey.returns(generatedToken);
        resetPasswordRepository.create.resolves();

        //when
        const promise = passwordController.resetDemand(request, replyStub);

        // then
        return promise.then(() => {
          sinon.assert.calledOnce(replyStub);
        });
      });

      describe('When internal error has occured', () => {
        it('should reply with an serialized error', () => {
          // given
          const error = new InternalError();
          const expectedErrorMessage = InternalError.getErrorMessage();
          const serializedError = {};
          errorSerializer.serialize.returns(serializedError);
          userService.isUserExisting.rejects(error);
          replyStub.returns({
            code: () => {
            }
          });

          //when
          const promise = passwordController.resetDemand(request, replyStub);

          // then
          return promise.then(() => {
            sinon.assert.calledOnce(errorSerializer.serialize);
            sinon.assert.calledWith(errorSerializer.serialize, expectedErrorMessage);
            sinon.assert.calledOnce(replyStub);
            sinon.assert.calledWith(replyStub, serializedError);
          });
        });
      });
    });
  });

  describe('#checkResetDemand', () => {
    let reply;
    let sandbox;
    const request = {
      params: {
        temporaryKey: 'token'
      }
    };

    beforeEach(() => {
      sandbox = sinon.sandbox.create();
      sandbox.stub(resetPasswordService, 'verifyDemand').resolves();
      sandbox.stub(errorSerializer, 'serialize');
      reply = sinon.stub().returns({
        code: () => {
        }
      });
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should verify token', () => {
      // when
      const promise = passwordController.checkResetDemand(request, reply);

      // then
      return promise.then(() => {
        sinon.assert.calledOnce(resetPasswordService.verifyDemand);
        sinon.assert.calledWith(resetPasswordService.verifyDemand, request.params.temporaryKey);
      });

    });

    describe('When temporaryKey is valid', () => {

      it('should reply with temporaryKey', () => {
        // given
        const verifyDemandTempKey = 'token';
        resetPasswordService.verifyDemand.resolves(verifyDemandTempKey);

        // when
        const promise = passwordController.checkResetDemand(request, reply);

        // then
        return promise.then(() => {
          sinon.assert.calledOnce(reply);
          sinon.assert.calledWith(reply, request.params.temporaryKey);
        });

      });
    });

    describe('When temporaryKey is not valid', () => {

      it('should reply with a InvalidTemporaryKeyError serialized', () => {
        // given
        const error = new InvalidTemporaryKeyError();
        const expectedErrorMessage = InvalidTemporaryKeyError.getErrorMessage();
        const serializedError = {};
        errorSerializer.serialize.returns(serializedError);
        resetPasswordService.verifyDemand.rejects(error);

        // when
        const promise = passwordController.checkResetDemand(request, reply);

        // then
        return promise.then(() => {
          sinon.assert.calledOnce(reply);
          sinon.assert.calledOnce(errorSerializer.serialize);
          sinon.assert.calledWith(errorSerializer.serialize, expectedErrorMessage);
          sinon.assert.calledWith(reply, serializedError);
        });
      });
    });

    describe('When temporaryKey is valid but not related to a password reset demand', () => {

      it('should reply with a PasswordResetDemandNotFoundError serialized', () => {
        // given
        const error = new PasswordResetDemandNotFoundError();
        const expectedErrorMessage = PasswordResetDemandNotFoundError.getErrorMessage();
        const serializedError = {};
        errorSerializer.serialize.returns(serializedError);
        resetPasswordService.verifyDemand.rejects(error);

        // when
        const promise = passwordController.checkResetDemand(request, reply);

        // then
        return promise.then(() => {
          sinon.assert.calledOnce(reply);
          sinon.assert.calledOnce(errorSerializer.serialize);
          sinon.assert.calledWith(errorSerializer.serialize, expectedErrorMessage);
          sinon.assert.calledWith(reply, serializedError);
        });
      });
    });

    describe('When unknown error has occured', () => {

      it('should reply with a InternalError serialized', () => {
        // given
        const error = new InternalError();
        const expectedErrorMessage = InternalError.getErrorMessage();
        const serializedError = {};
        errorSerializer.serialize.returns(serializedError);
        resetPasswordService.verifyDemand.rejects(error);

        // when
        const promise = passwordController.checkResetDemand(request, reply);

        // then
        return promise.then(() => {
          sinon.assert.calledOnce(reply);
          sinon.assert.calledOnce(errorSerializer.serialize);
          sinon.assert.calledWith(errorSerializer.serialize, expectedErrorMessage);
          sinon.assert.calledWith(reply, serializedError);
        });
      });
    });

  });
});
