import Ember from 'ember';

const siteKey = '6LdPdiIUAAAAADhuSc8524XPDWVynfmcmHjaoSRO';

export default Ember.Component.extend({
  classNames: ['gg-recaptcha'],

  validateCaptcha: null, // action



  didInsertElement() {
    this._super(...arguments);
    const component = this;
    window.onGrecaptchaLoad = function() {
      component.renderReCaptcha();
    };
  },

  renderReCaptcha() {
    Ember.assert('window.grecaptcha must be available', window.grecaptcha);
    if (!this.get('isDestroyed')) {
      const parameters = {
        callback: this.get('successCallback').bind(this),
        'expired-callback': this.get('expiredCallback').bind(this),
        'sitekey': siteKey
      };
      window.grecaptcha.render('g-recaptcha', parameters);
    }
  },

  successCallback(reCaptchaResponse) {
    this.get('validateCaptcha')(reCaptchaResponse);
  },

  expiredCallback() {
  }

});
