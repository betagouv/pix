const Bookshelf = require('../bookshelf');
Bookshelf.plugin('registry');

require('./user');

module.exports = Bookshelf.model('ResetPasswordDemand', {
  tableName: 'reset-password-demands',

  user() {
    return this.belongsTo('User', 'email');
  }
});
