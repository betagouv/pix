const tokenService = require('../../domain/services/token-service');
const userRepository = require('../../infrastructure/repositories/user-repository');

module.exports = {

  execute(accessToken) {
    const userId = tokenService.extractUserId(accessToken);
    return userRepository.get(userId)
      .then(user => user.hasRolePixMaster);
  }

};
