const securityController = require('../interfaces/controllers/security-controller');

module.exports = {

  scheme() {
    return { authenticate: (request, reply) => securityController.assertThatUserHasAValidAccessToken(request, reply) };
  }

};
