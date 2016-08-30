import {
  describe,
  it,
  before,
  after
} from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

describe('Acceptance | 37 - Prévisualiser un test |', function () {

  const courseId = 'rec5duNNrPqbSzQ8o';
  const firstChallengeId = 'recub31NerwonPVwX';
  const secondChallengeId = 'recLt9uwa2dR3IYpi';
  const lastChallengeId = 'recLt9uwa2dR3IYpi';

  let application;

  before(function () {
    application = startApp();
  });

  after(function () {
    destroyApp(application);
  });

  describe("Prévisualiser la première page d'un test |", function () {

    before(function () {
      return visit(`/courses/${courseId}/preview`);
    });

    it("37.1. L'accès à la preview d'un test se fait en accédant à l'URL /courses/:course_id/preview", function () {
      expect(currentURL()).to.equal(`/courses/${courseId}/preview`);
    });

    let $preview;

    describe('On affiche', function () {

      before(function () {
        $preview = findWithAssert('#course-preview');
      });

      it('37.2. le nom du test', function () {
        expect($preview.find('.course-name').text()).to.contains('course_name');
      });

      it('37.3. la description du test', function () {
        expect($preview.find('.course-description').text()).to.contains('course_description');
      });

      it('37.4. un bouton pour démarrer la simulation du test et qui mène à la première question', function () {
        const $playButton = findWithAssert('.simulate-button');
        expect($playButton.text()).to.be.equals('Simuler le test');
        expect($playButton.attr('href')).to.be.equals(`/courses/${courseId}/preview/challenges/${firstChallengeId}`);
      });
    });
  });

  describe("Prévisualiser une épreuve dans le cadre d'un test |", function () {

    before(function () {
      return visit(`/courses/${courseId}/preview/challenges/${firstChallengeId}`);
    });

    it("37.5. L'accès à la preview d'une épreuve d'un testse fait en accédant à l'URL /courses/:course_id/preview/challenges/:challenge_id", function () {
      expect(currentURL()).to.equal(`/courses/${courseId}/preview/challenges/${firstChallengeId}`);
    });

    describe('On affiche', function () {

      let $challenge;

      before(function () {
         $challenge = findWithAssert('.challenge-preview');
      });

      it("37.6. la consigne de l'épreuve", function () {
        expect($challenge.find('.challenge-instruction').text()).to.contains('Exemple de question QCU');
      });

      it('37.7. les propositions sous forme de boutons radio pour un QCU', function () {
        const $proposals = findWithAssert('.challenge-proposals input[type="radio"][name="proposals"]');
        expect($proposals).to.have.lengthOf(5);
      });

      it("37.8. un bouton pour accéder à l'épreuve suivante", function() {
        const $validateButton = findWithAssert('.validate-button');
        expect($validateButton.text()).to.be.equals('Valider');
      });
    });
  });

  describe("Prévisualiser la dernière épreuve dans le cadre d'un test |", function () {

    before(function () {
      return visit(`/courses/${courseId}/preview/challenges/${lastChallengeId}`);
    });

    it("37.9. on n'affiche pas de bouton “Épreuve suivante”", function () {
      expect(find('.challenge-preview a.next-challenge-button')).to.have.lengthOf(0);
    })
  })
});
