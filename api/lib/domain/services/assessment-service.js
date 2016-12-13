const courseRepository = require('../../infrastructure/repositories/course-repository');
const courseSerializer = require('../../infrastructure/serializers/course-serializer');
const Answer = require('../../domain/models/data/answer');

function selectNextChallengeId(course, currentChallengeId, assessment) {

  return new Promise((resolve, reject) => {

    const challenges = course.data.relationships.challenges.data;
    console.log('challenges', challenges);

    if (!currentChallengeId) {
      return resolve(challenges[0].id);
    }

    if (course.isAdaptive) {
      const answerIds = assessment.related('answers').pluck('id');
      
      Answer.where('id', 'IN', answerIds).fetchAll().then((answers) => {
        const responsePattern = answers.map(answer => (answer.attributes.result == 'ok') ? '1' : '0').join('');
        switch(responsePattern) {
          case '1': return resolve(challenges[1].id);
          case '0': return resolve(challenges[2].id);
          default: resolve(null);
        }
      }).catch((error) => reject(error));
    } else {
      if (currentChallengeId === challenges[challenges.length - 1].id) {
        return resolve(null);
      }

      let i = 1;
      for (const challengeId of challenges) {
        if (currentChallengeId === challengeId) {
          break;
        }
        i++;
      }
      return resolve(challenges[i].id);
    }
  });
}

module.exports = {

  getAssessmentNextChallengeId(assessment, currentChallengeId) {

    return new Promise((resolve, reject) => {

      const courseId = assessment.get('courseId');
      courseRepository
        .get(courseId)
        .then((course) => {
          const serializedCourse = courseSerializer.serialize(course);
          resolve(selectNextChallengeId(serializedCourse, currentChallengeId, assessment));
        })
        .catch((error) => reject(error));
    });
  }

};
