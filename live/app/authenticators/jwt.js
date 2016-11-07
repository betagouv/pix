// taken from http://www.thegreatcodeadventure.com/jwt-authentication-with-rails-ember-part-ii-custom-ember-simple-auth/
import Ember from 'ember';  
import Base from 'ember-simple-auth/authenticators/base';  
import config from '../config/environment';

const { RSVP: { Promise }, $: { ajax }, run } = Ember;

export default Base.extend({  

  tokenEndpoint: `${EmberENV.pixApiHost}/api/tokens/user_token`,

  restore(data) {
    return new Promise((resolve, reject) => {
      if (!Ember.isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate(creds) {
    const { firstName, lastName, email, password, passwordConfirm, hasAcceptedCGU } = creds;
    const data = JSON.stringify({
      auth: {
        firstName,
        lastName,
        email,
        password,
        passwordConfirm,
        hasAcceptedCGU
      }
    });
    const requestOptions = {
      url: this.tokenEndpoint,
      type: 'POST',
      data,
      contentType: 'application/json',
      dataType: 'json'
    };
    return new Promise((resolve, reject) => {
      ajax(requestOptions).then((response) => {
        const { jwt } = response;
        // Wrapping aync operation in Ember.run
        run(() => {
          resolve({
            token: jwt
          });
        });
      }, (error) => {
        // Wrapping aync operation in Ember.run
        run(() => {
          reject(error);
        });
      });
    });
  },
  
  invalidate(data) {
    return Promise.resolve(data);
  }

});
