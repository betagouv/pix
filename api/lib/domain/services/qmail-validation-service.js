const yamljs = require('yamljs');
const _ = require('lodash');

function _getMailField(mail, field) {
  if(field === 'SUJET') {
    return mail.mail.subject;
  } else {
    return mail.mail.text;
  }
}

function _atLeastOneRuleIsValid(listOfRulesResults) {
  return listOfRulesResults.filter(value => value === true).length >= 1;
}

function _allRulesAreValidated(listOfRulesResults) {
  return listOfRulesResults.filter(value => value === false).length <= 0;
}

function _isEmailField(operator) {
  return operator === 'SUJET' || operator === 'CORPS';
}

function _isFieldCondition(operator) {
  return operator === 'EST' || operator === 'CONTIENT';
}

function _isLogicalCondition(operator) {
  return operator === 'OU' || operator === 'ET';
}

function _validRule(mail, field, validator, value) {
  const fieldUnderTest = _getMailField(mail, field);

  let result = false;
  if(validator === 'EST') {
    result = fieldUnderTest.trim() === value;
  } else if(validator === 'CONTIENT') {
    result = fieldUnderTest.search(value) >= 0;
  }

  return result;
}

function _validateRulesTwo(email, currentOperator, rules, field) {

  const results = [];
  const subOperators = _.keys(rules);

  subOperators.forEach((operator) => {
    if(_isEmailField(operator)) {
      results.push(_validateRulesTwo(email, currentOperator, rules[operator], operator));
    } else if(_isFieldCondition(operator)) {
      results.push(_validRule(email, field, operator, rules[operator]));
    } else if(_isLogicalCondition(operator)) {
      results.push(_validateRulesTwo(email, operator, rules[operator], field));
    } else {
      results.push(_validateRulesTwo(email, currentOperator, rules[operator], field));
    }
  });

  if(currentOperator === 'OU') {
    return _atLeastOneRuleIsValid(results);
  } else {
    return _allRulesAreValidated(results);
  }
}

module.exports = {
  validateEmail: (email, rules) => {
    const parsedRules = yamljs.parse(rules);

    if(parsedRules === null) {
      return true;
    }

    const initialCondition = _.keys(parsedRules)[0];

    const initialOperator = (initialCondition === 'OU' || initialCondition === 'ET') ? initialCondition : 'ET';

    return _validateRulesTwo(email, initialOperator, parsedRules, null);
  }
};
