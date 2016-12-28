import _ from 'pix-live/utils/lodash-custom';

// Example with 4 proposals
// Proposals could be ['prop 1','prop 2','prop 3','prop 4']
// Answers given are only the first(s) : [false, true], the missing values are false
// Output expected : [['prop 1', false], ['prop 2', true], ['prop 3', false], ['prop 4', false]]

function calculate(proposals, answers) {
  // Example
  // proposals = ['prop 1','prop 2','prop 3','prop 4']
  // answers = [false, true]
  const sizeDifference = proposals.length - answers.length;

  return  _.chain(answers)                                      // [false, true]
            .concat(_.times(sizeDifference, _.constant(false))) // [false, true, false, false]
            .zip(proposals)                                     // [[false, 'prop 1'], [true, 'prop 2'], [false, 'prop 3'], [false, 'prop 4']]
            .map(_.reverse)                                     // [['prop 1', false], ['prop 2', true], ['prop 3', false], ['prop 4', false]]
            .value();
}

export default function labeledCheckboxes (proposals, answers) {

  const DEFAULT_RETURN_VALUE = [];

  // check pre-conditions
  if (_(proposals).isEmpty())            return DEFAULT_RETURN_VALUE;
  if (_(proposals).isNotArrayOfString()) return DEFAULT_RETURN_VALUE;
  if (_(answers).isNotArrayOfBoolean())  return DEFAULT_RETURN_VALUE;

  return calculate(proposals, answers);


}
