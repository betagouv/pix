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
    const action = this.get('onSuccess');//Action-up
    console.log(reCaptchaResponse);
    if (Ember.isPresent(action)) {
      action(reCaptchaResponse);
    }
  },

});
