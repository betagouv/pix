import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['gg-recaptcha'],

  googleRecaptcha: Ember.inject.service(),

  validateRecaptcha: null, // action
  resetRecaptcha: null, // action

  validation: null,

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
    this.get('validateRecaptchaToken')(recaptchaResponse);
  },

  expiredCallback() {
    this.get('resetRecaptchaToken')();
  }

});
