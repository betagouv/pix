const CourseController = require('./course-controller');
const JSONAPISchema = require('../../infrastructure/schemas/jsonapi');

exports.register = function(server, options, next) {

  server.route([
    {
      method: 'GET',
      path: '/api/courses',
      config: {
        handler: CourseController.list,
        tags: ['api'],
        plugins: {
          ratify: {
            response: {
              schema: JSONAPISchema,
              sample: 100,        // TODO: disable in production
              failAction: 'error' // Valid choices: 'log' or 'error'
            }
          }
        }
      }
    },
    {
      method: 'PUT',
      path: '/api/courses',
      config: { handler: CourseController.refreshAll, tags: ['api'] }
    },
    {
      method: 'GET',
      path: '/api/courses/{id}',
      config: { handler: CourseController.get, tags: ['api'] }
    },
    {
      method: 'POST',
      path: '/api/courses/{id}',
      config: { handler: CourseController.refresh, tags: ['api'] }
    }
  ]);

  return next();
};

exports.register.attributes = {
  name: 'courses-api',
  version: '1.0.0'
};
