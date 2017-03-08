/* global jsyaml */
import Ember from 'ember';
import _ from 'lodash';

const QrocmIndSolutionPanel = Ember.Component.extend({

  answersAsObject: Ember.computed('answer.value',function () {
    const yamlAnswer = this.get('answer.value');
    const answersObject = jsyaml.safeLoad(yamlAnswer);
    return answersObject;
  }),

  solutionsAsObject: Ember.computed('solution.value', function(){
    const yamlSolution = this.get('solution.value');
    const solutionsObject = jsyaml.safeLoad(yamlSolution);
    return solutionsObject;
  }),

  labelsAsObject : Ember.computed('challenge.proposals', function(){
    const proposalsBrut = this.get('challenge.proposals').replace(/\n/g, '');
    const proposalsSplitted = proposalsBrut.split(/\$\{|}/).slice(0, -1);
    const labelsAsObject = {};
    proposalsSplitted.forEach((element, index) => {
      if (index % 2 != 0){
        labelsAsObject[element] = proposalsSplitted[index - 1];
      }
    });
    return labelsAsObject;
  }),

  dataToDisplay : Ember.computed('labelsAsObject', 'answersAsObject', 'solutionsAsObject', function() {
    const labelsAsObject = this.get('labelsAsObject');
    const answersAsObject = this.get('answersAsObject');
    const solutionsAsObject = this.get('solutionsAsObject');

    const keys = _.keys(labelsAsObject);
    const dataToDisplay = [];

    keys.forEach(function (element) {
      solutionsAsObject[element].forEach((solutionKey, index) => {
        solutionsAsObject[element][index] = solutionKey.toString();
      });

      _.each(answersAsObject, (value, key) => {
        if (answersAsObject[key] === ''){
          answersAsObject[key] = 'Pas de réponse';
        }
      });

      const isRightAnswer = _.includes(solutionsAsObject[element], answersAsObject[element]);
      const labelAnswerSolution = {
        label : labelsAsObject[element],
        answer : answersAsObject[element],
        solution : solutionsAsObject[element],
        rightAnswer : isRightAnswer
      };

      dataToDisplay.push(labelAnswerSolution);
    });
    return dataToDisplay;
  })

});

QrocmIndSolutionPanel.reopenClass({
  positionalParams: ['answer', 'solution', 'challenge']
});

export default QrocmIndSolutionPanel;

