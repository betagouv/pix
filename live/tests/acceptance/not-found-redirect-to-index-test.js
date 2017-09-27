import { afterEach, beforeEach, describe, it } from 'mocha';
import { startApp, destroyApp } from '../helpers/application';
import { expect } from 'chai';

describe('Acceptance | Page | Not Found Redirection', () => {

  let application;

  beforeEach(() => {
    application = startApp();
  });

  afterEach(() => {
    destroyApp(application);
  });

  it('unexistant page should redirect to home page', () => {

    visit('/plop');

    return andThen(() => {
      expect(currentURL()).to.eq('/');
    });
  });

});
