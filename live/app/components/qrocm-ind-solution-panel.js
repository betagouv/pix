import Ember from 'ember';

const QrocmIndSolutionPanel = Ember.Component.extend({

  answer: null,
  solution: null,
  challenge: null,

  labelsInArray : Ember.computed('challenge', function() {
    const labels = this.get('challenge.proposals');
    const labelsInArray = labels.replace(/\$\{.+}/g, '').split(/\n\n/); //{num1}\n\n ou {num3}\n\n (convention d'ecriture dans AirTable)
    labelsInArray.forEach((label, index)=>{
      if (label === ''){
        labelsInArray.splice(index);
      }
    });
    return labelsInArray;
  }),

  answersToDisplay: Ember.computed('answer', function () {
    const answer = this.get('answer.value');

    if (answer === '#ABAND#'){
      return 'Pas de réponse';
    }
    return this.get('answer.value');
  }),

  solutionToDisplay : Ember.computed('', function () {
    return null;
  })

});

QrocmIndSolutionPanel.reopenClass({
  positionalParams: ['answer', 'solution', 'challenge']
});

export default QrocmIndSolutionPanel;

