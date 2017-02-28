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
    const yamlAnswer = this.get('answer.value');
    const yamlSolution = this.get('solution.value');
    let yamlChallengeLabels = this.get('challenge.proposals');//.replace(/\$\{/g, '').replace(/}/g, '');
    yamlChallengeLabels = yamlChallengeLabels.replace(/\$\{/g, '').replace(/}/g, '');

    const _answer = jsyaml.safeLoad(yamlAnswer);
    const _solution = jsyaml.safeLoad(yamlSolution);
    const challengeLabelsLoadInBadOrder = jsyaml.safeLoad(yamlChallengeLabels);
    const challengeLabels = _.invert(challengeLabelsLoadInBadOrder);

    const proposalsInput = _.keys(challengeLabels);
    const dataToDisplay = [];

    proposalsInput.forEach((keyWord) => {
      const answerToDisplay = _answer[keyWord].toString();
      const solutionToDisplay = _solution[keyWord];
      const labelToDisplay = challengeLabels[keyWord];
      const rightAnswer = answerToDisplay === _solution[keyWord] || _.contains(_solution[keyWord], _answer[keyWord]);

      const proposalData = {
        label: labelToDisplay,
        answer: answerToDisplay,
        solution: solutionToDisplay,
        rightAnswer: rightAnswer
      };

      dataToDisplay.push(proposalData);
    });

    return dataToDisplay;
  }),

  /*dataToDisplay: Ember.computed('answer', 'solution', 'challenge', function () {
   const yamlAnswer = this.get('answer.value');
   const yamlSolution = this.get('solution.value');
   const yamlChallengeLabels = this.get('challenge.proposals').replace(/\$\{/g, '').replace(/}/g, '');

   const _answer = jsyaml.safeLoad(yamlAnswer);
   const _solution = jsyaml.safeLoad(yamlSolution);
   const challengeLabelsLoadInBadOrder = jsyaml.safeLoad(yamlChallengeLabels);
   const challengeLabels = _.invert(challengeLabelsLoadInBadOrder);

   const ProposalsInput = _.keys(challengeLabels);
   const dataToDisplay = [];

   /!*ProposalsInput.forEach(function(keyWord) {
   const answerToDisplay = _answer[keyWord].toString();
   const solutionToDisplay = _solution[keyWord];
   const labelToDisplay = challengeLabels[keyWord];
   const rightAnswer = (answerToDisplay === _solution[keyWord] || _.contains(_solution[keyWord], _answer[keyWord]));
   });*!/

   /!*return [{ 'label': 'Clé USB', 'answer': '1', 'solution': [2], 'rightAnswer': false },
   { 'label': 'Carte mémoire (SD)', 'answer': '2', 'solution': [1], 'rightAnswer': false }
   ];*!/
})*/
});

QrocmIndSolutionPanel.reopenClass({
  positionalParams: ['answer', 'solution', 'challenge']
});

export default QrocmIndSolutionPanel;

