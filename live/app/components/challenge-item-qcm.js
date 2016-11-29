import ChallengeItemGeneric from './challenge-item-generic';

const ChallengeItemQcm = ChallengeItemGeneric.extend({

  _hasError: function () {
    return !(this.get('answers.value').length >= 1);
  },

  _getAnswerValue() {
    return this.get('answers.value');
  },

  _getErrorMessage() {
    return 'Pour valider, sélectionner au moins une réponse. Sinon, passer.';
  },

  actions: {
    updateAnswer: function(answerValue) {
      this.set('errorMessage', null);
      this.set('answers.value', answerValue);
    }
  }

});

export default ChallengeItemQcm;
