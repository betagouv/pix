const Bookshelf = require('../bookshelf');
Bookshelf.plugin('registry');

module.exports = Bookshelf.model('Session', {
  tableName: 'sessions',
});
