import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'header',
  session: Ember.inject.service(),
  sessionAccount: Ember.inject.service('session-account')

});
