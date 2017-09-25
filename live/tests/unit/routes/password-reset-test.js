import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Route | password reset', function() {
  setupTest('route:password-reset', {
    // Specify the other units that are required for this test.
    needs: ['service:current-routed-modal']
  });

  it('exists', function() {
    const route = this.subject();
    expect(route).to.be.ok;
  });
});
