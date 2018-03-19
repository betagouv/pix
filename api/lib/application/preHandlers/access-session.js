const sessionService = require('../../domain/services/session-service');
const sessionCodeService = require('../../domain/services/session-code-service');

module.exports = {
  sessionIsOpened(request, reply) {

    if (sessionService.getCurrentCode() !== request.payload.data.attributes['session-code']) {
      return reply().code(401).takeover();
    }

    delete request.payload.data.attributes['session-code'];

    reply(request);
  },

  sessionExists(request, reply) {
    const sessionCode = request.payload.data.attributes['session-code'];
    return sessionCodeService.isCodeStarterValid(sessionCode)
      .then(isValid => {

        if(isValid) {
          reply(request);
        } else {
          return reply().code(401).takeover();
        }
      });
  }
};
