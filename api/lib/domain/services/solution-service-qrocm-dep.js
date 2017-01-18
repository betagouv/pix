/*eslint no-console: ["error", { allow: ["warn", "error"] }] */
const jsYaml = require('js-yaml');
const _ = require('../../utils/lodash-utils');

_applyTreatments = (objects) => {
  const result = {};
  _.each(objects, (value, key) => {
    result[key] = value.toString().trim().toLowerCase();
  });
  return result;
};

_getSolutionKeys = (solutions) => {
  return Object.keys(solutions);
};

_removeMatchedSolutionIfExist = (matchingSolutionKey, solutions) => {
  if (matchingSolutionKey) {
    solutions = _.omit(solutions, matchingSolutionKey);
  }
  return solutions;
};

_rightNumberOfAnswers = (answers, nbExpectedAnswers) => {
  return Object.keys(answers).length == nbExpectedAnswers;
};

_hasBadAnswers = (validations) => {
  let badAnswers = _.filter(validations, (item) => item === false);
  return !_.isEmpty(badAnswers);
};

_compareAnswersAndSolutions = (answers, solutions) => {
  const validations = {};
  _.each(answers, (answer) => {
    validations[answer] = false;
    const solutionKeys = _getSolutionKeys(solutions);
    let matchingSolutionKey = null;
    _.each(solutionKeys, (solutionKey) => {
      if (validations[answer] == false) {
        const solutionVariants = solutions[solutionKey];
        if (!_.isEmpty(answer) && solutionVariants.includes(answer)) {
          validations[answer] = true;
          matchingSolutionKey = solutionKey;
        }
      }
    });
    solutions = _removeMatchedSolutionIfExist(matchingSolutionKey, solutions);
  });
  return validations;
};

_calculateResult = (scoring, validations, answers) => {
  let result = 'ok';

  if (_.isEmpty(scoring)) {
    if (_hasBadAnswers(validations)) {
      result = 'ko';
    }
  } else {
    if (!_hasBadAnswers(validations)) {
      result = 'ok';
    } else {
      const nbGoodAnswers = _.filter(validations, (item) => item == true).length;
      const minGrade = _.min(Object.keys(scoring));
      const maxGrade = _.max(Object.keys(scoring));

      if (nbGoodAnswers >= maxGrade) {
        result = 'ok';
      } else if (nbGoodAnswers >= minGrade) {
        result = 'partially';
      } else {
        result = 'ko';
      }
    }
  }
  return result;
};

module.exports = {

  match (yamlAnswer, yamlSolution, yamlScoring) {
    // Convert Yaml to JS objects
    let answers = jsYaml.safeLoad(yamlAnswer);
    let solutions = jsYaml.safeLoad(yamlSolution);
    const scoring = jsYaml.safeLoad(yamlScoring);

    // Treatments
    answers = _applyTreatments(answers);
    solutions = _applyTreatments(solutions);

    // Comparisons
    const validations = _compareAnswersAndSolutions(answers, solutions);

    // Restitution
    return _calculateResult(scoring, validations, answers);
  }


};
