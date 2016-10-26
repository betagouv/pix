'use strict';

const Bookshelf = require('../../../config/bookshelf');
const Answer = require('./answer');

module.exports = Bookshelf.Model.extend({

  tableName: 'assessments',

  answers: function () {
    return this.hasMany(Answer, 'assessmentId');
  }

});
