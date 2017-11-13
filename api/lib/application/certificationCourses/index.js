const certificationCourseController = require('./certification-course-controller');

exports.register = function(server, options, next) {

  server.route([
    {
      method: 'POST',
      path: '/api/certification-courses',
      config: { handler: certificationCourseController.save, tags: ['api'] }
    }
  ]);

  return next();
};

exports.register.attributes = {
  name: 'course-groups-api',
  version: '1.0.0'
};
