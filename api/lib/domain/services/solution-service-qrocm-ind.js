const jsYaml = require('js-yaml');
const _ = require('../../infrastructure/utils/lodash-utils');
const utils = require('./solution-service-utils');
const deactivationsService = require('./deactivations-service');

function _applyTreatmentsToSolutions(solutions, deactivations) {
  return _.mapValues(solutions, (validSolutions) => {
    return _.map(validSolutions, (validSolution) => {

      if (deactivationsService.isDefault(deactivations)) {
        return utils._treatmentT2(utils._treatmentT1(validSolution));
      }

      // Only T1 is deactivated
      else if (deactivationsService.hasOnlyT1(deactivations)) {
        return utils._treatmentT2(validSolution);
      }

      // Only T2 is deactivated
      else if (deactivationsService.hasOnlyT2(deactivations)) {
        return utils._treatmentT1(validSolution);
      }

      // Only T3 is deactivated
      else if (deactivationsService.hasOnlyT3(deactivations)) {
        return utils._treatmentT2(utils._treatmentT1(validSolution));
      }

    });
  });
}

function _applyTreatmentsToAnswers(answers) {
  return _.mapValues(answers, _.toString);
}


function _calculateResult(validations, deactivations) {
  let result = 'ok';

  _.each(validations, (validation) => {

    // default behaviour : all T1, T2 and T3 are ACTIVATED
    if (deactivationsService.isDefault(deactivations)) {
      if (validation.t1t2t3Ratio > 0.25) {
        result = 'ko';
      }
    }

    // Only T1 deactivated
    else if (deactivationsService.hasOnlyT1(deactivations)) {
      if (validation.t2t3Ratio > 0.25) {
        result = 'ko';
      }
    }

    // Only T2 deactivated
    else if (deactivationsService.hasOnlyT2(deactivations)) {
      if (validation.t1t3Ratio > 0.25) {
        result = 'ko';
      }
    }

    // Only T3 deactivated
    else if (deactivationsService.hasOnlyT3(deactivations)) {
      if (!_.includes(validation.adminAnswers, validation.t1t2)) {
        result = 'ko';
      }
    }

  });
  return result;
}

function _applyPreTreatmentsToAnswer(yamlAnswer) {
  return yamlAnswer.replace(/\u00A0/g, ' ');
}


module.exports = {

  match (yamlAnswer, yamlSolution, deactivations) {

    if (_.isNotString(yamlAnswer)
        || _.isNotString(yamlSolution)
        || _.isEmpty(yamlSolution)
        || !_.includes(yamlSolution, '\n')) {
      return 'ko';
    }

    // Pre-Treatments
    const preTreatedAnswers = _applyPreTreatmentsToAnswer(yamlAnswer);

    // and convert YAML to JSObject
    const answers = jsYaml.safeLoad(preTreatedAnswers);
    const solutions = jsYaml.safeLoad(yamlSolution);

    // Treatments
    const treatedSolutions = _applyTreatmentsToSolutions(solutions, deactivations);
    const treatedAnswers = _applyTreatmentsToAnswers(answers);

    //Comparison
    const validations = _.map(treatedAnswers, function(answer, keyAnswer) {
      const solutionsToAnswer = treatedSolutions[keyAnswer];
      return utils.treatmentT1T2T3(answer, solutionsToAnswer);
    });

    //Restitution
    return _calculateResult(validations, deactivations);

  }

};
