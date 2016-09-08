define('pix-live/tests/acceptance/1-accedder-a-la-plateforme-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)('Acceptance | 1 - Accéder à la plateforme pour démarrer un test', function () {
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

    (0, _mocha.it)('1.0 peut visiter /', function () {
      (0, _chai.expect)(currentURL()).to.equal('/');
    });

    (0, _mocha.it)('1.1 la landing page contient un pitch de présentation', function () {
      (0, _chai.expect)(findWithAssert('.sales-pitch').text()).to.contains('PIX est un projet public de plateforme en ligne d\'évaluation');
    });

    (0, _mocha.it)('1.3 la page d\'accueil contient un formulaire Nom / Prénom / Email et un bouton valider', function () {
      (0, _chai.expect)(findWithAssert('#lastname').text()).to.contains('Nom');
      (0, _chai.expect)(findWithAssert('#firstname').text()).to.contains('Prénom');
      (0, _chai.expect)(findWithAssert('#email').text()).to.contains('Email');
    });
  });
});
define('pix-live/tests/acceptance/1-accedder-a-la-plateforme-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/1-accedder-a-la-plateforme-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('acceptance/1-accedder-a-la-plateforme-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/acceptance/10-consulter-l-ecran-de-fin-de-test-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app', 'ember'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp, _ember) {

  (0, _mocha.describe)("Acceptance | 10 - Consulter l'écran de fin d'un test ", function () {

    var application = undefined;
    var assessment = undefined;
    var course = undefined;
    var challenges = undefined;
    var answers = undefined;
    var $assessmentResults = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();

      assessment = server.create('assessment-airtable');
      course = server.create('course-airtable');
      challenges = server.createList('challenge-airtable', 5);
      answers = server.createList('answer-airtable', 5);

      assessment.attachOne('Test', course);
      course.attachMany('Épreuves', challenges);
      for (var i = 0; i < answers.length; i++) {
        var answer = answers[i];
        var challenge = challenges[i];
        answer.attachOne('Evaluation', assessment);
        answer.attachOne('Epreuve', challenge);
      }
      assessment.attachMany('Reponses', answers);
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.before)(function () {
      return visit('/assessments/' + assessment.attrs.id + '/results');
    });

    (0, _mocha.before)(function () {
      $assessmentResults = findWithAssert('#assessment-results');
    });

    (0, _mocha.it)("10.1. se fait en accédant à l'URL /assessments/:assessment_id/results", function () {
      (0, _chai.expect)(currentURL()).to.equal('/assessments/' + assessment.attrs.id + '/results');
    });

    (0, _mocha.it)("10.2. affiche un titre", function () {
      (0, _chai.expect)($assessmentResults.text()).to.contains('Mercix !');
    });

    (0, _mocha.it)("10.3. affiche un texte explicatif", function () {
      var expectedText = "Un PixMaster va étudier vos réponses et échanger avec vous pour recueillir vos impressions.";
      (0, _chai.expect)($assessmentResults.text()).to.contains(expectedText);
    });

    (0, _mocha.it)("10.4. affiche l'intitulé du test", function () {
      (0, _chai.expect)($assessmentResults.text()).to.contains(course.attrs.fields["Nom"]);
    });

    (0, _mocha.it)("10.5. affiche le rapport nombre de réponses saisies sur nombre d'épreuves du test", function () {
      var expectedString = answers.length + ' question(s) sur ' + challenges.length;
      (0, _chai.expect)($assessmentResults.text()).to.contains(expectedString);
    });

    (0, _mocha.it)("11.1. propose un moyen pour revenir à la liste des tests", function () {
      var $homeLink = findWithAssert('.home-link');
      (0, _chai.expect)($homeLink.attr('href')).to.equal('/home');
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

  (0, _mocha.describe)("Acceptance | 10 - Consulter l'écran de fin d'un test ", function () {

    var application = undefined;
    var assessment = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
      assessment = server.create('assessment-airtable');
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.before)(function () {
      return visit('/assessments/' + assessment.attrs.id + '/results');
    });

    (0, _mocha.it)("11.1. propose un moyen pour revenir à la liste des tests", function () {
      var $homeLink = findWithAssert('.home-link');
      (0, _chai.expect)($homeLink.attr('href')).to.equal('/home');
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
define('pix-live/tests/acceptance/14-creer-une-epreuve-qroc-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app', 'rsvp'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp, _rsvp) {

  (0, _mocha.describe)("Acceptance | 14 - Créer une épreuve de type QROC | ", function () {

    var application = undefined;
    var challenge = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
      challenge = server.create('challenge-airtable', {
        fields: {
          'Consigne': 'Quel est le score du match Stade de Reims - LOSC du championnat de France de football 1954-1955 ?',
          'Propositions': 'Stade de Reims ${reims} - ${LOSC} LOSC (ex : 1-1)',
          "Type d'épreuve": 'QROC'
        }
      });
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.before)(function () {
      return visit('/challenges/' + challenge.attrs.id + '/preview');
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
define('pix-live/tests/acceptance/2-voir-liste-tests-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)('Acceptance | 2 - voir la liste des tests', function () {
    var application = undefined;
    var courses = undefined;
    var courseWithoutImage = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
      courses = server.createList('course-airtable', 6);
      courseWithoutImage = courses[5];
      courseWithoutImage.attrs.fields.Image[0].url = '';
      courseWithoutImage.save();
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

    (0, _mocha.it)('2.1 la liste des tests apparaît', function () {
      (0, _chai.expect)(findWithAssert('.title').text()).to.contains('Liste des tests');
    });

    (0, _mocha.it)('2.2 on affiche autant de tests que remontés par AirTable', function () {
      (0, _chai.expect)(findWithAssert('.course')).to.have.lengthOf(6);
    });

    (0, _mocha.describe)('2.3 pour un test donné avec toutes les informations', function () {

      var $course = undefined;
      var course = undefined;

      (0, _mocha.before)(function () {
        course = courses[1];
        $course = findWithAssert('.course[data-id="' + course.attrs.id + '"]');
      });

      (0, _mocha.it)('2.3.1 on affiche son nom', function () {
        (0, _chai.expect)($course.find('.course-name').text()).to.contains(course.attrs.fields.Nom);
      });

      (0, _mocha.it)('2.3.2 on affiche sa description', function () {
        (0, _chai.expect)($course.find('.course-description').text()).to.contains(course.attrs.fields.Description);
      });

      (0, _mocha.it)('2.3.3 on affiche son image', function () {
        (0, _chai.expect)($course.find('img')[0].src).to.equal(course.attrs.fields.Image[0].url);
      });

      (0, _mocha.it)('2.3.4 on affiche un bouton "démarrer le test"', function () {
        (0, _chai.expect)($course.find('a.btn').text()).to.contains('Démarrer le test');
      });
    });

    (0, _mocha.it)('2.4 pour un test dont il manque l\'image, on affiche une image placeholder', function () {
      var $course = findWithAssert('.course[data-id="' + courseWithoutImage.attrs.id + '"]');
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
define('pix-live/tests/acceptance/25-image-sous-la-consigne-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)("Acceptance | 25 - Afficher une image sous la consigne | ", function () {
    var application = undefined;
    var challenge = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
      challenge = server.create('challenge-airtable');
      challenge.attrs.fields['Illustration de la consigne'] = [{ url: 'http://example.beta.gouv.fr' }];
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.before)(function () {
      return visit('/challenges/' + challenge.attrs.id + '/preview');
    });

    (0, _mocha.it)('25.1 Une image unique peut être affichée sous la consigne', function () {});

    (0, _mocha.it)('25.2 Cette image a un alt text “ceci est une image”', function () {
      (0, _chai.expect)(findWithAssert('.challenge-illustration').attr('alt')).to.contains('ceci est une image');
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
define('pix-live/tests/acceptance/3-demarrer-un-test-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)('Acceptance | 3 - Démarrer un test |', function () {

    var application = undefined;
    var course = undefined;
    var challenge = undefined;
    var assessment = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
      challenge = server.create('challenge-airtable');
      course = server.create('course-airtable');
      course.attachOne('Épreuves', challenge);
      assessment = server.create('assessment-airtable');
      assessment.attachOne('Test', course);
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
      (0, _chai.expect)($startLink.href).to.contains('/courses/' + course.attrs.id + '/assessment');
    });

    (0, _mocha.it)('3.2. Quand je démarre un test, je suis redirigé vers la première épreuve du test', function () {
      var $startLink = findWithAssert('.start-button')[0];
      return click($startLink).then(function () {
        findWithAssert('#assessment-challenge');
        (0, _chai.expect)(currentURL()).to.contains('/assessments/' + assessment.attrs.id + '/challenges/' + challenge.attrs.id);
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
      challenge = server.create('challenge-airtable');
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.describe)('32 - Prévisualiser une épreuve |', function () {

      var challengeId = undefined;

      (0, _mocha.before)(function () {
        challengeId = challenge.attrs.id;
        return visit('/challenges/' + challengeId + '/preview');
      });

      (0, _mocha.it)('32.1. Il est possible de prévisualiser une épreuve en accédant à l\'URL /challenges/:id/preview', function () {
        (0, _chai.expect)(currentURL()).to.equal('/challenges/' + challengeId + '/preview');
      });

      (0, _mocha.describe)('On affiche', function () {

        var $challenge = undefined;

        (0, _mocha.before)(function () {
          $challenge = findWithAssert('#challenge-preview');
        });

        (0, _mocha.it)('32.2 la consigne de l\'épreuve', function () {
          (0, _chai.expect)($challenge.find('.challenge-instruction').text()).to.contains(challenge.attrs.fields.Consigne);
        });

        // FIXME: this is not part of the US. This should be removed (need validation in PR)
        //it('32.3 les propositions sous forme de boutons radio', function () {
        //  const $proposals = findWithAssert('.challenge-proposals input[type="radio"][name="proposals"]');
        //  expect($proposals).to.have.lengthOf(5);
        //});
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
define('pix-live/tests/acceptance/37-prévisualiser-un-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)('Acceptance | 37 - Prévisualiser un test |', function () {

    var challenges = undefined;
    var course = undefined;
    var courseId = undefined;
    var firstChallengeId = undefined;
    var secondChallengeId = undefined;
    var lastChallengeId = undefined;

    var application = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
      challenges = server.createList('challenge-airtable', 3);
      course = server.create('course-airtable');
      course.attachMany('Épreuves', challenges);

      courseId = course.attrs.id;
      // XXX order is reversed
      firstChallengeId = challenges[2].attrs.id;
      secondChallengeId = challenges[1].attrs.id;
      lastChallengeId = challenges[0].attrs.id;
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.describe)("Prévisualiser la première page d'un test |", function () {

      (0, _mocha.before)(function () {
        return visit('/courses/' + courseId + '/preview');
      });

      (0, _mocha.it)("37.1. L'accès à la preview d'un test se fait en accédant à l'URL /courses/:course_id/preview", function () {
        (0, _chai.expect)(currentURL()).to.equal('/courses/' + courseId + '/preview');
      });

      var $preview = undefined;

      (0, _mocha.describe)('On affiche', function () {

        (0, _mocha.before)(function () {
          $preview = findWithAssert('#course-preview');
        });

        (0, _mocha.it)('37.2. le nom du test', function () {
          (0, _chai.expect)($preview.find('.course-name').text()).to.contains(course.attrs.fields.Nom);
        });

        (0, _mocha.it)('37.3. la description du test', function () {
          (0, _chai.expect)($preview.find('.course-description').text()).to.contains(course.attrs.fields.Description);
        });

        (0, _mocha.it)('37.4. un bouton pour démarrer la simulation du test et qui mène à la première question', function () {
          var $playButton = findWithAssert('.simulate-button');
          (0, _chai.expect)($playButton.text()).to.be.equals('Simuler le test');
          (0, _chai.expect)($playButton.attr('href')).to.be.equals('/courses/' + courseId + '/preview/challenges/' + firstChallengeId);
        });
      });
    });

    (0, _mocha.describe)("Prévisualiser une épreuve dans le cadre d'un test |", function () {

      var currentChallenge = undefined;

      (0, _mocha.before)(function () {
        currentChallenge = challenges[2];
        return visit('/courses/' + courseId + '/preview/challenges/' + firstChallengeId);
      });

      (0, _mocha.it)("37.5. L'accès à la preview d'une épreuve d'un testse fait en accédant à l'URL /courses/:course_id/preview/challenges/:challenge_id", function () {
        (0, _chai.expect)(currentURL()).to.equal('/courses/' + courseId + '/preview/challenges/' + firstChallengeId);
      });

      (0, _mocha.describe)('On affiche', function () {

        var $challenge = undefined;

        (0, _mocha.before)(function () {
          $challenge = findWithAssert('.challenge-preview');
        });

        (0, _mocha.it)("37.6. la consigne de l'épreuve", function () {
          (0, _chai.expect)($challenge.find('.challenge-instruction').text()).to.contains(currentChallenge.attrs.fields.Consigne);
        });

        (0, _mocha.it)("37.7. un bouton pour accéder à l'épreuve suivante", function () {
          var $validateButton = findWithAssert('.validate-button');
          (0, _chai.expect)($validateButton.text()).to.contains('Valider');
        });
      });
    });

    (0, _mocha.describe)("Prévisualiser la dernière épreuve dans le cadre d'un test |", function () {

      (0, _mocha.before)(function () {
        return visit('/courses/' + courseId + '/preview/challenges/' + lastChallengeId);
      });

      (0, _mocha.it)("37.8. on n'affiche pas de bouton “Épreuve suivante”", function () {
        (0, _chai.expect)(find('.challenge-preview a.next-challenge-button')).to.have.lengthOf(0);
      });
    });
  });
});
define('pix-live/tests/acceptance/37-prévisualiser-un-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/37-prévisualiser-un-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('acceptance/37-prévisualiser-un-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/acceptance/38-s-identifier-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app', 'rsvp'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp, _rsvp) {

  (0, _mocha.describe)("Acceptance | 38 - S'identifier sur la plateforme", function () {
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

    var firstname_css = '.firstname_input';
    var lastname_css = '.lastname_input';
    var email_css = '.email_input';
    var submit_css = '.identification-form-actions button';
    var $firstname = undefined;
    var $lastname = undefined;
    var $email = undefined;
    var $submit = undefined;

    (0, _mocha.before)(function () {
      $firstname = findWithAssert(firstname_css).first();
      $lastname = findWithAssert(lastname_css).first();
      $email = findWithAssert(email_css).first();
      $submit = findWithAssert(submit_css).first();
    });

    function fillForm(firstname, lastname, email) {
      return _rsvp['default'].all([fillIn(firstname_css, firstname), fillIn(lastname_css, lastname), fillIn(email_css, email)]);
    }

    (0, _mocha.it)("38.1 Depuis la page d'accueil, je saisie mon prénom + nom + email", function () {
      return fillForm('Jérémy', 'Buget', 'jbu@octo.com').then(function () {
        (0, _chai.expect)($firstname.val()).to.contains('Jérémy');
        (0, _chai.expect)($lastname.val()).to.equal('Buget');
        (0, _chai.expect)($email.val()).to.equal('jbu@octo.com');
      });
    });

    (0, _mocha.it)('38.2 Quand je valide mon identité, je suis redirigé vers la page des tests', function () {
      return fillForm('Jérémy', 'Buget', 'jbu@octo.com').then(function () {
        return click(submit_css);
      }).then(function () {
        return (0, _chai.expect)(currentURL()).to.equal('/home');
      });
    });

    (0, _mocha.it)('38.3 Quand je suis identifié, je vois apparaître le libellé “Bonjour Prénom” (via session utilisateur)', function () {

      // Assert that 38.2 went OK
      (0, _chai.expect)(currentURL()).to.equal('/home');

      (0, _chai.expect)(findWithAssert('.profile').text()).to.contains('Bonjour Jérémy');
    });

    (0, _mocha.describe)("38.4 En cas de champs manquant, un message d'erreur apparaît", function () {
      (0, _mocha.beforeEach)(function () {
        return visit('/').then(function () {
          return fillForm('Thomas', 'Wickham', 'twi@octo.com');
        });
      });

      (0, _mocha.it)('missing firstname', function () {
        return fillIn(firstname_css, '').then(function () {
          (0, _chai.expect)(find('#firstname').hasClass('has-error')).to.be['true'];
          (0, _chai.expect)(findWithAssert('#firstname .help-block').text()).to.contains('Champ requis');
        });
      });

      (0, _mocha.it)('missing lastname', function () {
        return fillIn(lastname_css, '').then(function () {
          (0, _chai.expect)(find('#lastname').hasClass('has-error')).to.be['true'];
          (0, _chai.expect)(findWithAssert('#lastname .help-block').text()).to.contains('Champ requis');
        });
      });

      (0, _mocha.it)('missing email', function () {
        return fillIn(email_css, '').then(function () {
          (0, _chai.expect)(find('#email').hasClass('has-error')).to.be['true'];
          (0, _chai.expect)(findWithAssert('#email .help-block').text()).to.contains('Champ requis');
        });
      });

      (0, _mocha.it)('bad email', function () {
        return fillIn(email_css, 'bad email').then(function () {
          (0, _chai.expect)(find('#email').hasClass('has-error')).to.be['true'];
          (0, _chai.expect)(findWithAssert('#email .help-block').text()).to.contains('Entrez un email correct');
        });
      });

      (0, _mocha.it)("can't submit a form when an error is present", function () {
        return fillIn(firstname_css, '').then(function () {
          return (0, _chai.expect)(find(submit_css)[0].disabled).to.be['true'];
        }).then(function () {
          return click(submit_css);
        }).then(function () {
          return (0, _chai.expect)(currentURL()).to.eq('/');
        });
      });

      (0, _mocha.it)("if the form is empty and the page has just been loaded, it can't submit the form", function () {
        return visit('/').then(function () {
          return (0, _chai.expect)(find(submit_css)[0].disabled).to.be['true'];
        }).then(function () {
          return click(submit_css);
        }).then(function () {
          return (0, _chai.expect)(currentURL()).to.eq('/');
        });
      });
    });
  });
});
define('pix-live/tests/acceptance/38-s-identifier-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/38-s-identifier-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('acceptance/38-s-identifier-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/acceptance/4-demarrer-epreuve-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)('Acceptance | 4 - Démarrer une épreuve |', function () {

    var propositions = ['proposition 1', 'proposition 2', 'proposition 3'];
    var application = undefined;
    var assessment = undefined;
    var challenge = undefined;
    var course = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
      challenge = server.create('challenge-airtable');
      challenge.attrs.fields['Propositions'] = propositions.map(function (p) {
        return '- ' + p;
      }).reduce(function (e1, e2) {
        return e1 + '\n' + e2;
      });
      course = server.create('course-airtable');
      course.attachOne('Épreuves', challenge);
      assessment = server.create('assessment-airtable');
      assessment.attachOne('Test', course);
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.before)(function () {
      return visit('/assessments/' + assessment.attrs.id + '/challenges/' + challenge.attrs.id);
    });

    (0, _mocha.it)('4.1. doit être sur l\'URL /assessments/:assessment_id/challenges/:challenge_id', function () {
      (0, _chai.expect)(currentURL()).to.equal('/assessments/' + assessment.attrs.id + '/challenges/' + challenge.attrs.id);
    });

    (0, _mocha.describe)('Les informations visibles pour une épreuve de type QCU sont :', function () {

      (0, _mocha.it)('4.2. la consigne de l\'épreuve', function () {
        var $instruction = findWithAssert('.challenge-instruction');
        (0, _chai.expect)($instruction.text()).to.contains(challenge.attrs.fields['Consigne']);
      });

      (0, _mocha.it)('4.3. les propositions de l\'épreuve', function () {
        var $proposals = findWithAssert('.challenge-proposal');
        (0, _chai.expect)($proposals).to.have.lengthOf(3);
        (0, _chai.expect)($proposals.eq(0).text()).to.contains(propositions[0]);
        (0, _chai.expect)($proposals.eq(1).text()).to.contains(propositions[1]);
        (0, _chai.expect)($proposals.eq(2).text()).to.contains(propositions[2]);
      });
    });

    (0, _mocha.it)('4.4. affiche le bouton "Valider" permettant de sauvegarder la réponse saisie et de passer à l\'épreuve suivante ', function () {
      (0, _chai.expect)(findWithAssert('.validate-button').text()).to.contains('Valider');
    });

    (0, _mocha.it)('4.5. affiche le bouton "Passer" permettant de passer à l\'épreuve suivante sans avoir saisi de réponse', function () {
      (0, _chai.expect)(findWithAssert('.skip-button').text()).to.contains('Passer');
    });
  });
});
define('pix-live/tests/acceptance/4-demarrer-epreuve-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/4-demarrer-epreuve-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('acceptance/4-demarrer-epreuve-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/acceptance/6-valider-une-epreuve-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)('Acceptance | 6 - Valider une épreuve |', function () {

    var application = undefined;
    var assessment = undefined;
    var challenges = undefined;
    var course = undefined;

    var assessmentId = undefined;
    var firstChallengeId = undefined;
    var lastChallengeId = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();

      challenges = server.createList('challenge-airtable', 2);
      firstChallengeId = challenges[1].attrs.id;
      lastChallengeId = challenges[0].attrs.id;

      course = server.create('course-airtable');
      course.attachMany('Épreuves', challenges);

      assessment = server.create('assessment-airtable');
      assessment.attachOne('Test', course);
      assessmentId = assessment.attrs.id;
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.before)(function () {
      return visit('/assessments/' + assessmentId + '/challenges/' + firstChallengeId);
    });

    (0, _mocha.it)("6.1. Je peux valider ma réponse à une épreuve via un bouton 'Valider'", function () {
      (0, _chai.expect)(findWithAssert('.validate-button')).to.have.lengthOf(1);
    });

    (0, _mocha.describe)("quand je valide ma réponse à une épreuve", function () {

      (0, _mocha.beforeEach)(function () {
        return click('.challenge-proposal:first input[type="radio"]');
      });

      (0, _mocha.it)("6.2. Ma réponse est sauvegardée dans le BO", function () {});

      (0, _mocha.it)("6.3. Si l'épreuve que je viens de valider n'était pas la dernière du test, je suis redirigé vers l'épreuve suivante", function () {
        var $validateButton = $('.validate-button')[0];
        return click($validateButton).then(function () {
          (0, _chai.expect)(currentURL()).to.contains('/assessments/' + assessmentId + '/challenges/' + lastChallengeId);
        });
      });

      (0, _mocha.it)("6.4. Si l'épreuve que je viens de valider était la dernière du test, je suis redirigé vers la page de fin du test", function () {
        var $validateButton = $('.validate-button')[0];
        return click($validateButton).then(function () {
          (0, _chai.expect)(currentURL()).to.contains('/assessments/' + assessmentId + '/results');
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
define('pix-live/tests/acceptance/home-test', ['exports', 'pix-live/tests/test-helper', 'chai', 'mocha', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _pixLiveTestsTestHelper, _chai, _mocha, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)('Acceptance | /home', function () {

    (0, _mocha.beforeEach)(function () {
      this.application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    (0, _mocha.afterEach)(function () {
      return (0, _pixLiveTestsHelpersDestroyApp['default'])(this.application);
    });

    (0, _mocha.it)('should display the title', function () {
      visit('/home');

      andThen(function () {
        (0, _chai.expect)(currentURL()).to.be.eq('/home');
        (0, _chai.expect)(find('.title').text()).to.contains('Liste des tests');
      });
    });
  });
});
define('pix-live/tests/acceptance/home-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/home-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('acceptance/home-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/adapters/airtable.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - adapters/airtable.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('adapters/airtable.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/adapters/answer.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - adapters/answer.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('adapters/answer.js should pass ESLint.\n');
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
define('pix-live/tests/adapters/assessment.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - adapters/assessment.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('adapters/assessment.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/adapters/challenge.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - adapters/challenge.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('adapters/challenge.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/adapters/course.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - adapters/course.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('adapters/course.js should pass ESLint.\n');
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
define('pix-live/tests/integration/components/challenge-item-test', ['exports', 'chai', 'ember-mocha', 'mocha', 'ember', 'rsvp'], function (exports, _chai, _emberMocha, _mocha, _ember, _rsvp) {

  function renderChallengeItem() {
    var challengeAttributes = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var validateHandler = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    var challenge = _ember['default'].Object.create(challengeAttributes);
    this.set('challenge', challenge);

    var assessment = _ember['default'].Object.create({});
    this.set('assessment', assessment);
    this.set('validateHandler', validateHandler || function () {
      return null;
    });

    this.render(_ember['default'].HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 76
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
        statements: [['inline', 'challenge-item', [['get', 'challenge', ['loc', [null, [1, 17], [1, 26]]], 0, 0, 0, 0], ['get', 'assessment', ['loc', [null, [1, 27], [1, 37]]], 0, 0, 0, 0]], ['onValidated', ['subexpr', 'action', [['get', 'validateHandler', ['loc', [null, [1, 58], [1, 73]]], 0, 0, 0, 0]], [], ['loc', [null, [1, 50], [1, 74]]], 0, 0]], ['loc', [null, [1, 0], [1, 76]]], 0, 0]],
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
          'revision': 'Ember@2.7.3',
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

  function selectFirstProposal() {

    return new _rsvp['default'].Promise(function (resolve) {
      return this.$('.challenge-proposal:first input[type="radio"]').click(function () {
        return resolve();
      });
    });
  }

  function validateChallenge() {
    this.$('.validate-button').click();
  }

  function assertAlertErrorToBeHidden() {
    (0, _chai.expect)(this.$('.alert-error')).to.have.lengthOf(0);
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
        (0, _chai.expect)(this.$('.skip-button')).to.have.lengthOf(1);
      });

      (0, _emberMocha.it)('should display "Validate" button ', function () {
        // when
        renderChallengeItem.call(this);

        // then
        (0, _chai.expect)(this.$('.validate-button')).to.have.lengthOf(1);
      });

      (0, _emberMocha.it)('should display an img tag with “ceci est une image” alt text', function () {
        // when
        renderChallengeItem.call(this, { illustrationUrl: 'http://my.illustration.png' });

        // then
        var $illustration = this.$('.challenge-illustration');
        (0, _chai.expect)($illustration.attr('alt')).to.contains('ceci est une image');
      });

      (0, _emberMocha.it)('should display an img tag with src attribute equals to the challenge.illustrationUrl property', function () {
        // given
        var illustrationUrl = 'http://my.illustration.png';
        renderChallengeItem.call(this, { illustrationUrl: illustrationUrl });

        var $illustration = this.$('.challenge-illustration');
        (0, _chai.expect)($illustration.attr('src')).to.equals(illustrationUrl);
      });
    });

    (0, _mocha.describe)('when used with mode "challenge-preview"', function () {

      (0, _emberMocha.it)('should not display "Skip" button', function () {
        // when
        renderChallengeItem_challengePreview.call(this);

        // then
        (0, _chai.expect)(this.$('.skip-button')).to.have.lengthOf(0);
      });

      (0, _emberMocha.it)('should not display "Validate" button', function () {
        // when
        renderChallengeItem_challengePreview.call(this);

        // then
        (0, _chai.expect)(this.$('.validate-button')).to.have.lengthOf(0);
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
        this.$('.validate-button').click();
      });

      (0, _emberMocha.it)('should call "onValidated" callback with good value for QCU (i.e. proposal index + 1)', function (done) {
        // given
        renderChallengeItem.call(this, {
          type: 'QCU',
          _proposalsAsArray: ['Xi', 'Fu', 'Mi']
        }, function (challenge, assessment, answerValue) {

          // then
          (0, _chai.expect)(answerValue).to.equal("1");
          done();
        });

        // when
        this.$('.challenge-proposal:first input[type="radio"]').click();
        this.$('.validate-button').click();
      });
    });

    (0, _mocha.describe)('Skipping the challenge', function () {

      (0, _emberMocha.it)('save #ABAND# as value when clicked', function (done) {

        renderChallengeItem.call(this, { proposalsAsArray: ['1', '2', '3'] }, function (_challenge, _assessment, answerValue) {

          (0, _chai.expect)(answerValue).to.equal('#ABAND#');
          done();
        });

        this.$('.skip-button').click();
      });
    });

    (0, _mocha.describe)('Error alert box', function () {

      (0, _emberMocha.it)("should be hidden by default", function () {
        // when
        renderChallengeItem.call(this, { proposalsAsArray: ['Xi', 'Fu', 'Mi'] }, function () {
          return done();
        });

        // then
        (0, _chai.expect)(this.$('.alert-error')).to.have.lengthOf(0);
      });

      (0, _mocha.describe)('when validating a challenge without having selected a proposal', function () {

        (0, _emberMocha.it)("should be displayed", function () {
          var _this = this;

          // given
          renderChallengeItem.call(this, { proposalsAsArray: ['Xi', 'Fu', 'Mi'] }, function () {

            // then
            var $alertError = _this.$('.alert-error');
            (0, _chai.expect)($alertError).to.have.lengthOf(1);
          });

          // when
          validateChallenge.call(this);
        });

        (0, _emberMocha.it)('should contains "Vous devez saisir une réponse"', function () {
          var _this2 = this;

          // given
          renderChallengeItem.call(this, { proposalsAsArray: ['Xi', 'Fu', 'Mi'] }, function () {

            // then
            var $alertError = _this2.$('.alert-error');
            (0, _chai.expect)($alertError.text()).to.contains("Vous devez saisir une réponse");
          });

          // when
          validateChallenge.call(this);
        });
      });

      (0, _mocha.describe)('when a proposal is selected', function () {

        (0, _emberMocha.it)("should be removed", function () {
          // when
          selectFirstProposal.call(this);

          // then
          assertAlertErrorToBeHidden.call(this);
        });
      });
    });

    (0, _mocha.describe)('Challenges types', function () {

      (0, _mocha.describe)('QCU', function () {

        (0, _emberMocha.it)('should render challenge proposals as different text blocks', function () {
          // when
          renderChallengeItem.call(this, { _proposalsAsArray: ['Xi', 'Fu', 'Mi'] });

          // then
          var $proposals = this.$('.challenge-proposal');
          (0, _chai.expect)($proposals).to.have.lengthOf(3);
          (0, _chai.expect)($proposals.eq(0).text()).to.contains('Xi');
          (0, _chai.expect)($proposals.eq(1).text()).to.contains('Fu');
          (0, _chai.expect)($proposals.eq(2).text()).to.contains('Mi');
        });

        (0, _emberMocha.it)('should render challenge proposals as different radios buttons', function () {
          // when
          renderChallengeItem.call(this, { _proposalsAsArray: ['Xi', 'Fu', 'Mi'] });

          // then
          var $proposals = this.$('.challenge-proposal input[type="radio"]');
          (0, _chai.expect)($proposals).to.have.lengthOf(3);
        });
      });

      (0, _mocha.describe)('QROC', function () {

        (0, _emberMocha.it)('should render challenge proposals as different text blocks', function () {
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
define('pix-live/tests/serializers/airtable-serializer.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - serializers/airtable-serializer.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('serializers/airtable-serializer.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/serializers/answer.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - serializers/answer.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('serializers/answer.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/serializers/assessment.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - serializers/assessment.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('serializers/assessment.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/serializers/challenge.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - serializers/challenge.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('serializers/challenge.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/serializers/course.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - serializers/course.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('serializers/course.js should pass ESLint.\n');
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

  (0, _emberMocha.describeModule)('component:challenge-item', 'ChallengeItem', {}, function () {

    (0, _emberMocha.it)('exists', function () {
      var challengeItem = this.subject();
      (0, _chai.expect)(challengeItem).to.be.ok;
    });

    describe('#onSelectedProposalChanged', function () {

      (0, _emberMocha.it)('is called when selectedProposal value has been changed', function () {
        // given
        var challengeItem = this.subject();
        challengeItem.set('error', 'an error');

        // when
        challengeItem.set('selectedProposal', 1);

        // then
        (0, _chai.expect)(challengeItem.get('error')).to.be['null'];
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
define('pix-live/tests/unit/models/answer-test', ['exports', 'pix-live/tests/test-helper', 'chai', 'ember-mocha'], function (exports, _pixLiveTestsTestHelper, _chai, _emberMocha) {

  (0, _emberMocha.describeModel)('answer', 'Unit | Model | Answer', {
    needs: ['model:assessment', 'model:challenge']
  }, function () {

    (0, _emberMocha.it)('exists', function () {
      var model = this.subject();
      (0, _chai.expect)(model).to.be.ok;
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
define('pix-live/tests/unit/models/assessment-test', ['exports', 'pix-live/tests/test-helper', 'chai', 'ember-mocha'], function (exports, _pixLiveTestsTestHelper, _chai, _emberMocha) {

  (0, _emberMocha.describeModel)('assessment', 'Unit | Model | Assessment', {
    needs: ['model:course', 'model:answer', 'model:challenge', 'serializer:assessment']
  }, function () {

    (0, _emberMocha.it)('exists', function () {
      var model = this.subject();
      (0, _chai.expect)(model).to.be.ok;
    });

    describe('#numberOfValidatedAnswers', function () {

      (0, _emberMocha.it)('should return 0 if there is no answers', function () {
        // given
        var assessment = this.subject();

        // when
        var answers = assessment.get('numberOfValidatedAnswers');

        //then
        (0, _chai.expect)(answers).to.equal(0);
      });

      (0, _emberMocha.it)('should count all validated answers', function () {
        var _this = this;

        Ember.run(function () {
          // given
          var store = _this.store();
          var assessment = _this.subject();
          store.createRecord('answer', { value: "Xi", assessment: assessment });
          store.createRecord('answer', { value: "Fu", assessment: assessment });
          store.createRecord('answer', { value: "Mi", assessment: assessment });

          // when
          var answers = assessment.get('numberOfValidatedAnswers');

          //then
          (0, _chai.expect)(answers).to.equal(3);
        });
      });

      (0, _emberMocha.it)('should not include skipped challenge answers', function () {
        var _this2 = this;

        Ember.run(function () {
          // given
          var store = _this2.store();
          var assessment = _this2.subject();
          store.createRecord('answer', { value: "Xi", assessment: assessment });
          store.createRecord('answer', { value: "#ABAND#", assessment: assessment });
          store.createRecord('answer', { value: "Mi", assessment: assessment });

          // when
          var answers = assessment.get('numberOfValidatedAnswers');

          //then
          (0, _chai.expect)(answers).to.equal(2);
        });
      });
    });

    describe('#serialize', function () {

      (0, _emberMocha.it)('includes course ID', function () {
        var _this3 = this;

        Ember.run(function () {
          // given
          var courseId = 'rec1234567890';
          var course = _this3.store().createRecord('course', { id: courseId });
          var assessment = _this3.subject({ course: course });

          // when
          var serializedData = assessment.serialize();

          // then
          (0, _chai.expect)(serializedData["Test"]).to.deep.equal([courseId]);
        });
      });

      (0, _emberMocha.it)("includes user's name and email", function () {
        // given
        var assessment = this.subject({
          userEmail: 'toto@plop.com',
          userName: 'Toto'
        });

        // when
        var serializedData = assessment.serialize();

        // then
        (0, _chai.expect)(serializedData["Nom de l'usager"]).to.equal('Toto');
        (0, _chai.expect)(serializedData["Courriel de l'usager"]).to.equal('toto@plop.com');
      });
    });
  });
});
define('pix-live/tests/unit/models/assessment-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/models/assessment-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/models/assessment-test.js should pass ESLint.\n');
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
    }];

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
define('pix-live/tests/unit/models/course-test', ['exports', 'pix-live/tests/test-helper', 'chai', 'ember-mocha'], function (exports, _pixLiveTestsTestHelper, _chai, _emberMocha) {

  (0, _emberMocha.describeModel)('course', 'Unit | Model | Course', {
    needs: ['model:assessment', 'model:challenge']
  }, function () {

    (0, _emberMocha.it)('exists', function () {
      var model = this.subject();
      (0, _chai.expect)(model).to.be.ok;
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
define('pix-live/tests/unit/serializers/answer-test', ['exports', 'chai', 'ember-mocha', 'pix-live/models/answer', 'pix-live/serializers/answer'], function (exports, _chai, _emberMocha, _pixLiveModelsAnswer, _pixLiveSerializersAnswer) {

  (0, _emberMocha.describeModule)('serializer:answer', 'Unit | Serializer | answer', {}, function () {

    var serializer = new _pixLiveSerializersAnswer['default']();
    var Answer = _pixLiveModelsAnswer['default'].extend({}); // copy the class to avoid side effects
    Answer.modelName = 'answer';

    function normalizePayload(payload) {
      serializer.normalizeResponse(null, Answer, payload, payload.id, null);
      return payload;
    }

    (0, _emberMocha.it)('normalizes correctly', function () {

      var payload = {
        "id": "recnGZFG9zeroKXLP",
        "fields": {
          "Epreuve": ["rechEFdIiOlMNMQEu"],
          "Evaluation": ["recT57K8NPRjQ3Jyh"],
          "Nom": "recnGZFG9zeroKXLP",
          "Valeur": "1"
        },
        "createdTime": "2016-09-01T12:45:08.000Z"
      };

      var expected = {
        answer: {
          id: payload.id,
          created: payload.createdTime,
          value: payload.fields['Valeur'],
          challenge: payload.fields['Epreuve'],
          assessment: payload.fields['Evaluation']
        }
      };
      var answer = normalizePayload(payload);

      (0, _chai.expect)(answer).to.be.deep.equal(expected);
    });
  });
});
define('pix-live/tests/unit/serializers/answer-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/serializers/answer-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/serializers/answer-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/unit/serializers/assessment-test', ['exports', 'chai', 'ember-mocha', 'pix-live/models/assessment', 'pix-live/serializers/assessment'], function (exports, _chai, _emberMocha, _pixLiveModelsAssessment, _pixLiveSerializersAssessment) {

  (0, _emberMocha.describeModel)('assessment', 'Unit | Serializer | assessment', {
    needs: ['model:answer']
  }, function () {

    var serializer = new _pixLiveSerializersAssessment['default']();
    var Assessment = _pixLiveModelsAssessment['default'].extend({}); // copy the class to avoid side effects
    Assessment.modelName = 'assessment';

    function normalizePayload(payload) {
      serializer.normalizeResponse(null, Assessment, payload, payload.id, null);
      return payload;
    }

    (0, _emberMocha.it)('normalizes correctly', function () {

      var payload = {
        "id": "recgS0TFyy0bXTjIL",
        "fields": {
          "Test": ["rec5duNNrPqbSzQ8o"],
          "Reponses": ["rec1234567ABCDEFG", "rec8910111HIJKLMN"],
          "Référence": "recgS0TFyy0bXTjIL",
          "Nom de l'usager": "Jérémy le Grand",
          "Courriel de l'usager": "jbu@octo.com"
        },
        "createdTime": "2016-08-31T23:22:04.000Z"
      };

      var expected = {
        assessment: {
          id: payload.id,
          created: payload.createdTime,
          course: payload.fields['Test'],
          answers: payload.fields['Reponses'],
          userName: payload.fields["Nom de l'usager"],
          userEmail: payload.fields["Courriel de l'usager"]
        }
      };
      var assessment = normalizePayload(payload);

      (0, _chai.expect)(assessment).to.be.deep.equal(expected);
    });
  });
});
define('pix-live/tests/unit/serializers/assessment-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/serializers/assessment-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/serializers/assessment-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/unit/serializers/challenge-test', ['exports', 'chai', 'ember-mocha', 'pix-live/models/challenge', 'pix-live/serializers/challenge'], function (exports, _chai, _emberMocha, _pixLiveModelsChallenge, _pixLiveSerializersChallenge) {

  (0, _emberMocha.describeModule)('serializer:challenge', 'Unit | Serializer | challenge', {}, function () {

    var serializer = new _pixLiveSerializersChallenge['default']();
    var Challenge = _pixLiveModelsChallenge['default'].extend({}); // copy the class to avoid side effects
    Challenge.modelName = 'challenge';

    function normalizePayload(payload) {
      serializer.normalizeResponse(null, Challenge, payload, payload.id, null);
      return payload;
    }

    (0, _emberMocha.it)('it normalize correctly', function () {
      var payload = {
        "createdTime": "2016-08-24T16:05:16.000Z",
        "fields": {
          "Auteur": ["SPS"],
          "Bonnes réponses": "2",
          "Consigne": "Quel signe précède toujours une formule dans une cellule de feuille de calcul ?",
          "Licence image": "no",
          "Preview": "http://staging.pix.beta.gouv.fr/challenges/rec1LvIU9OZ2sXyuy/preview",
          "Propositions": "- #\r\n- =\r\n- !\r\n- :\r\n- $\r",
          "Record ID": "rec1LvIU9OZ2sXyuy",
          "Reponses": [],
          "Type d'épreuve": "QCU",
          "Type péda": "q-situation",
          "_Niveau": ["3"],
          "_Preview Temp": "https://docs.google.com/presentation/d/1aEn-VH5_ijVBRmsLDvtQmG83BZihE37PnCz5g2mEbWk/edit#slide=id.g15ad5fc552_0_4",
          "_Statut": "proposé",
          "acquis": ["#formuleSimple"],
          "compétence": "1.3. Traiter des données",
          "description": "Signe précédant une formule",
          "domaine": "1.3. Traiter des données",
          "id": 98,
          "versions Alter": ["recgPPjKpxqAMaAeX"]
        },
        "id": "rec1LvIU9OZ2sXyuy"
      };
      var expected = {
        challenge: {
          id: payload.id,
          created: payload.createdTime,
          instruction: payload.fields.Consigne,
          proposals: payload.fields.Propositions,
          type: 'QCU'
        }
      };
      var challenge = normalizePayload(payload);

      (0, _chai.expect)(challenge).to.be.deep.equal(expected);
    });
  });
});
define('pix-live/tests/unit/serializers/challenge-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/serializers/challenge-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/serializers/challenge-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/unit/serializers/course-test', ['exports', 'chai', 'ember-mocha', 'mocha', 'pretender'], function (exports, _chai, _emberMocha, _mocha, _pretender) {

  (0, _emberMocha.describeModel)('course', 'Unit | Serializer | course', {
    needs: ['adapter:course', 'serializer:course']
  }, function () {

    var server = undefined;
    var airTableSheetName = 'Tests';
    var airTableResponse = {
      "records": [{
        "id": "rec5duNNrPqbSzQ8o",
        "fields": {
          "Nom": "Nom du test",
          "Description": "Description du test",
          "Image": [{
            "id": "attuCagYzFRtMjciZ",
            "url": "https://test.image.png",
            "filename": "test1.png",
            "size": 81948,
            "type": "image/png",
            "thumbnails": {
              "small": {
                "url": "https://dl.airtable.com/GbJKDkkCTP6xVjmrgsEr_small_test1.png",
                "width": 53,
                "height": 36
              },
              "large": {
                "url": "https://dl.airtable.com/AikVbSPbROiK5apOrj0u_large_test1.png",
                "width": 500,
                "height": 338
              }
            }
          }],
          "Durée": 20
        },
        "createdTime": "2016-08-09T15:17:53.000Z"
      }]
    };

    (0, _mocha.before)(function () {
      server = new _pretender['default'](function () {
        this.get('https://api.airtable.com/v0/appHAIFk9u1qqglhX/' + airTableSheetName, function () {
          return [200, { "Content-Type": "application/json" }, JSON.stringify(airTableResponse)];
        });
      });
    });

    (0, _mocha.after)(function () {
      server.shutdown();
    });

    (0, _mocha.describe)('serializer:course', function () {

      (0, _emberMocha.it)('convertie la colonne "Nom" en attribut "name" pour le modèle Course', function () {
        return this.store().findAll('course').then(function (people) {
          (0, _chai.expect)(people.get('firstObject.name')).to.eq('Nom du test');
        });
      });

      (0, _emberMocha.it)('convertie la colonne "Description" en attribut "description" pour le modèle Course', function () {
        return this.store().findAll('course').then(function (people) {
          (0, _chai.expect)(people.get('firstObject.description')).to.eq('Description du test');
        });
      });

      (0, _emberMocha.it)('convertie la colonne "Image" en attribut "imageUrl" pour le modèle Course', function () {
        return this.store().findAll('course').then(function (people) {
          (0, _chai.expect)(people.get('firstObject.imageUrl')).to.eq('https://test.image.png');
        });
      });

      (0, _emberMocha.it)('convertie la colonne "Durée" en attribut "duration" pour le modèle Course', function () {
        return this.store().findAll('course').then(function (people) {
          (0, _chai.expect)(people.get('firstObject.duration')).to.eq(20);
        });
      });

      (0, _emberMocha.it)('gère le cas où aucune image n\'a été spécifiée par le contributeur', function () {
        airTableResponse = {
          "records": [{
            "id": "rec5duNNrPqbSzQ8o",
            "fields": {
              "Nom": "Nom du test",
              "Description": "Description du test",
              "Duration": 20
            }
          }],
          "createdTime": "2016-08-09T15:17:53.000Z"
        };
        return this.store().findAll('course').then(function (people) {
          (0, _chai.expect)(people.get('firstObject.imageUrl')).to.be.undefined;
        });
      });
    });
  });
});
define('pix-live/tests/unit/serializers/course-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/serializers/course-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/serializers/course-test.js should pass ESLint.\n');
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

  (0, _emberMocha.describeModule)('service:session', 'SessionService', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  }, function () {
    // Replace this with your real tests.
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

    (0, _emberMocha.it)('starts empty', function () {
      var session = this.subject();
      (0, _chai.expect)(session.get('firstname')).to.be.empty;
      (0, _chai.expect)(session.get('lastname')).to.be.empty;
      (0, _chai.expect)(session.get('email')).to.be.empty;
      (0, _chai.expect)(session.get('isIdentified')).to.be['false'];
    });

    (0, _emberMocha.it)('#save() save data to localStorage', function () {
      var session = this.subject();
      var values = {
        firstname: 'firstname',
        lastname: 'lastname',
        email: 'email'
      };
      session.setProperties(values);

      session.save();

      (0, _chai.expect)(store['pix-live.session']).to.eq(JSON.stringify(values));
    });

    (0, _emberMocha.it)('#init() restore data from localStorage', function () {
      var values = {
        firstname: 'Thomas',
        lastname: 'Wickham',
        email: 'twi@octo.com'
      };
      localStorageStub.setItem('pix-live.session', JSON.stringify(values));
      var session = this.subject();

      values.isIdentified = true;
      var sut = session.getProperties('firstname', 'lastname', 'email', 'isIdentified');
      (0, _chai.expect)(sut).to.deep.eq(values);
    });

    (0, _emberMocha.it)('#init() use an empty session is JSON parsing failed', function () {
      localStorageStub.setItem('pix-live.session', '[object Object]');
      var session = this.subject();

      var expected = {
        firstname: "",
        lastname: "",
        email: "",
        isIdentified: false
      };
      var sut = session.getProperties('firstname', 'lastname', 'email', 'isIdentified');
      (0, _chai.expect)(sut).to.deep.eq(expected);
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