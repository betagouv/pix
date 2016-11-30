import Ember from 'ember';
import ChallengeItemGeneric from './challenge-item-generic';

const ChallengeItemQroc = ChallengeItemGeneric.extend({

  _hasError: function () {
    const answer = this._getAnswerValue();
    return (Ember.isEmpty(answer) || answer.length < 1 || answer.every(Ember.isBlank));
  },

  // XXX : data is extracted from DOM of child component, breaking child encapsulation.
  // This is not "the Ember way", however it makes code easier to read,
  // and moreover, is a much more robust solution when you need to test it properly.
  _getAnswerValue() {
    return this.$('input[data-uid="qroc-proposal-uid"]').val();
  },

  _getErrorMessage() {
    return 'Pour valider, saisir une réponse. Sinon, passer.';
  },

  actions: {

    inputChanged() {
      this.set('errorMessage', null);
    }
  }

});

export default ChallengeItemQroc;
