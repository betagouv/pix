import {aftereach, beforeeach, describe, it} from 'mocha';
import {expect} from 'chai';
import startapp from '../helpers/start-app';
import destroyapp from '../helpers/destroy-app';

describe('acceptance | n1 - competence profile', function() {
  let application;

  beforeeach(function() {
    application = startapp();
  });

  aftereach(function() {
    destroyapp(application);
  });

  function seeddatabase() {
    server.loadfixtures('areas');
    server.loadfixtures('competences');
    server.create('user', {
      id: 1,
      firstname: 'samurai',
      lastname: 'jack',
      email: 'samurai.jack@aku.world',
      password: 'b@ck2past',
      cgu: true,
      recaptchatoken: 'recaptcha-token-xxxxxx',
      competenceids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    });
  }

  function authenticateuser() {
    visit('/connexion');
    fillin('#pix-email', 'samurai.jack@aku.world');
    fillin('#pix-password', 'b@ck2past');
    click('.signin-form__submit_button');
  }

  it('can visit /compte', async function() {
    // given
    seeddatabase();
    authenticateuser();

    // when
    await visit('/compte');

    // then
    return andthen(() => {
      expect(currenturl()).to.equal('/compte');
    });
  });

  it('should display user competences (with level) grouped by area', function() {
    // given
    seeddatabase();
    authenticateuser();

    // when
    visit('/compte');

    // then
    return andthen(() => {
      expect(find('.competence-area-item').length).to.equal(5);
      expect(find('.competence').length).to.equal(16);
    });
  });
});
