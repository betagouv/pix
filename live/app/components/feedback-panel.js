import Ember from 'ember';

const FORM_CLOSED = 'FORM_CLOSED';
const FORM_OPENED= 'FORM_OPENED';
const FORM_SUBMITTED = 'FORM_SUBMITTED';

const FeedbackPanel = Ember.Component.extend({

  store: Ember.inject.service(),
  status: FORM_CLOSED,
  isFormClosed: Ember.computed.equal('status', FORM_CLOSED),
  isFormOpened: Ember.computed.equal('status', FORM_OPENED),

  actions: {
    openFeedbackForm() {
      this.set('status', FORM_OPENED);
    },

    sendFeedback() {
      const store = this.get('store');
      const feedback = store.createRecord('feedback', {
        email: this.get('email'),
        content: this.get('content')
      });
      feedback.save().then(() => this.set('status', FORM_SUBMITTED));
    },

    cancelFeedback() {
      this.set('status', FORM_CLOSED);
    }
  }

});

FeedbackPanel.reopenClass({
  positionalParams: ['assessment', 'challenge']
});

export default FeedbackPanel;
