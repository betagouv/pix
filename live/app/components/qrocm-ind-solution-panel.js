import Ember from 'ember';

const QrocmIndSolutionPanel = Ember.Component.extend({

  answer: null,
  solution: null,
  challenge: null,

  labelsAsArray : Ember.computed('challenge', function() {
    const labels = this.get('challenge.proposals');
    let labelsInArray = labels.split(/\\n\\n/); //{num1}\n\n ou {num3}\n\n (convention d'ecriture dans AirTable)
    labelsInArray.forEach((label) => {
      label.replace(/\$\{.+}/, '');
    });
    console.log(labelsInArray);
    return labelsInArray;
  })

});

QrocmIndSolutionPanel.reopenClass({
  positionalParams: ['answer', 'solution', 'challenge']
});

export default QrocmIndSolutionPanel;

