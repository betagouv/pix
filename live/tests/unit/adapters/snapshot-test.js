import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';
import sinon from 'sinon';

describe('Unit | Adapter | snapshot', function() {
  setupTest('adapter:snapshot', {
    needs: ['service:session']
  });

  let adapter;

  beforeEach(function() {
    adapter = this.subject();
    adapter.ajax = sinon.stub().resolves();
  });

  it('exists', function() {
    expect(adapter).to.be.ok;
  });

  it('should return a resolved promise', function(done) {
    // when
    const promise = adapter.findRecord('snapshot', { organizationId: 1 });
    // then
    promise.then(done);
  });

  it('should call GET /api/organizations/:id/snapshots', function() {

    // when
    adapter.findRecord('snapshot', { organizationId: 1 });

    // then
    sinon.assert.calledWith(adapter.ajax, 'http://localhost:3000/api/organizations/1/snapshots');
  });
});
