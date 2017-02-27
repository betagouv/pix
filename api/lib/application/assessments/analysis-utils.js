function proba(theta, diff) {
  return 1 / (1 + Math.exp(-(theta - diff)));
}

function derivativeLogLikelihood(theta, history) {
  return Math.abs(history.map(h => h.outcome - proba(theta, h.diff)).reduce((a, b) => a + b));
}

module.exports = {
  proba,
  derivativeLogLikelihood
};
