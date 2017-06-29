const {expect, sinon} = require('../../../test-helper');
const Hapi = require('hapi');
const ToolsController = require('../../../../lib/application/cache/cache-controller');

describe('Unit | Router | cache-router', () => {

  let server;

  beforeEach(() => {
    server = new Hapi.Server();
    server.connection({port: null});
    server.register({register: require('../../../../lib/application/cache')});
  });

  function expectRouteToExist(routeOptions, done) {
    server.inject(routeOptions, (res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  }

  describe('DELETE /api/cache', function() {
    before(() => {
      sinon.stub(ToolsController, 'removeCacheEntry', (request, reply) => reply('ok'));
    });

    after(() => {
      ToolsController.removeCacheEntry.restore();
    });

    it('should exist', (done) => {
      return expectRouteToExist({method: 'DELETE', url: '/api/cache'}, done);
    });
  });

});
