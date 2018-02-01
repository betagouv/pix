const Bookshelf = require('../bookshelf');
Bookshelf.plugin('registry');

require('./assessment');

module.exports = Bookshelf.model('Skill', {
  tableName: 'skills',

  assessment() {
    return this.belongsTo('Assessment');
  }
});
