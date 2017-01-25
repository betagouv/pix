const Boom = require('boom');
const assessmentSerializer = require('../../infrastructure/serializers/assessment-serializer');
const assessmentRepository = require('../../infrastructure/repositories/assessment-repository');
const assessmentService = require('../../domain/services/assessment-service');
const challengeRepository = require('../../infrastructure/repositories/challenge-repository');
const challengeSerializer = require('../../infrastructure/serializers/challenge-serializer');
const courseRepository = include('lib/infrastructure/repositories/course-repository');
const _ = include('lib/utils/lodash-utils');
const Course = include('lib/domain/models/referential/course');
const answerRepository = include('lib/infrastructure/repositories/answer-repository');

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
        return assessmentService.getAssessmentNextChallengeId(assessment, request.params.challengeId);
      })
      .then((nextChallengeId) => {
        return (nextChallengeId) ? challengeRepository.get(nextChallengeId) : null;
      })
      .then((challenge) => {
        return (challenge) ? reply(challengeSerializer.serialize(challenge)) : reply('null');
      })
      .catch((err) => reply(Boom.badImplementation(err)));
  },

  getAssessmentSolutions(request, reply) {


    assessmentRepository
      .get(request.params.id)
      .then((assessment) => {
        // console.log('assessment- - - - - - - - - - - - - - - - - - - - ', assessment);
        // console.log('assessment.attributes.courseId- - - - - - - - - - - - - - - - - - - - ', assessment.attributes.courseId);
        if (_.isEmpty(assessment)) {
          return reply('null');
        } else {

          answerRepository.findByAssessment(assessment.attributes.id).then((answers) => {
            console.log('assessment.attributes.id- - - - - - - - - - - - - - - - - - - - ', assessment.attributes.id);
            console.log('answers- - - - - - - - - - - - - - - - - - - - ', answers);
          });

          // console.log('assessment.attributes.courseId- - - - - - - - - - - - - - - - - - - - ', assessment.attributes.courseId);
          // return courseRepository
          //   .get(assessment.attributes.courseId)
          //   .then((course) => {
          //     console.log('course- - - - - - - - - - - - - - - - - - - - ', JSON.stringify(course));
          //     const challengesLength = _.get(course, 'challenges.length', 0);
          //     if (challengesLength > 0 && )
          //     return reply(new Course({id:'ccc'}));
          //   })
          //   .catch((err) => reply('ERROR'));
        }
        // console.log('assessment- - - - - - - - - - - - - - - - - - - - ', assessment);
        //recupérer le course en fonction de l'id assessment, puis aller chercher le nombre de challenge dans ce course


      });



  }

};
