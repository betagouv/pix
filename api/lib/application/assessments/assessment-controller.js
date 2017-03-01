const Boom = require('boom');
const assessmentSerializer = require('../../infrastructure/serializers/jsonapi/assessment-serializer');
const assessmentRepository = require('../../infrastructure/repositories/assessment-repository');
const assessmentService = require('../../domain/services/assessment-service');
const assessmentUtils = require('../../domain/services/assessment-service-utils');
const challengeRepository = require('../../infrastructure/repositories/challenge-repository');
const challengeSerializer = require('../../infrastructure/serializers/jsonapi/challenge-serializer');
const solutionSerializer = require('../../infrastructure/serializers/jsonapi/solution-serializer');
const courseRepository = require('../../infrastructure/repositories/course-repository');
const _ = require('../../infrastructure/utils/lodash-utils');
const answerRepository = require('../../infrastructure/repositories/answer-repository');
const solutionRepository = require('../../infrastructure/repositories/solution-repository');
const analysisUtils = require('./analysis-utils');

function nextNode(node, dir) {
  return node.slice(0, -1) + (parseInt(node.slice(-1)) + dir);
}

function propagateAcquix(allKnowledge, startNode, dir) {
  const nodeList = [];
  let node = startNode;
  while(allKnowledge.hasOwnProperty(node)) {
    nodeList.push(node);
    node = nextNode(node, dir);
  }
  return nodeList;
}

module.exports = {

  nextNode,
  propagateAcquix,

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
                const allKnowledge = {};
                _.forEach(challenges, challenge => {
                  if(challenge.knowledge !== undefined) {
                    challenge.knowledge.forEach(knowledge => allKnowledge[knowledge] = 1);
                    knowledgeOf[challenge.id] = challenge.knowledge;
                    difficultyOf[challenge.id] = parseInt(challenge.knowledge[0].slice(-1));
                  }
                });

                const acquired = [];
                const notAcquired = [];
                const history = [];
                answerRepository.findByAssessment(assessment.get('id')).then((answers) => {

                  if (answers.length === 0) {
                    const serializedAssessment = assessmentSerializer.serialize(assessment);
                    return reply(serializedAssessment);
                  }

                  const modelAnswers = _.map(answers.models, o => o.attributes);

                  _.forEach(modelAnswers, function(answer) {
                    if(knowledgeOf.hasOwnProperty(answer.challengeId)) {
                      const startNode = knowledgeOf[answer.challengeId][0];
                      if (answer.result === 'ok') {
                        history.push({diff: difficultyOf[answer.challengeId], outcome: 1});
                        if (startNode !== undefined)
                          acquired.push(...propagateAcquix(allKnowledge, startNode, -1));
                      } else {
                        history.push({diff: difficultyOf[answer.challengeId], outcome: 0});
                        if (startNode !== undefined)
                          notAcquired.push(...propagateAcquix(allKnowledge, startNode, 1));
                      }
                    }
                  });

                  const pixScore = Math.round(64 * acquired.length / Object.keys(knowledgeOf).length);

                  let estimatedLevel = 4;
                  let minScore = 1000;
                  if (history.length > 0) { 
                    for(let level = 0; level <= 6; level += 0.5) {
                      const score = analysisUtils.derivativeLogLikelihood(level, history);
                      if(score < minScore) {
                        minScore = score;
                        estimatedLevel = level;
                      }
                    }
                  }
                  assessment.attributes.estimatedLevel = estimatedLevel;  // For the reviewer: maybe this is a hack?
                  assessment.attributes.pixScore = pixScore;
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
        }
        
        return answerRepository.findByAssessment(assessment.get('id'))
          .then((answers) => {
            const answersLength = _.get(answers, 'length', 0);

            courseRepository
              .get(assessment.get('courseId'))
              .then((course) => {

                const challengesLength = _.get(course, 'challenges.length', 0);

                if (!course.isAdaptive) {
                  return challengesLength > 0 && _.isEqual(answersLength, challengesLength);
                } else {
                  const responsePattern = assessmentUtils.getResponsePattern(answers);
                  return assessmentUtils.getNextChallengeFromScenarios(responsePattern)
                    .then(nextChallengeId => nextChallengeId === null);
                }
              })
              .then((testIsOver) => {

                if(testIsOver) {
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
      });
  }

};
