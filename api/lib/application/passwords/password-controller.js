const Boom = require('boom');
const userService = require('../../domain/services/user-service');
const mailService = require('../../domain/services/mail-service');
const resetPasswordService = require('../../domain/services/reset-password-service');
const resetPasswordDemandRepository = require('../../infrastructure/repositories/reset-password-demands-repository');
const { UserNotFoundError, InternalError } = require('../../domain/errors');
const errorSerializer = require('../../infrastructure/serializers/jsonapi/validation-error-serializer');

module.exports = {
  resetDemand(request, reply) {
    if (!(request.hasOwnProperty('payload') && ('email' in request.payload))) {
      return reply(Boom.badRequest());
    }

    const { email } = request.payload;
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
        mailService.sendResetPasswordDemandEmail(email, temporarykey);
        reply();
      })
      .catch((err) => {
        if (err instanceof UserNotFoundError) {
          return reply(errorSerializer.serialize(UserNotFoundError.getErrorMessage()));
        }

        return reply(errorSerializer.serialize(InternalError.getErrorMessage()));
      });
  }
};
