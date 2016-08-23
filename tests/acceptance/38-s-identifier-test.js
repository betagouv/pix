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
  });

  it('38.3 Quand je suis identifié, je vois apparaître le libellé “Bonjour Prénom” (via session utilisateur)', function () {
  });

  it("38.4 En cas de champs manquant, un message d'erreur apparaît", function () {
  });
});
