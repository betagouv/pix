import {
  describe,
  it,
  before,
  beforeEach,
  after
} from 'mocha';
import {expect} from 'chai';
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

  let $firstname;
  let $lastname;
  let $email;
  let $submit;
  const $firstname_css = '.firstname_input';
  const $lastname_css = '.lastname_input';
  const $email_css = '.email_input';
  const $submit_css = '.identification-form-actions button';

  before(function () {
    $firstname = findWithAssert($firstname_css)[0];
    $lastname  = findWithAssert($lastname_css)[0];
    $email     = findWithAssert($email_css)[0];
    $submit    = findWithAssert($submit_css)[0];
  });

  it("38.1 Depuis la page d'accueil, je saisie mon prénom + nom + email", function () {
    return RSVP.all([
      fillIn($firstname_css, 'Jérémy'),
      fillIn($lastname_css, 'Buget'),
      fillIn($email_css, 'jbu@octo.com')

    ]).then(() => {
      expect($firstname.value).to.contains('Jérémy');
      expect($lastname.value).to.eq('Buget');
      expect($email.value).to.eq('jbu@octo.com');
    });
  });

  it('38.2 Quand je valide mon identité, je suis redirigé vers la page des tests', function () {
    return RSVP.all([
      fillIn($firstname_css, 'Jérémy'),
      fillIn($lastname_css, 'Buget'),
      fillIn($email_css, 'jbu@octo.com')

    ]).then(() => {
      return click($submit_css)

    }).then(() => {
      expect(currentURL()).to.eq('/home');

    });
  });

  it('38.3 Quand je suis identifié, je vois apparaître le libellé “Bonjour Prénom” (via session utilisateur)', function () {

    // Assert that 38.2 went OK
    expect(currentURL()).to.eq('/home');

    expect(findWithAssert('.profile').text()).to.contains('Bonjour Jérémy');
  });

  describe("38.4 En cas de champs manquant, un message d'erreur apparaît", function () {
    beforeEach(() => {
      return visit('/')
        .then(() => {
          return RSVP.all([
            fillIn($firstname_css, 'Thomas'),
            fillIn($lastname_css, 'Wickham'),
            fillIn($email_css, 'twi@octo.com')
          ])
        });
    });

    it('missing firstname', function () {
      return fillIn($firstname_css, '')
        .then(() => {
          expect(find('#firstname')[0].classList.contains('has-error')).to.be.true;
          expect(findWithAssert('#firstname .help-block').text()).to.contains('Champ requis');
        });
    });

    it('missing lastname', function () {
      return fillIn($lastname_css, '')
        .then(() => {
          expect(find('#lastname')[0].classList.contains('has-error')).to.be.true;
          expect(findWithAssert('#lastname .help-block').text()).to.contains('Champ requis');
        });
    });

    it('missing email', function () {
      return fillIn($email_css, '')
        .then(() => {
          expect(find('#email')[0].classList.contains('has-error')).to.be.true;
          expect(findWithAssert('#email .help-block').text()).to.contains('Champ requis');
        });
    });

    it('bad email', function () {
      return fillIn($email_css, 'bad email')
        .then(() => {
          expect(find('#email')[0].classList.contains('has-error')).to.be.true;
          expect(findWithAssert('#email .help-block').text()).to.contains('Entrez un email correct');
        });
    });

    it("can't submit a form when an error is present", function () {
      return fillIn($firstname_css, '')
        .then(() => expect(find($submit_css)[0].disabled).to.be.true)
        .then(() => click($submit_css))
        .then(() => expect(currentURL()).to.eq('/'))
    });

    it("if the form is empty and the page has just been loaded, it can't submit the form", function () {
      return visit('/')
        .then(() => { expect(find($submit_css)[0] .disabled).to.be.true })
        .then(() => { click($submit_css) })
        .then(() => { expect(currentURL()).to.eq('/') })
    })

  });
});
