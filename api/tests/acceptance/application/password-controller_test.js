const faker = require('faker');
const { describe, it, before, after, expect, afterEach, beforeEach, knex, sinon } = require('../../test-helper');
const mailjetService = require('../../../lib/domain/services/mail-service');
const passwordResetService = require('../../../lib/domain/services/password-reset-service');
const resetPasswordDemandRepository = require('../../../lib/infrastructure/repositories/password-reset-demands-repository');

const server = require('../../../server');

describe('Acceptance | Controller | password-controller', function() {

  after(function(done) {
    server.stop(done);
  });

  describe('POST /api/password-reset-demands', () => {

    let fakeUserEmail;
    let options;

    before(() => {
      fakeUserEmail = faker.internet.email();
      _insertUser(fakeUserEmail);
    });

    after(() => {
      return Promise.all([knex('users').delete(), knex('password-reset-demands').delete()]);
    });

    describe('when no email or hostEnv is provided', () => {
      beforeEach(() => {
        options = {
          method: 'POST',
          url: '/api/password-reset-demands',
          payload: {}
        };
      });

      it('should reply with 400', (done) => {
        // when
        server.inject(options).then((response) => {
          // then
          expect(response.statusCode).to.equal(400);
          done();
        });
      });
    });

    describe('when email provided is unknown', () => {
      beforeEach(() => {
        options = {
          method: 'POST',
          url: '/api/password-reset-demands',
          payload: {
            email: 'uzinagaz@unknown.xh',
            hostEnv: 'dev'
          }
        };
      });

      it('should reply with 404', (done) => {
        // when
        server.inject(options).then((response) => {
          // then
          expect(response.statusCode).to.equal(404);
          done();
        });
      });
    });

    describe('when existing email is provided and email is delivered', () => {
      beforeEach(() => {
        options = {
          method: 'POST',
          url: '/api/password-reset-demands',
          payload: {
            email: fakeUserEmail,
            hostEnv: 'dev'
          }
        };

        sinon.stub(mailjetService, 'sendResetPasswordDemandEmail').resolves();
      });

      afterEach(() => {
        mailjetService.sendResetPasswordDemandEmail.restore();
      });

      it('should reply with 200', () => {
        // when
        return server.inject(options).then((response) => {
          // then
          expect(response.statusCode).to.equal(200);
        });
      });
    });

    describe('when existing email is provided, but some internal error has occured', () => {
      beforeEach(() => {
        options = {
          method: 'POST',
          url: '/api/password-reset-demands',
          payload: {
            email: fakeUserEmail,
            hostEnv: 'dev'
          }
        };

        sinon.stub(resetPasswordDemandRepository, 'create').rejects(new Error());
      });

      afterEach(() => {
        resetPasswordDemandRepository.create.restore();
      });

      it('should reply with 500', (done) => {
        // when
        server.inject(options).then((response) => {
          // then
          expect(response.statusCode).to.equal(500);
          done();
        });
      });
    });

  });

  describe('GET /api/password-reset-demands/{temporaryKey}', () => {
    let fakeUserEmail;
    let options;

    describe('When temporaryKey is not valid', () => {

      it('should reply with 401 status code', () => {
        // when
        options = {
          method: 'GET',
          url: '/api/password-reset-demands/invalid-temporary-key'
        };
        return server.inject(options).then((response) => {
          // then
          expect(response.statusCode).to.equal(401);
        });
      });
    });

    describe('When temporaryKey is valid but not linked to a password reset demand', () => {

      it('should reply with 404 status code', () => {
        // when
        const temporaryKey = passwordResetService.generateTemporaryKey();
        options = {
          method: 'GET',
          url: `/api/password-reset-demands/${temporaryKey}`
        };
        return server.inject(options).then((response) => {
          // then
          expect(response.statusCode).to.equal(404);
        });
      });
    });

    describe('When something going wrong', () => {

      beforeEach(() => {
        sinon.stub(passwordResetService, 'verifyDemand').resolves(new Error());
      });

      afterEach(() => {
        passwordResetService.verifyDemand.restore();
      });

      it('should reply with 500 status code', () => {
        // when
        const temporaryKey = passwordResetService.generateTemporaryKey();
        options = {
          method: 'GET',
          url: `/api/password-reset-demands/${temporaryKey}`
        };
        return server.inject(options).then((response) => {
          // then
          expect(response.statusCode).to.equal(500);
        });
      });
    });

    describe('When temporaryKey is valid and linked to a password reset demand', () => {

      const temporaryKey = passwordResetService.generateTemporaryKey();

      before(() => {
        fakeUserEmail = faker.internet.email();
        _insertUser(fakeUserEmail);
        return _insertPasswordResetDemand(temporaryKey, fakeUserEmail);
      });

      after(() => {
        return Promise.all([knex('users').delete(), knex('password-reset-demands').delete()]);
      });

      it('should reply with 200 status code', () => {
        // when
        options = {
          method: 'GET',
          url: `/api/password-reset-demands/${temporaryKey}`
        };
        return server.inject(options).then((response) => {
          // then
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
  return knex('password-reset-demands').insert(resetDemandRaw);
}
