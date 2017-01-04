import _ from 'pix-live/utils/lodash-custom';


/*
 * Example :
 * => Input :
 *     proposals :  ['is sky red ?' , 'is sun red ?' , 'is grass red ?' , 'is cloud red ?']
 * => Input :
 *     userAnswers :  [false, true]
 *
 * WARNING : only first(s) userAnswers are given,
 *           all others have implicitly the boolean value "false"
 *
 * => Output :
 *    [['is sky red ?', false],
 *     ['is sun red ?', true],
 *     ['is grass red ?', false],
 *     ['are clouds red ?' false]]
 */
export default function labeledCheckboxes (proposals, userAnswers) {

  // check pre-conditions
  if (_(proposals).isNotArrayOfString())            return [];
  if (_(proposals).isEmpty())                       return [];
  if (_(userAnswers).isNotArrayOfBoolean())         return [];
  if (_(userAnswers).size() > _(proposals).size())  return [];

  const sizeDifference    = _(proposals).size() - _(userAnswers).size(); // 2
  const arrayOfFalse = _.times(sizeDifference, _.constant(false));       // [false, false]

  return  _.chain(userAnswers)      // [false, true]
            .concat(arrayOfFalse)   // [false, true, false, false]
            .zip(proposals)         // [[false, 'prop 1'], [true, 'prop 2'], [false, 'prop 3'], [false, 'prop 4']]
            .map(_.reverse)         // [['prop 1', false], ['prop 2', true], ['prop 3', false], ['prop 4', false]]
            .value();

}
