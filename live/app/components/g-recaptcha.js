import Ember from 'ember';

export default Ember.Component.extend({

  siteKey: '6LdPdiIUAAAAADhuSc8524XPDWVynfmcmHjaoSRO',

  didInsertElement() {
    this._super(...arguments);
    Ember.run.next(() => {
      this.renderReCaptcha();
    });
  },

  renderReCaptcha() {
    if (Ember.isNone(window.grecaptcha)) {
      Ember.run.later(() => {
        this.renderReCaptcha();
      }, 500);
    } else {
      const container = 'g-recaptcha';
      const parameters = {
        callback: this.get('successCallback').bind(this),
        'sitekey': this.getProperties('siteKey')['siteKey']
      };
      const widgetId = window.grecaptcha.render(container, parameters);
      this.set('widgetId', widgetId);
      this.set('ref', this);
    }
  },

  successCallback(reCaptchaResponse) {
    this.sendAction('validateCaptcha', reCaptchaResponse);
  },

  //Créer un reset avec callback de reset qui sendAction a resetCapctha response from user

});
