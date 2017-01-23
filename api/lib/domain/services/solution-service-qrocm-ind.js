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

    _.each(answers, (answer) => {
      validations[answer] = false;
      _.each(solutions, (solutionsPossibles) => {  //parcourt de l'objet de solution, pour chaque chaque champs de l'objet, il y a un tableau de reponses possibles
        for (let i=0; i<=solutionsPossibles.length; i++){
          if (answer[0] === solutionsPossibles[i]){
            validations[answer] = true;
          }
        }
      });
     /* if (validations[answer] ==  true){
        solutions = _.omit(solutions, )  // supprimer la solution possible pour pas qu'on puisse la donner 2 fois
      }*/
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
