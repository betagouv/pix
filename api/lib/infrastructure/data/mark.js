const Bookshelf = require('../bookshelf');

Bookshelf.plugin('registry');

require('./assessment');

module.exports = Bookshelf.model('Mark', {

  tableName: 'marks',

  assessment() {
    return this.belongsTo('Assessment');
  }
});
