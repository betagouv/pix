import Ember from 'ember';

const QrocmIndSolutionPanel = Ember.Component.extend({

  answer: null,
  solution: null,
  challenge: null,

  labelsAsArray : Ember.computed('challenge', function() {
    const labels = this.get('challenge.proposals');
    const labelsInArray = labels.split('\n\n');
    return labelsInArray;
  })

});

QrocmIndSolutionPanel.reopenClass({
  positionalParams: ['answer', 'solution', 'challenge']
});

export default QrocmIndSolutionPanel;

