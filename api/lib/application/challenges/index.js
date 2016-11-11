const ChallengeController = require('./challenge-controller');

exports.register = function (server, options, next) {

  server.route([
    { method: 'GET', path: '/api/challenges', handler: ChallengeController.list },
    { method: 'GET', path: '/api/challenges/{id}', handler: ChallengeController.get }
  ]);

  return next();
};

exports.register.attributes = {
  name: 'challenges-api',
  version: '1.0.0'
};
