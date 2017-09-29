const userRepository = require('../../../lib/infrastructure/repositories/user-repository');
const errorSerializer = require('../../../lib/infrastructure/serializers/jsonapi/validation-error-serializer');
const { UserNotFoundError } = require('../../domain/errors');

module.exports = {
  verifyById(request, reply) {
    return userRepository
      .findUserById(request.params.id)
      .then(reply)
      .catch(() => {
        const serializedError = errorSerializer.serialize(UserNotFoundError.getErrorMessage());
        reply(serializedError).code(404).takeover();
      });
  }
};
