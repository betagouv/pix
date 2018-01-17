import { expect } from 'chai';
import { run } from '@ember/runloop';
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

  describe('@numberOfFinishedTests', function() {
    it('should return the number of finished test without decimal ', function() {
      return run(() => {
        // given
        const model = this.subject();
        const numberOfEvaluatedCompetences = 5;
        const testsFinishedFromDB = 5.1;
        model.set('testsFinished', testsFinishedFromDB);
        // when
        const testsFinished = model.get('numberOfFinishedTests');
        // then
        expect(testsFinished).to.equal(numberOfEvaluatedCompetences);
      });
    });
  });
});
