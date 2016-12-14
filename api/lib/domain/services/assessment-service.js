const courseRepository = require('../../infrastructure/repositories/course-repository');
const Answer = require('../../domain/models/data/answer');

function _selectNextInAdaptiveMode(assessment, challenges) {

  const answerIds = assessment.related('answers').pluck('id');

  return new Promise((resolve) => {
    Answer.where('id', 'IN', answerIds).fetchAll().then((answers) => {
      const responsePattern = answers.map(answer => (answer.attributes.result == 'ok') ? '1' : '0').join('');
      switch (responsePattern) {
        case '1': return resolve(challenges[1]);
        case '0': return resolve(challenges[2]);
        default: return resolve(null);
      }
    });
  });
}

function _selectNextInNormalMode(course, currentChallengeId, challenges) {

  if (currentChallengeId === challenges[challenges.length - 1]) {
    return null;
  }

  let i = 1;
  for (const challengeId of challenges) {
    if (currentChallengeId === challengeId) {
      break;
    }
    i++;
  }
  return challenges[i];
}

function selectNextChallengeId(course, currentChallengeId, assessment) {

  return new Promise((resolve) => {

    const challenges = course.challenges;

    if (!currentChallengeId) {
      return resolve(challenges[0]);
    }

    if(course.isAdaptive) {

      return resolve(_selectNextInAdaptiveMode(assessment, challenges));
    } else {

      return resolve(_selectNextInNormalMode(course, currentChallengeId, challenges));
    }
  });
}

module.exports = {

  getAssessmentNextChallengeId(assessment, currentChallengeId) {

    return new Promise((resolve, reject) => {

      const courseId = assessment.get('courseId');
      courseRepository
      .get(courseId)
      .then((course) => resolve(selectNextChallengeId(course, currentChallengeId, assessment)))
      .catch((error) => reject(error));
    });
  }

};
