const {expect, sinon} = require('../../../test-helper');
const Hapi = require('hapi');
const ToolsController = require('../../../../lib/application/tools/tools-controller');

describe('Unit | Router | tools-router', () => {

  let server;

  beforeEach(() => {
    server = new Hapi.Server();
    server.connection({port: null});
    server.register({register: require('../../../../lib/application/tools')});
  });

  function expectRouteToExist(routeOptions, done) {
    server.inject(routeOptions, (res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  }

  describe('DELETE /api/tools/cache', function() {
    before(() => {
      sinon.stub(ToolsController, 'removeCacheEntry', (request, reply) => reply('ok'));
    });

    after(() => {
      ToolsController.removeCacheEntry.restore();
    });

    it('should exist', (done) => {
      return expectRouteToExist({method: 'DELETE', url: '/api/tools/cache'}, done);
    });
  });

});
