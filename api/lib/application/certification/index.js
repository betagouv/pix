const certificationController = require('./certification-controller');
const connectedUserVerification = require('../../application/preHandlers/connected-user-verification');

exports.register = function(server, options, next) {

  server.route([
    {
      method: 'GET',
      path: '/api/certifications/{id}',
      config: {
        handler: certificationController.get,
        tags: ['api']
      }
    }
  ]);

  return next();
};

exports.register.attributes = {
  name: 'certification-courses-api',
  version: '1.0.0'
};
