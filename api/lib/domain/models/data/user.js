const Bookshelf = require('../../../infrastructure/bookshelf');
const Assessment = require('./assessment');

const bcrypt = require('bcrypt');
const Promise  = require('bluebird');

module.exports = Bookshelf.Model.extend({
  tableName: 'users',

  initialize() {
    this.on('creating', this.hashPassword, this);
  },

  validations: {
    firstName: [
      { method: 'isLength', error: 'Votre prénom n\'est pas renseigné.', args: {min: 1} }
    ],
    lastName: [
      { method: 'isLength', error: 'Votre nom n\'est pas renseigné.', args: {min: 1} }
    ],
    email: [
      { method: 'isEmail', error: 'Votre adresse electronique n\'est pas correcte.' }
    ],
    password: [
      { method: 'matches', error: 'Votre mot de passe doit comporter au moins une lettre, un chiffre et 8 caractères.',
        args: /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!%*#?&-]{8,}/ }
    ]
  },

  hashPassword: (model) => {
    return new Promise(function(resolve, reject) {
      bcrypt.hash(model.attributes.password, 10, function(err, hash) {
        if( err ) reject(err);
        model.set('password', hash);
        resolve(hash);
      });
    });
  },

  assessments() {
    return this.hasMany(Assessment);
  }
});
