import {expect} from 'chai';
import {describe, it} from 'mocha';
import {setupTest} from 'ember-mocha';

describe('Unit | Route | inscription', function() {
  setupTest('route:inscription', {});

  it('exists', function() {
    const route = this.subject();
    expect(route).to.be.ok;
  });
});
