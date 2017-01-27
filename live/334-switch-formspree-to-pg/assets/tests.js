'use strict';

define('pix-live/tests/acceptance/a1-page-accueil-test', ['exports', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  describe('Acceptance | a1 - Accéder à la plateforme pour démarrer un test', function () {

    var application = undefined;

    before(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    after(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    before(function () {
      visit('/');
    });

    it('a1.0 peut visiter /', function () {
      (0, _chai.expect)(currentURL()).to.equal('/');
    });

    it('a1.1 la landing page contient un pitch de présentation', function () {
      (0, _chai.expect)(findWithAssert('.first-page-hero__main-value-prop').text()).to.contains('Développez vos compétences numériques');
    });

    it('a1.2 Sur la landing page, un lien pointant vers la page projet est présent dans les valeurs pix', function () {
      findWithAssert('.first-page-about a[href="/projet"]');
    });
  });
});
define('pix-live/tests/acceptance/a1-page-accueil-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/a1-page-accueil-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/acceptance/a2-afficher-logo-pix-test', ['exports', 'mocha', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)('Acceptance | a2 - Afficher le logo PIX | ', function () {

    var application = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.it)('a2.1 Le logo est présent sur la page index', function () {
      visit('/');
      andThen(function () {
        findWithAssert($('img[src="images/pix-logo.svg"]'));
      });
    });

    (0, _mocha.it)('a2.2 Le logo est présent sur la page d\'une épreuve', function () {
      visit('/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id');
      andThen(function () {
        findWithAssert($('img[src="images/pix-logo.svg"]'));
      });
    });
  });
});
define('pix-live/tests/acceptance/a2-afficher-logo-pix-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/a2-afficher-logo-pix-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/acceptance/a3-voir-liste-tests-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)('Acceptance | a3 - voir la liste des tests', function () {

    var application = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.before)(function () {
      return visit('/');
    });

    (0, _mocha.it)('a3.1 on affiche autant de tests que remontés par l\'API', function () {
      (0, _chai.expect)(findWithAssert('.course')).to.have.lengthOf(3);
    });

    (0, _mocha.describe)('a3.2 pour un test donné avec toutes les informations', function () {

      var $course = undefined;

      (0, _mocha.before)(function () {
        $course = findWithAssert('.course[data-id="ref_course_id"]');
      });

      (0, _mocha.it)('a3.2.1 on affiche son nom', function () {
        var courseTitle = 'First Course';
        (0, _chai.expect)($course.find('.course-name').text()).to.contains(courseTitle);
      });

      (0, _mocha.it)('a3.2.2 on affiche sa description', function () {
        var courseDescription = 'Contient toutes sortes d\'epreuves avec différentes caractéristiques couvrant tous les cas d\'usage.';
        (0, _chai.expect)($course.find('.course-description').text()).to.contains(courseDescription);
      });

      (0, _mocha.it)('a3.2.3 on affiche le nombre d\'épreuve(s) qu\'il contient', function () {
        var courseChallenges = '8 épreuves';
        (0, _chai.expect)($course.find('.course-number-of-challenges').text()).to.contains(courseChallenges);
      });

      (0, _mocha.it)('a3.2.4 on affiche son image', function () {
        var courseIllustrationUrl = 'http://fakeimg.pl/350x200/?text=First%20Course';
        (0, _chai.expect)($course.find('img')[0].src).to.equal(courseIllustrationUrl);
      });

      (0, _mocha.it)('a3.2.5 on affiche un bouton "démarrer le test"', function () {
        (0, _chai.expect)($course.find('.start-button').text()).to.contains('Démarrer le test');
      });
    });

    (0, _mocha.it)('a3.3 pour un test dont il manque l\'image, on affiche une image placeholder', function () {
      var $course = findWithAssert('.course[data-id="raw_course_id"]');
      (0, _chai.expect)($course.find('img')[0].src).to.contains('images/course-default-image.png');
    });
  });
});
define('pix-live/tests/acceptance/a3-voir-liste-tests-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/a3-voir-liste-tests-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/acceptance/a4-demarrer-un-test-test', ['exports', 'ember', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _ember, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  var URL_OF_FIRST_TEST = '/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id';
  var MODAL_SELECTOR = '.modal.fade.js-modal-mobile.in';

  describe('Acceptance | a4 - Démarrer un test |', function () {

    var application = undefined;

    before(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    after(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    beforeEach(function () {
      return visit('/');
    });

    it('a4.1 Je peux démarrer un test depuis la liste des tests de la page d\'accueil', function () {
      var $startLink = findWithAssert('.start-button');
      (0, _chai.expect)($startLink.text()).to.contains('Démarrer le test');
    });

    it('a4.2 Quand je démarre un test, je suis redirigé vers la première épreuve du test', function () {
      var $startLink = findWithAssert('.start-button');
      return click($startLink).then(function () {
        findWithAssert('#assessment-challenge');
        (0, _chai.expect)(currentURL()).to.contains(URL_OF_FIRST_TEST);
      });
    });

    it('a4.3 Quand je démarre un test sur mobile, une modale m\'averti que l\'expérience ne sera pas optimale, mais je peux quand même continuer', function (done) {

      var $startLink = findWithAssert('.start-button');

      (0, _chai.expect)($(MODAL_SELECTOR)).to.have.lengthOf(0);

      // test on mobile
      triggerEvent('.first-page', 'simulateMobileScreen');

      // clear local storage
      andThen(function () {
        window.localStorage.clear();
        (0, _chai.expect)(currentURL()).to.equals('/');
        (0, _chai.expect)($(MODAL_SELECTOR)).to.have.lengthOf(0);
      });

      // start a test
      click($startLink);

      // blocked by modal
      andThen(function () {
        // XXX : ickiest hack : wait 500ms for bootstrap transition to complete
        _ember['default'].run.later(function () {
          (0, _chai.expect)($(MODAL_SELECTOR)).to.have.lengthOf(1);
          (0, _chai.expect)(currentURL()).to.equals('/');
          $('a[data-dismiss]').click();

          return click($startLink).then(function () {
            (0, _chai.expect)(currentURL()).to.contains(URL_OF_FIRST_TEST);
            done();
          });
        }, 500);
      });
    });

    it('a4.4 Quand je RE-démarre un test sur mobile, la modale NE s\'affiche PAS', function (done) {
      var $startLink = findWithAssert('.start-button');
      triggerEvent('.first-page', 'simulateMobileScreen');

      andThen(function () {
        _ember['default'].run.later(function () {
          (0, _chai.expect)(currentURL()).to.equals('/');
          (0, _chai.expect)($(MODAL_SELECTOR)).to.have.lengthOf(0);
        }, 500);
      });
      click($startLink);
      andThen(function () {
        (0, _chai.expect)(currentURL()).to.contains('/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id');
        done();
      });
    });
  });
});
define('pix-live/tests/acceptance/a4-demarrer-un-test-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/a4-demarrer-un-test-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/acceptance/a5-voir-liste-tests-adaptatifs-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)('Acceptance | a5 - voir la liste des tests adaptatifs', function () {

    var application = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.before)(function () {
      return visit('/placement-tests');
    });

    (0, _mocha.it)('a5.1 on affiche autant de tests que remontés par l\'API', function () {
      (0, _chai.expect)(findWithAssert('.course')).to.have.lengthOf(1);
    });

    (0, _mocha.describe)('a5.2 pour un test donné avec toutes les informations', function () {

      var $course = undefined;

      (0, _mocha.before)(function () {
        $course = findWithAssert('.course[data-id="adaptive_course_id"]');
      });

      (0, _mocha.it)('a5.2.1 on affiche son nom', function () {
        (0, _chai.expect)($course.find('.course-name').text()).to.contains('Adaptive Course');
      });

      (0, _mocha.it)('a5.2.2 on affiche sa description', function () {
        (0, _chai.expect)($course.find('.course-description').text()).to.contains('Est un test adaptatif');
      });

      (0, _mocha.it)('a5.2.3 on affiche son image', function () {
        (0, _chai.expect)($course.find('img')[0].src).to.equal('http://fakeimg.pl/350x200/?text=Adaptive%20Course');
      });

      (0, _mocha.it)('a5.2.4 on affiche un bouton "démarrer le test"', function () {
        (0, _chai.expect)($course.find('.start-button').text()).to.contains('Démarrer le test');
      });
    });
  });
});
define('pix-live/tests/acceptance/a5-voir-liste-tests-adaptatifs-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/a5-voir-liste-tests-adaptatifs-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/acceptance/b1-epreuve-qcu-test', ['exports', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  describe('Acceptance | b1 - Afficher un QCU | ', function () {

    var application = undefined;

    before(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    after(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    before(function () {
      return visit('/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id');
    });

    it('b1.1 Une liste de radiobuttons doit s\'afficher', function () {
      var $proposals = $('.challenge-response__proposal-input[type="radio"]');
      (0, _chai.expect)($proposals).to.have.lengthOf(4);
    });

    it('b1.2 Par défaut, le radiobutton de la réponse sauvegardée est affiché', function () {
      (0, _chai.expect)($('.challenge-response__proposal-input:radio:checked')).to.have.lengthOf(1);
    });

    it('b1.3 Une liste ordonnée d\'instruction doit s\'afficher', function () {
      (0, _chai.expect)($('.challenge-response__proposal:nth-child(1)').text().trim()).to.equal('1ere possibilite');
      (0, _chai.expect)($('.challenge-response__proposal:nth-child(2)').text().trim()).to.equal('2eme possibilite');
      (0, _chai.expect)($('.challenge-response__proposal:nth-child(3)').text().trim()).to.equal('3eme possibilite');
      (0, _chai.expect)($('.challenge-response__proposal:nth-child(4)').text().trim()).to.equal('4eme possibilite');
    });

    it('b1.4 L\'alerte est affichée si l\'utilisateur valide, mais aucun radiobutton n\'est coché', function () {
      $(':radio').prop('checked', false);
      $('.challenge-actions__action-validate').click();
      andThen(function () {
        (0, _chai.expect)($('.alert')).to.have.lengthOf(1);
        (0, _chai.expect)($('.alert').text().trim()).to.equal('Pour valider, sélectionner une réponse. Sinon, passer.');
      });
    });

    it('b1.5 Si un utilisateur clique sur un radiobutton, il est coché', function () {
      (0, _chai.expect)($('input:radio:checked:nth-child(1)').is(':checked')).to.equal(false);
      click($('.challenge-response__proposal:nth-child(1) input'));
      andThen(function () {
        (0, _chai.expect)($('input:radio:checked:nth-child(1)').is(':checked')).to.equal(true);
        (0, _chai.expect)($('input:radio:checked')).to.have.lengthOf(1);
      });
    });

    it('b1.6 Si un utilisateur clique sur un radiobutton, il est coché, et tous les autres sont décochés', function () {
      (0, _chai.expect)($('input:radio:checked')).to.have.lengthOf(1);
      click($('.challenge-response__proposal:nth-child(2) input'));
      andThen(function () {
        (0, _chai.expect)($('input:radio:checked')).to.have.lengthOf(1);
      });
    });
  });
});
define('pix-live/tests/acceptance/b1-epreuve-qcu-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/b1-epreuve-qcu-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/acceptance/b2-epreuve-qcm-test', ['exports', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  function visitTimedChallenge() {
    visit('/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id');
    andThen(function () {
      var buttonConfirm = findWithAssert('.challenge-item-warning button');
      buttonConfirm.click();
    });
  }
  describe('Acceptance | b2 - Afficher un QCM | ', function () {

    var application = undefined;

    before(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    after(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    before(function () {
      return visitTimedChallenge();
    });

    it('b2.1 It should render challenge instruction', function () {
      var $challengeInstruction = $('.challenge-statement__instruction');
      var instructionText = 'Un QCM propose plusieurs choix, l\'utilisateur peut en choisir plusieurs';
      (0, _chai.expect)($challengeInstruction.text()).to.equal(instructionText);
    });

    it('b2.2 Le contenu de type [foo](bar) doit être converti sous forme de lien', function () {
      var $links = findWithAssert('.challenge-statement__instruction a');
      (0, _chai.expect)($links.length).to.equal(1);
      (0, _chai.expect)($links.text()).to.equal('plusieurs');
      (0, _chai.expect)($links.attr('href')).to.equal('http://link.plusieurs.url');
    });

    it('b2.3 Les liens doivent s\'ouvrir dans un nouvel onglet', function () {
      var $links = findWithAssert('.challenge-statement__instruction a');
      (0, _chai.expect)($links.attr('target')).to.equal('_blank');
    });

    it('b2.4 It should render a list of checkboxes', function () {
      var $proposals = $('input[type="checkbox"]');
      (0, _chai.expect)($proposals).to.have.lengthOf(4);
    });

    it('b2.5 By default, already checked checkboxes are checked', function () {
      (0, _chai.expect)($('input:checkbox:checked')).to.have.lengthOf(3);
    });

    it('b2.6 It should render an ordered list of instruction', function () {
      (0, _chai.expect)($('.challenge-response__proposal:nth-child(1)').text().trim()).to.equal('possibilite 1, et/ou');
      (0, _chai.expect)($('.challenge-response__proposal:nth-child(2)').text().trim()).to.equal('possibilite 2, et/ou');
      (0, _chai.expect)($('.challenge-response__proposal:nth-child(3)').text().trim()).to.equal('possibilite 3, et/ou');
      (0, _chai.expect)($('.challenge-response__proposal:nth-child(4)').text().trim()).to.equal('possibilite 4');
    });

    it('b2.7 Error alert box should be hidden by default', function () {
      (0, _chai.expect)($('.alert')).to.have.lengthOf(0);
    });

    it('b2.8 Error alert box should be displayed if user validate without checking a checkbox', function () {
      var $validateLink = $('.challenge-actions__action-validate');
      (0, _chai.expect)($('input:checkbox:checked')).to.have.lengthOf(3);
      $('input:checkbox').prop('checked', false);
      (0, _chai.expect)($('input:checkbox:checked')).to.have.lengthOf(0);
      click($validateLink);
      andThen(function () {
        (0, _chai.expect)($('.alert')).to.have.lengthOf(1);
        (0, _chai.expect)($('.alert').text().trim()).to.equal('Pour valider, sélectionner au moins une réponse. Sinon, passer.');
      });
    });

    it('b2.10 If an user check a checkbox, it is checked', function () {
      (0, _chai.expect)($('input:checkbox:checked:nth-child(1)').is(':checked')).to.equal(false);
      $('.challenge-response__proposal:nth-child(1) input').click();
      andThen(function () {
        (0, _chai.expect)($('input:checkbox:checked:nth-child(1)').is(':checked')).to.equal(true);
        (0, _chai.expect)($('input:checkbox:checked')).to.have.lengthOf(1);
      });
    });

    it('b2.11 If an user check another checkbox, it is checked, the previous checked checkboxes remains checked', function () {
      (0, _chai.expect)($('input:checkbox:checked')).to.have.lengthOf(1);
      click($('.challenge-response__proposal:nth-child(2) input'));
      andThen(function () {
        (0, _chai.expect)($('input:checkbox:checked')).to.have.lengthOf(2);
      });
    });
  });
});
define('pix-live/tests/acceptance/b2-epreuve-qcm-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/b2-epreuve-qcm-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/acceptance/b3-epreuve-qroc-test', ['exports', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  describe('Acceptance | b3 - Afficher un QROC | ', function () {

    var application = undefined;

    before(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    after(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    before(function () {
      return visit('/assessments/ref_assessment_id/challenges/ref_qroc_challenge_id');
    });

    it('b3.1 It should render challenge instruction', function () {
      var $challengeInstruction = $('.challenge-statement__instruction');
      var instructiontext = 'Un QROC est une question ouverte avec un simple champ texte libre pour répondre';
      (0, _chai.expect)($challengeInstruction.text()).to.equal(instructiontext);
    });

    it('b3.2 It should display only one input text as proposal to user', function () {
      (0, _chai.expect)($('.challenge-response__proposal-input')).to.have.lengthOf(1);
    });

    it('b3.3 Error alert box should be displayed if user validate without writing any answer', function () {
      fillIn('input[data-uid="qroc-proposal-uid"]', '');
      (0, _chai.expect)($('.alert')).to.have.lengthOf(0);
      click(findWithAssert('.challenge-actions__action-validate'));
      andThen(function () {
        // assertions for after async behavior
        (0, _chai.expect)($('.alert')).to.have.lengthOf(1);
        (0, _chai.expect)($('.alert').text().trim()).to.equal('Pour valider, saisir une réponse. Sinon, passer.');
      });
    });
  });
});
define('pix-live/tests/acceptance/b3-epreuve-qroc-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/b3-epreuve-qroc-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/acceptance/b4-epreuve-qrocm-test', ['exports', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  describe('Acceptance | b4 - Afficher un QROCM | ', function () {

    var application = undefined;

    before(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    after(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    before(function () {
      return visit('/assessments/ref_assessment_id/challenges/ref_qrocm_challenge_id');
    });

    it('b4.1 It should render challenge instruction', function () {
      var $challengeInstruction = $('.challenge-statement__instruction');
      var instructiontext = 'Un QROCM est une question ouverte avec plusieurs champs texte libre pour repondre';
      (0, _chai.expect)($challengeInstruction.text()).to.equal(instructiontext);
    });

    it('b4.2 It should display only one input text as proposal to user', function () {
      (0, _chai.expect)($('.challenge-response__proposal-input')).to.have.lengthOf(3);
    });

    it('b4.3 Error alert box should be displayed if user validate without checking a checkbox', function () {
      // 1st make sure all inputs are cleared
      $(':input').val('');
      // Then try to validate sth
      click($('.challenge-actions__action-validate'));
      andThen(function () {
        (0, _chai.expect)($('.alert')).to.have.lengthOf(1);
        (0, _chai.expect)($('.alert').text().trim()).to.equal('Pour valider, saisir au moins une réponse. Sinon, passer.');
      });
    });
  });
});
define('pix-live/tests/acceptance/b4-epreuve-qrocm-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/b4-epreuve-qrocm-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/acceptance/b5-epreuve-image-de-consigne-test', ['exports', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  function visitTimedChallenge() {
    visit('/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id');
    andThen(function () {
      var buttonConfirm = findWithAssert('.challenge-item-warning button');
      buttonConfirm.click();
    });
  }

  describe('Acceptance | b5 - Afficher une image sous la consigne | ', function () {

    var application = undefined;

    before(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    after(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    describe('Quand l\'épreuve contient une illustration en consigne', function () {

      before(function () {
        return visitTimedChallenge();
      });

      it('b5.1 Une image unique peut être affichée sous la consigne', function () {
        var $illustration = findWithAssert('.challenge-statement__illustration');
        (0, _chai.expect)($illustration.length).to.equal(1);
      });

      it('b5.2 Cette image a un alt text “ceci est une image”', function () {
        var $illustration = findWithAssert('.challenge-statement__illustration');
        (0, _chai.expect)($illustration.attr('alt')).to.contains('Illustration de l\'épreuve');
      });
    });

    describe('Quand l\'épreuve ne contient pas d\'illustration en consigne', function () {

      before(function () {
        return visit('/assessments/raw_assessment_id/challenges/raw_qcm_challenge_id');
      });

      it('b5.3 La section d\'illustration est cachée', function () {

        // We are in a challenge...
        findWithAssert('.challenge-item');

        // ... but illustration is hidden
        var $illustration = $('.challenge-statement__illustration');
        (0, _chai.expect)($illustration.length).to.equal(0);
      });
    });
  });
});
define('pix-live/tests/acceptance/b5-epreuve-image-de-consigne-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/b5-epreuve-image-de-consigne-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/acceptance/b6-epreuve-pj-test', ['exports', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  function visitTimedChallenge() {
    visit('/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id');
    andThen(function () {
      var buttonConfirm = findWithAssert('.challenge-item-warning button');
      buttonConfirm.click();
    });
  }

  describe('Acceptance | b6 - Télécharger une pièce jointe depuis la consigne d\'une épreuve | ', function () {

    var application = undefined;

    before(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    after(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    describe('Quand l\'épreuve contient une pièce jointe en consigne', function () {

      before(function () {
        return visitTimedChallenge();
      });

      it('b6.1 Il existe un moyen pour télécharger la pièce jointe d\'une épreuve dans la zone de consigne', function () {
        var $attachmentLink = findWithAssert('.challenge-statement__action-link');
        (0, _chai.expect)($attachmentLink.length).to.equal(1);
      });

      it('b6.2 Le lien de la pièce jointe pointe vers le bon lien', function () {
        var $attachmentLink = $('.challenge-statement__action-link');
        (0, _chai.expect)($attachmentLink.text()).to.contains('Télécharger');
        (0, _chai.expect)($attachmentLink.attr('href')).to.equal('http://example_of_url');
      });

      it('b6.3 Il n\'y a qu\'un seul fichier téléchargeable', function () {
        var $attachment = findWithAssert('.challenge-statement__action-link');
        (0, _chai.expect)($attachment.length).to.equal(1);
      });
    });

    describe('Quand l\'épreuve ne contient pas de pièce jointe en consigne', function () {

      before(function () {
        return visit('/assessments/raw_assessment_id/challenges/raw_qcm_challenge_id');
      });

      it('b6.4 La section de téléchargement des pièces jointes est cachée', function () {
        // We are in a challenge...
        findWithAssert('.challenge-item');

        // ... but attachment is hidden
        var $attachmentLink = $('.challenge-statement__action-link');
        (0, _chai.expect)($attachmentLink.length).to.equal(0);
      });
    });
  });
});
define('pix-live/tests/acceptance/b6-epreuve-pj-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/b6-epreuve-pj-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/acceptance/b7-epreuve-points-communs-test', ['exports', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  describe('Acceptance | b7 - Points communs a toutes les épreuves | ', function () {

    var application = undefined;

    before(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    after(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    before(function () {
      return visit('/assessments/ref_assessment_id/challenges/ref_qrocm_challenge_id');
    });

    it('b7.0 Le nom du test est affiché', function () {
      (0, _chai.expect)(findWithAssert('.course-banner-name').text()).to.contains('First Course');
    });

    it('b7.1 L\'instruction de l\'epreuve est affichée', function () {
      var $challengeInstruction = $('.challenge-statement__instruction');
      var instructiontext = 'Un QROCM est une question ouverte avec plusieurs champs texte libre pour repondre';
      (0, _chai.expect)($challengeInstruction.text()).to.equal(instructiontext);
    });

    it('b7.2a Le contenu de type [foo](bar) doit être converti sous forme de lien', function () {
      var $links = findWithAssert('.challenge-statement__instruction a');
      (0, _chai.expect)($links.length).to.equal(1);
      (0, _chai.expect)($links.text()).to.equal('ouverte');
      (0, _chai.expect)($links.attr('href')).to.equal('http://link.ouverte.url');
    });

    it('b7.2b Les liens doivent s\'ouvrir dans un nouvel onglet', function () {
      var $links = findWithAssert('.challenge-statement__instruction a');
      (0, _chai.expect)($links.attr('target')).to.equal('_blank');
    });

    it('b7.3 Un bouton de type "Skip" doit s\'afficher', function () {
      (0, _chai.expect)($('.challenge-actions__action-skip')).to.have.lengthOf(1);
    });

    it('b7.4 Un bouton de type "Validate" doit s\'afficher', function () {
      (0, _chai.expect)($('.challenge-actions__action-skip')).to.have.lengthOf(1);
    });

    it('b7.5 Il existe un bouton "Revenir à la liste des tests"', function () {
      var $courseListButton = findWithAssert('.course-banner-home-link');
      (0, _chai.expect)($courseListButton.text()).to.equal('Retour à la liste des tests');
    });

    it('b7.6 Quand je clique sur le bouton "Revenir à la liste des tests", je suis redirigé vers l\'index', function () {
      // when
      click('.course-banner-home-link');

      // then
      andThen(function () {
        return (0, _chai.expect)(currentURL()).to.equal('/');
      });
    });
  });
});
define('pix-live/tests/acceptance/b7-epreuve-points-communs-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/b7-epreuve-points-communs-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/acceptance/c1-recapitulatif-test', ['exports', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  describe('Acceptance | c1 - Consulter l\'écran de fin d\'un test ', function () {

    var application = undefined;

    before(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    after(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    beforeEach(function () {
      return visit('/assessments/ref_assessment_id/results');
    });

    it('c1.0 se fait en accédant à l\'URL /assessments/:assessment_id/results', function () {
      (0, _chai.expect)(currentURL()).to.equal('/assessments/ref_assessment_id/results');
    });

    it('c1.1 affiche une liste qui récapitule les réponses', function () {
      findWithAssert('.assessment-results-list');
    });

    it('c1.2 le tableau récapitulatif contient les instructions ', function () {
      var $proposals = findWithAssert('.assessment-results-result');
      (0, _chai.expect)($proposals.text()).to.contains('Un QCM propose plusieurs choix');
      (0, _chai.expect)($proposals.text()).to.contains('Un QCU propose plusieurs choix');
      (0, _chai.expect)($proposals.text()).to.contains('Un QROC est une question ouverte');
      (0, _chai.expect)($proposals.text()).to.contains('Un QROCM est une question ouverte');
    });

    it('c1.3 Pour une bonne réponse, le tableau récapitulatif donne une indication adéquate', function () {
      var $cell = findWithAssert('div[data-toggle="tooltip"]:eq(0)');
      (0, _chai.expect)($cell.attr('data-original-title')).to.equal('Réponse correcte');
    });

    it('c1.4 Pour une mauvaise réponse, le tableau récapitulatif donne une indication adéquate', function () {
      var $cell = findWithAssert('div[data-toggle="tooltip"]:eq(1)');
      (0, _chai.expect)($cell.attr('data-original-title')).to.equal('Réponse incorrecte');
    });

    it('c1.5 Pour une réponse dont la validation n\'est pas encore implémentée, le tableau récapitulatif donne une indication adéquate', function () {
      var $cell = findWithAssert('div[data-toggle="tooltip"]:eq(3)');
      (0, _chai.expect)($cell.attr('data-original-title')).to.equal('Correction automatique en cours de développement ;)');
    });

    it('c1.6 Pour une réponse dont l\'utilisateur a cliqué sur \'Je Passe\', le tableau récapitulatif donne une indication adéquate', function () {
      var $cell = findWithAssert('div[data-toggle="tooltip"]:eq(2)');
      (0, _chai.expect)($cell.attr('data-original-title')).to.equal('Sans réponse');
    });

    it('c1.7 Pour une réponse dont l\'utilisateur n\'a qu\'une partie des bonnes réponse, le tableau récapitulatif donne une indication adéquate', function () {
      var $cell = findWithAssert('div[data-toggle="tooltip"]:eq(4)');
      (0, _chai.expect)($cell.attr('data-original-title')).to.equal('Réponse partielle');
    });

    it('c1.8 Pour une réponse dont l\'utilisateur a bien répondu mais trop tard, le tableau récapitulatif donne une indication adéquate', function () {
      visit('/assessments/raw_assessment_id/results');
      andThen(function () {
        var $picto = findWithAssert('.assessment-results-result-img > div');
        (0, _chai.expect)($picto.data('original-title')).to.contain('Temps dépassé');
      });
    });

    it('c1.9 Le nom du test est affiché', function () {
      (0, _chai.expect)(findWithAssert('.course-banner-name').text()).to.contains('First Course');
    });

    it('c1.10 Le bouton "Revenir à la liste des tests" n\'apparaît pas', function () {
      (0, _chai.expect)(find('.course-banner-home-link')).to.have.lengthOf(0);
    });

    it('c1.11. propose un moyen pour revenir à la liste des tests', function () {
      findWithAssert('button.assessment-results-link-home');
    });
  });
});
define('pix-live/tests/acceptance/c1-recapitulatif-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/c1-recapitulatif-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/acceptance/d1-epreuve-validation-test', ['exports', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  function getValidateActionLink() {
    return $('.challenge-actions__action-validate');
  }

  function visitTimedChallenge() {
    visit('/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id');
    andThen(function () {
      var buttonConfirm = findWithAssert('.challenge-item-warning button');
      buttonConfirm.click();
    });
  }

  describe('Acceptance | d1 - Valider une épreuve |', function () {

    var application = undefined;
    var $progressBar = undefined;

    before(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    after(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    before(function () {
      return visitTimedChallenge();
    });

    before(function () {
      $progressBar = findWithAssert('.pix-progress-bar');
    });

    it('d1.0 La barre de progression commence à 1', function () {
      var expectedText = '1';
      (0, _chai.expect)($progressBar.text()).to.contains(expectedText);
    });
    it('d1.1 Je peux valider ma réponse à une épreuve via un bouton "Je valide"', function () {
      (0, _chai.expect)(findWithAssert('.challenge-actions__action-validate')).to.have.lengthOf(1);
    });

    describe('quand je valide ma réponse à une épreuve', function () {

      it('d1.3 Si l\'épreuve que je viens de valider n\'était pas la dernière du test, je suis redirigé vers l\'épreuve suivante', function () {
        return click('.challenge-response__proposal-label').then(function () {
          var $validateButton = getValidateActionLink();
          return click($validateButton).then(function () {
            (0, _chai.expect)(currentURL()).to.contains('/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id');
          });
        });
      });

      it('d1.4 La barre de progression avance d\'une unité, de 1 à 2.', function () {
        var expectedText = '2';
        (0, _chai.expect)(findWithAssert('.pix-progress-bar').text()).to.contains(expectedText);
      });

      it('d1.5 Si l\'épreuve que je viens de valider était la dernière du test, je suis redirigé vers la page de fin du test', function () {
        visit('/assessments/ref_assessment_id/challenges/multiple_files_challenge_id').then(function () {
          click('.challenge-response__proposal-input').then(function () {
            var $validateButton = getValidateActionLink();
            return click($validateButton).then(function () {
              (0, _chai.expect)(currentURL()).to.contains('/assessments/ref_assessment_id/results');
            });
          });
        });
      });
    });
  });
});
define('pix-live/tests/acceptance/d1-epreuve-validation-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/d1-epreuve-validation-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/acceptance/e1-previsualisation-epreuve-test', ['exports', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  describe('Acceptance | e1 - Prévisualiser une épreuve | ', function () {

    var application = undefined;

    before(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    after(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    describe('e1 - Prévisualiser une épreuve |', function () {

      before(function () {
        return visit('/challenges/ref_qcu_challenge_id/preview');
      });

      it('e1.1 Il est possible de prévisualiser une épreuve en accédant à l\'URL /challenges/:id/preview', function () {
        (0, _chai.expect)(currentURL()).to.equal('/challenges/ref_qcu_challenge_id/preview');
        (0, _chai.expect)(findWithAssert('#challenge-preview'));
      });

      describe('On affiche', function () {

        var $challenge = undefined;

        before(function () {
          $challenge = findWithAssert('#challenge-preview');
        });

        it('e1.2 la consigne de l\'épreuve', function () {
          (0, _chai.expect)($challenge.find('.challenge-statement__instruction').text()).to.contain('Un QCU propose plusieurs choix, l\'utilisateur peut en choisir un seul');
        });
      });
    });
  });
});
define('pix-live/tests/acceptance/e1-previsualisation-epreuve-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/e1-previsualisation-epreuve-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/acceptance/f1-previsualisation-test-test', ['exports', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  describe('Acceptance | f1 - Prévisualisation  d\'un test |', function () {

    var application = undefined;

    before(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    after(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    describe('Prévisualiser la première page d\'un test |', function () {

      before(function () {
        visit('/courses/ref_course_id/preview');
      });

      it('f1.1 L\'accès à la preview d\'un test se fait en accédant à l\'URL /courses/:course_id/preview', function () {
        (0, _chai.expect)(currentURL()).to.equal('/courses/ref_course_id/preview');
      });

      var $preview = undefined;

      describe('On affiche', function () {

        before(function () {
          $preview = findWithAssert('#course-preview');
        });

        it('f1.2 le nom du test', function () {
          (0, _chai.expect)($preview.find('.course-name').text()).to.contains('First Course');
        });

        it('f1.3 la description du test', function () {
          var $courseDescription = $preview.find('.course-description');
          var instructionText = 'Contient toutes sortes d\'epreuves avec différentes caractéristiques couvrant tous les cas d\'usage.';
          (0, _chai.expect)($courseDescription.text()).to.contains(instructionText);
        });

        it('f1.4 un bouton pour démarrer la simulation du test et qui mène à la première question', function () {
          var $playButton = findWithAssert('.simulate-button');
          (0, _chai.expect)($playButton.text()).to.be.equals('Simuler le test');
          (0, _chai.expect)($playButton.attr('href')).to.be.equals('/courses/ref_course_id/preview/challenges/ref_qcm_challenge_id');
        });
      });
    });

    describe('Prévisualiser une épreuve dans le cadre d\'un test |', function () {

      before(function () {
        visit('/courses/ref_course_id/preview/challenges/ref_qcm_challenge_id');
      });

      it('f1.5 L\'accès à la preview d\'une épreuve d\'un test se fait en accédant à l\'URL /courses/:course_id/preview/challenges/:challenge_id', function () {
        (0, _chai.expect)(currentURL()).to.equal('/courses/ref_course_id/preview/challenges/ref_qcm_challenge_id');
      });

      describe('On affiche', function () {

        var $challenge = undefined;

        before(function () {
          $challenge = findWithAssert('.challenge-preview');
        });

        it('f1.6 la consigne de l\'épreuve', function () {
          visit('/courses/ref_course_id/preview/challenges/ref_qcm_challenge_id');
          andThen(function () {
            var buttonConfirm = findWithAssert('.challenge-item-warning button');
            buttonConfirm.click();
            (0, _chai.expect)($challenge.find('.challenge-statement__instruction').html()).to.contain('Un QCM propose plusieurs choix');
          });
        });

        it('f1.7 un bouton pour accéder à l\'épreuve suivante', function () {
          (0, _chai.expect)(findWithAssert('.challenge-actions__action-validate').text()).to.contains('Je valide');
        });
      });
    });
  });
});
define('pix-live/tests/acceptance/f1-previsualisation-test-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/f1-previsualisation-test-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/acceptance/g1-bandeau-no-internet-no-outils-test', ['exports', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  describe('Acceptance | g1 - Bandeau no internet no outils |', function () {

    var application = undefined;

    before(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    after(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    describe('Afficher un bandeau si l\'utilisateur ne doit pas utiliser ni Internet ni outils tierce', function () {

      before(function () {
        visit('/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id');
      });

      it('g1.1 Le bandeau s\'affiche si l\'épreuve le requiert', function () {
        (0, _chai.expect)(findWithAssert('.challenge-stay__text').text()).to.contains('Vous devez répondre à cette question sans sortir de cette page !');
      });
    });

    describe('Ne doit pas afficher un bandeau si l\'utilisateur a le droit d\'utiliser Internet et des outils tierce', function () {

      before(function () {
        visit('/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id');
      });

      it('g1.2 Le bandeau s\'affiche si l\'épreuve le requiert', function () {
        (0, _chai.expect)($('.challenge-stay__text')).to.have.lengthOf(0);
      });
    });
  });
});
define('pix-live/tests/acceptance/g1-bandeau-no-internet-no-outils-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/g1-bandeau-no-internet-no-outils-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/acceptance/h1-timeout-jauge-test', ['exports', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app', 'pix-live/utils/lodash-custom'], function (exports, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp, _pixLiveUtilsLodashCustom) {

  function getValidateActionLink() {
    return $('.challenge-actions__action-validate');
  }
  function getSkipActionLink() {
    return $('.challenge-actions__action-skip');
  }

  function fullUrlOfLastPostRequest() {
    return $($('.last-post-request-url')[0]).text();
  }
  function urlOfLastPostRequest() {
    var postedOn = fullUrlOfLastPostRequest().split('/api/').pop();
    postedOn = '/api/' + postedOn;
    return postedOn;
  }

  function bodyOfLastPostRequest() {
    return JSON.parse($($('.last-post-request-body')[0]).text());
  }

  function visitTimedChallenge() {
    visit('/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id');
    andThen(function () {
      var buttonConfirm = findWithAssert('.challenge-item-warning button');
      buttonConfirm.click();
    });
  }

  function visitTimedQruChallenge() {
    visit('/assessments/ref_assessment_id/challenges/ref_qru_challenge_id');
    andThen(function () {
      var buttonConfirm = findWithAssert('.challenge-item-warning button');
      buttonConfirm.click();
    });
  }

  describe('Acceptance | H1 - Timeout Jauge | ', function () {

    var application = undefined;

    before(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    after(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    describe('Test affichage ou non de la jauge', function () {
      //XXX: Deux cas car on test aussi une absence d'affichage
      it('doit afficher la jauge si exigée par le backend mais ne pas l\'afficher dans le cas contraire ', function () {
        visitTimedChallenge();
        andThen(function () {
          (0, _chai.expect)($('.timeout-jauge')).to.have.lengthOf(1);
        });
        visit('/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id');
        andThen(function () {
          (0, _chai.expect)($('.timeout-jauge')).to.have.lengthOf(0);
        });
      });
    });

    describe('Test quand la jauge est affichée', function () {
      describe('Format d\'affichage', function () {

        it('valeur 2 en backend est affichée 0:02 dans le timer', function () {
          visitTimedChallenge();
          andThen(function () {
            var $countDown = findWithAssert('.timeout-jauge-remaining');
            (0, _chai.expect)($countDown.text().trim()).to.equal('0:02');
          });
        });

        it('valeur 70 en backend est affichée 1:10 dans le timer', function () {
          visitTimedQruChallenge();
          andThen(function () {
            var $countDown = findWithAssert('.timeout-jauge-remaining');
            (0, _chai.expect)($countDown.text().trim()).to.equal('1:10');
          });
        });

        it('Le timer se décharge progressivement', function () {
          visitTimedChallenge();
          andThen(function () {
            triggerEvent('.timeout-jauge', 'resetElapsedTime');
          });
          // cas 1 : pas encore chargé
          andThen(function () {
            var $jaugeProgress = findWithAssert('.timeout-jauge-progress');
            (0, _chai.expect)($jaugeProgress.width()).to.equal(0);
          });
          triggerEvent('.timeout-jauge', 'simulateOneMoreSecond');
          // cas 2 : moitié chargé (50 signifie ici 50% de la largeur du compteur)
          andThen(function () {
            var $jaugeProgress = findWithAssert('.timeout-jauge-progress');
            (0, _chai.expect)($jaugeProgress.width()).to.equal(50);
          });
          triggerEvent('.timeout-jauge', 'simulateOneMoreSecond');
          // cas 3 : complètement chargé (100 signifie ici 100% de la largeur du compteur)
          andThen(function () {
            var $jaugeProgress = findWithAssert('.timeout-jauge-progress');
            (0, _chai.expect)($jaugeProgress.width()).to.equal(100);
          });
        });

        it('Décremente le compteur toutes les secondes, et s\'arrête définitivement à 0:00', function () {
          visit('/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id');
          andThen(function () {
            triggerEvent('.timeout-jauge', 'resetElapsedTime');
          });
          // cas 1 : pas encore chargé
          andThen(function () {
            var $jaugeRemaining = findWithAssert('.timeout-jauge-remaining');
            (0, _chai.expect)($jaugeRemaining.text().trim()).to.equal('0:02');
          });
          triggerEvent('.timeout-jauge', 'simulateOneMoreSecond');
          // cas 2 : moitié chargé
          andThen(function () {
            var $jaugeRemaining = findWithAssert('.timeout-jauge-remaining');
            (0, _chai.expect)($jaugeRemaining.text().trim()).to.equal('0:01');
          });
          triggerEvent('.timeout-jauge', 'simulateOneMoreSecond');
          // cas 3 : complètement chargé
          andThen(function () {
            var $jaugeRemaining = findWithAssert('.timeout-jauge-remaining');
            (0, _chai.expect)($jaugeRemaining.text().trim()).to.equal('0:00');
          });
          triggerEvent('.timeout-jauge', 'simulateOneMoreSecond');
          // cas 4 : trop chargé (temps imparti dépassé)
          andThen(function () {
            var $jaugeRemaining = findWithAssert('.timeout-jauge-remaining');
            (0, _chai.expect)($jaugeRemaining.text().trim()).to.equal('0:00');
          });
        });

        it('Affiche le pictogramme en noir, ou en rouge lorsque le timer est à 0:00', function () {
          visit('/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id');
          andThen(function () {
            triggerEvent('.timeout-jauge', 'resetElapsedTime');
          });
          // cas 1 : pas encore chargé : picto noir
          andThen(function () {
            var $jaugeClock = findWithAssert('.timeout-jauge-clock svg path');
            (0, _chai.expect)($jaugeClock.attr('fill')).to.equal('black');
          });
          triggerEvent('.timeout-jauge', 'simulateOneMoreSecond');
          // cas 2 : moitié chargé : picto noir
          andThen(function () {
            var $jaugeClock = findWithAssert('.timeout-jauge-clock svg path');
            (0, _chai.expect)($jaugeClock.attr('fill')).to.equal('black');
          });
          triggerEvent('.timeout-jauge', 'simulateOneMoreSecond');
          // cas 3 : complètement chargé : picto rouge
          andThen(function () {
            var $jaugeClock = findWithAssert('.timeout-jauge-clock svg path');
            (0, _chai.expect)($jaugeClock.attr('fill')).to.equal('red');
          });
          triggerEvent('.timeout-jauge', 'simulateOneMoreSecond');
          // cas 4 : trop chargé (temps imparti dépassé) : picto rouge
          andThen(function () {
            var $jaugeClock = findWithAssert('.timeout-jauge-clock svg path');
            (0, _chai.expect)($jaugeClock.attr('fill')).to.equal('red');
          });
        });
      });

      describe('Sauvegarde du temps passé | ', function () {

        it('Si l\'utilisateur valide et il reste du temps, demande la sauvegarde du temps restant en secondes', function () {
          visit('/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id');
          andThen(function () {
            triggerEvent('.timeout-jauge', 'resetElapsedTime');
            $('.last-post-request').remove();
          });
          andThen(function () {
            click(getValidateActionLink());
          });
          andThen(function () {
            (0, _chai.expect)(urlOfLastPostRequest()).to.equal('/api/answers');
            (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].get(bodyOfLastPostRequest(), 'data.attributes.timeout')).to.equal(2);
          });
        });

        it('Si l\'utilisateur valide et si le temps imparti est dépassé, demande la sauvegarde du nombre de secondes après 0', function () {
          visitTimedChallenge();
          andThen(function () {
            triggerEvent('.timeout-jauge', 'resetElapsedTime');
            $('.last-post-request').remove();
          });
          andThen(function () {
            triggerEvent('.timeout-jauge', 'simulateOneMoreSecond'); // 1 second left
            triggerEvent('.timeout-jauge', 'simulateOneMoreSecond'); // 0 second left
            triggerEvent('.timeout-jauge', 'simulateOneMoreSecond'); // -1 second below 0
            click(getValidateActionLink());
          });
          andThen(function () {
            (0, _chai.expect)(urlOfLastPostRequest()).to.equal('/api/answers');
            (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].get(bodyOfLastPostRequest(), 'data.attributes.timeout')).to.equal(-1);
          });
        });

        it('Si l\'utilisateur ABANDONNE et il reste du temps, demande la sauvegarde du temps restant en secondes', function () {
          visitTimedChallenge();
          andThen(function () {
            triggerEvent('.timeout-jauge', 'resetElapsedTime');
            $('.last-post-request').remove();
          });
          andThen(function () {
            click(getSkipActionLink());
          });
          andThen(function () {
            (0, _chai.expect)(urlOfLastPostRequest()).to.equal('/api/answers');
            (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].get(bodyOfLastPostRequest(), 'data.attributes.timeout')).to.equal(2);
          });
        });

        it('Si l\'utilisateur ABANDONNE et si le temps imparti est dépassé, demande la sauvegarde du nombre de secondes après 0', function () {
          visitTimedChallenge();
          andThen(function () {
            triggerEvent('.timeout-jauge', 'resetElapsedTime');
            $('.last-post-request').remove();
          });
          andThen(function () {
            triggerEvent('.timeout-jauge', 'simulateOneMoreSecond'); // 1 second left
            triggerEvent('.timeout-jauge', 'simulateOneMoreSecond'); // 0 second left
            triggerEvent('.timeout-jauge', 'simulateOneMoreSecond'); // -1 second below 0
            click(getSkipActionLink());
          });
          andThen(function () {
            (0, _chai.expect)(urlOfLastPostRequest()).to.equal('/api/answers');
            (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].get(bodyOfLastPostRequest(), 'data.attributes.timeout')).to.equal(-1);
          });
        });
      });
    });
  });
});
define('pix-live/tests/acceptance/h1-timeout-jauge-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/h1-timeout-jauge-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/acceptance/i1-page-warning-timee-test', ['exports', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  function visitTimedChallenge() {
    visit('/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id');
  }

  function visitUntimedChallenge() {
    visit('/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id');
  }
  describe('Acceptance | I1 - Warning prochaine page timée  | ', function () {

    var application = undefined;

    before(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    after(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    describe('i1- Test affichage ou non de la page avec le warning', function () {
      //XXX: Deux cas car on test aussi une absence d'affichage
      it('i1.1- doit cacher le contenu du challenge si l\'épreuve est timée mais l\'afficher dans le cas contraire ', function () {
        visitTimedChallenge();
        andThen(function () {
          (0, _chai.expect)($('.challenge-statement')).to.have.lengthOf(0);
        });
        visitUntimedChallenge();
        andThen(function () {
          (0, _chai.expect)($('.challenge-statement')).to.have.lengthOf(1);
        });
      });

      it('i1.2- doit afficher le warning si l\'épreuve est timée mais ne pas l\'afficher dans le cas contraire ', function () {
        visitTimedChallenge();
        andThen(function () {
          (0, _chai.expect)($('.challenge-item-warning')).to.have.lengthOf(1);
        });
        visitUntimedChallenge();
        andThen(function () {
          (0, _chai.expect)($('.challenge-item-warning')).to.have.lengthOf(0);
        });
      });

      it('i1.3- vérifier que le timer n\'est pas démarré automatiquement lorsque l\'épreuve est timée', function () {
        visitTimedChallenge();
        andThen(function () {
          (0, _chai.expect)($('.timeout-jauge')).to.have.lengthOf(0);
        });
      });
    });

    describe('i2-Test comportement lorsque le bouton de confirmation est cliqué', function () {
      before(function () {
        visitTimedChallenge();
        andThen(function () {
          var buttonConfirm = findWithAssert('.challenge-item-warning button');
          buttonConfirm.click();
        });
      });

      it('i2.1- vérifier que le warning est caché ', function () {
        (0, _chai.expect)($('.challenge-item-warning')).to.have.lengthOf(0);
      });

      it('i2.2- vérifier que le contenu de l\'épreuve est affiché', function () {
        (0, _chai.expect)($('.challenge-statement').css('display')).to.contains('block');
      });

      it('i2.3- vérifier que le timer est démarré ', function () {
        (0, _chai.expect)($('.timeout-jauge')).to.have.lengthOf(1);
      });
    });
  });
});
define('pix-live/tests/acceptance/i1-page-warning-timee-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/i1-page-warning-timee-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/adapters/application.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - adapters/application.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/app.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - app.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/components/app-footer.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/app-footer.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/components/app-header.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/app-header.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/components/app-menu.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/app-menu.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/components/beta-logo.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/beta-logo.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/components/challenge-actions.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/challenge-actions.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/components/challenge-item-generic.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/challenge-item-generic.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/components/challenge-item-qcm.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/challenge-item-qcm.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/components/challenge-item-qcu.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/challenge-item-qcu.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/components/challenge-item-qroc.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/challenge-item-qroc.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/components/challenge-item-qrocm.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/challenge-item-qrocm.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/components/challenge-statement.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/challenge-statement.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/components/challenge-stay.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/challenge-stay.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/components/corner-ribbon.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/corner-ribbon.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/components/course-banner.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/course-banner.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/components/first-page.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/first-page.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/components/follower-form.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/follower-form.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/components/followers.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/followers.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/components/get-result.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/get-result.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/components/modal-mobile.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/modal-mobile.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/components/progress-bar.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/progress-bar.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/components/qcm-proposals.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/qcm-proposals.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/components/qcu-proposals.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/qcu-proposals.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/components/qroc-proposal.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/qroc-proposal.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/components/qrocm-proposal.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/qrocm-proposal.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/components/timeout-jauge.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/timeout-jauge.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/components/user-menu.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/user-menu.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/components/warning-page.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/warning-page.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/controllers/courses/get-challenge-preview.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - controllers/courses/get-challenge-preview.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/controllers/home.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - controllers/home.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/helpers/convert-to-html.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - helpers/convert-to-html.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/helpers/describe-visiting', ['exports', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  /*
   FIXME: this doesn't works. I don't know why.
  
   Expected behavior:
   -0- when `describeVisiting` imported and used in acceptance test
   -1- it is called
   -2- content is called
   -3- tests and describe are mocha function and register the example blocks
   -4- mocha run the tests
   -5- we see the results in the report page
  
   Observed behavior:
   -0- ok
   -1- ok
   -2- ok
   -3- ok (?)
   -4- nope - tests are not ran
   -5- nope - no reporting
  
   TODO: investigate and use this for all acceptance tests.
  
   */

  exports['default'] = function (name) {
    describe('Acceptance | visiting ' + name, function () {
      beforeEach(function () {
        this.application = (0, _pixLiveTestsHelpersStartApp['default'])();
      });

      afterEach(function () {
        return (0, _pixLiveTestsHelpersDestroyApp['default'])(this.application);
      });
    });
  };
});
define('pix-live/tests/helpers/describe-visiting.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - helpers/describe-visiting.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('pix-live/tests/helpers/destroy-app.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - helpers/destroy-app.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/helpers/ember-cli-mocha-reporter', ['exports', 'npm:urljs'], function (exports, _npmUrljs) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    // apparently Sinon can mess with the Date constructor
    var OriginalDate = Date;

    function hasQueryParam(name) {
        var result = _npmUrljs['default'].queryString(name);
        return typeof result === 'string' || result;
    }

    var Reporter = (function () {
        function Reporter(runner, options) {
            _classCallCheck(this, Reporter);

            this.passes = 0;
            this.failures = 0;
            this.runner = runner;

            this.setupDOM();
            this.setupEvents(runner);
            this.setupBlanket();

            options.allowUncaught = hasQueryParam('no_try_catch');
        }

        _createClass(Reporter, [{
            key: 'setupDOM',
            value: function setupDOM() {
                var _this = this;

                var $rootNode = $('#mocha');

                if (!$rootNode) {
                    throw new Error('#mocha missing, ensure it is in your document');
                }

                $rootNode.append(template);

                $('#test-title').text(document.title);

                this.setupCanvas();

                this.$stats = $('#mocha-stats');
                this.stack = [$('#mocha-report')];

                this.$hidePassed = this.$stats.find('#hide-passed');

                this.$hidePassed.attr('checked', /hide_passed/.test(window.location.hash)).on('change', function () {
                    return _this.updateHidePassed();
                });

                this.updateHidePassed();

                this.$coverage = this.$stats.find('#enable-coverage');
                this.$coverage.attr('checked', hasQueryParam('coverage')).on('change', function () {
                    return _this.updateCoverageEnabled();
                });

                this.updateCoverageEnabled();

                this.$noTryCatch = this.$stats.find('#no-try-catch');
                this.$noTryCatch.attr('checked', hasQueryParam('no_try_catch')).on('change', function () {
                    return _this.updateNoTryCatch();
                });

                this.updateNoTryCatch();
            }
        }, {
            key: 'setupEvents',
            value: function setupEvents(runner) {
                var _this2 = this;

                function handlerForEvent(event) {
                    // e.g., "suite end" => "onSuiteEnd"
                    return ('on ' + event).replace(/ [\w]/g, function (m) {
                        return m[1].toUpperCase();
                    });
                }

                var events = ['start', // execution of testing started
                'end', // execution of testing ended
                'suite', // execution of a test suite started
                'suite end', // execution of a test suite ended
                'test', // execution of a test started
                'test end', // execution of a test ended
                'hook', // execution of a hook started
                'hook end', // execution of a hook ended
                'pass', // execution of a test ended in pass
                'fail', // execution of a test ended in fail
                'pending'];
                events.forEach(function (event) {
                    var reporter = _this2;
                    runner.on(event, function () /* arguments */{
                        var handler = reporter[handlerForEvent(event)];
                        if (handler) {
                            handler.apply(reporter, arguments);
                        }
                    });
                });
            }
        }, {
            key: 'setupBlanket',
            value: function setupBlanket() {
                var _this3 = this;

                if (!window.blanket) {
                    $('#enable-coverage').parentsUntil('#mocha-stats', '.test-option').hide();
                    return;
                }
                var blanket = window.blanket;
                var origOnTestsDone = blanket.onTestsDone;

                blanket.onTestsDone = function () {
                    origOnTestsDone.apply(blanket);
                    _this3.onBlanketDone();
                };
            }
        }, {
            key: 'setupCanvas',
            value: function setupCanvas() {
                this.canvas = $('.mocha-progress canvas')[0];
                this.ctx = this.canvas.getContext('2d');
            }
        }, {
            key: 'updateDuration',
            value: function updateDuration() {
                var seconds = (new OriginalDate() - this.startedAt) / 1000;
                this.$stats.find('.duration .value').text(seconds.toFixed(2));
            }
        }, {
            key: 'updateProgress',
            value: function updateProgress() {
                try {
                    var width = this.canvas.clientWidth;

                    this.renderProgressRing(width);
                } catch (err) {
                    // don't fail if we can't render progress
                }
            }
        }, {
            key: 'renderProgressRing',
            value: function renderProgressRing(diameter) {
                var totalTests = this.passes + this.failures;
                var progress = totalTests / this.runner.total * 100 | 0;
                var percent = Math.min(progress, 100);
                var angle = Math.PI * 2 * (percent / 100);
                var halfSize = diameter / 2;
                var rad = halfSize - 1;
                var fontSize = 11;
                var ctx = this.ctx;

                var quarterCircle = 0.5 * Math.PI;

                ctx.font = fontSize + 'px helvetica, arial, sans-serif';

                ctx.clearRect(0, 0, diameter, diameter);

                // outer circle
                ctx.strokeStyle = '#9f9f9f';
                ctx.beginPath();
                ctx.arc(halfSize, halfSize, rad, -quarterCircle, angle - quarterCircle, false);
                ctx.stroke();

                // inner circle
                ctx.strokeStyle = '#eee';
                ctx.beginPath();
                ctx.arc(halfSize, halfSize, rad - 1, -quarterCircle, angle - quarterCircle, true);
                ctx.stroke();

                // text
                var text = (percent | 0) + '%';
                var textWidth = ctx.measureText(text).width;

                ctx.fillText(text, halfSize - textWidth / 2 + 1, halfSize + fontSize / 2 - 1);
            }
        }, {
            key: 'updateHidePassed',
            value: function updateHidePassed() {
                if (this.$stats.find('#hide-passed').is(':checked')) {
                    $('#mocha-report').addClass('hide-passed');
                    $('#blanket-main').addClass('hide-passed');
                    window.location.hash = '#hide_passed';
                } else {
                    $('#mocha-report').removeClass('hide-passed');
                    $('#blanket-main').removeClass('hide-passed');
                    window.location.hash = '#';
                }
            }
        }, {
            key: 'updateCoverageEnabled',
            value: function updateCoverageEnabled() {
                if (this.$stats.find('#enable-coverage').is(':checked')) {
                    if (!hasQueryParam('coverage')) {
                        _npmUrljs['default'].updateSearchParam("coverage", 'true');
                        _npmUrljs['default'].updateSearchParam("no_try_catch");
                        this.$noTryCatch.attr('checked', false);
                        window.location.reload();
                    }
                } else {
                    if (hasQueryParam('coverage')) {
                        _npmUrljs['default'].updateSearchParam("coverage");
                        window.location.reload();
                    }
                }
            }
        }, {
            key: 'updateNoTryCatch',
            value: function updateNoTryCatch() {
                if (this.$stats.find('#no-try-catch').is(':checked')) {
                    if (!hasQueryParam('no_try_catch')) {
                        _npmUrljs['default'].updateSearchParam("no_try_catch", 'true');
                        _npmUrljs['default'].updateSearchParam("coverage");
                        this.$coverage.attr('checked', false);
                        window.location.reload();
                    }
                } else {
                    if (hasQueryParam('no_try_catch')) {
                        _npmUrljs['default'].updateSearchParam("no_try_catch");
                        window.location.reload();
                    }
                }
            }
        }, {
            key: 'setMood',
            value: function setMood(mood) {
                this.$stats.removeClass(this.mood);

                this.mood = mood;
                this.$stats.addClass(mood);
                setFavicon(mood);
            }
        }, {
            key: 'onStart',
            value: function onStart() {
                this.startedAt = new OriginalDate();
            }
        }, {
            key: 'onEnd',
            value: function onEnd() {
                if (this.mood !== 'sad') {
                    this.setMood('happy');
                }

                groupDescribes('JSHint');
                groupDescribes('JSCS');
            }
        }, {
            key: 'onSuite',
            value: function onSuite(suite) {
                if (suite.root) {
                    return;
                }

                var title = suite.fullTitle();
                var $fragment = $('<li class="suite"><h1><a></a></h1><ul></ul></li>');

                $fragment.find('a').text(suite.title).attr('href', grepUrl(title));

                this.stack[0].append($fragment);
                this.stack.unshift($fragment.find('ul'));
            }
        }, {
            key: 'onSuiteEnd',
            value: function onSuiteEnd(suite) {
                if (suite.root) {
                    return;
                }

                var $ul = this.stack.shift();

                if ($ul.find('.fail').length > 0) {
                    $ul.parent().addClass('fail');
                } else {
                    $ul.parent().addClass('pass');
                }
            }
        }, {
            key: 'onTestEnd',
            value: function onTestEnd(test) {
                this.updateDuration();

                var $fragment = fragmentForTest(test);

                if (!this.stack[0]) {
                    var $report = $('#mocha-report');
                    $report.append('<li class="suite"><h1></h1><ul></ul></li>');
                    $report.find('h1').text('ORPHAN TESTS');
                    this.stack.unshift($report.find('ul'));
                }

                this.stack[0].append($fragment);

                this.updateProgress();
            }
        }, {
            key: 'onPass',
            value: function onPass() {
                this.passes++;
                this.$stats.find('.passes .value').text(this.passes);
            }
        }, {
            key: 'onFail',
            value: function onFail(test, err) {
                this.failures++;
                this.$stats.find('.failures .value').text(this.failures);
                this.setMood('sad');

                test.err = err;
                if (test.type === 'hook') {
                    // This is a bizarre misfeature in mocha, but apparently without
                    // the reporter feeding this back, you will never hear these
                    // hook failures. Things like the testem mocha adapter assume
                    // this behavior.
                    this.runner.emit('test end', test);
                }
            }
        }, {
            key: 'onBlanketDone',
            value: function onBlanketDone() {
                var $blanket = $('#blanket-main');
                var $title = $blanket.find('.bl-title > .bl-file');

                $title.text('Code Coverage');

                this.updateHidePassed();
            }
        }]);

        return Reporter;
    })();

    exports['default'] = Reporter;

    function grepUrl(pattern) {
        var location = window.location;
        var search = location.search;

        if (search) {
            search = search.replace(/[?&]grep=[^&\s]*/g, '').replace(/^&/, '?');
        }

        var prefix = search ? search + '&' : '?';
        var locationPath = location.pathname;

        var encodedPattern = encodeURIComponent(pattern);

        return '' + locationPath + prefix + 'grep=' + encodedPattern;
    }

    function fragmentForTest(test) {
        var $fragment = $('<li class="test"><h2><span class="title"></h2></li>');

        $fragment.find('h2 .title').text(test.title);
        $fragment.addClass(speedOfTest(test));

        if (test.state === 'passed') {
            $fragment.addClass('pass');

            $fragment.find('h2').append('<span class="duration"></span>');
            $fragment.find('.duration').text(test.duration + 'ms');
        } else if (test.pending) {
            $fragment.addClass('pass').addClass('pending');
        } else {
            $fragment.addClass('fail');

            $fragment.append('<pre class="error"></pre>');
            $fragment.find('.error').text(errorSummaryForTest(test)).append('<div class="dump">Dump stack to console</div>');

            $fragment.find('.dump').on('click', function () {
                return console.log(test.err.stack);
            });
        }

        if (!test.pending) {
            (function () {
                var h2 = $fragment.find('h2');
                h2.append('<a class="replay" title="Replay">‣</a>');
                h2.find('.replay').attr('href', grepUrl(test.fullTitle()));

                var code = $('<pre><code></code></pre>');
                if (test.state === 'passed') {
                    code.css('display', 'none');
                }
                code.find('code').text(cleanCode(test.fn.toString()));
                $fragment.append(code);
                h2.on('click', function () {
                    return code.toggle();
                });
            })();
        }

        return $fragment;
    }

    function speedOfTest(test) {
        var slow = test.slow();
        var medium = slow / 2;

        if (test.duration > slow) {
            return 'slow';
        } else if (test.duration > medium) {
            return 'medium';
        }

        return 'fast';
    }

    function errorSummaryForTest(test) {
        var summary = test.err.stack || test.err.toString();

        if (summary.indexOf(test.err.message) === -1) {
            summary = test.err.message + '\n' + summary;
        }

        if (summary === '[object Error]') {
            summary = test.err.message;
        }

        if (!test.err.stack && test.err.sourceURL && test.err.line !== undefined) {
            summary += '\n(' + test.err.sourceURL + ':' + test.err.line + ')';
        }

        return summary;
    }

    function cleanCode(code) {
        code = code.replace(/\r\n?|[\n\u2028\u2029]/g, '\n').replace(/^\uFEFF/, '').replace(/^function *\(.*\) *{|\(.*\) *=> *{?/, '').replace(/\s+\}$/, '');

        var spaces = code.match(/^\n?( *)/)[1].length;
        var tabs = code.match(/^\n?(\t*)/)[1].length;
        var count = tabs ? tabs : spaces;
        var ws = tabs ? '\t' : ' ';

        var re = new RegExp('^\n?' + ws + '{' + count + '}', 'gm');

        code = code.replace(re, '');

        return code.trim();
    }

    // Original from <https://gist.github.com/timrwood/7754098>
    function setFavicon(mood) {
        var pngPrefix = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/';
        var redGraphic = pngPrefix + '9hAAAAH0lEQVQ4T2P8z8AAROQDxlEDGEbDgGE0DIBZaBikAwCl1B/x0/RuTAAAAABJRU5ErkJggg==';
        var greenGraphic = pngPrefix + '9hAAAAHklEQVQ4T2Nk+A+EFADGUQMYRsOAYTQMgHloGKQDAJXkH/HZpKBrAAAAAElFTkSuQmCC';

        var uri = mood === 'happy' ? greenGraphic : redGraphic;
        var links = $('link');

        // Remove existing favicons
        links.each(function (idx, link) {
            if (/\bicon\b/i.test(link.getAttribute('rel'))) {
                link.parentNode.removeChild(link);
            }
        });

        // Add new favicon
        var $link = $('<link type="image/x-icon" rel="icon">');
        $link.attr('href', uri);
        $('head').append($link);
    }

    function groupDescribes(linter) {
        var $linter = $('<li class="suite"><h1><a></a></h1><ul></ul></li>');
        $linter.find('a').text(linter).attr('href', grepUrl('{linter}'));

        var $suites = $('.suite:contains("' + linter + '")');

        $suites.each(function (idx, suite) {
            var $suite = $(suite);
            var suiteTitle = $suite.find('h1').text();

            var _suiteTitle$match = suiteTitle.match('^' + linter + ' - (.*)$');

            var _suiteTitle$match2 = _slicedToArray(_suiteTitle$match, 2);

            var fileName = _suiteTitle$match2[1];

            var $test = $suite.find('.test');

            $test.find('.title').text(fileName);

            $linter.find('ul').append($test);
            $suite.remove();
        });

        if ($linter.find('.test.fail').length > 0) {
            $linter.addClass('fail');
        } else {
            $linter.addClass('pass');
        }

        $('#mocha-report').append($linter);
    }

    // jscs:disable disallowVar
    var template = '<h1 id=\'test-title\'></h1>\n<ul id="mocha-stats">\n  <li class="test-option">\n    <label>\n      <input type="checkbox" id="enable-coverage"> Enable coverage\n    </label>\n  </li>\n  <li class="test-option">\n    <label>\n      <input type="checkbox" id="hide-passed"> Hide passed\n    </label>\n  </li>\n  <li class="test-option">\n    <label>\n      <input type="checkbox" id="no-try-catch"> No try/catch\n    </label>\n  </li>\n  <li class="passes">passes: <em class="value">0</em></li>\n  <li class="failures">failures: <em class="value">0</em></li>\n  <li class="duration">duration: <em class="value">0</em>s</li>\n  <li class="mocha-progress"><canvas width="40" height="40"></canvas></li>\n</ul>\n<ul id="mocha-report"></ul>';
    // jscs:enable disallowVar
});
/*
 * A Mocha reporter meant to be used with ember-cli-mocha and ember-cli-blanket
 *
 * Based on Edward Faulnker's better-mocha-html-reporter:
 * <https://github.com/ef4/better-mocha-html-reporter>
 *
 * With modifications from Elad Shahar:
 * <https://gist.github.com/SaladFork/15683b00388bfe1d1458>
 *
 * And Andrey Mikhaylov (lolmaus):
 * <https://gist.github.com/lolmaus/8b5e84762c85142e43c2>
 *
 * Made into an Ember CLI addon and tweaked by Michael Melvin (mmelvin0):
 * <https://github.com/mmelvin0/ember-cli-mocha-reporter>
 */

/* global $, Date */
define('pix-live/tests/helpers/eq.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - helpers/eq.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/helpers/extract-extension.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - helpers/extract-extension.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/helpers/inc.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - helpers/inc.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _pixLiveTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _pixLiveTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('pix-live/tests/helpers/module-for-acceptance.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - helpers/module-for-acceptance.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/helpers/property-of.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - helpers/property-of.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/helpers/resolver', ['exports', 'pix-live/resolver', 'pix-live/config/environment'], function (exports, _pixLiveResolver, _pixLiveConfigEnvironment) {

  var resolver = _pixLiveResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _pixLiveConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _pixLiveConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('pix-live/tests/helpers/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - helpers/resolver.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/helpers/start-app', ['exports', 'ember', 'pix-live/app', 'pix-live/config/environment'], function (exports, _ember, _pixLiveApp, _pixLiveConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    // use defaults, but you can override
    var attributes = _ember['default'].assign({}, _pixLiveConfigEnvironment['default'].APP, attrs);

    _ember['default'].run(function () {
      application = _pixLiveApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('pix-live/tests/helpers/start-app.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - helpers/start-app.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/helpers/strip-instruction.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - helpers/strip-instruction.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/initializers/ajax-interceptor.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - initializers/ajax-interceptor.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/initializers/router.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - initializers/router.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/integration/components/app-menu-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Integration | Component | app menu', function () {
    (0, _emberMocha.setupComponentTest)('app-menu', {
      integration: true
    });

    function addItemsToMenu(component, items) {
      component.set('items', items);
    }

    function renderAppMenu(component) {
      component.render(Ember.HTMLBars.template({
        'id': 'tTxNlhg2',
        'block': '{"statements":[["append",["helper",["app-menu"],[["get",["items"]]],null],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
        'meta': {}
      }));
    }

    (0, _mocha.describe)('Test render menu item or not according to item', function () {
      (0, _mocha.it)('Should not component App-menu with no item', function () {
        //Given
        addItemsToMenu(this, []);
        //When
        renderAppMenu(this);
        //then
        (0, _chai.expect)(this.$('.app-menu__item > a').text()).to.be.empty;
      });

      (0, _mocha.it)('Should render component App-menu with one or multiple items', function () {
        //Given
        addItemsToMenu(this, [{
          title: 'projet',
          href: '/projet'
        }, {
          title: 'menu2',
          href: '/about'
        }]);
        //When
        renderAppMenu(this);

        //then
        var itemsLength = this.$().find('.app-menu__item').get('length');
        (0, _chai.expect)(itemsLength).to.equal(2);

        var firstItem = this.$().find('.app-menu__item > a').eq(0);
        (0, _chai.expect)(firstItem.text().trim()).to.equal('projet');
        (0, _chai.expect)(firstItem.prop('href')).to.contain('/projet');
      });
    });
  });
});
define('pix-live/tests/integration/components/app-menu-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - integration/components/app-menu-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/integration/components/challenge-statement-test', ['exports', 'ember', 'chai', 'mocha', 'ember-mocha'], function (exports, _ember, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Integration | Component | ChallengeStatement', function () {

    (0, _emberMocha.setupComponentTest)('challenge-statement', {
      integration: true
    });

    function addChallengeToContext(component, challenge) {
      component.set('challenge', challenge);
    }

    function renderChallengeStatement(component) {
      component.render(_ember['default'].HTMLBars.template({
        'id': 'isQK168f',
        'block': '{"statements":[["append",["helper",["challenge-statement"],[["get",["challenge"]]],null],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
        'meta': {}
      }));
    }

    /*
     * Instruction
     * ------------------------------------------------
     */

    (0, _mocha.describe)('Instruction section:', function () {

      // Inspired from: https://github.com/emberjs/ember-mocha/blob/0790a78d7464655fee0c103d2fa960fa53a056ca/tests/setup-component-test-test.js#L118-L122
      (0, _mocha.it)('should render challenge instruction if it exists', function () {
        // given
        addChallengeToContext(this, {
          instruction: 'La consigne de mon test'
        });

        // when
        renderChallengeStatement(this);

        // then
        (0, _chai.expect)(_ember['default'].$.trim(this.$('.challenge-statement__instruction').text())).to.equal('La consigne de mon test');
      });

      (0, _mocha.it)('should not render challenge instruction if it does not exist', function () {
        // given
        addChallengeToContext(this, {});

        // when
        renderChallengeStatement(this);

        // then
        (0, _chai.expect)(this.$('.challenge-statement__instruction')).to.have.lengthOf(0);
      });
    });

    /*
     * Illustration
     * ------------------------------------------------
     */

    (0, _mocha.describe)('Illustration section', function () {
      (0, _mocha.it)('should display challenge illustration (and alt) if it exists', function () {
        // given
        addChallengeToContext(this, {
          illustrationUrl: 'http://challenge.illustration.url'
        });

        // when
        renderChallengeStatement(this);

        // then
        var $illustration = this.$('.challenge-statement__illustration');
        (0, _chai.expect)($illustration.prop('src')).to.equal('http://challenge.illustration.url/');
        (0, _chai.expect)($illustration.prop('alt')).to.equal('Illustration de l\'épreuve');
      });

      (0, _mocha.it)('should not display challenge illustration if it does not exist', function () {
        // given
        addChallengeToContext(this, {});

        // when
        renderChallengeStatement(this);

        // then
        (0, _chai.expect)(this.$('.challenge-statement__illustration')).to.have.lengthOf(0);
      });
    });

    /*
     * Attachments
     * ------------------------------------------------
     */

    (0, _mocha.describe)('Attachments section:', function () {

      (0, _mocha.describe)('if challenge has no file', function () {

        (0, _mocha.it)('should not display attachements section', function () {
          addChallengeToContext(this, {
            attachments: [],
            hasAttachment: false
          });

          // when
          renderChallengeStatement(this);

          // then
          (0, _chai.expect)(this.$('.challenge-statement__attachments-section')).to.have.lengthOf(0);
        });
      });

      (0, _mocha.describe)('if challenge has only one file', function () {

        (0, _mocha.it)('should display only one link button', function () {
          // given
          addChallengeToContext(this, {
            attachments: ['http://challenge.file.url'],
            hasAttachment: true,
            hasSingleAttachment: true,
            hasMultipleAttachments: false
          });

          // when
          renderChallengeStatement(this);

          // then
          var $downloadLink = this.$('.challenge-statement__action-link');
          (0, _chai.expect)($downloadLink).to.have.lengthOf(1);
          (0, _chai.expect)($downloadLink.prop('href')).to.equal('http://challenge.file.url/');
        });
      });

      (0, _mocha.describe)('if challenge has multiple files', function () {

        var file1 = 'http://file.1.docx';
        var file2 = 'file.2.odt';
        var challenge = {
          attachments: [file1, file2],
          hasAttachment: true,
          hasSingleAttachment: false,
          hasMultipleAttachments: true
        };

        (0, _mocha.it)('should display as many radio button as attachments', function () {
          // given
          addChallengeToContext(this, challenge);

          // when
          renderChallengeStatement(this);

          // then
          (0, _chai.expect)(this.$('.challenge-statement__file-option-input')).to.have.lengthOf(challenge.attachments.length);
        });

        (0, _mocha.it)('should display radio buttons with right label', function () {
          // given
          addChallengeToContext(this, challenge);

          // when
          renderChallengeStatement(this);

          // then
          (0, _chai.expect)(this.$('.challenge-statement__file-option-label').get(0).textContent.trim()).to.equal('fichier .docx');
          (0, _chai.expect)(this.$('.challenge-statement__file-option-label').get(1).textContent.trim()).to.equal('fichier .odt');
        });

        (0, _mocha.it)('should select first attachment as default selected radio buton', function () {
          // given
          addChallengeToContext(this, challenge);

          // when
          renderChallengeStatement(this);

          // then
          var $firstRadioButton = this.$('.challenge-statement__file-option-input')[0];
          var $secondRadioButton = this.$('.challenge-statement__file-option-input')[1];
          (0, _chai.expect)($firstRadioButton.checked).to.be['true'];
          (0, _chai.expect)($secondRadioButton.checked).to.be['false'];
        });

        (0, _mocha.it)('should display attachements paragraph text', function () {
          // given
          addChallengeToContext(this, challenge);

          // when
          renderChallengeStatement(this);

          // then
          (0, _chai.expect)(this.$('.challenge-statement__text-content').text().trim()).to.equal('Choisissez le type de fichier que vous voulez utiliser');
        });

        (0, _mocha.it)('should display help icon next to attachements paragraph', function () {
          // given
          addChallengeToContext(this, challenge);

          // when
          renderChallengeStatement(this);

          // then
          (0, _chai.expect)(this.$('.challenge-statement__help-icon')).to.have.lengthOf(1);
        });
      });
    });
  });
});
define('pix-live/tests/integration/components/challenge-statement-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - integration/components/challenge-statement-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/integration/components/challenge-stay-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Integration | Component | challenge stay', function () {
    (0, _emberMocha.setupComponentTest)('challenge-stay', {
      integration: true
    });

    (0, _mocha.it)('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#challenge-stay}}
      //     template content
      //   {{/challenge-stay}}
      // `);

      this.render(Ember.HTMLBars.template({
        'id': 'GcRxH7qZ',
        'block': '{"statements":[["append",["unknown",["challenge-stay"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
        'meta': {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('pix-live/tests/integration/components/challenge-stay-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - integration/components/challenge-stay-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/integration/components/corner-ribbon-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeComponent)('corner-ribbon', 'Integration | CornerRibbonComponent', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      this.render(Ember.HTMLBars.template({
        'id': 'ahDrE2M0',
        'block': '{"statements":[["append",["unknown",["corner-ribbon"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
        'meta': {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('pix-live/tests/integration/components/corner-ribbon-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - integration/components/corner-ribbon-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/integration/components/first-page-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeComponent)('first-page', 'Integration | FirstPageComponent', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      this.render(Ember.HTMLBars.template({
        'id': 'TW/+tSBf',
        'block': '{"statements":[["append",["unknown",["first-page"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
        'meta': {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('pix-live/tests/integration/components/first-page-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - integration/components/first-page-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/integration/components/follower-form-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Integration | Component | follower form', function () {
    (0, _emberMocha.setupComponentTest)('follower-form', {
      integration: true
    });

    (0, _mocha.it)('renders', function () {
      this.render(Ember.HTMLBars.template({
        'id': 'O9xGjXjO',
        'block': '{"statements":[["append",["unknown",["follower-form"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
        'meta': {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });

    (0, _mocha.describe)('Test Component form', function () {
      (0, _mocha.it)('should return true if submit button exist', function () {
        //When
        this.render(Ember.HTMLBars.template({
          'id': 'O9xGjXjO',
          'block': '{"statements":[["append",["unknown",["follower-form"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));
        //then
        (0, _chai.expect)(this.$('.load-email-button').length).to.equal(1);
      });

      (0, _mocha.it)('should return true if input exist', function () {
        //When
        this.render(Ember.HTMLBars.template({
          'id': 'O9xGjXjO',
          'block': '{"statements":[["append",["unknown",["follower-form"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));
        //then
        (0, _chai.expect)(this.$('.load-email-enter').length).to.equal(1);
      });
    });
  });
});
define('pix-live/tests/integration/components/follower-form-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - integration/components/follower-form-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/integration/components/get-result-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeComponent)('get-result', 'Integration | GetResultComponent', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      this.render(Ember.HTMLBars.template({
        'id': '3SRZb6VX',
        'block': '{"statements":[["append",["unknown",["get-result"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
        'meta': {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('pix-live/tests/integration/components/get-result-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - integration/components/get-result-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/integration/components/qcm-proposals-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Integration | Component | QcmProposals', function () {

    (0, _emberMocha.setupComponentTest)('qcm-proposals', {
      integration: true
    });

    (0, _mocha.it)('renders', function () {
      this.render(Ember.HTMLBars.template({
        'id': '6wMkvUeQ',
        'block': '{"statements":[["append",["unknown",["qcm-proposals"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
        'meta': {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('pix-live/tests/integration/components/qcm-proposals-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - integration/components/qcm-proposals-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/integration/components/qcu-proposals-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Integration | Component | QcuProposals', function () {

    (0, _emberMocha.setupComponentTest)('qcu-proposals', {
      integration: true
    });

    /* Rendering
     ----------------------------------------------------- */

    (0, _mocha.describe)('Rendering', function () {

      var proposals = undefined;
      var answers = undefined;
      var answerChangedHandler = undefined;

      beforeEach(function () {
        proposals = ['prop 1', 'prop 2', 'prop 3'];
        answers = [false, true, false];
        answerChangedHandler = function () {
          return true;
        };
      });

      // Inspired from:
      // - Ember-mocha: https://github.com/emberjs/ember-mocha#setup-component-tests
      // - Ember: https://guides.emberjs.com/v2.10.0/testing/testing-components
      // -        https://guides.emberjs.com/v2.10.0/tutorial/autocomplete-component/
      (0, _mocha.it)('should render as much radio buttons as proposals', function () {
        // given
        this.set('proposals', proposals);
        this.set('answers', answers);
        this.set('answerChanged', answerChangedHandler);

        // when
        this.render(Ember.HTMLBars.template({
          'id': '1V4kv/sg',
          'block': '{"statements":[["append",["helper",["qcu-proposals"],null,[["answers","proposals","onAnswerUpdated"],[["get",["answers"]],["get",["proposals"]],"answerChanged"]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));

        // then
        (0, _chai.expect)(this.$('.challenge-response__proposal-input')).to.have.lengthOf(proposals.length);
      });
    });
  });
});
define('pix-live/tests/integration/components/qcu-proposals-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - integration/components/qcu-proposals-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/integration/components/qroc-proposal-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeComponent)('qroc-proposal', 'Integration: QrocProposal', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      this.render(Ember.HTMLBars.template({
        'id': '1i/FB0iM',
        'block': '{"statements":[["append",["unknown",["qroc-proposal"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
        'meta': {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('pix-live/tests/integration/components/qroc-proposal-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - integration/components/qroc-proposal-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/integration/components/qrocm-proposal-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeComponent)('qrocm-proposal', 'Integration: QrocmProposalComponent', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      this.render(Ember.HTMLBars.template({
        'id': 'OU8/haVw',
        'block': '{"statements":[["append",["unknown",["qrocm-proposal"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
        'meta': {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('pix-live/tests/integration/components/qrocm-proposal-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - integration/components/qrocm-proposal-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/models/answer.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - models/answer.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/models/answer/value-as-array-of-boolean-mixin.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - models/answer/value-as-array-of-boolean-mixin.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/models/answer/value-as-array-of-string-mixin.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - models/answer/value-as-array-of-string-mixin.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/models/assessment.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - models/assessment.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/models/challenge.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - models/challenge.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/models/challenge/proposals-as-array-mixin.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - models/challenge/proposals-as-array-mixin.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/models/challenge/proposals-as-blocks-mixin.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - models/challenge/proposals-as-blocks-mixin.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/models/course.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - models/course.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/models/user.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - models/user.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - resolver.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/router.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - router.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/routes/assessments/get-challenge.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - routes/assessments/get-challenge.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/routes/assessments/get-results.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - routes/assessments/get-results.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/routes/challenges/get-preview.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - routes/challenges/get-preview.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/routes/courses/create-assessment.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - routes/courses/create-assessment.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/routes/courses/get-challenge-preview.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - routes/courses/get-challenge-preview.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/routes/courses/get-course-preview.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - routes/courses/get-course-preview.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/routes/home.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - routes/home.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/routes/index.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - routes/index.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/routes/placement-tests.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - routes/placement-tests.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/routes/preferences.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - routes/preferences.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/routes/project.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - routes/project.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/serializers/challenge.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - serializers/challenge.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/services/assessment.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - services/assessment.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/services/delay.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - services/delay.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/services/email-validator.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - services/email-validator.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/test-helper', ['exports', 'pix-live/tests/helpers/resolver', 'ember-mocha'], function (exports, _pixLiveTestsHelpersResolver, _emberMocha) {

  (0, _emberMocha.setResolver)(_pixLiveTestsHelpersResolver['default']);
});
define('pix-live/tests/test-helper.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - test-helper.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/transforms/array.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - transforms/array.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/components/follower-form-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Unit | Component | followerComponent', function () {
    (0, _emberMocha.setupTest)('component:follower-form', {});

    (0, _mocha.describe)('Computed property', function () {
      var component = undefined;

      function initComponent() {
        component = this.subject();
      }

      (0, _mocha.it)('should returns true when hasError change', function () {
        initComponent.call(this);
        // when
        component.set('hasError', true);
        // then
        (0, _chai.expect)(component.get('infoMessage')).to.exist;
      });

      (0, _mocha.it)('should returns an error message when hasError get true', function () {
        // given
        initComponent.call(this);
        // when
        component.set('hasError', true);
        // then
        (0, _chai.expect)(component.get('infoMessage')).to.equal('Votre adresse n’est pas valide');
      });
    });
  });
});
define('pix-live/tests/unit/components/follower-form-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/components/follower-form-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/components/qcu-proposals-test', ['exports', 'pix-live/utils/lodash-custom', 'chai', 'mocha', 'ember-mocha'], function (exports, _pixLiveUtilsLodashCustom, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Unit | Component | QcuProposalsComponent', function () {

    (0, _emberMocha.setupTest)('component:qcu-proposals', {});

    /* Computed property "labeledRadios"
     ----------------------------------------------------- */

    (0, _mocha.describe)('Computed property "labeledRadios"', function () {

      var DEFAULT_PROPOSALS = ['prop 1', 'prop 2', 'prop 3'];
      var DEFAULT_ANSWERS = [false, true, false];
      var PROPOSAL_TEXT = 0;
      var BOOLEAN_ANSWER = 1;

      var answers = undefined;
      var proposals = undefined;
      var component = undefined;

      beforeEach(function () {
        proposals = DEFAULT_PROPOSALS;
        answers = DEFAULT_ANSWERS;
      });

      function initComponent() {
        component = this.subject();
        component.set('proposals', proposals);
        component.set('answers', answers);
      }

      /*
       * Ex :
       * - proposals = ['prop 1', 'prop 2', 'prop 3']
       * - answers = [false, true, false]
       *
       * => labeledRadios = [['prop 1', false], ['prop 2', true], ['prop 3', false]]
       */
      (0, _mocha.it)('should return an array of [<proposal_text>, <boolean_answer>]', function () {
        // given
        initComponent.call(this);

        // when
        var labeledRadios = component.get('labeledRadios');

        // then
        (0, _chai.expect)(labeledRadios[0][PROPOSAL_TEXT]).to.equal(DEFAULT_PROPOSALS[0]);
        (0, _chai.expect)(labeledRadios[0][BOOLEAN_ANSWER]).to.equal(DEFAULT_ANSWERS[0]);

        (0, _chai.expect)(labeledRadios[1][PROPOSAL_TEXT]).to.equal(DEFAULT_PROPOSALS[1]);
        (0, _chai.expect)(labeledRadios[1][BOOLEAN_ANSWER]).to.equal(DEFAULT_ANSWERS[1]);

        (0, _chai.expect)(labeledRadios[2][PROPOSAL_TEXT]).to.equal(DEFAULT_PROPOSALS[2]);
        (0, _chai.expect)(labeledRadios[2][BOOLEAN_ANSWER]).to.equal(DEFAULT_ANSWERS[2]);
      });

      (0, _mocha.it)('should return an array of [<proposal_text>, <boolean_answer>] with as many items than challenge proposals', function () {
        // given
        proposals = ['prop 1', 'prop 2', 'prop 3', 'prop 4', 'prop 5'];
        initComponent.call(this);

        // when
        var labeledRadios = component.get('labeledRadios');

        // then
        (0, _chai.expect)(labeledRadios).to.have.lengthOf(proposals.length);
      });

      (0, _mocha.it)('should return an array of [<proposal_text>, <boolean_answer>] with all <boolean_answer> values set to "false" when given answer is "null"', function () {
        // given
        answers = null;
        initComponent.call(this);

        // when
        var labeledRadios = component.get('labeledRadios');

        // then
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].every(labeledRadios, function (labeledRadio) {
          return labeledRadio[1] === false;
        })).to.be['true'];
      });

      (0, _mocha.it)('should return an array of [<proposal_text>, <boolean_answer>] with <boolean_answer> values empty when answer value is not a boolean', function () {
        // given
        answers = [true, undefined, null];
        initComponent.call(this);

        // when
        var labeledRadios = component.get('labeledRadios');

        // then
        (0, _chai.expect)(labeledRadios).to.have.lengthOf(0);
      });
    });
  });
});
define('pix-live/tests/unit/components/qcu-proposals-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/components/qcu-proposals-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/controllers/home-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Unit | Controller | HomeController', function () {
    (0, _emberMocha.setupTest)('controller:home', {
      // Specify the other units that are required for this test.
      // needs: ['controller:foo']
    });

    // Replace this with your real tests.
    (0, _mocha.it)('exists', function () {
      var controller = this.subject();
      (0, _chai.expect)(controller).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/controllers/home-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/controllers/home-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/helpers/convert-to-html-test', ['exports', 'chai', 'mocha', 'pix-live/helpers/convert-to-html'], function (exports, _chai, _mocha, _pixLiveHelpersConvertToHtml) {

  (0, _mocha.describe)('Unit | Helpers | ConvertToHtmlHelper', function () {

    (0, _mocha.it)('works', function () {
      var boldSentence = (0, _pixLiveHelpersConvertToHtml.convertToHtml)(['**a bold sentence**']);
      (0, _chai.expect)(boldSentence).to.equal('<p><strong>a bold sentence</strong></p>');
    });

    (0, _mocha.it)('skip call with bad arg', function () {
      (0, _chai.expect)((0, _pixLiveHelpersConvertToHtml.convertToHtml)('bad argument')).to.equal('');
      (0, _chai.expect)((0, _pixLiveHelpersConvertToHtml.convertToHtml)([])).to.equal('');
    });
  });
});
define('pix-live/tests/unit/helpers/convert-to-html-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/helpers/convert-to-html-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/helpers/extract-extension-test', ['exports', 'chai', 'mocha', 'pix-live/helpers/extract-extension'], function (exports, _chai, _mocha, _pixLiveHelpersExtractExtension) {

  (0, _mocha.describe)('Unit | Helpers | ExtractExtension', function () {
    (0, _mocha.it)('works', function () {
      (0, _chai.expect)((0, _pixLiveHelpersExtractExtension.extractExtension)(['file.url.ext.docx'])).to.equal('docx');
      (0, _chai.expect)((0, _pixLiveHelpersExtractExtension.extractExtension)(['file_url_without_extension'])).to.equal('file_url_without_extension');
      (0, _chai.expect)((0, _pixLiveHelpersExtractExtension.extractExtension)([''])).to.equal('');
    });
  });
});
define('pix-live/tests/unit/helpers/extract-extension-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/helpers/extract-extension-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/helpers/strip-instruction-test', ['exports', 'chai', 'mocha', 'pix-live/helpers/strip-instruction'], function (exports, _chai, _mocha, _pixLiveHelpersStripInstruction) {

  (0, _mocha.describe)('Unit | Helpers | StripInstructionHelper', function () {
    // Replace this with your real tests.
    (0, _mocha.it)('works', function () {
      var result = (0, _pixLiveHelpersStripInstruction.stripInstruction)(['<div class="paragraph"><strong>a bold sentence</strong></div>']);
      (0, _chai.expect)(result).to.equal('a bold sentence...');
    });
  });
});
define('pix-live/tests/unit/helpers/strip-instruction-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/helpers/strip-instruction-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/initializers/ajax-interceptor-test', ['exports', 'chai', 'mocha', 'ember', 'pix-live/initializers/ajax-interceptor', 'pix-live/tests/helpers/destroy-app'], function (exports, _chai, _mocha, _ember, _pixLiveInitializersAjaxInterceptor, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)('Unit | Initializer | ajax interceptor', function () {
    var application = undefined;

    (0, _mocha.beforeEach)(function () {
      _ember['default'].run(function () {
        application = _ember['default'].Application.create();
        application.deferReadiness();
      });
    });

    afterEach(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    // Replace this with your real tests.
    (0, _mocha.it)('works', function () {
      (0, _pixLiveInitializersAjaxInterceptor.initialize)(application);

      // you would normally confirm the results of the initializer here
      (0, _chai.expect)(true).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/initializers/ajax-interceptor-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/initializers/ajax-interceptor-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/models/answer-test', ['exports', 'ember', 'chai', 'mocha', 'ember-mocha'], function (exports, _ember, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Unit | Model | Answer', function () {

    (0, _emberMocha.setupModelTest)('answer', {
      needs: ['model:assessment', 'model:challenge']
    });

    (0, _mocha.it)('exists', function () {
      var model = this.subject();
      // var store = this.store();
      (0, _chai.expect)(model).to.be.ok;
    });

    (0, _mocha.describe)('isResultOk', function () {

      (0, _mocha.it)('should return bool', function () {
        var _this = this;

        _ember['default'].run(function () {
          // given
          var store = _this.store();
          var answer = store.createRecord('answer', { 'result': 'ok' });

          (0, _chai.expect)(answer.get('isResultOk')).to.equal(true);
        });
      });
    });
  });
});
define('pix-live/tests/unit/models/answer-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/models/answer-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/models/challenge-test', ['exports', 'ember', 'chai', 'mocha', 'ember-mocha'], function (exports, _ember, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Unit | Model | Challenge', function () {

    (0, _emberMocha.setupModelTest)('challenge', {
      needs: ['model:course']
    });

    (0, _mocha.it)('exists', function () {
      var model = this.subject();
      (0, _chai.expect)(model).to.be.ok;
    });

    (0, _mocha.describe)('Computed property #hasAttachment', function () {

      (0, _mocha.it)('Should be true when challenge has at least one attachment file', function () {
        var _this = this;

        _ember['default'].run(function () {
          // given
          var store = _this.store();
          var challenge = store.createRecord('challenge', { attachments: ['file.url'] });

          // when
          var hasAttachment = challenge.get('hasAttachment');

          // then
          (0, _chai.expect)(hasAttachment).to.be['true'];
        });
      });

      (0, _mocha.it)('Should be false when challenge has multiple attachment files', function () {
        var _this2 = this;

        _ember['default'].run(function () {
          // given
          var store = _this2.store();
          var challenge = store.createRecord('challenge', { attachments: [] });

          // when
          var hasAttachment = challenge.get('hasAttachment');

          // then
          (0, _chai.expect)(hasAttachment).to.be['false'];
        });
      });
    });

    (0, _mocha.describe)('Computed property #hasSingleAttachment', function () {

      (0, _mocha.it)('Should be true when challenge has only one attachment file', function () {
        var _this3 = this;

        _ember['default'].run(function () {
          // given
          var store = _this3.store();
          var challenge = store.createRecord('challenge', { attachments: ['file.url'] });

          // when
          var hasSingleAttachment = challenge.get('hasSingleAttachment');

          // then
          (0, _chai.expect)(hasSingleAttachment).to.be['true'];
        });
      });

      (0, _mocha.it)('Should be false when challenge has multiple attachment files', function () {
        var _this4 = this;

        _ember['default'].run(function () {
          // given
          var store = _this4.store();
          var challenge = store.createRecord('challenge', { attachments: ['file.url', 'file.1.url', 'file.2.url'] });

          // when
          var hasSingleAttachment = challenge.get('hasSingleAttachment');

          // then
          (0, _chai.expect)(hasSingleAttachment).to.be['false'];
        });
      });
    });

    (0, _mocha.describe)('Computed property #hasMultipleAttachments', function () {

      (0, _mocha.it)('Should be false when challenge has no attachment file', function () {
        var _this5 = this;

        _ember['default'].run(function () {
          // given
          var store = _this5.store();
          var challenge = store.createRecord('challenge', { attachments: [] });

          // when
          var hasMultipleAttachments = challenge.get('hasMultipleAttachments');

          // then
          (0, _chai.expect)(hasMultipleAttachments).to.be['false'];
        });
      });

      (0, _mocha.it)('Should be false when challenge has only one attachment file', function () {
        var _this6 = this;

        _ember['default'].run(function () {
          // given
          var store = _this6.store();
          var challenge = store.createRecord('challenge', { attachments: ['file.url'] });

          // when
          var hasMultipleAttachments = challenge.get('hasMultipleAttachments');

          // then
          (0, _chai.expect)(hasMultipleAttachments).to.be['false'];
        });
      });

      (0, _mocha.it)('Should be true when challenge has multiple attachments files', function () {
        var _this7 = this;

        _ember['default'].run(function () {
          // given
          var store = _this7.store();
          var challenge = store.createRecord('challenge', { attachments: ['file.url', 'file.1.url', 'file.2.url'] });

          // when
          var hasMultipleAttachments = challenge.get('hasMultipleAttachments');

          // then
          (0, _chai.expect)(hasMultipleAttachments).to.be['true'];
        });
      });
    });
  });
});
define('pix-live/tests/unit/models/challenge-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/models/challenge-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/models/challenge/proposals-as-array-mixin-test', ['exports', 'ember', 'chai', 'mocha', 'pix-live/models/challenge/proposals-as-array-mixin'], function (exports, _ember, _chai, _mocha, _pixLiveModelsChallengeProposalsAsArrayMixin) {

  (0, _mocha.describe)('Unit | Model | Challenge/Propsals As Array Mixin', function () {

    var testData = [{ data: '', expected: [] }, { data: 'foo', expected: [] }, { data: '- foo', expected: ['foo'] }, { data: '-foo\n- bar', expected: ['foo', 'bar'] }, { data: '- cerf-volant', expected: ['cerf-volant'] }, { data: '- xi\n- foo mi', expected: ['xi', 'foo mi'] }, { data: '- joli\n- cerf-volant', expected: ['joli', 'cerf-volant'] }, { data: '- xi\n- foo\n- mi', expected: ['xi', 'foo', 'mi'] }, { data: '-- foo', expected: ['- foo'] }, { data: '- foo\n\r\t\n\r\t\n\r\t\n- bar', expected: ['foo', 'bar'] }];

    var Challenge = _ember['default'].Object.extend(_pixLiveModelsChallengeProposalsAsArrayMixin['default'], {});

    testData.forEach(function (_ref) {
      var data = _ref.data;
      var expected = _ref.expected;

      (0, _mocha.it)('"' + data.toString() + '" retourne [' + expected + ']', function () {
        var sut = Challenge.create({ proposals: data });
        (0, _chai.expect)(sut.get('_proposalsAsArray')).to.deep.equal(expected);
      });
    });
  });
});
define('pix-live/tests/unit/models/challenge/proposals-as-array-mixin-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/models/challenge/proposals-as-array-mixin-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/models/challenge/proposals-as-blocks-mixin-test', ['exports', 'ember', 'mocha', 'ember-mocha', 'chai', 'pix-live/models/challenge/proposals-as-blocks-mixin'], function (exports, _ember, _mocha, _emberMocha, _chai, _pixLiveModelsChallengeProposalsAsBlocksMixin) {

  (0, _mocha.describe)('Unit | Model | Challenge/Proposal As Blocks Mixin', function () {

    var testData = [{ data: '', expected: [] }, { data: 'Text', expected: [{ text: 'Text' }] }, { data: 'Text test plop', expected: [{ text: 'Text test plop' }] }, { data: '${qroc}', expected: [{ input: 'qroc' }] }, { data: 'Test: ${test}', expected: [{ text: 'Test:' }, { input: 'test' }] }, {
      data: 'Test: ${test} (kilometres)',
      expected: [{ text: 'Test:' }, { input: 'test' }, { text: '(kilometres)' }]
    }, {
      data: '${plop}, ${plop} ${plop}',
      expected: [{ input: 'plop' }, { text: ',' }, { input: 'plop' }, { input: 'plop' }]
    }, { data: '${plop#var}', expected: [{ input: 'plop', placeholder: 'var' }] }, { data: 'line1\nline2', expected: [{ text: 'line1' }, { breakline: true }, { text: 'line2' }] }, { data: 'line1\r\nline2', expected: [{ text: 'line1' }, { breakline: true }, { text: 'line2' }] }, { data: 'line1\n\rline2', expected: [{ text: 'line1' }, { breakline: true }, { text: 'line2' }] }, { data: 'line1\n\nline2', expected: [{ text: 'line1' }, { breakline: true }, { text: 'line2' }] }];

    var Challenge = _ember['default'].Object.extend(_pixLiveModelsChallengeProposalsAsBlocksMixin['default'], {});

    testData.forEach(function (_ref) {
      var data = _ref.data;
      var expected = _ref.expected;

      (0, _emberMocha.it)('"' + data + '" retourne ' + JSON.stringify(expected), function () {
        var sut = Challenge.create({ proposals: data });
        var blocks = sut.get('_proposalsAsBlocks');
        (0, _chai.expect)(blocks, JSON.stringify(blocks)).to.deep.equals(expected);
      });
    });
  });
});
define('pix-live/tests/unit/models/challenge/proposals-as-blocks-mixin-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/models/challenge/proposals-as-blocks-mixin-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/models/course-test', ['exports', 'ember', 'chai', 'mocha', 'ember-mocha'], function (exports, _ember, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Unit | Model | Course', function () {

    (0, _emberMocha.setupModelTest)('course', {
      needs: ['model:assessment', 'model:challenge']
    });

    (0, _mocha.it)('exists', function () {
      var model = this.subject();
      (0, _chai.expect)(model).to.be.ok;
    });

    (0, _mocha.describe)('getProgress', function () {

      (0, _mocha.it)('currentStep start at 1', function () {
        var _this = this;

        _ember['default'].run(function () {
          // given
          var store = _this.store();
          var challenge = store.createRecord('challenge', {});
          var course = _this.subject({ challenges: [challenge] });

          (0, _chai.expect)(course.getProgress(challenge)).to.have.property('currentStep', 1);
        });
      });

      (0, _mocha.it)('maxStep is 2 when there is 2 challenges in the course', function () {
        var _this2 = this;

        _ember['default'].run(function () {
          // given
          var store = _this2.store();
          var challenge1 = store.createRecord('challenge', {});
          var challenge2 = store.createRecord('challenge', {});
          var course = _this2.subject({ challenges: [challenge1, challenge2] });

          (0, _chai.expect)(course.getProgress(challenge1)).to.have.property('maxStep', 2);
          (0, _chai.expect)(course.getProgress(challenge2)).to.have.property('maxStep', 2);
        });
      });

      (0, _mocha.it)('currentStep is 2 when there is 2 challenges in the course and called with 2nd test', function () {
        var _this3 = this;

        _ember['default'].run(function () {
          // given
          var store = _this3.store();
          var challenge1 = store.createRecord('challenge', {});
          var challenge2 = store.createRecord('challenge', {});
          var course = _this3.subject({ challenges: [challenge1, challenge2] });

          (0, _chai.expect)(course.getProgress(challenge2)).to.have.property('currentStep', 2);
        });
      });

      (0, _mocha.it)('throw an Error when challenge is not part of course', function () {
        var _this4 = this;

        _ember['default'].run(function () {
          // given
          var store = _this4.store();
          var challengeInCourse = store.createRecord('challenge', {});
          var challengeOutsideCourse = store.createRecord('challenge', {});
          var course = _this4.subject({ challenges: [challengeInCourse] });

          (0, _chai.expect)(function () {
            return course.getProgress(challengeOutsideCourse);
          }).to['throw'](RangeError);
        });
      });
    });
  });
});
define('pix-live/tests/unit/models/course-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/models/course-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/routes/assessments/get-challenge-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Unit | Route | Assessments.ChallengeRoute', function () {

    (0, _emberMocha.setupTest)('route:assessments.get-challenge', {});

    (0, _mocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/routes/assessments/get-challenge-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/routes/assessments/get-challenge-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/routes/assessments/get-results-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Unit | Route | Assessments.ResultsRoute', function () {

    (0, _emberMocha.setupTest)('route:assessments.get-results', {});

    (0, _mocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/routes/assessments/get-results-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/routes/assessments/get-results-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/routes/challenges/get-preview-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Unit | Route | challenges.get-preview', function () {

    (0, _emberMocha.setupTest)('route:challenges.get-preview', {});

    (0, _mocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/routes/challenges/get-preview-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/routes/challenges/get-preview-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/routes/courses/get-challenge-preview-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Unit | Route | ChallengePreview', function () {

    (0, _emberMocha.setupTest)('route:courses/get-challenge-preview', {});

    (0, _mocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/routes/courses/get-challenge-preview-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/routes/courses/get-challenge-preview-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/routes/courses/get-course-preview-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Unit | Route | CoursePreview', function () {

    (0, _emberMocha.setupTest)('route:courses/get-course-preview', {});

    (0, _mocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/routes/courses/get-course-preview-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/routes/courses/get-course-preview-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/routes/home-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Unit | Route | home', function () {

    (0, _emberMocha.setupTest)('route:home', {});

    (0, _mocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/routes/home-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/routes/home-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/routes/index-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Unit | Route | index', function () {

    (0, _emberMocha.setupTest)('route:index', {});

    (0, _mocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/routes/index-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/routes/index-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/routes/placement-tests-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Unit | Route | placement-tests', function () {

    (0, _emberMocha.setupTest)('route:placement-tests', {});

    (0, _mocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/routes/placement-tests-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/routes/placement-tests-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/routes/preferences-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Unit | Route | preferences', function () {

    (0, _emberMocha.setupTest)('route:preferences', {});

    (0, _mocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/routes/preferences-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/routes/preferences-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/routes/project-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Unit | Route | project', function () {
    (0, _emberMocha.setupTest)('route:project', {
      // Specify the other units that are required for this test.
      // needs: ['controller:foo']
    });

    (0, _mocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/routes/project-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/routes/project-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/services/assessment-test', ['exports', 'ember', 'chai', 'mocha', 'ember-mocha'], function (exports, _ember, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Unit | Service | AssessmentService', function () {

    (0, _emberMocha.setupTest)('service:assessment', {
      needs: ['model:assessment', 'model:challenge', 'model:course', 'model:answer']
    });

    function instantiateModels(store, challengesArray) {
      var challenges = challengesArray.map(function (challenge) {
        return store.createRecord('challenge', challenge);
      });
      var course = store.createRecord('course');
      course.get('challenges').pushObjects(challenges);
      var assessment = store.createRecord('assessment', { course: course });

      return { challenges: challenges, assessment: assessment };
    }

    (0, _mocha.describe)('#getNextChallenge', function () {

      (0, _mocha.it)('returns a promise', function () {
        var _this = this;

        return _ember['default'].run(function () {
          var store = _this.container.lookup('service:store');

          var _instantiateModels = instantiateModels(store, [{ id: 1 }, { id: 2 }]);

          var challenges = _instantiateModels.challenges;
          var assessment = _instantiateModels.assessment;

          (0, _chai.expect)(_this.subject().getNextChallenge(challenges[0], assessment)).to.respondsTo('then');
        });
      });

      (0, _mocha.it)('return the next challenge when current challenge is not the assessment\'s last one', function () {
        var _this2 = this;

        return _ember['default'].run(function () {
          // given
          var store = _this2.container.lookup('service:store');

          var _instantiateModels2 = instantiateModels(store, [{ id: 1 }, { id: 2 }]);

          var challenges = _instantiateModels2.challenges;
          var assessment = _instantiateModels2.assessment;

          // when
          return _this2.subject().getNextChallenge(challenges[0], assessment).then(function (actual) {
            // then
            (0, _chai.expect)(actual.get('id')).to.equal(challenges[1].get('id'));
          });
        });
      });

      (0, _mocha.it)('return the next challenge when current challenge is the assessment\'s latest', function () {
        var _this3 = this;

        return _ember['default'].run(function () {
          // given
          var store = _this3.container.lookup('service:store');

          var _instantiateModels3 = instantiateModels(store, [{ id: 1 }, { id: 2 }]);

          var challenges = _instantiateModels3.challenges;
          var assessment = _instantiateModels3.assessment;

          // when
          return _this3.subject().getNextChallenge(challenges[1], assessment).then(function (actual) {
            // then
            (0, _chai.expect)(actual).to.be['null'];
          });
        });
      });

      (0, _mocha.it)('return challenge model objects well formed', function () {
        var _this4 = this;

        return _ember['default'].run(function () {
          // given
          var store = _this4.container.lookup('service:store');

          var _instantiateModels4 = instantiateModels(store, [{ id: 1 }, { id: 2 }, { id: 3 }]);

          var challenges = _instantiateModels4.challenges;
          var assessment = _instantiateModels4.assessment;

          // when
          return _this4.subject().getNextChallenge(challenges[0], assessment).then(function (challenge1) {

            (0, _chai.expect)(challenge1.get('id')).to.equal(challenges[1].get('id'));

            return _this4.subject().getNextChallenge(challenge1, assessment);
          }).then(function (challenge2) {

            (0, _chai.expect)(challenge2.get('id')).to.equal(challenges[2].get('id'));

            return _this4.subject().getNextChallenge(challenge2, assessment);
          }).then(function (challenge3) {

            (0, _chai.expect)(challenge3).to.be['null'];
          });
        });
      });
    });
  });
});
define('pix-live/tests/unit/services/assessment-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/services/assessment-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/services/delay-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Unit | Service | DelayService', function () {

    (0, _emberMocha.setupTest)('service:delay', {});

    (0, _mocha.it)('exists', function () {
      var controller = this.subject();
      (0, _chai.expect)(controller).to.be.ok;
    });

    (0, _mocha.it)('has delay#ms() which return a promise', function () {
      var delay = this.subject();
      (0, _chai.expect)(delay).to.respondsTo('ms');
      var promise = delay.ms(0);
      (0, _chai.expect)(promise).to.respondsTo('then');
    });
  });
});
define('pix-live/tests/unit/services/delay-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/services/delay-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/services/email-validator-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Unit | Service | EmailValidatorService', function () {

    (0, _emberMocha.setupTest)('service:email-validator', {});

    (0, _mocha.it)('exists', function () {
      var controller = this.subject();
      (0, _chai.expect)(controller).to.be.ok;
    });

    (0, _mocha.it)('should return false if invalid or empty email is provided', function () {
      // given
      var validator = this.subject();
      // then
      (0, _chai.expect)(validator.emailIsValid('')).to.be['false'];
      (0, _chai.expect)(validator.emailIsValid('my')).to.be['false'];
      (0, _chai.expect)(validator.emailIsValid('my@')).to.be['false'];
      (0, _chai.expect)(validator.emailIsValid('my@google')).to.be['false'];
      (0, _chai.expect)(validator.emailIsValid('my@google.')).to.be['false'];
    });

    (0, _mocha.it)('should return true when email is valid (contains [a-z]@domain ', function () {
      // when
      var validator = this.subject();
      // then
      (0, _chai.expect)(validator.emailIsValid('email@pix.com')).to.be['true'];
    });
  });
});
define('pix-live/tests/unit/services/email-validator-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/services/email-validator-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/transforms/array-test', ['exports', 'chai', 'mocha', 'pix-live/transforms/array'], function (exports, _chai, _mocha, _pixLiveTransformsArray) {

  (0, _mocha.describe)('Unit | Transformer | Array', function () {

    (0, _mocha.describe)('#deserialize', function () {

      (0, _mocha.it)('should return an Array when Array given', function () {
        var transform = new _pixLiveTransformsArray['default']();
        // given
        var array = ['foo', 'bar', 'yeah'];

        // when
        var serialized = transform.deserialize(array);

        // then
        (0, _chai.expect)(serialized).to.deep.equal(array);
      });
    });
  });
});
define('pix-live/tests/unit/transforms/array-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/transforms/array-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/utils/labeled-checkboxes-test', ['exports', 'chai', 'mocha', 'pix-live/utils/labeled-checkboxes'], function (exports, _chai, _mocha, _pixLiveUtilsLabeledCheckboxes) {

  (0, _mocha.describe)('Unit | Utility | labeled checkboxes', function () {

    (0, _mocha.describe)('Success cases', function () {
      var cases = [{ when: 'nominal case, existing answers',
        proposals: ['prop 1', 'prop 2', 'prop 3', 'prop 4'],
        answers: [false, true],
        output: [['prop 1', false], ['prop 2', true], ['prop 3', false], ['prop 4', false]] }, { when: 'nominal case, non-existing answers (undefined)',
        proposals: ['prop 1', 'prop 2', 'prop 3', 'prop 4'],
        answers: undefined,
        output: [['prop 1', false], ['prop 2', false], ['prop 3', false], ['prop 4', false]] }, { when: 'nominal case, non-existing answers (null)',
        proposals: ['prop 1', 'prop 2', 'prop 3', 'prop 4'],
        answers: null,
        output: [['prop 1', false], ['prop 2', false], ['prop 3', false], ['prop 4', false]] }, { when: 'nominal case, non-existing answers (empty array)',
        proposals: ['prop 1', 'prop 2', 'prop 3', 'prop 4'],
        answers: [],
        output: [['prop 1', false], ['prop 2', false], ['prop 3', false], ['prop 4', false]] }, { when: 'one answer only',
        proposals: ['prop 1', 'prop 2', 'prop 3', 'prop 4'],
        answers: [true],
        output: [['prop 1', true], ['prop 2', false], ['prop 3', false], ['prop 4', false]] }, { when: 'wrong type for answers',
        proposals: ['prop 1', 'prop 2', 'prop 3', 'prop 4'],
        answers: new Date(),
        output: [] }, { when: 'wrong format for answers\'s elements',
        proposals: ['prop 1', 'prop 2', 'prop 3', 'prop 4'],
        answers: [true, 'false'],
        output: [] }, { when: 'no proposals',
        proposals: [],
        answers: [false, true],
        output: [] }, { when: 'wrong format for proposals',
        proposals: {}, // object !
        answers: [false, true],
        output: [] }, { when: 'wrong format for proposals\'s elements',
        proposals: ['prop1', {}],
        answers: [false, true],
        output: [] }];

      cases.forEach(function (testCase) {
        (0, _mocha.it)('Should reply to proposals' + JSON.stringify(testCase.proposals) + ' and answers ' + JSON.stringify(testCase.answers) + ' with ' + JSON.stringify(testCase.output) + ' when ' + testCase.when, function () {
          (0, _chai.expect)(JSON.stringify((0, _pixLiveUtilsLabeledCheckboxes['default'])(testCase.proposals, testCase.answers))).to.equal(JSON.stringify(testCase.output));
        });
      });
    });
  });
});
define('pix-live/tests/unit/utils/labeled-checkboxes-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/utils/labeled-checkboxes-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/utils/lodash-custom-test', ['exports', 'chai', 'mocha', 'pix-live/utils/lodash-custom'], function (exports, _chai, _mocha, _pixLiveUtilsLodashCustom) {

  (0, _mocha.describe)('Unit | Utility | lodash custom', function () {
    // Replace this with your real tests.
    (0, _mocha.describe)('isNonEmptyString', function () {
      (0, _mocha.it)('when undefined, returns false', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].isNonEmptyString(undefined)).to.equal(false);
      });
      (0, _mocha.it)('when null, returns false', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].isNonEmptyString(null)).to.equal(false);
      });
      (0, _mocha.it)('when no arg, returns false', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].isNonEmptyString()).to.equal(false);
      });
      (0, _mocha.it)('when not a string, returns false', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].isNonEmptyString(new Date())).to.equal(false);
      });
      (0, _mocha.it)('when it is an empty string, returns false', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].isNonEmptyString('')).to.equal(false);
      });
      (0, _mocha.it)('when it is a filled string, returns true', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].isNonEmptyString('abcd')).to.equal(true);
      });
    });
    (0, _mocha.describe)('isTruthy', function () {
      (0, _mocha.it)('when undefined, returns false', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].isTruthy(undefined)).to.equal(false);
      });
      (0, _mocha.it)('when null, returns false', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].isTruthy(null)).to.equal(false);
      });
      (0, _mocha.it)('when no arg, returns false', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].isTruthy()).to.equal(false);
      });
      (0, _mocha.it)('when true, returns true', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].isTruthy(true)).to.equal(true);
      });
      (0, _mocha.it)('when false, returns false', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].isTruthy(false)).to.equal(false);
      });
      (0, _mocha.it)('when 1, returns true', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].isTruthy(1)).to.equal(true);
      });
      (0, _mocha.it)('when 0, returns false', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].isTruthy(0)).to.equal(false);
      });
      (0, _mocha.it)('when [1,2,3], returns true', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].isTruthy([1, 2, 3])).to.equal(true);
      });
      (0, _mocha.it)('when [], returns true', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].isTruthy([])).to.equal(false);
      });
      (0, _mocha.it)('when {a:42}, returns true', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].isTruthy({ a: 42 })).to.equal(true);
      });
      (0, _mocha.it)('when {}, returns false', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].isTruthy({})).to.equal(false);
      });
      (0, _mocha.it)('when \'foo\', returns true', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].isTruthy('foo')).to.equal(true);
      });
      (0, _mocha.it)('when \'\', returns false', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].isTruthy('')).to.equal(false);
      });
    });
    (0, _mocha.describe)('hasSomeTruthyProps', function () {
      (0, _mocha.it)('when undefined, returns false', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].hasSomeTruthyProps(undefined)).to.equal(false);
      });
      (0, _mocha.it)('when null, returns false', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].hasSomeTruthyProps(null)).to.equal(false);
      });
      (0, _mocha.it)('when no arg, returns false', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].hasSomeTruthyProps()).to.equal(false);
      });
      (0, _mocha.it)('when not an object, returns false', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].hasSomeTruthyProps('azerty')).to.equal(false);
      });
      (0, _mocha.it)('when {}, returns false', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].hasSomeTruthyProps({})).to.equal(false);
      });
      (0, _mocha.it)('when {a:\'\'}, returns false', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].hasSomeTruthyProps({ a: '' })).to.equal(false);
      });
      (0, _mocha.it)('when {a:false}, returns false', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].hasSomeTruthyProps({ a: false })).to.equal(false);
      });
      (0, _mocha.it)('when {a:undefined}, returns false', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].hasSomeTruthyProps({ a: undefined })).to.equal(false);
      });
      (0, _mocha.it)('when {a:null}, returns false', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].hasSomeTruthyProps({ a: null })).to.equal(false);
      });
      (0, _mocha.it)('when {a:0}, returns false', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].hasSomeTruthyProps({ a: 0 })).to.equal(false);
      });
      (0, _mocha.it)('when {a:false}, returns false', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].hasSomeTruthyProps({ a: false })).to.equal(false);
      });
      (0, _mocha.it)('when {a:42}, returns true', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].hasSomeTruthyProps({ a: 42 })).to.equal(true);
      });
      (0, _mocha.it)('when mixing true and false properties, returns true', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].hasSomeTruthyProps({ a: 42, b: false })).to.equal(true);
      });
      (0, _mocha.it)('when many false properties, returns false', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].hasSomeTruthyProps({ a: '', b: false })).to.equal(false);
      });
      (0, _mocha.it)('when only true properties, returns true', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].hasSomeTruthyProps({ a: 42, b: true })).to.equal(true);
      });
    });
  });
});
define('pix-live/tests/unit/utils/lodash-custom-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/utils/lodash-custom-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/utils/call-only-once.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - utils/call-only-once.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/utils/get-challenge-type.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - utils/get-challenge-type.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/utils/labeled-checkboxes.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - utils/labeled-checkboxes.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/utils/lodash-custom.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - utils/lodash-custom.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
/* jshint ignore:start */

require('pix-live/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
