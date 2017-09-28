const { describe, it, before, after, beforeEach, expect, sinon } = require('../../../test-helper');
const Hapi = require('hapi');
const UserController = require('../../../../lib/application/users/user-controller');

describe('Unit | Router | user-router', () => {

  let server;

  beforeEach(() => {
    server = new Hapi.Server();
    server.connection({ port: null });
    server.register({ register: require('../../../../lib/application/users') });
  });

  function expectRouteToExist(routeOptions, done) {
    server.inject(routeOptions, (res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  }

  describe('POST /api/users', () => {

    before(() => {
      sinon.stub(UserController, 'save').callsFake((request, reply) => reply('ok'));
    });

    after(() => {
      UserController.save.restore();
    });

    it('should exist', (done) => {
      return expectRouteToExist({ method: 'POST', url: '/api/users' }, done);
    });
  });

  describe('GET /api/users/me', function() {
    before(() => {
      sinon.stub(UserController, 'getAuthenticatedUserProfile').callsFake((request, reply) => reply('ok'));
    });

    after(() => {
      UserController.getAuthenticatedUserProfile.restore();
    });

    it('should exist', (done) => {
      return expectRouteToExist({ method: 'GET', url: '/api/users/me' }, done);
    });
  });

  describe('PATCH /api/users/{userId}', function() {

    const userId = '12344';
    const options = { method: 'PATCH', url: `/api/users/${userId}` };

    before(() => {
      sinon.stub(UserController, 'updatePassword').callsFake((request, reply) => reply('ok'));
    });

    after(() => {
      UserController.updatePassword.restore();
    });

    it('should exist', () => {
      const wellFormedOptions = {
        method: 'PATCH',
        url: `/api/users/${userId}`,
        payload: { data: { attributes: { password: '12345678ab+!' } } }
      };

      // given
      return server.inject(wellFormedOptions).then((res) => {
        expect(res.statusCode).to.equal(200);
      });
    });

    describe('Payload schema validation (password attribute in payload)', () => {

      it('should have a payload', (done) => {
        // then
        server.inject(options, (res) => {
          expect(res.statusCode).to.equal(400);
          done();
        });
      });

      it('should have a valid password format in payload', (done) => {
        // given
        options['payload'] = {
          data: {
            attributes: {
              password: 'Mot de passe'
            }
          }
        };
        // then
        server.inject(options, (res) => {
          expect(res.statusCode).to.equal(400);
          done();
        });
      });

    });

  });

});
