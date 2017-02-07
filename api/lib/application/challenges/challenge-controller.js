const Boom = require('boom');
const challengeRepository = require('../../infrastructure/repositories/challenge-repository');
const answerRepository = require('../../infrastructure/repositories/answer-repository');
const challengeSerializer = require('../../infrastructure/serializers/challenge-serializer');

const solutionService = require('../../domain/services/solution-service');

const _ = include('lib/utils/lodash-utils');

module.exports = {

  list(request, reply) {

    challengeRepository
      .list()
      .then((challenges) => reply(challengeSerializer.serializeArray(challenges)))
      .catch((err) => reply(Boom.badImplementation(err)));
  },

  revalidateAnswers(request, reply) {
    const challengeId = request.params.id;
    console.log('challengeId- - - - - - - - - - - - - - - - - - - - ', challengeId);
    return answerRepository
            .findByChallenge(challengeId)
            .then(allAnswersOfChallenge => {
              console.log('allAnswersOfChallenge- - - - - - - - - - - - - - - - - - - - ', allAnswersOfChallenge);
              const promises = allAnswersOfChallenge.map(answerOfChallenge => solutionService.revalidate(answerOfChallenge));
              Promise.all(promises).then(revalidatedAnswers => {
                return reply(revalidatedAnswers.length);
              });
            })
            .catch((err) => reply(Boom.badImplementation(err)));

    // const promises = challengeIds.map(challengeId => challengeRepository.get(challengeId));

    // Promise.all(promises)
    //   .then(challenges => {
    //     response.included = challenges.map(challenge => challengeSerializer.serialize(challenge).data);
    //     return reply(response);
    //   })
    //   .catch(err => reply(Boom.badImplementation(err)));

    // return reply(200);
  },

  get(request, reply) {

    challengeRepository
    .get(request.params.id)
    .then((challenge) => reply(challengeSerializer.serialize(challenge)))
    .catch((err) => {
      let error = Boom.badImplementation(err);
      if ('MODEL_ID_NOT_FOUND' == err.error.type) {
        error = Boom.notFound(err);
      }
      return reply(error);
    });
  },

  refresh(request, reply) {

    challengeRepository
    .refresh(request.params.id)
    .then((challenge) => reply(challengeSerializer.serialize(challenge)))
    .catch((err) => reply(Boom.badImplementation(err)));
  }

};

