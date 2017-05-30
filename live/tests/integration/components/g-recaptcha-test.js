import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

describe('Integration | Component | g recaptcha', function() {
  setupComponentTest('g-recaptcha', {
    integration: true
  });

  it('renders', function() {
    this.render(hbs`{{g-recaptcha}}`);
    expect(this.$()).to.have.length(1);
  });

  it('should render the google recaptcha widget', function() {
    // given
    this.render(hbs`{{g-recaptcha}}`);
    // then
    expect(this.$('#g-recaptcha')).to.have.lengthOf(1);
  });

  describe('#successCallback', function() {

    beforeEach(function() {

      const googleRecaptchaStub = Ember.Service.extend({

      });

      this.register('service:google-recaptcha', googleRecaptchaStub);
      this.inject.service('google-recaptcha', { as: 'location' });
    });

    it('should call set Recaptcha if google API send success', function() {
      //given
      this.render(hbs`{{g-recaptcha}}`);

      //when google API send onSuccess

      //then this.get(valideRecaptcha) doit être appelé

    });

  });

  describe('#expiredCallback', function() {

    it('should call resetRecaptcha Action if expired', function() {
      //given
      this.render(hbs`{{g-recaptcha}}`);

      //when google API send onReset

      //then this.get(resetRecaptcha) doit être appelé

    });

  });

});
