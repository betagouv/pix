/*eslint no-console: ["error", { allow: ["warn", "error"] }] */
const jsYaml = require('js-yaml');
const _ = require('../../infrastructure/utils/lodash-utils');
const utils = require('./solution-service-utils');


function _applyTreatmentsToSolutions(objects) {
  const result = {};
  _.each(objects, (value, key) => {
    result[key] = value.toString().trim().toLowerCase();
  });
  return result;
}

function _getSolutionKeys(solutions) {
  return Object.keys(solutions);
}

/*------------------------------------------------

Calculates ALL possible validations for ALL answers

Example

answers
{ num1: 'google.fr', num2: 'bad answer', num3: 'bad answer' };

solutions
{ Google: 'google,google.fr,google search', Yahoo: 'yahoo,yahoo answer', Bing: 'bing' };

Returns


{
  "google.fr_num1": [
    {
      "userAnswer": "google.fr"
      "adminAnswers": "[\"google\",\"google.fr\",\"google search\"]"
      "t1": "google.fr"
      "t1t2": "googlefr"
      "t1t2t3Ratio": 0.15
      "t1t3Ratio": 0
      "t2": "googlefr"
      "t2t3Ratio": 0.15
      "t3Ratio": 0
    }
    {
      "userAnswer": "google.fr"
      "adminAnswers": "[\"yahoo\",\"yahoo answer\"]"
      "t1": "google.fr"
      "t1t2": "googlefr"
      "t1t2t3Ratio": 1
      "t1t3Ratio": 1
      "t2": "googlefr"
      "t2t3Ratio": 1
      "t3Ratio": 1
    }
    {
      "userAnswer": "google.fr"
      "adminAnswers": "[\"bing\"]"
      "t1": "google.fr"
      "t1t2": "googlefr"
      "t1t2t3Ratio": 0.875
      "t1t3Ratio": 0.88
      "t2": "googlefr"
      "t2t3Ratio": 0.875
      "t3Ratio": 0.88
    }
  ],
  "bad answer_num2": [
    {
      "userAnswer": "bad answer"
      "adminAnswers": "[\"google\",\"google.fr\",\"google search\"]"
      "t1": "badanswer"
      "t1t2": "badanswer"
      "t1t2t3Ratio": 0.88
      "t1t3Ratio": 0.88
      "t2": "bad answer"
      "t2t3Ratio": 0.9
      "t3Ratio": 0.9
    }
    {
      "userAnswer": "bad answer"
      "adminAnswers": "[\"yahoo\",\"yahoo answer\"]"
      "t1": "badanswer"
      "t1t2": "badanswer"
      "t1t2t3Ratio": 0.55
      "t1t3Ratio": 0.55
      "t2": "bad answer"
      "t2t3Ratio": 0.4
      "t3Ratio": 0.4
    }
    {
      "userAnswer": "bad answer"
      "adminAnswers": "[\"bing\"]"
      "t1": "badanswer"
      "t1t2": "badanswer"
      "t1t2t3Ratio": 0.77
      "t1t3Ratio": 0.77
      "t2": "bad answer"
      "t2t3Ratio": 0.8
      "t3Ratio": 0.8
    }
  ],
  "bad answer_num3": [
    {
      "userAnswer": "bad answer"
      "adminAnswers": "[\"google\",\"google.fr\",\"google search\"]"
      "t1": "badanswer"
      "t1t2": "badanswer"
      "t1t2t3Ratio": 0.88
      "t1t3Ratio": 0.88
      "t2": "bad answer"
      "t2t3Ratio": 0.9
      "t3Ratio": 0.9
    }
    {
      "userAnswer": "bad answer"
      "adminAnswers": "[\"yahoo\",\"yahoo answer\"]"
      "t1": "badanswer"
      "t1t2": "badanswer"
      "t1t2t3Ratio": 0.55
      "t1t3Ratio": 0.55
      "t2": "bad answer"
      "t2t3Ratio": 0.4
      "t3Ratio": 0.4
    }
    {
      "userAnswer": "bad answer"
      "adminAnswers": "[\"bing\"]"
      "t1": "badanswer"
      "t1t2": "badanswer"
      "t1t2t3Ratio": 0.77
      "t1t3Ratio": 0.77
      "t2": "bad answer"
      "t2t3Ratio": 0.8
      "t3Ratio": 0.8
    }
  ]

}
------------------------------------------------ */
function _calculateValidation(answers, solutions) {

  const validations = {};

  _.each(answers, (answer, index) => {

    const indexation = answer + '_' + index;
    const solutionKeys = _getSolutionKeys(solutions);

    _.each(solutionKeys, (solutionKey) => {

      const solutionVariants = solutions[solutionKey];

      if (_.isUndefined(validations[indexation])) {
        validations[indexation] = [];
      }

      validations[indexation].push(utils.treatmentT1T2T3(answer, solutionVariants.split(',')));

    });
  });
  return validations;
}

function _numberOfGoodAnswers(fullValidations) {
  const allGoodAnswers = _goodAnswers(fullValidations);
  const uniqGoodAnswers = _.uniqBy(allGoodAnswers, 'adminAnswers');
  return uniqGoodAnswers.length;
}

function _goodAnswers(fullValidations) {
  return _.chain(fullValidations)
          .map(_goodAnswer) // null values to represents bad answers.
          .filter((e) => e !== null)
          .value();
}

// the lowest t1t2t3 ratio is below 0.25
function _goodAnswer(fullValidation) {
  const bestAnswerSoFar = _.minBy(fullValidation, (e) => e.t1t2t3Ratio);
  return bestAnswerSoFar.t1t2t3Ratio <= 0.25 ? bestAnswerSoFar : null;
}

function _calculateResult(scoring, validations) {
  let result = 'ok';

  const numberOfGoodAnswers = _numberOfGoodAnswers(validations);

  if (_.isEmpty(scoring)) {
    if (numberOfGoodAnswers !== _.size(validations)) {
      result = 'ko';
    }
  } else {

    const minGrade = _.min(Object.keys(scoring));
    const maxGrade = _.max(Object.keys(scoring));

    if (numberOfGoodAnswers >= maxGrade) {
      result = 'ok';
    } else if (numberOfGoodAnswers >= minGrade) {
      result = 'partially';
    } else {
      result = 'ko';
    }
  }
  return result;
}

module.exports = {
  match(yamlAnswer, yamlSolution, yamlScoring) {

    // Validate inputs
    if (_.isNotString(yamlAnswer)
        || _.isNotString(yamlSolution)
        || _.isEmpty(yamlAnswer)
        || !_.includes(yamlSolution, '\n')) {
      return 'ko';
    }

    // Convert Yaml to JS objects
    const answers = jsYaml.safeLoad(yamlAnswer);
    let solutions = jsYaml.safeLoad(yamlSolution);
    const scoring = jsYaml.safeLoad(yamlScoring);


    // We allow the admin to mistakenly enter uppercases and spaces before/after actual solution
    solutions = _applyTreatmentsToSolutions(solutions);

    // Comparisons
    const fullValidations = _calculateValidation(answers, solutions);

    return _calculateResult(scoring, fullValidations);
  }

};
