/* global jsyaml */
import Ember from 'ember';
import _ from 'lodash';

const QrocmIndSolutionPanel = Ember.Component.extend({

  answerAsObject: Ember.computed('answer.value',function () {
    const yamlAnswer = this.get('answer.value');
    const answersObject = jsyaml.safeLoad(yamlAnswer);
    return answersObject;
  }),

  solutionAsObject: Ember.computed('solution.value', function(){
    const yamlSolution = this.get('solution.value');
    const solutionObject = jsyaml.safeLoad(yamlSolution);
    return solutionObject;
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

  dataToDisplay : Ember.computed('labelsAsObject', 'answerAsObject', 'solutionAsObject', function() {
    const labelsAsObject = this.get('labelsAsObject');
    const answerAsObject = this.get('answerAsObject');
    const solutionAsObject = this.get('solutionAsObject');

    const keys = _.keys(labelsAsObject);
    const dataToDisplay = [];

    keys.forEach(function (element) {
      solutionAsObject[element].forEach((solutionKey, index) => {
        solutionAsObject[element][index] = solutionKey.toString();
      });

      const isRightAnswer = _.includes(solutionAsObject[element], answerAsObject[element]);
      const labelAnswerSolution = {
        label : labelsAsObject[element],
        answer : answerAsObject[element],
        solution : solutionAsObject[element],
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

