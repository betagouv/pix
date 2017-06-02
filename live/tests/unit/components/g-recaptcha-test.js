import { describe, it } from 'mocha';
import { expect } from 'chai';
import { setupTest } from 'ember-mocha';
import RSVP from 'rsvp';
import Ember from 'ember';
import sinon from 'sinon';

describe.only('Unit | Component | g-recaptcha', function() {

  setupTest('component:g-recaptcha', {});
  beforeEach(function() {

    this.register('service:googleRecaptcha', Ember.Service.extend({
      loadScript() {
        return RSVP.resolve();
      },

      render() {
        return true;
      },

      const reset = sinon.spy();

    }));

  });

  describe('#didUpdateAttrs', function() {

    it('should reset the recaptcha if the token has been used', function() {
      // given
      const component = this.subject({});
      component.set('recaptchaToken', null);
      component.set('tokenHasBeenUsed', true);

      // when
      component.didUpdateAttrs();

      // then verify reset has been called

    });

    it('should not reset the recaptcha if the token has not been used', function() {
      // given
      const component = this.subject({});
      component.set('recaptchaToken', null);
      component.set('tokenHasBeenUsed', false);

      // when
      component.didUpdateAttrs();

      // then verify reset has not been called

    });
  });

  describe('#validateCallback', function() {

    it('should set the recaptchaToken to the GoogleRecaptchaToken and indicate that he has not been used', function() {
      // given
      const component = this.subject({});
      component.set('recaptchaToken', null);
      component.set('tokenHasBeenUsed', true);
      const googleRecaptchaResponse = 'la reponse de recaptcha';

      // when
      component.validateCallback(googleRecaptchaResponse);

      // then
      expect(component.get('recaptchaToken')).to.be.equal(googleRecaptchaResponse);
      expect(component.get('tokenHasBeenUsed')).to.be.false;
    });
  });

  describe('#expiredCallback', function() {

    it('should set the recaptchaToken to null and indicate that he has not been used', function() {
      // given
      const component = this.subject();
      component.set('recaptchaToken', 'un token');
      component.set('tokenHasBeenUsed', true);

      // when
      component.expiredCallback();

      // then
      expect(component.get('recaptchaToken')).to.be.null;
      expect(component.get('tokenHasBeenUsed')).to.be.false;
    });
  });
});
