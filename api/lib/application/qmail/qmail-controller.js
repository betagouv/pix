const Boom = require('boom');
const AnswerRepository = require('../../infrastructure/repositories/answer-repository');
const qmailService = require('../../domain/services/qmail-service');

function _updateAnswerIfExists(answer) {
  const answerDoesNotExists = answer === null;
  if(answerDoesNotExists)
    return;

  answer.set('result', 'ok');

  return answer.save();
}

module.exports = {

  validate(request, reply) {

    const emailRecipient = request.payload.mail.to.text;
    const { challengeId, assessmentId } = qmailService.extractChallengeIdAndAssessmentFromEmail(emailRecipient);

    return AnswerRepository
      .findByChallengeAndAssessment(challengeId, assessmentId)
      .then(_updateAnswerIfExists)
      .then(() => {
        reply();
      })
      .catch((err) => {
        reply(Boom.badImplementation(err));
      });
  }
};
