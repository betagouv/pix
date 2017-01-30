const Boom = require('boom');
const Follower = require('../../domain/models/data/follower');

module.exports = {

  save(request, reply) {
    Follower
      .where('email', '=', request.payload.email)
      .fetch()
      .then((follower) => {
        if(follower){
          return reply(Boom.conflict('Follower already exist'));
        }

        new Follower(request.payload)
          .save()
          .then((follower) => reply(follower).code(201))
          .catch((err) => reply(Boom.badImplementation(err)));
      })
      .catch((err) => reply(Boom.badImplementation(err)));
  }

};

