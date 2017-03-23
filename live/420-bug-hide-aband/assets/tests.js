'use strict';

define('pix-live/tests/acceptance/a1-page-accueil-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)('Acceptance | a1 - La page d\'accueil', function () {

    var application = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
      visit('/');
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.it)('a1.0 est accessible depuis "/"', function () {
      (0, _chai.expect)(currentURL()).to.equal('/');
    });

    (0, _mocha.describe)('contient une section "Hero"', function () {

      (0, _mocha.it)('a1.0 avec la barre de navigation', function () {
        findWithAssert('.index-page-hero__navbar-header');
      });

      (0, _mocha.it)('a1.1 avec un titre', function () {
        var $title = findWithAssert('.index-page-hero__title');
        (0, _chai.expect)($title.text().trim()).to.equal('Développez vos compétences numériques');
      });

      (0, _mocha.it)('a1.2 avec un descriptif', function () {
        var $description = findWithAssert('.index-page-hero__description');
        (0, _chai.expect)($description.text().trim()).to.equal('PIX est un projet public de plateforme en ligne d’évaluation et de certification des compétences numériques, en cours de développement.');
      });
    });

    (0, _mocha.describe)('contient une section "Challenges"', function () {

      (0, _mocha.it)('a1.3 cachée si aucun test n\'est remonté', function () {
        // FIXME find a way to test this correctly
      });

      (0, _mocha.it)('a1.4 visible si au moins 1 test est remonté', function () {
        // FIXME find a way to test this correctly
      });

      (0, _mocha.it)('a1.6 avec un titre', function () {
        var $title = findWithAssert('.index-page-challenges__presentation-title');
        (0, _chai.expect)($title.text().trim()).to.equal('Le défi Pix de la semaine');
      });

      (0, _mocha.it)('a1.7 avec un texte descriptif', function () {
        var $description = findWithAssert('.index-page-challenges__presentation-text');
        (0, _chai.expect)($description.text().trim()).to.equal('Chaque semaine, testez vos compétences numériques sur un nouveau sujet.');
      });

      (0, _mocha.it)('a1.8 qui affiche 2 tests maximum', function () {
        // FIXME find a way to test this correctly
      });
    });

    (0, _mocha.describe)('contient une section "Courses"', function () {

      (0, _mocha.it)('a1.9 avec un titre', function () {
        var $title = findWithAssert('.index-page-courses__title');
        (0, _chai.expect)($title.text().trim()).to.equal('Découvrez nos épreuves et aidez‑nous à les améliorer !');
      });

      (0, _mocha.it)('a1.10 avec la liste des challenges', function () {
        findWithAssert('.index-page-courses__course-list');
      });
    });

    (0, _mocha.describe)('contient une section "Community"', function () {

      (0, _mocha.it)('a1.11 avec un titre', function () {
        findWithAssert('.index-page-community__title');
      });

      (0, _mocha.it)('a1.12 avec une description', function () {
        findWithAssert('.index-page-community__description');
      });

      (0, _mocha.it)('a1.13 avec le formulaire d\'inscription en tant que béta-testeur', function () {
        findWithAssert('.index-page-community__form');
      });
    });

    (0, _mocha.describe)('contient une section "Features"', function () {

      (0, _mocha.it)('a1.14 avec la liste des featurettes', function () {
        findWithAssert('.index-page-features__list');
      });

      (0, _mocha.it)('a1.15 avec un lien vers la page "projet"', function () {
        findWithAssert('.index-page-features__project-button[href="/projet"]');
      });
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
define('pix-live/tests/acceptance/a4-demarrer-un-test-test', ['exports', 'ember', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app', 'pix-live/utils/lodash-custom'], function (exports, _ember, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp, _pixLiveUtilsLodashCustom) {

  var URL_OF_FIRST_TEST = '/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id';
  var MODAL_SELECTOR = '.modal.fade.js-modal-mobile.in';
  var START_BUTTON = '.course-item__begin-button';

  (0, _mocha.describe)('Acceptance | a4 - Démarrer un test |', function () {

    var application = undefined;

    (0, _mocha.beforeEach)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
      visit('/');
    });

    (0, _mocha.afterEach)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.it)('a4.2 Je peux démarrer un test directement depuis la nouvelle url "courses/:course_id"', function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return regeneratorRuntime.awrap(visit('/courses/ref_course_id'));

          case 2:
            (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].endsWith(currentURL(), 'assessments/ref_assessment_id/challenges/ref_qcm_challenge_id')).to.equal(true);

          case 3:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    });

    (0, _mocha.it)('a4.2 Je peux démarrer un test directement depuis l\'ancienne url "courses/:course_id/assessment"', function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return regeneratorRuntime.awrap(visit('/courses/ref_course_id/assessment'));

          case 2:
            (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].endsWith(currentURL(), 'assessments/ref_assessment_id/challenges/ref_qcm_challenge_id')).to.equal(true);

          case 3:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    });

    (0, _mocha.it)('a4.4 Quand je démarre un test, je suis redirigé vers la première épreuve du test', function () {
      var $startLink = findWithAssert(START_BUTTON);
      return click($startLink).then(function () {
        findWithAssert('#assessment-challenge');
        (0, _chai.expect)(currentURL()).to.contains(URL_OF_FIRST_TEST);
      });
    });

    (0, _mocha.it)('a4.5 Quand je démarre un test sur mobile, une modale m\'averti que l\'expérience ne sera pas optimale, mais je peux quand même continuer', function (done) {

      var $startLink = findWithAssert(START_BUTTON);

      (0, _chai.expect)($(MODAL_SELECTOR)).to.have.lengthOf(0);

      // test on mobile
      triggerEvent('.course-list', 'simulateMobileScreen');

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

    (0, _mocha.it)('a4.6 Quand je RE-démarre un test sur mobile, la modale NE s\'affiche PAS', function (done) {
      var $startLink = findWithAssert(START_BUTTON);
      triggerEvent('.index-page', 'simulateMobileScreen');

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

    (0, _mocha.beforeEach)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
      visit('/placement-tests');
    });

    (0, _mocha.afterEach)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.it)('a5.1 on affiche autant de tests que remontés par l\'API', function () {
      (0, _chai.expect)(findWithAssert('.course')).to.have.lengthOf(1);
    });

    (0, _mocha.describe)('a5.2 pour un test donné avec toutes les informations', function () {

      var $course = undefined;

      (0, _mocha.beforeEach)(function () {
        $course = findWithAssert('.course[data-id="ref_course_id"]');
      });

      (0, _mocha.it)('a5.2.1 on affiche son nom', function () {
        (0, _chai.expect)($course.find('.course-name').text()).to.contains('First Course');
      });

      (0, _mocha.it)('a5.2.2 on affiche sa description', function () {
        (0, _chai.expect)($course.find('.course-description').text()).to.contains('Contient toutes sortes d\'epreuves avec différentes caractéristiques couvrant tous les cas d\'usage');
      });

      (0, _mocha.it)('a5.2.3 on affiche son image', function () {
        (0, _chai.expect)($course.find('img')[0].src).to.equal('http://fakeimg.pl/350x200/?text=First%20Course');
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
define('pix-live/tests/acceptance/b1-epreuve-qcu-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app', 'pix-live/tests/helpers/shared-state', 'pix-live/utils/lodash-custom'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp, _pixLiveTestsHelpersSharedState, _pixLiveUtilsLodashCustom) {

  var application = undefined;

  (0, _mocha.describe)('Acceptance | b1 - Afficher un QCU | ', function () {

    (0, _mocha.beforeEach)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
      visit('/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id');
    });

    (0, _mocha.afterEach)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.it)('b1.1 Une liste de radiobuttons doit s\'afficher', function () {
      var $proposals = $('.input-radio-proposal');
      (0, _chai.expect)($proposals).to.have.lengthOf(4);
    });

    (0, _mocha.it)('b1.2 Par défaut, le radiobutton de la réponse sauvegardée est affiché', function () {
      (0, _chai.expect)($('.input-radio-proposal:checked')).to.have.lengthOf(1);
    });

    (0, _mocha.it)('b1.3 Une liste ordonnée d\'instruction doit s\'afficher', function () {
      (0, _chai.expect)($('.proposal-text:eq(0)').text().trim()).to.equal('1ere possibilite');
      (0, _chai.expect)($('.proposal-text:eq(1)').text().trim()).to.equal('2eme possibilite');
      (0, _chai.expect)($('.proposal-text:eq(2)').text().trim()).to.equal('3eme possibilite');
      (0, _chai.expect)($('.proposal-text:eq(3)').text().trim()).to.equal('4eme possibilite');
    });

    (0, _mocha.it)('b1.4 L\'alerte est affichée si l\'utilisateur valide, mais aucun radiobutton n\'est coché', function callee$1$0() {
      var $alert;
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:

            // given
            $(':radio').prop('checked', false);

            // when
            context$2$0.next = 3;
            return regeneratorRuntime.awrap(click('.challenge-actions__action-validate'));

          case 3:
            $alert = $('.alert');

            (0, _chai.expect)($alert).to.have.lengthOf(1);
            (0, _chai.expect)($alert.text().trim()).to.equal('Pour valider, sélectionner une réponse. Sinon, passer.');

          case 6:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    });

    (0, _mocha.it)('b1.5 Si un utilisateur clique sur un radiobutton, il est le seul coché, et les autres sont décochés', function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:

            // Given
            (0, _chai.expect)($('.input-radio-proposal:eq(0)').is(':checked')).to.equal(false);
            (0, _chai.expect)($('.input-radio-proposal:eq(1)').is(':checked')).to.equal(true);
            (0, _chai.expect)($('.input-radio-proposal:eq(2)').is(':checked')).to.equal(false);
            (0, _chai.expect)($('.input-radio-proposal:eq(3)').is(':checked')).to.equal(false);

            // When
            context$2$0.next = 6;
            return regeneratorRuntime.awrap(click($('.label-checkbox-proposal--qcu:eq(0)')));

          case 6:
            // Click on label trigger the event.

            // Then
            (0, _chai.expect)($('.input-radio-proposal:eq(0)').is(':checked')).to.equal(true);
            (0, _chai.expect)($('.input-radio-proposal:eq(1)').is(':checked')).to.equal(false);
            (0, _chai.expect)($('.input-radio-proposal:eq(2)').is(':checked')).to.equal(false);
            (0, _chai.expect)($('.input-radio-proposal:eq(3)').is(':checked')).to.equal(false);

          case 10:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    });

    (0, _mocha.it)('b1.6 Si un utilisateur clique sur un radiobutton, et valide l\'épreuve, une demande de sauvegarde de sa réponse est envoyée à l\'API', function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            // Given
            (0, _pixLiveTestsHelpersSharedState.resetTestingState)();

            // Given
            (0, _chai.expect)($('.input-radio-proposal:eq(0)').is(':checked')).to.equal(false);
            (0, _chai.expect)($('.input-radio-proposal:eq(1)').is(':checked')).to.equal(true);
            (0, _chai.expect)($('.input-radio-proposal:eq(2)').is(':checked')).to.equal(false);
            (0, _chai.expect)($('.input-radio-proposal:eq(3)').is(':checked')).to.equal(false);

            // When
            context$2$0.next = 7;
            return regeneratorRuntime.awrap(click($('.label-checkbox-proposal--qcu:eq(3)')));

          case 7:
            context$2$0.next = 9;
            return regeneratorRuntime.awrap(click('.challenge-actions__action-validate'));

          case 9:

            // Then
            (0, _chai.expect)((0, _pixLiveTestsHelpersSharedState.urlOfLastPostRequest)()).to.equal('/api/answers');
            (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].get((0, _pixLiveTestsHelpersSharedState.bodyOfLastPostRequest)(), 'data.attributes.value')).to.equal('4');

          case 11:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    });
  });
});

// then
define('pix-live/tests/acceptance/b1-epreuve-qcu-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/b1-epreuve-qcu-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/acceptance/b2-epreuve-qcm-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app', 'pix-live/tests/helpers/shared-state', 'pix-live/utils/lodash-custom'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp, _pixLiveTestsHelpersSharedState, _pixLiveUtilsLodashCustom) {

  function visitTimedChallenge() {
    visit('/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id');
    click('.challenge-item-warning button');
  }

  (0, _mocha.describe)('Acceptance | b2 - Afficher un QCM | ', function () {

    var application = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
      visitTimedChallenge();
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.it)('b2.1 It should render challenge instruction', function () {
      var $challengeInstruction = $('.challenge-statement__instruction');
      var instructionText = 'Un QCM propose plusieurs choix, l\'utilisateur peut en choisir plusieurs';
      (0, _chai.expect)($challengeInstruction.text()).to.equal(instructionText);
    });

    (0, _mocha.it)('b2.2 Le contenu de type [foo](bar) doit être converti sous forme de lien', function () {
      var $links = findWithAssert('.challenge-statement__instruction a');
      (0, _chai.expect)($links.length).to.equal(1);
      (0, _chai.expect)($links.text()).to.equal('plusieurs');
      (0, _chai.expect)($links.attr('href')).to.equal('http://link.plusieurs.url');
    });

    (0, _mocha.it)('b2.3 Les liens doivent s\'ouvrir dans un nouvel onglet', function () {
      var $links = findWithAssert('.challenge-statement__instruction a');
      (0, _chai.expect)($links.attr('target')).to.equal('_blank');
    });

    (0, _mocha.it)('b2.4 It should render a list of checkboxes', function () {
      var $proposals = $('input[type="checkbox"]');
      (0, _chai.expect)($proposals).to.have.lengthOf(4);
    });

    (0, _mocha.it)('b2.5 By default, already checked checkboxes are checked', function () {
      (0, _chai.expect)($('input:checkbox:checked')).to.have.lengthOf(2);
    });

    (0, _mocha.it)('b2.6 It should render an ordered list of instruction', function () {
      (0, _chai.expect)($('.proposal-text:eq(0)').text().trim()).to.equal('possibilite 1, et/ou');
      (0, _chai.expect)($('.proposal-text:eq(1)').text().trim()).to.equal('possibilite 2, et/ou');
      (0, _chai.expect)($('.proposal-text:eq(2)').text().trim()).to.equal('possibilite 3, et/ou');
      (0, _chai.expect)($('.proposal-text:eq(3)').text().trim()).to.equal('possibilite 4');
    });

    (0, _mocha.it)('b2.7 Error alert box should be hidden by default', function () {
      (0, _chai.expect)($('.alert')).to.have.lengthOf(0);
    });

    (0, _mocha.it)('b2.8 Error alert box should be displayed if user validate without checking a checkbox', function () {
      var $validateLink = $('.challenge-actions__action-validate');
      (0, _chai.expect)($('input:checkbox:checked')).to.have.lengthOf(2);
      $('input:checkbox').prop('checked', false);
      (0, _chai.expect)($('input:checkbox:checked')).to.have.lengthOf(0);
      click($validateLink);
      andThen(function () {
        (0, _chai.expect)($('.alert')).to.have.lengthOf(1);
        (0, _chai.expect)($('.alert').text().trim()).to.equal('Pour valider, sélectionner au moins une réponse. Sinon, passer.');
      });
    });

    (0, _mocha.it)('b2.9 If an user check a checkbox, it is checked', function () {
      (0, _chai.expect)($('input:checkbox:checked')).to.have.lengthOf(0);
      $('.input-checkbox-proposal:eq(1)').click();
      andThen(function () {
        (0, _chai.expect)($('input:checkbox:checked')).to.have.lengthOf(1);
      });
    });

    (0, _mocha.it)('b2.10 If an user check another checkbox, it is checked, the previous checked checkboxes remains checked', function () {
      (0, _chai.expect)($('input:checkbox:checked')).to.have.lengthOf(1);
      $('.input-checkbox-proposal:eq(2)').click();
      andThen(function () {
        (0, _chai.expect)($('input:checkbox:checked')).to.have.lengthOf(2);
      });
    });

    (0, _mocha.it)('b2.11 If an user validate the challenge, the api is request to save the answer of the user', function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            (0, _pixLiveTestsHelpersSharedState.resetTestingState)();
            context$2$0.next = 3;
            return regeneratorRuntime.awrap(click('.challenge-actions__action-validate'));

          case 3:
            (0, _chai.expect)((0, _pixLiveTestsHelpersSharedState.urlOfLastPostRequest)()).to.equal('/api/answers');
            (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].get((0, _pixLiveTestsHelpersSharedState.bodyOfLastPostRequest)(), 'data.attributes.value')).to.equal('2,3');

          case 5:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
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
define('pix-live/tests/acceptance/b3-epreuve-qroc-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/shared-state', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app', 'pix-live/utils/lodash-custom'], function (exports, _mocha, _chai, _pixLiveTestsHelpersSharedState, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp, _pixLiveUtilsLodashCustom) {

  (0, _mocha.describe)('Acceptance | b3 - Afficher un QROC | ', function () {

    var application = undefined;

    (0, _mocha.beforeEach)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
      visit('/assessments/ref_assessment_id/challenges/ref_qroc_challenge_id');
    });

    (0, _mocha.afterEach)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.it)('b3.1 It should render challenge instruction', function () {
      var $challengeInstruction = $('.challenge-statement__instruction');
      var instructiontext = 'Un QROC est une question ouverte avec un simple champ texte libre pour répondre';
      (0, _chai.expect)($challengeInstruction.text()).to.equal(instructiontext);
    });

    (0, _mocha.it)('b3.2 It should display only one input text as proposal to user', function () {
      (0, _chai.expect)($('.challenge-response__proposal-input')).to.have.lengthOf(1);
    });

    (0, _mocha.it)('b3.3 Error alert box should be displayed if user validate without writing any answer', function () {
      fillIn('input[data-uid="qroc-proposal-uid"]', '');
      (0, _chai.expect)($('.alert')).to.have.lengthOf(0);
      click(findWithAssert('.challenge-actions__action-validate'));
      andThen(function () {
        // assertions for after async behavior
        (0, _chai.expect)($('.alert')).to.have.lengthOf(1);
        (0, _chai.expect)($('.alert').text().trim()).to.equal('Pour valider, saisir une réponse. Sinon, passer.');
      });
    });

    (0, _mocha.it)('b3.4 It should save the answer of the user when user validate', function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            (0, _pixLiveTestsHelpersSharedState.resetTestingState)();
            fillIn('input[data-uid="qroc-proposal-uid"]', 'My New Answer');
            context$2$0.next = 4;
            return regeneratorRuntime.awrap(click('.challenge-actions__action-validate'));

          case 4:
            (0, _chai.expect)((0, _pixLiveTestsHelpersSharedState.urlOfLastPostRequest)()).to.equal('/api/answers');
            (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].get((0, _pixLiveTestsHelpersSharedState.bodyOfLastPostRequest)(), 'data.attributes.value')).to.equal('My New Answer');

          case 6:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
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
define('pix-live/tests/acceptance/b4-epreuve-qrocm-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app', 'pix-live/tests/helpers/shared-state', 'pix-live/utils/lodash-custom'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp, _pixLiveTestsHelpersSharedState, _pixLiveUtilsLodashCustom) {

  (0, _mocha.describe)('Acceptance | b4 - Afficher un QROCM | ', function () {

    var application = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
      visit('/assessments/ref_assessment_id/challenges/ref_qrocm_challenge_id');
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.it)('b4.1 It should render challenge instruction', function () {
      var $challengeInstruction = $('.challenge-statement__instruction');
      var instructiontext = 'Un QROCM est une question ouverte avec plusieurs champs texte libre pour repondre';
      (0, _chai.expect)($challengeInstruction.text()).to.equal(instructiontext);
    });

    (0, _mocha.it)('b4.2 It should display only one input text as proposal to user', function () {
      (0, _chai.expect)($('.challenge-response__proposal-input')).to.have.lengthOf(3);
    });

    (0, _mocha.it)('b4.3 Error alert box should be displayed if user validate without checking a checkbox', function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            // 1st make sure all inputs are cleared
            $(':input').val('');
            // Then try to validate sth
            context$2$0.next = 3;
            return regeneratorRuntime.awrap(click($('.challenge-actions__action-validate')));

          case 3:

            (0, _chai.expect)($('.alert')).to.have.lengthOf(1);
            (0, _chai.expect)($('.alert').text().trim()).to.equal('Pour valider, saisir au moins une réponse. Sinon, passer.');

          case 5:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    });

    (0, _mocha.it)('b4.4 It should save the answer of the user when user validate', function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            (0, _pixLiveTestsHelpersSharedState.resetTestingState)();
            $(':input:eq(0)').val('stuff1');
            $(':input:eq(1)').val('stuff2');
            $(':input:eq(2)').val('stuff3');
            context$2$0.next = 6;
            return regeneratorRuntime.awrap(click('.challenge-actions__action-validate'));

          case 6:
            (0, _chai.expect)((0, _pixLiveTestsHelpersSharedState.urlOfLastPostRequest)()).to.equal('/api/answers');
            (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].get((0, _pixLiveTestsHelpersSharedState.bodyOfLastPostRequest)(), 'data.attributes.value')).to.equal('logiciel1: stuff1\nlogiciel2: stuff2\nlogiciel3: stuff3\n');

          case 8:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
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
define('pix-live/tests/acceptance/b6-epreuve-pj-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  function visitTimedChallenge() {
    visit('/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id');
    click('.challenge-item-warning button');
  }

  (0, _mocha.describe)('Acceptance | b6 - Télécharger une pièce jointe depuis la consigne d\'une épreuve | ', function () {

    var application = undefined;

    var $ATTACHMENT_LINK = $('.challenge-statement__action-link');

    (0, _mocha.beforeEach)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    (0, _mocha.afterEach)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.describe)('Quand l\'épreuve contient une pièce jointe en consigne', function () {

      (0, _mocha.beforeEach)(function () {
        visitTimedChallenge();
      });

      (0, _mocha.it)('b6.1 Il existe un moyen pour télécharger la pièce jointe d\'une épreuve dans la zone de consigne', function () {
        var $ATTACHMENT_LINK = findWithAssert('.challenge-statement__action-link');
        (0, _chai.expect)($ATTACHMENT_LINK.length).to.equal(1);
      });

      (0, _mocha.it)('b6.2 Le lien de la pièce jointe pointe vers le bon lien', function () {
        var $ATTACHMENT_LINK = $('.challenge-statement__action-link');
        (0, _chai.expect)($ATTACHMENT_LINK.text()).to.contains('Télécharger');
        (0, _chai.expect)($ATTACHMENT_LINK.attr('href')).to.equal('http://example_of_url');
      });

      (0, _mocha.it)('b6.3 Il n\'y a qu\'un seul fichier téléchargeable', function () {
        var $attachment = findWithAssert('.challenge-statement__action-link');
        (0, _chai.expect)($attachment.length).to.equal(1);
      });
    });

    (0, _mocha.describe)('Quand l\'épreuve ne contient pas de pièce jointe en consigne', function () {

      (0, _mocha.beforeEach)(function () {
        visit('/assessments/ref_assessment_id/challenges/ref_qroc_challenge_id');
      });

      (0, _mocha.it)('b6.4 La section de téléchargement des pièces jointes est cachée', function () {
        // We are in a challenge...
        findWithAssert('.challenge-item');

        // ... but attachment is hidden
        (0, _chai.expect)($ATTACHMENT_LINK.length).to.equal(0);
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
define('pix-live/tests/acceptance/b7-epreuve-points-communs-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)('Acceptance | b7 - Points communs a toutes les épreuves | ', function () {

    var application = undefined;

    (0, _mocha.beforeEach)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
      visit('/assessments/ref_assessment_id/challenges/ref_qrocm_challenge_id');
    });

    (0, _mocha.afterEach)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.it)('b7.0 Le nom du test est affiché', function () {
      (0, _chai.expect)(findWithAssert('.course-banner-name').text()).to.contains('First Course');
    });

    (0, _mocha.it)('b7.1 L\'instruction de l\'epreuve est affichée', function () {
      var $challengeInstruction = $('.challenge-statement__instruction');
      var instructiontext = 'Un QROCM est une question ouverte avec plusieurs champs texte libre pour repondre';
      (0, _chai.expect)($challengeInstruction.text()).to.equal(instructiontext);
    });

    (0, _mocha.it)('b7.2a Le contenu de type [foo](bar) doit être converti sous forme de lien', function () {
      var $links = findWithAssert('.challenge-statement__instruction a');
      (0, _chai.expect)($links.length).to.equal(1);
      (0, _chai.expect)($links.text()).to.equal('ouverte');
      (0, _chai.expect)($links.attr('href')).to.equal('http://link.ouverte.url');
    });

    (0, _mocha.it)('b7.2b Les liens doivent s\'ouvrir dans un nouvel onglet', function () {
      var $links = findWithAssert('.challenge-statement__instruction a');
      (0, _chai.expect)($links.attr('target')).to.equal('_blank');
    });

    (0, _mocha.it)('b7.3 Un bouton de type "Skip" doit s\'afficher', function () {
      (0, _chai.expect)($('.challenge-actions__action-skip')).to.have.lengthOf(1);
    });

    (0, _mocha.it)('b7.4 Un bouton de type "Validate" doit s\'afficher', function () {
      (0, _chai.expect)($('.challenge-actions__action-skip')).to.have.lengthOf(1);
    });

    (0, _mocha.it)('b7.5 Il existe un bouton "Revenir à la liste des tests"', function () {
      var $courseListButton = findWithAssert('.course-banner-home-link');
      (0, _chai.expect)($courseListButton.text()).to.equal('Retour à la liste des tests');
    });

    (0, _mocha.it)('b7.6 Quand je clique sur le bouton "Revenir à la liste des tests", je suis redirigé vers l\'index', function () {
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
define('pix-live/tests/acceptance/c1-recapitulatif-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)('Acceptance | c1 - Consulter l\'écran de fin d\'un test ', function () {

    var application = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
      visit('/assessments/ref_assessment_id/results');
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.it)('c1.0 se fait en accédant à l\'URL /assessments/:assessment_id/results', function () {
      (0, _chai.expect)(currentURL()).to.equal('/assessments/ref_assessment_id/results');
    });

    (0, _mocha.it)('c1.1 affiche une liste qui récapitule les réponses', function () {
      findWithAssert('.assessment-results__list');
    });

    (0, _mocha.it)('c1.2 le tableau récapitulatif contient les instructions ', function () {
      var $proposals = findWithAssert('.result-item');
      (0, _chai.expect)($proposals.text()).to.contains('Un QCM propose plusieurs choix');
      (0, _chai.expect)($proposals.text()).to.contains('Un QCU propose plusieurs choix');
      (0, _chai.expect)($proposals.text()).to.contains('Un QROC est une question ouverte');
      (0, _chai.expect)($proposals.text()).to.contains('Un QROCM est une question ouverte');
    });

    (0, _mocha.it)('c1.3 Pour une mauvaise réponse, le tableau récapitulatif donne une indication adéquate', function () {
      var $cell = findWithAssert('div[data-toggle="tooltip"]:eq(0)');
      (0, _chai.expect)($cell.attr('data-original-title')).to.equal('Réponse incorrecte');
    });

    (0, _mocha.it)('c1.9 Le nom du test est affiché', function () {
      (0, _chai.expect)(findWithAssert('.course-banner-name').text()).to.contains('First Course');
    });

    (0, _mocha.it)('c1.10 Le bouton "Revenir à la liste des tests" n\'apparaît pas', function () {
      (0, _chai.expect)(find('.course-banner-home-link')).to.have.lengthOf(0);
    });

    (0, _mocha.it)('c1.11. propose un moyen pour revenir à la liste des tests', function () {
      findWithAssert('.assessment-results__index-link-container');
    });

    (0, _mocha.it)('c1.12. La bannière est affichée', function () {
      findWithAssert('.assessment-results__course-banner');
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
define('pix-live/tests/acceptance/d1-epreuve-validation-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  function visitTimedChallenge() {
    visit('/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id');
    click('.challenge-item-warning button');
  }

  (0, _mocha.describe)('Acceptance | d1 - Valider une épreuve |', function () {

    var application = undefined;
    var PROGRESS_BAR_SELECTOR = '.pix-progress-bar';
    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
      visitTimedChallenge();
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.it)('d1.0a La barre de progression commence à 1, si j\'accède au challenge depuis l\'url directe', function () {
      var $progressBar = findWithAssert(PROGRESS_BAR_SELECTOR);
      (0, _chai.expect)($progressBar.text().trim()).to.equal('1 / 5');
    });

    (0, _mocha.it)('d1.0b La barre de progression commence à 1, si j\'accède au challenge depuis depuis le lien Airtable', function callee$1$0() {
      var $progressBar;
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return regeneratorRuntime.awrap(visit('/courses/ref_course_id'));

          case 2:
            context$2$0.next = 4;
            return regeneratorRuntime.awrap(click('.challenge-item-warning button'));

          case 4:
            $progressBar = findWithAssert(PROGRESS_BAR_SELECTOR);

            (0, _chai.expect)($progressBar.text().trim()).to.equal('1 / 5');

          case 6:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    });

    (0, _mocha.it)('d1.1 Je peux valider ma réponse à une épreuve via un bouton "Je valide"', function () {
      (0, _chai.expect)(findWithAssert('.challenge-actions__action-validate')).to.have.lengthOf(1);
    });

    (0, _mocha.describe)('quand je valide ma réponse à une épreuve', function () {

      (0, _mocha.it)('d1.3 Si l\'épreuve que je viens de valider n\'était pas la dernière du test, je suis redirigé vers l\'épreuve suivante', function callee$2$0() {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              context$3$0.next = 2;
              return regeneratorRuntime.awrap(click('.proposal-text'));

            case 2:
              context$3$0.next = 4;
              return regeneratorRuntime.awrap(click('.challenge-actions__action-validate'));

            case 4:
              (0, _chai.expect)(currentURL()).to.contains('/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id');

            case 5:
            case 'end':
              return context$3$0.stop();
          }
        }, null, this);
      });

      (0, _mocha.it)('d1.4 La barre de progression avance d\'une unité, de 1 à 2.', function () {
        var expectedText = '2';
        (0, _chai.expect)(findWithAssert('.pix-progress-bar').text()).to.contains(expectedText);
      });

      (0, _mocha.it)('d1.5 Si l\'épreuve que je viens de valider était la dernière du test, je suis redirigé vers la page de fin du test', function callee$2$0() {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              context$3$0.next = 2;
              return regeneratorRuntime.awrap(visit('/assessments/ref_assessment_id/challenges/ref_qrocm_challenge_id'));

            case 2:
              context$3$0.next = 4;
              return regeneratorRuntime.awrap(click('.challenge-response__proposal-input'));

            case 4:
              context$3$0.next = 6;
              return regeneratorRuntime.awrap(click('.challenge-actions__action-validate'));

            case 6:
              (0, _chai.expect)(currentURL()).to.contains('/assessments/ref_assessment_id/results');

            case 7:
            case 'end':
              return context$3$0.stop();
          }
        }, null, this);
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
define('pix-live/tests/acceptance/e1-previsualisation-epreuve-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app', 'pix-live/tests/helpers/shared-state', 'pix-live/utils/lodash-custom'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp, _pixLiveTestsHelpersSharedState, _pixLiveUtilsLodashCustom) {

  (0, _mocha.describe)('Acceptance | e1 - Prévisualiser une épreuve | ', function () {

    var application = undefined;

    (0, _mocha.beforeEach)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    (0, _mocha.afterEach)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.describe)('e1 - Prévisualiser une épreuve | ', function () {

      (0, _mocha.beforeEach)(function () {
        // localStorage.clear();
        (0, _pixLiveTestsHelpersSharedState.resetTestingState)();
        visit('/');
      });

      (0, _mocha.it)('e1.1 Il y a une demande de création d\'un assessment avec un course vide', function callee$2$0() {
        var postOnAssessment, postOnAssessmentObj, idFirstChars;
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              postOnAssessment = localStorage.getItem('POST_ON_URL_/assessments');

              (0, _chai.expect)(postOnAssessment).not.to.exist;

              // When
              context$3$0.next = 4;
              return regeneratorRuntime.awrap(visit('/challenges/ref_qcu_challenge_id/preview'));

            case 4:

              // Then
              postOnAssessment = localStorage.getItem('POST_ON_URL_/assessments');
              (0, _chai.expect)(postOnAssessment).to.exist;
              postOnAssessmentObj = JSON.parse(postOnAssessment);

              (0, _chai.expect)(typeof postOnAssessment).to.equal('string');
              (0, _chai.expect)(typeof postOnAssessmentObj).to.equal('object');
              (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].get(postOnAssessmentObj, 'data.type')).to.equal('assessments');
              idFirstChars = _pixLiveUtilsLodashCustom['default'].get(postOnAssessmentObj, 'data.relationships.course.data.id').substring(0, 4);

              (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].get(postOnAssessmentObj, 'data.relationships.course.data.type')).to.deep.equal('courses');
              (0, _chai.expect)(idFirstChars).to.equal('null');

            case 13:
            case 'end':
              return context$3$0.stop();
          }
        }, null, this);
      });

      (0, _mocha.it)('e1.2 On affiche l\'assessment retourné par le serveur', function callee$2$0() {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              context$3$0.next = 2;
              return regeneratorRuntime.awrap(visit('/challenges/ref_qcu_challenge_id/preview'));

            case 2:
              (0, _chai.expect)(currentURL()).to.equal('/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id');
              (0, _chai.expect)(findWithAssert('#assessment-challenge'));

            case 4:
            case 'end':
              return context$3$0.stop();
          }
        }, null, this);
      });

      (0, _mocha.it)('e1.3 Il y a une demande de rafraichissement du cache des solutions', function callee$2$0() {
        var postOnAssessment;
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              postOnAssessment = localStorage.getItem('POST_ON_URL_/challenges/ref_qcu_challenge_id/solution');

              (0, _chai.expect)(postOnAssessment).not.to.exist;

              // When
              context$3$0.next = 4;
              return regeneratorRuntime.awrap(visit('/challenges/ref_qcu_challenge_id/preview'));

            case 4:

              // Then
              postOnAssessment = localStorage.getItem('POST_ON_URL_/challenges/ref_qcu_challenge_id/solution');
              (0, _chai.expect)(postOnAssessment).to.exist;

            case 6:
            case 'end':
              return context$3$0.stop();
          }
        }, null, this);
      });
    });
  });
});

// Given

// Given

// Given
define('pix-live/tests/acceptance/e1-previsualisation-epreuve-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/e1-previsualisation-epreuve-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/acceptance/f1-previsualisation-test-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)('Acceptance | f1 - Prévisualisation  d\'un test |', function () {

    var application = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.describe)('Prévisualiser la première page d\'un test |', function () {

      (0, _mocha.before)(function () {
        visit('/courses/ref_course_id/preview');
      });

      (0, _mocha.it)('f1.1 L\'accès à la preview d\'un test se fait en accédant à l\'URL /courses/:course_id/preview', function () {
        (0, _chai.expect)(currentURL()).to.equal('/courses/ref_course_id/preview');
      });

      var $preview = undefined;

      (0, _mocha.describe)('On affiche', function () {

        (0, _mocha.before)(function () {
          $preview = findWithAssert('#course-preview');
        });

        (0, _mocha.it)('f1.2 le nom du test', function () {
          (0, _chai.expect)($preview.find('.course-name').text()).to.contains('First Course');
        });

        (0, _mocha.it)('f1.3 la description du test', function () {
          var $courseDescription = $preview.find('.course-description');
          var instructionText = 'Contient toutes sortes d\'epreuves avec différentes caractéristiques couvrant tous les cas d\'usage.';
          (0, _chai.expect)($courseDescription.text()).to.contains(instructionText);
        });

        (0, _mocha.it)('f1.4 un bouton pour démarrer la simulation du test et qui mène à la première question', function () {
          var $playButton = findWithAssert('.simulate-button');
          (0, _chai.expect)($playButton.text()).to.be.equals('Simuler le test');
          (0, _chai.expect)($playButton.attr('href')).to.be.equals('/courses/ref_course_id/preview/challenges/ref_qcm_challenge_id');
        });
      });
    });

    (0, _mocha.describe)('Prévisualiser une épreuve dans le cadre d\'un test |', function () {

      (0, _mocha.before)(function () {
        visit('/courses/ref_course_id/preview/challenges/ref_qcm_challenge_id');
      });

      (0, _mocha.it)('f1.5 L\'accès à la preview d\'une épreuve d\'un test se fait en accédant à l\'URL /courses/:course_id/preview/challenges/:challenge_id', function () {
        (0, _chai.expect)(currentURL()).to.equal('/courses/ref_course_id/preview/challenges/ref_qcm_challenge_id');
      });

      (0, _mocha.describe)('On affiche', function () {

        var $challenge = undefined;

        (0, _mocha.before)(function () {
          $challenge = findWithAssert('.challenge-preview');
        });

        (0, _mocha.it)('f1.6 la consigne de l\'épreuve', function callee$3$0() {
          return regeneratorRuntime.async(function callee$3$0$(context$4$0) {
            while (1) switch (context$4$0.prev = context$4$0.next) {
              case 0:
                context$4$0.next = 2;
                return regeneratorRuntime.awrap(visit('/courses/ref_course_id/preview/challenges/ref_qcm_challenge_id'));

              case 2:
                context$4$0.next = 4;
                return regeneratorRuntime.awrap(click('.challenge-item-warning button'));

              case 4:
                (0, _chai.expect)($challenge.find('.challenge-statement__instruction').html()).to.contain('Un QCM propose plusieurs choix');

              case 5:
              case 'end':
                return context$4$0.stop();
            }
          }, null, this);
        });

        (0, _mocha.it)('f1.7 un bouton pour accéder à l\'épreuve suivante', function () {
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
define('pix-live/tests/acceptance/g1-bandeau-no-internet-no-outils-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  var CHALLENGE_WITHOUT_INTERNET_NOR_TOOLS_URI = '/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id';
  var CHALLENGE_ALLOWING_INTERNET_OR_TOOS_URI = '/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id';

  (0, _mocha.describe)('Acceptance | g1 - Afficahge du bandeau indiquant que l\'usage d\'Internet ou d\'outils est interdit | ', function () {

    var application = undefined;

    (0, _mocha.beforeEach)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    (0, _mocha.afterEach)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.it)('g1.1 le bandeau doit être affiché si l\'usage d\'Internet ou d\'outils est interdit dans le cadre de l\'épreuve', function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return regeneratorRuntime.awrap(visit(CHALLENGE_WITHOUT_INTERNET_NOR_TOOLS_URI));

          case 2:
            (0, _chai.expect)($('.challenge-stay__text').text()).to.contains('Vous devez répondre à cette question sans sortir de cette page !');

          case 3:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    });

    (0, _mocha.it)('g1.2 le bandeau ne doit pas être affiché si l\'usage d\'Internet ou d\'outils est autorisé dans le cadre de l\'épreuve', function () {
      visit(CHALLENGE_ALLOWING_INTERNET_OR_TOOS_URI);
      (0, _chai.expect)($('.challenge-stay__text')).to.have.lengthOf(0);
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
define('pix-live/tests/acceptance/h1-timeout-jauge-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app', 'pix-live/tests/helpers/shared-state', 'pix-live/utils/lodash-custom'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp, _pixLiveTestsHelpersSharedState, _pixLiveUtilsLodashCustom) {

  function getValidateActionLink() {
    return $('.challenge-actions__action-validate');
  }
  function getSkipActionLink() {
    return $('.challenge-actions__action-skip');
  }

  function visitTimedChallenge() {
    visit(TIMED_CHALLENGE_URI);
    andThen(function () {
      var buttonConfirm = findWithAssert(CHALLENGE_ITEM_WARNING_BUTTON);
      buttonConfirm.click();
    });
  }

  var TIMED_CHALLENGE_URI = '/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id';
  var CHALLENGE_ITEM_WARNING_BUTTON = '.challenge-item-warning button';

  (0, _mocha.describe)('Acceptance | H1 - Timeout Jauge | ', function () {

    var application = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.describe)('Test affichage ou non de la jauge', function () {
      //XXX: Deux cas car on test aussi une absence d'affichage
      (0, _mocha.it)('doit afficher la jauge si exigée par le backend mais ne pas l\'afficher dans le cas contraire ', function () {
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

    (0, _mocha.describe)('Test quand la jauge est affichée', function () {

      beforeEach(function () {
        (0, _pixLiveTestsHelpersSharedState.resetTestingState)();
        visit('/');
      });

      afterEach(function () {
        (0, _pixLiveTestsHelpersSharedState.resetTestingState)();
      });
      (0, _mocha.describe)('Sauvegarde du temps passé | ', function () {

        (0, _mocha.it)('Si l\'utilisateur valide, demande la sauvegarde du temps restant en secondes', function () {
          visitTimedChallenge();
          andThen(function () {
            var $countDown = findWithAssert('.timeout-jauge-remaining');
            (0, _chai.expect)($countDown.text().trim()).to.equal('0:02');
          });
          andThen(function () {
            click(getValidateActionLink());
          });
          andThen(function () {
            (0, _chai.expect)((0, _pixLiveTestsHelpersSharedState.urlOfLastPostRequest)()).to.equal('/api/answers');
            (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].get((0, _pixLiveTestsHelpersSharedState.bodyOfLastPostRequest)(), 'data.attributes.timeout')).to.equal(2);
            (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].get((0, _pixLiveTestsHelpersSharedState.bodyOfLastPostRequest)(), 'data.attributes.value')).to.equal('2,4');
          });
        });

        (0, _mocha.it)('Si l\'utilisateur ABANDONNE, demande la sauvegarde du temps restant en secondes', function () {
          visitTimedChallenge();
          andThen(function () {
            click(getSkipActionLink());
          });
          andThen(function () {
            (0, _chai.expect)((0, _pixLiveTestsHelpersSharedState.urlOfLastPostRequest)()).to.equal('/api/answers');
            (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].get((0, _pixLiveTestsHelpersSharedState.bodyOfLastPostRequest)(), 'data.attributes.timeout')).to.equal(2);
            (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].get((0, _pixLiveTestsHelpersSharedState.bodyOfLastPostRequest)(), 'data.attributes.value')).to.equal('#ABAND#');
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
define('pix-live/tests/acceptance/h2-page-warning-timee-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  var TIMED_CHALLENGE_URL = '/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id';
  var NOT_TIMED_CHALLENGE_URL = '/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id';
  var CHALLENGE_ITEM_WARNING_BUTTON = '.challenge-item-warning button';

  (0, _mocha.describe)('Acceptance | h2 - Warning prochaine page timée  | ', function () {

    var application = undefined;

    (0, _mocha.beforeEach)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    (0, _mocha.afterEach)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.describe)('h2- Test affichage ou non de la page avec le warning', function () {

      (0, _mocha.beforeEach)(function () {
        visit(TIMED_CHALLENGE_URL);
      });

      //XXX: Deux cas car on test aussi une absence d'affichage
      (0, _mocha.it)('h2.1- doit cacher le contenu du challenge si l\'épreuve est timée mais l\'afficher dans le cas contraire ', function callee$2$0() {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              (0, _chai.expect)($('.challenge-statement')).to.have.lengthOf(0);
              context$3$0.next = 3;
              return regeneratorRuntime.awrap(visit(NOT_TIMED_CHALLENGE_URL));

            case 3:
              (0, _chai.expect)($('.challenge-statement')).to.have.lengthOf(1);

            case 4:
            case 'end':
              return context$3$0.stop();
          }
        }, null, this);
      });

      (0, _mocha.it)('h2.2- doit afficher le warning si l\'épreuve est timée mais ne pas l\'afficher dans le cas contraire ', function callee$2$0() {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              (0, _chai.expect)($('.challenge-item-warning')).to.have.lengthOf(1);
              context$3$0.next = 3;
              return regeneratorRuntime.awrap(visit(NOT_TIMED_CHALLENGE_URL));

            case 3:
              (0, _chai.expect)($('.challenge-item-warning')).to.have.lengthOf(0);

            case 4:
            case 'end':
              return context$3$0.stop();
          }
        }, null, this);
      });

      (0, _mocha.it)('h2.3- vérifier que le timer n\'est pas démarré automatiquement lorsque l\'épreuve est timée', function () {
        (0, _chai.expect)($('.timeout-jauge')).to.have.lengthOf(0);
      });
    });

    (0, _mocha.describe)('h2-Test comportement lorsque le bouton de confirmation est cliqué', function () {

      (0, _mocha.beforeEach)(function () {
        visit(TIMED_CHALLENGE_URL);
        click(CHALLENGE_ITEM_WARNING_BUTTON);
      });

      (0, _mocha.it)('h2.1- vérifier que le warning est caché ', function () {
        (0, _chai.expect)($(CHALLENGE_ITEM_WARNING_BUTTON)).to.have.lengthOf(0);
      });

      (0, _mocha.it)('h2.2- vérifier que le contenu de l\'épreuve est affiché', function () {
        (0, _chai.expect)($('.challenge-statement').css('display')).to.contains('block');
      });

      (0, _mocha.it)('h2.3- vérifier que le timer est démarré ', function () {
        (0, _chai.expect)($('.timeout-jauge')).to.have.lengthOf(1);
      });
    });
  });
});
define('pix-live/tests/acceptance/h2-page-warning-timee-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/h2-page-warning-timee-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/acceptance/i1-page-warning-timee-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  var TIMED_CHALLENGE_URL = '/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id';
  var NOT_TIMED_CHALLENGE_URL = '/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id';
  var CHALLENGE_ITEM_WARNING_BUTTON = '.challenge-item-warning button';

  (0, _mocha.describe)('Acceptance | I1 - Warning prochaine page timée  | ', function () {

    var application = undefined;

    (0, _mocha.beforeEach)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    (0, _mocha.afterEach)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.describe)('i1- Test affichage ou non de la page avec le warning', function () {

      (0, _mocha.beforeEach)(function () {
        visit(TIMED_CHALLENGE_URL);
      });

      //XXX: Deux cas car on test aussi une absence d'affichage
      (0, _mocha.it)('i1.1- doit cacher le contenu du challenge si l\'épreuve est timée mais l\'afficher dans le cas contraire ', function callee$2$0() {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              (0, _chai.expect)($('.challenge-statement')).to.have.lengthOf(0);
              context$3$0.next = 3;
              return regeneratorRuntime.awrap(visit(NOT_TIMED_CHALLENGE_URL));

            case 3:
              (0, _chai.expect)($('.challenge-statement')).to.have.lengthOf(1);

            case 4:
            case 'end':
              return context$3$0.stop();
          }
        }, null, this);
      });

      (0, _mocha.it)('i1.2- doit afficher le warning si l\'épreuve est timée mais ne pas l\'afficher dans le cas contraire ', function callee$2$0() {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              (0, _chai.expect)($('.challenge-item-warning')).to.have.lengthOf(1);
              context$3$0.next = 3;
              return regeneratorRuntime.awrap(visit(NOT_TIMED_CHALLENGE_URL));

            case 3:
              (0, _chai.expect)($('.challenge-item-warning')).to.have.lengthOf(0);

            case 4:
            case 'end':
              return context$3$0.stop();
          }
        }, null, this);
      });

      (0, _mocha.it)('i1.3- vérifier que le timer n\'est pas démarré automatiquement lorsque l\'épreuve est timée', function () {
        (0, _chai.expect)($('.timeout-jauge')).to.have.lengthOf(0);
      });
    });

    (0, _mocha.describe)('i2-Test comportement lorsque le bouton de confirmation est cliqué', function () {

      (0, _mocha.beforeEach)(function () {
        visit(TIMED_CHALLENGE_URL);
        click(CHALLENGE_ITEM_WARNING_BUTTON);
      });

      (0, _mocha.it)('i2.1- vérifier que le warning est caché ', function () {
        (0, _chai.expect)($(CHALLENGE_ITEM_WARNING_BUTTON)).to.have.lengthOf(0);
      });

      (0, _mocha.it)('i2.2- vérifier que le contenu de l\'épreuve est affiché', function () {
        (0, _chai.expect)($('.challenge-statement').css('display')).to.contains('block');
      });

      (0, _mocha.it)('i2.3- vérifier que le timer est démarré ', function () {
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
define('pix-live/tests/acceptance/j1-compare-answer-solution-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  // see http://stackoverflow.com/a/7349478/2595513
  function charCount(str) {
    return str.match(/[a-zA-Z]/g).length;
  }

  (0, _mocha.describe)('Acceptance | j1 - Comparer réponses et solutions pour un QCM |', function () {

    var RESULT_URL = '/assessments/ref_assessment_id/results';
    var COMPARISON_MODAL_URL = '/assessments/ref_assessment_id/results/compare/ref_answer_qcm_id/1';

    var TEXT_OF_RESULT_SELECTOR = '.comparison-window__header .comparison-window__title-text';
    var SVG_OF_RESULT_SELECTOR = '.comparison-window__header .comparison-window__title svg';
    var INDEX_OF_RESULT_SELECTOR = '.comparison-window__header .comparison-window__result-item-index';

    var TEXT_OF_INSTRUCTION_SELECTOR = '.comparison-window--body .challenge-statement__instruction';
    var IMAGE_OF_INSTRUCTION_SELECTOR = '.comparison-window--body .challenge-statement__illustration-section';

    var application = undefined;

    before(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    after(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.describe)('j1.1 Affiche sur la ligne de l\'épreuve le mot REPONSE pour un QCM sur l\'écran des résultats', function () {
      (0, _mocha.it)('j1.1.1 il l\'affiche pour un QCM, un QCU mais pas pour les autres types d\'épreuves', function callee$2$0() {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              context$3$0.next = 2;
              return regeneratorRuntime.awrap(visit(RESULT_URL));

            case 2:
              (0, _chai.expect)($('.result-item:eq(0) .js-correct-answer').text()).to.contain('RÉPONSE'); //QCM
              (0, _chai.expect)($('.result-item:eq(1) .js-correct-answer').text()).to.contain('RÉPONSE'); //QCU
              (0, _chai.expect)($('.result-item:eq(2) .js-correct-answer').text()).not.to.contain('RÉPONSE'); //QRU
              (0, _chai.expect)($('.result-item:eq(3) .js-correct-answer').text()).to.contain('RÉPONSE'); //QROC
              (0, _chai.expect)($('.result-item:eq(4) .js-correct-answer').text()).not.to.contain('RÉPONSE'); //QROCM

            case 7:
            case 'end':
              return context$3$0.stop();
          }
        }, null, this);
      });
    });

    (0, _mocha.describe)('j1.2 Accès à la modale', function () {
      (0, _mocha.it)('j1.2.2 On peut accèder directement à la modale via URL et fermer la modale', function callee$2$0() {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              context$3$0.next = 2;
              return regeneratorRuntime.awrap(visit(COMPARISON_MODAL_URL));

            case 2:
              (0, _chai.expect)($('.comparison-window')).to.have.lengthOf(1);
              // XXX test env needs the modal to be closed manually
              context$3$0.next = 5;
              return regeneratorRuntime.awrap(click('.close-button-container'));

            case 5:
              (0, _chai.expect)($('.comparison-window')).to.have.lengthOf(0);

            case 6:
            case 'end':
              return context$3$0.stop();
          }
        }, null, this);
      });
      (0, _mocha.it)('j1.2.1 Si on clique sur REPONSE la modale s\'ouvre', function callee$2$0() {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              context$3$0.next = 2;
              return regeneratorRuntime.awrap(visit(RESULT_URL));

            case 2:
              (0, _chai.expect)($('.comparison-window')).to.have.lengthOf(0);
              context$3$0.next = 5;
              return regeneratorRuntime.awrap(click('.result-item__correction__button'));

            case 5:
              (0, _chai.expect)($('.comparison-window')).to.have.lengthOf(1);
              // XXX test env needs the modal to be closed manually
              context$3$0.next = 8;
              return regeneratorRuntime.awrap(click('.close-button-container'));

            case 8:
              (0, _chai.expect)($('.comparison-window')).to.have.lengthOf(0);

            case 9:
            case 'end':
              return context$3$0.stop();
          }
        }, null, this);
      });
    });

    (0, _mocha.describe)('j1.3 Contenu de la modale : résultat & instruction', function () {

      (0, _mocha.it)('j1.3.1 Vérification de l\'index, ainsi que l\'image et le texte du résultat dans le header', function callee$2$0() {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              context$3$0.next = 2;
              return regeneratorRuntime.awrap(visit(RESULT_URL));

            case 2:
              (0, _chai.expect)($(INDEX_OF_RESULT_SELECTOR)).to.have.lengthOf(0);
              (0, _chai.expect)($(SVG_OF_RESULT_SELECTOR)).to.have.lengthOf(0);
              (0, _chai.expect)($(TEXT_OF_RESULT_SELECTOR)).to.have.lengthOf(0);

              context$3$0.next = 7;
              return regeneratorRuntime.awrap(visit(COMPARISON_MODAL_URL));

            case 7:
              (0, _chai.expect)($(INDEX_OF_RESULT_SELECTOR).text().replace(/\n/g, '').trim()).to.equal('1');
              (0, _chai.expect)($(SVG_OF_RESULT_SELECTOR)).to.have.lengthOf(1);
              (0, _chai.expect)(charCount($(TEXT_OF_RESULT_SELECTOR).text())).to.be.above(5); // XXX : Above 5 means "must be a sentence"

              // XXX test env needs the modal to be closed manually
              context$3$0.next = 12;
              return regeneratorRuntime.awrap(click('.close-button-container'));

            case 12:
              (0, _chai.expect)($('.comparison-window')).to.have.lengthOf(0);

            case 13:
            case 'end':
              return context$3$0.stop();
          }
        }, null, this);
      });

      (0, _mocha.it)('j1.3.2 Vérification de la présence de l\'instruction, texte et image', function callee$2$0() {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              context$3$0.next = 2;
              return regeneratorRuntime.awrap(visit(RESULT_URL));

            case 2:
              (0, _chai.expect)($(TEXT_OF_INSTRUCTION_SELECTOR)).to.exist;
              (0, _chai.expect)($(IMAGE_OF_INSTRUCTION_SELECTOR)).to.exist;

              context$3$0.next = 6;
              return regeneratorRuntime.awrap(visit(COMPARISON_MODAL_URL));

            case 6:
              (0, _chai.expect)(charCount($(TEXT_OF_INSTRUCTION_SELECTOR).text())).to.be.above(5); // XXX : Above 5 means "must be a sentence"
              (0, _chai.expect)($(IMAGE_OF_INSTRUCTION_SELECTOR)).to.have.lengthOf(1);

              // XXX test env needs the modal to be closed manually
              context$3$0.next = 10;
              return regeneratorRuntime.awrap(click('.close-button-container'));

            case 10:
              (0, _chai.expect)($('.comparison-window')).to.have.lengthOf(0);

            case 11:
            case 'end':
              return context$3$0.stop();
          }
        }, null, this);
      });
    });
  });
});
define('pix-live/tests/acceptance/j1-compare-answer-solution-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/j1-compare-answer-solution-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/acceptance/j2-compare-answer-solution-qroc-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)('Acceptance | j2 - Comparer réponses et solutions pour un QROC | ', function () {

    var RESULT_URL = '/assessments/ref_assessment_id/results';
    var COMPARISON_MODAL_URL = '/assessments/ref_assessment_id/results/compare/ref_answer_qroc_id/4';

    var TEXT_OF_RESULT_SELECTOR = '.comparison-window__header .comparison-window__title .comparison-window__title-text';
    var SVG_OF_RESULT_SELECTOR = '.comparison-window__header .comparison-window__title svg';
    var INDEX_OF_RESULT_SELECTOR = '.comparison-window__header .comparison-window__result-item-index';
    var TEXT_OF_INSTRUCTION_SELECTOR = '.comparison-window--body .challenge-statement__instruction';
    var CORRECTION_BOX_QROC = '.comparison-window__corrected-answers--qroc';
    var FEEDBACK_LINK = '.comparison-window__feedback-panel';

    var application = undefined;

    before(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    after(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.describe)('j2.1 Depuis la page résultat', function () {

      before(function () {
        visit(RESULT_URL);
      });

      (0, _mocha.it)('affiche le lien REPONSE vers la modale depuis l\'ecran des resultats pour un QROC', function callee$2$0() {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              (0, _chai.expect)($('.result-item .js-correct-answer').text()).to.contain('RÉPONSE');

            case 1:
            case 'end':
              return context$3$0.stop();
          }
        }, null, this);
      });

      (0, _mocha.it)('On n\'affiche pas encore la modale, ni son contenu', function callee$2$0() {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              (0, _chai.expect)($('.comparison-window')).to.have.lengthOf(0);
              (0, _chai.expect)($(INDEX_OF_RESULT_SELECTOR)).to.have.lengthOf(0);
              (0, _chai.expect)($(SVG_OF_RESULT_SELECTOR)).to.have.lengthOf(0);
              (0, _chai.expect)($(TEXT_OF_RESULT_SELECTOR)).to.have.lengthOf(0);

            case 4:
            case 'end':
              return context$3$0.stop();
          }
        }, null, this);
      });
    });

    (0, _mocha.describe)('j2.2 Contenu de la modale de correction pour un QROC', function () {

      before(function () {
        visit(COMPARISON_MODAL_URL);
      });

      (0, _mocha.it)('possible d\'accéder à la modale depuis l\'URL', function callee$2$0() {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              (0, _chai.expect)($('.comparison-window')).to.have.lengthOf(1);

            case 1:
            case 'end':
              return context$3$0.stop();
          }
        }, null, this);
      });

      (0, _mocha.it)('contient un header', function callee$2$0() {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              (0, _chai.expect)($(INDEX_OF_RESULT_SELECTOR).text().replace(/\n/g, '').trim()).to.equal('4');
              (0, _chai.expect)($(SVG_OF_RESULT_SELECTOR)).to.have.lengthOf(1);

            case 2:
            case 'end':
              return context$3$0.stop();
          }
        }, null, this);
      });

      (0, _mocha.it)('contient une instruction', function callee$2$0() {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              (0, _chai.expect)($(TEXT_OF_INSTRUCTION_SELECTOR)).to.have.lengthOf(1);

            case 1:
            case 'end':
              return context$3$0.stop();
          }
        }, null, this);
      });

      (0, _mocha.it)('contient une zone de correction', function callee$2$0() {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              (0, _chai.expect)($(CORRECTION_BOX_QROC)).to.have.lengthOf(1);

            case 1:
            case 'end':
              return context$3$0.stop();
          }
        }, null, this);
      });

      (0, _mocha.it)('contient un lien vers feedback', function callee$2$0() {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              (0, _chai.expect)($(FEEDBACK_LINK)).to.have.lengthOf(1);

            case 1:
            case 'end':
              return context$3$0.stop();
          }
        }, null, this);
      });

      (0, _mocha.it)('on peut fermer la modale', function callee$2$0() {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              context$3$0.next = 2;
              return regeneratorRuntime.awrap(click('.close-button-container'));

            case 2:
              (0, _chai.expect)($('.comparison-window')).to.have.lengthOf(0);

            case 3:
            case 'end':
              return context$3$0.stop();
          }
        }, null, this);
      });
    });
  });
});
define('pix-live/tests/acceptance/j2-compare-answer-solution-qroc-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/j2-compare-answer-solution-qroc-test.js', function () {
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
define('pix-live/tests/adapters/challenge.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - adapters/challenge.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/adapters/solution.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - adapters/solution.js', function () {
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
define('pix-live/tests/components/comparison-window.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/comparison-window.js', function () {
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
define('pix-live/tests/components/course-item.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/course-item.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/components/course-list.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/course-list.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/components/feature-item.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/feature-item.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/components/feature-list.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/feature-list.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/components/feedback-panel.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/feedback-panel.js', function () {
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
define('pix-live/tests/components/modal-mobile.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/modal-mobile.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/components/navbar-header.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/navbar-header.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/components/pix-logo.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/pix-logo.js', function () {
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
define('pix-live/tests/components/qcm-solution-panel.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/qcm-solution-panel.js', function () {
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
define('pix-live/tests/components/qcu-solution-panel.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/qcu-solution-panel.js', function () {
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
define('pix-live/tests/components/qroc-solution-panel.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/qroc-solution-panel.js', function () {
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
define('pix-live/tests/components/result-item.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/result-item.js', function () {
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
define('pix-live/tests/helpers/convert-to-html.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - helpers/convert-to-html.js', function () {
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
define('pix-live/tests/helpers/or.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - helpers/or.js', function () {
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
define('pix-live/tests/helpers/shared-state', ['exports'], function (exports) {
  exports.resetTestingState = resetTestingState;
  exports.setTestingState = setTestingState;
  exports.urlOfLastPostRequest = urlOfLastPostRequest;
  exports.bodyOfLastPostRequest = bodyOfLastPostRequest;

  function resetTestingState() {
    localStorage.clear();
  }

  function setTestingState(state) {
    localStorage.setItem('mirageTestingState', JSON.stringify(state));
  }

  function urlOfLastPostRequest() {
    return JSON.parse(localStorage.getItem('miragePostUrl')).url;
  }

  function bodyOfLastPostRequest() {
    return JSON.parse(JSON.parse(localStorage.getItem('miragePostUrl')).body);
  }
});
define('pix-live/tests/helpers/shared-state.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - helpers/shared-state.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/helpers/start-app', ['exports', 'ember', 'pix-live/app', 'pix-live/config/environment'], function (exports, _ember, _pixLiveApp, _pixLiveConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _pixLiveConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

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
define('pix-live/tests/integration/components/comparison-window-test', ['exports', 'chai', 'mocha', 'ember-mocha', 'ember'], function (exports, _chai, _mocha, _emberMocha, _ember) {

  (0, _mocha.describe)('Integration | Component | comparison-window', function () {

    (0, _emberMocha.setupComponentTest)('comparison-window', {
      integration: true
    });

    (0, _mocha.describe)('rendering', function () {

      var answer = undefined;
      var challenge = undefined;
      var solution = undefined;

      (0, _mocha.beforeEach)(function () {
        answer = _ember['default'].Object.create({ value: '1,2', result: 'ko' });
        challenge = _ember['default'].Object.create({
          instruction: 'This is the instruction',
          proposals: '' + '- 1ere possibilite\n ' + '- 2eme possibilite\n ' + '- 3eme possibilite\n' + '- 4eme possibilite'
        });
        solution = _ember['default'].Object.create({ value: '2,3' });

        this.set('answer', answer);
        this.set('challenge', challenge);
        this.set('solution', solution);
        this.set('index', '3');
      });

      (0, _mocha.it)('renders', function () {
        // when
        this.render(_ember['default'].HTMLBars.template({
          'id': '5+mLThjy',
          'block': '{"statements":[["append",["helper",["comparison-window"],[["get",["answer"]],["get",["challenge"]],["get",["solution"]],["get",["index"]]],null],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));
        // then
        (0, _chai.expect)(this.$()).to.have.lengthOf(1);
      });

      (0, _mocha.it)('should render challenge result in the header', function () {
        // when
        this.render(_ember['default'].HTMLBars.template({
          'id': '5+mLThjy',
          'block': '{"statements":[["append",["helper",["comparison-window"],[["get",["answer"]],["get",["challenge"]],["get",["solution"]],["get",["index"]]],null],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));
        // then
        (0, _chai.expect)(this.$('.comparison-window__header')).to.have.length(1);
      });

      (0, _mocha.it)('should render challenge instruction', function () {
        // when
        this.render(_ember['default'].HTMLBars.template({
          'id': '5+mLThjy',
          'block': '{"statements":[["append",["helper",["comparison-window"],[["get",["answer"]],["get",["challenge"]],["get",["solution"]],["get",["index"]]],null],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));
        // then
        (0, _chai.expect)(this.$('.challenge-statement__instruction')).to.have.length(1);
      });

      (0, _mocha.it)('should not render corrected answers when challenge has no type', function () {
        // when
        this.render(_ember['default'].HTMLBars.template({
          'id': '5+mLThjy',
          'block': '{"statements":[["append",["helper",["comparison-window"],[["get",["answer"]],["get",["challenge"]],["get",["solution"]],["get",["index"]]],null],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));
        // then
        (0, _chai.expect)(this.$('.comparison-window__corrected-answers')).to.have.length(0);
      });

      (0, _mocha.it)('should render corrected answers when challenge type is QROC', function () {
        // given
        challenge = _ember['default'].Object.create({ type: 'QROC' });
        this.set('challenge', challenge);
        // when
        this.render(_ember['default'].HTMLBars.template({
          'id': '5+mLThjy',
          'block': '{"statements":[["append",["helper",["comparison-window"],[["get",["answer"]],["get",["challenge"]],["get",["solution"]],["get",["index"]]],null],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));
        // then
        (0, _chai.expect)(this.$('.comparison-window__corrected-answers--qroc')).to.have.length(1);
      });

      (0, _mocha.it)('should render corrected answers when challenge type is QCM', function () {
        // given
        challenge = _ember['default'].Object.create({ type: 'QCM' });
        this.set('challenge', challenge);
        // when
        this.render(_ember['default'].HTMLBars.template({
          'id': '5+mLThjy',
          'block': '{"statements":[["append",["helper",["comparison-window"],[["get",["answer"]],["get",["challenge"]],["get",["solution"]],["get",["index"]]],null],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));
        // then
        (0, _chai.expect)(this.$('.qcm-solution-panel')).to.have.length(1);
      });

      (0, _mocha.it)('should render a feedback panel', function () {
        //when
        this.render(_ember['default'].HTMLBars.template({
          'id': '5+mLThjy',
          'block': '{"statements":[["append",["helper",["comparison-window"],[["get",["answer"]],["get",["challenge"]],["get",["solution"]],["get",["index"]]],null],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));
        //then
        (0, _chai.expect)(this.$('.comparison-window__feedback-panel')).to.have.length(1);
      });
    });
  });
});
define('pix-live/tests/integration/components/comparison-window-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - integration/components/comparison-window-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/integration/components/corner-ribbon-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  describe('Integration | Component | CornerRibbonComponent', function () {

    (0, _emberMocha.setupComponentTest)('corner-ribbon', {
      integration: true
    });

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
define('pix-live/tests/integration/components/course-item-test', ['exports', 'ember', 'chai', 'mocha', 'ember-mocha'], function (exports, _ember, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Integration | Component | course item', function () {

    (0, _emberMocha.setupComponentTest)('course-item', {
      integration: true
    });

    (0, _mocha.describe)('rendering:', function () {

      (0, _mocha.it)('renders', function () {
        this.render(_ember['default'].HTMLBars.template({
          'id': '9SOyPEls',
          'block': '{"statements":[["append",["unknown",["course-item"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));
        (0, _chai.expect)(this.$()).to.have.length(1);
      });

      (0, _mocha.it)('should render course picture if it is defined', function () {
        // given
        var course = _ember['default'].Object.create({ imageUrl: 'image_src' });
        this.set('course', course);

        // when
        this.render(_ember['default'].HTMLBars.template({
          'id': 'ldqh36hZ',
          'block': '{"statements":[["append",["helper",["course-item"],null,[["course"],[["get",["course"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));

        // then
        var $picture = this.$('.course-item__picture');
        (0, _chai.expect)($picture.attr('src')).to.equal(course.get('imageUrl'));
      });

      (0, _mocha.it)('should render default picture if course picture is not defined', function () {
        // given
        var course = _ember['default'].Object.create();
        this.set('course', course);

        // when
        this.render(_ember['default'].HTMLBars.template({
          'id': 'ldqh36hZ',
          'block': '{"statements":[["append",["helper",["course-item"],null,[["course"],[["get",["course"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));

        // then
        var $picture = this.$('.course-item__picture');
        (0, _chai.expect)($picture.attr('src')).to.equal('/assets/images/course-default-image.png');
      });

      (0, _mocha.it)('should render course name', function () {
        // given
        var course = _ember['default'].Object.create({ name: 'name_value' });
        this.set('course', course);

        // when
        this.render(_ember['default'].HTMLBars.template({
          'id': 'ldqh36hZ',
          'block': '{"statements":[["append",["helper",["course-item"],null,[["course"],[["get",["course"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));

        // then
        var $name = this.$('.course-item__name');
        (0, _chai.expect)($name.text().trim()).to.equal(course.get('name'));
      });

      (0, _mocha.it)('should render course description', function () {
        // given
        var course = _ember['default'].Object.create({ description: 'description_value' });
        this.set('course', course);

        // when
        this.render(_ember['default'].HTMLBars.template({
          'id': 'ldqh36hZ',
          'block': '{"statements":[["append",["helper",["course-item"],null,[["course"],[["get",["course"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));

        // then
        var $description = this.$('.course-item__description');
        (0, _chai.expect)($description.text().trim()).to.equal(course.get('description'));
      });

      (0, _mocha.it)('should render the number of challenges', function () {
        // given
        var course = _ember['default'].Object.create({ challenges: ['c1', 'c2', 'c3', 'c4'] });
        this.set('course', course);

        // when
        this.render(_ember['default'].HTMLBars.template({
          'id': 'ldqh36hZ',
          'block': '{"statements":[["append",["helper",["course-item"],null,[["course"],[["get",["course"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));

        // then
        var $nbChallenges = this.$('.course-item__challenges-number');
        (0, _chai.expect)($nbChallenges.text().trim()).to.equal('4 épreuves');
      });

      (0, _mocha.it)('should render a link to begin the course', function () {
        // given
        var course = _ember['default'].Object.create();
        this.set('course', course);

        // when
        this.render(_ember['default'].HTMLBars.template({
          'id': 'ldqh36hZ',
          'block': '{"statements":[["append",["helper",["course-item"],null,[["course"],[["get",["course"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));

        // then
        var $startAction = this.$('.course-item__begin-button');
        (0, _chai.expect)($startAction.text().trim()).to.equal('Commencer');
      });

      (0, _mocha.it)('should render a link containing the course name in title', function () {
        // given
        var course = _ember['default'].Object.create({ name: 'My course' });
        this.set('course', course);

        // when
        this.render(_ember['default'].HTMLBars.template({
          'id': 'ldqh36hZ',
          'block': '{"statements":[["append",["helper",["course-item"],null,[["course"],[["get",["course"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));

        // then
        var $startAction = this.$('.course-item__begin-button');
        (0, _chai.expect)($startAction.attr('title')).to.equal('Commencer le test \"My course\"');
      });
    });

    (0, _mocha.describe)('behaviours:', function () {

      (0, _mocha.it)('should send action "startCourse" with course in argument when clicking on "start" button', function () {
        // given
        var course = _ember['default'].Object.create({ id: 'course_id' });
        this.set('course', course);
        var actualCourse = undefined;
        this.on('actionHandler', function (receivedCourse) {
          actualCourse = receivedCourse;
        });

        // when
        this.render(_ember['default'].HTMLBars.template({
          'id': 'xVrQ+R+D',
          'block': '{"statements":[["append",["helper",["course-item"],null,[["course","startCourse"],[["get",["course"]],"actionHandler"]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));

        // then
        var $startAction = this.$('.course-item__begin-button');
        $startAction.click();
        (0, _chai.expect)(actualCourse.get('id')).to.equal(course.get('id'));
      });
    });
  });
});
define('pix-live/tests/integration/components/course-item-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - integration/components/course-item-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/integration/components/course-list-test', ['exports', 'ember', 'chai', 'mocha', 'ember-mocha'], function (exports, _ember, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Integration | Component | course list', function () {

    (0, _emberMocha.setupComponentTest)('course-list', {
      integration: true
    });

    (0, _mocha.describe)('rendering:', function () {

      (0, _mocha.it)('renders', function () {
        this.render(_ember['default'].HTMLBars.template({
          'id': 'SiQ4ynL+',
          'block': '{"statements":[["append",["unknown",["course-list"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));
        (0, _chai.expect)(this.$()).to.have.length(1);
      });

      (0, _mocha.it)('should render as many course-item as courses elements', function () {
        // given
        var courses = [_ember['default'].Object.create({ id: '1' }), _ember['default'].Object.create({ id: '2' }), _ember['default'].Object.create({ id: '3' })];
        this.set('courses', courses);

        // when
        this.render(_ember['default'].HTMLBars.template({
          'id': 'ojVuhFHL',
          'block': '{"statements":[["append",["helper",["course-list"],null,[["courses"],[["get",["courses"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));

        // then
        (0, _chai.expect)(this.$('.course-list__li')).to.have.length(courses.length);
      });
    });
  });
});
define('pix-live/tests/integration/components/course-list-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - integration/components/course-list-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/integration/components/feature-item-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Integration | Component | feature item', function () {

    (0, _emberMocha.setupComponentTest)('feature-item', {
      integration: true
    });

    var feature = {
      icon: 'coucou',
      title: 'title_value',
      description: 'description_value'
    };

    (0, _mocha.it)('renders', function () {
      this.set('feature', feature);
      this.render(Ember.HTMLBars.template({
        'id': 'k8aoFIfT',
        'block': '{"statements":[["append",["helper",["feature-item"],null,[["feature"],[["get",["feature"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
        'meta': {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });

    (0, _mocha.it)('should render an icon', function () {
      this.set('feature', feature);
      this.render(Ember.HTMLBars.template({
        'id': 'k8aoFIfT',
        'block': '{"statements":[["append",["helper",["feature-item"],null,[["feature"],[["get",["feature"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
        'meta': {}
      }));

      var $icon = this.$('.feature-item__icon');
      (0, _chai.expect)($icon).to.exist;
      (0, _chai.expect)($icon.attr('src')).to.equal('images/icon-coucou.svg');
    });

    (0, _mocha.it)('should render an title', function () {
      this.set('feature', feature);
      this.render(Ember.HTMLBars.template({
        'id': 'k8aoFIfT',
        'block': '{"statements":[["append",["helper",["feature-item"],null,[["feature"],[["get",["feature"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
        'meta': {}
      }));

      var $title = this.$('.feature-item__title');
      (0, _chai.expect)($title).to.exist;
      (0, _chai.expect)($title.text().trim()).to.equal(feature.title);
    });

    (0, _mocha.it)('should render an description', function () {
      this.set('feature', feature);
      this.render(Ember.HTMLBars.template({
        'id': 'k8aoFIfT',
        'block': '{"statements":[["append",["helper",["feature-item"],null,[["feature"],[["get",["feature"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
        'meta': {}
      }));

      var $description = this.$('.feature-item__description');
      (0, _chai.expect)($description).to.exist;
      (0, _chai.expect)($description.text().trim()).to.equal(feature.description);
    });
  });
});
define('pix-live/tests/integration/components/feature-item-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - integration/components/feature-item-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/integration/components/feature-list-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Integration | Component | feature list', function () {

    (0, _emberMocha.setupComponentTest)('feature-list', {
      integration: true
    });

    (0, _mocha.it)('renders', function () {
      this.render(Ember.HTMLBars.template({
        'id': '12Co2Nrn',
        'block': '{"statements":[["append",["unknown",["feature-list"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
        'meta': {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });

    (0, _mocha.it)('should always render 5 feature-items', function () {
      // when
      this.render(Ember.HTMLBars.template({
        'id': '12Co2Nrn',
        'block': '{"statements":[["append",["unknown",["feature-list"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
        'meta': {}
      }));

      // then
      (0, _chai.expect)(this.$('.feature-list__li')).to.have.lengthOf(5);
      (0, _chai.expect)(this.$('.feature-item')).to.have.lengthOf(5);
    });
  });
});
define('pix-live/tests/integration/components/feature-list-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - integration/components/feature-list-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/integration/components/feedback-panel-test', ['exports', 'ember', 'chai', 'mocha', 'ember-mocha', 'ember-test-helpers/wait', 'pix-live/utils/lodash-custom'], function (exports, _ember, _chai, _mocha, _emberMocha, _emberTestHelpersWait, _pixLiveUtilsLodashCustom) {

  var LINK_VIEW = '.feedback-panel__view--link';
  var FORM_VIEW = '.feedback-panel__view--form';
  var MERCIX_VIEW = '.feedback-panel__view--mercix';
  var OPEN_LINK = '.feedback-panel__open-link';
  var BUTTON_SEND = '.feedback-panel__button--send';
  var BUTTON_CANCEL = '.feedback-panel__button--cancel';

  function expectLinkViewToBeVisible(component) {
    (0, _chai.expect)(component.$(LINK_VIEW)).to.have.length(1);
    (0, _chai.expect)(component.$(FORM_VIEW)).to.have.length(0);
    (0, _chai.expect)(component.$(MERCIX_VIEW)).to.have.length(0);
  }

  function expectFormViewToBeVisible(component) {
    (0, _chai.expect)(component.$(LINK_VIEW)).to.have.length(0);
    (0, _chai.expect)(component.$(FORM_VIEW)).to.have.length(1);
    (0, _chai.expect)(component.$(MERCIX_VIEW)).to.have.length(0);
  }

  function expectMercixViewToBeVisible(component) {
    (0, _chai.expect)(component.$(LINK_VIEW)).to.have.length(0);
    (0, _chai.expect)(component.$(FORM_VIEW)).to.have.length(0);
    (0, _chai.expect)(component.$(MERCIX_VIEW)).to.have.length(1);
  }

  (0, _mocha.describe)('Integration | Component | feedback-panel', function () {

    (0, _emberMocha.setupComponentTest)('feedback-panel', {
      integration: true
    });

    (0, _mocha.describe)('Default rendering', function () {

      (0, _mocha.it)('should display only the "link" view', function () {
        // when
        this.render(_ember['default'].HTMLBars.template({
          'id': 'W1nXUGqH',
          'block': '{"statements":[["append",["unknown",["feedback-panel"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));
        // then
        expectLinkViewToBeVisible(this);
      });
    });

    (0, _mocha.describe)('Link view', function () {

      beforeEach(function () {
        this.render(_ember['default'].HTMLBars.template({
          'id': 'DnUF9xqA',
          'block': '{"statements":[["append",["helper",["feedback-panel"],null,[["status"],["FORM_CLOSED"]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));
      });

      (0, _mocha.it)('should display only the "link" view', function () {
        expectLinkViewToBeVisible(this);
      });

      (0, _mocha.it)('the link label should be "Signaler un problème"', function () {
        (0, _chai.expect)(this.$(OPEN_LINK).text()).to.contains('Signaler un problème');
      });

      (0, _mocha.it)('clicking on the open link should hide the "link" view and display the "form" view', function () {
        // when
        this.$(OPEN_LINK).click();
        // then
        expectFormViewToBeVisible(this);
      });
    });

    (0, _mocha.describe)('Form view', function () {

      var isSaveMethodCalled = false;
      var saveMethodBody = null;
      var saveMethodUrl = null;

      var storeStub = _ember['default'].Service.extend({
        createRecord: function createRecord() {
          var createRecordArgs = arguments;
          return Object.create({
            save: function save() {
              isSaveMethodCalled = true;
              saveMethodUrl = createRecordArgs[0];
              saveMethodBody = createRecordArgs[1];
              return _ember['default'].RSVP.resolve();
            }
          });
        }
      });

      beforeEach(function () {
        // configure answer & cie. model object
        var assessment = _ember['default'].Object.extend({ id: 'assessment_id' }).create();
        var challenge = _ember['default'].Object.extend({ id: 'challenge_id' }).create();
        var answer = _ember['default'].Object.extend({ id: 'answer_id', assessment: assessment, challenge: challenge }).create();

        // render component
        this.set('answer', answer);
        this.render(_ember['default'].HTMLBars.template({
          'id': 'yNmlycrx',
          'block': '{"statements":[["append",["helper",["feedback-panel"],null,[["answer","status"],[["get",["answer"]],"FORM_OPENED"]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));

        // stub store service
        this.register('service:store', storeStub);
        this.inject.service('store', { as: 'store' });

        isSaveMethodCalled = false;
        saveMethodBody = null;
        saveMethodUrl = null;
      });

      (0, _mocha.it)('should display only the "form" view', function () {
        expectFormViewToBeVisible(this);
      });

      (0, _mocha.it)('should contain email input field', function () {
        var $email = this.$('input.feedback-panel__field--email');
        (0, _chai.expect)($email).to.have.length(1);
        (0, _chai.expect)($email.attr('placeholder')).to.equal('Votre email (optionnel)');
      });

      (0, _mocha.it)('should contain content textarea field', function () {
        var $password = this.$('textarea.feedback-panel__field--content');
        (0, _chai.expect)($password).to.have.length(1);
        (0, _chai.expect)($password.attr('placeholder')).to.equal('Votre message');
      });

      (0, _mocha.it)('should contain "send" button with label "Envoyer" and placeholder "Votre email (optionnel)"', function () {
        var $buttonSend = this.$(BUTTON_SEND);
        (0, _chai.expect)($buttonSend).to.have.length(1);
        (0, _chai.expect)($buttonSend.text()).to.equal('Envoyer');
      });

      (0, _mocha.it)('should contain "cancel" button with label "Annuler" and placeholder "Votre message"', function () {
        var $buttonCancel = this.$(BUTTON_CANCEL);
        (0, _chai.expect)($buttonCancel).to.have.length(1);
        (0, _chai.expect)($buttonCancel.text()).to.equal('Annuler');
      });

      (0, _mocha.it)('clicking on "cancel" button should close the "form" view and and display the "link" view', function () {
        // when
        this.$(BUTTON_CANCEL).click();
        // then
        expectLinkViewToBeVisible(this);
      });

      (0, _mocha.it)('clicking on "send" button should save the feedback into the store / API and display the "mercix" view', function () {
        var _this = this;

        // given
        var CONTENT_VALUE = 'Prêtes-moi ta plume, pour écrire un mot';
        var EMAIL_VALUE = 'myemail@gemail.com';
        var $content = this.$('.feedback-panel__field--content');
        var $email = this.$('.feedback-panel__field--email');
        $content.val(CONTENT_VALUE);
        $email.val(EMAIL_VALUE);
        $content.change();
        $email.change();

        // when
        this.$(BUTTON_SEND).click();

        // then
        return (0, _emberTestHelpersWait['default'])().then(function () {
          (0, _chai.expect)(isSaveMethodCalled).to.be['true'];
          (0, _chai.expect)(saveMethodUrl).to.equal('feedback');
          (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].isObject(saveMethodBody)).to.equal(true);
          (0, _chai.expect)(saveMethodBody.assessement).to.exists;
          (0, _chai.expect)(saveMethodBody.challenge).to.exists;
          (0, _chai.expect)(saveMethodBody.content).to.equal(CONTENT_VALUE);
          (0, _chai.expect)(saveMethodBody.email).to.equal(EMAIL_VALUE);
          expectMercixViewToBeVisible(_this);
        });
      });
    });

    (0, _mocha.describe)('Mercix view', function () {

      beforeEach(function () {
        this.render(_ember['default'].HTMLBars.template({
          'id': 'ZrAQqlp+',
          'block': '{"statements":[["append",["helper",["feedback-panel"],null,[["status"],["FORM_SUBMITTED"]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));
      });

      (0, _mocha.it)('should display only the "mercix" view', function () {
        expectMercixViewToBeVisible(this);
      });
    });

    (0, _mocha.describe)('Error management', function () {

      (0, _mocha.it)('should display error if "content" is blank', function () {
        // given
        this.render(_ember['default'].HTMLBars.template({
          'id': '2cm8XB2f',
          'block': '{"statements":[["append",["helper",["feedback-panel"],null,[["status","content"],["FORM_OPENED","   "]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));

        // when
        this.$(BUTTON_SEND).click();

        // then
        (0, _chai.expect)(this.$('.alert')).to.have.length(1);
        expectFormViewToBeVisible(this);
      });

      (0, _mocha.it)('should display error if "email" is set but invalid', function () {
        // given
        this.render(_ember['default'].HTMLBars.template({
          'id': 'IelwLHOR',
          'block': '{"statements":[["append",["helper",["feedback-panel"],null,[["status","content","email"],["FORM_OPENED","Lorem ipsum dolor sit amet","wrong_email"]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));

        // when
        this.$(BUTTON_SEND).click();

        (0, _chai.expect)(this.$('.alert')).to.have.length(1);
        expectFormViewToBeVisible(this);
      });

      (0, _mocha.it)('should not display error if "form" view (with error) was closed and re-opened', function () {
        // given
        this.render(_ember['default'].HTMLBars.template({
          'id': '2cm8XB2f',
          'block': '{"statements":[["append",["helper",["feedback-panel"],null,[["status","content"],["FORM_OPENED","   "]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));
        this.$(BUTTON_SEND).click();
        (0, _chai.expect)(this.$('.alert')).to.have.length(1);

        // when
        this.$(BUTTON_CANCEL).click();
        this.$(OPEN_LINK).click();

        // then
        (0, _chai.expect)(this.$('.alert')).to.have.length(0);
      });
    });
  });
});
define('pix-live/tests/integration/components/feedback-panel-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - integration/components/feedback-panel-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/integration/components/first-page-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Integration | Component | FirstPageComponent', function () {

    (0, _emberMocha.setupComponentTest)('first-page', {
      integration: true
    });

    (0, _mocha.it)('renders', function () {
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
define('pix-live/tests/integration/components/follower-form-test', ['exports', 'chai', 'mocha', 'ember-mocha', 'ember', 'ember-test-helpers/wait'], function (exports, _chai, _mocha, _emberMocha, _ember, _emberTestHelpersWait) {

  var BUTTON_SEND = '.follower-form__button';
  var INPUT_EMAIL = '.follower-email';

  (0, _mocha.describe)('Integration | Component | follower form', function () {
    (0, _emberMocha.setupComponentTest)('follower-form', {
      integration: true
    });

    (0, _mocha.it)('renders', function () {
      this.render(_ember['default'].HTMLBars.template({
        'id': 'O9xGjXjO',
        'block': '{"statements":[["append",["unknown",["follower-form"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
        'meta': {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });

    (0, _mocha.describe)('Test Component form', function () {
      (0, _mocha.it)('should render submit button', function () {
        //When
        this.render(_ember['default'].HTMLBars.template({
          'id': 'O9xGjXjO',
          'block': '{"statements":[["append",["unknown",["follower-form"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));
        //then
        (0, _chai.expect)(this.$('.follower-form__button').length).to.equal(1);
      });

      (0, _mocha.it)('should return true if input exist', function () {
        //When
        this.render(_ember['default'].HTMLBars.template({
          'id': 'O9xGjXjO',
          'block': '{"statements":[["append",["unknown",["follower-form"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));
        //then
        (0, _chai.expect)(this.$(INPUT_EMAIL).length).to.equal(1);
      });
    });

    (0, _mocha.describe)('Form view', function () {
      var isSaveMethodCalled = false;
      var saveMethodBody = null;
      var saveMethodUrl = null;

      var storeStub = _ember['default'].Service.extend({
        createRecord: function createRecord() {
          var createRecordArgs = arguments;
          return Object.create({
            save: function save() {
              isSaveMethodCalled = true;
              saveMethodUrl = createRecordArgs[0];
              saveMethodBody = createRecordArgs[1];
              return _ember['default'].RSVP.resolve();
            }
          });
        }
      });

      beforeEach(function () {
        this.render(_ember['default'].HTMLBars.template({
          'id': 'O9xGjXjO',
          'block': '{"statements":[["append",["unknown",["follower-form"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));

        // stub store service
        this.register('service:store', storeStub);
        this.inject.service('store', { as: 'store' });

        isSaveMethodCalled = false;
        saveMethodBody = null;
        saveMethodUrl = null;
      });

      (0, _mocha.it)('clicking on "send" button should save the email of the follower', function () {
        // given
        var EMAIL_VALUE = 'myemail@gemail.com';
        var $email = this.$(INPUT_EMAIL);
        $email.val(EMAIL_VALUE);
        $email.change();

        // when
        (0, _chai.expect)(this.$(BUTTON_SEND).length).to.equal(1);
        (0, _chai.expect)(this.$(INPUT_EMAIL).length).to.equal(1);
        this.$(BUTTON_SEND).click();

        // then
        return (0, _emberTestHelpersWait['default'])().then(function () {
          (0, _chai.expect)(isSaveMethodCalled).to.be['true'];
          (0, _chai.expect)(saveMethodUrl).to.equal('follower');
          (0, _chai.expect)(saveMethodBody).to.deep.equal({ email: 'myemail@gemail.com' });
        });
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
define('pix-live/tests/integration/components/navbar-header-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Integration | Component | navbar-header', function () {

    (0, _emberMocha.setupComponentTest)('header-navbar', {
      integration: true
    });

    (0, _mocha.beforeEach)(function () {
      this.render(Ember.HTMLBars.template({
        'id': 'jsAxs+PS',
        'block': '{"statements":[["append",["unknown",["navbar-header"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
        'meta': {}
      }));
    });

    (0, _mocha.it)('renders', function () {
      (0, _chai.expect)(this.$()).to.have.length(1);
    });

    (0, _mocha.it)('should display the Pix logo', function () {
      (0, _chai.expect)(this.$('.navbar-header-logo')).to.have.lengthOf(1);
      (0, _chai.expect)(this.$('.pix-logo')).to.have.lengthOf(1);
    });

    (0, _mocha.it)('should display a link to "project" page', function () {
      (0, _chai.expect)(this.$('.navbar-header-links__link--project')).to.have.lengthOf(1);
    });
  });
});
define('pix-live/tests/integration/components/navbar-header-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - integration/components/navbar-header-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/integration/components/pix-logo-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Integration | Component | pix logo', function () {

    (0, _emberMocha.setupComponentTest)('pix-logo', {
      integration: true
    });

    (0, _mocha.beforeEach)(function () {
      this.render(Ember.HTMLBars.template({
        'id': 'MtdoQIJl',
        'block': '{"statements":[["append",["unknown",["pix-logo"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
        'meta': {}
      }));
    });

    (0, _mocha.it)('renders', function () {
      (0, _chai.expect)(this.$()).to.have.lengthOf(1);
    });

    (0, _mocha.it)('should display the logo', function () {
      (0, _chai.expect)(this.$('.pix-logo__image').attr('src')).to.equal('images/pix-logo.svg');
    });

    (0, _mocha.it)('should display "béta"', function () {
      (0, _chai.expect)(this.$().text().trim()).to.equal('Béta');
    });
  });
});
define('pix-live/tests/integration/components/pix-logo-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - integration/components/pix-logo-test.js', function () {
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
define('pix-live/tests/integration/components/qcm-solution-panel-test', ['exports', 'chai', 'mocha', 'ember-mocha', 'ember', 'pix-live/utils/lodash-custom'], function (exports, _chai, _mocha, _emberMocha, _ember, _pixLiveUtilsLodashCustom) {

  var CHECKBOX_CORRECT_AND_CHECKED = '.qcm-proposal-label__checkbox-picture:eq(1)';
  var LABEL_CORRECT_AND_CHECKED = '.qcm-proposal-label__oracle:eq(1)';

  var CHECKBOX_CORRECT_AND_UNCHECKED = '.qcm-proposal-label__checkbox-picture:eq(2)';
  var LABEL_CORRECT_AND_UNCHECKED = '.qcm-proposal-label__oracle:eq(2)';

  var CHECKBOX_INCORRECT_AND_CHECKED = '.qcm-proposal-label__checkbox-picture:eq(0)';
  var CHECKBOX_INCORRECT_AND_CHECKED_SECOND = '.qcm-proposal-label__checkbox-picture:eq(3)';
  var LABEL_INCORRECT_AND_CHECKED = '.qcm-proposal-label__oracle:eq(0)';

  var CHECKBOX_INCORRECT_AND_UNCHECKED = '.qcm-proposal-label__checkbox-picture:eq(0)';
  var LABEL_INCORRECT_AND_UNCHECKED = '.qcm-proposal-label__oracle:eq(0)';

  var CSS_BOLD_FONT_WEIGHT = '900';
  var CSS_NORMAL_FONT_WEIGHT = '400';

  var CSS_GREEN_COLOR = 'rgb(19, 201, 160)';
  var CSS_BLACK_COLOR = 'rgb(51, 51, 51)';

  var CSS_LINETHROUGH_ON = 'line-through';
  var CSS_LINETHROUGH_OFF = 'none';

  var assessment = {};
  var challenge = null;
  var answer = null;
  var solution = null;

  function charCount(str) {
    return str.match(/[a-zA-Z]/g).length;
  }

  (0, _mocha.describe)('Integration | Component | qcm-solution-panel.js', function () {
    (0, _emberMocha.setupComponentTest)('qcm-solution-panel', {
      integration: true
    });

    (0, _mocha.describe)('#Component should renders: ', function () {

      (0, _mocha.it)('Should renders', function () {
        this.render(_ember['default'].HTMLBars.template({
          'id': 'tl+2p2hY',
          'block': '{"statements":[["append",["unknown",["qcm-solution-panel"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));
        (0, _chai.expect)(this.$()).to.have.length(1);
        (0, _chai.expect)($(LABEL_CORRECT_AND_CHECKED)).to.have.lengthOf(0);
      });

      (0, _mocha.describe)('checkbox state', function () {
        var correctAnswer = {
          id: 'answer_id', assessment: assessment, challenge: challenge, value: '2,4'
        };

        var unCorrectAnswer = {
          id: 'answer_id', assessment: assessment, challenge: challenge, value: '1,4'
        };

        before(function () {
          challenge = _ember['default'].Object.create({
            id: 'challenge_id',
            proposals: '-foo\n- bar\n- qix\n- yon',
            type: 'QCM'
          });

          solution = _ember['default'].Object.create({
            id: 'solution_id', value: '2,3'
          });

          answer = _ember['default'].Object.create(correctAnswer);
        });

        (0, _mocha.it)('QCM, la réponse correcte est cochée', function () {
          //Given
          this.set('answer', answer);
          this.set('solution', solution);
          this.set('challenge', challenge);
          // When
          this.render(_ember['default'].HTMLBars.template({
            'id': 'g45K7pGO',
            'block': '{"statements":[["append",["helper",["qcm-solution-panel"],null,[["challenge","answer","solution"],[["get",["challenge"]],["get",["answer"]],["get",["solution"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
            'meta': {}
          }));

          // Then
          (0, _chai.expect)($(LABEL_CORRECT_AND_CHECKED)).to.have.lengthOf(1);
          (0, _chai.expect)($(CHECKBOX_CORRECT_AND_CHECKED)).to.have.lengthOf(1);

          (0, _chai.expect)($(CHECKBOX_CORRECT_AND_CHECKED).hasClass('checkbox-disabled-on')).to.equal(true);
          (0, _chai.expect)(charCount($(LABEL_CORRECT_AND_CHECKED).text())).to.be.above(0);
          (0, _chai.expect)($(LABEL_CORRECT_AND_CHECKED).css('font-weight')).to.equal(CSS_BOLD_FONT_WEIGHT);
          (0, _chai.expect)($(LABEL_CORRECT_AND_CHECKED).css('color')).to.equal(CSS_GREEN_COLOR);
          (0, _chai.expect)($(LABEL_CORRECT_AND_CHECKED).css('text-decoration')).to.equal(CSS_LINETHROUGH_OFF);
        });

        (0, _mocha.it)('QCM, aucune réponse incorrecte n\'est cochée', function () {
          //Given
          this.set('answer', answer);
          this.set('solution', solution);
          this.set('challenge', challenge);

          // When
          this.render(_ember['default'].HTMLBars.template({
            'id': 'g45K7pGO',
            'block': '{"statements":[["append",["helper",["qcm-solution-panel"],null,[["challenge","answer","solution"],[["get",["challenge"]],["get",["answer"]],["get",["solution"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
            'meta': {}
          }));

          // Then
          (0, _chai.expect)($(CHECKBOX_INCORRECT_AND_UNCHECKED).hasClass('checkbox-disabled-on')).to.equal(false);
          (0, _chai.expect)(charCount($(LABEL_INCORRECT_AND_UNCHECKED).text())).to.be.above(0);
          (0, _chai.expect)($(LABEL_INCORRECT_AND_UNCHECKED).css('font-weight')).to.equal(CSS_NORMAL_FONT_WEIGHT);
          (0, _chai.expect)($(LABEL_INCORRECT_AND_UNCHECKED).css('color')).to.equal(CSS_BLACK_COLOR);
          (0, _chai.expect)($(LABEL_INCORRECT_AND_UNCHECKED).css('text-decoration')).to.equal(CSS_LINETHROUGH_OFF);
        });

        (0, _mocha.it)('QCM, Au moins l\'une des réponse correcte n\'est pas cochée', function () {
          //Given
          this.set('answer', answer);
          this.set('solution', solution);
          this.set('challenge', challenge);

          // When
          this.render(_ember['default'].HTMLBars.template({
            'id': 'g45K7pGO',
            'block': '{"statements":[["append",["helper",["qcm-solution-panel"],null,[["challenge","answer","solution"],[["get",["challenge"]],["get",["answer"]],["get",["solution"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
            'meta': {}
          }));

          // Then
          (0, _chai.expect)($(CHECKBOX_CORRECT_AND_UNCHECKED).hasClass('checkbox-disabled-on')).to.equal(false);
          (0, _chai.expect)(charCount($(LABEL_CORRECT_AND_UNCHECKED).text())).to.be.above(0);
          (0, _chai.expect)($(LABEL_CORRECT_AND_UNCHECKED).css('font-weight')).to.equal(CSS_BOLD_FONT_WEIGHT);
          (0, _chai.expect)($(LABEL_CORRECT_AND_UNCHECKED).css('color')).to.equal(CSS_GREEN_COLOR);
          (0, _chai.expect)($(LABEL_CORRECT_AND_UNCHECKED).css('text-decoration')).to.equal(CSS_LINETHROUGH_OFF);
        });

        (0, _mocha.it)('QCM, au moins l\'une des réponse incorrecte est cochée', function () {
          //Given
          answer = _ember['default'].Object.create(unCorrectAnswer);

          this.set('answer', answer);
          this.set('solution', solution);
          this.set('challenge', challenge);

          // When
          this.render(_ember['default'].HTMLBars.template({
            'id': 'g45K7pGO',
            'block': '{"statements":[["append",["helper",["qcm-solution-panel"],null,[["challenge","answer","solution"],[["get",["challenge"]],["get",["answer"]],["get",["solution"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
            'meta': {}
          }));

          // Then
          (0, _chai.expect)($(CHECKBOX_INCORRECT_AND_CHECKED).hasClass('checkbox-disabled-on')).to.equal(true);
          (0, _chai.expect)($(CHECKBOX_INCORRECT_AND_CHECKED_SECOND).hasClass('checkbox-disabled-on')).to.equal(true);
          (0, _chai.expect)($(CHECKBOX_CORRECT_AND_UNCHECKED).is(':checked')).to.equal(false);
          (0, _chai.expect)(charCount($(LABEL_INCORRECT_AND_CHECKED).text())).to.be.above(0);
          (0, _chai.expect)($(LABEL_INCORRECT_AND_CHECKED).css('font-weight')).to.equal(CSS_NORMAL_FONT_WEIGHT);
          (0, _chai.expect)($(LABEL_INCORRECT_AND_CHECKED).css('color')).to.equal(CSS_BLACK_COLOR);
          (0, _chai.expect)($(LABEL_INCORRECT_AND_CHECKED).css('text-decoration')).to.equal(CSS_LINETHROUGH_ON);
        });

        (0, _mocha.it)('Aucune case à cocher n\'est cliquable', function () {
          //Given
          this.set('answer', answer);
          this.set('solution', solution);
          this.set('challenge', challenge);

          // When
          this.render(_ember['default'].HTMLBars.template({
            'id': 'g45K7pGO',
            'block': '{"statements":[["append",["helper",["qcm-solution-panel"],null,[["challenge","answer","solution"],[["get",["challenge"]],["get",["answer"]],["get",["solution"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
            'meta': {}
          }));

          // Then
          var size = $('.comparison-window .qcm-proposal-label__checkbox-picture').length;
          _pixLiveUtilsLodashCustom['default'].times(size, function (index) {
            (0, _chai.expect)($('.comparison-window .qcm-proposal-label__checkbox-picture:eq(' + index + ')').is(':disabled')).to.equal(true);
          });
        });
      });
    });
  });
});
define('pix-live/tests/integration/components/qcm-solution-panel-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - integration/components/qcm-solution-panel-test.js', function () {
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
        (0, _chai.expect)(this.$('.proposal-text')).to.have.lengthOf(proposals.length);
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
define('pix-live/tests/integration/components/qcu-solution-panel-test', ['exports', 'chai', 'mocha', 'ember-mocha', 'ember', 'pix-live/utils/lodash-custom'], function (exports, _chai, _mocha, _emberMocha, _ember, _pixLiveUtilsLodashCustom) {

  var RADIO_CORRECT_AND_CHECKED = '.picture-radio-proposal--qcu:eq(1)';
  var LABEL_CORRECT_AND_CHECKED = '.qcu-proposal-label__oracle:eq(1)';

  var LABEL_CORRECT_AND_UNCHECKED = '.qcu-proposal-label__oracle:eq(1)';

  var RADIO_INCORRECT_AND_CHECKED = '.picture-radio-proposal--qcu:eq(2)';
  var LABEL_INCORRECT_AND_CHECKED = '.qcu-proposal-label__oracle:eq(2)';

  var RADIO_INCORRECT_AND_UNCHECKED = '.picture-radio-proposal--qcu:eq(0)';
  var LABEL_INCORRECT_AND_UNCHECKED = '.qcu-proposal-label__oracle:eq(0)';

  var CSS_BOLD_FONT_WEIGHT = '900';
  var CSS_NORMAL_FONT_WEIGHT = '400';

  var CSS_GREEN_COLOR = 'rgb(19, 201, 160)';
  var CSS_BLACK_COLOR = 'rgb(51, 51, 51)';

  var CSS_LINETHROUGH_ON = 'line-through';
  var CSS_LINETHROUGH_OFF = 'none';

  var assessment = {};
  var challenge = null;
  var answer = null;
  var solution = null;

  function charCount(str) {
    return str.match(/[a-zA-Z]/g).length;
  }

  (0, _mocha.describe)('Integration | Component | qcu-solution-panel.js', function () {
    (0, _emberMocha.setupComponentTest)('qcu-solution-panel', {
      integration: true
    });

    var correctAnswer = {
      id: 'answer_id', assessment: assessment, challenge: challenge, value: '2'
    };

    var unCorrectAnswer = {
      id: 'answer_id', assessment: assessment, challenge: challenge, value: '3'
    };

    (0, _mocha.describe)('#Component should renders: ', function () {

      (0, _mocha.it)('Should renders', function () {
        this.render(_ember['default'].HTMLBars.template({
          'id': 'h5StfS3D',
          'block': '{"statements":[["append",["unknown",["qcu-solution-panel"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));
        (0, _chai.expect)(this.$()).to.have.length(1);
        (0, _chai.expect)($(LABEL_CORRECT_AND_CHECKED)).to.have.lengthOf(0);
      });

      (0, _mocha.describe)('Radio state', function () {

        before(function () {
          challenge = _ember['default'].Object.create({
            id: 'challenge_id',
            proposals: '-foo\n- bar\n- qix\n- yon',
            type: 'QCM'
          });

          solution = _ember['default'].Object.create({
            id: 'solution_id', value: '2'
          });

          answer = _ember['default'].Object.create(correctAnswer);
        });

        (0, _mocha.it)('QCU,la réponse correcte est cochée', function () {
          //Given
          this.set('answer', answer);
          this.set('solution', solution);
          this.set('challenge', challenge);
          // When
          this.render(_ember['default'].HTMLBars.template({
            'id': '5mvqj82b',
            'block': '{"statements":[["append",["helper",["qcu-solution-panel"],null,[["challenge","answer","solution"],[["get",["challenge"]],["get",["answer"]],["get",["solution"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
            'meta': {}
          }));

          // Then
          (0, _chai.expect)($(LABEL_CORRECT_AND_CHECKED)).to.have.lengthOf(1);
          (0, _chai.expect)($(RADIO_CORRECT_AND_CHECKED)).to.have.lengthOf(1);

          (0, _chai.expect)($(RADIO_CORRECT_AND_CHECKED).hasClass('radio-on')).to.equal(true);
          (0, _chai.expect)(charCount($(LABEL_CORRECT_AND_CHECKED).text())).to.be.above(0);
          (0, _chai.expect)($(LABEL_CORRECT_AND_CHECKED).css('font-weight')).to.equal(CSS_BOLD_FONT_WEIGHT);
          (0, _chai.expect)($(LABEL_CORRECT_AND_CHECKED).css('color')).to.equal(CSS_GREEN_COLOR);
          (0, _chai.expect)($(LABEL_CORRECT_AND_CHECKED).css('text-decoration')).to.equal(CSS_LINETHROUGH_OFF);
        });

        (0, _mocha.it)('QCU, la réponse correcte n\'est pas cochée', function () {
          //Given
          answer = _ember['default'].Object.create(unCorrectAnswer);

          this.set('answer', answer);
          this.set('solution', solution);
          this.set('challenge', challenge);

          // When
          this.render(_ember['default'].HTMLBars.template({
            'id': '5mvqj82b',
            'block': '{"statements":[["append",["helper",["qcu-solution-panel"],null,[["challenge","answer","solution"],[["get",["challenge"]],["get",["answer"]],["get",["solution"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
            'meta': {}
          }));

          // Then
          (0, _chai.expect)($(RADIO_CORRECT_AND_CHECKED).hasClass('radio-off')).to.equal(true);

          (0, _chai.expect)(charCount($(LABEL_CORRECT_AND_UNCHECKED).text())).to.be.above(0);
          (0, _chai.expect)($(LABEL_CORRECT_AND_UNCHECKED).css('font-weight')).to.equal(CSS_BOLD_FONT_WEIGHT);
          (0, _chai.expect)($(LABEL_CORRECT_AND_UNCHECKED).css('color')).to.equal(CSS_GREEN_COLOR);
          (0, _chai.expect)($(LABEL_CORRECT_AND_UNCHECKED).css('text-decoration')).to.equal(CSS_LINETHROUGH_OFF);
        });

        (0, _mocha.it)('QCU, la réponse incorrecte n\'est pas cochée', function () {
          //Given
          this.set('answer', answer);
          this.set('solution', solution);
          this.set('challenge', challenge);

          // When
          this.render(_ember['default'].HTMLBars.template({
            'id': '5mvqj82b',
            'block': '{"statements":[["append",["helper",["qcu-solution-panel"],null,[["challenge","answer","solution"],[["get",["challenge"]],["get",["answer"]],["get",["solution"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
            'meta': {}
          }));

          // Then
          (0, _chai.expect)($(RADIO_INCORRECT_AND_UNCHECKED).hasClass('radio-off')).to.equal(true);
          (0, _chai.expect)(charCount($(LABEL_INCORRECT_AND_UNCHECKED).text())).to.be.above(0);
          (0, _chai.expect)($(LABEL_INCORRECT_AND_UNCHECKED).css('font-weight')).to.equal(CSS_NORMAL_FONT_WEIGHT);
          (0, _chai.expect)($(LABEL_INCORRECT_AND_UNCHECKED).css('color')).to.equal(CSS_BLACK_COLOR);
          (0, _chai.expect)($(LABEL_INCORRECT_AND_UNCHECKED).css('text-decoration')).to.equal(CSS_LINETHROUGH_OFF);
        });

        (0, _mocha.it)('QCU,la réponse incorrecte est cochée', function () {
          //Given
          answer = _ember['default'].Object.create(unCorrectAnswer);

          this.set('answer', answer);
          this.set('solution', solution);
          this.set('challenge', challenge);

          // When
          this.render(_ember['default'].HTMLBars.template({
            'id': '5mvqj82b',
            'block': '{"statements":[["append",["helper",["qcu-solution-panel"],null,[["challenge","answer","solution"],[["get",["challenge"]],["get",["answer"]],["get",["solution"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
            'meta': {}
          }));

          // Then
          (0, _chai.expect)($(RADIO_INCORRECT_AND_CHECKED).hasClass('radio-on')).to.equal(true);
          (0, _chai.expect)(charCount($(LABEL_INCORRECT_AND_CHECKED).text())).to.be.above(0);
          (0, _chai.expect)($(LABEL_INCORRECT_AND_CHECKED).css('font-weight')).to.equal(CSS_NORMAL_FONT_WEIGHT);
          (0, _chai.expect)($(LABEL_INCORRECT_AND_CHECKED).css('color')).to.equal(CSS_BLACK_COLOR);
          (0, _chai.expect)($(LABEL_INCORRECT_AND_CHECKED).css('text-decoration')).to.equal(CSS_LINETHROUGH_ON);
        });

        (0, _mocha.it)('Aucune case à cocher n\'est cliquable', function () {
          //Given
          this.set('answer', answer);
          this.set('solution', solution);
          this.set('challenge', challenge);

          // When
          this.render(_ember['default'].HTMLBars.template({
            'id': '5mvqj82b',
            'block': '{"statements":[["append",["helper",["qcu-solution-panel"],null,[["challenge","answer","solution"],[["get",["challenge"]],["get",["answer"]],["get",["solution"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
            'meta': {}
          }));

          // Then
          var size = $('.comparison-window .qcu-panel__proposal-radio').length;
          _pixLiveUtilsLodashCustom['default'].times(size, function (index) {
            (0, _chai.expect)($('.comparison-window .qcu-panel__proposal-radio:eq(' + index + ')').is(':disabled')).to.equal(true);
          });
        });
      });
    });
  });
});
define('pix-live/tests/integration/components/qcu-solution-panel-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - integration/components/qcu-solution-panel-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/integration/components/qroc-proposal-test', ['exports', 'ember', 'chai', 'mocha', 'ember-mocha'], function (exports, _ember, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Integration | Component | QrocProposal', function () {

    (0, _emberMocha.setupComponentTest)('qroc-proposal', {
      integration: true
    });

    beforeEach(function () {
      var block = [];
      block.push(_ember['default'].Object.create({ name: 'myInput', input: 'mylabel' }));
      this.set('blocks', block);
    });

    (0, _mocha.describe)('Component behavior when user fill input of challenge:', function () {

      (0, _mocha.it)('renders', function () {
        this.render(_ember['default'].HTMLBars.template({
          'id': '1i/FB0iM',
          'block': '{"statements":[["append",["unknown",["qroc-proposal"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));
        (0, _chai.expect)(this.$()).to.have.length(1);
      });

      (0, _mocha.it)('should display a value when a non-empty value is providing by user', function () {
        // given
        this.set('answerValue', 'myValue');
        // when
        this.render(_ember['default'].HTMLBars.template({
          'id': 'kJs1JVvn',
          'block': '{"statements":[["append",["helper",["qroc-proposal"],null,[["blocks","answerValue"],[["get",["blocks"]],["get",["answerValue"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));
        // then
        (0, _chai.expect)(this.$('.challenge-response__proposal-input').val()).to.be.equal('myValue');
      });
    });

    (0, _mocha.describe)('Component behavior when user skip challenge:', function () {

      [{ input: 'aband', output: 'aband' }, { input: '#aband#', output: '#aband#' }, { input: 'aband#', output: 'aband#' }, { input: 'ABAND', output: 'ABAND' }, { input: '#ABAND', output: '#ABAND' }, { input: 'ABAND#', output: 'ABAND#' }, { input: '#ABAND#', output: '' }, { input: '', output: '' }].forEach(function (_ref) {
        var input = _ref.input;
        var output = _ref.output;

        (0, _mocha.it)('should display \'\' value ' + input + ' is providing to component', function () {
          // given
          this.set('answerValue', input);
          // when
          this.render(_ember['default'].HTMLBars.template({
            'id': 'kJs1JVvn',
            'block': '{"statements":[["append",["helper",["qroc-proposal"],null,[["blocks","answerValue"],[["get",["blocks"]],["get",["answerValue"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
            'meta': {}
          }));
          // then
          (0, _chai.expect)(this.$('.challenge-response__proposal-input').val()).to.be.equal(output);
        });
      });
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
define('pix-live/tests/integration/components/qroc-solution-panel-test', ['exports', 'chai', 'mocha', 'ember-mocha', 'ember'], function (exports, _chai, _mocha, _emberMocha, _ember) {

  var ANSWER_BLOCK = '.correction-qroc-box__answer';
  var ANSWER_INPUT = '.correction-qroc-box--answer__input';
  var SOLUTION_BLOCK = '.correction-qroc-box__solution';
  var SOLUTION_DISPLAY = '.correction-qroc-box__solution-text';

  var RIGHT_ANSWER_GREEN = 'rgb(19, 201, 160)';
  var NO_ANSWER_GREY = 'rgb(62, 65, 73)';

  (0, _mocha.describe)('Integration | Component | qroc solution panel', function () {
    (0, _emberMocha.setupComponentTest)('qroc-solution-panel', {
      integration: true
    });

    (0, _mocha.it)('renders', function () {
      this.render(_ember['default'].HTMLBars.template({
        'id': 'd0K2Guv4',
        'block': '{"statements":[["append",["unknown",["qroc-solution-panel"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
        'meta': {}
      }));
      (0, _chai.expect)(this.$()).to.have.lengthOf(1);
    });

    (0, _mocha.it)('should disabled all inputs', function () {
      // when
      this.render(_ember['default'].HTMLBars.template({
        'id': 'd0K2Guv4',
        'block': '{"statements":[["append",["unknown",["qroc-solution-panel"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
        'meta': {}
      }));
      // then
      var input = this.$('input');
      (0, _chai.expect)(input).to.be.disabled;
    });

    (0, _mocha.describe)('comparison when the answer is right', function () {

      var assessment = _ember['default'].Object.extend({ id: 'assessment_id' }).create();
      var challenge = _ember['default'].Object.extend({ id: 'challenge_id' }).create();
      var answer = _ember['default'].Object.extend({ id: 'answer_id', isResultOk: true, assessment: assessment, challenge: challenge }).create();

      (0, _mocha.it)('should diplay the answer in bold green and not the solution', function () {
        // given
        this.set('answer', answer);
        this.render(_ember['default'].HTMLBars.template({
          'id': 'wYkLQEux',
          'block': '{"statements":[["append",["helper",["qroc-solution-panel"],null,[["answer"],[["get",["answer"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));
        // when
        var answerInput = this.$(ANSWER_INPUT);
        var answerBlock = this.$(ANSWER_BLOCK);
        var solutionBlock = this.$(SOLUTION_BLOCK);
        // then
        (0, _chai.expect)(answerInput).to.have.lengthOf(1);
        (0, _chai.expect)(answerBlock).to.have.lengthOf(1);
        (0, _chai.expect)(answerInput.css('font-weight')).to.be.equal('bold');
        (0, _chai.expect)(answerInput.css('text-decoration')).to.be.equal('none');
        (0, _chai.expect)(answerInput.css('color')).to.be.equal(RIGHT_ANSWER_GREEN);
        (0, _chai.expect)(solutionBlock).to.have.lengthOf(0);
      });
    });

    (0, _mocha.describe)('comparison when the answer is false', function () {

      (0, _mocha.beforeEach)(function () {
        var assessment = _ember['default'].Object.extend({ id: 'assessment_id' }).create();
        var challenge = _ember['default'].Object.extend({ id: 'challenge_id' }).create();
        var answer = _ember['default'].Object.extend({ id: 'answer_id', isResultNotOk: true, assessment: assessment, challenge: challenge }).create();

        this.set('answer', answer);
        this.render(_ember['default'].HTMLBars.template({
          'id': 'wYkLQEux',
          'block': '{"statements":[["append",["helper",["qroc-solution-panel"],null,[["answer"],[["get",["answer"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));
      });

      (0, _mocha.it)('should display the false answer line-through', function () {
        // given
        var answerBlock = this.$(ANSWER_BLOCK);
        var answerInput = this.$(ANSWER_INPUT);
        // then
        (0, _chai.expect)(answerBlock).to.have.lengthOf(1);
        (0, _chai.expect)(answerInput.css('font-weight')).to.be.equal('400');
        (0, _chai.expect)(answerInput.css('text-decoration')).to.be.equal('line-through');
      });

      (0, _mocha.it)('should display the solution with a arrow and the solution in bold green', function () {
        // given
        var blockSolution = this.$(SOLUTION_BLOCK);
        var blockSolutionText = this.$(SOLUTION_DISPLAY);
        // then
        (0, _chai.expect)(blockSolution).to.have.lengthOf(1);
        (0, _chai.expect)(blockSolutionText.css('color')).to.be.equal(RIGHT_ANSWER_GREEN);
        (0, _chai.expect)(blockSolutionText.css('font-weight')).to.be.equal('bold');
      });

      (0, _mocha.describe)('comparison when the answer was not given', function () {

        (0, _mocha.beforeEach)(function () {
          var assessment = _ember['default'].Object.extend({ id: 'assessment_id' }).create();
          var challenge = _ember['default'].Object.extend({ id: 'challenge_id' }).create();
          var answer = _ember['default'].Object.extend({ id: 'answer_id', isResultWithoutAnswer: true, assessment: assessment, challenge: challenge }).create();

          this.set('answer', answer);
          this.render(_ember['default'].HTMLBars.template({
            'id': 'wYkLQEux',
            'block': '{"statements":[["append",["helper",["qroc-solution-panel"],null,[["answer"],[["get",["answer"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
            'meta': {}
          }));
        });

        (0, _mocha.it)('should display PAS DE REPONSE in italic', function () {
          // given
          var answerBlock = this.$(ANSWER_BLOCK);
          var answerInput = this.$(ANSWER_INPUT);
          // then
          (0, _chai.expect)(answerBlock).to.have.lengthOf(1);
          (0, _chai.expect)(answerInput.css('font-style')).to.be.equal('italic');
          (0, _chai.expect)(answerInput.css('color')).to.be.equal(NO_ANSWER_GREY);
        });
      });
    });
  });
});
define('pix-live/tests/integration/components/qroc-solution-panel-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - integration/components/qroc-solution-panel-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/integration/components/qrocm-proposal-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Integration | Component | QrocmProposalComponent', function () {

    (0, _emberMocha.setupComponentTest)('qrocm-proposal', {
      integration: true
    });

    (0, _mocha.it)('renders', function () {
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
define('pix-live/tests/integration/components/result-item-test', ['exports', 'chai', 'ember', 'mocha', 'ember-mocha'], function (exports, _chai, _ember, _mocha, _emberMocha) {

  var providedChallengeInstruction = 'Un QCM propose plusieurs choix, l\'utilisateur peut en choisir [plusieurs](http://link.plusieurs.url)';

  var emberChallengeObject = _ember['default'].Object.create({
    type: 'QCM',
    instruction: providedChallengeInstruction,
    proposals: '- soit possibilite A, et/ou' + '\n - soit possibilite B, et/ou' + '\n - soit possibilite C, et/ou' + '\n - soit possibilite D'
  });

  var answer = _ember['default'].Object.create({
    value: '2,4',
    result: 'ko',
    id: 1,
    challenge: emberChallengeObject,
    assessment: {
      id: 4
    }
  });

  var expectedPath = 'M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z';

  var expectedChallengeInstruction = 'Un QCM propose plusieurs choix, l\'utilisateur peut en choisir plusieur...';

  (0, _mocha.describe)('Integration | Component | result item', function () {

    (0, _emberMocha.setupComponentTest)('result-item', {
      integration: true
    });

    (0, _mocha.describe)('Component rendering ', function () {

      (0, _mocha.beforeEach)(function () {
        this.set('index', 0);
      });

      (0, _mocha.it)('should exist', function () {
        // given
        this.set('answer', '');

        // when
        this.render(_ember['default'].HTMLBars.template({
          'id': '04QDXBQ+',
          'block': '{"statements":[["append",["helper",["result-item"],null,[["answer","index"],[["get",["answer"]],["get",["index"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));

        // then
        (0, _chai.expect)(this.$()).to.have.length(1);
      });

      (0, _mocha.it)('component render an index 1 when 0 provided', function () {
        // given
        this.set('answer', '');

        // when
        this.render(_ember['default'].HTMLBars.template({
          'id': '04QDXBQ+',
          'block': '{"statements":[["append",["helper",["result-item"],null,[["answer","index"],[["get",["answer"]],["get",["index"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));

        // then
        var index = this.$('.result-item__index').text();
        (0, _chai.expect)(index.trim().replace('\n', '')).to.equal('1');
      });

      (0, _mocha.it)('component render an instruction with no empty content', function () {
        // given
        this.set('answer', '');

        // when
        this.render(_ember['default'].HTMLBars.template({
          'id': '04QDXBQ+',
          'block': '{"statements":[["append",["helper",["result-item"],null,[["answer","index"],[["get",["answer"]],["get",["index"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));

        // then
        (0, _chai.expect)(this.$('.result-item__instruction')).to.have.lengthOf(1);
        (0, _chai.expect)(this.$('.result-item__instruction').text()).to.contain('\n');
      });

      (0, _mocha.it)('component render an instruction which contain ' + expectedChallengeInstruction, function () {
        // given
        this.set('answer', answer);

        // when
        this.render(_ember['default'].HTMLBars.template({
          'id': '04QDXBQ+',
          'block': '{"statements":[["append",["helper",["result-item"],null,[["answer","index"],[["get",["answer"]],["get",["index"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));

        // then
        (0, _chai.expect)(this.$('.result-item__instruction').text().trim()).to.equal(expectedChallengeInstruction);
      });

      (0, _mocha.it)('component render an button when QCM', function () {
        // given
        this.set('answer', answer);

        this.render(_ember['default'].HTMLBars.template({
          'id': '04QDXBQ+',
          'block': '{"statements":[["append",["helper",["result-item"],null,[["answer","index"],[["get",["answer"]],["get",["index"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));
        // Then
        (0, _chai.expect)(this.$('.result-item__correction__button').text().trim()).to.deep.equal('RÉPONSE');
      });

      (0, _mocha.it)('component render tooltip with title Réponse incorrecte', function () {
        // given
        this.set('answer', answer);

        // when
        this.render(_ember['default'].HTMLBars.template({
          'id': '04QDXBQ+',
          'block': '{"statements":[["append",["helper",["result-item"],null,[["answer","index"],[["get",["answer"]],["get",["index"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));

        // then
        (0, _chai.expect)(this.$('div[data-toggle="tooltip"]').attr('title').trim()).to.equal('Réponse incorrecte');
      });

      (0, _mocha.it)('component render tooltip with svg', function () {
        // given
        this.set('answer', answer);

        // when
        this.render(_ember['default'].HTMLBars.template({
          'id': '04QDXBQ+',
          'block': '{"statements":[["append",["helper",["result-item"],null,[["answer","index"],[["get",["answer"]],["get",["index"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));

        // Then
        (0, _chai.expect)(this.$('svg path').attr('d')).to.equal(expectedPath);
        (0, _chai.expect)(this.$('svg path').attr('fill')).to.equal('#ff4600');
      });
    });
  });
});
define('pix-live/tests/integration/components/result-item-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - integration/components/result-item-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/integration/components/timeout-jauge-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Integration | Component | TimeoutJauge', function () {

    (0, _emberMocha.setupComponentTest)('timeout-jauge', {
      integration: true
    });

    /* Rendering
    ----------------------------------------------------- */
    (0, _mocha.describe)('Rendering', function () {
      (0, _mocha.it)('It renders', function () {
        // when
        this.render(Ember.HTMLBars.template({
          'id': 'OXRSqSZy',
          'block': '{"statements":[["append",["unknown",["timeout-jauge"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));

        // then
        (0, _chai.expect)(this.$('.timeout-jauge')).to.have.lengthOf(1);
      });

      (0, _mocha.it)('It renders a red clock if time is over', function () {
        // when
        this.render(Ember.HTMLBars.template({
          'id': 'mKkmjVMa',
          'block': '{"statements":[["append",["helper",["timeout-jauge"],null,[["allotedTime"],[0]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));

        // then
        (0, _chai.expect)(this.$('.svg-timeout-clock-black')).to.have.lengthOf(0);
        (0, _chai.expect)(this.$('.svg-timeout-clock-red')).to.have.lengthOf(1);
      });

      (0, _mocha.it)('It renders a black clock if time is not over', function () {
        // when
        this.render(Ember.HTMLBars.template({
          'id': 'KUzLMFLz',
          'block': '{"statements":[["append",["helper",["timeout-jauge"],null,[["allotedTime"],[1]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
          'meta': {}
        }));

        // then
        (0, _chai.expect)(this.$('.svg-timeout-clock-red')).to.have.lengthOf(0);
        (0, _chai.expect)(this.$('.svg-timeout-clock-black')).to.have.lengthOf(1);
      });
    });
  });
});
define('pix-live/tests/integration/components/timeout-jauge-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - integration/components/timeout-jauge-test.js', function () {
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
define('pix-live/tests/models/feedback.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - models/feedback.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/models/follower.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - models/follower.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/models/solution.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - models/solution.js', function () {
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
define('pix-live/tests/routes/assessments/get-comparison.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - routes/assessments/get-comparison.js', function () {
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
define('pix-live/tests/routes/courses.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - routes/courses.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/routes/courses/create-assessment-old.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - routes/courses/create-assessment-old.js', function () {
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
define('pix-live/tests/unit/adapters/solution-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Unit | Adapters | solution', function () {

    (0, _emberMocha.setupTest)('adapter:solution', {});

    (0, _mocha.it)('exists', function () {
      var adapter = this.subject();
      (0, _chai.expect)(adapter).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/adapters/solution-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/adapters/solution-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/components/comparison-window-test', ['exports', 'ember', 'chai', 'mocha', 'ember-mocha'], function (exports, _ember, _chai, _mocha, _emberMocha) {

  function _assertResultItemTitle(resultItem, expected) {
    (0, _chai.expect)(resultItem.title).to.equal(expected);
  }

  function _assertResultItemTooltip(resultItem, expected) {
    (0, _chai.expect)(resultItem.titleTooltip).to.equal(expected);
  }

  (0, _mocha.describe)('Unit | Component | comparison window', function () {

    (0, _emberMocha.setupTest)('component:comparison-window', {});

    var component = undefined;
    var answer = undefined;
    var resultItem = undefined;

    (0, _mocha.beforeEach)(function () {
      component = this.subject();
      answer = _ember['default'].Object.create();
      component.set('answer', answer);
    });

    (0, _mocha.describe)('#resultItem', function () {

      (0, _mocha.it)('should return adapted title and tooltip when validation is unavailable (i.e. empty)', function () {
        // given
        answer.set('result', '');

        // when
        resultItem = component.get('resultItem');

        // then
        _assertResultItemTitle(resultItem, '');
        _assertResultItemTooltip(resultItem, 'Correction automatique en cours de développement ;)');
      });

      (0, _mocha.it)('should return adapted title and tooltip when validation status is unknown', function () {
        // given
        answer.set('result', 'xxx');

        // when
        resultItem = component.get('resultItem');

        // then
        _assertResultItemTitle(resultItem, '');
        _assertResultItemTooltip(resultItem, 'Correction automatique en cours de développement ;)');
      });

      (0, _mocha.it)('should return adapted title and tooltip when validation status is undefined', function () {
        // given
        var undefined = undefined;
        answer.set('result', undefined);

        // when
        resultItem = component.get('resultItem');

        // then
        _assertResultItemTitle(resultItem, '');
        _assertResultItemTooltip(resultItem, 'Correction automatique en cours de développement ;)');
      });

      (0, _mocha.it)('should return adapted title and tooltip when result is "ok"', function () {
        // given
        answer.set('result', 'ok');

        // when
        resultItem = component.get('resultItem');

        // then
        _assertResultItemTitle(resultItem, 'Vous avez la bonne réponse !');
        _assertResultItemTooltip(resultItem, 'Réponse correcte');
      });

      (0, _mocha.it)('should return adapted title and tooltip when result is "ko"', function () {
        // given
        answer.set('result', 'ko');

        // when
        resultItem = component.get('resultItem');

        // then
        _assertResultItemTitle(resultItem, 'Vous n\'avez pas la bonne réponse');
        _assertResultItemTooltip(resultItem, 'Réponse incorrecte');
      });

      (0, _mocha.it)('should return adapted title and tooltip when result is "aband"', function () {
        // given
        answer.set('result', 'aband');

        // when
        resultItem = component.get('resultItem');

        // then
        _assertResultItemTitle(resultItem, 'Vous n\'avez pas donné de réponse');
        _assertResultItemTooltip(resultItem, 'Sans réponse');
      });

      (0, _mocha.it)('should return adapted title and tooltip when result is "partially"', function () {
        // given
        answer.set('result', 'partially');

        // when
        resultItem = component.get('resultItem');

        // then
        _assertResultItemTitle(resultItem, 'Vous avez donné une réponse partielle');
        _assertResultItemTooltip(resultItem, 'Réponse partielle');
        (0, _chai.expect)(resultItem.custom).to.be['true'];
      });

      (0, _mocha.it)('should return adapted title and tooltip when result is "timedout"', function () {
        // given
        answer.set('result', 'timedout');

        // when
        resultItem = component.get('resultItem');

        // then
        _assertResultItemTitle(resultItem, 'Vous avez dépassé le temps imparti');
        _assertResultItemTooltip(resultItem, 'Temps dépassé');
      });
    });
  });
});
define('pix-live/tests/unit/components/comparison-window-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/components/comparison-window-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/components/course-item-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Unit | Component | CourseItemComponent', function () {

    (0, _emberMocha.setupTest)('component:course-item', {});

    (0, _mocha.describe)('Computed property "imageUrl"', function () {
      var component = undefined;

      var COURSE_WITH_IMAGE = { imageUrl: 'any_image.png' };
      var COURSE_WITHOUT_IMAGE = { imageUrl: null };

      function initComponentWithImage() {
        component = this.subject();
        component.set('course', COURSE_WITH_IMAGE);
      }

      function initComponentWithoutImage() {
        component = this.subject();
        component.set('course', COURSE_WITHOUT_IMAGE);
      }

      (0, _mocha.it)('should display the image of the course', function () {
        // given
        initComponentWithImage.call(this);

        // when
        var imageUrl = component.get('imageUrl');

        // then
        (0, _chai.expect)(imageUrl).to.exists;
        (0, _chai.expect)(imageUrl).to.equal('any_image.png');
      });

      (0, _mocha.it)('should display a default image if no image url is given', function () {
        // given
        initComponentWithoutImage.call(this);

        // when
        var imageUrl = component.get('imageUrl');

        // then
        (0, _chai.expect)(imageUrl).to.exists;
        (0, _chai.expect)(imageUrl).to.equal('/assets/images/course-default-image.png');
      });
    });
  });
});
define('pix-live/tests/unit/components/course-item-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/components/course-item-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/components/course-list-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Unit | Component | course list', function () {

    (0, _emberMocha.setupTest)('component:course-list', {});

    (0, _mocha.describe)('#filteredCourses', function () {

      var component = undefined;

      var oneCourseArray = [{ id: 'course_id' }];
      var fiveCoursesArray = [{ id: 'course_1' }, { id: 'course_2' }, { id: 'course_3' }, { id: 'course_4' }, { id: 'course_5' }];

      (0, _mocha.beforeEach)(function () {
        component = this.subject();
      });

      (0, _mocha.it)('should return an empty array when courses are null', function () {
        // given
        component.set('courses', null);

        // when
        var result = component.get('filteredCourses');

        // then
        (0, _chai.expect)(result).to.have.lengthOf(0);
      });

      (0, _mocha.it)('should return all courses when limit is not defined', function () {
        // given
        component.set('courses', fiveCoursesArray);

        // when
        var result = component.get('filteredCourses');

        // then
        (0, _chai.expect)(result).to.have.lengthOf(5);
      });

      (0, _mocha.it)('should return only 3 courses on 5 when limit is set to 2', function () {
        // given
        component.set('courses', fiveCoursesArray);
        component.set('limit', 3);

        // when
        var result = component.get('filteredCourses');

        // then
        (0, _chai.expect)(result).to.have.lengthOf(3);
      });

      (0, _mocha.it)('should return only 1 course on 1 when limit is set to 3', function () {
        // given
        component.set('courses', oneCourseArray);
        component.set('limit', 3);

        // when
        var result = component.get('filteredCourses');

        // then
        (0, _chai.expect)(result).to.have.lengthOf(1);
      });
    });
  });
});
define('pix-live/tests/unit/components/course-list-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/components/course-list-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/components/feedback-panel-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Unit | Component | feedback-panel', function () {

    (0, _emberMocha.setupTest)('component:feedback-panel', {});

    (0, _mocha.describe)('#isFormClosed', function () {

      (0, _mocha.it)('should return true by default', function () {
        // given
        var component = this.subject();

        // when
        var isFormClosed = component.get('isFormClosed');

        // then
        (0, _chai.expect)(isFormClosed).to.be['true'];
      });

      (0, _mocha.it)('should return true if status equals "FORM_CLOSED"', function () {
        // given
        var component = this.subject();
        component.set('status', 'FORM_CLOSED');

        // when
        var isFormClosed = component.get('isFormClosed');

        // then
        (0, _chai.expect)(isFormClosed).to.be['true'];
      });

      (0, _mocha.it)('should return false if status is not equal to "FORM_CLOSED"', function () {
        // given
        var component = this.subject();
        component.set('status', 'FORM_OPENED');

        // when
        var isFormClosed = component.get('isFormClosed');

        // then
        (0, _chai.expect)(isFormClosed).to.be['false'];
      });
    });

    (0, _mocha.describe)('#isFormOpened', function () {

      (0, _mocha.it)('should return true if status equals "FORM_OPENED"', function () {
        // given
        var component = this.subject();
        component.set('status', 'FORM_OPENED');

        // when
        var isFormClosed = component.get('isFormOpened');

        // then
        (0, _chai.expect)(isFormClosed).to.be['true'];
      });

      (0, _mocha.it)('should return false if status is not equal to "FORM_OPENED"', function () {
        // given
        var component = this.subject();
        component.set('status', 'FORM_CLOSED');

        // when
        var isFormClosed = component.get('isFormOpened');

        // then
        (0, _chai.expect)(isFormClosed).to.be['false'];
      });
    });
  });
});
define('pix-live/tests/unit/components/feedback-panel-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/components/feedback-panel-test.js', function () {
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
        component.set('isSubmited', true);
        // then
        (0, _chai.expect)(component.get('infoMessage')).to.equal('Votre adresse n\'est pas valide');
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
define('pix-live/tests/unit/components/qroc-solution-panel-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Unit | Component | qroc-solution-panel', function () {

    (0, _emberMocha.setupTest)('component:qroc-solution-panel', {});

    (0, _mocha.describe)('#answerToDisplay', function () {

      (0, _mocha.it)('should return an empty string if the answer is #ABAND#', function () {
        // given
        var answer = {
          value: '#ABAND#'
        };
        var component = this.subject();
        component.set('answer', answer);
        // when
        var answerToDisplay = component.get('answerToDisplay');
        // then
        (0, _chai.expect)(answerToDisplay).to.equal('Pas de réponse');
      });

      (0, _mocha.it)('should return the answer if the answer is not #ABAND#', function () {
        // given
        var answer = {
          value: 'La Reponse B'
        };
        var component = this.subject();
        component.set('answer', answer);
        // when
        var answerToDisplay = component.get('answerToDisplay');
        // then
        (0, _chai.expect)(answerToDisplay).to.equal('La Reponse B');
      });
    });

    (0, _mocha.describe)('#solutionToDisplay', function () {

      (0, _mocha.it)('should return the first solution if the solution has some variants', function () {
        // given
        var solution = {
          value: 'Reponse\nreponse\nréponse'
        };
        var component = this.subject();
        component.set('solution', solution);
        // when
        var solutionToDisplay = component.get('solutionToDisplay');
        // then
        (0, _chai.expect)(solutionToDisplay).to.equal('Reponse');
      });

      (0, _mocha.it)('should return the solution', function () {
        // given
        var solution = {
          value: 'Reponse'
        };
        var component = this.subject();
        component.set('solution', solution);
        // when
        var solutionToDisplay = component.get('solutionToDisplay');
        // then
        (0, _chai.expect)(solutionToDisplay).to.equal('Reponse');
      });

      (0, _mocha.it)('should return an empty string if the solution is null', function () {
        // given
        var emptySolution = {
          value: ''
        };
        var component = this.subject();
        component.set('solution', emptySolution);
        // when
        var solutionToDisplay = component.get('solutionToDisplay');
        // then
        (0, _chai.expect)(solutionToDisplay).to.equal('');
      });

      (0, _mocha.it)('should return an empty string if the solution is an empty String', function () {
        // given
        var solutionNull = {
          value: null
        };
        var component = this.subject();
        component.set('solution', solutionNull);
        // when
        var solutionToDisplay = component.get('solutionToDisplay');
        // then
        (0, _chai.expect)(solutionToDisplay).to.equal('');
      });
    });
  });
});
define('pix-live/tests/unit/components/qroc-solution-panel-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/components/qroc-solution-panel-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/components/result-item-test', ['exports', 'ember', 'chai', 'mocha', 'ember-mocha'], function (exports, _ember, _chai, _mocha, _emberMocha) {

  var undefinedAnswer = 'undefined';
  var answerWithEmptyResult = {
    value: '',
    result: '',
    name: 'answerWithEmptyResult'
  };
  var answerWithUndefinedResult = {
    value: '',
    result: undefined,
    name: 'answerWithUndefinedResult'
  };
  var answerWithNullResult = {
    value: '',
    result: null,
    name: 'answerWithNullResult'
  };
  var answerWithOkResult = {
    value: '',
    result: 'ok'
  };
  var answerWithRandomResult = {
    value: '',
    result: 'RANDOM_RESULT'
  };

  (0, _mocha.describe)('Unit | Component | result-item-component', function () {

    (0, _emberMocha.setupTest)('component:result-item', {});

    var component = undefined;

    (0, _mocha.beforeEach)(function () {
      component = this.subject();
    });

    (0, _mocha.describe)('#resultItemContent Computed property - undefined case', function () {
      [undefinedAnswer, answerWithEmptyResult, answerWithUndefinedResult, answerWithNullResult].forEach(function (answer) {
        (0, _mocha.it)('should returns false when answer provided is: ' + answer.name, function () {
          // when
          component.set('answer', answer);
          // then
          (0, _chai.expect)(component.get('resultItemContent')).to.be.undefined;
        });
      });
    });

    (0, _mocha.describe)('#resultItemContent Computed property - defined case', function () {
      (0, _mocha.it)('should returns true when answer provided with result ok', function () {
        // when
        component.set('answer', answerWithOkResult);
        // then
        (0, _chai.expect)(component.get('resultItemContent.title')).to.equal('Réponse correcte');
      });

      (0, _mocha.it)('should returns true when answer provided with result uncommon value by not null or undefined ', function () {
        // when
        component.set('answer', answerWithRandomResult);
        // then
        (0, _chai.expect)(component.get('resultItemContent.title')).to.equal('Correction automatique en cours de développement ;)');
      });
    });

    (0, _mocha.describe)('#validationImplementedForChallengeType', function () {

      [{ challengeType: 'QCM', expected: true }, { challengeType: 'QROC', expected: true }, { challengeType: 'QROCm-ind', expected: false }, { challengeType: 'QROCm-dep', expected: false }, { challengeType: 'QCU', expected: true }].forEach(function (data) {

        (0, _mocha.it)('should return ' + data.expected + ' when challenge type is ' + data.challengeType, function () {
          // given
          var challenge = _ember['default'].Object.create({ type: data.challengeType });
          var answer = _ember['default'].Object.create({ challenge: challenge });

          // when
          component.set('answer', answer);

          // then
          (0, _chai.expect)(component.get('validationImplementedForChallengeType')).to.equal(data.expected);
        });
      });
    });
  });
});
define('pix-live/tests/unit/components/result-item-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/components/result-item-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/components/timeout-jauge-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Unit | Component | timeout-jauge-component ', function () {

    (0, _emberMocha.setupTest)('component:timeout-jauge', {});

    var component = undefined;

    beforeEach(function () {
      component = this.subject();
    });

    (0, _mocha.describe)('#Test rendering Property', function () {

      (0, _mocha.describe)('#remainingSeconds', function () {
        [{ allotedTime: new Date(), _elapsedTime: 0, expected: 0 }, { allotedTime: '  ', _elapsedTime: 0, expected: 0 }, { allotedTime: undefined, _elapsedTime: 0, expected: 0 }, { allotedTime: null, _elapsedTime: 0, expected: 0 }, { allotedTime: '0', _elapsedTime: 0, expected: 0 }, { allotedTime: '40', _elapsedTime: 0, expected: 40 }, { allotedTime: '70', _elapsedTime: 0, expected: 70 }, { allotedTime: '120', _elapsedTime: 0, expected: 120 }, { allotedTime: 150, _elapsedTime: 0, expected: 150 }, { allotedTime: '120', _elapsedTime: 60000, expected: 60 }, { allotedTime: '120', _elapsedTime: 90000, expected: 30 }, { allotedTime: '120', _elapsedTime: 120000, expected: 0 }, { allotedTime: '120', _elapsedTime: 150000, expected: -30 }].forEach(function (data) {

          (0, _mocha.it)('should return "' + data.expected + '" when alloting ' + data.allotedTime + ' and _elapsedTime is ' + data._elapsedTime + 'ms', function () {
            // given
            component.set('allotedTime', data.allotedTime);
            component.set('_elapsedTime', data._elapsedTime);
            // when
            var remainingSeconds = component.get('remainingSeconds');
            // then
            (0, _chai.expect)(remainingSeconds).to.equal(data.expected);
          });
        });
      });

      (0, _mocha.describe)('#remainingTime', function () {
        [{ allotedTime: new Date(), _elapsedTime: 0, expected: '0:00' }, { allotedTime: '  ', _elapsedTime: 0, expected: '0:00' }, { allotedTime: undefined, _elapsedTime: 0, expected: '0:00' }, { allotedTime: null, _elapsedTime: 0, expected: '0:00' }, { allotedTime: '0', _elapsedTime: 0, expected: '0:00' }, { allotedTime: '40', _elapsedTime: 0, expected: '0:40' }, { allotedTime: '70', _elapsedTime: 0, expected: '1:10' }, { allotedTime: '120', _elapsedTime: 0, expected: '2:00' }, { allotedTime: 150, _elapsedTime: 0, expected: '2:30' }, { allotedTime: '120', _elapsedTime: 60000, expected: '1:00' }, { allotedTime: '120', _elapsedTime: 90000, expected: '0:30' }, { allotedTime: '120', _elapsedTime: 120000, expected: '0:00' }, { allotedTime: '120', _elapsedTime: 150000, expected: '0:00' }].forEach(function (data) {

          (0, _mocha.it)('should return "' + data.expected + '" when alloting ' + data.allotedTime + ' and _elapsedTime is ' + data._elapsedTime + 'ms', function () {
            // given
            component.set('allotedTime', data.allotedTime);
            component.set('_elapsedTime', data._elapsedTime);
            // when
            var remainingTime = component.get('remainingTime');
            // then
            (0, _chai.expect)(remainingTime).to.equal(data.expected);
          });
        });
      });

      (0, _mocha.describe)('#percentageOfTimeout', function () {
        [{ allotedTime: new Date(), _elapsedTime: 4000, expected: 0 }, { allotedTime: '  ', _elapsedTime: 4000, expected: 0 }, { allotedTime: undefined, _elapsedTime: 4000, expected: 0 }, { allotedTime: null, _elapsedTime: 4000, expected: 0 }, { allotedTime: '0', _elapsedTime: 4000, expected: 0 }, { allotedTime: '40', _elapsedTime: 4000, expected: 10 }, { allotedTime: '70', _elapsedTime: 35000, expected: 50 }, { allotedTime: '120', _elapsedTime: 120000, expected: 100 }, { allotedTime: 150, _elapsedTime: 225000, expected: 150 }].forEach(function (data) {

          (0, _mocha.it)('should return "' + data.expected + '" when alloting ' + data.allotedTime + ' and _elapsedTime is ' + data._elapsedTime + 'ms', function () {
            // given
            component.set('allotedTime', data.allotedTime);
            component.set('_elapsedTime', data._elapsedTime);
            // when
            var percentageOfTimeout = component.get('percentageOfTimeout');
            // then
            (0, _chai.expect)(percentageOfTimeout).to.equal(data.expected);
          });
        });
      });
    });
  });
});
define('pix-live/tests/unit/components/timeout-jauge-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/components/timeout-jauge-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/components/warning-time-page-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Unit | Component | warning-page-component ', function () {

    (0, _emberMocha.setupTest)('component:warning-page', {});

    var component = undefined;

    beforeEach(function () {
      component = this.subject();
    });

    (0, _mocha.describe)('#Test rendering Property', function () {

      (0, _mocha.describe)('#allocatedTime', function () {
        [{ input: '', expected: 0 }, { input: ' ', expected: 0 }, { input: 'undefined', expected: 0 }, { input: null, expected: 0 }, { input: 0, expected: 0 }, { input: 1, expected: '0:01' }, { input: 10, expected: '0:10' }, { input: 60, expected: '1:00' }, { input: 61, expected: '1:01' }, { input: 70, expected: '1:10' }, { input: 120, expected: '2:00' }, { input: 121, expected: '2:01' }, { input: 122, expected: '2:02' }, { input: 130, expected: '2:10' }].forEach(function (data) {
          (0, _mocha.it)('should return "' + data.expected + '" when passing ' + data.input, function () {
            // given
            component.set('time', data.input);

            // when
            var allocatedTime = component.get('allocatedTime');

            // then
            (0, _chai.expect)(allocatedTime).to.equal(data.expected);
          });
        });
      });

      (0, _mocha.describe)('#allocatedHumanTime', function () {
        [{ input: '', expected: '' }, { input: ' ', expected: '' }, { input: 'undefined', expected: '' }, { input: null, expected: '' }, { input: 0, expected: '' }, { input: 1, expected: '1 seconde' }, { input: 10, expected: '10 secondes' }, { input: 60, expected: '1 minute' }, { input: 61, expected: '1 minute et 1 seconde' }, { input: 70, expected: '1 minute et 10 secondes' }, { input: 120, expected: '2 minutes' }, { input: 121, expected: '2 minutes et 1 seconde' }, { input: 122, expected: '2 minutes et 2 secondes' }, { input: 130, expected: '2 minutes et 10 secondes' }].forEach(function (data) {
          (0, _mocha.it)('should return "' + data.expected + '" when passing ' + data.input, function () {
            // given
            component.set('time', data.input);

            // when
            var allocatedHumanTime = component.get('allocatedHumanTime');

            // then
            (0, _chai.expect)(allocatedHumanTime).to.equal(data.expected);
          });
        });
      });
    });
  });
});
define('pix-live/tests/unit/components/warning-time-page-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/components/warning-time-page-test.js', function () {
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
define('pix-live/tests/unit/helpers/eq-test', ['exports', 'chai', 'mocha', 'pix-live/helpers/eq'], function (exports, _chai, _mocha, _pixLiveHelpersEq) {

  (0, _mocha.describe)('Unit | Helper | Eq', function () {
    // Replace this with your real tests.
    [{ input: '', output: false }, { input: null, output: false }, { input: NaN, output: false }, { input: 'Undefined', output: false }, { input: 0, output: false }, { input: 42, output: false }, { input: [42], output: false }, { input: [''], output: false }, { input: [null], output: false }, { input: [], output: false }, { input: ['', ''], output: true }, { input: [42, 43], output: false }, { input: [42, ''], output: false }, { input: [42, 0], output: false }, { input: [42, 'empty'], output: false }, { input: [42, null], output: false }, { input: [42, 'undefined'], output: false }, { input: [42, 42], output: true }].forEach(function (_ref) {
      var input = _ref.input;
      var output = _ref.output;

      (0, _mocha.it)('should render ' + output + ' when ' + JSON.stringify(input) + ' provided', function () {
        //When
        var result = (0, _pixLiveHelpersEq.eq)(input);
        //then
        (0, _chai.expect)(result).to.be.equal(output);
      });
    });
  });
});
define('pix-live/tests/unit/helpers/eq-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/helpers/eq-test.js', function () {
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
define('pix-live/tests/unit/helpers/or-test', ['exports', 'chai', 'mocha', 'pix-live/helpers/or'], function (exports, _chai, _mocha, _pixLiveHelpersOr) {

  (0, _mocha.describe)('Unit | Helper | or', function () {
    // Replace this with your real tests.
    [{ input: '', output: false }, { input: null, output: false }, { input: NaN, output: false }, { input: 'Undefined', output: false }, { input: 0, output: false }, { input: true, output: false }, { input: [true], output: false }, { input: [''], output: false }, { input: [null], output: false }, { input: [], output: false }, { input: ['', ''], output: false }, { input: [true, false], output: true }, { input: [true, ''], output: true }, { input: [true, 0], output: true }, { input: [true, 'empty'], output: true }, { input: [true, null], output: true }, { input: [true, 'undefined'], output: true }, { input: [true, true], output: true }].forEach(function (_ref) {
      var input = _ref.input;
      var output = _ref.output;

      (0, _mocha.it)('should render ' + output + ' when ' + JSON.stringify(input) + ' provided', function () {
        //When
        var result = (0, _pixLiveHelpersOr.or)(input);
        //then
        (0, _chai.expect)(result).to.be.equal(output);
      });
    });
  });
});
define('pix-live/tests/unit/helpers/or-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/helpers/or-test.js', function () {
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

          (0, _chai.expect)(answer.get('result')).to.equal('ok');
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
define('pix-live/tests/unit/models/answer/value-as-array-of-boolean-mixin-test', ['exports', 'ember', 'chai', 'mocha', 'pix-live/models/answer/value-as-array-of-boolean-mixin'], function (exports, _ember, _chai, _mocha, _pixLiveModelsAnswerValueAsArrayOfBooleanMixin) {

  (0, _mocha.describe)('Unit | Model | Value As Array of Boolean Mixin', function () {

    var testData = [{ when: 'Empty String', input: '', expected: [] }, { when: 'Wrong type as input', input: new Date(), expected: [] }, { when: 'Undefined input', input: undefined, expected: [] }, { when: 'Nominal case', input: '2,3', expected: [false, true, true] }, { when: 'Only one value', input: '4', expected: [false, false, false, true] }, { when: 'Resist to order, empty space and empty value', input: ',4, 2 , 2,1,  ,', expected: [true, true, false, true] }];

    var Challenge = _ember['default'].Object.extend(_pixLiveModelsAnswerValueAsArrayOfBooleanMixin['default'], {});

    testData.forEach(function (_ref) {
      var when = _ref.when;
      var input = _ref.input;
      var expected = _ref.expected;

      (0, _mocha.it)('"' + when + '", example : "' + JSON.stringify(input) + '" retourne [' + expected + ']', function () {
        var sut = Challenge.create({ value: input });
        (0, _chai.expect)(sut.get('_valueAsArrayOfBoolean')).to.deep.equal(expected);
      });
    });
  });
});
define('pix-live/tests/unit/models/answer/value-as-array-of-boolean-mixin-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/models/answer/value-as-array-of-boolean-mixin-test.js', function () {
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
define('pix-live/tests/unit/models/feedback-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Unit | Model | feedback', function () {

    (0, _emberMocha.setupModelTest)('feedback', {
      needs: ['model:assessment', 'model:challenge']
    });

    (0, _mocha.it)('exists', function () {
      var model = this.subject();
      (0, _chai.expect)(model).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/models/feedback-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/models/feedback-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/models/follower-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Follower', function () {
    (0, _emberMocha.setupModelTest)('follower', {
      // Specify the other units that are required for this test.
      needs: []
    });

    // Replace this with your real tests.
    (0, _mocha.it)('exists', function () {
      var model = this.subject();
      // var store = this.store();
      (0, _chai.expect)(model).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/models/follower-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/models/follower-test.js', function () {
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
define('pix-live/tests/unit/routes/courses-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Unit | Route | courses', function () {

    (0, _emberMocha.setupTest)('route:courses', {});

    (0, _mocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/routes/courses-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/routes/courses-test.js', function () {
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
    var validator = undefined;
    beforeEach(function () {
      validator = this.subject();
    });

    (0, _mocha.it)('exists', function () {
      (0, _chai.expect)(validator).to.be.ok;
    });

    (0, _mocha.describe)('Test all case Invalid and then valid email', function () {
      ['', ' ', null, 'INVALID_EMAIL', 'INVALID_EMAIL@', 'INVALID_EMAIL@pix', 'INVALID_EMAIL@pix.', '@pix.fr', '@pix'].forEach(function (badEmail) {
        (0, _mocha.it)('should return false when email is invalid: ' + badEmail, function () {
          (0, _chai.expect)(validator.emailIsValid(badEmail)).to.be['false'];
        });
      });

      ['follower@pix.fr', 'follower@pix.fr ', ' follower@pix.fr', ' follower@pix.fr ', ' follower-beta@pix.fr ', ' follower_beta@pix.fr ', 'follower+beta@pix.fr', 'follower+beta@pix.gouv.fr', 'follower+beta@pix.beta.gouv.fr'].forEach(function (validEmail) {
        (0, _mocha.it)('should return true if provided email is valid: ' + validEmail, function () {
          (0, _chai.expect)(validator.emailIsValid(validEmail)).to.be['true'];
        });
      });
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

      [{
        when: 'nominal case, existing answers',
        proposals: ['prop 1', 'prop 2', 'prop 3', 'prop 4'],
        answers: [false, true],
        output: [['prop 1', false], ['prop 2', true], ['prop 3', false], ['prop 4', false]]
      }, {
        when: 'nominal case, non-existing answers (undefined)',
        proposals: ['prop 1', 'prop 2', 'prop 3', 'prop 4'],
        answers: undefined,
        output: [['prop 1', false], ['prop 2', false], ['prop 3', false], ['prop 4', false]]
      }, {
        when: 'nominal case, non-existing answers (null)',
        proposals: ['prop 1', 'prop 2', 'prop 3', 'prop 4'],
        answers: null,
        output: [['prop 1', false], ['prop 2', false], ['prop 3', false], ['prop 4', false]]
      }, {
        when: 'nominal case, non-existing answers (empty array)',
        proposals: ['prop 1', 'prop 2', 'prop 3', 'prop 4'],
        answers: [],
        output: [['prop 1', false], ['prop 2', false], ['prop 3', false], ['prop 4', false]]
      }, {
        when: 'one answer only',
        proposals: ['prop 1', 'prop 2', 'prop 3', 'prop 4'],
        answers: [true],
        output: [['prop 1', true], ['prop 2', false], ['prop 3', false], ['prop 4', false]]
      }, {
        when: 'wrong type for answers',
        proposals: ['prop 1', 'prop 2', 'prop 3', 'prop 4'],
        answers: new Date(),
        output: []
      }, {
        when: 'wrong format for answers\'s elements',
        proposals: ['prop 1', 'prop 2', 'prop 3', 'prop 4'],
        answers: [true, 'false'],
        output: []
      }, {
        when: 'no proposals',
        proposals: [],
        answers: [false, true],
        output: []
      }, {
        when: 'wrong format for proposals',
        proposals: {}, // object !
        answers: [false, true],
        output: []
      }, {
        when: 'wrong format for proposals\'s elements',
        proposals: ['prop1', {}],
        answers: [false, true],
        output: []
      }].forEach(function (testCase) {
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

    (0, _mocha.describe)('#isNonEmptyString', function () {

      (0, _mocha.it)('when no arg, returns false', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].isNonEmptyString()).to.equal(false);
      });

      [{ value: undefined, expected: false }, { value: null, expected: false }, { value: new Date(), expected: false }, { value: '', expected: false }, { value: 'abcd', expected: true }].forEach(function (item) {
        (0, _mocha.it)('should return ' + item.expected + ' when value is ' + item.value, function () {
          (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].isNonEmptyString(item.value)).to.equal(item.expected);
        });
      });
    });

    (0, _mocha.describe)('#isNonEmptyArray', function () {

      (0, _mocha.it)('when no arg, returns false', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].isNonEmptyArray()).to.equal(false);
      });

      [{ value: undefined, expected: false }, { value: null, expected: false }, { value: new Date(), expected: false }, { value: [], expected: false }, { value: [''], expected: true }, { value: ['myvalue'], expected: true }, { value: ['1', null, true], expected: true }].forEach(function (item) {
        (0, _mocha.it)('should return ' + item.expected + ' when value of array is ' + JSON.stringify(item.value), function () {
          (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].isNonEmptyArray(item.value)).to.equal(item.expected);
        });
      });
    });

    (0, _mocha.describe)('#isNotInteger', function () {

      (0, _mocha.it)('when no arg, returns false', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].isNotInteger()).to.equal(true);
      });

      [{ value: undefined, expected: true }, { value: 'undefined', expected: true }, { value: null, expected: true }, { value: '', expected: true }, { value: 'abcd', expected: true }, { value: 0, expected: false }, { value: 5, expected: false }, { value: '5', expected: true }].forEach(function (item) {
        (0, _mocha.it)('should return ' + item.expected + ' when value is ' + item.value, function () {
          (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].isNotInteger(item.value)).to.equal(item.expected);
        });
      });
    });

    (0, _mocha.describe)('#isTruthy', function () {

      (0, _mocha.it)('when no arg, returns false', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].isTruthy()).to.equal(false);
      });

      [{ value: undefined, expected: false }, { value: null, expected: false }, { value: true, expected: true }, { value: false, expected: false }, { value: 0, expected: false }, { value: 1, expected: true }, { value: [], expected: false }, { value: [1, 2, 3], expected: true }, { value: { a: 42 }, expected: true }, { value: {}, expected: false }, { value: '', expected: false }, { value: 'foo', expected: true }].forEach(function (item) {
        (0, _mocha.it)('should return ' + item.expected + ' when value is ' + item.value, function () {
          (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].isTruthy(item.value)).to.equal(item.expected);
        });
      });
    });

    (0, _mocha.describe)('#hasSomeTruthyProps', function () {

      (0, _mocha.it)('when no arg, returns false', function () {
        (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].hasSomeTruthyProps()).to.equal(false);
      });

      [{ value: undefined, expected: false }, { value: null, expected: false }, { value: 'azerty', expected: false }, { value: {}, expected: false }, { value: { a: '' }, expected: false }, { value: { a: false }, expected: false }, { value: { a: undefined }, expected: false }, { value: { a: null }, expected: false }, { value: { a: 0 }, expected: false }, { value: { a: false }, expected: false }, { value: { a: 42 }, expected: true }, { value: { a: 42, b: false }, expected: true }, { value: { a: '', b: false }, expected: false }, { value: { a: 42, b: true }, expected: true }].forEach(function (item) {
        (0, _mocha.it)('should return ' + item.expected + ' when value is ' + item.value, function () {
          (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].hasSomeTruthyProps(item.value)).to.equal(item.expected);
        });
      });
    });

    (0, _mocha.describe)('#isNumeric', function () {

      [0, 2, 17, +17, -17, -0, .0, .17, -.17, 1e17, 1e-17, Infinity, -Infinity, new Number('123')].forEach(function (n) {
        (0, _mocha.it)('should return true when it is already a number type [n=' + n + ']', function () {
          (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].isNumeric(n)).to.be['true'];
        });
      });

      [new String('1337'), '1337', '-1337', '1337.17', '-1337.17', '0017', '00000.017'].forEach(function (n) {
        (0, _mocha.it)('should return true when it is a string that looks like a number [n=' + n + ']', function () {
          (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].isNumeric(n)).to.be['true'];
        });
      });

      ['abc', '6qwerty0', '17%', '-17%', '#17', '2^18', '17px', '*', '', true, false, [], {}, function () {}, undefined, null].forEach(function (n) {
        (0, _mocha.it)('should return false when it is a string that does not look like a number [n=' + n + ']', function () {
          (0, _chai.expect)(_pixLiveUtilsLodashCustom['default'].isNumeric(n)).to.be['false'];
        });
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
define('pix-live/tests/unit/utils/proposals-as-array-test', ['exports', 'chai', 'mocha', 'pix-live/utils/proposals-as-array'], function (exports, _chai, _mocha, _pixLiveUtilsProposalsAsArray) {

  (0, _mocha.describe)('Unit | Utility | proposals as array', function () {
    // Replace this with your real tests.
    var testData = [{ data: '', expected: [] }, { data: 'foo', expected: [] }, { data: '- foo', expected: ['foo'] }, { data: '-foo\n- bar', expected: ['foo', 'bar'] }, { data: '- cerf-volant', expected: ['cerf-volant'] }, { data: '- xi\n- foo mi', expected: ['xi', 'foo mi'] }, { data: '- joli\n- cerf-volant', expected: ['joli', 'cerf-volant'] }, { data: '- xi\n- foo\n- mi', expected: ['xi', 'foo', 'mi'] }, { data: '-- foo', expected: ['- foo'] }, { data: '- foo\n\r\t\n\r\t\n\r\t\n- bar', expected: ['foo', 'bar'] }];

    testData.forEach(function (_ref) {
      var data = _ref.data;
      var expected = _ref.expected;

      (0, _mocha.it)('"' + data.toString() + '" retourne [' + expected + ']', function () {
        (0, _chai.expect)((0, _pixLiveUtilsProposalsAsArray['default'])(data)).to.deep.equal(expected);
      });
    });
  });
});
define('pix-live/tests/unit/utils/proposals-as-array-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/utils/proposals-as-array-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/unit/utils/value-as-array-of-boolean-test', ['exports', 'chai', 'mocha', 'pix-live/utils/value-as-array-of-boolean'], function (exports, _chai, _mocha, _pixLiveUtilsValueAsArrayOfBoolean) {

  (0, _mocha.describe)('Unit | Utility | value as array of boolean', function () {
    // Replace this with your real tests.
    var testData = [{ when: 'Empty String', input: '', expected: [] }, { when: 'Wrong type as input', input: new Date(), expected: [] }, { when: 'Undefined input', input: undefined, expected: [] }, { when: 'Nominal case', input: '2,3', expected: [false, true, true] }, { when: 'Only one value', input: '4', expected: [false, false, false, true] }, { when: 'Resist to order, empty space and empty value', input: ',4, 2 , 2,1,  ,', expected: [true, true, false, true] }];

    testData.forEach(function (_ref) {
      var when = _ref.when;
      var input = _ref.input;
      var expected = _ref.expected;

      (0, _mocha.it)('"' + when + '", example : "' + JSON.stringify(input) + '" retourne [' + expected + ']', function () {
        (0, _chai.expect)((0, _pixLiveUtilsValueAsArrayOfBoolean['default'])(input)).to.deep.equal(expected);
      });
    });
  });
});
define('pix-live/tests/unit/utils/value-as-array-of-boolean-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/utils/value-as-array-of-boolean-test.js', function () {
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
define('pix-live/tests/utils/email-validator.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - utils/email-validator.js', function () {
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
define('pix-live/tests/utils/proposals-as-array.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - utils/proposals-as-array.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/utils/value-as-array-of-boolean.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - utils/value-as-array-of-boolean.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
require('pix-live/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
