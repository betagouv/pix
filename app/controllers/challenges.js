'use strict';

const base = require('../../config/airtable').base;
const Boom = require('boom');
const challengeRepository = require('../repositories/challenge-repository');


module.exports = {

  list: {
    handler: (request, reply) => {

      challengeRepository
        .list()
        .then((challenges) => reply(challenges))
        .catch((error) => reply(Boom.badImplementation(error)));
    }
  },

  get: {
    handler: (request, reply) => {

      challengeRepository
        .get(request.params.id)
        .then((challenge) => reply(challenge))
        .catch((error) => reply(Boom.badImplementation(error)));
    }
  }
};
