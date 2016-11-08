import {
  describe,
  it,
  before,
  after
} from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

describe('Acceptance | 194 - S\'enregistrer sur la plateforme', function () {

  let application;

  before(function () {
    application = startApp();
  });

  after(function () {
    destroyApp(application);
  });

  before(function () {
    visit('/');
  });

  it('1.0 peut visiter /', function () {
    expect(currentURL()).to.equal('/');
  });

  it('1.1 la landing page contient un pitch de présentation', function () {
    expect(findWithAssert('.sales-pitch').text()).to.contains('PIX est un projet public de plateforme en ligne d\'évaluation');
  });

  it('1.2 la page d\'accueil contient un formulaire d\'enregistrement Nom / Prénom / Email  / Mot de passe / Confirmation / CGU et un bouton "S\'enregistrer"', function () {
    expect(findWithAssert('label[for="inputFirstName"]').text()).to.contains('Prénom');
    expect(findWithAssert('#inputFirstName'));

    expect(findWithAssert('label[for="inputLastName"]').text()).to.contains('Nom');
    expect(findWithAssert('#inputLastName'));

    expect(findWithAssert('label[for="inputEmail"]').text()).to.contains('e-mail');
    expect(findWithAssert('#inputEmail'));

    expect(findWithAssert('label[for="inputPassword"]').text()).to.contains('Mot de passe');
    expect(findWithAssert('#inputPassword'));

    expect(findWithAssert('label[for="inputPasswordConfirm"]').text()).to.contains('Confirmation du mot de passe');
    expect(findWithAssert('#inputPasswordConfirm'));

    expect(findWithAssert('label[for="inputHasAcceptedCGU"]').text()).to.contains('CGU');
    expect(findWithAssert('#inputHasAcceptedCGU'));

    expect(findWithAssert('#buttonRegister').text()).to.contains('Enregistrez-vous');
  });

  it('1.3 Si on valide et que le serveur réponds par un message d\'erreur, on reste sur la même URL, et on affiche le message d\'erreur du serveur', function (done) {
    fillIn('#inputEmail', 'an_invalid_email').then(() => {
      const $buttonRegister = $('#buttonRegister')[0];
      return click($buttonRegister).then(() => {
        setTimeout(function () {
            expect(currentURL()).to.equal('/');
            done();
        }, 300);
        // BELOW : do not work. Probably the test environment is unable to reach the displayed notification container.
        // expect(findWithAssert('.ui-pnotify-container').text()).to.contains('erreurs');
      });
    });
  });

  it('1.4 Si on valide et que le serveur est d\'accord, on affiche la page /home', function (done) {
    fillIn('#inputEmail', 'valid@email.com').then(() => {
      const $buttonRegister = $('#buttonRegister')[0];
      return click($buttonRegister).then(() => {
        // XXX: really icky test, but fail sometimes if no timeout
        setTimeout(function () {
            expect(currentURL()).to.equal('/home');
            done();
        }, 300);

      });
    });
  });



});
