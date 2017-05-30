import Ember from 'ember';

const siteKey = '6LdPdiIUAAAAADhuSc8524XPDWVynfmcmHjaoSRO';

export default Ember.Component.extend({
  classNames: ['gg-recaptcha'],

  googleRecaptcha: Ember.inject.service(),

  validateRecaptcha: null, // action
  resetRecaptcha: null, // action

  didInsertElement() {
    this._super(...arguments);
    this.get('googleRecaptcha').loadScript();
    const component = this;
    window.onGrecaptchaLoad = function() {
      component.renderReCaptcha();
    };
  },

  renderReCaptcha() {
    Ember.assert('window.grecaptcha must be available', window.grecaptcha);
    if (!this.get('isDestroyed')) {
      const containerId = 'g-recaptcha';
      const parameters = {
        callback: this.get('successCallback').bind(this),
        'expired-callback': this.get('expiredCallback').bind(this),
        'sitekey': siteKey
      };
      window.grecaptcha.render(containerId, parameters);
    }
  },

  successCallback(recaptchaResponse) {
    this.get('validateRecaptcha')(recaptchaResponse);
  },

  expiredCallback() {
    this.get('resetRecaptcha')();
  }

});
