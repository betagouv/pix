const Boom = require('boom');
const logger = require('../../infrastructure/logger');
const certificationService = require('../../domain/services/certification-service');
const certificationCourseService = require('../../../lib/domain/services/certification-course-service');
const certificationSerializer = require('../../infrastructure/serializers/jsonapi/certification-serializer');
const certificationCourseSerializer = require('../../infrastructure/serializers/jsonapi/certification-course-serializer');
const { NotFoundError } = require('../../domain/errors');

module.exports = {

  computeResult(request, reply) {
    const certificationCourseId = request.params.id;

    return certificationService.calculateCertificationResultByCertificationCourseId(certificationCourseId)
      .then(reply)
      .catch((err) => {
        logger.error(err);
        reply(Boom.badImplementation(err));
      });
  },

  getResult(request, reply) {
    const certificationCourseId = request.params.id;
    return certificationService.getCertificationResult(certificationCourseId)
      .then(certificationResult => {
        reply(certificationCourseSerializer.serializeResult(certificationResult));
      })
      .catch((err) => {
        if(err instanceof NotFoundError) {
          return reply(Boom.notFound(err));
        }
        logger.error(err);
        reply(Boom.badImplementation(err));
      });
  },

  update(request, reply) {

    return certificationSerializer.deserialize(request.payload)
      .then((certificationCourse) => {
        return certificationCourseService.update(certificationCourse);
      })
      .then((savedCertificationCourse) => {
        reply(certificationSerializer.serialize(savedCertificationCourse));
      })
      .catch((err) => {
        reply(Boom.notFound(err));
      });
  }

};
