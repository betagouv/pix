import Ember from 'ember';
import createProposalAnswerTuples from 'pix-live/utils/labeled-checkboxes';
import proposalsAsArray from 'pix-live/utils/proposals-as-array';
import valueAsArrayOfBoolean from 'pix-live/utils/value-as-array-of-boolean';

export default Ember.Component.extend({
  // Input
  proposals: null,
  answer:    null,

  // Action
  answerChanged: null,

  labeledCheckboxes: Ember.computed('proposals', 'answer.value', function() {
    const arrayOfProposals = proposalsAsArray(this.get('proposals'));
    const arrayOfBoolean = valueAsArrayOfBoolean(this.get('answer.value'));

    return createProposalAnswerTuples(arrayOfProposals, arrayOfBoolean);
  }),

  // TODO: use bound properties instead of inspecting the DOM
  getAnswerValueFromInputsState() {
    return this.$('input[type=checkbox][id^=checkbox_]:checked').map(function() {return this.name; }).get().join(',');
  },

  actions: {
    inputChanged() {
      const answerValue = this.getAnswerValueFromInputsState();
      this.get('answerChanged')(answerValue);
    }
  }
});
