const CertificationChallenge = require('../../domain/models/data/certification-challenge');
const Bookshelf = require('../bookshelf');

module.exports = {
  save(challenge, certificationCourse) {
    const certificationChallenge = new CertificationChallenge({
      challengeId: challenge.id,
      competenceId: challenge.competence,
      associatedSkill: challenge.testedSkill,
      courseId: certificationCourse.id
    });

    return certificationChallenge.save()
      .then((certificationChallenge) => certificationChallenge.toJSON());
  },

  findChallengesByCertificationCourseId(courseId) {
    return CertificationChallenge
      .where({ courseId })
      .fetchAll()
      .then((collection) => {
        return collection.map((certificationChallenge) => certificationChallenge.toDomain())
      });
  },

  findNonAnsweredChallengeByCourseId(assessmentId, courseId) {
    const answeredChallengeIds = Bookshelf.knex('answers')
      .select('challengeId')
      .where({ assessmentId });

    return CertificationChallenge
      .where({ courseId })
      .query((knex) => knex.whereNotIn('challengeId', answeredChallengeIds))
      .fetch({ require: true })
      .then((certificationChallenge) => certificationChallenge.toDomain());
  }
};
