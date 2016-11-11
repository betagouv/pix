const challengeController = require('./challenge-controller');

exports.register = function (server, options, next) {

  server.route([{
    method: 'GET',
    path: '/api/v2/challenges/{id}',
    handler: challengeController.getChallenge
  }]);

  return next();
};

exports.register.attributes = {
  name: 'challenges-api',
  version: '2.0.0'
};
