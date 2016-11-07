'use strict';

const User = require('../models/data/user');

module.exports = {

  list: {
    handler: (request, reply) => {

      User.fetchAll().then((users) => {

        reply(users);
      });
    }
  },

  get: {
    handler: (request, reply) => {

      new User({ id: request.params.id }).fetch().then((user) => {

        reply(user);
      });
    }
  },

  current: {
    handler: (request, reply) => {
      
      console.log(request);

      reply({
        data: {
          type: 'users',
          id: 'user_id',
          attributes: {
            firstName: 'Bob',
          }
        }
      });
    }
  },

  save: {
    handler: (request, reply) => {

      const user = new User(request.payload);
      user.save().then(() => {
        reply(user);
      });

    }
  }
};
