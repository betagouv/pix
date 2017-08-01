import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  classNames: ['logged-user-details'],

  _canDisplayMenu: false,

  _user: null,

  init() {
    this._super(...arguments);
    this.get('store').queryRecord('user', {}).then((user) => this.set('_user', user));
  },

  actions: {
    toggleUserMenu() {
      const canShowMenu = !this.get('_canDisplayMenu');
      this.set('_canDisplayMenu', canShowMenu);
    }
  }
});
