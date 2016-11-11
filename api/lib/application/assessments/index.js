const AssessmentController = require('./assessment-controller');

exports.register = function (server, options, next) {

  server.route([

    { method: 'POST', path: '/api/assessments', handler: AssessmentController.save },
    { method: 'GET', path: '/api/assessments/{id}/next', handler: AssessmentController.getNextChallenge },
    { method: 'GET', path: '/api/assessments/{id}/next/{challengeId}', handler: AssessmentController.getNextChallenge },
    { method: 'GET', path: '/api/assessments/{id}', handler: AssessmentController.get }
  ]);

  return next();
};

exports.register.attributes = {
  name: 'assessments-api',
  version: '1.0.0'
};
