import Ember from 'ember';

const QrocmSolutionPanel = Ember.Component.extend({

  answer: null,
  solution: null,
  challenge: null,

  labelsAsArray : Ember.computed('challenge', function() {
    const labels = this.get('challenge.proposals');
    //let labelsInArray = labels.split('\n\n');
    const labelsInArray = labels.split(/{*}\n\n/);
    return labelsInArray;
  })

});

QrocmSolutionPanel.reopenClass({
  positionalParams: ['answer', 'solution', 'challenge']
});

export default QrocmSolutionPanel;

