import { run } from '@ember/runloop';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupModelTest } from 'ember-mocha';

describe('Unit | Model | snapshot', function() {
  setupModelTest('snapshot', {
    // Specify the other units that are required for this test.
    needs: ['model:organization']
  });

  // Replace this with your real tests.
  it('exists', function() {
    const model = this.subject();
    // var store = this.store();
    expect(model).to.be.ok;
  });

  describe('@testsFinished', function() {
    it('should return the number of finished test ', function() {
      return run(() => {
        // given
        const model = this.subject();
        const TOTAL_COMPETENCES = 16;
        const numberOfEvaluatedCompetences = 5;
        const completionPercentage =  Math.round((numberOfEvaluatedCompetences / TOTAL_COMPETENCES) * 100);
        model.set('completionPercentage', completionPercentage);

        // when
        const testsFinished = model.get('testsFinished');

        // then
        expect(testsFinished).to.equal(numberOfEvaluatedCompetences);
      });

    });
  });
});
