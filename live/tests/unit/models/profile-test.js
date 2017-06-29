import {expect} from 'chai';
import {describe, it} from 'mocha';
import {setupModelTest} from 'ember-mocha';

describe('Unit | Model | profile', function() {
  setupModelTest('profile', {
    needs: ['model:user', 'model:competence']
  });

  it('exists', function() {
    const model = this.subject();
    expect(model).to.be.ok;
  });
});
