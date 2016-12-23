import _ from 'pix-live/utils/lodash-custom';

// Example with 4 proposals
// Proposals could be ['prop 1','prop 2','prop 3','prop 4']
// Answers given are only the first(s) : [false, true], the missing values are false
// Output expected : [['prop 1', false], ['prop 2', true], ['prop 3', false], ['prop 4', false]]


function calculate(proposals, answers) {
  return  _.chain(proposals)
            .size()
            .times(_.constant(false))
            .zipWith(answers, _.or)
            .map(_.isTrue)
            .zip(proposals)
            .map((e) => e.reverse())
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
