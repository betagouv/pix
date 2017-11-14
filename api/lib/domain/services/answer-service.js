const _ = require('lodash');

module.exports = {
  getAnswersSuccessRate: (answers) => {

    const countOfAnswers = answers.length;
    const countOfValidAnswers = _(answers).filter(answer => answer.get('result') === 'ok').size();

    return (countOfAnswers) ? (countOfValidAnswers % 100 / countOfAnswers) * 100 : null;
  }
};
