const { expect, sinon } = require('../../../test-helper');
const Hapi = require('hapi');
const AuthenticationController = require('../../../../lib/application/authentication/authentication-controller');

describe('Unit | Router | authentication-router', () => {

  let server;

  beforeEach(() => {
    // stub dependencies
    sinon.stub(AuthenticationController, 'save').callsFake((request, reply) => reply('ok'));
    sinon.stub(AuthenticationController, 'authenticate').callsFake((request, reply) => reply('ok'));

    // configure and start server
    server = new Hapi.Server();
    server.connection({ port: null });
    server.register({ register: require('../../../../lib/application/authentication') });
  });

  afterEach(() => {
    server.stop();
    AuthenticationController.save.restore();
    AuthenticationController.authenticate.restore();
  });

  describe('POST /api/authentications', () => {

    it('should exist', (done) => {
      return server.inject({ method: 'POST', url: '/api/authentications' }, (res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe('POST /api/token', () => {

    it('should exist', (done) => {
      return server.inject({ method: 'POST', url: '/api/token' }, (res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

});
