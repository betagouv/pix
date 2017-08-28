import { afterEach, beforeEach, describe, it } from 'mocha';
import { expect } from 'chai';
import { startApp, destroyApp } from '../helpers/application';

describe('Acceptance | index page', function() {

  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  describe('Hero section', function() {

    it('should have a link to sign-up page when user is not authenticated', function() {
      // when
      visit('/');

      // then
      return andThen(function() {
        const signUpLink = findWithAssert('.index-page-hero__inscription-link');
        expect(signUpLink.attr('href').trim()).to.equal('/inscription');
      });
    });

    function authenticateUser() {
      server.create('user');

      visit('/connexion');
      fillIn('#pix-email', 'samurai.jack@aku.world');
      fillIn('#pix-password', 'B@ck2past');
      click('.signin-form__submit_button');
    }

    it('should not have a link to sign-up page when user is yet authenticated', function() {
      // given
      authenticateUser();

      // when
      visit('/');

      // then
      return andThen(function() {
        expect(find('.index-page-hero__inscription-link')).to.have.lengthOf(0);
      });
    });
  });
});
