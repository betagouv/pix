const Boom = require('boom');
const logger = require('../../utils/logger');
const challengeRepository = require('../../repositories/challenge-repository');
const challengeSerializer = require('../../serializers/challenge-serializer');

exports.getChallenge = (request, reply) => {

  logger.info('into challengeController#getChallenge');

  return challengeRepository
    .get(request.params.id)
    .then(challenge => reply(challengeSerializer.serialize(challenge)))
    .catch(error => reply(Boom.badImplementation(error)));
};
