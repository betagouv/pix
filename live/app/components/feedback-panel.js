import Ember from 'ember';

const FORM_CLOSED = 'FORM_CLOSED';
const FORM_OPENED= 'FORM_OPENED';
const FORM_SUBMITTED = 'FORM_SUBMITTED';

export default Ember.Component.extend({

  status: FORM_CLOSED,
  isFormClosed: Ember.computed.equal('status', FORM_CLOSED),
  isFormOpened: Ember.computed.equal('status', FORM_OPENED),

  actions: {
    openFeedbackForm() {
      this.set('status', FORM_OPENED);
    },

    sendFeedback() {
      this.set('status', FORM_SUBMITTED);
    },

    cancelFeedback() {
      this.set('status', FORM_CLOSED);
    }
  }

});
