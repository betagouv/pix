const utils = require('./solution-service-utils');
const jsYaml = require('js-yaml');
const _ = require('lodash');

module.exports = {

  match (yamlAnswer, yamlSolution) {

    //convert YAML to JSObject
    const answers = jsYaml.load(yamlAnswer);
    const solutions = jsYaml.load(yamlSolution);

    //Treatment
    

    //Comparison
    let validations = {};
    const keys = Object.keys(answers);

    keys.forEach((key) => {
      validations[key] = false;
      if (solutions[key].includes(answers[key][0])){
        validations[key] = true;
      }
    });

    //Restitution
    let result = "ok";

    _.each(validations, (validation) => {
      if (validation === false){
        result = "ko";
      }
    });

    return result;
  }

};
