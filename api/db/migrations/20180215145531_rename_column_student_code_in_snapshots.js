const TABLE_NAME = 'snapshots';

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table(TABLE_NAME, function(table) {
      table.renameColumn('studentCode', 'idPix');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table(TABLE_NAME, function(table) {
      table.renameColumn('idPix', 'studentCode');
    })
  ]);
};
