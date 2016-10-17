'use strict';

const Boom = require('boom');
const Assessment = require('../models/data/assessment');
const Answer = require('../models/data/answer');
const assessmentService = require('../services/assessment-service');

module.exports = {

  save: {
    handler: (request, reply) => {

      return new Assessment({
        userId: request.payload.userId,
        courseId: request.payload.courseId,
        userName: request.payload.userName,
        userEmail: request.payload.userEmail,
      })
        .save()
        .then((assessment) => reply(assessment).code(201))
        .catch((error) => reply(Boom.badImplementation(error)));
    }
  },

  saveAnswer: {
    handler: (request, reply) => {
      let assessment;
      let challengeId;
      return new Answer(request.payload)
        .save()
        .then((answer) => assessmentService.getAssessmentNextChallengeId(assessment, challengeId))
        .then((nextChallengeId) => reply(nextChallengeId).code(201))
        .catch((error) => reply(Boom.badImplementation(error)));
    }
  }

};
