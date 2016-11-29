import Ember from 'ember';
import _ from 'lodash/lodash';
import ChallengeItemGeneric from './challenge-item-generic';

const ChallengeItemQcm = ChallengeItemGeneric.extend({

  _hasError: function () {
    return !(this.get('answerValue.length') >= 1);
  },

  _getAnswerValue() {
    return this.get('answerValue');
    // return `${answers.map((answer) => parseInt(answer, 10) + 1).join(', ')}`;
  },

  _getErrorMessage() {
    return 'Pour valider, sélectionner au moins une réponse. Sinon, passer.';
  },

  actions: {
    updateAnswer: function(answerValue) {
      this.set('answerValue', answerValue);
      this.set('errorMessage', null);
    }
  }

});

export default ChallengeItemQcm;
