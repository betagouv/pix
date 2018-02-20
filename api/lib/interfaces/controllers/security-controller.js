const tokenService = require('../../domain/services/token-service');

module.exports = {

  assertThatUserHasAValidAccessToken(request, reply) {
    const accessToken = request.headers.authorization;
    return tokenService.verifyValidity(accessToken)
      .then(() => reply(true))
      .catch(err => {
        console.error(err);
        const jsonApiSerializedError = { err };
        reply(jsonApiSerializedError).code(401).takeover();
      });
  },

};
