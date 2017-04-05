import Ember from 'ember';
import checkedProposals from 'pix-live/utils/checked-proposals';

export default Ember.Component.extend({

  checkedProposals: Ember.computed('proposals', 'answers', function() {
    return checkedProposals(this.get('proposals'), this.get('answers'));
  }),

  actions: {
    checkboxClicked: function() {
      this.sendAction('answerChanged');
    }
  }

});
