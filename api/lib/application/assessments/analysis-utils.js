// const _ = require('lodash');

function proba(theta, diff) {
  return 1 / (1 + Math.exp(-(theta - diff)));
}

function derivativeLogLikelihood(theta, history) {
  return Math.abs(history.map(h => h.outcome - proba(theta, h.diff)).reduce((a, b) => a + b));
}

// console.log(proba(-2, 0));
/* for(let theta = 3; theta < 8; theta += 0.5)
  console.log(theta, derivativeLogLikelihood(theta, [{diff: 4, outcome: 1}, {diff: 5, outcome: 0}])); */

module.exports = {
  proba,
  derivativeLogLikelihood
};
