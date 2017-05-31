import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['gg-recaptcha'],

  googleRecaptcha: Ember.inject.service(),

  validateRecaptcha: null, // action
  resetRecaptcha: null, // action

  didInsertElement() {
    this._super(...arguments);
    const component = this;
    this.get('googleRecaptcha').loadScript().then(function() {
      component.renderRecaptcha();
    });
  },

  renderRecaptcha() {
    const callback = this.get('validateCallback').bind(this);
    const expiredCallback = this.get('expiredCallback').bind(this);
    this.get('googleRecaptcha').render('g-recaptcha-container', callback, expiredCallback);
  },

  validateCallback(recaptchaResponse) {
    this.get('validateRecaptcha')(recaptchaResponse);
  },

  expiredCallback() {
    this.get('resetRecaptcha')();
  }

});
