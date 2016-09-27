import AirtableAdapter from "ember-airtable/adapter";
import config from '../config/environment';

export default AirtableAdapter.extend({

  namespace: config.APP.AIRTABLE_NAMESPACE,

  headers: {
    'Accept': 'application/json',
    'Authorization': 'Bearer ' +  config.APP.AIRTABLE_BEARER
  }
  // namespace: 'v0/appHAIFk9u1qqglhX',
  //
  // headers: {
  //   'Accept': 'application/json',
  //   'Authorization': 'Bearer keyEgu8JYhXaOhjbd'
  // }
});
