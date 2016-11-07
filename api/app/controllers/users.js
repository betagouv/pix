'use strict';

const User = require('../models/data/user');
const userSerializer = require('../serializers/user-serializer');

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
      
      // console.log(request);

      new User({ id: request.auth.credentials.id }).fetch().then((user) => {
        reply(userSerializer.serialize(user));
      });

      // reply({
      //   data: {
      //     type: 'users',
      //     id: 'user_id',
      //     attributes: {
      //       'first-name': 'Bob',
      //       email:'bob@dylan.com'
      //     }
      //   }
      // });
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
