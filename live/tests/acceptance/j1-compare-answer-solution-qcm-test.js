import { describe, it } from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

describe('Acceptance | j1 - Comparer réponses et solutions pour un QCM |', function () {

  const RESULT_URL = '/assessments/ref_assessment_id/results';
  const COMPARISON_MODAL_URL = '/assessments/ref_assessment_id/results/compare/ref_answer_qcm_id/1';


  let application;

  before(function () {
    application = startApp();
  });

  after(function () {
    destroyApp(application);
  });

  describe('j1.1 Affiche sur la ligne de l\'épreuve le mot REPONSE pour un QCM sur l\'écran des résultats', function () {
    it('j1.1.1 il l\'affiche pour un QCM mais pas pour les autres types d\'épreuves' , async function () {
      await visit(RESULT_URL);
      expect($('.assessment-results-list-item:eq(0) .js-correct-answer').text()).to.contain('RÉPONSE'); //QCM
      expect($('.assessment-results-list-item:eq(1) .js-correct-answer').text()).not.to.contain('RÉPONSE'); //QCU
      expect($('.assessment-results-list-item:eq(2) .js-correct-answer').text()).not.to.contain('RÉPONSE'); //QRU
      expect($('.assessment-results-list-item:eq(3) .js-correct-answer').text()).not.to.contain('RÉPONSE'); //QROC
      expect($('.assessment-results-list-item:eq(4) .js-correct-answer').text()).not.to.contain('RÉPONSE'); //QROCM
    });
  });

  describe('j1.2 Accès à la modale', function () {
    it('j1.2.2 On peut accèder directement à la modale via URL et fermer la modale' , async function () {
      await visit(COMPARISON_MODAL_URL);
      expect($('.comparison-window')).to.have.lengthOf(1);
      // XXX test env needs the modal to be closed manually
      await click('.close-button-container');
      expect($('.comparison-window')).to.have.lengthOf(0);
    });
    it('j1.2.1 Si on clique sur REPONSE la modale s\'ouvre' , async function () {
      await visit(RESULT_URL);
      expect($('.comparison-window')).to.have.lengthOf(0);
      await click('.assessment-results-result-correction-button');
      expect($('.comparison-window')).to.have.lengthOf(1);
      // XXX test env needs the modal to be closed manually
      await click('.close-button-container');
      expect($('.comparison-window')).to.have.lengthOf(0);
    });
  });

  describe('j1.3 Contenu de la modale', function () {

    it('j1.3.1 Vérification de l\'index, ainsi que l\'image et le texte du résultat dans le header', async function () {
      await visit(RESULT_URL);
      expect($('.comparison-window--header .assessment-results-result-index')).to.have.lengthOf(0);
      expect($('.comparison-window--header .assessment-results-result-titre svg')).to.have.lengthOf(0);
      await visit(COMPARISON_MODAL_URL);
      expect($('.comparison-window--header .assessment-results-result-index').text().replace(/\n/g, '').trim()).to.equal('1');
      expect($('.comparison-window--header .assessment-results-result-titre svg')).to.have.lengthOf(1);
    });
  });

});
