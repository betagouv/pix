import Ember from 'ember';
import labeledCheckboxes from 'pix-live/utils/labeled-checkboxes';
import valueAsArrayOfBoolean from 'pix-live/utils/value-as-array-of-boolean';
import proposalsAsArray from 'pix-live/utils/proposals-as-array';

export default Ember.Component.extend({
  answer: null,
  solution: null,
  challenge: null,

  solutionArray: Ember.computed('solution', function () {
    console.log(' - - - - this.get(solution) ' + this.get('solution'));
    if (_.isNonEmptyArray(this.get('solution'))) {
      return this.get('solution').get('_valueAsArrayOfBoolean');
    }
    return [];
  }),

  labeledCheckboxes: Ember.computed('answer', function () {
    // if (_.isNonEmptyString(this.get('answer'))) {
/*      console.log(' - - - - this.get(answer) ' + this.get('answer'));
    console.log(' - - - - this.get(challenge) ' + this.get('challenge'));
    console.log(' - - - - this.get(challenge.proposals) ' + this.get('challenge.proposals'));

    console.log(' - - - - this.get(answerVal) ' + this.get('answer.value'));
      console.log(' - - - - this.get(ch_propasarray) ' + this.get('challenge').get('_proposalsAsArray'));
      console.log(' - - - - this.get(answer_valueAsArrayOfBoolean) ' + this.get('answer').get('_valueAsArrayOfBoolean'));*/

    const proposals =  this.get('challenge.proposals');
    // const proposalsA =  this.get('challenge.proposals');

      return labeledCheckboxes(proposalsAsArray(this.get('challenge.proposals')), valueAsArrayOfBoolean(this.get('answer')));
    // }
    // return [];
  }),
});
