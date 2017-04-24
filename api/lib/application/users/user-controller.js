const Boom = require('boom');
const User = require('../../domain/models/data/user');

const userSerializer = require('../../infrastructure/serializers/jsonapi/user-serializer');
const validationErrorSerializer = require('../../infrastructure/serializers/jsonapi/validation-error-serializer');

module.exports = {

  list(request, reply) {

    User
      .fetchAll()
      .then((users) => reply(users))
      .catch((err) => reply(Boom.badImplementation(err)));
  },

  get(request, reply) {

    new User({ id: request.params.id })
      .fetch()
      .then((user) => reply(user))
      .catch((err) => reply(Boom.notFound(err)));
  },

  save(request, reply) {

    const user = userSerializer.deserialize(request.payload);

    return user
      .save()
      .then(() => reply().code(201))
      .catch((err) => {
        reply(Boom.badRequest(validationErrorSerializer.serialize(err)));
      });
  }

};

