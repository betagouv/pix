import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Route | referential', function() {

  setupTest('route:referential', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  it('exists', function() {
    const route = this.subject();
    expect(route).to.be.ok;
  });
});
