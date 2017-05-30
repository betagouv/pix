import Ember from 'ember';
import jQuery from 'jquery';

export default Ember.Service.extend({
  loadScript() {
    return jQuery.getScript('https://www.google.com/recaptcha/api.js?onload=onGrecaptchaLoad&render=explicit');
  }
});
