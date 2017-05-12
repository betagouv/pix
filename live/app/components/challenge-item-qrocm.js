/* global jsyaml */
import _ from 'pix-live/utils/lodash-custom';

import ChallengeItemGeneric from './challenge-item-generic';

export default ChallengeItemGeneric.extend({

  isValid() {
    const allAnswers = this._getRawAnswerValue(); // ex. {"logiciel1":"word", "logiciel2":"excel", "logiciel3":""}
    const hasAtLeastOneAnswer = _(allAnswers).hasSomeTruthyProps();
    return _.isFalsy(hasAtLeastOneAnswer);
  },

  _getAnswerValue() {
    return jsyaml.safeDump(this._getRawAnswerValue());
  },

  getErrorMessage() {
    return 'Pour valider, saisir au moins une réponse. Sinon, passer.';
  }
});
