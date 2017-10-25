import Ember from 'ember';
import labeledCheckboxes from 'pix-live/utils/labeled-checkboxes';
import proposalsAsArray from 'pix-live/utils/proposals-as-array';
import valueAsArrayOfBoolean from 'pix-live/utils/value-as-array-of-boolean';

export default Ember.Component.extend({
  // Input
  proposals: null,
  answer:    null,

  // Action
  answerChanged: null,

  labeledRadios: Ember.computed('proposals', 'answer.value', function() {
    const arrayOfProposals = proposalsAsArray(this.get('proposals'));
    return labeledCheckboxes(arrayOfProposals, valueAsArrayOfBoolean(this.get('answer.value')));
  }),

  // TODO: use bound properties instead of inspecting the DOM
  getAnswerValueFromInputsState() {
    return this.$('input:radio:checked').map(function() {
      return this.value;
    }).get().join('');
  },

  actions: {
    inputChanged() {
      const answerValue = this.getAnswerValueFromInputsState();
      this.get('answerChanged')(answerValue);
    }
  }
});
