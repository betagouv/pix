import Ember from 'ember';
import checkedProposals from 'pix-live/utils/checked-proposals';

function _uncheckAllRadioButtons() {
  this.$(':radio').prop('checked', false);
}

function _checkAgainTheSelectedOption(index) {
  this.$(`:radio:nth(${index})`).prop('checked', true);
}

export default Ember.Component.extend({

  tagName: 'div',

  labeledRadios: Ember.computed('proposals', 'answers', function() {
    return checkedProposals(this.get('proposals'), this.get('answers'));
  }),

  actions: {
    radioClicked: function(index) {
      _uncheckAllRadioButtons.call(this);
      _checkAgainTheSelectedOption.call(this, index);
      this.sendAction('answerChanged');
    }
  }

});
