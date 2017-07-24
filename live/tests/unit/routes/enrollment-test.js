import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Route | enrollment', function() {
  setupTest('route:enrollment', {
    needs: ['service:current-routed-modal']
  });

  it('exists', function() {
    const route = this.subject();
    expect(route).to.be.ok;
  });
});
