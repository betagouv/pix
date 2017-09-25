import { afterEach, beforeEach, describe, it } from 'mocha';
import { expect } from 'chai';
import { startApp, destroyApp } from '../helpers/application';

describe('Acceptance | Reset Password', function() {

  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  it('can visit /mot-passe-oublie', async function() {
    // when
    await visit('/mot-passe-oublie');

    // then
    expect(currentURL()).to.equal('/mot-passe-oublie');
  });

  it('display a form to reset the email', async function() {
    // when
    await visit('/mot-passe-oublie');

    // then
    expect(find('.password-reset-page__password-reset-form')).to.have.lengthOf(1);
  });
});
