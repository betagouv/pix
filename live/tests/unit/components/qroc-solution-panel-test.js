import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Component | qroc-solution-panel', function () {

  setupTest('component:qroc-solution-panel', {});

  describe('#answerToDisplay', function () {

    it('should return PAS DE REPONSE if the answer is #ABAND#', function () {
      // given
      const answer = {
        value:'#ABAND#'
      };
      const component = this.subject();
      component.set('answer', answer);
      // when
      const answerToDisplay = component.get('answerToDisplay');
      // then
      expect(answerToDisplay).to.equal('Pas de réponse');
    });

    it('should return the answer if the answer is not #ABAND#', function () {
      // given
      const answer = {
        value:'La Reponse B'
      };
      const component = this.subject();
      component.set('answer', answer);
      // when
      const answerToDisplay = component.get('answerToDisplay');
      // then
      expect(answerToDisplay).to.equal('La Reponse B');
    });
  });

  describe('#solutionToDisplay', function () {

  });
});
