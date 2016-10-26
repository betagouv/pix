'use strict';

const Boom = require('boom');
const assessmentSerializer = require('../serializers/assessment-serializer');
const Assessment = require('../models/data/assessment');

module.exports = {

  save: {
    handler: (request, reply) => {

      const assessment = assessmentSerializer.deserialize(request.payload);

      return assessment.save()
        .then((assessment) => reply(assessmentSerializer.serialize(assessment)).code(201))
        .catch((error) => reply(Boom.badImplementation(error)));
    }
 },

 get: {
    handler: (request, reply) => {

      new Assessment({ id: request.params.id }).fetch({withRelated: 'answers'}).then((assessment) => {
        reply(assessmentSerializer.serialize(assessment));
      });
    }
 }

};
