import Ember from 'ember';

const QrocSolutionPanel = Ember.Component.extend({

  answer: null,
  solution: null,

  answerToDisplay: Ember.computed('answer', function () {
    const answer = this.get('answer.value');
    if (answer === '#ABAND#'){
      return 'Pas de réponse';
    }
<<<<<<< HEAD
    return this.get('answer.value');
=======
    return answer;
>>>>>>> dev
  }),

  solutionToDisplay: Ember.computed('solution.value', function () {
    const solutionVariants = this.get('solution.value');
<<<<<<< HEAD
    if (solutionVariants === null || solutionVariants === undefined){
      return '';
    }
    const solutionVariantsArray = solutionVariants.split('\n');
    const solution = solutionVariantsArray[0];
    return solution;

=======
    if (!solutionVariants){
      return '';
    }

    const solutionVariantsArray = solutionVariants.split('\n');
    const solution = solutionVariantsArray[0];
    return solution;
>>>>>>> dev
  })
});

QrocSolutionPanel.reopenClass({
  positionalParams: ['answer', 'solution']
});

export default QrocSolutionPanel;
