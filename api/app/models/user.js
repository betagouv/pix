const Bookshelf = require('../../config/bookshelf');

const User = Bookshelf.Model.extend({
  tableName: 'users'
});

module.exports = {
  User
};