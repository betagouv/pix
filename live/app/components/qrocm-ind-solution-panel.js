/* global jsyaml */
import Ember from 'ember';
import _ from 'lodash';

const QrocmIndSolutionPanel = Ember.Component.extend({

  answerObject: Ember.computed('answer',function () {
    const yamlAnswer = this.get('answer.value');
    const answers = jsyaml.safeLoad(yamlAnswer);

    return answers;
  }),

  solutionObject: Ember.computed('solution', function(){
    const yamlSolution = this.get('solution.value');
    const solution = jsyaml.safeLoad(yamlSolution);
    return solution;
  }),

  labelsObject : Ember.computed('challenge', function(){
    const proposalsBrut = this.get('challenge.proposals').replace(/\n/g, '');

    const proposalsSplitted = proposalsBrut.split(/\$\{|}/).slice(0, -1);

    const labelsObject = {};
    proposalsSplitted.forEach((element, index) => {
      if (index % 2 != 0){
        labelsObject[element] = proposalsSplitted[index - 1];
      }
    });

    return labelsObject;
  }),

  dataToDisplay : Ember.computed( 'solutionObject', function() {
    const labelsObject = this.get('labelsObject');
    const answerObject = this.get('answerObject');
    const solutionObject = this.get('solutionObject');

    const keys = _.keys(labelsObject);
    const dataToDisplay = [];

    keys.forEach(function (element) {
      const isRightAnswer = _.includes(solutionObject[element].toString(), answerObject[element]) || answerObject[element] === solutionObject[element];
      const labelAnswerSolution = {
        label : labelsObject[element],
        answer : answerObject[element],
        solution : solutionObject[element],
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

