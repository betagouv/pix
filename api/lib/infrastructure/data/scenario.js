const Bookshelf = require('../bookshelf');
Bookshelf.plugin('registry');

module.exports = Bookshelf.model('Scenario', {
  tableName: 'scenarios'
});
