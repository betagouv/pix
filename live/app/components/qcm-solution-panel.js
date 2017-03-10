import Ember from 'ember';
import labeledCheckboxes from 'pix-live/utils/labeled-checkboxes';
import valueAsArrayOfBoolean from 'pix-live/utils/value-as-array-of-boolean';
import proposalsAsArray from 'pix-live/utils/proposals-as-array';
import _ from 'pix-live/utils/lodash-custom';


export default Ember.Component.extend({
  answer: null,
  solution: null,
  challenge: null,

  solutionArray: Ember.computed('solution', function () {

    const solution = this.get('solution.value');

    if (_.isNonEmptyString(solution)) {
      return valueAsArrayOfBoolean(solution);
    }

    return [];

  }),

  labeledCheckboxes: Ember.computed('answer', function () {
    const answer = this.get('answer.value');
    if (_.isNonEmptyString(answer)) {
      const proposals =  this.get('challenge.proposals');
      const proposalsArray = proposalsAsArray(proposals);
      const answerArray = valueAsArrayOfBoolean(answer);
      const checkboxes = labeledCheckboxes(proposalsArray, answerArray);
      return checkboxes;
    }
    return [];
  }),
});
