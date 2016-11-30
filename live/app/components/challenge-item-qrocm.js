import Ember from 'ember';
import _ from 'lodash/lodash';
import ChallengeItemGeneric from './challenge-item-generic';

const ChallengeItemQrocm = ChallengeItemGeneric.extend({

  _hasError: function () {
    // const values = this._getAnswerValue();
    // return (Ember.isEmpty(values) || values.length < 1 || values.every(Ember.isBlank));
    return false;
  },

  _getAnswerValue() {
    // const answers = this.get('answers');
    // return _.pairs(answers).map(([key, value]) => `${key} = "${value}"`).join(', ');
  },

  _getRawAnswerValue() {
    // const answers = this.get('answers');
    // return _.pairs(answers).map(([key, value]) => `${key} = "${value}"`).join(', ');
  },

  _getErrorMessage() {
    return 'Pour valider, saisir au moins une réponse. Sinon, passer.';
  },

  actions: {

    inputChanged() {
      this.set('errorMessage', null);
    }
  }

});

export default ChallengeItemQrocm;
