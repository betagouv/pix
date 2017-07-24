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

  _uncheckAllRadioButtons() {
    this.$(':radio').prop('checked', false);
  },

  _checkAgainTheSelectedOption(index) {
    this.$(`:radio:nth(${index})`).prop('checked', true);
  },

  actions: {
    radioClicked(index) {
      this._uncheckAllRadioButtons();
      this._checkAgainTheSelectedOption(index);
      this.get('answerChanged')();
    }
  }

});
