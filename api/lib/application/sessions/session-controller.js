const Boom = require('boom');

const logger = require('../../infrastructure/logger');
const sessionService = require('../../domain/services/session-service');
const sessionRepository = require('../../infrastructure/repositories/session-repository');
const serializer = require('../../infrastructure/serializers/jsonapi/session-serializer');

module.exports = {
  get(request, reply) {
    reply(sessionService.getCurrentCode());
  },

  save(request, reply) {
    const sessionModel = serializer.deserialize(request.payload);

    return sessionRepository.save(sessionModel)
      .then((session) => serializer.serialize(session))
      .then(reply)
      .catch((err) => {
        logger.error(err);

        reply(Boom.badImplementation(err));
      });
  }
};
