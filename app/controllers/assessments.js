'use strict';

const Boom = require('boom');
const Answer = require('../models/data/answer');
const assessmentService = require('../services/assessment-service');
const assessmentSerializer = require('../serializers/assessment-serializer');

module.exports = {

  save: {
    handler: (request, reply) => {

      const assessment = assessmentSerializer.deserialize(request.payload);

      return assessment.save()
        .then((assessment) => reply(assessmentSerializer.serialize(assessment)).code(201))
        .catch((error) => reply(Boom.badImplementation(error)));
    }
  }

};
