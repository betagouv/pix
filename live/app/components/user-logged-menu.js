import Ember from 'ember';

export default Ember.Component.extend({

  session: Ember.inject.service(),
  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),

  classNames: ['logged-user-details'],

  _canDisplayMenu: false,
  _user: null,

  canDisplayLinkToProfile: Ember.computed(function() {
    return this.get('routing.currentRouteName') !== 'compte' && this.get('routing.currentRouteName') !== 'board';
  }),

  init() {
    this._super(...arguments);
    this.get('store').findRecord('user', this.get('session.data.authenticated.userId'))
      .then((user) => this.set('_user', user));
  },

  actions: {
    toggleUserMenu() {
      this.toggleProperty('_canDisplayMenu');
    },

    closeIfEscape(e) {
      if (e.keyCode == 27) {
        this.set('_canDisplayMenu', false);
      }
    },

    closeMenu() {
      this.set('_canDisplayMenu', false);
    }
  }
});
