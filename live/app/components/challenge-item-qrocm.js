import Ember from 'ember';
import _ from 'lodash/lodash';
import ChallengeItemGeneric from './challenge-item-generic';

const ChallengeItemQrocm = ChallengeItemGeneric.extend({

  _hasError: function () {
    let nonEmptyAnswers = _.pick(this._getRawAnswerValue(), _.identity);
    return _.isEmpty(nonEmptyAnswers);
  },

  _getAnswerValue() {
    return _.map(this._getRawAnswerValue(), function(key, value) {
      return `${key} = "${value}"`;
    }).join(', ');
  },

  // XXX : data is extracted from DOM of child component, breaking child encapsulation.
  // This is not "the Ember way", however it makes code easier to read,
  // and moreover, is a much more robust solution when you need to test it properly.
  _getRawAnswerValue() {
    let result = {};
    $('input[data-uid="qrocm-proposal-uid"]').each(function (index, element) {
      result[$(element).attr('name')] = $(element).val();
    });
    return result;
  },

  _getErrorMessage() {
    return 'Pour valider, saisir au moins une réponse. Sinon, passer.';
  },

  actions: {

    inputChanged() {
      console.log('input changed');
      this.set('errorMessage', null);
    }
  }

});

export default ChallengeItemQrocm;
