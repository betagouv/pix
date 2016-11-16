'use strict';

define('pix-live/tests/acceptance/10-consulter-l-ecran-de-fin-de-test-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)("Acceptance | 10 - Consulter l'écran de fin d'un test ", function () {

    var application = undefined;
    var assessment = undefined;
    var course = undefined;
    var $assessmentResults = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.before)(function () {
      return visit('/assessments/completed_assessment_id/results');
    });

    (0, _mocha.before)(function () {
      $assessmentResults = findWithAssert('.assessment-results');
    });

    (0, _mocha.it)("10.1. se fait en accédant à l'URL /assessments/:assessment_id/results", function () {
      (0, _chai.expect)(currentURL()).to.equal('/assessments/completed_assessment_id/results');
    });

    (0, _mocha.it)("10.4. affiche l'intitulé du test", function () {
      (0, _chai.expect)($assessmentResults.text()).to.contains("Name of the course");
    });

    (0, _mocha.it)("11.1. propose un moyen pour revenir à la liste des tests", function () {
      var $homeLink = findWithAssert('button.assessment-results-link-home');
    });
  });
});
define('pix-live/tests/acceptance/10-consulter-l-ecran-de-fin-de-test-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/10-consulter-l-ecran-de-fin-de-test-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('acceptance/10-consulter-l-ecran-de-fin-de-test-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/acceptance/11-revenir-a-la-liste-des-tests-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)("Acceptance | 11 - Revenir à la liste des tests", function () {

    var application = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.before)(function () {
      return visit('/assessments/completed_assessment_id/results');
    });

    (0, _mocha.it)("11.1. propose un moyen pour revenir à la liste des tests", function () {
      var $homeLink = findWithAssert('button.assessment-results-link-home');
    });
  });
});
define('pix-live/tests/acceptance/11-revenir-a-la-liste-des-tests-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/11-revenir-a-la-liste-des-tests-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('acceptance/11-revenir-a-la-liste-des-tests-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/acceptance/13-creer-une-epreuve-qcm-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app', 'rsvp'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp, _rsvp) {

  (0, _mocha.describe)("Acceptance | 13 - Créer une épreuve de type QCM | ", function () {

    var application = undefined;
    var challenge = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.before)(function () {
      return visit('/challenges/qcm_challenge_id/preview');
    });

    (0, _mocha.it)('13 les propositions checkbox sont affichées', function () {
      var $proposals = findWithAssert('.challenge-proposals input[type="checkbox"]');
      (0, _chai.expect)($proposals).to.have.lengthOf(5);
    });
  });
});
define('pix-live/tests/acceptance/13-creer-une-epreuve-qcm-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/13-creer-une-epreuve-qcm-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('acceptance/13-creer-une-epreuve-qcm-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/acceptance/14-creer-une-epreuve-qroc-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)("Acceptance | 14 - Créer une épreuve de type QROC | ", function () {

    var application = undefined;
    var challenge = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.before)(function () {
      return visit('/challenges/qrocm_challenge_id/preview');
    });

    (0, _mocha.it)('14.1 un champ input text est affiché', function () {
      findWithAssert('.challenge-proposals input[type="text"]');
    });
  });
});
define('pix-live/tests/acceptance/14-creer-une-epreuve-qroc-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/14-creer-une-epreuve-qroc-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('acceptance/14-creer-une-epreuve-qroc-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/acceptance/15-qcu-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)("Acceptance | 15 - Afficher un QCU | ", function () {

    var application = undefined;
    var challenge = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.before)(function () {
      return visit('/assessments/completed_assessment_id/challenges/qcu_challenge_with_image_id');
    });

    (0, _mocha.it)('15.1 It should render challenge instruction', function () {
      (0, _chai.expect)($('.challenge-instruction').text()).to.equal('Ceci est une instruction');
    });

    (0, _mocha.it)('15.2 It should render a list of radiobuttons', function () {
      var $proposals = $('input[type="radio"]');
      (0, _chai.expect)($proposals).to.have.lengthOf(4);
    });

    (0, _mocha.it)('15.3 It should render an ordered list of instruction', function () {
      var $proposals = $('input[type="radio"]');
      (0, _chai.expect)($('.challenge-proposal:nth-child(1)').text().trim()).to.equal('1ere possibilite');
      (0, _chai.expect)($('.challenge-proposal:nth-child(2)').text().trim()).to.equal('2eme possibilite');
      (0, _chai.expect)($('.challenge-proposal:nth-child(3)').text().trim()).to.equal('3eme possibilite');
      (0, _chai.expect)($('.challenge-proposal:nth-child(4)').text().trim()).to.equal('4eme possibilite');
    });

    (0, _mocha.it)('15.4 It should display "Skip" button', function () {
      (0, _chai.expect)($('.challenge-item-actions__skip-action')).to.have.lengthOf(1);
    });

    (0, _mocha.it)('15.5 It should display "Validate" button', function () {
      (0, _chai.expect)($('a.challenge-item-actions__validate-action')).to.have.lengthOf(1);
    });

    (0, _mocha.it)('15.6 Error alert box should be hidden by default', function () {
      (0, _chai.expect)($('.alert')).to.have.lengthOf(0);
    });

    (0, _mocha.it)('15.7 Error alert box should be displayed if user validate without checking a radiobutton', function () {
      $('a.challenge-item-actions__validate-action').click();
      andThen(function () {
        (0, _chai.expect)($('.alert')).to.have.lengthOf(1);
        (0, _chai.expect)($('.alert').text().trim()).to.equal('Pour valider, sélectionner une réponse. Sinon, passer.');
      });
    });

    (0, _mocha.it)('15.8 By default, no radiobuttons are checked', function () {
      (0, _chai.expect)($('input:radio:checked')).to.have.lengthOf(0);
    });

    (0, _mocha.it)('15.9 If a user check a radiobutton, it is checked', function () {
      (0, _chai.expect)($('input:radio:checked:nth-child(1)').is(':checked')).to.equal(false);
      $('.challenge-proposal:nth-child(1) input').click();
      click($('.challenge-proposal:nth-child(1) input'));
      andThen(function () {
        (0, _chai.expect)($('input:radio:checked:nth-child(1)').is(':checked')).to.equal(true);
        (0, _chai.expect)($('input:radio:checked')).to.have.lengthOf(1);
      });
    });

    (0, _mocha.it)('15.10 If a user check another radiobutton, it is checked, and all others are unchecked', function () {
      (0, _chai.expect)($('input:radio:checked')).to.have.lengthOf(1);
      click($('.challenge-proposal:nth-child(2) input'));
      andThen(function () {
        (0, _chai.expect)($('input:radio:checked')).to.have.lengthOf(1);
      });
    });

    (0, _mocha.it)('15.11 should display an img tag with “ceci est une image” alt text', function () {
      (0, _chai.expect)($('.challenge-illustration > img').attr('alt')).to.contains('ceci est une image');
    });

    (0, _mocha.it)('15.12 should display an img as specified in the model', function () {
      (0, _chai.expect)($('.challenge-illustration > img').attr('src')).to.equal('http://fakeimg.pl/350x200/?text=DavidB&font=lobster');
    });
  });
});
define('pix-live/tests/acceptance/15-qcu-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/15-qcu-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('acceptance/15-qcu-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/acceptance/16-qcm-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)("Acceptance | 16 - Afficher un QCM | ", function () {

    var application = undefined;
    var challenge = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.before)(function () {
      return visit('/assessments/new_assessment_of_noimage_course_id/challenges/qcm_challenge_full_id');
    });

    (0, _mocha.it)('16.1 It should render challenge instruction', function () {
      (0, _chai.expect)($('.challenge-instruction').text()).to.equal('This is the instruction of one QCM');
    });
  });
});
define('pix-live/tests/acceptance/16-qcm-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/16-qcm-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('acceptance/16-qcm-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/acceptance/176-afficher-titre-du-test-dans-epreuve-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)('Acceptance | 176 - Affichage du bandeau d\'une épreuve |', function () {

    var application = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.describe)('Dans le cadre de la vue "passage d\'une épreuve"', function () {

      (0, _mocha.before)(function () {
        visit('/assessments/new_assessment_id/challenges/qcm_challenge_id');
      });

      (0, _mocha.it)('Le nom du test est affiché', function () {
        (0, _chai.expect)(findWithAssert('.course-banner-name').text()).to.contains('Name of the course');
      });

      (0, _mocha.it)('Il existe un bouton "Revenir à la liste des tests"', function () {
        var $courseListButton = findWithAssert('.course-banner-home-link');
        (0, _chai.expect)($courseListButton.text()).to.equal('Retour à la liste des tests');
      });

      (0, _mocha.it)('Quand je clique sur le bouton "Revenir à la liste des tests", je suis redirigé vers l\'index', function () {
        // when
        click('.course-banner-home-link');

        // then...
        andThen(function () {
          return (0, _chai.expect)(currentURL()).to.equal('/');
        });
      });
    });

    (0, _mocha.describe)('Dans le cadre de la vue "résultat d\'une évaluation"', function () {

      (0, _mocha.before)(function () {
        visit('/assessments/completed_assessment_id/results');
      });

      (0, _mocha.it)('Le nom du test est affiché', function () {
        (0, _chai.expect)(findWithAssert('.course-banner-name').text()).to.contains('Name of the course');
      });

      (0, _mocha.it)('Le bouton "Revenir à la liste des tests" n\'apparaît pas', function () {
        (0, _chai.expect)(find('.course-banner-home-link')).to.have.lengthOf(0);
      });
    });
  });
});
define('pix-live/tests/acceptance/176-afficher-titre-du-test-dans-epreuve-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/176-afficher-titre-du-test-dans-epreuve-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('acceptance/176-afficher-titre-du-test-dans-epreuve-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/acceptance/195-validation-automatique-des-qcu-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)("Acceptance | 195 - Validation automatique d'un QCU, visualisation du résultat ", function () {

    var application = undefined;
    var $summary = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.before)(function () {
      return visit('/assessments/completed_assessment_id/results');
    });

    (0, _mocha.it)("195.1. Pour un QCU avec une bonne réponse, le tableau récapitulatif donne une indication que la réponse est correcte", function () {
      var $cell = findWithAssert('div[data-toggle="tooltip"]:eq(0)');
      (0, _chai.expect)($cell.attr('data-original-title')).to.equal('Réponse correcte');
    });

    (0, _mocha.it)("195.2. Pour un QCU avec une mauvaise réponse, le tableau récapitulatif donne une indication que la réponse est incorrecte", function () {
      var $cell = findWithAssert('div[data-toggle="tooltip"]:eq(1)');
      (0, _chai.expect)($cell.attr('data-original-title')).to.equal('Réponse incorrecte');
    });
  });
});
define('pix-live/tests/acceptance/195-validation-automatique-des-qcu-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/195-validation-automatique-des-qcu-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('acceptance/195-validation-automatique-des-qcu-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/acceptance/196-validation-automatique-des-qcm-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)("Acceptance | 196 - Validation automatique d'un QCM, visualisation du résultat ", function () {

    var application = undefined;
    var $summary = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.before)(function () {
      return visit('/assessments/completed_assessment_qcm_id/results');
    });

    (0, _mocha.it)("196.1. Pour un QCM avec une bonne réponse, le tableau récapitulatif donne une indication que la réponse est correcte", function () {
      var $cell = findWithAssert('div[data-toggle="tooltip"]:eq(0)');
      (0, _chai.expect)($cell.attr('data-original-title')).to.equal('Réponse correcte');
    });

    (0, _mocha.it)("196.2. Pour un QCM avec une mauvaise réponse, le tableau récapitulatif donne une indication que la réponse est incorrecte", function () {
      var $cell = findWithAssert('div[data-toggle="tooltip"]:eq(1)');
      (0, _chai.expect)($cell.attr('data-original-title')).to.equal('Réponse incorrecte');
    });
  });
});
define('pix-live/tests/acceptance/196-validation-automatique-des-qcm-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/196-validation-automatique-des-qcm-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('acceptance/196-validation-automatique-des-qcm-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/acceptance/197-validation-automatique-des-qroc-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)("Acceptance | 197 - Validation automatique d'un QROC, visualisation du résultat ", function () {

    var application = undefined;
    var $summary = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.before)(function () {
      return visit('/assessments/completed_assessment_qroc_id/results');
    });

    (0, _mocha.it)("197.1. Pour un QROC avec une bonne réponse, le tableau récapitulatif donne une indication que la réponse est correcte", function () {
      var $cell = findWithAssert('div[data-toggle="tooltip"]:eq(0)');
      (0, _chai.expect)($cell.attr('data-original-title')).to.equal('Réponse incorrecte');
    });

    (0, _mocha.it)("197.2. Pour un QROC avec une mauvaise réponse, le tableau récapitulatif donne une indication que la réponse est incorrecte", function () {
      var $cell = findWithAssert('div[data-toggle="tooltip"]:eq(1)');
      (0, _chai.expect)($cell.attr('data-original-title')).to.equal('Réponse correcte');
    });
  });
});
define('pix-live/tests/acceptance/197-validation-automatique-des-qroc-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/197-validation-automatique-des-qroc-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('acceptance/197-validation-automatique-des-qroc-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/acceptance/2-voir-liste-tests-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)('Acceptance | 2 - voir la liste des tests', function () {

    var application = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.before)(function () {
      return visit('/home');
    });

    (0, _mocha.it)('2.0 peut visiter /home', function () {
      (0, _chai.expect)(currentPath()).to.equal('home');
    });

    (0, _mocha.it)("2.2 on affiche autant de tests que remontés par l'API", function () {
      (0, _chai.expect)(findWithAssert('.course')).to.have.lengthOf(2);
    });

    (0, _mocha.describe)('2.3 pour un test donné avec toutes les informations', function () {

      var $course = undefined;

      (0, _mocha.before)(function () {
        $course = findWithAssert('.course[data-id="simple_course_id"]');
      });

      (0, _mocha.it)('2.3.1 on affiche son nom', function () {
        (0, _chai.expect)($course.find('.course-name').text()).to.contains('Name of the course');
      });

      (0, _mocha.it)('2.3.2 on affiche sa description', function () {
        (0, _chai.expect)($course.find('.course-description').text()).to.contains('A short description of the course');
      });

      (0, _mocha.it)('2.3.3 on affiche le nombre d\'épreuve(s) qu\'il contient', function () {
        (0, _chai.expect)($course.find('.course-number-of-challenges').text()).to.contains('5 épreuves');
      });

      (0, _mocha.it)('2.3.4 on affiche son image', function () {
        (0, _chai.expect)($course.find('img')[0].src).to.equal('https://dl.airtable.com/L8AQwmIURNu79XmKFoPO_storage-1209059_960_720.jpg');
      });

      (0, _mocha.it)('2.3.5 on affiche un bouton "démarrer le test"', function () {
        (0, _chai.expect)($course.find('a.button').text()).to.contains('Démarrer le test');
      });
    });

    (0, _mocha.it)('2.4 pour un test dont il manque l\'image, on affiche une image placeholder', function () {
      var $course = findWithAssert('.course[data-id="course_with_no_image"]');
      (0, _chai.expect)($course.find('img')[0].src).to.contains('images/course-default-image.png');
    });
  });
});
define('pix-live/tests/acceptance/2-voir-liste-tests-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/2-voir-liste-tests-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('acceptance/2-voir-liste-tests-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/acceptance/211-recapitulatif-de-l-ecran-de-fin-de-test-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)("Acceptance | 211 - Consulter l'écran de fin d'un test ", function () {

    var application = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.before)(function () {
      return visit('/assessments/completed_assessment_id/results');
    });

    (0, _mocha.it)("211.1. affiche une liste qui récapitule les réponses", function () {
      findWithAssert('.assessment-results-list');
    });

    (0, _mocha.it)("211.2. le tableau récapitulatif contient les instructions ", function () {
      var $proposals = findWithAssert('.assessment-results-result');
      (0, _chai.expect)($proposals.text()).to.contains('Que peut-on dire des œufs');
      (0, _chai.expect)($proposals.text()).to.contains('Julie a déposé un document');
      (0, _chai.expect)($proposals.text()).to.contains('Ceci est une instruction');
      (0, _chai.expect)($proposals.text()).to.contains('Citez un ou plusieurs logiciel(s)');
    });
  });
});
define('pix-live/tests/acceptance/211-recapitulatif-de-l-ecran-de-fin-de-test-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/211-recapitulatif-de-l-ecran-de-fin-de-test-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('acceptance/211-recapitulatif-de-l-ecran-de-fin-de-test-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/acceptance/216-gestion-des-liens-dans-l-ennonce-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)("Acceptance | 216 - Gestion des liens dans l'énoncé d'une épreuve |", function () {

    var application = undefined;
    var $links = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.before)(function (done) {
      visit('/challenges/qcu_challenge_id_with_links_in_instruction/preview');
      andThen(function () {
        $links = findWithAssert('.challenge-instruction a');
        done();
      });
    });

    (0, _mocha.it)("Le contenu de type [foo](bar) doit être converti sous forme de lien", function () {
      (0, _chai.expect)($links.length).to.equal(3);
    });

    (0, _mocha.it)("Les liens doivent s'ouvrir dans un nouvel onglet", function () {
      for (var i = 0; i < $links.length; i++) {
        (0, _chai.expect)($links[i].getAttribute('target')).to.equal('_blank');
      }
    });
  });
});
define('pix-live/tests/acceptance/216-gestion-des-liens-dans-l-ennonce-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/216-gestion-des-liens-dans-l-ennonce-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('acceptance/216-gestion-des-liens-dans-l-ennonce-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/acceptance/25-image-sous-la-consigne-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)("Acceptance | 25 - Afficher une image sous la consigne | ", function () {
    var application = undefined;
    var challenge = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.describe)("Quand l'épreuve contient une illustration en consigne", function () {

      (0, _mocha.before)(function () {
        return visit('/challenges/qcu_challenge_with_image_id/preview');
      });

      (0, _mocha.it)('25.1 Une image unique peut être affichée sous la consigne', function () {
        var $illustration = findWithAssert('.challenge-illustration > img');
        (0, _chai.expect)($illustration.length).to.equal(1);
      });

      (0, _mocha.it)('25.2 Cette image a un alt text “ceci est une image”', function () {
        var $illustration = findWithAssert('.challenge-illustration > img');
        (0, _chai.expect)($illustration.attr('alt')).to.contains('ceci est une image');
      });
    });

    (0, _mocha.describe)("Quand l'épreuve ne contient pas d'illustration en consigne", function () {

      (0, _mocha.before)(function () {
        return visit('/challenges/qcu_challenge_id/preview');
      });

      (0, _mocha.it)("25.3 La section d'illustration est cachée", function () {
        var $attachmentLink = $('.challenge-illustration');
        (0, _chai.expect)($attachmentLink.length).to.equal(0);
      });
    });
  });
});
define('pix-live/tests/acceptance/25-image-sous-la-consigne-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/25-image-sous-la-consigne-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('acceptance/25-image-sous-la-consigne-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/acceptance/257-page-accueuil', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)('Acceptance | 1 - Accéder à la plateforme pour démarrer un test', function () {

    var application = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.before)(function () {
      visit('/');
    });

    (0, _mocha.it)('1.0 peut visiter /', function () {
      (0, _chai.expect)(currentURL()).to.equal('/');
    });

    (0, _mocha.it)('1.1 la landing page contient un pitch de présentation', function () {
      (0, _chai.expect)(findWithAssert('.first-page-hero__main-value-prop').text()).to.contains('Développez vos compétences numériques');
    });
  });
});
define('pix-live/tests/acceptance/257-page-accueuil.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/257-page-accueuil.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('acceptance/257-page-accueuil.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/acceptance/259-afficher-logo-beta-test', ['exports', 'mocha', 'chai', 'lodash/lodash', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _lodashLodash, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)('Acceptance | 259 - Afficher le logo BETA | ', function () {

    var application = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.it)('Le logo est présent sur la page index', function () {
      visit('/');
      andThen(function () {
        findWithAssert($('img[src="images/pix-logo.svg"]'));
      });
    });

    (0, _mocha.it)('Le logo est présent sur la page de liste des tests', function () {
      visit('/home');
      andThen(function () {
        findWithAssert($('img[src="images/pix-logo.svg"]'));
      });
    });

    (0, _mocha.it)('Le logo est présent sur la page d\'une épreuve', function () {
      visit('/assessments/new_assessment_id/challenges/qcu_challenge_id');
      andThen(function () {
        findWithAssert($('img[src="images/pix-logo.svg"]'));
      });
    });
  });
});
define('pix-live/tests/acceptance/259-afficher-logo-beta-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/259-afficher-logo-beta-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('acceptance/259-afficher-logo-beta-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/acceptance/27-telecharger-une-piece-jointe-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)("Acceptance | 27 - Télécharger une pièce jointe depuis la consigne d'une épreuve | ", function () {
    var application = undefined;
    var challenge = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.describe)("Quand l'épreuve contient une pièce jointe en consigne", function () {

      (0, _mocha.before)(function () {
        return visit('/challenges/qcu_challenge_with_attachment_id/preview');
      });

      (0, _mocha.it)("27.1 Il existe un moyen pour télécharger la pièce jointe d'une épreuve dans la zone de consigne", function () {
        var $attachmentLink = findWithAssert('.challenge-attachment > a');
        (0, _chai.expect)($attachmentLink.length).to.equal(1);
      });

      (0, _mocha.it)("27.2 Le lien de la pièce jointe contient le nom du fichier et son extension", function () {
        var $attachmentLink = $('.challenge-attachment > a');
        (0, _chai.expect)($attachmentLink.text()).to.contains('Télécharger le fichier');
        (0, _chai.expect)($attachmentLink.text()).to.contains('example_of_filename.pdf');
        (0, _chai.expect)($attachmentLink.attr('href')).to.equal('http://example_of_url');
      });

      (0, _mocha.it)("27.3 Il n'y a qu'un seul fichier téléchargeable", function () {
        var $attachment = findWithAssert('.challenge-attachment > a');
        (0, _chai.expect)($attachment.length).to.equal(1);
      });
    });

    (0, _mocha.describe)("Quand l'épreuve ne contient pas de pièce jointe en consigne", function () {

      (0, _mocha.before)(function () {
        return visit('/challenges/qcu_challenge_id/preview');
      });

      (0, _mocha.it)("27.4 La section de téléchargement des pièces jointes est cachée", function () {
        var $attachmentLink = $('.challenge-attachment > a');
        (0, _chai.expect)($attachmentLink.length).to.equal(0);
      });
    });
  });
});
define('pix-live/tests/acceptance/27-telecharger-une-piece-jointe-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/27-telecharger-une-piece-jointe-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('acceptance/27-telecharger-une-piece-jointe-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/acceptance/3-demarrer-un-test-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)('Acceptance | 3 - Démarrer un test |', function () {

    var application = undefined;
    var challenge = undefined;
    var assessment = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.before)(function () {
      return visit('/home');
    });

    (0, _mocha.it)('3.1. Je peux démarrer un test depuis la liste des tests de la page d\'accueil', function () {
      var $startLink = findWithAssert('.start-button')[0];
      (0, _chai.expect)($startLink.text).to.contains('Démarrer le test');
      (0, _chai.expect)($startLink.href).to.contains('/courses/simple_course_id/assessment');
    });

    (0, _mocha.it)('3.2. Quand je démarre un test, je suis redirigé vers la première épreuve du test', function () {
      var $startLink = findWithAssert('.start-button')[0];
      return click($startLink).then(function () {
        findWithAssert('#assessment-challenge');
        (0, _chai.expect)(currentURL()).to.contains('/assessments/new_assessment_id/challenges/qcm_challenge_id');
      });
    });
  });
});
define('pix-live/tests/acceptance/3-demarrer-un-test-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/3-demarrer-un-test-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('acceptance/3-demarrer-un-test-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/acceptance/32-creer-une-epreuve-qcu-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)('Acceptance | 32 - Créer une épreuve de type QCU | ', function () {

    var application = undefined;
    var challenge = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.describe)('32 - Prévisualiser une épreuve |', function () {

      var challengeId = undefined;

      (0, _mocha.before)(function () {
        return visit('/challenges/qcu_challenge_id/preview');
      });

      (0, _mocha.it)('32.1. Il est possible de prévisualiser une épreuve en accédant à l\'URL /challenges/:id/preview', function () {
        (0, _chai.expect)(currentURL()).to.equal('/challenges/qcu_challenge_id/preview');
        (0, _chai.expect)(findWithAssert('#challenge-preview'));
      });

      (0, _mocha.describe)('On affiche', function () {

        var $challenge = undefined;

        (0, _mocha.before)(function () {
          $challenge = findWithAssert('#challenge-preview');
        });

        (0, _mocha.it)('32.2 la consigne de l\'épreuve', function () {
          (0, _chai.expect)($challenge.find('.challenge-instruction').text()).to.contain('Julie a déposé un document dans un espace de stockage partagé avec Pierre. Elle lui envoie un mail pour l’en informer. Quel est le meilleur message ?');
        });
      });
    });
  });
});
define('pix-live/tests/acceptance/32-creer-une-epreuve-qcu-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/32-creer-une-epreuve-qcu-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('acceptance/32-creer-une-epreuve-qcu-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/acceptance/37-previsualiser-un-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)('Acceptance | 37 - Prévisualiser un test |', function () {

    var challenges = undefined;
    var course = undefined;
    var lastChallengeId = undefined;

    var application = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.describe)("Prévisualiser la première page d'un test |", function () {

      (0, _mocha.before)(function () {
        visit('/courses/simple_course_id/preview');
      });

      (0, _mocha.it)("37.1. L'accès à la preview d'un test se fait en accédant à l'URL /courses/:course_id/preview", function () {
        (0, _chai.expect)(currentURL()).to.equal('/courses/simple_course_id/preview');
      });

      var $preview = undefined;

      (0, _mocha.describe)('On affiche', function () {

        (0, _mocha.before)(function () {
          $preview = findWithAssert('#course-preview');
        });

        (0, _mocha.it)('37.2. le nom du test', function () {
          (0, _chai.expect)($preview.find('.course-name').text()).to.contains("Name of the course");
        });

        (0, _mocha.it)('37.3. la description du test', function () {
          (0, _chai.expect)($preview.find('.course-description').text()).to.contains("A short description of the course");
        });

        (0, _mocha.it)('37.4. un bouton pour démarrer la simulation du test et qui mène à la première question', function () {
          var $playButton = findWithAssert('.simulate-button');
          (0, _chai.expect)($playButton.text()).to.be.equals('Simuler le test');
          (0, _chai.expect)($playButton.attr('href')).to.be.equals('/courses/simple_course_id/preview/challenges/qcm_challenge_id');
        });
      });
    });

    (0, _mocha.describe)("Prévisualiser une épreuve dans le cadre d'un test |", function () {

      (0, _mocha.before)(function () {
        visit('/courses/simple_course_id/preview/challenges/qcm_challenge_id');
      });

      (0, _mocha.it)("37.5. L'accès à la preview d'une épreuve d'un testse fait en accédant à l'URL /courses/:course_id/preview/challenges/:challenge_id", function () {
        (0, _chai.expect)(currentURL()).to.equal('/courses/simple_course_id/preview/challenges/qcm_challenge_id');
      });

      (0, _mocha.describe)('On affiche', function () {

        var $challenge = undefined;

        (0, _mocha.before)(function () {
          $challenge = findWithAssert('.challenge-preview');
        });

        (0, _mocha.it)("37.6. la consigne de l'épreuve", function () {
          (0, _chai.expect)($challenge.find('.challenge-instruction').html()).to.contain("Que peut-on dire des œufs de catégorie A ?");
        });

        (0, _mocha.it)("37.7. un bouton pour accéder à l'épreuve suivante", function () {
          (0, _chai.expect)(findWithAssert('a.challenge-item-actions__validate-action').text()).to.contains('Je valide');
        });
      });
    });
  });
});
define('pix-live/tests/acceptance/37-previsualiser-un-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/37-previsualiser-un-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('acceptance/37-previsualiser-un-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/acceptance/4-demarrer-une-epreuve-qcu-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  //irrelevant
  _mocha.describe.skip('Acceptance | 4 - Démarrer une épreuve |', function () {

    var propositions = ["J’ai déposé le document ici : P: > Equipe > Communication > Textes > intro.odt", "Ci-joint le document que j’ai déposé dans l’espace partagé", "J’ai déposé le document intro.odt dans l’espace partagé", "J’ai déposé un nouveau document dans l’espace partagé, si tu ne le trouves pas je te l’enverrai par mail"];
    var application = undefined;
    var challenge = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.before)(function () {
      return visit('/assessments/an_assessment_id/challenges/qcu_challenge_id');
    });

    (0, _mocha.describe)('Les informations visibles pour une épreuve de type QCU sont :', function () {

      (0, _mocha.it)('4.2. la consigne de l\'épreuve', function () {
        var $instruction = findWithAssert('.challenge-instruction');
        (0, _chai.expect)($instruction.text()).to.contain('Julie a déposé un document dans un espace de stockage partagé avec Pierre. Elle lui envoie un mail pour l’en informer. Quel est le meilleur message ?');
      });

      (0, _mocha.it)('4.3. les propositions de l\'épreuve', function () {
        var $proposals = findWithAssert('.challenge-proposal');
        (0, _chai.expect)($proposals).to.have.lengthOf(4);
        (0, _chai.expect)($proposals.eq(0).text()).to.contains(propositions[0]);
        (0, _chai.expect)($proposals.eq(1).text()).to.contains(propositions[1]);
        (0, _chai.expect)($proposals.eq(2).text()).to.contains(propositions[2]);
      });
    });

    (0, _mocha.it)('4.4. affiche le bouton "Valider" permettant de sauvegarder la réponse saisie et de passer à l\'épreuve suivante ', function () {
      (0, _chai.expect)(findWithAssert('a.challenge-item-actions__validate-action').text()).to.contains('Je valide');
    });

    (0, _mocha.it)('4.5. affiche le bouton "Passer" permettant de passer à l\'épreuve suivante sans avoir saisi de réponse', function () {
      (0, _chai.expect)(findWithAssert('a.challenge-item-actions__skip-action').text()).to.contains('Je passe');
    });
  });
});
define('pix-live/tests/acceptance/4-demarrer-une-epreuve-qcu-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/4-demarrer-une-epreuve-qcu-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('acceptance/4-demarrer-une-epreuve-qcu-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/acceptance/6-valider-une-epreuve-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  function getValidateActionLink() {
    return $('a.challenge-item-actions__validate-action')[0];
  }

  (0, _mocha.describe)('Acceptance | 6 - Valider une épreuve |', function () {

    var application = undefined;
    var challenges = undefined;

    var lastChallengeId = undefined;

    var $progressBar = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.before)(function () {
      return visit('/assessments/in_progress_assessment_id/challenges/qcm_challenge_id');
    });

    (0, _mocha.before)(function () {
      $progressBar = findWithAssert('.pix-progress-bar');
    });

    (0, _mocha.it)("6.0. La barre de progression commence à 1", function () {
      var expectedText = "1";
      (0, _chai.expect)($progressBar.text()).to.contains(expectedText);
    });
    (0, _mocha.it)("6.1. Je peux valider ma réponse à une épreuve via un bouton 'Je valide'", function () {
      (0, _chai.expect)(findWithAssert('a.challenge-item-actions__validate-action')).to.have.lengthOf(1);
    });

    (0, _mocha.describe)("quand je valide ma réponse à une épreuve", function () {

      (0, _mocha.it)("6.3. Si l'épreuve que je viens de valider n'était pas la dernière du test, je suis redirigé vers l'épreuve suivante", function () {
        return click('.challenge-proposal:first input[type="checkbox"]').then(function () {
          var $validateButton = getValidateActionLink();
          return click($validateButton).then(function () {
            (0, _chai.expect)(currentURL()).to.contains('/assessments/in_progress_assessment_id/challenges/qcu_challenge_id');
          });
        });
      });

      (0, _mocha.it)("6.4. La barre de progression avance d'une unité, de 1 à 2.", function () {
        var expectedText = "2";
        (0, _chai.expect)($progressBar.text()).to.contains(expectedText);
      });

      (0, _mocha.it)("6.5. Si l'épreuve que je viens de valider était la dernière du test, je suis redirigé vers la page de fin du test", function () {
        visit('/assessments/in_progress_assessment_id/challenges/qrocm_challenge_id').then(function () {
          fillIn('input[name="logiciel"]', 'COUCOU').then(function () {
            var $validateButton = getValidateActionLink();
            return click($validateButton).then(function () {
              (0, _chai.expect)(currentURL()).to.contains('/assessments/in_progress_assessment_id/results');
            });
          });
        });
      });
    });
  });
});
define('pix-live/tests/acceptance/6-valider-une-epreuve-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/6-valider-une-epreuve-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('acceptance/6-valider-une-epreuve-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/adapters/application.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - adapters/application.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('adapters/application.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/app.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - app.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('app.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/components/app-header.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/app-header.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('components/app-header.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/components/beta-logo.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/beta-logo.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('components/beta-logo.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/components/challenge-item.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/challenge-item.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('components/challenge-item.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/components/corner-ribbon.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/corner-ribbon.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('components/corner-ribbon.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/components/course-banner.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/course-banner.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('components/course-banner.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/components/first-page.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/first-page.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('components/first-page.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/components/get-result.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/get-result.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('components/get-result.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/components/identification-form.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/identification-form.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('components/identification-form.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/components/load-email.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/load-email.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('components/load-email.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/components/progress-bar.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/progress-bar.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('components/progress-bar.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/components/user-menu.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/user-menu.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('components/user-menu.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/controllers/assessments/get-challenge.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - controllers/assessments/get-challenge.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('controllers/assessments/get-challenge.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/controllers/courses/get-challenge-preview.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - controllers/courses/get-challenge-preview.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('controllers/courses/get-challenge-preview.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/controllers/home.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - controllers/home.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('controllers/home.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/helpers/convert-to-html.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - helpers/convert-to-html.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('helpers/convert-to-html.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
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
    describe("Acceptance | visiting " + name, function () {
      beforeEach(function () {
        this.application = (0, _pixLiveTestsHelpersStartApp['default'])();
      });

      afterEach(function () {
        return (0, _pixLiveTestsHelpersDestroyApp['default'])(this.application);
      });
    });
  };
});
/* globals describe, beforeEach, afterEach */
define('pix-live/tests/helpers/describe-visiting.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - helpers/describe-visiting.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('helpers/describe-visiting.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application.app, 'destroy');
    server.shutdown();
  }
});
define('pix-live/tests/helpers/destroy-app.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - helpers/destroy-app.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('helpers/destroy-app.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
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
      if (!true) {
        var error = new chai.AssertionError('helpers/eq.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
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
      if (!true) {
        var error = new chai.AssertionError('helpers/resolver.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/helpers/start-app', ['exports', 'ember', 'pix-live/app', 'pix-live/config/environment'], function (exports, _ember, _pixLiveApp, _pixLiveConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = {};

    var attributes = _ember['default'].merge({}, _pixLiveConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application.app = _pixLiveApp['default'].create(attributes);
      application.app.setupForTesting();
      application.app.injectTestHelpers();
    });

    return application;
  }
});
define('pix-live/tests/helpers/start-app.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - helpers/start-app.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('helpers/start-app.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/helpers/strip-instruction.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - helpers/strip-instruction.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('helpers/strip-instruction.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/initializers/enable-sentry.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - initializers/enable-sentry.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('initializers/enable-sentry.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/initializers/router.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - initializers/router.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('initializers/router.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/integration/components/challenge-item-test', ['exports', 'chai', 'ember-mocha', 'mocha', 'ember'], function (exports, _chai, _emberMocha, _mocha, _ember) {

  function renderChallengeItem() {
    var challengeAttributes = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var validateHandler = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
    var errorHandler = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

    var challenge = _ember['default'].Object.create(challengeAttributes);
    this.set('challenge', challenge);

    var assessment = _ember['default'].Object.create({});
    this.set('assessment', assessment);
    this.set('validateHandler', validateHandler || function () {
      return null;
    });
    this.set('errorHandler', errorHandler || function () {
      return null;
    });

    this.render(_ember['default'].HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.8.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 106
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'challenge-item', [['get', 'challenge', ['loc', [null, [1, 17], [1, 26]]], 0, 0, 0, 0], ['get', 'assessment', ['loc', [null, [1, 27], [1, 37]]], 0, 0, 0, 0]], ['onValidated', ['subexpr', 'action', [['get', 'validateHandler', ['loc', [null, [1, 58], [1, 73]]], 0, 0, 0, 0]], [], ['loc', [null, [1, 50], [1, 74]]], 0, 0], 'onError', ['subexpr', 'action', [['get', 'errorHandler', ['loc', [null, [1, 91], [1, 103]]], 0, 0, 0, 0]], [], ['loc', [null, [1, 83], [1, 104]]], 0, 0]], ['loc', [null, [1, 0], [1, 106]]], 0, 0]],
        locals: [],
        templates: []
      };
    })()));
  }

  function renderChallengeItem_challengePreview() {
    var challengeAttributes = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var challenge = _ember['default'].Object.create(challengeAttributes);
    this.set('challenge', challenge);
    this.render(_ember['default'].HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.8.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 28
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'challenge-item', [['get', 'challenge', ['loc', [null, [1, 17], [1, 26]]], 0, 0, 0, 0]], [], ['loc', [null, [1, 0], [1, 28]]], 0, 0]],
        locals: [],
        templates: []
      };
    })()));
  }

  function validateChallenge() {
    this.$('a.challenge-item-actions__validate-action').click();
  }

  (0, _emberMocha.describeComponent)('challenge-item', 'Integration | Component | ChallengeItem', {
    integration: true
  }, function () {

    (0, _mocha.describe)('for a given challenge', function () {

      (0, _emberMocha.it)('should render challenge instruction', function () {
        // given
        var instruction = 'My challenge instruction';

        // when
        renderChallengeItem.call(this, { instruction: instruction });

        // then
        (0, _chai.expect)(this.$('.challenge-instruction').text()).to.contains(instruction);
      });

      (0, _emberMocha.it)('should display "Skip" button ', function () {
        // when
        renderChallengeItem.call(this);

        // then
        (0, _chai.expect)(this.$('.challenge-item-actions__skip-action')).to.have.lengthOf(1);
      });

      (0, _emberMocha.it)('should display "Validate" button ', function () {
        // when
        renderChallengeItem.call(this);

        // then
        (0, _chai.expect)(this.$('a.challenge-item-actions__validate-action')).to.have.lengthOf(1);
      });

      (0, _emberMocha.it)('should display an img tag with “ceci est une image” alt text', function () {
        // when
        renderChallengeItem.call(this, { illustrationUrl: 'http://my.illustration.png' });

        // then
        var $illustration = this.$('.challenge-illustration > img');
        (0, _chai.expect)($illustration.attr('alt')).to.contains('ceci est une image');
      });

      (0, _emberMocha.it)('should display an img tag with src attribute equals to the challenge.illustrationUrl property', function () {
        // given
        var illustrationUrl = 'http://my.illustration.png';
        renderChallengeItem.call(this, { illustrationUrl: illustrationUrl });

        var $illustration = this.$('.challenge-illustration > img');
        (0, _chai.expect)($illustration.attr('src')).to.equals(illustrationUrl);
      });
    });

    (0, _mocha.describe)('when used with mode "challenge-preview"', function () {

      (0, _emberMocha.it)('should not display "Skip" button', function () {
        // when
        renderChallengeItem_challengePreview.call(this);

        // then
        (0, _chai.expect)(this.$('.challenge-item-actions__skip-action')).to.have.lengthOf(0);
      });

      (0, _emberMocha.it)('should not display "Validate" button', function () {
        // when
        renderChallengeItem_challengePreview.call(this);

        // then
        (0, _chai.expect)(this.$('a.challenge-item-actions__validate-action')).to.have.lengthOf(0);
      });
    });

    (0, _mocha.describe)('Validating the challenge', function () {

      (0, _emberMocha.it)('should callback the validate action when the user click on validate', function (done) {
        // given
        renderChallengeItem.call(this, { type: 'QCU', _proposalsAsArray: ['Xi', 'Fu', 'Mi'] }, function () {
          return done();
        });

        // when
        this.$('.challenge-proposal:first input[type="radio"]').click();
        this.$('a.challenge-item-actions__validate-action').click();
      });

      (0, _emberMocha.it)('should call "onValidated" callback with good value for QCU (i.e. proposal index + 1)', function (done) {
        // given
        renderChallengeItem.call(this, {
          type: 'QCU',
          _proposalsAsArray: ['Xi', 'Fu', 'Mi']
        }, function (_challenge, _assessment, answerValue) {

          // then
          (0, _chai.expect)(answerValue).to.equal("1");
          done();
        });

        // when
        this.$('.challenge-proposal:first input[type="radio"]').click();
        this.$('a.challenge-item-actions__validate-action').click();
      });
    });

    (0, _mocha.describe)('Skipping the challenge', function () {

      (0, _emberMocha.it)('save #ABAND# as value when clicked', function (done) {

        renderChallengeItem.call(this, { _proposalsAsArray: ['1', '2', '3'] }, function (_challenge, _assessment, answerValue) {

          (0, _chai.expect)(answerValue).to.equal('#ABAND#');
          done();
        });

        this.$('.challenge-item-actions__skip-action').click();
      });
    });

    (0, _mocha.describe)('Error alert box', function () {

      (0, _emberMocha.it)("should be hidden by default", function (done) {
        var _this = this;

        // when
        renderChallengeItem.call(this, { _proposalsAsArray: ['Xi', 'Fu', 'Mi'] });

        // then
        _ember['default'].run.next(function () {
          (0, _chai.expect)(_this.$('.alert')).to.have.lengthOf(0);
          done();
        });
      });

      (0, _mocha.describe)('when validating a challenge without having selected a proposal', function () {

        (0, _emberMocha.it)("should be displayed", function (done) {
          var _this2 = this;

          // given
          renderChallengeItem.call(this, { type: 'QCU', _proposalsAsArray: ['Xi', 'Fu', 'Mi'] });

          // when
          validateChallenge.call(this);

          _ember['default'].run.next(function () {
            // then
            var $alertError = _this2.$('.alert');
            (0, _chai.expect)($alertError).to.have.lengthOf(1);
            (0, _chai.expect)($alertError.text()).to.contains('Pour valider');
            done();
          });
        });
      });
    });

    (0, _mocha.describe)('Challenges types', function () {

      ['QCU', 'QCUIMG'].forEach(function (qcuType) {
        (0, _mocha.describe)(qcuType, function () {

          (0, _emberMocha.it)('should render challenge proposals as a list of proposal', function () {
            // when
            renderChallengeItem.call(this, { type: qcuType, _proposalsAsArray: ['Xi', 'Fu', 'Mi'] });

            // then
            var $proposals = this.$('.challenge-proposal');
            (0, _chai.expect)($proposals).to.have.lengthOf(3);
            (0, _chai.expect)($proposals.eq(0).text()).to.contains('Xi');
            (0, _chai.expect)($proposals.eq(1).text()).to.contains('Fu');
            (0, _chai.expect)($proposals.eq(2).text()).to.contains('Mi');
          });

          (0, _emberMocha.it)('should render challenge proposals as different radios buttons', function () {
            // when
            renderChallengeItem.call(this, { type: qcuType, _proposalsAsArray: ['Xi', 'Fu', 'Mi'] });

            // then
            var $proposals = this.$('.challenge-proposal input[type="radio"]');
            (0, _chai.expect)($proposals).to.have.lengthOf(3);
          });
        });
      });

      ['QCM', 'QCMIMG'].forEach(function (qcmType) {
        (0, _mocha.describe)(qcmType, function () {
          (0, _emberMocha.it)('should render challenge proposals as a list of checkboxes', function () {
            renderChallengeItem.call(this, { type: qcmType, _proposalsAsArray: ['Xi', 'Fu', 'Mi'] });

            var $proposals = this.$('.challenge-proposal input[type="checkbox"]');
            (0, _chai.expect)($proposals).to.have.lengthOf(3);
          });

          (0, _emberMocha.it)('should add checked proposals in the answer property as an array', function (done) {
            renderChallengeItem.call(this, {
              type: qcmType,
              _proposalsAsArray: ['Xi', 'Fu', 'Mi']
            }, function (_challenge, _assessment, answer) {
              (0, _chai.expect)(answer).to.equal('1, 3');
              done();
            });

            this.$('.challenge-proposal:nth(0) input[type="checkbox"]').click();
            this.$('.challenge-proposal:nth(2) input[type="checkbox"]').click();
            this.$('a.challenge-item-actions__validate-action').click();
          });
        });
      });

      (0, _mocha.describe)('QROC', function () {

        (0, _emberMocha.it)('should render challenge proposals as different text span', function () {
          // when
          renderChallengeItem.call(this, {
            type: 'QROC', _proposalsAsBlocks: [{ text: 'Reims' }, { input: 'reims' }, { text: '-' }, { input: 'losc' }, { text: 'Losc' }]
          });

          // then
          var $proposalsText = this.$('.challenge-proposals span');
          (0, _chai.expect)($proposalsText).to.have.lengthOf(3);
          (0, _chai.expect)($proposalsText.text()).to.contains('Reims-Losc');
        });

        (0, _emberMocha.it)('should render challenge propsals as different input blocks', function () {
          // when
          renderChallengeItem.call(this, {
            type: 'QROC', _proposalsAsBlocks: [{ text: 'Reims' }, { input: 'reims' }, { text: '-' }, { input: 'losc' }, { text: 'Losc' }]
          });

          // then
          var $proposalsInput = this.$('.challenge-proposals input[type="text"]');
          (0, _chai.expect)($proposalsInput).to.have.lengthOf(2);
        });

        (0, _emberMocha.it)('should render challenge propsals as different breakline blocks', function () {
          // when
          renderChallengeItem.call(this, {
            type: 'QROC', _proposalsAsBlocks: [{ text: 'Reims' }, { breakline: true }, { input: 'reims' }, { breakline: true }, { text: '-' }, { input: 'losc' }, { breakline: true }, { text: 'Losc' }]
          });

          // then
          var $breaklines = this.$('.challenge-proposals hr');
          (0, _chai.expect)($breaklines).to.have.lengthOf(3);
        });
      });
    });
  });
});
define('pix-live/tests/integration/components/challenge-item-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - integration/components/challenge-item-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('integration/components/challenge-item-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/integration/components/corner-ribbon-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeComponent)('corner-ribbon', 'Integration: CornerRibbonComponent', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      this.render(Ember.HTMLBars.template((function () {
        return {
          meta: {
            'revision': 'Ember@2.8.3',
            'loc': {
              'source': null,
              'start': {
                'line': 1,
                'column': 0
              },
              'end': {
                'line': 1,
                'column': 17
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [['content', 'corner-ribbon', ['loc', [null, [1, 0], [1, 17]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })()));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
/* jshint expr:true */
define('pix-live/tests/integration/components/corner-ribbon-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - integration/components/corner-ribbon-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('integration/components/corner-ribbon-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/integration/components/first-page-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeComponent)('first-page', 'Integration: FirstPageComponent', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#first-page}}
      //     template content
      //   {{/first-page}}
      // `);

      this.render(Ember.HTMLBars.template((function () {
        return {
          meta: {
            'revision': 'Ember@2.8.3',
            'loc': {
              'source': null,
              'start': {
                'line': 1,
                'column': 0
              },
              'end': {
                'line': 1,
                'column': 14
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [['content', 'first-page', ['loc', [null, [1, 0], [1, 14]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })()));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
/* jshint expr:true */
define('pix-live/tests/integration/components/first-page-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - integration/components/first-page-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('integration/components/first-page-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/integration/components/get-result-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeComponent)('get-result', 'Integration: GetResultComponent', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      this.render(Ember.HTMLBars.template((function () {
        return {
          meta: {
            'revision': 'Ember@2.8.3',
            'loc': {
              'source': null,
              'start': {
                'line': 1,
                'column': 0
              },
              'end': {
                'line': 1,
                'column': 14
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [['content', 'get-result', ['loc', [null, [1, 0], [1, 14]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })()));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
/* jshint expr:true */
define('pix-live/tests/integration/components/get-result-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - integration/components/get-result-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('integration/components/get-result-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/integration/components/load-email-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeComponent)('load-email', 'Integration: LoadEmailComponent', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#load-email}}
      //     template content
      //   {{/load-email}}
      // `);

      this.render(Ember.HTMLBars.template((function () {
        return {
          meta: {
            'revision': 'Ember@2.8.3',
            'loc': {
              'source': null,
              'start': {
                'line': 1,
                'column': 0
              },
              'end': {
                'line': 1,
                'column': 14
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [['content', 'load-email', ['loc', [null, [1, 0], [1, 14]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })()));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
/* jshint expr:true */
define('pix-live/tests/integration/components/load-email-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - integration/components/load-email-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('integration/components/load-email-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/models/answer.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - models/answer.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('models/answer.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/models/assessment.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - models/assessment.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('models/assessment.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/models/challenge.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - models/challenge.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('models/challenge.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/models/challenge/proposals-as-array-mixin.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - models/challenge/proposals-as-array-mixin.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('models/challenge/proposals-as-array-mixin.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/models/challenge/proposals-as-blocks-mixin.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - models/challenge/proposals-as-blocks-mixin.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('models/challenge/proposals-as-blocks-mixin.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/models/course.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - models/course.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('models/course.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/models/user.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - models/user.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('models/user.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - resolver.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('resolver.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/router.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - router.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('router.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/routes/assessments/get-challenge.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - routes/assessments/get-challenge.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('routes/assessments/get-challenge.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/routes/assessments/get-results.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - routes/assessments/get-results.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('routes/assessments/get-results.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/routes/challenges/get-preview.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - routes/challenges/get-preview.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('routes/challenges/get-preview.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/routes/courses/create-assessment.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - routes/courses/create-assessment.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('routes/courses/create-assessment.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/routes/courses/get-challenge-preview.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - routes/courses/get-challenge-preview.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('routes/courses/get-challenge-preview.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/routes/courses/get-course-preview.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - routes/courses/get-course-preview.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('routes/courses/get-course-preview.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/routes/home.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - routes/home.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('routes/home.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/routes/index.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - routes/index.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('routes/index.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/routes/preferences.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - routes/preferences.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('routes/preferences.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/services/assessment.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - services/assessment.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('services/assessment.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/services/delay.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - services/delay.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('services/delay.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/services/session.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - services/session.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('services/session.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
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
      if (!true) {
        var error = new chai.AssertionError('test-helper.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/unit/components/challenge-item-test', ['exports', 'chai', 'ember-mocha', 'mocha'], function (exports, _chai, _emberMocha, _mocha) {

  (0, _emberMocha.describeModule)('component:challenge-item', 'Unit | Component | ChallengeItem', {}, function () {

    (0, _emberMocha.it)('exists', function () {
      var challengeItem = this.subject();
      (0, _chai.expect)(challengeItem).to.be.ok;
    });

    describe('#onSelectedProposalChanged', function () {

      (0, _emberMocha.it)('is called when selectedProposal value has been changed', function () {
        // given
        var challengeItem = this.subject();
        challengeItem.set('errorMessage', 'an error');

        // when
        challengeItem.set('selectedProposal', 1);

        // then
        (0, _chai.expect)(challengeItem.get('errorMessage')).to.be['null'];
      });
    });

    describe('#_getErrorMessage', function () {

      [{ type: 'QCU', message: "Pour valider, sélectionner une réponse. Sinon, passer." }, { type: 'QCUIMG', message: "Pour valider, sélectionner une réponse. Sinon, passer." }, { type: 'QROC', message: "Pour valider, saisir une réponse. Sinon, passer." }, { type: 'QROCM', message: "Pour valider, saisir au moins une réponse. Sinon, passer." }, { type: '🎩🗿👻', message: "Pour valider, répondez correctement à l'épreuve. Sinon passer." }, { type: 'QCM', message: "Pour valider, sélectionner au moins une réponse. Sinon, passer." }, { type: 'QCMIMG', message: "Pour valider, sélectionner au moins une réponse. Sinon, passer." }].forEach(function (_ref) {
        var type = _ref.type;
        var message = _ref.message;

        (0, _emberMocha.it)('type ' + type + ': expect error message to be "' + message + '"', function () {

          var challengeItem = this.subject({ challenge: { type: type } });
          (0, _chai.expect)(challengeItem._getErrorMessage()).to.equal(message);
        });
      });
    });

    describe('#_hasError', function () {

      ['QCU', 'QCUIMG'].forEach(function (challengeType) {
        (0, _emberMocha.it)(challengeType + ' has error when no proposal has been selected', function () {
          var challengeItem = this.subject({ challenge: { type: challengeType }, selectedProposal: null });

          (0, _chai.expect)(challengeItem._hasError()).to.be['true'];
        });

        (0, _emberMocha.it)(challengeType + ' has  no error when a proposal has been selected', function () {
          var challengeItem = this.subject({ challenge: { type: challengeType }, selectedProposal: 1 });

          (0, _chai.expect)(challengeItem._hasError()).to.be['false'];
        });
      });

      ['QCM', 'QCMIMG'].forEach(function (challengeType) {
        (0, _emberMocha.it)(challengeType + ' has error when no proposal has been selected', function () {
          var challengeItem = this.subject({ challenge: { type: challengeType }, answers: null });

          (0, _chai.expect)(challengeItem._hasError()).to.be['true'];
        });

        (0, _emberMocha.it)(challengeType + ' has no error when a proposal has been selected', function () {
          var challengeItem = this.subject({ challenge: { type: challengeType }, answers: [1] });

          (0, _chai.expect)(challengeItem._hasError()).to.be['false'];
        });
      });

      ['QROC', 'QROCM'].forEach(function (challengeType) {
        (0, _emberMocha.it)(challengeType + ' has error when no answer has been given', function () {
          var challengeItem = this.subject({
            challenge: { type: challengeType, _proposalsAsBlocks: [] },
            answers: {}
          });

          (0, _chai.expect)(challengeItem._hasError()).to.be['true'];
        });

        (0, _emberMocha.it)(challengeType + ' has no error when at least one answer has been given', function () {
          var challengeItem = this.subject({
            challenge: { type: challengeType, _proposalsAsBlocks: [{ input: 'yo' }, { input: 'yoyo' }] },
            answers: { yo: 'yo' }
          });

          (0, _chai.expect)(challengeItem._hasError()).to.be['false'];
        });
      });

      (0, _emberMocha.it)('invalid challenge type has no error', function () {
        var challengeItem = this.subject({
          challenge: {
            type: 'Celui dont le PIXCosmos atteint son paroxysme est en mesure de le faire exploser pour créer un Big Bang'
          }
        });

        (0, _chai.expect)(challengeItem._hasError()).to.be['false'];
      });
    });

    describe('#onError is called when an error is raised', function () {

      (0, _emberMocha.it)('is called when no proposal has been selected with the message “Pour valider, sélectionner une réponse. Sinon, passer.”', function (done) {
        var challengeItem = this.subject({ challenge: Ember.Object.create({ type: 'QCU' }) });
        challengeItem.set('onError', function (message) {
          (0, _chai.expect)(message).to.contains("Pour valider, sélectionner une réponse. Sinon, passer.");
          done();
        });

        challengeItem.actions.validate.call(challengeItem);
      });
    });

    describe('#skip action', function () {

      (0, _emberMocha.it)('should clear the error property', function (done) {
        // given
        var challengeItem = this.subject();
        challengeItem.set('errorMessage', 'an error');
        challengeItem.set('onValidated', function () {
          // then
          (0, _chai.expect)(challengeItem.get('errorMessage')).to.be['null'];
          done();
        });

        // when
        challengeItem.actions.skip.call(challengeItem);
      });
    });

    describe('#_getAnswerValue', function () {

      ['QCU', 'QCUIMG'].forEach(function (challengeType) {
        (0, _emberMocha.it)(challengeType + ': should return value + 1 in order to be easier to treat by PixMasters', function () {
          // given
          var challengeItem = this.subject();
          var challenge = Ember.Object.create({ type: challengeType });
          challengeItem.set('challenge', challenge);
          challengeItem.set('selectedProposal', 1);

          // when
          var answer = challengeItem._getAnswerValue();

          // then
          (0, _chai.expect)(answer).to.equal('2');
        });
      });

      (0, _emberMocha.it)("QROC: should return simple answer value as string", function () {
        // given
        var challengeItem = this.subject();
        var challenge = Ember.Object.create({ type: 'QROC' });
        challengeItem.set('challenge', challenge);
        var answers = {
          'variable1': 'value_1'
        };
        challengeItem.set('answers', answers);

        // when
        var answer = challengeItem._getAnswerValue();

        // then
        (0, _chai.expect)(answer).to.equal('value_1');
      });

      (0, _emberMocha.it)("QROCM: should return answer's values concatenated as string", function () {
        // given
        var challengeItem = this.subject();
        var challenge = Ember.Object.create({ type: 'QROCM' });
        challengeItem.set('challenge', challenge);
        var answers = {
          'var_1': 'value_1',
          'var_2': 'value_2',
          'var_3': 'value_3'
        };
        challengeItem.set('answers', answers);

        // when
        var answer = challengeItem._getAnswerValue();

        // then
        (0, _chai.expect)(answer).to.equal('var_1 = "value_1", var_2 = "value_2", var_3 = "value_3"');
      });

      (0, _emberMocha.it)("QROCM: should return answer's values concatenated as string when there is a null answer", function () {
        // given
        var challengeItem = this.subject();
        var challenge = Ember.Object.create({ type: 'QROCM' });
        challengeItem.set('challenge', challenge);
        var answers = {
          'var_1': 'value_1',
          'var_2': null,
          'var_3': 'value_3'
        };
        challengeItem.set('answers', answers);

        // when
        var answer = challengeItem._getAnswerValue();

        // then
        (0, _chai.expect)(answer).to.equal('var_1 = "value_1", var_2 = "null", var_3 = "value_3"');
      });

      ['QCM', 'QCMIMG'].forEach(function (challengeType) {
        (0, _emberMocha.it)(challengeType + ': should return the index of the value +1', function () {
          var challengeItem = this.subject();
          var challenge = Ember.Object.create({ type: challengeType, _proposalsAsArray: ['yo', 'oy', 'pix'] });
          challengeItem.set('challenge', challenge);
          var answers = [2];
          challengeItem.set('answers', answers);

          // when
          var answer = challengeItem._getAnswerValue();

          // then
          (0, _chai.expect)(answer).to.equal('3');
        });

        (0, _emberMocha.it)(challengeType + ': should return the indexes of the values, separated by commas, when one value has been selected', function () {
          var challengeItem = this.subject();
          var challenge = Ember.Object.create({ type: challengeType, _proposalsAsArray: ['yo', 'oy', 'pix'] });
          challengeItem.set('challenge', challenge);
          var answers = [0, 2];
          challengeItem.set('answers', answers);

          // when
          var answer = challengeItem._getAnswerValue();

          // then
          (0, _chai.expect)(answer).to.equal('1, 3');
        });
      });

      (0, _emberMocha.it)('return null when challenge type is invalid', function () {
        var challengeItem = this.subject({
          challenge: {
            type: 'Celui dont le PIXCosmos atteint son paroxysme est en mesure de le faire exploser pour créer un Big Bang'
          }
        });

        (0, _chai.expect)(challengeItem._getAnswerValue()).to.be['null'];
      });
    });

    describe('#updateQrocAnswer action', function () {

      (0, _emberMocha.it)('should add new answer when a new value is set', function () {
        // given
        var challengeItem = this.subject();
        challengeItem.set('answers', {});

        // when
        challengeItem.actions.updateQrocAnswer.call(challengeItem, {
          currentTarget: {
            name: 'my_var',
            value: 'my_val'
          }
        });

        // then
        (0, _chai.expect)(challengeItem.get('answers.my_var')).to.equal('my_val');
      });

      (0, _emberMocha.it)('should update answer when a new value is set', function () {
        // given
        var challengeItem = this.subject();
        challengeItem.set('answers', { 'my_var': 'old_value' });

        // when
        challengeItem.actions.updateQrocAnswer.call(challengeItem, {
          currentTarget: {
            name: 'my_var',
            value: 'new_value'
          }
        });

        // then
        (0, _chai.expect)(challengeItem.get('answers.my_var')).to.equal('new_value');
      });

      (0, _emberMocha.it)('should null the error property', function () {
        var challengeItem = this.subject();
        challengeItem.set('errorMessage', 'an error');

        challengeItem.actions.updateQrocAnswer.call(challengeItem, { currentTarget: { name: 'toto', value: 'plop' } });

        (0, _chai.expect)(challengeItem.get('errorMessage')).to.be['null'];
      });
    });

    describe('#updateQcmAnser action', function () {

      (0, _emberMocha.it)('should use the answers property as an array and push the value when a new value is checked', function () {
        // given
        var challengeItem = this.subject();
        challengeItem.set('answers', {});

        // when
        challengeItem.actions.updateQcmAnswer.call(challengeItem, {
          currentTarget: {
            name: 'my_var',
            checked: true
          }
        });

        // then
        var answers = challengeItem.get('answers');
        (0, _chai.expect)(answers, JSON.stringify(answers)).to.deep.equal(['my_var']);
      });

      (0, _emberMocha.it)('should add new answers when a new value is set', function () {
        // given
        var challengeItem = this.subject();
        challengeItem.set('answers', ['some var']);

        // when
        challengeItem.actions.updateQcmAnswer.call(challengeItem, {
          currentTarget: {
            name: 'another var',
            checked: true
          }
        });

        // then
        var answers = challengeItem.get('answers');
        (0, _chai.expect)(answers, JSON.stringify(answers)).to.deep.equal(['some var', 'another var']);
      });

      (0, _emberMocha.it)('should remove an answer when it is unchecked', function () {
        // given
        var challengeItem = this.subject();
        challengeItem.set('answers', ['some var']);

        // when
        challengeItem.actions.updateQcmAnswer.call(challengeItem, {
          currentTarget: {
            name: 'some var',
            checked: false
          }
        });

        // then
        var answers = challengeItem.get('answers');
        (0, _chai.expect)(answers, JSON.stringify(answers)).to.deep.equal([]);
      });
    });

    describe('#validate action', function () {
      var assessment = Ember.Object.create({});

      describe('when challenge is type QCU/QCM/QCUIMG/QCMIMG', function () {

        var challenge = Ember.Object.create({ type: 'QCU' });

        (0, _emberMocha.it)('send event onValidated when a proposal is selected', function (done) {
          var challengeItem = this.subject({ challenge: challenge, assessment: assessment });

          challengeItem.set('onValidated', function () {
            return done();
          });
          challengeItem.set('selectedProposal', 2);
          challengeItem.actions.validate.call(challengeItem);
        });

        (0, _emberMocha.it)('send event onError when no proposal is selected', function (done) {
          var challengeItem = this.subject({ challenge: challenge, assessment: assessment });

          challengeItem.set('onError', function () {
            return done();
          });
          challengeItem.actions.validate.call(challengeItem);
        });
      });

      describe('when challenge type is QROC/QROCM', function () {

        var challenge = Ember.Object.create({ type: 'QROC', _proposalsAsBlocks: [] });

        (0, _emberMocha.it)('trigger onValidated event', function (done) {
          var challengeItem = this.subject({ challenge: challenge, assessment: assessment });

          challengeItem.set('answers', { toto: 'plop' });
          challengeItem.set('onValidated', function () {
            return done();
          });

          challengeItem.actions.validate.call(challengeItem);
        });

        (0, _emberMocha.it)('QROC: trigger onError event when the input text is not set', function (done) {
          var challengeItem = this.subject({ challenge: challenge, assessment: assessment, answers: null });

          challengeItem.set('onError', function () {
            return done();
          });
          challengeItem.actions.validate.call(challengeItem);
        });

        (0, _emberMocha.it)('QROC: trigger onError event when the input text is "" (empty)', function (done) {
          var challengeItem = this.subject({ challenge: challenge, assessment: assessment, answers: { toto: "" } });

          challengeItem.set('onError', function () {
            return done();
          });
          challengeItem.actions.validate.call(challengeItem);
        });
      });
    });
  });
});
/* jshint expr:true */
define('pix-live/tests/unit/components/challenge-item-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/components/challenge-item-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/components/challenge-item-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/unit/controllers/home-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeModule)('controller:home', 'HomeController', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    // Replace this with your real tests.
    (0, _emberMocha.it)('exists', function () {
      var controller = this.subject();
      (0, _chai.expect)(controller).to.be.ok;
    });
  });
});
/* jshint expr:true */
define('pix-live/tests/unit/controllers/home-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/controllers/home-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/controllers/home-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/unit/helpers/convert-to-html-test', ['exports', 'chai', 'mocha', 'pix-live/helpers/convert-to-html'], function (exports, _chai, _mocha, _pixLiveHelpersConvertToHtml) {

  (0, _mocha.describe)('ConvertToHtmlHelper', function () {
    // Replace this with your real tests.
    (0, _mocha.it)('works', function () {
      var conversion = (0, _pixLiveHelpersConvertToHtml.convertToHtml)(['**a bold sentence**']);
      var boldSentence = conversion;
      (0, _chai.expect)(boldSentence).to.equal('<p><strong>a bold sentence</strong></p>');
    });
    (0, _mocha.it)('skip call with bad arg', function () {
      (0, _chai.expect)((0, _pixLiveHelpersConvertToHtml.convertToHtml)('bad argument')).to.equal('');
      (0, _chai.expect)((0, _pixLiveHelpersConvertToHtml.convertToHtml)([])).to.equal('');
    });
  });
});
/* jshint expr:true */
define('pix-live/tests/unit/helpers/convert-to-html-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/helpers/convert-to-html-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/helpers/convert-to-html-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/unit/helpers/strip-instruction-test', ['exports', 'chai', 'mocha', 'pix-live/helpers/strip-instruction'], function (exports, _chai, _mocha, _pixLiveHelpersStripInstruction) {

  (0, _mocha.describe)('StripInstructionHelper', function () {
    // Replace this with your real tests.
    (0, _mocha.it)('works', function () {
      var result = (0, _pixLiveHelpersStripInstruction.stripInstruction)(['<div class="paragraph"><strong>a bold sentence</strong></div>']);
      (0, _chai.expect)(result).to.equal('a bold sentence...');
    });
  });
});
/* jshint expr:true */
define('pix-live/tests/unit/helpers/strip-instruction-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/helpers/strip-instruction-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/helpers/strip-instruction-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/unit/models/answer-test', ['exports', 'pix-live/tests/test-helper', 'chai', 'ember-mocha'], function (exports, _pixLiveTestsTestHelper, _chai, _emberMocha) {

  (0, _emberMocha.describeModel)('answer', 'Unit | Model | Answer', {
    needs: ['model:assessment', 'model:challenge']
  }, function () {

    (0, _emberMocha.it)('exists', function () {
      var model = this.subject();
      (0, _chai.expect)(model).to.be.ok;
    });

    describe('isResultOk', function () {

      (0, _emberMocha.it)('should return bool', function () {
        var _this = this;

        Ember.run(function () {
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
      if (!true) {
        var error = new chai.AssertionError('unit/models/answer-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/unit/models/challenge-test', ['exports', 'chai', 'ember-mocha', 'mocha'], function (exports, _chai, _emberMocha, _mocha) {

  (0, _emberMocha.describeModel)('challenge', 'Unit | Model | Challenge', {
    needs: ['model:course']
  }, function () {
    (0, _emberMocha.it)('exists', function () {
      var model = this.subject();
      (0, _chai.expect)(model).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/models/challenge-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/models/challenge-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/models/challenge-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/unit/models/challenge/proposals-as-array-mixin-test', ['exports', 'mocha', 'ember-mocha', 'pix-live/models/challenge/proposals-as-array-mixin'], function (exports, _mocha, _emberMocha, _pixLiveModelsChallengeProposalsAsArrayMixin) {

  (0, _mocha.describe)('Unit | Model | Challenge/Propsals As Array Mixin', function () {

    var testData = [{ data: '', expected: [] }, { data: 'foo', expected: [] }, { data: '- foo', expected: ['foo'] }, { data: '-foo\n- bar', expected: ['foo', 'bar'] }, { data: '- cerf-volant', expected: ['cerf-volant'] }, { data: '- xi\n- foo mi', expected: ['xi', 'foo mi'] }, { data: '- joli\n- cerf-volant', expected: ['joli', 'cerf-volant'] }, { data: '- xi\n- foo\n- mi', expected: ['xi', 'foo', 'mi'] }, { data: '-- foo', expected: ['- foo'] }, { data: '- foo\n\r\t\n\r\t\n\r\t\n- bar', expected: ['foo', 'bar'] }];

    var Challenge = Ember.Object.extend(_pixLiveModelsChallengeProposalsAsArrayMixin['default'], {});

    testData.forEach(function (_ref) {
      var data = _ref.data;
      var expected = _ref.expected;

      (0, _emberMocha.it)('"' + data.toString() + '" retourne [' + expected + ']', function () {
        var sut = Challenge.create({ proposals: data });
        expect(sut.get('_proposalsAsArray')).to.deep.equal(expected);
      });
    });
  });
});
define('pix-live/tests/unit/models/challenge/proposals-as-array-mixin-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/models/challenge/proposals-as-array-mixin-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/models/challenge/proposals-as-array-mixin-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/unit/models/challenge/proposals-as-blocks-mixin-test', ['exports', 'ember', 'mocha', 'ember-mocha', 'pix-live/models/challenge/proposals-as-blocks-mixin'], function (exports, _ember, _mocha, _emberMocha, _pixLiveModelsChallengeProposalsAsBlocksMixin) {

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
        expect(blocks, JSON.stringify(blocks)).to.deep.equals(expected);
      });
    });
  });
});
define('pix-live/tests/unit/models/challenge/proposals-as-blocks-mixin-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/models/challenge/proposals-as-blocks-mixin-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/models/challenge/proposals-as-blocks-mixin-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/unit/models/course-test', ['exports', 'pix-live/tests/test-helper', 'chai', 'ember-mocha', 'mocha'], function (exports, _pixLiveTestsTestHelper, _chai, _emberMocha, _mocha) {

  (0, _emberMocha.describeModel)('course', 'Unit | Model | Course', {
    needs: ['model:assessment', 'model:challenge']
  }, function () {

    (0, _emberMocha.it)('exists', function () {
      var model = this.subject();
      (0, _chai.expect)(model).to.be.ok;
    });

    (0, _mocha.describe)('getProgress', function () {

      (0, _emberMocha.it)('currentStep start at 1', function () {
        var _this = this;

        Ember.run(function () {
          // given
          var store = _this.store();
          var challenge = store.createRecord('challenge', {});
          var course = _this.subject({ challenges: [challenge] });

          (0, _chai.expect)(course.getProgress(challenge)).to.have.property('currentStep', 1);
        });
      });

      (0, _emberMocha.it)('maxStep is 2 when there is 2 challenges in the course', function () {
        var _this2 = this;

        Ember.run(function () {
          // given
          var store = _this2.store();
          var challenge1 = store.createRecord('challenge', {});
          var challenge2 = store.createRecord('challenge', {});
          var course = _this2.subject({ challenges: [challenge1, challenge2] });

          (0, _chai.expect)(course.getProgress(challenge1)).to.have.property('maxStep', 2);
          (0, _chai.expect)(course.getProgress(challenge2)).to.have.property('maxStep', 2);
        });
      });

      (0, _emberMocha.it)('currentStep is 2 when there is 2 challenges in the course and called with 2nd test', function () {
        var _this3 = this;

        Ember.run(function () {
          // given
          var store = _this3.store();
          var challenge1 = store.createRecord('challenge', {});
          var challenge2 = store.createRecord('challenge', {});
          var course = _this3.subject({ challenges: [challenge1, challenge2] });

          (0, _chai.expect)(course.getProgress(challenge2)).to.have.property('currentStep', 2);
        });
      });

      (0, _emberMocha.it)('throw an Error when challenge is not part of course', function () {
        var _this4 = this;

        Ember.run(function () {
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
      if (!true) {
        var error = new chai.AssertionError('unit/models/course-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/unit/routes/assessments/get-challenge-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeModule)('route:assessments.get-challenge', 'Assessments.ChallengeRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    (0, _emberMocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
/* jshint expr:true */
define('pix-live/tests/unit/routes/assessments/get-challenge-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/routes/assessments/get-challenge-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/routes/assessments/get-challenge-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/unit/routes/assessments/get-results-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeModule)('route:assessments.get-results', 'Assessments.ResultsRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    (0, _emberMocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
/* jshint expr:true */
define('pix-live/tests/unit/routes/assessments/get-results-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/routes/assessments/get-results-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/routes/assessments/get-results-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/unit/routes/challenges/get-preview-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeModule)('route:challenges.get-preview', 'Unit | Route | challenges.get-preview', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    (0, _emberMocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/routes/challenges/get-preview-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/routes/challenges/get-preview-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/routes/challenges/get-preview-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/unit/routes/courses/get-challenge-preview-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeModule)('route:courses/get-challenge-preview', 'ChallengePreviewRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    (0, _emberMocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });

    // TODO: moar tests
  });
});
define('pix-live/tests/unit/routes/courses/get-challenge-preview-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/routes/courses/get-challenge-preview-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/routes/courses/get-challenge-preview-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/unit/routes/courses/get-course-preview-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeModule)('route:courses/get-course-preview', 'CoursePreviewRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    (0, _emberMocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/routes/courses/get-course-preview-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/routes/courses/get-course-preview-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/routes/courses/get-course-preview-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/unit/routes/home-test', ['exports', 'pix-live/tests/test-helper', 'chai', 'ember-mocha'], function (exports, _pixLiveTestsTestHelper, _chai, _emberMocha) {

  (0, _emberMocha.describeModule)('route:home', 'Unit | Route | home', function () {
    (0, _emberMocha.it)("exists", function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/routes/home-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/routes/home-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/routes/home-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/unit/routes/index-test', ['exports', 'pix-live/tests/test-helper', 'chai', 'ember-mocha'], function (exports, _pixLiveTestsTestHelper, _chai, _emberMocha) {

  (0, _emberMocha.describeModule)('route:index', 'Unit | Route | index', function () {
    (0, _emberMocha.it)("exists", function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/routes/index-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/routes/index-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/routes/index-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/unit/routes/preferences-test', ['exports', 'pix-live/tests/test-helper', 'chai', 'ember-mocha'], function (exports, _pixLiveTestsTestHelper, _chai, _emberMocha) {

  (0, _emberMocha.describeModule)('route:preferences', 'Unit | Route | preferences', function () {
    (0, _emberMocha.it)("exists", function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/routes/preferences-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/routes/preferences-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/routes/preferences-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/unit/services/assessment-test', ['exports', 'chai', 'ember-mocha', 'mocha', 'ember'], function (exports, _chai, _emberMocha, _mocha, _ember) {

  (0, _emberMocha.describeModule)('service:assessment', 'AssessmentService', {
    needs: ['model:assessment', 'model:challenge', 'model:course', 'model:answer']
  }, function () {

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

      (0, _emberMocha.it)('returns a promise', function () {
        var _this = this;

        return _ember['default'].run(function () {
          var store = _this.container.lookup('service:store');

          var _instantiateModels = instantiateModels(store, [{ id: 1 }, { id: 2 }]);

          var challenges = _instantiateModels.challenges;
          var assessment = _instantiateModels.assessment;

          (0, _chai.expect)(_this.subject().getNextChallenge(challenges[0], assessment)).to.respondsTo('then');
        });
      });

      (0, _emberMocha.it)("return the next challenge when current challenge is not the assessment's last one", function () {
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

      (0, _emberMocha.it)("return the next challenge when current challenge is the assessment's latest", function () {
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

      (0, _emberMocha.it)("return challenge model objects well formed", function () {
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
/* jshint expr:true */
define('pix-live/tests/unit/services/assessment-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/services/assessment-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/services/assessment-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/unit/services/delay-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeModule)('service:delay', 'DelayService', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  }, function () {
    // Replace this with your real tests.
    (0, _emberMocha.it)('exists', function () {
      var service = this.subject();
      (0, _chai.expect)(service).to.be.ok;
    });

    (0, _emberMocha.it)('has delay#ms() which return a promise', function () {
      var delay = this.subject();
      (0, _chai.expect)(delay).to.respondsTo('ms');
      var promise = delay.ms(0);
      (0, _chai.expect)(promise).to.respondsTo('then');
    });
  });
});
/* jshint expr:true */
define('pix-live/tests/unit/services/delay-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/services/delay-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/services/delay-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/unit/services/session-test', ['exports', 'chai', 'ember-mocha', 'mocha'], function (exports, _chai, _emberMocha, _mocha) {

  (0, _emberMocha.describeModule)('service:session', 'SessionService', {}, function () {

    (0, _emberMocha.it)('exists', function () {
      var service = this.subject();
      (0, _chai.expect)(service).to.be.ok;
    });

    var store = {};
    var localStorageStub = {

      getItem: function getItem(itemName) {
        return store[itemName];
      },

      setItem: function setItem(itemName, value) {
        store[itemName] = value.toString();
      }
    };
    var originalLocalStorage = window.localStorage;

    (0, _mocha.beforeEach)(function () {
      window.localStorage.getItem = localStorageStub.getItem;
      window.localStorage.setItem = localStorageStub.setItem;
    });

    (0, _mocha.afterEach)(function () {
      window.localStorage.getItem = originalLocalStorage.getItem;
      window.localStorage.setItem = originalLocalStorage.setItem;
    });

    (0, _emberMocha.it)('contains no user by default', function () {
      (0, _chai.expect)(this.subject().get('user')).to.not.exist;
    });

    describe('#save', function () {

      (0, _emberMocha.it)('persists data to Local Storage', function () {
        var session = this.subject();
        var user = {
          firstName: 'firstName',
          lastName: 'lastName',
          email: 'email'
        };
        session.set('user', user);

        session.save();

        (0, _chai.expect)(store['pix-live.session']).to.equal(JSON.stringify({ user: user }));
      });
    });

    describe('#init', function () {

      (0, _emberMocha.it)('restores data from Local Storage', function () {
        // given
        var storedData = {
          user: {
            firstName: 'Thomas',
            lastName: 'Wickham',
            email: 'twi@octo.com'
          }
        };
        localStorageStub.setItem('pix-live.session', JSON.stringify(storedData));

        // when
        var session = this.subject();

        // then
        var user = session.get('user');
        (0, _chai.expect)(user).to.deep.equal(storedData.user);
      });

      (0, _emberMocha.it)('uses an empty session if JSON parsing failed', function () {
        // given
        localStorageStub.setItem('pix-live.session', JSON.stringify({}));

        // when
        var session = this.subject();

        // then
        (0, _chai.expect)(session.get('user')).to.not.exist;
      });
    });

    describe('#isIdentified', function () {

      (0, _emberMocha.it)('returns true if user is set in session', function () {
        // given
        var session = this.subject();
        var user = {
          firstName: 'firstName',
          lastName: 'lastName',
          email: 'email'
        };
        session.set('user', user);

        // then
        (0, _chai.expect)(session.isIdentified()).to.be['true'];
      });

      (0, _emberMocha.it)('returns false if user is not set in session', function () {
        // given
        var session = this.subject();
        session.set('user', null);

        // then
        (0, _chai.expect)(session.isIdentified()).to.be['false'];
      });
    });
  });
});
/* jshint expr:true */
define('pix-live/tests/unit/services/session-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/services/session-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/services/session-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
/* jshint ignore:start */

require('pix-live/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
