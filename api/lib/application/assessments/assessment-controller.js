/*eslint no-console: ["error", { allow: ["warn", "error"] }] */
const Boom = require('boom');
const assessmentSerializer = require('../../infrastructure/serializers/jsonapi/assessment-serializer');
const assessmentRepository = require('../../infrastructure/repositories/assessment-repository');
const assessmentService = require('../../domain/services/assessment-service');
const challengeRepository = require('../../infrastructure/repositories/challenge-repository');
const challengeSerializer = require('../../infrastructure/serializers/jsonapi/challenge-serializer');
const solutionSerializer = require('../../infrastructure/serializers/jsonapi/solution-serializer');
const courseRepository = require('../../infrastructure/repositories/course-repository');
const _ = require('../../infrastructure/utils/lodash-utils');
const answerRepository = require('../../infrastructure/repositories/answer-repository');
const solutionRepository = require('../../infrastructure/repositories/solution-repository');
const analysisUtils = require('./analysis-utils');

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
        courseRepository
          .get(assessment.get('courseId'))
          .then((course) => {

            const challengePromises = course.challenges.map(challengeId => challengeRepository.get(challengeId));

            Promise.all(challengePromises)
              .then(challenges => {

                const knowledgeOf = {};
                const difficultyOf = {};
                _.forEach(challenges, challenge => {
                  knowledgeOf[challenge.id] = challenge.knowledge;
                  difficultyOf[challenge.id] = parseInt(challenge.knowledge[0][challenge.knowledge[0].length - 1]);
                });

                const acquired = [];
                const notAcquired = [];
                const history = [];
                answerRepository.findByAssessment(assessment.get('id')).then((answers) => {

                  if(answers.length == 0) {
                    const serializedAssessment = assessmentSerializer.serialize(assessment);
                    return reply(serializedAssessment);
                  }

                  const modelAnswers = _.map(answers.models, o => o.attributes);

                  _.forEach(modelAnswers, function(answer) {
                    if(answer.result == 'ok') {
                      history.push({diff: difficultyOf[answer.challengeId], outcome: 1});
                      acquired.push(...knowledgeOf[answer.challengeId] || []);
                      // propagate <-
                    } else {
                      history.push({diff: difficultyOf[answer.challengeId], outcome: 0});
                      notAcquired.push(...knowledgeOf[answer.challengeId] || []);
                      // propagate ->
                    }
                  });

                  let estimatedLevel = 0;
                  let minScore = 1000;
                  for(let level = 0; level <= 6; level += 0.5) {
                    let score = analysisUtils.derivativeLogLikelihood(level, history);
                    if(score < minScore) {
                      minScore = score;
                      estimatedLevel = level;
                    }
                  }
                  assessment.attributes.estimatedLevel = estimatedLevel;  // Maybe this is a hack
                  assessment.attributes.notAcquired = notAcquired;
                  assessment.attributes.acquired = acquired;

                  const serializedAssessment = assessmentSerializer.serialize(assessment);
                  return reply(serializedAssessment);

                });

              }).catch((err) => reply(Boom.badImplementation(err)));

          }).catch((err) => reply(Boom.badImplementation(err)));

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

          answerRepository.findByAssessment(assessment.get('id')).then((answers) => {
            const answersLength = _.get(answers, 'length', 0);

            courseRepository
              .get(assessment.get('courseId'))
              .then((course) => {

                const challengesLength = _.get(course, 'challenges.length', 0);

                if (challengesLength > 0 && _.isEqual(answersLength, challengesLength)) {

                  const modelAnswers = _.map(answers.models, (o) => o.attributes);
                  const requestedAnswer = _.find(modelAnswers, { id: _.parseInt(request.params.answerId) });

                  solutionRepository
                    .get(requestedAnswer.challengeId)
                    .then((solution) => {
                      return reply(solutionSerializer.serialize(solution));
                    });
                } else {
                  return reply('null');
                }

              })
              .catch((err) => reply(Boom.badImplementation(err)));
          });
        }
      });
  }

};
