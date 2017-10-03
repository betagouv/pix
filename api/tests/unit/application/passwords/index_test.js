const { describe, it, before, after, beforeEach, afterEach, expect, sinon } = require('../../../test-helper');
const Hapi = require('hapi');
const passwordController = require('../../../../lib/application/passwords/password-controller');

describe('Unit | Router | Password router', () => {

  let server;

  beforeEach(() => {
    server = new Hapi.Server();
    server.connection({ port: null });
    server.register({ register: require('../../../../lib/application/passwords') });
  });

  afterEach(() => {
    server.stop();
  });

  describe('POST /api/password-reset-demands', () => {
    before(() => {
      sinon.stub(passwordController, 'resetDemand');
    });

    after(() => {
      passwordController.resetDemand.restore();
    });

    it('should exist', (done) => {
      // given
      passwordController.resetDemand.callsFake((request, reply) => {
        reply('ok');
      });

      // when
      server
        .inject({ method: 'POST', url: '/api/password-reset-demands' })
        .then((res) => {
          // then
          expect(res.statusCode).to.equal(200);
          done();
        });
    });
  });

  describe('GET /api/password-reset-demands/{temporaryKey}', () => {
    before(() => {
      sinon.stub(passwordController, 'checkResetDemand');
    });

    after(() => {
      passwordController.checkResetDemand.restore();
    });

    it('should exist', (done) => {
      // given
      passwordController.checkResetDemand.callsFake((request, reply) => {
        reply('ok');
      });

      // when
      server
        .inject({ method: 'GET', url: '/api/password-reset-demands/temporary_key' })
        .then((res) => {
          // then
          expect(res.statusCode).to.equal(200);
          done();
        });
    });
  });
});
