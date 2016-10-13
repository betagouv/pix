const Assessment = require('../models/assessment')

module.exports = {

  getNextChallenge: (currentChallenge, assessment) => {

    challenges = assessment['course']['challenges'];
    pos = challenges.indexOf(currentChallenge);
    if(pos == challenges.length - 1)
      return null;
    else
      return challenges[pos + 1];
  }
}
