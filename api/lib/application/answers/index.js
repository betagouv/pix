const AnswerController = require('./answer-controller');

exports.register = function (server, options, next) {

  server.route([
    { method: 'POST', path: '/api/answers', handler: AnswerController.save },
    { method: 'GET', path: '/api/answers/{id}', handler: AnswerController.get }
  ]);

  return next();
};

exports.register.attributes = {
  name: 'answers-api',
  version: '1.0.0'
};
