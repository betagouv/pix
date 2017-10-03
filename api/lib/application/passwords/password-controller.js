const userService = require('../../domain/services/user-service');
const mailService = require('../../domain/services/mail-service');
const resetPasswordService = require('../../domain/services/reset-password-service');
const passwordResetSerializer = require('../../infrastructure/serializers/jsonapi/password-reset-serializer');
const resetPasswordDemandRepository = require('../../infrastructure/repositories/reset-password-demands-repository');
const { UserNotFoundError, InternalError } = require('../../domain/errors');
const errorSerializer = require('../../infrastructure/serializers/jsonapi/validation-error-serializer');

module.exports = {
  createResetDemand(request, reply) {

    const { email } = request.payload.data.attributes;
    const passwordResetDemandBaseurl = _buildPasswordResetDemandBaseUrl(request);
    let temporarykey;

    return userService
      .isUserExisting(email)
      .then(() => resetPasswordService.invalidOldResetPasswordDemand(email))
      .then(() => {
        temporarykey = resetPasswordService.generateTemporaryKey();
        return temporarykey;
      })
      .then((temporaryKey) => resetPasswordDemandRepository.create({ email, temporaryKey }))
      .then((savedPasswordResetDemand) => {
        const passwordResetDemand = savedPasswordResetDemand.attributes;
        mailService.sendResetPasswordDemandEmail(email, passwordResetDemandBaseurl, temporarykey);
        return reply(passwordResetSerializer.serialize(passwordResetDemand)).code(201);
      })
      .catch((err) => {
        if (err instanceof UserNotFoundError) {
          return reply(errorSerializer.serialize(UserNotFoundError.getErrorMessage())).code(404);
        }

        return reply(errorSerializer.serialize(InternalError.getErrorMessage())).code(500);
      });
  }
};

function _buildPasswordResetDemandBaseUrl(request) {
  return `${request.connection.info.protocol}://${request.info.host}`;
}
