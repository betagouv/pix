import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

describe('Acceptance | j1 - Comparer réponses et solutions pour un QCM |', function () {

  let application;

  before(function () {
    application = startApp();
  });

  after(function () {
    destroyApp(application);
  });

  describe(`Affiche sur la ligne de l'épreuve le mot REPONSE pour un QCM sur l'écran des résultats`, function () {

    it(`j1.1 il l'affiche pour un QCM mais pas pour les autres types d'epreuves` , function () {
      visit('/assessments/ref_assessment_id/results');
      andThen(() => {
        expect($('.assessment-results-list-item:eq(0) .js-answer').text()).to.contain('RÉPONSE'); //QCM
        expect($('.assessment-results-list-item:eq(1) .js-answer').text()).not.to.contain('RÉPONSE'); //QCU
      });
    });

  });

});
