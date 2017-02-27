/* global jsyaml */
import Ember from 'ember';
import _ from 'lodash';

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

  dataToDisplay: Ember.computed('answer', 'solution', function () {
    const yamlAnswer = this.get('answer.value');
    const yamlSolution = this.get('solution.value');
    const yamlChallengeLabels = this.get('challenge.proposals').replace(/\$\{/g, '').replace(/}/g, '');

    const answer = jsyaml.safeLoad(yamlAnswer);
    const solution = jsyaml.safeLoad(yamlSolution);
    const challengeLabelsLoadInBadOrder = jsyaml.safeLoad(yamlChallengeLabels);
    const challengeLabels = _.invert(challengeLabelsLoadInBadOrder);

    const ProposalsInput = _.keys(challengeLabels);
    const dataToDisplay = [];

    ProposalsInput.forEach((keyWord) => {
      const answerToDisplay = answer[keyWord];
      const solutionToDisplay = solution[keyWord][0];
      const labelToDisplay = challengeLabels[keyWord];

      const proposalData = {
        label : labelToDisplay,
        answer : answerToDisplay,
        solution : solutionToDisplay
      };

      dataToDisplay.push(proposalData);
    });

    return dataToDisplay;
  })

});

QrocmIndSolutionPanel.reopenClass({
  positionalParams: ['answer', 'solution', 'challenge']
});

export default QrocmIndSolutionPanel;

