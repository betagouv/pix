const Boom = require('boom');
const assessmentSerializer = include('lib/infrastructure/serializers/assessment-serializer');
const solutionSerializer = include('lib/infrastructure/serializers/solution-serializer');
const assessmentRepository = require('../../infrastructure/repositories/assessment-repository');
const assessmentService = require('../../domain/services/assessment-service');
const challengeRepository = require('../../infrastructure/repositories/challenge-repository');
const challengeSerializer = require('../../infrastructure/serializers/challenge-serializer');
const courseRepository = include('lib/infrastructure/repositories/course-repository');
const _ = include('lib/utils/lodash-utils');
const answerRepository = include('lib/infrastructure/repositories/answer-repository');
const solutionRepository = include('lib/infrastructure/repositories/solution-repository');

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
        if (_.isEmpty(assessment)) {
          return reply('null');
        } else {

          answerRepository.findByAssessment(assessment.attributes.id).then((answers) => {
            const answersLength = _.get(answers, 'length', 0);

            courseRepository
              .get(assessment.attributes.courseId)
              .then((course) => {
                const challengesLength = _.get(course, 'challenges.length', 0);
                if (challengesLength > 0 && _.isEqual(answersLength, challengesLength)) {

                  const modelAnswers = _.map(answers.models, (o) => o.attributes);
                  console.log('modelAnswers- - - - - - - - - - - - - - - - - - - - ', modelAnswers);
                  const requestedAnswer = _.find(modelAnswers, {id: _.parseInt(request.params.answerId)});
                  console.log('requestedAnswer- - - - - - - - - - - - - - - - - - - - ', requestedAnswer);

                  solutionRepository
                    .get(requestedAnswer.challengeId)
                    .then((solution) => {
                      console.log('solution- - - - - - - - - - - - - - - - - - - - ', solution);
                      return reply(solutionSerializer.serialize(solution));
                    });
                  // console.log('answers.models- - - - - - - - - - - - - - - - - - - - ', answers.models[0].attributes);
                  // console.log('answers.models- - - - - - - - - - - - - - - - - - - - ', _.map(answers.models, (o) => o.attributes));


                  // return reply('hurray');
                    // solutionRepository
                    //   .get(request.params.answerId)
                    //   .then((solution, reject) => {
                    //     console.log('helllloooo');
                    //     console.log('solution- - - - - - - - - - - - - - - - - - - - ', solution);
                    //     console.log('solution- - - - - - - - - - - - - - - - - - - - ', reject);
                    //   });
                } else {
                  return reply('null');
                }

              })
              .catch((err) => reply('ERROR'));

          });

        }


      });



  }

};
