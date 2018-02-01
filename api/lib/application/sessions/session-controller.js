const Boom = require('boom');

const logger = require('../../infrastructure/logger');
const sessionService = require('../../domain/services/session-service');
const sessionRepository = require('../../infrastructure/repositories/session-repository');
const deserializeSession = require('../../infrastructure/serializers/jsonapi/session-serializer');

module.exports = {
  get(request, reply) {
    reply(sessionService.getCurrentCode());
  },

  save(request, reply) {
    return sessionRepository.save(deserializeSession.deserialize(request.payload))
      .then(reply)
      .catch((err) => {
        logger.error(err);

        reply(Boom.badImplementation(err));
      });
  }
};
