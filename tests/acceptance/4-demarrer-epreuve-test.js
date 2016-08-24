import {
  describe,
  it,
  before,
  after
} from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

describe.skip('Acceptance: 4-DemarrerEpreuve', function() {
  let application;
  let assessment;
  let challenge;

  before(function() {
    application = startApp();
    assessment = server.create('assessment');
    challenge = assessment.challenges.models[0];
  });

  after(function() {
    destroyApp(application);
  });

  before(function() {
    return visit(`/challenges/${challenge.id}`);
  });

  it('4.0 doit être sur l\'URL /challenges/:id', function () {
    expect(currentURL()).to.equal(`/challenges/${challenge.id}`);
  });

  it('4.1 affiche la zone de consigne', function() {
    expect(find('.challenge-instruction').text()).to.contains(challenge.attrs.instruction);
  });

  it('4.2 affiche la zone de réponse', function() {
    expect(find('.challenge-answer').text()).to.contains('Réponse');
  });

  it('4.3 rappelle l\'intitulé du test', function() {
    expect(find('.course-name').text()).to.contains(assessment.course.attrs.name);
  });

  it("4.4 affiche l'état d'avancement du test", function() {
    expect(find('.course-progression').text()).to.contains(`Épreuve 1 / ${assessment.challenges.models.length}`);
  });

  it("4.5 affiche les deux boutons Passer et Valider", function() {
    expect(find('.action-skip').text()).to.eq('Passer');
    expect(find('.action-validate').text()).to.eq('Valider');
  });
});
