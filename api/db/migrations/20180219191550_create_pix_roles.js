exports.up = (knex, Promise) => {

  return Promise.all([
    knex.schema.createTable('pix_roles', (table) => {
      table.increments('id').primary();
      table.string('name');
    }),

    knex.schema.createTable('users_pix_roles', (table) => {
      table.increments('id').primary();
      table.bigInteger('user_id').references('users.id');
      table.bigInteger('pix_role_id').references('pix_roles.id');
    }),
  ]).then(() => {
    const roles = [
      { name: 'PIX_MASTER' },
      { name: 'PIX_READER' },
    ];
    return knex.batchInsert('pix_roles', roles);
  });
};

exports.down = (knex, Promise) => {

  return Promise.all([
    knex.schema.dropTable('pix_roles'),
    knex.schema.dropTable('users_pix_roles'),
  ]);
};
