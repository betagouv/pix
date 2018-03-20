const sessionService = require('../../domain/services/session-service');
const sessionCodeService = require('../../domain/services/session-code-service');

module.exports = {
  // TODO : to be remove
  sessionIsOpened(request, reply) {

    if (sessionService.getCurrentCode() !== request.payload.data.attributes['access-code']) {
      return reply().code(401).takeover();
    }

    delete request.payload.data.attributes['access-code'];

    reply(request);
  },

};
