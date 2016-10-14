'use strict';

const TABLE_NAME = 'assessments';

exports.seed = (knex) => {

  return knex(TABLE_NAME).del().then(() => {

    return knex(TABLE_NAME).insert([{

      // Assessments of Jon Snow
      userId: 1,
      courseId:"anyFromAirTable"
    }, {

      userId: 1,
      courseId:"anyFromAirTable"
    }, {

      userId: 1,
      courseId:"anyFromAirTable"
    }, {

      // Assessments of Daenerys Targaryen
      userId: 2,
      courseId:"anyFromAirTable"
    }, {

      // Assessments of Tyron Lannister
      userId: 3,
      courseId:"anyFromAirTable"
    }]);

  });

};
