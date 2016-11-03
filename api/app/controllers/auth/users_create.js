'use strict';

const User = require('../../models/data/user');
const bcrypt = require('bcryptjs');

function hashPassword(password, cb) {
  // Generate a salt at level 10 strength
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      return cb(err, hash);
    });
  });
}

module.exports = {

  create: {
    handler: (request, reply) => {
      const user = new User();

      user.attributes.login = request.payload.login;
      user.attributes.firstName = request.payload.firstName;
      user.attributes.lastName = request.payload.lastName;
      user.attributes.email = request.payload.email;

      hashPassword(request.payload.password, (err, hash) => {
        if (err) {
          throw Boom.badRequest(err);
        }
        user.attributes.password = hash;
        user.save().then(() => {
          reply(user);
        });
        // user.save((err, user) => {
        //   if (err) {
        //     throw Boom.badRequest(err);
        //   }
        //   // If the user is saved successfully, issue a JWT
        //   // res({ id_token: createToken(user) }).code(201);
        //   reply(user);
        // });
      });

      
      // user.save().then(() => {
      //   reply(user);
      // });

    }
  }
};
