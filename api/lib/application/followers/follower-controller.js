const Boom = require('boom');
const Follower = require('../../domain/models/data/follower');
const EmailValidator = require('../../domain/services/email-validator');

module.exports = {

  save(request, reply) {
    const email = request.payload.email.trim();
    if (!EmailValidator.emailIsValid(email)) {
      return reply(Boom.badRequest('Bad format of email provided'));
    }

    Follower
      .where({email})
      .fetch()
      .then((follower) => {
        if (follower) {
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

