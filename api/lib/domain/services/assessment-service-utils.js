const AssessmentAdapter = require('../../infrastructure/adapters/assessment-adapter');

function getNextChallengeInAdaptiveCourse(assessmentPix, answersPix, challengesPix) {
  const assessment = AssessmentAdapter.getAdaptedAssessment(assessmentPix, answersPix, challengesPix);
  if (assessment.nextChallenge) {
    return assessment.nextChallenge.id;
  } else {  // end of the test
    return null;
  }
}

module.exports = {
  getNextChallengeInAdaptiveCourse
};
