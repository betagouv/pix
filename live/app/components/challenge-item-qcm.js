import Ember from 'ember';
import _ from 'lodash/lodash';
import ChallengeItemGeneric from './challenge-item-generic';



const ChallengeItemQcm = ChallengeItemGeneric.extend({

  _hasError: function () {
    return !(this.get('answers.length') >= 1);
  },

  _getAnswerValue() {
    const answers = this.get('answers');
    return `${answers.map((answer) => parseInt(answer, 10) + 1).join(', ')}`;
  },

  _getErrorMessage() {
    return "Pour valider, sélectionner une réponse. Sinon, passer.";
  },

  actions: {


  }

});

export default ChallengeItemQcm;
