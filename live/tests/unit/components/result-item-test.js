import {expect} from 'chai';
import {describe, it} from 'mocha';
import {setupTest} from 'ember-mocha';

const undefinedAnswer = 'undefined';
const answerWithEmptyResult = {
  value: '',
  result: '',
  name : 'answerWithEmptyResult',
};
const answerWithUndefinedResult = {
  value: '',
  result: undefined,
  name : 'answerWithUndefinedResult',
};
const answerWithNullResult = {
  value: '',
  result: null,
  name : 'answerWithNullResult',
};
const answerWithOkResult = {
  value: '',
  result: 'ok'
};
const answerWithRandomResult = {
  value: '',
  result: 'RANDOM_RESULT'
};

describe('Unit | Component | result-item-component', function () {
  setupTest('component:result-item', {});

  let component;

  function initComponent() {
    component = this.subject();
  }

  describe('#resultItemContent Computed property - undefined case', function () {
    [
      undefinedAnswer,
      answerWithEmptyResult,
      answerWithUndefinedResult,
      answerWithNullResult
    ].forEach(function (answer) {
      it(`should returns false when answer provided is: ${answer.name}`, function () {
        // given
        initComponent.call(this);
        // when
        component.set('answer', answer);
        // then
        expect(component.get('resultItemContent')).to.be.undefined;
      });
    });

  });

  describe('#resultItemContent Computed property - defined case', function () {
    it('should returns true when answer provided with result ok', function () {
      // given
      initComponent.call(this);
      // when
      component.set('answer', answerWithOkResult);
      // then
      expect(component.get('resultItemContent.title')).to.equal('Réponse correcte');
    });

    it('should returns true when answer provided with result uncommon value by not null or undefined ', function () {
      // given
      initComponent.call(this);
      // when
      component.set('answer', answerWithRandomResult);
      // then
      expect(component.get('resultItemContent.title')).to.equal('Correction automatique en cours de développement ;)');
    });
  });

});
