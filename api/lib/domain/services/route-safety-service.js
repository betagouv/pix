const jsonWebToken = require('../../infrastructure/validators/jsonwebtoken-verify');
const assessmentRepository = require('../../infrastructure/repositories/assessment-repository');
const Boom = require('boom');

module.exports = {
  canUserAccessReadThisAssessment(request, reply) {
    return jsonWebToken
      .verify(request.headers.authorization)
      .then((userId) => assessmentRepository.getByUserIdAndAssessmentId(request.params.id, userId))
      .then(reply)
      .catch(() => {
        return reply(Boom.unauthorized()).code(401).takeover();
      });
  }
};
