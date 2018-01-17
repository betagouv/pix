const TABLE_NAME = 'snapshots';

exports.up = function(knex, Promise) {
  return knex(TABLE_NAME)
    .update({
      completionPercentage: knex.raw('ROUND(??*0.16, 0)', ['completionPercentage'])
    })
    .then(() => {
      return knex.schema.table(TABLE_NAME, function(table) {
        table.renameColumn('completionPercentage', 'testsFinished');
      });
    });
};

exports.down = function(knex, Promise) {
  return knex(TABLE_NAME)
    .update({
      testsFinished: knex.raw('??*6.25', ['testsFinished'])
    })
    .then(() => {
      return knex.schema.table(TABLE_NAME, function(table) {
        table.renameColumn('testsFinished', 'completionPercentage');
      });
    });
};
