const encrypt = require('../../../lib/domain/services/encryption-service');
const bcrypt = require('bcrypt');

function hashPassword (password) {
  return encrypt
    .hashPassword(password)
    .then((hash) => {
      return hash;
    });
}

function createUser(id, firstName, lastName, email, password) {
  return hashPassword(password)
    .then(encryptedPassword => {
      return {
        id,
        firstName,
        lastName,
        email,
        password: encryptedPassword
      };
    });
}

module.exports = [
  createUser(1,'Pix','Aile', 'user@pix.fr','pix123'),
  createUser(2,'Daenerys','Targaryen', 'pro@pix.fr','pix123'),
  createUser(3,'Tyrion','Lannister', 'sup@pix.fr','pix123'),
  createUser(4,'John','Snow', 'sco@pix.fr','pix123')
];
