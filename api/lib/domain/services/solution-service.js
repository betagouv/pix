const Answer = require('../../domain/models/data/answer');
const AnswerStatus = require('../../domain/models/AnswerStatus');
const _ = require('../../infrastructure/utils/lodash-utils');

const solutionServiceQcm = require('./solution-service-qcm');
const solutionServiceQcu = require('./solution-service-qcu');
const solutionServiceQroc = require('./solution-service-qroc');
const solutionServiceQrocmInd = require('./solution-service-qrocm-ind');
const solutionServiceQrocmDep = require('./solution-service-qrocm-dep');
const solutionRepository = require('../../infrastructure/repositories/solution-repository');

// FIXME bouger cette fonction dans un adapter de l'infrastructure
// proposition de path: lib/infrastructure/adapters/for-json-response/AnswerStatus.js
//
// TODO: remonter l'appel de l'adaptation dans le controlleur
function _adaptAnswerStatusToJSONResponse(answerStatus) {
  const OK = 'ok';
  const KO = 'ko';
  const SKIPPED = 'aband';
  const PARTIALLY = 'partially';
  const TIMEDOUT = 'timedout';
  const UNIMPLEMENTED = 'unimplemented';

  if (answerStatus.isOK()) {
    return OK;
  } else if (answerStatus.isKO()) {
    return KO;
  } else if (answerStatus.isSKIPPED()) {
    return SKIPPED;
  } else if (answerStatus.isPARTIALLY()) {
    return PARTIALLY;
  } else if (answerStatus.isTIMEDOUT()) {
    return TIMEDOUT;
  } else {
    return UNIMPLEMENTED;
  }
}

function _adaptAnswerMatcherToSolutionType(solution, answerValue) {
  switch (solution.type) {
    case 'QCU':
      return solutionServiceQcu.match(answerValue, solution.value);
    case 'QCM':
      return solutionServiceQcm.match(answerValue, solution.value);
    case 'QROC':
      return solutionServiceQroc.match(answerValue, solution.value, solution.deactivations);
    case 'QROCM-ind':
      return solutionServiceQrocmInd.match(answerValue, solution.value, solution.enabledTreatments);
    case 'QROCM-dep':
      return solutionServiceQrocmDep.match(answerValue, solution.value, solution.scoring, solution.deactivations);
    default:
      return AnswerStatus.UNIMPLEMENTED;
  }
}

module.exports = {

  revalidate(existingAnswer) {
    const currentResult = existingAnswer.get('result');
    if (currentResult === 'timedout' || currentResult === 'aband') {
      return Promise.resolve(existingAnswer);
    }
    return solutionRepository
      .get(existingAnswer.get('challengeId'))
      .then((solution) => {
        const answerCorrectness = this.validate(existingAnswer, solution);
        return new Answer({
          id: existingAnswer.id,
          result: answerCorrectness.result,
          resultDetails: answerCorrectness.resultDetails
        }).save();
      });
  },

  _timedOut(result, answerTimeout) {
    const isPartiallyOrCorrectAnswer = result.isOK() || result.isPARTIALLY();
    const hasTimedOut = _.isInteger(answerTimeout) && answerTimeout < 0;

    if (isPartiallyOrCorrectAnswer && hasTimedOut) {
      return AnswerStatus.TIMEDOUT;
    }
    return result;
  },

  validate(answer, solution) {

    const response = {
      result: null,
      resultDetails: null,
    };

    const answerValue = answer.get('value');
    const answerTimeout = answer.get('timeout');

    let answerStatus;
    let resultDetails = null;

    if (AnswerStatus.isSKIPPED(answerValue)) {
      answerStatus = AnswerStatus.SKIPPED;
    } else {
      answerStatus = _adaptAnswerMatcherToSolutionType(solution, answerValue);
      // FIXME WTF when solution.type === 'QROCM-ind'
      if (answerStatus.resultDetails) {
        resultDetails = answerStatus.resultDetails;
        answerStatus = answerStatus.result;
      }
    }

    if (answerTimeout) {
      answerStatus = this._timedOut(answerStatus, answerTimeout);
    }

    response.result = _adaptAnswerStatusToJSONResponse(answerStatus);
    response.resultDetails = resultDetails;
    return response;
  }
};
