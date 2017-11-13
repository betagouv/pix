import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Route | Certifications.ResultsRoute', function() {

  setupTest('route:certifications.results', {
    needs: ['service:current-routed-modal']
  });

  it('exists', function() {
    const route = this.subject();
    expect(route).to.be.ok;
  });

});
