const Bookshelf = require('../../config/bookshelf');
const Assessment = require('./assessment');

module.exports = Bookshelf.Model.extend({

  tableName: 'users',
  hasTimestamps: true,

  assessments: () => {
    return this.hasMany(Assessment);
  }

});
