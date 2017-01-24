const jsYaml = require('js-yaml');
const _ = require('lodash');

function _applyTreatments(answer) {
  return answer.toString().trim().toLowerCase();
}

module.exports = {

  match (yamlAnswer, yamlSolution) {

    //convert YAML to JSObject
    const answers = jsYaml.load(yamlAnswer);
    const solutions = jsYaml.load(yamlSolution);

    //Treatments
    _.each(answers, (answer, index) => {
      answers[index] = _applyTreatments(answer);
    });

    _.each(solutions, (solution, index) => {
      const validOptions = [];
      solution.forEach((validValue) => {
        validOptions.push(_applyTreatments(validValue));
      });
      solutions[index] = validOptions;
    });


    //Comparison
    const validations = {};
    const keys = Object.keys(answers);

    keys.forEach((key) => {
      validations[key] = solutions[key].includes(answers[key]);
    });

    //Restitution
    let result = 'ok';

    _.each(validations, (validation) => {
      if (validation === false) {
        result = 'ko';
      }
    });

    return result;
  }

};
