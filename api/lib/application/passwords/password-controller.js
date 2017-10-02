const Boom = require('boom');
const userService = require('../../domain/services/user-service');
const mailService = require('../../domain/services/mail-service');
const resetPasswordService = require('../../domain/services/reset-password-service');
const resetPasswordDemandRepository = require('../../infrastructure/repositories/reset-password-demands-repository');
const { UserNotFoundError, InternalError } = require('../../domain/errors');
const errorSerializer = require('../../infrastructure/serializers/jsonapi/validation-error-serializer');

module.exports = {
  createResetDemand(request, reply) {
    if (!_isPayloadWellFormed(request)) {
      return reply(Boom.badRequest());
    }

    const { email, hostEnv } = request.payload;
    let temporarykey;

    return userService
      .isUserExisting(email)
      .then(() => resetPasswordService.invalidOldResetPasswordDemand(email))
      .then(() => {
        temporarykey = resetPasswordService.generateTemporaryKey();
        return temporarykey;
      })
      .then((temporaryKey) => resetPasswordDemandRepository.create({ email, temporaryKey }))
      .then(() => {
        mailService.sendResetPasswordDemandEmail(email, hostEnv, temporarykey);
        return reply();
      })
      .catch((err) => {
        if (err instanceof UserNotFoundError) {
          return reply(errorSerializer.serialize(UserNotFoundError.getErrorMessage())).code(404);
        }

        return reply(errorSerializer.serialize(InternalError.getErrorMessage())).code(500);
      });
  }
};

function _isPayloadWellFormed(request) {
  if (!(request.hasOwnProperty('payload') && ('email' in request.payload) && ('hostEnv' in request.payload))) {
    return false;
  }

  return true;
}
