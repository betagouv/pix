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
    const SolutionVariants = this.get('solution.value').split("\n");
    const solution = SolutionVariants[0];
    return solution;
  }),


});

QROCAnswerComparisonBox.reopenClass({
  positionalParams: ['answer', 'solution']
});

export default QROCAnswerComparisonBox;
