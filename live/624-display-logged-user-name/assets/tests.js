'use strict';

define('pix-live/tests/acceptance/a1-page-accueil-test', ['mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (_mocha, _chai, _startApp, _destroyApp) {
  'use strict';

  (0, _mocha.describe)('Acceptance | a1 - La page d\'accueil', function () {

    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
      visit('/');
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
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
        (0, _chai.expect)($title.text().trim()).to.equal('Les défis Pix de la semaine');
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
define('pix-live/tests/acceptance/a4-demarrer-un-test-test', ['ember', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app', 'pix-live/utils/lodash-custom'], function (_ember, _mocha, _chai, _startApp, _destroyApp, _lodashCustom) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  var URL_OF_FIRST_TEST = '/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id';
  var MODAL_SELECTOR = '.modal.fade.js-modal-mobile.in';
  var START_BUTTON = '.course-item__begin-button';

  (0, _mocha.describe)('Acceptance | a4 - Démarrer un test |', function () {

    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
      visit('/');
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    (0, _mocha.it)('a4.2 Je peux démarrer un test directement depuis la nouvelle url "courses/:course_id"', _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return visit('/courses/ref_course_id');

            case 2:
              (0, _chai.expect)(_lodashCustom.default.endsWith(currentURL(), 'assessments/ref_assessment_id/challenges/ref_qcm_challenge_id')).to.equal(true);

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    (0, _mocha.it)('a4.2 Je peux démarrer un test directement depuis l\'ancienne url "courses/:course_id/assessment"', _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return visit('/courses/ref_course_id/assessment');

            case 2:
              (0, _chai.expect)(_lodashCustom.default.endsWith(currentURL(), 'assessments/ref_assessment_id/challenges/ref_qcm_challenge_id')).to.equal(true);

            case 3:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    (0, _mocha.it)('a4.4 Quand je démarre un test, je suis redirigé vers la première épreuve du test', function () {
      var $startLink = findWithAssert(START_BUTTON);
      return click($startLink).then(function () {
        findWithAssert('.assessment-challenge');
        (0, _chai.expect)(currentURL()).to.contain(URL_OF_FIRST_TEST);
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
        _ember.default.run.later(function () {
          (0, _chai.expect)($(MODAL_SELECTOR)).to.have.lengthOf(1);
          (0, _chai.expect)(currentURL()).to.equals('/');
          $('a[data-dismiss]').click();

          return click($startLink).then(function () {
            (0, _chai.expect)(currentURL()).to.contain(URL_OF_FIRST_TEST);
            done();
          });
        }, 500);
      });
    });

    (0, _mocha.it)('a4.6 Quand je RE-démarre un test sur mobile, la modale NE s\'affiche PAS', function (done) {
      var $startLink = findWithAssert(START_BUTTON);
      triggerEvent('.index-page', 'simulateMobileScreen');

      andThen(function () {
        _ember.default.run.later(function () {
          (0, _chai.expect)(currentURL()).to.equals('/');
          (0, _chai.expect)($(MODAL_SELECTOR)).to.have.lengthOf(0);
        }, 500);
      });
      click($startLink);
      andThen(function () {
        (0, _chai.expect)(currentURL()).to.contain('/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id');
        done();
      });
    });
  });
});
define('pix-live/tests/acceptance/a5-voir-liste-tests-adaptatifs-test', ['mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (_mocha, _chai, _startApp, _destroyApp) {
  'use strict';

  (0, _mocha.describe)('Acceptance | a5 - La page des tests adaptatifs', function () {

    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
      visit('/placement-tests');
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    (0, _mocha.it)('a5.0 est accessible depuis "/placement-tests"', function () {
      (0, _chai.expect)(currentURL()).to.equal('/placement-tests');
    });

    (0, _mocha.describe)('a5.1 contient une section', function () {

      (0, _mocha.it)('a5.1.1 avec la liste des tests', function () {
        findWithAssert('.placement-tests-page-courses__course-list');
      });
    });
  });
});
define('pix-live/tests/acceptance/b1-epreuve-qcu-test', ['mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (_mocha, _chai, _startApp, _destroyApp) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _mocha.describe)('Acceptance | b1 - Afficher un QCU | ', function () {

    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    (0, _mocha.it)('b1.1 Une liste de radiobuttons doit s\'afficher', _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var $proposals;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return visit('/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id');

            case 2:

              // then
              $proposals = $('input[type=radio][name="radio"]');

              (0, _chai.expect)($proposals).to.have.lengthOf(4);

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    (0, _mocha.it)('b1.2 Par défaut, le radiobutton de la réponse sauvegardée est affiché', _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return visit('/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id');

            case 2:

              // then
              (0, _chai.expect)($('input[type=radio][name="radio"]:checked')).to.have.lengthOf(1);

            case 3:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    (0, _mocha.it)('b1.3 Une liste ordonnée d\'instruction doit s\'afficher', _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return visit('/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id');

            case 2:

              // then
              (0, _chai.expect)($('.proposal-text:eq(0)').text().trim()).to.equal('1ere possibilite');
              (0, _chai.expect)($('.proposal-text:eq(1)').text().trim()).to.equal('2eme possibilite');
              (0, _chai.expect)($('.proposal-text:eq(2)').text().trim()).to.equal('3eme possibilite');
              (0, _chai.expect)($('.proposal-text:eq(3)').text().trim()).to.equal('4eme possibilite');

            case 6:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    })));

    (0, _mocha.it)('b1.4 L\'alerte est affichée si l\'utilisateur valide, mais aucun radiobutton n\'est coché', _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
      var $alert;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return visit('/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id');

            case 2:

              $(':radio').prop('checked', false);

              // when
              _context4.next = 5;
              return click('.challenge-actions__action-validate');

            case 5:

              // then
              $alert = $('.alert');

              (0, _chai.expect)($alert).to.have.lengthOf(1);
              (0, _chai.expect)($alert.text().trim()).to.equal('Pour valider, sélectionner une réponse. Sinon, passer.');

            case 8:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    })));

    (0, _mocha.it)('b1.5 Si un utilisateur clique sur un radiobutton, il est le seul coché, et les autres sont décochés', _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return visit('/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id');

            case 2:

              (0, _chai.expect)($('input[type=radio][name="radio"]:eq(0)').is(':checked')).to.equal(false);
              (0, _chai.expect)($('input[type=radio][name="radio"]:eq(1)').is(':checked')).to.equal(true);
              (0, _chai.expect)($('input[type=radio][name="radio"]:eq(2)').is(':checked')).to.equal(false);
              (0, _chai.expect)($('input[type=radio][name="radio"]:eq(3)').is(':checked')).to.equal(false);

              // When
              _context5.next = 8;
              return click($('.label-checkbox-proposal--qcu:eq(0)'));

            case 8:
              // Click on label trigger the event.

              // Then
              (0, _chai.expect)($('input[type=radio][name="radio"]:eq(0)').is(':checked')).to.equal(true);
              (0, _chai.expect)($('input[type=radio][name="radio"]:eq(1)').is(':checked')).to.equal(false);
              (0, _chai.expect)($('input[type=radio][name="radio"]:eq(2)').is(':checked')).to.equal(false);
              (0, _chai.expect)($('input[type=radio][name="radio"]:eq(3)').is(':checked')).to.equal(false);

            case 12:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this);
    })));

    (0, _mocha.it)('b1.6 Si un utilisateur clique sur un radiobutton, et valide l\'épreuve, une demande de sauvegarde de sa réponse est envoyée à l\'API', _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              // Given
              server.post('/answers', function (schema, request) {
                var params = JSON.parse(request.requestBody);

                (0, _chai.expect)(params.data.type).to.equal('answers');
                (0, _chai.expect)(params.data.attributes.value).to.equal('4');

                return {
                  data: {
                    type: 'answers',
                    id: 'ref_answer_qcm_id',
                    attributes: {
                      value: '4'
                    }
                  }
                };
              });

              _context6.next = 3;
              return visit('/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id');

            case 3:

              (0, _chai.expect)($('input[type=radio][name="radio"]:eq(0)').is(':checked')).to.equal(false);
              (0, _chai.expect)($('input[type=radio][name="radio"]:eq(1)').is(':checked')).to.equal(true);
              (0, _chai.expect)($('input[type=radio][name="radio"]:eq(2)').is(':checked')).to.equal(false);
              (0, _chai.expect)($('input[type=radio][name="radio"]:eq(3)').is(':checked')).to.equal(false);

              // When
              _context6.next = 9;
              return click($('.label-checkbox-proposal--qcu:eq(3)'));

            case 9:
              _context6.next = 11;
              return click('.challenge-actions__action-validate');

            case 11:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }))

    // Then
    );
  });
});
define('pix-live/tests/acceptance/b2-epreuve-qcm-test', ['mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (_mocha, _chai, _startApp, _destroyApp) {
  'use strict';

  function visitTimedChallenge() {
    visit('/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id');
    click('.challenge-item-warning button');
  }

  (0, _mocha.describe)('Acceptance | b2 - Afficher un QCM | ', function () {

    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
      visitTimedChallenge();
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    (0, _mocha.it)('b2.1 It should render challenge instruction', function () {
      // Given
      var expectedInstruction = 'Un QCM propose plusieurs choix, l\'utilisateur peut en choisir plusieurs';

      // When
      var $challengeInstruction = $('.challenge-statement__instruction');

      // Then
      (0, _chai.expect)($challengeInstruction.text().trim()).to.equal(expectedInstruction);
    });

    (0, _mocha.it)('b2.2 Le contenu de type [foo](bar) doit être converti sous forme de lien', function () {
      // When
      var $links = findWithAssert('.challenge-statement__instruction a');

      // Then
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

    (0, _mocha.it)('b2.5 It should mark checkboxes that have been checked', function () {
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
      // Given
      var $validateLink = $('.challenge-actions__action-validate');
      (0, _chai.expect)($('input:checkbox:checked')).to.have.lengthOf(2);

      //
      $('input:checkbox').prop('checked', false);
      (0, _chai.expect)($('input:checkbox:checked')).to.have.lengthOf(0);

      // When
      click($validateLink);

      // Then
      andThen(function () {
        (0, _chai.expect)($('.alert')).to.have.lengthOf(1);
        (0, _chai.expect)($('.alert').text().trim()).to.equal('Pour valider, sélectionner au moins une réponse. Sinon, passer.');
      });
    });

    (0, _mocha.it)('b2.9 If an user check a checkbox, it is checked', function () {
      $('input:checkbox').prop('checked', false);
      $('.proposal-text:eq(1)').click();
      andThen(function () {
        (0, _chai.expect)($('input:checkbox:checked')).to.have.lengthOf(1);
      });
    });

    (0, _mocha.it)('b2.10 If an user check another checkbox, it is checked, the previous checked checkboxes remains checked', function () {
      $('input:checkbox').prop('checked', false);
      $('input:checkbox:eq(1)').prop('checked', true);
      (0, _chai.expect)($('input:checkbox:checked')).to.have.lengthOf(1);
      $('.proposal-text:eq(2)').click();
      andThen(function () {
        (0, _chai.expect)($('input:checkbox:checked')).to.have.lengthOf(2);
      });
    });
  });
});
define('pix-live/tests/acceptance/b3-epreuve-qroc-test', ['mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (_mocha, _chai, _startApp, _destroyApp) {
  'use strict';

  (0, _mocha.describe)('Acceptance | b3 - Afficher un QROC | ', function () {

    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
      visit('/assessments/ref_assessment_id/challenges/ref_qroc_challenge_id');
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    (0, _mocha.it)('b3.1 It should render challenge instruction', function () {
      var $challengeInstruction = $('.challenge-statement__instruction');
      var instructiontext = 'Un QROC est une question ouverte avec un simple champ texte libre pour répondre';
      (0, _chai.expect)($challengeInstruction.text().trim()).to.equal(instructiontext);
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
  });
});
define('pix-live/tests/acceptance/b4-epreuve-qrocm-test', ['mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (_mocha, _chai, _startApp, _destroyApp) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _mocha.describe)('Acceptance | b4 - Afficher un QROCM | ', function () {

    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
      visit('/assessments/ref_assessment_id/challenges/ref_qrocm_challenge_id');
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    (0, _mocha.it)('b4.1 It should render challenge instruction', function () {
      var $challengeInstruction = $('.challenge-statement__instruction');
      var instructiontext = 'Un QROCM est une question ouverte avec plusieurs champs texte libre pour repondre';
      (0, _chai.expect)($challengeInstruction.text().trim()).to.equal(instructiontext);
    });

    (0, _mocha.it)('b4.2 It should display only one input text as proposal to user', function () {
      (0, _chai.expect)($('.challenge-response__proposal-input')).to.have.lengthOf(3);
    });

    (0, _mocha.it)('b4.3 Error alert box should be displayed if user validate without checking a checkbox', _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // 1st make sure all inputs are cleared
              $(':input').val('');
              // Then try to validate sth
              _context.next = 3;
              return click($('.challenge-actions__action-validate'));

            case 3:

              (0, _chai.expect)($('.alert')).to.have.lengthOf(1);
              (0, _chai.expect)($('.alert').text().trim()).to.equal('Pour valider, saisir au moins une réponse. Sinon, passer.');

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    })));
  });
});
define('pix-live/tests/acceptance/b6-epreuve-pj-test', ['mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (_mocha, _chai, _startApp, _destroyApp) {
  'use strict';

  function visitTimedChallenge() {
    visit('/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id');
    click('.challenge-item-warning button');
  }

  (0, _mocha.describe)('Acceptance | b6 - Télécharger une pièce jointe depuis la consigne d\'une épreuve | ', function () {

    var application = void 0;

    var $ATTACHMENT_LINK = $('.challenge-statement__action-link');

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
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
        (0, _chai.expect)($ATTACHMENT_LINK.text()).to.contain('Télécharger');
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
define('pix-live/tests/acceptance/b7-epreuve-points-communs-test', ['mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (_mocha, _chai, _startApp, _destroyApp) {
  'use strict';

  (0, _mocha.describe)('Acceptance | b7 - Points communs a toutes les épreuves | ', function () {

    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
      visit('/assessments/ref_assessment_id/challenges/ref_qrocm_challenge_id');
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    (0, _mocha.it)('b7.0 Le nom du test est affiché', function () {
      (0, _chai.expect)(findWithAssert('.course-banner__name').text()).to.contain('First Course');
    });

    (0, _mocha.it)('b7.1 L\'instruction de l\'epreuve est affichée', function () {
      var $challengeInstruction = $('.challenge-statement__instruction');
      var instructiontext = 'Un QROCM est une question ouverte avec plusieurs champs texte libre pour repondre';
      (0, _chai.expect)($challengeInstruction.text().trim()).to.equal(instructiontext);
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
      var $courseListButton = findWithAssert('.course-banner__home-link');
      (0, _chai.expect)($courseListButton.text()).to.equal('Retour à la liste des tests');
    });

    (0, _mocha.it)('b7.6 Quand je clique sur le bouton "Revenir à la liste des tests", je suis redirigé vers l\'index', function () {
      // when
      click('.course-banner__home-link');

      // then
      andThen(function () {
        return (0, _chai.expect)(currentURL()).to.equal('/');
      });
    });

    (0, _mocha.it)('b7.7 Il est possible de signaler l\'épreuve via le formulaire de Feedback', function () {
      (0, _chai.expect)($('.feedback-panel')).to.have.lengthOf(1);
    });
  });
});
define('pix-live/tests/acceptance/c1-recapitulatif-test', ['mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (_mocha, _chai, _startApp, _destroyApp) {
  'use strict';

  (0, _mocha.describe)('Acceptance | c1 - Consulter l\'écran de fin d\'un test ', function () {

    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
      visit('/assessments/ref_assessment_id/results');
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    (0, _mocha.it)('c1.0 se fait en accédant à l\'URL /assessments/:assessment_id/results', function () {
      (0, _chai.expect)(currentURL()).to.equal('/assessments/ref_assessment_id/results');
    });

    (0, _mocha.it)('c1.1 affiche une liste qui récapitule les réponses', function () {
      findWithAssert('.assessment-results__list');
    });

    (0, _mocha.it)('c1.2 le tableau récapitulatif contient les instructions ', function () {
      var $proposals = findWithAssert('.result-item');
      (0, _chai.expect)($proposals.text()).to.contain('Un QCM propose plusieurs choix');
      (0, _chai.expect)($proposals.text()).to.contain('Un QCU propose plusieurs choix');
      (0, _chai.expect)($proposals.text()).to.contain('Un QROC est une question ouverte');
      (0, _chai.expect)($proposals.text()).to.contain('Un QROCM est une question ouverte');
    });

    (0, _mocha.it)('c1.3 Pour une mauvaise réponse, le tableau récapitulatif donne une indication adéquate', function () {
      var $cell = findWithAssert('div[data-toggle="tooltip"]:eq(0)');
      (0, _chai.expect)($cell.attr('data-original-title')).to.equal('Réponse incorrecte');
    });

    (0, _mocha.it)('c1.9 Le nom du test est affiché', function () {
      (0, _chai.expect)(findWithAssert('.course-banner__name').text()).to.contain('First Course');
    });

    (0, _mocha.it)('c1.10 Le bouton "Revenir à la liste des tests" n\'apparaît pas', function () {
      (0, _chai.expect)(find('.course-banner__home-link')).to.have.lengthOf(0);
    });

    (0, _mocha.it)('c1.11. propose un moyen pour revenir à la liste des tests', function () {
      findWithAssert('.assessment-results__index-link-container');
    });

    (0, _mocha.it)('c1.12. La bannière est affichée', function () {
      findWithAssert('.assessment-results__course-banner');
    });
  });
});
define('pix-live/tests/acceptance/course-groups-test', ['mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (_mocha, _chai, _startApp, _destroyApp) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _mocha.describe)('Acceptance | courseGroups', function () {

    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    (0, _mocha.describe)('Access to the page', function () {

      (0, _mocha.it)('should display the historic of the weekly courses courseGroups by the url /defis-pix', _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return visit('/defis-pix');

              case 2:

                // then
                (0, _chai.expect)(currentURL()).to.equal('/defis-pix');

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      })));
    });

    (0, _mocha.describe)('Rendering', function () {

      (0, _mocha.it)('should display a navbar and a footer', _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return visit('/defis-pix');

              case 2:

                // then
                (0, _chai.expect)(find('.navbar-header')).to.have.lengthOf(1);
                (0, _chai.expect)(find('.app-footer')).to.have.lengthOf(1);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      })));

      (0, _mocha.it)('should display a header section', _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return visit('/defis-pix');

              case 2:

                // then
                (0, _chai.expect)(find('.course-groups-page__header')).to.have.lengthOf(1);

              case 3:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      })));

      (0, _mocha.it)('should display a list of (weekly courses) course-groups', _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
        var courses;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // given
                courses = server.createList('course', 2, { name: 'course name' });

                server.createList('courseGroup', 3, { courses: courses });

                // when
                _context4.next = 4;
                return visit('/defis-pix');

              case 4:

                // then
                (0, _chai.expect)(find('.course-item__name')[0].innerText).to.equal('course name');

                (0, _chai.expect)(find('.course-groups-page__course-groups')).to.have.lengthOf(1);
                (0, _chai.expect)(find('.course-groups-page__course-group-item')).to.have.lengthOf(3);
                (0, _chai.expect)(find('.course-list')).to.have.lengthOf(3);
                (0, _chai.expect)(find('.course-item')).to.have.lengthOf(6);

              case 9:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      })));
    });
  });
});
define('pix-live/tests/acceptance/d1-epreuve-validation-test', ['mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (_mocha, _chai, _startApp, _destroyApp) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  var visitTimedChallenge = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return visit('/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id');

            case 2:
              _context.next = 4;
              return click('.challenge-item-warning button');

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function visitTimedChallenge() {
      return _ref.apply(this, arguments);
    };
  }();

  function progressBarText() {
    var PROGRESS_BAR_SELECTOR = '.pix-progress-bar';
    return findWithAssert(PROGRESS_BAR_SELECTOR).text().trim();
  }

  (0, _mocha.describe)('Acceptance | d1 - Valider une épreuve |', function () {

    var application = void 0;
    var PROGRESS_BAR_SELECTOR = '.pix-progress-bar';

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    (0, _mocha.it)('d1.0a La barre de progression commence à 1, si j\'accède au challenge depuis l\'url directe', _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return visit('/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id');

            case 2:
              (0, _chai.expect)(progressBarText()).to.equal('1 / 5');

            case 3:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    (0, _mocha.it)('d1.0b La barre de progression commence à 1, si j\'accède directement à un course', _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
      var $progressBar;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return visit('/courses/ref_course_id');

            case 2:

              // Then
              $progressBar = findWithAssert(PROGRESS_BAR_SELECTOR);

              (0, _chai.expect)($progressBar.text().trim()).to.equal('1 / 5');

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    })));

    (0, _mocha.it)('d1.1 Je peux valider ma réponse à une épreuve via un bouton "Je valide"', _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return visitTimedChallenge();

            case 2:
              (0, _chai.expect)(findWithAssert('.challenge-actions__action-validate')).to.have.lengthOf(1);

            case 3:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    })));

    (0, _mocha.describe)('quand je valide ma réponse à une épreuve', function () {
      (0, _mocha.beforeEach)(_asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return visitTimedChallenge();

              case 2:
                _context5.next = 4;
                return click('.proposal-text');

              case 4:
                _context5.next = 6;
                return click('.challenge-actions__action-validate');

              case 6:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      })));

      (0, _mocha.it)('d1.3 Si l\'épreuve que je viens de valider n\'était pas la dernière du test, je suis redirigé vers l\'épreuve suivante', _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                (0, _chai.expect)(currentURL()).to.contain('/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id');

              case 1:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      })));

      (0, _mocha.it)('d1.4 La barre de progression avance d\'une unité, de 1 à 2.', _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
        var expectedText;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:

                // Then
                expectedText = '2';

                (0, _chai.expect)(findWithAssert('.pix-progress-bar').text()).to.contain(expectedText);

              case 2:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      })));

      (0, _mocha.it)('d1.5 Si l\'épreuve que je viens de valider était la dernière du test, je suis redirigé vers la page de fin du test', _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return visit('/assessments/ref_assessment_id/challenges/ref_qrocm_challenge_id');

              case 2:
                _context8.next = 4;
                return click('.challenge-response__proposal-input');

              case 4:
                _context8.next = 6;
                return click('.challenge-actions__action-validate');

              case 6:
                (0, _chai.expect)(currentURL()).to.contain('/assessments/ref_assessment_id/results');

              case 7:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      })));
    });
  });
});
define('pix-live/tests/acceptance/f1-previsualisation-test-test', ['mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (_mocha, _chai, _startApp, _destroyApp) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _mocha.describe)('Acceptance | f1 - Prévisualisation  d\'un test |', function () {

    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    (0, _mocha.describe)('Prévisualiser la première page d\'un test |', function () {

      (0, _mocha.beforeEach)(function () {
        visit('/courses/ref_course_id/preview');
      });

      (0, _mocha.it)('f1.1 L\'accès à la preview d\'un test se fait en accédant à l\'URL /courses/:course_id/preview', function () {
        (0, _chai.expect)(currentURL()).to.equal('/courses/ref_course_id/preview');
      });

      var $preview = void 0;

      (0, _mocha.describe)('On affiche', function () {

        (0, _mocha.beforeEach)(function () {
          $preview = findWithAssert('#course-preview');
        });

        (0, _mocha.it)('f1.2 le nom du test', function () {
          (0, _chai.expect)($preview.find('.course-name').text()).to.contain('First Course');
        });

        (0, _mocha.it)('f1.3 la description du test', function () {
          var $courseDescription = $preview.find('.course-description');
          var instructionText = 'Contient toutes sortes d\'epreuves avec différentes caractéristiques couvrant tous les cas d\'usage.';
          (0, _chai.expect)($courseDescription.text()).to.contain(instructionText);
        });

        (0, _mocha.it)('f1.4 un bouton pour démarrer la simulation du test et qui mène à la première question', function () {
          var $playButton = findWithAssert('.simulate-button');
          (0, _chai.expect)($playButton.text()).to.be.equals('Simuler le test');
          (0, _chai.expect)($playButton.attr('href')).to.be.equals('/courses/ref_course_id/preview/challenges/ref_qcm_challenge_id');
        });
      });
    });

    (0, _mocha.describe)('Prévisualiser une épreuve dans le cadre d\'un test |', function () {

      (0, _mocha.beforeEach)(_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return visit('/courses/ref_course_id/preview/challenges/ref_qcm_challenge_id');

              case 2:
                _context.next = 4;
                return click('.challenge-item-warning button');

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      })));

      (0, _mocha.it)('f1.5 L\'accès à la preview d\'une épreuve d\'un test se fait en accédant à l\'URL /courses/:course_id/preview/challenges/:challenge_id', function () {
        (0, _chai.expect)(currentURL()).to.equal('/courses/ref_course_id/preview/challenges/ref_qcm_challenge_id');
      });

      (0, _mocha.describe)('On affiche', function () {

        (0, _mocha.it)('f1.6 la consigne de l\'épreuve', function () {
          (0, _chai.expect)(findWithAssert('.challenge-preview .challenge-statement__instruction').html()).to.contain('Un QCM propose plusieurs choix');
        });

        (0, _mocha.it)('f1.7 un bouton pour accéder à l\'épreuve suivante', function () {
          (0, _chai.expect)(findWithAssert('.challenge-preview .challenge-actions__action-validate').text()).to.contain('Je valide');
        });
      });
    });
  });
});
define('pix-live/tests/acceptance/g1-bandeau-no-internet-no-outils-test', ['mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (_mocha, _chai, _startApp, _destroyApp) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  var CHALLENGE_WITHOUT_INTERNET_NOR_TOOLS_URI = '/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id';
  var CHALLENGE_ALLOWING_INTERNET_OR_TOOS_URI = '/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id';

  (0, _mocha.describe)('Acceptance | g1 - Afficahge du bandeau indiquant que l\'usage d\'Internet ou d\'outils est interdit | ', function () {

    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    (0, _mocha.it)('g1.1 le bandeau doit être affiché si l\'usage d\'Internet ou d\'outils est interdit dans le cadre de l\'épreuve', _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return visit(CHALLENGE_WITHOUT_INTERNET_NOR_TOOLS_URI);

            case 2:
              (0, _chai.expect)($('.challenge-stay__text').text()).to.contain('Vous devez répondre à cette question sans sortir de cette page !');

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    (0, _mocha.it)('g1.2 le bandeau ne doit pas être affiché si l\'usage d\'Internet ou d\'outils est autorisé dans le cadre de l\'épreuve', function () {
      visit(CHALLENGE_ALLOWING_INTERNET_OR_TOOS_URI);
      (0, _chai.expect)($('.challenge-stay__text')).to.have.lengthOf(0);
    });
  });
});
define('pix-live/tests/acceptance/h1-timeout-jauge-test', ['mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (_mocha, _chai, _startApp, _destroyApp) {
  'use strict';

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

    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
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
  });
});
define('pix-live/tests/acceptance/h2-page-warning-timee-test', ['mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (_mocha, _chai, _startApp, _destroyApp) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  var TIMED_CHALLENGE_URL = '/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id';
  var NOT_TIMED_CHALLENGE_URL = '/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id';
  var CHALLENGE_ITEM_WARNING_BUTTON = '.challenge-item-warning button';

  (0, _mocha.describe)('Acceptance | h2 - Warning prochaine page timée  | ', function () {

    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    (0, _mocha.describe)('h2- Test affichage ou non de la page avec le warning', function () {

      (0, _mocha.beforeEach)(function () {
        visit(TIMED_CHALLENGE_URL);
      });

      //XXX: Deux cas car on test aussi une absence d'affichage
      (0, _mocha.it)('h2.1- doit cacher le contenu du challenge si l\'épreuve est timée mais l\'afficher dans le cas contraire ', _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0, _chai.expect)($('.challenge-statement')).to.have.lengthOf(0);
                _context.next = 3;
                return visit(NOT_TIMED_CHALLENGE_URL);

              case 3:
                (0, _chai.expect)($('.challenge-statement')).to.have.lengthOf(1);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      })));

      (0, _mocha.it)('h2.2- doit afficher le warning si l\'épreuve est timée mais ne pas l\'afficher dans le cas contraire ', _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                (0, _chai.expect)($('.challenge-item-warning')).to.have.lengthOf(1);
                _context2.next = 3;
                return visit(NOT_TIMED_CHALLENGE_URL);

              case 3:
                (0, _chai.expect)($('.challenge-item-warning')).to.have.lengthOf(0);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      })));

      (0, _mocha.it)('h2.3- vérifier que le timer n\'est pas démarré automatiquement lorsque l\'épreuve est timée', function () {
        (0, _chai.expect)($('.timeout-jauge')).to.have.lengthOf(0);
      });

      (0, _mocha.it)('h2.4 le formulaire de signalement n\'est pas affiché pour une épreuve chronométrée tant que l\'usager n\'a pas confirmé être prêt pour l\'épreuve', function () {
        (0, _chai.expect)($('.feedback-panel')).to.have.lengthOf(0);
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
        (0, _chai.expect)($('.challenge-statement').css('display')).to.contain('block');
      });

      (0, _mocha.it)('h2.3- vérifier que le timer est démarré ', function () {
        (0, _chai.expect)($('.timeout-jauge')).to.have.lengthOf(1);
      });

      (0, _mocha.it)('h2.4 le formulaire de signalement est affiché', function () {
        (0, _chai.expect)($('.feedback-panel')).to.have.lengthOf(1);
      });
    });

    (0, _mocha.describe)('h2-Affichage de la page warning pour 2 epreuves timées du même types (suite au bug US-424)', function () {

      var ASSESSMENT_WITH_TWO_TIMED_CHALLENGE = '/assessments/ref_timed_challenge_assessment_id/challenges/ref_timed_challenge_id';
      var PASS_BUTTON = '.challenge-actions__action-skip';

      (0, _mocha.it)('doit afficher la \'warning page\' même si deux epreuves du même type et timées s\'enchaînent', _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return visit(ASSESSMENT_WITH_TWO_TIMED_CHALLENGE);

              case 2:
                _context3.next = 4;
                return click(CHALLENGE_ITEM_WARNING_BUTTON);

              case 4:
                _context3.next = 6;
                return click(PASS_BUTTON);

              case 6:

                // then
                (0, _chai.expect)($('.challenge-item-warning')).to.have.lengthOf(1);

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      })));
    });
  });
});
define('pix-live/tests/acceptance/j1-compare-answer-solution-test', ['mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (_mocha, _chai, _startApp, _destroyApp) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  // see http://stackoverflow.com/a/7349478/2595513
  function charCount(str) {
    return str.match(/[a-zA-Z]/g).length;
  }

  (0, _mocha.describe)('Acceptance | j1 - Comparer réponses et solutions pour un QCM |', function () {

    var RESULT_URL = '/assessments/ref_assessment_id/results';
    var COMPARISON_MODAL_URL = '/assessments/ref_assessment_id/results/compare/ref_answer_qcm_id/1';

    var TEXT_OF_RESULT_SELECTOR = '.comparison-window__header .comparison-window__title-text';
    var INDEX_OF_RESULT_SELECTOR = '.comparison-window__header .comparison-window__result-item-index';

    var TEXT_OF_INSTRUCTION_SELECTOR = '.comparison-window--body .challenge-statement__instruction';
    var IMAGE_OF_INSTRUCTION_SELECTOR = '.comparison-window--body .challenge-statement__illustration-section';

    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    (0, _mocha.describe)('j1.1 Affiche sur la ligne de l\'épreuve le mot REPONSE pour un QCM sur l\'écran des résultats', function () {
      (0, _mocha.it)('j1.1.1 il l\'affiche pour un QCM, un QCU mais pas pour les autres types d\'épreuves', _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return visit(RESULT_URL);

              case 2:
                (0, _chai.expect)($('.result-item:eq(0) .js-correct-answer').text()).to.contain('RÉPONSE'); //QCM
                (0, _chai.expect)($('.result-item:eq(1) .js-correct-answer').text()).to.contain('RÉPONSE'); //QCU
                (0, _chai.expect)($('.result-item:eq(2) .js-correct-answer').text()).not.to.contain('RÉPONSE'); //QRU
                (0, _chai.expect)($('.result-item:eq(3) .js-correct-answer').text()).to.contain('RÉPONSE'); //QROC
                (0, _chai.expect)($('.result-item:eq(4) .js-correct-answer').text()).not.to.contain('RÉPONSE'); //QROCM

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      })));
    });

    (0, _mocha.describe)('j1.2 Accès à la modale', function () {

      (0, _mocha.it)('j1.2.1 Si on clique sur REPONSE la modale s\'ouvre', _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return visit(RESULT_URL);

              case 2:
                (0, _chai.expect)($('.comparison-window')).to.have.lengthOf(0);
                _context2.next = 5;
                return click('.result-item__correction__button');

              case 5:
                (0, _chai.expect)($('.comparison-window')).to.have.lengthOf(1);
                // XXX test env needs the modal to be closed manually
                _context2.next = 8;
                return click('.close-button-container');

              case 8:
                (0, _chai.expect)($('.comparison-window')).to.have.lengthOf(0);

              case 9:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      })));

      (0, _mocha.it)('j1.2.2 On peut accèder directement à la modale via URL et fermer la modale', _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return visit(COMPARISON_MODAL_URL);

              case 2:
                (0, _chai.expect)($('.comparison-window')).to.have.lengthOf(1);
                // XXX test env needs the modal to be closed manually
                _context3.next = 5;
                return click('.close-button-container');

              case 5:
                (0, _chai.expect)($('.comparison-window')).to.have.lengthOf(0);

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      })));
    });

    (0, _mocha.describe)('j1.3 Contenu de la modale : résultat & instruction', function () {

      (0, _mocha.it)('j1.3.1 Vérification de l\'index, ainsi que l\'image et le texte du résultat dans le header', _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return visit(RESULT_URL);

              case 2:
                (0, _chai.expect)($(INDEX_OF_RESULT_SELECTOR)).to.have.lengthOf(0);
                (0, _chai.expect)($(TEXT_OF_RESULT_SELECTOR)).to.have.lengthOf(0);

                _context4.next = 6;
                return visit(COMPARISON_MODAL_URL);

              case 6:
                (0, _chai.expect)($(INDEX_OF_RESULT_SELECTOR).text().replace(/\n/g, '').trim()).to.equal('1');

                // XXX test env needs the modal to be closed manually
                _context4.next = 9;
                return click('.close-button-container');

              case 9:
                (0, _chai.expect)($('.comparison-window')).to.have.lengthOf(0);

              case 10:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      })));

      (0, _mocha.it)('j1.3.2 Vérification de la présence de l\'instruction, texte et image', _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return visit(RESULT_URL);

              case 2:
                (0, _chai.expect)($(TEXT_OF_INSTRUCTION_SELECTOR)).to.exist;
                (0, _chai.expect)($(IMAGE_OF_INSTRUCTION_SELECTOR)).to.exist;

                _context5.next = 6;
                return visit(COMPARISON_MODAL_URL);

              case 6:
                (0, _chai.expect)(charCount($(TEXT_OF_INSTRUCTION_SELECTOR).text())).to.be.above(5); // XXX : Above 5 means "must be a sentence"
                (0, _chai.expect)($(IMAGE_OF_INSTRUCTION_SELECTOR)).to.have.lengthOf(1);

                // XXX test env needs the modal to be closed manually
                _context5.next = 10;
                return click('.close-button-container');

              case 10:
                (0, _chai.expect)($('.comparison-window')).to.have.lengthOf(0);

              case 11:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      })));
    });
  });
});
define('pix-live/tests/acceptance/j2-compare-answer-solution-qroc-test', ['mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (_mocha, _chai, _startApp, _destroyApp) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _mocha.describe)('Acceptance | j2 - Comparer réponses et solutions pour un QROC | ', function () {

    var RESULT_URL = '/assessments/ref_assessment_id/results';
    var COMPARISON_MODAL_URL = '/assessments/ref_assessment_id/results/compare/ref_answer_qroc_id/4';

    var TEXT_OF_RESULT_SELECTOR = '.comparison-window__header .comparison-window__title .comparison-window__title-text';
    var INDEX_OF_RESULT_SELECTOR = '.comparison-window__header .comparison-window__result-item-index';
    var TEXT_OF_INSTRUCTION_SELECTOR = '.comparison-window--body .challenge-statement__instruction';
    var CORRECTION_BOX_QROC = '.comparison-window__corrected-answers--qroc';
    var FEEDBACK_PANEL = '.comparison-window__feedback-panel';

    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    (0, _mocha.describe)('j2.1 Depuis la page résultat', function () {

      (0, _mocha.beforeEach)(_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return visit(RESULT_URL);

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      })));

      (0, _mocha.it)('affiche le lien REPONSE vers la modale depuis l\'ecran des resultats pour un QROC', _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                (0, _chai.expect)($('.result-item .js-correct-answer').text()).to.contain('RÉPONSE');

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      })));

      (0, _mocha.it)('On n\'affiche pas encore la modale, ni son contenu', _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                (0, _chai.expect)($('.comparison-window')).to.have.lengthOf(0);
                (0, _chai.expect)($(INDEX_OF_RESULT_SELECTOR)).to.have.lengthOf(0);
                (0, _chai.expect)($(TEXT_OF_RESULT_SELECTOR)).to.have.lengthOf(0);

              case 3:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      })));
    });

    (0, _mocha.describe)('j2.2 Contenu de la modale de correction pour un QROC', function () {

      (0, _mocha.beforeEach)(_asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return visit(COMPARISON_MODAL_URL);

              case 2:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      })));

      (0, _mocha.afterEach)(_asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(find('.close-button-container').length > 0)) {
                  _context5.next = 3;
                  break;
                }

                _context5.next = 3;
                return click('.close-button-container');

              case 3:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      })));

      (0, _mocha.it)('possible d\'accéder à la modale depuis l\'URL', _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                (0, _chai.expect)($('.comparison-window')).to.have.lengthOf(1);

              case 1:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      })));

      (0, _mocha.it)('contient un header', _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                (0, _chai.expect)($(INDEX_OF_RESULT_SELECTOR).text().replace(/\n/g, '').trim()).to.equal('4');

              case 1:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      })));

      (0, _mocha.it)('contient une instruction', _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                (0, _chai.expect)($(TEXT_OF_INSTRUCTION_SELECTOR)).to.have.lengthOf(1);

              case 1:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      })));

      (0, _mocha.it)('contient une zone de correction', _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                (0, _chai.expect)($(CORRECTION_BOX_QROC)).to.have.lengthOf(1);

              case 1:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      })));

      (0, _mocha.it)('contient une zone reservé au feedback panel', _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                (0, _chai.expect)($(FEEDBACK_PANEL)).to.have.lengthOf(1);

              case 1:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, this);
      })));

      (0, _mocha.it)('on peut fermer la modale', _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return click('.close-button-container');

              case 2:
                (0, _chai.expect)($('.comparison-window')).to.have.lengthOf(0);

              case 3:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, this);
      })));
    });
  });
});
define('pix-live/tests/acceptance/k1-competences-page-test', ['mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (_mocha, _chai, _startApp, _destroyApp) {
  'use strict';

  (0, _mocha.describe)('Acceptance | competences page', function () {

    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
      visit('/competences');
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    (0, _mocha.it)('can visit /competences', function () {
      (0, _chai.expect)(currentURL()).to.equal('/competences');
    });

    (0, _mocha.it)('should display page title', function () {
      (0, _chai.expect)(find('.competences-page__header-text')).to.have.lengthOf(1);
    });

    (0, _mocha.it)('should display as many sections as competences domains', function () {
      (0, _chai.expect)(find('.competences-domain')).to.have.lengthOf(5);
    });

    (0, _mocha.it)('should hide all sections by default', function () {
      (0, _chai.expect)(find('.competences-domain__topics')).to.have.lengthOf(0);
    });

    (0, _mocha.it)('should open a section when one clicks on its title', function () {
      var $firstSectionHeader = find('.competences-domain__header').first();
      click($firstSectionHeader);
      return andThen(function () {
        (0, _chai.expect)(find('.competences-domain__topics')).to.have.lengthOf(1);
      });
    });
  });
});
define('pix-live/tests/acceptance/l1-signaler-une-epreuve-test', ['mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (_mocha, _chai, _startApp, _destroyApp) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  var FEEDBACK_FORM = '.feedback-panel__form';

  (0, _mocha.describe)('Acceptance | Signaler une épreuve', function () {

    var application = void 0;

    function assertThatFeedbackPanelExist() {
      (0, _chai.expect)(find('.feedback-panel')).to.have.lengthOf(1);
    }

    function assertThatFeedbackFormIsClosed() {
      (0, _chai.expect)(find('.feedback-panel__open-link')).to.have.lengthOf(1);
      (0, _chai.expect)(find(FEEDBACK_FORM)).to.have.lengthOf(0);
    }

    function assertThatFeedbackFormIsOpen() {
      (0, _chai.expect)(find('.feedback-panel__open-link')).to.have.lengthOf(0);
      (0, _chai.expect)(find(FEEDBACK_FORM)).to.have.lengthOf(1);
    }

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    (0, _mocha.describe)('l1.1 Depuis une epreuve', function () {
      var _this = this;

      (0, _mocha.it)('Je peux signaler une épreuve directement', _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return visit('/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id');

              case 2:
                assertThatFeedbackPanelExist();

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      })));

      (0, _mocha.it)('Le formulaire de signalement d\'une épreuve est remis à zéro dès que je change d\'épreuve', _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return visit('/assessments/ref_assessment_id/challenges/ref_qru_challenge_id');

              case 2:
                assertThatFeedbackFormIsClosed();

                _context2.next = 5;
                return click('.feedback-panel__open-link');

              case 5:
                assertThatFeedbackFormIsOpen();

                _context2.next = 8;
                return click('.challenge-actions__action-skip');

              case 8:
                assertThatFeedbackFormIsClosed();

              case 9:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this);
      })));

      (0, _mocha.it)('Le formulaire de signalement est remis à zéro même quand les 2 épreuves qui s\'enchaînent utilisent le même composant challenge-item-* (ex : q1 est de type "QCU" et q2 "QRU" ; toutes deux utilisent le composant challenge-item-qcu)', _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return visit('/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id');

              case 2:
                assertThatFeedbackFormIsClosed();

                _context3.next = 5;
                return click('.feedback-panel__open-link');

              case 5:
                assertThatFeedbackFormIsOpen();

                _context3.next = 8;
                return click('.challenge-actions__action-skip');

              case 8:
                assertThatFeedbackFormIsClosed();

              case 9:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this);
      })));
    });

    (0, _mocha.describe)('l1.2 Depuis la fenêtre de comparaison', function () {
      var _this2 = this;

      (0, _mocha.it)('Je peux signaler une épreuve (page de résultat du test)', _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return visit('/assessments/ref_assessment_id/results/compare/ref_answer_qcm_id/1');

              case 2:
                assertThatFeedbackFormIsOpen();
                // XXX test env needs the modal to be closed manually
                _context4.next = 5;
                return click('.close-button-container');

              case 5:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this2);
      })));
    });
  });
});
define('pix-live/tests/acceptance/m1-authentication-and-profile-test', ['mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (_mocha, _chai, _startApp, _destroyApp) {
  'use strict';

  (0, _mocha.describe)('Acceptance | Espace compte', function () {

    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();

      server.create('user', {
        id: 1,
        firstName: 'François',
        lastName: 'Hisquin',
        email: 'fhi@octo.com',
        password: 'FHI4EVER',
        cgu: true,
        recaptchaToken: 'recaptcha-token-xxxxxx',
        competenceIds: []
      });
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    (0, _mocha.describe)('m1.1 Accessing to the /compte page while disconnected', function () {
      (0, _mocha.it)('should redirect to the connexion page', function () {
        // when
        visit('/compte');

        // then
        return andThen(function () {
          (0, _chai.expect)(currentURL()).to.equal('/connexion');
        });
      });
    });

    (0, _mocha.describe)('m1.2 Log-in phase', function () {
      (0, _mocha.it)('should redirect to the /compte after connexion', function () {
        // given
        visit('/connexion');
        fillIn('#pix-email', 'fhi@octo.com');
        fillIn('#pix-password', 'FHI4EVER');

        // when
        click('.signin-form__submit_button');

        // then
        return andThen(function () {
          (0, _chai.expect)(currentURL()).to.equal('/compte');
        });
      });
    });
  });
});
define('pix-live/tests/acceptance/n1-competence-profile-test', ['mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (_mocha, _chai, _startApp, _destroyApp) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _mocha.describe)('Acceptance | n1 - competence profile', function () {
    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    function seedDatabase() {
      server.loadFixtures('areas');
      server.loadFixtures('competences');
      server.create('user', {
        id: 1,
        firstName: 'Samurai',
        lastName: 'Jack',
        email: 'samurai.jack@aku.world',
        password: 'B@ck2past',
        cgu: true,
        recaptchaToken: 'recaptcha-token-xxxxxx',
        competenceIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
      });
    }

    function authenticateUser() {
      visit('/connexion');
      fillIn('#pix-email', 'samurai.jack@aku.world');
      fillIn('#pix-password', 'B@ck2past');
      click('.signin-form__submit_button');
    }

    (0, _mocha.it)('can visit /compte', _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // given
              seedDatabase();
              authenticateUser();

              // when
              _context.next = 4;
              return visit('/compte');

            case 4:
              return _context.abrupt('return', andThen(function () {
                (0, _chai.expect)(currentURL()).to.equal('/compte');
              }));

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    (0, _mocha.it)('should display user competences (with level) grouped by area', function () {
      // given
      seedDatabase();
      authenticateUser();

      // when
      visit('/compte');

      // then
      return andThen(function () {
        (0, _chai.expect)(find('.competence-by-area-item').length).to.equal(5);
        (0, _chai.expect)(find('.competence').length).to.equal(16);
      });
    });

    (0, _mocha.it)('should display a link ’commencer’ with the correct url to start an adaptive course, for the first competence', function () {
      // given
      seedDatabase();
      authenticateUser();

      // when
      visit('/compte');

      // then
      return andThen(function () {
        (0, _chai.expect)(find('.competence-level-progress-bar__start-link:first').attr('href')).to.be.equal('/courses/ref_course_id');
      });
    });
  });
});
define('pix-live/tests/app.lint-test', [], function () {
  'use strict';

  describe('ESLint | app', function () {

    it('adapters/application.js', function () {
      // test passed
    });

    it('adapters/challenge.js', function () {
      // test passed
    });

    it('adapters/solution.js', function () {
      // test passed
    });

    it('adapters/user.js', function () {
      // test passed
    });

    it('app.js', function () {
      // test passed
    });

    it('authenticators/simple.js', function () {
      // test passed
    });

    it('components/app-footer.js', function () {
      // test passed
    });

    it('components/beta-logo.js', function () {
      // test passed
    });

    it('components/challenge-actions.js', function () {
      // test passed
    });

    it('components/challenge-item-generic.js', function () {
      // test passed
    });

    it('components/challenge-item-qcm.js', function () {
      // test passed
    });

    it('components/challenge-item-qcu.js', function () {
      // test passed
    });

    it('components/challenge-item-qroc.js', function () {
      // test passed
    });

    it('components/challenge-item-qrocm.js', function () {
      // test passed
    });

    it('components/challenge-statement.js', function () {
      // test passed
    });

    it('components/challenge-stay.js', function () {
      // test passed
    });

    it('components/comparison-window.js', function () {
      // test passed
    });

    it('components/competence-area-list.js', function () {
      // test passed
    });

    it('components/competence-by-area-item.js', function () {
      // test passed
    });

    it('components/competence-level-progress-bar.js', function () {
      // test passed
    });

    it('components/corner-ribbon.js', function () {
      // test passed
    });

    it('components/course-banner.js', function () {
      // test passed
    });

    it('components/course-item.js', function () {
      // test passed
    });

    it('components/course-list.js', function () {
      // test passed
    });

    it('components/feature-item.js', function () {
      // test passed
    });

    it('components/feature-list.js', function () {
      // test passed
    });

    it('components/feedback-panel.js', function () {
      // test passed
    });

    it('components/follower-form.js', function () {
      // test passed
    });

    it('components/g-recaptcha.js', function () {
      // test passed
    });

    it('components/medal-item.js', function () {
      // test passed
    });

    it('components/modal-mobile.js', function () {
      // test passed
    });

    it('components/navbar-header.js', function () {
      // test passed
    });

    it('components/pix-logo.js', function () {
      // test passed
    });

    it('components/profile-panel.js', function () {
      // test passed
    });

    it('components/progress-bar.js', function () {
      // test passed
    });

    it('components/qcm-proposals.js', function () {
      // test passed
    });

    it('components/qcm-solution-panel.js', function () {
      // test passed
    });

    it('components/qcu-proposals.js', function () {
      // test passed
    });

    it('components/qcu-solution-panel.js', function () {
      // test passed
    });

    it('components/qroc-proposal.js', function () {
      // test passed
    });

    it('components/qroc-solution-panel.js', function () {
      // test passed
    });

    it('components/qrocm-ind-solution-panel.js', function () {
      // test passed
    });

    it('components/qrocm-proposal.js', function () {
      // test passed
    });

    it('components/result-item.js', function () {
      // test passed
    });

    it('components/score-pastille.js', function () {
      // test passed
    });

    it('components/scoring-panel-tantpix.js', function () {
      // test passed
    });

    it('components/scoring-panel.js', function () {
      // test passed
    });

    it('components/signin-form.js', function () {
      // test passed
    });

    it('components/signup-form.js', function () {
      // test passed
    });

    it('components/signup-textfield.js', function () {
      // test passed
    });

    it('components/timeout-jauge.js', function () {
      // test passed
    });

    it('components/trophy-item.js', function () {
      // test passed
    });

    it('components/warning-page.js', function () {
      // test passed
    });

    it('helpers/convert-to-html.js', function () {
      // test passed
    });

    it('helpers/eq.js', function () {
      // test passed
    });

    it('helpers/extract-extension.js', function () {
      // test passed
    });

    it('helpers/get-challenge-component-class.js', function () {
      // test passed
    });

    it('helpers/inc.js', function () {
      // test passed
    });

    it('helpers/or.js', function () {
      // test passed
    });

    it('helpers/property-of.js', function () {
      // test passed
    });

    it('helpers/strip-instruction.js', function () {
      // test passed
    });

    it('initializers/router.js', function () {
      // test passed
    });

    it('models/answer.js', function () {
      // test passed
    });

    it('models/answer/value-as-array-of-string-mixin.js', function () {
      // test passed
    });

    it('models/area.js', function () {
      // test passed
    });

    it('models/assessment.js', function () {
      // test passed
    });

    it('models/challenge.js', function () {
      // test passed
    });

    it('models/competence.js', function () {
      // test passed
    });

    it('models/course-group.js', function () {
      // test passed
    });

    it('models/course.js', function () {
      // test passed
    });

    it('models/feedback.js', function () {
      // test passed
    });

    it('models/follower.js', function () {
      // test passed
    });

    it('models/solution.js', function () {
      // test passed
    });

    it('models/user.js', function () {
      // test passed
    });

    it('resolver.js', function () {
      // test passed
    });

    it('router.js', function () {
      // test passed
    });

    it('routes/application.js', function () {
      // test passed
    });

    it('routes/assessments/get-challenge.js', function () {
      // test passed
    });

    it('routes/assessments/get-comparison.js', function () {
      // test passed
    });

    it('routes/assessments/get-results.js', function () {
      // test passed
    });

    it('routes/base-route.js', function () {
      // test passed
    });

    it('routes/challenges/get-preview.js', function () {
      // test passed
    });

    it('routes/competences.js', function () {
      // test passed
    });

    it('routes/compte.js', function () {
      // test passed
    });

    it('routes/course-groups.js', function () {
      // test passed
    });

    it('routes/courses.js', function () {
      // test passed
    });

    it('routes/courses/create-assessment-old.js', function () {
      // test passed
    });

    it('routes/courses/create-assessment.js', function () {
      // test passed
    });

    it('routes/courses/get-challenge-preview.js', function () {
      // test passed
    });

    it('routes/courses/get-course-preview.js', function () {
      // test passed
    });

    it('routes/index.js', function () {
      // test passed
    });

    it('routes/inscription.js', function () {
      // test passed
    });

    it('routes/login.js', function () {
      // test passed
    });

    it('routes/logout.js', function () {
      // test passed
    });

    it('routes/placement-tests.js', function () {
      // test passed
    });

    it('routes/project.js', function () {
      // test passed
    });

    it('serializers/challenge.js', function () {
      // test passed
    });

    it('services/ajax.js', function () {
      // test passed
    });

    it('services/assessment.js', function () {
      // test passed
    });

    it('services/delay.js', function () {
      // test passed
    });

    it('services/google-recaptcha.js', function () {
      // test passed
    });

    it('services/splash.js', function () {
      // test passed
    });

    it('transforms/array.js', function () {
      // test passed
    });

    it('utils/answers-as-object.js', function () {
      // test passed
    });

    it('utils/call-only-once.js', function () {
      // test passed
    });

    it('utils/email-validator.js', function () {
      // test passed
    });

    it('utils/get-challenge-type.js', function () {
      // test passed
    });

    it('utils/labeled-checkboxes.js', function () {
      // test passed
    });

    it('utils/labels-as-object.js', function () {
      // test passed
    });

    it('utils/lodash-custom.js', function () {
      // test passed
    });

    it('utils/password-validator.js', function () {
      // test passed
    });

    it('utils/proposals-as-array.js', function () {
      // test passed
    });

    it('utils/proposals-as-blocks.js', function () {
      // test passed
    });

    it('utils/result-details-as-object.js', function () {
      // test passed
    });

    it('utils/result-icon-url.js', function () {
      // test passed
    });

    it('utils/solution-as-object.js', function () {
      // test passed
    });

    it('utils/value-as-array-of-boolean.js', function () {
      // test passed
    });
  });
});
define('pix-live/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    _ember.default.run(application, 'destroy');
    if (window.server) {
      window.server.shutdown();
    }
    // Sanity check
    assertModalIsClosed();
  }

  function assertModalIsClosed() {
    if (document.body.classList.contains('routable-modal--open')) {
      throw new Error('The body element still has a `routable-modal--open` class, although the app just has been destroyed. ' + 'This probably means that an acceptance test finished while a modal window was still open. ' + 'It will cause subtle issues, like the scroll of the test runner window being blocked. ' + 'To fix this assertion, please close the modal window manually before the test finishes. ');
    }
  }
});
define('pix-live/tests/helpers/ember-simple-auth', ['exports', 'ember-simple-auth/authenticators/test'], function (exports, _test) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.authenticateSession = authenticateSession;
  exports.currentSession = currentSession;
  exports.invalidateSession = invalidateSession;


  var TEST_CONTAINER_KEY = 'authenticator:test'; /* global wait */

  function ensureAuthenticator(app, container) {
    var authenticator = container.lookup(TEST_CONTAINER_KEY);
    if (!authenticator) {
      app.register(TEST_CONTAINER_KEY, _test.default);
    }
  }

  function authenticateSession(app, sessionData) {
    var container = app.__container__;

    var session = container.lookup('service:session');
    ensureAuthenticator(app, container);
    session.authenticate(TEST_CONTAINER_KEY, sessionData);
    return wait();
  }

  function currentSession(app) {
    return app.__container__.lookup('service:session');
  }

  function invalidateSession(app) {
    var session = app.__container__.lookup('service:session');
    if (session.get('isAuthenticated')) {
      session.invalidate();
    }
    return wait();
  }
});
define('pix-live/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var Promise = _ember.default.RSVP.Promise;
});
define('pix-live/tests/helpers/resolver', ['exports', 'pix-live/resolver', 'pix-live/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('pix-live/tests/helpers/start-app', ['exports', 'ember', 'pix-live/app', 'pix-live/config/environment'], function (exports, _ember, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = _ember.default.merge({}, _environment.default.APP);
    attributes = _ember.default.merge(attributes, attrs); // use defaults, but you can override;

    return _ember.default.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('pix-live/tests/integration/components/challenge-actions-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  var RSVP = Ember.RSVP;


  var VALIDATE_BUTTON = '.challenge-actions__action-validate';
  var SKIP_BUTTON = '.challenge-actions__action-skip';

  (0, _mocha.describe)('Integration | Component | challenge actions', function () {

    (0, _emberMocha.setupComponentTest)('challenge-actions', {
      integration: true
    });

    (0, _mocha.it)('renders', function () {
      this.render(Ember.HTMLBars.template({
        "id": "EP4MIB23",
        "block": "{\"statements\":[[1,[26,[\"challenge-actions\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });

    (0, _mocha.describe)('Validate button (and placeholding loader)', function () {

      (0, _mocha.it)('should be displayed and enable by default but not loader', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "EP4MIB23",
          "block": "{\"statements\":[[1,[26,[\"challenge-actions\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
        // then
        (0, _chai.expect)(this.$(VALIDATE_BUTTON)).to.have.lengthOf(1);
        (0, _chai.expect)(this.$('.challenge-actions__loader-spinner')).to.have.lengthOf(0);
      });

      (0, _mocha.it)('should be replaced by a (spinning) loader during treatment', function () {
        // given
        this.set('externalAction', function () {
          return new RSVP.Promise(function () {});
        });
        this.render(Ember.HTMLBars.template({
          "id": "3ec6dWM6",
          "block": "{\"statements\":[[1,[33,[\"challenge-actions\"],null,[[\"answerValidated\"],[[33,[\"action\"],[[28,[null]],[28,[\"externalAction\"]]],null]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // when
        this.$('.challenge-actions__action-validate').click();

        // then
        (0, _chai.expect)(this.$(VALIDATE_BUTTON)).to.have.lengthOf(0);
        (0, _chai.expect)(this.$('.challenge-actions__loader-spinner')).to.have.lengthOf(1);
      });

      (0, _mocha.it)('should be enable again when the treatment succeeded', function () {
        // given
        this.set('externalAction', function () {
          return RSVP.resolve();
        });
        this.render(Ember.HTMLBars.template({
          "id": "3ec6dWM6",
          "block": "{\"statements\":[[1,[33,[\"challenge-actions\"],null,[[\"answerValidated\"],[[33,[\"action\"],[[28,[null]],[28,[\"externalAction\"]]],null]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // when
        this.$('.challenge-actions__action-validate').click();

        // then
        (0, _chai.expect)(this.$(VALIDATE_BUTTON)).to.have.lengthOf(1);
        (0, _chai.expect)(this.$('.challenge-actions__loader-spinner')).to.have.lengthOf(0);
      });

      (0, _mocha.it)('should be enable again when the treatment failed', function () {
        // given
        this.set('externalAction', function () {
          return RSVP.reject('Some error');
        });
        this.render(Ember.HTMLBars.template({
          "id": "3ec6dWM6",
          "block": "{\"statements\":[[1,[33,[\"challenge-actions\"],null,[[\"answerValidated\"],[[33,[\"action\"],[[28,[null]],[28,[\"externalAction\"]]],null]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // when
        this.$('.challenge-actions__action-validate').click();

        // then
        (0, _chai.expect)(this.$(VALIDATE_BUTTON)).to.have.lengthOf(1);
        (0, _chai.expect)(this.$('.challenge-actions__loader-spinner')).to.have.lengthOf(0);
      });
    });

    (0, _mocha.describe)('Skip button', function () {

      (0, _mocha.it)('should be displayed and enable by default', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "EP4MIB23",
          "block": "{\"statements\":[[1,[26,[\"challenge-actions\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
        // then
        (0, _chai.expect)(this.$(SKIP_BUTTON)).to.have.lengthOf(1);
      });
    });
  });
});
define('pix-live/tests/integration/components/challenge-statement-test', ['ember', 'chai', 'mocha', 'ember-mocha'], function (_ember, _chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | ChallengeStatement', function () {

    (0, _emberMocha.setupComponentTest)('challenge-statement', {
      integration: true
    });

    function addChallengeToContext(component, challenge) {
      component.set('challenge', challenge);
    }

    function renderChallengeStatement(component) {
      component.render(_ember.default.HTMLBars.template({
        "id": "ucxCcrbv",
        "block": "{\"statements\":[[1,[33,[\"challenge-statement\"],null,[[\"challenge\"],[[28,[\"challenge\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
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
        (0, _chai.expect)(_ember.default.$.trim(this.$('.challenge-statement__instruction').text())).to.equal('La consigne de mon test');
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
          illustrationUrl: '/images/pix-logo.svg'
        });

        // when
        renderChallengeStatement(this);

        // then
        var $illustration = this.$('.challenge-statement__illustration');
        (0, _chai.expect)($illustration.prop('src')).to.match(/\/images\/pix-logo.svg$/);
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

        var challengeQROC = {
          instruction: 'Dans la présentation à télécharger, un mot est caché sous le parchemin. Trouvez-le !',
          hasInternetAllowed: false,
          hasSingleAttachment: false,
          hasAttachment: true,
          hasMultipleAttachments: true,
          attachments: ['http://dl.airtable.com/EL9k935vQQS1wAGIhcZU_PIX_parchemin.ppt', 'http://dl.airtable.com/VGAwZSilQji6Spm9C9Tf_PIX_parchemin.odp']
        };

        (0, _mocha.it)('should display as many radio button as attachments', function () {
          // given
          addChallengeToContext(this, challenge);

          // when
          renderChallengeStatement(this);

          // then
          (0, _chai.expect)(this.$('.challenge-statement__file-option_input')).to.have.lengthOf(challenge.attachments.length);
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
          var $firstRadioButton = this.$('.challenge-statement__file-option_input')[0];
          var $secondRadioButton = this.$('.challenge-statement__file-option_input')[1];
          (0, _chai.expect)($firstRadioButton.checked).to.be.true;
          (0, _chai.expect)($secondRadioButton.checked).to.be.false;
        });

        (0, _mocha.it)('should select first attachment as default selected radio button', function () {
          // given
          addChallengeToContext(this, challengeQROC);

          // when
          renderChallengeStatement(this);

          // then
          var $firstRadioButton = this.$('.challenge-statement__file-option_input')[0];
          var $secondRadioButton = this.$('.challenge-statement__file-option_input')[1];
          (0, _chai.expect)($firstRadioButton.checked).to.be.true;
          (0, _chai.expect)($secondRadioButton.checked).to.be.false;
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
define('pix-live/tests/integration/components/challenge-stay-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | challenge stay', function () {

    (0, _emberMocha.setupComponentTest)('challenge-stay', {
      integration: true
    });

    (0, _mocha.it)('renders', function () {
      this.render(Ember.HTMLBars.template({
        "id": "XrhrN5ED",
        "block": "{\"statements\":[[1,[26,[\"challenge-stay\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });

    (0, _mocha.it)('should display a warning icon with an accessible description', function () {
      // when
      this.render(Ember.HTMLBars.template({
        "id": "XrhrN5ED",
        "block": "{\"statements\":[[1,[26,[\"challenge-stay\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));

      // then
      var $img = this.$('.challenge-stay__icon-img');
      (0, _chai.expect)($img).to.have.lengthOf(1);
      (0, _chai.expect)($img.attr('src')).to.equal('/images/icon-warning.svg');
      (0, _chai.expect)($img.attr('alt')).to.not.be.empty;
    });
  });
});
define('pix-live/tests/integration/components/comparison-window-test', ['chai', 'mocha', 'ember-mocha', 'ember'], function (_chai, _mocha, _emberMocha, _ember) {
  'use strict';

  var FEEDBACK_FORM = '.feedback-panel__view--form';
  var LINK_OPEN_FORM = '.feedback-panel__view--link';

  (0, _mocha.describe)('Integration | Component | comparison-window', function () {

    (0, _emberMocha.setupComponentTest)('comparison-window', {
      integration: true
    });

    (0, _mocha.describe)('rendering', function () {

      var answer = void 0;
      var challenge = void 0;
      var solution = void 0;

      (0, _mocha.beforeEach)(function () {
        answer = _ember.default.Object.create({ value: '1,2', result: 'ko' });
        challenge = _ember.default.Object.create({
          instruction: 'This is the instruction',
          proposals: '' + '- 1ere possibilite\n ' + '- 2eme possibilite\n ' + '- 3eme possibilite\n' + '- 4eme possibilite'
        });
        solution = _ember.default.Object.create({ value: '2,3' });

        this.set('answer', answer);
        this.set('challenge', challenge);
        this.set('solution', solution);
        this.set('index', '3');
      });

      (0, _mocha.it)('renders', function () {
        // when
        this.render(_ember.default.HTMLBars.template({
          "id": "tusRoHTL",
          "block": "{\"statements\":[[1,[33,[\"comparison-window\"],null,[[\"answer\",\"challenge\",\"solution\",\"index\"],[[28,[\"answer\"]],[28,[\"challenge\"]],[28,[\"solution\"]],[28,[\"index\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
        // then
        (0, _chai.expect)(this.$()).to.have.lengthOf(1);
      });

      (0, _mocha.it)('should render challenge result in the header', function () {
        // when
        this.render(_ember.default.HTMLBars.template({
          "id": "tusRoHTL",
          "block": "{\"statements\":[[1,[33,[\"comparison-window\"],null,[[\"answer\",\"challenge\",\"solution\",\"index\"],[[28,[\"answer\"]],[28,[\"challenge\"]],[28,[\"solution\"]],[28,[\"index\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
        // then
        (0, _chai.expect)(this.$('.comparison-window__header')).to.have.length(1);
      });

      (0, _mocha.it)('should render challenge instruction', function () {
        // when
        this.render(_ember.default.HTMLBars.template({
          "id": "tusRoHTL",
          "block": "{\"statements\":[[1,[33,[\"comparison-window\"],null,[[\"answer\",\"challenge\",\"solution\",\"index\"],[[28,[\"answer\"]],[28,[\"challenge\"]],[28,[\"solution\"]],[28,[\"index\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
        // then
        (0, _chai.expect)(this.$('.challenge-statement__instruction')).to.have.length(1);
      });

      (0, _mocha.it)('should not render corrected answers when challenge has no type', function () {
        // when
        this.render(_ember.default.HTMLBars.template({
          "id": "tusRoHTL",
          "block": "{\"statements\":[[1,[33,[\"comparison-window\"],null,[[\"answer\",\"challenge\",\"solution\",\"index\"],[[28,[\"answer\"]],[28,[\"challenge\"]],[28,[\"solution\"]],[28,[\"index\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
        // then
        (0, _chai.expect)(this.$('.comparison-window__corrected-answers')).to.have.length(0);
      });

      (0, _mocha.it)('should render corrected answers when challenge type is QROC', function () {
        // given
        challenge = _ember.default.Object.create({ type: 'QROC' });
        this.set('challenge', challenge);
        // when
        this.render(_ember.default.HTMLBars.template({
          "id": "tusRoHTL",
          "block": "{\"statements\":[[1,[33,[\"comparison-window\"],null,[[\"answer\",\"challenge\",\"solution\",\"index\"],[[28,[\"answer\"]],[28,[\"challenge\"]],[28,[\"solution\"]],[28,[\"index\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
        // then
        (0, _chai.expect)(this.$('.comparison-window__corrected-answers--qroc')).to.have.length(1);
      });

      (0, _mocha.it)('should render corrected answers when challenge type is QROCM-ind', function () {
        // given
        challenge = _ember.default.Object.create({ type: 'QROCM-ind', proposals: '' });
        solution = _ember.default.Object.create({ value: '' });
        this.set('challenge', challenge);
        this.set('solution', solution);
        // when
        this.render(_ember.default.HTMLBars.template({
          "id": "tusRoHTL",
          "block": "{\"statements\":[[1,[33,[\"comparison-window\"],null,[[\"answer\",\"challenge\",\"solution\",\"index\"],[[28,[\"answer\"]],[28,[\"challenge\"]],[28,[\"solution\"]],[28,[\"index\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
        // then
        (0, _chai.expect)(this.$('.comparison-window__corrected-answers--qrocm')).to.have.length(1);
      });

      (0, _mocha.it)('should render corrected answers when challenge type is QCM', function () {
        // given
        challenge = _ember.default.Object.create({ type: 'QCM' });
        this.set('challenge', challenge);
        // when
        this.render(_ember.default.HTMLBars.template({
          "id": "tusRoHTL",
          "block": "{\"statements\":[[1,[33,[\"comparison-window\"],null,[[\"answer\",\"challenge\",\"solution\",\"index\"],[[28,[\"answer\"]],[28,[\"challenge\"]],[28,[\"solution\"]],[28,[\"index\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
        // then
        (0, _chai.expect)(this.$('.qcm-solution-panel')).to.have.length(1);
      });

      (0, _mocha.it)('should render a feedback panel already opened', function () {
        //when
        this.render(_ember.default.HTMLBars.template({
          "id": "tusRoHTL",
          "block": "{\"statements\":[[1,[33,[\"comparison-window\"],null,[[\"answer\",\"challenge\",\"solution\",\"index\"],[[28,[\"answer\"]],[28,[\"challenge\"]],[28,[\"solution\"]],[28,[\"index\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
        //then
        (0, _chai.expect)(this.$('.comparison-window__feedback-panel')).to.have.length(1);
        (0, _chai.expect)(this.$(FEEDBACK_FORM)).to.have.lengthOf(1);
        (0, _chai.expect)(this.$(LINK_OPEN_FORM)).to.have.lengthOf(0);
      });

      (0, _mocha.it)('should have a max width of 900px and a margin auto in order to quit by clicking beside', function () {
        // when
        this.render(_ember.default.HTMLBars.template({
          "id": "XPYTajZT",
          "block": "{\"statements\":[[1,[33,[\"comparison-window\"],[[28,[\"answer\"]],[28,[\"challenge\"]],[28,[\"solution\"]],[28,[\"index\"]]],null],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
        // then
        (0, _chai.expect)(this.$('.comparison-window').css('max-width')).to.be.equal('900px');
      });

      [{ status: 'ok' }, { status: 'ko' }, { status: 'aband' }, { status: 'partially' }, { status: 'timedout' }, { status: 'default' }].forEach(function (data) {

        (0, _mocha.it)('should display the good icon in title when answer\'s result is "' + data.status + '"', function () {
          // given
          answer.set('result', data.status);

          // when
          this.render(_ember.default.HTMLBars.template({
            "id": "tusRoHTL",
            "block": "{\"statements\":[[1,[33,[\"comparison-window\"],null,[[\"answer\",\"challenge\",\"solution\",\"index\"],[[28,[\"answer\"]],[28,[\"challenge\"]],[28,[\"solution\"]],[28,[\"index\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));

          // then
          var $icon = this.$('.comparison-window__result-icon');
          (0, _chai.expect)(this.$('.comparison-window__result-icon--' + data.status)).to.have.lengthOf(1);
          (0, _chai.expect)($icon.attr('src')).to.equal('/images/answer-validation/icon-' + data.status + '.svg');
        });
      });
    });
  });
});
define('pix-live/tests/integration/components/competence-area-list-test', ['chai', 'mocha', 'ember-mocha', 'ember'], function (_chai, _mocha, _emberMocha, _ember) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | competence area list', function () {
    (0, _emberMocha.setupComponentTest)('competence-area-list', {
      integration: true
    });

    (0, _mocha.describe)('Component rendering', function () {
      (0, _mocha.it)('renders', function () {
        // when
        this.render(_ember.default.HTMLBars.template({
          "id": "1Zu65Rsf",
          "block": "{\"statements\":[[1,[26,[\"competence-area-list\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$()).to.have.length(1);
      });

      (0, _mocha.it)('should render a wrapper', function () {
        // when
        this.render(_ember.default.HTMLBars.template({
          "id": "1Zu65Rsf",
          "block": "{\"statements\":[[1,[26,[\"competence-area-list\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // then
        var WRAPPER_CLASS = '.competence-area-list';
        (0, _chai.expect)(this.$(WRAPPER_CLASS)).to.have.length(1);
      });

      (0, _mocha.describe)('Rendering when different areas', function () {

        (0, _mocha.it)('should render 5 competence areas, when there are 5 competences with different area for each one', function () {
          // given
          var competencesWithDifferentAreas = [_ember.default.Object.create({ id: 1, name: 'competence-1', areaName: 'area-A' }), _ember.default.Object.create({ id: 2, name: 'competence-2', areaName: 'area-B' }), _ember.default.Object.create({ id: 3, name: 'competence-3', areaName: 'area-C' }), _ember.default.Object.create({ id: 4, name: 'competence-4', areaName: 'area-D' }), _ember.default.Object.create({ id: 5, name: 'competence-5', areaName: 'area-E' })];
          this.set('competences', competencesWithDifferentAreas);

          // when
          this.render(_ember.default.HTMLBars.template({
            "id": "izE4TL0M",
            "block": "{\"statements\":[[1,[33,[\"competence-area-list\"],null,[[\"competences\"],[[28,[\"competences\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));

          // then
          (0, _chai.expect)(this.$('.competence-area-list__item')).to.have.lengthOf(5);
        });

        (0, _mocha.it)('should render 2 competence areas, when there are 5 competences related to 2 different areas', function () {
          // given
          var competencesWithDifferentAreas = [_ember.default.Object.create({ id: 1, name: 'competence-1', areaName: 'area-A' }), _ember.default.Object.create({ id: 2, name: 'competence-2', areaName: 'area-A' }), _ember.default.Object.create({ id: 3, name: 'competence-3', areaName: 'area-A' }), _ember.default.Object.create({ id: 4, name: 'competence-4', areaName: 'area-B' }), _ember.default.Object.create({ id: 5, name: 'competence-5', areaName: 'area-B' })];
          this.set('competences', competencesWithDifferentAreas);

          // when
          this.render(_ember.default.HTMLBars.template({
            "id": "izE4TL0M",
            "block": "{\"statements\":[[1,[33,[\"competence-area-list\"],null,[[\"competences\"],[[28,[\"competences\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));

          // then
          (0, _chai.expect)(this.$('.competence-area-list__item')).to.have.lengthOf(2);
        });
      });

      (0, _mocha.describe)('Rendering when same area', function () {
        (0, _mocha.it)('should render only 1 competence area, when there are 5 competences with the same area', function () {
          // given
          var competencesWithSameArea = [_ember.default.Object.create({ id: 1, name: 'competence-1', areaName: 'area-A' }), _ember.default.Object.create({ id: 2, name: 'competence-2', areaName: 'area-A' }), _ember.default.Object.create({ id: 3, name: 'competence-3', areaName: 'area-A' }), _ember.default.Object.create({ id: 4, name: 'competence-4', areaName: 'area-A' }), _ember.default.Object.create({ id: 5, name: 'competence-5', areaName: 'area-A' })];

          // when
          this.set('competences', competencesWithSameArea);
          this.render(_ember.default.HTMLBars.template({
            "id": "izE4TL0M",
            "block": "{\"statements\":[[1,[33,[\"competence-area-list\"],null,[[\"competences\"],[[28,[\"competences\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));
          // then
          (0, _chai.expect)(this.$('.competence-area-list__item')).to.have.lengthOf(1);
        });
      });
    });
  });
});
define('pix-live/tests/integration/components/competence-by-area-item-test', ['chai', 'mocha', 'ember-mocha', 'ember'], function (_chai, _mocha, _emberMocha, _ember) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | competence area item', function () {
    (0, _emberMocha.setupComponentTest)('competence-by-area-item', {
      integration: true
    });

    (0, _mocha.it)('should render', function () {
      // when
      this.render(_ember.default.HTMLBars.template({
        "id": "VrjYY9DC",
        "block": "{\"statements\":[[1,[26,[\"competence-by-area-item\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));

      // then
      (0, _chai.expect)(this.$('.competence-by-area-item')).to.have.length(1);
    });

    (0, _mocha.it)('should render a title', function () {
      // Given
      var competence = _ember.default.Object.create({ name: 'competence-A', level: 1 });
      var areaWithOnlyOneCompetence = { property: 'area', value: '1. Information et données', items: [competence] };
      this.set('competenceArea', areaWithOnlyOneCompetence);
      // when
      this.render(_ember.default.HTMLBars.template({
        "id": "7jLygV5q",
        "block": "{\"statements\":[[1,[33,[\"competence-by-area-item\"],null,[[\"competenceArea\"],[[28,[\"competenceArea\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));
      // then
      (0, _chai.expect)(this.$('.area__name').text().trim()).to.equal('Information et données');
    });

    (0, _mocha.it)('should render as many competences as received', function () {
      // given
      var competencesWithSameArea = [_ember.default.Object.create({ id: 1, name: 'competence-name-1', area: 'area-id-1' }), _ember.default.Object.create({ id: 2, name: 'competence-name-2', area: 'area-id-1' }), _ember.default.Object.create({ id: 3, name: 'competence-name-3', area: 'area-id-1' }), _ember.default.Object.create({ id: 4, name: 'competence-name-4', area: 'area-id-1' }), _ember.default.Object.create({ id: 5, name: 'competence-name-5', area: 'area-id-1' })];
      var areaWithManyCompetences = {
        property: 'area',
        value: 'Information et données',
        items: competencesWithSameArea
      };

      this.set('competenceArea', areaWithManyCompetences);
      // when
      this.render(_ember.default.HTMLBars.template({
        "id": "7jLygV5q",
        "block": "{\"statements\":[[1,[33,[\"competence-by-area-item\"],null,[[\"competenceArea\"],[[28,[\"competenceArea\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));

      // then
      (0, _chai.expect)(this.$('.competence__name')).to.have.length(5);
    });

    (0, _mocha.describe)('Competence rendering', function () {
      (0, _mocha.it)('should render its name', function () {
        // given
        var competence = _ember.default.Object.create({ name: 'Mener une recherche et une veille d’information' });
        var areaWithOnlyOneCompetence = { property: 'area', value: '1. Information et données', items: [competence] };
        this.set('competenceArea', areaWithOnlyOneCompetence);

        // when
        this.render(_ember.default.HTMLBars.template({
          "id": "7jLygV5q",
          "block": "{\"statements\":[[1,[33,[\"competence-by-area-item\"],null,[[\"competenceArea\"],[[28,[\"competenceArea\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('.competence__name').text().trim()).to.equal('Mener une recherche et une veille d’information');
      });

      (0, _mocha.it)('should render the relative level progress bar for user', function () {
        // given
        var competence = _ember.default.Object.create();
        var areaWithOnlyOneCompetence = { property: 'area', value: '1. Information et données', items: [competence] };
        this.set('competenceArea', areaWithOnlyOneCompetence);

        // when
        this.render(_ember.default.HTMLBars.template({
          "id": "7jLygV5q",
          "block": "{\"statements\":[[1,[33,[\"competence-by-area-item\"],null,[[\"competenceArea\"],[[28,[\"competenceArea\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('.competence__progress-bar')).to.have.lengthOf(1);
      });
    });
  });
});
define('pix-live/tests/integration/components/competence-level-progress-bar-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | competence level progress bar', function () {
    (0, _emberMocha.setupComponentTest)('competence-level-progress-bar', {
      integration: true
    });

    (0, _mocha.it)('renders', function () {
      this.render(Ember.HTMLBars.template({
        "id": "KsF1SyH6",
        "block": "{\"statements\":[[1,[26,[\"competence-level-progress-bar\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });

    (0, _mocha.describe)('if the level is not defined', function () {

      (0, _mocha.it)('should not display the background of progress bar which display limit and max level', function () {
        //Given
        var givenLevel = -1;
        this.set('level', givenLevel);

        //When
        this.render(Ember.HTMLBars.template({
          "id": "CApsTCe7",
          "block": "{\"statements\":[[1,[33,[\"competence-level-progress-bar\"],null,[[\"level\"],[[28,[\"level\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        //Then
        (0, _chai.expect)(this.$('.competence-level-progress-bar__background')).to.have.length(0);
      });

      (0, _mocha.it)('should not display a progress bar if level is not defined (-1)', function () {
        //Given
        var givenLevel = undefined;
        this.set('level', givenLevel);

        //When
        this.render(Ember.HTMLBars.template({
          "id": "CApsTCe7",
          "block": "{\"statements\":[[1,[33,[\"competence-level-progress-bar\"],null,[[\"level\"],[[28,[\"level\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        //Then
        (0, _chai.expect)(this.$('.competence-level-progress-bar__level')).to.have.length(0);
      });
    });

    (0, _mocha.describe)('if the level is defined', function () {

      (0, _mocha.it)('should indicate the limit level and the max level reachable in the progress bar', function () {
        // given
        var MAX_LEVEL = 8;
        var LIMIT_LEVEL = 5;
        var level = 4;
        this.set('level', level);

        // when
        this.render(Ember.HTMLBars.template({
          "id": "CApsTCe7",
          "block": "{\"statements\":[[1,[33,[\"competence-level-progress-bar\"],null,[[\"level\"],[[28,[\"level\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('.competence-level-progress-bar__background-level-limit-indicator')).to.have.length(1);
        (0, _chai.expect)(this.$('.competence-level-progress-bar__background-level-limit-indicator').text().trim()).to.equal(LIMIT_LEVEL.toString());
        (0, _chai.expect)(this.$('.competence-level-progress-bar__background-level-limit-max-indicator')).to.have.length(1);
        (0, _chai.expect)(this.$('.competence-level-progress-bar__background-level-limit-max-indicator').text().trim()).to.equal(MAX_LEVEL.toString());
      });

      (0, _mocha.it)('should display a progress bar if level is defined (equal or more than 0)', function () {
        //Given
        var givenLevel = 1;
        this.set('level', givenLevel);

        //When
        this.render(Ember.HTMLBars.template({
          "id": "CApsTCe7",
          "block": "{\"statements\":[[1,[33,[\"competence-level-progress-bar\"],null,[[\"level\"],[[28,[\"level\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        //Then
        (0, _chai.expect)(this.$('.competence-level-progress-bar__level')).to.have.length(1);
      });

      (0, _mocha.it)('should indicate the level passed to the component at the end of the progress bar', function () {
        // given
        var level = 5;
        this.set('level', level);

        // when
        this.render(Ember.HTMLBars.template({
          "id": "CApsTCe7",
          "block": "{\"statements\":[[1,[33,[\"competence-level-progress-bar\"],null,[[\"level\"],[[28,[\"level\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('.competence-level-progress-bar__level-indicator').text().trim()).to.be.equal(level.toString());
      });
    });

    (0, _mocha.describe)('when there is an associated course', function () {

      (0, _mocha.it)('should display ’commencer’ in progress bar, when the level is not defined (-1)', function () {
        // given
        var courseId = 'rec123';
        var level = -1;

        this.set('courseId', courseId);
        this.set('level', level);

        // when
        this.render(Ember.HTMLBars.template({
          "id": "VkVD5c38",
          "block": "{\"statements\":[[1,[33,[\"competence-level-progress-bar\"],null,[[\"level\",\"courseId\"],[[28,[\"level\"]],[28,[\"courseId\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('.competence-level-progress-bar__start')).to.have.length(1);
        (0, _chai.expect)(this.$('a.competence-level-progress-bar__start-link')).to.have.length(1);
        (0, _chai.expect)(this.$('a.competence-level-progress-bar__start-link').text().trim()).to.be.equal('Commencer');
      });

      (0, _mocha.it)('should not display ’commencer’ in progress bar, when the level is already defined', function () {
        // given
        var courseId = 'rec123';
        var level = 3;

        this.set('courseId', courseId);
        this.set('level', level);

        // when
        this.render(Ember.HTMLBars.template({
          "id": "VkVD5c38",
          "block": "{\"statements\":[[1,[33,[\"competence-level-progress-bar\"],null,[[\"level\",\"courseId\"],[[28,[\"level\"]],[28,[\"courseId\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('.competence-level-progress-bar__start')).to.have.length(0);
        (0, _chai.expect)(this.$('a.competence-level-progress-bar__start-link')).to.have.length(0);
      });
    });

    (0, _mocha.describe)('when there is no associated course', function () {

      (0, _mocha.it)('should not display ’commencer’ in progress bar', function () {
        // given
        var level = 3;
        this.set('level', level);

        // when
        this.render(Ember.HTMLBars.template({
          "id": "CApsTCe7",
          "block": "{\"statements\":[[1,[33,[\"competence-level-progress-bar\"],null,[[\"level\"],[[28,[\"level\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('.competence-level-progress-bar__start')).to.have.length(0);
        (0, _chai.expect)(this.$('a.competence-level-progress-bar__start-link')).to.have.length(0);
      });
    });
  });
});
define('pix-live/tests/integration/components/corner-ribbon-test', ['chai', 'ember-mocha'], function (_chai, _emberMocha) {
  'use strict';

  describe('Integration | Component | CornerRibbonComponent', function () {

    (0, _emberMocha.setupComponentTest)('corner-ribbon', {
      integration: true
    });

    (0, _emberMocha.it)('renders', function () {
      this.render(Ember.HTMLBars.template({
        "id": "U22p/XCA",
        "block": "{\"statements\":[[1,[26,[\"corner-ribbon\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('pix-live/tests/integration/components/course-item-test', ['ember', 'chai', 'mocha', 'ember-mocha'], function (_ember, _chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | course item', function () {

    (0, _emberMocha.setupComponentTest)('course-item', {
      integration: true
    });

    (0, _mocha.describe)('rendering:', function () {

      (0, _mocha.it)('renders', function () {
        this.render(_ember.default.HTMLBars.template({
          "id": "IlH0PQOd",
          "block": "{\"statements\":[[1,[26,[\"course-item\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
        (0, _chai.expect)(this.$()).to.have.length(1);
      });

      (0, _mocha.it)('should render course picture if it is defined', function () {
        // given
        var course = _ember.default.Object.create({ imageUrl: '/images/pix-logo.svg' });
        this.set('course', course);

        // when
        this.render(_ember.default.HTMLBars.template({
          "id": "Ig9hFQ2w",
          "block": "{\"statements\":[[1,[33,[\"course-item\"],null,[[\"course\"],[[28,[\"course\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // then
        var $picture = this.$('.course-item__picture');
        (0, _chai.expect)($picture.attr('src')).to.equal(course.get('imageUrl'));
      });

      (0, _mocha.it)('should render default picture if course picture is not defined', function () {
        // given
        var course = _ember.default.Object.create();
        this.set('course', course);

        // when
        this.render(_ember.default.HTMLBars.template({
          "id": "Ig9hFQ2w",
          "block": "{\"statements\":[[1,[33,[\"course-item\"],null,[[\"course\"],[[28,[\"course\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // then
        var $picture = this.$('.course-item__picture');
        (0, _chai.expect)($picture.attr('src')).to.equal('/images/course-default-image.png');
      });

      (0, _mocha.it)('should render course name', function () {
        // given
        var course = _ember.default.Object.create({ name: 'name_value' });
        this.set('course', course);

        // when
        this.render(_ember.default.HTMLBars.template({
          "id": "Ig9hFQ2w",
          "block": "{\"statements\":[[1,[33,[\"course-item\"],null,[[\"course\"],[[28,[\"course\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // then
        var $name = this.$('.course-item__name');
        (0, _chai.expect)($name.text().trim()).to.equal(course.get('name'));
      });

      (0, _mocha.it)('should render course description', function () {
        // given
        var course = _ember.default.Object.create({ description: 'description_value' });
        this.set('course', course);

        // when
        this.render(_ember.default.HTMLBars.template({
          "id": "Ig9hFQ2w",
          "block": "{\"statements\":[[1,[33,[\"course-item\"],null,[[\"course\"],[[28,[\"course\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // then
        var $description = this.$('.course-item__description');
        (0, _chai.expect)($description.text().trim()).to.equal(course.get('description'));
      });

      (0, _mocha.it)('should render the number of challenges', function () {
        // given
        var course = _ember.default.Object.create({ challenges: ['c1', 'c2', 'c3', 'c4'] });
        this.set('course', course);

        // when
        this.render(_ember.default.HTMLBars.template({
          "id": "Ig9hFQ2w",
          "block": "{\"statements\":[[1,[33,[\"course-item\"],null,[[\"course\"],[[28,[\"course\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // then
        var $nbChallenges = this.$('.course-item__challenges-number');
        (0, _chai.expect)($nbChallenges.text().trim()).to.equal('4 épreuves');
      });

      (0, _mocha.it)('should render the number of challenges', function () {
        // given
        var course = _ember.default.Object.create({ challenges: [], nbChallenges: 2 });
        this.set('course', course);

        // when
        this.render(_ember.default.HTMLBars.template({
          "id": "Ig9hFQ2w",
          "block": "{\"statements\":[[1,[33,[\"course-item\"],null,[[\"course\"],[[28,[\"course\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // then
        var $nbChallenges = this.$('.course-item__challenges-number');
        (0, _chai.expect)($nbChallenges.text().trim()).to.equal('2 épreuves');
      });

      (0, _mocha.it)('should render a link to begin the course', function () {
        // given
        var course = _ember.default.Object.create();
        this.set('course', course);

        // when
        this.render(_ember.default.HTMLBars.template({
          "id": "Ig9hFQ2w",
          "block": "{\"statements\":[[1,[33,[\"course-item\"],null,[[\"course\"],[[28,[\"course\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // then
        var $startAction = this.$('.course-item__begin-button');
        (0, _chai.expect)($startAction.text().trim()).to.equal('Commencer');
      });

      (0, _mocha.it)('should render a link containing the course name in title', function () {
        // given
        var course = _ember.default.Object.create({ name: 'My course' });
        this.set('course', course);

        // when
        this.render(_ember.default.HTMLBars.template({
          "id": "Ig9hFQ2w",
          "block": "{\"statements\":[[1,[33,[\"course-item\"],null,[[\"course\"],[[28,[\"course\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // then
        var $startAction = this.$('.course-item__begin-button');
        (0, _chai.expect)($startAction.attr('title')).to.equal('Commencer le test \"My course\"');
      });
    });

    (0, _mocha.describe)('behaviours:', function () {

      (0, _mocha.it)('should send action "startCourse" with course in argument when clicking on "start" button', function () {
        // given
        var course = _ember.default.Object.create({ id: 'course_id' });
        this.set('course', course);
        var actualCourse = void 0;
        this.on('actionHandler', function (receivedCourse) {
          actualCourse = receivedCourse;
        });

        // when
        this.render(_ember.default.HTMLBars.template({
          "id": "1Ht5d7Cr",
          "block": "{\"statements\":[[1,[33,[\"course-item\"],null,[[\"course\",\"startCourse\"],[[28,[\"course\"]],\"actionHandler\"]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // then
        var $startAction = this.$('.course-item__begin-button');
        $startAction.click();
        (0, _chai.expect)(actualCourse.get('id')).to.equal(course.get('id'));
      });
    });
  });
});
define('pix-live/tests/integration/components/course-list-test', ['ember', 'chai', 'mocha', 'ember-mocha'], function (_ember, _chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | course list', function () {

    (0, _emberMocha.setupComponentTest)('course-list', {
      integration: true
    });

    (0, _mocha.describe)('rendering:', function () {

      (0, _mocha.it)('renders', function () {
        this.render(_ember.default.HTMLBars.template({
          "id": "ZbjKlqif",
          "block": "{\"statements\":[[1,[26,[\"course-list\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
        (0, _chai.expect)(this.$()).to.have.length(1);
      });

      (0, _mocha.it)('should render as many course-item as courses elements', function () {
        // given
        var courses = [_ember.default.Object.create({ id: '1' }), _ember.default.Object.create({ id: '2' }), _ember.default.Object.create({ id: '3' })];
        this.set('courses', courses);

        // when
        this.render(_ember.default.HTMLBars.template({
          "id": "LDBKp7if",
          "block": "{\"statements\":[[1,[33,[\"course-list\"],null,[[\"courses\"],[[28,[\"courses\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('.course-list__li')).to.have.length(courses.length);
      });
    });
  });
});
define('pix-live/tests/integration/components/feature-item-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | feature item', function () {

    (0, _emberMocha.setupComponentTest)('feature-item', {
      integration: true
    });

    var feature = {
      icon: 'reference',
      title: 'title_value',
      description: 'description_value'
    };

    (0, _mocha.it)('renders', function () {
      this.set('feature', feature);
      this.render(Ember.HTMLBars.template({
        "id": "tBD0caAl",
        "block": "{\"statements\":[[1,[33,[\"feature-item\"],null,[[\"feature\"],[[28,[\"feature\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });

    (0, _mocha.it)('should render an icon', function () {
      this.set('feature', feature);
      this.render(Ember.HTMLBars.template({
        "id": "tBD0caAl",
        "block": "{\"statements\":[[1,[33,[\"feature-item\"],null,[[\"feature\"],[[28,[\"feature\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));

      var $icon = this.$('.feature-item__icon');
      (0, _chai.expect)($icon).to.exist;
      (0, _chai.expect)($icon.attr('src')).to.equal('/images/features/icon-reference.svg');
    });

    (0, _mocha.it)('should render an title', function () {
      this.set('feature', feature);
      this.render(Ember.HTMLBars.template({
        "id": "tBD0caAl",
        "block": "{\"statements\":[[1,[33,[\"feature-item\"],null,[[\"feature\"],[[28,[\"feature\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));

      var $title = this.$('.feature-item__title');
      (0, _chai.expect)($title).to.exist;
      (0, _chai.expect)($title.text().trim()).to.equal(feature.title);
    });

    (0, _mocha.it)('should render an description', function () {
      this.set('feature', feature);
      this.render(Ember.HTMLBars.template({
        "id": "tBD0caAl",
        "block": "{\"statements\":[[1,[33,[\"feature-item\"],null,[[\"feature\"],[[28,[\"feature\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));

      var $description = this.$('.feature-item__description');
      (0, _chai.expect)($description).to.exist;
      (0, _chai.expect)($description.text().trim()).to.equal(feature.description);
    });
  });
});
define('pix-live/tests/integration/components/feature-list-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | feature list', function () {

    (0, _emberMocha.setupComponentTest)('feature-list', {
      integration: true
    });

    (0, _mocha.it)('renders', function () {
      this.render(Ember.HTMLBars.template({
        "id": "zQch9no4",
        "block": "{\"statements\":[[1,[26,[\"feature-list\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });

    (0, _mocha.it)('should always render 5 feature-items', function () {
      // when
      this.render(Ember.HTMLBars.template({
        "id": "zQch9no4",
        "block": "{\"statements\":[[1,[26,[\"feature-list\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));

      // then
      (0, _chai.expect)(this.$('.feature-list__li')).to.have.lengthOf(5);
      (0, _chai.expect)(this.$('.feature-item')).to.have.lengthOf(5);
    });
  });
});
define('pix-live/tests/integration/components/feedback-panel-test', ['ember', 'chai', 'mocha', 'ember-mocha', 'ember-test-helpers/wait', 'pix-live/utils/lodash-custom'], function (_ember, _chai, _mocha, _emberMocha, _wait, _lodashCustom) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  var LINK_VIEW = '.feedback-panel__view--link';
  var FORM_VIEW = '.feedback-panel__view--form';
  var MERCIX_VIEW = '.feedback-panel__view--mercix';
  var OPEN_LINK = '.feedback-panel__open-link';
  var BUTTON_SEND = '.feedback-panel__button--send';
  var BUTTON_CANCEL = '.feedback-panel__button--cancel';

  function expectLinkViewToBeVisible(component) {
    (0, _chai.expect)(component.$(LINK_VIEW)).to.have.lengthOf(1);
    (0, _chai.expect)(component.$(FORM_VIEW)).to.have.lengthOf(0);
    (0, _chai.expect)(component.$(MERCIX_VIEW)).to.have.lengthOf(0);
  }

  function expectFormViewToBeVisible(component) {
    (0, _chai.expect)(component.$(LINK_VIEW)).to.have.lengthOf(0);
    (0, _chai.expect)(component.$(FORM_VIEW)).to.have.lengthOf(1);
    (0, _chai.expect)(component.$(MERCIX_VIEW)).to.have.lengthOf(0);
  }

  function expectMercixViewToBeVisible(component) {
    (0, _chai.expect)(component.$(LINK_VIEW)).to.have.lengthOf(0);
    (0, _chai.expect)(component.$(FORM_VIEW)).to.have.lengthOf(0);
    (0, _chai.expect)(component.$(MERCIX_VIEW)).to.have.lengthOf(1);
  }

  function setEmail(component, email) {
    var $email = component.$('.feedback-panel__field--email');
    $email.val(email);
    $email.change();
  }

  function setContent(component, content) {
    var $content = component.$('.feedback-panel__field--content');
    $content.val(content);
    $content.change();
  }

  (0, _mocha.describe)('Integration | Component | feedback-panel', function () {

    (0, _emberMocha.setupComponentTest)('feedback-panel', {
      integration: true
    });

    (0, _mocha.describe)('Default rendering', function () {

      (0, _mocha.it)('should display the feedback Panel', function () {
        // when
        this.render(_ember.default.HTMLBars.template({
          "id": "vYG6y2lL",
          "block": "{\"statements\":[[1,[26,[\"feedback-panel\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
        // then
        (0, _chai.expect)(this.$()).to.have.lengthOf(1);
        expectLinkViewToBeVisible(this);
      });
    });

    (0, _mocha.describe)('Link view (available only when form is closed by default)', function () {

      beforeEach(function () {
        this.render(_ember.default.HTMLBars.template({
          "id": "vYG6y2lL",
          "block": "{\"statements\":[[1,[26,[\"feedback-panel\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
      });

      (0, _mocha.it)('should display only the "link" view', function () {
        expectLinkViewToBeVisible(this);
      });

      (0, _mocha.it)('the link label should be "Signaler un problème"', function () {
        (0, _chai.expect)(this.$(OPEN_LINK).text()).to.contain('Signaler un problème');
      });

      (0, _mocha.it)('clicking on the open link should hide the "link" view and display the "form" view', function () {
        // when
        this.$(OPEN_LINK).click();
        // then
        expectFormViewToBeVisible(this);
      });
    });

    (0, _mocha.describe)('Form view', function () {

      var storeStub = _ember.default.Service.extend({
        createRecord: function createRecord() {
          var createRecordArgs = arguments;
          return Object.create({
            save: function save() {
              isSaveMethodCalled = true;
              saveMethodUrl = createRecordArgs[0];
              saveMethodBody = createRecordArgs[1];
              return _ember.default.RSVP.resolve();
            }
          });
        }
      });

      var isSaveMethodCalled = void 0;
      var saveMethodBody = void 0;
      var saveMethodUrl = void 0;

      beforeEach(function () {
        // configure answer & cie. model object
        var assessment = _ember.default.Object.extend({ id: 'assessment_id' }).create();
        var challenge = _ember.default.Object.extend({ id: 'challenge_id' }).create();

        // render component
        this.set('assessment', assessment);
        this.set('challenge', challenge);

        isSaveMethodCalled = false;
        saveMethodBody = null;
        saveMethodUrl = null;

        // stub store service
        this.register('service:store', storeStub);
        this.inject.service('store', { as: 'store' });

        this.render(_ember.default.HTMLBars.template({
          "id": "qFA+EGeX",
          "block": "{\"statements\":[[1,[33,[\"feedback-panel\"],null,[[\"assessment\",\"challenge\",\"collapsible\"],[[28,[\"assessment\"]],[28,[\"challenge\"]],false]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
      });

      (0, _mocha.it)('should display only the "form" view', function () {
        expectFormViewToBeVisible(this);
      });

      (0, _mocha.it)('should contain email input field', function () {
        var $email = this.$('input.feedback-panel__field--email');
        (0, _chai.expect)($email).to.have.lengthOf(1);
        (0, _chai.expect)($email.attr('placeholder')).to.equal('Votre email (optionnel)');
      });

      (0, _mocha.it)('should contain content textarea field', function () {
        var $password = this.$('textarea.feedback-panel__field--content');
        (0, _chai.expect)($password).to.have.lengthOf(1);
        (0, _chai.expect)($password.attr('placeholder')).to.equal('Votre message');
      });

      (0, _mocha.it)('should contain "send" button with label "Envoyer" and placeholder "Votre email (optionnel)"', function () {
        var $buttonSend = this.$(BUTTON_SEND);
        (0, _chai.expect)($buttonSend).to.have.lengthOf(1);
        (0, _chai.expect)($buttonSend.text()).to.equal('Envoyer');
      });

      (0, _mocha.it)('clicking on "send" button should save the feedback into the store / API and display the "mercix" view', function () {
        var _this = this;

        // given
        var EMAIL_VALUE = 'frere-jacques@gai-mail.com';
        setEmail(this, EMAIL_VALUE);

        var CONTENT_VALUE = 'Prêtes-moi ta plume, pour écrire un mot';
        setContent(this, CONTENT_VALUE);

        // when
        this.$(BUTTON_SEND).click();

        // then
        return (0, _wait.default)().then(function () {
          (0, _chai.expect)(isSaveMethodCalled).to.be.true;
          (0, _chai.expect)(saveMethodUrl).to.equal('feedback');
          (0, _chai.expect)(_lodashCustom.default.isObject(saveMethodBody)).to.equal(true);
          (0, _chai.expect)(saveMethodBody.assessement).to.exists;
          (0, _chai.expect)(saveMethodBody.challenge).to.exists;
          (0, _chai.expect)(saveMethodBody.content).to.equal(CONTENT_VALUE);
          (0, _chai.expect)(saveMethodBody.email).to.equal(EMAIL_VALUE);
          expectMercixViewToBeVisible(_this);
        });
      });

      (0, _mocha.it)('should not contain "cancel" button if the feedback form is opened by default', function () {
        // then
        var $buttonCancel = this.$(BUTTON_CANCEL);
        (0, _chai.expect)($buttonCancel).to.have.lengthOf(0);
      });
    });

    (0, _mocha.describe)('#Cancel Button management', function () {

      beforeEach(function () {
        // configure answer & cie. model object
        var assessment = _ember.default.Object.extend({ id: 'assessment_id' }).create();
        var challenge = _ember.default.Object.extend({ id: 'challenge_id' }).create();

        // render component
        this.set('assessment', assessment);
        this.set('challenge', challenge);
      });

      (0, _mocha.it)('should not be visible if feedback-panel is not collapsible', function () {
        // when
        this.render(_ember.default.HTMLBars.template({
          "id": "qFA+EGeX",
          "block": "{\"statements\":[[1,[33,[\"feedback-panel\"],null,[[\"assessment\",\"challenge\",\"collapsible\"],[[28,[\"assessment\"]],[28,[\"challenge\"]],false]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$(BUTTON_CANCEL)).to.have.lengthOf(0);
      });

      (0, _mocha.it)('should not be visible if status is not FORM_OPENED', function () {
        // when
        this.render(_ember.default.HTMLBars.template({
          "id": "LwVlgJUd",
          "block": "{\"statements\":[[1,[33,[\"feedback-panel\"],null,[[\"assessment\",\"challenge\",\"collapsible\",\"_status\"],[[28,[\"assessment\"]],[28,[\"challenge\"]],true,\"FORM_CLOSED\"]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$(BUTTON_CANCEL)).to.have.lengthOf(0);
      });

      (0, _mocha.it)('should be visible only if component is collapsible and form is opened', _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // given
                this.render(_ember.default.HTMLBars.template({
                  "id": "5kGcVXmC",
                  "block": "{\"statements\":[[1,[33,[\"feedback-panel\"],null,[[\"assessment\",\"challenge\"],[[28,[\"assessment\"]],[28,[\"challenge\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
                  "meta": {}
                }));

                // when
                this.$(OPEN_LINK).click();

                // then
                (0, _chai.expect)(this.$(BUTTON_CANCEL)).to.have.lengthOf(1);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      })));

      (0, _mocha.it)('should contain "cancel" button with label "Annuler" and placeholder "Votre message"', function () {
        // given
        this.render(_ember.default.HTMLBars.template({
          "id": "5kGcVXmC",
          "block": "{\"statements\":[[1,[33,[\"feedback-panel\"],null,[[\"assessment\",\"challenge\"],[[28,[\"assessment\"]],[28,[\"challenge\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        //when
        this.$(OPEN_LINK).click();

        //then
        var $buttonCancel = this.$(BUTTON_CANCEL);
        (0, _chai.expect)($buttonCancel).to.have.lengthOf(1);
        (0, _chai.expect)($buttonCancel.text().trim()).to.equal('Annuler');
      });

      (0, _mocha.it)('clicking on "cancel" button should close the "form" view and and display the "link" view', function () {
        // given
        this.render(_ember.default.HTMLBars.template({
          "id": "5kGcVXmC",
          "block": "{\"statements\":[[1,[33,[\"feedback-panel\"],null,[[\"assessment\",\"challenge\"],[[28,[\"assessment\"]],[28,[\"challenge\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // when
        this.$(BUTTON_CANCEL).click();

        // then
        expectLinkViewToBeVisible(this);
      });
    });

    (0, _mocha.describe)('Error management', function () {

      (0, _mocha.it)('should display error if "content" is empty', function () {
        // given
        this.render(_ember.default.HTMLBars.template({
          "id": "hpJwRXcm",
          "block": "{\"statements\":[[1,[33,[\"feedback-panel\"],null,[[\"collapsible\"],[false]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // when
        this.$(BUTTON_SEND).click();

        // then
        (0, _chai.expect)(this.$('.alert')).to.have.lengthOf(1);
        expectFormViewToBeVisible(this);
      });

      (0, _mocha.it)('should display error if "content" is blank', function () {
        // given
        this.render(_ember.default.HTMLBars.template({
          "id": "hpJwRXcm",
          "block": "{\"statements\":[[1,[33,[\"feedback-panel\"],null,[[\"collapsible\"],[false]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
        setContent(this, '');

        // when
        this.$(BUTTON_SEND).click();

        // then
        (0, _chai.expect)(this.$('.alert')).to.have.lengthOf(1);
        expectFormViewToBeVisible(this);
      });

      (0, _mocha.it)('should display error if "email" is set but invalid', function () {
        // given
        this.render(_ember.default.HTMLBars.template({
          "id": "hpJwRXcm",
          "block": "{\"statements\":[[1,[33,[\"feedback-panel\"],null,[[\"collapsible\"],[false]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
        setEmail(this, 'wrong_email');
        setContent(this, 'Valid content');

        // when
        this.$(BUTTON_SEND).click();

        (0, _chai.expect)(this.$('.alert')).to.have.lengthOf(1);
        expectFormViewToBeVisible(this);
      });

      (0, _mocha.it)('should not display error if "form" view (with error) was closed and re-opened', function () {
        // given
        this.render(_ember.default.HTMLBars.template({
          "id": "vYG6y2lL",
          "block": "{\"statements\":[[1,[26,[\"feedback-panel\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        this.$(OPEN_LINK).click();
        setContent(this, '   ');

        this.$(BUTTON_SEND).click();
        (0, _chai.expect)(this.$('.alert')).to.have.lengthOf(1);

        // when
        this.$(BUTTON_CANCEL).click();
        this.$(OPEN_LINK).click();

        // then
        (0, _chai.expect)(this.$('.alert')).to.have.lengthOf(0);
      });

      (0, _mocha.it)('should display an error even if the user did not focus on email or content', function () {
        // given
        this.render(_ember.default.HTMLBars.template({
          "id": "hpJwRXcm",
          "block": "{\"statements\":[[1,[33,[\"feedback-panel\"],null,[[\"collapsible\"],[false]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // when
        this.$(BUTTON_SEND).click();

        // then
        (0, _chai.expect)(this.$('.alert')).to.have.lengthOf(1);
      });
    });
  });
});
define('pix-live/tests/integration/components/follower-form-test', ['chai', 'mocha', 'ember-mocha', 'ember', 'ember-test-helpers/wait'], function (_chai, _mocha, _emberMocha, _ember, _wait) {
  'use strict';

  var BUTTON_SEND = '.follower-form__button';
  var INPUT_EMAIL = '.follower-email';

  (0, _mocha.describe)('Integration | Component | follower form', function () {

    (0, _emberMocha.setupComponentTest)('follower-form', {
      integration: true
    });

    (0, _mocha.it)('renders', function () {
      this.render(_ember.default.HTMLBars.template({
        "id": "3KqB2opg",
        "block": "{\"statements\":[[1,[26,[\"follower-form\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });

    (0, _mocha.describe)('Test Component form', function () {
      (0, _mocha.it)('should render submit button', function () {
        //When
        this.render(_ember.default.HTMLBars.template({
          "id": "3KqB2opg",
          "block": "{\"statements\":[[1,[26,[\"follower-form\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
        //then
        (0, _chai.expect)(this.$('.follower-form__button').length).to.equal(1);
      });

      (0, _mocha.it)('should return true if input exist', function () {
        //When
        this.render(_ember.default.HTMLBars.template({
          "id": "3KqB2opg",
          "block": "{\"statements\":[[1,[26,[\"follower-form\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
        //then
        (0, _chai.expect)(this.$(INPUT_EMAIL).length).to.equal(1);
      });
    });

    /*
     FIXME: the tests below do not respect the Ember Way and will not be ok for Ember 2.12 (cf. commit #8d28dd) but we can not fix them now :-(
    */

    (0, _mocha.describe)('Form view', function () {

      var isSaveMethodCalled = void 0;
      var saveMethodBody = void 0;
      var saveMethodUrl = void 0;

      var storeStub = _ember.default.Service.extend({
        createRecord: function createRecord() {
          var createRecordArgs = arguments;
          return Object.create({
            save: function save() {
              isSaveMethodCalled = true;
              saveMethodUrl = createRecordArgs[0];
              saveMethodBody = createRecordArgs[1];
              return _ember.default.RSVP.resolve();
            }
          });
        }
      });

      var errorObject = _ember.default.Object.create({
        errors: [{
          status: 409
        }]
      });

      var storeStubRejection = _ember.default.Service.extend({
        createRecord: function createRecord() {
          var createRecordArgs = arguments;
          return Object.create({
            save: function save() {
              isSaveMethodCalled = true;
              saveMethodUrl = createRecordArgs[0];
              saveMethodBody = createRecordArgs[1];
              return _ember.default.RSVP.reject(errorObject);
            }
          });
        }
      });

      beforeEach(function () {
        isSaveMethodCalled = false;
        saveMethodBody = null;
        saveMethodUrl = null;
      });

      (0, _mocha.it)('clicking on "send" button should save the email of the follower', function () {
        // given
        // stub store service
        this.register('service:store', storeStub);
        this.inject.service('store', { as: 'store' });

        this.render(_ember.default.HTMLBars.template({
          "id": "3KqB2opg",
          "block": "{\"statements\":[[1,[26,[\"follower-form\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        var EMAIL_VALUE = 'myemail@gemail.com';
        var $email = this.$(INPUT_EMAIL);
        $email.val(EMAIL_VALUE);
        $email.change();

        // when
        (0, _chai.expect)(this.$(BUTTON_SEND).length).to.equal(1);
        (0, _chai.expect)(this.$(INPUT_EMAIL).length).to.equal(1);
        this.$(BUTTON_SEND).click();

        // then
        return (0, _wait.default)().then(function () {
          (0, _chai.expect)(isSaveMethodCalled).to.be.true;
          (0, _chai.expect)(saveMethodUrl).to.equal('follower');
          (0, _chai.expect)(saveMethodBody).to.deep.equal({ email: 'myemail@gemail.com' });
        });
      });

      (0, _mocha.it)('clicking on "send" button should not save the email of the follower cause its already saved', function () {
        var _this = this;

        // given
        this.register('service:store', storeStubRejection);

        this.render(_ember.default.HTMLBars.template({
          "id": "3KqB2opg",
          "block": "{\"statements\":[[1,[26,[\"follower-form\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        var EMAIL_VALUE = 'myemail@gemail.com';
        var $email = this.$(INPUT_EMAIL);
        $email.val(EMAIL_VALUE);
        $email.change();

        // when
        (0, _chai.expect)(this.$(BUTTON_SEND).length).to.equal(1);
        (0, _chai.expect)(this.$(INPUT_EMAIL).length).to.equal(1);
        this.$(BUTTON_SEND).click();

        // then
        return (0, _wait.default)().then(function () {
          (0, _chai.expect)(isSaveMethodCalled).to.be.true;
          (0, _chai.expect)(saveMethodUrl).to.equal('follower');
          (0, _chai.expect)(saveMethodBody).to.deep.equal({ email: 'myemail@gemail.com' });
          (0, _chai.expect)(_this.$(INPUT_EMAIL).val()).to.equal('myemail@gemail.com');
        });
      });
    });
  });
});
define('pix-live/tests/integration/components/g-recaptcha-test', ['chai', 'mocha', 'ember-mocha', 'ember'], function (_chai, _mocha, _emberMocha, _ember) {
  'use strict';

  var RSVP = _ember.default.RSVP;


  var StubGoogleRecaptchaService = _ember.default.Service.extend({
    loadScript: function loadScript() {
      return RSVP.resolve();
    },
    render: function render(containerId /* , callback, expiredCallback  */) {
      this.set('calledWithContainerId', containerId);
      // We create a div here to simulate our Google recaptcha service,
      // which will create and then cache the recaptcha element
      var container = document.getElementById(containerId);
      var recaptchaElement = document.createElement('div');
      return container.appendChild(recaptchaElement);
    },
    reset: function reset() {}
  });

  (0, _mocha.describe)('Integration | Component | g recaptcha', function () {

    (0, _emberMocha.setupComponentTest)('g-recaptcha', {
      integration: true
    });

    beforeEach(function () {
      this.register('service:google-recaptcha', StubGoogleRecaptchaService);
      this.inject.service('google-recaptcha', { as: 'googleRecaptchaService' });
    });

    (0, _mocha.it)('renders', function () {
      this.render(_ember.default.HTMLBars.template({
        "id": "BuJ6Tpul",
        "block": "{\"statements\":[[1,[26,[\"g-recaptcha\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });

    // XXX Inspired of https://guides.emberjs.com/v2.13.0/tutorial/service/#toc_integration-testing-the-map-component
    (0, _mocha.it)('should append recaptcha element to container element', function () {
      // when
      this.render(_ember.default.HTMLBars.template({
        "id": "BuJ6Tpul",
        "block": "{\"statements\":[[1,[26,[\"g-recaptcha\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));
      // then
      (0, _chai.expect)(this.$('#g-recaptcha-container').children()).to.have.lengthOf(1);
      (0, _chai.expect)(this.get('googleRecaptchaService.calledWithContainerId')).to.equal('g-recaptcha-container');
    });
  });
});
define('pix-live/tests/integration/components/medal-item-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | medal item', function () {
    (0, _emberMocha.setupComponentTest)('medal-item', {
      integration: true
    });

    (0, _mocha.it)('renders', function () {
      this.render(Ember.HTMLBars.template({
        "id": "DEjh4Bun",
        "block": "{\"statements\":[[1,[26,[\"medal-item\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });

    (0, _mocha.it)('should contain the number of pix passed in the component', function () {
      // given
      var pixScore = 20;
      this.set('pixScore', pixScore);

      // when
      this.render(Ember.HTMLBars.template({
        "id": "+AQXWhT6",
        "block": "{\"statements\":[[1,[33,[\"medal-item\"],null,[[\"pixScore\"],[[28,[\"pixScore\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));

      // then
      (0, _chai.expect)(this.$('.medal-item__pix-score').text()).to.contain(pixScore.toString());
    });

    (0, _mocha.it)('should contain an image of a medal with the text pix', function () {
      // when
      this.render(Ember.HTMLBars.template({
        "id": "+AQXWhT6",
        "block": "{\"statements\":[[1,[33,[\"medal-item\"],null,[[\"pixScore\"],[[28,[\"pixScore\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));

      // then
      (0, _chai.expect)(this.$('.medal-item__medal-img').length).to.equal(1);
      (0, _chai.expect)(this.$('.medal-item__pix-text').text()).to.contain('pix');
    });
  });
});
define('pix-live/tests/integration/components/modal-mobile-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | modal mobile', function () {

    (0, _emberMocha.setupComponentTest)('modal-mobile', {
      integration: true
    });

    (0, _mocha.it)('renders', function () {
      this.render(Ember.HTMLBars.template({
        "id": "98vXZoLV",
        "block": "{\"statements\":[[1,[26,[\"modal-mobile\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });

    (0, _mocha.it)('should display a title with a "warning" icon', function () {
      // when
      this.render(Ember.HTMLBars.template({
        "id": "98vXZoLV",
        "block": "{\"statements\":[[1,[26,[\"modal-mobile\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));

      // then
      var $titleWarningIcon = this.$('.modal-title__warning-icon');
      (0, _chai.expect)($titleWarningIcon.attr('src')).to.equal('/images/icon-mobile-support-warning.svg');
    });

    (0, _mocha.it)('should display a message', function () {
      // when
      this.render(Ember.HTMLBars.template({
        "id": "98vXZoLV",
        "block": "{\"statements\":[[1,[26,[\"modal-mobile\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));

      // then
      var expected = 'Certaines épreuves PIX peuvent être difficiles à réussir sur mobile. Pour une meilleure expérience, nous vous conseillons de passer ce test sur un ordinateur.';
      (0, _chai.expect)(this.$('.modal-body').text().trim()).to.equal(expected);
    });
  });
});
define('pix-live/tests/integration/components/navbar-header-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | navbar-header', function () {

    (0, _emberMocha.setupComponentTest)('header-navbar', {
      integration: true
    });

    (0, _mocha.beforeEach)(function () {
      this.render(Ember.HTMLBars.template({
        "id": "Jj0Mqu5s",
        "block": "{\"statements\":[[1,[26,[\"navbar-header\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
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

    (0, _mocha.it)('should display a link to "referential" page', function () {
      (0, _chai.expect)(this.$('.navbar-header-links__link--competences')).to.have.lengthOf(1);
      (0, _chai.expect)(this.$('.navbar-header-links--user-logged')).to.have.length(0);
    });

    (0, _mocha.describe)('Display user details', function () {

      (0, _mocha.describe)('When user is logged', function () {

        (0, _mocha.it)('should display user information, when user is logged', function () {
          // given
          this.set('user', { firstName: 'FHI', lastName: '4EVER' });
          // when
          this.render(Ember.HTMLBars.template({
            "id": "GjQfsZ3F",
            "block": "{\"statements\":[[1,[33,[\"navbar-header\"],null,[[\"user\"],[[28,[\"user\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));
          (0, _chai.expect)(this.$('.logged-user-details')).to.have.length(1);
          (0, _chai.expect)(this.$('.logged-user-name').text().trim()).to.be.equal('FHI 4EVER');
        });

        (0, _mocha.it)('should move navbar to top', function () {
          // given
          this.set('user', { firstName: 'FHI', lastName: '4EVER' });
          // when
          this.render(Ember.HTMLBars.template({
            "id": "GjQfsZ3F",
            "block": "{\"statements\":[[1,[33,[\"navbar-header\"],null,[[\"user\"],[[28,[\"user\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));
          (0, _chai.expect)(this.$('.navbar-header-links--user-logged')).to.have.length(1);
        });
      });

      (0, _mocha.it)('should not display user information, for unlogged', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "Jj0Mqu5s",
          "block": "{\"statements\":[[1,[26,[\"navbar-header\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
        (0, _chai.expect)(this.$('.logged-user-details')).to.have.length(0);
      });
    });
  });
});
define('pix-live/tests/integration/components/pix-logo-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | pix logo', function () {

    (0, _emberMocha.setupComponentTest)('pix-logo', {
      integration: true
    });

    (0, _mocha.beforeEach)(function () {
      this.render(Ember.HTMLBars.template({
        "id": "WqkNWQp7",
        "block": "{\"statements\":[[1,[26,[\"pix-logo\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));
    });

    (0, _mocha.it)('renders', function () {
      (0, _chai.expect)(this.$()).to.have.lengthOf(1);
    });

    (0, _mocha.it)('should display the logo', function () {
      (0, _chai.expect)(this.$('.pix-logo__image').attr('src')).to.equal('/images/pix-logo.svg');
    });

    (0, _mocha.it)('should display "bêta"', function () {
      (0, _chai.expect)(this.$().text().trim()).to.equal('Bêta');
    });

    (0, _mocha.it)('should have a textual alternative', function () {
      (0, _chai.expect)(this.$('.pix-logo__image').attr('alt')).to.equal('Logo officiel de PIX (version bêta)');
    });

    (0, _mocha.it)('should have a title in the link', function () {
      (0, _chai.expect)(this.$('.pix-logo__link').attr('title')).to.equal('Lien vers la page d\'accueil de PIX');
    });
  });
});
define('pix-live/tests/integration/components/profile-panel-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | profile panel', function () {
    (0, _emberMocha.setupComponentTest)('profile-panel', {
      integration: true
    });

    (0, _mocha.describe)('(Rendering behavior) Component: ', function () {

      (0, _mocha.it)('should be rendered', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "hj/2/1ZO",
          "block": "{\"statements\":[[1,[26,[\"profile-panel\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$()).to.have.length(1);
      });

      (0, _mocha.it)('should render a wrapper', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "hj/2/1ZO",
          "block": "{\"statements\":[[1,[26,[\"profile-panel\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // then
        var WRAPPER_CLASS = '.profile-panel';
        (0, _chai.expect)(this.$(WRAPPER_CLASS)).to.have.length(1);
      });

      (0, _mocha.it)('should render a profile header', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "hj/2/1ZO",
          "block": "{\"statements\":[[1,[26,[\"profile-panel\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // Then
        var HEADER_CLASS = '.profile-panel__header';
        var HEADER_TITLE = '.profile-header__title';
        (0, _chai.expect)(this.$(HEADER_CLASS)).to.have.length(1);
        (0, _chai.expect)(this.$(HEADER_TITLE).text().trim()).to.be.equal('Votre profil');
      });

      (0, _mocha.it)('should render a competence profile block', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "hj/2/1ZO",
          "block": "{\"statements\":[[1,[26,[\"profile-panel\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // Then
        var COMPETENCY_BLOCK = '.profile-panel__competence-areas';
        (0, _chai.expect)(this.$(COMPETENCY_BLOCK)).to.have.length(1);
      });

      (0, _mocha.describe)('behavior according to totalPixScore value', function () {
        (0, _mocha.it)('should display two dashes instead of zero in total pix score, when user has’nt yet assessed on placement test', function () {
          // given
          var totalPixScore = '';

          this.set('totalPixScore', totalPixScore);
          // when
          this.render(Ember.HTMLBars.template({
            "id": "HTqT+ym1",
            "block": "{\"statements\":[[1,[33,[\"profile-panel\"],null,[[\"totalPixScore\"],[[28,[\"totalPixScore\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));

          // then
          (0, _chai.expect)(this.$('.profile-header__score-pastille-wrapper')).to.have.length(1);
        });
      });
    });
  });
});
define('pix-live/tests/integration/components/qcm-proposals-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | QCM proposals', function () {

    (0, _emberMocha.setupComponentTest)('qcm-proposals', {
      integration: true
    });

    (0, _mocha.it)('renders', function () {
      this.render(Ember.HTMLBars.template({
        "id": "SFVCBMML",
        "block": "{\"statements\":[[1,[26,[\"qcm-proposals\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('pix-live/tests/integration/components/qcm-solution-panel-test', ['chai', 'mocha', 'ember-mocha', 'ember', 'pix-live/utils/lodash-custom'], function (_chai, _mocha, _emberMocha, _ember, _lodashCustom) {
  'use strict';

  var CHECKBOX_CORRECT_AND_CHECKED = 'input[type=checkbox]:eq(1)';
  var LABEL_CORRECT_AND_CHECKED = '.qcm-proposal-label__oracle:eq(1)';

  var CHECKBOX_CORRECT_AND_UNCHECKED = '.qcm-proposal-label__checkbox-picture:eq(2)';
  var LABEL_CORRECT_AND_UNCHECKED = '.qcm-proposal-label__oracle:eq(2)';

  var LABEL_INCORRECT_AND_CHECKED = '.qcm-proposal-label__oracle:eq(0)';
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
        this.render(_ember.default.HTMLBars.template({
          "id": "lMfyMGVi",
          "block": "{\"statements\":[[1,[26,[\"qcm-solution-panel\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
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

        (0, _mocha.before)(function () {
          challenge = _ember.default.Object.create({
            id: 'challenge_id',
            proposals: '-foo\n- bar\n- qix\n- yon',
            type: 'QCM'
          });

          solution = _ember.default.Object.create({
            id: 'solution_id', value: '2,3'
          });

          answer = _ember.default.Object.create(correctAnswer);
        });

        (0, _mocha.it)('QCM, la réponse correcte est cochée', function () {
          // Given
          this.set('answer', answer);
          this.set('solution', solution);
          this.set('challenge', challenge);

          // When
          this.render(_ember.default.HTMLBars.template({
            "id": "6bxZetM3",
            "block": "{\"statements\":[[1,[33,[\"qcm-solution-panel\"],null,[[\"challenge\",\"answer\",\"solution\"],[[28,[\"challenge\"]],[28,[\"answer\"]],[28,[\"solution\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));

          // Then
          (0, _chai.expect)($(LABEL_CORRECT_AND_CHECKED)).to.have.lengthOf(1);
          (0, _chai.expect)($(CHECKBOX_CORRECT_AND_CHECKED)).to.have.lengthOf(1);

          (0, _chai.expect)($(CHECKBOX_CORRECT_AND_CHECKED).attr('disabled')).to.equal('disabled');
          (0, _chai.expect)(charCount($(LABEL_CORRECT_AND_CHECKED).text())).to.be.above(0);
          (0, _chai.expect)($(LABEL_CORRECT_AND_CHECKED).css('font-weight')).to.equal(CSS_BOLD_FONT_WEIGHT);
          (0, _chai.expect)($(LABEL_CORRECT_AND_CHECKED).css('color')).to.equal(CSS_GREEN_COLOR);
          (0, _chai.expect)($(LABEL_CORRECT_AND_CHECKED).css('text-decoration')).to.contain(CSS_LINETHROUGH_OFF);
        });

        (0, _mocha.it)('QCM, aucune réponse incorrecte n\'est cochée', function () {
          //Given
          this.set('answer', answer);
          this.set('solution', solution);
          this.set('challenge', challenge);

          // When
          this.render(_ember.default.HTMLBars.template({
            "id": "6bxZetM3",
            "block": "{\"statements\":[[1,[33,[\"qcm-solution-panel\"],null,[[\"challenge\",\"answer\",\"solution\"],[[28,[\"challenge\"]],[28,[\"answer\"]],[28,[\"solution\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));

          // Then
          (0, _chai.expect)(charCount($(LABEL_INCORRECT_AND_UNCHECKED).text())).to.be.above(0);
          (0, _chai.expect)($(LABEL_INCORRECT_AND_UNCHECKED).css('font-weight')).to.equal(CSS_NORMAL_FONT_WEIGHT);
          (0, _chai.expect)($(LABEL_INCORRECT_AND_UNCHECKED).css('color')).to.equal(CSS_BLACK_COLOR);
          (0, _chai.expect)($(LABEL_INCORRECT_AND_UNCHECKED).css('text-decoration')).to.contain(CSS_LINETHROUGH_OFF);
        });

        (0, _mocha.it)('QCM, Au moins l\'une des réponse correcte n\'est pas cochée', function () {
          //Given
          answer = _ember.default.Object.create(unCorrectAnswer);

          this.set('answer', answer);
          this.set('solution', solution);
          this.set('challenge', challenge);

          // When
          this.render(_ember.default.HTMLBars.template({
            "id": "6bxZetM3",
            "block": "{\"statements\":[[1,[33,[\"qcm-solution-panel\"],null,[[\"challenge\",\"answer\",\"solution\"],[[28,[\"challenge\"]],[28,[\"answer\"]],[28,[\"solution\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));

          // Then
          (0, _chai.expect)(charCount($(LABEL_CORRECT_AND_UNCHECKED).text())).to.be.above(0);
          (0, _chai.expect)($(LABEL_CORRECT_AND_UNCHECKED).css('font-weight')).to.equal(CSS_BOLD_FONT_WEIGHT);
          (0, _chai.expect)($(LABEL_CORRECT_AND_UNCHECKED).css('color')).to.equal(CSS_GREEN_COLOR);
          (0, _chai.expect)($(LABEL_CORRECT_AND_UNCHECKED).css('text-decoration')).to.contain(CSS_LINETHROUGH_OFF);
        });

        (0, _mocha.it)('QCM, au moins l\'une des réponse incorrecte est cochée', function () {
          //Given
          answer = _ember.default.Object.create(unCorrectAnswer);

          this.set('answer', answer);
          this.set('solution', solution);
          this.set('challenge', challenge);

          // When
          this.render(_ember.default.HTMLBars.template({
            "id": "6bxZetM3",
            "block": "{\"statements\":[[1,[33,[\"qcm-solution-panel\"],null,[[\"challenge\",\"answer\",\"solution\"],[[28,[\"challenge\"]],[28,[\"answer\"]],[28,[\"solution\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));

          // Then
          (0, _chai.expect)($(CHECKBOX_CORRECT_AND_UNCHECKED).is(':checked')).to.equal(false);
          (0, _chai.expect)(charCount($(LABEL_INCORRECT_AND_CHECKED).text())).to.be.above(0);
          (0, _chai.expect)($(LABEL_INCORRECT_AND_CHECKED).css('font-weight')).to.equal(CSS_NORMAL_FONT_WEIGHT);
          (0, _chai.expect)($(LABEL_INCORRECT_AND_CHECKED).css('color')).to.equal(CSS_BLACK_COLOR);
          (0, _chai.expect)($(LABEL_INCORRECT_AND_CHECKED).css('text-decoration')).to.contain(CSS_LINETHROUGH_ON);
        });

        (0, _mocha.it)('Aucune case à cocher n\'est cliquable', function () {
          //Given
          this.set('answer', answer);
          this.set('solution', solution);
          this.set('challenge', challenge);

          // When
          this.render(_ember.default.HTMLBars.template({
            "id": "6bxZetM3",
            "block": "{\"statements\":[[1,[33,[\"qcm-solution-panel\"],null,[[\"challenge\",\"answer\",\"solution\"],[[28,[\"challenge\"]],[28,[\"answer\"]],[28,[\"solution\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));

          // Then
          var size = $('.comparison-window .qcm-proposal-label__checkbox-picture').length;
          _lodashCustom.default.times(size, function (index) {
            (0, _chai.expect)($('.comparison-window .qcm-proposal-label__checkbox-picture:eq(' + index + ')').is(':disabled')).to.equal(true);
          });
        });
      });
    });
  });
});
define('pix-live/tests/integration/components/qcu-proposals-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | QCU proposals', function () {

    (0, _emberMocha.setupComponentTest)('qcu-proposals', {
      integration: true
    });

    /* Rendering
     ----------------------------------------------------- */

    (0, _mocha.describe)('Rendering', function () {

      var proposals = void 0;
      var answers = void 0;
      var answerChangedHandler = void 0;

      beforeEach(function () {
        proposals = '- prop 1\n- prop 2\n- prop 3';
        answers = [false, true, false];
        answerChangedHandler = function answerChangedHandler() {
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
          "id": "n0NAj1zM",
          "block": "{\"statements\":[[1,[33,[\"qcu-proposals\"],null,[[\"answers\",\"proposals\",\"answerChanged\"],[[28,[\"answers\"]],[28,[\"proposals\"]],\"answerChanged\"]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('.proposal-text')).to.have.lengthOf(3);
      });
    });
  });
});
define('pix-live/tests/integration/components/qcu-solution-panel-test', ['chai', 'mocha', 'ember-mocha', 'ember', 'pix-live/utils/lodash-custom'], function (_chai, _mocha, _emberMocha, _ember, _lodashCustom) {
  'use strict';

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
        this.render(_ember.default.HTMLBars.template({
          "id": "ImJDD4J6",
          "block": "{\"statements\":[[1,[26,[\"qcu-solution-panel\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
        (0, _chai.expect)(this.$()).to.have.length(1);
        (0, _chai.expect)($(LABEL_CORRECT_AND_CHECKED)).to.have.lengthOf(0);
      });

      (0, _mocha.describe)('Radio state', function () {

        before(function () {
          challenge = _ember.default.Object.create({
            id: 'challenge_id',
            proposals: '-foo\n- bar\n- qix\n- yon',
            type: 'QCM'
          });

          solution = _ember.default.Object.create({
            id: 'solution_id', value: '2'
          });

          answer = _ember.default.Object.create(correctAnswer);
        });

        (0, _mocha.it)('QCU,la réponse correcte est cochée', function () {
          //Given
          this.set('answer', answer);
          this.set('solution', solution);
          this.set('challenge', challenge);
          // When
          this.render(_ember.default.HTMLBars.template({
            "id": "YHeVDTOT",
            "block": "{\"statements\":[[1,[33,[\"qcu-solution-panel\"],null,[[\"challenge\",\"answer\",\"solution\"],[[28,[\"challenge\"]],[28,[\"answer\"]],[28,[\"solution\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));

          // Then
          (0, _chai.expect)($(LABEL_CORRECT_AND_CHECKED)).to.have.lengthOf(1);
          (0, _chai.expect)($(RADIO_CORRECT_AND_CHECKED)).to.have.lengthOf(1);

          (0, _chai.expect)($(RADIO_CORRECT_AND_CHECKED).hasClass('radio-on')).to.equal(true);
          (0, _chai.expect)(charCount($(LABEL_CORRECT_AND_CHECKED).text())).to.be.above(0);
          (0, _chai.expect)($(LABEL_CORRECT_AND_CHECKED).css('font-weight')).to.equal(CSS_BOLD_FONT_WEIGHT);
          (0, _chai.expect)($(LABEL_CORRECT_AND_CHECKED).css('color')).to.equal(CSS_GREEN_COLOR);
          (0, _chai.expect)($(LABEL_CORRECT_AND_CHECKED).css('text-decoration')).to.contain(CSS_LINETHROUGH_OFF);
        });

        (0, _mocha.it)('QCU, la réponse correcte n\'est pas cochée', function () {
          //Given
          answer = _ember.default.Object.create(unCorrectAnswer);

          this.set('answer', answer);
          this.set('solution', solution);
          this.set('challenge', challenge);

          // When
          this.render(_ember.default.HTMLBars.template({
            "id": "YHeVDTOT",
            "block": "{\"statements\":[[1,[33,[\"qcu-solution-panel\"],null,[[\"challenge\",\"answer\",\"solution\"],[[28,[\"challenge\"]],[28,[\"answer\"]],[28,[\"solution\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));

          // Then
          (0, _chai.expect)($(RADIO_CORRECT_AND_CHECKED).hasClass('radio-off')).to.equal(true);

          (0, _chai.expect)(charCount($(LABEL_CORRECT_AND_UNCHECKED).text())).to.be.above(0);
          (0, _chai.expect)($(LABEL_CORRECT_AND_UNCHECKED).css('font-weight')).to.equal(CSS_BOLD_FONT_WEIGHT);
          (0, _chai.expect)($(LABEL_CORRECT_AND_UNCHECKED).css('color')).to.equal(CSS_GREEN_COLOR);
          (0, _chai.expect)($(LABEL_CORRECT_AND_UNCHECKED).css('text-decoration')).to.contain(CSS_LINETHROUGH_OFF);
        });

        (0, _mocha.it)('QCU, la réponse incorrecte n\'est pas cochée', function () {
          //Given
          this.set('answer', answer);
          this.set('solution', solution);
          this.set('challenge', challenge);

          // When
          this.render(_ember.default.HTMLBars.template({
            "id": "YHeVDTOT",
            "block": "{\"statements\":[[1,[33,[\"qcu-solution-panel\"],null,[[\"challenge\",\"answer\",\"solution\"],[[28,[\"challenge\"]],[28,[\"answer\"]],[28,[\"solution\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));

          // Then
          (0, _chai.expect)($(RADIO_INCORRECT_AND_UNCHECKED).hasClass('radio-off')).to.equal(true);
          (0, _chai.expect)(charCount($(LABEL_INCORRECT_AND_UNCHECKED).text())).to.be.above(0);
          (0, _chai.expect)($(LABEL_INCORRECT_AND_UNCHECKED).css('font-weight')).to.equal(CSS_NORMAL_FONT_WEIGHT);
          (0, _chai.expect)($(LABEL_INCORRECT_AND_UNCHECKED).css('color')).to.equal(CSS_BLACK_COLOR);
          (0, _chai.expect)($(LABEL_INCORRECT_AND_UNCHECKED).css('text-decoration')).to.contain(CSS_LINETHROUGH_OFF);
        });

        (0, _mocha.it)('QCU,la réponse incorrecte est cochée', function () {
          //Given
          answer = _ember.default.Object.create(unCorrectAnswer);

          this.set('answer', answer);
          this.set('solution', solution);
          this.set('challenge', challenge);

          // When
          this.render(_ember.default.HTMLBars.template({
            "id": "YHeVDTOT",
            "block": "{\"statements\":[[1,[33,[\"qcu-solution-panel\"],null,[[\"challenge\",\"answer\",\"solution\"],[[28,[\"challenge\"]],[28,[\"answer\"]],[28,[\"solution\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));

          // Then
          (0, _chai.expect)($(RADIO_INCORRECT_AND_CHECKED).hasClass('radio-on')).to.equal(true);
          (0, _chai.expect)(charCount($(LABEL_INCORRECT_AND_CHECKED).text())).to.be.above(0);
          (0, _chai.expect)($(LABEL_INCORRECT_AND_CHECKED).css('font-weight')).to.equal(CSS_NORMAL_FONT_WEIGHT);
          (0, _chai.expect)($(LABEL_INCORRECT_AND_CHECKED).css('color')).to.equal(CSS_BLACK_COLOR);
          (0, _chai.expect)($(LABEL_INCORRECT_AND_CHECKED).css('text-decoration')).to.contain(CSS_LINETHROUGH_ON);
        });

        (0, _mocha.it)('Aucune case à cocher n\'est cliquable', function () {
          //Given
          this.set('answer', answer);
          this.set('solution', solution);
          this.set('challenge', challenge);

          // When
          this.render(_ember.default.HTMLBars.template({
            "id": "YHeVDTOT",
            "block": "{\"statements\":[[1,[33,[\"qcu-solution-panel\"],null,[[\"challenge\",\"answer\",\"solution\"],[[28,[\"challenge\"]],[28,[\"answer\"]],[28,[\"solution\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));

          // Then
          var size = $('.comparison-window .qcu-panel__proposal-radio').length;
          _lodashCustom.default.times(size, function (index) {
            (0, _chai.expect)($('.comparison-window .qcu-panel__proposal-radio:eq(' + index + ')').is(':disabled')).to.equal(true);
          });
        });
      });
    });
  });
});
define('pix-live/tests/integration/components/qroc-proposal-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | QROC proposal', function () {

    (0, _emberMocha.setupComponentTest)('qroc-proposal', {
      integration: true
    });

    (0, _mocha.it)('renders', function () {
      this.render(Ember.HTMLBars.template({
        "id": "D54D+XbD",
        "block": "{\"statements\":[[1,[26,[\"qroc-proposal\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });

    (0, _mocha.describe)('Component behavior when user fill input of challenge:', function () {

      (0, _mocha.it)('should display a value when a non-empty value is providing by user', function () {
        // given
        var proposals = '${myInput}';
        this.set('proposals', proposals);
        this.set('answerValue', 'myValue');
        // when
        this.render(Ember.HTMLBars.template({
          "id": "he4fPAR2",
          "block": "{\"statements\":[[1,[33,[\"qroc-proposal\"],null,[[\"proposals\",\"answerValue\"],[[28,[\"proposals\"]],[28,[\"answerValue\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
        // then
        (0, _chai.expect)(this.$('.challenge-response__proposal-input').val()).to.equal('myValue');
      });
    });

    //     block.push(Ember.Object.create({name: 'myInput', input: 'mylabel'}));

    (0, _mocha.describe)('Component behavior when user skip challenge:', function () {

      [{ input: 'aband', output: 'aband' }, { input: '#aband#', output: '#aband#' }, { input: 'aband#', output: 'aband#' }, { input: 'ABAND', output: 'ABAND' }, { input: '#ABAND', output: '#ABAND' }, { input: 'ABAND#', output: 'ABAND#' }, { input: '#ABAND#', output: '' }, { input: '', output: '' }].forEach(function (_ref2) {
        var input = _ref2.input,
            output = _ref2.output;


        (0, _mocha.it)('should display \'\' value ' + input + ' is providing to component', function () {
          // given
          this.set('proposals', '${myLabel}');
          this.set('answerValue', input);
          // when
          this.render(Ember.HTMLBars.template({
            "id": "he4fPAR2",
            "block": "{\"statements\":[[1,[33,[\"qroc-proposal\"],null,[[\"proposals\",\"answerValue\"],[[28,[\"proposals\"]],[28,[\"answerValue\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));
          // then
          (0, _chai.expect)(this.$('.challenge-response__proposal-input').val()).to.be.equal(output);
        });
      });
    });
  });
});
define('pix-live/tests/integration/components/qroc-solution-panel-test', ['chai', 'mocha', 'ember-mocha', 'ember'], function (_chai, _mocha, _emberMocha, _ember) {
  'use strict';

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
      this.render(_ember.default.HTMLBars.template({
        "id": "NpKj63LV",
        "block": "{\"statements\":[[1,[26,[\"qroc-solution-panel\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });

    (0, _mocha.it)('should disabled all inputs', function () {
      // given
      this.render(_ember.default.HTMLBars.template({
        "id": "NpKj63LV",
        "block": "{\"statements\":[[1,[26,[\"qroc-solution-panel\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));
      var input = this.$('input');
      // then
      (0, _chai.expect)(input).to.be.disabled;
    });

    (0, _mocha.describe)('comparison when the answer is right', function () {

      var assessment = _ember.default.Object.create({ id: 'assessment_id' });
      var challenge = _ember.default.Object.create({ id: 'challenge_id' });
      var answer = _ember.default.Object.create({ id: 'answer_id', result: 'ok', assessment: assessment, challenge: challenge });

      (0, _mocha.it)('should diplay the answer in bold green and not the solution', function () {
        // given
        this.set('answer', answer);
        this.render(_ember.default.HTMLBars.template({
          "id": "MvdjYNn/",
          "block": "{\"statements\":[[1,[33,[\"qroc-solution-panel\"],null,[[\"answer\"],[[28,[\"answer\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
        // when
        var answerInput = this.$(ANSWER_INPUT);
        var answerBlock = this.$(ANSWER_BLOCK);
        var solutionBlock = this.$(SOLUTION_BLOCK);
        // then
        (0, _chai.expect)(answerInput).to.have.length(1);
        (0, _chai.expect)(answerBlock).to.have.length(1);
        (0, _chai.expect)(answerInput.css('font-weight')).to.be.equal('bold');
        (0, _chai.expect)(answerInput.css('text-decoration')).to.be.contains('none');
        (0, _chai.expect)(answerInput.css('color')).to.be.equal(RIGHT_ANSWER_GREEN);
        (0, _chai.expect)(solutionBlock).to.have.length(0);
      });
    });

    (0, _mocha.describe)('comparison when the answer is false', function () {

      (0, _mocha.beforeEach)(function () {
        var assessment = _ember.default.Object.create({ id: 'assessment_id' });
        var challenge = _ember.default.Object.create({ id: 'challenge_id' });
        var answer = _ember.default.Object.create({ id: 'answer_id', result: 'ko', assessment: assessment, challenge: challenge });

        this.set('answer', answer);
        this.render(_ember.default.HTMLBars.template({
          "id": "MvdjYNn/",
          "block": "{\"statements\":[[1,[33,[\"qroc-solution-panel\"],null,[[\"answer\"],[[28,[\"answer\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
      });

      (0, _mocha.it)('should display the false answer line-through', function () {
        // given
        var answerBlock = this.$(ANSWER_BLOCK);
        var answerInput = this.$(ANSWER_INPUT);
        // then
        (0, _chai.expect)(answerBlock).to.have.lengthOf(1);
        (0, _chai.expect)(answerInput.css('font-weight')).to.be.equal('400');
        (0, _chai.expect)(answerInput.css('text-decoration')).to.be.contains('line-through');
      });

      (0, _mocha.it)('should display the solution with an arrow and the solution in bold green', function () {
        // given
        var blockSolution = this.$(SOLUTION_BLOCK);
        var blockSolutionText = this.$(SOLUTION_DISPLAY);

        // then
        (0, _chai.expect)(blockSolution).to.have.lengthOf(1);
        (0, _chai.expect)(blockSolution.css('align-items')).to.be.equal('stretch');
        (0, _chai.expect)(blockSolutionText.css('color')).to.be.equal(RIGHT_ANSWER_GREEN);
        (0, _chai.expect)(blockSolutionText.css('font-weight')).to.be.equal('bold');
      });

      (0, _mocha.describe)('comparison when the answer was not given', function () {

        (0, _mocha.beforeEach)(function () {
          var assessment = _ember.default.Object.create({ id: 'assessment_id' });
          var challenge = _ember.default.Object.create({ id: 'challenge_id' });
          var answer = _ember.default.Object.create({ id: 'answer_id', result: 'aband', assessment: assessment, challenge: challenge });

          this.set('answer', answer);
          this.set('isResultWithoutAnswer', true);
          this.render(_ember.default.HTMLBars.template({
            "id": "MvdjYNn/",
            "block": "{\"statements\":[[1,[33,[\"qroc-solution-panel\"],null,[[\"answer\"],[[28,[\"answer\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));
        });

        (0, _mocha.it)('should display PAS DE REPONSE in italic', function () {
          // given
          var answerBlock = this.$(ANSWER_BLOCK);
          var answerInput = this.$(ANSWER_INPUT);
          // then
          (0, _chai.expect)(answerBlock).to.have.length(1);
          (0, _chai.expect)(answerInput.css('font-style')).to.be.equal('italic');
          (0, _chai.expect)(answerInput.css('color')).to.be.equal(NO_ANSWER_GREY);
        });
      });
    });
  });
});
define('pix-live/tests/integration/components/qrocm-ind-solution-panel-test', ['chai', 'mocha', 'ember-mocha', 'ember'], function (_chai, _mocha, _emberMocha, _ember) {
  'use strict';

  var FIRST_CORRECTION_BLOCK = '.correction-qrocm:nth-child(1)';
  var SECOND_CORRECTION_BLOCK = '.correction-qrocm:nth-child(2)';
  var THIRD_CORRECTION_BLOCK = '.correction-qrocm:nth-child(3)';
  var SOLUTION_BLOCK = '.correction-qrocm__solution';
  var LABEL = '.correction-qrocm__label';
  var INPUT = '.correction-qrocm__answer-input';
  var SOLUTION_TEXT = '.correction-qrocm__solution-text';

  var RIGHT_ANSWER_GREEN = 'rgb(19, 201, 160)';
  var NO_ANSWER_GREY = 'rgb(62, 65, 73)';

  (0, _mocha.describe)('Integration | Component | qrocm solution panel', function () {

    (0, _emberMocha.setupComponentTest)('qrocm-ind-solution-panel', {
      integration: true
    });

    var assessment = _ember.default.Object.create({ id: 'assessment_id' });
    var challenge = _ember.default.Object.create({ id: 'challenge_id', proposals: 'answer1 : ${key1}\nCarte mémoire (SD) : ${key2}\nblabla : ${key3}' });
    var answer = _ember.default.Object.create({
      id: 'answer_id',
      value: 'key1: \'rightAnswer1\' key2: \'wrongAnswer2\' key3: \'\'',
      resultDetails: 'key1: true\nkey2: false\nkey3: false',
      assessment: assessment,
      challenge: challenge
    });
    var solution = _ember.default.Object.create({ value: 'key1:\n- rightAnswer1\nkey2:\n- rightAnswer20\n- rightAnswer21\nkey3 :\n- rightAnswer3' });

    (0, _mocha.beforeEach)(function () {
      this.set('answer', answer);
      this.set('solution', solution);
      this.set('challenge', challenge);
    });

    (0, _mocha.it)('renders', function () {
      this.render(_ember.default.HTMLBars.template({
        "id": "AQ8byhGY",
        "block": "{\"statements\":[[1,[33,[\"qrocm-ind-solution-panel\"],null,[[\"answer\",\"solution\",\"challenge\"],[[28,[\"answer\"]],[28,[\"solution\"]],[28,[\"challenge\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });

    (0, _mocha.it)('should disabled all inputs', function () {
      // given
      this.render(_ember.default.HTMLBars.template({
        "id": "AQ8byhGY",
        "block": "{\"statements\":[[1,[33,[\"qrocm-ind-solution-panel\"],null,[[\"answer\",\"solution\",\"challenge\"],[[28,[\"answer\"]],[28,[\"solution\"]],[28,[\"challenge\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));
      var input = this.$('input');
      // then
      (0, _chai.expect)(input).to.be.disabled;
    });

    (0, _mocha.it)('should contains three labels', function () {
      // given
      this.render(_ember.default.HTMLBars.template({
        "id": "AQ8byhGY",
        "block": "{\"statements\":[[1,[33,[\"qrocm-ind-solution-panel\"],null,[[\"answer\",\"solution\",\"challenge\"],[[28,[\"answer\"]],[28,[\"solution\"]],[28,[\"challenge\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));
      var labels = this.$(LABEL);
      // then
      (0, _chai.expect)(labels).to.have.length(3);
    });

    (0, _mocha.describe)('comparison of a qrocm-ind with a right answer, a wrong answer and one empty answer', function () {

      (0, _mocha.describe)('right answer display', function () {

        (0, _mocha.it)('should display the right answer in green bold', function () {
          // given
          this.render(_ember.default.HTMLBars.template({
            "id": "18Tupy2D",
            "block": "{\"statements\":[[1,[33,[\"qrocm-ind-solution-panel\"],null,[[\"challenge\",\"answer\",\"solution\"],[[28,[\"challenge\"]],[28,[\"answer\"]],[28,[\"solution\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));
          var answerBlock = this.$(FIRST_CORRECTION_BLOCK);
          var answerLabel = this.$(FIRST_CORRECTION_BLOCK + ' ' + LABEL);
          var answerInput = this.$(FIRST_CORRECTION_BLOCK + ' ' + INPUT);

          // then
          (0, _chai.expect)(answerBlock).to.have.length(1);
          (0, _chai.expect)(answerLabel).to.have.length(1);
          (0, _chai.expect)(answerInput).to.have.length(1);

          (0, _chai.expect)(answerLabel.css('color')).to.be.equal(NO_ANSWER_GREY);

          (0, _chai.expect)(answerInput.css('color')).to.be.equal(RIGHT_ANSWER_GREEN);
          (0, _chai.expect)(answerInput.css('font-weight')).to.be.equal('bold');
          (0, _chai.expect)(answerInput.css('text-decoration')).to.contain('none');
        });

        (0, _mocha.it)('should not display the solution', function () {
          // given
          this.render(_ember.default.HTMLBars.template({
            "id": "18Tupy2D",
            "block": "{\"statements\":[[1,[33,[\"qrocm-ind-solution-panel\"],null,[[\"challenge\",\"answer\",\"solution\"],[[28,[\"challenge\"]],[28,[\"answer\"]],[28,[\"solution\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));
          var solutionBlock = this.$(FIRST_CORRECTION_BLOCK + ' ' + SOLUTION_BLOCK);

          // then
          (0, _chai.expect)(solutionBlock).to.have.length(0);
        });
      });

      (0, _mocha.describe)('wrong answer display', function () {

        (0, _mocha.it)('should display the wrong answer in the second div line-throughed bold', function () {
          // given
          this.render(_ember.default.HTMLBars.template({
            "id": "18Tupy2D",
            "block": "{\"statements\":[[1,[33,[\"qrocm-ind-solution-panel\"],null,[[\"challenge\",\"answer\",\"solution\"],[[28,[\"challenge\"]],[28,[\"answer\"]],[28,[\"solution\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));
          var answerBlock = this.$(SECOND_CORRECTION_BLOCK);
          var answerLabel = this.$(SECOND_CORRECTION_BLOCK + ' ' + LABEL);
          var answerInput = this.$(SECOND_CORRECTION_BLOCK + ' ' + INPUT);

          // then
          (0, _chai.expect)(answerBlock).to.have.length(1);
          (0, _chai.expect)(answerLabel).to.have.length(1);
          (0, _chai.expect)(answerInput).to.have.length(1);

          (0, _chai.expect)(answerInput.css('color')).to.be.equal(NO_ANSWER_GREY);
          (0, _chai.expect)(answerInput.css('font-weight')).to.be.equal('400');
          (0, _chai.expect)(answerInput.css('text-decoration')).to.contain('line-through');
        });

        (0, _mocha.it)('should display one solution in bold green below the input', function () {
          // given
          this.render(_ember.default.HTMLBars.template({
            "id": "18Tupy2D",
            "block": "{\"statements\":[[1,[33,[\"qrocm-ind-solution-panel\"],null,[[\"challenge\",\"answer\",\"solution\"],[[28,[\"challenge\"]],[28,[\"answer\"]],[28,[\"solution\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));
          var solutionBlock = this.$(SECOND_CORRECTION_BLOCK + ' ' + SOLUTION_BLOCK);
          var solutionText = this.$(SECOND_CORRECTION_BLOCK + ' ' + SOLUTION_BLOCK + ' ' + SOLUTION_TEXT);

          // then
          (0, _chai.expect)(solutionBlock).to.have.length(1);
          (0, _chai.expect)(solutionText).to.have.length(1);

          (0, _chai.expect)(solutionText.css('color')).to.be.equal(RIGHT_ANSWER_GREEN);
          (0, _chai.expect)(solutionText.css('font-weight')).to.be.equal('bold');
          (0, _chai.expect)(solutionText.css('text-decoration')).to.contain('none');
        });
      });

      (0, _mocha.describe)('no answer display', function () {

        (0, _mocha.it)('should display the empty answer in the third div with "pas de réponse" in italic', function () {
          // given
          this.render(_ember.default.HTMLBars.template({
            "id": "18Tupy2D",
            "block": "{\"statements\":[[1,[33,[\"qrocm-ind-solution-panel\"],null,[[\"challenge\",\"answer\",\"solution\"],[[28,[\"challenge\"]],[28,[\"answer\"]],[28,[\"solution\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));
          var answerBlock = this.$(THIRD_CORRECTION_BLOCK);
          var answerLabel = this.$(THIRD_CORRECTION_BLOCK + ' ' + LABEL);
          var answerInput = this.$(THIRD_CORRECTION_BLOCK + ' ' + INPUT);

          // then
          (0, _chai.expect)(answerBlock).to.have.length(1);
          (0, _chai.expect)(answerLabel).to.have.length(1);
          (0, _chai.expect)(answerInput).to.have.length(1);

          (0, _chai.expect)(answerInput.css('color')).to.be.equal(NO_ANSWER_GREY);
          (0, _chai.expect)(answerInput.css('font-weight')).to.be.equal('400');
          (0, _chai.expect)(answerInput.css('text-decoration')).to.contain('none');
        });

        (0, _mocha.it)('should display one solution in bold green below the input', function () {
          // given
          this.render(_ember.default.HTMLBars.template({
            "id": "18Tupy2D",
            "block": "{\"statements\":[[1,[33,[\"qrocm-ind-solution-panel\"],null,[[\"challenge\",\"answer\",\"solution\"],[[28,[\"challenge\"]],[28,[\"answer\"]],[28,[\"solution\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));
          var solutionBlock = this.$(THIRD_CORRECTION_BLOCK + ' ' + SOLUTION_BLOCK);
          var solutionText = this.$(THIRD_CORRECTION_BLOCK + ' ' + SOLUTION_BLOCK + ' ' + SOLUTION_TEXT);

          // then
          (0, _chai.expect)(solutionBlock).to.have.length(1);
          (0, _chai.expect)(solutionText).to.have.length(1);

          (0, _chai.expect)(solutionText.css('color')).to.be.equal(RIGHT_ANSWER_GREEN);
          (0, _chai.expect)(solutionText.css('font-weight')).to.be.equal('bold');
          (0, _chai.expect)(solutionText.css('text-decoration')).to.contain('none');
        });
      });
    });
  });
});
define('pix-live/tests/integration/components/qrocm-proposal-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | QrocmProposalComponent', function () {

    (0, _emberMocha.setupComponentTest)('qrocm-proposal', {
      integration: true
    });

    (0, _mocha.it)('renders', function () {
      this.render(Ember.HTMLBars.template({
        "id": "EAv26+Pz",
        "block": "{\"statements\":[[1,[26,[\"qrocm-proposal\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));

      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('pix-live/tests/integration/components/result-item-test', ['chai', 'ember', 'mocha', 'ember-mocha'], function (_chai, _ember, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | result item', function () {

    (0, _emberMocha.setupComponentTest)('result-item', {
      integration: true
    });

    (0, _mocha.describe)('Component rendering ', function () {

      var providedChallengeInstruction = 'Un QCM propose plusieurs choix, l\'utilisateur peut en choisir [plusieurs](http://link.plusieurs.url)';

      var emberChallengeObject = _ember.default.Object.create({
        type: 'QCM',
        instruction: providedChallengeInstruction,
        proposals: '- soit possibilite A, et/ou' + '\n - soit possibilite B, et/ou' + '\n - soit possibilite C, et/ou' + '\n - soit possibilite D'
      });

      var answer = _ember.default.Object.create({
        value: '2,4',
        result: 'ko',
        id: 1,
        challenge: emberChallengeObject,
        assessment: {
          id: 4
        }
      });

      (0, _mocha.beforeEach)(function () {
        this.set('index', 0);
      });

      (0, _mocha.it)('should exist', function () {
        // given
        this.set('answer', '');

        // when
        this.render(_ember.default.HTMLBars.template({
          "id": "f8lT9MrH",
          "block": "{\"statements\":[[1,[33,[\"result-item\"],null,[[\"answer\",\"index\"],[[28,[\"answer\"]],[28,[\"index\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$()).to.have.length(1);
      });

      (0, _mocha.it)('should render an index 1 when 0 provided', function () {
        // given
        this.set('answer', '');

        // when
        this.render(_ember.default.HTMLBars.template({
          "id": "f8lT9MrH",
          "block": "{\"statements\":[[1,[33,[\"result-item\"],null,[[\"answer\",\"index\"],[[28,[\"answer\"]],[28,[\"index\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // then
        var index = this.$('.result-item__index').text();
        (0, _chai.expect)(index.trim().replace('\n', '')).to.equal('1');
      });

      (0, _mocha.it)('should render an instruction with no empty content', function () {
        // given
        this.set('answer', '');

        // when
        this.render(_ember.default.HTMLBars.template({
          "id": "f8lT9MrH",
          "block": "{\"statements\":[[1,[33,[\"result-item\"],null,[[\"answer\",\"index\"],[[28,[\"answer\"]],[28,[\"index\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('.result-item__instruction')).to.have.lengthOf(1);
        (0, _chai.expect)(this.$('.result-item__instruction').text()).to.contain('\n');
      });

      (0, _mocha.it)('should render the challenge instruction', function () {
        // given
        this.set('answer', answer);

        // when
        this.render(_ember.default.HTMLBars.template({
          "id": "f8lT9MrH",
          "block": "{\"statements\":[[1,[33,[\"result-item\"],null,[[\"answer\",\"index\"],[[28,[\"answer\"]],[28,[\"index\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // then
        var expectedChallengeInstruction = 'Un QCM propose plusieurs choix, l\'utilisateur peut en choisir plusieur...';
        (0, _chai.expect)(this.$('.result-item__instruction').text().trim()).to.equal(expectedChallengeInstruction);
      });

      (0, _mocha.it)('should render an button when QCM', function () {
        // given
        this.set('answer', answer);

        this.render(_ember.default.HTMLBars.template({
          "id": "f8lT9MrH",
          "block": "{\"statements\":[[1,[33,[\"result-item\"],null,[[\"answer\",\"index\"],[[28,[\"answer\"]],[28,[\"index\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
        // Then
        (0, _chai.expect)(this.$('.result-item__correction__button').text().trim()).to.deep.equal('RÉPONSE');
      });

      (0, _mocha.it)('should render tooltip for the answer', function () {
        // given
        this.set('answer', answer);

        // when
        this.render(_ember.default.HTMLBars.template({
          "id": "f8lT9MrH",
          "block": "{\"statements\":[[1,[33,[\"result-item\"],null,[[\"answer\",\"index\"],[[28,[\"answer\"]],[28,[\"index\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('div[data-toggle="tooltip"]').attr('data-original-title').trim()).to.equal('Réponse incorrecte');
      });

      (0, _mocha.it)('should not render a tooltip when the answer is being retrieved', function () {
        // given
        this.set('answer', null);

        // when
        this.render(_ember.default.HTMLBars.template({
          "id": "f8lT9MrH",
          "block": "{\"statements\":[[1,[33,[\"result-item\"],null,[[\"answer\",\"index\"],[[28,[\"answer\"]],[28,[\"index\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('div[data-toggle="tooltip"]').attr('data-original-title')).to.equal(undefined);
      });

      (0, _mocha.it)('should update the tooltip when the answer is eventually retrieved', function () {
        // given
        this.set('answer', null);
        this.render(_ember.default.HTMLBars.template({
          "id": "f8lT9MrH",
          "block": "{\"statements\":[[1,[33,[\"result-item\"],null,[[\"answer\",\"index\"],[[28,[\"answer\"]],[28,[\"index\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // when
        this.set('answer', answer);

        // then
        (0, _chai.expect)(this.$('div[data-toggle="tooltip"]').attr('data-original-title').trim()).to.equal('Réponse incorrecte');
      });

      (0, _mocha.it)('should render tooltip with an image', function () {
        // given
        this.set('answer', answer);

        // when
        this.render(_ember.default.HTMLBars.template({
          "id": "f8lT9MrH",
          "block": "{\"statements\":[[1,[33,[\"result-item\"],null,[[\"answer\",\"index\"],[[28,[\"answer\"]],[28,[\"index\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // Then
        (0, _chai.expect)(this.$('result-item__icon-img'));
      });

      [{ status: 'ok' }, { status: 'ko' }, { status: 'aband' }, { status: 'partially' }, { status: 'timedout' }, { status: 'default' }].forEach(function (data) {

        (0, _mocha.it)('should display the good result icon when answer\'s result is "' + data.status + '"', function () {
          // given
          answer.set('result', data.status);
          this.set('answer', answer);

          // when
          this.render(_ember.default.HTMLBars.template({
            "id": "f8lT9MrH",
            "block": "{\"statements\":[[1,[33,[\"result-item\"],null,[[\"answer\",\"index\"],[[28,[\"answer\"]],[28,[\"index\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));

          // then
          var $icon = this.$('.result-item__icon-img');
          (0, _chai.expect)(this.$('.result-item__icon-img--' + data.status)).to.have.lengthOf(1);
          (0, _chai.expect)($icon.attr('src')).to.equal('/images/answer-validation/icon-' + data.status + '.svg');
        });
      });
    });
  });
});
define('pix-live/tests/integration/components/score-pastille-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | score pastille', function () {
    (0, _emberMocha.setupComponentTest)('score-pastille', {
      integration: true
    });

    (0, _mocha.describe)('Component rendering', function () {

      (0, _mocha.it)('should render component', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "JpjlFNjP",
          "block": "{\"statements\":[[1,[26,[\"score-pastille\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$()).to.have.length(1);
      });

      (0, _mocha.describe)('Component dashes rendering instead of zero cases:', function () {

        (0, _mocha.it)('should display two dashes, when no pixScore provided', function () {
          // when
          this.render(Ember.HTMLBars.template({
            "id": "JpjlFNjP",
            "block": "{\"statements\":[[1,[26,[\"score-pastille\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));
          // then
          (0, _chai.expect)(this.$('.score-pastille__pix-score').text().trim()).to.equal('--');
        });
      });

      (0, _mocha.it)('should display provided score in pastille', function () {
        // given
        var pixScore = '777';
        this.set('pixScore', pixScore);
        // when
        this.render(Ember.HTMLBars.template({
          "id": "czvYLqz+",
          "block": "{\"statements\":[[1,[33,[\"score-pastille\"],null,[[\"pixScore\"],[[28,[\"pixScore\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
        // then
        (0, _chai.expect)(this.$('.score-pastille__pix-score').text().trim()).to.equal(pixScore);
      });
    });
  });
});
define('pix-live/tests/integration/components/scoring-panel-tantpix-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  var COMPONENT_WRAPPER = '.scoring-panel-tantpix';

  var HEADING_ILLUSTRATION_CLASS_WRAPPER = '.tantpix-panel__illustration-container';
  var HEADING_ILLUSTRATION_CLASS = '.tantpix-panel__illustration';
  var HEADING_ILLUSTRATION_CONTENT = '';

  var HEADING_TITLE_CLASS_WRAPPER = '.tantpix-panel__title-container';
  var HEADING_TITLE_CLASS = '.tantpix-panel__title';
  var HEADING_TITLE_CONTENT = 'Tant pix !';

  var DESCRIPTION_CLASS_WRAPPER = '.tantpix-panel__description-container';
  var DESCRIPTION_CLASS = '.tantpix-panel__description';
  var DESCRIPTION_CONTENT = 'Manifestement, ce n\'est pas votre jour mais vous ferez mieux la prochaine fois.';

  var BUTTON_NEXT_CLASS_WRAPPER = '.tantpix-panel__button-container';
  var BUTTON_NEXT_CLASS = '.tantpix-panel__button';
  var BUTTON_NEXT_CONTENT = 'revenir à l\'accueil';

  (0, _mocha.describe)('Integration | Component | scoring panel tantpix', function () {
    (0, _emberMocha.setupComponentTest)('scoring-panel-tantpix', {
      integration: true
    });

    (0, _mocha.describe)('On Component rendering:', function () {
      beforeEach(function () {
        this.render(Ember.HTMLBars.template({
          "id": "d/VKRoUr",
          "block": "{\"statements\":[[1,[26,[\"scoring-panel-tantpix\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
      });

      (0, _mocha.it)('should render successfully component wrapper', function () {
        (0, _chai.expect)(this.$()).to.have.length(1);
        (0, _chai.expect)(this.$(COMPONENT_WRAPPER)).to.lengthOf(1);
      });

      (0, _mocha.describe)('wrappers rendering', function () {
        [{
          wrapperDescription: 'an illustration wrapper',
          wrapperClass: HEADING_ILLUSTRATION_CLASS_WRAPPER,
          wrapperTagName: 'div',
          wrapperLength: 1
        }, {
          wrapperDescription: 'a title wrapper',
          wrapperClass: HEADING_TITLE_CLASS_WRAPPER,
          wrapperTagName: 'div',
          wrapperLength: 1
        }, {
          wrapperDescription: 'a description wrapper',
          wrapperClass: DESCRIPTION_CLASS_WRAPPER,
          wrapperTagName: 'div',
          wrapperLength: 1
        }, {
          wrapperDescription: 'a next button wrapper',
          wrapperClass: BUTTON_NEXT_CLASS_WRAPPER,
          wrapperTagName: 'div',
          wrapperLength: 1
        }].forEach(function (_ref2) {
          var wrapperDescription = _ref2.wrapperDescription,
              wrapperClass = _ref2.wrapperClass,
              wrapperTagName = _ref2.wrapperTagName,
              wrapperLength = _ref2.wrapperLength;

          (0, _mocha.it)('should contain: ' + wrapperDescription + ' in scoring panel', function () {
            var wrapperRendered = this.$(wrapperClass);
            (0, _chai.expect)(wrapperRendered.prop('tagName').toLowerCase()).to.equal(wrapperTagName);
            (0, _chai.expect)(wrapperRendered).to.lengthOf(wrapperLength);
          });
        });
      });

      (0, _mocha.describe)('wrapped items:', function () {
        [{
          itemDescription: 'an smiley illustration img',
          itemClass: HEADING_ILLUSTRATION_CLASS,
          itemTagName: 'img',
          itemContent: HEADING_ILLUSTRATION_CONTENT
        }, {
          itemDescription: 'a title',
          itemClass: HEADING_TITLE_CLASS,
          itemTagName: 'h1',
          itemContent: HEADING_TITLE_CONTENT
        }, {
          itemDescription: 'an description',
          itemClass: DESCRIPTION_CLASS,
          itemTagName: 'p',
          itemContent: DESCRIPTION_CONTENT
        }, {
          itemDescription: 'a button go to next text',
          itemClass: BUTTON_NEXT_CLASS,
          itemTagName: 'button',
          itemContent: BUTTON_NEXT_CONTENT
        }].forEach(function (_ref3) {
          var itemDescription = _ref3.itemDescription,
              itemClass = _ref3.itemClass,
              itemTagName = _ref3.itemTagName,
              itemContent = _ref3.itemContent;

          (0, _mocha.it)('should be ' + itemDescription + ' in scoring panel', function () {
            var itemRendered = this.$(itemClass);
            (0, _chai.expect)(itemRendered.prop('tagName').toLowerCase()).to.equal(itemTagName);
            (0, _chai.expect)(itemRendered.text().trim()).to.be.equal(itemContent);
          });
        });

        (0, _mocha.it)('should return a smiley illustration which satisfy minimals accessibilities conditions', function () {
          var smiley = this.$(HEADING_ILLUSTRATION_CLASS);
          (0, _chai.expect)(smiley.attr('src')).to.includes('/images/smiley.png');
          (0, _chai.expect)(smiley.attr('srcset')).to.includes('/images/smiley@2x.png');
          (0, _chai.expect)(smiley.attr('srcset')).to.includes('/images/smiley@3x.png');
          (0, _chai.expect)(smiley.attr('alt')).to.includes('smiley');
        });
      });
    });
  });
});
define('pix-live/tests/integration/components/scoring-panel-test', ['ember', 'chai', 'mocha', 'ember-mocha'], function (_ember, _chai, _mocha, _emberMocha) {
  'use strict';

  var TANTPIX_CONTAINER_CLASS = '.scoring-panel-tantpix';

  (0, _mocha.describe)('Integration | Component | scoring panel', function () {

    (0, _emberMocha.setupComponentTest)('scoring-panel', {
      integration: true
    });

    var assessmentWithTrophy = _ember.default.Object.create({ estimatedLevel: 1, pixScore: 67, course: { isAdaptive: true } });
    var assessmentWithNoTrophyAndSomePix = _ember.default.Object.create({ estimatedLevel: 0, pixScore: 20, course: { isAdaptive: true } });
    var assessmentWithNoTrophyAndNoPix = _ember.default.Object.create({ estimatedLevel: 0, pixScore: 0, course: { isAdaptive: true } });

    (0, _mocha.it)('renders', function () {
      this.render(_ember.default.HTMLBars.template({
        "id": "WOCk/+rI",
        "block": "{\"statements\":[[1,[26,[\"scoring-panel\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });

    (0, _mocha.describe)('Default display', function () {

      (0, _mocha.beforeEach)(function () {
        this.set('assessment', assessmentWithNoTrophyAndNoPix);
        this.render(_ember.default.HTMLBars.template({
          "id": "2eDn5awa",
          "block": "{\"statements\":[[1,[33,[\"scoring-panel\"],null,[[\"assessment\"],[[28,[\"assessment\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
      });

      (0, _mocha.it)('it should not display trophy panel', function () {
        // then
        (0, _chai.expect)(this.$('.scoring-panel__trophy')).to.have.lengthOf(0);
        (0, _chai.expect)(this.$('.scoring-panel__text')).to.have.lengthOf(0);
      });

      (0, _mocha.it)('should display tantpix result, when user has no reward', function () {
        // then
        (0, _chai.expect)(this.$(TANTPIX_CONTAINER_CLASS)).to.lengthOf(1);
      });
    });

    (0, _mocha.describe)('Display a trophy when the user won a trophy', function () {

      (0, _mocha.beforeEach)(function () {
        this.set('assessment', assessmentWithTrophy);
        this.render(_ember.default.HTMLBars.template({
          "id": "2eDn5awa",
          "block": "{\"statements\":[[1,[33,[\"scoring-panel\"],null,[[\"assessment\"],[[28,[\"assessment\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
      });

      (0, _mocha.it)('should display the won trophy', function () {
        // then
        (0, _chai.expect)(this.$('.scoring-panel__reward')).to.have.lengthOf(1);
        (0, _chai.expect)(this.$('.trophy-item')).to.have.lengthOf(1);
      });

      (0, _mocha.it)('should display the congratulations', function () {
        // then
        (0, _chai.expect)(this.$('.scoring-panel__congrats-course-name')).to.have.lengthOf(1);
        (0, _chai.expect)(this.$('.scoring-panel__congrats-felicitations')).to.have.lengthOf(1);
        (0, _chai.expect)(this.$('.scoring-panel__congrats-scoring')).to.have.lengthOf(1);
        (0, _chai.expect)(this.$('.scoring-panel__congrats-beta')).to.have.lengthOf(1);
      });

      (0, _mocha.it)('should display the "back to home" button', function () {
        // then
        (0, _chai.expect)(this.$('.scoring-panel__index-link')).to.have.lengthOf(1);
        (0, _chai.expect)(this.$('.scoring-panel__index-link-back').text()).to.be.equal('REVENIR À L\'ACCUEIL');
      });
    });

    (0, _mocha.describe)('Display a medal when the user won some pix but not a trophy', function () {

      (0, _mocha.beforeEach)(function () {
        this.set('assessment', assessmentWithNoTrophyAndSomePix);
        this.render(_ember.default.HTMLBars.template({
          "id": "2eDn5awa",
          "block": "{\"statements\":[[1,[33,[\"scoring-panel\"],null,[[\"assessment\"],[[28,[\"assessment\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
      });

      (0, _mocha.it)('should display the won medal', function () {
        // then
        // then
        (0, _chai.expect)(this.$('.scoring-panel__reward')).to.have.lengthOf(1);
        (0, _chai.expect)(this.$('.medal-item')).to.have.lengthOf(1);
      });

      (0, _mocha.it)('should display the congratulations', function () {
        // then
        (0, _chai.expect)(this.$('.scoring-panel__congrats-course-name')).to.have.lengthOf(1);
        (0, _chai.expect)(this.$('.scoring-panel__congrats-pas-mal')).to.have.lengthOf(1);
        (0, _chai.expect)(this.$('.scoring-panel__congrats-scoring')).to.have.lengthOf(1);
        (0, _chai.expect)(this.$('.scoring-panel__congrats-beta')).to.have.lengthOf(1);
      });
    });

    (0, _mocha.describe)('Display the BackToHome button', function () {

      (0, _mocha.beforeEach)(function () {
        this.set('assessment', assessmentWithTrophy);
        this.render(_ember.default.HTMLBars.template({
          "id": "2eDn5awa",
          "block": "{\"statements\":[[1,[33,[\"scoring-panel\"],null,[[\"assessment\"],[[28,[\"assessment\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
      });

      (0, _mocha.it)('should not have a blue border when the user clicks on its', function () {
        // then
        (0, _chai.expect)(this.$('.scoring-panel__index-link__element').css('outline')).to.equal('rgb(255, 255, 255) none 0px');
      });
    });
  });
});
define('pix-live/tests/integration/components/signin-form-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | signin form', function () {

    (0, _emberMocha.setupComponentTest)('signin-form', {
      integration: true
    });

    var expectedEmail = 'email@example.fr';
    var expectedPassword = 'azerty';

    (0, _mocha.it)('should give email and password to action given in parameter', function (done) {
      // Expect
      this.on('onSubmitAction', function (email, password) {
        (0, _chai.expect)(email).to.equal(expectedEmail);
        (0, _chai.expect)(password).to.equal(expectedPassword);
        done();
        return Promise.resolve();
      });

      // Given
      this.render(Ember.HTMLBars.template({
        "id": "4FooPrbi",
        "block": "{\"statements\":[[1,[33,[\"signin-form\"],null,[[\"onSubmit\"],[[33,[\"action\"],[[28,[null]],\"onSubmitAction\"],null]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));

      _fillSigninForm(this, expectedEmail, expectedPassword);

      // When
      this.$('button[type=submit]').click();
    });

    (0, _mocha.it)('should also use action on submit', function (done) {
      // Expect
      this.on('onSubmitAction', function (email, password) {
        (0, _chai.expect)(email).to.equal(expectedEmail);
        (0, _chai.expect)(password).to.equal(expectedPassword);
        done();
        return Promise.resolve();
      });

      this.render(Ember.HTMLBars.template({
        "id": "4FooPrbi",
        "block": "{\"statements\":[[1,[33,[\"signin-form\"],null,[[\"onSubmit\"],[[33,[\"action\"],[[28,[null]],\"onSubmitAction\"],null]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));
      _fillSigninForm(this, expectedEmail, expectedPassword);

      // When
      this.$('.signin-form__form form').submit();
    });

    (0, _mocha.it)('should display an error', function () {
      // Expect
      this.on('onSubmitAction', function () {
        return Promise.resolve();
      });

      this.render(Ember.HTMLBars.template({
        "id": "4FooPrbi",
        "block": "{\"statements\":[[1,[33,[\"signin-form\"],null,[[\"onSubmit\"],[[33,[\"action\"],[[28,[null]],\"onSubmitAction\"],null]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));
      _fillSigninForm(this, expectedEmail, expectedPassword);

      // When
      this.$('.signin-form__form form').submit();

      // Then
      (0, _chai.expect)(this.$('.signin-form__errors')).to.have.length(0);
    });

    (0, _mocha.it)('should hide the error message if it was previously displayed', function () {
      // Expect
      this.on('onSubmitAction', function () {
        return Promise.resolve();
      });
      this.render(Ember.HTMLBars.template({
        "id": "iHC2d4zJ",
        "block": "{\"statements\":[[1,[33,[\"signin-form\"],null,[[\"onSubmit\",\"displayErrorMessage\"],[[33,[\"action\"],[[28,[null]],\"onSubmitAction\"],null],\"true\"]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));

      (0, _chai.expect)(this.$('.signin-form__errors')).to.have.length(1);
      _fillSigninForm(this, expectedEmail, expectedPassword);

      // When
      this.$('.signin-form__form form').submit();

      // Then
      (0, _chai.expect)(this.$('.signin-form__errors')).to.have.length(0);
    });

    function _fillSigninForm(context, email, password) {
      context.$('#pix-email').val(email);
      context.$('#pix-email').change();

      context.$('#pix-password').val(password);
      context.$('#pix-password').change();
    }
  });
});
define('pix-live/tests/integration/components/signup-form-test', ['chai', 'mocha', 'ember-mocha', 'ember', 'ember-test-helpers/wait'], function (_chai, _mocha, _emberMocha, _ember, _wait) {
  'use strict';

  var FORM_CONTAINER = '.signup-form-container';
  var FORM_HEADING_CONTAINER = '.signup-form__heading-container';
  var FORM_HEADING = '.signup-form__heading';
  var EXPECTED_FORM_HEADING_CONTENT = 'Inscription gratuite';

  var INPUT_TEXT_FIELD = '.signup-form__input-container';
  var INPUT_TEXT_FIELD_CLASS_DEFAULT = 'signup-textfield__input-container--default';

  var CHECKBOX_CGU_CONTAINER = '.signup-form__cgu-container';
  var CHECKBOX_CGU_INPUT = '#pix-cgu';
  var CHECKBOX_CGU_LABEL = '.signup-form__cgu-label';
  var UNCHECKED_CHECKBOX_CGU_ERROR = 'Veuillez accepter les conditions générales d\'utilisation (CGU) avant de créer un compte.';

  var CGU_LINK = '.signup__cgu-link';
  var CGU_LINK_CONTENT = 'conditions d\'​utilisation de Pix';

  var SUBMIT_BUTTON_CONTAINER = '.signup-form__submit-container';
  var SUBMIT_BUTTON = '.signup__submit-button';
  var SUBMIT_BUTTON_CONTENT = 'Je m\'inscris';

  var MESSAGE_ERROR_STATUS = 'signup-textfield__message--error';
  var EMPTY_FIRSTNAME_ERROR_MESSAGE = 'Votre prénom n’est pas renseigné.';

  var EMPTY_LASTNAME_ERROR_MESSAGE = 'Votre nom n’est pas renseigné.';
  var EMPTY_EMAIL_ERROR_MESSAGE = 'Votre email n’est pas valide.';
  var INCORRECT_PASSWORD_FORMAT_ERROR_MESSAGE = 'Votre mot de passe doit comporter au moins une lettre, un chiffre et' + ' 8 caractères.';
  var MESSAGE_SUCCESS_STATUS = 'signup-textfield__message--success';

  var ICON_ERROR_CLASS = 'signup-textfield__icon--error';
  var ICON_SUCCESS_CLASS = 'signup-textfield__icon--success';

  var userEmpty = _ember.default.Object.create({});
  var CAPTCHA_CONTAINER = '.signup-form__captcha-container';

  (0, _mocha.describe)('Integration | Component | signup form', function () {

    (0, _emberMocha.setupComponentTest)('signup-form', {
      integration: true
    });

    (0, _mocha.describe)('Rendering', function () {

      beforeEach(function () {
        this.set('user', userEmpty);
        this.render(_ember.default.HTMLBars.template({
          "id": "1MFHuc1Q",
          "block": "{\"statements\":[[1,[33,[\"signup-form\"],null,[[\"user\"],[[28,[\"user\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
      });

      (0, _mocha.it)('renders', function () {
        (0, _chai.expect)(this.$()).to.have.length(1);
      });

      (0, _mocha.it)('Should return true if heading content gets <' + EXPECTED_FORM_HEADING_CONTENT + '>', function () {
        (0, _chai.expect)(this.$(FORM_HEADING).text()).to.equal(EXPECTED_FORM_HEADING_CONTENT);
      });

      [{ expectedRendering: 'form container', input: FORM_CONTAINER, expected: 1 }, { expectedRendering: 'div to wrap heading of form', input: FORM_HEADING_CONTAINER, expected: 1 }, { expectedRendering: 'form title (h1)', input: FORM_HEADING, expected: 1 }, { expectedRendering: '4 input fields in form', input: INPUT_TEXT_FIELD, expected: 4 }, { expectedRendering: 'cgu container', input: CHECKBOX_CGU_CONTAINER, expected: 1 }, { expectedRendering: 'cgu checkbox', input: CHECKBOX_CGU_INPUT, expected: 1 }, { expectedRendering: 'cgu label', input: CHECKBOX_CGU_LABEL, expected: 1 }, { expectedRendering: 'a captcha', input: CAPTCHA_CONTAINER, expected: 1 }, { expectedRendering: 'submit button', input: SUBMIT_BUTTON_CONTAINER, expected: 1 }].forEach(function (_ref2) {
        var expectedRendering = _ref2.expectedRendering,
            input = _ref2.input,
            expected = _ref2.expected;


        (0, _mocha.it)('should render ' + expectedRendering, function () {
          (0, _chai.expect)(this.$(input)).to.have.length(expected);
        });
      });

      [{
        expectedRendering: 'cgu content link',
        input: CGU_LINK,
        expectedLength: 1,
        expectedValue: CGU_LINK_CONTENT,
        expectedType: 'a'
      }, {
        expectedRendering: 'submit content button',
        input: SUBMIT_BUTTON,
        expectedLength: 1,
        expectedValue: SUBMIT_BUTTON_CONTENT,
        expectedType: 'button'
      }].forEach(function (_ref3) {
        var expectedRendering = _ref3.expectedRendering,
            input = _ref3.input,
            expectedLength = _ref3.expectedLength,
            expectedValue = _ref3.expectedValue,
            expectedType = _ref3.expectedType;


        (0, _mocha.it)('should render a ' + expectedRendering, function () {
          (0, _chai.expect)(this.$(input)).to.have.length(expectedLength);
          (0, _chai.expect)(this.$(input).text().trim()).to.equal(expectedValue);
          (0, _chai.expect)(this.$(input).prop('nodeName')).to.equal(expectedType.toUpperCase());
        });
      });
    });

    (0, _mocha.describe)('Behaviors', function () {

      beforeEach(function () {
        this.register('component:g-recaptcha', _ember.default.Component.extend());
      });

      (0, _mocha.it)('should return true if action <Signup> is handled', function () {
        // given
        var isFormSubmitted = false;
        var user = _ember.default.Object.create({
          email: 'toto@pix.fr',
          firstName: 'Marion',
          lastName: 'Yade',
          password: 'gipix2017',
          cgu: true,

          save: function save() {
            isFormSubmitted = true;
            return _ember.default.RSVP.resolve();
          }
        });

        this.set('user', user);
        this.render(_ember.default.HTMLBars.template({
          "id": "IuLTjz0W",
          "block": "{\"statements\":[[1,[33,[\"signup-form\"],null,[[\"user\",\"signup\"],[[28,[\"user\"]],\"signup\"]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // when
        $(SUBMIT_BUTTON).click();

        // then
        return (0, _wait.default)().then(function () {
          (0, _chai.expect)(isFormSubmitted).to.be.true;
        });
      });

      (0, _mocha.describe)('Errors management', function () {

        (0, _mocha.it)('should display an error message on first name field, when field is empty and focus-out', function () {
          var _this = this;

          // given
          this.set('user', userEmpty);
          this.render(_ember.default.HTMLBars.template({
            "id": "1MFHuc1Q",
            "block": "{\"statements\":[[1,[33,[\"signup-form\"],null,[[\"user\"],[[28,[\"user\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));

          // when
          this.$('#firstName').val('');
          this.$('#firstName').trigger('focusout');

          // then
          return (0, _wait.default)().then(function () {
            var divSiblingClass = _this.$('#firstName').parent().prev().attr('class');
            var divSiblingContent = _this.$('#firstName').parent().prev('div').text();
            var iconSiblingClass = _this.$('#firstName').next('img').attr('class');
            (0, _chai.expect)(divSiblingClass).to.contain(MESSAGE_ERROR_STATUS);
            (0, _chai.expect)(divSiblingContent).to.equal(EMPTY_FIRSTNAME_ERROR_MESSAGE);
            (0, _chai.expect)(iconSiblingClass).to.contain(ICON_ERROR_CLASS);
          });
        });

        (0, _mocha.it)('should display an error message on last name field, when field is empty and focus-out', function () {
          var _this2 = this;

          // given
          this.set('user', userEmpty);
          this.render(_ember.default.HTMLBars.template({
            "id": "1MFHuc1Q",
            "block": "{\"statements\":[[1,[33,[\"signup-form\"],null,[[\"user\"],[[28,[\"user\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));

          // when
          this.$('#lastName').val('');
          this.$('#lastName').trigger('focusout');

          // then
          return (0, _wait.default)().then(function () {
            var divSiblingClass = _this2.$('#lastName').parent().prev().attr('class');
            var divSiblingContent = _this2.$('#lastName').parent().prev('div').text();
            var iconSiblingClass = _this2.$('#lastName').next('img').attr('class');
            (0, _chai.expect)(divSiblingClass).to.contain(MESSAGE_ERROR_STATUS);
            (0, _chai.expect)(divSiblingContent).to.equal(EMPTY_LASTNAME_ERROR_MESSAGE);
            (0, _chai.expect)(iconSiblingClass).to.contain(ICON_ERROR_CLASS);
          });
        });

        (0, _mocha.it)('should display an error message on email field, when field is empty and focus-out', function () {
          var _this3 = this;

          // given
          this.set('user', userEmpty);
          this.render(_ember.default.HTMLBars.template({
            "id": "1MFHuc1Q",
            "block": "{\"statements\":[[1,[33,[\"signup-form\"],null,[[\"user\"],[[28,[\"user\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));

          // when
          this.$('#email').val('');
          this.$('#email').trigger('focusout');

          // then
          return (0, _wait.default)().then(function () {
            var divSiblingClass = _this3.$('#email').parent().prev().attr('class');
            var divSiblingContent = _this3.$('#email').parent().prev('div').text();
            var iconSiblingClass = _this3.$('#email').next('img').attr('class');
            (0, _chai.expect)(divSiblingClass).to.contain(MESSAGE_ERROR_STATUS);
            (0, _chai.expect)(divSiblingContent).to.equal(EMPTY_EMAIL_ERROR_MESSAGE);
            (0, _chai.expect)(iconSiblingClass).to.contain(ICON_ERROR_CLASS);
          });
        });

        (0, _mocha.it)('should display an error message on password field, when field is empty and focus-out', function () {
          var _this4 = this;

          // given
          this.set('user', userEmpty);
          this.render(_ember.default.HTMLBars.template({
            "id": "1MFHuc1Q",
            "block": "{\"statements\":[[1,[33,[\"signup-form\"],null,[[\"user\"],[[28,[\"user\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));

          // when
          this.$('#password').val('');
          this.$('#password').trigger('focusout');

          // then
          return (0, _wait.default)().then(function () {
            var divSiblingClass = _this4.$('#password').parent().prev().attr('class');
            var divSiblingContent = _this4.$('#password').parent().prev('div').text();
            var iconSiblingClass = _this4.$('#password').next('img').attr('class');
            (0, _chai.expect)(divSiblingClass).to.contain(MESSAGE_ERROR_STATUS);
            (0, _chai.expect)(divSiblingContent).to.equal(INCORRECT_PASSWORD_FORMAT_ERROR_MESSAGE);
            (0, _chai.expect)(iconSiblingClass).to.contain(ICON_ERROR_CLASS);
          });
        });

        (0, _mocha.it)('should display an error message on cgu field, when cgu isn\'t accepted and form is submitted', function () {
          var _this5 = this;

          // given
          var userWithCguNotAccepted = _ember.default.Object.create({
            cgu: false,
            errors: {
              content: [{
                attribute: 'cgu',
                message: UNCHECKED_CHECKBOX_CGU_ERROR
              }],
              cgu: [{
                message: UNCHECKED_CHECKBOX_CGU_ERROR
              }]
            },
            save: function save() {
              return new _ember.default.RSVP.reject();
            }
          });

          this.set('user', userWithCguNotAccepted);
          this.render(_ember.default.HTMLBars.template({
            "id": "1MFHuc1Q",
            "block": "{\"statements\":[[1,[33,[\"signup-form\"],null,[[\"user\"],[[28,[\"user\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));

          // when
          this.$('.signup__submit-button').click();
          // then
          return (0, _wait.default)().then(function () {
            var cguErrorMessageContent = _this5.$(CHECKBOX_CGU_INPUT).parent().siblings('div').text();
            (0, _chai.expect)(cguErrorMessageContent.trim()).to.equal(UNCHECKED_CHECKBOX_CGU_ERROR);
          });
        });

        (0, _mocha.it)('should not display success notification message when an error occurred during the form submission', function () {
          var _this6 = this;

          var userThatThrowAnErrorDuringSaving = _ember.default.Object.create({
            errors: {
              content: [{
                attribute: 'email',
                message: 'An error concerning the email thrown by the API'
              }]
            },
            save: function save() {
              return new _ember.default.RSVP.reject();
            }
          });

          this.set('user', userThatThrowAnErrorDuringSaving);
          this.render(_ember.default.HTMLBars.template({
            "id": "1MFHuc1Q",
            "block": "{\"statements\":[[1,[33,[\"signup-form\"],null,[[\"user\"],[[28,[\"user\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));

          // when
          this.$('.signup__submit-button').click();
          // then
          return (0, _wait.default)().then(function () {
            (0, _chai.expect)(_this6.$('.signup-form__notification-message')).to.have.lengthOf(0);
          });
        });

        (0, _mocha.it)('should display an error message on form title, when user has not checked re-captcha', function () {
          var _this7 = this;

          // given
          var UNCHECKED_CHECKBOX_RECAPTCHA_ERROR = 'Veuillez cocher le recaptcha.';
          var userWithCaptchaNotValid = _ember.default.Object.create({
            cgu: true,
            recaptchaToken: null,
            errors: {
              content: [{
                attribute: 'recaptchaToken',
                message: UNCHECKED_CHECKBOX_RECAPTCHA_ERROR
              }],
              recaptchaToken: [{
                message: UNCHECKED_CHECKBOX_RECAPTCHA_ERROR
              }]
            },
            save: function save() {
              return new _ember.default.RSVP.reject();
            }
          });

          this.set('user', userWithCaptchaNotValid);
          this.render(_ember.default.HTMLBars.template({
            "id": "1MFHuc1Q",
            "block": "{\"statements\":[[1,[33,[\"signup-form\"],null,[[\"user\"],[[28,[\"user\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));

          // when
          this.$('.signup__submit-button').click();
          // then
          return (0, _wait.default)().then(function () {
            (0, _chai.expect)(_this7.$('.signup-field__recaptcha-message--error')).to.have.lengthOf(1);
          });
        });
      });

      (0, _mocha.describe)('Successfull cases', function () {

        (0, _mocha.it)('should display first name field as validated without error message, when field is filled and focus-out', function () {
          var _this8 = this;

          // given
          this.set('user', userEmpty);
          this.render(_ember.default.HTMLBars.template({
            "id": "1MFHuc1Q",
            "block": "{\"statements\":[[1,[33,[\"signup-form\"],null,[[\"user\"],[[28,[\"user\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));

          // when
          this.$('#firstName').val('pix');
          this.$('#firstName').trigger('focusout');

          // then
          return (0, _wait.default)().then(function () {
            var divSiblingClass = _this8.$('#firstName').parent().prev().attr('class');
            var divSiblingContent = _this8.$('#firstName').parent().prev('div').text();
            var iconSiblingClass = _this8.$('#firstName').next('img').attr('class');
            (0, _chai.expect)(divSiblingClass).to.contain(MESSAGE_SUCCESS_STATUS);
            (0, _chai.expect)(divSiblingContent).to.equal('');
            (0, _chai.expect)(iconSiblingClass).to.contain(ICON_SUCCESS_CLASS);
          });
        });

        (0, _mocha.it)('should display last name field as validated without error message, when field is filled and focus-out', function () {
          var _this9 = this;

          // given
          this.set('user', userEmpty);
          this.render(_ember.default.HTMLBars.template({
            "id": "1MFHuc1Q",
            "block": "{\"statements\":[[1,[33,[\"signup-form\"],null,[[\"user\"],[[28,[\"user\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));

          // when
          this.$('#lastName').val('pix');
          this.$('#lastName').trigger('focusout');

          // then
          return (0, _wait.default)().then(function () {
            var divSiblingClass = _this9.$('#lastName').parent().prev().attr('class');
            var divSiblingContent = _this9.$('#lastName').parent().prev('div').text();
            var iconSiblingClass = _this9.$('#lastName').next('img').attr('class');
            (0, _chai.expect)(divSiblingClass).to.contain(MESSAGE_SUCCESS_STATUS);
            (0, _chai.expect)(divSiblingContent).to.equal('');
            (0, _chai.expect)(iconSiblingClass).to.contain(ICON_SUCCESS_CLASS);
          });
        });

        (0, _mocha.it)('should display email field as validated without error message, when field is filled and focus-out', function () {
          var _this10 = this;

          // given
          this.set('user', userEmpty);
          this.render(_ember.default.HTMLBars.template({
            "id": "1MFHuc1Q",
            "block": "{\"statements\":[[1,[33,[\"signup-form\"],null,[[\"user\"],[[28,[\"user\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));

          // when
          this.$('#email').val('shi@fu.pix');
          this.$('#email').trigger('focusout');

          // then
          return (0, _wait.default)().then(function () {
            var divSiblingClass = _this10.$('#email').parent().prev().attr('class');
            var divSiblingContent = _this10.$('#email').parent().prev('div').text();
            var iconSiblingClass = _this10.$('#email').next('img').attr('class');
            (0, _chai.expect)(divSiblingClass).to.contain(MESSAGE_SUCCESS_STATUS);
            (0, _chai.expect)(divSiblingContent).to.equal('');
            (0, _chai.expect)(iconSiblingClass).to.contain(ICON_SUCCESS_CLASS);
          });
        });

        (0, _mocha.it)('should display password field as validated without error message, when field is filled and focus-out', function () {
          var _this11 = this;

          // given
          this.set('user', userEmpty);
          this.render(_ember.default.HTMLBars.template({
            "id": "1MFHuc1Q",
            "block": "{\"statements\":[[1,[33,[\"signup-form\"],null,[[\"user\"],[[28,[\"user\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));

          // when
          this.$('#password').val('mypassword1');
          this.$('#password').trigger('focusout');

          // then
          return (0, _wait.default)().then(function () {
            var divSiblingClass = _this11.$('#password').parent().prev().attr('class');
            var divSiblingContent = _this11.$('#password').parent().prev('div').text();
            var iconSiblingClass = _this11.$('#password').next('img').attr('class');
            (0, _chai.expect)(divSiblingClass).to.contain(MESSAGE_SUCCESS_STATUS);
            (0, _chai.expect)(divSiblingContent).to.equal('');
            (0, _chai.expect)(iconSiblingClass).to.contain(ICON_SUCCESS_CLASS);
          });
        });

        (0, _mocha.it)('should not display an error message on cgu field, when cgu is accepted and form is submitted', function () {
          var _this12 = this;

          // given
          var userWithCguAccepted = _ember.default.Object.create({
            cgu: true,

            save: function save() {
              return new _ember.default.RSVP.resolve();
            }
          });

          this.set('user', userWithCguAccepted);
          this.render(_ember.default.HTMLBars.template({
            "id": "1MFHuc1Q",
            "block": "{\"statements\":[[1,[33,[\"signup-form\"],null,[[\"user\"],[[28,[\"user\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));

          // when
          this.$('.signup__submit-button').click();
          // then
          return (0, _wait.default)().then(function () {
            var cguErrorMessageContent = _this12.$(CHECKBOX_CGU_INPUT).parent().siblings('div').text();
            (0, _chai.expect)(cguErrorMessageContent).to.equal('');
          });
        });

        (0, _mocha.it)('should display an success message on form title, when all things are ok and form is submited', function () {
          var _this13 = this;

          // given
          var validUser = _ember.default.Object.create({
            email: 'toto@pix.fr',
            firstName: 'Marion',
            lastName: 'Yade',
            password: 'gipix2017',
            cgu: true,

            save: function save() {
              return new _ember.default.RSVP.resolve();
            }
          });

          this.set('user', validUser);
          this.render(_ember.default.HTMLBars.template({
            "id": "1MFHuc1Q",
            "block": "{\"statements\":[[1,[33,[\"signup-form\"],null,[[\"user\"],[[28,[\"user\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));

          // when
          this.$('.signup__submit-button').click();
          // then
          return (0, _wait.default)().then(function () {
            var $notificationMessage = _this13.$('.signup-form__notification-message').text();
            (0, _chai.expect)($notificationMessage.trim()).to.equal('Votre compte a bien été créé !');
          });
        });

        (0, _mocha.it)('should reset validation property, when all things are ok and form is submitted', function () {
          var _this14 = this;

          // given
          var validUser = _ember.default.Object.create({
            email: 'toto@pix.fr',
            firstName: 'Marion',
            lastName: 'Yade',
            password: 'gipix2017',
            cgu: true,

            save: function save() {
              return new _ember.default.RSVP.resolve();
            }
          });

          this.set('user', validUser);
          this.render(_ember.default.HTMLBars.template({
            "id": "1MFHuc1Q",
            "block": "{\"statements\":[[1,[33,[\"signup-form\"],null,[[\"user\"],[[28,[\"user\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));

          // when
          this.$('.signup__submit-button').click();

          // then
          return (0, _wait.default)().then(function () {
            var inputFirst = _this14.$('.signup-textfield__input-field-container').first();
            (0, _chai.expect)(inputFirst.prop('class')).to.includes(INPUT_TEXT_FIELD_CLASS_DEFAULT);
          });
        });
      });

      (0, _mocha.describe)('Accessibility', function () {

        (0, _mocha.it)('should render an accessible notification message when the account was successfully created', function () {
          var _this15 = this;

          // given
          var user = _ember.default.Object.create({
            save: function save() {
              return _ember.default.RSVP.resolve();
            }
          });

          this.set('user', user);
          this.render(_ember.default.HTMLBars.template({
            "id": "IuLTjz0W",
            "block": "{\"statements\":[[1,[33,[\"signup-form\"],null,[[\"user\",\"signup\"],[[28,[\"user\"]],\"signup\"]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));

          // when
          $(SUBMIT_BUTTON).click();

          // then
          return (0, _wait.default)().then(function () {

            var $notificationMessage = _this15.$('.signup-form__notification-message');
            (0, _chai.expect)($notificationMessage.attr('aria-live')).to.equal('polite');
          });
        });
      });
    });
  });
});
define('pix-live/tests/integration/components/signup-textfield-test', ['chai', 'mocha', 'ember-mocha', 'ember-test-helpers/wait'], function (_chai, _mocha, _emberMocha, _wait) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | signup textfield', function () {
    (0, _emberMocha.setupComponentTest)('signup-textfield', {
      integration: true
    });

    var LABEL = '.signup-textfield__label';
    var LABEL_TEXT = 'NOM';

    var MESSAGE = '.signup-textfield__message';
    var MESSAGE_ERROR_STATUS = 'signup-textfield__message--error';
    var MESSAGE_SUCCESS_STATUS = 'signup-textfield__message--success';
    var MESSAGE_TEXT = '';

    var INPUT = '.signup-textfield__input';
    var INPUT_DEFAULT_CLASS = 'signup-textfield__input--default';
    var INPUT_SUCCESS_CLASS = 'signup-textfield__input--success';
    var INPUT_ERROR_CLASS = 'signup-textfield__input--error';

    (0, _mocha.describe)('#Component rendering', function () {
      beforeEach(function () {
        this.set('label', 'nom');
        this.set('validationStatus', '');
        this.set('textfieldName', 'firstname');

        // When
        this.render(Ember.HTMLBars.template({
          "id": "nwMIYuK3",
          "block": "{\"statements\":[[1,[33,[\"signup-textfield\"],null,[[\"label\",\"validationStatus\",\"textfieldName\"],[[28,[\"label\"]],[28,[\"validationStatus\"]],[28,[\"textfieldName\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
      });

      [{ expectedRendering: 'label', item: LABEL, expectedLength: 1 }, { expectedRendering: 'div', item: MESSAGE, expectedLength: 1 }, { expectedRendering: 'input', item: INPUT, expectedLength: 1 }, { expectedRendering: 'div', item: '', expectedLength: 1 }].forEach(function (_ref2) {
        var expectedRendering = _ref2.expectedRendering,
            item = _ref2.item,
            expectedLength = _ref2.expectedLength;

        (0, _mocha.it)('Should render a ' + expectedRendering, function () {
          // Then
          (0, _chai.expect)(this.$(item)).to.have.length(expectedLength);
          (0, _chai.expect)(this.$(item).prop('nodeName')).to.equal(expectedRendering.toUpperCase());
        });
      });

      [{ item: LABEL, expectedRendering: 'label', expectedText: LABEL_TEXT }, { item: MESSAGE, expectedRendering: 'div.message', expectedText: MESSAGE_TEXT }].forEach(function (_ref3) {
        var item = _ref3.item,
            expectedRendering = _ref3.expectedRendering,
            expectedText = _ref3.expectedText;

        (0, _mocha.it)('Should render a ' + expectedRendering, function () {
          // Then
          (0, _chai.expect)(this.$(item).text().toUpperCase()).to.equal(expectedText);
        });
      });
    });

    //behavior
    (0, _mocha.describe)('#Component Interactions', function () {

      (0, _mocha.it)('should handle action <validate> when input lost focus', function () {
        // given
        var isActionValidateHandled = false;
        var inputValueToValidate = void 0;
        var expectedInputValue = 'firstname';

        this.on('validate', function (arg) {
          isActionValidateHandled = true;
          inputValueToValidate = arg;
        });

        this.set('label', 'nom');
        this.set('validationStatus', '');
        this.set('textfieldName', 'firstname');

        this.render(Ember.HTMLBars.template({
          "id": "oQooY6uX",
          "block": "{\"statements\":[[1,[33,[\"signup-textfield\"],null,[[\"label\",\"validationStatus\",\"textfieldName\",\"validate\"],[[28,[\"label\"]],[28,[\"validationStatus\"]],[28,[\"textfieldName\"]],\"validate\"]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
        // when
        this.$(INPUT).val('pix');
        this.$(INPUT).trigger('focusout');
        // then
        return (0, _wait.default)().then(function () {
          (0, _chai.expect)(isActionValidateHandled).to.be.true;
          (0, _chai.expect)(inputValueToValidate).to.deep.equal(expectedInputValue);
        });
      });

      (0, _mocha.describe)('#When validationStatus gets "default", Component should ', function () {
        beforeEach(function () {
          this.set('label', 'nom');
          this.set('validationStatus', 'default');
          this.set('textfieldName', 'firstname');
          this.set('validationMessage', '');

          // When
          this.render(Ember.HTMLBars.template({
            "id": "lfWgRj6S",
            "block": "{\"statements\":[[1,[33,[\"signup-textfield\"],null,[[\"label\",\"validationStatus\",\"validationMessage\",\"textfieldName\"],[[28,[\"label\"]],[28,[\"validationStatus\"]],[28,[\"validationMessage\"]],[28,[\"textfieldName\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
            "meta": {}
          }));
        });

        (0, _mocha.it)('return true if any svg doesn\'t exist', function () {
          // then
          (0, _chai.expect)(this.$('img')).to.have.length(0);
        });

        (0, _mocha.it)('contain an input with an additional class ' + INPUT_DEFAULT_CLASS, function () {
          var input = this.$(INPUT);
          // then
          (0, _chai.expect)(input.attr('class')).to.contain(INPUT_DEFAULT_CLASS);
          (0, _chai.expect)(input.val()).to.contain('');
        });

        (0, _mocha.it)('should not show a div for message validation status  when validationStatus is default', function () {
          // then
          (0, _chai.expect)(this.$(MESSAGE)).to.lengthOf(0);
        });
      });
    });

    (0, _mocha.describe)('#When validationStatus gets "error", Component should ', function () {
      beforeEach(function () {
        this.set('label', 'nom');
        this.set('validationStatus', 'error');
        this.set('textfieldName', 'firstname');

        // When
        this.render(Ember.HTMLBars.template({
          "id": "lfWgRj6S",
          "block": "{\"statements\":[[1,[33,[\"signup-textfield\"],null,[[\"label\",\"validationStatus\",\"validationMessage\",\"textfieldName\"],[[28,[\"label\"]],[28,[\"validationStatus\"]],[28,[\"validationMessage\"]],[28,[\"textfieldName\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
        this.set('validationMessage', '');
      });

      (0, _mocha.it)('return true if any img does exist', function () {
        var _this = this;

        // then
        return (0, _wait.default)().then(function () {
          (0, _chai.expect)(_this.$('img')).to.have.length(1);
          (0, _chai.expect)(_this.$('img').attr('class')).to.contain('signup-textfield__icon--error');
        });
      });

      [{ item: 'Input', itemSelector: INPUT, expectedClass: INPUT_ERROR_CLASS }, { item: 'Div for message validation status', itemSelector: MESSAGE, expectedClass: MESSAGE_ERROR_STATUS }].forEach(function (_ref4) {
        var item = _ref4.item,
            itemSelector = _ref4.itemSelector,
            expectedClass = _ref4.expectedClass;

        (0, _mocha.it)('contain an ' + item + ' with an additional class ' + expectedClass, function () {
          // then
          (0, _chai.expect)(this.$(itemSelector).attr('class')).to.contain(expectedClass);
        });
      });
    });

    (0, _mocha.describe)('#When validationStatus gets "success", Component should ', function () {
      beforeEach(function () {
        this.set('label', 'nom');
        this.set('validationStatus', 'success');
        this.set('validationMessage', '');
        this.set('textfieldName', 'firstname');

        // When
        this.render(Ember.HTMLBars.template({
          "id": "lfWgRj6S",
          "block": "{\"statements\":[[1,[33,[\"signup-textfield\"],null,[[\"label\",\"validationStatus\",\"validationMessage\",\"textfieldName\"],[[28,[\"label\"]],[28,[\"validationStatus\"]],[28,[\"validationMessage\"]],[28,[\"textfieldName\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));
      });

      (0, _mocha.it)('return true if any img does exist', function () {
        // then
        (0, _chai.expect)(this.$('img')).to.have.length(1);
        (0, _chai.expect)(this.$('img').attr('class')).to.contain('signup-textfield__icon--success');
      });

      [{ item: 'Input', itemSelector: INPUT, expectedClass: INPUT_SUCCESS_CLASS }, { item: 'Div for message validation status', itemSelector: MESSAGE, expectedClass: MESSAGE_SUCCESS_STATUS }].forEach(function (_ref5) {
        var item = _ref5.item,
            itemSelector = _ref5.itemSelector,
            expectedClass = _ref5.expectedClass;

        (0, _mocha.it)('contain an ' + item + ' with an additional class ' + expectedClass, function () {
          // then
          (0, _chai.expect)(this.$(itemSelector).attr('class')).to.contain(expectedClass);
        });
      });
    });
  });
});
define('pix-live/tests/integration/components/timeout-jauge-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

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
          "id": "l29hgisL",
          "block": "{\"statements\":[[1,[26,[\"timeout-jauge\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('.timeout-jauge')).to.have.lengthOf(1);
      });

      (0, _mocha.it)('It renders a red clock if time is over', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "8Nzygbqf",
          "block": "{\"statements\":[[1,[33,[\"timeout-jauge\"],null,[[\"allotedTime\"],[0]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('.svg-timeout-clock-black')).to.have.lengthOf(0);
        (0, _chai.expect)(this.$('.svg-timeout-clock-red')).to.have.lengthOf(1);
      });

      (0, _mocha.it)('It renders a black clock if time is not over', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "5n8R0sRB",
          "block": "{\"statements\":[[1,[33,[\"timeout-jauge\"],null,[[\"allotedTime\"],[1]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('.svg-timeout-clock-red')).to.have.lengthOf(0);
        (0, _chai.expect)(this.$('.svg-timeout-clock-black')).to.have.lengthOf(1);
      });
    });
  });
});
define('pix-live/tests/integration/components/trophy-item-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | trophy item', function () {
    (0, _emberMocha.setupComponentTest)('trophy-item', {
      integration: true
    });

    (0, _mocha.it)('renders', function () {
      this.render(Ember.HTMLBars.template({
        "id": "RCgefSjA",
        "block": "{\"statements\":[[1,[26,[\"trophy-item\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });

    (0, _mocha.it)('should contain the level passed in the component', function () {
      // given
      var level = 3;
      this.set('level', level);

      // when
      this.render(Ember.HTMLBars.template({
        "id": "QluA48OP",
        "block": "{\"statements\":[[1,[33,[\"trophy-item\"],null,[[\"level\"],[[28,[\"level\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));

      // then
      (0, _chai.expect)(this.$('.trophy-item__level').text()).to.contain(level.toString());
    });

    (0, _mocha.it)('should contain an image of a trophy with the text "NIVEAU"', function () {
      // when
      this.render(Ember.HTMLBars.template({
        "id": "RCgefSjA",
        "block": "{\"statements\":[[1,[26,[\"trophy-item\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
        "meta": {}
      }));

      // then
      (0, _chai.expect)(this.$('.trophy-item__img').length).to.equal(1);
      (0, _chai.expect)(this.$('.trophy-item__level').text()).to.contain('NIVEAU');
    });
  });
});
define('pix-live/tests/test-helper', ['pix-live/tests/helpers/resolver', 'ember-mocha', 'mocha'], function (_resolver, _emberMocha, _mocha) {
  'use strict';

  _mocha.mocha.setup({
    // If a test is randomly killed by the timeout duration,
    // consider this before increasing the timeout:
    //
    // - Computers are fast. 1,5s is a long time, even for an acceptance test.
    //   Why is this test so slow?
    //
    // - Can you make the test faster, rather than increasing the timeout?
    //
    // - The acceptance test runner waits for all network requests, delayed actions,
    //   run-loop delays and Promises to be revolved before continuing to the next step.
    //   Is any code triggering an artifical delay in tests – like `setTimeout` or `Ember.run.later`?
    timeout: 1500,
    slow: 500
  });

  (0, _emberMocha.setResolver)(_resolver.default);
});
define('pix-live/tests/tests.lint-test', [], function () {
  'use strict';

  describe('ESLint | tests', function () {

    it('acceptance/a1-page-accueil-test.js', function () {
      // test passed
    });

    it('acceptance/a4-demarrer-un-test-test.js', function () {
      // test passed
    });

    it('acceptance/a5-voir-liste-tests-adaptatifs-test.js', function () {
      // test passed
    });

    it('acceptance/b1-epreuve-qcu-test.js', function () {
      // test passed
    });

    it('acceptance/b2-epreuve-qcm-test.js', function () {
      // test passed
    });

    it('acceptance/b3-epreuve-qroc-test.js', function () {
      // test passed
    });

    it('acceptance/b4-epreuve-qrocm-test.js', function () {
      // test passed
    });

    it('acceptance/b6-epreuve-pj-test.js', function () {
      // test passed
    });

    it('acceptance/b7-epreuve-points-communs-test.js', function () {
      // test passed
    });

    it('acceptance/c1-recapitulatif-test.js', function () {
      // test passed
    });

    it('acceptance/course-groups-test.js', function () {
      // test passed
    });

    it('acceptance/d1-epreuve-validation-test.js', function () {
      // test passed
    });

    it('acceptance/f1-previsualisation-test-test.js', function () {
      // test passed
    });

    it('acceptance/g1-bandeau-no-internet-no-outils-test.js', function () {
      // test passed
    });

    it('acceptance/h1-timeout-jauge-test.js', function () {
      // test passed
    });

    it('acceptance/h2-page-warning-timee-test.js', function () {
      // test passed
    });

    it('acceptance/j1-compare-answer-solution-test.js', function () {
      // test passed
    });

    it('acceptance/j2-compare-answer-solution-qroc-test.js', function () {
      // test passed
    });

    it('acceptance/k1-competences-page-test.js', function () {
      // test passed
    });

    it('acceptance/l1-signaler-une-epreuve-test.js', function () {
      // test passed
    });

    it('acceptance/m1-authentication-and-profile-test.js', function () {
      // test passed
    });

    it('acceptance/n1-competence-profile-test.js', function () {
      // test passed
    });

    it('helpers/destroy-app.js', function () {
      // test passed
    });

    it('helpers/module-for-acceptance.js', function () {
      // test passed
    });

    it('helpers/resolver.js', function () {
      // test passed
    });

    it('helpers/start-app.js', function () {
      // test passed
    });

    it('integration/components/challenge-actions-test.js', function () {
      // test passed
    });

    it('integration/components/challenge-statement-test.js', function () {
      // test passed
    });

    it('integration/components/challenge-stay-test.js', function () {
      // test passed
    });

    it('integration/components/comparison-window-test.js', function () {
      // test passed
    });

    it('integration/components/competence-area-list-test.js', function () {
      // test passed
    });

    it('integration/components/competence-by-area-item-test.js', function () {
      // test passed
    });

    it('integration/components/competence-level-progress-bar-test.js', function () {
      // test passed
    });

    it('integration/components/corner-ribbon-test.js', function () {
      // test passed
    });

    it('integration/components/course-item-test.js', function () {
      // test passed
    });

    it('integration/components/course-list-test.js', function () {
      // test passed
    });

    it('integration/components/feature-item-test.js', function () {
      // test passed
    });

    it('integration/components/feature-list-test.js', function () {
      // test passed
    });

    it('integration/components/feedback-panel-test.js', function () {
      // test passed
    });

    it('integration/components/follower-form-test.js', function () {
      // test passed
    });

    it('integration/components/g-recaptcha-test.js', function () {
      // test passed
    });

    it('integration/components/medal-item-test.js', function () {
      // test passed
    });

    it('integration/components/modal-mobile-test.js', function () {
      // test passed
    });

    it('integration/components/navbar-header-test.js', function () {
      // test passed
    });

    it('integration/components/pix-logo-test.js', function () {
      // test passed
    });

    it('integration/components/profile-panel-test.js', function () {
      // test passed
    });

    it('integration/components/qcm-proposals-test.js', function () {
      // test passed
    });

    it('integration/components/qcm-solution-panel-test.js', function () {
      // test passed
    });

    it('integration/components/qcu-proposals-test.js', function () {
      // test passed
    });

    it('integration/components/qcu-solution-panel-test.js', function () {
      // test passed
    });

    it('integration/components/qroc-proposal-test.js', function () {
      // test passed
    });

    it('integration/components/qroc-solution-panel-test.js', function () {
      // test passed
    });

    it('integration/components/qrocm-ind-solution-panel-test.js', function () {
      // test passed
    });

    it('integration/components/qrocm-proposal-test.js', function () {
      // test passed
    });

    it('integration/components/result-item-test.js', function () {
      // test passed
    });

    it('integration/components/score-pastille-test.js', function () {
      // test passed
    });

    it('integration/components/scoring-panel-tantpix-test.js', function () {
      // test passed
    });

    it('integration/components/scoring-panel-test.js', function () {
      // test passed
    });

    it('integration/components/signin-form-test.js', function () {
      // test passed
    });

    it('integration/components/signup-form-test.js', function () {
      // test passed
    });

    it('integration/components/signup-textfield-test.js', function () {
      // test passed
    });

    it('integration/components/timeout-jauge-test.js', function () {
      // test passed
    });

    it('integration/components/trophy-item-test.js', function () {
      // test passed
    });

    it('test-helper.js', function () {
      // test passed
    });

    it('unit/adapters/application-test.js', function () {
      // test passed
    });

    it('unit/adapters/solution-test.js', function () {
      // test passed
    });

    it('unit/adapters/user-test.js', function () {
      // test passed
    });

    it('unit/authenticators/simple-test.js', function () {
      // test passed
    });

    it('unit/components/comparison-window-test.js', function () {
      // test passed
    });

    it('unit/components/competence-area-list-test.js', function () {
      // test passed
    });

    it('unit/components/competence-by-area-item-test.js', function () {
      // test passed
    });

    it('unit/components/competence-level-progress-bar-test.js', function () {
      // test passed
    });

    it('unit/components/course-item-test.js', function () {
      // test passed
    });

    it('unit/components/course-list-test.js', function () {
      // test passed
    });

    it('unit/components/feedback-panel-test.js', function () {
      // test passed
    });

    it('unit/components/follower-form-test.js', function () {
      // test passed
    });

    it('unit/components/g-recaptcha-test.js', function () {
      // test passed
    });

    it('unit/components/navbar-header-test.js', function () {
      // test passed
    });

    it('unit/components/qcu-proposals-test.js', function () {
      // test passed
    });

    it('unit/components/qroc-solution-panel-test.js', function () {
      // test passed
    });

    it('unit/components/qrocm-ind-solution-panel-test.js', function () {
      // test passed
    });

    it('unit/components/result-item-test.js', function () {
      // test passed
    });

    it('unit/components/score-pastille-test.js', function () {
      // test passed
    });

    it('unit/components/scoring-panel-test.js', function () {
      // test passed
    });

    it('unit/components/signup-textfield-test.js', function () {
      // test passed
    });

    it('unit/components/timeout-jauge-test.js', function () {
      // test passed
    });

    it('unit/components/warning-time-page-test.js', function () {
      // test passed
    });

    it('unit/helpers/convert-to-html-test.js', function () {
      // test passed
    });

    it('unit/helpers/eq-test.js', function () {
      // test passed
    });

    it('unit/helpers/extract-extension-test.js', function () {
      // test passed
    });

    it('unit/helpers/get-challenge-component-class-test.js', function () {
      // test passed
    });

    it('unit/helpers/or-test.js', function () {
      // test passed
    });

    it('unit/helpers/strip-instruction-test.js', function () {
      // test passed
    });

    it('unit/models/answer-test.js', function () {
      // test passed
    });

    it('unit/models/area-test.js', function () {
      // test passed
    });

    it('unit/models/challenge-test.js', function () {
      // test passed
    });

    it('unit/models/competence-test.js', function () {
      // test passed
    });

    it('unit/models/course-group-test.js', function () {
      // test passed
    });

    it('unit/models/course-test.js', function () {
      // test passed
    });

    it('unit/models/feedback-test.js', function () {
      // test passed
    });

    it('unit/models/follower-test.js', function () {
      // test passed
    });

    it('unit/models/user-test.js', function () {
      // test passed
    });

    it('unit/routes/application-test.js', function () {
      // test passed
    });

    it('unit/routes/assessments/get-challenge-test.js', function () {
      // test passed
    });

    it('unit/routes/assessments/get-results-test.js', function () {
      // test passed
    });

    it('unit/routes/challenges/get-preview-test.js', function () {
      // test passed
    });

    it('unit/routes/competences-test.js', function () {
      // test passed
    });

    it('unit/routes/compte-test.js', function () {
      // test passed
    });

    it('unit/routes/courses-test.js', function () {
      // test passed
    });

    it('unit/routes/courses/get-challenge-preview-test.js', function () {
      // test passed
    });

    it('unit/routes/courses/get-course-preview-test.js', function () {
      // test passed
    });

    it('unit/routes/index-test.js', function () {
      // test passed
    });

    it('unit/routes/inscription-test.js', function () {
      // test passed
    });

    it('unit/routes/login-test.js', function () {
      // test passed
    });

    it('unit/routes/logout-test.js', function () {
      // test passed
    });

    it('unit/routes/placement-tests-test.js', function () {
      // test passed
    });

    it('unit/routes/project-test.js', function () {
      // test passed
    });

    it('unit/routes/series-test.js', function () {
      // test passed
    });

    it('unit/services/assessment-test.js', function () {
      // test passed
    });

    it('unit/services/delay-test.js', function () {
      // test passed
    });

    it('unit/services/splash-test.js', function () {
      // test passed
    });

    it('unit/transforms/array-test.js', function () {
      // test passed
    });

    it('unit/utils/answers-as-object-test.js', function () {
      // test passed
    });

    it('unit/utils/email-validator-test.js', function () {
      // test passed
    });

    it('unit/utils/labeled-checkboxes-test.js', function () {
      // test passed
    });

    it('unit/utils/labels-as-object-test.js', function () {
      // test passed
    });

    it('unit/utils/lodash-custom-test.js', function () {
      // test passed
    });

    it('unit/utils/password-validator-test.js', function () {
      // test passed
    });

    it('unit/utils/proposals-as-array-test.js', function () {
      // test passed
    });

    it('unit/utils/proposals-as-blocks-test.js', function () {
      // test passed
    });

    it('unit/utils/result-details-as-object-test.js', function () {
      // test passed
    });

    it('unit/utils/solution-as-object-test.js', function () {
      // test passed
    });

    it('unit/utils/value-as-array-of-boolean-test.js', function () {
      // test passed
    });
  });
});
define('pix-live/tests/unit/adapters/application-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Route | subscribers', function () {
    (0, _emberMocha.setupTest)('adapter:application', {
      needs: ['service:session']
    });

    (0, _mocha.it)('should precise /api as the root url', function () {
      // Given
      var applicationAdapter = this.subject();

      // Then
      (0, _chai.expect)(applicationAdapter.namespace).to.equal('api');
    });

    (0, _mocha.it)('should add header with authentication token ', function () {
      // Given
      var expectedToken = '23456789';
      var applicationAdapter = this.subject();

      // When
      applicationAdapter.set('session', { data: { authenticated: { token: expectedToken } } });

      (0, _chai.expect)(applicationAdapter.get('headers')).to.deep.equal({
        'Authorization': 'Bearer ' + expectedToken
      });
    });

    (0, _mocha.it)('should allow to logout ', function () {
      // Given
      var applicationAdapter = this.subject();

      // Then
      (0, _chai.expect)(applicationAdapter.get('headers')).to.deep.equal({
        'Authorization': ''
      });
    });
  });
});
define('pix-live/tests/unit/adapters/solution-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Adapters | solution', function () {

    (0, _emberMocha.setupTest)('adapter:solution', {
      needs: ['service:session']
    });

    (0, _mocha.it)('exists', function () {
      var adapter = this.subject();
      (0, _chai.expect)(adapter).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/adapters/user-test', ['chai', 'mocha', 'sinon', 'ember-mocha'], function (_chai, _mocha, _sinon, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Route | subscribers', function () {
    (0, _emberMocha.setupTest)('adapter:user', {
      needs: ['service:session']
    });

    (0, _mocha.describe)('#queryRecord', function () {

      var adapter = void 0;

      beforeEach(function () {
        adapter = this.subject();
        adapter.ajax = _sinon.default.stub().resolves();
      });

      (0, _mocha.it)('should exist', function () {
        // when
        var adapter = this.subject();
        // then
        return (0, _chai.expect)(adapter.queryRecord()).to.be.ok;
      });

      (0, _mocha.it)('should return a resolved promise', function (done) {
        // when
        var promise = adapter.queryRecord();
        // then
        promise.then(done);
      });

      (0, _mocha.it)('should called GET /api/users/me', function () {
        // when
        adapter.queryRecord();

        // then
        _sinon.default.assert.calledWith(adapter.ajax, 'http://localhost:3000/api/users/me');
      });
    });
  });
});
define('pix-live/tests/unit/authenticators/simple-test', ['mocha', 'chai', 'ember-mocha'], function (_mocha, _chai, _emberMocha) {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var expectedUserId = 1;
  var expectedToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJlbWFpbCI6InBpeEBjb250YWN0LmNvbSIsImlhdCI6MTQ5Njg0NTY3OSwiZXhwIjoxNDk3NDUwNDc5fQ.6Mkkstj-9SjXX4lsXrsZ2KL91Ol3kbxn6tlus2apGVY';

  var AjaxStub = function () {
    function AjaxStub() {
      _classCallCheck(this, AjaxStub);
    }

    _createClass(AjaxStub, [{
      key: 'request',
      value: function request() {
        this.callArgs = Array.from(arguments);
        return Promise.resolve({
          'data': {
            'type': 'authentication',
            'attributes': {
              'user-id': expectedUserId,
              'token': expectedToken,
              'password': ''
            },
            'id': expectedUserId
          }
        });
      }
    }]);

    return AjaxStub;
  }();

  (0, _mocha.describe)('Unit | Authenticator | simple', function () {

    (0, _emberMocha.setupTest)('authenticator:simple', {
      needs: ['service:ajax']
    });

    (0, _mocha.it)('should post a request to retrieve token', function () {
      // Given
      var email = 'test@example.net';
      var password = 'Hx523è9#';
      var ajaxStub = new AjaxStub();
      var authenticator = this.subject();
      authenticator.set('ajax', ajaxStub);

      // When
      var promise = authenticator.authenticate(email, password);

      // Then
      return promise.then(function (_) {
        (0, _chai.expect)(ajaxStub.callArgs[0]).to.deep.equal('/api/authentications');
        (0, _chai.expect)(ajaxStub.callArgs[1]).to.deep.equal({
          method: 'POST',
          data: '{"data":{"attributes":{"password":"Hx523è9#","email":"test@example.net"}}}'
        });
      });
    });

    (0, _mocha.it)('should return the token', function () {
      // Given
      var email = 'test@example.net';
      var password = 'Hx523è9#';
      var ajaxStub = new AjaxStub();
      var authenticator = this.subject();
      authenticator.set('ajax', ajaxStub);

      // When
      var promise = authenticator.authenticate(email, password);

      // Then
      return promise.then(function (data) {
        (0, _chai.expect)(data.userId).to.equal(expectedUserId);
        (0, _chai.expect)(data.token).to.equal(expectedToken);
      });
    });
  });
});
define('pix-live/tests/unit/components/comparison-window-test', ['ember', 'chai', 'mocha', 'ember-mocha'], function (_ember, _chai, _mocha, _emberMocha) {
  'use strict';

  function _assertResultItemTitle(resultItem, expected) {
    (0, _chai.expect)(resultItem.title).to.equal(expected);
  }

  function _assertResultItemTooltip(resultItem, expected) {
    (0, _chai.expect)(resultItem.tooltip).to.equal(expected);
  }

  (0, _mocha.describe)('Unit | Component | comparison-window', function () {

    (0, _emberMocha.setupTest)('component:comparison-window', {
      needs: ['service:current-routed-modal', 'initializer:jquery-tabbable']
    });

    var component = void 0;
    var answer = void 0;
    var resultItem = void 0;

    var challengeQroc = { type: 'QROC' };
    var challengeQcm = { type: 'QCM' };
    var challengeQrocmInd = { type: 'QROCM-ind' };
    var challengeQrocmDep = { type: 'QROCM-dep' };

    (0, _mocha.beforeEach)(function () {
      component = this.subject();
      answer = _ember.default.Object.create();
      component.set('answer', answer);
    });

    (0, _mocha.describe)('#isAssessmentChallengeTypeQroc', function () {

      (0, _mocha.it)('should be true when the challenge is QROC', function () {
        // given
        component.set('challenge', challengeQroc);
        // when
        var isAssessmentChallengeTypeQroc = component.get('isAssessmentChallengeTypeQroc');
        // then
        (0, _chai.expect)(isAssessmentChallengeTypeQroc).to.be.true;
      });

      (0, _mocha.it)('should be false when the challenge is not QROCM-ind', function () {
        // given
        component.set('challenge', challengeQrocmInd);
        // when
        var isAssessmentChallengeTypeQroc = component.get('isAssessmentChallengeTypeQroc');
        // then
        (0, _chai.expect)(isAssessmentChallengeTypeQroc).to.be.false;
      });
    });

    (0, _mocha.describe)('#isAssessmentChallengeTypeQcm', function () {

      (0, _mocha.it)('should be true when the challenge is QCM', function () {
        // given
        component.set('challenge', challengeQcm);
        // when
        var isAssessmentChallengeTypeQcm = component.get('isAssessmentChallengeTypeQcm');
        // then
        (0, _chai.expect)(isAssessmentChallengeTypeQcm).to.be.true;
      });

      (0, _mocha.it)('should be false when the challenge is not QCM', function () {
        // given
        component.set('challenge', challengeQroc);
        // when
        var isAssessmentChallengeTypeQcm = component.get('isAssessmentChallengeTypeQcm');
        // then
        (0, _chai.expect)(isAssessmentChallengeTypeQcm).to.be.false;
      });
    });

    (0, _mocha.describe)('#isAssessmentChallengeTypeQrocmInd', function () {

      (0, _mocha.it)('should be true when the challenge is QROCM-ind', function () {
        // given
        component.set('challenge', challengeQrocmInd);
        // when
        var isAssessmentChallengeTypeQrocmInd = component.get('isAssessmentChallengeTypeQrocmInd');
        // then
        (0, _chai.expect)(isAssessmentChallengeTypeQrocmInd).to.be.true;
      });

      (0, _mocha.it)('should be true when the challenge is not QROCM-ind', function () {
        // given
        component.set('challenge', challengeQroc);
        // when
        var isAssessmentChallengeTypeQrocmInd = component.get('isAssessmentChallengeTypeQrocmInd');
        // then
        (0, _chai.expect)(isAssessmentChallengeTypeQrocmInd).to.be.false;
      });
    });

    (0, _mocha.describe)('#isAssessmentChallengeTypeQrocmDep', function () {

      (0, _mocha.it)('should be true when the challenge is QROCM-dep', function () {
        // given
        component.set('challenge', challengeQrocmDep);
        // when
        var isAssessmentChallengeTypeQrocmDep = component.get('isAssessmentChallengeTypeQrocmDep');
        // then
        (0, _chai.expect)(isAssessmentChallengeTypeQrocmDep).to.be.true;
      });

      (0, _mocha.it)('should be true when the challenge is not QROCM-dep', function () {
        // given
        component.set('challenge', challengeQroc);
        // when
        var isAssessmentChallengeTypeQrocmDep = component.get('isAssessmentChallengeTypeQrocmDep');
        // then
        (0, _chai.expect)(isAssessmentChallengeTypeQrocmDep).to.be.false;
      });
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
        var undefined = void 0;
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
define('pix-live/tests/unit/components/competence-area-list-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Component | Competence area list Component', function () {

    (0, _emberMocha.setupTest)('component:competence-area-list', {});

    (0, _mocha.describe)('Computed Properties behaviors: ', function () {

      (0, _mocha.describe)('#_sanitizedCompetences', function () {
        (0, _mocha.it)('should not return competences', function () {
          // given
          var component = this.subject();

          // when
          component.set('competences', []);

          // then
          (0, _chai.expect)(component.get('_sanitizedCompetences')).to.deep.equal([]);
        });

        (0, _mocha.it)('should return as many competences as provided', function () {
          // given
          var component = this.subject();

          // when
          component.set('competences', [{
            id: 1,
            name: 'competence-A'
          }, {
            id: 2,
            name: 'competence-B'
          }]);

          // then
          (0, _chai.expect)(component.get('_sanitizedCompetences')).to.have.lengthOf(2);
        });
      });

      (0, _mocha.describe)('#_competencesGroupedByArea', function () {
        (0, _mocha.it)('should return some competences grouped by areas', function () {
          // given
          var component = this.subject();
          var expectedGroupedCompetences = [{
            property: 'areaName',
            value: 'area-A',
            items: [{ id: 1, name: 'competence-1', areaName: 'area-A' }, {
              id: 2,
              name: 'competence-2',
              areaName: 'area-A'
            }]
          }, { property: 'areaName', value: 'area-B', items: [{ id: 4, name: 'competence-4', areaName: 'area-B' }] }];
          // when
          component.set('competences', [{ id: 1, name: 'competence-1', areaName: 'area-A' }, { id: 2, name: 'competence-2', areaName: 'area-A' }, { id: 4, name: 'competence-4', areaName: 'area-B' }]);

          // then
          (0, _chai.expect)(component.get('_competencesGroupedByArea')).to.deep.equal(expectedGroupedCompetences);
        });
      });

      (0, _mocha.describe)('#_competencesByAreaSorted', function () {
        (0, _mocha.it)('should return some competences grouped by areas and asc sorted', function () {
          // given
          var component = this.subject();
          var expectedGroupedCompetences = [{ property: 'areaName', value: '2. area-A', items: [{ id: 2, name: 'competence-2', areaName: '2. area-A' }] }, { property: 'areaName', value: '4. area-B', items: [{ id: 4, name: 'competence-4', areaName: '4. area-B' }] }, { property: 'areaName', value: '5. area-C', items: [{ id: 5, name: 'competence-5', areaName: '5. area-C' }] }];
          // when
          component.set('competences', [{ id: 4, name: 'competence-4', areaName: '4. area-B' }, { id: 5, name: 'competence-5', areaName: '5. area-C' }, { id: 2, name: 'competence-2', areaName: '2. area-A' }]);

          // then
          (0, _chai.expect)(component.get('_competencesByAreaSorted')).to.deep.equal(expectedGroupedCompetences);
        });
      });
    });
  });
});
define('pix-live/tests/unit/components/competence-by-area-item-test', ['ember', 'chai', 'mocha', 'ember-mocha'], function (_ember, _chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Component | Competence area item Component', function () {

    (0, _emberMocha.setupTest)('component:competence-by-area-item', {});

    (0, _mocha.describe)('#Computed Properties behaviors: ', function () {

      (0, _mocha.describe)('#_competencesAreaName', function () {
        (0, _mocha.it)('should return Area name related to competences without index number', function () {
          // given
          var component = this.subject();

          // when
          component.set('competenceArea', {
            property: 'areaName',
            value: '2. area-A',
            items: [{ id: 2, name: 'competence-2', areaName: '2. area-A' }]
          });

          // then
          (0, _chai.expect)(component.get('_competencesAreaName')).to.equal('area-A');
        });

        (0, _mocha.it)('should return empty Area name related to competences when it does not exist', function () {
          // given
          var component = this.subject();

          // when
          component.set('competenceArea', {});

          // then
          (0, _chai.expect)(component.get('_competencesAreaName')).to.equal('');
        });
      });

      (0, _mocha.describe)('#_competencesSortedList', function () {

        (0, _mocha.it)('should display sorted competences', function () {
          // given
          var component = this.subject();

          var competencesWithSameArea = [_ember.default.Object.create({ id: 2, name: 'competence-name-2', index: '1.2', area: 'area-id-1', level: -1 }), _ember.default.Object.create({ id: 3, name: 'competence-name-3', index: '1.3', area: 'area-id-1', level: -1 }), _ember.default.Object.create({ id: 1, name: 'competence-name-1', index: '1.1', area: 'area-id-1', level: -1 })];
          var areaWithManyCompetences = {
            property: 'area',
            value: 'Information et données',
            items: competencesWithSameArea
          };

          // when
          component.set('competenceArea', areaWithManyCompetences);
          // then
          (0, _chai.expect)(component.get('_competencesSortedList')).to.deep.equal([_ember.default.Object.create({
            id: 1,
            name: 'competence-name-1',
            index: '1.1',
            area: 'area-id-1',
            level: -1
          }), _ember.default.Object.create({
            id: 2,
            name: 'competence-name-2',
            index: '1.2',
            area: 'area-id-1',
            level: -1
          }), _ember.default.Object.create({
            id: 3,
            name: 'competence-name-3',
            index: '1.3',
            area: 'area-id-1',
            level: -1
          })]);
        });
      });
    });
  });
});
define('pix-live/tests/unit/components/competence-level-progress-bar-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Component | Competence-level-progress-bar ', function () {

    (0, _emberMocha.setupTest)('component:competence-level-progress-bar', {});

    (0, _mocha.describe)('#Computed Properties behaviors: ', function () {

      (0, _mocha.describe)('#hasLevel', function () {

        [{ level: 1, expectedValue: true }, { level: 0, expectedValue: true }, { level: -1, expectedValue: false }, { level: undefined, expectedValue: false }].forEach(function (_ref) {
          var level = _ref.level,
              expectedValue = _ref.expectedValue;


          (0, _mocha.it)('should return ' + expectedValue + ' when the level of the competence is ' + level, function () {
            // given
            var component = this.subject();

            // when
            component.set('level', level);

            // then
            (0, _chai.expect)(component.get('hasLevel')).to.equal(expectedValue);
          });
        });
      });

      (0, _mocha.describe)('#widthOfProgressBar', function () {
        [{ level: 0, expectedValue: 'width : 24px' }, { level: 1, expectedValue: 'width : 12.5%' }, { level: 2, expectedValue: 'width : 25%' }, { level: 3, expectedValue: 'width : 37.5%' }, { level: 4, expectedValue: 'width : 50%' }, { level: 5, expectedValue: 'width : 62.5%' }].forEach(function (_ref2) {
          var level = _ref2.level,
              expectedValue = _ref2.expectedValue;


          (0, _mocha.it)('should return ' + expectedValue + ' when the level is ' + level, function () {
            // given
            var component = this.subject();

            // when
            component.set('level', level);

            // then
            (0, _chai.expect)(component.get('widthOfProgressBar').string).to.equal(expectedValue);
          });
        });
      });

      (0, _mocha.describe)('#canUserStartCourse', function () {
        [{ level: null, expected: true }, { level: undefined, expected: true }, { level: -1, expected: true }, { level: 1, expected: false }, { level: 0, expected: false }].forEach(function (_ref3) {
          var level = _ref3.level,
              expected = _ref3.expected;

          (0, _mocha.it)('should return ' + expected + ', when there is associated course and level is ' + level, function () {
            // given
            var component = this.subject();
            var courseId = 'REC123';
            // when
            component.set('level', level);
            component.set('courseId', courseId);

            // then
            (0, _chai.expect)(component.get('canUserStartCourse')).to.be.equal(expected);
          });
        });

        [{ courseId: null }, { courseId: undefined }, { courseId: '' }, { courseId: 0 }].forEach(function (_ref4) {
          var courseId = _ref4.courseId;


          (0, _mocha.it)('should return false, when there is no associated course', function () {
            // given
            var component = this.subject();
            var level = -1;
            // when
            component.set('level', level);
            component.set('courseId', courseId);

            // then
            (0, _chai.expect)(component.get('canUserStartCourse')).to.be.false;
          });
        });

        (0, _mocha.it)('should return false, when there is associated course but have already level', function () {
          // given
          var component = this.subject();
          var level = 777;
          var courseId = 'REC123';
          // when
          component.set('level', level);
          component.set('courseId', courseId);

          // then
          (0, _chai.expect)(component.get('canUserStartCourse')).to.be.false;
        });
      });
    });
  });
});
define('pix-live/tests/unit/components/course-item-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Component | CourseItemComponent', function () {

    (0, _emberMocha.setupTest)('component:course-item', {});

    (0, _mocha.describe)('Computed property "imageUrl"', function () {
      var component = void 0;

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
        (0, _chai.expect)(imageUrl).to.equal('/images/course-default-image.png');
      });
    });
  });
});
define('pix-live/tests/unit/components/course-list-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Component | course list', function () {

    (0, _emberMocha.setupTest)('component:course-list', {});

    (0, _mocha.describe)('#filteredCourses', function () {

      var component = void 0;

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
define('pix-live/tests/unit/components/feedback-panel-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Component | feedback-panel', function () {

    (0, _emberMocha.setupTest)('component:feedback-panel', {});

    (0, _mocha.describe)('#isFormClosed', function () {

      (0, _mocha.it)('should return true by default', function () {
        // given
        var component = this.subject();

        // when
        var isFormClosed = component.get('isFormClosed');

        // then
        (0, _chai.expect)(isFormClosed).to.be.true;
      });

      (0, _mocha.it)('should return true if status equals "FORM_CLOSED"', function () {
        // given
        var component = this.subject();
        component.set('_status', 'FORM_CLOSED');

        // when
        var isFormClosed = component.get('isFormClosed');

        // then
        (0, _chai.expect)(isFormClosed).to.be.true;
      });

      (0, _mocha.it)('should return false if status is not equal to "FORM_CLOSED"', function () {
        // given
        var component = this.subject();
        component.set('_status', 'FORM_OPENED');

        // when
        var isFormClosed = component.get('isFormClosed');

        // then
        (0, _chai.expect)(isFormClosed).to.be.false;
      });
    });

    (0, _mocha.describe)('#isFormOpened', function () {

      (0, _mocha.it)('should return true if status equals "FORM_OPENED"', function () {
        // given
        var component = this.subject();
        component.set('_status', 'FORM_OPENED');

        // when
        var isFormClosed = component.get('isFormOpened');

        // then
        (0, _chai.expect)(isFormClosed).to.be.true;
      });

      (0, _mocha.it)('should return false if status is not equal to "FORM_OPENED"', function () {
        // given
        var component = this.subject();
        component.set('_status', 'FORM_CLOSED');

        // when
        var isFormClosed = component.get('isFormOpened');

        // then
        (0, _chai.expect)(isFormClosed).to.be.false;
      });
    });

    (0, _mocha.describe)('#_reset', function () {

      (0, _mocha.it)('should return empty mail, text, error and back to the default status', function () {
        // given
        var component = this.subject();
        component.set('collapsible', false);
        component.set('_email', 'un@email.com');
        component.set('_content', 'un contenu');
        component.set('_error', 'une erreur');
        component.set('_status', 'FORM_CLOSED');

        // when
        component._reset();

        // then
        (0, _chai.expect)(component.get('_email')).to.be.null;
        (0, _chai.expect)(component.get('_content')).to.be.null;
        (0, _chai.expect)(component.get('_error')).to.be.null;
        (0, _chai.expect)(component.get('_status')).to.be.equal('FORM_OPENED');
      });
    });

    (0, _mocha.describe)('#_closeForm', function () {

      (0, _mocha.it)('should set status to CLOSED and set errors to null', function () {
        // given
        var component = this.subject();
        component.set('_error', 'une erreur');
        component.set('_status', 'FORM_OPENED');

        // when
        component._closeForm();

        // then
        (0, _chai.expect)(component.get('_error')).to.be.null;
        (0, _chai.expect)(component.get('_status')).to.be.equal('FORM_CLOSED');
      });
    });

    (0, _mocha.describe)('#_getDefaultStatus', function () {

      (0, _mocha.it)('should return FORM_CLOSED if has property collapsible at "true"', function () {
        // given
        var component = this.subject();
        component.set('collapsible', true);

        // when
        var defaultStatus = component._getDefaultStatus();

        // then
        (0, _chai.expect)(defaultStatus).to.equal('FORM_CLOSED');
      });

      (0, _mocha.it)('should return FORM_OPENED if has property collapsible at "false"', function () {
        // given
        var component = this.subject();
        component.set('collapsible', false);

        // when
        var defaultStatus = component._getDefaultStatus();

        // then
        (0, _chai.expect)(defaultStatus).to.equal('FORM_OPENED');
      });
    });
  });
});
define('pix-live/tests/unit/components/follower-form-test', ['ember', 'chai', 'mocha', 'ember-mocha'], function (_ember, _chai, _mocha, _emberMocha) {
  'use strict';

  var errorMessages = {
    error: {
      invalid: 'Votre adresse n\'est pas valide',
      exist: 'L\'e-mail choisi est déjà utilisé'
    },
    success: 'Merci pour votre inscription'
  };

  (0, _mocha.describe)('Unit | Component | followerComponent', function () {

    (0, _emberMocha.setupTest)('component:follower-form', {});

    (0, _mocha.describe)('#Computed Properties behaviors: ', function () {
      (0, _mocha.describe)('When status get <error>, computed :', function () {
        [{ attribute: 'hasError', expected: true }, { attribute: 'isPending', expected: false }, { attribute: 'hasSuccess', expected: false }, { attribute: 'errorType', expected: 'invalid' }, { attribute: 'messageClassName', expected: 'has-error' }, { attribute: 'infoMessage', expected: errorMessages.error.invalid }, { attribute: 'submitButtonText', expected: 's\'inscrire' }, { attribute: 'hasMessage', expected: true }].forEach(function (_ref) {
          var attribute = _ref.attribute,
              expected = _ref.expected;

          (0, _mocha.it)('should return ' + expected + ' when passing ' + attribute, function () {
            // given
            var component = this.subject();
            // when
            component.set('status', 'error');
            component.set('follower', _ember.default.Object.create());
            // then
            (0, _chai.expect)(component.get(attribute)).to.equal(expected);
          });
        });
      });

      (0, _mocha.describe)('When status get <success>, computed :', function () {
        [{ attribute: 'hasError', expected: false }, { attribute: 'isPending', expected: false }, { attribute: 'hasSuccess', expected: true }, { attribute: 'errorType', expected: 'invalid' }, { attribute: 'messageClassName', expected: 'has-success' }, { attribute: 'infoMessage', expected: errorMessages.success }, { attribute: 'submitButtonText', expected: 's\'inscrire' }, { attribute: 'hasMessage', expected: true }].forEach(function (_ref2) {
          var attribute = _ref2.attribute,
              expected = _ref2.expected;

          (0, _mocha.it)('should return ' + expected + ' when passing ' + attribute, function () {
            // given
            var component = this.subject();
            // when
            component.set('status', 'success');
            component.set('follower', _ember.default.Object.create());
            // then
            (0, _chai.expect)(component.get(attribute)).to.equal(expected);
          });
        });
      });
    });
  });
});
define('pix-live/tests/unit/components/g-recaptcha-test', ['mocha', 'chai', 'ember-mocha', 'ember'], function (_mocha, _chai, _emberMocha, _ember) {
  'use strict';

  var RSVP = _ember.default.RSVP;


  (0, _mocha.describe)('Unit | Component | g-recaptcha', function () {

    var serviceResetCalled = false;

    (0, _emberMocha.setupTest)('component:g-recaptcha', {});

    beforeEach(function () {

      serviceResetCalled = false;

      this.register('service:googleRecaptcha', _ember.default.Service.extend({
        loadScript: function loadScript() {
          return RSVP.resolve();
        },
        render: function render() {
          return true;
        },
        reset: function reset() {
          serviceResetCalled = true;
        }
      }));
      this.inject.service('googleRecaptcha', { as: 'googleRecaptcha' });
    });

    (0, _mocha.describe)('#didUpdateAttrs', function () {

      (0, _mocha.it)('should reset the recaptcha if the token has been used', function () {
        // given
        var component = this.subject({});
        component.set('recaptchaToken', null);
        component.set('tokenHasBeenUsed', true);

        // when
        component.didUpdateAttrs();

        // then
        (0, _chai.expect)(serviceResetCalled).to.be.true;
      });

      (0, _mocha.it)('should not reset the recaptcha if the token has not been used', function () {
        // given
        var component = this.subject({});
        component.set('recaptchaToken', null);
        component.set('tokenHasBeenUsed', false);

        // when
        component.didUpdateAttrs();

        // then verify reset has not been called
        (0, _chai.expect)(serviceResetCalled).to.be.false;
      });
    });

    (0, _mocha.describe)('#validateCallback', function () {

      (0, _mocha.it)('should set the recaptchaToken to the GoogleRecaptchaToken and indicate that he has not been used', function () {
        // given
        var component = this.subject({});
        component.set('recaptchaToken', null);
        component.set('tokenHasBeenUsed', true);
        var googleRecaptchaResponse = 'la reponse de recaptcha';

        // when
        component.validateCallback(googleRecaptchaResponse);

        // then
        (0, _chai.expect)(component.get('recaptchaToken')).to.be.equal(googleRecaptchaResponse);
        (0, _chai.expect)(component.get('tokenHasBeenUsed')).to.be.false;
      });
    });

    (0, _mocha.describe)('#expiredCallback', function () {

      (0, _mocha.it)('should set the recaptchaToken to null and indicate that he has not been used', function () {
        // given
        var component = this.subject();
        component.set('recaptchaToken', 'un token');
        component.set('tokenHasBeenUsed', true);

        // when
        component.expiredCallback();

        // then
        (0, _chai.expect)(component.get('recaptchaToken')).to.be.null;
        (0, _chai.expect)(component.get('tokenHasBeenUsed')).to.be.false;
      });
    });
  });
});
define('pix-live/tests/unit/components/navbar-header-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Component | Navar Header Component', function () {
    (0, _emberMocha.setupTest)('component:navbar-header', {});

    (0, _mocha.describe)('#isUserLogged', function () {
      [{ given: '', expected: false }, { given: ' ', expected: false }, { given: null, expected: false }, { given: undefined, expected: false }, { given: { firstName: 'FHI' }, expected: true }].forEach(function (_ref) {
        var given = _ref.given,
            expected = _ref.expected;

        (0, _mocha.it)('should return ' + expected + ', when ' + given + ' provided', function () {
          // given
          var component = this.subject();
          // when
          component.set('user', given);
          // then
          (0, _chai.expect)(component.get('isUserLogged')).to.equal(expected);
        });
      });
    });
  });
});
define('pix-live/tests/unit/components/qcu-proposals-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Component | QCU proposals', function () {

    (0, _emberMocha.setupTest)('component:qcu-proposals', {});

    /* Computed property "labeledRadios"
     ----------------------------------------------------- */

    (0, _mocha.describe)('Computed property "labeledRadios"', function () {

      var DEFAULT_PROPOSALS = '- prop 1\n- prop 2\n- prop 3';

      var answersValue = void 0;
      var proposals = void 0;
      var component = void 0;

      beforeEach(function () {
        proposals = DEFAULT_PROPOSALS;
        answersValue = '2';
      });

      function initComponent() {
        component = this.subject();
        component.set('proposals', proposals);
        component.set('answersValue', answersValue);
      }

      (0, _mocha.it)('should return an array of [<proposal_text>, <boolean_answer>]', function () {
        // Given
        answersValue = '2';
        var expectedLabeledRadios = [['prop 1', false], ['prop 2', true], ['prop 3', false]];
        initComponent.call(this);

        // When
        var labeledRadios = component.get('labeledRadios');

        // Then
        (0, _chai.expect)(labeledRadios).to.deep.equal(expectedLabeledRadios);
      });

      (0, _mocha.it)('should return an array of [<proposal_text>, <boolean_answer>] with as many items as challenge proposals', function () {
        // given
        proposals = '- prop 1\n- prop 2\n- prop 3\n- prop 4\n- prop 5';
        initComponent.call(this);

        // when
        var labeledRadios = component.get('labeledRadios');

        // then
        (0, _chai.expect)(labeledRadios).to.have.lengthOf(5);
      });

      (0, _mocha.it)('should not select a radio when given answer is null', function () {
        // given
        answersValue = null;
        var expectedLabeledRadios = [['prop 1', false], ['prop 2', false], ['prop 3', false]];
        initComponent.call(this);

        // when
        var labeledRadios = component.get('labeledRadios');

        // then
        (0, _chai.expect)(labeledRadios).to.deep.equal(expectedLabeledRadios);
      });

      (0, _mocha.it)('should not select a radio when no answer is given', function () {
        // given
        answersValue = '';
        var expectedLabeledRadios = [['prop 1', false], ['prop 2', false], ['prop 3', false]];
        initComponent.call(this);

        // when
        var labeledRadios = component.get('labeledRadios');

        // then
        (0, _chai.expect)(labeledRadios).to.deep.equal(expectedLabeledRadios);
      });
    });
  });
});
define('pix-live/tests/unit/components/qroc-solution-panel-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Component | qroc-solution-panel', function () {

    (0, _emberMocha.setupTest)('component:qroc-solution-panel', {});
    var rightAnswer = { result: 'ok' };
    var wrongAnswer = { result: 'ko' };
    //const noAnswer = { result: 'aband' };

    (0, _mocha.describe)('#isResultOk', function () {

      (0, _mocha.it)('should return true when result is ok', function () {
        // given
        var component = this.subject();
        component.set('answer', rightAnswer);
        // when
        var isResultOk = component.get('isResultOk');
        // then
        (0, _chai.expect)(isResultOk).to.be.true;
      });

      (0, _mocha.it)('should return true when result is not ok', function () {
        // given
        var component = this.subject();
        component.set('answer', wrongAnswer);
        // when
        var isResultOk = component.get('isResultOk');
        // then
        (0, _chai.expect)(isResultOk).to.be.false;
      });
    });

    (0, _mocha.describe)('#answerToDisplay', function () {

      (0, _mocha.it)('should return PAS DE REPONSE if the answer is #ABAND#', function () {
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
define('pix-live/tests/unit/components/qrocm-ind-solution-panel-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Component | qrocm-solution-panel', function () {

    (0, _emberMocha.setupTest)('component:qrocm-ind-solution-panel', {});

    (0, _mocha.describe)('#inputFields', function () {

      var challenge = void 0;
      var answer = void 0;
      var solution = void 0;

      (0, _mocha.beforeEach)(function () {
        challenge = {};
        answer = {};
        solution = {};
      });

      function _getComponentInputFields(context) {
        var component = context.subject();
        component.set('challenge', challenge);
        component.set('answer', answer);
        component.set('solution', solution);
        return component.get('inputFields');
      }

      (0, _mocha.it)('should return an array with data to display (case when the answers are right)', function () {
        //Given
        challenge = { proposals: 'content : ${smiley1}\n\ntriste : ${smiley2}' };
        answer = { value: 'smiley1: \':)\' smiley2: \':(\'', resultDetails: 'smiley1: true\nsmiley2: true' };
        solution = { value: 'smiley1: \n - :-)\n - :)\n - :-D\n - :D\n - :))\n\nsmiley2:\n - :-(\n - :(\n - :((' };

        var expectedFieldsData = [{
          label: 'content : ',
          answer: ':)',
          solution: ':-)',
          emptyOrWrongAnswer: false,
          inputClass: 'correction-qroc-box__input-right-answer'
        }, {
          label: 'triste : ',
          answer: ':(',
          solution: ':-(',
          emptyOrWrongAnswer: false,
          inputClass: 'correction-qroc-box__input-right-answer'
        }];

        //when
        var inputFields = _getComponentInputFields(this);

        //Then
        (0, _chai.expect)(inputFields).to.be.deep.equal(expectedFieldsData);
      });

      (0, _mocha.it)('should return an array with data to display (case when there is wrong answers)', function () {
        //Given
        challenge = { proposals: 'Clé USB : ${num1}\n\nCarte mémoire (SD) : ${num2}' };
        answer = { value: 'num1: \'1\' num2: \'2\'', resultDetails: 'num1: false\nnum2: false' };
        solution = { value: 'num1: \n - 2\n\nnum2:\n - 1' };
        var result = [{
          label: 'Clé USB : ',
          answer: '1',
          solution: '2',
          emptyOrWrongAnswer: true,
          inputClass: 'correction-qroc-box__input-wrong-answer'
        }, {
          label: 'Carte mémoire (SD) : ',
          answer: '2',
          solution: '1',
          emptyOrWrongAnswer: true,
          inputClass: 'correction-qroc-box__input-wrong-answer'
        }];

        //When
        var inputFields = _getComponentInputFields(this);

        //then
        (0, _chai.expect)(inputFields).to.be.deep.equal(result);
      });

      (0, _mocha.it)('should return an array with data to display (case when there is some empty answer)', function () {
        //Given
        challenge = { proposals: 'Clé USB : ${num1}\n\nCarte mémoire (SD) : ${num2}' };
        answer = { value: 'num1: \'\' num2: \'2\'', resultDetails: 'num1: false\nnum2: false' };
        solution = { value: 'num1: \n - 2\n\nnum2:\n - 1' };

        var result = [{
          label: 'Clé USB : ',
          answer: 'Pas de réponse',
          solution: '2',
          emptyOrWrongAnswer: true,
          inputClass: 'correction-qroc-box__input-no-answer'
        }, {
          label: 'Carte mémoire (SD) : ',
          answer: '2',
          solution: '1',
          emptyOrWrongAnswer: true,
          inputClass: 'correction-qroc-box__input-wrong-answer'
        }];

        //When
        var inputFields = _getComponentInputFields(this);

        //then
        (0, _chai.expect)(inputFields).to.be.deep.equal(result);
      });

      (0, _mocha.it)('should return an array with data to display (proposals contains a dash ("-"))', function () {
        // given
        challenge = { proposals: '- alain@pix.fr : ${num1}\n\n- leonie@pix.fr : ${num2}\n\n- Programme_Pix.pdf : ${num3}\n\n- lucie@pix.fr : ${num4}\n\n- Programme du festival Pix : ${num5}\n\n- jeremy@pix.fr : ${num6}' };
        answer = {
          value: 'num1: \'1\' num2: \'2\' num3: \'3\' num4: \'4\' num5: \'5\' num6: \'6\'',
          resultDetails: 'num1: false\nnum2: false\nnum3: false\nnum4: false\nnum5: true\nnum6: false'
        };
        solution = { value: 'num1: \n - 2\n\nnum2:\n - 3\n - 4\n\nnum3:\n - 6\n\nnum4:\n - 1\n\nnum5:\n - 5\n\nnum6:\n - 2' };

        var result = [{
          label: '- alain@pix.fr : ',
          answer: '1',
          solution: '2',
          emptyOrWrongAnswer: true,
          inputClass: 'correction-qroc-box__input-wrong-answer'
        }, {
          label: '- leonie@pix.fr : ',
          answer: '2',
          solution: '3',
          emptyOrWrongAnswer: true,
          inputClass: 'correction-qroc-box__input-wrong-answer'
        }, {
          label: '- Programme_Pix.pdf : ',
          answer: '3',
          solution: '6',
          emptyOrWrongAnswer: true,
          inputClass: 'correction-qroc-box__input-wrong-answer'
        }, {
          label: '- lucie@pix.fr : ',
          answer: '4',
          solution: '1',
          emptyOrWrongAnswer: true,
          inputClass: 'correction-qroc-box__input-wrong-answer'
        }, {
          label: '- Programme du festival Pix : ',
          answer: '5',
          solution: '5',
          emptyOrWrongAnswer: false,
          inputClass: 'correction-qroc-box__input-right-answer'
        }, {
          label: '- jeremy@pix.fr : ',
          answer: '6',
          solution: '2',
          emptyOrWrongAnswer: true,
          inputClass: 'correction-qroc-box__input-wrong-answer'
        }];

        // when
        var inputFields = _getComponentInputFields(this);

        // then
        (0, _chai.expect)(inputFields).to.be.deep.equal(result);
      });

      (0, _mocha.it)('should return an array with data to display (proposals are questions)', function () {
        // given
        challenge = { proposals: '- Combien le dossier "projet PIX" contient-il de dossiers ? ${Num1}\n\n- Combien le dossier "images" contient-il de fichiers ? ${Num2}' };
        answer = { value: 'Num1: \'2\' Num2: \'3\'', resultDetails: 'Num1: false\nNum2: false' };
        solution = { value: 'Num1:\n - 1\n\nNum2:\n - 6' };

        var result = [{
          label: '- Combien le dossier "projet PIX" contient-il de dossiers ? ',
          answer: '2',
          solution: '1',
          emptyOrWrongAnswer: true,
          inputClass: 'correction-qroc-box__input-wrong-answer'
        }, {
          label: '- Combien le dossier "images" contient-il de fichiers ? ',
          answer: '3',
          solution: '6',
          emptyOrWrongAnswer: true,
          inputClass: 'correction-qroc-box__input-wrong-answer'
        }];

        // when
        var inputFields = _getComponentInputFields(this);

        // then
        (0, _chai.expect)(inputFields).to.be.deep.equal(result);
      });

      (0, _mocha.it)('it should return "Pas de réponse" in each answer if the question was passed', function () {
        // given
        challenge = { proposals: 'Clé USB : ${num1}\n\nCarte mémoire (SD) : ${num2}' };
        answer = { value: '#ABAND#', resultDetails: 'num1: false\nnum2: false' };
        solution = { value: 'num1: \n - 2\n\nnum2:\n - 1' };

        var result = [{
          label: 'Clé USB : ',
          answer: 'Pas de réponse',
          solution: '2',
          emptyOrWrongAnswer: true,
          inputClass: 'correction-qroc-box__input-no-answer'
        }, {
          label: 'Carte mémoire (SD) : ',
          answer: 'Pas de réponse',
          solution: '1',
          emptyOrWrongAnswer: true,
          inputClass: 'correction-qroc-box__input-no-answer'
        }];

        // when
        var inputFields = _getComponentInputFields(this);

        // then
        (0, _chai.expect)(inputFields).to.be.deep.equal(result);
      });

      /**
       * _inputClass
       */

      (0, _mocha.it)('should return "correction-qroc-box__input-right-answer" CSS class when answer is right', function () {
        // given
        challenge = { proposals: 'Clé USB : ${num1}' };
        answer = { value: 'num1: \'2\'', resultDetails: 'num1: true' };
        solution = { value: 'num1: \n - 2' };

        var result = [{
          label: 'Clé USB : ',
          answer: '2',
          solution: '2',
          emptyOrWrongAnswer: false,
          inputClass: 'correction-qroc-box__input-right-answer'
        }];

        // when
        var inputFields = _getComponentInputFields(this);

        // then
        (0, _chai.expect)(inputFields).to.be.deep.equal(result);
      });
    });
  });
});
define('pix-live/tests/unit/components/result-item-test', ['ember', 'chai', 'mocha', 'ember-mocha'], function (_ember, _chai, _mocha, _emberMocha) {
  'use strict';

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

    var component = void 0;

    (0, _mocha.beforeEach)(function () {
      component = this.subject();
    });

    (0, _mocha.describe)('#resultItem Computed property - undefined case', function () {
      [undefinedAnswer, answerWithEmptyResult, answerWithUndefinedResult, answerWithNullResult].forEach(function (answer) {
        (0, _mocha.it)('should returns false when answer provided is: ' + answer.name, function () {
          // when
          component.set('answer', answer);
          // then
          (0, _chai.expect)(component.get('resultItem')).to.be.undefined;
        });
      });
    });

    (0, _mocha.describe)('#resultItem Computed property - defined case', function () {
      (0, _mocha.it)('should returns true when answer provided with result ok', function () {
        // when
        component.set('answer', answerWithOkResult);
        // then
        (0, _chai.expect)(component.get('resultItem.tooltip')).to.equal('Réponse correcte');
      });

      (0, _mocha.it)('should returns true when answer provided with result uncommon value by not null or undefined ', function () {
        // when
        component.set('answer', answerWithRandomResult);
        // then
        (0, _chai.expect)(component.get('resultItem.tooltip')).to.equal('Correction automatique en cours de développement ;)');
      });
    });

    (0, _mocha.describe)('#validationImplementedForChallengeType', function () {

      [{ challengeType: 'QCM', expected: true }, { challengeType: 'QROC', expected: true }, { challengeType: 'QROCm-ind', expected: false }, { challengeType: 'QROCm-dep', expected: false }, { challengeType: 'QCU', expected: true }].forEach(function (data) {

        (0, _mocha.it)('should return ' + data.expected + ' when challenge type is ' + data.challengeType, function () {
          // given
          var challenge = _ember.default.Object.create({ type: data.challengeType });
          var answer = _ember.default.Object.create({ challenge: challenge });

          // when
          component.set('answer', answer);

          // then
          (0, _chai.expect)(component.get('validationImplementedForChallengeType')).to.equal(data.expected);
        });
      });
    });
  });
});
define('pix-live/tests/unit/components/score-pastille-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Component | score-pastille-component ', function () {

    (0, _emberMocha.setupTest)('component:score-pastille', {});

    var component = void 0;

    beforeEach(function () {
      component = this.subject();
    });

    (0, _mocha.describe)('#Test computed Property', function () {

      (0, _mocha.describe)('#score', function () {
        [{ pixScore: undefined, expectedScore: '--' }, { pixScore: null, expectedScore: '--' }, { pixScore: 0, expectedScore: 0 }, { pixScore: 1, expectedScore: 1 }, { pixScore: 130, expectedScore: 130 }].forEach(function (data) {

          (0, _mocha.it)('should return "' + data.expectedScore + '" when ' + data.pixScore + ' is provided', function () {
            // given
            component.set('pixScore', data.pixScore);

            // when
            var score = component.get('score');

            // then
            (0, _chai.expect)(score).to.equal(data.expectedScore);
          });
        });
      });
    });
  });
});
define('pix-live/tests/unit/components/scoring-panel-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Component | scoring-panel', function () {

    (0, _emberMocha.setupTest)('component:scoring-panel', {});

    (0, _mocha.describe)('#hasATrophy', function () {

      (0, _mocha.it)('should be true when level is more than 0', function () {
        // given
        var assessmentWithTrophy = { estimatedLevel: 1 };
        var component = this.subject();

        // when
        component.set('assessment', assessmentWithTrophy);
        var hasATrophy = component.get('hasATrophy');

        // then
        (0, _chai.expect)(hasATrophy).to.be.equal(true);
      });

      (0, _mocha.it)('should be false when level is equal to 0', function () {
        // given
        var assessmentWithNoTrophy = { estimatedLevel: 0 };
        var component = this.subject();

        // when
        component.set('assessment', assessmentWithNoTrophy);
        var hasATrophy = component.get('hasATrophy');

        // then
        (0, _chai.expect)(hasATrophy).to.be.equal(false);
      });
    });

    (0, _mocha.describe)('#hasSomePix', function () {

      (0, _mocha.it)('should be true when pix score is more than 0', function () {
        // given
        var assessmentWithPix = { pixScore: 1 };
        var component = this.subject();

        // when
        component.set('assessment', assessmentWithPix);
        var hasSomePix = component.get('hasSomePix');

        // then
        (0, _chai.expect)(hasSomePix).to.be.equal(true);
      });

      (0, _mocha.it)('should be false when pix score is equal to 0', function () {
        // given
        var assessmentWithNoPix = { pixScore: 0 };
        var component = this.subject();

        // when
        component.set('assessment', assessmentWithNoPix);
        var hasSomePix = component.get('hasSomePix');

        // then
        (0, _chai.expect)(hasSomePix).to.be.equal(false);
      });
    });
  });
});
define('pix-live/tests/unit/components/signup-textfield-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  var EMPTY_FIRSTNAME_ERROR_MESSAGE = 'Votre prénom n’est pas renseigné.';
  var EMPTY_LASTNAME_ERROR_MESSAGE = 'Votre nom n’est pas renseigné.';
  var INCORRECT_PASSWORD_FORMAT_ERROR_MESSAGE = 'Votre mot de passe doit comporter au moins une lettre, un chiffre et' + ' 8 caractères.';

  (0, _mocha.describe)('Unit | Component | signupTextfieldComponent', function () {

    (0, _emberMocha.setupTest)('component:signup-textfield', {});

    (0, _mocha.describe)('Component should renders :', function () {

      [{ renderingIntent: 'text', inputId: 'shi' }, { renderingIntent: 'text', inputId: '' }, { renderingIntent: 'email', inputId: 'email' }, { renderingIntent: 'password', inputId: 'password' }].forEach(function (_ref) {
        var renderingIntent = _ref.renderingIntent,
            inputId = _ref.inputId;

        (0, _mocha.it)('an ' + renderingIntent + ' when input id is ' + inputId, function () {
          // given
          var component = this.subject();
          // when
          component.set('textfieldName', inputId);
          var inputType = component.get('textfieldType');
          // then
          (0, _chai.expect)(inputType).to.equal(renderingIntent);
        });
      });
    });

    (0, _mocha.describe)('When validationStatus gets "default", Component computed property: ', function () {

      [{ property: 'hasIcon', expectedValue: false }, { property: 'iconType', expectedValue: '' }, { property: 'inputValidationStatus', expectedValue: 'signup-textfield__input--default' }, { property: 'inputContainerStatusClass', expectedValue: 'signup-textfield__input-container--default' }, { property: 'validationMessageClass', expectedValue: 'signup-textfield__message--default' }].forEach(function (_ref2) {
        var property = _ref2.property,
            expectedValue = _ref2.expectedValue;

        (0, _mocha.it)(property + ' should return ' + expectedValue + ' ', function () {
          // Given
          var component = this.subject();
          // When
          component.set('validationStatus', 'default');
          component.set('validationMessage', '');
          var propertyValue = component.get(property);
          // Then
          (0, _chai.expect)(propertyValue).to.equal(expectedValue);
        });
      });

      (0, _mocha.describe)('#validationMessage: ', function () {

        [{ errorType: 'firstname is empty', message: '' }, { errorType: 'lastname is empty', message: '' }, { errorType: 'password is incorrect', message: '' }].forEach(function (_ref3) {
          var errorType = _ref3.errorType,
              message = _ref3.message;


          (0, _mocha.it)('gets ' + message + ' when ' + errorType, function () {
            // Given
            var component = this.subject();
            // When
            component.set('validationStatus', 'default');
            component.set('validationMessage', message);
            var propertyValue = component.get('validationMessage');
            // Then
            (0, _chai.expect)(propertyValue).to.equal(message);
          });
        });
      });
    });

    (0, _mocha.describe)('When validationStatus gets "error", Component computed property: ', function () {

      [{ property: 'hasIcon', expectedValue: true }, { property: 'iconType', expectedValue: 'error' }, { property: 'inputValidationStatus', expectedValue: 'signup-textfield__input--error' }, { property: 'inputContainerStatusClass', expectedValue: 'signup-textfield__input-container--error' }, { property: 'validationMessageClass', expectedValue: 'signup-textfield__message--error' }].forEach(function (_ref4) {
        var property = _ref4.property,
            expectedValue = _ref4.expectedValue;

        (0, _mocha.it)(property + ' should return ' + expectedValue + ' ', function () {
          // Given
          var component = this.subject();
          // When
          component.set('validationStatus', 'error');
          var propertyValue = component.get(property);
          // Then
          (0, _chai.expect)(propertyValue).to.equal(expectedValue);
        });
      });

      (0, _mocha.describe)('#validationMessage: ', function () {

        [{ errorType: 'firstname is empty', message: EMPTY_FIRSTNAME_ERROR_MESSAGE }, { errorType: 'lastname is empty', message: EMPTY_LASTNAME_ERROR_MESSAGE }, { errorType: 'password is incorrect', message: INCORRECT_PASSWORD_FORMAT_ERROR_MESSAGE }].forEach(function (_ref5) {
          var errorType = _ref5.errorType,
              message = _ref5.message;


          (0, _mocha.it)('gets ' + message + ' when ' + errorType, function () {
            // Given
            var component = this.subject();
            // When
            component.set('validationStatus', 'error');
            component.set('validationMessage', message);
            var propertyValue = component.get('validationMessage');
            // Then
            (0, _chai.expect)(propertyValue).to.equal(message);
          });
        });
      });
    });

    (0, _mocha.describe)('When validationStatus gets "success", Component computed property: ', function () {

      [{ property: 'hasIcon', expectedValue: true }, { property: 'iconType', expectedValue: 'success' }, { property: 'inputValidationStatus', expectedValue: 'signup-textfield__input--success' }, { property: 'inputContainerStatusClass', expectedValue: 'signup-textfield__input-container--success' }, { property: 'validationMessageClass', expectedValue: 'signup-textfield__message--success' }].forEach(function (_ref6) {
        var property = _ref6.property,
            expectedValue = _ref6.expectedValue;

        (0, _mocha.it)(property + ' should return ' + expectedValue + ' ', function () {
          // Given
          var component = this.subject();
          // When
          component.set('validationStatus', 'success');
          var propertyValue = component.get(property);
          // Then
          (0, _chai.expect)(propertyValue).to.equal(expectedValue);
        });
      });

      (0, _mocha.describe)('#validationMessage: ', function () {

        [{ errorType: 'firstname is valid', message: EMPTY_FIRSTNAME_ERROR_MESSAGE }, { errorType: 'lastname is valid', message: EMPTY_LASTNAME_ERROR_MESSAGE }, { errorType: 'password is valid', message: INCORRECT_PASSWORD_FORMAT_ERROR_MESSAGE }].forEach(function (_ref7) {
          var errorType = _ref7.errorType,
              message = _ref7.message;


          (0, _mocha.it)('gets ' + message + ' when ' + errorType, function () {
            // Given
            var component = this.subject();
            // When
            component.set('validationStatus', 'error');
            component.set('validationMessage', message);
            var propertyValue = component.get('validationMessage');
            // Then
            (0, _chai.expect)(propertyValue).to.equal(message);
          });
        });
      });
    });
  });
});
define('pix-live/tests/unit/components/timeout-jauge-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Component | timeout-jauge-component ', function () {

    (0, _emberMocha.setupTest)('component:timeout-jauge', {});

    var component = void 0;

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
define('pix-live/tests/unit/components/warning-time-page-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Component | warning-page-component ', function () {

    (0, _emberMocha.setupTest)('component:warning-page', {});

    var component = void 0;

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
define('pix-live/tests/unit/helpers/convert-to-html-test', ['chai', 'mocha', 'pix-live/helpers/convert-to-html'], function (_chai, _mocha, _convertToHtml) {
  'use strict';

  (0, _mocha.describe)('Unit | Helpers | ConvertToHtmlHelper', function () {

    (0, _mocha.it)('works', function () {
      var boldSentence = (0, _convertToHtml.convertToHtml)(['**a bold sentence**']);
      (0, _chai.expect)(boldSentence).to.equal('<p><strong>a bold sentence</strong></p>');
    });

    (0, _mocha.it)('skip call with bad arg', function () {
      (0, _chai.expect)((0, _convertToHtml.convertToHtml)('bad argument')).to.equal('');
      (0, _chai.expect)((0, _convertToHtml.convertToHtml)([])).to.equal('');
    });
  });
});
define('pix-live/tests/unit/helpers/eq-test', ['chai', 'mocha', 'pix-live/helpers/eq'], function (_chai, _mocha, _eq) {
  'use strict';

  (0, _mocha.describe)('Unit | Helper | Eq', function () {
    // Replace this with your real tests.
    [{ input: '', output: false }, { input: null, output: false }, { input: NaN, output: false }, { input: 'Undefined', output: false }, { input: 0, output: false }, { input: 42, output: false }, { input: [42], output: false }, { input: [''], output: false }, { input: [null], output: false }, { input: [], output: false }, { input: ['', ''], output: true }, { input: [42, 43], output: false }, { input: [42, ''], output: false }, { input: [42, 0], output: false }, { input: [42, 'empty'], output: false }, { input: [42, null], output: false }, { input: [42, 'undefined'], output: false }, { input: [42, 42], output: true }].forEach(function (_ref) {
      var input = _ref.input,
          output = _ref.output;

      (0, _mocha.it)('should render ' + output + ' when ' + JSON.stringify(input) + ' provided', function () {
        //When
        var result = (0, _eq.eq)(input);
        //then
        (0, _chai.expect)(result).to.be.equal(output);
      });
    });
  });
});
define('pix-live/tests/unit/helpers/extract-extension-test', ['chai', 'mocha', 'pix-live/helpers/extract-extension'], function (_chai, _mocha, _extractExtension) {
  'use strict';

  (0, _mocha.describe)('Unit | Helpers | ExtractExtension', function () {
    (0, _mocha.it)('works', function () {
      (0, _chai.expect)((0, _extractExtension.extractExtension)(['file.url.ext.docx'])).to.equal('docx');
      (0, _chai.expect)((0, _extractExtension.extractExtension)(['file_url_without_extension'])).to.equal('file_url_without_extension');
      (0, _chai.expect)((0, _extractExtension.extractExtension)([''])).to.equal('');
    });
  });
});
define('pix-live/tests/unit/helpers/get-challenge-component-class-test', ['ember', 'chai', 'mocha', 'pix-live/helpers/get-challenge-component-class'], function (_ember, _chai, _mocha, _getChallengeComponentClass) {
  'use strict';

  (0, _mocha.describe)('Unit | Helper | get challenge component class', function () {

    [{ challengeType: 'QCU', expectedClass: 'challenge-item-qcu' }, { challengeType: 'QCUIMG', expectedClass: 'challenge-item-qcu' }, { challengeType: 'QRU', expectedClass: 'challenge-item-qcu' }, { challengeType: 'QCM', expectedClass: 'challenge-item-qcm' }, { challengeType: 'QCMIMG', expectedClass: 'challenge-item-qcm' }, { challengeType: 'QROC', expectedClass: 'challenge-item-qroc' }, { challengeType: 'QROCm', expectedClass: 'challenge-item-qrocm' }, { challengeType: 'QROCm-ind', expectedClass: 'challenge-item-qrocm' }, { challengeType: 'QROCm-dep', expectedClass: 'challenge-item-qrocm' }].forEach(function (useCase) {

      (0, _mocha.it)('should return component class "' + useCase.expectedClass + '" when challenge type is "' + useCase.challengeType + '"', function () {
        // given
        var challenge = _ember.default.Object.create({ type: useCase.challengeType });
        var params = [challenge];

        // when
        var componentClass = (0, _getChallengeComponentClass.getChallengeComponentClass)(params);

        // then
        (0, _chai.expect)(componentClass).to.equal(useCase.expectedClass);
      });
    });
  });
});
define('pix-live/tests/unit/helpers/or-test', ['chai', 'mocha', 'pix-live/helpers/or'], function (_chai, _mocha, _or) {
  'use strict';

  (0, _mocha.describe)('Unit | Helper | or', function () {
    // Replace this with your real tests.
    [{ input: '', output: false }, { input: null, output: false }, { input: NaN, output: false }, { input: 'Undefined', output: false }, { input: 0, output: false }, { input: true, output: false }, { input: [true], output: false }, { input: [''], output: false }, { input: [null], output: false }, { input: [], output: false }, { input: ['', ''], output: false }, { input: [true, false], output: true }, { input: [true, ''], output: true }, { input: [true, 0], output: true }, { input: [true, 'empty'], output: true }, { input: [true, null], output: true }, { input: [true, 'undefined'], output: true }, { input: [true, true], output: true }].forEach(function (_ref) {
      var input = _ref.input,
          output = _ref.output;

      (0, _mocha.it)('should render ' + output + ' when ' + JSON.stringify(input) + ' provided', function () {
        //When
        var result = (0, _or.or)(input);
        //then
        (0, _chai.expect)(result).to.be.equal(output);
      });
    });
  });
});
define('pix-live/tests/unit/helpers/strip-instruction-test', ['chai', 'mocha', 'pix-live/helpers/strip-instruction'], function (_chai, _mocha, _stripInstruction) {
  'use strict';

  (0, _mocha.describe)('Unit | Helpers | StripInstructionHelper', function () {
    // Replace this with your real tests.
    (0, _mocha.it)('works', function () {
      var result = (0, _stripInstruction.stripInstruction)(['<div class="paragraph"><strong>a bold sentence</strong></div>']);
      (0, _chai.expect)(result).to.equal('a bold sentence...');
    });
  });
});
define('pix-live/tests/unit/models/answer-test', ['ember', 'chai', 'mocha', 'ember-mocha'], function (_ember, _chai, _mocha, _emberMocha) {
  'use strict';

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

        _ember.default.run(function () {
          // given
          var store = _this.store();
          var answer = store.createRecord('answer', { 'result': 'ok' });

          (0, _chai.expect)(answer.get('result')).to.equal('ok');
        });
      });
    });
  });
});
define('pix-live/tests/unit/models/area-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Model | area', function () {
    (0, _emberMocha.setupModelTest)('area', {
      needs: []
    });

    (0, _mocha.it)('exists', function () {
      var model = this.subject();
      (0, _chai.expect)(model).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/models/challenge-test', ['ember', 'chai', 'mocha', 'ember-mocha'], function (_ember, _chai, _mocha, _emberMocha) {
  'use strict';

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

        _ember.default.run(function () {
          // given
          var store = _this.store();
          var challenge = store.createRecord('challenge', { attachments: ['file.url'] });

          // when
          var hasAttachment = challenge.get('hasAttachment');

          // then
          (0, _chai.expect)(hasAttachment).to.be.true;
        });
      });

      (0, _mocha.it)('Should be false when challenge has multiple attachment files', function () {
        var _this2 = this;

        _ember.default.run(function () {
          // given
          var store = _this2.store();
          var challenge = store.createRecord('challenge', { attachments: [] });

          // when
          var hasAttachment = challenge.get('hasAttachment');

          // then
          (0, _chai.expect)(hasAttachment).to.be.false;
        });
      });
    });

    (0, _mocha.describe)('Computed property #hasSingleAttachment', function () {

      (0, _mocha.it)('Should be true when challenge has only one attachment file', function () {
        var _this3 = this;

        _ember.default.run(function () {
          // given
          var store = _this3.store();
          var challenge = store.createRecord('challenge', { attachments: ['file.url'] });

          // when
          var hasSingleAttachment = challenge.get('hasSingleAttachment');

          // then
          (0, _chai.expect)(hasSingleAttachment).to.be.true;
        });
      });

      (0, _mocha.it)('Should be false when challenge has multiple attachment files', function () {
        var _this4 = this;

        _ember.default.run(function () {
          // given
          var store = _this4.store();
          var challenge = store.createRecord('challenge', { attachments: ['file.url', 'file.1.url', 'file.2.url'] });

          // when
          var hasSingleAttachment = challenge.get('hasSingleAttachment');

          // then
          (0, _chai.expect)(hasSingleAttachment).to.be.false;
        });
      });
    });

    (0, _mocha.describe)('Computed property #hasMultipleAttachments', function () {

      (0, _mocha.it)('Should be false when challenge has no attachment file', function () {
        var _this5 = this;

        _ember.default.run(function () {
          // given
          var store = _this5.store();
          var challenge = store.createRecord('challenge', { attachments: [] });

          // when
          var hasMultipleAttachments = challenge.get('hasMultipleAttachments');

          // then
          (0, _chai.expect)(hasMultipleAttachments).to.be.false;
        });
      });

      (0, _mocha.it)('Should be false when challenge has only one attachment file', function () {
        var _this6 = this;

        _ember.default.run(function () {
          // given
          var store = _this6.store();
          var challenge = store.createRecord('challenge', { attachments: ['file.url'] });

          // when
          var hasMultipleAttachments = challenge.get('hasMultipleAttachments');

          // then
          (0, _chai.expect)(hasMultipleAttachments).to.be.false;
        });
      });

      (0, _mocha.it)('Should be true when challenge has multiple attachments files', function () {
        var _this7 = this;

        _ember.default.run(function () {
          // given
          var store = _this7.store();
          var challenge = store.createRecord('challenge', { attachments: ['file.url', 'file.1.url', 'file.2.url'] });

          // when
          var hasMultipleAttachments = challenge.get('hasMultipleAttachments');

          // then
          (0, _chai.expect)(hasMultipleAttachments).to.be.true;
        });
      });
    });
  });
});
define('pix-live/tests/unit/models/competence-test', ['ember', 'chai', 'mocha', 'ember-mocha'], function (_ember, _chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Model | competence model', function () {
    (0, _emberMocha.setupModelTest)('competence', {
      needs: ['model:area']
    });

    (0, _mocha.it)('exists', function () {
      var model = this.subject();
      (0, _chai.expect)(model).to.be.ok;
    });

    (0, _mocha.describe)('#area relationship', function () {

      (0, _mocha.it)('should exist', function () {
        // given
        var Competence = this.store().modelFor('competence');

        // when
        var relationship = _ember.default.get(Competence, 'relationshipsByName').get('area');

        // then
        (0, _chai.expect)(relationship.key).to.equal('area');
        (0, _chai.expect)(relationship.kind).to.equal('belongsTo');
      });
    });

    (0, _mocha.describe)('#areaName computed property', function () {

      (0, _mocha.it)('should be an alias for "area" relationship on "name" property', function () {
        var _this = this;

        _ember.default.run(function () {
          // given
          var store = _this.store();
          var area = store.createRecord('area', { name: 'coucou' });
          var competence = _this.subject({ area: area });

          // when
          var areaName = competence.get('areaName');

          // then
          (0, _chai.expect)(areaName).to.equal('coucou');
        });
      });
    });
  });
});
define('pix-live/tests/unit/models/course-group-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Model | Course-group', function () {

    (0, _emberMocha.setupModelTest)('course-group', {
      needs: ['model:course']
    });

    (0, _mocha.it)('exists', function () {
      var model = this.subject();
      (0, _chai.expect)(model).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/models/course-test', ['ember', 'chai', 'mocha', 'ember-mocha'], function (_ember, _chai, _mocha, _emberMocha) {
  'use strict';

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

        _ember.default.run(function () {
          // given
          var store = _this.store();
          var challenge = store.createRecord('challenge', {});
          var course = _this.subject({ challenges: [challenge] });

          (0, _chai.expect)(course.getProgress(challenge)).to.have.property('currentStep', 1);
        });
      });

      (0, _mocha.it)('maxStep is 2 when there is 2 challenges in the course', function () {
        var _this2 = this;

        _ember.default.run(function () {
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

        _ember.default.run(function () {
          // given
          var store = _this3.store();
          var challenge1 = store.createRecord('challenge', {});
          var challenge2 = store.createRecord('challenge', {});
          var course = _this3.subject({ challenges: [challenge1, challenge2] });

          (0, _chai.expect)(course.getProgress(challenge2)).to.have.property('currentStep', 2);
        });
      });
    });
  });
});
define('pix-live/tests/unit/models/feedback-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

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
define('pix-live/tests/unit/models/follower-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

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
define('pix-live/tests/unit/models/user-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Model | user model', function () {
    (0, _emberMocha.setupModelTest)('user', {
      // Specify the other units that are required for this test.
      needs: ['model:competence']
    });
    // Replace this with your real tests.
    (0, _mocha.it)('exists', function () {
      var model = this.subject();
      // var store = this.store();
      (0, _chai.expect)(model).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/routes/application-test', ['ember', 'chai', 'mocha', 'ember-mocha'], function (_ember, _chai, _mocha, _emberMocha) {
  'use strict';

  var SplashServiceStub = _ember.default.Object.extend({
    hideCount: 0,
    hide: function hide() {
      this.hideCount++;
    }
  });

  (0, _mocha.describe)('Unit | Route | application splash', function () {
    (0, _emberMocha.setupTest)('route:application', {
      needs: ['service:splash', 'service:current-routed-modal']
    });

    (0, _mocha.it)('initializes correctly', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });

    (0, _mocha.it)('hides the splash when the route is activated', function () {
      var splashStub = SplashServiceStub.create();
      var route = this.subject({ splash: splashStub });
      route.activate();
      (0, _chai.expect)(splashStub.hideCount).to.equal(1);
    });
  });
});
define('pix-live/tests/unit/routes/assessments/get-challenge-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Route | Assessments.ChallengeRoute', function () {

    (0, _emberMocha.setupTest)('route:assessments.get-challenge', {
      needs: ['service:assessment', 'service:current-routed-modal']
    });

    (0, _mocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/routes/assessments/get-results-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Route | Assessments.ResultsRoute', function () {

    (0, _emberMocha.setupTest)('route:assessments.get-results', {
      needs: ['service:current-routed-modal']
    });

    (0, _mocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/routes/challenges/get-preview-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Route | challenges.get-preview', function () {

    (0, _emberMocha.setupTest)('route:challenges.get-preview', {
      needs: ['service:current-routed-modal']
    });

    (0, _mocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/routes/competences-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Route | competences', function () {

    (0, _emberMocha.setupTest)('route:competences', {
      needs: ['service:panelActions', 'service:current-routed-modal']
    });

    (0, _mocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/routes/compte-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Route | compte', function () {
    (0, _emberMocha.setupTest)('route:compte', {
      needs: ['service:current-routed-modal', 'service:session']
    });

    (0, _mocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });

    (0, _mocha.it)('should redirect to /connexion', function () {
      // Given
      var route = this.subject();

      // Then
      (0, _chai.expect)(route.authenticationRoute).to.equal('/connexion');
    });
  });
});
define('pix-live/tests/unit/routes/courses-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Route | courses', function () {

    (0, _emberMocha.setupTest)('route:courses', {
      needs: ['service:current-routed-modal']
    });

    (0, _mocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/routes/courses/get-challenge-preview-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Route | ChallengePreview', function () {

    (0, _emberMocha.setupTest)('route:courses/get-challenge-preview', {
      needs: ['service:current-routed-modal', 'service:assessment']
    });

    (0, _mocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/routes/courses/get-course-preview-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Route | CoursePreview', function () {

    (0, _emberMocha.setupTest)('route:courses/get-course-preview', {
      needs: ['service:current-routed-modal']
    });

    (0, _mocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/routes/index-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Route | index', function () {

    (0, _emberMocha.setupTest)('route:index', {
      needs: ['service:current-routed-modal', 'service:session']
    });

    (0, _mocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/routes/inscription-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Route | inscription', function () {
    (0, _emberMocha.setupTest)('route:inscription', {
      needs: ['service:current-routed-modal']
    });

    (0, _mocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/routes/login-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var SessionStub = function () {
    function SessionStub() {
      _classCallCheck(this, SessionStub);
    }

    _createClass(SessionStub, [{
      key: 'authenticate',
      value: function authenticate() {
        this.callArgs = Array.from(arguments);
        return Promise.resolve();
      }
    }]);

    return SessionStub;
  }();

  (0, _mocha.describe)('Unit | Route | login page', function () {
    (0, _emberMocha.setupTest)('route:login', {
      needs: ['service:current-routed-modal', 'service:session']
    });

    var expectedEmail = 'email@example.net';
    var expectedPassword = 'azerty';
    var sessionStub = new SessionStub();

    (0, _mocha.it)('should authenticate the user', function () {
      // Given
      var route = this.subject();
      route.set('session', sessionStub);
      route.transitionTo = function () {};

      // When
      var promise = route.actions.signin.call(route, expectedEmail, expectedPassword);

      // Then
      return promise.then(function () {
        (0, _chai.expect)(sessionStub.callArgs).to.deep.equal(['authenticator:simple', expectedEmail, expectedPassword]);
      });
    });
  });
});
define('pix-live/tests/unit/routes/logout-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var SessionStub = function () {
    function SessionStub() {
      _classCallCheck(this, SessionStub);

      this.isInvalidateCalled = false;
    }

    _createClass(SessionStub, [{
      key: 'invalidate',
      value: function invalidate() {
        this.isInvalidateCalled = true;
      }
    }]);

    return SessionStub;
  }();

  (0, _mocha.describe)('Unit | Route | logout', function () {
    (0, _emberMocha.setupTest)('route:logout', {
      needs: ['service:current-routed-modal', 'service:session']
    });

    (0, _mocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });

    (0, _mocha.it)('should disconnect the user', function () {
      // Given
      var route = this.subject();
      var sessionStub = new SessionStub();
      route.set('session', sessionStub);
      route.transitionTo = function () {};

      // When
      route.beforeModel();

      // Then
      (0, _chai.expect)(sessionStub.isInvalidateCalled).to.be.true;
    });

    (0, _mocha.it)('should redirect after disconnection', function () {
      // Given
      var isTransitionToCalled = false;
      var isTransitionToArgs = [];

      var sessionStub = new SessionStub();
      var route = this.subject();
      route.set('session', sessionStub);
      route.transitionTo = function () {
        isTransitionToCalled = true;
        isTransitionToArgs = Array.from(arguments);
      };

      // When
      route.beforeModel();

      // Then
      (0, _chai.expect)(isTransitionToCalled).to.be.true;
      (0, _chai.expect)(isTransitionToArgs).to.deep.equal(['/']);
    });
  });
});
define('pix-live/tests/unit/routes/placement-tests-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Route | placement-tests', function () {

    (0, _emberMocha.setupTest)('route:placement-tests', {
      needs: ['service:delay', 'service:current-routed-modal']
    });

    (0, _mocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/routes/project-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Route | project', function () {

    (0, _emberMocha.setupTest)('route:project', {
      needs: ['service:current-routed-modal']
    });

    (0, _mocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/routes/series-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Route | courseGroups', function () {
    (0, _emberMocha.setupTest)('route:courseGroups', {
      // Specify the other units that are required for this test.
      needs: ['service:current-routed-modal']
    });

    (0, _mocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/services/assessment-test', ['ember', 'chai', 'mocha', 'ember-mocha'], function (_ember, _chai, _mocha, _emberMocha) {
  'use strict';

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

        return _ember.default.run(function () {
          var store = _this.container.lookup('service:store');

          var _instantiateModels = instantiateModels(store, [{ id: 1 }, { id: 2 }]),
              challenges = _instantiateModels.challenges,
              assessment = _instantiateModels.assessment;

          (0, _chai.expect)(_this.subject().getNextChallenge(challenges[0], assessment)).to.respondsTo('then');
        });
      });

      (0, _mocha.it)('return the next challenge when current challenge is not the assessment\'s last one', function () {
        var _this2 = this;

        return _ember.default.run(function () {
          // given
          var store = _this2.container.lookup('service:store');

          var _instantiateModels2 = instantiateModels(store, [{ id: 1 }, { id: 2 }]),
              challenges = _instantiateModels2.challenges,
              assessment = _instantiateModels2.assessment;

          // when
          return _this2.subject().getNextChallenge(challenges[0], assessment).then(function (actual) {
            // then
            (0, _chai.expect)(actual.get('id')).to.equal(challenges[1].get('id'));
          });
        });
      });

      (0, _mocha.it)('return the next challenge when current challenge is the assessment\'s latest', function () {
        var _this3 = this;

        return _ember.default.run(function () {
          // given
          var store = _this3.container.lookup('service:store');

          var _instantiateModels3 = instantiateModels(store, [{ id: 1 }, { id: 2 }]),
              challenges = _instantiateModels3.challenges,
              assessment = _instantiateModels3.assessment;

          // when
          return _this3.subject().getNextChallenge(challenges[1], assessment).then(function (actual) {
            // then
            (0, _chai.expect)(actual).to.be.null;
          });
        });
      });

      (0, _mocha.it)('return challenge model objects well formed', function () {
        var _this4 = this;

        return _ember.default.run(function () {
          // given
          var store = _this4.container.lookup('service:store');

          var _instantiateModels4 = instantiateModels(store, [{ id: 1 }, { id: 2 }, { id: 3 }]),
              challenges = _instantiateModels4.challenges,
              assessment = _instantiateModels4.assessment;

          // when
          return _this4.subject().getNextChallenge(challenges[0], assessment).then(function (challenge1) {

            (0, _chai.expect)(challenge1.get('id')).to.equal(challenges[1].get('id'));

            return _this4.subject().getNextChallenge(challenge1, assessment);
          }).then(function (challenge2) {

            (0, _chai.expect)(challenge2.get('id')).to.equal(challenges[2].get('id'));

            return _this4.subject().getNextChallenge(challenge2, assessment);
          }).then(function (challenge3) {

            (0, _chai.expect)(challenge3).to.be.null;
          });
        });
      });
    });
  });
});
define('pix-live/tests/unit/services/delay-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

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
define('pix-live/tests/unit/services/splash-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  function createSplash() {
    var splash = document.createElement('div');
    splash.setAttribute('id', 'app-splash');
    document.body.appendChild(splash);
  }

  function removeSplash() {
    var splash = document.getElementById('app-splash');
    if (splash) {
      splash.parentNode.removeChild(splash);
    }
  }

  function hasSplash() {
    return document.getElementById('app-splash') != null;
  }

  (0, _mocha.describe)('Unit | Service | splash', function () {
    (0, _emberMocha.setupTest)('service:splash');

    (0, _mocha.describe)('#hide', function () {
      context('when a splash is present in the DOM', function () {
        (0, _mocha.it)('removes the splash from the DOM', function () {
          // Given
          var splash = this.subject();
          createSplash();
          (0, _chai.expect)(hasSplash()).to.be.true;
          // When
          splash.hide();
          // Then
          (0, _chai.expect)(hasSplash()).to.be.false;
        });
      });

      context('when there is no splash', function () {
        (0, _mocha.it)('does nothing', function () {
          // Given
          var splash = this.subject();
          (0, _chai.expect)(hasSplash()).to.be.false;
          // When
          splash.hide();
          // Then
          (0, _chai.expect)(hasSplash()).to.be.false;
        });
      });

      afterEach(function () {
        removeSplash();
      });
    });
  });
});
define('pix-live/tests/unit/transforms/array-test', ['chai', 'mocha', 'pix-live/transforms/array'], function (_chai, _mocha, _array) {
  'use strict';

  (0, _mocha.describe)('Unit | Transformer | Array', function () {

    (0, _mocha.describe)('#deserialize', function () {

      (0, _mocha.it)('should return an Array when Array given', function () {
        var transform = new _array.default();
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
define('pix-live/tests/unit/utils/answers-as-object-test', ['pix-live/utils/answers-as-object', 'chai', 'mocha'], function (_answersAsObject, _chai, _mocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Utility | answers as object', function () {

    (0, _mocha.describe)('#answersAsObject', function () {

      (0, _mocha.it)('should return an object of given answers with key of the input', function () {
        // given
        var answer = {
          value: 'num1: \'4\' num2: \'1\' num3: \'2\' num4: \'3\''
        };
        var expectedResult = {
          'num1': '4',
          'num2': '1',
          'num3': '2',
          'num4': '3'
        };

        // when
        var result = (0, _answersAsObject.default)(answer.value);

        // then
        (0, _chai.expect)(result).to.deep.equal(expectedResult);
      });

      (0, _mocha.it)('should return an empty object when the answer is aband', function () {
        // given
        var answer = { value: '#ABAND#' };
        var inputKeys = ['key1', 'key2', 'key3'];
        var expectedResult = { key1: '', key2: '', key3: '' };
        // when
        var result = (0, _answersAsObject.default)(answer.value, inputKeys);

        // then
        (0, _chai.expect)(result).to.deep.equal(expectedResult);
      });
    });
  });
});
define('pix-live/tests/unit/utils/email-validator-test', ['chai', 'mocha', 'pix-live/utils/email-validator'], function (_chai, _mocha, _emailValidator) {
  'use strict';

  (0, _mocha.describe)('Unit | Utility | email validator', function () {
    (0, _mocha.describe)('Invalid emails', function () {
      ['', ' ', null, 'INVALID_EMAIL', 'INVALID_EMAIL@', 'INVALID_EMAIL@pix', 'INVALID_EMAIL@pix.', '@pix.fr', '@pix'].forEach(function (badEmail) {
        (0, _mocha.it)('should return false when email is invalid: ' + badEmail, function () {
          (0, _chai.expect)((0, _emailValidator.default)(badEmail)).to.be.false;
        });
      });
    });

    (0, _mocha.describe)('Valid emails', function () {
      ['follower@pix.fr', 'follower@pix.fr ', ' follower@pix.fr', ' follower@pix.fr ', ' follower-beta@pix.fr ', ' follower_beta@pix.fr ', 'follower+beta@pix.fr', 'follower+beta@pix.gouv.fr', 'follower+beta@pix.beta.gouv.fr'].forEach(function (validEmail) {
        (0, _mocha.it)('should return true if provided email is valid: ' + validEmail, function () {
          (0, _chai.expect)((0, _emailValidator.default)(validEmail)).to.be.true;
        });
      });
    });
  });
});
define('pix-live/tests/unit/utils/labeled-checkboxes-test', ['chai', 'mocha', 'pix-live/utils/labeled-checkboxes'], function (_chai, _mocha, _labeledCheckboxes) {
  'use strict';

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
          (0, _chai.expect)(JSON.stringify((0, _labeledCheckboxes.default)(testCase.proposals, testCase.answers))).to.equal(JSON.stringify(testCase.output));
        });
      });
    });
  });
});
define('pix-live/tests/unit/utils/labels-as-object-test', ['chai', 'mocha', 'pix-live/utils/labels-as-object'], function (_chai, _mocha, _labelsAsObject) {
  'use strict';

  (0, _mocha.describe)('Unit | Utility | labels as object', function () {
    (0, _mocha.describe)('#labelsAsObject', function () {

      (0, _mocha.it)('should return an object with labels and key on the input 1', function () {
        // given
        var challenge = {
          proposals: 'Clé USB : ${num1}\n\n' + 'Carte mémoire (SD) : ${num2}\n\n' + 'Disque dur externe : ${num3}\n\n' + 'CD-R / DVD-R : ${num4}'
        };

        var expectedResult = {
          'num1': 'Clé USB : ',
          'num2': 'Carte mémoire (SD) : ',
          'num3': 'Disque dur externe : ',
          'num4': 'CD-R / DVD-R : '
        };
        //when
        var result = (0, _labelsAsObject.default)(challenge.proposals);

        //then
        (0, _chai.expect)(result).to.be.deep.equal(expectedResult);
      });

      (0, _mocha.it)('should return an object with labels and key on the input 2', function () {
        // given
        var challenge = {
          proposals: '- Combien le dossier “projet PIX” contient-il de dossiers ? ${Num1}\n\n' + '- Combien le dossier “images” contient-il de fichiers ? ${Num2}'
        };

        var expectedResult = {
          'Num1': '- Combien le dossier “projet PIX” contient-il de dossiers ? ',
          'Num2': '- Combien le dossier “images” contient-il de fichiers ? '
        };
        //when
        var result = (0, _labelsAsObject.default)(challenge.proposals);

        //then
        (0, _chai.expect)(result).to.be.deep.equal(expectedResult);
      });

      (0, _mocha.it)('should return an object with labels and key on the input 3', function () {
        // given
        var challenge = {
          proposals: '- alain@pix.fr : ${num1}\n' + '- leonie@pix.fr : ${num2}\n' + '- Programme_Pix.pdf : ${num3}\n' + '- lucie@pix.fr : ${num4}\n' + '- Programme du festival Pix : ${num5}\n' + '- jeremy@pix.fr : ${num6}'
        };

        var expectedResult = {
          'num1': '- alain@pix.fr : ',
          'num2': '- leonie@pix.fr : ',
          'num3': '- Programme_Pix.pdf : ',
          'num4': '- lucie@pix.fr : ',
          'num5': '- Programme du festival Pix : ',
          'num6': '- jeremy@pix.fr : '
        };
        //when
        var result = (0, _labelsAsObject.default)(challenge.proposals);

        //then
        (0, _chai.expect)(result).to.be.deep.equal(expectedResult);
      });

      (0, _mocha.it)('should return object with labels and if the key of the input has a placeholder (after #), it does not keep the placeholder', function () {
        // given
        var challenge = {
          proposals: 'Nom du fichier : ${nomfichier}\nTaille (en ko) : ${taille}\nType : ${type}\nDate de modification : ${datemodif#JJ/MM/AAAA}'
        };
        var expectedResult = {
          'nomfichier': 'Nom du fichier : ',
          'taille': 'Taille (en ko) : ',
          'type': 'Type : ',
          'datemodif': 'Date de modification : '
        };
        //when
        var result = (0, _labelsAsObject.default)(challenge.proposals);

        //then
        (0, _chai.expect)(result).to.be.deep.equal(expectedResult);
      });
    });
  });
});
define('pix-live/tests/unit/utils/lodash-custom-test', ['chai', 'mocha', 'pix-live/utils/lodash-custom'], function (_chai, _mocha, _lodashCustom) {
  'use strict';

  (0, _mocha.describe)('Unit | Utility | lodash custom', function () {

    (0, _mocha.describe)('#isNonEmptyString', function () {

      (0, _mocha.it)('when no arg, returns false', function () {
        (0, _chai.expect)(_lodashCustom.default.isNonEmptyString()).to.equal(false);
      });

      [{ value: undefined, expected: false }, { value: null, expected: false }, { value: new Date(), expected: false }, { value: '', expected: false }, { value: 'abcd', expected: true }].forEach(function (item) {
        (0, _mocha.it)('should return ' + item.expected + ' when value is ' + item.value, function () {
          (0, _chai.expect)(_lodashCustom.default.isNonEmptyString(item.value)).to.equal(item.expected);
        });
      });
    });

    (0, _mocha.describe)('#isNonEmptyArray', function () {

      (0, _mocha.it)('when no arg, returns false', function () {
        (0, _chai.expect)(_lodashCustom.default.isNonEmptyArray()).to.equal(false);
      });

      [{ value: undefined, expected: false }, { value: null, expected: false }, { value: new Date(), expected: false }, { value: [], expected: false }, { value: [''], expected: true }, { value: ['myvalue'], expected: true }, { value: ['1', null, true], expected: true }].forEach(function (item) {
        (0, _mocha.it)('should return ' + item.expected + ' when value of array is ' + JSON.stringify(item.value), function () {
          (0, _chai.expect)(_lodashCustom.default.isNonEmptyArray(item.value)).to.equal(item.expected);
        });
      });
    });

    (0, _mocha.describe)('#isNotInteger', function () {

      (0, _mocha.it)('when no arg, returns false', function () {
        (0, _chai.expect)(_lodashCustom.default.isNotInteger()).to.equal(true);
      });

      [{ value: undefined, expected: true }, { value: 'undefined', expected: true }, { value: null, expected: true }, { value: '', expected: true }, { value: 'abcd', expected: true }, { value: 0, expected: false }, { value: 5, expected: false }, { value: '5', expected: true }].forEach(function (item) {
        (0, _mocha.it)('should return ' + item.expected + ' when value is ' + item.value, function () {
          (0, _chai.expect)(_lodashCustom.default.isNotInteger(item.value)).to.equal(item.expected);
        });
      });
    });

    (0, _mocha.describe)('#isTruthy', function () {

      (0, _mocha.it)('when no arg, returns false', function () {
        (0, _chai.expect)(_lodashCustom.default.isTruthy()).to.equal(false);
      });

      [{ value: undefined, expected: false }, { value: null, expected: false }, { value: true, expected: true }, { value: false, expected: false }, { value: 0, expected: false }, { value: 1, expected: true }, { value: [], expected: false }, { value: [1, 2, 3], expected: true }, { value: { a: 42 }, expected: true }, { value: {}, expected: false }, { value: '', expected: false }, { value: 'foo', expected: true }].forEach(function (item) {
        (0, _mocha.it)('should return ' + item.expected + ' when value is ' + item.value, function () {
          (0, _chai.expect)(_lodashCustom.default.isTruthy(item.value)).to.equal(item.expected);
        });
      });
    });

    (0, _mocha.describe)('#hasSomeTruthyProps', function () {

      (0, _mocha.it)('when no arg, returns false', function () {
        (0, _chai.expect)(_lodashCustom.default.hasSomeTruthyProps()).to.equal(false);
      });

      [{ value: undefined, expected: false }, { value: null, expected: false }, { value: 'azerty', expected: false }, { value: {}, expected: false }, { value: { a: '' }, expected: false }, { value: { a: false }, expected: false }, { value: { a: undefined }, expected: false }, { value: { a: null }, expected: false }, { value: { a: 0 }, expected: false }, { value: { a: false }, expected: false }, { value: { a: 42 }, expected: true }, { value: { a: 42, b: false }, expected: true }, { value: { a: '', b: false }, expected: false }, { value: { a: 42, b: true }, expected: true }].forEach(function (item) {
        (0, _mocha.it)('should return ' + item.expected + ' when value is ' + item.value, function () {
          (0, _chai.expect)(_lodashCustom.default.hasSomeTruthyProps(item.value)).to.equal(item.expected);
        });
      });
    });

    (0, _mocha.describe)('#isNumeric', function () {

      [0, 2, 17, +17, -17, -0, .0, .17, -.17, 1e17, 1e-17, Infinity, -Infinity, new Number('123')].forEach(function (n) {
        (0, _mocha.it)('should return true when it is already a number type [n=' + n + ']', function () {
          (0, _chai.expect)(_lodashCustom.default.isNumeric(n)).to.be.true;
        });
      });

      [new String('1337'), '1337', '-1337', '1337.17', '-1337.17', '0017', '00000.017'].forEach(function (n) {
        (0, _mocha.it)('should return true when it is a string that looks like a number [n=' + n + ']', function () {
          (0, _chai.expect)(_lodashCustom.default.isNumeric(n)).to.be.true;
        });
      });

      ['abc', '6qwerty0', '17%', '-17%', '#17', '2^18', '17px', '*', '', true, false, [], {}, function () {}, undefined, null].forEach(function (n) {
        (0, _mocha.it)('should return false when it is a string that does not look like a number [n=' + n + ']', function () {
          (0, _chai.expect)(_lodashCustom.default.isNumeric(n)).to.be.false;
        });
      });
    });
  });
});
define('pix-live/tests/unit/utils/password-validator-test', ['chai', 'mocha', 'pix-live/utils/password-validator'], function (_chai, _mocha, _passwordValidator) {
  'use strict';

  (0, _mocha.describe)('Unit | Utility | password validator', function () {
    (0, _mocha.describe)('Invalid password', function () {
      ['', ' ', null, '@pix', '@pix.fr', '1      1', 'password', '12345678&', '+!@)-=`"#&', '1a      a1', '+!@)-=`"#&1', 'null 1' + null].forEach(function (badPassword) {
        (0, _mocha.it)('should return false when password is invalid: ' + badPassword, function () {
          (0, _chai.expect)((0, _passwordValidator.default)(badPassword)).to.be.false;
        });
      });
    });

    (0, _mocha.describe)('Valid password', function () {
      ['PIXBETA1', 'PIXBETA12', 'NULLNULL1', '12345678a', '12345678ab', '12345678ab+', '12345678ab+!', '12345678ab+!@', '12345678ab+!@)-=`', '12345678ab+!@)-=`"', '12345678ab+!@)-=`"#&'].forEach(function (validPassword) {
        (0, _mocha.it)('should return true if provided password is valid: ' + validPassword, function () {
          (0, _chai.expect)((0, _passwordValidator.default)(validPassword)).to.be.true;
        });
      });
    });
  });
});
define('pix-live/tests/unit/utils/proposals-as-array-test', ['chai', 'mocha', 'pix-live/utils/proposals-as-array'], function (_chai, _mocha, _proposalsAsArray) {
  'use strict';

  (0, _mocha.describe)('Unit | Utility | proposals as array', function () {
    // Replace this with your real tests.
    var testData = [{ data: '', expected: [] }, { data: 'foo', expected: [] }, { data: '- foo', expected: ['foo'] }, { data: '-foo\n- bar', expected: ['foo', 'bar'] }, { data: '- cerf-volant', expected: ['cerf-volant'] }, { data: '- xi\n- foo mi', expected: ['xi', 'foo mi'] }, { data: '- joli\n- cerf-volant', expected: ['joli', 'cerf-volant'] }, { data: '- xi\n- foo\n- mi', expected: ['xi', 'foo', 'mi'] }, { data: '-- foo', expected: ['- foo'] }, { data: '- foo\n\r\t\n\r\t\n\r\t\n- bar', expected: ['foo', 'bar'] }];

    testData.forEach(function (_ref) {
      var data = _ref.data,
          expected = _ref.expected;


      (0, _mocha.it)('"' + data.toString() + '" retourne [' + expected + ']', function () {
        (0, _chai.expect)((0, _proposalsAsArray.default)(data)).to.deep.equal(expected);
      });
    });
  });
});
define('pix-live/tests/unit/utils/proposals-as-blocks-test', ['chai', 'mocha', 'pix-live/utils/proposals-as-blocks'], function (_chai, _mocha, _proposalsAsBlocks) {
  'use strict';

  (0, _mocha.describe)('Unit | Utility | proposals as blocks', function () {

    var testData = [{ data: '', expected: [] }, { data: 'Text', expected: [{ text: 'Text' }] }, { data: 'Text test plop', expected: [{ text: 'Text test plop' }] }, { data: '${qroc}', expected: [{ input: 'qroc' }] }, { data: 'Test: ${test}', expected: [{ text: 'Test:' }, { input: 'test' }] }, { data: 'Test: ${test} (kilometres)', expected: [{ text: 'Test:' }, { input: 'test' }, { text: '(kilometres)' }] }, { data: '${plop}, ${plop} ${plop}', expected: [{ input: 'plop' }, { text: ',' }, { input: 'plop' }, { input: 'plop' }] }, { data: '${plop#var}', expected: [{ input: 'plop', placeholder: 'var' }] }, { data: 'line1\nline2', expected: [{ text: 'line1' }, { breakline: true }, { text: 'line2' }] }, { data: 'line1\r\nline2', expected: [{ text: 'line1' }, { breakline: true }, { text: 'line2' }] }, { data: 'line1\n\rline2', expected: [{ text: 'line1' }, { breakline: true }, { text: 'line2' }] }, { data: 'line1\n\nline2', expected: [{ text: 'line1' }, { breakline: true }, { text: 'line2' }] }];

    testData.forEach(function (_ref) {
      var data = _ref.data,
          expected = _ref.expected;


      (0, _mocha.it)('"' + data + '" retourne ' + JSON.stringify(expected), function () {
        (0, _chai.expect)((0, _proposalsAsBlocks.default)(data)).to.deep.equal(expected);
      });
    });
  });
});
define('pix-live/tests/unit/utils/result-details-as-object-test', ['chai', 'mocha', 'pix-live/utils/result-details-as-object'], function (_chai, _mocha, _resultDetailsAsObject) {
  'use strict';

  (0, _mocha.describe)('#resultDetailsAsObject', function () {

    (0, _mocha.it)('it should return an object from the yaml String', function () {
      // given
      var resultDetailYaml = 'S1: false\nS2: true\n';
      var expectedObject = { S1: false, S2: true };
      // when
      var result = (0, _resultDetailsAsObject.default)(resultDetailYaml);
      // then
      (0, _chai.expect)(result).to.deep.equal(expectedObject);
    });

    (0, _mocha.it)('it should return an empty object from the yaml String null\\n', function () {
      // given
      var resultDetailYaml = 'null\n';
      var expectedObject = {};

      // when
      var result = (0, _resultDetailsAsObject.default)(resultDetailYaml);
      // then
      (0, _chai.expect)(result).to.deep.equal(expectedObject);
    });
  });
});
define('pix-live/tests/unit/utils/solution-as-object-test', ['chai', 'mocha', 'pix-live/utils/solution-as-object'], function (_chai, _mocha, _solutionAsObject) {
  'use strict';

  (0, _mocha.describe)('Unit | Utility | solution as object', function () {

    (0, _mocha.describe)('#solutionsAsObject', function () {

      (0, _mocha.it)('should return an object which contains arrays of the solution for each input', function () {
        // given
        var solution = {
          value: 'num1:\n- 4\nnum2:\n- 2\nnum3:\n- 1\nnum4:\n- 3'
        };
        var expectedResult = {
          'num1': ['4'],
          'num2': ['2'],
          'num3': ['1'],
          'num4': ['3']
        };
        // when
        var result = (0, _solutionAsObject.default)(solution.value);

        // then
        (0, _chai.expect)(result).to.be.deep.equal(expectedResult);
      });

      (0, _mocha.it)('should return an object which contains arrays of the multiple potentials solution for each input', function () {
        // given
        var solution = {
          value: 'num1:\n- 2\nnum2:\n- 3\n- 4\nnum3:\n- 1\n- 5\n- 6'
        };
        var expectedResult = {
          'num1': ['2'],
          'num2': ['3', '4'],
          'num3': ['1', '5', '6']
        };
        // when
        var result = (0, _solutionAsObject.default)(solution.value);

        // then
        (0, _chai.expect)(result).to.be.deep.equal(expectedResult);
      });
    });
  });
});
define('pix-live/tests/unit/utils/value-as-array-of-boolean-test', ['chai', 'mocha', 'pix-live/utils/value-as-array-of-boolean'], function (_chai, _mocha, _valueAsArrayOfBoolean) {
  'use strict';

  (0, _mocha.describe)('Unit | Utility | value as array of boolean', function () {
    // Replace this with your real tests.
    var testData = [{ when: 'Empty String', input: '', expected: [] }, { when: 'Wrong type as input', input: new Date(), expected: [] }, { when: 'Undefined input', input: undefined, expected: [] }, { when: 'Nominal case', input: '2,3', expected: [false, true, true] }, { when: 'Only one value', input: '4', expected: [false, false, false, true] }, { when: 'Resist to order, empty space and empty value', input: ',4, 2 , 2,1,  ,', expected: [true, true, false, true] }];

    testData.forEach(function (_ref) {
      var when = _ref.when,
          input = _ref.input,
          expected = _ref.expected;


      (0, _mocha.it)('"' + when + '", example : "' + JSON.stringify(input) + '" retourne [' + expected + ']', function () {
        (0, _chai.expect)((0, _valueAsArrayOfBoolean.default)(input)).to.deep.equal(expected);
      });
    });
  });
});
require('pix-live/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
