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
      // XXX : need to stringify/parse to have a the correct object
      let currentAssessment = JSON.parse(JSON.stringify(assessment));      

      console.log(currentAssessment);

      let answerThatAlreadyExists = _.find(currentAssessment.answers, {challengeId: answer.get('challengeId')});

      if (answerThatAlreadyExists) {
        console.log('EXISTS ' + answerThatAlreadyExists.id);

        // answer do not already exists, create it
        solutionRepository
        .get(answer.get('challengeId'))
        .then((solution) => {
          const answerCorrectness = solutionService.match(answer, solution);
          return new Answer({id:answerThatAlreadyExists.id}).save({result:answerCorrectness, challengeId:answer.get('challengeId')},{method:"update"})
            .then((updatedAnswer) => reply(answerSerializer.serialize(updatedAnswer)).code(200))
            .catch((err) => reply(Boom.badImplementation(err)));
        });

      } else {
        console.log('NOT EXISTS');
        
        // answer do not already exists, create it
        solutionRepository
        .get(answer.get('challengeId'))
        .then((solution) => {
          const answerCorrectness = solutionService.match(answer, solution);
          answer.set('result', answerCorrectness);
          return answer.save()
          .then((createdAnswer) => reply(answerSerializer.serialize(createdAnswer)).code(201))
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
