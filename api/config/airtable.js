const Airtable = require('airtable');
const settings = require('./settings');

module.exports = {

  base: new Airtable({ apiKey: settings.airtable.apiKey }).base(settings.airtable.base)

};
