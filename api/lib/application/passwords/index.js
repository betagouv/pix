const passwordController = require('./password-controller');

exports.register = function(server, options, next) {

  server.route([
    {
      method: 'POST',
      path: '/api/reset-password',
      config: {
        handler: passwordController.resetDemand, tags: ['api']
      }
    }
  ]);

  return next();
};

exports.register.attributes = {
  name: 'passwords-api',
  version: '1.0.0'
};
