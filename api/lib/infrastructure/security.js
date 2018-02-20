const securityController = require('../interfaces/controllers/security-controller');

module.exports = {

  scheme(server, options) {
    return { authenticate: (request, reply) => securityController.assertThatUserHasAValidAccessToken(request, reply) };
  }

};
