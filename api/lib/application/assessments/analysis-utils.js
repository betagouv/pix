function probaOfCorrectAnswer(theta, diff) {
  return 1 / (1 + Math.exp(-(theta - diff)));
}

function derivativeLogLikelihood(theta, history) {
  return Math.abs(history.map(h => h.outcome - probaOfCorrectAnswer(theta, h.diff)).reduce((a, b) => a + b));
}

module.exports = {
  probaOfCorrectAnswer,
  derivativeLogLikelihood
};
