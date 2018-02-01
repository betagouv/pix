const Bookshelf = require('../bookshelf');
Bookshelf.plugin('registry');

require('./assessment');

module.exports = Bookshelf.model('Feedback', {

  tableName: 'feedbacks',

  assessment() {
    return this.belongsTo('Assessment');
  }

});
