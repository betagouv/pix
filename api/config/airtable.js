const Airtable = require('airtable');

module.exports = {

  base: new Airtable({ apiKey: 'test-api-key' }).base('test-base')

};
