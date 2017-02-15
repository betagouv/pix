import { describe, it } from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';
import _ from 'pix-live/utils/lodash-custom';


describe('Acceptance | j2 - Comparer réponses et solutions pour un QROC |', function () {

  const RESULT_URL = '/assessments/ref_assessment_id/results';
  const COMPARISON_QROC_MODAL_URL = '/assessments/ref_assessment_id/results/compare/ref_answer_qroc_id/4';

  let application;

  before(function () {
    application = startApp();
  });

  after(function () {
    destroyApp(application);
  });

  describe('j2.1 Affiche sur la ligne de l\'épreuve le mot REPONSE pour un QROCM sur l\'écran des résultats', function () {

    it('j2.1.1 il l\'affiche pour un QROC', async function () {
      await visit(RESULT_URL);
      expect($('.assessment-results-list-item:eq(3) .js-correct-answer').text()).to.contain('RÉPONSE'); //QROC
      expect($('.assessment-results-list-item:eq(4) .js-correct-answer').text()).to.contain('RÉPONSE'); //QROCM
    });
  });

  /*describe('j2.2 Affiche le contenu de la modale adéquat'){
    it('j2.1.1 affiche la partie comparaison des réponses de QROC', async function () {
      // given
      await visit(COMPARISON_QROC_MODAL_URL);
      // then
      expect($(''))
    });
  }*/

});
