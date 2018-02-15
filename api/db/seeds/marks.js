'use strict';

const TABLE_NAME = 'marks';

exports.seed = (knex) => {

  return knex(TABLE_NAME).del().then(() => {
    return knex(TABLE_NAME).insert([
      { level:5, score: 44, area_code: '2', competence_code: '2.1', assessment:1 },
      { level:2, score: 23, area_code: '3', competence_code: '3.1', assessment:2 },
      { level:5, score: 47, area_code: '1', competence_code: '1.1', assessment:3 },
      { level:4, score: 34, area_code: '1', competence_code: '1.3', assessment:4 },
      { level:5, score: 48, area_code: '5', competence_code: '5.1', assessment:5 },
      { level:5, score: 44, area_code: '2', competence_code: '2.1', assessment:6 },
      { level:5, score: 48, area_code: '5', competence_code: '5.1', assessment:6 },
      { level:4, score: 34, area_code: '1', competence_code: '1.3', assessment:6 },
      { level:2, score: 23, area_code: '3', competence_code: '3.1', assessment:6 },
      { level:5,score:  47, area_code: '1', competence_code: '1.1', assessment: 6 }
    ]);
  });
};

