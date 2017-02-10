import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

describe.only('Acceptance | a6 - souscrire en tant que follower', function(){

  let application;

  beforeEach(function () {
    application = startApp();
  });

  afterEach(function () {
    destroyApp(application);
  });


  it('a6- Lorsque je souscris avec une adresse mail valide, je suis bien enregistré', async function () {
    await visit('/');
    await fillIn('.follower-enter','florian@pix.fr');
    await click('.follower-button');
    // then
    expect($('.follower-info-message.has-success')).to.be.exist;
    //expect(true).to.be.true;
  });

});
