import Ember from 'ember';
import jQuery from 'jquery';
import RSVP from 'rsvp';

const siteKey = '6LdPdiIUAAAAADhuSc8524XPDWVynfmcmHjaoSRO';

// XXX Inspired of https://guides.emberjs.com/v2.13.0/tutorial/service/#toc_fetching-maps-with-a-service
export default Ember.Service.extend({

  loadScript() {
    return new RSVP.Promise(function(resolve) {
      jQuery.getScript('https://www.google.com/recaptcha/api.js?onload=onGrecaptchaLoad&render=explicit', function() {
        window.onGrecaptchaLoad = function() {
          resolve();
        };
      });
    });
  },

  render(containerId, callback, expiredCallback) {
    const grecaptcha = window.grecaptcha;
    Ember.assert('window.grecaptcha must be available', grecaptcha);
    if (!this.get('isDestroyed')) {
      const parameters = {
        'callback': callback,
        'expired-callback': expiredCallback,
        'sitekey': siteKey
      };
      grecaptcha.render(containerId, parameters);
    }
  },

  reset() {
    const grecaptcha = window.grecaptcha;
    grecaptcha.reset();
  }

});
