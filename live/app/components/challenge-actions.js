import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  classNames: ['challenge-actions'],

  challengeSkipped: null, // action
  answerValidated: null, // action

  _validateButtonStatus: 'enable', // enable, pending, offline
  isValidateButtonEnable: computed.equal('_validateButtonStatus', 'enable'),
  isValidateButtonPending: computed.equal('_validateButtonStatus', 'pending'),
  isValidateButtonOffline: computed.equal('_validateButtonStatus', 'offline'),

  actions: {

    skipChallenge() {
      this.get('challengeSkipped')();
    },

    validateAnswer() {
      this.set('_validateButtonStatus', 'pending');

      const promise = this.get('answerValidated')();
      promise
        .then(() => {
          this.set('_validateButtonStatus', 'enable');
        })
        .catch(() => {
          this.set('_validateButtonStatus', 'enable');
        });
    }
  }

});
