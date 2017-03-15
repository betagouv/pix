const Airtable = require('../airtable');
const cache = require('../cache');
const serializer = require('../serializers/airtable/course-serializer');

const AIRTABLE_TABLE_NAME = 'Tests';

function _getCourses(query, cacheKey) {
  return new Promise((resolve, reject) => {
    cache.get(cacheKey, (err, cachedValue) => {
      if (err) {
        return reject(err);
      }
      if (cachedValue) {
        return resolve(cachedValue);
      }
      const courses = [];
      Airtable
        .base(AIRTABLE_TABLE_NAME)
        .select(query)
        .eachPage(
          (records, fetchNextPage) => {
            records.forEach(record => {
              courses.push(serializer.deserialize(record));
            });
            fetchNextPage();
          },
          (err) => {
            if (err) {
              return reject(err);
            }
            cache.set(cacheKey, courses);
            return resolve(courses);
          });
    });
  });
}

module.exports = {

  getProgressionTests() {
    const query = {
      sort: [{ field: 'Ordre affichage', direction: 'asc' }],
      view: 'Tests de progression'
    };
    const cacheKey = 'course-repository_getProgressionTests';
    return _getCourses(query, cacheKey);
  },

  getCoursesOfTheWeek() {
    const query = {
      sort: [{ field: 'Ordre affichage', direction: 'asc' }],
      view: 'Défis de la semaine'
    };
    const cacheKey = 'course-repository_getChallengesOfTheWeek';
    return _getCourses(query, cacheKey);
  },

  getAdaptiveCourses() {
    const query = {
      view: 'Tests de positionnement'
    };
    const cacheKey = 'course-repository_getAdaptiveCourses';
    return _getCourses(query, cacheKey);
  },

  get(id) {
    return new Promise((resolve, reject) => {
      const cacheKey = `course-repository_get_${id}`;
      cache.get(cacheKey, (err, cachedValue) => {
        if (err) {
          return reject(err);
        }
        if (cachedValue) {
          return resolve(cachedValue);
        }
        Airtable
          .base(AIRTABLE_TABLE_NAME)
          .find(id, (err, record) => {
            if (err) {
              return reject(err);
            }
            const course = serializer.deserialize(record);
            cache.set(cacheKey, course);
            return resolve(course);
          });
      });
    });
  },

  refresh(id) {
    const cacheKey = `course-repository_get_${id}`;
    cache.del(cacheKey, (err) => {
      if (err) {
        return Promise.reject(err);
      }
      return this.get(id);
    });
  }

};
