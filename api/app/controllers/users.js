const models = require('../models/user');

module.exports = {

  list: {
    handler: (request, reply) => {

      models.User.fetchAll().then((users) => {

        reply(`{"users": ${JSON.stringify(users)} }`).type('application/json');
      });
    }
  },

  get: {
    handler: (request, reply) => {

      new models.User({ id: request.params.id }).fetch().then((user) => {

        reply(`{"user": ${JSON.stringify(user)} }`).type('application/json');
      });
    }
  }
};
