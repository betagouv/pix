const jsonwebtokenUtils = require('../../infrastructure/utils/jsonwebtoken-utils');
const assessmentRepository = require('../../infrastructure/repositories/assessment-repository');
const validationErrorSerializer = require('../../infrastructure/serializers/jsonapi/validation-error-serializer');

module.exports = {
  verify(request, reply) {
    const userId = jsonwebtokenUtils.extractUserId(request.headers);
    const assessmentId = request.params.id;

    return assessmentRepository
      .getByUserIdAndAssessmentId(assessmentId, userId)
      .then(reply)
      .catch(() => {
        const buildedError = _handleWhenInvalidAuthorization('Vous n’êtes pas autorisé à accéder à cette évaluation');
        return reply(validationErrorSerializer.serialize(buildedError)).code(401).takeover();
      });
  }
};

function _handleWhenInvalidAuthorization(errorMessage) {
  return {
    data: {
      authorization: [errorMessage]
    }
  };
}
