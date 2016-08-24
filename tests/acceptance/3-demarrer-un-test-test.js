import {
  describe,
  it,
  before,
  after
} from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

describe('Acceptance | 3 - Démarrer un test |', function () {

  let application;

  before(function () {
    application = startApp();
    server.createList('challenge', 5);
    server.create('course');
  });

  after(function () {
    destroyApp(application);
  });

  before(function () {
    return visit('/home');
  });

  it('3.1. Je peux démarrer un test depuis la liste des tests de la page d\'accueil', function() {
    const courseId = 'rec5duNNrPqbSzQ8o';
    const $startLink = findWithAssert('.start-button')[0];
    expect($startLink.text).to.contains('Démarrer le test');
    expect($startLink.href).to.be.contains(`/courses/${courseId}/assessment`);
  });

  it('3.2. Quand je démarre un test, ça crée une instance d\'Evaluation dans le BO (i.e. onglet "Evaluations" dans AirTable)', function() {

  });

  it('3.3. Quand je démarre un test, je suis redirigé vers la première épreuve du test', function() {
    const assessmentId = 'recqE9kA4VRqFcEgK';
    const challengeId = 'recLt9uwa2dR3IYpi';
    const $startLink = findWithAssert('.start-button')[0];
    return click($startLink).then(function() {
      findWithAssert('#assessment-challenge');
      //expect(currentURL()).to.contains(`/assessments/${assessmentId}/challenges/${challengeId}`);
    });
  });

});
