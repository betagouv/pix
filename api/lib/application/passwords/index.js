const passwordController = require('./password-controller');

exports.register = function(server, options, next) {

  server.route([
    {
      method: 'POST',
      path: '/api/reset-password',
      config: {
        handler: passwordController.resetDemand, tags: ['api']
      }
    },
    {
      method: 'GET',
      path: '/api/reset-password/{temporaryKey}',
      config: {
        handler: passwordController.checkResetDemand, tags: ['api']
      }
    }
  ]);

  return next();
};

exports.register.attributes = {
  name: 'passwords-api',
  version: '1.0.0'
};
