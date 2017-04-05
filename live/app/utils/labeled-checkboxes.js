import _ from 'pix-live/utils/lodash-custom';

export default function labeledCheckboxes (proposals, userAnswers) {

  const definedUserAnswers = _.isNil(userAnswers) ? [] : userAnswers;
  let checkedLabels = [];

  if (argumentsAreValids(proposals, definedUserAnswers)) {
    const fullSizeUserAnswers = normalizeSizeOf(proposals, definedUserAnswers);

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

  const sizeDifference    = _(proposals).size() - _(definedUserAnswers).size(); // 2
  const arrayOfFalse = _.times(sizeDifference, _.constant(false));// [false, false]

  return definedUserAnswers.concat(arrayOfFalse);
}

