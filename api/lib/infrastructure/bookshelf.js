const knexConfig = require('../../db/knexfile');
const settings = require('./../settings');
const knex = require('knex')(knexConfig[settings.environment]);
const validator = require('validator');

const bookshelf = require('bookshelf')(knex);

bookshelf.plugin('bookshelf-validate', {
  validateOnSave: true,
  validator: validator
});

module.exports = bookshelf;
