'use strict';

const TABLE_NAME = 'organizations';

exports.seed = (knex) => {

  return knex(TABLE_NAME).del().then(() => {
    return knex(TABLE_NAME).insert([
      {
        userId: 2,
        type: 'PRO',
        name: 'Dragon & Co',
        email: 'pro@pix.fr',
        code: 'DRAGO'
      }, {
        userId: 3,
        type: 'SUP',
        name: 'Tyrion SUP',
        email: 'sup@pix.fr',
        code: 'SUPTY'
      },
      {
        userId: 4,
        type: 'SCO',
        name: 'SCOw',
        email: 'sco@pix.fr',
        code: 'SCO12'
      }
    ]);

  });

};
