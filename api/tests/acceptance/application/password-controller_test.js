const faker = require('faker');
const { describe, it, before, after, expect, afterEach, beforeEach, knex, sinon } = require('../../test-helper');
const mailjetService = require('../../../lib/domain/services/mail-service');
const passwordResetService = require('../../../lib/domain/services/password-reset-service');
const resetPasswordDemandRepository = require('../../../lib/infrastructure/repositories/reset-password-demands-repository');

const server = require('../../../server');

describe('Acceptance | Controller | password-controller', function() {

  after(function(done) {
    server.stop(done);
  });

  describe('POST /api/password-resets', () => {

    let fakeUserEmail;
    let options;

    before(() => {
      fakeUserEmail = faker.internet.email();
      _insertUser(fakeUserEmail);
    });

    after(() => {
      return Promise.all([knex('users').delete(), knex('reset-password-demands').delete()]);
    });

    describe('when email provided is unknown', () => {
      beforeEach(() => {
        options = {
          method: 'POST',
          url: '/api/password-resets',
          payload: {
            data: {
              attributes: {
                email: 'uzinagaz@unknown.xh'
              }
            }
          }
        };
      });

      it('should reply with 404', () => {
        // when
        return server.inject(options).then((response) => {
          // then
          expect(response.statusCode).to.equal(404);
        });
      });
    });

    describe('when existing email is provided and email is delivered', () => {
      beforeEach(() => {
        options = {
          method: 'POST',
          url: '/api/password-resets',
          payload: {
            data: {
              attributes: {
                email: fakeUserEmail
              }
            }
          }
        };

        sinon.stub(mailjetService, 'sendResetPasswordDemandEmail').resolves();
      });

      afterEach(() => {
        mailjetService.sendResetPasswordDemandEmail.restore();
      });

      it('should reply with 201', () => {
        // when
        return server.inject(options).then((response) => {
          // then
          expect(response.statusCode).to.equal(201);
        });
      });
    });

    describe('when existing email is provided, but some internal error has occured', () => {
      beforeEach(() => {
        options = {
          method: 'POST',
          url: '/api/password-resets',
          payload: {
            data: {
              attributes: {
                email: fakeUserEmail
              }
            }
          }
        };

        sinon.stub(resetPasswordDemandRepository, 'create').rejects(new Error());
      });

      afterEach(() => {
        resetPasswordDemandRepository.create.restore();
      });

      it('should reply with 500', () => {
        // when
        return server.inject(options).then((response) => {
          // then
          expect(response.statusCode).to.equal(500);
        });
      });
    });

    describe('When temporaryKey is valid and linked to a password reset demand', () => {

      beforeEach(() => {
        fakeUserEmail = faker.internet.email();
      });

      afterEach(() => {
        return Promise.all([knex('users').delete(), knex('reset-password-demands').delete()]);
      });

      it('should reply with 200 status code', async () => {
        // given
        const temporaryKey = passwordResetService.generateTemporaryKey();
        await _insertUser(fakeUserEmail);
        await _insertPasswordResetDemand(temporaryKey, fakeUserEmail);

        options = {
          method: 'GET',
          url: `/api/password-reset-demands/${temporaryKey}`
        };

        // when
        const promise = server.inject(options);

        // then
        return promise
          .then((response) => {
            expect(response.statusCode).to.equal(200);
          });
      });
    });

  });
});

function _insertUser(email) {
  const userRaw = {
    'firstName': faker.name.firstName(),
    'lastName': faker.name.lastName(),
    email,
    password: 'Pix2017!'
  };

  return knex('users').insert(userRaw)
    .then(user => user.shift());
}

function _insertPasswordResetDemand(temporaryKey, email) {
  const resetDemandRaw = { email, temporaryKey };
  return knex('reset-password-demands').insert(resetDemandRaw);
}
