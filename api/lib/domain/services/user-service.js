const userRepository = require('../../../lib/infrastructure/repositories/user-repository');

module.exports = {
  isUserExisting(email) {
    return userRepository
      .findByEmail(email)
      .then(_ => true)
      .catch(_ => false);
  }
};
