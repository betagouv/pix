const cache = require('../cache');
const airtable = require('../airtable');
const serializer = require('../serializers/airtable/course-serializer');

const AIRTABLE_TABLE_NAME = 'Tests';
const AIRTABLE_TABLE_VIEW_PROGRESSION_COURSES = 'Tests de progression';
const AIRTABLE_TABLE_VIEW_ADAPTIVE_COURSES = 'Tests de positionnement';
const AIRTABLE_TABLE_VIEW_COURSES_OF_THE_WEEK = 'Défis de la semaine';

function _getCourses(viewName, cacheKey) {
  return new Promise((resolve, reject) => {
    cache.get(cacheKey, (err, cachedValue) => {
      if (err) return reject(err);
      if (cachedValue) return resolve(cachedValue);

      const query = {
        filterByFormula: '{Statut} = "Publié"',
        view: viewName
      };
      airtable
        .getRecords(AIRTABLE_TABLE_NAME, query, serializer)
        .then(courses => {
          cache.set(cacheKey, courses);
          return resolve(courses);
        })
        .catch(reject);
    });
  });
}

function _fetchCourse(id, cacheKey, resolve, reject) {
  airtable
    .getRecord(AIRTABLE_TABLE_NAME, id, serializer)
    .then(course => {
      cache.set(cacheKey, course);
      return resolve(course);
    })
    .catch(reject);
}

module.exports = {

  getProgressionCourses() {
    const cacheKey = 'course-repository_getProgressionTests';
    return _getCourses(AIRTABLE_TABLE_VIEW_PROGRESSION_COURSES, cacheKey);
  },

  getCoursesOfTheWeek() {
    const cacheKey = 'course-repository_getCoursesOfTheWeek';
    return _getCourses(AIRTABLE_TABLE_VIEW_COURSES_OF_THE_WEEK, cacheKey);
  },

  getAdaptiveCourses() {
    const cacheKey = 'course-repository_getAdaptiveCourses';
    return _getCourses(AIRTABLE_TABLE_VIEW_ADAPTIVE_COURSES, cacheKey);
  },

  get(id) {
    return new Promise((resolve, reject) => {
      const cacheKey = `course-repository_get_${id}`;
      cache.get(cacheKey, (err, cachedValue) => {
        if (err) return reject(err);
        if (cachedValue) return resolve(cachedValue);
        return _fetchCourse(id, cacheKey, resolve, reject);
      });
    });
  },

  refresh(id) {
    return new Promise((resolve, reject) => {
      const cacheKey = `course-repository_get_${id}`;
      cache.del(cacheKey, (err) => {
        if (err) return reject(err);
        return _fetchCourse(id, cacheKey, resolve, reject);
      });
    });
  }

};
