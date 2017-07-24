import Ember from 'ember';
import createProposalAnswerTuples from 'pix-live/utils/labeled-checkboxes';
import proposalsAsArray from 'pix-live/utils/proposals-as-array';
import valueAsArrayOfBoolean from 'pix-live/utils/value-as-array-of-boolean';

export default Ember.Component.extend({

  answersValue: null,
  proposals: null,
  answerChanged: null,

  labeledCheckboxes: Ember.computed('proposals', 'answersValue', function() {
    const arrayOfProposals = proposalsAsArray(this.get('proposals'));
    const arrayOfBoolean = valueAsArrayOfBoolean(this.get('answersValue'));

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
