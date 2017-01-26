const FollowerController = require('./follower-controller');

exports.register = function (server, options, next) {

  server.route([
    {
      method: 'POST',
      path: '/api/follower-form-test.js',
      config: { handler: FollowerController.save, tags: ['api'] }
    }
  ]);

  return next();
};

exports.register.attributes = {
  name: 'follower-form-test.js-api',
  version: '1.0.0'
};
