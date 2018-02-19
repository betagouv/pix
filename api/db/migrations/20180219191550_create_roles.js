exports.up = (knex, Promise) => {

  return Promise.all([
    knex.schema.createTable('roles', (table) => {
      table.increments('id').primary();
      table.string('name');
    }),

    knex.schema.createTable('users_roles', (table) => {
      table.increments('id').primary();
      table.bigInteger('role_id').references('roles.id');
      table.bigInteger('user_id').references('users.id');
    }),
  ]).then(() => {
    const roles = [
      { name: 'PIX_ADMIN' },
      { name: 'PIX_PRODUCER' },
      { name: 'PIX_DEV' },
      { name: 'ORGANIZATION_OWNER' },
      { name: 'ORGANIZATION_PRESCRIBER' }
    ];
    return knex.batchInsert('roles', roles);
  });
};

exports.down = (knex, Promise) => {

  return Promise.all([
    knex.schema.dropTable('roles'),
    knex.schema.dropTable('users_roles'),
  ]);
};
