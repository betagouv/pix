import _ from 'pix-live/utils/lodash-custom';

export default function checkedProposals(proposals, userAnswers) {

  userAnswers = _.isNil(userAnswers) ? [] : userAnswers;
  let checkedLabels = [];

  if (argumentsAreValids(proposals, userAnswers)) {
    const fullSizeUserAnswers = normalizeSizeOf(proposals, userAnswers);

    checkedLabels = _.zip(proposals,fullSizeUserAnswers);
  }
  return checkedLabels;
}

function argumentsAreValids(proposals, definedUserAnswers) {
  return !(_(definedUserAnswers).isNotArrayOfBoolean() ||
          _(definedUserAnswers).size() > _(proposals).size() ||
          _(proposals).isNotArrayOfString() ||
          _(proposals).isEmpty());
}

function normalizeSizeOf(proposals, definedUserAnswers){

  const sizeDifference = _(proposals).size() - _(definedUserAnswers).size(); // 2
  const arrayOfFalse = _.times(sizeDifference, _.constant(false));// [false, false]

  return definedUserAnswers.concat(arrayOfFalse);
}

