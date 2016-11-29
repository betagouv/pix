import Ember from 'ember';
import _ from 'lodash/lodash';
import ChallengeItemGeneric from './challenge-item-generic';

const ChallengeItemQcm = ChallengeItemGeneric.extend({

  _hasError: function () {
    return !(this._getAnswerValue() >= 1);
  },

  // XXX : in theory, this is not allowed.
  // Data should not be extracted from the DOM, but pass to parent component through action.
  // However, this implementation is far more simpler and avoid bad view-model initialization problems.
  _getAnswerValue() {
    return this.$('input:checkbox:checked').map(function () {return this.name;}).get().join(',');
  },

  _getErrorMessage() {
    return 'Pour valider, sélectionner au moins une réponse. Sinon, passer.';
  },

  actions: {
    updateAnswer: function(answerValue) {
      this.set('errorMessage', null);
    }
  }

});

export default ChallengeItemQcm;
