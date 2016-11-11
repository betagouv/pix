const Boom = require('boom');
const courseRepository = require('../../infrastructure/repositories/course-repository');
const courseSerializer = require('../../infrastructure/serializers/course-serializer');
const logger = require('../../infrastructure/utils/logger');

module.exports = {

  list(request, reply) {

    logger.info('CourseController#list');

    courseRepository
      .list()
      .then((courses) => reply(courseSerializer.serializeArray(courses)))
      .catch((err) => reply(Boom.badImplementation(err)));
  },

  get(request, reply) {

    logger.info('CourseController#get');

    courseRepository
      .get(request.params.id)
      .then((course) => reply(courseSerializer.serialize(course)))
      .catch((err) => reply(Boom.badImplementation(err)));
  }

};

