'use strict';

const TABLE_NAME = 'assessments';

function table(t) {

  t.increments().primary();
  t.integer('userId').unsigned().references('users.id');
  t.dateTime('createdAt').notNullable().defaultTo(new Date());
  t.dateTime('updatedAt').notNullable().defaultTo(new Date());
}

exports.up = (knex) => {

  return knex.schema
    .createTable(TABLE_NAME, table)
    .then(() => {
      console.log(`${TABLE_NAME} table is created!`);
    });
};

exports.down = (knex) => {

  return knex.schema
    .dropTable(TABLE_NAME)
    .then(() => {
      console.log(`${TABLE_NAME} table was dropped!`);
    });
};
