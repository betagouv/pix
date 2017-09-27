const jsonwebtoken = require('jsonwebtoken');
const settings = require('../../settings');
const tokenService = require('../services/token-service');
const { InvalidTemporaryKeyError, PasswordResetDemandNotFoundError } = require('../errors');
const resetPasswordDemandRepository = require('../../infrastructure/repositories/password-reset-demands-repository');

module.exports = {
  generateTemporaryKey() {
    return jsonwebtoken.sign({
      data: settings.temporaryKey.payload
    }, settings.temporaryKey.secret, { expiresIn: settings.temporaryKey.tokenLifespan });
  },

  invalidOldResetPasswordDemand(userEmail) {
    return resetPasswordDemandRepository.markAsBeingUsed(userEmail);
  },

  verifyDemand(temporaryKey) {
    const isAValidDemand = tokenService.verifyValidity(temporaryKey);
    if (!isAValidDemand) {
      return Promise.reject(new InvalidTemporaryKeyError());
    }

    return resetPasswordDemandRepository
      .findByTemporaryKey(temporaryKey)
      .then((fetchedDemand) => {
        if (!fetchedDemand) {
          throw new PasswordResetDemandNotFoundError();
        }
        return fetchedDemand.toJSON();
      });
  }
};
