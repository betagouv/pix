import ApplicationAdapter from './application';
import Ember from 'ember';

export default ApplicationAdapter.extend({

  queryRecord() {
    const url = this.buildURL('user', 'me');
    return Ember.$.getJSON(url);
  }
});
