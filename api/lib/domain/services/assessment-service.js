const courseRepository = require('../../infrastructure/repositories/course-repository');
const Answer = require('../../domain/models/data/answer');
const _ = require('../../utils/lodash-utils');


function _selectNextInAdaptiveMode(assessment, challenges) {

  const answerIds = assessment.related('answers').pluck('id');

  return new Promise((resolve, reject) => {
    Answer.where('id', 'IN', answerIds).fetchAll().then((answers) => {
      // Check input
      if (challenges.length !== 3) {
        reject('Adaptive mode is enabled only for tests with 3 challenges');
      }
      // Check input
      else if (answers.length === 0) {
        reject('Cannot decide which next challenge to choose in adaptive mode if no answer are given');
      }
      // Check input
      else if (answers.length > 1) { // if there is more than one answer, user reached the end of test
        resolve(null);
      }
      // ADAPTIVE TEST HAPPENS HERE
      else if (answers.length === 1) {
        const firstAnswerToFirstChallenge = answers.models[0].attributes;
        if (firstAnswerToFirstChallenge.result === 'ok') {
          resolve(_.second(challenges));
        } else {
          resolve(_.third(challenges));
        }
      }
    });
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

  return new Promise((resolve) => {

    const challenges = course.challenges;

    if (!currentChallengeId) { // no currentChallengeId means the test has not yet started
      return resolve(challenges[0]);
    }

    if (course.isAdaptive) {
      return resolve(_selectNextInAdaptiveMode(assessment, challenges));
    } else {
      return resolve(_selectNextInNormalMode(currentChallengeId, challenges));
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
