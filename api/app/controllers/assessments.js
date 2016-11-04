'use strict';

const Boom = require('boom');
const assessmentRepository = require('../repositories/assessment-repository');
const assessmentSerializer = require('../serializers/assessment-serializer');

const assessmentService = require('../services/assessment-service');
const challengeRepository = require('../repositories/challenge-repository');
const challengeSerializer = require('../serializers/challenge-serializer');

const answerSerializer = require('../serializers/answer-serializer');

const Assessment = require('../models/data/assessment');
const Answer = require('../models/data/answer');

module.exports = {

  save: {
    handler: (request, reply) => {

      const assessment = assessmentSerializer.deserialize(request.payload);

      return assessment.save()
        .then((assessment) => reply(assessmentSerializer.serialize(assessment)).code(201))
        .catch((error) => reply(Boom.badImplementation(error)));
    }

  },

  getNextChallenge: {
    handler: (request, reply) => {

      assessmentRepository
        .get(request.params.id)
        .then((assessment) => assessmentService.getAssessmentNextChallengeId(assessment, request.params.challengeId))
        .then((nextChallengeId) => challengeRepository.get(nextChallengeId))
        .then((challenge) => reply(challengeSerializer.serialize(challenge)))
        .catch((error) => reply(Boom.badImplementation(error)));
    }
  }

 },

 get: {
    handler: (request, reply) => {

       new Assessment({ id: request.params.id }).fetch().then((assessment) => {
        Answer.query('where', 'assessmentId', '=', assessment.id).fetchAll().then((allAnswers) => {
          
          let serializedAnswers = [];
          allAnswers.forEach(function (oneAnswer) {
            serializedAnswers.push(

                  {
                    "type":"answers",
                    "id":oneAnswer.attributes.id
                  }
                
            );   
          });

          let serializedAssessment = assessmentSerializer.serialize(assessment);
          if (!serializedAssessment.data.relationships) {
            serializedAssessment.data.relationships = {};
          }
          if (!serializedAssessment.data.relationships.answers) {
            serializedAssessment.data.relationships.answers = {};
          }
          if (!serializedAssessment.data.relationships.answers.data) {
            serializedAssessment.data.relationships.answers.data = {};
          }
          serializedAssessment.data.relationships.answers.data = serializedAnswers;
          reply(serializedAssessment);

        });
      });



    }
 }

};
