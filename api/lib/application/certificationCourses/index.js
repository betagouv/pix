const certificationCourseController = require('./certification-course-controller');
const connectedUserVerification= require('../../application/preHandlers/connected-user-verification');

exports.register = function(server, options, next) {

  server.route([
    {
      method: 'POST',
      path: '/api/certification-courses',
      config: {
        pre: [{
          method: connectedUserVerification.verifyByToken,
          assign: 'authorizationCheck'
        }],
        handler: certificationCourseController.save,
        tags: ['api']
      }
    }
  ]);

  return next();
};

exports.register.attributes = {
  name: 'course-groups-api',
  version: '1.0.0'
};
