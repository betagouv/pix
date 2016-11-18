import {
  describe,
  it,
  before,
  beforeEach,
  after
} from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

describe("Acceptance | 15 - Afficher un QCU | ", function () {

  let application;
  let challenge;

  before(function () {
    application = startApp();
  });

  after(function () {
    destroyApp(application);
  });

  before(function () {
    return visit(`/assessments/first_assessment_id/challenges/ref_qcu_challenge_full_id`);
  });

  it('05.1 L\'instruction doit s\'afficher', function () {
    expect($('.challenge-instruction').text()).to.equal('Un QCU propose plusieurs choix, l\'utilisateur peut en choisir un seul');
  });

  it('05.2 Une liste de radiobuttons doit s\'afficher', function () {
    const $proposals = $('input[type="radio"]');
    expect($proposals).to.have.lengthOf(4);
  });

  it('05.3 Une liste ordonnée d\'instruction doit s\'afficher', function () {
    const $proposals = $('input[type="radio"]');
    expect($('.challenge-proposal:nth-child(1)').text().trim()).to.equal('1ere possibilite');
    expect($('.challenge-proposal:nth-child(2)').text().trim()).to.equal('2eme possibilite');
    expect($('.challenge-proposal:nth-child(3)').text().trim()).to.equal('3eme possibilite');
    expect($('.challenge-proposal:nth-child(4)').text().trim()).to.equal('4eme possibilite');
  });

  it('05.4 Un bouton de type "Skip" doit s\'afficher', function () {
    expect($('.challenge-item-actions__skip-action')).to.have.lengthOf(1);
  });

  it('05.5 Un bouton de type "Validate" doit s\'afficher', function () {
    expect($('a.challenge-item-actions__validate-action')).to.have.lengthOf(1);
  });

  it('05.6 L\'alerte est cachée par défaut', function () {
    expect($('.alert')).to.have.lengthOf(0);
  });

  it('05.7 L\'alerte est affichée si l\'utilisateur valide, mais aucun radiobutton n\'est coché', function () {
    $('a.challenge-item-actions__validate-action').click();
    andThen(() => {
      expect($('.alert')).to.have.lengthOf(1);
      expect($('.alert').text().trim()).to.equal('Pour valider, sélectionner une réponse. Sinon, passer.');
    });
  });

  it('05.8 Par défaut, aucun radiobutton n\'est coché', function () {
    expect($('input:radio:checked')).to.have.lengthOf(0);
  });

  it('05.9 Si un utilisateur clique sur un radiobutton, il est coché', function () {
    expect($('input:radio:checked:nth-child(1)').is(':checked')).to.equal(false);
    click($('.challenge-proposal:nth-child(1) input'));
    andThen(() => {
      expect($('input:radio:checked:nth-child(1)').is(':checked')).to.equal(true);
      expect($('input:radio:checked')).to.have.lengthOf(1);
    });
  });

  it('05.10 If a user check another radiobutton, it is checked, and all others are unchecked', function () {
    expect($('input:radio:checked')).to.have.lengthOf(1);
    click($('.challenge-proposal:nth-child(2) input'));
    andThen(() => {
      expect($('input:radio:checked')).to.have.lengthOf(1);
    });
  });

  it('05.11 should display an img tag with “ceci est une image” alt text', function () {
    expect($('.challenge-illustration > img').attr('alt')).to.contains('ceci est une image');
  });

  it('05.12 should display an img as specified in the model', function () {
    expect($('.challenge-illustration > img').attr('src')).to.equal('http://fakeimg.pl/350x200/?text=QCU');
  });

  it('05.13 Le nom du test est affiché', function() {
    expect(findWithAssert('.course-banner-name').text()).to.contains('First Course');
  });

  it('05.14 Il existe un bouton "Revenir à la liste des tests"', function () {
    const $courseListButton = findWithAssert('.course-banner-home-link');
    expect($courseListButton.text()).to.equal('Retour à la liste des tests');
  });

  it('05.15 Quand je clique sur le bouton "Revenir à la liste des tests", je suis redirigé vers l\'index', function () {
    // when
    click('.course-banner-home-link');

    // then...
    andThen(() => expect(currentURL()).to.equal('/'));
  });

});
