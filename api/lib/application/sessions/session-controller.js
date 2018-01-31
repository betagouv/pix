const sessionService = require('../../domain/services/session-service');

module.exports = {
  get(request, reply) {
    reply(sessionService.getCurrentCode());
  },

  save(request, reply) {
    reply({});
  }
};
