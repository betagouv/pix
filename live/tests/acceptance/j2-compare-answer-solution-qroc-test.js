import { describe, it } from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

describe.skip('Acceptance | j2 - Comparer réponses et solutions pour un QROC | ', function () {

  const RESULT_URL = '/assessments/ref_assessment_id/results';
  const COMPARISON_MODAL_URL = '/assessments/ref_assessment_id/results/compare/ref_answer_qroc_id/4';

  const SVG_OF_RESULT_SELECTOR = '.comparison-window__header .assessment-results-result-titre svg';
  const INDEX_OF_RESULT_SELECTOR = '.comparison-window__header .assessment-results-result-index';
  const TEXT_OF_INSTRUCTION_SELECTOR = '.comparison-window--body .challenge-statement__instruction';
  const CORRECTION_BOX_QROC = '.comparison-window__corrected-answers--qroc';
  const FEEDBACK_LINK = '.comparison-window__feedback-panel';

  let application;

  before(function () {
    application = startApp();
  });

  after(function () {
    destroyApp(application);
  });

  describe('j2.1 Possibilité de voir la correction d\'un challenge QROC depuis la page résultat', function () {

    before(function () {
      visit(RESULT_URL);
    });

    it('affiche le lien REPONSE vers la modale depuis l\'ecran des resultats pour un QROC', function () {
      expect($('.result-item .js-correct-answer').text()).to.contain('RÉPONSE');
    });


    it('ne contient pas encore dinstruction, de lien vers un feedback, de zone de correction', function () {
      expect($(TEXT_OF_INSTRUCTION_SELECTOR)).to.have.lengthOf(0);
      expect($(FEEDBACK_LINK)).to.have.lengthOf(0);
      expect($(CORRECTION_BOX_QROC)).to.have.lengthOf(0);
    });

    it('n\'ouvre pas la modale par défaut', async function () {
      expect($('.comparison-window')).to.have.lengthOf(0);
    });

  });

  describe('j2.2 Contenu de la modale de correction pour un QROC', function () {

    before(function () {
      visit(COMPARISON_MODAL_URL);
    });

    it('possible d\'accéder à la modale depuis l\'URL', async function () {
      expect($('.comparison-window')).to.have.lengthOf(1);
    });

    it('contient un header', async function () {
      expect($(INDEX_OF_RESULT_SELECTOR).text().replace(/\n/g, '').trim()).to.equal('4');
      expect($(SVG_OF_RESULT_SELECTOR)).to.have.lengthOf(1);
    });

    it('contient une instruction', async function () {
      expect($(TEXT_OF_INSTRUCTION_SELECTOR)).to.have.lengthOf(1);
    });

    it('contient une zone de correction', async function () {
      expect($(CORRECTION_BOX_QROC)).to.have.lengthOf(1);
    });

    it('contient un lien vers feedback', async function () {
      expect($(FEEDBACK_LINK)).to.have.lengthOf(1);
    });

    it('il est possible de fermer la modale', async function () {
      await click('.close-button-container');
      expect($('.comparison-window')).to.have.lengthOf(0);
    });

  });

});
