'use strict';

const TABLE_NAME = 'certification-courses';

exports.seed = (knex) => {

  return knex(TABLE_NAME).del().then(() => {
    return knex(TABLE_NAME).insert([
      {
        id:1,
        userId: 1,
        status: 'completed',
        completedAt: '2018-02-15T15:15:52.504Z',
        createdAt: '2018-02-15 15:14:46'
      }
    ]);
  });
};
