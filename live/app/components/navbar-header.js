import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  classNames: ['navbar-header'],
  user: null,
  _canDisplayMenu: false,

  isUserLogged: Ember.computed('session', function() {
    return this.get('session.isAuthenticated');
  }),

  actions: {
    toggleUserMenu() {
      const canShowMenu = !this.get('_canDisplayMenu');
      this.set('_canDisplayMenu', canShowMenu);
    }
  }
});
