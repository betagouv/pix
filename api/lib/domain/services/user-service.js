const userRepository = require('../../../lib/infrastructure/repositories/user-repository');
const { UserNotFoundError } = require('../errors');

module.exports = {
  isUserExisting(email) {
    return userRepository
      .findByEmail(email)
      .then(_ => true)
      .catch(_ => {
        throw new UserNotFoundError();
      });
  }
};
