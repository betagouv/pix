import _ from 'pix-live/utils/lodash-custom';


/*
 * Example :
 * => Input :
 *     proposals :  ['is sky red ?' , 'is sun red ?' , 'is grass red ?' , 'is cloud red ?']
 * => Input :
 *     userAnswers :  2
 * => Input :
 *     solution :  2
 *
 * WARNING : only first(s) userAnswers are given,
 *           all others have implicitly the boolean value "false"
 *
 * => Output :
 *    [['is sky red ?', false, false],
 *     ['is sun red ?', true, false],
 *     ['is grass red ?', false, false],
 *     ['are clouds red ?' false, false]]
 */
export default function labeledRadios(proposals, userAnswers, solution) {

  // accept that user didn't give any answer yet
  const definedUserAnswers = (_.isNil(userAnswers) || _.isNaN(userAnswers)) ? '' : _.parseInt(userAnswers);//2 or ''

  // check pre-conditions
  if (_(proposals).isNotArrayOfString())                   return [];
  if (_(proposals).isEmpty())                              return [];
  if (_.isNil(solution) || _.isNaN(solution))            return [];

  const proposalsLength = _(proposals).size(); //4
  const validProposalIndex = _.parseInt(solution) - 1; //1
  const arrayOfFalse = _.times(proposalsLength, _.constant(false));// [false, false, false, false]

  const proposalStatus = _.clone(arrayOfFalse);
  proposalStatus[validProposalIndex] = true; //[false, true, false, false]

  const proposalsChecked = _.clone(arrayOfFalse);

  if (_.size(definedUserAnswers) > 0) {
    proposalsChecked[definedUserAnswers] = true; //[false, true, false, false]
  }


  return _.chain(proposals)  // [false, true]
    .zip(proposalStatus, proposalsChecked) // [['prop 1', false, false], ['prop 2', false, true], ['prop 3', true, false]]
    .value();

}
