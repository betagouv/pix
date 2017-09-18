const userService = require('../../domain/services/user-service');

module.exports = {
  resetDemand(request, reply) {
    if (!(request.hasOwnProperty('payload') && ('email' in request.payload))) {
      return reply().code(400);
    }

    return userService.isUserExisting(request.payload.email);
  }
};
