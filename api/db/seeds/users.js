'use strict';

const TABLE_NAME = 'users';

exports.seed = (knex) => {

  return knex(TABLE_NAME).del().then(() => {

    return knex(TABLE_NAME).insert([
      {
        id: 1,
        firstName: 'Pix',
        lastName: 'Aile',
        email: 'user@pix.fr',
        password: '$2a$05$8ThYbucpuk6ovRgN28vBtuj4R7MczGdX/lHsKGtE/6.FWnuQdWNUS'
      }, {
        id: 2,
        firstName: 'Daenerys',
        lastName: 'Targaryen',
        email: 'pro@pix.fr',
        password: '$2a$05$8ThYbucpuk6ovRgN28vBtuj4R7MczGdX/lHsKGtE/6.FWnuQdWNUS'
      }, {
        id: 3,
        firstName: 'Tyron',
        lastName: 'Lannister',
        email: 'sup@pix.fr',
        password: '$2a$05$8ThYbucpuk6ovRgN28vBtuj4R7MczGdX/lHsKGtE/6.FWnuQdWNUS'
      },
      {
        id: 4,
        firstName: 'John',
        lastName: 'Snow',
        email: 'sco@pix.fr',
        password: '$2a$05$8ThYbucpuk6ovRgN28vBtuj4R7MczGdX/lHsKGtE/6.FWnuQdWNUS'
      }
    ]);

  });

};
