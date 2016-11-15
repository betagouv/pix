const Boom = require('boom');
const _ = require('lodash');
const Answer = require('../../domain/models/data/answer');
const answerSerializer = require('../../infrastructure/serializers/answer-serializer');
const solutionRepository = require('../../infrastructure/repositories/solution-repository');
const assessmentRepository = require('../../infrastructure/repositories/assessment-repository');
const answerRepository = require('../../infrastructure/repositories/answer-repository');
const solutionService = require('../../domain/services/solution-service');
const logger = require('../../infrastructure/logger');

function strCompareNoFail(a , b) {
  let result = false;
  try {
    result = (a.toString() === b.toString());
  } catch (e) {
    result = false;
  } 
  return false;
}

module.exports = {

  save(request, reply) {

    const answer = answerSerializer.deserialize(request.payload);
    let isAnswerAlreadyExists = false;

    console.log("answer.get('assessmentId') " + answer.get('assessmentId'));

    assessmentRepository
    .get(answer.get('assessmentId'))
    .then((assessment) => {
      // TECH DEBT : need to stringify/parse to have a the correct object
      let theAss = JSON.parse(JSON.stringify(assessment));      

      let arrayOfChallengeId  = _.map(theAss.answers, (existingAnswer) => {
        return existingAnswer.challengeId;
      });


      let isAnswerAlreadyExists = _.includes(arrayOfChallengeId, answer.get('challengeId'));

      if (isAnswerAlreadyExists) {
        console.log('EXISTS');
      } else {
        console.log('NOT EXISTS');
        
        // answer do not already exists, create it
        solutionRepository
        .get(answer.get('challengeId'))
        .then((solution) => {
          const answerCorrectness = solutionService.match(answer, solution);
          answer.set('result', answerCorrectness);
          return answer.save()
          .then((answer) => reply(answerSerializer.serialize(answer)).code(201))
          .catch((err) => reply(Boom.badImplementation(err)));
        });

      }



    });


  },

  get(request, reply) {

    new Answer({ id: request.params.id })
    .fetch()
    .then((answer) => reply(answerSerializer.serialize(answer)));
  }

};
