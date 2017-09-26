const Bookshelf = require('../../../infrastructure/bookshelf');
const User = require('./user');

module.exports = Bookshelf.Model.extend({
  tableName: 'password-reset-demands',

  user() {
    return this.belongsTo(User, 'email');
  }
});
