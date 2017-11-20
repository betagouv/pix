const assessmentAdapter = require('../../infrastructure/adapters/assessment-adapter');

module.exports = {

  getNextChallengeInAdaptiveCourse(answersPix, challengesPix, skills) {
    const assessment = assessmentAdapter.getAdaptedAssessment(answersPix, challengesPix, skills);
    return assessment.nextChallenge ? assessment.nextChallenge.id : null;
  }
};
