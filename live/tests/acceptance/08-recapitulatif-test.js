import {
  describe,
  it,
  before,
  after
} from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

describe("Acceptance | 08 - Consulter l'écran de fin d'un test ", function() {

  let application;

  before(function() {
    application = startApp();
  });

  after(function() {
    destroyApp(application);
  });

  before(function() {
    return visit(`/assessments/completed_assessment_id/results`);
  });


  it("08.0 se fait en accédant à l'URL /assessments/:assessment_id/results", function () {
    expect(currentURL()).to.equal(`/assessments/completed_assessment_id/results`);
  });

  it("08.1 affiche une liste qui récapitule les réponses", function () {
    findWithAssert('.assessment-results-list');
  });

  it("08.2 le tableau récapitulatif contient les instructions ", function () {
    const $proposals = findWithAssert('.assessment-results-result');
    expect($proposals.text()).to.contains('Que peut-on dire des œufs');
    expect($proposals.text()).to.contains('Julie a déposé un document');
    expect($proposals.text()).to.contains('Ceci est une instruction');
    expect($proposals.text()).to.contains('Citez un ou plusieurs logiciel(s)');
  });


  it("08.3 Pour une bonne réponse, le tableau récapitulatif donne une indication que la réponse est correcte", function () {
    let $cell = findWithAssert('div[data-toggle="tooltip"]:eq(0)');
    expect($cell.attr('data-original-title')).to.equal('Réponse correcte');
  });

  it("08.4 Pour une mauvaise réponse, le tableau récapitulatif donne une indication que la réponse est incorrecte", function () {
    let $cell = findWithAssert('div[data-toggle="tooltip"]:eq(1)');
    expect($cell.attr('data-original-title')).to.equal('Réponse incorrecte');
  });

  it('08.5 Le nom du test est affiché', function() {
    expect(findWithAssert('.course-banner-name').text()).to.contains('Name of the course');
  });

  it('08.6 Le bouton "Revenir à la liste des tests" n\'apparaît pas', function () {
    expect(find('.course-banner-home-link')).to.have.lengthOf(0);
  });

  it("08.7. propose un moyen pour revenir à la liste des tests", function () {
    const $homeLink = findWithAssert('button.assessment-results-link-home');
  });


});
