const Airtable = require('../airtable');
const Solution = require('../../domain/models/referential/solution');
const cache = require('../cache');
const serializer = require('../serializers/airtable/solution-serializer');

const AIRTABLE_TABLE_NAME = 'Epreuves';

module.exports = {

  get(id) {

    return new Promise((resolve, reject) => {

      cache.get(`solution_${id}`, (err, value) => {

        if (err) return reject(err);

        if (value) return resolve(value);

        Airtable.base(AIRTABLE_TABLE_NAME).find(id, (err, record) => {

          if (err) return reject(err);

          const solution = serializer.deserialize(record);

          cache.set(`solution_${id}`, solution);

          return resolve(solution);
        });
      });
    });
  }
};
