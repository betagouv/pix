import ChallengeItemGeneric from './challenge-item-generic';

const ChallengeItemQcm = ChallengeItemGeneric.extend({

  _hasError: function () {
    return !(this.get('answers.value').length >= 1);
  },

  _getAnswerValue() {
    return this.$('input:checkbox:checked').map(function () {return this.name;}).get().join(',');
  },

  _getErrorMessage() {
    return 'Pour valider, sélectionner au moins une réponse. Sinon, passer.';
  },

  actions: {
    updateAnswer: function() {
      this.set('errorMessage', null);
    }
  }

});

export default ChallengeItemQcm;
