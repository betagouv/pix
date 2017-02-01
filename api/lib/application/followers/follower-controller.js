const Boom = require('boom');
const Follower = require('../../domain/models/data/follower');
const EmailValidator = require('../../domain/services/email-validator');

function _assertFollowerNotExist(follower){
  return new Promise((resolve, reject) => {
    if (follower) {
      reject(Boom.conflict('Follower already exist'));
    }
    resolve();
  });
}

function _saveFollower(email){
  return new Promise((resolve, reject) => {
    new Follower({email: email})
      .save()
      .then((follower) => resolve(follower))
      .catch((err) => reject(Boom.badImplementation(err)));
  });
}

module.exports = {
  save(request, reply) {
    const email = request.payload.email.trim();
    if (!EmailValidator.emailIsValid(email)) {
      return reply(Boom.badRequest('Bad format of email provided'));
    }
    Follower
      .where({email})
      .fetch()
      .then(_assertFollowerNotExist)
      .then(() => _saveFollower(email))
      .then(follower => reply(follower).code(201))
      .catch((err) => reply(err));
  }
};

