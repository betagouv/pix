const Boom = require('boom');
const User = require('../../domain/models/data/user');
const _ = require('../../infrastructure/utils/lodash-utils');

const userSerializer = require('../../infrastructure/serializers/jsonapi/user-serializer');
const validationErrorSerializer = require('../../infrastructure/serializers/jsonapi/validation-error-serializer');

function _buildErrorWhenUniquEmail() {
  return {
    data: {
      email: ['Cette adresse electronique est déjà enregistrée.']
    }
  }
}

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

    if (!_.has(request, 'payload') || !_.has(request, 'payload.data.attributes')) {
      return reply(Boom.badRequest());
    }

    let user = userSerializer.deserialize(request.payload);

    return user
      .save()
      .then(() => reply().code(201))
      .catch((err) => {

        if (err.code === 'SQLITE_CONSTRAINT') {
          err = _buildErrorWhenUniquEmail();
        }

        reply(validationErrorSerializer.serialize(err)).code(400);
      });
  }

};

