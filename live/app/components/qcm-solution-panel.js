import Ember from 'ember';
import labeledCheckboxes from 'pix-live/utils/labeled-checkboxes';

export default Ember.Component.extend({
  answer: null,
  solution: null,
  challenge: null,

  solutionArray: Ember.computed('solution', function () {
    return this.get('solution').get('_valueAsArrayOfBoolean');
  }),

  labeledCheckboxes: Ember.computed('answer', function () {
    return labeledCheckboxes(this.get('challenge').get('_proposalsAsArray'), this.get('answer').get('_valueAsArrayOfBoolean'));
  }),
});
