'use strict';

const TABLE_NAME = 'users';

function table(t) {

  t.increments().primary();
  t.string('firstName').notNullable();
  t.string('lastName').notNullable();
  t.string('email').unique().notNullable();
  t.string('login').notNullable();
  t.string('password').notNullable();
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
