const base = require('../airtable').base;
const cache = require('../cache');
const Challenge = require('../../domain/models/referential/challenge');

const AIRTABLE_TABLE_NAME = 'Epreuves';

module.exports = {

  list() {

    return new Promise((resolve, reject) => {

      cache.get('challenges', (err, cachedValue) => {

        if (err) return reject(err);

        if (cachedValue) return resolve(cachedValue);

        let challenges = [];

        base(AIRTABLE_TABLE_NAME)
          .select()
          .eachPage((records, fetchNextPage) => {

            for (let record of records) {
              challenges.push(new Challenge(record));
            }
            fetchNextPage();
          }, (err) => {

            if (err) return reject(err);

            cache.set('challenges', challenges);

            return resolve(challenges);
          });
      });

    });
  },

  get(id) {

    return new Promise((resolve, reject) => {

      cache.get(`challenge_${id}`, (err, value) => {

        if (err) return reject(err);

        if (value) return resolve(value);

        base(AIRTABLE_TABLE_NAME).find(id, (err, record) => {

          if (err) return reject(err);

          const challenge = new Challenge(record);

          cache.set(`challenge_${id}`, challenge);

          return resolve(challenge);
        });
      });
    });
  }

};
