'use strict';
const answers = require('./data/answers');
const assessments = require('./data/assessments');
const certificationChallenges = require('./data/certification-challenges');
const certificationCourses = require('./data/certification-courses');
const marks = require('./data/marks');
const organizations = require('./data/organizations');
const users = require('./data/users');

function addData(knex, table, data) {
  return Promise.all(data)
    .then(data => {
      return knex(table)
        .insert(data)
        .catch((err) => {
          console.log(err);
        });
    });
}

const dataByTables = [
  { table: 'assessments', data: assessments },
  { table: 'answers', data: answers },
  { table: 'certification-courses', data: certificationCourses },
  { table: 'certification-challenges', data: certificationChallenges },
  { table: 'marks', data: marks },
  { table: 'organizations', data: organizations },
  { table: 'users', data: users }
];

exports.seed = (knex) => {
  const dataToAdd = dataByTables.map(dataByTable => {
    return addData(knex, dataByTable.table, dataByTable.data);
  });
  return Promise.all(dataToAdd);
};
