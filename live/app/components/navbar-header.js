import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['navbar-header'],
  user: null,
  _canDisplayMenu: false,

  isUserLogged: Ember.computed('user', function() {
    const user = this.get('user');
    return Ember.isPresent(user);
  }),

  actions: {
    toggleUserMenu() {
      const canShowMenu = !this.get('_canDisplayMenu');
      this.set('_canDisplayMenu', canShowMenu);
    }
  }
});
