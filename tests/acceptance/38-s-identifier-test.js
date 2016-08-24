import {
  describe,
  it,
  before,
  after
} from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';
import RSVP from 'rsvp';

describe("Acceptance | 38 - S'identifier sur la plateforme", function () {
  let application;

  before(function () {
    application = startApp();
  });

  after(function () {
    destroyApp(application);
  });

  before(function () {
    return visit('/');
  });

  it("38.1 Depuis la page d'accueil, je saisie mon prénom + nom + email", function () {
    return RSVP.all([
      fillIn('#firstname_input', 'Jérémy'),
      fillIn('#lastname_input', 'Buget'),
      fillIn('#email_input', 'jbu@octo.com')

    ]).then(() => {
      expect(find('#firstname_input')[0].value).to.contains('Jérémy');
      expect(find('#lastname_input')[0].value).to.eq('Buget');
      expect(find('#email_input')[0].value).to.eq('jbu@octo.com');
    });
  });

  it('38.2 Quand je valide mon identité, je suis redirigé vers la page des tests', function () {
    return RSVP.all([
      fillIn('#firstname_input', 'Jérémy'),
      fillIn('#lastname_input', 'Buget'),
      fillIn('#email_input', 'jbu@octo.com')

    ]).then(() => {
      return click('.identification-form-actions button')

    }).then(() => {
      expect(currentURL()).to.eq('/home');

    });
  });

  it('38.3 Quand je suis identifié, je vois apparaître le libellé “Bonjour Prénom” (via session utilisateur)', function () {

    // Assert that 38.2 went OK
    expect(currentURL()).to.eq('/home');

    expect(findWithAssert('.profile').text()).to.contains('Jérémy');
  });

  it("38.4 En cas de champs manquant, un message d'erreur apparaît", function () {
    return visit('/')
      .then(() => {
        expect(findWithAssert('#firstname_input').prop('required')).to.be.true;
        expect(findWithAssert('#lastname_input').prop('required')).to.be.true;
        expect(findWithAssert('#email_input').prop('required')).to.be.true;
      });
  });
});
