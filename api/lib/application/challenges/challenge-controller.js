const Boom = require('boom');
const challengeRepository = require('../../infrastructure/repositories/challenge-repository');
const challengeSerializer = require('../../infrastructure/serializers/challenge-serializer');
const logger = require('../../infrastructure/utils/logger');

module.exports = {

  list(request, reply) {

    logger.info('ChallengeController#list');

    challengeRepository
      .list()
      .then((challenges) => reply(challengeSerializer.serializeArray(challenges)))
      .catch((err) => reply(Boom.badImplementation(err)));
  },

  get(request, reply) {

    logger.info('ChallengeController#get');

    challengeRepository
      .get(request.params.id)
      .then((challenge) => reply(challengeSerializer.serialize(challenge)))
      .catch((err) => reply(Boom.badImplementation(err)));
  }

};

