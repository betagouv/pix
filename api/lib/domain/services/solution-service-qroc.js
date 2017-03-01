const utils = require('./solution-service-utils');
const _ = require('../../infrastructure/utils/lodash-utils');

function _applyPreTreatmentsToSolutions(solution) {
  return  _.chain(solution)
            .split('\n')
            .reject(_.isEmpty)
            .value();
}

function _applyTreatmentsToSolutions(solution, deactivations) {
  const pretreatedSolutions = _applyPreTreatmentsToSolutions(solution);
  return  _.map(pretreatedSolutions, (pretreatedSolution) => {
    // default behaviour : all treatments T1, T2, T3 applies
    if (!deactivations || (!deactivations.t1) && (!deactivations.t2) && (!deactivations.t3)) {
      return utils._treatmentT2(utils._treatmentT1(pretreatedSolution));
    }

    // Only T1 applies
    if (deactivations.t1 && (!deactivations.t2) && (!deactivations.t3)) {
      return utils._treatmentT2(pretreatedSolution);
    }

  });
}

// remove unbreakable space
function _applyAnswerTreatment(strArg) {
  return strArg.replace(/\u00A0/g, ' ');
}


function _calculateResult(validations, deactivations) {
  // default behaviour
  if (!deactivations || (!deactivations.t1) && (!deactivations.t2) && (!deactivations.t3)) {
    if (validations.t1t2t3Ratio <= 0.25) {
      return 'ok';
    }
    return 'ko';
  }

  // Only T1 is deactivated
  if (deactivations.t1 && (!deactivations.t2) && (!deactivations.t3)) {
    if (validations.t2t3Ratio <= 0.25) {
      return 'ok';
    }
    return 'ko';
  }
}


module.exports = {

  match (answer, solution, deactivations) {

    if (_.isNotString(answer) || _.isNotString(solution) || _.isEmpty(solution)) {
      return 'ko';
    }

    const treatedAnswer = _applyAnswerTreatment(answer);
    const treatedSolutions = _applyTreatmentsToSolutions(solution, deactivations);

    const validations = utils.treatmentT1T2T3(treatedAnswer, treatedSolutions);

    return _calculateResult(validations, deactivations);

    // if (validations.t1t2t3Ratio <= 0.25) {
    //   return 'ok';
    // }
    // return 'ko';
  }
};
