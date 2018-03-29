const indexes = {
  answers : ['assessmentId'],
  assessments : ['userId', 'type'],
  'certification-challenges' : ['courseId'],
  feedbacks : ['assessmentId'],
  marks : ['assessmentId'],
  snapshots : ['organizationId'],
};
exports.up = function(knex, Promise) {
  return knex.schema.table('answers', function(table){
    table.index('assessmentId');
};

exports.down = function(knex, Promise) {

};
