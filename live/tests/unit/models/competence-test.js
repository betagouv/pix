import {expect} from 'chai';
import {describe, it} from 'mocha';
import {setupModelTest} from 'ember-mocha';

describe('Unit | Model | competence', function() {
  setupModelTest('competence', {
    needs: ['model:area']
  });

  it('exists', function() {
    const model = this.subject();
    expect(model).to.be.ok;
  });
});
