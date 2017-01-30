const Boom = require('boom');
const Follower = require('../../domain/models/data/follower');

module.exports = {

  isExistingEMail(email){
    new Follower({ email: remail })
      .fetch()
      .then((follower) => true)
      .catch((err) => false);

  },

  save(request, reply) {
    if(this.isExistingEMail(request.payload)) return reply(Boom.conflict(err));

    new Follower(request.payload)
      .save()
      .then((follower) => reply(follower).code(201))
      .catch((err) => reply(Boom.badImplementation(err)));
  }

};

