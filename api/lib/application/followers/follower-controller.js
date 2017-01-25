const Boom = require('boom');
const Follower = require('../../domain/models/data/follower');

module.exports = {

  save(request, reply) {
    new Follower(request.payload)
      .save()
      .then((follower) => reply(follower).code(201))
      .catch((err) => reply(Boom.badImplementation(err)));
  }

};

