import Ember from 'ember';
import config from 'pix-live/config/environment';

export default Ember.Component.extend({
  classNames: ['logged-user-profile-banner'],

  actions: {
    _scrollToProfile() {
      Ember.$('body').animate({
        scrollTop: Ember.$('.profile-panel__header').offset().top - 15
      }, config.APP.FEEDBACK_PANEL_SCROLL_DURATION);
    }
  }
});
