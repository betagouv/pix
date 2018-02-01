const Bookshelf = require('../bookshelf');
Bookshelf.plugin('registry');

module.exports = Bookshelf.model('Follower', {
  tableName: 'followers'
});
