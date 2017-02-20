import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe.skip('Unit | Component | qroc-answer-comparison-box', function () {

  setupTest('component:qroc-answer-comparison-box', {});

  describe('#answerToDisplay', function () {

    it('should return an empty string if the answer is #ABAND#', function () {
      // given
      const component = this.subject();
      component.set('answer.value', '#ABAND#');

      // when
      const answerToDisplay = component.get('answerToDisplay');

      // then
      expect(answerToDisplay).to.equal('');
    });
  });

  describe('#solutionToDisplay', function () {

    it('', function () {
      // given

      // when

      // then

    });
  });
});
