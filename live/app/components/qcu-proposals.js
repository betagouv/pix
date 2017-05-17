import Ember from 'ember';
import labeledCheckboxes from 'pix-live/utils/labeled-checkboxes';
import proposalsAsArray from 'pix-live/utils/proposals-as-array';

function _uncheckAllRadioButtons() {
  this.$(':radio').prop('checked', false);
}

function _checkAgainTheSelectedOption(index) {
  this.$(`:radio:nth(${index})`).prop('checked', true);
}

export default Ember.Component.extend({

  labeledRadios: Ember.computed('proposals', 'answers', function() {
    const arrayOfProposals = proposalsAsArray(this.get('proposals'));
    return labeledCheckboxes(arrayOfProposals, this.get('answers'));
  }),

  actions: {
    radioClicked: function(index) {
      _uncheckAllRadioButtons.call(this);
      _checkAgainTheSelectedOption.call(this, index);
      this.sendAction('answerChanged');
    }
  }

});
