import Component from '@ember/component';
import { computed } from '@ember/object';

const pendingValue = 'pending';
export default Component.extend({

  classNames: ['challenge-actions'],

  challengeSkipped: null, // action
  answerValidated: null, // action

  _validateButtonStatus: 'enable', // enable, pending, offline
  isValidateButtonEnable: computed.equal('_validateButtonStatus', 'enable'),
  isValidateButtonPending: computed.equal('_validateButtonStatus', pendingValue),
  isValidateButtonOffline: computed.equal('_validateButtonStatus', 'offline'),

  didUpdateAttrs() {
    this._super(...arguments);
    this.set('_validateButtonStatus', 'enable');
  },

  actions: {

    skipChallenge() {
      this.set('_validateButtonStatus', pendingValue);
      this.get('challengeSkipped')();
    },

    validateAnswer() {
      this.set('_validateButtonStatus', pendingValue);
      this.get('answerValidated')()
        .catch(() => this.set('_validateButtonStatus', 'enable'));
    }
  }

});
