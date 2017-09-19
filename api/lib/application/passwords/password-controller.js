const Boom = require('boom');
const userService = require('../../domain/services/user-service');
const tokenService = require('../../domain/services/token-service');
const { UserNotFoundError } = require('../../domain/errors');
const errorSerializer = require('../../infrastructure/serializers/jsonapi/validation-error-serializer');

module.exports = {
  resetDemand(request, reply) {
    if (!(request.hasOwnProperty('payload') && ('email' in request.payload))) {
      return reply(Boom.badRequest());
    }

    return userService
      .isUserExisting(request.payload.email)
      .then(() => tokenService.generateTemporaryKey())
      .catch((err) => {
        if (err instanceof UserNotFoundError) {
          return reply(errorSerializer.serialize(UserNotFoundError.getErrorMessage()));
        }
      });
  }
};
