import {
  describe,
  it,
  before,
  after
} from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

describe('Acceptance | 176 - Affichage du bandeau d\'une épreuve |', function () {

  let application;

  before(function () {
    application = startApp();
  });

  after(function () {
    destroyApp(application);
  });

  before(function () {
    visit(`/assessments/new_assessment_id/challenges/qcm_challenge_id`);
  });

  it('Le nom du test est affiché', function() {
    expect(findWithAssert('.course-name').text()).to.contains('Name of the course');
  });

  it('Il existe un bouton "Revenir à la liste des tests"', function () {
    const $courseListButton = findWithAssert('.course-list-btn a');
    expect($courseListButton.text()).to.equal('Retour à la liste des tests');
  });

  it('Quand je clique sur le bouton "Revenir à la liste des tests", je suis redirigé vers la liste des tests', function () {
    // when
    click('.course-list-btn a');

    // then
    andThen(() => expect(find('#home')).to.have.lengthOf(1));
  });

});
