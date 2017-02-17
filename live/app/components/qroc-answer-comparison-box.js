import Ember from 'ember';

const QROCAnswerComparisonBox = Ember.Component.extend({

  answer: null,
  solution: null,


  answerToDisplay: Ember.computed('answer', function () {
    const answer = this.get('answer.value');
    if (answer === '#ABAND#'){
      return '';
    }
    return this.get('answer.value');
  }),

  solutionToDisplay: Ember.computed('solution.value', function () {
    const solution = this.get('solution.value');
    return solution;
  }),

});

QROCAnswerComparisonBox.reopenClass({
  positionalParams: ['answer', 'solution']
});

export default QROCAnswerComparisonBox;
