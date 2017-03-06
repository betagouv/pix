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

  validityObject: Ember.computed('answer',function () {
    const yamlAnswer = this.get('answer.value');
    const answers = jsyaml.safeLoad(yamlAnswer);
    console.log('answers ' + typeof answers + ' ' + JSON.stringify(answers));

    const yamlSolution = this.get('solution.value');
    const solution = jsyaml.safeLoad(yamlSolution);
    console.log('solution ' + typeof solution + ' ' + JSON.stringify(solution));

    const validityOfEachAnswer = {};

    _.each(answers, function (value, key) {
      console.log('key ' + typeof key + ' ' + JSON.stringify(key));
      if (solution[key].toString().includes(answers[key]) || answers[key] === solution[key]){
        validityOfEachAnswer[key] = true;
      } else {
        validityOfEachAnswer[key] = false;
      }

    });
    console.log('validityOfEachAnswer ' + JSON.stringify(validityOfEachAnswer));

    return validityOfEachAnswer;
  }),

});

QrocmIndSolutionPanel.reopenClass({
  positionalParams: ['answer', 'solution', 'challenge']
});

export default QrocmIndSolutionPanel;

