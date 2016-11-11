const CourseController = require('./course-controller');

exports.register = function (server, options, next) {

  server.route([
    { method: 'GET', path: '/api/courses', handler: CourseController.list },
    { method: 'GET', path: '/api/courses/{id}', handler: CourseController.get }
  ]);

  return next();
};

exports.register.attributes = {
  name: 'courses-api',
  version: '1.0.0'
};
