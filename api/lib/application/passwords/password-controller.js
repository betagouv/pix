const Boom = require('boom');
const userService = require('../../domain/services/user-service');
const mailService = require('../../domain/services/mail-service');
const resetPasswordService = require('../../domain/services/password-reset-service');
const UserRepository = require('../../infrastructure/repositories/user-repository');
const ResetPasswordDemandRepository = require('../../infrastructure/repositories/password-reset-demands-repository');
const { UserNotFoundError, InternalError, InvalidTemporaryKeyError, PasswordResetDemandNotFoundError } = require('../../domain/errors');
const errorSerializer = require('../../infrastructure/serializers/jsonapi/validation-error-serializer');
const serializer = require('../../infrastructure/serializers/jsonapi/password-reset-serializer');

module.exports = {
  resetDemand(request, reply) {
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
      .then((temporaryKey) => ResetPasswordDemandRepository.create({ email, temporaryKey }))
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
  },

  checkResetDemand(request, reply) {
    const temporaryKey = request.params.temporaryKey;

    return resetPasswordService.verifyDemand(temporaryKey)
      .then(({ email }) => {
        return UserRepository.findByEmail(email);
      })
      .then((user) => serializer.serialize(user.toJSON()))
      .then(reply)
      .catch((err) => {
        if (err instanceof InvalidTemporaryKeyError) {
          return reply(errorSerializer.serialize(InvalidTemporaryKeyError.getErrorMessage())).code(401);
        }
        if (err instanceof PasswordResetDemandNotFoundError) {
          return reply(errorSerializer.serialize(PasswordResetDemandNotFoundError.getErrorMessage())).code(404);
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
