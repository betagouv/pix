import ChallengeItemGeneric from './challenge-item-generic';

export default ChallengeItemGeneric.extend({

  isValid() {
    return this.get('answer.value');
  },

  getErrorMessage() {
    return 'Pour valider, sélectionner au moins une réponse. Sinon, passer.';
  }
});
