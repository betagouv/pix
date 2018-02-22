const AssessmentController = require('./assessment-controller');
const AssessmentAuthorization = require('../preHandlers/assessment-authorization');
exports.register = function(server, options, next) {

  server.route([

    {
      method: 'POST',
      path: '/api/assessments',
      config: {
        auth: false,
        handler: AssessmentController.save,
        tags: ['api']
      }
    },
    {
      method: 'GET',
      path: '/api/assessments',
      config: {
        handler: AssessmentController.findByFilters,
        tags: ['api']
      }
    },
    {
      method: 'GET',
      path: '/api/assessments/{id}/next',
      config: {
        auth: false,
        handler: AssessmentController.getNextChallenge,
        tags: ['api']
      }
    },
    {
      method: 'GET',
      path: '/api/assessments/{id}/next/{challengeId}',
      config: {
        auth: false,
        handler: AssessmentController.getNextChallenge,
        tags: ['api']
      }
    },
    {
      method: 'GET',
      path: '/api/assessments/{id}',
      config: {
        auth: false,
        pre: [{
          method: AssessmentAuthorization.verify,
          assign: 'authorizationCheck'
        }],
        handler: AssessmentController.get,
        tags: ['api']
      }
    },
    {
      method: 'GET',
      path: '/api/assessments/{id}/solutions/{answerId}',
      config: { handler: AssessmentController.getAssessmentSolution, tags: ['api'] }
    }
  ]);

  return next();
};

exports.register.attributes = {
  name: 'assessments-api',
  version: '1.0.0'
};
