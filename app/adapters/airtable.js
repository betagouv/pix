import AirtableAdapter from "ember-airtable/adapter";

export default AirtableAdapter.extend({

  namespace: window.ENV.APP.AIRTABLE_NAMESPACE,

  headers: {
    'Accept': 'application/json',
    'Authorization': 'Bearer ' +  window.ENV.APP.AIRTABLE_BEARER
  }
  // namespace: 'v0/appHAIFk9u1qqglhX',
  //
  // headers: {
  //   'Accept': 'application/json',
  //   'Authorization': 'Bearer keyEgu8JYhXaOhjbd'
  // }
});
