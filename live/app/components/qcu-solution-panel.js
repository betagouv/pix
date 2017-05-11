import Ember from 'ember';
import labeledCheckboxes from 'pix-live/utils/labeled-checkboxes';
import answerAsBooleans from 'pix-live/utils/answer-as-booleans';
import proposalsAsStrings from 'pix-live/utils/proposals-as-strings';
import _ from 'pix-live/utils/lodash-custom';


export default Ember.Component.extend({
  classNames: ['qcu-solution-panel'],
  answer: null,
  solution: null,
  challenge: null,

  solutionArray: Ember.computed('solution', function () {
    const solution = this.get('solution.value');
    return _.isNonEmptyString(solution) ? answerAsBooleans(solution) : [];
  }),

  labeledRadios: Ember.computed('answer', function () {
    const answer = this.get('answer.value');
    let radiosArray = [];
    if (_.isNonEmptyString(answer)) {
      const proposals = this.get('challenge.proposals');
      const proposalsArray = proposalsAsStrings(proposals);
      const answerArray = answerAsBooleans(answer);
      radiosArray = labeledCheckboxes(proposalsArray, answerArray);
    }

    return radiosArray;
  })
});
