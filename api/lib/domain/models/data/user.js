const Bookshelf = require('../../../infrastructure/bookshelf');
const Assessment = require('./assessment');

module.exports = Bookshelf.Model.extend({
  tableName: 'users',

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
        args: /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!%*#?&]{8,}/ }
    ]
  },

  assessments() {
    return this.hasMany(Assessment);
  }
});
