const Airtable = require('../airtable');
const cache = require('../cache');
const logger = require('../logger');
const serializer = require('../serializers/airtable/solution-serializer');

const AIRTABLE_TABLE_NAME = 'Epreuves';

module.exports = {

  get(id) {

    return new Promise((resolve, reject) => {

      const cacheKey = `solution-repository_get_${id}`;

      cache.get(cacheKey, (err, cachedValue) => {

        if (err) return reject(err);

        if (cachedValue) return resolve(cachedValue);

        Airtable.base(AIRTABLE_TABLE_NAME).find(id, (err, record) => {

          if (err) return reject(err);

          const solution = serializer.deserialize(record);

          cache.set(cacheKey, solution);

          logger.debug(`Fetched and cached solution ${id}`);

          return resolve(solution);
        });
      });
    });

  },

  refresh(id) {

    return new Promise((resolve, reject) => {

      const cacheKey = `course-repository_get_${id}`;

      cache.del(cacheKey, (err, count) => {

        if (err) return reject(err);

        if (count > 0) logger.debug(`Deleted from cache course ${id}`);

        return this._fetch(id, reject, cacheKey, resolve);
      });
    });
  },

  _fetch: function (id, reject, cacheKey, resolve) {

    Airtable.base(AIRTABLE_TABLE_NAME).find(id, (err, record) => {

      if (err) return reject(err);

      const course = serializer.deserialize(record);

      cache.set(cacheKey, course);

      logger.debug(`Fetched and cached course ${id}`);

      return resolve(course);
    });
  }


};
