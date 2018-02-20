const feedbackController = require('./feedback-controller');
const securityController = require('../../interfaces/controllers/security-controller');

exports.register = function(server, options, next) {

  server.route([
    {
      method: 'POST',
      path: '/api/feedbacks',
      config: {
        auth: false,
        handler: feedbackController.save,
        tags: ['api']
      }
    },
    {
      method: 'GET',
      path: '/api/feedbacks',
      config: {
        handler: feedbackController.find,
        tags: ['api']
      }
    }

  ]);

  return next();
};

exports.register.attributes = {
  name: 'feedbacks-api',
  version: '1.0.0'
};
