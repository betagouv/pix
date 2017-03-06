/* global jsyaml */
import Ember from 'ember';
import _ from 'lodash';

const QrocmIndSolutionPanel = Ember.Component.extend({

  labelsInArray: Ember.computed('challenge', function () {
    const labels = this.get('challenge.proposals');
    const labelsInArray = labels.replace(/\$\{.+}/g, '').split(/\n\n/); //{num1}\n\n ou {num3}\n\n (convention d'ecriture dans AirTable)
    labelsInArray.forEach((label, index) => {
      if (label === '') {
        labelsInArray.splice(index);
      }
    });
    return labelsInArray;
  }),

  dataToDisplay: Ember.computed('answer', 'solution', 'challenge', function () {
    //Get interesting value
    const yamlAnswer = this.get('answer.value');
    const yamlSolution = this.get('solution.value');
    let yamlChallengeLabels = this.get('challenge.proposals');
    yamlChallengeLabels = yamlChallengeLabels.replace(/\$\{/g, '').replace(/}/g, '').replace(/- /g, '');

    //Transform yaml to object
    const _answer = jsyaml.safeLoad(yamlAnswer);
    const _solution = jsyaml.safeLoad(yamlSolution);
    const challengeLabelsLoadInBadOrder = jsyaml.safeLoad(yamlChallengeLabels);

    const challengeLabels = _.invert(challengeLabelsLoadInBadOrder);

    //Take keys (a key for each input)
    const proposalsInput = _.keys(challengeLabels);
    const dataToDisplay = [];

    proposalsInput.forEach((keyWord) => {
      const answerToDisplay = _answer[keyWord];
      const solutionToDisplay = _solution[keyWord];
      const labelToDisplay = challengeLabels[keyWord];
      const rightAnswer = (answerToDisplay === _solution[keyWord] || _.contains(_solution[keyWord].toString(), _answer[keyWord]));

      const proposalData = {
        label: labelToDisplay,
        answer: answerToDisplay,
        solution: solutionToDisplay,
        rightAnswer: rightAnswer
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

