const passwordController = require('./password-controller');

exports.register = function(server, options, next) {

  server.route([
    {
      method: 'POST',
      path: '/api/password-reset-demands',
      config: {
        handler: passwordController.resetDemand, tags: ['api']
      }
    },
    {
      method: 'GET',
      path: '/api/password-reset-demands/{temporaryKey}',
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
