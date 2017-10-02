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

  describe('POST /api/password-resets', () => {
    before(() => {
      sinon.stub(passwordController, 'createResetDemand');
    });

    after(() => {
      passwordController.createResetDemand.restore();
    });

    it('should exist', () => {
      // given
      passwordController.createResetDemand.callsFake((request, reply) => {
        reply('ok');
      });

      const options = {
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

      // when
      return server
        .inject(options)
        .then((res) => {
          // then
          expect(res.statusCode).to.equal(200);
        });
    });

  });

});
