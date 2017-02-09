import Ember from 'ember';

const FORM_CLOSED = 'FORM_CLOSED';
const FORM_OPENED= 'FORM_OPENED';
const FORM_SUBMITTED = 'FORM_SUBMITTED';

const FeedbackPanel = Ember.Component.extend({

  store: Ember.inject.service(),

  email: '',
  content: '',
  error: null,
  status: FORM_CLOSED,
  isFormClosed: Ember.computed.equal('status', FORM_CLOSED),
  isFormOpened: Ember.computed.equal('status', FORM_OPENED),

  actions: {
    openFeedbackForm() {
      this.set('status', FORM_OPENED);
    },

    async sendFeedback() {
      if (Ember.isEmpty(this.get('content').trim())) {
        Ember.Logger.info('AHHHHHHHH');
        this.set('error', 'Vous devez saisir un message.');
        return;
      }
      const store = this.get('store');
      const answer = this.get('answer');
      const assessment = await answer.get('assessment');
      const challenge = await answer.get('challenge');

      const feedback = store.createRecord('feedback', {
        email: this.get('email'),
        content: this.get('content'),
        assessment,
        challenge
      });
      feedback.save()
        .then(() => this.set('status', FORM_SUBMITTED))
        .catch(err => {
          Ember.Logger.error('GRrrrrrr !!!');
          Ember.Logger.error(err);
        });
    },

    cancelFeedback() {
      this.set('error', null);
      this.set('status', FORM_CLOSED);
    }
  }

});

FeedbackPanel.reopenClass({
  positionalParams: ['answer']
});

export default FeedbackPanel;
