const Boom = require('boom');
const assessmentSerializer = require('../../infrastructure/serializers/assessment-serializer');
const assessmentRepository = require('../../infrastructure/repositories/assessment-repository');
const assessmentService = require('../../domain/services/assessment-service');
const challengeRepository = require('../../infrastructure/repositories/challenge-repository');
const challengeSerializer = require('../../infrastructure/serializers/challenge-serializer');

module.exports = {

  save(request, reply) {

    const assessment = assessmentSerializer.deserialize(request.payload);

    return assessment.save()
      .then((assessment) => reply(assessmentSerializer.serialize(assessment)).code(201))
      .catch((err) => reply(Boom.badImplementation(err)));
  },

  get(request, reply) {

    assessmentRepository
      .get(request.params.id)
      .then((assessment) => {
        const serializedAssessment = assessmentSerializer.serialize(assessment);
        return reply(serializedAssessment);
      })
      .catch((err) => reply(Boom.badImplementation(err)));
  },

  getNextChallenge(request, reply) {

    assessmentRepository
      .get(request.params.id)
      .then((assessment) => {
        const serializedAssessment = assessmentSerializer.serialize(assessment);
        console.log('serializedAssessment', serializedAssessment);
        return assessmentService.getAssessmentNextChallengeId(serializedAssessment, request.params.challengeId);
      })
      .then((nextChallengeId) => {
        console.log('nextChallengeId', nextChallengeId);

        return (nextChallengeId) ? challengeRepository.get(nextChallengeId) : null;
      }) 
      .then((challenge) => (challenge) ? reply(challengeSerializer.serialize(challenge)) : reply('null'))
      .catch((err) => reply(Boom.badImplementation(err)));
  }

};
