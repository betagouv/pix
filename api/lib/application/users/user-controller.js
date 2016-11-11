const Boom = require('boom');
const User = require('../../domain/models/data/user');
const logger = require('../../infrastructure/utils/logger');

module.exports = {

  list(request, reply) {

    logger.info('UserController#list');

    User
      .fetchAll()
      .then((users) => reply(users))
      .catch((err) => reply(Boom.badImplementation(err)));
  },

  get(request, reply) {

    logger.info('UserController#get');

    new User({ id: request.params.id })
      .fetch()
      .then((user) => reply(user))
      .catch((err) => reply(Boom.badImplementation(err)));
  },

  save(request, reply) {

    logger.info('UserController#save');

    new User(request.payload)
      .save()
      .then((user) => reply(user))
      .catch((err) => reply(Boom.badImplementation(err)));
  }

};

