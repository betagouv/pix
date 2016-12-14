const courseRepository = require('../../infrastructure/repositories/course-repository');
const Answer = require('../../domain/models/data/answer');
const _ = require('lodash').runInContext();

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

function _selectNextInNormalMode(currentChallengeId, challenges) {


  _.mixin({
    'elementAfter' : function(array, currentElement) {
      if (_.isArray(array) && !_.isEmpty(array)) { // only relevant on non-empty array
        const currentIndex = _(array).indexOf(currentElement);
        if (currentIndex > -1) { // need to have an already-existing element inside the given array to work properly
          return _(array).nth(currentIndex + 1);
        }
      }
    }
  });

  /*
   * example : - challenges is ["1st_challenge", "2nd_challenge", "3rd_challenge", "4th_challenge"]
   *           - currentChallengeId is "2nd_challenge"
   */
  const nextChallengeId = _(challenges).elementAfter(currentChallengeId).value();
  // - nextChallengeId is "3rd_challenge"
  return _.defaultTo(nextChallengeId, null);
  // default result to null if not found
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
