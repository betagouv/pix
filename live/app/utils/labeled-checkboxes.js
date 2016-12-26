import _ from 'pix-live/utils/lodash-custom';

// Example with 4 proposals
// Proposals could be ['prop 1','prop 2','prop 3','prop 4']
// Answers given are only the first(s) : [false, true], the missing values are false
// Output expected : [['prop 1', false], ['prop 2', true], ['prop 3', false], ['prop 4', false]]


function calculate(proposals, answers) {
  // Example
  // proposals = ['prop 1','prop 2','prop 3','prop 4']
  // answers = [false, true]
  return  _.chain(proposals)         // ['prop 1','prop 2','prop 3','prop 4']
            .size()                  // 4
            .times(_.constant(false))// [false, false, false, false]
            .zipWith(answers, _.or)  // [false, true, undefined, undefined]
            .map(_.isTrue)           // [false, true, false, false]
            .zip(proposals)          // [[false, 'prop 1'], [true, 'prop 2'], [false, 'prop 3'], [false, 'prop 4']]
            .map((e) => e.reverse()) // [['prop 1', false], ['prop 2', true], ['prop 3', false], ['prop 4', false]]
            .value();

}

export default function labeledCheckboxes (proposals, answers) {

  return _.cond([
    [() => _(proposals).isEmpty(),            _.stubArray ],
    [() => _(proposals).isNotArrayOfString(), _.stubArray ],
    [() => _(answers).isNotArrayOfBoolean(),  _.stubArray ],
    [_.ok,                                    () => calculate(proposals, answers)  ]
  ])();


}
