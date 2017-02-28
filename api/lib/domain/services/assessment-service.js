const courseRepository = require('../../infrastructure/repositories/course-repository');
const answerRepository = require('../../infrastructure/repositories/answer-repository');
const assessmentUtils = require('./assessment-service-utils');
const _ = require('../../infrastructure/utils/lodash-utils');

function _selectNextInAdaptiveMode(assessment) {

  return new Promise((resolve, reject) => {

    answerRepository.findByAssessment(assessment.get('id'))
      .then((answers) => {
        const responsePattern = assessmentUtils.getResponsePattern(answers);
        return assessmentUtils.getNextChallengeFromScenarios(responsePattern);
      })
      .then(resolve)
      .catch(reject);
  });
}


function _selectNextInNormalMode(currentChallengeId, challenges) {

  /*
   * example : - if challenges is ["1st_challenge", "2nd_challenge", "3rd_challenge", "4th_challenge"]
   *           - and currentChallengeId is "2nd_challenge"
   *
   *           nextChallengeId will be "3rd_challenge"
   */
  const nextChallengeId = _(challenges).elementAfter(currentChallengeId).value();
  return _.defaultTo(nextChallengeId, null); // result MUST be null if not found

}


function selectNextChallengeId(course, currentChallengeId, assessment) {

console.log('course- - - - - - - - - - - - - - - - - - - - ', course);
console.log('currentChallengeId- - - - - - - - - - - - - - - - - - - - ', currentChallengeId);
console.log('assessment- - - - - - - - - - - - - - - - - - - - ', assessment);

  return new Promise((resolve) => {

    const challenges = course.challenges;

    if (!currentChallengeId) { // no currentChallengeId means the test has not yet started
      console.log('yep!!!- - - - - - - - - - - - - - - - - - - - ');
      return resolve(challenges[0]);
    }

    if (course.isAdaptive) {
      return resolve(_selectNextInAdaptiveMode(assessment));
    } else {
      return resolve(_selectNextInNormalMode(currentChallengeId, challenges));
    }
  });
}


module.exports = {

  getAssessmentNextChallengeId(assessment, currentChallengeId) {

    return new Promise((resolve, reject) => {

      const courseId = assessment.get('courseId');
      console.log('courseId- - - - - - - - - - - - - - - - - - - - ', courseId);
      let a = courseRepository.get(courseId);
      console.log('a- - - - - - - - - - - - - - - - - - - - ', a);
      courseRepository
        .get(courseId)
        .then((course) => resolve(selectNextChallengeId(course, currentChallengeId, assessment)))
        .catch((error) => reject(error));
    });
  }

};
