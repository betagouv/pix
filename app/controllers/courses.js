'use strict';

const Boom = require('boom');
const courseRepository = require('../repositories/course-repository');

module.exports = {

  list: {
    handler: (request, reply) => {

      courseRepository
        .list()
        .then((courses) => reply(courses))
        .catch((error) => reply(Boom.badImplementation(error)));
    }
  },

  get: {
    handler: (request, reply) => {

      courseRepository
        .get(request.params.id)
        .then((course) => reply(course))
        .catch((error) => reply(Boom.badImplementation(error)));
    }
  }

};
