import Ember from 'ember';
import _ from 'lodash/lodash';
import ChallengeItemGeneric from './challenge-item-generic';



const ChallengeItemQrocm = ChallengeItemGeneric.extend({



  _getAnswerValue() {
    const answers = this.get('answers');
    return _.pairs(answers).map(([key, value]) => `${key} = "${value}"`).join(', ');
  },

  _getErrorMessage() {
    return "Pour valider, saisir au moins une réponse. Sinon, passer.";
  }

});

export default ChallengeItemQrocm;
