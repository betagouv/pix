import ChallengeItemGeneric from './challenge-item-generic';
import _ from 'lodash';

const ChallengeItemQroc = ChallengeItemGeneric.extend({

  isValid() {
    return !_.isEmpty(this.get('answer.value'));
  },

  getErrorMessage() {
    return 'Pour valider, saisir une réponse. Sinon, passer.';
  },

  actions: {
  }

});

export default ChallengeItemQroc;
