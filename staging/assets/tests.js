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

    (0, _mocha.it)('2.1 la liste des tests apparaît', function () {
      (0, _chai.expect)(findWithAssert('.title').text()).to.contains('Liste des tests');
    });

    (0, _mocha.it)('2.2 on affiche autant de tests que remontés par AirTable', function () {
      (0, _chai.expect)(findWithAssert('.course')).to.have.lengthOf(6);
    });

    (0, _mocha.describe)('2.3 pour un test donné avec toutes les informations', function () {

      var $course = undefined;

      (0, _mocha.before)(function () {
        $course = find('.course[data-id="rec5duNNrPqbSzQ8o"]');
      });

      (0, _mocha.it)('2.3.1 on affiche son nom', function () {
        (0, _chai.expect)($course.find('.course-name').text()).to.contains('Test #1');
      });

      (0, _mocha.it)('2.3.2 on affiche sa description', function () {
        (0, _chai.expect)($course.find('.course-description').text()).to.contains('Libero eum excepturi');
      });

      (0, _mocha.it)('2.3.3 on affiche son image', function () {
        (0, _chai.expect)($course.find('img')[0].src).to.equal('https://dl.airtable.com/oLRaj7sTbCGzsLNwiur1_test1.png');
      });

      (0, _mocha.it)('2.3.4 on affiche un bouton "démarrer le test"', function () {
        (0, _chai.expect)($course.find('a.btn').text()).to.contains('Démarrer le test');
      });
    });

    (0, _mocha.it)('2.4 pour un test dont il manque l\'image, on affiche une image placeholder', function () {
      var $course = find('.course[data-id="recOouHLk00aMWJH2"]');
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
define('pix-live/tests/acceptance/3-demarrer-test-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  _mocha.describe.skip('Acceptance | 3 - démarrer un test', function () {
    var application = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
      server.createList('challenge', 5);
      server.create('course');
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.before)(function () {
      return visit('/home');
    });

    (0, _mocha.it)('3.0 démarrer  sur /home', function () {
      (0, _chai.expect)(currentPath()).to.equal('home');
    });

    (0, _mocha.it)('3.1 je peux lancer le test en cliquant sur “Démarrer le Test”', function () {
      findWithAssert(".course:nth(0) a");
      return click(".course:nth(0) a");
    });

    (0, _mocha.it)('3.2 je suis redirigé vers la première épreuve du test', function () {
      (0, _chai.expect)(currentURL()).to.contains('challenge');
      (0, _chai.expect)(findWithAssert('.course-progression').text()).to.contains('1 /');
    });
  });
});
define('pix-live/tests/acceptance/3-demarrer-test-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - acceptance/3-demarrer-test-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('acceptance/3-demarrer-test-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/acceptance/32-creer-une-epreuve-qcu-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  (0, _mocha.describe)('Acceptance | 32 - Créer une épreuve de type QCU', function () {

    var application = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.describe)('Prévisualiser une épreuve', function () {

      var challengeId = "recLt9uwa2dR3IYpi";

      (0, _mocha.before)(function () {
        return visit('/challenges/' + challengeId + '/preview');
      });

      (0, _mocha.it)('Il est possible de prévisualiser une épreuve en accédant à l\'URL /challenges/:id/preview', function () {
        (0, _chai.expect)(currentURL()).to.equal('/challenges/' + challengeId + '/preview');
      });

      (0, _mocha.describe)('les informations visibles sont :', function () {

        var $challenge = undefined;

        (0, _mocha.before)(function () {
          $challenge = findWithAssert('#challenge-preview');
        });

        (0, _mocha.it)('l\'identifiant de l\'épreuve', function () {
          (0, _chai.expect)($challenge.find('.title').text()).to.contains('Prévisualisation de l\'épreuve #' + challengeId);
        });

        (0, _mocha.it)('la consigne de l\'épreuve', function () {
          (0, _chai.expect)($challenge.find('.challenge-instruction').text()).to.contains('Que peut-on dire des œufs de catégorie A ?');
        });

        (0, _mocha.it)('les propositions sous forme de boutons radio', function () {
          var $proposals = findWithAssert('.challenge-proposals input[type="radio"][name="proposals"]');
          (0, _chai.expect)($proposals).to.have.lengthOf(5);
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
define('pix-live/tests/acceptance/4-demarrer-epreuve-test', ['exports', 'mocha', 'chai', 'pix-live/tests/helpers/start-app', 'pix-live/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _pixLiveTestsHelpersStartApp, _pixLiveTestsHelpersDestroyApp) {

  _mocha.describe.skip('Acceptance: 4-DemarrerEpreuve', function () {
    var application = undefined;
    var assessment = undefined;
    var challenge = undefined;

    (0, _mocha.before)(function () {
      application = (0, _pixLiveTestsHelpersStartApp['default'])();
      assessment = server.create('assessment');
      challenge = assessment.challenges.models[0];
    });

    (0, _mocha.after)(function () {
      (0, _pixLiveTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.before)(function () {
      return visit('/challenges/' + challenge.id);
    });

    /* US4 CA:
      1. La zone de consigne s'affiche (texte simple)
      2. La zone de réponse s'affiche
      3. L'intitulé du test est rappelé
      4. L'état d'avancement dans le test est visible (# épreuve / # total d'épreuves)
      5. Deux boutons s'affichent : "Passer" ; "Valider" (UX: attention à l'affordance, passer ne valide pas les réponses)
    */

    (0, _mocha.it)('4.0 doit être sur l\'URL /challenges/:id', function () {
      (0, _chai.expect)(currentURL()).to.equal('/challenges/' + challenge.id);
    });

    (0, _mocha.it)('4.1 affiche la zone de consigne', function () {
      (0, _chai.expect)(find('.challenge-instruction').text()).to.contains(challenge.attrs.instruction);
    });

    (0, _mocha.it)('4.2 affiche la zone de réponse', function () {
      (0, _chai.expect)(find('.challenge-answer').text()).to.contains('Réponse');
    });

    (0, _mocha.it)('4.3 rappelle l\'intitulé du test', function () {
      (0, _chai.expect)(find('.course-name').text()).to.contains(assessment.course.attrs.name);
    });

    (0, _mocha.it)("4.4 affiche l'état d'avancement du test", function () {
      (0, _chai.expect)(find('.course-progression').text()).to.contains('Épreuve 1 / ' + assessment.challenges.models.length);
    });

    (0, _mocha.it)("4.5 affiche les deux boutons Passer et Valider", function () {
      (0, _chai.expect)(find('.action-skip').text()).to.eq('Passer');
      (0, _chai.expect)(find('.action-validate').text()).to.eq('Valider');
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
define('pix-live/tests/components/app-footer.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - components/app-footer.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('components/app-footer.js should pass ESLint.\n');
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
define('pix-live/tests/controllers/challenge-show.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - controllers/challenge-show.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('controllers/challenge-show.js should pass ESLint.\n');
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
define('pix-live/tests/helpers/ember-cli-mocha-reporter', ['exports', 'pix-live/tests/helpers/monkey-patch-mocha'], function (exports, _pixLiveTestsHelpersMonkeyPatchMocha) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    // apparently Sinon can mess with the Date constructor
    var OriginalDate = Date;

    function hasQueryParam(name) {
        var result = Url.queryString(name);
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

            if (options && hasQueryParam('no_try_catch')) {
                options.allowUncaught = true;
                (0, _pixLiveTestsHelpersMonkeyPatchMocha['default'])();
            }
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

                $('#test-title').text(document.title).on('click', function (e) {
                    e.preventDefault();
                    if (Url.queryString("grep")) {
                        Url.updateSearchParam("grep");
                        window.location.reload();
                    }
                });

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
                        Url.updateSearchParam("coverage", 'true');
                        Url.updateSearchParam("no_try_catch");
                        this.$noTryCatch.attr('checked', false);
                        window.location.reload();
                    }
                } else {
                    if (hasQueryParam('coverage')) {
                        Url.updateSearchParam("coverage");
                        window.location.reload();
                    }
                }
            }
        }, {
            key: 'updateNoTryCatch',
            value: function updateNoTryCatch() {
                if (this.$stats.find('#no-try-catch').is(':checked')) {
                    if (!hasQueryParam('no_try_catch')) {
                        Url.updateSearchParam("no_try_catch", 'true');
                        Url.updateSearchParam("coverage");
                        this.$coverage.attr('checked', false);
                        window.location.reload();
                    }
                } else {
                    if (hasQueryParam('no_try_catch')) {
                        Url.updateSearchParam("no_try_catch");
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
                groupDescribes('ESLint');
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

                // fixme: horrendously ugly workaround for double-escaping happening in
                // bower_components/blanket/dist/{mocha,qunit}/blanket.js
                $blanket.find('.bl-source > div').contents().filter(function () {
                    return this.nodeType === 3;
                }).each(function (index, element) {
                    element.nodeValue = element.nodeValue.replace(/&dollar;/g, '$').replace(/&grave;/g, '`').replace(/&apos;/g, "'").replace(/&quot;/g, '"').replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&amp;/g, '&');
                });

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

            var _suiteTitle$match = suiteTitle.match('^' + linter + ' [\\|-] (.*)$');

            var _suiteTitle$match2 = _slicedToArray(_suiteTitle$match, 2);

            var fileName = _suiteTitle$match2[1];

            var $test = $suite.find('.test');

            $test.find('.title').text(fileName);

            $test.find('pre:eq(1)').hide();

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

/* global $, Date, Url */
define('pix-live/tests/helpers/monkey-patch-mocha', ['exports'], function (exports) {
    /* global Mocha, mocha, chai */

    exports['default'] = function () {
        Mocha.Runnable.prototype.run = function (fn) {
            var self = this;
            var start = new Date();
            var ctx = this.ctx;
            var finished;
            var emitted;

            // Sometimes the ctx exists, but it is not runnable
            if (ctx && ctx.runnable) {
                ctx.runnable(this);
            }

            // called multiple times
            function multiple(err) {
                if (emitted) {
                    return;
                }
                emitted = true;
                self.emit('error', err || new Error('done() called multiple times; stacktrace may be inaccurate'));
            }

            // finished
            function done(err) {
                var ms = self.timeout();
                if (self.timedOut) {
                    return;
                }
                if (finished) {
                    return multiple(err || self._trace);
                }

                self.clearTimeout();
                self.duration = new Date() - start;
                finished = true;
                if (!err && self.duration > ms && self._enableTimeouts) {
                    err = new Error('timeout of ' + ms + 'ms exceeded. Ensure the done() callback is being called in this test.');
                }
                fn(err);
            }

            // for .resetTimeout()
            this.callback = done;

            // explicit async with `done` argument
            if (this.async) {
                this.resetTimeout();

                if (this.allowUncaught) {
                    return callFnAsync(this.fn);
                }
                try {
                    callFnAsync(this.fn);
                } catch (err) {
                    done(Mocha.utils.getError(err));
                }
                return;
            }

            if (this.allowUncaught) {
                callFn(this.fn);
                done();
                return;
            }

            // sync or promise-returning
            try {
                if (this.pending) {
                    done();
                } else {
                    callFn(this.fn);
                }
            } catch (err) {
                done(Mocha.utils.getError(err));
            }

            function callFn(fn) {
                var result = fn.call(ctx);
                if (result && typeof result.then === 'function') {
                    self.resetTimeout();
                    result.then(function () {
                        done();
                        // Return null so libraries like bluebird do not warn about
                        // subsequently constructed Promises.
                        return null;
                    }, function (reason) {
                        done(reason || new Error('Promise rejected with no or falsy reason'));
                    });
                } else {
                    if (self.asyncOnly) {
                        return done(new Error('--async-only option in use without declaring `done()` or returning a promise'));
                    }

                    done();
                }
            }

            function callFnAsync(fn) {
                fn.call(ctx, function (err) {
                    if (err instanceof Error || Object.prototype.toString.call(err) === '[object Error]') {
                        if (mocha.options.allowUncaught && !(err instanceof chai.AssertionError)) {
                            throw err;
                        }
                        return done(err);
                    }
                    if (err) {
                        if (Object.prototype.toString.call(err) === '[object Object]') {
                            return done(new Error('done() invoked with non-Error: ' + JSON.stringify(err)));
                        }
                        return done(new Error('done() invoked with non-Error: ' + err));
                    }
                    done();
                });
            }
        };
    };
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
define('pix-live/tests/routes/assessment-create.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - routes/assessment-create.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('routes/assessment-create.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/routes/challenge-show.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - routes/challenge-show.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('routes/challenge-show.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/routes/challenges/preview.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - routes/challenges/preview.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('routes/challenges/preview.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/routes/courses.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - routes/courses.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('routes/courses.js should pass ESLint.\n');
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
define('pix-live/tests/test-helper', ['exports', 'pix-live/tests/helpers/resolver', 'ember-mocha', 'pix-live/tests/helpers/ember-cli-mocha-reporter'], function (exports, _pixLiveTestsHelpersResolver, _emberMocha, _pixLiveTestsHelpersEmberCliMochaReporter) {

  mocha.reporter(_pixLiveTestsHelpersEmberCliMochaReporter['default']);
  (0, _emberMocha.setResolver)(_pixLiveTestsHelpersResolver['default']);
});
/* globals mocha */
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
define('pix-live/tests/unit/controllers/challenge-show-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeModule)('controller:challenge-show', 'ChallengeShowController', {
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
define('pix-live/tests/unit/controllers/challenge-show-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/controllers/challenge-show-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/controllers/challenge-show-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/unit/models/challenge-test', ['exports', 'chai', 'ember-mocha', 'mocha'], function (exports, _chai, _emberMocha, _mocha) {

  (0, _emberMocha.describeModel)('challenge', 'Unit | Model | challenge', {
    needs: ['model:assessment']
  }, function () {
    (0, _emberMocha.it)('exists', function () {
      var model = this.subject();
      (0, _chai.expect)(model).to.be.ok;
    });

    (0, _mocha.describe)('#proposalsAsArray', function () {

      function getProposalsAsArray(subject) {
        return subject.get('proposalsAsArray');
      }

      (0, _emberMocha.it)('"" retourne []', function () {
        (0, _chai.expect)(getProposalsAsArray(this.subject({ proposals: '' }))).to.be.empty;
      });

      (0, _emberMocha.it)('"malformed proposals" retourne []', function () {
        (0, _chai.expect)(getProposalsAsArray(this.subject({ proposals: 'foo' }))).to.be.empty;
      });

      (0, _emberMocha.it)('"- foo", retourne ["foo"] ', function () {
        (0, _chai.expect)(getProposalsAsArray(this.subject({ proposals: '- foo' }))).to.deep.equal(['foo']);
      });

      (0, _emberMocha.it)('"- foo\\n- bar", retourne ["foo", "bar"] ', function () {
        (0, _chai.expect)(getProposalsAsArray(this.subject({ proposals: '- foo\n- bar' }))).to.deep.equal(['foo', 'bar']);
      });

      (0, _emberMocha.it)('"- cerf-volant", retourne ["cerf-volant"] ', function () {
        (0, _chai.expect)(getProposalsAsArray(this.subject({ proposals: '- cerf-volant' }))).to.deep.equal(['cerf-volant']);
      });

      (0, _emberMocha.it)('"- shi\\n- foo mi", retourne ["shi", "foo mi"] ', function () {
        (0, _chai.expect)(getProposalsAsArray(this.subject({ proposals: '- shi\n- foo mi' }))).to.deep.equal(['shi', 'foo mi']);
      });

      (0, _emberMocha.it)('"- joli\\n- cerf-volant", retourne ["joli", "cerf-volant"] ', function () {
        (0, _chai.expect)(getProposalsAsArray(this.subject({ proposals: '- joli\n- cerf-volant' }))).to.deep.equal(['joli', 'cerf-volant']);
      });

      (0, _emberMocha.it)('"-foo\\n-bar", retourne ["foo", "bar"] ', function () {
        (0, _chai.expect)(getProposalsAsArray(this.subject({ proposals: '-foo\n-bar' }))).to.deep.equal(['foo', 'bar']);
      });

      (0, _emberMocha.it)('"- shi\\n- foo\\n- mi", retourne ["shi", "foo", "mi"] ', function () {
        (0, _chai.expect)(getProposalsAsArray(this.subject({ proposals: '- shi\n- foo\n- mi' }))).to.deep.equal(['shi', 'foo', 'mi']);
      });

      (0, _emberMocha.it)('"-- foo", retourne ["- foo"] ', function () {
        (0, _chai.expect)(getProposalsAsArray(this.subject({ proposals: '-- foo' }))).to.deep.equal(['- foo']);
      });

      (0, _emberMocha.it)('"- foo\\n\\r\\t\n\\r\\t\\n\\r\\t\\n- bar", retourne ["foo", "bar"] ', function () {
        (0, _chai.expect)(getProposalsAsArray(this.subject({ proposals: '- foo\n\r\t\n\r\t\n\r\t\n- bar' }))).to.deep.equal(['foo', 'bar']);
      });
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
define('pix-live/tests/unit/models/course-test', ['exports', 'pix-live/tests/test-helper', 'chai', 'ember-mocha'], function (exports, _pixLiveTestsTestHelper, _chai, _emberMocha) {

  (0, _emberMocha.describeModel)('course', 'Unit | Model | course', function () {

    (0, _emberMocha.it)('exists', function () {
      var model = this.subject();
      (0, _chai.expect)(model).to.be.ok;
    });

    (0, _emberMocha.it)('should have a name', function () {
      var model = this.subject({ name: 'My super test' });
      (0, _chai.expect)(model.get('name')).to.equal('My super test');
    });

    (0, _emberMocha.it)('may have a description', function () {
      var model = this.subject({ description: '<p>Coucou les tests</p>' });
      (0, _chai.expect)(model.get('description')).to.equal('<p>Coucou les tests</p>');
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
define('pix-live/tests/unit/routes/challenge-show-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeModule)('route:challenge-show', 'Unit | Routes | challenge-show', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    (0, _emberMocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/routes/challenge-show-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/routes/challenge-show-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/routes/challenge-show-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/unit/routes/challenges/preview-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeModule)('route:challenges.preview', 'Unit | Route | challenges.preview', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    (0, _emberMocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/routes/challenges/preview-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/routes/challenges/preview-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/routes/challenges/preview-test.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/unit/routes/courses-test', ['exports', 'pix-live/tests/test-helper', 'chai', 'ember-mocha'], function (exports, _pixLiveTestsTestHelper, _chai, _emberMocha) {

  (0, _emberMocha.describeModule)('route:courses', 'Unit | Route | courses', function () {
    (0, _emberMocha.it)("exists", function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('pix-live/tests/unit/routes/courses-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/routes/courses-test.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('unit/routes/courses-test.js should pass ESLint.\n');
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
/* jshint ignore:start */

require('pix-live/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map