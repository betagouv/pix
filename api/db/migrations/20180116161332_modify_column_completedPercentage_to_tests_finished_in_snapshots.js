const TABLE_NAME = 'snapshots';

exports.up = function(knex, Promise) {
  return knex.schema.table(TABLE_NAME, function(table){
    table.integer('testsFinished');
  }).then(() => {
    return knex(TABLE_NAME)
      .update({
        // XXX : the '??' bind the row value
        testsFinished: knex.raw('ROUND(?? * 0.16, 0)', ['completionPercentage'])
      });
  }).then(() => {
    return knex.schema.table(TABLE_NAME, function(table) {
      table.dropColumn('completionPercentage');
    });
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table(TABLE_NAME, function(table){
    table.integer('completionPercentage');
  })
    .then(() => {
      return knex(TABLE_NAME)
        .update({
          // XXX : the '??' bind the row value
          completionPercentage: knex.raw('?? * 6.25', ['testsFinished'])
        })})
    .then(() => {
      return knex.schema.table(TABLE_NAME, function(table) {
        table.dropColumn('testsFinished');
      });
    });
};
