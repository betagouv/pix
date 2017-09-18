const { describe, it, before, after, beforeEach, expect, sinon } = require('../../../test-helper');
const Hapi = require('hapi');

const snapshotController = require('../../../../lib/application/snapshots/snapshot-controller');

describe('Unit | Router | Password router', () => {

  let server;

  beforeEach(() => {
    server = new Hapi.Server();
    server.connection({ port: null });
    server.register({ register: require('../../../../lib/application/passwords') });
  });

});
