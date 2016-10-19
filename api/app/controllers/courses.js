'use strict';

const Boom = require('boom');
const courseRepository = require('../repositories/course-repository');
const courseSerializer = require('../serializers/course-serializer');

const CACHE_DURATION_IN_MS = 5 * 60 * 1000;

module.exports = {

  list: {
    handler: (request, reply) => {

      courseRepository
        .list()
        .then((courses) => reply(courseSerializer.serializeArray(courses)))
        .catch((error) => reply(Boom.badImplementation(error)));
    },
    cache: {
      expiresIn: CACHE_DURATION_IN_MS
    }
  },

  get: {
    handler: (request, reply) => {

      courseRepository
        .get(request.params.id)
        .then((course) => reply(courseSerializer.serialize((course))))
        .catch((error) => reply(Boom.badImplementation(error)));
    },
    cache: {
      expiresIn: CACHE_DURATION_IN_MS
    }
  }

};
