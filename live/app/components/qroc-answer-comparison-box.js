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
    const solutionVariants = this.get('solution.value');
    if (solutionVariants === null || solutionVariants === undefined){
      return '';
    }
    const solutionVariantsArray = solutionVariants.split('\n');
    const solution = solutionVariantsArray[0];
    return solution;

  }),


});

QROCAnswerComparisonBox.reopenClass({
  positionalParams: ['answer', 'solution']
});

export default QROCAnswerComparisonBox;
