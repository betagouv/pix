const Boom = require('boom');
const AnswerRepository = require('../../infrastructure/repositories/answer-repository');
const SolutionRepository = require('../../infrastructure/repositories/solution-repository');
const qmailService = require('../../domain/services/qmail-service');
const qmailValidationService = require('../../domain/services/qmail-validation-service');
const { NotFoundError, NotElligibleToQMAILError } = require('../../domain/errors');

function _checkThatChallengeIsQMAIL(challengeSolution) {
  if(challengeSolution.type !== 'QMAIL') {
    throw new NotElligibleToQMAILError();
  }
}

module.exports = {

  validate(request, reply) {

    let challengeSolution;
    const emailRecipient = request.payload.mail.to.text;
    const { challengeId, assessmentId } = qmailService.extractChallengeIdAndAssessmentFromEmail(emailRecipient);

    return SolutionRepository
      .get(challengeId)
      .then((foundSolution) => challengeSolution = foundSolution)
      .then(_checkThatChallengeIsQMAIL)
      .then(() => {
        return AnswerRepository.findByChallengeAndAssessment(challengeId, assessmentId);
      })
      .then((answer) => {
        const answerDoesNotExists = (answer === null);

        if(answerDoesNotExists)
          return;

        const isEmailValidated = qmailValidationService.validateEmail(request.payload, challengeSolution.value);

        console.log(request.payload);
        console.log(challengeSolution.value);
        console.log(isEmailValidated);

        if(isEmailValidated) {
          answer.set('result', 'ok');
        } else {
          answer.set('result', 'ko');
        }

        return answer.save();
      })
      .then(reply)
      .catch((err) => {
        if(err instanceof NotFoundError) {
          reply(Boom.badRequest(`Le challenge ${challengeId} n'existe pas.`));
        } else if(err instanceof NotElligibleToQMAILError) {
          reply(Boom.badRequest(`Le challenge ${challengeId} n'est pas elligible à une validation QMAIL`));
        } else {
          reply(Boom.badImplementation(err));
        }
      });
  }
};
