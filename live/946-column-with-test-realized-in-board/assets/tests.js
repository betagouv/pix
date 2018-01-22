'use strict';

define('pix-live/tests/acceptance/a4-demarrer-un-test-test', ['mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (_mocha, _chai, _startApp, _destroyApp) {
  'use strict';

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

    (0, _mocha.it)('a4.2 Je peux démarrer un test directement depuis la nouvelle url "courses/:course_id"', function () {
      visit('/courses/ref_course_id');
      andThen(function () {
        (0, _chai.expect)(currentURL()).to.be.equal('/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id');
      });
    });

    (0, _mocha.it)('a4.4 Quand je démarre un test, je suis redirigé vers la première épreuve du test', function () {
      var $startLink = findWithAssert(START_BUTTON);
      return click($startLink).then(function () {
        findWithAssert('.assessment-challenge');
        (0, _chai.expect)(currentURL()).to.contain(URL_OF_FIRST_TEST);
      });
    });

    (0, _mocha.it)('a4.5 Quand je démarre un test sur mobile, une modale m\'averti que l\'expérience ne sera pas optimale, mais je peux quand même continuer', function (done) {
      var $startLink = findWithAssert(START_BUTTON);

      (0, _chai.expect)(find(MODAL_SELECTOR)).to.have.lengthOf(0);

      // test on mobile
      triggerEvent('.course-list', 'simulateMobileScreen');

      // clear local storage
      andThen(function () {
        window.localStorage.clear();
        (0, _chai.expect)(currentURL()).to.equals('/');
        (0, _chai.expect)(find(MODAL_SELECTOR)).to.have.lengthOf(0);
      });

      // start a test
      click($startLink);

      // blocked by modal
      andThen(function () {
        // XXX : ickiest hack : wait 500ms for bootstrap transition to complete
        Ember.run.later(function () {
          (0, _chai.expect)(find(MODAL_SELECTOR)).to.have.lengthOf(1);
          (0, _chai.expect)(currentURL()).to.equals('/');
          find('a[data-dismiss]').click();

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
        Ember.run.later(function () {
          (0, _chai.expect)(currentURL()).to.equals('/');
          (0, _chai.expect)(find(MODAL_SELECTOR)).to.have.lengthOf(0);
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

    (0, _mocha.it)('b1.1 Une liste de radiobuttons doit s\'afficher', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var $proposals;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return visit('/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id');

            case 2:

              // then
              $proposals = Ember.$('input[type=radio][name="radio"]');

              (0, _chai.expect)($proposals).to.have.lengthOf(4);

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    (0, _mocha.it)('b1.2 Par défaut, le radiobutton de la réponse sauvegardée est affiché', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return visit('/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id');

            case 2:

              // then
              (0, _chai.expect)(Ember.$('input[type=radio][name="radio"]:checked')).to.have.lengthOf(1);

            case 3:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    (0, _mocha.it)('b1.3 Une liste ordonnée d\'instruction doit s\'afficher', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return visit('/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id');

            case 2:

              // then
              (0, _chai.expect)(Ember.$('.proposal-text:eq(0)').text().trim()).to.equal('1ere possibilite');
              (0, _chai.expect)(Ember.$('.proposal-text:eq(1)').text().trim()).to.equal('2eme possibilite');
              (0, _chai.expect)(Ember.$('.proposal-text:eq(2)').text().trim()).to.equal('3eme possibilite');
              (0, _chai.expect)(Ember.$('.proposal-text:eq(3)').text().trim()).to.equal('4eme possibilite');

            case 6:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    })));

    (0, _mocha.it)('b1.4 L\'alerte est affichée si l\'utilisateur valide, mais aucun radiobutton n\'est coché', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var $alert;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return visit('/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id');

            case 2:

              Ember.$(':radio').prop('checked', false);

              // when
              _context4.next = 5;
              return click('.challenge-actions__action-validate');

            case 5:

              // then
              $alert = Ember.$('.alert');

              (0, _chai.expect)($alert).to.have.lengthOf(1);
              (0, _chai.expect)($alert.text().trim()).to.equal('Pour valider, sélectionner une réponse. Sinon, passer.');

            case 8:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    })));

    (0, _mocha.it)('b1.5 Si un utilisateur clique sur un radiobutton, il est le seul coché, et les autres sont décochés', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return visit('/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id');

            case 2:

              (0, _chai.expect)(Ember.$('input[type=radio][name="radio"]:eq(0)').is(':checked')).to.equal(false);
              (0, _chai.expect)(Ember.$('input[type=radio][name="radio"]:eq(1)').is(':checked')).to.equal(true);
              (0, _chai.expect)(Ember.$('input[type=radio][name="radio"]:eq(2)').is(':checked')).to.equal(false);
              (0, _chai.expect)(Ember.$('input[type=radio][name="radio"]:eq(3)').is(':checked')).to.equal(false);

              // When
              _context5.next = 8;
              return click(Ember.$('.label-checkbox-proposal:eq(0)'));

            case 8:
              // Click on label trigger the event.

              // Then
              (0, _chai.expect)(Ember.$('input[type=radio][name="radio"]:eq(0)').is(':checked')).to.equal(true);
              (0, _chai.expect)(Ember.$('input[type=radio][name="radio"]:eq(1)').is(':checked')).to.equal(false);
              (0, _chai.expect)(Ember.$('input[type=radio][name="radio"]:eq(2)').is(':checked')).to.equal(false);
              (0, _chai.expect)(Ember.$('input[type=radio][name="radio"]:eq(3)').is(':checked')).to.equal(false);

            case 12:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this);
    })));

    (0, _mocha.it)('b1.6 Si un utilisateur clique sur un radiobutton, et valide l\'épreuve, une demande de sauvegarde de sa réponse est envoyée à l\'API', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
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

              (0, _chai.expect)(Ember.$('input[type=radio][name="radio"]:eq(0)').is(':checked')).to.equal(false);
              (0, _chai.expect)(Ember.$('input[type=radio][name="radio"]:eq(1)').is(':checked')).to.equal(true);
              (0, _chai.expect)(Ember.$('input[type=radio][name="radio"]:eq(2)').is(':checked')).to.equal(false);
              (0, _chai.expect)(Ember.$('input[type=radio][name="radio"]:eq(3)').is(':checked')).to.equal(false);

              // When
              _context6.next = 9;
              return click(Ember.$('.label-checkbox-proposal:eq(3)'));

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

    (0, _mocha.it)('b1.7 L\'alerte n\'est pas affichée si l\'utilisateur valide sans avoir coché de réponse puis coche sur une réponse', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
      var $alert;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return visit('/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id');

            case 2:
              Ember.$(':radio').prop('checked', false);
              _context7.next = 5;
              return click('.challenge-actions__action-validate');

            case 5:
              _context7.next = 7;
              return click(Ember.$('.label-checkbox-proposal:eq(0)'));

            case 7:

              // then
              $alert = Ember.$('.alert');

              (0, _chai.expect)($alert).to.have.lengthOf(0);

            case 9:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, this);
    })));
  });
});
define('pix-live/tests/acceptance/b2-epreuve-qcm-test', ['mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (_mocha, _chai, _startApp, _destroyApp) {
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
      var $challengeInstruction = Ember.$('.challenge-statement__instruction');

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
      var $proposals = Ember.$('input[type="checkbox"]');
      (0, _chai.expect)($proposals).to.have.lengthOf(4);
    });

    (0, _mocha.it)('b2.5 It should mark checkboxes that have been checked', function () {
      (0, _chai.expect)(Ember.$('input:checkbox:checked')).to.have.lengthOf(2);
    });

    (0, _mocha.it)('b2.6 It should render an ordered list of instruction', function () {
      (0, _chai.expect)(Ember.$('.proposal-text:eq(0)').text().trim()).to.equal('possibilite 1, et/ou');
      (0, _chai.expect)(Ember.$('.proposal-text:eq(1)').text().trim()).to.equal('possibilite 2, et/ou');
      (0, _chai.expect)(Ember.$('.proposal-text:eq(2)').text().trim()).to.equal('possibilite 3, et/ou');
      (0, _chai.expect)(Ember.$('.proposal-text:eq(3)').text().trim()).to.equal('possibilite 4');
    });

    (0, _mocha.it)('b2.7 Error alert box should be hidden by default', function () {
      (0, _chai.expect)(Ember.$('.alert')).to.have.lengthOf(0);
    });

    (0, _mocha.it)('b2.8 Error alert box should be displayed if user validate without checking a checkbox', function () {
      // Given
      var $validateLink = Ember.$('.challenge-actions__action-validate');
      (0, _chai.expect)(Ember.$('input:checkbox:checked')).to.have.lengthOf(2);

      //
      Ember.$('input:checkbox').prop('checked', false);
      (0, _chai.expect)(Ember.$('input:checkbox:checked')).to.have.lengthOf(0);

      // When
      click($validateLink);

      // Then
      andThen(function () {
        (0, _chai.expect)(Ember.$('.alert')).to.have.lengthOf(1);
        (0, _chai.expect)(Ember.$('.alert').text().trim()).to.equal('Pour valider, sélectionner au moins une réponse. Sinon, passer.');
      });
    });

    (0, _mocha.it)('b2.9 If an user check a checkbox, it is checked', function () {
      Ember.$('input:checkbox').prop('checked', false);
      Ember.$('.proposal-text:eq(1)').click();
      andThen(function () {
        (0, _chai.expect)(Ember.$('input:checkbox:checked')).to.have.lengthOf(1);
      });
    });

    (0, _mocha.it)('b2.10 If an user check another checkbox, it is checked, the previous checked checkboxes remains checked', function () {
      Ember.$('input:checkbox').prop('checked', false);
      Ember.$('input:checkbox:eq(1)').prop('checked', true);
      (0, _chai.expect)(Ember.$('input:checkbox:checked')).to.have.lengthOf(1);
      Ember.$('.proposal-text:eq(2)').click();
      andThen(function () {
        (0, _chai.expect)(Ember.$('input:checkbox:checked')).to.have.lengthOf(2);
      });
    });

    (0, _mocha.it)('b2.11 L\'alerte n\'est pas affichée si l\'utilisateur valide sans avoir coché de réponse puis coche sur une réponse', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var $alert;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return click('.challenge-actions__action-validate');

            case 2:
              _context.next = 4;
              return click(Ember.$('.proposal-text:eq(1)'));

            case 4:

              // then
              $alert = Ember.$('.alert');

              (0, _chai.expect)($alert).to.have.lengthOf(0);

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    })));
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
      var $challengeInstruction = Ember.$('.challenge-statement__instruction');
      var instructiontext = 'Un QROC est une question ouverte avec un simple champ texte libre pour répondre';
      (0, _chai.expect)($challengeInstruction.text().trim()).to.equal(instructiontext);
    });

    (0, _mocha.it)('b3.2 It should display only one input text as proposal to user', function () {
      (0, _chai.expect)(Ember.$('.challenge-response__proposal-input')).to.have.lengthOf(1);
    });

    (0, _mocha.it)('b3.3 Error alert box should be displayed if user validate without writing any answer', function () {
      fillIn('input[data-uid="qroc-proposal-uid"]', '');
      (0, _chai.expect)(Ember.$('.alert')).to.have.lengthOf(0);
      click(findWithAssert('.challenge-actions__action-validate'));
      andThen(function () {
        // assertions for after async behavior
        (0, _chai.expect)(Ember.$('.alert')).to.have.lengthOf(1);
        (0, _chai.expect)(Ember.$('.alert').text().trim()).to.equal('Pour valider, saisir une réponse. Sinon, passer.');
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
      var $challengeInstruction = Ember.$('.challenge-statement__instruction');
      var instructiontext = 'Un QROCM est une question ouverte avec plusieurs champs texte libre pour repondre';
      (0, _chai.expect)($challengeInstruction.text().trim()).to.equal(instructiontext);
    });

    (0, _mocha.it)('b4.2 It should display only one input text as proposal to user', function () {
      (0, _chai.expect)(Ember.$('.challenge-response__proposal-input')).to.have.lengthOf(3);
    });

    (0, _mocha.it)('b4.3 Error alert box should be displayed if user validate without checking a checkbox', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // 1st make sure all inputs are cleared
              Ember.$(':input').val('');
              // Then try to validate sth
              _context.next = 3;
              return click(Ember.$('.challenge-actions__action-validate'));

            case 3:

              (0, _chai.expect)(Ember.$('.alert')).to.have.lengthOf(1);
              (0, _chai.expect)(Ember.$('.alert').text().trim()).to.equal('Pour valider, saisir au moins une réponse. Sinon, passer.');

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

    var $ATTACHMENT_LINK = Ember.$('.challenge-statement__action-link');

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
        var $ATTACHMENT_LINK = Ember.$('.challenge-statement__action-link');
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
      var $challengeInstruction = Ember.$('.challenge-statement__instruction');
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
      (0, _chai.expect)(Ember.$('.challenge-actions__action-skip')).to.have.lengthOf(1);
    });

    (0, _mocha.it)('b7.4 Un bouton de type "Validate" doit s\'afficher', function () {
      (0, _chai.expect)(Ember.$('.challenge-actions__action-skip')).to.have.lengthOf(1);
    });

    (0, _mocha.it)('b7.5 Il existe un bouton "Revenir à la liste des tests"', function () {
      var $courseListButton = findWithAssert('.course-banner__home-link');
      (0, _chai.expect)($courseListButton.text()).to.equal('Revenir à l\'accueil');
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
      (0, _chai.expect)(Ember.$('.feedback-panel')).to.have.lengthOf(1);
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
define('pix-live/tests/acceptance/certification-course-test', ['mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app', 'pix-live/tests/helpers/testing', 'pix-live/mirage/scenarios/default'], function (_mocha, _chai, _startApp, _destroyApp, _testing, _default) {
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

  _mocha.describe.skip('Acceptance | Certification | Start Course', function () {

    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
      (0, _default.default)(server);

      (0, _testing.authenticateAsSimpleUser)();
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    (0, _mocha.describe)('start certification course', function () {

      context('When starting a certification course', function () {

        (0, _mocha.beforeEach)(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return visit('/test-de-certification');

                case 2:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        })));

        (0, _mocha.it)('should be redirected on the first challenge of an assessment', function () {
          // then
          (0, _chai.expect)(currentURL()).to.match(/assessments\/\d+\/challenges\/1/);
        });

        (0, _mocha.it)('should navigate to next challenge when we click pass', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return click('.challenge-actions__action-skip-text');

                case 2:

                  // then
                  (0, _chai.expect)(currentURL()).to.match(/assessments\/\d+\/challenges\/2/);

                case 3:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        })));

        (0, _mocha.it)('should navigate to redirect to certification result page at the end of the assessment', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return click('.challenge-actions__action-skip');

                case 2:
                  _context3.next = 4;
                  return click('.challenge-actions__action-skip');

                case 4:

                  // then
                  (0, _chai.expect)(currentURL()).to.equal('/certifications/certification-number/results');

                case 5:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        })));
      });

      context('When stop and relaunch the certification course', function () {
        (0, _mocha.it)('should be redirected on the second challenge of an assessment', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return visit('/test-de-certification');

                case 2:
                  _context4.next = 4;
                  return click('.challenge-actions__action-skip-text');

                case 4:
                  _context4.next = 6;
                  return visit('/compte');

                case 6:
                  _context4.next = 8;
                  return visit('/test-de-certification/certification-number');

                case 8:

                  // then
                  (0, _chai.expect)(currentURL()).to.match(/assessments\/\d+\/challenges\/2/);

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
});
define('pix-live/tests/acceptance/compte-authentication-and-profile-test', ['mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app', 'pix-live/tests/helpers/testing', 'pix-live/mirage/scenarios/default'], function (_mocha, _chai, _startApp, _destroyApp, _testing, _default) {
  'use strict';

  (0, _mocha.describe)('Acceptance | Espace compte | Authentication', function () {

    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
      (0, _default.default)(server);
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    (0, _mocha.describe)('Logged Menu', function () {
      (0, _mocha.describe)('after visiting the project page', function () {
        (0, _mocha.it)('should redirect to /compte user "Mon compte"', function () {
          // given
          (0, _testing.authenticateAsSimpleUser)();
          visit('/projet');

          // when
          click('.logged-user-name__link');
          click('a:contains("Mon compte")');

          // then
          return andThen(function () {
            (0, _chai.expect)(currentURL()).to.equal('/compte');
          });
        });
      });
    });

    (0, _mocha.describe)('Success cases', function () {

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

      (0, _mocha.describe)('Log-in phase', function () {
        (0, _mocha.it)('should redirect to the /compte after connexion for usual users', function () {
          // given
          (0, _testing.authenticateAsSimpleUser)();

          // then
          return andThen(function () {
            (0, _chai.expect)(currentURL()).to.equal('/compte');
          });
        });

        (0, _mocha.it)('should redirect to the /board after connexion for users with organization', function () {
          // given
          (0, _testing.authenticateAsPrescriber)();

          // then
          return andThen(function () {
            (0, _chai.expect)(currentURL()).to.equal('/board');
          });
        });
      });
    });

    (0, _mocha.describe)('Error case', function () {
      (0, _mocha.it)('should stay in /connexion , when authentication failed', function () {
        // given
        visit('/connexion');
        fillIn('#pix-email', 'anyone@pix.world');
        fillIn('#pix-password', 'Pix20!!');

        // when
        click('.signin-form__submit_button');

        // then
        return andThen(function () {
          (0, _chai.expect)(currentURL()).to.equal('/connexion');
        });
      });
    });
  });
});
define('pix-live/tests/acceptance/compte-display-competence-test', ['mocha', 'chai', 'pix-live/tests/helpers/testing', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app', 'pix-live/mirage/scenarios/default'], function (_mocha, _chai, _testing, _startApp, _destroyApp, _default) {
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

  (0, _mocha.describe)('Acceptance | Compte | competence profile', function () {
    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
      (0, _default.default)(server);
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    (0, _mocha.it)('can visit /compte', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // given
              (0, _testing.authenticateAsSimpleUser)();

              // when
              _context.next = 3;
              return visit('/compte');

            case 3:
              return _context.abrupt('return', andThen(function () {
                (0, _chai.expect)(currentURL()).to.equal('/compte');
              }));

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    (0, _mocha.it)('should redirect to home, when user is not found', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return visit('/compte');

            case 2:
              return _context2.abrupt('return', andThen(function () {
                (0, _chai.expect)(currentURL()).to.equal('/connexion');
              }));

            case 3:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    (0, _mocha.it)('should display user competences (with level) grouped by area', function () {
      // given
      (0, _testing.authenticateAsSimpleUser)();

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
      (0, _testing.authenticateAsSimpleUser)();

      // when
      visit('/compte');

      // then
      return andThen(function () {
        (0, _chai.expect)(find('.competence-level-progress-bar__link-start:first').attr('href')).to.be.equal('/courses/ref_course_id');
      });
    });

    (0, _mocha.it)('should display a hero banner for logged user', function () {
      // given
      (0, _testing.authenticateAsSimpleUser)();

      // when
      visit('/compte');

      // then
      return andThen(function () {
        (0, _chai.expect)(find('.logged-user-profile-banner')).to.have.lengthOf(1);
      });
    });
  });
});
define('pix-live/tests/acceptance/compte-share-profile-test', ['mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app', 'pix-live/tests/helpers/testing', 'pix-live/mirage/scenarios/default'], function (_mocha, _chai, _startApp, _destroyApp, _testing, _default) {
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

  (0, _mocha.describe)('Acceptance | Sharing a Profile Snapshot with a given Organization', function () {
    var visitAccountPage = function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return visit('/compte');

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function visitAccountPage() {
        return _ref.apply(this, arguments);
      };
    }();

    var openShareProfileModal = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return click('.share-profile__share-button');

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function openShareProfileModal() {
        return _ref2.apply(this, arguments);
      };
    }();

    var fillInAndSubmitOrganizationCode = function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return fillIn('.share-profile__organization-code-input', 'PRO001');

              case 2:
                _context3.next = 4;
                return click('.share-profile__continue-button');

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function fillInAndSubmitOrganizationCode() {
        return _ref3.apply(this, arguments);
      };
    }();

    var confirmProfileSnapshotSharing = function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return click('.share-profile__confirm-button');

              case 2:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function confirmProfileSnapshotSharing() {
        return _ref4.apply(this, arguments);
      };
    }();

    var closeModal = function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return click('.share-profile__close-button');

              case 2:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function closeModal() {
        return _ref5.apply(this, arguments);
      };
    }();

    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
      (0, _default.default)(server);
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    function expectModalToBeOpened() {
      findWithAssert('.pix-modal');
    }

    function expectToBeOnOrganizationCodeEntryView() {
      findWithAssert('.share-profile__section--organization-code-entry');
    }

    function expectToBeOnSharingConfirmationView() {
      findWithAssert('.share-profile__section--sharing-confirmation');
    }

    function expectOrganizationNameToBeDisplayed() {
      (0, _chai.expect)(find('.share-profile__organization-name').text().trim()).to.equal('Mon Entreprise');
    }

    function expectToBeOnSuccessNotificationView() {
      findWithAssert('.share-profile__section--success-notification');
    }

    function expectSnapshotToHaveBeenCreated() {
      (0, _chai.expect)(server.db.snapshots.length).to.equal(4);
    }

    function expectModalToBeClosed() {
      (0, _chai.expect)(find('.pix-modal')).to.have.lengthOf(0);
    }

    (0, _mocha.it)('should be possible to share a snapshot of her own profile to a given organization', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              (0, _testing.authenticateAsSimpleUser)();

              _context6.next = 3;
              return visitAccountPage();

            case 3:
              _context6.next = 5;
              return openShareProfileModal();

            case 5:
              expectModalToBeOpened();
              expectToBeOnOrganizationCodeEntryView();

              _context6.next = 9;
              return fillInAndSubmitOrganizationCode();

            case 9:
              expectToBeOnSharingConfirmationView();
              expectOrganizationNameToBeDisplayed();

              _context6.next = 13;
              return confirmProfileSnapshotSharing();

            case 13:
              expectToBeOnSuccessNotificationView();
              expectSnapshotToHaveBeenCreated();

              _context6.next = 17;
              return closeModal();

            case 17:
              expectModalToBeClosed();

            case 18:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, this);
    })));
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

      (0, _mocha.it)('should display the historic of the weekly courses courseGroups by the url /defis-pix', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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

      (0, _mocha.it)('should display a navbar and a footer', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
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

      (0, _mocha.it)('should display a header section', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
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

      (0, _mocha.it)('should display a list of (weekly courses) course-groups', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
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
// FIXME wuth API resource GET /assessment/:id/progress

/*
import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import { expect } from 'chai';
import { startApp, destroyApp } from '../helpers/application';
import { debounce } from '@ember/runloop';

async function visitTimedChallenge() {
  await visit('/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id');
  await click('.challenge-item-warning__confirm-btn');
}

function progressBarText() {
  const PROGRESS_BAR_SELECTOR = '.pix-progress-bar';
  return findWithAssert(PROGRESS_BAR_SELECTOR).text().trim();
}

describe('Acceptance | d1 - Valider une épreuve |', function() {

  let application;
  const PROGRESS_BAR_SELECTOR = '.pix-progress-bar';

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  it('d1.0a La barre de progression commence à 1, si j\'accède au challenge depuis l\'url directe', async function() {
    await visit('/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id');
    expect(progressBarText()).to.equal('1 / 4');
  });

  it('d1.0b La barre de progression commence à 1, si j\'accède directement à un course', async function() {
    // When
    await visit('/courses/ref_course_id');

    // Then
    const $progressBar = findWithAssert(PROGRESS_BAR_SELECTOR);
    expect($progressBar.text().trim()).to.equal('1 / 4');
  });

  it('d1.1 Je peux valider ma réponse à une épreuve via un bouton "Je valide"', async function() {
    await visitTimedChallenge();
    expect(findWithAssert('.challenge-actions__action-validate')).to.have.lengthOf(1);
  });

  describe('quand je valide ma réponse à une épreuve', function() {

    it('d1.3 Si l\'épreuve que je viens de valider n\'était pas la dernière du test, je suis redirigé vers l\'épreuve suivante (et la barre de progression est mise à jour)', function() {
      // given
      visit('/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id');
      click('.challenge-item-warning__confirm-btn');

      // when
      click('.challenge-actions__action-validate');

      // then
      andThen(() => {
        debounce(this, () => {
          expect(currentURL()).to.contain('/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id');
          expect(findWithAssert('.pix-progress-bar').text().trim()).to.contain('2 / 4');
        }, 150);
      });
    });

    it('d1.5 Si l\'épreuve que je viens de valider était la dernière du test, je suis redirigé vers la page de fin du test', function() {
      // given
      visit('/assessments/ref_assessment_id/challenges/ref_qrocm_challenge_id');

      // when
      click('.challenge-actions__action-validate');

      // then
      andThen(() => {
        debounce(this, () => {
          expect(currentURL()).to.contain('/assessments/ref_assessment_id/results');
        }, 150);
      });
    });
  });

});
*/
define("pix-live/tests/acceptance/d1-epreuve-validation-test", [], function () {
  "use strict";
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

    (0, _mocha.it)('g1.1 le bandeau doit être affiché si l\'usage d\'Internet ou d\'outils est interdit dans le cadre de l\'épreuve', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return visit(CHALLENGE_WITHOUT_INTERNET_NOR_TOOLS_URI);

            case 2:
              (0, _chai.expect)(Ember.$('.challenge-stay__text').text()).to.contain('Vous devez répondre à cette question sans sortir de cette page !');

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    (0, _mocha.it)('g1.2 le bandeau ne doit pas être affiché si l\'usage d\'Internet ou d\'outils est autorisé dans le cadre de l\'épreuve', function () {
      visit(CHALLENGE_ALLOWING_INTERNET_OR_TOOS_URI);
      (0, _chai.expect)(Ember.$('.challenge-stay__text')).to.have.lengthOf(0);
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
          (0, _chai.expect)(Ember.$('.timeout-jauge')).to.have.lengthOf(1);
        });
        visit('/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id');
        andThen(function () {
          (0, _chai.expect)(Ember.$('.timeout-jauge')).to.have.lengthOf(0);
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

      (0, _mocha.it)('doit cacher le contenu du challenge si l\'épreuve est timée', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return visit(TIMED_CHALLENGE_URL);

              case 2:

                // Then
                (0, _chai.expect)(Ember.$('.challenge-statement')).to.have.lengthOf(0);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      })));

      (0, _mocha.it)('doit afficher le contenu du challenge si l\'épreuve n\'est pas timée', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return visit(NOT_TIMED_CHALLENGE_URL);

              case 2:

                // Then
                (0, _chai.expect)(Ember.$('.challenge-statement')).to.have.lengthOf(1);

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      })));

      (0, _mocha.it)('vérifier que le timer n\'est pas démarré automatiquement lorsque l\'épreuve est timée', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return visit(TIMED_CHALLENGE_URL);

              case 2:
                _context3.next = 4;
                return visit(NOT_TIMED_CHALLENGE_URL);

              case 4:

                // Then
                (0, _chai.expect)(Ember.$('.timeout-jauge')).to.have.lengthOf(0);

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      })));

      (0, _mocha.it)('le formulaire de signalement n\'est pas affiché pour une épreuve chronométrée tant que l\'usager n\'a pas confirmé être prêt pour l\'épreuve', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return visit(TIMED_CHALLENGE_URL);

              case 2:

                // Then
                (0, _chai.expect)(Ember.$('.feedback-panel')).to.have.lengthOf(0);

              case 3:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      })));
    });

    (0, _mocha.describe)('h2-Test comportement lorsque le bouton de confirmation est cliqué', function () {

      (0, _mocha.beforeEach)(function () {
        visit(TIMED_CHALLENGE_URL);
        click(CHALLENGE_ITEM_WARNING_BUTTON);
      });

      (0, _mocha.it)('h2.1- vérifier que le warning est caché ', function () {
        (0, _chai.expect)(Ember.$(CHALLENGE_ITEM_WARNING_BUTTON)).to.have.lengthOf(0);
      });

      (0, _mocha.it)('h2.2- vérifier que le contenu de l\'épreuve est affiché', function () {
        (0, _chai.expect)(Ember.$('.challenge-statement').css('display')).to.contain('block');
      });

      (0, _mocha.it)('h2.3- vérifier que le timer est démarré ', function () {
        (0, _chai.expect)(Ember.$('.timeout-jauge')).to.have.lengthOf(1);
      });

      (0, _mocha.it)('h2.4 le formulaire de signalement est affiché', function () {
        (0, _chai.expect)(Ember.$('.feedback-panel')).to.have.lengthOf(1);
      });
    });
  });
});
define('pix-live/tests/acceptance/index-test', ['mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (_mocha, _chai, _startApp, _destroyApp) {
  'use strict';

  (0, _mocha.describe)('Acceptance | index', function () {
    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    (0, _mocha.describe)('Navbar header section', function () {
      (0, _mocha.it)('should have a link to sign-up page when user is not authenticated', function () {
        // when
        /* eslint-disable */
        setBreakpoint('mobile');
        /* eslint-enable */
        visit('/');

        // then
        return andThen(function () {
          var signUpLink = findWithAssert('.navbar-menu-signup-link');
          (0, _chai.expect)(signUpLink.attr('href').trim()).to.equal('/inscription');
        });
      });

      (0, _mocha.it)('should have a link to log-in page when user is not authenticated', function () {
        // when
        visit('/');

        // then
        return andThen(function () {
          var logInLink = findWithAssert('.navbar-menu-signin-link');
          (0, _chai.expect)(logInLink.attr('href').trim()).to.equal('/connexion');
        });
      });
    });
  });
});
define('pix-live/tests/acceptance/inscription-page-test', ['mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (_mocha, _chai, _startApp, _destroyApp) {
  'use strict';

  (0, _mocha.describe)('Acceptance | Page | Inscription', function () {

    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    (0, _mocha.it)('should contain a link to "Terms of service" page', function () {

      visit('/inscription');

      return andThen(function () {
        var $termsOfServiceLink = findWithAssert('.signup__cgu-link');
        (0, _chai.expect)($termsOfServiceLink.attr('href').trim()).to.equal('/conditions-generales-d-utilisation');
      });
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
      (0, _mocha.it)('j1.1.1 il l\'affiche pour un QCM, un QCU mais pas pour les autres types d\'épreuves', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return visit(RESULT_URL);

              case 2:
                (0, _chai.expect)(Ember.$('.result-item:eq(0) .js-correct-answer').text()).to.contain('RÉPONSE'); //QCM
                (0, _chai.expect)(Ember.$('.result-item:eq(1) .js-correct-answer').text()).to.contain('RÉPONSE'); //QCU
                (0, _chai.expect)(Ember.$('.result-item:eq(2) .js-correct-answer').text()).to.contain('RÉPONSE'); //QROC
                (0, _chai.expect)(Ember.$('.result-item:eq(3) .js-correct-answer').text()).not.to.contain('RÉPONSE'); //QROCM

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      })));
    });

    (0, _mocha.describe)('j1.2 Accès à la modale', function () {

      (0, _mocha.it)('j1.2.1 Si on clique sur REPONSE la modale s\'ouvre', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return visit(RESULT_URL);

              case 2:
                (0, _chai.expect)(Ember.$('.comparison-window')).to.have.lengthOf(0);
                _context2.next = 5;
                return click('.result-item__correction__button');

              case 5:
                (0, _chai.expect)(Ember.$('.comparison-window')).to.have.lengthOf(1);
                // XXX test env needs the modal to be closed manually
                _context2.next = 8;
                return click('.close-button-container');

              case 8:
                (0, _chai.expect)(Ember.$('.comparison-window')).to.have.lengthOf(0);

              case 9:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      })));

      (0, _mocha.it)('j1.2.2 On peut accèder directement à la modale via URL et fermer la modale', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return visit(COMPARISON_MODAL_URL);

              case 2:
                (0, _chai.expect)(Ember.$('.comparison-window')).to.have.lengthOf(1);
                // XXX test env needs the modal to be closed manually
                _context3.next = 5;
                return click('.close-button-container');

              case 5:
                (0, _chai.expect)(Ember.$('.comparison-window')).to.have.lengthOf(0);

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      })));
    });

    (0, _mocha.describe)('j1.3 Contenu de la modale : résultat & instruction', function () {

      (0, _mocha.it)('j1.3.1 Vérification de l\'index, ainsi que l\'image et le texte du résultat dans le header', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return visit(RESULT_URL);

              case 2:
                (0, _chai.expect)(Ember.$(INDEX_OF_RESULT_SELECTOR)).to.have.lengthOf(0);
                (0, _chai.expect)(Ember.$(TEXT_OF_RESULT_SELECTOR)).to.have.lengthOf(0);

                _context4.next = 6;
                return visit(COMPARISON_MODAL_URL);

              case 6:
                (0, _chai.expect)(Ember.$(INDEX_OF_RESULT_SELECTOR).text().replace(/\n/g, '').trim()).to.equal('1');

                // XXX test env needs the modal to be closed manually
                _context4.next = 9;
                return click('.close-button-container');

              case 9:
                (0, _chai.expect)(Ember.$('.comparison-window')).to.have.lengthOf(0);

              case 10:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      })));

      (0, _mocha.it)('j1.3.2 Vérification de la présence de l\'instruction, texte et image', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return visit(RESULT_URL);

              case 2:
                (0, _chai.expect)(Ember.$(TEXT_OF_INSTRUCTION_SELECTOR)).to.exist;
                (0, _chai.expect)(Ember.$(IMAGE_OF_INSTRUCTION_SELECTOR)).to.exist;

                _context5.next = 6;
                return visit(COMPARISON_MODAL_URL);

              case 6:
                (0, _chai.expect)(charCount(Ember.$(TEXT_OF_INSTRUCTION_SELECTOR).text())).to.be.above(5); // XXX : Above 5 means "must be a sentence"
                (0, _chai.expect)(Ember.$(IMAGE_OF_INSTRUCTION_SELECTOR)).to.have.lengthOf(1);

                // XXX test env needs the modal to be closed manually
                _context5.next = 10;
                return click('.close-button-container');

              case 10:
                (0, _chai.expect)(Ember.$('.comparison-window')).to.have.lengthOf(0);

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

      (0, _mocha.beforeEach)(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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

      (0, _mocha.it)('affiche le lien REPONSE vers la modale depuis l\'ecran des resultats pour un QROC', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                (0, _chai.expect)(Ember.$('.result-item .js-correct-answer').text()).to.contain('RÉPONSE');

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      })));

      (0, _mocha.it)('On n\'affiche pas encore la modale, ni son contenu', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                (0, _chai.expect)(Ember.$('.comparison-window')).to.have.lengthOf(0);
                (0, _chai.expect)(Ember.$(INDEX_OF_RESULT_SELECTOR)).to.have.lengthOf(0);
                (0, _chai.expect)(Ember.$(TEXT_OF_RESULT_SELECTOR)).to.have.lengthOf(0);

              case 3:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      })));
    });

    (0, _mocha.describe)('j2.2 Contenu de la modale de correction pour un QROC', function () {

      (0, _mocha.beforeEach)(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
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

      (0, _mocha.afterEach)(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
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

      (0, _mocha.it)('possible d\'accéder à la modale depuis l\'URL', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                (0, _chai.expect)(Ember.$('.comparison-window')).to.have.lengthOf(1);

              case 1:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      })));

      (0, _mocha.it)('contient un header', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                (0, _chai.expect)(Ember.$(INDEX_OF_RESULT_SELECTOR).text().replace(/\n/g, '').trim()).to.equal('4');

              case 1:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      })));

      (0, _mocha.it)('contient une instruction', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                (0, _chai.expect)(Ember.$(TEXT_OF_INSTRUCTION_SELECTOR)).to.have.lengthOf(1);

              case 1:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      })));

      (0, _mocha.it)('contient une zone de correction', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                (0, _chai.expect)(Ember.$(CORRECTION_BOX_QROC)).to.have.lengthOf(1);

              case 1:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      })));

      (0, _mocha.it)('contient une zone reservé au feedback panel', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                (0, _chai.expect)(Ember.$(FEEDBACK_PANEL)).to.have.lengthOf(1);

              case 1:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, this);
      })));

      (0, _mocha.it)('on peut fermer la modale', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return click('.close-button-container');

              case 2:
                (0, _chai.expect)(Ember.$('.comparison-window')).to.have.lengthOf(0);

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

      (0, _mocha.it)('Je peux signaler une épreuve directement', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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

      (0, _mocha.it)('Le formulaire de signalement est remis à zéro même quand les 2 épreuves qui s\'enchaînent utilisent le même composant challenge-item-* (ex : q1 est de type "QCU" et q2 "QRU" ; toutes deux utilisent le composant challenge-item-qcu)', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return visit('/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id');

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
    });

    (0, _mocha.describe)('l1.2 Depuis la fenêtre de comparaison', function () {
      var _this2 = this;

      (0, _mocha.it)('Je peux signaler une épreuve (page de résultat du test)', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return visit('/assessments/ref_assessment_id/results/compare/ref_answer_qcm_id/1');

              case 2:
                assertThatFeedbackFormIsOpen();
                // XXX test env needs the modal to be closed manually
                _context3.next = 5;
                return click('.close-button-container');

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2);
      })));
    });
  });
});
define('pix-live/tests/acceptance/legal-notices-page-test', ['mocha', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (_mocha, _startApp, _destroyApp) {
  'use strict';

  (0, _mocha.describe)('Acceptance | Page | Legal notices', function () {

    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    (0, _mocha.it)('should be accessible from "/mentions-legales"', function () {

      visit('/mentions-legales');

      return andThen(function () {
        findWithAssert('.legal-notices-page');
      });
    });
  });
});
define('pix-live/tests/acceptance/not-found-redirect-to-index-test', ['mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (_mocha, _chai, _startApp, _destroyApp) {
  'use strict';

  (0, _mocha.describe)('Acceptance | Page | Not Found Redirection', function () {

    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    (0, _mocha.it)('should redirect to home page when URL is a nonexistant page', function () {

      visit('/plop');

      return andThen(function () {
        (0, _chai.expect)(currentURL()).to.eq('/');
      });
    });
  });
});
define('pix-live/tests/acceptance/o1-board-organization-test', ['mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app', 'pix-live/tests/helpers/testing', 'pix-live/mirage/scenarios/default'], function (_mocha, _chai, _startApp, _destroyApp, _testing, _default) {
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

  (0, _mocha.describe)('Acceptance | o1 - board organization', function () {
    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
      (0, _default.default)(server);
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    (0, _mocha.it)('can visit /board', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // given
              (0, _testing.authenticateAsPrescriber)();

              // when
              _context.next = 3;
              return visit('/board');

            case 3:

              // then
              andThen(function () {
                (0, _chai.expect)(currentURL()).to.equal('/board');
              });

              _context.next = 6;
              return visit('/deconnexion');

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    (0, _mocha.it)('should not be accessible while the user is not connected', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return visit('/deconnexion');

            case 2:
              _context2.next = 4;
              return visit('/board');

            case 4:

              // then
              andThen(function () {
                (0, _chai.expect)(currentURL()).to.equal('/connexion');
              });

            case 5:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    (0, _mocha.it)('should display the name and the code of my organization', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // given
              (0, _testing.authenticateAsPrescriber)();

              // when
              _context3.next = 3;
              return visit('/board');

            case 3:

              // then
              (0, _chai.expect)(find('.board-page__header-organisation__name').length).to.equal(1);
              (0, _chai.expect)(find('.board-page__header-organisation__name').text().trim()).to.equal('Mon Entreprise');
              (0, _chai.expect)(find('.board-page__header-code__text').length).to.equal(1);
              (0, _chai.expect)(find('.board-page__header-code__text').text().trim()).to.equal('PRO001');

            case 7:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    })));

    (0, _mocha.it)('should display an empty list of snapshot', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              // given
              (0, _testing.authenticateAsPrescriber)();

              // when
              _context4.next = 3;
              return visit('/board');

            case 3:

              // then
              (0, _chai.expect)(find('.snapshot-list').length).to.equal(1);
              (0, _chai.expect)(find('.snapshot-list__no-profile').text()).to.equal('Aucun profil partagé pour le moment');

            case 5:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    })));

    (0, _mocha.it)('should display a link to download snapshots', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      var $exportLink;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              // given
              (0, _testing.authenticateAsPrescriber)();

              // when
              _context5.next = 3;
              return visit('/board');

            case 3:

              // then
              $exportLink = findWithAssert('.profiles-title__export-csv');

              (0, _chai.expect)($exportLink.text()).to.contains('Exporter (.csv)');

            case 5:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this);
    })));
  });
});
define('pix-live/tests/acceptance/page-accueil-test', ['mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (_mocha, _chai, _startApp, _destroyApp) {
  'use strict';

  (0, _mocha.describe)('Acceptance | La page d\'accueil', function () {

    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
      visit('/');
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    (0, _mocha.it)('should be accessible from "/"', function () {
      (0, _chai.expect)(currentURL()).to.equal('/');
    });

    (0, _mocha.describe)('the "Hero" section', function () {

      (0, _mocha.it)('should have a navigation bar', function () {
        findWithAssert('.index-page-hero__navbar-header');
      });

      (0, _mocha.it)('should have a title', function () {
        var $title = findWithAssert('.index-page-hero__title');
        (0, _chai.expect)($title.text().trim()).to.equal('Développez vos compétences numériques');
      });

      (0, _mocha.it)('should have a description', function () {
        var $description = findWithAssert('.index-page-hero__description');
        (0, _chai.expect)($description.text().trim()).to.equal('PIX est un projet public de plateforme en ligne d’évaluation et de certification des compétences numériques, en cours de développement.');
      });
    });

    (0, _mocha.describe)('contains a section with a button to save new partners', function () {

      (0, _mocha.it)('a1.16 with a title', function () {
        var $title = findWithAssert('.partners-enrollment__title');
        (0, _chai.expect)($title.text().trim()).to.equal('Collèges, lycées, établissements d’enseignement supérieur : rejoignez l’aventure Pix dès l’année 2017-2018 !');
      });

      (0, _mocha.it)('a1.17 with a description', function () {
        var $title = findWithAssert('.partners-enrollment__description');
        (0, _chai.expect)($title.text().trim()).to.equal('Je veux que mon établissement propose la certification Pix dès cette année');
      });

      (0, _mocha.it)('a1.17 with a link to registering page', function () {
        var $title = findWithAssert('.partners-enrollment__link');
        findWithAssert('.partners-enrollment__link-container');
        (0, _chai.expect)($title.attr('href').trim()).to.equal('/rejoindre');
      });
    });

    (0, _mocha.describe)('the "Courses" section', function () {

      (0, _mocha.it)('should have a title', function () {
        var $title = findWithAssert('.index-page-courses__title');
        (0, _chai.expect)($title.text().trim()).to.equal('Découvrez nos épreuves et aidez‑nous à les améliorer !');
      });

      (0, _mocha.it)('should have a list of challenge', function () {
        findWithAssert('.index-page-courses__course-list');
      });
    });

    (0, _mocha.describe)('The "Community" section', function () {

      (0, _mocha.it)('should have a title', function () {
        findWithAssert('.index-page-community__title');
      });

      (0, _mocha.it)('should have a description', function () {
        findWithAssert('.index-page-community__description');
      });

      (0, _mocha.it)('should a "beta" user inscription form', function () {
        findWithAssert('.index-page-community__form');
      });
    });

    (0, _mocha.describe)('the "Features" section', function () {

      (0, _mocha.it)('should contain a list of features', function () {
        findWithAssert('.index-page-features__list');
      });

      (0, _mocha.it)('should have a link to the "projet" page', function () {
        findWithAssert('.index-page-features__project-button[href="/projet"]');
      });
    });
  });
});
define('pix-live/tests/acceptance/password-reset-test', ['mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (_mocha, _chai, _startApp, _destroyApp) {
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

  (0, _mocha.describe)('Acceptance | Reset Password', function () {

    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    (0, _mocha.it)('can visit /mot-passe-oublie', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return visit('/mot-de-passe-oublie');

            case 2:

              // then
              (0, _chai.expect)(currentURL()).to.equal('/mot-de-passe-oublie');

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    (0, _mocha.it)('display a form to reset the email', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return visit('/mot-de-passe-oublie');

            case 2:

              // then
              (0, _chai.expect)(find('.password-reset-page__password-reset-form')).to.have.lengthOf(1);

            case 3:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    (0, _mocha.it)('display a link to inscription page', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return visit('/mot-de-passe-oublie');

            case 2:

              // then
              (0, _chai.expect)(find('.password-reset-page__inscription-button')).to.have.lengthOf(1);

            case 3:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    })));

    (0, _mocha.it)('should stay on mot de passe oublié page, and show success message, when email sent correspond to an existing user', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              // given
              server.create('user', {
                id: 1,
                firstName: 'Brandone',
                lastName: 'Martins',
                email: 'brandone.martins@pix.com',
                password: '1024pix!'
              });
              _context4.next = 3;
              return visit('/mot-de-passe-oublie');

            case 3:
              fillIn('.password-reset-form__form-email-input', 'brandone.martins@pix.com');

              // when
              _context4.next = 6;
              return click('.password-reset-form__submit-button');

            case 6:
              return _context4.abrupt('return', andThen(function () {
                (0, _chai.expect)(currentURL()).to.equal('/mot-de-passe-oublie');
                (0, _chai.expect)(find('.password-reset-form__form-success-message')).to.have.lengthOf(1);
              }));

            case 7:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    })));

    (0, _mocha.it)('should stay in mot-passe-oublie page when sent email do not correspond to any existing user', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              // given
              server.create('user', {
                id: 1,
                firstName: 'Brandone',
                lastName: 'Martins',
                email: 'brandone.martins@pix.com',
                password: '1024pix!'
              });
              _context5.next = 3;
              return visit('/mot-de-passe-oublie');

            case 3:
              fillIn('.password-reset-form__form-email-input', 'unexisting@user.com');

              // when
              _context5.next = 6;
              return click('.password-reset-form__submit-button');

            case 6:
              return _context5.abrupt('return', andThen(function () {
                (0, _chai.expect)(currentURL()).to.equal('/mot-de-passe-oublie');
                (0, _chai.expect)(find('.password-reset-form__form-error-message')).to.have.lengthOf(1);
              }));

            case 7:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this);
    })));
  });
});
define('pix-live/tests/acceptance/terms-of-service-page-test', ['mocha', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (_mocha, _startApp, _destroyApp) {
  'use strict';

  (0, _mocha.describe)('Acceptance | Page | Terms of service', function () {

    var application = void 0;

    (0, _mocha.beforeEach)(function () {
      application = (0, _startApp.default)();
    });

    (0, _mocha.afterEach)(function () {
      (0, _destroyApp.default)(application);
    });

    (0, _mocha.it)('should be accessible from "/conditions-generales-d-utilisation"', function () {

      visit('/conditions-generales-d-utilisation');

      return andThen(function () {
        findWithAssert('.terms-of-service-page');
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

    it('breakpoints.js', function () {
      // test passed
    });

    it('components/app-footer.js', function () {
      // test passed
    });

    it('components/beta-logo.js', function () {
      // test passed
    });

    it('components/certification-banner.js', function () {
      // test passed
    });

    it('components/certification-results-page.js', function () {
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

    it('components/challenge-item-qmail.js', function () {
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

    it('components/form-textfield.js', function () {
      // test passed
    });

    it('components/g-recaptcha.js', function () {
      // test passed
    });

    it('components/logged-user-profile-banner.js', function () {
      // test passed
    });

    it('components/medal-item.js', function () {
      // test passed
    });

    it('components/modal-mobile.js', function () {
      // test passed
    });

    it('components/navbar-desktop-menu.js', function () {
      // test passed
    });

    it('components/navbar-header.js', function () {
      // test passed
    });

    it('components/navbar-mobile-menu.js', function () {
      // test passed
    });

    it('components/partners-enrollment-panel.js', function () {
      // test passed
    });

    it('components/password-reset-form.js', function () {
      // test passed
    });

    it('components/pix-content-backdrop.js', function () {
      // test passed
    });

    it('components/pix-logo.js', function () {
      // test passed
    });

    it('components/pix-modale.js', function () {
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

    it('components/reset-password-form.js', function () {
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

    it('components/share-profile.js', function () {
      // test passed
    });

    it('components/signin-form.js', function () {
      // test passed
    });

    it('components/signup-form.js', function () {
      // test passed
    });

    it('components/snapshot-list.js', function () {
      // test passed
    });

    it('components/timeout-jauge.js', function () {
      // test passed
    });

    it('components/trophy-item.js', function () {
      // test passed
    });

    it('components/tutorial-panel.js', function () {
      // test passed
    });

    it('components/user-logged-menu.js', function () {
      // test passed
    });

    it('components/warning-page.js', function () {
      // test passed
    });

    it('controllers/certification-course.js', function () {
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

    it('initializers/responsive.js', function () {
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

    it('models/certification-course.js', function () {
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

    it('models/organization.js', function () {
      // test passed
    });

    it('models/password-reset-demand.js', function () {
      // test passed
    });

    it('models/snapshot.js', function () {
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

    it('routes/assessments/challenge.js', function () {
      // test passed
    });

    it('routes/assessments/comparison.js', function () {
      // test passed
    });

    it('routes/assessments/results.js', function () {
      // test passed
    });

    it('routes/assessments/resume.js', function () {
      // test passed
    });

    it('routes/base-route.js', function () {
      // test passed
    });

    it('routes/board.js', function () {
      // test passed
    });

    it('routes/certification-course.js', function () {
      // test passed
    });

    it('routes/certifications/results.js', function () {
      // test passed
    });

    it('routes/certifications/resume.js', function () {
      // test passed
    });

    it('routes/challenge-preview.js', function () {
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

    it('routes/courses/create-assessment.js', function () {
      // test passed
    });

    it('routes/enrollment.js', function () {
      // test passed
    });

    it('routes/index.js', function () {
      // test passed
    });

    it('routes/inscription.js', function () {
      // test passed
    });

    it('routes/legal-notices.js', function () {
      // test passed
    });

    it('routes/login.js', function () {
      // test passed
    });

    it('routes/logout.js', function () {
      // test passed
    });

    it('routes/not-found.js', function () {
      // test passed
    });

    it('routes/password-reset-demand.js', function () {
      // test passed
    });

    it('routes/placement-tests.js', function () {
      // test passed
    });

    it('routes/project.js', function () {
      // test passed
    });

    it('routes/reset-password.js', function () {
      // test passed
    });

    it('routes/terms-of-service.js', function () {
      // test passed
    });

    it('services/ajax.js', function () {
      // test passed
    });

    it('services/delay.js', function () {
      // test passed
    });

    it('services/google-recaptcha.js', function () {
      // test passed
    });

    it('services/mail-generator.js', function () {
      // test passed
    });

    it('services/raven.js', function () {
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
define('pix-live/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
    if (window.server) {
      window.server.shutdown();
    }
    // Sanity check
    _assertModalIsClosed();
  }

  function _assertModalIsClosed() {
    if (document.body.classList.contains('routable-modal--open')) {
      throw new Error('The body element still has a `routable-modal--open` class, although the app just has been destroyed. ' + 'This probably means that an acceptance test finished while a modal window was still open. ' + 'It will cause subtle issues, like the scroll of the test runner window being blocked. ' + 'To fix this assertion, please close the modal window manually before the test finishes. ');
    }
  }
});
define('pix-live/tests/helpers/ember-keyboard/register-test-helpers', ['exports', 'ember-keyboard', 'ember-keyboard/fixtures/modifiers-array', 'ember-keyboard/fixtures/mouse-buttons-array', 'ember-keyboard/utils/get-cmd-key'], function (exports, _emberKeyboard, _modifiersArray, _mouseButtonsArray, _getCmdKey) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    Ember.Test.registerAsyncHelper('keyDown', function (app, attributes, element) {
      return keyEvent(app, attributes, 'keydown', element);
    });

    Ember.Test.registerAsyncHelper('keyUp', function (app, attributes, element) {
      return keyEvent(app, attributes, 'keyup', element);
    });

    Ember.Test.registerAsyncHelper('keyPress', function (app, attributes, element) {
      return keyEvent(app, attributes, 'keypress', element);
    });

    Ember.Test.registerAsyncHelper('mouseDown', function (app, attributes, element) {
      return keyEvent(app, attributes, 'mousedown', element);
    });

    Ember.Test.registerAsyncHelper('mouseUp', function (app, attributes, element) {
      return keyEvent(app, attributes, 'mouseup', element);
    });

    Ember.Test.registerAsyncHelper('touchStart', function (app, attributes, element) {
      return keyEvent(app, attributes, 'touchstart', element);
    });

    Ember.Test.registerAsyncHelper('touchEnd', function (app, attributes, element) {
      return keyEvent(app, attributes, 'touchend', element);
    });
  };

  var keyEvent = function keyEvent(app, attributes, type, element) {
    var event = (attributes || '').split('+').reduce(function (event, attribute) {
      if (_modifiersArray.default.indexOf(attribute) > -1) {
        attribute = attribute === 'cmd' ? (0, _getCmdKey.default)() : attribute;
        event[attribute + 'Key'] = true;
      } else if (_mouseButtonsArray.default.indexOf(attribute) > -1) {
        event.button = (0, _emberKeyboard.getMouseCode)(attribute);
      } else {
        event.keyCode = (0, _emberKeyboard.getKeyCode)(attribute);
      }

      return event;
    }, {});

    return app.testHelpers.triggerEvent(element || document.body, type, event);
  };
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
define('pix-live/tests/helpers/responsive', ['exports', 'ember-responsive/media'], function (exports, _media) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setBreakpointForIntegrationTest = setBreakpointForIntegrationTest;


  _media.default.reopen({
    // Change this if you want a different default breakpoint in tests.
    _defaultBreakpoint: 'desktop',

    _breakpointArr: Ember.computed('breakpoints', function () {
      return Object.keys(this.get('breakpoints')) || Ember.A();
    }),

    _forceSetBreakpoint: function _forceSetBreakpoint(breakpoint) {
      var found = false;

      var props = {};
      this.get('_breakpointArr').forEach(function (bp) {
        var val = bp === breakpoint;
        if (val) {
          found = true;
        }

        props['is' + Ember.String.classify(bp)] = val;
      });

      if (found) {
        this.setProperties(props);
      } else {
        throw new Error('You tried to set the breakpoint to ' + breakpoint + ', which is not in your app/breakpoint.js file.');
      }
    },
    match: function match() {},
    init: function init() {
      this._super.apply(this, arguments);

      this._forceSetBreakpoint(this.get('_defaultBreakpoint'));
    }
  });

  exports.default = Ember.Test.registerAsyncHelper('setBreakpoint', function (app, breakpoint) {
    // this should use getOwner once that's supported
    var mediaService = app.__deprecatedInstance__.lookup('service:media');
    mediaService._forceSetBreakpoint(breakpoint);
  });
  function setBreakpointForIntegrationTest(container, breakpoint) {
    var mediaService = Ember.getOwner(container).lookup('service:media');
    mediaService._forceSetBreakpoint(breakpoint);
    container.set('media', mediaService);

    return mediaService;
  }
});
define('pix-live/tests/helpers/seeds', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.injectUserAccount = injectUserAccount;
  exports.injectOrganization = injectOrganization;
  function injectUserAccount() {
    server.loadFixtures('areas');
    server.loadFixtures('competences');

    return server.create('user', {
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

  function injectOrganization(code) {
    return server.create('organization', { code: code });
  }
});
define('pix-live/tests/helpers/start-app', ['exports', 'pix-live/app', 'pix-live/config/environment', 'pix-live/tests/helpers/responsive'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('pix-live/tests/helpers/testing', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.authenticateAsSimpleUser = authenticateAsSimpleUser;
  exports.authenticateAsPrescriber = authenticateAsPrescriber;
  function authenticateAsSimpleUser() {
    visit('/connexion');
    fillIn('#pix-email', 'jane@acme.com');
    fillIn('#pix-password', 'Jane1234');
    click('.signin-form__submit_button');
  }

  function authenticateAsPrescriber() {
    visit('/connexion');
    fillIn('#pix-email', 'john@acme.com');
    fillIn('#pix-password', 'John1234');
    click('.signin-form__submit_button');
  }
});
define('pix-live/tests/integration/components/certification-banner-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | Certification Banner', function () {

    (0, _emberMocha.setupComponentTest)('certification-banner', {
      integration: true
    });

    context('On component rendering', function () {
      var user = { id: 5, firstName: 'shi', lastName: 'fu' };
      var certificationNumber = 'certification-number';

      (0, _mocha.it)('should render component container', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "SzIDYsnG",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"certification-banner\"],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$()).to.have.lengthOf(1);
      });

      (0, _mocha.it)('should render component with a div:certification-banner__user-fullname', function () {
        // when
        this.set('user', user);
        this.render(Ember.HTMLBars.template({
          "id": "SHNdCrAu",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"certification-banner\",null,[[\"user\"],[[20,[\"user\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('.certification-banner__container .certification-banner__user-fullname')).to.have.lengthOf(1);
        (0, _chai.expect)(this.$('.certification-banner__container .certification-banner__user-fullname').text().trim()).to.equal(user.firstName + ' ' + user.lastName);
      });

      (0, _mocha.it)('should render component with a div:certification-banner__certification-number', function () {
        // when
        this.set('certificationNumber', certificationNumber);
        this.render(Ember.HTMLBars.template({
          "id": "Q0133kHb",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"certification-banner\",null,[[\"user\",\"certificationNumber\"],[[20,[\"user\"]],[20,[\"certificationNumber\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('.certification-banner__container .certification-banner__certification-number')).to.have.lengthOf(1);
        (0, _chai.expect)(this.$('.certification-banner__container .certification-banner__certification-number').text().trim()).to.equal('#' + certificationNumber);
      });
    });
  });
});
define('pix-live/tests/integration/components/certification-results-page-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | certification results template', function () {
    (0, _emberMocha.setupComponentTest)('certification-results-page', {
      integration: true
    });

    context('When component is rendered', function () {
      var user = { id: 5, firstName: 'shi', lastName: 'fu' };
      var certificationNumber = 'certification-number';

      (0, _mocha.beforeEach)(function () {
        this.set('user', user);
        this.set('certificationNumber', certificationNumber);
      });

      (0, _mocha.it)('should also render a certification banner', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "x+9f/CUC",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"certification-results-page\",null,[[\"user\",\"certificationNumber\"],[[20,[\"user\"]],[20,[\"certificationNumber\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('.certification-banner')).to.have.lengthOf(1);
        (0, _chai.expect)(this.$('.certification-banner__container .certification-banner__user-fullname')).to.have.lengthOf(1);
        (0, _chai.expect)(this.$('.certification-banner__container .certification-banner__user-fullname').text().trim()).to.equal(user.firstName + ' ' + user.lastName);
        (0, _chai.expect)(this.$('.certification-banner__container .certification-banner__certification-number').text().trim()).to.equal('#' + certificationNumber);
      });

      (0, _mocha.it)('should have a button to logout', function () {
        // given
        Ember.LinkComponent.reopen({
          href: Ember.computed.alias('qualifiedRouteName')
        });

        // when
        this.render(Ember.HTMLBars.template({
          "id": "x+9f/CUC",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"certification-results-page\",null,[[\"user\",\"certificationNumber\"],[[20,[\"user\"]],[20,[\"certificationNumber\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('.warning-logout-button')).to.have.lengthOf(1);
        (0, _chai.expect)(this.$('.warning-logout-button').attr('href')).to.equal('logout');
      });
    });
  });
});
define('pix-live/tests/integration/components/challenge-actions-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  var VALIDATE_BUTTON = '.challenge-actions__action-validate';
  var SKIP_BUTTON = '.challenge-actions__action-skip';

  (0, _mocha.describe)('Integration | Component | challenge actions', function () {

    (0, _emberMocha.setupComponentTest)('challenge-actions', {
      integration: true
    });

    (0, _mocha.it)('renders', function () {
      this.render(Ember.HTMLBars.template({
        "id": "drTmBW/o",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"challenge-actions\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.lengthOf(1);
    });

    (0, _mocha.describe)('Validate button (and placeholding loader)', function () {

      (0, _mocha.it)('should be displayed and enable by default but not loader', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "drTmBW/o",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"challenge-actions\"],false]],\"hasEval\":false}",
          "meta": {}
        }));
        // then
        (0, _chai.expect)(this.$(VALIDATE_BUTTON)).to.have.lengthOf(1);
        (0, _chai.expect)(this.$('.challenge-actions__action-validate__loader-bar')).to.have.lengthOf(0);
      });

      (0, _mocha.it)('should be replaced by a loader during treatment', function () {
        // given
        this.set('externalAction', function () {
          return new Ember.RSVP.Promise(function () {});
        });
        this.render(Ember.HTMLBars.template({
          "id": "FDBJOTJO",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"challenge-actions\",null,[[\"answerValidated\"],[[25,\"action\",[[19,0,[]],[20,[\"externalAction\"]]],null]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // when
        this.$(VALIDATE_BUTTON).click();

        // then
        (0, _chai.expect)(this.$(VALIDATE_BUTTON)).to.have.lengthOf(0);
        (0, _chai.expect)(this.$('.challenge-actions__action-validate__loader-bar')).to.have.lengthOf(1);
      });

      (0, _mocha.it)('should be enable again when the treatment failed', function () {
        // given
        this.set('externalAction', function () {
          return Ember.RSVP.reject('Some error');
        });
        this.render(Ember.HTMLBars.template({
          "id": "FDBJOTJO",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"challenge-actions\",null,[[\"answerValidated\"],[[25,\"action\",[[19,0,[]],[20,[\"externalAction\"]]],null]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // when
        this.$(VALIDATE_BUTTON).click();

        // then
        (0, _chai.expect)(this.$(VALIDATE_BUTTON)).to.have.lengthOf(1);
        (0, _chai.expect)(this.$('.challenge-actions__action-skip__loader-bar')).to.have.lengthOf(0);
      });
    });

    (0, _mocha.describe)('Skip button', function () {

      (0, _mocha.it)('should be displayed and enable by default', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "drTmBW/o",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"challenge-actions\"],false]],\"hasEval\":false}",
          "meta": {}
        }));
        // then
        (0, _chai.expect)(this.$(SKIP_BUTTON)).to.have.lengthOf(1);
      });

      (0, _mocha.it)('should be replaced by a loader during treatment', function () {
        // given
        this.set('externalAction', function () {
          return new Ember.RSVP.Promise(function () {});
        });
        this.render(Ember.HTMLBars.template({
          "id": "B9/Sx9KI",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"challenge-actions\",null,[[\"challengeSkipped\"],[[25,\"action\",[[19,0,[]],[20,[\"externalAction\"]]],null]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // when
        this.$(SKIP_BUTTON).click();

        // then
        (0, _chai.expect)(this.$(SKIP_BUTTON)).to.have.lengthOf(0);
        (0, _chai.expect)(this.$('.challenge-actions__action-skip__loader-bar')).to.have.lengthOf(1);
      });
    });
  });
});
define('pix-live/tests/integration/components/challenge-item-qmail-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | challenge item qmail', function () {
    (0, _emberMocha.setupComponentTest)('challenge-item-qmail', {
      integration: true
    });

    (0, _mocha.it)('renders', function () {
      // When
      this.render(Ember.HTMLBars.template({
        "id": "Yi9RmO0k",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"challenge-item-qmail\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      // Then
      (0, _chai.expect)(this.$()).to.have.length(1);
    });

    var assessment = void 0;
    var challenge = void 0;

    (0, _mocha.beforeEach)(function () {
      assessment = Ember.Object.create({});
      challenge = Ember.Object.create({
        id: 'recTJ23Nj3bnkfl',
        instruction: 'Pour valider cette épreuve ...'
      });
    });

    (0, _mocha.it)('displays the instruction block', function () {
      // Given
      this.set('assessment', assessment);
      this.set('challenge', challenge);

      // When
      this.render(Ember.HTMLBars.template({
        "id": "K7gjaZVh",
        "block": "{\"symbols\":[],\"statements\":[[1,[25,\"challenge-item-qmail\",null,[[\"challenge\",\"assessment\"],[[20,[\"challenge\"]],[20,[\"assessment\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));

      // Then
      var instructionPanel = document.querySelector('.challenge-statement__instruction-section');
      (0, _chai.expect)(instructionPanel).to.exist;
      (0, _chai.expect)(instructionPanel).to.contain.text('Pour valider cette épreuve');
    });

    (0, _mocha.describe)('confirmation area', function () {
      (0, _mocha.it)('should have a confirmation QMAIL area', function () {
        // Given
        this.set('assessment', assessment);
        this.set('challenge', challenge);

        // When
        this.render(Ember.HTMLBars.template({
          "id": "K7gjaZVh",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"challenge-item-qmail\",null,[[\"challenge\",\"assessment\"],[[20,[\"challenge\"]],[20,[\"assessment\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // Then
        var confirmationArea = document.querySelector('.rounded-panel.challenge-response');

        (0, _chai.expect)(confirmationArea).to.exist;
        (0, _chai.expect)(confirmationArea).to.contain('.rounded-panel__row.challenge-proposals');
      });

      (0, _mocha.it)('should ask you to assert that you fullfilled the challenge\'s requirements', function () {
        // Given
        this.set('assessment', assessment);
        this.set('challenge', challenge);

        // When
        this.render(Ember.HTMLBars.template({
          "id": "K7gjaZVh",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"challenge-item-qmail\",null,[[\"challenge\",\"assessment\"],[[20,[\"challenge\"]],[20,[\"assessment\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // Then
        var confirmationContent = document.querySelector('.rounded-panel__row.challenge-proposals');
        (0, _chai.expect)(confirmationContent).to.contain('input[type=checkbox]');
        (0, _chai.expect)(confirmationContent).to.contain('label');

        var confirmationCheckox = document.querySelector('input[type=checkbox]');
        (0, _chai.expect)(confirmationCheckox).to.have.attribute('id', 'checkbox_qmail_confirmation');
        (0, _chai.expect)(confirmationCheckox).not.to.match(':checked');

        var confirmationLabel = document.querySelector('label');
        (0, _chai.expect)(confirmationLabel).to.have.attribute('for', 'checkbox_qmail_confirmation');
        (0, _chai.expect)(confirmationLabel).to.have.attribute('class', 'label-checkbox-proposal');
        (0, _chai.expect)(confirmationLabel).to.have.text('Je l\'ai fait');
      });
    });

    (0, _mocha.it)('should allow you to skip or validate', function () {
      // Given
      this.set('assessment', assessment);
      this.set('challenge', challenge);

      // When
      this.render(Ember.HTMLBars.template({
        "id": "K7gjaZVh",
        "block": "{\"symbols\":[],\"statements\":[[1,[25,\"challenge-item-qmail\",null,[[\"challenge\",\"assessment\"],[[20,[\"challenge\"]],[20,[\"assessment\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));

      // Then
      var validationArea = document.querySelector('.challenge-actions');
      (0, _chai.expect)(validationArea).to.exist;
      (0, _chai.expect)(validationArea).to.contain('.challenge-actions__action.challenge-actions__action-validate');
      (0, _chai.expect)(validationArea).to.contain('.challenge-actions__action.challenge-actions__action-skip');
    });

    (0, _mocha.describe)('Error messages panel', function () {
      (0, _mocha.it)('should be displayed when an error message is present', function () {
        // Given
        this.set('assessment', assessment);
        this.set('challenge', challenge);
        this.set('errorMessage', 'Une erreur est survenue');

        // When
        this.render(Ember.HTMLBars.template({
          "id": "Nto5AJr7",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"challenge-item-qmail\",null,[[\"challenge\",\"assessment\",\"errorMessage\"],[[20,[\"challenge\"]],[20,[\"assessment\"]],[20,[\"errorMessage\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // Then
        var errorMessagePanel = document.querySelector('.alert.alert-danger');
        (0, _chai.expect)(errorMessagePanel).to.exist;
        (0, _chai.expect)(errorMessagePanel).to.contain.text('Une erreur est survenue');
      });

      (0, _mocha.it)('should be hidden', function () {
        // Given
        this.set('assessment', assessment);
        this.set('challenge', challenge);

        // When
        this.render(Ember.HTMLBars.template({
          "id": "K7gjaZVh",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"challenge-item-qmail\",null,[[\"challenge\",\"assessment\"],[[20,[\"challenge\"]],[20,[\"assessment\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // Then
        var errorMessagePanel = document.querySelector('.alert.alert-danger');
        (0, _chai.expect)(errorMessagePanel).not.to.exist;
      });
    });
  });
});
define('pix-live/tests/integration/components/challenge-statement-test', ['chai', 'mocha', 'ember-mocha', 'sinon'], function (_chai, _mocha, _emberMocha, _sinon) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | ChallengeStatement', function () {

    (0, _emberMocha.setupComponentTest)('challenge-statement', {
      integration: true
    });

    function addChallengeToContext(component, challenge) {
      component.set('challenge', challenge);
    }

    function addAssessmentToContext(component, assessment) {
      component.set('assessment', assessment);
    }

    function renderChallengeStatement(component) {
      return component.render(Ember.HTMLBars.template({
        "id": "xFEOk7in",
        "block": "{\"symbols\":[],\"statements\":[[1,[25,\"challenge-statement\",null,[[\"challenge\",\"assessment\"],[[20,[\"challenge\"]],[20,[\"assessment\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
    }

    /*
     * Instruction
     * ------------------------------------------------
     */

    (0, _mocha.describe)('Instruction section:', function () {

      var clock = void 0;
      var februaryTheFifth = new Date(2017, 1, 5);

      beforeEach(function () {
        clock = _sinon.default.useFakeTimers(februaryTheFifth);
      });

      afterEach(function () {
        clock.restore();
      });

      // Inspired from: https://github.com/emberjs/ember-mocha/blob/0790a78d7464655fee0c103d2fa960fa53a056ca/tests/setup-component-test-test.js#L118-L122
      (0, _mocha.it)('should render challenge instruction if it exists', function () {
        // given
        addChallengeToContext(this, {
          instruction: 'La consigne de mon test'
        });

        // when
        renderChallengeStatement(this);

        // then
        (0, _chai.expect)(this.$('.challenge-statement__instruction').text().trim()).to.equal('La consigne de mon test');
      });

      (0, _mocha.it)('should not render challenge instruction if it does not exist', function () {
        // given
        addChallengeToContext(this, {});

        // when
        renderChallengeStatement(this);

        // then
        (0, _chai.expect)(this.$('.challenge-statement__instruction')).to.have.lengthOf(0);
      });

      (0, _mocha.it)('should replace ${EMAIL} by a generated email', function () {
        // given
        addAssessmentToContext(this, { id: '267845' });
        addChallengeToContext(this, {
          id: 'recigAYl5bl96WGXj',
          instruction: 'Veuillez envoyer un email à l\'adresse ${EMAIL} pour valider cette épreuve'
        });

        // when
        renderChallengeStatement(this);

        // then
        (0, _chai.expect)(this.$('.challenge-statement__instruction').text().trim()).to.equal('Veuillez envoyer un email à l\'adresse recigAYl5bl96WGXj-267845-0502@pix-infra.ovh pour valider cette épreuve');
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
        "id": "+dJnSZnH",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"challenge-stay\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.lengthOf(1);
    });

    (0, _mocha.it)('should display a warning icon with an accessible description', function () {
      // when
      this.render(Ember.HTMLBars.template({
        "id": "+dJnSZnH",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"challenge-stay\"],false]],\"hasEval\":false}",
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
define('pix-live/tests/integration/components/comparison-window-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
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
        answer = Ember.Object.create({ value: '1,2', result: 'ko' });
        challenge = Ember.Object.create({
          instruction: 'This is the instruction',
          proposals: '' + '- 1ere possibilite\n ' + '- 2eme possibilite\n ' + '- 3eme possibilite\n' + '- 4eme possibilite'
        });
        solution = Ember.Object.create({ value: '2,3' });

        this.set('answer', answer);
        this.set('challenge', challenge);
        this.set('solution', solution);
        this.set('index', '3');
      });

      (0, _mocha.it)('renders', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "AcsSI407",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"comparison-window\",null,[[\"answer\",\"challenge\",\"solution\",\"index\"],[[20,[\"answer\"]],[20,[\"challenge\"]],[20,[\"solution\"]],[20,[\"index\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));
        // then
        (0, _chai.expect)(this.$()).to.have.lengthOf(1);
      });

      (0, _mocha.it)('should render challenge result in the header', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "AcsSI407",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"comparison-window\",null,[[\"answer\",\"challenge\",\"solution\",\"index\"],[[20,[\"answer\"]],[20,[\"challenge\"]],[20,[\"solution\"]],[20,[\"index\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));
        // then
        (0, _chai.expect)(this.$('.comparison-window__header')).to.have.lengthOf(1);
      });

      (0, _mocha.it)('should render challenge instruction', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "AcsSI407",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"comparison-window\",null,[[\"answer\",\"challenge\",\"solution\",\"index\"],[[20,[\"answer\"]],[20,[\"challenge\"]],[20,[\"solution\"]],[20,[\"index\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));
        // then
        (0, _chai.expect)(this.$('.challenge-statement__instruction')).to.have.lengthOf(1);
      });

      (0, _mocha.it)('should not render corrected answers when challenge has no type', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "AcsSI407",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"comparison-window\",null,[[\"answer\",\"challenge\",\"solution\",\"index\"],[[20,[\"answer\"]],[20,[\"challenge\"]],[20,[\"solution\"]],[20,[\"index\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));
        // then
        (0, _chai.expect)(this.$('.comparison-window__corrected-answers')).to.have.lengthOf(0);
      });

      (0, _mocha.it)('should render corrected answers when challenge type is QROC', function () {
        // given
        challenge = Ember.Object.create({ type: 'QROC' });
        this.set('challenge', challenge);
        // when
        this.render(Ember.HTMLBars.template({
          "id": "AcsSI407",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"comparison-window\",null,[[\"answer\",\"challenge\",\"solution\",\"index\"],[[20,[\"answer\"]],[20,[\"challenge\"]],[20,[\"solution\"]],[20,[\"index\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));
        // then
        (0, _chai.expect)(this.$('.comparison-window__corrected-answers--qroc')).to.have.lengthOf(1);
      });

      (0, _mocha.it)('should render corrected answers when challenge type is QROCM-ind', function () {
        // given
        challenge = Ember.Object.create({ type: 'QROCM-ind', proposals: '' });
        solution = Ember.Object.create({ value: '' });
        this.set('challenge', challenge);
        this.set('solution', solution);
        // when
        this.render(Ember.HTMLBars.template({
          "id": "AcsSI407",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"comparison-window\",null,[[\"answer\",\"challenge\",\"solution\",\"index\"],[[20,[\"answer\"]],[20,[\"challenge\"]],[20,[\"solution\"]],[20,[\"index\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));
        // then
        (0, _chai.expect)(this.$('.comparison-window__corrected-answers--qrocm')).to.have.lengthOf(1);
      });

      (0, _mocha.it)('should render corrected answers when challenge type is QCM', function () {
        // given
        challenge = Ember.Object.create({ type: 'QCM' });
        this.set('challenge', challenge);
        // when
        this.render(Ember.HTMLBars.template({
          "id": "AcsSI407",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"comparison-window\",null,[[\"answer\",\"challenge\",\"solution\",\"index\"],[[20,[\"answer\"]],[20,[\"challenge\"]],[20,[\"solution\"]],[20,[\"index\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));
        // then
        (0, _chai.expect)(this.$('.qcm-solution-panel')).to.have.lengthOf(1);
      });

      (0, _mocha.it)('should render a feedback panel already opened', function () {
        //when
        this.render(Ember.HTMLBars.template({
          "id": "AcsSI407",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"comparison-window\",null,[[\"answer\",\"challenge\",\"solution\",\"index\"],[[20,[\"answer\"]],[20,[\"challenge\"]],[20,[\"solution\"]],[20,[\"index\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));
        //then
        (0, _chai.expect)(this.$('.comparison-window__feedback-panel')).to.have.lengthOf(1);
        (0, _chai.expect)(this.$(FEEDBACK_FORM)).to.have.lengthOf(1);
        (0, _chai.expect)(this.$(LINK_OPEN_FORM)).to.have.lengthOf(0);
      });

      (0, _mocha.it)('should have a max width of 900px and a margin auto in order to quit by clicking beside', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "8IA3gQhk",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"comparison-window\",[[20,[\"answer\"]],[20,[\"challenge\"]],[20,[\"solution\"]],[20,[\"index\"]]],null],false]],\"hasEval\":false}",
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
          this.render(Ember.HTMLBars.template({
            "id": "AcsSI407",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"comparison-window\",null,[[\"answer\",\"challenge\",\"solution\",\"index\"],[[20,[\"answer\"]],[20,[\"challenge\"]],[20,[\"solution\"]],[20,[\"index\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));

          // then
          var $icon = this.$('.comparison-window__result-icon');
          (0, _chai.expect)(this.$('.comparison-window__result-icon--' + data.status)).to.have.lengthOf(1);
          (0, _chai.expect)($icon.attr('src')).to.equal('/images/answer-validation/icon-' + data.status + '.svg');
        });
      });

      (0, _mocha.it)('should render a tutorial panel before feedback panel', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "fLyyRS5D",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"comparison-window\"],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('.tutorial-panel')).to.have.lengthOf(1);
      });
    });
  });
});
define('pix-live/tests/integration/components/competence-area-list-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | competence area list', function () {
    (0, _emberMocha.setupComponentTest)('competence-area-list', {
      integration: true
    });

    (0, _mocha.describe)('Component rendering', function () {
      (0, _mocha.it)('renders', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "9c5X+hfd",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"competence-area-list\"],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$()).to.have.lengthOf(1);
      });

      (0, _mocha.it)('should render a wrapper', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "9c5X+hfd",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"competence-area-list\"],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        var WRAPPER_CLASS = '.competence-area-list';
        (0, _chai.expect)(this.$(WRAPPER_CLASS)).to.have.lengthOf(1);
      });

      (0, _mocha.describe)('Rendering when different areas', function () {

        (0, _mocha.it)('should render 5 competence areas, when there are 5 competences with different area for each one', function () {
          // given
          var competencesWithDifferentAreas = [Ember.Object.create({ id: 1, name: 'competence-1', areaName: 'area-A' }), Ember.Object.create({ id: 2, name: 'competence-2', areaName: 'area-B' }), Ember.Object.create({ id: 3, name: 'competence-3', areaName: 'area-C' }), Ember.Object.create({ id: 4, name: 'competence-4', areaName: 'area-D' }), Ember.Object.create({ id: 5, name: 'competence-5', areaName: 'area-E' })];
          this.set('competences', competencesWithDifferentAreas);

          // when
          this.render(Ember.HTMLBars.template({
            "id": "nWqwf4iy",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"competence-area-list\",null,[[\"competences\"],[[20,[\"competences\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));

          // then
          (0, _chai.expect)(this.$('.competence-area-list__item')).to.have.lengthOf(5);
        });

        (0, _mocha.it)('should render 2 competence areas, when there are 5 competences related to 2 different areas', function () {
          // given
          var competencesWithDifferentAreas = [Ember.Object.create({ id: 1, name: 'competence-1', areaName: 'area-A' }), Ember.Object.create({ id: 2, name: 'competence-2', areaName: 'area-A' }), Ember.Object.create({ id: 3, name: 'competence-3', areaName: 'area-A' }), Ember.Object.create({ id: 4, name: 'competence-4', areaName: 'area-B' }), Ember.Object.create({ id: 5, name: 'competence-5', areaName: 'area-B' })];
          this.set('competences', competencesWithDifferentAreas);

          // when
          this.render(Ember.HTMLBars.template({
            "id": "nWqwf4iy",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"competence-area-list\",null,[[\"competences\"],[[20,[\"competences\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));

          // then
          (0, _chai.expect)(this.$('.competence-area-list__item')).to.have.lengthOf(2);
        });
      });

      (0, _mocha.describe)('Rendering when same area', function () {
        (0, _mocha.it)('should render only 1 competence area, when there are 5 competences with the same area', function () {
          // given
          var competencesWithSameArea = [Ember.Object.create({ id: 1, name: 'competence-1', areaName: 'area-A' }), Ember.Object.create({ id: 2, name: 'competence-2', areaName: 'area-A' }), Ember.Object.create({ id: 3, name: 'competence-3', areaName: 'area-A' }), Ember.Object.create({ id: 4, name: 'competence-4', areaName: 'area-A' }), Ember.Object.create({ id: 5, name: 'competence-5', areaName: 'area-A' })];

          // when
          this.set('competences', competencesWithSameArea);
          this.render(Ember.HTMLBars.template({
            "id": "nWqwf4iy",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"competence-area-list\",null,[[\"competences\"],[[20,[\"competences\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));
          // then
          (0, _chai.expect)(this.$('.competence-area-list__item')).to.have.lengthOf(1);
        });
      });
    });
  });
});
define('pix-live/tests/integration/components/competence-by-area-item-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | competence area item', function () {
    (0, _emberMocha.setupComponentTest)('competence-by-area-item', {
      integration: true
    });

    (0, _mocha.it)('should render', function () {
      // when
      this.render(Ember.HTMLBars.template({
        "id": "f1j3xkR5",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"competence-by-area-item\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      // then
      (0, _chai.expect)(this.$('.competence-by-area-item')).to.have.lengthOf(1);
    });

    (0, _mocha.it)('should render a title', function () {
      // Given
      var competence = Ember.Object.create({ name: 'competence-A', level: 1 });
      var areaWithOnlyOneCompetence = { property: 'area', value: '1. Information et données', items: [competence] };
      this.set('competenceArea', areaWithOnlyOneCompetence);
      // when
      this.render(Ember.HTMLBars.template({
        "id": "vlS7E1p+",
        "block": "{\"symbols\":[],\"statements\":[[1,[25,\"competence-by-area-item\",null,[[\"competenceArea\"],[[20,[\"competenceArea\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      // then
      (0, _chai.expect)(this.$('.area__name').text().trim()).to.equal('Information et données');
    });

    (0, _mocha.it)('should render as many competences as received', function () {
      // given
      var competencesWithSameArea = [Ember.Object.create({ id: 1, name: 'competence-name-1', area: 'area-id-1' }), Ember.Object.create({ id: 2, name: 'competence-name-2', area: 'area-id-1' }), Ember.Object.create({ id: 3, name: 'competence-name-3', area: 'area-id-1' }), Ember.Object.create({ id: 4, name: 'competence-name-4', area: 'area-id-1' }), Ember.Object.create({ id: 5, name: 'competence-name-5', area: 'area-id-1' })];
      var areaWithManyCompetences = {
        property: 'area',
        value: 'Information et données',
        items: competencesWithSameArea
      };

      this.set('competenceArea', areaWithManyCompetences);
      // when
      this.render(Ember.HTMLBars.template({
        "id": "vlS7E1p+",
        "block": "{\"symbols\":[],\"statements\":[[1,[25,\"competence-by-area-item\",null,[[\"competenceArea\"],[[20,[\"competenceArea\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));

      // then
      (0, _chai.expect)(this.$('.competence__name')).to.have.lengthOf(5);
    });

    (0, _mocha.describe)('Competence rendering', function () {
      (0, _mocha.it)('should render its name', function () {
        // given
        var competence = Ember.Object.create({ name: 'Mener une recherche et une veille d’information' });
        var areaWithOnlyOneCompetence = { property: 'area', value: '1. Information et données', items: [competence] };
        this.set('competenceArea', areaWithOnlyOneCompetence);

        // when
        this.render(Ember.HTMLBars.template({
          "id": "vlS7E1p+",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"competence-by-area-item\",null,[[\"competenceArea\"],[[20,[\"competenceArea\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('.competence__name').text().trim()).to.equal('Mener une recherche et une veille d’information');
      });

      (0, _mocha.it)('should render the relative level progress bar for user', function () {
        // given
        var competence = Ember.Object.create();
        var areaWithOnlyOneCompetence = { property: 'area', value: '1. Information et données', items: [competence] };
        this.set('competenceArea', areaWithOnlyOneCompetence);

        // when
        this.render(Ember.HTMLBars.template({
          "id": "vlS7E1p+",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"competence-by-area-item\",null,[[\"competenceArea\"],[[20,[\"competenceArea\"]]]]],false]],\"hasEval\":false}",
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
        "id": "vvxLRPPr",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"competence-level-progress-bar\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });

    (0, _mocha.describe)('progress bar', function () {

      context('if the level is not defined', function () {

        (0, _mocha.it)('should not display the background of progress bar which display limit and max level', function () {
          //Given
          var givenLevel = -1;
          this.set('level', givenLevel);

          //When
          this.render(Ember.HTMLBars.template({
            "id": "6QNEzXyL",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"competence-level-progress-bar\",null,[[\"level\"],[[20,[\"level\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));

          //Then
          (0, _chai.expect)(this.$('.competence-level-progress-bar__background')).to.have.lengthOf(0);
        });

        (0, _mocha.it)('should not display a progress bar if level is not defined (-1)', function () {
          //Given
          var givenLevel = undefined;
          this.set('level', givenLevel);

          //When
          this.render(Ember.HTMLBars.template({
            "id": "6QNEzXyL",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"competence-level-progress-bar\",null,[[\"level\"],[[20,[\"level\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));

          //Then
          (0, _chai.expect)(this.$('.competence-level-progress-bar__level')).to.have.lengthOf(0);
        });
      });

      context('if the level is defined', function () {

        (0, _mocha.it)('should indicate the limit level and the max level reachable in the progress bar', function () {
          // given
          var MAX_LEVEL = 8;
          var LIMIT_LEVEL = 5;
          var level = 4;
          this.set('level', level);

          // when
          this.render(Ember.HTMLBars.template({
            "id": "6QNEzXyL",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"competence-level-progress-bar\",null,[[\"level\"],[[20,[\"level\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));

          // then
          (0, _chai.expect)(this.$('.competence-level-progress-bar__background-level-limit-indicator')).to.have.lengthOf(1);
          (0, _chai.expect)(this.$('.competence-level-progress-bar__background-level-limit-indicator').text().trim()).to.equal(LIMIT_LEVEL.toString());
          (0, _chai.expect)(this.$('.competence-level-progress-bar__background-level-limit-max-indicator')).to.have.lengthOf(1);
          (0, _chai.expect)(this.$('.competence-level-progress-bar__background-level-limit-max-indicator').text().trim()).to.equal(MAX_LEVEL.toString());
        });

        (0, _mocha.it)('should display a progress bar if level is defined (equal or more than 0)', function () {
          //Given
          var givenLevel = 1;
          this.set('level', givenLevel);

          //When
          this.render(Ember.HTMLBars.template({
            "id": "6QNEzXyL",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"competence-level-progress-bar\",null,[[\"level\"],[[20,[\"level\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));

          //Then
          (0, _chai.expect)(this.$('.competence-level-progress-bar__level')).to.have.lengthOf(1);
        });

        (0, _mocha.it)('should indicate the level passed to the component at the end of the progress bar', function () {
          // given
          var level = 5;
          this.set('level', level);

          // when
          this.render(Ember.HTMLBars.template({
            "id": "6QNEzXyL",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"competence-level-progress-bar\",null,[[\"level\"],[[20,[\"level\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));

          // then
          (0, _chai.expect)(this.$('.competence-level-progress-bar__level-indicator').text().trim()).to.be.equal(level.toString());
        });
      });
    });

    (0, _mocha.describe)('start course link', function () {

      (0, _mocha.it)('should display ’commencer’ in progress bar, when the level is not defined (-1) and no assessment is related', function () {
        // given
        var courseId = 'rec123';
        var level = -1;

        this.set('courseId', courseId);
        this.set('level', level);
        this.set('name', 'Premier test de positionnement');

        // when
        this.render(Ember.HTMLBars.template({
          "id": "lq7j5+91",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"competence-level-progress-bar\",null,[[\"name\",\"level\",\"courseId\"],[[20,[\"name\"]],[20,[\"level\"]],[20,[\"courseId\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('.competence-level-progress-bar__link')).to.have.lengthOf(1);
        (0, _chai.expect)(this.$('a.competence-level-progress-bar__link-start')).to.have.lengthOf(1);
        (0, _chai.expect)(this.$('a.competence-level-progress-bar__link-start').text().trim()).to.contains('Commencer le test "Premier test de positionnement"');
      });

      (0, _mocha.it)('should not display ’commencer’ in progress bar, when the level is already defined', function () {
        // given
        var courseId = 'rec123';
        var level = 3;

        this.set('courseId', courseId);
        this.set('level', level);
        this.set('name', 'Premier test de positionnement');

        // when
        this.render(Ember.HTMLBars.template({
          "id": "2taiFyvd",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"competence-level-progress-bar\",null,[[\"level\",\"courseId\",\"name\"],[[20,[\"level\"]],[20,[\"courseId\"]],[20,[\"name\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('.competence-level-progress-bar__link')).to.have.lengthOf(0);
        (0, _chai.expect)(this.$('a.competence-level-progress-bar__link-start')).to.have.lengthOf(0);
      });

      (0, _mocha.it)('should not display ’commencer’ in progress bar when there is no associated course', function () {
        // given
        var level = 3;
        this.set('level', level);
        this.set('name', 'Premier test de positionnement');

        // when
        this.render(Ember.HTMLBars.template({
          "id": "qM+MaEgs",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"competence-level-progress-bar\",null,[[\"level\",\"name\"],[[20,[\"level\"]],[20,[\"name\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('.competence-level-progress-bar__link')).to.have.lengthOf(0);
        (0, _chai.expect)(this.$('a.competence-level-progress-bar__link-start')).to.have.lengthOf(0);
      });
    });

    (0, _mocha.describe)('resume assessment link', function () {

      (0, _mocha.it)('should display `Reprendre` if status is "notCompleted" and there is an assessment related', function () {
        // given
        var status = 'notCompleted';
        var assessmentId = 'awesomeId';
        var name = 'deuxième test';
        this.set('status', status);
        this.set('assessmentId', assessmentId);
        this.set('name', name);

        // when
        this.render(Ember.HTMLBars.template({
          "id": "uMDOWlqy",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"competence-level-progress-bar\",null,[[\"status\",\"assessmentId\",\"name\"],[[20,[\"status\"]],[20,[\"assessmentId\"]],[20,[\"name\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('.competence-level-progress-bar__link')).to.have.lengthOf(1);
        (0, _chai.expect)(this.$('a.competence-level-progress-bar__link-resume')).to.have.lengthOf(1);
        (0, _chai.expect)(this.$('a.competence-level-progress-bar__link-resume').text().trim()).to.be.equal('Reprendre le test "deuxième test"');
      });
    });

    (0, _mocha.describe)('replay assessment link', function () {

      (0, _mocha.it)('should display `Seconde Change` if status is "evaluated"', function () {
        // given
        var status = 'evaluated';
        var name = 'deuxième test';
        var courseId = 'courseId';
        var level = 3;

        this.set('status', status);
        this.set('name', name);
        this.set('courseId', courseId);
        this.set('level', level);

        // when
        this.render(Ember.HTMLBars.template({
          "id": "07CjnPD7",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"competence-level-progress-bar\",null,[[\"status\",\"name\",\"courseId\",\"level\"],[[20,[\"status\"]],[20,[\"name\"]],[20,[\"courseId\"]],[20,[\"level\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('.competence-level-progress-bar__link')).to.have.lengthOf(1);
        (0, _chai.expect)(this.$('.competence-level-progress-bar__link-replay')).to.have.lengthOf(1);
        (0, _chai.expect)(this.$('a.competence-level-progress-bar__link-replay').text().trim()).to.be.equal('Seconde chance pour le test "deuxième test"');
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
        "id": "Cg4x7wWg",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"corner-ribbon\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.lengthOf(1);
    });
  });
});
define('pix-live/tests/integration/components/course-item-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | course item', function () {

    (0, _emberMocha.setupComponentTest)('course-item', {
      integration: true
    });

    (0, _mocha.describe)('rendering:', function () {

      (0, _mocha.it)('renders', function () {
        this.render(Ember.HTMLBars.template({
          "id": "f8cJ0rAq",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"course-item\"],false]],\"hasEval\":false}",
          "meta": {}
        }));
        (0, _chai.expect)(this.$()).to.have.lengthOf(1);
      });

      (0, _mocha.it)('should render course picture if it is defined', function () {
        // given
        var course = Ember.Object.create({ imageUrl: '/images/pix-logo.svg' });
        this.set('course', course);

        // when
        this.render(Ember.HTMLBars.template({
          "id": "gHXI9QBp",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"course-item\",null,[[\"course\"],[[20,[\"course\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        var $picture = this.$('.course-item__picture');
        (0, _chai.expect)($picture.attr('src')).to.equal(course.get('imageUrl'));
      });

      (0, _mocha.it)('should render default picture if course picture is not defined', function () {
        // given
        var course = Ember.Object.create();
        this.set('course', course);

        // when
        this.render(Ember.HTMLBars.template({
          "id": "gHXI9QBp",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"course-item\",null,[[\"course\"],[[20,[\"course\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        var $picture = this.$('.course-item__picture');
        (0, _chai.expect)($picture.attr('src')).to.equal('/images/course-default-image.png');
      });

      (0, _mocha.it)('should render course name', function () {
        // given
        var course = Ember.Object.create({ name: 'name_value' });
        this.set('course', course);

        // when
        this.render(Ember.HTMLBars.template({
          "id": "gHXI9QBp",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"course-item\",null,[[\"course\"],[[20,[\"course\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        var $name = this.$('.course-item__name');
        (0, _chai.expect)($name.text().trim()).to.equal(course.get('name'));
      });

      (0, _mocha.it)('should render course description', function () {
        // given
        var course = Ember.Object.create({ description: 'description_value' });
        this.set('course', course);

        // when
        this.render(Ember.HTMLBars.template({
          "id": "gHXI9QBp",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"course-item\",null,[[\"course\"],[[20,[\"course\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        var $description = this.$('.course-item__description');
        (0, _chai.expect)($description.text().trim()).to.equal(course.get('description'));
      });

      (0, _mocha.it)('should render the number of challenges when the list of challenges is given', function () {
        // given
        var course = Ember.Object.create({ challenges: ['c1', 'c2', 'c3', 'c4'] });
        this.set('course', course);

        // when
        this.render(Ember.HTMLBars.template({
          "id": "gHXI9QBp",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"course-item\",null,[[\"course\"],[[20,[\"course\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        var $nbChallenges = this.$('.course-item__challenges-number');
        (0, _chai.expect)($nbChallenges.text().trim()).to.equal('4 épreuves');
      });

      (0, _mocha.it)('should render the number of challenges when the count of challenge is given', function () {
        // given
        var course = Ember.Object.create({ challenges: [], nbChallenges: 2 });
        this.set('course', course);

        // when
        this.render(Ember.HTMLBars.template({
          "id": "gHXI9QBp",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"course-item\",null,[[\"course\"],[[20,[\"course\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        var $nbChallenges = this.$('.course-item__challenges-number');
        (0, _chai.expect)($nbChallenges.text().trim()).to.equal('2 épreuves');
      });

      (0, _mocha.it)('should render a link to begin the course', function () {
        // given
        var course = Ember.Object.create();
        this.set('course', course);

        // when
        this.render(Ember.HTMLBars.template({
          "id": "gHXI9QBp",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"course-item\",null,[[\"course\"],[[20,[\"course\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        var $startAction = this.$('.course-item__begin-button');
        (0, _chai.expect)($startAction.text().trim()).to.equal('Commencer');
      });

      (0, _mocha.it)('should render a link containing the course name in title', function () {
        // given
        var course = Ember.Object.create({ name: 'My course' });
        this.set('course', course);

        // when
        this.render(Ember.HTMLBars.template({
          "id": "gHXI9QBp",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"course-item\",null,[[\"course\"],[[20,[\"course\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        var $startAction = this.$('.course-item__begin-button');
        (0, _chai.expect)($startAction.attr('title')).to.equal('Commencer le test "My course"');
      });
    });

    (0, _mocha.describe)('behaviours:', function () {

      (0, _mocha.it)('should send action "startCourse" with course in argument when clicking on "start" button', function () {
        // given
        var course = Ember.Object.create({ id: 'course_id' });
        this.set('course', course);
        var actualCourse = void 0;
        this.on('actionHandler', function (receivedCourse) {
          actualCourse = receivedCourse;
        });

        // when
        this.render(Ember.HTMLBars.template({
          "id": "c7zP18Rz",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"course-item\",null,[[\"course\",\"startCourse\"],[[20,[\"course\"]],\"actionHandler\"]]],false]],\"hasEval\":false}",
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
define('pix-live/tests/integration/components/course-list-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | course list', function () {

    (0, _emberMocha.setupComponentTest)('course-list', {
      integration: true
    });

    (0, _mocha.describe)('rendering:', function () {

      (0, _mocha.it)('renders', function () {
        this.render(Ember.HTMLBars.template({
          "id": "1q2q8BdB",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"course-list\"],false]],\"hasEval\":false}",
          "meta": {}
        }));
        (0, _chai.expect)(this.$()).to.have.lengthOf(1);
      });

      (0, _mocha.it)('should render as many course-item as courses elements', function () {
        // given
        var courses = [Ember.Object.create({ id: '1' }), Ember.Object.create({ id: '2' }), Ember.Object.create({ id: '3' })];
        this.set('courses', courses);

        // when
        this.render(Ember.HTMLBars.template({
          "id": "5+uQjYHz",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"course-list\",null,[[\"courses\"],[[20,[\"courses\"]]]]],false]],\"hasEval\":false}",
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
        "id": "uAICdtuJ",
        "block": "{\"symbols\":[],\"statements\":[[1,[25,\"feature-item\",null,[[\"feature\"],[[20,[\"feature\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.lengthOf(1);
    });

    (0, _mocha.it)('should render an icon', function () {
      this.set('feature', feature);
      this.render(Ember.HTMLBars.template({
        "id": "uAICdtuJ",
        "block": "{\"symbols\":[],\"statements\":[[1,[25,\"feature-item\",null,[[\"feature\"],[[20,[\"feature\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));

      var $icon = this.$('.feature-item__icon');
      (0, _chai.expect)($icon).to.exist;
      (0, _chai.expect)($icon.attr('src')).to.equal('/images/features/icon-reference.svg');
    });

    (0, _mocha.it)('should render an title', function () {
      this.set('feature', feature);
      this.render(Ember.HTMLBars.template({
        "id": "uAICdtuJ",
        "block": "{\"symbols\":[],\"statements\":[[1,[25,\"feature-item\",null,[[\"feature\"],[[20,[\"feature\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));

      var $title = this.$('.feature-item__title');
      (0, _chai.expect)($title).to.exist;
      (0, _chai.expect)($title.text().trim()).to.equal(feature.title);
    });

    (0, _mocha.it)('should render an description', function () {
      this.set('feature', feature);
      this.render(Ember.HTMLBars.template({
        "id": "uAICdtuJ",
        "block": "{\"symbols\":[],\"statements\":[[1,[25,\"feature-item\",null,[[\"feature\"],[[20,[\"feature\"]]]]],false]],\"hasEval\":false}",
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
        "id": "/BQ0rxBJ",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"feature-list\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.lengthOf(1);
    });

    (0, _mocha.it)('should always render 5 feature-items', function () {
      // when
      this.render(Ember.HTMLBars.template({
        "id": "/BQ0rxBJ",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"feature-list\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      // then
      (0, _chai.expect)(this.$('.feature-list__li')).to.have.lengthOf(5);
      (0, _chai.expect)(this.$('.feature-item')).to.have.lengthOf(5);
    });
  });
});
define('pix-live/tests/integration/components/feedback-panel-test', ['chai', 'mocha', 'ember-mocha', 'ember-test-helpers/wait', 'pix-live/utils/lodash-custom'], function (_chai, _mocha, _emberMocha, _wait, _lodashCustom) {
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
        this.render(Ember.HTMLBars.template({
          "id": "mlLkZiBp",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"feedback-panel\"],false]],\"hasEval\":false}",
          "meta": {}
        }));
        // then
        (0, _chai.expect)(this.$()).to.have.lengthOf(1);
        expectLinkViewToBeVisible(this);
      });
    });

    (0, _mocha.describe)('Link view (available only when form is closed by default)', function () {

      beforeEach(function () {
        this.render(Ember.HTMLBars.template({
          "id": "mlLkZiBp",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"feedback-panel\"],false]],\"hasEval\":false}",
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

      var storeStub = Ember.Service.extend({
        createRecord: function createRecord() {
          var createRecordArgs = arguments;
          return Object.create({
            save: function save() {
              isSaveMethodCalled = true;
              saveMethodUrl = createRecordArgs[0];
              saveMethodBody = createRecordArgs[1];
              return Ember.RSVP.resolve();
            }
          });
        }
      });

      var isSaveMethodCalled = void 0;
      var saveMethodBody = void 0;
      var saveMethodUrl = void 0;

      beforeEach(function () {
        // configure answer & cie. model object
        var assessment = Ember.Object.extend({ id: 'assessment_id' }).create();
        var challenge = Ember.Object.extend({ id: 'challenge_id' }).create();

        // render component
        this.set('assessment', assessment);
        this.set('challenge', challenge);

        isSaveMethodCalled = false;
        saveMethodBody = null;
        saveMethodUrl = null;

        // stub store service
        this.register('service:store', storeStub);
        this.inject.service('store', { as: 'store' });

        this.render(Ember.HTMLBars.template({
          "id": "l1lRWj4E",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"feedback-panel\",null,[[\"assessment\",\"challenge\",\"collapsible\"],[[20,[\"assessment\"]],[20,[\"challenge\"]],false]]],false]],\"hasEval\":false}",
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
          (0, _chai.expect)(saveMethodBody.assessment).to.exist;
          (0, _chai.expect)(saveMethodBody.challenge).to.exist;
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
        var assessment = Ember.Object.extend({ id: 'assessment_id' }).create();
        var challenge = Ember.Object.extend({ id: 'challenge_id' }).create();

        // render component
        this.set('assessment', assessment);
        this.set('challenge', challenge);
      });

      (0, _mocha.it)('should not be visible if feedback-panel is not collapsible', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "l1lRWj4E",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"feedback-panel\",null,[[\"assessment\",\"challenge\",\"collapsible\"],[[20,[\"assessment\"]],[20,[\"challenge\"]],false]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$(BUTTON_CANCEL)).to.have.lengthOf(0);
      });

      (0, _mocha.it)('should not be visible if status is not FORM_OPENED', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "+4pLFbg7",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"feedback-panel\",null,[[\"assessment\",\"challenge\",\"collapsible\",\"_status\"],[[20,[\"assessment\"]],[20,[\"challenge\"]],true,\"FORM_CLOSED\"]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$(BUTTON_CANCEL)).to.have.lengthOf(0);
      });

      (0, _mocha.it)('should be visible only if component is collapsible and form is opened', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // given
                this.render(Ember.HTMLBars.template({
                  "id": "8ijbH09E",
                  "block": "{\"symbols\":[],\"statements\":[[1,[25,\"feedback-panel\",null,[[\"assessment\",\"challenge\"],[[20,[\"assessment\"]],[20,[\"challenge\"]]]]],false]],\"hasEval\":false}",
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
        this.render(Ember.HTMLBars.template({
          "id": "8ijbH09E",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"feedback-panel\",null,[[\"assessment\",\"challenge\"],[[20,[\"assessment\"]],[20,[\"challenge\"]]]]],false]],\"hasEval\":false}",
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
        this.render(Ember.HTMLBars.template({
          "id": "8ijbH09E",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"feedback-panel\",null,[[\"assessment\",\"challenge\"],[[20,[\"assessment\"]],[20,[\"challenge\"]]]]],false]],\"hasEval\":false}",
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
        this.render(Ember.HTMLBars.template({
          "id": "+2QWKOZD",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"feedback-panel\",null,[[\"collapsible\"],[false]]],false]],\"hasEval\":false}",
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
        this.render(Ember.HTMLBars.template({
          "id": "+2QWKOZD",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"feedback-panel\",null,[[\"collapsible\"],[false]]],false]],\"hasEval\":false}",
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
        this.render(Ember.HTMLBars.template({
          "id": "+2QWKOZD",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"feedback-panel\",null,[[\"collapsible\"],[false]]],false]],\"hasEval\":false}",
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
        this.render(Ember.HTMLBars.template({
          "id": "mlLkZiBp",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"feedback-panel\"],false]],\"hasEval\":false}",
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
        this.render(Ember.HTMLBars.template({
          "id": "+2QWKOZD",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"feedback-panel\",null,[[\"collapsible\"],[false]]],false]],\"hasEval\":false}",
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
define('pix-live/tests/integration/components/follower-form-test', ['chai', 'mocha', 'ember-mocha', 'ember-test-helpers/wait'], function (_chai, _mocha, _emberMocha, _wait) {
  'use strict';

  var BUTTON_SEND = '.follower-form__button';
  var INPUT_EMAIL = '.follower-email';

  (0, _mocha.describe)('Integration | Component | follower form', function () {

    (0, _emberMocha.setupComponentTest)('follower-form', {
      integration: true
    });

    (0, _mocha.it)('renders', function () {
      this.render(Ember.HTMLBars.template({
        "id": "rbScXj64",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"follower-form\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.lengthOf(1);
    });

    (0, _mocha.describe)('Test Component form', function () {
      (0, _mocha.it)('should render submit button', function () {
        //When
        this.render(Ember.HTMLBars.template({
          "id": "rbScXj64",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"follower-form\"],false]],\"hasEval\":false}",
          "meta": {}
        }));
        //then
        (0, _chai.expect)(this.$('.follower-form__button').length).to.equal(1);
      });

      (0, _mocha.it)('should return true if input exist', function () {
        //When
        this.render(Ember.HTMLBars.template({
          "id": "rbScXj64",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"follower-form\"],false]],\"hasEval\":false}",
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

      var storeStub = Ember.Service.extend({
        createRecord: function createRecord() {
          var createRecordArgs = arguments;
          return Object.create({
            save: function save() {
              isSaveMethodCalled = true;
              saveMethodUrl = createRecordArgs[0];
              saveMethodBody = createRecordArgs[1];
              return Ember.RSVP.resolve();
            }
          });
        }
      });

      var errorObject = Ember.Object.create({
        errors: [{
          status: 409
        }]
      });

      var storeStubRejection = Ember.Service.extend({
        createRecord: function createRecord() {
          var createRecordArgs = arguments;
          return Object.create({
            save: function save() {
              isSaveMethodCalled = true;
              saveMethodUrl = createRecordArgs[0];
              saveMethodBody = createRecordArgs[1];
              return Ember.RSVP.reject(errorObject);
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

        this.render(Ember.HTMLBars.template({
          "id": "rbScXj64",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"follower-form\"],false]],\"hasEval\":false}",
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

        this.render(Ember.HTMLBars.template({
          "id": "rbScXj64",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"follower-form\"],false]],\"hasEval\":false}",
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
define('pix-live/tests/integration/components/form-textfield-test', ['chai', 'mocha', 'ember-mocha', 'ember-test-helpers/wait'], function (_chai, _mocha, _emberMocha, _wait) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | form textfield', function () {
    (0, _emberMocha.setupComponentTest)('form-textfield', {
      integration: true
    });

    var LABEL = '.form-textfield__label';
    var LABEL_TEXT = 'NOM';

    var MESSAGE = '.form-textfield__message';
    var MESSAGE_ERROR_STATUS = 'form-textfield__message--error';
    var MESSAGE_SUCCESS_STATUS = 'form-textfield__message--success';
    var MESSAGE_TEXT = '';

    var INPUT = '.form-textfield__input';
    var INPUT_DEFAULT_CLASS = 'form-textfield__input--default';
    var INPUT_SUCCESS_CLASS = 'form-textfield__input--success';
    var INPUT_ERROR_CLASS = 'form-textfield__input--error';

    (0, _mocha.describe)('#Component rendering', function () {
      beforeEach(function () {
        this.set('label', 'nom');
        this.set('validationStatus', '');
        this.set('textfieldName', 'firstname');

        // When
        this.render(Ember.HTMLBars.template({
          "id": "OdF/tY35",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"form-textfield\",null,[[\"label\",\"validationStatus\",\"textfieldName\"],[[20,[\"label\"]],[20,[\"validationStatus\"]],[20,[\"textfieldName\"]]]]],false]],\"hasEval\":false}",
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
          "id": "KbT9+T8t",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"form-textfield\",null,[[\"label\",\"validationStatus\",\"textfieldName\",\"validate\"],[[20,[\"label\"]],[20,[\"validationStatus\"]],[20,[\"textfieldName\"]],\"validate\"]]],false]],\"hasEval\":false}",
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
            "id": "GdmtLDrn",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"form-textfield\",null,[[\"label\",\"validationStatus\",\"validationMessage\",\"textfieldName\"],[[20,[\"label\"]],[20,[\"validationStatus\"]],[20,[\"validationMessage\"]],[20,[\"textfieldName\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));
        });

        (0, _mocha.it)('return true if any svg doesn\'t exist', function () {
          // then
          (0, _chai.expect)(this.$('img')).to.have.lengthOf(0);
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
          "id": "GdmtLDrn",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"form-textfield\",null,[[\"label\",\"validationStatus\",\"validationMessage\",\"textfieldName\"],[[20,[\"label\"]],[20,[\"validationStatus\"]],[20,[\"validationMessage\"]],[20,[\"textfieldName\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));
        this.set('validationMessage', '');
      });

      (0, _mocha.it)('return true if any img does exist', function () {
        var _this = this;

        // then
        return (0, _wait.default)().then(function () {
          (0, _chai.expect)(_this.$('img')).to.have.lengthOf(1);
          (0, _chai.expect)(_this.$('img').attr('class')).to.contain('form-textfield__icon--error');
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
          "id": "GdmtLDrn",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"form-textfield\",null,[[\"label\",\"validationStatus\",\"validationMessage\",\"textfieldName\"],[[20,[\"label\"]],[20,[\"validationStatus\"]],[20,[\"validationMessage\"]],[20,[\"textfieldName\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));
      });

      (0, _mocha.it)('return true if any img does exist', function () {
        // then
        (0, _chai.expect)(this.$('img')).to.have.lengthOf(1);
        (0, _chai.expect)(this.$('img').attr('class')).to.contain('form-textfield__icon--success');
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
define('pix-live/tests/integration/components/g-recaptcha-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  var StubGoogleRecaptchaService = Ember.Service.extend({
    loadScript: function loadScript() {
      return Ember.RSVP.resolve();
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
      this.render(Ember.HTMLBars.template({
        "id": "rKDV9x6j",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"g-recaptcha\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.lengthOf(1);
    });

    // XXX Inspired of https://guides.emberjs.com/v2.13.0/tutorial/service/#toc_integration-testing-the-map-component
    (0, _mocha.it)('should append recaptcha element to container element', function () {
      // when
      this.render(Ember.HTMLBars.template({
        "id": "rKDV9x6j",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"g-recaptcha\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      // then
      (0, _chai.expect)(this.$('#g-recaptcha-container').children()).to.have.lengthOf(1);
      (0, _chai.expect)(this.get('googleRecaptchaService.calledWithContainerId')).to.equal('g-recaptcha-container');
    });
  });
});
define('pix-live/tests/integration/components/logged-user-profile-banner-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | logged user profile banner', function () {
    (0, _emberMocha.setupComponentTest)('logged-user-profile-banner', {
      integration: true
    });

    (0, _mocha.it)('should display a banner', function () {
      // when
      this.render(Ember.HTMLBars.template({
        "id": "YZH61OIE",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"logged-user-profile-banner\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      // then
      (0, _chai.expect)(this.$()).to.have.lengthOf(1);
      (0, _chai.expect)(this.$('.logged-user-profile-banner')).to.have.lengthOf(1);
    });

    (0, _mocha.it)('should have a content text container', function () {
      // when
      this.render(Ember.HTMLBars.template({
        "id": "YZH61OIE",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"logged-user-profile-banner\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      // then
      (0, _chai.expect)(this.$('.profile-banner__content-text-container')).to.have.lengthOf(1);
    });

    (0, _mocha.it)('should a button cta to scroll to profile section', function () {
      // when
      this.render(Ember.HTMLBars.template({
        "id": "YZH61OIE",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"logged-user-profile-banner\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      // then
      (0, _chai.expect)(this.$('.profile-banner__button-scroll-container')).to.have.lengthOf(1);
      (0, _chai.expect)(this.$('.button-scroll-to-profile')).to.have.lengthOf(1);
      (0, _chai.expect)(this.$('.button-scroll-to-profile').text()).to.equal('choisir un test');
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
        "id": "pQozpuot",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"medal-item\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.lengthOf(1);
    });

    (0, _mocha.it)('should contain the number of pix passed in the component', function () {
      // given
      var pixScore = 20;
      this.set('pixScore', pixScore);

      // when
      this.render(Ember.HTMLBars.template({
        "id": "bcm9pOMH",
        "block": "{\"symbols\":[],\"statements\":[[1,[25,\"medal-item\",null,[[\"pixScore\"],[[20,[\"pixScore\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));

      // then
      (0, _chai.expect)(this.$('.medal-item__pix-score').text()).to.contain(pixScore.toString());
    });

    (0, _mocha.it)('should contain an image of a medal with the text pix', function () {
      // when
      this.render(Ember.HTMLBars.template({
        "id": "bcm9pOMH",
        "block": "{\"symbols\":[],\"statements\":[[1,[25,\"medal-item\",null,[[\"pixScore\"],[[20,[\"pixScore\"]]]]],false]],\"hasEval\":false}",
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
        "id": "DK2TnrEu",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"modal-mobile\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.lengthOf(1);
    });

    (0, _mocha.it)('should display a title with a "warning" icon', function () {
      // when
      this.render(Ember.HTMLBars.template({
        "id": "DK2TnrEu",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"modal-mobile\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      // then
      var $titleWarningIcon = this.$('.modal-title__warning-icon');
      (0, _chai.expect)($titleWarningIcon.attr('src')).to.equal('/images/icon-mobile-support-warning.svg');
    });

    (0, _mocha.it)('should display a message', function () {
      // when
      this.render(Ember.HTMLBars.template({
        "id": "DK2TnrEu",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"modal-mobile\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      // then
      var expected = 'Certaines épreuves PIX peuvent être difficiles à réussir sur mobile. Pour une meilleure expérience, nous vous conseillons de passer ce test sur un ordinateur.';
      (0, _chai.expect)(this.$('.modal-body').text().trim()).to.equal(expected);
    });
  });
});
define('pix-live/tests/integration/components/navbar-desktop-nav-menu-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | navbar desktop menu', function () {
    (0, _emberMocha.setupComponentTest)('navbar-desktop-menu', {
      integration: true
    });

    (0, _mocha.it)('should be rendered', function () {
      // when
      this.render(Ember.HTMLBars.template({
        "id": "iuKDPTNa",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"navbar-desktop-menu\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      // then
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('pix-live/tests/integration/components/navbar-header-test', ['chai', 'mocha', 'ember-mocha', 'pix-live/tests/helpers/responsive'], function (_chai, _mocha, _emberMocha, _responsive) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | navbar-header', function () {

    (0, _emberMocha.setupComponentTest)('header-navbar', {
      integration: true
    });

    context('when user is not logged', function () {
      (0, _mocha.beforeEach)(function () {
        this.register('service:session', Ember.Service.extend({ isAuthenticated: false }));
        this.inject.service('session', { as: 'session' });
      });

      (0, _mocha.it)('should be rendered', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "AV5n+32Z",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"navbar-header\"],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$()).to.have.lengthOf(1);
      });

      (0, _mocha.it)('should display the Pix logo', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "AV5n+32Z",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"navbar-header\"],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('.navbar-header-logo')).to.have.lengthOf(1);
        (0, _chai.expect)(this.$('.pix-logo')).to.have.lengthOf(1);
      });

      (0, _mocha.it)('should display link to inscription page', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "AV5n+32Z",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"navbar-header\"],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('.navbar-menu-signup-link')).to.have.lengthOf(1);
      });

      (0, _mocha.it)('should display link to connection page', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "AV5n+32Z",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"navbar-header\"],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('.navbar-menu-signin-link')).to.have.lengthOf(1);
      });

      context('when screen has a smartphone or tablet size', function () {
        (0, _mocha.it)('should display a mobile menu', function () {
          // given
          (0, _responsive.setBreakpointForIntegrationTest)(this, 'mobile');

          // when
          this.render(Ember.HTMLBars.template({
            "id": "8c1xZQ7e",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"navbar-header\",null,[[\"media\"],[[20,[\"media\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));

          // then
          (0, _chai.expect)(this.$('.navbar-mobile-menu')).to.have.lengthOf(1);
          (0, _chai.expect)(this.$('.navbar-desktop-menu')).to.have.lengthOf(0);
        });
      });

      context('when screen has a desktop size', function () {
        (0, _mocha.it)('should display a desktop menu', function () {
          // given
          (0, _responsive.setBreakpointForIntegrationTest)(this, 'desktop');

          // when
          this.render(Ember.HTMLBars.template({
            "id": "8c1xZQ7e",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"navbar-header\",null,[[\"media\"],[[20,[\"media\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));

          // then
          (0, _chai.expect)(this.$('.navbar-desktop-menu')).to.have.lengthOf(1);
          (0, _chai.expect)(this.$('.navbar-mobile-menu')).to.have.lengthOf(0);
        });
      });
    });

    context('When user is logged', function () {

      (0, _mocha.beforeEach)(function () {
        this.register('service:session', Ember.Service.extend({
          isAuthenticated: true,
          data: {
            authenticated: {
              userId: 1435
            }
          }
        }));
        this.inject.service('session', { as: 'session' });

        this.render(Ember.HTMLBars.template({
          "id": "AV5n+32Z",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"navbar-header\"],false]],\"hasEval\":false}",
          "meta": {}
        }));
      });

      (0, _mocha.it)('should display logged user details informations', function () {
        // then
        (0, _chai.expect)(this.$('.logged-user-details')).to.have.lengthOf(1);
      });

      (0, _mocha.it)('should not display link to inscription page', function () {
        // then
        (0, _chai.expect)(this.$('.navbar-menu-signup-link')).to.have.lengthOf(0);
      });

      (0, _mocha.it)('should not display link to connection page', function () {
        // then
        (0, _chai.expect)(this.$('.navbar-menu-signin-link')).to.have.lengthOf(0);
      });

      (0, _mocha.it)('should be rendered', function () {
        (0, _chai.expect)(this.$()).to.have.lengthOf(1);
      });

      context('when screen has a smartphone or tablet size', function () {
        (0, _mocha.it)('should display a mobile menu', function () {
          // given
          (0, _responsive.setBreakpointForIntegrationTest)(this, 'mobile');

          // when
          this.render(Ember.HTMLBars.template({
            "id": "8c1xZQ7e",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"navbar-header\",null,[[\"media\"],[[20,[\"media\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));

          // then
          (0, _chai.expect)(this.$('.navbar-mobile-menu')).to.have.lengthOf(1);
        });
      });

      context('when screen has a desktop size', function () {
        (0, _mocha.it)('should display a desktop menu', function () {
          // given
          (0, _responsive.setBreakpointForIntegrationTest)(this, 'desktop');

          // when
          this.render(Ember.HTMLBars.template({
            "id": "8c1xZQ7e",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"navbar-header\",null,[[\"media\"],[[20,[\"media\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));

          // then
          (0, _chai.expect)(this.$('.navbar-desktop-menu')).to.have.lengthOf(1);
        });
      });
    });
  });
});
define('pix-live/tests/integration/components/navbar-mobile-menu-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | navbar mobile menu', function () {
    (0, _emberMocha.setupComponentTest)('navbar-mobile-menu', {
      integration: true
    });

    (0, _mocha.it)('should be rendered', function () {
      // when
      this.render(Ember.HTMLBars.template({
        "id": "3ynOjF+/",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"navbar-mobile-menu\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      // then
      (0, _chai.expect)(this.$()).to.have.length(1);
    });

    context('when close button is clicked', function () {

      (0, _mocha.it)('should close the side-menu', function () {
        // given
        this.render(Ember.HTMLBars.template({
          "id": "3ynOjF+/",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"navbar-mobile-menu\"],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // when
        this.$('.burger-close-button').click();

        // then
        (0, _chai.expect)(this.$('.side-menu').attr('style').indexOf('box-shadow: none')).to.be.at.least(0);
      });
    });

    context('when any menu item is clicked', function () {

      (0, _mocha.beforeEach)(function () {
        Ember.LinkComponent.reopen({
          href: Ember.computed.alias('qualifiedRouteName')
        });
        this.register('service:-routing', Ember.Service.extend({
          hasRoute: function hasRoute() {
            return '/compte';
          },

          transitionTo: function transitionTo() {
            return true;
          }
        }));
        this.inject.service('-routing', { as: '-routing' });
      });

      (0, _mocha.it)('should close the side-menu', function () {
        // given
        var menu = [{ name: 'Projet', link: 'project', class: '', permanent: true }, { name: 'Compétences', link: 'competences', class: '', permanent: true }];
        this.set('menu', menu);

        this.render(Ember.HTMLBars.template({
          "id": "YOYytkKr",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"navbar-mobile-menu\",null,[[\"menu\"],[[20,[\"menu\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // when
        this.$('.navbar-header-links__item').eq(1).click();

        // then
        (0, _chai.expect)(this.$('.side-menu').attr('style').indexOf('box-shadow: none')).to.be.at.least(0);
      });
    });
  });
});
define('pix-live/tests/integration/components/navbar-mobile-nav-menu-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | navbar mobile nav menu', function () {
    (0, _emberMocha.setupComponentTest)('navbar-mobile-menu', {
      integration: true
    });

    (0, _mocha.it)('should be rendered', function () {
      // when
      this.render(Ember.HTMLBars.template({
        "id": "3ynOjF+/",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"navbar-mobile-menu\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      // then
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('pix-live/tests/integration/components/partners-enrollment-panel-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | partners enrollment panel', function () {
    (0, _emberMocha.setupComponentTest)('partners-enrollment-panel', {
      integration: true
    });

    (0, _mocha.describe)('Component rendering', function () {

      (0, _mocha.it)('should render', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "rQ2sgNQ/",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"partners-enrollment-panel\"],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$()).to.have.lengthOf(1);
        (0, _chai.expect)(this.$('.partners-enrollment-panel')).to.have.lengthOf(1);
      });

      [{ itemClass: '.partners-enrollment__title', type: 'title' }, { itemClass: '.partners-enrollment__description', type: 'description' }, { itemClass: '.partners-enrollment__link-container', type: 'link container' }].forEach(function (_ref2) {
        var itemClass = _ref2.itemClass,
            type = _ref2.type;

        (0, _mocha.it)('should display a ' + type, function () {
          // given
          this.render(Ember.HTMLBars.template({
            "id": "rQ2sgNQ/",
            "block": "{\"symbols\":[],\"statements\":[[1,[18,\"partners-enrollment-panel\"],false]],\"hasEval\":false}",
            "meta": {}
          }));

          // then
          (0, _chai.expect)(this.$(itemClass)).to.have.lengthOf(1);
        });
      });

      (0, _mocha.it)('should contain a link to enrollment', function () {
        // given
        this.set('_enrollment', { title: 'toto' });
        this.render(Ember.HTMLBars.template({
          "id": "rQ2sgNQ/",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"partners-enrollment-panel\"],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('.partners-enrollment__link')).to.have.lengthOf(1);
        (0, _chai.expect)(this.$('.partners-enrollment__link').text().trim()).to.equal('En savoir plus');
      });
    });
  });
});
define('pix-live/tests/integration/components/password-reset-form-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | password reset form', function () {
    (0, _emberMocha.setupComponentTest)('password-reset-form', {
      integration: true
    });

    (0, _mocha.it)('renders', function () {
      this.render(Ember.HTMLBars.template({
        "id": "AsAWcmkf",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"password-reset-form\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });

    (0, _mocha.it)('renders all the necessary elements of the form ', function () {
      // when
      this.render(Ember.HTMLBars.template({
        "id": "AsAWcmkf",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"password-reset-form\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      // then
      (0, _chai.expect)(this.$('.password-reset__connexion-link')).to.have.length(1);
      (0, _chai.expect)(this.$('.password-reset-form__pix-logo')).to.have.length(1);
      (0, _chai.expect)(this.$('.password-reset-form__title')).to.have.length(1);
      (0, _chai.expect)(this.$('.password-reset-form__text')).to.have.length(1);
      (0, _chai.expect)(this.$('.password-reset-form__form')).to.have.length(1);
      (0, _chai.expect)(this.$('.password-reset-form__form-label')).to.have.length(1);
      (0, _chai.expect)(this.$('.password-reset-form__form-input')).to.have.length(1);
      (0, _chai.expect)(this.$('.password-reset-form__button')).to.have.length(1);
    });

    (0, _mocha.it)('should display error message when there is an error on password reset demand', function () {
      // given
      this.set('_displayErrorMessage', true);

      // when
      this.render(Ember.HTMLBars.template({
        "id": "n/Zp3O/7",
        "block": "{\"symbols\":[],\"statements\":[[1,[25,\"password-reset-form\",null,[[\"_displayErrorMessage\"],[[20,[\"_displayErrorMessage\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));

      // then
      (0, _chai.expect)(this.$('.password-reset-form__form-error-message')).to.have.length(1);
    });

    (0, _mocha.it)('should display success message when there is an error on password reset demand', function () {
      // given
      this.set('_displaySuccessMessage', true);

      // when
      this.render(Ember.HTMLBars.template({
        "id": "c0myJN1a",
        "block": "{\"symbols\":[],\"statements\":[[1,[25,\"password-reset-form\",null,[[\"_displaySuccessMessage\"],[[20,[\"_displaySuccessMessage\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));

      // then
      (0, _chai.expect)(this.$('.password-reset-form__form-success-message')).to.have.length(1);
    });
  });
});
define('pix-live/tests/integration/components/pix-content-backdrop-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | pix content backdrop', function () {
    (0, _emberMocha.setupComponentTest)('pix-content-backdrop', {
      integration: true
    });

    (0, _mocha.beforeEach)(function () {
      this.register('service:side-menu', Ember.Service.extend({
        close: function close() {}
      }));
      this.inject.service('side-menu', { as: 'sideMenu' });
    });

    (0, _mocha.it)('should be rendered', function () {
      // when
      this.render(Ember.HTMLBars.template({
        "id": "LSowFm0k",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"pix-content-backdrop\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      // then
      (0, _chai.expect)(this.$()).to.have.length(1);
    });

    (0, _mocha.describe)('@touchStart', function () {
      (0, _mocha.it)('should close the side-menu', function () {
        // given
        this.set('sideMenu.progress', 10);
        this.render(Ember.HTMLBars.template({
          "id": "BLm3nrrA",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"content-backdrop\"],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // when
        Ember.run(function () {
          return document.querySelector('.content-backdrop').click();
        });

        // then
        (0, _chai.expect)(this.$('.content-backdrop').attr('style').indexOf('visibility: hidden') > -1);
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
        "id": "b2v7xgk5",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"pix-logo\"],false]],\"hasEval\":false}",
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
          "id": "5+6XzRcc",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"profile-panel\"],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$()).to.have.lengthOf(1);
      });

      (0, _mocha.it)('should render a wrapper', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "5+6XzRcc",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"profile-panel\"],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        var WRAPPER_CLASS = '.profile-panel';
        (0, _chai.expect)(this.$(WRAPPER_CLASS)).to.have.lengthOf(1);
      });

      (0, _mocha.it)('should render a profile header', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "5+6XzRcc",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"profile-panel\"],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // Then
        var HEADER_CLASS = '.profile-panel__header';
        var HEADER_TITLE = '.profile-header__title';
        (0, _chai.expect)(this.$(HEADER_CLASS)).to.have.lengthOf(1);
        (0, _chai.expect)(this.$(HEADER_TITLE).text().trim()).to.be.equal('Votre profil');
      });

      (0, _mocha.it)('should render a competence profile block', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "5+6XzRcc",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"profile-panel\"],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // Then
        var COMPETENCY_BLOCK = '.profile-panel__competence-areas';
        (0, _chai.expect)(this.$(COMPETENCY_BLOCK)).to.have.lengthOf(1);
      });

      (0, _mocha.describe)('behavior according to totalPixScore value', function () {
        (0, _mocha.it)('should display two dashes instead of zero in total pix score, when user has’nt yet assessed on placement test', function () {
          // given
          var totalPixScore = '';

          this.set('totalPixScore', totalPixScore);
          // when
          this.render(Ember.HTMLBars.template({
            "id": "B6tANSOq",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"profile-panel\",null,[[\"totalPixScore\"],[[20,[\"totalPixScore\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));

          // then
          (0, _chai.expect)(this.$('.profile-header__score-pastille-wrapper')).to.have.lengthOf(1);
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
        "id": "TjwrvDRZ",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"qcm-proposals\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.lengthOf(1);
    });
  });
});
define('pix-live/tests/integration/components/qcm-solution-panel-test', ['chai', 'mocha', 'ember-mocha', 'pix-live/utils/lodash-custom'], function (_chai, _mocha, _emberMocha, _lodashCustom) {
  'use strict';

  var CHECKBOX_CORRECT_AND_CHECKED = 'input[type=checkbox]:eq(1)';
  var LABEL_CORRECT_AND_CHECKED = '.qcm-proposal-label__oracle:eq(1)';

  var CHECKBOX_CORRECT_AND_UNCHECKED = '.qcm-proposal-label__checkbox-picture:eq(2)';
  var LABEL_CORRECT_AND_UNCHECKED = '.qcm-proposal-label__oracle:eq(2)';

  var LABEL_INCORRECT_AND_CHECKED = '.qcm-proposal-label__oracle:eq(0)';
  var LABEL_INCORRECT_AND_UNCHECKED = '.qcm-proposal-label__oracle:eq(0)';

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
        this.render(Ember.HTMLBars.template({
          "id": "/1+HUo2o",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"qcm-solution-panel\"],false]],\"hasEval\":false}",
          "meta": {}
        }));
        (0, _chai.expect)(this.$()).to.have.lengthOf(1);
        (0, _chai.expect)(Ember.$(LABEL_CORRECT_AND_CHECKED)).to.have.lengthOf(0);
      });

      (0, _mocha.describe)('checkbox state', function () {
        var correctAnswer = {
          id: 'answer_id', assessment: assessment, challenge: challenge, value: '2,4'
        };

        var unCorrectAnswer = {
          id: 'answer_id', assessment: assessment, challenge: challenge, value: '1,4'
        };

        (0, _mocha.before)(function () {
          challenge = Ember.Object.create({
            id: 'challenge_id',
            proposals: '-foo\n- bar\n- qix\n- yon',
            type: 'QCM'
          });

          solution = Ember.Object.create({
            id: 'solution_id', value: '2,3'
          });

          answer = Ember.Object.create(correctAnswer);
        });

        (0, _mocha.it)('QCM, la réponse correcte est cochée', function () {
          // Given
          this.set('answer', answer);
          this.set('solution', solution);
          this.set('challenge', challenge);

          // When
          this.render(Ember.HTMLBars.template({
            "id": "EI/CIXHK",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"qcm-solution-panel\",null,[[\"challenge\",\"answer\",\"solution\"],[[20,[\"challenge\"]],[20,[\"answer\"]],[20,[\"solution\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));

          // Then
          (0, _chai.expect)(Ember.$(LABEL_CORRECT_AND_CHECKED)).to.have.lengthOf(1);
          (0, _chai.expect)(Ember.$(CHECKBOX_CORRECT_AND_CHECKED)).to.have.lengthOf(1);

          (0, _chai.expect)(Ember.$(CHECKBOX_CORRECT_AND_CHECKED).attr('disabled')).to.equal('disabled');
          (0, _chai.expect)(charCount(Ember.$(LABEL_CORRECT_AND_CHECKED).text())).to.be.above(0);
          (0, _chai.expect)(Ember.$(LABEL_CORRECT_AND_CHECKED).css('text-decoration')).to.contain(CSS_LINETHROUGH_OFF);
        });

        (0, _mocha.it)('QCM, aucune réponse incorrecte n\'est cochée', function () {
          //Given
          this.set('answer', answer);
          this.set('solution', solution);
          this.set('challenge', challenge);

          // When
          this.render(Ember.HTMLBars.template({
            "id": "EI/CIXHK",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"qcm-solution-panel\",null,[[\"challenge\",\"answer\",\"solution\"],[[20,[\"challenge\"]],[20,[\"answer\"]],[20,[\"solution\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));

          // Then
          (0, _chai.expect)(charCount(Ember.$(LABEL_INCORRECT_AND_UNCHECKED).text())).to.be.above(0);
          (0, _chai.expect)(Ember.$(LABEL_INCORRECT_AND_UNCHECKED).css('text-decoration')).to.contain(CSS_LINETHROUGH_OFF);
        });

        (0, _mocha.it)('QCM, Au moins l\'une des réponse correcte n\'est pas cochée', function () {
          //Given
          answer = Ember.Object.create(unCorrectAnswer);

          this.set('answer', answer);
          this.set('solution', solution);
          this.set('challenge', challenge);

          // When
          this.render(Ember.HTMLBars.template({
            "id": "EI/CIXHK",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"qcm-solution-panel\",null,[[\"challenge\",\"answer\",\"solution\"],[[20,[\"challenge\"]],[20,[\"answer\"]],[20,[\"solution\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));

          // Then
          (0, _chai.expect)(charCount(Ember.$(LABEL_CORRECT_AND_UNCHECKED).text())).to.be.above(0);
          (0, _chai.expect)(Ember.$(LABEL_CORRECT_AND_UNCHECKED).css('text-decoration')).to.contain(CSS_LINETHROUGH_OFF);
        });

        (0, _mocha.it)('QCM, au moins l\'une des réponse incorrecte est cochée', function () {
          //Given
          answer = Ember.Object.create(unCorrectAnswer);

          this.set('answer', answer);
          this.set('solution', solution);
          this.set('challenge', challenge);

          // When
          this.render(Ember.HTMLBars.template({
            "id": "EI/CIXHK",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"qcm-solution-panel\",null,[[\"challenge\",\"answer\",\"solution\"],[[20,[\"challenge\"]],[20,[\"answer\"]],[20,[\"solution\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));

          // Then
          (0, _chai.expect)(Ember.$(CHECKBOX_CORRECT_AND_UNCHECKED).is(':checked')).to.equal(false);
          (0, _chai.expect)(charCount(Ember.$(LABEL_INCORRECT_AND_CHECKED).text())).to.be.above(0);
          (0, _chai.expect)(Ember.$(LABEL_INCORRECT_AND_CHECKED).css('text-decoration')).to.contain(CSS_LINETHROUGH_ON);
        });

        (0, _mocha.it)('Aucune case à cocher n\'est cliquable', function () {
          //Given
          this.set('answer', answer);
          this.set('solution', solution);
          this.set('challenge', challenge);

          // When
          this.render(Ember.HTMLBars.template({
            "id": "EI/CIXHK",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"qcm-solution-panel\",null,[[\"challenge\",\"answer\",\"solution\"],[[20,[\"challenge\"]],[20,[\"answer\"]],[20,[\"solution\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));

          // Then
          var size = Ember.$('.comparison-window .qcm-proposal-label__checkbox-picture').length;
          _lodashCustom.default.times(size, function (index) {
            (0, _chai.expect)(Ember.$('.comparison-window .qcm-proposal-label__checkbox-picture:eq(' + index + ')').is(':disabled')).to.equal(true);
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
          "id": "2wMU8yls",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"qcu-proposals\",null,[[\"answers\",\"proposals\",\"answerChanged\"],[[20,[\"answers\"]],[20,[\"proposals\"]],\"answerChanged\"]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('.proposal-text')).to.have.lengthOf(3);
      });
    });
  });
});
define('pix-live/tests/integration/components/qcu-solution-panel-test', ['chai', 'mocha', 'ember-mocha', 'pix-live/utils/lodash-custom'], function (_chai, _mocha, _emberMocha, _lodashCustom) {
  'use strict';

  var RADIO_CORRECT_AND_CHECKED = '.picture-radio-proposal--qcu:eq(1)';
  var LABEL_CORRECT_AND_CHECKED = '.qcu-proposal-label__oracle:eq(1)';

  var LABEL_CORRECT_AND_UNCHECKED = '.qcu-proposal-label__oracle:eq(1)';

  var RADIO_INCORRECT_AND_CHECKED = '.picture-radio-proposal--qcu:eq(2)';
  var LABEL_INCORRECT_AND_CHECKED = '.qcu-proposal-label__oracle:eq(2)';

  var RADIO_INCORRECT_AND_UNCHECKED = '.picture-radio-proposal--qcu:eq(0)';
  var LABEL_INCORRECT_AND_UNCHECKED = '.qcu-proposal-label__oracle:eq(0)';

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
        this.render(Ember.HTMLBars.template({
          "id": "B8Fg07WY",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"qcu-solution-panel\"],false]],\"hasEval\":false}",
          "meta": {}
        }));
        (0, _chai.expect)(this.$()).to.have.lengthOf(1);
        (0, _chai.expect)(Ember.$(LABEL_CORRECT_AND_CHECKED)).to.have.lengthOf(0);
      });

      (0, _mocha.describe)('Radio state', function () {

        before(function () {
          challenge = Ember.Object.create({
            id: 'challenge_id',
            proposals: '-foo\n- bar\n- qix\n- yon',
            type: 'QCM'
          });

          solution = Ember.Object.create({
            id: 'solution_id', value: '2'
          });

          answer = Ember.Object.create(correctAnswer);
        });

        (0, _mocha.it)('QCU,la réponse correcte est cochée', function () {
          //Given
          this.set('answer', answer);
          this.set('solution', solution);
          this.set('challenge', challenge);
          // When
          this.render(Ember.HTMLBars.template({
            "id": "+OJcUAys",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"qcu-solution-panel\",null,[[\"challenge\",\"answer\",\"solution\"],[[20,[\"challenge\"]],[20,[\"answer\"]],[20,[\"solution\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));

          // Then
          (0, _chai.expect)(Ember.$(LABEL_CORRECT_AND_CHECKED)).to.have.lengthOf(1);
          (0, _chai.expect)(Ember.$(RADIO_CORRECT_AND_CHECKED)).to.have.lengthOf(1);

          (0, _chai.expect)(Ember.$(RADIO_CORRECT_AND_CHECKED).hasClass('radio-on')).to.equal(true);
          (0, _chai.expect)(charCount(Ember.$(LABEL_CORRECT_AND_CHECKED).text())).to.be.above(0);
          (0, _chai.expect)(Ember.$(LABEL_CORRECT_AND_CHECKED).css('text-decoration')).to.contain(CSS_LINETHROUGH_OFF);
        });

        (0, _mocha.it)('QCU, la réponse correcte n\'est pas cochée', function () {
          //Given
          answer = Ember.Object.create(unCorrectAnswer);

          this.set('answer', answer);
          this.set('solution', solution);
          this.set('challenge', challenge);

          // When
          this.render(Ember.HTMLBars.template({
            "id": "+OJcUAys",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"qcu-solution-panel\",null,[[\"challenge\",\"answer\",\"solution\"],[[20,[\"challenge\"]],[20,[\"answer\"]],[20,[\"solution\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));

          // Then
          (0, _chai.expect)(Ember.$(RADIO_CORRECT_AND_CHECKED).hasClass('radio-off')).to.equal(true);

          (0, _chai.expect)(charCount(Ember.$(LABEL_CORRECT_AND_UNCHECKED).text())).to.be.above(0);
          (0, _chai.expect)(Ember.$(LABEL_CORRECT_AND_UNCHECKED).css('text-decoration')).to.contain(CSS_LINETHROUGH_OFF);
        });

        (0, _mocha.it)('QCU, la réponse incorrecte n\'est pas cochée', function () {
          //Given
          this.set('answer', answer);
          this.set('solution', solution);
          this.set('challenge', challenge);

          // When
          this.render(Ember.HTMLBars.template({
            "id": "+OJcUAys",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"qcu-solution-panel\",null,[[\"challenge\",\"answer\",\"solution\"],[[20,[\"challenge\"]],[20,[\"answer\"]],[20,[\"solution\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));

          // Then
          (0, _chai.expect)(Ember.$(RADIO_INCORRECT_AND_UNCHECKED).hasClass('radio-off')).to.equal(true);
          (0, _chai.expect)(charCount(Ember.$(LABEL_INCORRECT_AND_UNCHECKED).text())).to.be.above(0);
          (0, _chai.expect)(Ember.$(LABEL_INCORRECT_AND_UNCHECKED).css('text-decoration')).to.contain(CSS_LINETHROUGH_OFF);
        });

        (0, _mocha.it)('QCU,la réponse incorrecte est cochée', function () {
          //Given
          answer = Ember.Object.create(unCorrectAnswer);

          this.set('answer', answer);
          this.set('solution', solution);
          this.set('challenge', challenge);

          // When
          this.render(Ember.HTMLBars.template({
            "id": "+OJcUAys",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"qcu-solution-panel\",null,[[\"challenge\",\"answer\",\"solution\"],[[20,[\"challenge\"]],[20,[\"answer\"]],[20,[\"solution\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));

          // Then
          (0, _chai.expect)(Ember.$(RADIO_INCORRECT_AND_CHECKED).hasClass('radio-on')).to.equal(true);
          (0, _chai.expect)(charCount(Ember.$(LABEL_INCORRECT_AND_CHECKED).text())).to.be.above(0);
          (0, _chai.expect)(Ember.$(LABEL_INCORRECT_AND_CHECKED).css('text-decoration')).to.contain(CSS_LINETHROUGH_ON);
        });

        (0, _mocha.it)('Aucune case à cocher n\'est cliquable', function () {
          //Given
          this.set('answer', answer);
          this.set('solution', solution);
          this.set('challenge', challenge);

          // When
          this.render(Ember.HTMLBars.template({
            "id": "+OJcUAys",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"qcu-solution-panel\",null,[[\"challenge\",\"answer\",\"solution\"],[[20,[\"challenge\"]],[20,[\"answer\"]],[20,[\"solution\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));

          // Then
          var size = Ember.$('.comparison-window .qcu-panel__proposal-radio').length;
          _lodashCustom.default.times(size, function (index) {
            (0, _chai.expect)(Ember.$('.comparison-window .qcu-panel__proposal-radio:eq(' + index + ')').is(':disabled')).to.equal(true);
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
        "id": "BWv3gn47",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"qroc-proposal\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.lengthOf(1);
    });

    (0, _mocha.describe)('Component behavior when user fill input of challenge:', function () {

      (0, _mocha.it)('should display a value when a non-empty value is providing by user', function () {
        // given
        var proposals = '${myInput}';
        this.set('proposals', proposals);
        this.set('answerValue', 'myValue');
        // when
        this.render(Ember.HTMLBars.template({
          "id": "WIpsT+mT",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"qroc-proposal\",null,[[\"proposals\",\"answerValue\"],[[20,[\"proposals\"]],[20,[\"answerValue\"]]]]],false]],\"hasEval\":false}",
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
            "id": "WIpsT+mT",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"qroc-proposal\",null,[[\"proposals\",\"answerValue\"],[[20,[\"proposals\"]],[20,[\"answerValue\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));
          // then
          (0, _chai.expect)(this.$('.challenge-response__proposal-input').val()).to.be.equal(output);
        });
      });
    });
  });
});
define('pix-live/tests/integration/components/qroc-solution-panel-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  var ANSWER_BLOCK = '.correction-qroc-box__answer';
  var ANSWER_INPUT = '.correction-qroc-box--answer__input';
  var SOLUTION_BLOCK = '.correction-qroc-box__solution';

  (0, _mocha.describe)('Integration | Component | qroc solution panel', function () {

    (0, _emberMocha.setupComponentTest)('qroc-solution-panel', {
      integration: true
    });

    (0, _mocha.it)('renders', function () {
      this.render(Ember.HTMLBars.template({
        "id": "gD2Zw7AP",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"qroc-solution-panel\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.lengthOf(1);
    });

    (0, _mocha.it)('should disabled all inputs', function () {
      // given
      this.render(Ember.HTMLBars.template({
        "id": "gD2Zw7AP",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"qroc-solution-panel\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      var input = this.$('input');
      // then
      (0, _chai.expect)(input).to.be.disabled;
    });

    (0, _mocha.describe)('comparison when the answer is right', function () {

      var assessment = Ember.Object.create({ id: 'assessment_id' });
      var challenge = Ember.Object.create({ id: 'challenge_id' });
      var answer = Ember.Object.create({ id: 'answer_id', result: 'ok', assessment: assessment, challenge: challenge });

      (0, _mocha.it)('should diplay the answer in bold green and not the solution', function () {
        // given
        this.set('answer', answer);
        this.render(Ember.HTMLBars.template({
          "id": "rVyYCapZ",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"qroc-solution-panel\",null,[[\"answer\"],[[20,[\"answer\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));
        // when
        var answerInput = this.$(ANSWER_INPUT);
        var answerBlock = this.$(ANSWER_BLOCK);
        var solutionBlock = this.$(SOLUTION_BLOCK);
        // then
        (0, _chai.expect)(answerInput).to.have.lengthOf(1);
        (0, _chai.expect)(answerBlock).to.have.lengthOf(1);
        (0, _chai.expect)(answerInput.css('text-decoration')).to.be.contains('none');
        (0, _chai.expect)(solutionBlock).to.have.lengthOf(0);
      });
    });

    (0, _mocha.describe)('comparison when the answer is false', function () {

      (0, _mocha.beforeEach)(function () {
        var assessment = Ember.Object.create({ id: 'assessment_id' });
        var challenge = Ember.Object.create({ id: 'challenge_id' });
        var answer = Ember.Object.create({ id: 'answer_id', result: 'ko', assessment: assessment, challenge: challenge });

        this.set('answer', answer);
        this.render(Ember.HTMLBars.template({
          "id": "rVyYCapZ",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"qroc-solution-panel\",null,[[\"answer\"],[[20,[\"answer\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));
      });

      (0, _mocha.it)('should display the false answer line-through', function () {
        // given
        var answerBlock = this.$(ANSWER_BLOCK);
        var answerInput = this.$(ANSWER_INPUT);
        // then
        (0, _chai.expect)(answerBlock).to.have.lengthOf(1);
        (0, _chai.expect)(answerInput.css('text-decoration')).to.be.contains('line-through');
      });

      (0, _mocha.it)('should display the solution with an arrow and the solution in bold green', function () {
        // given
        var blockSolution = this.$(SOLUTION_BLOCK);

        // then
        (0, _chai.expect)(blockSolution).to.have.lengthOf(1);
        (0, _chai.expect)(blockSolution.css('align-items')).to.be.equal('stretch');
      });

      (0, _mocha.describe)('comparison when the answer was not given', function () {

        (0, _mocha.beforeEach)(function () {
          var assessment = Ember.Object.create({ id: 'assessment_id' });
          var challenge = Ember.Object.create({ id: 'challenge_id' });
          var answer = Ember.Object.create({ id: 'answer_id', result: 'aband', assessment: assessment, challenge: challenge });

          this.set('answer', answer);
          this.set('isResultWithoutAnswer', true);
          this.render(Ember.HTMLBars.template({
            "id": "rVyYCapZ",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"qroc-solution-panel\",null,[[\"answer\"],[[20,[\"answer\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));
        });

        (0, _mocha.it)('should display PAS DE REPONSE in italic', function () {
          // given
          var answerBlock = this.$(ANSWER_BLOCK);
          // then
          (0, _chai.expect)(answerBlock).to.have.lengthOf(1);
        });
      });
    });
  });
});
define('pix-live/tests/integration/components/qrocm-ind-solution-panel-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  var FIRST_CORRECTION_BLOCK = '.correction-qrocm:nth-child(1)';
  var SECOND_CORRECTION_BLOCK = '.correction-qrocm:nth-child(2)';
  var THIRD_CORRECTION_BLOCK = '.correction-qrocm:nth-child(3)';
  var SOLUTION_BLOCK = '.correction-qrocm__solution';
  var LABEL = '.correction-qrocm__label';
  var INPUT = '.correction-qrocm__answer-input';
  var SOLUTION_TEXT = '.correction-qrocm__solution-text';

  (0, _mocha.describe)('Integration | Component | qrocm solution panel', function () {

    (0, _emberMocha.setupComponentTest)('qrocm-ind-solution-panel', {
      integration: true
    });

    var assessment = Ember.Object.create({ id: 'assessment_id' });
    var challenge = Ember.Object.create({
      id: 'challenge_id',
      proposals: 'answer1 : ${key1}\nCarte mémoire (SD) : ${key2}\nblabla : ${key3}'
    });
    var answer = Ember.Object.create({
      id: 'answer_id',
      value: 'key1: \'rightAnswer1\' key2: \'wrongAnswer2\' key3: \'\'',
      resultDetails: 'key1: true\nkey2: false\nkey3: false',
      assessment: assessment,
      challenge: challenge
    });
    var solution = Ember.Object.create({ value: 'key1:\n- rightAnswer1\nkey2:\n- rightAnswer20\n- rightAnswer21\nkey3 :\n- rightAnswer3' });

    (0, _mocha.beforeEach)(function () {
      this.set('answer', answer);
      this.set('solution', solution);
      this.set('challenge', challenge);
    });

    (0, _mocha.it)('renders', function () {
      this.render(Ember.HTMLBars.template({
        "id": "vJDetYEF",
        "block": "{\"symbols\":[],\"statements\":[[1,[25,\"qrocm-ind-solution-panel\",null,[[\"answer\",\"solution\",\"challenge\"],[[20,[\"answer\"]],[20,[\"solution\"]],[20,[\"challenge\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.lengthOf(1);
    });

    (0, _mocha.it)('should disabled all inputs', function () {
      // given
      this.render(Ember.HTMLBars.template({
        "id": "vJDetYEF",
        "block": "{\"symbols\":[],\"statements\":[[1,[25,\"qrocm-ind-solution-panel\",null,[[\"answer\",\"solution\",\"challenge\"],[[20,[\"answer\"]],[20,[\"solution\"]],[20,[\"challenge\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      var input = this.$('input');
      // then
      (0, _chai.expect)(input).to.be.disabled;
    });

    (0, _mocha.it)('should contains three labels', function () {
      // given
      this.render(Ember.HTMLBars.template({
        "id": "vJDetYEF",
        "block": "{\"symbols\":[],\"statements\":[[1,[25,\"qrocm-ind-solution-panel\",null,[[\"answer\",\"solution\",\"challenge\"],[[20,[\"answer\"]],[20,[\"solution\"]],[20,[\"challenge\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      var labels = this.$(LABEL);
      // then
      (0, _chai.expect)(labels).to.have.lengthOf(3);
    });

    (0, _mocha.describe)('comparison of a qrocm-ind with a right answer, a wrong answer and one empty answer', function () {

      (0, _mocha.describe)('right answer display', function () {

        (0, _mocha.it)('should display the right answer in green bold', function () {
          // given
          this.render(Ember.HTMLBars.template({
            "id": "a4XTaIUS",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"qrocm-ind-solution-panel\",null,[[\"challenge\",\"answer\",\"solution\"],[[20,[\"challenge\"]],[20,[\"answer\"]],[20,[\"solution\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));
          var answerBlock = this.$(FIRST_CORRECTION_BLOCK);
          var answerLabel = this.$(FIRST_CORRECTION_BLOCK + ' ' + LABEL);
          var answerInput = this.$(FIRST_CORRECTION_BLOCK + ' ' + INPUT);

          // then
          (0, _chai.expect)(answerBlock).to.have.lengthOf(1);
          (0, _chai.expect)(answerLabel).to.have.lengthOf(1);
          (0, _chai.expect)(answerInput).to.have.lengthOf(1);

          (0, _chai.expect)(answerInput.css('text-decoration')).to.contain('none');
        });

        (0, _mocha.it)('should not display the solution', function () {
          // given
          this.render(Ember.HTMLBars.template({
            "id": "a4XTaIUS",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"qrocm-ind-solution-panel\",null,[[\"challenge\",\"answer\",\"solution\"],[[20,[\"challenge\"]],[20,[\"answer\"]],[20,[\"solution\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));
          var solutionBlock = this.$(FIRST_CORRECTION_BLOCK + ' ' + SOLUTION_BLOCK);

          // then
          (0, _chai.expect)(solutionBlock).to.have.lengthOf(0);
        });
      });

      (0, _mocha.describe)('wrong answer display', function () {

        (0, _mocha.it)('should display the wrong answer in the second div line-throughed bold', function () {
          // given
          this.render(Ember.HTMLBars.template({
            "id": "a4XTaIUS",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"qrocm-ind-solution-panel\",null,[[\"challenge\",\"answer\",\"solution\"],[[20,[\"challenge\"]],[20,[\"answer\"]],[20,[\"solution\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));
          var answerBlock = this.$(SECOND_CORRECTION_BLOCK);
          var answerLabel = this.$(SECOND_CORRECTION_BLOCK + ' ' + LABEL);
          var answerInput = this.$(SECOND_CORRECTION_BLOCK + ' ' + INPUT);

          // then
          (0, _chai.expect)(answerBlock).to.have.lengthOf(1);
          (0, _chai.expect)(answerLabel).to.have.lengthOf(1);
          (0, _chai.expect)(answerInput).to.have.lengthOf(1);

          (0, _chai.expect)(answerInput.css('text-decoration')).to.contain('line-through');
        });

        (0, _mocha.it)('should display one solution in bold green below the input', function () {
          // given
          this.render(Ember.HTMLBars.template({
            "id": "a4XTaIUS",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"qrocm-ind-solution-panel\",null,[[\"challenge\",\"answer\",\"solution\"],[[20,[\"challenge\"]],[20,[\"answer\"]],[20,[\"solution\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));
          var solutionBlock = this.$(SECOND_CORRECTION_BLOCK + ' ' + SOLUTION_BLOCK);
          var solutionText = this.$(SECOND_CORRECTION_BLOCK + ' ' + SOLUTION_BLOCK + ' ' + SOLUTION_TEXT);

          // then
          (0, _chai.expect)(solutionBlock).to.have.lengthOf(1);
          (0, _chai.expect)(solutionText).to.have.lengthOf(1);

          (0, _chai.expect)(solutionText.css('text-decoration')).to.contain('none');
        });
      });

      (0, _mocha.describe)('no answer display', function () {

        (0, _mocha.it)('should display the empty answer in the third div with "pas de réponse" in italic', function () {
          // given
          this.render(Ember.HTMLBars.template({
            "id": "a4XTaIUS",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"qrocm-ind-solution-panel\",null,[[\"challenge\",\"answer\",\"solution\"],[[20,[\"challenge\"]],[20,[\"answer\"]],[20,[\"solution\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));
          var answerBlock = this.$(THIRD_CORRECTION_BLOCK);
          var answerLabel = this.$(THIRD_CORRECTION_BLOCK + ' ' + LABEL);
          var answerInput = this.$(THIRD_CORRECTION_BLOCK + ' ' + INPUT);

          // then
          (0, _chai.expect)(answerBlock).to.have.lengthOf(1);
          (0, _chai.expect)(answerLabel).to.have.lengthOf(1);
          (0, _chai.expect)(answerInput).to.have.lengthOf(1);

          (0, _chai.expect)(answerInput.css('text-decoration')).to.contain('none');
        });

        (0, _mocha.it)('should display one solution in bold green below the input', function () {
          // given
          this.render(Ember.HTMLBars.template({
            "id": "a4XTaIUS",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"qrocm-ind-solution-panel\",null,[[\"challenge\",\"answer\",\"solution\"],[[20,[\"challenge\"]],[20,[\"answer\"]],[20,[\"solution\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));
          var solutionBlock = this.$(THIRD_CORRECTION_BLOCK + ' ' + SOLUTION_BLOCK);
          var solutionText = this.$(THIRD_CORRECTION_BLOCK + ' ' + SOLUTION_BLOCK + ' ' + SOLUTION_TEXT);

          // then
          (0, _chai.expect)(solutionBlock).to.have.lengthOf(1);
          (0, _chai.expect)(solutionText).to.have.lengthOf(1);

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
        "id": "wOWe8uzB",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"qrocm-proposal\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      (0, _chai.expect)(this.$()).to.have.lengthOf(1);
    });
  });
});
define('pix-live/tests/integration/components/reset-password-form-test', ['chai', 'mocha', 'ember-mocha', 'ember-test-helpers/wait'], function (_chai, _mocha, _emberMocha, _wait) {
  'use strict';

  var PASSWORD_INPUT_CLASS = '.form-textfield__input';

  (0, _mocha.describe)('Integration | Component | reset password form', function () {
    (0, _emberMocha.setupComponentTest)('reset-password-form', {
      integration: true
    });

    (0, _mocha.describe)('Component rendering', function () {

      (0, _mocha.it)('should be rendered', function () {
        this.render(Ember.HTMLBars.template({
          "id": "A4Ro+tal",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"reset-password-form\"],false]],\"hasEval\":false}",
          "meta": {}
        }));
        (0, _chai.expect)(this.$()).to.have.length(1);
      });

      (0, _mocha.describe)('When component is rendered,', function () {

        [{ item: '.reset-password-form' }, { item: '.reset-password-form__heading' }, { item: '.reset-password-form__user-details' }, { item: '.reset-password-form__instruction' }, { item: '.reset-password-form__password-textfield-container' }, { item: '.form-textfield__label' }, { item: '.reset-password__textfield' }, { item: '.form-textfield__input-field-container ' }].forEach(function (_ref2) {
          var item = _ref2.item;

          (0, _mocha.it)('should contains  a item with class: ' + item, function () {
            // when
            this.render(Ember.HTMLBars.template({
              "id": "A4Ro+tal",
              "block": "{\"symbols\":[],\"statements\":[[1,[18,\"reset-password-form\"],false]],\"hasEval\":false}",
              "meta": {}
            }));

            // then
            (0, _chai.expect)(this.$(item)).to.have.lengthOf(1);
          });
        });

        (0, _mocha.it)('should display user’s fullName', function () {
          // given
          var user = { fullName: 'toto riri' };
          this.set('user', user);

          // when
          this.render(Ember.HTMLBars.template({
            "id": "JkAk7cEc",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"reset-password-form\",null,[[\"user\"],[[20,[\"user\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));

          // then
          (0, _chai.expect)(this.$('.reset-password-form__user-details').text().trim()).to.equal(user.fullName);
        });
      });

      (0, _mocha.describe)('A submit button', function () {

        (0, _mocha.it)('should be rendered', function () {
          // when
          this.render(Ember.HTMLBars.template({
            "id": "A4Ro+tal",
            "block": "{\"symbols\":[],\"statements\":[[1,[18,\"reset-password-form\"],false]],\"hasEval\":false}",
            "meta": {}
          }));

          // then
          (0, _chai.expect)(this.$('.reset-password-form__submit-button')).to.have.lengthOf(1);
        });

        (0, _mocha.describe)('Saving behavior', function () {

          var isSaveMethodCalled = void 0;

          var save = function save() {
            isSaveMethodCalled = true;
            return Ember.RSVP.resolve();
          };

          var saveWithRejection = function saveWithRejection() {
            isSaveMethodCalled = true;
            return Ember.RSVP.reject();
          };

          (0, _mocha.beforeEach)(function () {
            isSaveMethodCalled = false;
          });

          (0, _mocha.it)('should save the new password, when button is clicked', function () {
            var _this = this;

            // given
            var user = Ember.Object.create({ firstName: 'toto', lastName: 'riri', save: save });
            this.set('user', user);
            var validPassword = 'Pix 1 2 3!';

            this.render(Ember.HTMLBars.template({
              "id": "JkAk7cEc",
              "block": "{\"symbols\":[],\"statements\":[[1,[25,\"reset-password-form\",null,[[\"user\"],[[20,[\"user\"]]]]],false]],\"hasEval\":false}",
              "meta": {}
            }));

            // when
            this.$(PASSWORD_INPUT_CLASS).val(validPassword);
            this.$(PASSWORD_INPUT_CLASS).change();

            this.$('.reset-password-form__submit-button').click();

            // then
            return (0, _wait.default)().then(function () {
              (0, _chai.expect)(isSaveMethodCalled).to.be.true;
              (0, _chai.expect)(_this.get('user.password')).to.eql(null);
              (0, _chai.expect)(_this.$(PASSWORD_INPUT_CLASS).val()).to.equal('');
              (0, _chai.expect)(_this.$('.form-textfield__message--success')).to.have.lengthOf(1);
            });
          });

          (0, _mocha.it)('should get an error, when button is clicked and saving return error', function () {
            var _this2 = this;

            // given
            var user = Ember.Object.create({ firstName: 'toto', lastName: 'riri', save: saveWithRejection });
            this.set('user', user);
            var validPassword = 'Pix 1 2 3!';

            this.render(Ember.HTMLBars.template({
              "id": "JkAk7cEc",
              "block": "{\"symbols\":[],\"statements\":[[1,[25,\"reset-password-form\",null,[[\"user\"],[[20,[\"user\"]]]]],false]],\"hasEval\":false}",
              "meta": {}
            }));

            // when
            this.$(PASSWORD_INPUT_CLASS).val(validPassword);
            this.$(PASSWORD_INPUT_CLASS).change();

            this.$('.reset-password-form__submit-button').click();

            // then
            return (0, _wait.default)().then(function () {
              (0, _chai.expect)(isSaveMethodCalled).to.be.true;
              (0, _chai.expect)(_this2.get('user.password')).to.eql(validPassword);
              (0, _chai.expect)(_this2.$(PASSWORD_INPUT_CLASS).val()).to.equal(validPassword);
              (0, _chai.expect)(_this2.$('.form-textfield__message--error')).to.have.lengthOf(1);
            });
          });
        });
      });
    });
  });
});
define('pix-live/tests/integration/components/result-item-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | result item', function () {

    (0, _emberMocha.setupComponentTest)('result-item', {
      integration: true
    });

    (0, _mocha.describe)('Component rendering ', function () {

      var providedChallengeInstruction = 'Un QCM propose plusieurs choix, l\'utilisateur peut en choisir [plusieurs](http://link.plusieurs.url)';

      var emberChallengeObject = Ember.Object.create({
        type: 'QCM',
        instruction: providedChallengeInstruction,
        proposals: '- soit possibilite A, et/ou' + '\n - soit possibilite B, et/ou' + '\n - soit possibilite C, et/ou' + '\n - soit possibilite D'
      });

      var answer = Ember.Object.create({
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
        this.render(Ember.HTMLBars.template({
          "id": "CPzQ7S2z",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"result-item\",null,[[\"answer\",\"index\"],[[20,[\"answer\"]],[20,[\"index\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$()).to.have.lengthOf(1);
      });

      (0, _mocha.it)('should render an index 1 when 0 provided', function () {
        // given
        this.set('answer', '');

        // when
        this.render(Ember.HTMLBars.template({
          "id": "CPzQ7S2z",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"result-item\",null,[[\"answer\",\"index\"],[[20,[\"answer\"]],[20,[\"index\"]]]]],false]],\"hasEval\":false}",
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
        this.render(Ember.HTMLBars.template({
          "id": "CPzQ7S2z",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"result-item\",null,[[\"answer\",\"index\"],[[20,[\"answer\"]],[20,[\"index\"]]]]],false]],\"hasEval\":false}",
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
        this.render(Ember.HTMLBars.template({
          "id": "CPzQ7S2z",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"result-item\",null,[[\"answer\",\"index\"],[[20,[\"answer\"]],[20,[\"index\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        var expectedChallengeInstruction = 'Un QCM propose plusieurs choix, l\'utilisateur peut en choisir plusieur...';
        (0, _chai.expect)(this.$('.result-item__instruction').text().trim()).to.equal(expectedChallengeInstruction);
      });

      (0, _mocha.it)('should render an button when QCM', function () {
        // given
        this.set('answer', answer);

        this.render(Ember.HTMLBars.template({
          "id": "CPzQ7S2z",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"result-item\",null,[[\"answer\",\"index\"],[[20,[\"answer\"]],[20,[\"index\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));
        // Then
        (0, _chai.expect)(this.$('.result-item__correction__button').text().trim()).to.deep.equal('RÉPONSE');
      });

      (0, _mocha.it)('should render tooltip for the answer', function () {
        // given
        this.set('answer', answer);

        // when
        this.render(Ember.HTMLBars.template({
          "id": "CPzQ7S2z",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"result-item\",null,[[\"answer\",\"index\"],[[20,[\"answer\"]],[20,[\"index\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('div[data-toggle="tooltip"]').attr('data-original-title').trim()).to.equal('Réponse incorrecte');
      });

      (0, _mocha.it)('should not render a tooltip when the answer is being retrieved', function () {
        // given
        this.set('answer', null);

        // when
        this.render(Ember.HTMLBars.template({
          "id": "CPzQ7S2z",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"result-item\",null,[[\"answer\",\"index\"],[[20,[\"answer\"]],[20,[\"index\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('div[data-toggle="tooltip"]').attr('data-original-title')).to.equal(undefined);
      });

      (0, _mocha.it)('should update the tooltip when the answer is eventually retrieved', function () {
        // given
        this.set('answer', null);
        this.render(Ember.HTMLBars.template({
          "id": "CPzQ7S2z",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"result-item\",null,[[\"answer\",\"index\"],[[20,[\"answer\"]],[20,[\"index\"]]]]],false]],\"hasEval\":false}",
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
        this.render(Ember.HTMLBars.template({
          "id": "CPzQ7S2z",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"result-item\",null,[[\"answer\",\"index\"],[[20,[\"answer\"]],[20,[\"index\"]]]]],false]],\"hasEval\":false}",
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
          this.render(Ember.HTMLBars.template({
            "id": "CPzQ7S2z",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"result-item\",null,[[\"answer\",\"index\"],[[20,[\"answer\"]],[20,[\"index\"]]]]],false]],\"hasEval\":false}",
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
          "id": "0UCahRWj",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"score-pastille\"],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$()).to.have.lengthOf(1);
      });

      (0, _mocha.describe)('Component dashes rendering instead of zero cases:', function () {

        (0, _mocha.it)('should display two dashes, when no pixScore provided', function () {
          // when
          this.render(Ember.HTMLBars.template({
            "id": "0UCahRWj",
            "block": "{\"symbols\":[],\"statements\":[[1,[18,\"score-pastille\"],false]],\"hasEval\":false}",
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
          "id": "Ao4/cO7W",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"score-pastille\",null,[[\"pixScore\"],[[20,[\"pixScore\"]]]]],false]],\"hasEval\":false}",
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
          "id": "LWcKSbxD",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"scoring-panel-tantpix\"],false]],\"hasEval\":false}",
          "meta": {}
        }));
      });

      (0, _mocha.it)('should render successfully component wrapper', function () {
        (0, _chai.expect)(this.$()).to.have.lengthOf(1);
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
define('pix-live/tests/integration/components/scoring-panel-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  var TANTPIX_CONTAINER_CLASS = '.scoring-panel-tantpix';

  (0, _mocha.describe)('Integration | Component | scoring panel', function () {

    (0, _emberMocha.setupComponentTest)('scoring-panel', {
      integration: true
    });

    var assessmentWithTrophy = Ember.Object.create({ estimatedLevel: 1, pixScore: 67, course: { isAdaptive: true } });
    var assessmentWithNoTrophyAndSomePix = Ember.Object.create({
      estimatedLevel: 0,
      pixScore: 20,
      course: { isAdaptive: true }
    });
    var assessmentWithNoTrophyAndNoPix = Ember.Object.create({
      estimatedLevel: 0,
      pixScore: 0,
      course: { isAdaptive: true }
    });

    (0, _mocha.it)('renders', function () {
      this.render(Ember.HTMLBars.template({
        "id": "tQyqF4zz",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"scoring-panel\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.lengthOf(1);
    });

    (0, _mocha.describe)('Default display', function () {

      (0, _mocha.beforeEach)(function () {
        this.set('assessment', assessmentWithNoTrophyAndNoPix);
        this.render(Ember.HTMLBars.template({
          "id": "obxMGzIf",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"scoring-panel\",null,[[\"assessment\"],[[20,[\"assessment\"]]]]],false]],\"hasEval\":false}",
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
        this.render(Ember.HTMLBars.template({
          "id": "obxMGzIf",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"scoring-panel\",null,[[\"assessment\"],[[20,[\"assessment\"]]]]],false]],\"hasEval\":false}",
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
        this.render(Ember.HTMLBars.template({
          "id": "obxMGzIf",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"scoring-panel\",null,[[\"assessment\"],[[20,[\"assessment\"]]]]],false]],\"hasEval\":false}",
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
        this.render(Ember.HTMLBars.template({
          "id": "obxMGzIf",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"scoring-panel\",null,[[\"assessment\"],[[20,[\"assessment\"]]]]],false]],\"hasEval\":false}",
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
define('pix-live/tests/integration/components/share-profile-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | share profile', function () {

    (0, _emberMocha.setupComponentTest)('share-profile', {
      integration: true,

      beforeSetup: function beforeSetup() {
        Ember.$.extend(Ember.$.expr[':'], {
          tabbable: function tabbable() {
            return true;
          }
        });
      }
    });

    function expectToBeOnOrganizationCodeEntryView() {
      (0, _chai.expect)(Ember.$('.share-profile__section--organization-code-entry')).to.have.lengthOf(1);
      (0, _chai.expect)(Ember.$('.share-profile__section--sharing-confirmation')).to.have.lengthOf(0);
      (0, _chai.expect)(Ember.$('.share-profile__section--success-notification')).to.have.lengthOf(0);
    }

    function expectToBeSharingConfirmationView() {
      (0, _chai.expect)(Ember.$('.share-profile__section--organization-code-entry')).to.have.lengthOf(0);
      (0, _chai.expect)(Ember.$('.share-profile__section--sharing-confirmation')).to.have.lengthOf(1);
      (0, _chai.expect)(Ember.$('.share-profile__section--success-notification')).to.have.lengthOf(0);
    }

    function expectToBeOnSuccessNotificationView() {
      (0, _chai.expect)(Ember.$('.share-profile__section--organization-code-entry')).to.have.lengthOf(0);
      (0, _chai.expect)(Ember.$('.share-profile__section--sharing-confirmation')).to.have.lengthOf(0);
      (0, _chai.expect)(Ember.$('.share-profile__section--success-notification')).to.have.lengthOf(1);
    }

    function expectModalToBeClosed() {
      (0, _chai.expect)(Ember.$('.pix-modal')).to.have.lengthOf(0);
    }

    (0, _mocha.describe)('Step 0 - "Share" button on modal wrapper', function () {

      (0, _mocha.it)('should open profile sharing modal on "organization code entry" view', function () {
        // given
        this.render(Ember.HTMLBars.template({
          "id": "LvTy9kIy",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"share-profile\"],false]],\"hasEval\":false}",
          "meta": {}
        }));
        (0, _chai.expect)(Ember.$('.pix-modal')).to.have.lengthOf(0);

        // when
        Ember.run(function () {
          return document.querySelector('.share-profile__share-button').click();
        });

        // then
        (0, _chai.expect)(Ember.$('.pix-modal')).to.have.lengthOf(1);
        (0, _chai.expect)(Ember.$('.share-profile__section--organization-code-entry')).to.have.lengthOf(1);
      });
    });

    (0, _mocha.describe)('Step 1 - "Organization code entry" view', function () {

      (0, _mocha.it)('should be the modal default view', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "i4MD9OgK",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"share-profile\",null,[[\"_showingModal\"],[true]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        expectToBeOnOrganizationCodeEntryView();
      });

      (0, _mocha.it)('should contain a text input for the organization code', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "i4MD9OgK",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"share-profile\",null,[[\"_showingModal\"],[true]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(Ember.$('.share-profile__organization-code-input')).to.have.lengthOf(1);
      });

      (0, _mocha.it)('should contain a "Continue" button to find the organization', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "i4MD9OgK",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"share-profile\",null,[[\"_showingModal\"],[true]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(Ember.$('.share-profile__continue-button')).to.have.lengthOf(1);
      });

      (0, _mocha.it)('should contain a "Cancel" button to cancel the profile sharing', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "i4MD9OgK",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"share-profile\",null,[[\"_showingModal\"],[true]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(Ember.$('.share-profile__cancel-button')).to.have.lengthOf(1);
      });

      (0, _mocha.it)('should redirect to "sharing confirmation" view when clicking on "Continue" button', function () {
        // given
        this.set('searchForOrganization', function () {
          var organization = Ember.Object.create({ name: 'Pix' });
          return Ember.RSVP.resolve(organization);
        });
        this.render(Ember.HTMLBars.template({
          "id": "dpsdCfFG",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"share-profile\",null,[[\"_showingModal\",\"_code\",\"searchForOrganization\"],[true,\"ABCD01\",[20,[\"searchForOrganization\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // when
        Ember.run(function () {
          return document.querySelector('.share-profile__continue-button').click();
        });

        // then
        expectToBeSharingConfirmationView();
      });

      (0, _mocha.it)('should display an error message when no organization was found for the given code', function () {
        // given
        this.set('searchForOrganization', function () {
          return Ember.RSVP.resolve(null);
        });
        this.render(Ember.HTMLBars.template({
          "id": "BlZpkv+e",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"share-profile\",null,[[\"_showingModal\",\"searchForOrganization\"],[true,[20,[\"searchForOrganization\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // when
        Ember.run(function () {
          return document.querySelector('.share-profile__continue-button').click();
        });

        // then
        (0, _chai.expect)(Ember.$('.share-profile__form-error')).to.have.lengthOf(1);
        expectToBeOnOrganizationCodeEntryView();
      });

      (0, _mocha.it)('should close the modal when clicking on "Cancel" button', function () {
        // given
        this.render(Ember.HTMLBars.template({
          "id": "i4MD9OgK",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"share-profile\",null,[[\"_showingModal\"],[true]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // when
        Ember.run(function () {
          return document.querySelector('.share-profile__cancel-button').click();
        });

        // then
        expectModalToBeClosed();
      });
    });

    (0, _mocha.describe)('Step 2 - "Sharing confirmation" view', function () {

      (0, _mocha.it)('should display the name of the found organization', function () {
        // given
        this.set('organization', Ember.Object.create({ name: 'Pix' }));

        // when
        this.render(Ember.HTMLBars.template({
          "id": "9nF6Qqrz",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"share-profile\",null,[[\"_showingModal\",\"_view\",\"_organization\"],[true,\"sharing-confirmation\",[20,[\"organization\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(Ember.$('.share-profile__organization-name').text().trim()).to.equal('Pix');
      });

      (0, _mocha.describe)('when organization\'s type is SUP', function () {

        beforeEach(function () {
          // given
          this.set('organization', Ember.Object.create({ name: 'Pix', type: 'SUP' }));

          // when
          this.render(Ember.HTMLBars.template({
            "id": "9nF6Qqrz",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"share-profile\",null,[[\"_showingModal\",\"_view\",\"_organization\"],[true,\"sharing-confirmation\",[20,[\"organization\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));
        });

        (0, _mocha.it)('should ask for student code (required)', function () {
          // then
          (0, _chai.expect)(document.querySelector('.share-profile__student-code-input')).to.exist;
        });

        (0, _mocha.it)('should ask for campaign code (optionnal)', function () {
          // then
          (0, _chai.expect)(document.querySelector('.share-profile__campaign-code-input')).to.exist;
        });
      });

      (0, _mocha.describe)('when organization\'s type is SCO', function () {

        beforeEach(function () {
          // given
          this.set('organization', Ember.Object.create({ name: 'Pix', type: 'SCO' }));

          // when
          this.render(Ember.HTMLBars.template({
            "id": "9nF6Qqrz",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"share-profile\",null,[[\"_showingModal\",\"_view\",\"_organization\"],[true,\"sharing-confirmation\",[20,[\"organization\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));
        });

        (0, _mocha.it)('should not ask for student code', function () {
          // then
          (0, _chai.expect)(document.querySelector('.share-profile__student-code-input')).to.not.exist;
        });

        (0, _mocha.it)('should ask for campaign code', function () {
          // then
          (0, _chai.expect)(document.querySelector('.share-profile__campaign-code-input')).to.exist;
        });
      });

      (0, _mocha.describe)('when organization\'s type is PRO', function () {

        beforeEach(function () {
          // given
          this.set('organization', Ember.Object.create({ name: 'Pix', type: 'PRO' }));

          // when
          this.render(Ember.HTMLBars.template({
            "id": "9nF6Qqrz",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"share-profile\",null,[[\"_showingModal\",\"_view\",\"_organization\"],[true,\"sharing-confirmation\",[20,[\"organization\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));
        });

        (0, _mocha.it)('should not ask for student code (required)', function () {
          // then
          (0, _chai.expect)(document.querySelector('.share-profile__student-code-input')).to.not.exist;
        });

        (0, _mocha.it)('should not ask for campaign code (optionnal)', function () {
          // then
          (0, _chai.expect)(document.querySelector('.share-profile__campaign-code-input')).to.not.exist;
        });
      });

      (0, _mocha.it)('should contain a "Confirm" button to valid the profile sharing', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "kuJ99qjz",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"share-profile\",null,[[\"_showingModal\",\"_view\"],[true,\"sharing-confirmation\"]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(Ember.$('.share-profile__confirm-button')).to.have.lengthOf(1);
      });

      (0, _mocha.it)('should contain a "Cancel" button to cancel the profile sharing for the given organization', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "kuJ99qjz",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"share-profile\",null,[[\"_showingModal\",\"_view\"],[true,\"sharing-confirmation\"]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(Ember.$('.share-profile__cancel-button')).to.have.lengthOf(1);
      });

      (0, _mocha.it)('should return back to "organization code entry" view when clicking on "Cancel" button', function () {
        // given
        this.render(Ember.HTMLBars.template({
          "id": "kuJ99qjz",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"share-profile\",null,[[\"_showingModal\",\"_view\"],[true,\"sharing-confirmation\"]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // when
        Ember.run(function () {
          return document.querySelector('.share-profile__cancel-button').click();
        });

        // then
        expectToBeOnOrganizationCodeEntryView();
      });

      (0, _mocha.it)('should create a Snapshot and send it to the organization previously found when clicking on "Continue" button', function () {
        // given
        this.set('organization', Ember.Object.create({ name: 'Pix' }));
        this.set('shareProfileSnapshot', function () {
          return Ember.RSVP.resolve(null);
        });
        this.render(Ember.HTMLBars.template({
          "id": "lHHdhVfw",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"share-profile\",null,[[\"_showingModal\",\"_view\",\"_organization\",\"shareProfileSnapshot\"],[true,\"sharing-confirmation\",[20,[\"organization\"]],[20,[\"shareProfileSnapshot\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // when
        Ember.run(function () {
          return document.querySelector('.share-profile__confirm-button').click();
        });

        // then
        expectToBeOnSuccessNotificationView();
      });
    });

    (0, _mocha.describe)('Step 3 - "Success notification" view', function () {

      (0, _mocha.it)('should contain a "Close" button that hide the modal', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "InyMCgqA",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"share-profile\",null,[[\"_showingModal\",\"_view\"],[true,\"success-notification\"]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(Ember.$('.share-profile__close-button')).to.have.lengthOf(1);
      });

      (0, _mocha.it)('should close the modal when clicking on "Cancel" button', function () {
        // given
        this.render(Ember.HTMLBars.template({
          "id": "InyMCgqA",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"share-profile\",null,[[\"_showingModal\",\"_view\"],[true,\"success-notification\"]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // when
        Ember.run(function () {
          return document.querySelector('.share-profile__close-button').click();
        });

        // then
        (0, _chai.expect)(Ember.$('.pix-modal')).to.have.lengthOf(0);
      });
    });

    (0, _mocha.describe)('Borderline cases', function () {

      (0, _mocha.it)('should open the modal on default "organization code entry" view even if modal was previously closed on "sharing confirmation" view', function () {
        // given
        this.render(Ember.HTMLBars.template({
          "id": "kuJ99qjz",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"share-profile\",null,[[\"_showingModal\",\"_view\"],[true,\"sharing-confirmation\"]]],false]],\"hasEval\":false}",
          "meta": {}
        }));
        Ember.run(function () {
          return document.querySelector('.pix-modal__close-link').click();
        });

        // when
        Ember.run(function () {
          return document.querySelector('.share-profile__share-button').click();
        });

        // then
        expectToBeOnOrganizationCodeEntryView();
      });

      (0, _mocha.it)('should open the modal on default "organization code entry" view even if modal was previously closed on "success notification" view', function () {
        // given
        this.render(Ember.HTMLBars.template({
          "id": "InyMCgqA",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"share-profile\",null,[[\"_showingModal\",\"_view\"],[true,\"success-notification\"]]],false]],\"hasEval\":false}",
          "meta": {}
        }));
        Ember.run(function () {
          return document.querySelector('.pix-modal__close-link').click();
        });

        // when
        Ember.run(function () {
          return document.querySelector('.share-profile__share-button').click();
        });

        // then
        expectToBeOnOrganizationCodeEntryView();
      });

      (0, _mocha.it)('should display the code input filled with the previously set organization code even after canceling sharing (step 2)', function () {
        // given
        this.render(Ember.HTMLBars.template({
          "id": "kg75epFD",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"share-profile\",null,[[\"_showingModal\",\"_code\",\"_view\"],[true,\"ORGA00\",\"sharing-confirmation\"]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // when
        Ember.run(function () {
          return document.querySelector('.share-profile__cancel-button').click();
        });

        // then
        (0, _chai.expect)(Ember.$('.share-profile__organization-code-input').val()).to.equal('ORGA00');
      });
    });

    (0, _mocha.describe)('Actions', function () {

      beforeEach(function () {
        // given
        this.set('showingModal', true);
        this.set('view', 'sharing-confirmation');
        this.set('code', 'ABCD1234');
        this.set('organization', { foo: 'bar' });
        this.set('organizationNotFound', true);
        this.set('studentCode', 'student_code');
        this.set('campaignCode', 'campaign_code');

        this.render(Ember.HTMLBars.template({
          "id": "Vw/aWSXl",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"share-profile\",null,[[\"_showingModal\",\"_view\",\"_code\",\"_organization\",\"_organizationNotFound\",\"_studentCode\",\"_campaignCode\"],[[20,[\"showingModal\"]],[20,[\"view\"]],[20,[\"code\"]],[20,[\"organization\"]],[20,[\"organizationNotFound\"]],[20,[\"studentCode\"]],[20,[\"campaignCode\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));
      });

      (0, _mocha.describe)('#closeModal', function () {

        (0, _mocha.it)('should remove all input information when modal is closed', function () {
          // when
          Ember.run(function () {
            return document.querySelector('.pix-modal__close-link').click();
          });

          // then
          (0, _chai.expect)(this.get('showingModal')).to.be.false;
          (0, _chai.expect)(this.get('view')).to.equal('organization-code-entry');
          (0, _chai.expect)(this.get('code')).to.be.null;
          (0, _chai.expect)(this.get('organization')).to.be.null;
          (0, _chai.expect)(this.get('organizationNotFound')).to.be.false;
          (0, _chai.expect)(this.get('studentCode')).to.be.null;
          (0, _chai.expect)(this.get('campaignCode')).to.be.null;
        });
      });

      (0, _mocha.describe)('#cancelSharingAndGoBackToOrganizationCodeEntryView', function () {

        (0, _mocha.it)('should remove all input information but organization code when sharing confirmation is canceled', function () {
          // when
          Ember.run(function () {
            return document.querySelector('.share-profile__cancel-button').click();
          });

          // then
          (0, _chai.expect)(this.get('showingModal')).to.be.true;
          (0, _chai.expect)(this.get('view')).to.equal('organization-code-entry');
          (0, _chai.expect)(this.get('code')).to.equal('ABCD1234');
          (0, _chai.expect)(this.get('organization')).to.be.null;
          (0, _chai.expect)(this.get('organizationNotFound')).to.be.false;
          (0, _chai.expect)(this.get('studentCode')).to.be.null;
          (0, _chai.expect)(this.get('campaignCode')).to.be.null;
        });
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
        "id": "r2GvpNJE",
        "block": "{\"symbols\":[],\"statements\":[[1,[25,\"signin-form\",null,[[\"onSubmit\"],[[25,\"action\",[[19,0,[]],\"onSubmitAction\"],null]]]],false]],\"hasEval\":false}",
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
        "id": "r2GvpNJE",
        "block": "{\"symbols\":[],\"statements\":[[1,[25,\"signin-form\",null,[[\"onSubmit\"],[[25,\"action\",[[19,0,[]],\"onSubmitAction\"],null]]]],false]],\"hasEval\":false}",
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
        "id": "r2GvpNJE",
        "block": "{\"symbols\":[],\"statements\":[[1,[25,\"signin-form\",null,[[\"onSubmit\"],[[25,\"action\",[[19,0,[]],\"onSubmitAction\"],null]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      _fillSigninForm(this, expectedEmail, expectedPassword);

      // When
      this.$('.signin-form__form form').submit();

      // Then
      (0, _chai.expect)(this.$('.signin-form__errors')).to.have.lengthOf(0);
    });

    (0, _mocha.it)('should hide the error message if it was previously displayed', function () {
      // Expect
      this.on('onSubmitAction', function () {
        return Promise.resolve();
      });
      this.render(Ember.HTMLBars.template({
        "id": "2OKSvaj1",
        "block": "{\"symbols\":[],\"statements\":[[1,[25,\"signin-form\",null,[[\"onSubmit\",\"displayErrorMessage\"],[[25,\"action\",[[19,0,[]],\"onSubmitAction\"],null],\"true\"]]],false]],\"hasEval\":false}",
        "meta": {}
      }));

      (0, _chai.expect)(this.$('.signin-form__errors')).to.have.lengthOf(1);
      _fillSigninForm(this, expectedEmail, expectedPassword);

      // When
      this.$('.signin-form__form form').submit();

      // Then
      (0, _chai.expect)(this.$('.signin-form__errors')).to.have.lengthOf(0);
    });

    function _fillSigninForm(context, email, password) {
      context.$('#pix-email').val(email);
      context.$('#pix-email').change();

      context.$('#pix-password').val(password);
      context.$('#pix-password').change();
    }
  });
});
define('pix-live/tests/integration/components/signup-form-test', ['chai', 'mocha', 'ember-mocha', 'ember-test-helpers/wait', 'sinon'], function (_chai, _mocha, _emberMocha, _wait, _sinon) {
  'use strict';

  var FORM_CONTAINER = '.signup-form-container';
  var FORM_HEADING_CONTAINER = '.signup-form__heading-container';
  var FORM_HEADING = '.signup-form__heading';
  var EXPECTED_FORM_HEADING_CONTENT = 'Inscription gratuite';

  var INPUT_TEXT_FIELD = '.signup-form__input-container';
  var INPUT_TEXT_FIELD_CLASS_DEFAULT = 'form-textfield__input-container--default';

  var CHECKBOX_CGU_CONTAINER = '.signup-form__cgu-container';
  var CHECKBOX_CGU_INPUT = '#pix-cgu';
  var CHECKBOX_CGU_LABEL = '.signup-form__cgu-label';
  var UNCHECKED_CHECKBOX_CGU_ERROR = 'Veuillez accepter les conditions générales d\'utilisation (CGU) avant de créer un compte.';

  var CGU_LINK = '.signup__cgu-link';
  var CGU_LINK_CONTENT = 'conditions d\'​utilisation de Pix';

  var SUBMIT_BUTTON_CONTAINER = '.signup-form__submit-container';
  var SUBMIT_BUTTON = '.signup__submit-button';
  var SUBMIT_BUTTON_CONTENT = 'Je m\'inscris';

  var MESSAGE_ERROR_STATUS = 'form-textfield__message--error';
  var EMPTY_FIRSTNAME_ERROR_MESSAGE = 'Votre prénom n’est pas renseigné.';

  var EMPTY_LASTNAME_ERROR_MESSAGE = 'Votre nom n’est pas renseigné.';
  var EMPTY_EMAIL_ERROR_MESSAGE = 'Votre email n’est pas valide.';
  var INCORRECT_PASSWORD_FORMAT_ERROR_MESSAGE = 'Votre mot de passe doit comporter au moins une lettre, un chiffre et' + ' 8 caractères.';
  var MESSAGE_SUCCESS_STATUS = 'form-textfield__message--success';

  var ICON_ERROR_CLASS = 'form-textfield__icon--error';
  var ICON_SUCCESS_CLASS = 'form-textfield__icon--success';

  var userEmpty = Ember.Object.create({});
  var CAPTCHA_CONTAINER = '.signup-form__captcha-container';

  (0, _mocha.describe)('Integration | Component | signup form', function () {

    (0, _emberMocha.setupComponentTest)('signup-form', {
      integration: true
    });

    (0, _mocha.describe)('Rendering', function () {

      beforeEach(function () {
        this.set('user', userEmpty);
        this.render(Ember.HTMLBars.template({
          "id": "w4e6yuCa",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"signup-form\",null,[[\"user\"],[[20,[\"user\"]]]]],false]],\"hasEval\":false}",
          "meta": {}
        }));
      });

      (0, _mocha.it)('renders', function () {
        (0, _chai.expect)(this.$()).to.have.lengthOf(1);
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
        this.register('component:g-recaptcha', Ember.Component.extend());
      });

      (0, _mocha.describe)('behavior when signup successful (test external calls)', function () {
        (0, _mocha.it)('should return true if action <Signup> is handled', function () {
          // given
          var isFormSubmitted = false;
          var user = Ember.Object.create({
            email: 'toto@pix.fr',
            firstName: 'Marion',
            lastName: 'Yade',
            password: 'gipix2017',
            cgu: true,

            save: function save() {
              isFormSubmitted = true;
              return Ember.RSVP.resolve();
            }
          });

          this.set('user', user);
          this.render(Ember.HTMLBars.template({
            "id": "fFQuFBXW",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"signup-form\",null,[[\"user\",\"signup\"],[[20,[\"user\"]],\"signup\"]]],false]],\"hasEval\":false}",
            "meta": {}
          }));

          // when
          Ember.$(SUBMIT_BUTTON).click();

          // then
          return (0, _wait.default)().then(function () {
            (0, _chai.expect)(isFormSubmitted).to.be.true;
          });
        });

        (0, _mocha.it)('should redirect automatically to user compte', function () {
          // given
          var redirectToProfileRouteStub = _sinon.default.stub();

          this.set('redirectToProfileRoute', redirectToProfileRouteStub);

          var user = Ember.Object.create({
            email: 'toto@pix.fr',
            firstName: 'Marion',
            lastName: 'Yade',
            password: 'gipix2017',
            cgu: true,

            save: function save() {
              return Ember.RSVP.resolve();
            }
          });
          this.set('user', user);
          this.render(Ember.HTMLBars.template({
            "id": "FuMyfcf2",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"signup-form\",null,[[\"user\",\"signup\",\"redirectToProfileRoute\"],[[20,[\"user\"]],\"signup\",[25,\"action\",[[19,0,[]],[20,[\"redirectToProfileRoute\"]]],null]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));

          // when
          Ember.$(SUBMIT_BUTTON).click();

          // then
          return (0, _wait.default)().then(function () {
            _sinon.default.assert.calledOnce(redirectToProfileRouteStub);
            _sinon.default.assert.calledWith(redirectToProfileRouteStub, { email: 'toto@pix.fr', password: 'gipix2017' });
          });
        });
      });

      (0, _mocha.describe)('Errors management', function () {

        (0, _mocha.it)('should display an error message on first name field, when field is empty and focus-out', function () {
          var _this = this;

          // given
          this.set('user', userEmpty);
          this.render(Ember.HTMLBars.template({
            "id": "w4e6yuCa",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"signup-form\",null,[[\"user\"],[[20,[\"user\"]]]]],false]],\"hasEval\":false}",
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
          this.render(Ember.HTMLBars.template({
            "id": "w4e6yuCa",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"signup-form\",null,[[\"user\"],[[20,[\"user\"]]]]],false]],\"hasEval\":false}",
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
          this.render(Ember.HTMLBars.template({
            "id": "w4e6yuCa",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"signup-form\",null,[[\"user\"],[[20,[\"user\"]]]]],false]],\"hasEval\":false}",
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
          this.render(Ember.HTMLBars.template({
            "id": "w4e6yuCa",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"signup-form\",null,[[\"user\"],[[20,[\"user\"]]]]],false]],\"hasEval\":false}",
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
          var userWithCguNotAccepted = Ember.Object.create({
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
              return new Ember.RSVP.reject();
            }
          });

          this.set('user', userWithCguNotAccepted);
          this.render(Ember.HTMLBars.template({
            "id": "w4e6yuCa",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"signup-form\",null,[[\"user\"],[[20,[\"user\"]]]]],false]],\"hasEval\":false}",
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

          var userThatThrowAnErrorDuringSaving = Ember.Object.create({
            errors: {
              content: [{
                attribute: 'email',
                message: 'An error concerning the email thrown by the API'
              }]
            },
            save: function save() {
              return new Ember.RSVP.reject();
            }
          });

          this.set('user', userThatThrowAnErrorDuringSaving);
          this.render(Ember.HTMLBars.template({
            "id": "w4e6yuCa",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"signup-form\",null,[[\"user\"],[[20,[\"user\"]]]]],false]],\"hasEval\":false}",
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
          var userWithCaptchaNotValid = Ember.Object.create({
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
              return new Ember.RSVP.reject();
            }
          });

          this.set('user', userWithCaptchaNotValid);
          this.render(Ember.HTMLBars.template({
            "id": "w4e6yuCa",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"signup-form\",null,[[\"user\"],[[20,[\"user\"]]]]],false]],\"hasEval\":false}",
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
          this.render(Ember.HTMLBars.template({
            "id": "w4e6yuCa",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"signup-form\",null,[[\"user\"],[[20,[\"user\"]]]]],false]],\"hasEval\":false}",
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
          this.render(Ember.HTMLBars.template({
            "id": "w4e6yuCa",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"signup-form\",null,[[\"user\"],[[20,[\"user\"]]]]],false]],\"hasEval\":false}",
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
          this.render(Ember.HTMLBars.template({
            "id": "w4e6yuCa",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"signup-form\",null,[[\"user\"],[[20,[\"user\"]]]]],false]],\"hasEval\":false}",
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
          this.render(Ember.HTMLBars.template({
            "id": "w4e6yuCa",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"signup-form\",null,[[\"user\"],[[20,[\"user\"]]]]],false]],\"hasEval\":false}",
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
          var userWithCguAccepted = Ember.Object.create({
            cgu: true,

            save: function save() {
              return new Ember.RSVP.resolve();
            }
          });

          this.set('user', userWithCguAccepted);
          this.render(Ember.HTMLBars.template({
            "id": "w4e6yuCa",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"signup-form\",null,[[\"user\"],[[20,[\"user\"]]]]],false]],\"hasEval\":false}",
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

        (0, _mocha.it)('should reset validation property, when all things are ok and form is submitted', function () {
          var _this13 = this;

          // given
          var validUser = Ember.Object.create({
            email: 'toto@pix.fr',
            firstName: 'Marion',
            lastName: 'Yade',
            password: 'gipix2017',
            cgu: true,

            save: function save() {
              return new Ember.RSVP.resolve();
            }
          });

          this.set('user', validUser);
          this.render(Ember.HTMLBars.template({
            "id": "w4e6yuCa",
            "block": "{\"symbols\":[],\"statements\":[[1,[25,\"signup-form\",null,[[\"user\"],[[20,[\"user\"]]]]],false]],\"hasEval\":false}",
            "meta": {}
          }));

          // when
          this.$('.signup__submit-button').click();

          // then
          return (0, _wait.default)().then(function () {
            var inputFirst = _this13.$('.form-textfield__input-field-container').first();
            (0, _chai.expect)(inputFirst.prop('class')).to.includes(INPUT_TEXT_FIELD_CLASS_DEFAULT);
          });
        });
      });
    });
  });
});
define('pix-live/tests/integration/components/snapshot-list-test', ['chai', 'mocha', 'ember-mocha', 'ember-test-helpers/wait'], function (_chai, _mocha, _emberMocha, _wait) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | snapshot list', function () {
    (0, _emberMocha.setupComponentTest)('snapshot-list', {
      integration: true
    });

    (0, _mocha.it)('renders', function () {
      var organization = Ember.Object.create({ id: 1, snapshots: Ember.RSVP.resolve([]) });
      this.set('organization', organization);

      this.render(Ember.HTMLBars.template({
        "id": "6zi033fZ",
        "block": "{\"symbols\":[],\"statements\":[[1,[25,\"snapshot-list\",null,[[\"organization\"],[[20,[\"organization\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.lengthOf(1);
    });

    (0, _mocha.it)('should inform the user when no profile', function () {
      // Given
      var organization = Ember.Object.create({ id: 1, snapshots: Ember.RSVP.resolve([]) });
      this.set('organization', organization);

      // When
      this.render(Ember.HTMLBars.template({
        "id": "6zi033fZ",
        "block": "{\"symbols\":[],\"statements\":[[1,[25,\"snapshot-list\",null,[[\"organization\"],[[20,[\"organization\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));

      // Then
      (0, _chai.expect)(this.$('.snapshot-list__no-profile')).to.have.lengthOf(1);
      (0, _chai.expect)(this.$('.snapshot-list__no-profile').text()).to.equal('Aucun profil partagé pour le moment');
    });

    (0, _mocha.it)('it should display as many snapshot items as shared', function () {
      // Given
      var snapshot1 = Ember.Object.create({ id: 1 });
      var snapshot2 = Ember.Object.create({ id: 2 });
      this.set('snapshots', [snapshot1, snapshot2]);

      // When
      this.render(Ember.HTMLBars.template({
        "id": "oLGFvCmq",
        "block": "{\"symbols\":[],\"statements\":[[1,[25,\"snapshot-list\",null,[[\"snapshots\"],[[20,[\"snapshots\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));

      // Then
      return (0, _wait.default)().then(function () {
        (0, _chai.expect)(this.$('.snapshot-list__no-profile')).to.have.lengthOf(0);
        (0, _chai.expect)(this.$('.snapshot-list__snapshot-item')).to.have.lengthOf(2);
      }.bind(this));
    });

    (0, _mocha.it)('should display snapshot informations', function () {
      // Given
      var user = Ember.Object.create({ id: 1, firstName: 'Werner', lastName: 'Heisenberg' });
      var snapshot = Ember.Object.create({
        id: 1,
        score: 10,
        testsFinished: '3',
        createdAt: '2017-09-25 12:14:33',
        user: user
      });
      this.set('snapshots', [snapshot]);

      // When
      this.render(Ember.HTMLBars.template({
        "id": "oLGFvCmq",
        "block": "{\"symbols\":[],\"statements\":[[1,[25,\"snapshot-list\",null,[[\"snapshots\"],[[20,[\"snapshots\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));

      // Then
      return (0, _wait.default)().then(function () {
        (0, _chai.expect)(this.$('.snapshot-list__snapshot-item')).to.have.lengthOf(1);
        (0, _chai.expect)(this.$('.snapshot-list__snapshot-item td:eq(0)').text().trim()).to.equal(user.get('lastName'));
        (0, _chai.expect)(this.$('.snapshot-list__snapshot-item td:eq(1)').text().trim()).to.equal(user.get('firstName'));
        (0, _chai.expect)(this.$('.snapshot-list__snapshot-item td:eq(2)').text().trim()).to.equal('25/09/2017');
        (0, _chai.expect)(this.$('.snapshot-list__snapshot-item td:eq(3)').text().trim()).to.equal(snapshot.get('score').toString());
        (0, _chai.expect)(this.$('.snapshot-list__snapshot-item td:eq(4)').text().trim()).to.equal(snapshot.get('testsFinished') + '/16');
      }.bind(this));
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
          "id": "trJ8ho0B",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"timeout-jauge\"],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('.timeout-jauge')).to.have.lengthOf(1);
      });

      (0, _mocha.it)('It renders a red clock if time is over', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "HC0bjM9i",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"timeout-jauge\",null,[[\"allotedTime\"],[0]]],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('.svg-timeout-clock-black')).to.have.lengthOf(0);
        (0, _chai.expect)(this.$('.svg-timeout-clock-red')).to.have.lengthOf(1);
      });

      (0, _mocha.it)('It renders a black clock if time is not over', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "jN4p/Xyt",
          "block": "{\"symbols\":[],\"statements\":[[1,[25,\"timeout-jauge\",null,[[\"allotedTime\"],[1]]],false]],\"hasEval\":false}",
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
        "id": "7zYrijVt",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"trophy-item\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.$()).to.have.lengthOf(1);
    });

    (0, _mocha.it)('should contain the level passed in the component', function () {
      // given
      var level = 3;
      this.set('level', level);

      // when
      this.render(Ember.HTMLBars.template({
        "id": "B7tX/3Bs",
        "block": "{\"symbols\":[],\"statements\":[[1,[25,\"trophy-item\",null,[[\"level\"],[[20,[\"level\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));

      // then
      (0, _chai.expect)(this.$('.trophy-item__level').text()).to.contain(level.toString());
    });

    (0, _mocha.it)('should contain an image of a trophy with the text "NIVEAU"', function () {
      // when
      this.render(Ember.HTMLBars.template({
        "id": "7zYrijVt",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"trophy-item\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      // then
      (0, _chai.expect)(this.$('.trophy-item__img').length).to.equal(1);
      (0, _chai.expect)(this.$('.trophy-item__level').text()).to.contain('NIVEAU');
    });
  });
});
define('pix-live/tests/integration/components/tutorial-panel-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | tutorial panel', function () {
    (0, _emberMocha.setupComponentTest)('tutorial-panel', {
      integration: true
    });

    (0, _mocha.describe)('component rendering', function () {

      (0, _mocha.it)('should render component', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "Vbj4AuxK",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"tutorial-panel\"],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$()).to.have.length(1);
      });

      [{ itemClassName: '.tutorial-panel' }, { itemClassName: '.tutorial-panel__box-container' }, { itemClassName: '.tutorial-panel__box-title' }, { itemClassName: '.tutorial-panel__box-picto-container' }, { itemClassName: '.tutorial-panel__box-picto' }, { itemClassName: '.tutorial-panel__separator' }].forEach(function (_ref2) {
        var itemClassName = _ref2.itemClassName;

        (0, _mocha.it)('should render a div with class ' + itemClassName, function () {
          // when
          this.render(Ember.HTMLBars.template({
            "id": "Vbj4AuxK",
            "block": "{\"symbols\":[],\"statements\":[[1,[18,\"tutorial-panel\"],false]],\"hasEval\":false}",
            "meta": {}
          }));

          // then
          (0, _chai.expect)(this.$(itemClassName)).to.have.lengthOf(1);
        });
      });
    });
  });
});
define('pix-live/tests/integration/components/user-logged-menu-test', ['chai', 'mocha', 'ember-mocha', 'ember-test-helpers/wait'], function (_chai, _mocha, _emberMocha, _wait) {
  'use strict';

  (0, _mocha.describe)('Integration | Component | user logged menu', function () {
    (0, _emberMocha.setupComponentTest)('user-logged-menu', {
      integration: true
    });

    (0, _mocha.describe)('when rendering for logged user', function () {

      beforeEach(function () {
        // given
        this.register('service:store', Ember.Service.extend({
          findRecord: function findRecord() {
            return Ember.RSVP.resolve({
              firstName: 'FHI',
              lastName: '4EVER',
              email: 'FHI@4EVER.fr'
            });
          }
        }));

        this.register('service:session', Ember.Service.extend({
          data: { authenticated: { userId: 123 } }
        }));

        this.inject.service('store', { as: 'store' });
        this.inject.service('session', { as: 'session' });

        // when
        this.render(Ember.HTMLBars.template({
          "id": "pah6OdLO",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"user-logged-menu\"],false]],\"hasEval\":false}",
          "meta": {}
        }));
      });

      (0, _mocha.it)('should render component', function () {
        // then
        (0, _chai.expect)(this.$()).to.have.lengthOf(1);
      });

      (0, _mocha.it)('should display logged user name ', function () {
        // then
        (0, _chai.expect)(this.$('.logged-user-name')).to.have.lengthOf(1);
        (0, _chai.expect)(this.$('.logged-user-name__link')).to.have.lengthOf(1);
        (0, _chai.expect)(this.$('.logged-user-name__link').text().trim()).to.be.equal('FHI 4EVER');
      });

      (0, _mocha.it)('should hide user menu, when no action on user-name', function () {
        // when
        this.render(Ember.HTMLBars.template({
          "id": "pah6OdLO",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"user-logged-menu\"],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        (0, _chai.expect)(this.$('.logged-user-menu')).to.have.lengthOf(0);
      });

      (0, _mocha.it)('should display a user menu, when user-name is clicked', function () {
        var _this = this;

        // given
        this.render(Ember.HTMLBars.template({
          "id": "pah6OdLO",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"user-logged-menu\"],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // when
        this.$('.logged-user-name__link').click();

        return (0, _wait.default)().then(function () {
          // then
          (0, _chai.expect)(_this.$('.logged-user-menu')).to.have.lengthOf(1);
          (0, _chai.expect)(_this.$('.user-menu-item__details-firstname').text().trim()).to.equal('FHI');
          (0, _chai.expect)(_this.$('.user-menu-item__details-email').text().trim()).to.equal('FHI@4EVER.fr');
        });
      });

      (0, _mocha.it)('should hide user menu, when it was previously open and user-name is clicked one more time', function () {
        var _this2 = this;

        // when
        this.render(Ember.HTMLBars.template({
          "id": "pah6OdLO",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"user-logged-menu\"],false]],\"hasEval\":false}",
          "meta": {}
        }));
        this.$('.logged-user-name').click();
        this.$('.logged-user-name').click();

        return (0, _wait.default)().then(function () {
          // then
          (0, _chai.expect)(_this2.$('.logged-user-menu')).to.have.lengthOf(0);
        });
      });

      (0, _mocha.it)('should hide user menu, when it was previously open and user press key escape', function () {
        var _this3 = this;

        // when
        this.$('.logged-user-name').click();
        this.$('.logged-user-name').trigger(Ember.$.Event('keydown', { keyCode: 27 }));

        return (0, _wait.default)().then(function () {
          // then
          (0, _chai.expect)(_this3.$('.logged-user-menu')).to.have.lengthOf(0);
        });
      });

      (0, _mocha.it)('should hide user menu, when the menu is opened then closed', function () {
        var _this4 = this;

        // when
        this.$('.logged-user-name').click();
        this.$('.logged-user-name').click();

        return (0, _wait.default)().then(function () {
          // then
          (0, _chai.expect)(_this4.$('.logged-user-menu')).to.have.lengthOf(0);
        });
      });

      (0, _mocha.describe)('button rendering', function () {

        context('when the user is on compte page', function () {
          (0, _mocha.it)('should not render a button link to the "profile" page', function () {
            var _this5 = this;

            this.register('service:-routing', Ember.Service.extend({
              currentRouteName: 'compte',
              generateURL: function generateURL() {
                return '/compte';
              }
            }));
            this.inject.service('-routing', { as: '-routing' });

            // when
            this.render(Ember.HTMLBars.template({
              "id": "pah6OdLO",
              "block": "{\"symbols\":[],\"statements\":[[1,[18,\"user-logged-menu\"],false]],\"hasEval\":false}",
              "meta": {}
            }));
            this.$('.logged-user-name').click();

            return (0, _wait.default)().then(function () {
              // then
              (0, _chai.expect)(_this5.$('.user-menu-item__account-link').length).to.equal(0);
            });
          });

          (0, _mocha.it)('should not render a button link to the "board" page', function () {
            var _this6 = this;

            this.register('service:-routing', Ember.Service.extend({
              currentRouteName: 'board',
              generateURL: function generateURL() {
                return '/board';
              }
            }));
            this.inject.service('-routing', { as: '-routing' });

            // when
            this.render(Ember.HTMLBars.template({
              "id": "pah6OdLO",
              "block": "{\"symbols\":[],\"statements\":[[1,[18,\"user-logged-menu\"],false]],\"hasEval\":false}",
              "meta": {}
            }));
            this.$('.logged-user-name').click();

            return (0, _wait.default)().then(function () {
              // then
              (0, _chai.expect)(_this6.$('.user-menu-item__account-link').length).to.equal(0);
            });
          });
        });

        (0, _mocha.it)('should render a button link to the profile when the user is not on compte page', function () {
          var _this7 = this;

          this.register('service:-routing', Ember.Service.extend({
            generateURL: function generateURL() {
              return '/autreRoute';
            }
          }));
          this.inject.service('-routing', { as: '-routing' });

          // when
          this.render(Ember.HTMLBars.template({
            "id": "pah6OdLO",
            "block": "{\"symbols\":[],\"statements\":[[1,[18,\"user-logged-menu\"],false]],\"hasEval\":false}",
            "meta": {}
          }));
          this.$('.logged-user-name__link').click();

          return (0, _wait.default)().then(function () {
            // then
            (0, _chai.expect)(_this7.$('.user-menu-item__account-link').text().trim()).to.equal('Mon compte');
            (0, _chai.expect)(_this7.$('.user-menu-item__account-link').length).to.equal(1);
          });
        });
      });
    });

    (0, _mocha.describe)('when user is unlogged or not found', function () {
      beforeEach(function () {
        this.register('service:store', Ember.Service.extend({
          findRecord: function findRecord() {
            return Ember.RSVP.reject();
          }
        }));

        this.inject.service('store', { as: 'store' });
      });

      (0, _mocha.it)('should not display user information, for unlogged', function () {
        var _this8 = this;

        // when
        this.render(Ember.HTMLBars.template({
          "id": "pah6OdLO",
          "block": "{\"symbols\":[],\"statements\":[[1,[18,\"user-logged-menu\"],false]],\"hasEval\":false}",
          "meta": {}
        }));

        // then
        return (0, _wait.default)().then(function () {
          (0, _chai.expect)(_this8.$('.logged-user-name')).to.have.lengthOf(0);
        });
      });
    });
  });
});
define('pix-live/tests/test-helper', ['pix-live/tests/helpers/resolver', 'ember-mocha', 'mocha', 'ember-exam/test-support/load'], function (_resolver, _emberMocha, _mocha, _load) {
  'use strict';

  (0, _load.default)();

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

    it('acceptance/certification-course-test.js', function () {
      // test passed
    });

    it('acceptance/compte-authentication-and-profile-test.js', function () {
      // test passed
    });

    it('acceptance/compte-display-competence-test.js', function () {
      // test passed
    });

    it('acceptance/compte-share-profile-test.js', function () {
      // test passed
    });

    it('acceptance/course-groups-test.js', function () {
      // test passed
    });

    it('acceptance/d1-epreuve-validation-test.js', function () {
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

    it('acceptance/index-test.js', function () {
      // test passed
    });

    it('acceptance/inscription-page-test.js', function () {
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

    it('acceptance/legal-notices-page-test.js', function () {
      // test passed
    });

    it('acceptance/not-found-redirect-to-index-test.js', function () {
      // test passed
    });

    it('acceptance/o1-board-organization-test.js', function () {
      // test passed
    });

    it('acceptance/page-accueil-test.js', function () {
      // test passed
    });

    it('acceptance/password-reset-test.js', function () {
      // test passed
    });

    it('acceptance/terms-of-service-page-test.js', function () {
      // test passed
    });

    it('helpers/destroy-app.js', function () {
      // test passed
    });

    it('helpers/resolver.js', function () {
      // test passed
    });

    it('helpers/responsive.js', function () {
      // test passed
    });

    it('helpers/seeds.js', function () {
      // test passed
    });

    it('helpers/start-app.js', function () {
      // test passed
    });

    it('helpers/testing.js', function () {
      // test passed
    });

    it('integration/components/certification-banner-test.js', function () {
      // test passed
    });

    it('integration/components/certification-results-page-test.js', function () {
      // test passed
    });

    it('integration/components/challenge-actions-test.js', function () {
      // test passed
    });

    it('integration/components/challenge-item-qmail-test.js', function () {
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

    it('integration/components/form-textfield-test.js', function () {
      // test passed
    });

    it('integration/components/g-recaptcha-test.js', function () {
      // test passed
    });

    it('integration/components/logged-user-profile-banner-test.js', function () {
      // test passed
    });

    it('integration/components/medal-item-test.js', function () {
      // test passed
    });

    it('integration/components/modal-mobile-test.js', function () {
      // test passed
    });

    it('integration/components/navbar-desktop-nav-menu-test.js', function () {
      // test passed
    });

    it('integration/components/navbar-header-test.js', function () {
      // test passed
    });

    it('integration/components/navbar-mobile-menu-test.js', function () {
      // test passed
    });

    it('integration/components/navbar-mobile-nav-menu-test.js', function () {
      // test passed
    });

    it('integration/components/partners-enrollment-panel-test.js', function () {
      // test passed
    });

    it('integration/components/password-reset-form-test.js', function () {
      // test passed
    });

    it('integration/components/pix-content-backdrop-test.js', function () {
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

    it('integration/components/reset-password-form-test.js', function () {
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

    it('integration/components/share-profile-test.js', function () {
      // test passed
    });

    it('integration/components/signin-form-test.js', function () {
      // test passed
    });

    it('integration/components/signup-form-test.js', function () {
      // test passed
    });

    it('integration/components/snapshot-list-test.js', function () {
      // test passed
    });

    it('integration/components/timeout-jauge-test.js', function () {
      // test passed
    });

    it('integration/components/trophy-item-test.js', function () {
      // test passed
    });

    it('integration/components/tutorial-panel-test.js', function () {
      // test passed
    });

    it('integration/components/user-logged-menu-test.js', function () {
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

    it('unit/components/certification-banner-test.js', function () {
      // test passed
    });

    it('unit/components/challenge-item-qmail-test.js', function () {
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

    it('unit/components/form-textfield-test.js', function () {
      // test passed
    });

    it('unit/components/g-recaptcha-test.js', function () {
      // test passed
    });

    it('unit/components/navbar-header-test.js', function () {
      // test passed
    });

    it('unit/components/navbar-mobile-menu-test.js', function () {
      // test passed
    });

    it('unit/components/password-reset-form-test.js', function () {
      // test passed
    });

    it('unit/components/pix-modal-test.js', function () {
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

    it('unit/components/reset-password-form-test.js', function () {
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

    it('unit/components/share-profile-test.js', function () {
      // test passed
    });

    it('unit/components/timeout-jauge-test.js', function () {
      // test passed
    });

    it('unit/components/user-logged-menu-test.js', function () {
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

    it('unit/models/certification-course-test.js', function () {
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

    it('unit/models/organization-test.js', function () {
      // test passed
    });

    it('unit/models/password-reset-demand-test.js', function () {
      // test passed
    });

    it('unit/models/snapshot-test.js', function () {
      // test passed
    });

    it('unit/models/user-test.js', function () {
      // test passed
    });

    it('unit/routes/application-test.js', function () {
      // test passed
    });

    it('unit/routes/assessments/challenge-test.js', function () {
      // test passed
    });

    it('unit/routes/assessments/results-test.js', function () {
      // test passed
    });

    it('unit/routes/assessments/resume-test.js', function () {
      // test passed
    });

    it('unit/routes/board-test.js', function () {
      // test passed
    });

    it('unit/routes/certification-course-test.js', function () {
      // test passed
    });

    it('unit/routes/certifications/results-test.js', function () {
      // test passed
    });

    it('unit/routes/certifications/resume-test.js', function () {
      // test passed
    });

    it('unit/routes/challenges/preview-test.js', function () {
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

    it('unit/routes/enrollment-test.js', function () {
      // test passed
    });

    it('unit/routes/index-test.js', function () {
      // test passed
    });

    it('unit/routes/inscription-test.js', function () {
      // test passed
    });

    it('unit/routes/legal-notices-test.js', function () {
      // test passed
    });

    it('unit/routes/login-test.js', function () {
      // test passed
    });

    it('unit/routes/logout-test.js', function () {
      // test passed
    });

    it('unit/routes/password-reset-test.js', function () {
      // test passed
    });

    it('unit/routes/placement-tests-test.js', function () {
      // test passed
    });

    it('unit/routes/project-test.js', function () {
      // test passed
    });

    it('unit/routes/reset-password-demand-test.js', function () {
      // test passed
    });

    it('unit/routes/series-test.js', function () {
      // test passed
    });

    it('unit/routes/terms-of-service-test.js', function () {
      // test passed
    });

    it('unit/services/delay-test.js', function () {
      // test passed
    });

    it('unit/services/mail-generator-test.js', function () {
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

    (0, _mocha.describe)('#findRecord', function () {

      var adapter = void 0;

      beforeEach(function () {
        adapter = this.subject();
        adapter.ajax = _sinon.default.stub().resolves();
      });

      (0, _mocha.it)('should exist', function () {
        // when
        var adapter = this.subject();
        // then
        return (0, _chai.expect)(adapter.findRecord()).to.be.ok;
      });

      (0, _mocha.it)('should not reload data from API when already in store', function () {
        // when
        var adapter = this.subject();

        // then
        (0, _chai.expect)(adapter.shouldBackgroundReloadRecord()).to.equal(false);
      });

      (0, _mocha.it)('should return a resolved promise', function (done) {
        // when
        var promise = adapter.findRecord();
        // then
        promise.then(done);
      });

      (0, _mocha.it)('should called GET /api/users/me', function () {
        // when
        adapter.findRecord();

        // then
        _sinon.default.assert.calledWith(adapter.ajax, 'http://localhost:3000/api/users/me');
      });
    });
  });
});
define('pix-live/tests/unit/authenticators/simple-test', ['mocha', 'chai', 'ember-mocha', 'sinon'], function (_mocha, _chai, _emberMocha, _sinon) {
  'use strict';

  var expectedUserId = 1;
  var expectedToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJlbWFpbCI6InBpeEBjb250YWN0LmNvbSIsImlhdCI6MTQ5Njg0NTY3OSwiZXhwIjoxNDk3NDUwNDc5fQ.6Mkkstj-9SjXX4lsXrsZ2KL91Ol3kbxn6tlus2apGVY';

  (0, _mocha.describe)('Unit | Authenticator | simple', function () {

    (0, _emberMocha.setupTest)('authenticator:simple', {
      needs: ['service:ajax']
    });

    var requestStub = _sinon.default.stub().resolves({
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

    beforeEach(function () {
      this.register('service:ajax', Ember.Service.extend({
        request: requestStub
      }));
      this.inject.service('ajax', { as: 'ajax' });
    });

    (0, _mocha.it)('should post a request to retrieve token', function () {
      // Given
      var email = 'test@example.net';
      var password = 'Hx523è9#';
      var authenticator = this.subject();

      // When
      var promise = authenticator.authenticate(email, password);

      // Then
      return promise.then(function (_) {

        _sinon.default.assert.calledWith(requestStub, '/api/authentications');
        (0, _chai.expect)(requestStub.getCall(0).args[1]).to.deep.equal({
          method: 'POST',
          data: '{"data":{"attributes":{"password":"Hx523è9#","email":"test@example.net"}}}'
        });
      });
    });

    (0, _mocha.it)('should return the token', function () {
      // Given
      var email = 'test@example.net';
      var password = 'Hx523è9#';
      var authenticator = this.subject();

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
define('pix-live/tests/unit/components/certification-banner-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Component | Certification Banner', function () {

    (0, _emberMocha.setupComponentTest)('certification-banner', {
      needs: [],
      unit: true
    });

    var component = void 0;

    (0, _mocha.beforeEach)(function () {
      component = this.subject();
    });

    (0, _mocha.it)('should be rendered', function () {
      // when
      this.render();

      // then
      (0, _chai.expect)(component).to.be.ok;
      (0, _chai.expect)(this.$()).to.have.length(1);
    });

    (0, _mocha.describe)('@fullname', function () {

      (0, _mocha.it)('should concatenate user first and last name', function () {
        // given
        var fakeUser = Ember.Object.create({ firstName: 'Manu', lastName: 'Phillip' });

        // when
        component.set('user', fakeUser);

        // then
        var fullname = component.get('fullname');
        (0, _chai.expect)(fullname).to.equal('Manu Phillip');
      });
    });

    (0, _mocha.it)('should return user id', function () {
      // given
      var fakeUser = Ember.Object.create({ firstName: 'Manu', lastName: 'Phillip', id: 1 });

      // when
      component.set('user', fakeUser);

      // then
      var userId = component.get('user.id');
      (0, _chai.expect)(userId).to.equal(1);
    });
  });
});
define('pix-live/tests/unit/components/challenge-item-qmail-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Component | QMAIL Item', function () {

    (0, _emberMocha.setupTest)('component:challenge-item-qmail', {});

    (0, _mocha.describe)('#hasError', function () {
      (0, _mocha.it)('should exists', function () {
        // Given
        var component = this.subject();

        // Then
        (0, _chai.expect)(component).to.have.property('_hasError').and.to.be.a('function');
      });

      (0, _mocha.it)('should return true when checkbox is not checked', function () {
        // Given
        var component = this.subject();

        // When
        var hasError = component._hasError();

        // Then
        (0, _chai.expect)(hasError).to.be.true;
      });

      (0, _mocha.it)('should return false when checkbox is checked', function () {
        // Given
        var component = this.subject();
        component.set('_isChecked', true);

        // When
        var hasError = component._hasError();

        // Then
        (0, _chai.expect)(hasError).to.be.false;
      });
    });

    (0, _mocha.describe)('#getErrorMessage', function () {
      (0, _mocha.it)('should exists', function () {
        // Given
        var component = this.subject();

        // Then
        (0, _chai.expect)(component).to.have.property('_getErrorMessage').and.to.be.a('function');
      });

      (0, _mocha.it)('should define an error message', function () {
        // Given
        var component = this.subject();

        // When
        var errorMessage = component._getErrorMessage();

        // Then
        (0, _chai.expect)(errorMessage).to.equal('Pour valider, sélectionner une réponse. Sinon, passer.');
      });
    });

    (0, _mocha.describe)('#getAnswerValue', function () {
      (0, _mocha.it)('should exists', function () {
        // Given
        var component = this.subject();

        // Then
        (0, _chai.expect)(component).to.have.property('_getAnswerValue').and.to.be.a('function');
      });

      (0, _mocha.it)('should always return #PENDING# while doing a QMAIL challenge', function () {
        // Given
        var component = this.subject();

        // When
        var answerValue = component._getAnswerValue();

        // Then
        (0, _chai.expect)(answerValue).to.equal('#PENDING#');
      });
    });
  });
});
define('pix-live/tests/unit/components/comparison-window-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  function _assertResultItemTitle(resultItem, expected) {
    (0, _chai.expect)(resultItem.title).to.equal(expected);
  }

  function _assertResultItemTooltip(resultItem, expected) {
    (0, _chai.expect)(resultItem.tooltip).to.equal(expected);
  }

  (0, _mocha.describe)('Unit | Component | comparison-window', function () {

    (0, _emberMocha.setupTest)('component:comparison-window', {
      needs: ['service:current-routed-modal', 'service:keyboard', 'service:component-focus/focus-manager']
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
      answer = Ember.Object.create();
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
define('pix-live/tests/unit/components/competence-by-area-item-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
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

          var competencesWithSameArea = [Ember.Object.create({ id: 2, name: 'competence-name-2', index: '1.2', area: 'area-id-1', level: -1 }), Ember.Object.create({ id: 3, name: 'competence-name-3', index: '1.3', area: 'area-id-1', level: -1 }), Ember.Object.create({ id: 1, name: 'competence-name-1', index: '1.1', area: 'area-id-1', level: -1 })];
          var areaWithManyCompetences = {
            property: 'area',
            value: 'Information et données',
            items: competencesWithSameArea
          };

          // when
          component.set('competenceArea', areaWithManyCompetences);
          // then
          (0, _chai.expect)(component.get('_competencesSortedList')).to.deep.equal([Ember.Object.create({
            id: 1,
            name: 'competence-name-1',
            index: '1.1',
            area: 'area-id-1',
            level: -1
          }), Ember.Object.create({
            id: 2,
            name: 'competence-name-2',
            index: '1.2',
            area: 'area-id-1',
            level: -1
          }), Ember.Object.create({
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
        [{ level: 1, expectedValue: 'width : 12.5%' }, { level: 2, expectedValue: 'width : 25%' }, { level: 0, expectedValue: 'width : 24px' }, { level: 3, expectedValue: 'width : 37.5%' }, { level: 4, expectedValue: 'width : 50%' }, { level: 5, expectedValue: 'width : 62.5%' }].forEach(function (_ref2) {
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
            (0, _chai.expect)(component.get('canUserStartCourse')).to.equal(expected);
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

      (0, _mocha.describe)('#canUserResumeAssessment', function () {

        (0, _mocha.it)('should return true if assessmentId is defined and status is "notCompleted', function () {
          // given
          var status = 'notCompleted';
          var assessmentId = 'awesomeId';
          var component = this.subject();

          // when
          component.set('status', status);
          component.set('assessmentId', assessmentId);

          // then
          (0, _chai.expect)(component.get('canUserResumeAssessment')).to.equal(true);
        });

        (0, _mocha.it)('should return false if assessmentId is defined and status is not "notCompleted"', function () {
          // given
          var status = 'evaluated';
          var assessmentId = 'awesomeId';
          var component = this.subject();

          // when
          component.set('status', status);
          component.set('assessmentId', assessmentId);

          // then
          (0, _chai.expect)(component.get('canUserResumeAssessment')).to.equal(false);
        });

        (0, _mocha.it)('should return false if assessmentId is an empty string', function () {
          // given
          var status = 'notCompleted';
          var assessmentId = '';
          var component = this.subject();

          // when
          component.set('status', status);
          component.set('assessmentId', assessmentId);

          // then
          (0, _chai.expect)(component.get('canUserResumeAssessment')).to.equal(false);
        });

        (0, _mocha.it)('should return false if assessmentId is not defined', function () {
          // given
          var status = 'notCompleted';
          var assessmentId = null;
          var component = this.subject();

          // when
          component.set('status', status);
          component.set('assessmentId', assessmentId);

          // then
          (0, _chai.expect)(component.get('canUserResumeAssessment')).to.equal(false);
        });
      });

      (0, _mocha.describe)('#canUserReplayAssessment', function () {
        (0, _mocha.it)('should return true if status is "evaluated" and courseId exist', function () {
          // given
          var status = 'evaluated';
          var courseId = 'courseId';
          var component = this.subject();

          // when
          component.set('status', status);
          component.set('courseId', courseId);

          // then
          (0, _chai.expect)(component.get('canUserReplayAssessment')).to.equal(true);
        });

        (0, _mocha.it)('should return false if status is not "evaluated"', function () {
          // given
          var status = 'replayed';
          var courseId = 'courseId';
          var component = this.subject();

          // when
          component.set('status', status);
          component.set('courseId', courseId);

          // then
          (0, _chai.expect)(component.get('canUserReplayAssessment')).to.equal(false);
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
        (0, _chai.expect)(imageUrl).to.exist;
        (0, _chai.expect)(imageUrl).to.equal('any_image.png');
      });

      (0, _mocha.it)('should display a default image if no image url is given', function () {
        // given
        initComponentWithoutImage.call(this);

        // when
        var imageUrl = component.get('imageUrl');

        // then
        (0, _chai.expect)(imageUrl).to.exist;
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
define('pix-live/tests/unit/components/follower-form-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
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
            component.set('follower', Ember.Object.create());
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
            component.set('follower', Ember.Object.create());
            // then
            (0, _chai.expect)(component.get(attribute)).to.equal(expected);
          });
        });
      });
    });
  });
});
define('pix-live/tests/unit/components/form-textfield-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  var EMPTY_FIRSTNAME_ERROR_MESSAGE = 'Votre prénom n’est pas renseigné.';
  var EMPTY_LASTNAME_ERROR_MESSAGE = 'Votre nom n’est pas renseigné.';
  var INCORRECT_PASSWORD_FORMAT_ERROR_MESSAGE = 'Votre mot de passe doit comporter au moins une lettre, un chiffre et' + ' 8 caractères.';

  (0, _mocha.describe)('Unit | Component | signupTextfieldComponent', function () {

    (0, _emberMocha.setupTest)('component:form-textfield', {});

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

      [{ property: 'hasIcon', expectedValue: false }, { property: 'iconType', expectedValue: '' }, { property: 'inputValidationStatus', expectedValue: 'form-textfield__input--default' }, { property: 'inputContainerStatusClass', expectedValue: 'form-textfield__input-container--default' }, { property: 'validationMessageClass', expectedValue: 'form-textfield__message--default' }].forEach(function (_ref2) {
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


          (0, _mocha.it)('gets ' + message + ' when ' + errorType, function (done) {
            // Given
            var component = this.subject();
            // When
            component.set('validationStatus', 'default');
            component.set('validationMessage', message);
            var propertyValue = component.get('validationMessage');
            // Then
            (0, _chai.expect)(propertyValue).to.equal(message);
            done();
          });
        });
      });
    });

    (0, _mocha.describe)('When validationStatus gets "error", Component computed property: ', function () {

      [{ property: 'hasIcon', expectedValue: true }, { property: 'iconType', expectedValue: 'error' }, { property: 'inputValidationStatus', expectedValue: 'form-textfield__input--error' }, { property: 'inputContainerStatusClass', expectedValue: 'form-textfield__input-container--error' }, { property: 'validationMessageClass', expectedValue: 'form-textfield__message--error' }].forEach(function (_ref4) {
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

      [{ property: 'hasIcon', expectedValue: true }, { property: 'iconType', expectedValue: 'success' }, { property: 'inputValidationStatus', expectedValue: 'form-textfield__input--success' }, { property: 'inputContainerStatusClass', expectedValue: 'form-textfield__input-container--success' }, { property: 'validationMessageClass', expectedValue: 'form-textfield__message--success' }].forEach(function (_ref6) {
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
define('pix-live/tests/unit/components/g-recaptcha-test', ['mocha', 'chai', 'ember-mocha'], function (_mocha, _chai, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Component | g-recaptcha', function () {

    var serviceResetCalled = false;

    (0, _emberMocha.setupTest)('component:g-recaptcha', {});

    beforeEach(function () {

      serviceResetCalled = false;

      this.register('service:googleRecaptcha', Ember.Service.extend({
        loadScript: function loadScript() {
          return Ember.RSVP.resolve();
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

  (0, _mocha.describe)('Unit | Component | Navbar Header Component', function () {
    (0, _emberMocha.setupTest)('component:navbar-header', {});
    var sessionStubResolve = Ember.Service.extend({ isAuthenticated: true });
    var sessionStubReject = Ember.Service.extend({ isAuthenticated: false });

    (0, _mocha.describe)('When user is logged', function () {
      (0, _mocha.beforeEach)(function () {
        this.register('service:session', sessionStubResolve);
        this.inject.service('session', { as: 'session' });
      });

      (0, _mocha.describe)('#isUserLogged', function () {
        (0, _mocha.it)('should return true', function () {
          // when
          var component = this.subject();

          // then
          (0, _chai.expect)(component.get('isUserLogged')).to.equal(true);
        });
      });

      context('#menu', function () {
        (0, _mocha.it)('should only contains permanent menu items', function () {
          // given
          var expectedLoggedUserMenu = [{ name: 'Projet', link: 'project', class: 'navbar-header-links__link--project', permanent: true }, { name: 'Compétences', link: 'competences', class: 'navbar-header-links__link--competences', permanent: true }];

          // when
          var component = this.subject();

          // then
          (0, _chai.expect)(component.get('menu')).to.deep.equal(expectedLoggedUserMenu);
        });
      });
    });

    context('When user is not logged', function () {
      (0, _mocha.beforeEach)(function () {
        this.register('service:session', sessionStubReject);
        this.inject.service('session', { as: 'session' });
      });

      context('#isUserLogged', function () {
        (0, _mocha.it)('should return false, when user is unauthenticated', function () {
          // when
          var component = this.subject();

          // then
          (0, _chai.expect)(component.get('isUserLogged')).to.equal(false);
        });
      });

      context('#menu', function () {
        (0, _mocha.it)('should set with default values (including connexion link)', function () {
          // given
          var expectedUnloggedUserMenu = [{ name: 'Projet', link: 'project', class: 'navbar-header-links__link--project', permanent: true }, {
            name: 'Compétences',
            link: 'competences',
            class: 'navbar-header-links__link--competences',
            permanent: true
          }, { name: 'Se connecter', link: 'login', class: 'navbar-menu-signin-link' }, { name: 'S’inscrire', link: 'inscription', class: 'navbar-menu-signup-link' }];

          // when
          var component = this.subject();

          // then
          (0, _chai.expect)(component.get('menu')).to.deep.equal(expectedUnloggedUserMenu);
        });
      });
    });
  });
});
define('pix-live/tests/unit/components/navbar-mobile-menu-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Component | Navbar mobile menu Component', function () {
    (0, _emberMocha.setupTest)('component:navbar-mobile-menu', {
      needs: ['service:side-menu'],
      unit: true
    });
    var sessionStubResolve = Ember.Service.extend({ isAuthenticated: true });

    (0, _mocha.describe)('#closeMenu', function () {
      (0, _mocha.beforeEach)(function () {
        this.register('service:session', sessionStubResolve);
        this.inject.service('session', { as: 'session' });
      });

      context('when close button is clicked', function () {
        (0, _mocha.it)('should be handled', function () {
          // given
          var component = this.subject();

          // when
          Ember.run(function () {
            component.send('closeMenu');
          });

          // then
          (0, _chai.expect)(component.get('sideMenu.isClosed')).to.equal(true);
        });
      });
    });
  });
});
define('pix-live/tests/unit/components/password-reset-form-test', ['mocha', 'chai', 'sinon', 'ember-mocha'], function (_mocha, _chai, _sinon, _emberMocha) {
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

  (0, _mocha.describe)('Unit | Component | password-reset-form', function () {

    (0, _emberMocha.setupTest)('component:password-reset-form', {});

    var component = void 0;
    var sentEmail = 'dumb@people.com';
    var createRecordStub = void 0,
        saveStub = void 0;

    (0, _mocha.describe)('success save of password Reset Demand', function () {

      beforeEach(function () {

        saveStub = _sinon.default.stub().resolves();
        createRecordStub = _sinon.default.stub().returns({
          save: saveStub
        });

        this.register('service:store', Ember.Service.extend({
          createRecord: createRecordStub
        }));
        this.inject.service('store', { as: 'store' });

        component = this.subject();
        component.set('email', sentEmail);
      });

      (0, _mocha.it)('should create a passwordResetDemand Record', function () {
        // when
        component.send('savePasswordResetDemand');

        // then
        _sinon.default.assert.called(createRecordStub);
        _sinon.default.assert.calledWith(createRecordStub, 'password-reset-demand', { email: sentEmail });
      });

      (0, _mocha.it)('should save the password reset demand', function () {
        // when
        component.send('savePasswordResetDemand');

        // then
        _sinon.default.assert.called(saveStub);
      });

      (0, _mocha.it)('should display success message when save resolves', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return component.send('savePasswordResetDemand');

              case 2:

                // then
                (0, _chai.expect)(component.get('_displaySuccessMessage')).to.be.true;
                (0, _chai.expect)(component.get('_displayErrorMessage')).to.be.false;

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      })));
    });
  });
});
define('pix-live/tests/unit/components/pix-modal-test', ['chai', 'mocha', 'ember-mocha', 'sinon', 'ember-keyboard'], function (_chai, _mocha, _emberMocha, _sinon, _emberKeyboard) {
  'use strict';

  (0, _mocha.describe)('Unit | Component | pix-modal', function () {

    (0, _emberMocha.setupTest)('component:pix-modale', {
      needs: ['service:keyboard', 'service:modal-dialog']
    });

    (0, _mocha.describe)('#init', function () {
      (0, _mocha.it)('should set the overlay as translucent', function () {
        // Given
        var component = this.subject();

        // then
        (0, _chai.expect)(component.get('translucentOverlay')).to.be.equal(true);
      });

      (0, _mocha.it)('should activate keyboard events', function () {
        // Given
        var component = this.subject();

        // then
        (0, _chai.expect)(component.get('keyboardActivated')).to.be.equal(true);
      });
    });

    (0, _mocha.describe)('#closeOnEsc', function () {
      (0, _mocha.it)('should use the "close" action', function () {
        // Given
        var sendActionStub = _sinon.default.stub();

        var component = this.subject();
        component.sendAction = sendActionStub;
        component.trigger((0, _emberKeyboard.keyUp)('Escape'));

        // then
        _sinon.default.assert.calledWith(sendActionStub, 'close');
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
define('pix-live/tests/unit/components/reset-password-form-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  var ERROR_PASSWORD_MESSAGE = 'Votre mot de passe doit comporter au moins une lettre, un chiffre et 8 caractères.';
  var SUCCESS_VALIDATION_MESSAGE = 'Votre mot de passe a été bien mis à jour';

  var VALIDATION_MAP = {
    default: {
      status: 'default', message: null
    },
    error: {
      status: 'error', message: ERROR_PASSWORD_MESSAGE
    },
    success: {
      status: 'success', message: ''
    }
  };

  var SUBMISSION_MAP = {
    success: {
      status: 'success', message: SUCCESS_VALIDATION_MESSAGE
    },
    error: {
      status: 'error', message: ERROR_PASSWORD_MESSAGE
    }
  };

  (0, _mocha.describe)('Unit | Component | reset password form', function () {

    (0, _emberMocha.setupComponentTest)('reset-password-form', {
      needs: ['component:form-textfield'],
      unit: true
    });

    var component = void 0;

    (0, _mocha.beforeEach)(function () {
      component = this.subject();
    });

    (0, _mocha.it)('should be rendered', function () {
      // when
      this.render();

      // then
      (0, _chai.expect)(component).to.be.ok;
      (0, _chai.expect)(this.$()).to.have.length(1);
    });

    (0, _mocha.describe)('#validatePassword', function () {

      (0, _mocha.it)('should set validation status to default, when component is rendered', function () {
        (0, _chai.expect)(component.get('validation')).to.eql(VALIDATION_MAP['default']);
      });

      (0, _mocha.it)('should set validation status to error, when there is an validation error on password field', function () {
        //given
        var userWithBadPassword = { firstName: 'toto', lastName: 'riri', password: 'Pix' };
        component.set('user', userWithBadPassword);

        // when
        component.send('validatePassword');

        // then
        (0, _chai.expect)(component.get('validation')).to.eql(VALIDATION_MAP['error']);
      });

      (0, _mocha.it)('should set validation status to success, when password is valid', function () {
        //given
        var userWithGoodPassword = { firstName: 'toto', lastName: 'riri', password: 'Pix123 0 #' };
        component.set('user', userWithGoodPassword);

        // when
        component.send('validatePassword');

        // then
        (0, _chai.expect)(component.get('validation')).to.eql(VALIDATION_MAP['success']);
      });
    });

    (0, _mocha.describe)('#handleResetPassword', function () {

      var userWithGoodPassword = Ember.Object.create({
        firstName: 'toto',
        lastName: 'riri',
        password: 'Pix123 0 #',
        save: function save() {
          return Ember.RSVP.resolve();
        }
      });

      (0, _mocha.describe)('When user password is saved', function () {
        (0, _mocha.it)('should update validation with success data', function () {
          // given
          component.set('user', userWithGoodPassword);

          // when
          Ember.run(function () {
            component.send('handleResetPassword');
          });

          // then
          (0, _chai.expect)(component.get('validation')).to.eql(SUBMISSION_MAP['success']);
        });

        (0, _mocha.it)('should reset paswword input', function () {
          // given
          component.set('user', userWithGoodPassword);

          // when
          Ember.run(function () {
            component.send('handleResetPassword');
          });

          // then
          (0, _chai.expect)(component.get('user.password')).to.eql(null);
        });
      });

      (0, _mocha.describe)('When user password saving fails', function () {

        (0, _mocha.it)('should set validation with errors data', function () {
          // given
          var userWithBadPassword = Ember.Object.create({
            firstName: 'toto',
            lastName: 'riri',
            password: 'Pix',
            save: function save() {
              return Ember.RSVP.reject();
            }
          });
          component.set('user', userWithBadPassword);

          // when
          Ember.run(function () {
            component.send('handleResetPassword');
          });

          // then
          (0, _chai.expect)(component.get('validation')).to.eql(SUBMISSION_MAP['error']);
        });
      });
    });
  });
});
define('pix-live/tests/unit/components/result-item-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
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
          var challenge = Ember.Object.create({ type: data.challengeType });
          var answer = Ember.Object.create({ challenge: challenge });

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
define('pix-live/tests/unit/components/share-profile-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Component | share-profile', function () {

    (0, _emberMocha.setupTest)('component:share-profile', {});

    var component = void 0;

    beforeEach(function () {
      component = this.subject();
    });

    (0, _mocha.describe)('#init', function () {

      (0, _mocha.it)('should set the overlay as translucent', function () {
        (0, _chai.expect)(component.get('_showingModal')).to.be.equal(false);
      });

      (0, _mocha.it)('should set the organizationExists as false', function () {
        (0, _chai.expect)(component.get('_organizationNotFound')).to.be.equal(false);
      });
    });

    (0, _mocha.describe)('#placeholder', function () {
      (0, _mocha.it)('should leave the placeholder empty with "focusIn"', function () {
        // then
        component.send('focusInOrganizationCodeInput');

        // when
        (0, _chai.expect)(component.get('_placeholder')).to.be.null;
      });

      (0, _mocha.it)('should reset the placeholder to its default value with "focusOut"', function () {
        // Given
        component.set('placeholder', 'Ex: EFGH89');

        // then
        component.send('focusOutOrganizationCodeInput');

        // when
        (0, _chai.expect)(component.get('_placeholder')).to.be.equal('Ex: ABCD12');
      });
    });

    (0, _mocha.describe)('#toggleSharingModal', function () {
      (0, _mocha.it)('should use the "open" action', function () {
        // when
        component.send('openModal');

        // then
        (0, _chai.expect)(component.get('_showingModal')).to.equal(true);
      });

      (0, _mocha.it)('should reset the code to default value', function () {
        // Given
        component.set('_code', 'ABCD01');

        // when
        component.send('closeModal');

        // then
        (0, _chai.expect)(component.get('_code')).to.be.null;
      });

      (0, _mocha.it)('should reset the organization to default value', function () {
        // Given
        component.set('organization', {});

        // when
        component.send('closeModal');

        // then
        (0, _chai.expect)(component.get('_organization')).to.equal(null);
      });
    });

    (0, _mocha.describe)('#isOrganizationHasTypeSup', function () {

      (0, _mocha.it)('should return "true" when organization type is "SUP"', function () {
        // given
        component.set('_organization', Ember.Object.create({ type: 'SUP' }));

        // when
        var isOrganizationHasTypeSup = component.get('isOrganizationHasTypeSup');

        // then
        (0, _chai.expect)(isOrganizationHasTypeSup).to.be.true;
      });

      (0, _mocha.it)('should return "false" when organization type is not "SUP"', function () {
        // given
        component.set('_organization', Ember.Object.create({ type: 'SCO' }));

        // when
        var isOrganizationHasTypeSup = component.get('isOrganizationHasTypeSup');

        // then
        (0, _chai.expect)(isOrganizationHasTypeSup).to.be.false;
      });
    });

    (0, _mocha.describe)('.organizationLabels', function () {

      (0, _mocha.it)('should return adapted ("orgnisation"-based) labels when organization type is PRO', function () {
        // given
        component.set('_organization', { type: 'PRO' });

        // when
        var organizationLabel = component.get('organizationLabels');

        // then
        (0, _chai.expect)(organizationLabel.text1).to.equal('Vous vous apprêtez à transmettre une copie de votre profil Pix à l\'organisation :');
        (0, _chai.expect)(organizationLabel.text2).to.equal('En cliquant sur le bouton « Envoyer », elle recevra les informations suivantes :');
        (0, _chai.expect)(organizationLabel.text3).to.equal('Elle ne recevra les évolutions futures de votre profil que si vous le partagez à nouveau.');
      });

      (0, _mocha.it)('should return adapted ("établissement"-based) labels when organization type is SUP or SCO', function () {
        // given
        component.set('_organization', { type: 'SUP' });

        // when
        var organizationLabel = component.get('organizationLabels');

        // then
        (0, _chai.expect)(organizationLabel.text1).to.equal('Vous vous apprêtez à transmettre une copie de votre profil Pix à l\'établissement :');
        (0, _chai.expect)(organizationLabel.text2).to.equal('En cliquant sur le bouton « Envoyer », il recevra les informations suivantes :');
        (0, _chai.expect)(organizationLabel.text3).to.equal('Il ne recevra les évolutions futures de votre profil que si vous le partagez à nouveau.');
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
define('pix-live/tests/unit/components/user-logged-menu-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Component | User logged Menu', function () {
    (0, _emberMocha.setupTest)('component:user-logged-menu', {
      needs: ['service:keyboard']
    });

    (0, _mocha.describe)('action#toggleUserMenu', function () {

      (0, _mocha.beforeEach)(function () {
        this.register('service:store', Ember.Service.extend({
          findRecord: function findRecord() {
            return Ember.RSVP.resolve({});
          }
        }));
        this.inject.service('store', { as: 'store' });

        this.register('service:session', Ember.Service.extend({
          isAuthenticated: true,
          data: {
            authenticated: {
              userId: 1435
            }
          }
        }));
        this.inject.service('session', { as: 'session' });
      });

      (0, _mocha.it)('should return true, when user details is clicked', function () {
        // given
        var component = this.subject();
        // when
        component.send('toggleUserMenu');
        // then
        (0, _chai.expect)(component.get('_canDisplayMenu')).to.equal(true);
      });

      (0, _mocha.it)('should return false as default value', function () {
        // when
        var component = this.subject();

        // then
        (0, _chai.expect)(component.get('_canDisplayMenu')).to.equal(false);
      });

      (0, _mocha.it)('should return false, when _canDisplayMenu was previously true', function () {
        // given
        var component = this.subject();
        // when
        component.send('toggleUserMenu');
        component.send('toggleUserMenu');
        // then
        (0, _chai.expect)(component.get('_canDisplayMenu')).to.equal(false);
      });
    });

    (0, _mocha.describe)('Display user details', function () {
      var findRecordArgs = void 0;

      (0, _mocha.describe)('When user is logged', function () {

        (0, _mocha.beforeEach)(function () {
          this.register('service:session', Ember.Service.extend({
            isAuthenticated: true,
            data: {
              authenticated: {
                userId: 1435
              }
            }
          }));
          this.inject.service('session', { as: 'session' });

          this.register('service:store', Ember.Service.extend({
            findRecord: function findRecord() {
              findRecordArgs = Array.from(arguments);
              return Ember.RSVP.resolve({
                firstName: 'FHI',
                lastName: '4EVER',
                email: 'FHI@4EVER.fr'
              });
            }
          }));
          this.inject.service('store', { as: 'store' });
        });

        (0, _mocha.it)('should correctly call store', function () {
          // when
          this.subject();

          // then
          (0, _chai.expect)(findRecordArgs).to.deep.equal(['user', 1435]);
        });
      });
    });

    (0, _mocha.describe)('canDisplayLinkToProfile', function () {

      (0, _mocha.beforeEach)(function () {

        this.register('service:session', Ember.Service.extend({}));
        this.inject.service('session', { as: 'session' });

        this.register('service:current-routed-modal', Ember.Service.extend({}));
        this.inject.service('current-routed-modal', { as: 'current-routed-modal' });

        this.register('service:store', Ember.Service.extend({
          findRecord: function findRecord() {
            return Ember.RSVP.resolve({});
          }
        }));
        this.inject.service('store', { as: 'store' });
      });

      (0, _mocha.it)('should be false if the current route is /compte', function () {
        // given
        this.register('service:-routing', Ember.Service.extend({
          currentRouteName: 'compte'
        }));
        this.inject.service('-routing', { as: '-routing' });
        var component = this.subject();

        // when
        var result = component.get('canDisplayLinkToProfile');

        // then
        (0, _chai.expect)(result).to.be.false;
      });

      (0, _mocha.it)('should be false if the current route is /board', function () {
        // given
        this.register('service:-routing', Ember.Service.extend({
          currentRouteName: 'board'
        }));
        this.inject.service('-routing', { as: '-routing' });
        var component = this.subject();

        // when
        var result = component.get('canDisplayLinkToProfile');

        // then
        (0, _chai.expect)(result).to.be.false;
      });

      (0, _mocha.it)('should be true if the current route is not /compte', function () {
        // given
        this.register('service:-routing', Ember.Service.extend({
          currentRouteName: 'autreRoute'
        }));
        this.inject.service('-routing', { as: '-routing' });
        var component = this.subject();

        // when
        var result = component.get('canDisplayLinkToProfile');

        // then
        (0, _chai.expect)(result).to.be.true;
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
define('pix-live/tests/unit/helpers/get-challenge-component-class-test', ['chai', 'mocha', 'pix-live/helpers/get-challenge-component-class'], function (_chai, _mocha, _getChallengeComponentClass) {
  'use strict';

  (0, _mocha.describe)('Unit | Helper | get challenge component class', function () {

    [{ challengeType: 'QCU', expectedClass: 'challenge-item-qcu' }, { challengeType: 'QCUIMG', expectedClass: 'challenge-item-qcu' }, { challengeType: 'QCM', expectedClass: 'challenge-item-qcm' }, { challengeType: 'QCMIMG', expectedClass: 'challenge-item-qcm' }, { challengeType: 'QROC', expectedClass: 'challenge-item-qroc' }, { challengeType: 'QROCm', expectedClass: 'challenge-item-qrocm' }, { challengeType: 'QROCm-ind', expectedClass: 'challenge-item-qrocm' }, { challengeType: 'QROCm-dep', expectedClass: 'challenge-item-qrocm' }, { challengeType: 'QMAIL', expectedClass: 'challenge-item-qmail' }].forEach(function (useCase) {

      (0, _mocha.it)('should return component class "' + useCase.expectedClass + '" when challenge type is "' + useCase.challengeType + '"', function () {
        // given
        var challenge = Ember.Object.create({ type: useCase.challengeType });
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
define('pix-live/tests/unit/models/answer-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
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

        Ember.run(function () {
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
define('pix-live/tests/unit/models/certification-course-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Model | certification course', function () {
    (0, _emberMocha.setupModelTest)('certification-course', {
      // Specify the other units that are required for this test.
      needs: []
    });

    (0, _mocha.describe)('@type', function () {

      (0, _mocha.it)('should be "CERTIFICATION"', function () {
        // given
        var certificationCourse = this.subject();

        // when
        var result = certificationCourse.get('type');

        // then
        (0, _chai.expect)(result).to.equal('CERTIFICATION');
      });
    });
  });
});
define('pix-live/tests/unit/models/challenge-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
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

        Ember.run(function () {
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

        Ember.run(function () {
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

        Ember.run(function () {
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

        Ember.run(function () {
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

        Ember.run(function () {
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

        Ember.run(function () {
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

        Ember.run(function () {
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
define('pix-live/tests/unit/models/competence-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
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
        var relationship = Ember.get(Competence, 'relationshipsByName').get('area');

        // then
        (0, _chai.expect)(relationship.key).to.equal('area');
        (0, _chai.expect)(relationship.kind).to.equal('belongsTo');
      });
    });

    (0, _mocha.describe)('#areaName computed property', function () {

      (0, _mocha.it)('should be an alias for "area" relationship on "name" property', function () {
        var _this = this;

        Ember.run(function () {
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
// FIXME wuth API resource GET /assessment/:id/progress

/*
import Ember from 'ember';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupModelTest } from 'ember-mocha';

describe('Unit | Model | Course', function() {

  setupModelTest('course', {
    needs: ['model:assessment', 'model:challenge']
  });

  describe('getProgress', function() {

    it('currentStep start at 1', function() {
      Ember.run(() => {
        // given
        const store = this.store();
        const challenge = store.createRecord('challenge', {});
        const course = this.subject({ challenges: [challenge] });

        expect(course.getProgress(challenge)).to.have.property('currentStep', 1);
      });
    });

    it('maxStep is 2 when there is 2 challenges in the course', function() {
      Ember.run(() => {
        // given
        const store = this.store();
        const challenge1 = store.createRecord('challenge', {});
        const challenge2 = store.createRecord('challenge', {});
        const course = this.subject({ challenges: [challenge1, challenge2] });

        expect(course.getProgress(challenge1)).to.have.property('maxStep', 2);
        expect(course.getProgress(challenge2)).to.have.property('maxStep', 2);
      });
    });

    it('currentStep is 2 when there is 2 challenges in the course and called with 2nd test', function() {
      Ember.run(() => {
        // given
        const store = this.store();
        const challenge1 = store.createRecord('challenge', {});
        const challenge2 = store.createRecord('challenge', {});
        const course = this.subject({ challenges: [challenge1, challenge2] });

        expect(course.getProgress(challenge2)).to.have.property('currentStep', 2);
      });
    });

  });

  describe('@type', function() {

    it('should be "DEMO" when the course is not adaptative', function() {
      // given
      const course = this.subject({ isAdaptive: false });

      // when
      const result = course.get('type');

      // then
      expect(result).to.equal('DEMO');

    });

    it('should be "PLACEMENT" when the course is adaptative', function() {
      // given
      const course = this.subject({ isAdaptive: true });

      // when
      const result = course.get('type');

      // then
      expect(result).to.equal('PLACEMENT');
    });
  });
});
*/
define("pix-live/tests/unit/models/course-test", [], function () {
  "use strict";
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
define('pix-live/tests/unit/models/organization-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Model | organization', function () {
    (0, _emberMocha.setupModelTest)('organization', {
      needs: []
    });

    (0, _mocha.it)('exists', function () {
      var model = this.subject();
      (0, _chai.expect)(model).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/models/password-reset-demand-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Model | password reset demand', function () {
    (0, _emberMocha.setupModelTest)('password-reset-demand', {
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
define('pix-live/tests/unit/models/snapshot-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Model | snapshot', function () {
    (0, _emberMocha.setupModelTest)('snapshot', {
      // Specify the other units that are required for this test.
      needs: ['model:organization']
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
      needs: ['model:competence', 'model:organization']
    });
    // Replace this with your real tests.
    (0, _mocha.it)('exists', function () {
      var model = this.subject();
      // var store = this.store();
      (0, _chai.expect)(model).to.be.ok;
    });

    (0, _mocha.describe)('@fullName', function () {
      (0, _mocha.it)('should concatenate user first and last name', function () {
        var _this = this;

        return Ember.run(function () {
          // given
          var model = _this.subject();
          model.set('firstName', 'Manu');
          model.set('lastName', 'Phillip');

          // when
          var fullName = model.get('fullName');

          // then
          (0, _chai.expect)(fullName).to.equal('Manu Phillip');
        });
      });
    });
  });
});
define('pix-live/tests/unit/routes/application-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  var SplashServiceStub = Ember.Object.extend({
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
define('pix-live/tests/unit/routes/assessments/challenge-test', ['chai', 'mocha', 'ember-mocha', 'sinon'], function (_chai, _mocha, _emberMocha, _sinon) {
  'use strict';

  (0, _mocha.describe)('Unit | Route | Assessments.ChallengeRoute', function () {
    (0, _emberMocha.setupTest)('route:assessments.challenge', {
      needs: ['service:current-routed-modal', 'service:session']
    });

    var route = void 0;
    var StoreStub = void 0;
    var createRecordStub = void 0;
    var queryRecordStub = void 0;
    var findRecordStub = void 0;
    var params = {
      assessment_id: 'assessment_id',
      challenge_id: 'challenge_id'
    };

    var model = {
      assessment: {
        id: 'assessment_id',
        get: _sinon.default.stub()
      },
      challenge: {
        id: 'challenge_id'
      }
    };
    var userId = 'user_id';
    beforeEach(function () {
      // define stubs
      createRecordStub = _sinon.default.stub();
      queryRecordStub = _sinon.default.stub();
      findRecordStub = _sinon.default.stub();
      findRecordStub.withArgs('user', userId).resolves({ userId: userId });
      StoreStub = Ember.Service.extend({
        createRecord: createRecordStub,
        queryRecord: queryRecordStub,
        findRecord: findRecordStub
      });

      // manage dependency injection context
      this.register('service:store', StoreStub);
      this.inject.service('store', { as: 'store' });
      this.register('service:session', Ember.Service.extend({
        data: { authenticated: { userId: userId, token: 'VALID-TOKEN' } }
      }));
      // instance route object
      route = this.subject();
      route.transitionTo = _sinon.default.stub();
    });

    (0, _mocha.it)('exists', function () {
      (0, _chai.expect)(route).to.be.ok;
    });

    (0, _mocha.describe)('#model', function () {
      (0, _mocha.it)('should correctly call the store to find assessment and challenge', function () {
        // when
        route.model(params);

        // then
        _sinon.default.assert.calledTwice(findRecordStub);
        _sinon.default.assert.calledWith(findRecordStub, 'assessment', params.assessment_id);
        _sinon.default.assert.calledWith(findRecordStub, 'challenge', params.challenge_id);
      });
    });

    (0, _mocha.describe)('#afterModel', function () {
      (0, _mocha.it)('should call queryRecord to find answer', function () {
        // given
        model.assessment.get.withArgs('isCertification').returns(false);
        model.assessment.get.withArgs('course').returns({ getProgress: _sinon.default.stub().returns('course') });

        // when
        var promise = route.afterModel(model);

        // then
        return promise.then(function () {
          _sinon.default.assert.calledOnce(queryRecordStub);
          _sinon.default.assert.calledWith(queryRecordStub, 'answer', { assessment: model.assessment.id, challenge: model.challenge.id });
        });
      });

      (0, _mocha.it)('should call findRecord for user if assessment is certification', function () {
        // given
        model.assessment.get.withArgs('isCertification').returns(true);
        model.assessment.get.withArgs('course').returns({ getProgress: _sinon.default.stub().returns('course') });

        // when
        var promise = route.afterModel(model);

        // then
        return promise.then(function () {
          _sinon.default.assert.calledOnce(findRecordStub);
          _sinon.default.assert.calledWith(findRecordStub, 'user', userId);
        });
      });

      (0, _mocha.it)('should not call findRecord for user if assessement is not a certification', function () {
        // given
        model.assessment.get.withArgs('isCertification').returns(false);
        model.assessment.get.withArgs('course').returns({ getProgress: _sinon.default.stub().returns('course') });

        // when
        var promise = route.afterModel(model);

        // then
        return promise.then(function () {
          _sinon.default.assert.notCalled(findRecordStub);
        });
      });

      (0, _mocha.it)('should return a complete model', function () {
        // given
        model.assessment.get.withArgs('isCertification').returns(true);
        model.assessment.get.withArgs('course').returns({ getProgress: _sinon.default.stub().returns('course') });
        var expectedModel = {
          assessment: { id: 'assessment_id' },
          challenge: { id: 'challenge_id' },
          progress: 'course',
          user: { userId: userId },
          courseId: 'course_id'
        };

        // when
        var promise = route.afterModel(model);

        // then
        return promise.then(function (createdModel) {
          (0, _chai.expect)(createdModel.toString()).to.equal(expectedModel.toString());
        });
      });
    });

    (0, _mocha.describe)('#saveAnswerAndNavigate', function () {
      var answerToChallengeOne = void 0;

      var answerValue = '';
      var answerTimeout = 120;
      var answerElapsedTime = 65;
      var challengeOne = Ember.Object.create({ id: 'recChallengeOne' });
      var nextChallenge = Ember.Object.create({ id: 'recNextChallenge' });

      beforeEach(function () {
        answerToChallengeOne = Ember.Object.create({ challenge: challengeOne });
        answerToChallengeOne.save = _sinon.default.stub().resolves();
        answerToChallengeOne.setProperties = _sinon.default.stub();
      });

      context('when the answer is already known', function () {
        (0, _mocha.it)('should not create a new answer', function () {
          // given
          var assessment = Ember.Object.create({ answers: [answerToChallengeOne] });
          createRecordStub.returns(answerToChallengeOne);
          queryRecordStub.resolves(nextChallenge);

          // when
          route.actions.saveAnswerAndNavigate.call(route, challengeOne, assessment, answerValue, answerTimeout, answerElapsedTime);

          // then
          _sinon.default.assert.notCalled(createRecordStub);
        });
      });

      context('when no answer was given', function () {
        (0, _mocha.it)('should create an answer', function () {
          // given
          var assessment = Ember.Object.create({ answers: [] });
          createRecordStub.returns(answerToChallengeOne);
          queryRecordStub.resolves(nextChallenge);

          // when
          route.actions.saveAnswerAndNavigate.call(route, challengeOne, assessment, answerValue, answerTimeout, answerElapsedTime);

          // then
          _sinon.default.assert.calledWith(createRecordStub, 'answer', {
            assessment: assessment,
            challenge: challengeOne
          });
        });
      });

      (0, _mocha.it)('should update the answer with the timeout and elapsedTime', function () {
        // given
        var assessment = Ember.Object.create({ answers: [answerToChallengeOne] });
        createRecordStub.returns(answerToChallengeOne);
        queryRecordStub.resolves(nextChallenge);

        // when
        route.actions.saveAnswerAndNavigate.call(route, challengeOne, assessment, answerValue, answerTimeout, answerElapsedTime);

        // then
        _sinon.default.assert.callOrder(answerToChallengeOne.setProperties, answerToChallengeOne.save);
        _sinon.default.assert.calledOnce(answerToChallengeOne.save);
        _sinon.default.assert.calledWith(answerToChallengeOne.setProperties, {
          value: answerValue,
          timeout: answerTimeout,
          elapsedTime: answerElapsedTime
        });
      });

      context('when the next challenge exists', function () {
        (0, _mocha.it)('should redirect to the challenge view', function () {
          // given
          var assessment = Ember.Object.create({ answers: [answerToChallengeOne] });
          createRecordStub.returns(answerToChallengeOne);
          queryRecordStub.resolves(nextChallenge);

          // when
          var promise = route.actions.saveAnswerAndNavigate.call(route, challengeOne, assessment, answerValue, answerTimeout, answerElapsedTime);

          // then
          return promise.then(function () {
            _sinon.default.assert.callOrder(answerToChallengeOne.save, route.transitionTo);
            _sinon.default.assert.calledWith(route.transitionTo, 'assessments.challenge', {
              assessment: assessment,
              challenge: nextChallenge
            });
          });
        });
      });

      context('when the next challenge does not exist (is null)', function () {
        context('when the assessment is a certification', function () {
          (0, _mocha.it)('should redirect to the certification end page', function () {
            // given
            var assessment = Ember.Object.create({ type: 'CERTIFICATION', answers: [answerToChallengeOne] });
            createRecordStub.returns(answerToChallengeOne);
            queryRecordStub.rejects();

            // when
            var promise = route.actions.saveAnswerAndNavigate.call(route, challengeOne, assessment, answerValue, answerTimeout, answerElapsedTime);

            // then
            return promise.then(function () {
              _sinon.default.assert.callOrder(answerToChallengeOne.save, route.transitionTo);
              _sinon.default.assert.calledWith(route.transitionTo, 'certifications.results');
            });
          });
        });

        context('when the assessment is not certification', function () {
          (0, _mocha.it)('should redirect to the assessment results page', function () {
            // given
            var assessment = Ember.Object.create({ answers: [answerToChallengeOne] });
            createRecordStub.returns(answerToChallengeOne);
            queryRecordStub.rejects();

            // when
            var promise = route.actions.saveAnswerAndNavigate.call(route, challengeOne, assessment, answerValue, answerTimeout, answerElapsedTime);

            // then
            return promise.then(function () {
              _sinon.default.assert.callOrder(answerToChallengeOne.save, route.transitionTo);
              _sinon.default.assert.calledWith(route.transitionTo, 'assessments.results', assessment.get('id'));
            });
          });
        });
      });
    });
  });
});
define('pix-live/tests/unit/routes/assessments/results-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Route | Assessments.ResultsRoute', function () {

    (0, _emberMocha.setupTest)('route:assessments.results', {
      needs: ['service:current-routed-modal']
    });

    (0, _mocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/routes/assessments/resume-test', ['chai', 'mocha', 'ember-mocha', 'sinon'], function (_chai, _mocha, _emberMocha, _sinon) {
  'use strict';

  (0, _mocha.describe)('Unit | Route | resume', function () {
    (0, _emberMocha.setupTest)('route:assessments.resume', {
      needs: ['service:current-routed-modal']
    });

    var route = void 0;
    var StoreStub = void 0;
    var findRecordStub = void 0;
    var queryRecordStub = void 0;

    beforeEach(function () {
      // define stubs
      findRecordStub = _sinon.default.stub();
      queryRecordStub = _sinon.default.stub();
      StoreStub = Ember.Service.extend({
        findRecord: findRecordStub,
        queryRecord: queryRecordStub
      });

      // manage dependency injection context
      this.register('service:store', StoreStub);
      this.inject.service('store', { as: 'store' });

      // instance route object
      route = this.subject();
      route.transitionTo = _sinon.default.stub();
    });

    (0, _mocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });

    (0, _mocha.describe)('#model', function () {

      (0, _mocha.it)('should fetch an assessment', function () {
        // given
        var params = { assessment_id: 123 };
        route.get('store').findRecord.resolves();

        // when
        var promise = route.model(params);

        // then
        return promise.then(function () {
          _sinon.default.assert.calledOnce(findRecordStub);
          _sinon.default.assert.calledWith(findRecordStub, 'assessment', 123);
        });
      });
    });

    (0, _mocha.describe)('#afterModel', function () {

      var assessment = Ember.Object.create({ id: 123 });

      (0, _mocha.it)('should get the next challenge of the assessment', function () {
        // given
        queryRecordStub.resolves();

        // when
        var promise = route.afterModel(assessment);

        // then
        return promise.then(function () {
          _sinon.default.assert.calledOnce(queryRecordStub);
          _sinon.default.assert.calledWith(queryRecordStub, 'challenge', { assessmentId: 123 });
        });
      });

      context('when the next challenge exists', function () {

        (0, _mocha.it)('should redirect to the challenge view', function () {
          // given
          var nextChallenge = Ember.Object.create({ id: 456 });
          queryRecordStub.resolves(nextChallenge);

          // when
          var promise = route.afterModel(assessment);

          // then
          return promise.then(function () {
            _sinon.default.assert.calledOnce(route.transitionTo);
            _sinon.default.assert.calledWith(route.transitionTo, 'assessments.challenge', 123, 456);
          });
        });
      });

      context('when the next challenge does not exist (is null)', function () {

        (0, _mocha.it)('should redirect to assessment results page', function () {
          // given
          queryRecordStub.rejects();

          // when
          var promise = route.afterModel(assessment);

          // then
          return promise.then(function () {
            _sinon.default.assert.calledOnce(route.transitionTo);
            _sinon.default.assert.calledWith(route.transitionTo, 'assessments.results', 123);
          });
        });
      });
    });

    (0, _mocha.describe)('#error', function () {

      (0, _mocha.it)('should redirect to index page', function () {
        // given
        var route = this.subject();
        route.transitionTo = _sinon.default.spy();

        // when
        route.send('error');

        // then
        _sinon.default.assert.calledWith(route.transitionTo, 'index');
      });
    });
  });
});
define('pix-live/tests/unit/routes/board-test', ['chai', 'mocha', 'ember-mocha', 'sinon'], function (_chai, _mocha, _emberMocha, _sinon) {
  'use strict';

  (0, _mocha.describe)('Unit | Route | board', function () {

    (0, _emberMocha.setupTest)('route:board', {
      needs: ['service:current-routed-modal', 'service:session']
    });

    var findRecord = _sinon.default.stub();
    var route = void 0;

    (0, _mocha.beforeEach)(function () {

      this.register('service:store', Ember.Service.extend({
        findRecord: findRecord
      }));
      this.inject.service('store', { as: 'store' });
      this.register('service:session', Ember.Service.extend({
        data: { authenticated: { userId: 12, token: 'VALID-TOKEN' } }
      }));

      this.inject.service('session', { as: 'session' });
      route = this.subject();
      route.transitionTo = _sinon.default.spy();
    });

    (0, _mocha.it)('exists', function () {
      route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });

    (0, _mocha.it)('should correctly call the store', function () {
      // given
      findRecord.resolves();

      // when
      route.model();

      // then
      _sinon.default.assert.calledOnce(findRecord);
      _sinon.default.assert.calledWith(findRecord, 'user', 12);
    });

    (0, _mocha.it)('should return user first organization informations', function () {
      // given
      var firstOrganization = Ember.Object.create({ id: 1, snapshots: [] });
      var reloadStub = _sinon.default.stub();
      firstOrganization.get = _sinon.default.stub().returns({
        reload: reloadStub
      });
      var user = Ember.Object.create({ id: 1, organizations: [firstOrganization, { id: 2 }] });
      findRecord.resolves(user);

      // when
      var result = route.model();

      // then
      return result.then(function (model) {
        (0, _chai.expect)(model.organization.id).to.equal(1);
      });
    });

    (0, _mocha.it)('should return load snapshots every time with reload', function () {
      // given
      var firstOrganization = Ember.Object.create({ id: 1, snapshots: [] });
      var reloadStub = _sinon.default.stub();
      firstOrganization.get = _sinon.default.stub().returns({
        reload: reloadStub
      });

      var user = Ember.Object.create({ id: 1, organizations: [firstOrganization, { id: 2 }] });
      findRecord.resolves(user);

      // when
      var result = route.model();

      // then
      return result.then(function (model) {
        (0, _chai.expect)(model.organization.id).to.equal(1);
        _sinon.default.assert.calledWith(firstOrganization.get, 'snapshots');
        _sinon.default.assert.calledOnce(reloadStub);
      });
    });

    (0, _mocha.it)('should return url to download snapshots CSV', function () {
      // given
      var firstOrganization = Ember.Object.create({ id: 1, snapshots: [] });
      var reloadStub = _sinon.default.stub();
      _sinon.default.stub(firstOrganization, 'get').withArgs('id').returns(2).withArgs('snapshots').returns({
        reload: reloadStub
      });
      var user = Ember.Object.create({ id: 1, organizations: [firstOrganization, { id: 2 }] });
      findRecord.resolves(user);

      // when
      var result = route.model();

      // then
      return result.then(function (model) {
        (0, _chai.expect)(model.organization.id).to.equal(1);
        (0, _chai.expect)(model.organizationSnapshotsExportUrl).to.be.equal('http://localhost:3000/api/organizations/2/snapshots/export?userToken=VALID-TOKEN');
      });
    });

    (0, _mocha.it)('should return to home page if no user was found', function () {
      // given
      findRecord.rejects();

      // when
      var result = route.model();

      // then
      return result.then(function (_) {
        _sinon.default.assert.calledOnce(route.transitionTo);
        _sinon.default.assert.calledWith(route.transitionTo, 'index');
      });
    });

    (0, _mocha.it)('should return to /compte when the user has no organization', function () {
      // given
      var user = Ember.Object.create({ id: 1, organizations: [] });
      findRecord.resolves(user);

      // when
      var result = route.model();

      // then
      return result.then(function (_) {
        _sinon.default.assert.calledOnce(route.transitionTo);
        _sinon.default.assert.calledWith(route.transitionTo, 'compte');
      });
    });
  });
});
define('pix-live/tests/unit/routes/certification-course-test', ['chai', 'mocha', 'ember-mocha', 'sinon'], function (_chai, _mocha, _emberMocha, _sinon) {
  'use strict';

  (0, _mocha.describe)('Unit | Route | certification test', function () {
    (0, _emberMocha.setupTest)('route:certification-course', {
      needs: ['service:current-routed-modal', 'service:session']
    });

    var route = void 0;
    var findRecordStub = void 0;
    var createRecordStub = void 0;
    var storeStub = void 0;
    var certificationCourse = void 0;

    (0, _mocha.it)('exists', function () {
      route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });

    (0, _mocha.describe)('#model', function () {

      beforeEach(function () {
        findRecordStub = _sinon.default.stub().resolves();

        certificationCourse = { id: 1, save: _sinon.default.stub() };
        createRecordStub = _sinon.default.stub().returns(certificationCourse);

        storeStub = Ember.Service.extend({
          findRecord: findRecordStub,
          createRecord: createRecordStub
        });

        this.register('service:store', storeStub);
        this.inject.service('store', { as: 'store' });

        route = this.subject();
      });

      (0, _mocha.it)('should verify if the user is logged', function () {
        // when
        var promise = route.model({ code: '123456' });

        // then
        return promise.then(function () {
          _sinon.default.assert.called(findRecordStub);
        });
      });

      context('when user is logged', function () {

        (0, _mocha.it)('should generate certification test', function () {
          // when
          var promise = route.model({ code: '123456' });

          // then
          return promise.then(function () {
            _sinon.default.assert.called(createRecordStub);
            _sinon.default.assert.calledWithExactly(createRecordStub, 'certification-course', { sessionCode: '123456' });
          });
        });

        (0, _mocha.it)('should save certification test', function () {
          // when
          var promise = route.model({ code: '123456' });

          // then
          return promise.then(function () {
            _sinon.default.assert.called(certificationCourse.save);
          });
        });
      });
    });

    (0, _mocha.describe)('#error', function () {

      (0, _mocha.it)('should redirect to index', function () {
        // given
        route.transitionTo = _sinon.default.stub();

        // when
        route.send('error');

        // then
        _sinon.default.assert.called(route.transitionTo);
        _sinon.default.assert.calledWith(route.transitionTo, 'index');
      });
    });
  });
});
define('pix-live/tests/unit/routes/certifications/results-test', ['chai', 'mocha', 'ember-mocha', 'sinon'], function (_chai, _mocha, _emberMocha, _sinon) {
  'use strict';

  (0, _mocha.describe)('Unit | Route | Certifications | Results', function () {

    (0, _emberMocha.setupTest)('route:certifications.results', {
      needs: ['service:current-routed-modal', 'service:session']
    });
    var params = {
      certification_number: 'certification_number'
    };

    (0, _mocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });

    (0, _mocha.describe)('model', function () {

      var route = void 0;
      var storeStub = void 0;
      var findRecordStub = void 0;

      (0, _mocha.beforeEach)(function () {
        findRecordStub = _sinon.default.stub();
        storeStub = Ember.Service.extend({
          findRecord: findRecordStub
        });
        this.register('service:store', storeStub);
        this.inject.service('store', { as: 'store' });
      });

      context('When no user is logged', function () {

        (0, _mocha.beforeEach)(function () {
          this.register('service:session', Ember.Service.extend({
            isAuthenticated: false
          }));
          this.inject.service('session', { as: 'session' });

          route = this.subject();
          route.transitionTo = _sinon.default.stub();
        });

        (0, _mocha.it)('should redirect to logout', function () {
          // Given
          findRecordStub.rejects();
          // When
          var promise = route.model(params);

          // Then
          return promise.then(function () {
            _sinon.default.assert.calledWith(findRecordStub, 'user', undefined, { reload: true });
            _sinon.default.assert.calledWith(route.transitionTo, 'logout');
          });
        });
      });

      context('When user is logged', function () {

        (0, _mocha.beforeEach)(function () {
          this.register('service:session', Ember.Service.extend({
            isAuthenticated: true,
            data: {
              authenticated: {
                userId: 1435
              }
            }
          }));
          this.inject.service('session', { as: 'session' });

          route = this.subject();
          route.transitionTo = _sinon.default.stub();
        });

        (0, _mocha.it)('should find logged user details', function () {
          // Given
          var expectedUser = {};
          findRecordStub.resolves(expectedUser);

          // When
          var promise = route.model(params);

          // Then
          return promise.then(function (model) {
            _sinon.default.assert.calledWith(findRecordStub, 'user', 1435, { reload: true });
            (0, _chai.expect)(model.user).to.equal(expectedUser);
          });
        });
      });
    });
  });
});
define('pix-live/tests/unit/routes/certifications/resume-test', ['mocha', 'ember-mocha', 'sinon'], function (_mocha, _emberMocha, _sinon) {
  'use strict';

  (0, _mocha.describe)('Unit | Route | Certification | resume', function () {
    (0, _emberMocha.setupTest)('route:certifications.resume', {
      needs: ['service:current-routed-modal']
    });

    var route = void 0;
    var StoreStub = void 0;
    var findRecordStub = void 0;
    var queryRecordStub = void 0;
    var certificationCourseId = 'certification_course_id';
    var assessmentId = 'assessment_id';

    beforeEach(function () {
      // define stubs
      findRecordStub = _sinon.default.stub();
      queryRecordStub = _sinon.default.stub();
      StoreStub = Ember.Service.extend({
        findRecord: findRecordStub,
        queryRecord: queryRecordStub
      });

      // manage dependency injection context
      this.register('service:store', StoreStub);
      this.inject.service('store', { as: 'store' });

      // instance route object
      route = this.subject();
      route.transitionTo = _sinon.default.stub();
    });

    (0, _mocha.describe)('#model', function () {

      (0, _mocha.it)('should fetch a certification', function () {
        // given
        var params = { certification_course_id: certificationCourseId };
        route.get('store').findRecord.resolves();

        // when
        var promise = route.model(params);

        // then
        return promise.then(function () {
          _sinon.default.assert.calledOnce(findRecordStub);
          _sinon.default.assert.calledWith(findRecordStub, 'certification-course', certificationCourseId);
        });
      });
    });

    (0, _mocha.describe)('#afterModel', function () {

      var assessment = Ember.Object.create({ id: assessmentId });
      var certification = Ember.Object.create({ id: certificationCourseId, assessment: assessment });

      (0, _mocha.it)('should get the next challenge of the assessment', function () {
        // given
        queryRecordStub.resolves();

        // when
        var promise = route.afterModel(certification);

        // then
        return promise.then(function () {
          _sinon.default.assert.calledOnce(queryRecordStub);
          _sinon.default.assert.calledWith(queryRecordStub, 'challenge', { assessmentId: assessmentId });
        });
      });

      context('when the next challenge exists', function () {

        (0, _mocha.it)('should redirect to the challenge view', function () {
          // given
          var nextChallenge = Ember.Object.create({ id: 456 });
          queryRecordStub.resolves(nextChallenge);

          // when
          var promise = route.afterModel(certification);

          // then
          return promise.then(function () {
            _sinon.default.assert.calledOnce(route.transitionTo);
            _sinon.default.assert.calledWith(route.transitionTo, 'assessments.challenge', assessmentId, 456);
          });
        });
      });

      context('when the next challenge does not exist (is null)', function () {

        (0, _mocha.it)('should redirect to certification results page', function () {
          // given
          queryRecordStub.rejects();

          // when
          var promise = route.afterModel(certification);

          // then
          return promise.then(function () {
            _sinon.default.assert.calledOnce(route.transitionTo);
            _sinon.default.assert.calledWith(route.transitionTo, 'certifications.results', certificationCourseId);
          });
        });
      });
    });

    (0, _mocha.describe)('#error', function () {

      (0, _mocha.it)('should redirect to index page', function () {
        // given
        var route = this.subject();
        route.transitionTo = _sinon.default.spy();

        // when
        route.send('error');

        // then
        _sinon.default.assert.calledWith(route.transitionTo, 'index');
      });
    });
  });
});
define('pix-live/tests/unit/routes/challenges/preview-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Route | challenges-preview', function () {

    (0, _emberMocha.setupTest)('route:challenge-preview', {
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
define('pix-live/tests/unit/routes/compte-test', ['chai', 'mocha', 'ember-mocha', 'sinon'], function (_chai, _mocha, _emberMocha, _sinon) {
  'use strict';

  (0, _mocha.describe)('Unit | Route | compte', function () {
    (0, _emberMocha.setupTest)('route:compte', {
      needs: ['service:current-routed-modal', 'service:session']
    });

    (0, _mocha.it)('should redirect to / (Home)', function () {
      // Given
      var route = this.subject();

      // Then
      (0, _chai.expect)(route.authenticationRoute).to.equal('/connexion');
    });

    (0, _mocha.describe)('model', function () {

      var storyStub = void 0;
      var findRecordStub = void 0;

      (0, _mocha.before)(function () {
        findRecordStub = _sinon.default.stub();
        storyStub = Ember.Service.extend({
          findRecord: findRecordStub
        });
      });

      (0, _mocha.it)('should redirect to logout when unable to find user details', function () {
        // Given
        this.register('service:store', storyStub);
        this.inject.service('store', { as: 'store' });

        findRecordStub.rejects();
        var route = this.subject();
        route.transitionTo = _sinon.default.stub();

        // When
        var promise = route.model();

        // Then
        return promise.catch(function () {
          _sinon.default.assert.calledWith(route.transitionTo, 'logout');
        });
      });

      (0, _mocha.it)('should redirect to /board when the user as an organization', function () {
        // Given
        var linkedOrganization = Ember.Object.create({ id: 1 });
        var foundUser = Ember.Object.create({ organizations: [linkedOrganization] });

        this.register('service:store', storyStub);
        this.inject.service('store', { as: 'store' });

        findRecordStub.resolves(foundUser);
        var route = this.subject();
        route.transitionTo = _sinon.default.stub();

        // When
        var promise = route.model();

        // Then
        return promise.then(function () {
          _sinon.default.assert.calledWith(route.transitionTo, 'board');
        });
      });

      (0, _mocha.it)('should remain on /compte when the user as no organization linked (with a forced data reload)', function () {
        // Given
        var foundUser = Ember.Object.create({});

        this.register('service:store', storyStub);
        this.inject.service('store', { as: 'store' });

        findRecordStub.resolves(foundUser);
        var route = this.subject();
        route.transitionTo = _sinon.default.stub();

        // When
        var promise = route.model();

        // Then
        return promise.then(function () {
          _sinon.default.assert.notCalled(route.transitionTo);
          _sinon.default.assert.calledWith(findRecordStub, 'user', undefined, { reload: true });
        });
      });
    });

    (0, _mocha.describe)('#searchForOrganization', function () {

      var storeQueryStub = void 0;
      var storeStub = void 0;
      var organizations = void 0;
      var organizationCollectionStub = void 0;

      beforeEach(function () {
        organizationCollectionStub = _sinon.default.stub();
        organizations = { get: organizationCollectionStub, content: [{}] };

        storeQueryStub = _sinon.default.stub().resolves(organizations);
        storeStub = Ember.Service.extend({
          query: storeQueryStub
        });
      });

      (0, _mocha.it)('should search for an organization', function () {
        // Given
        this.register('service:store', storeStub);
        this.inject.service('store', { as: 'store' });

        var route = this.subject();

        // When
        route.actions.searchForOrganization.call(route, 'RVSG44');

        // Then
        _sinon.default.assert.calledOnce(storeQueryStub);
        _sinon.default.assert.calledWith(storeQueryStub, 'organization', {
          filter: {
            code: 'RVSG44'
          }
        });
      });

      (0, _mocha.describe)('when there is only one result', function () {
        (0, _mocha.it)('should return the organization', function () {
          // Given
          organizationCollectionStub.returns('THE FIRST OBJECT');

          this.register('service:store', storeStub);
          this.inject.service('store', { as: 'store' });
          var route = this.subject();

          // When
          var routeActionResult = route.actions.searchForOrganization.call(route, 'RVSG44');

          return routeActionResult.then(function (organization) {
            (0, _chai.expect)(organization).to.equal('THE FIRST OBJECT');
          });
        });
      });

      (0, _mocha.describe)('when there is no organization found', function () {
        (0, _mocha.it)('should null', function () {
          // Given
          organizations.content = [];
          organizationCollectionStub.returns('THE FIRST OBJECT');

          this.register('service:store', storeStub);
          this.inject.service('store', { as: 'store' });
          var route = this.subject();

          // When
          var routeActionResult = route.actions.searchForOrganization.call(route, 'RVSG44');

          return routeActionResult.then(function (organization) {
            (0, _chai.expect)(organization).to.equal(null);
          });
        });
      });
    });

    (0, _mocha.describe)('#shareProfileSnapshot', function () {

      var storeStub = void 0;
      var storeCreateRecordStub = void 0;
      var storeSaveStub = void 0;
      var organization = void 0;

      beforeEach(function () {
        storeSaveStub = _sinon.default.stub().resolves();
        organization = Ember.Object.create({ id: 1234, name: 'ACME', code: 'RVSG44', save: storeSaveStub });
        storeCreateRecordStub = _sinon.default.stub().returns(organization);
        storeStub = Ember.Service.extend({
          createRecord: storeCreateRecordStub
        });
      });

      (0, _mocha.it)('should create and save a new Snapshot', function () {
        // given
        this.register('service:store', storeStub);
        this.inject.service('store', { as: 'store' });
        var route = this.subject();

        // when
        var promise = route.actions.shareProfileSnapshot.call(route, organization);

        // then
        return promise.then(function () {
          _sinon.default.assert.called(storeCreateRecordStub);
          _sinon.default.assert.called(storeSaveStub);
        });
      });
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
define('pix-live/tests/unit/routes/enrollment-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Route | enrollment', function () {
    (0, _emberMocha.setupTest)('route:enrollment', {
      needs: ['service:panelActions', 'service:current-routed-modal']
    });

    (0, _mocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/routes/index-test', ['chai', 'mocha', 'ember-mocha', 'sinon'], function (_chai, _mocha, _emberMocha, _sinon) {
  'use strict';

  (0, _mocha.describe)('Unit | Route | index', function () {

    (0, _emberMocha.setupTest)('route:index', {
      needs: ['service:current-routed-modal', 'service:session']
    });

    (0, _mocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });

    (0, _mocha.describe)('when the user is not logged id', function () {

      (0, _mocha.it)('should leave the user on the current location', function () {
        // Given
        this.register('service:session', Ember.Service.extend({ isAuthenticated: false }));
        this.inject.service('session', { as: 'session' });

        var route = this.subject();
        route.transitionTo = _sinon.default.stub();

        // When
        route.beforeModel();

        // Then
        _sinon.default.assert.notCalled(route.transitionTo);
      });
    });

    (0, _mocha.describe)('when the user is authenticated', function () {

      var storeServiceStub = void 0;

      beforeEach(function () {

        storeServiceStub = {
          findRecord: _sinon.default.stub().resolves(Ember.Object.create({ organizations: [] }))
        };
        this.register('service:store', Ember.Service.extend(storeServiceStub));
        this.inject.service('store', { as: 'store' });

        this.register('service:session', Ember.Service.extend({
          isAuthenticated: true,
          data: {
            authenticated: {
              userId: 1435
            }
          }
        }));
        this.inject.service('session', { as: 'session' });
      });

      (0, _mocha.it)('should redirect the user somewhere else', function () {
        // Given
        var route = this.subject();
        route.transitionTo = _sinon.default.stub();

        // When
        var promise = route.beforeModel();

        // Then
        return promise.then(function () {
          _sinon.default.assert.calledOnce(route.transitionTo);
        });
      });

      (0, _mocha.it)('should redirect the user to /compte by default', function () {
        // Given
        var route = this.subject();
        route.transitionTo = _sinon.default.stub();

        // When
        var promise = route.beforeModel();

        // Then
        return promise.then(function () {
          _sinon.default.assert.calledWith(route.transitionTo, 'compte');
        });
      });

      (0, _mocha.it)('should load user details from the store', function () {
        var route = this.subject();
        route.transitionTo = _sinon.default.stub();

        // When
        var promise = route.beforeModel();

        // Then
        return promise.then(function () {
          _sinon.default.assert.calledOnce(storeServiceStub.findRecord);
          _sinon.default.assert.calledWith(storeServiceStub.findRecord, 'user', 1435);
        });
      });

      (0, _mocha.it)('should redirect to board when the user is linked to an organization', function () {
        // Given
        storeServiceStub.findRecord.resolves(Ember.Object.create({
          organizations: [Ember.Object.create()]
        }));

        var route = this.subject();
        route.transitionTo = _sinon.default.stub();

        // When
        var promise = route.beforeModel();

        // Then
        return promise.then(function () {
          _sinon.default.assert.calledWith(route.transitionTo, 'board');
        });
      });

      (0, _mocha.it)('should redirect to logout when we cannot retrieve user informations', function () {
        // Given
        storeServiceStub.findRecord.rejects();
        var route = this.subject();
        route.transitionTo = _sinon.default.stub();

        // When
        var promise = route.beforeModel();

        // Then
        return promise.then(function () {
          _sinon.default.assert.calledOnce(route.transitionTo);
          _sinon.default.assert.calledWith(route.transitionTo, 'logout');
        });
      });
    });
  });
});
define('pix-live/tests/unit/routes/inscription-test', ['chai', 'mocha', 'ember-mocha', 'sinon'], function (_chai, _mocha, _emberMocha, _sinon) {
  'use strict';

  (0, _mocha.describe)('Unit | Route | inscription', function () {
    (0, _emberMocha.setupTest)('route:inscription', {
      needs: ['service:current-routed-modal', 'service:session']
    });

    (0, _mocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });

    (0, _mocha.it)('should automatically redirect authenticated user to compte page', function () {
      // Given
      var expectedEmail = 'email@example.net';
      var expectedPassword = 'Azertya1!';
      var authenticateStub = _sinon.default.stub().resolves();
      var queryRecordStub = _sinon.default.stub().resolves();
      var sessionStub = { authenticate: authenticateStub };
      var storeStub = { queryRecord: queryRecordStub };

      var route = this.subject();
      route.transitionTo = _sinon.default.stub();
      route.set('session', sessionStub);
      route.set('store', storeStub);

      // When
      var promise = route.actions.redirectToProfileRoute.call(route, {
        email: expectedEmail,
        password: expectedPassword
      });

      return promise.then(function () {
        // Then
        _sinon.default.assert.calledWith(authenticateStub, 'authenticator:simple', expectedEmail, expectedPassword);
        _sinon.default.assert.calledWith(queryRecordStub, 'user', {});
        _sinon.default.assert.calledWith(route.transitionTo, 'compte');
      });
    });
  });
});
define('pix-live/tests/unit/routes/legal-notices-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Route | legal notices', function () {
    (0, _emberMocha.setupTest)('route:legal-notices', {
      // Specify the other units that are required for this test.
      // needs: ['controller:foo']
      needs: ['service:current-routed-modal']
    });

    (0, _mocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/routes/login-test', ['mocha', 'ember-mocha', 'sinon'], function (_mocha, _emberMocha, _sinon) {
  'use strict';

  (0, _mocha.describe)('Unit | Route | login page', function () {
    (0, _emberMocha.setupTest)('route:login', {
      needs: ['service:current-routed-modal', 'service:session']
    });

    var authenticatedStub = _sinon.default.stub();
    var queryRecordStub = _sinon.default.stub();
    var expectedEmail = 'email@example.net';
    var expectedPassword = 'azerty';

    (0, _mocha.beforeEach)(function () {
      this.register('service:session', Ember.Service.extend({
        authenticate: authenticatedStub
      }));
      this.inject.service('session', { as: 'session' });

      this.register('service:store', Ember.Service.extend({
        queryRecord: queryRecordStub
      }));
      this.inject.service('store', { as: 'store' });
    });

    (0, _mocha.it)('should authenticate the user', function () {
      // Given
      authenticatedStub.resolves();

      var foundUser = Ember.Object.create({ id: 12 });
      queryRecordStub.resolves(foundUser);
      var route = this.subject();
      route.transitionTo = function () {};

      // When
      var promise = route.actions.signin.call(route, expectedEmail, expectedPassword);

      // Then
      return promise.then(function () {
        _sinon.default.assert.calledWith(authenticatedStub, 'authenticator:simple', expectedEmail, expectedPassword);
      });
    });

    (0, _mocha.describe)('Route behavior according to organization belong status (authenticated user)', function () {

      (0, _mocha.it)('should redirect to /compte, when user is not linked to an Organization', function () {
        //Given
        var route = this.subject();
        authenticatedStub.resolves();

        var foundUser = Ember.Object.create({ id: 12 });
        queryRecordStub.resolves(foundUser);

        route.transitionTo = _sinon.default.stub();

        //When
        var promise = route.actions.signin.call(route, expectedEmail, expectedPassword);

        return promise.then(function () {
          //Then
          _sinon.default.assert.calledWith(route.transitionTo, 'compte');
        });
      });

      (0, _mocha.it)('should redirect to /board, when user is linked to an Organization', function () {
        //Given
        var route = this.subject();
        authenticatedStub.resolves();

        var linkedOrganization = Ember.Object.create({ id: 1 });
        var foundUser = Ember.Object.create({ organizations: [linkedOrganization] });
        queryRecordStub.resolves(foundUser);

        route.transitionTo = _sinon.default.stub();

        //When
        var promise = route.actions.signin.call(route, expectedEmail, expectedPassword);

        return promise.then(function () {
          //Then
          _sinon.default.assert.calledWith(route.transitionTo, 'board');
        });
      });
    });
  });
});
define('pix-live/tests/unit/routes/logout-test', ['sinon', 'mocha', 'ember-mocha'], function (_sinon, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Route | logout', function () {
    (0, _emberMocha.setupTest)('route:logout', {
      needs: ['service:current-routed-modal']
    });

    (0, _mocha.it)('should disconnect the user', function () {
      // Given
      var invalidateStub = _sinon.default.stub();
      this.register('service:session', Ember.Service.extend({ isAuthenticated: true, invalidate: invalidateStub }));
      this.inject.service('session', { as: 'session' });

      var route = this.subject();
      route.transitionTo = function () {};

      // When
      route.beforeModel();

      // Then
      _sinon.default.assert.calledOnce(invalidateStub);
    });

    (0, _mocha.it)('should redirect after disconnection', function () {
      // Given
      var invalidateStub = _sinon.default.stub();
      this.register('service:session', Ember.Service.extend({ isAuthenticated: true, invalidate: invalidateStub }));
      this.inject.service('session', { as: 'session' });

      var route = this.subject();
      route.transitionTo = _sinon.default.stub();

      // When
      route.beforeModel();

      // Then
      _sinon.default.assert.calledOnce(route.transitionTo);
      _sinon.default.assert.calledWith(route.transitionTo, '/');
    });

    (0, _mocha.it)('should redirect even if user was not authenticated', function () {
      // Given
      var invalidateStub = _sinon.default.stub();
      this.register('service:session', Ember.Service.extend({ isAuthenticated: false, invalidate: invalidateStub }));
      this.inject.service('session', { as: 'session' });

      var route = this.subject();
      route.transitionTo = _sinon.default.stub();

      // When
      route.beforeModel();

      // Then
      _sinon.default.assert.calledOnce(route.transitionTo);
      _sinon.default.assert.calledWith(route.transitionTo, '/');
    });
  });
});
define('pix-live/tests/unit/routes/password-reset-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Route | password reset', function () {
    (0, _emberMocha.setupTest)('route:password-reset-demand', {
      // Specify the other units that are required for this test.
      needs: ['service:current-routed-modal']
    });

    var route = void 0;

    beforeEach(function () {
      route = this.subject();
    });

    (0, _mocha.it)('exists', function () {
      (0, _chai.expect)(route).to.be.ok;
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
define('pix-live/tests/unit/routes/reset-password-demand-test', ['chai', 'mocha', 'ember-mocha', 'sinon'], function (_chai, _mocha, _emberMocha, _sinon) {
  'use strict';

  (0, _mocha.describe)('Unit | Route | changer mot de passe', function () {

    (0, _emberMocha.setupTest)('route:reset-password', {
      needs: ['service:session', 'service:current-routed-modal']
    });

    (0, _mocha.describe)('Route behavior', function () {

      var storeStub = void 0;
      var findRecordStub = void 0;
      var params = {
        temporaryKey: 'pwd-reset-demand-token'
      };
      var transitionToStub = _sinon.default.stub();

      (0, _mocha.beforeEach)(function () {
        findRecordStub = _sinon.default.stub();
        storeStub = Ember.Service.extend({
          findRecord: findRecordStub
        });

        this.register('service:store', storeStub);
        this.inject.service('store', { as: 'store' });
      });

      (0, _mocha.it)('should exists', function () {
        // when
        var route = this.subject();

        // then
        (0, _chai.expect)(route).to.be.ok;
      });

      (0, _mocha.it)('should ask password reset demand validity', function () {
        // given
        findRecordStub.resolves();
        var route = this.subject();

        // when
        var promise = route.model(params);

        // then
        return promise.then(function () {
          _sinon.default.assert.calledOnce(findRecordStub);
          _sinon.default.assert.calledWith(findRecordStub, 'password-reset-demand', params.temporaryKey);
        });
      });

      (0, _mocha.describe)('when password reset demand is valid', function () {

        (0, _mocha.it)('should create a new ember user model with fetched data', function () {
          // given
          var fetchedOwnerDetails = {
            data: {
              id: 7,
              attributes: {
                email: 'pix@qmail.fr'
              }
            }
          };
          var expectedUser = {
            data: {
              id: 7,
              attributes: {
                email: 'pix@qmail.fr'
              }
            }
          };

          findRecordStub.resolves(fetchedOwnerDetails);
          var route = this.subject();

          // when
          var promise = route.model(params);

          // then
          return promise.then(function (user) {
            (0, _chai.expect)(user).to.eql(expectedUser);
          });
        });
      });

      (0, _mocha.describe)('When password reset demand is not valid', function () {

        (0, _mocha.it)('should redirect to home', function () {
          // given
          findRecordStub.rejects();
          var route = this.subject();
          route.set('transitionTo', transitionToStub);

          // when
          var promise = route.model(params);

          // then
          return promise.then(function () {
            _sinon.default.assert.calledOnce(transitionToStub);
            _sinon.default.assert.calledWith(transitionToStub, 'index');
          });
        });
      });
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
define('pix-live/tests/unit/routes/terms-of-service-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Route | terms of service', function () {
    (0, _emberMocha.setupTest)('route:terms-of-service', {
      // Specify the other units that are required for this test.
      needs: ['service:current-routed-modal']
    });

    (0, _mocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
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
define('pix-live/tests/unit/services/mail-generator-test', ['chai', 'mocha', 'ember-mocha', 'sinon'], function (_chai, _mocha, _emberMocha, _sinon) {
  'use strict';

  (0, _mocha.describe)('Unit | Service | mail generator', function () {
    (0, _emberMocha.setupTest)('service:mail-generator', {});

    // Replace this with your real tests.
    (0, _mocha.it)('exists', function () {
      var service = this.subject();
      (0, _chai.expect)(service).to.be.ok;
    });

    (0, _mocha.it)('should have a generateEmail function', function () {
      // Given
      var service = this.subject();

      // When
      (0, _chai.expect)(service).to.have.property('generateEmail').and.to.be.a('function');
    });

    (0, _mocha.describe)('#generateEmail', function () {
      var service = void 0;
      var clock = void 0;
      var februaryTheFifth = new Date(2017, 1, 5);

      beforeEach(function () {
        service = this.subject();
        clock = _sinon.default.useFakeTimers(februaryTheFifth);
      });

      afterEach(function () {
        clock.restore();
      });

      (0, _mocha.it)('when the environment is production', function () {
        // Given
        var host = 'pix.beta.gouv.fr';
        var env = 'production';

        // When
        var email = service.generateEmail('recigAYl5bl96WGXj', '267845', host, env);

        // Then
        (0, _chai.expect)(email).to.equal('recigAYl5bl96WGXj-267845-0502@pix-infra.ovh');
      });

      (0, _mocha.describe)('when the environment is integration ', function () {
        (0, _mocha.it)('it should add a label to the email', function () {
          // Given
          var env = 'integration';
          var branchName = 'ma-branche';
          var host = branchName + '.pix.beta.gouv.fr';

          // When
          var email = service.generateEmail('recigAYl5bl96WGXj', '267845', host, env);

          // Then
          (0, _chai.expect)(email).to.equal('recigAYl5bl96WGXj-267845-0502+ma-branche@pix-infra.ovh');
        });
      });

      (0, _mocha.describe)('when the environment is staging ', function () {
        (0, _mocha.it)('it should add a label to the email', function () {
          // Given
          var env = 'staging';
          var branchName = 'ma-branche';
          var host = branchName + '.pix.beta.gouv.fr';

          // When
          var email = service.generateEmail('recigAYl5bl96WGXj', '267845', host, env);

          // Then
          (0, _chai.expect)(email).to.equal('recigAYl5bl96WGXj-267845-0502+ma-branche@pix-infra.ovh');
        });
      });

      (0, _mocha.describe)('when the environment is development ', function () {
        (0, _mocha.it)('it should add a label to the email', function () {
          // Given
          var env = 'development';
          var host = 'localhost';

          // When
          var email = service.generateEmail('recigAYl5bl96WGXj', '267845', host, env);

          // Then
          (0, _chai.expect)(email).to.equal('recigAYl5bl96WGXj-267845-0502@localhost');
        });
      });
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

    (0, _mocha.describe)('Validation rules', function () {

      (0, _mocha.it)('should contain at least 8 characters:', function () {
        (0, _chai.expect)((0, _passwordValidator.default)('ABCD1234')).to.be.true;
        (0, _chai.expect)((0, _passwordValidator.default)('A1')).to.be.false;
      });

      (0, _mocha.it)('should contain at least one letter ', function () {
        (0, _chai.expect)((0, _passwordValidator.default)('ABCD1234')).to.be.true;
        (0, _chai.expect)((0, _passwordValidator.default)('12345678')).to.be.false;
      });

      (0, _mocha.it)('should contain at least one digit', function () {
        (0, _chai.expect)((0, _passwordValidator.default)('ABCD1234')).to.be.true;
        (0, _chai.expect)((0, _passwordValidator.default)('ABCDEFGH')).to.be.false;
      });
    });

    (0, _mocha.describe)('Invalid password', function () {
      ['', ' ', null, '@pix', '@pix.fr', '1      1', 'password', '12345678&', '+!@)-=`"#&', '+!@)-=`"#&1'].forEach(function (badPassword) {
        (0, _mocha.it)('should return false when password is invalid: ' + badPassword, function () {
          (0, _chai.expect)((0, _passwordValidator.default)(badPassword)).to.be.false;
        });
      });
    });

    (0, _mocha.describe)('Valid password', function () {
      ['PIXBETA1', 'PIXBETA12', 'NULLNULL1', '12345678a', '12345678ab', '12345678ab+', '12345678ab+!', '12345678ab+!@', '12345678ab+!@)-=`', '12345678ab+!@)-=`"', '12345678ab+!@)-=`"#&', '1234Password avec espace', '1A      A1', 'à1      '].forEach(function (validPassword) {
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

    var testData = [{ data: '', expected: [] }, { data: 'Text', expected: [{ text: 'Text' }] }, { data: 'Text test plop', expected: [{ text: 'Text test plop' }] }, { data: '${qroc}', expected: [{ input: 'qroc' }] }, { data: 'Test: ${test}', expected: [{ text: 'Test:' }, { input: 'test' }] }, { data: 'Test: ${test} (kilometres)', expected: [{ text: 'Test:' }, { input: 'test' }, { text: '(kilometres)' }] }, {
      data: '${plop}, ${plop} ${plop}',
      expected: [{ input: 'plop' }, { text: ',' }, { input: 'plop' }, { input: 'plop' }]
    }, { data: '${plop#var}', expected: [{ input: 'plop', placeholder: 'var' }] }, { data: 'line1\nline2', expected: [{ text: 'line1' }, { breakline: true }, { text: 'line2' }] }, { data: 'line1\r\nline2', expected: [{ text: 'line1' }, { breakline: true }, { text: 'line2' }] }, { data: 'line1\n\rline2', expected: [{ text: 'line1' }, { breakline: true }, { text: 'line2' }] }, { data: 'line1\n\nline2', expected: [{ text: 'line1' }, { breakline: true }, { text: 'line2' }] }];

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
    var testData = [{ when: 'Empty String', input: '', expected: [] }, { when: 'Wrong type as input', input: new Date(), expected: [] }, { when: 'Undefined input', input: undefined, expected: [] }, { when: 'Nominal case', input: '2,3', expected: [false, true, true] }, { when: 'Only one value', input: '4', expected: [false, false, false, true] }, {
      when: 'Resist to order, empty space and empty value',
      input: ',4, 2 , 2,1,  ,',
      expected: [true, true, false, true]
    }];

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
