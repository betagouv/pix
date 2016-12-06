"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('pix-live/adapters/application', ['exports', 'ember-data', 'pix-live/config/environment'], function (exports, _emberData, _pixLiveConfigEnvironment) {
  exports['default'] = _emberData['default'].JSONAPIAdapter.extend({

    namespace: 'api',
    host: _pixLiveConfigEnvironment['default'].APP.API_HOST

  });
});
define('pix-live/app', ['exports', 'ember', 'pix-live/resolver', 'ember-load-initializers', 'pix-live/config/environment'], function (exports, _ember, _pixLiveResolver, _emberLoadInitializers, _pixLiveConfigEnvironment) {

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  var App = _ember['default'].Application.extend({
    modulePrefix: _pixLiveConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _pixLiveConfigEnvironment['default'].podModulePrefix,
    Resolver: _pixLiveResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _pixLiveConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('pix-live/components/app-header', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'header',
    router: _ember['default'].inject.service()
  });
});
define('pix-live/components/beta-logo', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    tagName: 'div',
    classNames: ['beta-logo']
  });
});
define('pix-live/components/bs-accordion-item', ['exports', 'ember-bootstrap/components/bs-accordion-item'], function (exports, _emberBootstrapComponentsBsAccordionItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordionItem['default'];
    }
  });
});
define('pix-live/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _emberBootstrapComponentsBsAccordion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordion['default'];
    }
  });
});
define('pix-live/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _emberBootstrapComponentsBsAlert) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAlert['default'];
    }
  });
});
define('pix-live/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _emberBootstrapComponentsBsButtonGroup) {
  exports['default'] = _emberBootstrapComponentsBsButtonGroup['default'];
});
define('pix-live/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _emberBootstrapComponentsBsButton) {
  exports['default'] = _emberBootstrapComponentsBsButton['default'];
});
define('pix-live/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _emberBootstrapComponentsBsCollapse) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsCollapse['default'];
    }
  });
});
define('pix-live/components/bs-dropdown-button', ['exports', 'ember-bootstrap/components/bs-dropdown-button'], function (exports, _emberBootstrapComponentsBsDropdownButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownButton['default'];
    }
  });
});
define('pix-live/components/bs-dropdown-menu', ['exports', 'ember-bootstrap/components/bs-dropdown-menu'], function (exports, _emberBootstrapComponentsBsDropdownMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownMenu['default'];
    }
  });
});
define('pix-live/components/bs-dropdown-toggle', ['exports', 'ember-bootstrap/components/bs-dropdown-toggle'], function (exports, _emberBootstrapComponentsBsDropdownToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownToggle['default'];
    }
  });
});
define('pix-live/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _emberBootstrapComponentsBsDropdown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdown['default'];
    }
  });
});
define('pix-live/components/bs-form-element', ['exports', 'ember-bootstrap/components/bs-form-element'], function (exports, _emberBootstrapComponentsBsFormElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElement['default'];
    }
  });
});
define('pix-live/components/bs-form-group', ['exports', 'ember-bootstrap/components/bs-form-group'], function (exports, _emberBootstrapComponentsBsFormGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormGroup['default'];
    }
  });
});
define('pix-live/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _emberBootstrapComponentsBsForm) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsForm['default'];
    }
  });
});
define('pix-live/components/bs-input', ['exports', 'ember-bootstrap/components/bs-input'], function (exports, _emberBootstrapComponentsBsInput) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsInput['default'];
    }
  });
});
define('pix-live/components/bs-modal-backdrop', ['exports', 'ember-bootstrap/components/bs-modal-backdrop'], function (exports, _emberBootstrapComponentsBsModalBackdrop) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalBackdrop['default'];
    }
  });
});
define('pix-live/components/bs-modal-body', ['exports', 'ember-bootstrap/components/bs-modal-body'], function (exports, _emberBootstrapComponentsBsModalBody) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalBody['default'];
    }
  });
});
define('pix-live/components/bs-modal-dialog', ['exports', 'ember-bootstrap/components/bs-modal-dialog'], function (exports, _emberBootstrapComponentsBsModalDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalDialog['default'];
    }
  });
});
define('pix-live/components/bs-modal-footer', ['exports', 'ember-bootstrap/components/bs-modal-footer'], function (exports, _emberBootstrapComponentsBsModalFooter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalFooter['default'];
    }
  });
});
define('pix-live/components/bs-modal-header', ['exports', 'ember-bootstrap/components/bs-modal-header'], function (exports, _emberBootstrapComponentsBsModalHeader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalHeader['default'];
    }
  });
});
define('pix-live/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _emberBootstrapComponentsBsModal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModal['default'];
    }
  });
});
define('pix-live/components/bs-nav-item', ['exports', 'ember-bootstrap/components/bs-nav-item'], function (exports, _emberBootstrapComponentsBsNavItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavItem['default'];
    }
  });
});
define('pix-live/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _emberBootstrapComponentsBsNav) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNav['default'];
    }
  });
});
define('pix-live/components/bs-navbar-content', ['exports', 'ember-bootstrap/components/bs-navbar-content'], function (exports, _emberBootstrapComponentsBsNavbarContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarContent['default'];
    }
  });
});
define('pix-live/components/bs-navbar-nav', ['exports', 'ember-bootstrap/components/bs-navbar-nav'], function (exports, _emberBootstrapComponentsBsNavbarNav) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarNav['default'];
    }
  });
});
define('pix-live/components/bs-navbar-toggle', ['exports', 'ember-bootstrap/components/bs-navbar-toggle'], function (exports, _emberBootstrapComponentsBsNavbarToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarToggle['default'];
    }
  });
});
define('pix-live/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _emberBootstrapComponentsBsNavbar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbar['default'];
    }
  });
});
define('pix-live/components/bs-progress-bar', ['exports', 'ember-bootstrap/components/bs-progress-bar'], function (exports, _emberBootstrapComponentsBsProgressBar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsProgressBar['default'];
    }
  });
});
define('pix-live/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _emberBootstrapComponentsBsProgress) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsProgress['default'];
    }
  });
});
define('pix-live/components/bs-select', ['exports', 'ember-bootstrap/components/bs-select'], function (exports, _emberBootstrapComponentsBsSelect) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsSelect['default'];
    }
  });
});
define('pix-live/components/bs-tab-pane', ['exports', 'ember-bootstrap/components/bs-tab-pane'], function (exports, _emberBootstrapComponentsBsTabPane) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTabPane['default'];
    }
  });
});
define('pix-live/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _emberBootstrapComponentsBsTab) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTab['default'];
    }
  });
});
define('pix-live/components/bs-textarea', ['exports', 'ember-bootstrap/components/bs-textarea'], function (exports, _emberBootstrapComponentsBsTextarea) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTextarea['default'];
    }
  });
});
define('pix-live/components/challenge-actionbar', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    actions: {

      skip: function skip() {
        this.sendAction('skip');
      },
      validate: function validate() {
        this.sendAction('validate');
      }
    }

  });
});
define('pix-live/components/challenge-instruction', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('pix-live/components/challenge-item-generic', ['exports', 'ember', 'pix-live/utils/call-only-once'], function (exports, _ember, _pixLiveUtilsCallOnlyOnce) {

  var ChallengeItemGeneric = _ember['default'].Component.extend({

    tagName: 'article',
    classNames: ['challenge-item'],
    attributeBindings: ['challenge.id:data-challenge-id'],

    actions: {

      validate: (0, _pixLiveUtilsCallOnlyOnce['default'])(function () {
        if (this._hasError()) {
          this.set('errorMessage', this._getErrorMessage());
          return this.sendAction('onError', this.get('errorMessage'));
        }
        var value = this._getAnswerValue();
        this.sendAction('onValidated', this.get('challenge'), this.get('assessment'), value);
      }),

      skip: (0, _pixLiveUtilsCallOnlyOnce['default'])(function () {
        this.set('errorMessage', null);
        this.sendAction('onValidated', this.get('challenge'), this.get('assessment'), '#ABAND#');
      })
    }

  });

  exports['default'] = ChallengeItemGeneric;
});
define('pix-live/components/challenge-item-qcm', ['exports', 'pix-live/components/challenge-item-generic'], function (exports, _pixLiveComponentsChallengeItemGeneric) {

  var ChallengeItemQcm = _pixLiveComponentsChallengeItemGeneric['default'].extend({

    _hasError: function _hasError() {
      return this._getAnswerValue().length < 1;
    },

    // XXX : data is extracted from DOM of child component, breaking child encapsulation.
    // This is not "the Ember way", however it makes code easier to read,
    // and moreover, is a much more robust solution when you need to test it properly.
    _getAnswerValue: function _getAnswerValue() {
      return this.$('input:checkbox:checked').map(function () {
        return this.name;
      }).get().join(',');
    },

    _getErrorMessage: function _getErrorMessage() {
      return 'Pour valider, sélectionner au moins une réponse. Sinon, passer.';
    },

    actions: {
      answerChanged: function answerChanged() {
        this.set('errorMessage', null);
      }
    }

  });

  exports['default'] = ChallengeItemQcm;
});
define('pix-live/components/challenge-item-qcu', ['exports', 'pix-live/components/challenge-item-generic'], function (exports, _pixLiveComponentsChallengeItemGeneric) {

  var ChallengeItemQcu = _pixLiveComponentsChallengeItemGeneric['default'].extend({

    _hasError: function _hasError() {
      return this._getAnswerValue().length < 1;
    },

    // XXX : data is extracted from DOM of child component, breaking child encapsulation.
    // This is not "the Ember way", however it makes code easier to read,
    // and moreover, is a much more robust solution when you need to test it properly.
    _getAnswerValue: function _getAnswerValue() {
      return this.$('input:radio:checked').map(function () {
        return this.name;
      }).get().join('');
    },

    _getErrorMessage: function _getErrorMessage() {
      return 'Pour valider, sélectionner une réponse. Sinon, passer.';
    },

    actions: {
      answerChanged: function answerChanged() {
        this.set('errorMessage', null);
      }
    }

  });

  exports['default'] = ChallengeItemQcu;
});
define('pix-live/components/challenge-item-qroc', ['exports', 'pix-live/components/challenge-item-generic'], function (exports, _pixLiveComponentsChallengeItemGeneric) {

  var ChallengeItemQroc = _pixLiveComponentsChallengeItemGeneric['default'].extend({

    _hasError: function _hasError() {
      return this._getAnswerValue().length < 1;
    },

    // XXX : data is extracted from DOM of child component, breaking child encapsulation.
    // This is not "the Ember way", however it makes code easier to read,
    // and moreover, is a much more robust solution when you need to test it properly.
    _getAnswerValue: function _getAnswerValue() {
      return this.$('input[data-uid="qroc-proposal-uid"]').val();
    },

    _getErrorMessage: function _getErrorMessage() {
      return 'Pour valider, saisir une réponse. Sinon, passer.';
    },

    actions: {
      inputChanged: function inputChanged() {
        this.set('errorMessage', null);
      }
    }

  });

  exports['default'] = ChallengeItemQroc;
});
define('pix-live/components/challenge-item-qrocm', ['exports', 'lodash/lodash', 'pix-live/components/challenge-item-generic'], function (exports, _lodashLodash, _pixLiveComponentsChallengeItemGeneric) {

  var ChallengeItemQrocm = _pixLiveComponentsChallengeItemGeneric['default'].extend({

    _hasError: function _hasError() {
      var nonEmptyAnswers = _lodashLodash['default'].pick(this._getRawAnswerValue(), _lodashLodash['default'].identity);
      return _lodashLodash['default'].isEmpty(nonEmptyAnswers);
    },

    _getAnswerValue: function _getAnswerValue() {
      return _lodashLodash['default'].map(this._getRawAnswerValue(), function (value, key) {
        return key + ' = "' + value + '"';
      }).join(', ');
    },

    // XXX : data is extracted from DOM of child component, breaking child encapsulation.
    // This is not "the Ember way", however it makes code easier to read,
    // and moreover, is a much more robust solution when you need to test it properly.
    _getRawAnswerValue: function _getRawAnswerValue() {
      var result = {};
      $('.challenge-proposals input').each(function (index, element) {
        result[$(element).attr('name')] = $(element).val();
      });
      return result;
    },

    _getErrorMessage: function _getErrorMessage() {
      return 'Pour valider, saisir au moins une réponse. Sinon, passer.';
    },

    actions: {
      inputChanged: function inputChanged() {
        this.set('errorMessage', null);
      }
    }

  });

  exports['default'] = ChallengeItemQrocm;
});
define('pix-live/components/corner-ribbon', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('pix-live/components/course-banner', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    course: null,
    withHomeLink: false

  });
});
define('pix-live/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define('pix-live/components/first-page', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    init: function init() {
      this._super.apply(this, arguments);
      var showOnly = this.get('showOnly');
      try {
        if (showOnly && Number.isInteger(parseInt(showOnly, 10))) {
          this.set('model', this.get('model').slice(0, parseInt(showOnly, 10)));
        }
      } catch (e) {
        // do nothing
      }
    }

  });
});
define('pix-live/components/get-result', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    didRender: function didRender() {
      this._super.apply(this, arguments);
      $(function () {
        $('[data-toggle="tooltip"]').tooltip();
      });
    }
  });
});
define('pix-live/components/load-email', ['exports', 'ember'], function (exports, _ember) {

  // The whole component is left untested for 17/11 release.`
  // Issue raised https://github.com/sgmap/pix/issues/142

  exports['default'] = _ember['default'].Component.extend({
    didInsertElement: function didInsertElement() {
      _ember['default'].run.scheduleOnce('afterRender', this, function () {

        var $loadEmailButton = $('.load-email-button')[0];
        var $contactForm = $('#contact-form');

        $contactForm.submit(
        /* istanbul ignore next */
        function (e) {
          e.preventDefault();
          $loadEmailButton.textContent = 'Veuillez patienter...';
          var emailValue = $('.load-email-enter').val();
          $.ajax({
            url: 'https://formspree.io/1024pix+formspree@gmail.com',
            method: 'POST',
            data: { email: emailValue },
            dataType: 'json',
            success: function success() {
              $loadEmailButton.classList.add('load-email-button-is-active');
              $('.first-page-email-enter').attr('disabled', 'disabled');
              $('button.load-email-button').attr('disabled', 'disabled');
              $loadEmailButton.textContent = 'Rejoindre la communauté';
            },
            error: function error() {
              $loadEmailButton.classList.add('load-email-button-is-error');
              setTimeout(function () {
                $('.first-page-email-enter').val('');
                $loadEmailButton.classList.remove('load-email-button-is-error');
                $loadEmailButton.textContent = 'Rejoindre la communauté';
              }, 3000);
            }
          });
        });
      });
    }
  });
});
define('pix-live/components/markdown-to-html', ['exports', 'ember-cli-showdown/components/markdown-to-html'], function (exports, _emberCliShowdownComponentsMarkdownToHtml) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliShowdownComponentsMarkdownToHtml['default'];
    }
  });
});
define('pix-live/components/progress-bar', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('pix-live/components/qcm-proposals', ['exports', 'ember', 'lodash/lodash'], function (exports, _ember, _lodashLodash) {
  exports['default'] = _ember['default'].Component.extend({

    tagName: 'div',

    labeledCheckboxes: _ember['default'].computed('proposals', 'answers', function () {
      return _lodashLodash['default'].zip(this.get('proposals'), this.get('answers'));
    }),

    actions: {
      checkboxClicked: function checkboxClicked() {
        this.sendAction('answerChanged');
      }
    }

  });
});
define('pix-live/components/qcu-proposals', ['exports', 'ember', 'lodash/lodash'], function (exports, _ember, _lodashLodash) {

  function _uncheckAllRadioButtons() {
    this.$(':radio').prop('checked', false);
  }

  function _checkAgainTheSelectedOption(index) {
    this.$(':radio:nth(' + index + ')').prop('checked', true);
  }

  exports['default'] = _ember['default'].Component.extend({

    tagName: 'div',

    labeledRadios: _ember['default'].computed('proposals', 'answers', function () {
      return _lodashLodash['default'].zip(this.get('proposals'), this.get('answers'));
    }),

    actions: {
      radioClicked: function radioClicked(index) {
        _uncheckAllRadioButtons.call(this);
        _checkAgainTheSelectedOption.call(this, index);
        this.sendAction('answerChanged');
      }
    }

  });
});
define('pix-live/components/qroc-proposal', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    classNames: ['qroc-proposal'],

    didInsertElement: function didInsertElement() {
      var _this = this;

      // XXX : jQuery handler here is far more powerful than declaring event in template helper.
      // It avoids to loose time with 'oh that handy jQuery event is missing',
      // or "How the hell did they construct input helper ?"
      this.$('input').keydown(function () {
        _this.sendAction('onInputChanged');
      });

      //XXX : prevent from abandonned question to be displayed
      if (this.$('input').val() === '#ABAND#') {
        this.$('input').val('');
      }
    }
  });
});
define('pix-live/components/qrocm-proposal', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['qrocm-proposal'],

    didInsertElement: function didInsertElement() {
      var _this = this;

      // XXX : jQuery handler here is far more powerful than declaring event in template helper.
      // It avoids to loose time with 'oh that handy jQuery event is missing',
      // or "How the hell did they construct input helper ?"
      this.$('input').keydown(function () {
        _this.sendAction('onInputChanged');
      });
    }

  });
});
define('pix-live/components/radio-button', ['exports', 'ember-radio-buttons/components/radio-button'], function (exports, _emberRadioButtonsComponentsRadioButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadioButtonsComponentsRadioButton['default'];
    }
  });
});
define('pix-live/components/user-menu', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'li',
    classNames: ['dropdown']
  });
});
define('pix-live/controllers/assessments/get-challenge', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({});
});
define('pix-live/controllers/courses/get-challenge-preview', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    assessmentService: _ember['default'].inject.service('assessment'),

    navigate: function navigate(challenge, assessment) {
      var _this = this;

      this.get('assessmentService').getNextChallenge(challenge, assessment).then(function (nextChallenge) {
        _this.transitionToRoute('courses.get-challenge-preview', { challenge: nextChallenge, assessment: assessment });
      });
    }

  });
});
define('pix-live/controllers/home', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({});
});
define('pix-live/helpers/add', ['exports', 'ember-math-helpers/helpers/add'], function (exports, _emberMathHelpersHelpersAdd) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersAdd['default'];
    }
  });
  Object.defineProperty(exports, 'add', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersAdd.add;
    }
  });
});
define('pix-live/helpers/app-version', ['exports', 'ember', 'pix-live/config/environment'], function (exports, _ember, _pixLiveConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _pixLiveConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('pix-live/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _emberBootstrapHelpersBsContains) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsContains['default'];
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsContains.bsContains;
    }
  });
});
define('pix-live/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _emberBootstrapHelpersBsEq) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsEq['default'];
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsEq.eq;
    }
  });
});
define('pix-live/helpers/bs-not', ['exports', 'ember-bootstrap/helpers/bs-not'], function (exports, _emberBootstrapHelpersBsNot) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsNot['default'];
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsNot.not;
    }
  });
});
define('pix-live/helpers/bs-read-path', ['exports', 'ember-bootstrap/helpers/bs-read-path'], function (exports, _emberBootstrapHelpersBsReadPath) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsReadPath['default'];
    }
  });
  Object.defineProperty(exports, 'readPath', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsReadPath.readPath;
    }
  });
});
define('pix-live/helpers/ceil', ['exports', 'ember-math-helpers/helpers/ceil'], function (exports, _emberMathHelpersHelpersCeil) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersCeil['default'];
    }
  });
  Object.defineProperty(exports, 'ceil', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersCeil.ceil;
    }
  });
});
define('pix-live/helpers/convert-to-html', ['exports', 'ember', 'lodash/lodash'], function (exports, _ember, _lodashLodash) {
  exports.convertToHtml = convertToHtml;

  function convertToHtml(params) {
    if (_lodashLodash['default'].isArray(params) && params.length > 0) {
      var converter = new showdown.Converter();
      return converter.makeHtml(params[0]);
    }
    return '';
  }

  exports['default'] = _ember['default'].Helper.helper(convertToHtml);
});
/* global showdown */
define('pix-live/helpers/div', ['exports', 'ember-math-helpers/helpers/div'], function (exports, _emberMathHelpersHelpersDiv) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersDiv['default'];
    }
  });
  Object.defineProperty(exports, 'div', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersDiv.div;
    }
  });
});
define('pix-live/helpers/eq', ['exports', 'ember'], function (exports, _ember) {

  // borrowed from https://emberigniter.com/how-to-equals-conditional-comparison-handlebars/
  var eq = function eq(params) {
    return params[0] === params[1];
  };
  exports['default'] = _ember['default'].Helper.helper(eq);
});
define('pix-live/helpers/floor', ['exports', 'ember-math-helpers/helpers/floor'], function (exports, _emberMathHelpersHelpersFloor) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersFloor['default'];
    }
  });
  Object.defineProperty(exports, 'floor', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersFloor.floor;
    }
  });
});
define('pix-live/helpers/inc', ['exports', 'ember'], function (exports, _ember) {
  exports.inc = inc;

  function inc(params) {
    return params[0] + 1;
  }

  exports['default'] = _ember['default'].Helper.helper(inc);
});
define('pix-live/helpers/max', ['exports', 'ember-math-helpers/helpers/max'], function (exports, _emberMathHelpersHelpersMax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersMax['default'];
    }
  });
  Object.defineProperty(exports, 'max', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersMax.max;
    }
  });
});
define('pix-live/helpers/min', ['exports', 'ember-math-helpers/helpers/min'], function (exports, _emberMathHelpersHelpersMin) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersMin['default'];
    }
  });
  Object.defineProperty(exports, 'min', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersMin.min;
    }
  });
});
define('pix-live/helpers/mod', ['exports', 'ember-math-helpers/helpers/mod'], function (exports, _emberMathHelpersHelpersMod) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersMod['default'];
    }
  });
  Object.defineProperty(exports, 'mod', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersMod.mod;
    }
  });
});
define('pix-live/helpers/mult', ['exports', 'ember-math-helpers/helpers/mult'], function (exports, _emberMathHelpersHelpersMult) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersMult['default'];
    }
  });
  Object.defineProperty(exports, 'mult', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersMult.mult;
    }
  });
});
define('pix-live/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('pix-live/helpers/pow', ['exports', 'ember-math-helpers/helpers/pow'], function (exports, _emberMathHelpersHelpersPow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersPow['default'];
    }
  });
  Object.defineProperty(exports, 'pow', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersPow.pow;
    }
  });
});
define('pix-live/helpers/property-of', ['exports', 'ember', 'lodash/lodash'], function (exports, _ember, _lodashLodash) {
  exports.propertyOf = propertyOf;

  function propertyOf(params) {
    var map = params[0];
    var key = params[1];
    if (_lodashLodash['default'].isObject(map) && _lodashLodash['default'].isString(key)) {
      return map[key];
    }
    return '';
  }

  exports['default'] = _ember['default'].Helper.helper(propertyOf);
});
define('pix-live/helpers/random', ['exports', 'ember-math-helpers/helpers/random'], function (exports, _emberMathHelpersHelpersRandom) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersRandom['default'];
    }
  });
  Object.defineProperty(exports, 'random', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersRandom.random;
    }
  });
});
define('pix-live/helpers/round', ['exports', 'ember-math-helpers/helpers/round'], function (exports, _emberMathHelpersHelpersRound) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersRound['default'];
    }
  });
  Object.defineProperty(exports, 'round', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersRound.round;
    }
  });
});
define('pix-live/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('pix-live/helpers/sqrt', ['exports', 'ember-math-helpers/helpers/sqrt'], function (exports, _emberMathHelpersHelpersSqrt) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersSqrt['default'];
    }
  });
  Object.defineProperty(exports, 'sqrt', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersSqrt.sqrt;
    }
  });
});
define('pix-live/helpers/strip-instruction', ['exports', 'ember'], function (exports, _ember) {
  exports.stripInstruction = stripInstruction;

  function stripInstruction(params) {
    var result = $(params[0]).text();
    result = result.substr(0, 70);
    result += '...';
    return result;
  }

  exports['default'] = _ember['default'].Helper.helper(stripInstruction);
});
define('pix-live/helpers/sub', ['exports', 'ember-math-helpers/helpers/sub'], function (exports, _emberMathHelpersHelpersSub) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersSub['default'];
    }
  });
  Object.defineProperty(exports, 'sub', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersSub.sub;
    }
  });
});
define('pix-live/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'pix-live/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _pixLiveConfigEnvironment) {
  var _config$APP = _pixLiveConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('pix-live/initializers/bootstrap-linkto', ['exports', 'ember-bootstrap/initializers/bootstrap-linkto'], function (exports, _emberBootstrapInitializersBootstrapLinkto) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapInitializersBootstrapLinkto['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapInitializersBootstrapLinkto.initialize;
    }
  });
});
define('pix-live/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('pix-live/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('pix-live/initializers/ember-cli-mirage', ['exports', 'ember-cli-mirage/utils/read-modules', 'pix-live/config/environment', 'pix-live/mirage/config', 'ember-cli-mirage/server', 'lodash/object/assign'], function (exports, _emberCliMirageUtilsReadModules, _pixLiveConfigEnvironment, _pixLiveMirageConfig, _emberCliMirageServer, _lodashObjectAssign) {
  exports.startMirage = startMirage;
  exports['default'] = {
    name: 'ember-cli-mirage',
    initialize: function initialize(application) {
      if (arguments.length > 1) {
        // Ember < 2.1
        var container = arguments[0],
            application = arguments[1];
      }

      if (_shouldUseMirage(_pixLiveConfigEnvironment['default'].environment, _pixLiveConfigEnvironment['default']['ember-cli-mirage'])) {
        startMirage(_pixLiveConfigEnvironment['default']);
      }
    }
  };

  function startMirage() {
    var env = arguments.length <= 0 || arguments[0] === undefined ? _pixLiveConfigEnvironment['default'] : arguments[0];

    var environment = env.environment;
    var modules = (0, _emberCliMirageUtilsReadModules['default'])(env.modulePrefix);
    var options = (0, _lodashObjectAssign['default'])(modules, { environment: environment, baseConfig: _pixLiveMirageConfig['default'], testConfig: _pixLiveMirageConfig.testConfig });

    return new _emberCliMirageServer['default'](options);
  }

  function _shouldUseMirage(env, addonConfig) {
    var userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    var defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    var usingInDev = env === 'development' && !addonConfig.usingProxy;
    var usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }
});
define('pix-live/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('pix-live/initializers/export-application-global', ['exports', 'ember', 'pix-live/config/environment'], function (exports, _ember, _pixLiveConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_pixLiveConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _pixLiveConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_pixLiveConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('pix-live/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('pix-live/initializers/load-bootstrap-config', ['exports', 'pix-live/config/environment', 'ember-bootstrap/config'], function (exports, _pixLiveConfigEnvironment, _emberBootstrapConfig) {
  exports.initialize = initialize;

  function initialize() /* container, application */{
    _emberBootstrapConfig['default'].load(_pixLiveConfigEnvironment['default']['ember-bootstrap'] || {});
  }

  exports['default'] = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define('pix-live/initializers/metrics', ['exports', 'pix-live/config/environment'], function (exports, _pixLiveConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    var _config$metricsAdapters = _pixLiveConfigEnvironment['default'].metricsAdapters;
    var metricsAdapters = _config$metricsAdapters === undefined ? [] : _config$metricsAdapters;
    var _config$environment = _pixLiveConfigEnvironment['default'].environment;
    var environment = _config$environment === undefined ? 'development' : _config$environment;

    var options = { metricsAdapters: metricsAdapters, environment: environment };

    application.register('config:metrics', options, { instantiate: false });
    application.inject('service:metrics', 'options', 'config:metrics');
  }

  exports['default'] = {
    name: 'metrics',
    initialize: initialize
  };
});
define('pix-live/initializers/modals-container', ['exports', 'ember-bootstrap/initializers/modals-container'], function (exports, _emberBootstrapInitializersModalsContainer) {
  exports['default'] = _emberBootstrapInitializersModalsContainer['default'];
});
define('pix-live/initializers/router', ['exports'], function (exports) {
  exports.initialize = initialize;
  // See http://stackoverflow.com/questions/18302463/get-current-route-name-in-ember

  function initialize(application) {
    application.inject('route', 'router', 'router:main');
    application.inject('component', 'router', 'router:main');
  }

  exports['default'] = {
    name: 'router',
    initialize: initialize
  };
});
define('pix-live/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('pix-live/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("pix-live/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('pix-live/mirage/config', ['exports', 'pix-live/mirage/routes/get-challenge', 'pix-live/mirage/routes/get-challenges', 'pix-live/mirage/routes/get-course', 'pix-live/mirage/routes/get-courses', 'pix-live/mirage/routes/get-answer', 'pix-live/mirage/routes/post-answers', 'pix-live/mirage/routes/get-assessment', 'pix-live/mirage/routes/post-assessments', 'pix-live/mirage/routes/get-answer-by-challenge-and-assessment'], function (exports, _pixLiveMirageRoutesGetChallenge, _pixLiveMirageRoutesGetChallenges, _pixLiveMirageRoutesGetCourse, _pixLiveMirageRoutesGetCourses, _pixLiveMirageRoutesGetAnswer, _pixLiveMirageRoutesPostAnswers, _pixLiveMirageRoutesGetAssessment, _pixLiveMirageRoutesPostAssessments, _pixLiveMirageRoutesGetAnswerByChallengeAndAssessment) {
  exports['default'] = function () {

    this.passthrough('/write-coverage');
    this.passthrough('https://formspree.io/**');
    this.post('https://sentry.io/**', function () {});

    this.namespace = 'http://localhost:3000/api';

    this.get('/courses', _pixLiveMirageRoutesGetCourses['default']);
    this.get('/courses/:id', _pixLiveMirageRoutesGetCourse['default']);

    this.get('/challenges', _pixLiveMirageRoutesGetChallenges['default']);
    this.get('/challenges/:id', _pixLiveMirageRoutesGetChallenge['default']);

    this.post('/assessments', _pixLiveMirageRoutesPostAssessments['default']);
    this.get('/assessments/:id', _pixLiveMirageRoutesGetAssessment['default']);

    this.post('/answers', _pixLiveMirageRoutesPostAnswers['default']);
    this.get('/answers/:id', _pixLiveMirageRoutesGetAnswer['default']);
    this.get('/answers', _pixLiveMirageRoutesGetAnswerByChallengeAndAssessment['default']);
  };
});
define('pix-live/mirage/data/answers/raw-qcm-answer', ['exports', 'pix-live/mirage/data/challenges/raw-qcm-challenge'], function (exports, _pixLiveMirageDataChallengesRawQcmChallenge) {
  exports['default'] = {
    data: {
      type: 'answers',
      id: 'raw_answer_qcm_id',
      attributes: {
        value: '',
        result: 'ok'
      },
      relationships: {
        challenge: {
          data: {
            type: 'challenges',
            id: _pixLiveMirageDataChallengesRawQcmChallenge['default'].data.id
          }
        }
      }
    }
  };
});
define('pix-live/mirage/data/answers/ref-qcm-answer', ['exports', 'pix-live/mirage/data/challenges/ref-qcm-challenge'], function (exports, _pixLiveMirageDataChallengesRefQcmChallenge) {
  exports['default'] = {
    data: {
      type: 'answers',
      id: 'ref_answer_qcm_id',
      attributes: {
        value: '1,2,4',
        result: 'ok'
      },
      relationships: {
        challenge: {
          data: {
            type: 'challenges',
            id: _pixLiveMirageDataChallengesRefQcmChallenge['default'].data.id
          }
        },
        assessment: {
          data: {
            type: 'assessments',
            id: 'ref_assessment_id'
          }
        }
      }
    }
  };
});
define('pix-live/mirage/data/answers/ref-qcu-answer', ['exports', 'pix-live/mirage/data/challenges/ref-qcu-challenge'], function (exports, _pixLiveMirageDataChallengesRefQcuChallenge) {
  exports['default'] = {
    data: {
      type: 'answers',
      id: 'ref_answer_qcu_id',
      attributes: {
        value: '2',
        result: 'ko'
      },
      relationships: {
        challenge: {
          data: {
            type: 'challenges',
            id: _pixLiveMirageDataChallengesRefQcuChallenge['default'].data.id
          }
        },
        assessment: {
          data: {
            type: 'assessments',
            id: 'ref_assessment_id'
          }
        }
      }
    }
  };
});
define('pix-live/mirage/data/answers/ref-qroc-answer', ['exports', 'pix-live/mirage/data/challenges/ref-qroc-challenge'], function (exports, _pixLiveMirageDataChallengesRefQrocChallenge) {
  exports['default'] = {
    data: {
      type: 'answers',
      id: 'ref_answer_qroc_id',
      attributes: {
        value: 'Bill',
        result: 'pending'
      },
      relationships: {
        challenge: {
          data: {
            type: 'challenges',
            id: _pixLiveMirageDataChallengesRefQrocChallenge['default'].data.id
          }
        },
        assessment: {
          data: {
            type: 'assessments',
            id: 'ref_assessment_id'
          }
        }
      }
    }
  };
});
define('pix-live/mirage/data/answers/ref-qrocm-answer', ['exports', 'pix-live/mirage/data/challenges/ref-qrocm-challenge'], function (exports, _pixLiveMirageDataChallengesRefQrocmChallenge) {
  exports['default'] = {
    data: {
      type: 'answers',
      id: 'ref_answer_qrocm_id',
      attributes: {
        value: 'logiciel1 = "word", logiciel2 = "excel", logiciel3 = "powerpoint"',
        result: 'aband'
      },
      relationships: {
        challenge: {
          data: {
            type: 'challenges',
            id: _pixLiveMirageDataChallengesRefQrocmChallenge['default'].data.id
          }
        },
        assessment: {
          data: {
            type: 'assessments',
            id: 'ref_assessment_id'
          }
        }
      }
    }
  };
});
define('pix-live/mirage/data/assessments/raw-assessment', ['exports', 'pix-live/mirage/data/courses/raw-course', 'pix-live/mirage/data/answers/raw-qcm-answer'], function (exports, _pixLiveMirageDataCoursesRawCourse, _pixLiveMirageDataAnswersRawQcmAnswer) {
  exports['default'] = {
    data: {
      type: 'assessments',
      id: 'raw_assessment_id',
      attributes: {
        'user-id': 'user_id',
        'user-name': 'Jon Snow',
        'user-email': 'jsnow@winterfell.got'
      },
      relationships: {
        course: {
          data: {
            type: 'courses',
            id: _pixLiveMirageDataCoursesRawCourse['default'].data.id
          }
        },
        answers: {
          data: [{
            type: 'answers',
            id: _pixLiveMirageDataAnswersRawQcmAnswer['default'].data.id
          }]
        }
      }
    }
  };
});
define('pix-live/mirage/data/assessments/ref-assessment', ['exports', 'pix-live/mirage/data/courses/ref-course', 'pix-live/mirage/data/answers/ref-qcu-answer', 'pix-live/mirage/data/answers/ref-qcm-answer', 'pix-live/mirage/data/answers/ref-qroc-answer', 'pix-live/mirage/data/answers/ref-qrocm-answer'], function (exports, _pixLiveMirageDataCoursesRefCourse, _pixLiveMirageDataAnswersRefQcuAnswer, _pixLiveMirageDataAnswersRefQcmAnswer, _pixLiveMirageDataAnswersRefQrocAnswer, _pixLiveMirageDataAnswersRefQrocmAnswer) {
  exports['default'] = {
    data: {
      type: 'assessments',
      id: 'ref_assessment_id',
      attributes: {
        'user-id': 'user_id',
        'user-name': 'Jon Snow',
        'user-email': 'jsnow@winterfell.got'
      },
      relationships: {
        course: {
          data: {
            type: 'courses',
            id: _pixLiveMirageDataCoursesRefCourse['default'].data.id
          }
        },
        answers: {
          data: [{
            type: 'answers',
            id: _pixLiveMirageDataAnswersRefQcmAnswer['default'].data.id
          }, {
            type: 'answers',
            id: _pixLiveMirageDataAnswersRefQcuAnswer['default'].data.id
          }, {
            type: 'answers',
            id: _pixLiveMirageDataAnswersRefQrocAnswer['default'].data.id
          }, {
            type: 'answers',
            id: _pixLiveMirageDataAnswersRefQrocmAnswer['default'].data.id
          }]
        }
      }
    }
  };
});
define('pix-live/mirage/data/challenges/raw-qcm-challenge', ['exports'], function (exports) {
  // QCM challenge with all field filled
  exports['default'] = {
    data: {
      type: 'challenges',
      id: 'raw_qcm_challenge_id',
      attributes: {
        type: 'QCM',
        instruction: 'Un QCM est fait pour proposer plusieurs choix',
        proposals: '- soit possibilite A, et/ou' + '\n - soit possibilite B, et/ou' + '\n - soit possibilite C, et/ou' + '\n - soit possibilite D'
      }
    }
  };
});
define('pix-live/mirage/data/challenges/ref-qcm-challenge', ['exports'], function (exports) {
  // QCM challenge with all field filled
  exports['default'] = {
    data: {
      type: 'challenges',
      id: 'ref_qcm_challenge_id',
      attributes: {
        type: 'QCM',
        instruction: 'Un QCM propose plusieurs choix, l\'utilisateur peut en choisir [plusieurs](http://link.plusieurs.url)',
        'attachment-url': 'http://example_of_url',
        'attachment-filename': 'example_of_filename.pdf',
        'illustration-url': 'http://fakeimg.pl/350x200/?text=PictureOfQCM',
        proposals: '- possibilite 1, et/ou' + '\n - possibilite 2, et/ou' + '\n - possibilite 3, et/ou' + '\n - possibilite 4'
      }
    }
  };
});
define('pix-live/mirage/data/challenges/ref-qcu-challenge', ['exports'], function (exports) {
  // QCM challenge with all field filled
  exports['default'] = {
    data: {
      type: 'challenges',
      id: 'ref_qcu_challenge_id',
      attributes: {
        type: 'QCU',
        'illustration-url': 'http://fakeimg.pl/350x200/?text=QCU',
        'attachment-url': 'http://example_of_url',
        'attachment-filename': 'filename.pdf',
        instruction: 'Un QCU propose plusieurs choix, l\'utilisateur peut en choisir [un seul](http://link.unseul.url)',
        proposals: '' + '- 1ere possibilite\n ' + '- 2eme possibilite\n ' + '- 3eme possibilite\n' + '- 4eme possibilite'
      }
    }
  };
});
define('pix-live/mirage/data/challenges/ref-qroc-challenge', ['exports'], function (exports) {
  exports['default'] = {
    data: {
      type: 'challenges',
      id: 'ref_qroc_challenge_full',
      attributes: {
        type: 'QROC',
        instruction: 'Un QROC est une question ouverte avec un simple champ texte libre pour répondre',
        proposals: 'Entrez le prénom de B. Gates : ${firstname#prénom} (en toutes lettres)\nSVP'
      }
    }
  };
});
define('pix-live/mirage/data/challenges/ref-qrocm-challenge', ['exports'], function (exports) {
  exports['default'] = {
    data: {
      type: 'challenges',
      id: 'ref_qrocm_challenge_id',
      attributes: {
        type: 'QROCM',
        instruction: 'Un QROCM est une question [ouverte](http://link.ouverte.url) avec plusieurs champs texte libre pour repondre',
        proposals: 'Trois logiciels libres : ${logiciel1#un} ${logiciel2#deux} ${logiciel3#trois}\nMerci'
      }
    }
  };
});
define('pix-live/mirage/data/courses/raw-course', ['exports', 'pix-live/mirage/data/challenges/raw-qcm-challenge'], function (exports, _pixLiveMirageDataChallengesRawQcmChallenge) {
  exports['default'] = {
    data: {
      type: 'courses',
      id: 'raw_course_id',
      attributes: {
        name: 'Raw Course',
        description: 'Contient un minimum d\'information',
        duration: 10
      },
      relationships: {
        challenges: {
          data: [{
            type: 'challenges',
            id: _pixLiveMirageDataChallengesRawQcmChallenge['default'].data.id
          }]
        }
      }
    }
  };
});
define('pix-live/mirage/data/courses/ref-course', ['exports', 'pix-live/mirage/data/challenges/ref-qcm-challenge', 'pix-live/mirage/data/challenges/ref-qcu-challenge', 'pix-live/mirage/data/challenges/ref-qroc-challenge', 'pix-live/mirage/data/challenges/ref-qrocm-challenge'], function (exports, _pixLiveMirageDataChallengesRefQcmChallenge, _pixLiveMirageDataChallengesRefQcuChallenge, _pixLiveMirageDataChallengesRefQrocChallenge, _pixLiveMirageDataChallengesRefQrocmChallenge) {
  exports['default'] = {
    data: {
      type: 'courses',
      id: 'ref_course_id',
      attributes: {
        name: 'First Course',
        description: 'Contient toutes les sortes d\'epreuves',
        isAdaptive: true,
        duration: 10,
        'image-url': 'http://fakeimg.pl/350x200/?text=First%20Course'
      },
      relationships: {
        challenges: {
          data: [{
            type: 'challenges',
            id: _pixLiveMirageDataChallengesRefQcmChallenge['default'].data.id
          }, {
            type: 'challenges',
            id: _pixLiveMirageDataChallengesRefQcuChallenge['default'].data.id
          }, {
            type: 'challenges',
            id: _pixLiveMirageDataChallengesRefQrocChallenge['default'].data.id
          }, {
            type: 'challenges',
            id: _pixLiveMirageDataChallengesRefQrocmChallenge['default'].data.id
          }]
        }
      }
    }
  };
});
define('pix-live/mirage/routes/get-answer-by-challenge-and-assessment', ['exports', 'lodash/lodash', 'pix-live/mirage/data/answers/raw-qcm-answer', 'pix-live/mirage/data/answers/ref-qcm-answer', 'pix-live/mirage/data/answers/ref-qcu-answer', 'pix-live/mirage/data/answers/ref-qroc-answer', 'pix-live/mirage/data/answers/ref-qrocm-answer'], function (exports, _lodashLodash, _pixLiveMirageDataAnswersRawQcmAnswer, _pixLiveMirageDataAnswersRefQcmAnswer, _pixLiveMirageDataAnswersRefQcuAnswer, _pixLiveMirageDataAnswersRefQrocAnswer, _pixLiveMirageDataAnswersRefQrocmAnswer) {
  exports['default'] = function (schema, request) {

    var allAnswers = [_pixLiveMirageDataAnswersRawQcmAnswer['default'], _pixLiveMirageDataAnswersRefQcuAnswer['default'], _pixLiveMirageDataAnswersRefQcmAnswer['default'], _pixLiveMirageDataAnswersRefQrocAnswer['default'], _pixLiveMirageDataAnswersRefQrocmAnswer['default']];

    var answers = _lodashLodash['default'].map(allAnswers, function (oneAnswer) {
      return { id: oneAnswer.data.id, obj: oneAnswer };
    });

    var answer = _lodashLodash['default'].find(answers, function (oneAnswer) {
      var belongsToAssessment = _lodashLodash['default'].get(oneAnswer.obj, 'data.relationships.assessment.data.id') === request.queryParams.assessment;
      var belongsToChallenge = _lodashLodash['default'].get(oneAnswer.obj, 'data.relationships.challenge.data.id') === request.queryParams.challenge;
      return belongsToAssessment && belongsToChallenge;
    });

    if (answer) {
      return answer.obj;
    } else {
      var queryParams = '';
      try {
        queryParams = JSON.stringify(request.queryParams);
      } catch (e) {
        queryParams = '';
      }
      throw new Error('404 The answer you required in the fake server does not exist... ' + queryParams);
    }
  };
});
define('pix-live/mirage/routes/get-answer', ['exports', 'lodash/lodash', 'pix-live/mirage/data/answers/raw-qcm-answer', 'pix-live/mirage/data/answers/ref-qcm-answer', 'pix-live/mirage/data/answers/ref-qcu-answer', 'pix-live/mirage/data/answers/ref-qroc-answer', 'pix-live/mirage/data/answers/ref-qrocm-answer'], function (exports, _lodashLodash, _pixLiveMirageDataAnswersRawQcmAnswer, _pixLiveMirageDataAnswersRefQcmAnswer, _pixLiveMirageDataAnswersRefQcuAnswer, _pixLiveMirageDataAnswersRefQrocAnswer, _pixLiveMirageDataAnswersRefQrocmAnswer) {
  exports['default'] = function (schema, request) {

    var allAnswers = [_pixLiveMirageDataAnswersRawQcmAnswer['default'], _pixLiveMirageDataAnswersRefQcuAnswer['default'], _pixLiveMirageDataAnswersRefQcmAnswer['default'], _pixLiveMirageDataAnswersRefQrocAnswer['default'], _pixLiveMirageDataAnswersRefQrocmAnswer['default']];

    var answers = _lodashLodash['default'].map(allAnswers, function (oneAnswer) {
      return { id: oneAnswer.data.id, obj: oneAnswer };
    });

    var answer = _lodashLodash['default'].find(answers, { id: request.params.id });

    if (answer) {
      return answer.obj;
    } else {
      throw new Error({ message: '404 The answer you required in the fake server does not exist ' + request.params.id });
    }
  };
});
define('pix-live/mirage/routes/get-assessment', ['exports', 'lodash/lodash', 'pix-live/mirage/data/assessments/raw-assessment', 'pix-live/mirage/data/assessments/ref-assessment'], function (exports, _lodashLodash, _pixLiveMirageDataAssessmentsRawAssessment, _pixLiveMirageDataAssessmentsRefAssessment) {
  exports['default'] = function (schema, request) {

    var allAssessments = [_pixLiveMirageDataAssessmentsRawAssessment['default'], _pixLiveMirageDataAssessmentsRefAssessment['default']];

    var assessments = _lodashLodash['default'].map(allAssessments, function (oneAssessment) {
      return { id: oneAssessment.data.id, obj: oneAssessment };
    });

    var assessment = _lodashLodash['default'].find(assessments, { id: request.params.id });

    if (assessment) {
      return assessment.obj;
    } else {
      throw new Error('The assessment you required in the fake server does not exist ' + request.params.id);
    }
  };
});
define('pix-live/mirage/routes/get-challenge', ['exports', 'lodash/lodash', 'pix-live/mirage/data/challenges/raw-qcm-challenge', 'pix-live/mirage/data/challenges/ref-qcm-challenge', 'pix-live/mirage/data/challenges/ref-qcu-challenge', 'pix-live/mirage/data/challenges/ref-qroc-challenge', 'pix-live/mirage/data/challenges/ref-qrocm-challenge'], function (exports, _lodashLodash, _pixLiveMirageDataChallengesRawQcmChallenge, _pixLiveMirageDataChallengesRefQcmChallenge, _pixLiveMirageDataChallengesRefQcuChallenge, _pixLiveMirageDataChallengesRefQrocChallenge, _pixLiveMirageDataChallengesRefQrocmChallenge) {
  exports['default'] = function (schema, request) {

    var allChallenges = [_pixLiveMirageDataChallengesRawQcmChallenge['default'], _pixLiveMirageDataChallengesRefQcmChallenge['default'], _pixLiveMirageDataChallengesRefQcuChallenge['default'], _pixLiveMirageDataChallengesRefQrocChallenge['default'], _pixLiveMirageDataChallengesRefQrocmChallenge['default']];

    var challenges = _lodashLodash['default'].map(allChallenges, function (oneChallenge) {
      return { id: oneChallenge.data.id, obj: oneChallenge };
    });

    var challenge = _lodashLodash['default'].find(challenges, { id: request.params.id });

    if (challenge) {
      return challenge.obj;
    } else {
      throw new Error('The challenge you required in the fake server does not exist ' + request.params.id);
    }
  };
});
define('pix-live/mirage/routes/get-challenges', ['exports', 'pix-live/mirage/data/challenges/raw-qcm-challenge', 'pix-live/mirage/data/challenges/ref-qcm-challenge', 'pix-live/mirage/data/challenges/ref-qcu-challenge', 'pix-live/mirage/data/challenges/ref-qroc-challenge', 'pix-live/mirage/data/challenges/ref-qrocm-challenge'], function (exports, _pixLiveMirageDataChallengesRawQcmChallenge, _pixLiveMirageDataChallengesRefQcmChallenge, _pixLiveMirageDataChallengesRefQcuChallenge, _pixLiveMirageDataChallengesRefQrocChallenge, _pixLiveMirageDataChallengesRefQrocmChallenge) {
  exports['default'] = function () {

    return {
      data: [_pixLiveMirageDataChallengesRawQcmChallenge['default'], _pixLiveMirageDataChallengesRefQcmChallenge['default'].data, _pixLiveMirageDataChallengesRefQcuChallenge['default'].data, _pixLiveMirageDataChallengesRefQrocChallenge['default'].data, _pixLiveMirageDataChallengesRefQrocmChallenge['default'].data]
    };
  };
});
define('pix-live/mirage/routes/get-course', ['exports', 'lodash/lodash', 'pix-live/mirage/data/courses/ref-course', 'pix-live/mirage/data/courses/raw-course'], function (exports, _lodashLodash, _pixLiveMirageDataCoursesRefCourse, _pixLiveMirageDataCoursesRawCourse) {
  exports['default'] = function (schema, request) {

    var allCourses = [_pixLiveMirageDataCoursesRefCourse['default'], _pixLiveMirageDataCoursesRawCourse['default']];

    var courses = _lodashLodash['default'].map(allCourses, function (oneCourse) {
      return { id: oneCourse.data.id, obj: oneCourse };
    });

    var course = _lodashLodash['default'].find(courses, { id: request.params.id });

    if (course) {
      return course.obj;
    } else {
      throw new Error('The course you required in the fake server does not exist ' + request.params.id);
    }
  };
});
define('pix-live/mirage/routes/get-courses', ['exports', 'lodash/lodash', 'pix-live/mirage/data/courses/ref-course', 'pix-live/mirage/data/courses/raw-course'], function (exports, _lodashLodash, _pixLiveMirageDataCoursesRefCourse, _pixLiveMirageDataCoursesRawCourse) {
  exports['default'] = function (schema, request) {

    var allCourses = [_pixLiveMirageDataCoursesRefCourse['default'].data, _pixLiveMirageDataCoursesRawCourse['default'].data];

    var filteredCourses = _lodashLodash['default'].filter(allCourses, function (oneCourse) {
      return request.queryParams.adaptive == undefined || oneCourse.attributes.isAdaptive;
    });

    return { data: filteredCourses };
  };
});
define('pix-live/mirage/routes/post-answers', ['exports', 'lodash/lodash', 'pix-live/mirage/data/challenges/raw-qcm-challenge', 'pix-live/mirage/data/challenges/ref-qcm-challenge', 'pix-live/mirage/data/challenges/ref-qcu-challenge', 'pix-live/mirage/data/challenges/ref-qroc-challenge', 'pix-live/mirage/data/challenges/ref-qrocm-challenge', 'pix-live/mirage/data/answers/raw-qcm-answer', 'pix-live/mirage/data/answers/ref-qcu-answer', 'pix-live/mirage/data/answers/ref-qcm-answer', 'pix-live/mirage/data/answers/ref-qroc-answer', 'pix-live/mirage/data/answers/ref-qrocm-answer'], function (exports, _lodashLodash, _pixLiveMirageDataChallengesRawQcmChallenge, _pixLiveMirageDataChallengesRefQcmChallenge, _pixLiveMirageDataChallengesRefQcuChallenge, _pixLiveMirageDataChallengesRefQrocChallenge, _pixLiveMirageDataChallengesRefQrocmChallenge, _pixLiveMirageDataAnswersRawQcmAnswer, _pixLiveMirageDataAnswersRefQcuAnswer, _pixLiveMirageDataAnswersRefQcmAnswer, _pixLiveMirageDataAnswersRefQrocAnswer, _pixLiveMirageDataAnswersRefQrocmAnswer) {
  exports['default'] = function (schema, request) {

    var answer = JSON.parse(request.requestBody);
    var challengeId = answer.data.relationships.challenge.data.id;

    var allChallenges = [_pixLiveMirageDataChallengesRawQcmChallenge['default'], _pixLiveMirageDataChallengesRefQcmChallenge['default'], _pixLiveMirageDataChallengesRefQcuChallenge['default'], _pixLiveMirageDataChallengesRefQrocChallenge['default'], _pixLiveMirageDataChallengesRefQrocmChallenge['default']];

    var allAnswers = [_pixLiveMirageDataAnswersRawQcmAnswer['default'], _pixLiveMirageDataAnswersRefQcmAnswer['default'], _pixLiveMirageDataAnswersRefQcuAnswer['default'], _pixLiveMirageDataAnswersRefQrocAnswer['default'], _pixLiveMirageDataAnswersRefQrocmAnswer['default']];

    var answers = _lodashLodash['default'].map(allChallenges, function (oneChallenge, index) {
      return { id: oneChallenge.data.id, obj: allAnswers[index] };
    });

    var finalAnswer = _lodashLodash['default'].find(answers, { id: challengeId });

    if (finalAnswer) {
      return finalAnswer.obj;
    } else {
      throw new Error('Unable to POST this answer in the stub, sorry');
    }
  };
});
define('pix-live/mirage/routes/post-assessments', ['exports', 'lodash/lodash', 'pix-live/mirage/data/assessments/raw-assessment', 'pix-live/mirage/data/assessments/ref-assessment'], function (exports, _lodashLodash, _pixLiveMirageDataAssessmentsRawAssessment, _pixLiveMirageDataAssessmentsRefAssessment) {
  exports['default'] = function (schema, request) {

    var answer = JSON.parse(request.requestBody);
    var courseId = answer.data.relationships.course.data.id;

    var allAssessments = [_pixLiveMirageDataAssessmentsRawAssessment['default'], _pixLiveMirageDataAssessmentsRefAssessment['default']];

    var assessments = _lodashLodash['default'].map(allAssessments, function (oneAssessment) {
      return { id: oneAssessment.data.relationships.course.data.id, obj: oneAssessment };
    });

    var assessment = _lodashLodash['default'].find(assessments, { id: courseId });

    if (assessment) {
      return assessment.obj;
    } else {
      throw new Error('undefined new assessment, sorry');
    }
  };
});
define('pix-live/models/answer', ['exports', 'ember', 'ember-data', 'pix-live/models/answer/value-as-array-of-boolean-mixin', 'pix-live/models/answer/value-as-array-of-string-mixin'], function (exports, _ember, _emberData, _pixLiveModelsAnswerValueAsArrayOfBooleanMixin, _pixLiveModelsAnswerValueAsArrayOfStringMixin) {
  var Model = _emberData['default'].Model;
  var attr = _emberData['default'].attr;
  var belongsTo = _emberData['default'].belongsTo;
  var computed = _ember['default'].computed;
  exports['default'] = Model.extend(_pixLiveModelsAnswerValueAsArrayOfBooleanMixin['default'], _pixLiveModelsAnswerValueAsArrayOfStringMixin['default'], {

    value: attr('string'),
    result: attr('string'),
    assessment: belongsTo('assessment'),
    challenge: belongsTo('challenge'),

    isResultOk: computed('result', function () {
      return this.get('result') === 'ok';
    }),
    isResultWithoutAnswer: computed('result', function () {
      return this.get('result') === 'aband';
    }),
    isResultNotOk: computed('result', function () {
      return this.get('result') === 'ko';
    })

  });
});
define('pix-live/models/answer/value-as-array-of-boolean-mixin', ['exports', 'ember', 'lodash/lodash'], function (exports, _ember, _lodashLodash) {
  exports['default'] = _ember['default'].Mixin.create({

    _valueAsArrayOfBoolean: _ember['default'].computed('value', function () {
      var result = [];

      var arrayValues = this.get('value').split(',');
      var rawValues = _lodashLodash['default'].map(arrayValues, function (rawValue) {
        return rawValue - 1;
      });
      var maxValue = _lodashLodash['default'].max(rawValues) + 1;

      result = _lodashLodash['default'].range(maxValue).map(function () {
        return false;
      });

      _lodashLodash['default'].each(rawValues, function (rawValue) {
        result[rawValue] = true;
      });

      return result;
    })

  });
});
define('pix-live/models/answer/value-as-array-of-string-mixin', ['exports', 'ember', 'lodash/lodash'], function (exports, _ember, _lodashLodash) {
  exports['default'] = _ember['default'].Mixin.create({

    _valuesAsMap: _ember['default'].computed('value', function () {
      var _this = this;

      try {
        var _ret = (function () {
          var result = {};

          var arrayValues = _this.get('value').split(',');

          _lodashLodash['default'].each(arrayValues, function (arrayValue) {
            var keyVal = arrayValue.split(' = ');
            result[keyVal[0].trim()] = keyVal[1].slice(1, -1);
          });

          return {
            v: result
          };
        })();

        if (typeof _ret === 'object') return _ret.v;
      } catch (e) {
        return undefined;
      }
    })

  });
});
define('pix-live/models/assessment', ['exports', 'ember', 'ember-data'], function (exports, _ember, _emberData) {
  var attr = _emberData['default'].attr;
  var Model = _emberData['default'].Model;
  var belongsTo = _emberData['default'].belongsTo;
  var hasMany = _emberData['default'].hasMany;
  var computed = _ember['default'].computed;
  exports['default'] = Model.extend({

    course: belongsTo('course', { inverse: null }),
    answers: hasMany('answer'),
    userName: attr('string'),
    userEmail: attr('string'),
    firstChallenge: computed.alias('course.challenges.firstObject')

  });
});
define('pix-live/models/challenge', ['exports', 'ember-data', 'pix-live/models/challenge/proposals-as-array-mixin', 'pix-live/models/challenge/proposals-as-blocks-mixin', 'pix-live/models/challenge/instruction-as-object-mixin'], function (exports, _emberData, _pixLiveModelsChallengeProposalsAsArrayMixin, _pixLiveModelsChallengeProposalsAsBlocksMixin, _pixLiveModelsChallengeInstructionAsObjectMixin) {
  var Model = _emberData['default'].Model;
  var attr = _emberData['default'].attr;

  var ChallengeModel = Model.extend(_pixLiveModelsChallengeInstructionAsObjectMixin['default'], _pixLiveModelsChallengeProposalsAsArrayMixin['default'], _pixLiveModelsChallengeProposalsAsBlocksMixin['default'], {

    instruction: attr('string'),
    proposals: attr('string'),
    illustrationUrl: attr('string'),
    type: attr('string'),
    attachmentUrl: attr('string'),
    attachmentFilename: attr('string')

  });

  exports['default'] = ChallengeModel;
});
define('pix-live/models/challenge/instruction-as-object-mixin', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Mixin.create({
    _instructionAsObject: _ember['default'].computed('instruction', function () {
      return {
        text: this.get('instruction'),
        illustrationUrl: this.get('illustrationUrl'),
        attachmentUrl: this.get('attachmentUrl'),
        attachmentFilename: this.get('attachmentFilename')
      };
    })
  });
});
define('pix-live/models/challenge/proposals-as-array-mixin', ['exports', 'ember', 'lodash/lodash'], function (exports, _ember, _lodashLodash) {
  exports['default'] = _ember['default'].Mixin.create({
    _proposalsAsArray: _ember['default'].computed('proposals', function () {
      if (_lodashLodash['default'].isEmpty(this.get('proposals'))) {
        return [];
      }

      var proposals = '\n' + this.get('proposals');

      var elements = proposals.split(/\n\s*-\s*/);
      elements.shift();
      return elements;
    })
  });
});
define('pix-live/models/challenge/proposals-as-blocks-mixin', ['exports', 'ember'], function (exports, _ember) {

  function parseInput(lastIsOpening, input) {
    var block = false;

    switch (input) {
      case '${':
        lastIsOpening = true;
        break;
      case undefined:
        lastIsOpening = false;
        break;
      case '':
        break;
      default:
        if (lastIsOpening) {
          block = { input: input };
        } else {
          block = { text: input };
        }
    }

    return { lastIsOpening: lastIsOpening, block: block };
  }

  function stringHasPlaceholder(input) {
    return 1 <= input.indexOf('#');
  }

  exports['default'] = _ember['default'].Mixin.create({

    // see proposals-as-block-mixin-test.js to understand how it works

    // eslint-disable-next-line complexity
    _proposalsAsBlocks: _ember['default'].computed('proposals', function () {

      var proposals = this.get('proposals');
      if (_ember['default'].isEmpty(proposals)) {
        return [];
      }

      var result = [];

      var lines = proposals.split(/[\r|\n]+/);
      lines.forEach(function (line, index) {
        var parts = line.split(/\s*(\${)|}\s*/);
        for (var j = 0; j < parts.length; j += 1) {
          var _parseInput = parseInput(lastIsOpening || false, parts[j]);

          var lastIsOpening = _parseInput.lastIsOpening;
          var block = _parseInput.block;

          if (!block) {
            continue;
          }
          if (block.input && stringHasPlaceholder(block.input)) {

            var inputParts = block.input.split('#');
            var variable = inputParts[0];
            var placeholder = inputParts[1];

            block.input = variable;
            block.placeholder = placeholder;
          }
          result.push(block);
        }
        if (index !== lines.length - 1) {
          result.push({ breakline: true });
        }
      });
      return result;
    })
  });
});
define('pix-live/models/course', ['exports', 'ember-data'], function (exports, _emberData) {
  var Model = _emberData['default'].Model;
  var attr = _emberData['default'].attr;
  var hasMany = _emberData['default'].hasMany;
  exports['default'] = Model.extend({

    name: attr('string'),
    description: attr('string'),
    duration: attr('number'),
    imageUrl: attr('string'),
    challenges: hasMany('challenge', { inverse: null }),

    getProgress: function getProgress(challenge) {
      var challengeIndex = this.get('challenges').indexOf(challenge);

      if (challengeIndex === -1) {
        throw new RangeError('challenge ne fait pas partie de course');
      }

      var currentStep = 1 + challengeIndex;
      var maxStep = this.get('challenges.length');
      var stepPercentage = currentStep / maxStep * 100;

      return {
        currentStep: currentStep,
        maxStep: maxStep,
        stepPercentage: stepPercentage
      };
    }
  });
});
define('pix-live/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
  var attr = _emberData['default'].attr;
  exports['default'] = _emberData['default'].Model.extend({
    firstName: attr('string'),
    lastName: attr('string'),
    email: attr('string'),
    login: attr('string'),
    password: attr('string')
  });
});
define('pix-live/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('pix-live/router', ['exports', 'ember', 'pix-live/config/environment'], function (exports, _ember, _pixLiveConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _pixLiveConfigEnvironment['default'].locationType,
    rootURL: _pixLiveConfigEnvironment['default'].rootURL
  });

  // XXX https://github.com/poteto/ember-metrics/issues/43#issuecomment-252081256
  if (_pixLiveConfigEnvironment['default'].environment === 'integration' || _pixLiveConfigEnvironment['default'].environment === 'staging' || _pixLiveConfigEnvironment['default'].environment === 'production') {
    // do not make any sense in test ENV, therefore can be safely ignored
    /* istanbul ignore next */
    Router.reopen({
      metrics: _ember['default'].inject.service(),

      didTransition: function didTransition() {
        this._super.apply(this, arguments);
        this._trackPage();
      },

      _trackPage: function _trackPage() {
        var _this = this;

        _ember['default'].run.scheduleOnce('afterRender', this, function () {
          var page = _this.get('url');
          var title = _this.getWithDefault('currentRouteName', 'unknown');
          _ember['default'].get(_this, 'metrics').trackPage({ page: page, title: title });
        });
      }
    });
  }

  exports['default'] = Router.map(function () {
    this.route('index', { path: '/' });
    this.route('home');
    this.route('placement-tests');
    this.route('preferences');

    this.route('challenges.get-preview', { path: '/challenges/:challenge_id/preview' });

    this.route('courses.get-course-preview', { path: '/courses/:course_id/preview' });
    this.route('courses.get-challenge-preview', { path: '/courses/:course_id/preview/challenges/:challenge_id' });
    this.route('courses.create-assessment', { path: '/courses/:course_id/assessment' });

    this.route('assessments.get-challenge', { path: '/assessments/:assessment_id/challenges/:challenge_id' });
    this.route('assessments.get-results', { path: '/assessments/:assessment_id/results' });
  });
});
define('pix-live/routes/assessments/get-challenge', ['exports', 'ember', 'ember-data', 'pix-live/utils/get-challenge-type'], function (exports, _ember, _emberData, _pixLiveUtilsGetChallengeType) {
  exports['default'] = _ember['default'].Route.extend({

    assessmentService: _ember['default'].inject.service('assessment'),

    model: function model(params) {
      var store = this.get('store');

      return store.findRecord('assessment', params.assessment_id).then(function (assessment) {
        return store.findRecord('challenge', params.challenge_id).then(function (challenge) {
          return store.queryRecord('answer', {
            assessment: params.assessment_id,
            challenge: params.challenge_id }).then(function (answers) {

            // case 1 : user already answered the question, answer is returned
            return {
              assessment: assessment,
              challenge: challenge,
              answers: answers
            };
          })['catch'](function (error) {

            // case 2 : answer not found is part of the normal flow,
            // it happens when the user see the question for the very very first time.
            if (error && error.message && error.message.indexOf('404') > -1) {
              return {
                assessment: assessment,
                challenge: challenge
              };
            }
          }); // end of catch of store.findRecord('answer')
        }); // end of store.findRecord('challenge')
      }); // end of store.findRecord('assessment')
    },

    actions: {

      saveAnswerAndNavigate: function saveAnswerAndNavigate(currentChallenge, assessment, answerValue) {
        var _this = this;

        var answer = this._createAnswer(answerValue, currentChallenge, assessment);
        answer.save().then(function () {
          _this._navigateToNextView(currentChallenge, assessment);
        });
      }

    },

    _createAnswer: function _createAnswer(answerValue, currentChallenge, assessment) {

      return this.get('store').createRecord('answer', {
        value: answerValue,
        challenge: currentChallenge,
        assessment: assessment
      });
    },

    _navigateToNextView: function _navigateToNextView(currentChallenge, assessment) {
      var _this2 = this;

      this.get('assessmentService').getNextChallenge(currentChallenge, assessment).then(function (challenge) {
        if (challenge) {
          return _this2.transitionTo('assessments.get-challenge', assessment.get('id'), challenge.get('id'));
        }
        return _this2.transitionTo('assessments.get-results', assessment.get('id'));
      });
    },

    setupController: function setupController(controller, model) {
      this._super(controller, model);

      var progressToSet = model.assessment.get('course').then(function (course) {
        return course.getProgress(model.challenge);
      });

      controller.set('progress', _emberData['default'].PromiseObject.create({ promise: progressToSet }));

      var challengeType = (0, _pixLiveUtilsGetChallengeType['default'])(model.challenge.get('type'));
      controller.set('challengeItemType', 'challenge-item-' + challengeType);
    },

    serialize: function serialize(model) {
      return {
        assessment_id: model.assessment.id,
        challenge_id: model.challenge.id
      };
    }

  });
});
define('pix-live/routes/assessments/get-results', ['exports', 'ember', 'rsvp'], function (exports, _ember, _rsvp) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model(params) {
      var store = this.get('store');
      return _rsvp['default'].hash({
        assessment: store.findRecord('assessment', params.assessment_id, { reload: true })
      });
    },

    serialize: function serialize(model) {
      return {
        assessment_id: model.assessment.id
      };
    }

  });
});
define('pix-live/routes/challenges/get-preview', ['exports', 'ember', 'rsvp', 'pix-live/utils/get-challenge-type'], function (exports, _ember, _rsvp, _pixLiveUtilsGetChallengeType) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model(params) {
      var store = this.get('store');
      var challengePromise = store.findRecord('challenge', params.challenge_id);

      return _rsvp['default'].hash({
        challenge: challengePromise
      });
    },

    setupController: function setupController(controller, model) {
      this._super(controller, model);

      var challengeType = (0, _pixLiveUtilsGetChallengeType['default'])(model.challenge.get('type'));
      controller.set('challengeItemType', 'challenge-item-' + challengeType);
    }

  });
});
define('pix-live/routes/courses/create-assessment', ['exports', 'ember', 'rsvp'], function (exports, _ember, _rsvp) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model(params) {

      var store = this.get('store');

      return store.findRecord('course', params.course_id).then(function (course) {

        // No auth yet, therefore userName and userEmail are null.
        return store.createRecord('assessment', { course: course, userName: null, userEmail: null }).save().then(function (assessment) {
          return _rsvp['default'].hash({
            assessment: assessment
          });
        });
      });
    },

    afterModel: function afterModel(model) {
      // FIXME: manage the case when assessment's course has no challenge
      this.transitionTo('assessments.get-challenge', model.assessment.get('id'), model.assessment.get('firstChallenge.id'));
    }

  });
});
define('pix-live/routes/courses/get-challenge-preview', ['exports', 'ember', 'rsvp', 'pix-live/utils/get-challenge-type'], function (exports, _ember, _rsvp, _pixLiveUtilsGetChallengeType) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model(params) {

      var store = this.get('store');

      var promises = {
        course: store.findRecord('course', params.course_id),
        challenge: store.findRecord('challenge', params.challenge_id)
      };

      return _rsvp['default'].hash(promises).then(function (results) {

        var challenge = results.challenge;
        var course = _rsvp['default'].resolve(results.course);

        var assessment = _ember['default'].Object.create({
          id: 'fake',
          course: course
        });

        return {
          challenge: challenge,
          assessment: assessment
        };
      });
    },

    setupController: function setupController(controller, model) {
      this._super(controller, model);

      var challengeType = (0, _pixLiveUtilsGetChallengeType['default'])(model.challenge.get('type'));
      controller.set('challengeItemType', 'challenge-item-' + challengeType);
    },

    serialize: function serialize(model) {
      return model.assessment.get('course').then(function (course) {
        return {
          course_id: course.id,
          challenge_id: model.challenge.id
        };
      });
    }

  });
});
define('pix-live/routes/courses/get-course-preview', ['exports', 'ember', 'rsvp'], function (exports, _ember, _rsvp) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model(params) {
      return this.get('store').findRecord('course', params.course_id).then(function (course) {
        return _rsvp['default'].hash({
          course: course,
          nextChallenge: course.get('challenges.firstObject')
        });
      });
    }
  });
});
define('pix-live/routes/home', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    delay: _ember['default'].inject.service(),

    model: function model() {
      return this.store.findAll('course');
    }
  });
});
define('pix-live/routes/index', ['exports', 'ember', 'rsvp'], function (exports, _ember, _rsvp) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model() {
      return _rsvp['default'].all([this.store.findAll('course')]).then(function (courses) {
        return courses[0];
      });
    }

  });
});
define('pix-live/routes/placement-tests', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    delay: _ember['default'].inject.service(),

    model: function model() {
      return this.store.query('course', { adaptive: true });
    }
  });
});
define('pix-live/routes/preferences', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('pix-live/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('pix-live/services/assessment', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({

    getNextChallenge: function getNextChallenge(currentChallenge, assessment) {

      return assessment.get('course').then(function (course) {
        return course.get('challenges');
      }).then(function (challenges) {
        if (challenges.get('lastObject.id') === currentChallenge.get('id')) {
          return null;
        }
        return challenges.objectAt(challenges.indexOf(currentChallenge) + 1);
      });
    }

  });
});
define('pix-live/services/delay', ['exports', 'rsvp', 'ember', 'pix-live/config/environment'], function (exports, _rsvp, _ember, _pixLiveConfigEnvironment) {
  exports['default'] = _ember['default'].Service.extend({
    ms: function ms(_ms) {
      /* istanbul ignore if  */
      if (_pixLiveConfigEnvironment['default'].EmberENV.useDelay) {
        //unreachable by tests
        return new _rsvp['default'].Promise(function (resolve) {
          setTimeout(resolve, _ms);
        });
      }
      // test-only, to avoid test to take too long
      return new _rsvp['default'].resolve();
    }
  });
});
define('pix-live/services/metrics', ['exports', 'ember-metrics/services/metrics'], function (exports, _emberMetricsServicesMetrics) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMetricsServicesMetrics['default'];
    }
  });
});
define("pix-live/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "o60veknq", "block": "{\"statements\":[[\"append\",[\"helper\",[\"app-header\"],null,[[\"id\"],[\"app-header\"]]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"body\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/application.hbs" } });
});
define("pix-live/templates/assessments/get-challenge-loading", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "hPhP7kdH", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"assessment-challenge-loading\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"loader-container\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"loader\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"loader-inner ball-zig-zag\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ball-spinner\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ball-spinner\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/assessments/get-challenge-loading.hbs" } });
});
define("pix-live/templates/assessments/get-challenge", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "uaZaBQ+t", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"assessment-challenge\"],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"append\",[\"helper\",[\"course-banner\"],null,[[\"course\",\"withHomeLink\"],[[\"get\",[\"model\",\"assessment\",\"course\"]],true]]],false],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"progress-bar\"],null,[[\"progress\"],[[\"get\",[\"progress\"]]]]],false],[\"text\",\"\\n\\n    \"],[\"append\",[\"helper\",[\"component\"],[[\"get\",[\"challengeItemType\"]]],[[\"challenge\",\"assessment\",\"answers\",\"onValidated\"],[[\"get\",[\"model\",\"challenge\"]],[\"get\",[\"model\",\"assessment\"]],[\"get\",[\"model\",\"answers\"]],\"saveAnswerAndNavigate\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/assessments/get-challenge.hbs" } });
});
define("pix-live/templates/assessments/get-results", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "GA++hlIF", "block": "{\"statements\":[[\"append\",[\"helper\",[\"get-result\"],null,[[\"model\"],[[\"get\",[\"model\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/assessments/get-results.hbs" } });
});
define("pix-live/templates/challenges/get-preview", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "rnGG28G4", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"challenge-preview\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"component\"],[[\"get\",[\"challengeItemType\"]]],[[\"challenge\"],[[\"get\",[\"model\",\"challenge\"]]]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/challenges/get-preview.hbs" } });
});
define("pix-live/templates/components/app-footer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "0rItmRsn", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container-fluid\"],[\"flush-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row links-bar\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n\\n          \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"col-md-4 links\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"links-title\"],[\"flush-element\"],[\"text\",\"PIX\"],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[[\"unknown\",[\"rootURL\"]]]]],[\"flush-element\"],[\"text\",\"Créer un compte\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[[\"unknown\",[\"rootURL\"]]]]],[\"flush-element\"],[\"text\",\"Se connecter\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[[\"unknown\",[\"rootURL\"]]]]],[\"flush-element\"],[\"text\",\"Pour les entreprises\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n\\n          \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"col-md-4 links\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"links-title\"],[\"flush-element\"],[\"text\",\"À propos\"],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[[\"unknown\",[\"rootURL\"]]]]],[\"flush-element\"],[\"text\",\"Qui sommes-nous ?\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[[\"unknown\",[\"rootURL\"]]]]],[\"flush-element\"],[\"text\",\"Informations presse\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[[\"unknown\",[\"rootURL\"]]]]],[\"flush-element\"],[\"text\",\"F.A.Q.\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n\\n          \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"col-md-4 links\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"links-title\"],[\"flush-element\"],[\"text\",\"Nous contacter\"],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[[\"unknown\",[\"rootURL\"]]]]],[\"flush-element\"],[\"text\",\"Contacter PIX\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[[\"unknown\",[\"rootURL\"]]]]],[\"flush-element\"],[\"text\",\"Contacter le SGMAP\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row bottom-bar\"],[\"flush-element\"],[\"text\",\"\\n\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/app-footer.hbs" } });
});
define("pix-live/templates/components/app-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "6euwagS1", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"router\",\"currentRouteName\"]],\"index\"],null]],null,1,0],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"app-header-started\"],[\"flush-element\"],[\"text\",\"\\n  \\n\\n\"],[\"open-element\",\"nav\",[]],[\"static-attr\",\"class\",\"app-header-navbar\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"app-header-navbar__container container\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"navbar-header row\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"navbar-header__brand\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/pix-logo.svg\"]]],[\"static-attr\",\"alt\",\"Logo PIX\"],[\"static-attr\",\"width\",\"auto\"],[\"static-attr\",\"height\",\"60\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"navbar-header__ribbon\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"append\",[\"unknown\",[\"corner-ribbon\"]],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"app-header\"],[\"flush-element\"],[\"text\",\"\\n  \\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"app-header-container\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"app-header-container-marianne\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"app-header-marianne\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/logo-de-la-republique-francaise.svg\"]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"app-header-container-logo\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"app-header-logo\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/pix-logo.svg\"]]],[\"static-attr\",\"class\",\"app-header-logo-svg\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"corner-ribbon\"]],false],[\"text\",\"  \\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/app-header.hbs" } });
});
define("pix-live/templates/components/beta-logo", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "vqWWZZz6", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"Bêta\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/beta-logo.hbs" } });
});
define("pix-live/templates/components/bs-accordion-item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "lQf7p1WF", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"role\",\"tab\"],[\"dynamic-attr\",\"class\",[\"concat\",[\"panel-heading \",[\"helper\",[\"if\"],[[\"get\",[\"collapsed\"]],\"collapsed\",\"expanded\"],null]]]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"toggleActive\"]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"panel-title\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"append\",[\"unknown\",[\"title\"]],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"bs-collapse\"],null,[[\"collapsed\",\"class\"],[[\"get\",[\"collapsed\"]],\"panel-collapse\"]],0]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-body\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"yield\",\"default\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/bs-accordion-item.hbs" } });
});
define("pix-live/templates/components/bs-alert", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "PmWHULFi", "block": "{\"statements\":[[\"block\",[\"unless\"],[[\"get\",[\"hidden\"]]],null,1]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"close\"],[\"static-attr\",\"aria-label\",\"Close\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"dismiss\"]],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"text\",\"×\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"dismissible\"]]],null,0],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/bs-alert.hbs" } });
});
define("pix-live/templates/components/bs-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "1I045+WT", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"icon\"]]],null,0],[\"append\",[\"unknown\",[\"text\"]],false],[\"yield\",\"default\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"open-element\",\"i\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"unknown\",[\"icon\"]]]]],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/bs-button.hbs" } });
});
define("pix-live/templates/components/bs-form-element", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "zESde19z", "block": "{\"statements\":[[\"partial\",[\"get\",[\"formElementTemplate\"]]]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":true}", "meta": { "moduleName": "pix-live/templates/components/bs-form-element.hbs" } });
});
define("pix-live/templates/components/bs-form-group", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "09cBUh82", "block": "{\"statements\":[[\"yield\",\"default\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"hasFeedback\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"span\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"form-control-feedback \",[\"unknown\",[\"iconName\"]]]]],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/bs-form-group.hbs" } });
});
define("pix-live/templates/components/bs-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "vSHl81lk", "block": "{\"statements\":[[\"yield\",\"default\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/bs-form.hbs" } });
});
define("pix-live/templates/components/bs-modal-dialog", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "5l5R16oc", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"modal-dialog \",[\"unknown\",[\"sizeClass\"]]]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-content\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"header\"]]],null,4],[\"block\",[\"if\"],[[\"get\",[\"body\"]]],null,3,1],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"footer\"]]],null,0],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"            \"],[\"append\",[\"unknown\",[\"bs-modal-footer\"]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                \"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"bs-modal-body\"],null,null,2]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"append\",[\"helper\",[\"bs-modal-header\"],null,[[\"title\",\"closeButton\"],[[\"get\",[\"title\"]],[\"get\",[\"closeButton\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/bs-modal-dialog.hbs" } });
});
define("pix-live/templates/components/bs-modal-footer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "uL7sznft", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"has-block\",\"default\"]],null,6,5]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"append\",[\"unknown\",[\"closeTitle\"]],false]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"block\",[\"bs-button\"],null,[[\"type\",\"action\"],[\"primary\",\"close\"]],0],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"append\",[\"unknown\",[\"submitTitle\"]],false]],\"locals\":[]},{\"statements\":[[\"append\",[\"unknown\",[\"closeTitle\"]],false]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"block\",[\"bs-button\"],null,[[\"type\",\"action\"],[\"default\",\"close\"]],3],[\"text\",\"\\n        \"],[\"block\",[\"bs-button\"],null,[[\"type\",\"buttonType\",\"disabled\"],[\"primary\",\"submit\",[\"get\",[\"submitDisabled\"]]]],2],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"hasSubmitButton\"]]],null,4,1]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"yield\",\"default\",[[\"get\",[null]]]],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/bs-modal-footer.hbs" } });
});
define("pix-live/templates/components/bs-modal-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "PrZj5ww3", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"closeButton\"]]],null,2],[\"block\",[\"if\"],[[\"has-block\",\"default\"]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"modal-title\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"title\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"yield\",\"default\",[[\"get\",[null]]]],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"close\"],[\"static-attr\",\"aria-label\",\"Close\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"close\"]],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"text\",\"×\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/bs-modal-header.hbs" } });
});
define("pix-live/templates/components/bs-modal", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Np0BOh40", "block": "{\"statements\":[[\"block\",[\"ember-wormhole\"],null,[[\"to\",\"renderInPlace\"],[\"ember-bootstrap-modal-container\",[\"get\",[\"renderInPlace\"]]]],2]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"modal-backdrop \",[\"helper\",[\"if\"],[[\"get\",[\"fade\"]],\"fade\"],null],\" \",[\"helper\",[\"if\"],[[\"get\",[\"in\"]],\"in\"],null]]]],[\"dynamic-attr\",\"id\",[\"concat\",[[\"unknown\",[\"backdropId\"]]]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"yield\",\"default\",[[\"get\",[null]]]],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n\"],[\"block\",[\"bs-modal-dialog\"],null,[[\"close\",\"fade\",\"in\",\"id\",\"title\",\"closeButton\",\"keyboard\",\"header\",\"body\",\"footer\",\"size\",\"backdropClose\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"close\"],null],[\"get\",[\"fade\"]],[\"get\",[\"in\"]],[\"get\",[\"modalId\"]],[\"get\",[\"title\"]],[\"get\",[\"closeButton\"]],[\"get\",[\"keyboard\"]],[\"get\",[\"header\"]],[\"get\",[\"body\"]],[\"get\",[\"footer\"]],[\"get\",[\"size\"]],[\"get\",[\"backdropClose\"]]]],1],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"showBackdrop\"]]],null,0],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/bs-modal.hbs" } });
});
define("pix-live/templates/components/bs-progress-bar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "46kx+1aW", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"showLabel\"]]],null,5,2]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"sr-only\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"percentRounded\"]],false],[\"text\",\"%\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"sr-only\"],[\"flush-element\"],[\"yield\",\"default\",[[\"get\",[\"percentRounded\"]]]],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"has-block\",\"default\"]],null,1,0],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"append\",[\"unknown\",[\"percentRounded\"]],false],[\"text\",\"%\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"yield\",\"default\",[[\"get\",[\"percentRounded\"]]]],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"has-block\",\"default\"]],null,4,3]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/bs-progress-bar.hbs" } });
});
define("pix-live/templates/components/bs-progress", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Xb/D7/Uq", "block": "{\"statements\":[[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/bs-progress.hbs" } });
});
define("pix-live/templates/components/bs-select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "NudMmshj", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"prompt\"]]],null,1],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"content\"]]],[[\"key\"],[\"@identity\"]],0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"option\",[]],[\"dynamic-attr\",\"value\",[\"concat\",[[\"helper\",[\"bs-read-path\"],[[\"get\",[\"item\"]],[\"get\",[\"optionValuePath\"]]],null]]]],[\"dynamic-attr\",\"selected\",[\"helper\",[\"bs-eq\"],[[\"get\",[\"item\"]],[\"get\",[\"value\"]]],null],null],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"bs-read-path\"],[[\"get\",[\"item\"]],[\"get\",[\"optionLabelPath\"]]],null],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"item\"]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"option\",[]],[\"static-attr\",\"disabled\",\"\"],[\"dynamic-attr\",\"selected\",[\"helper\",[\"bs-not\"],[[\"get\",[\"value\"]]],null],null],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"unknown\",[\"prompt\"]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/bs-select.hbs" } });
});
define("pix-live/templates/components/challenge-actionbar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "YAnQHVl4", "block": "{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"challenge-item-actions\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"challenge-item-actions__action challenge-item-actions__skip-action\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"skip\"]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"challenge-item-actions__skip-action-text\"],[\"flush-element\"],[\"text\",\"Je passe\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"challenge-item-actions__action challenge-item-actions__validate-action\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"validate\"]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"challenge-item-actions__validate-action-text\"],[\"flush-element\"],[\"text\",\"Je valide\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/challenge-actionbar.hbs" } });
});
define("pix-live/templates/components/challenge-instruction", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "gYO5xZtM", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel challenge-statement\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"instruction\",\"text\"]]],null,2],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"instruction\",\"illustrationUrl\"]]],null,1],[\"block\",[\"if\"],[[\"get\",[\"instruction\",\"attachmentUrl\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"hr\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"challenge-attachment\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[[\"unknown\",[\"instruction\",\"attachmentUrl\"]]]]],[\"static-attr\",\"class\",\"button\"],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-download\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n              Télécharger le fichier\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"append\",[\"unknown\",[\"instruction\",\"attachmentFilename\"]],false],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"hr\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\" challenge-illustration\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"instruction\",\"illustrationUrl\"]]]]],[\"static-attr\",\"alt\",\"ceci est une image\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"challenge-instruction\"],[\"flush-element\"],[\"append\",[\"helper\",[\"markdown-to-html\"],null,[[\"extensions\",\"markdown\"],[\"targetBlank\",[\"get\",[\"instruction\",\"text\"]]]]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/challenge-instruction.hbs" } });
});
define("pix-live/templates/components/challenge-item-generic", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "kUR9P7Iu", "block": "{\"statements\":[[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/challenge-item-generic.hbs" } });
});
define("pix-live/templates/components/challenge-item-qcm", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "h6B5RLiJ", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"challenge-instruction\"],null,[[\"instruction\"],[[\"get\",[\"challenge\",\"_instructionAsObject\"]]]]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel challenge-response\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"challenge-proposals\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"qcm-proposals\"],null,[[\"answers\",\"proposals\",\"onAnswerUpdated\"],[[\"get\",[\"answers\",\"_valueAsArrayOfBoolean\"]],[\"get\",[\"challenge\",\"_proposalsAsArray\"]],\"answerChanged\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"errorMessage\"]]],null,1],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"assessment\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"append\",[\"helper\",[\"challenge-actionbar\"],null,[[\"skip\",\"validate\"],[\"skip\",\"validate\"]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"alert alert-danger\"],[\"static-attr\",\"role\",\"alert\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"errorMessage\"]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/challenge-item-qcm.hbs" } });
});
define("pix-live/templates/components/challenge-item-qcu", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "7GbsrNPk", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"challenge-instruction\"],null,[[\"instruction\"],[[\"get\",[\"challenge\",\"_instructionAsObject\"]]]]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel challenge-response\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"challenge-proposals\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"qcu-proposals\"],null,[[\"answers\",\"proposals\",\"onAnswerUpdated\"],[[\"get\",[\"answers\",\"_valueAsArrayOfBoolean\"]],[\"get\",[\"challenge\",\"_proposalsAsArray\"]],\"answerChanged\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"errorMessage\"]]],null,1],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"assessment\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"append\",[\"helper\",[\"challenge-actionbar\"],null,[[\"skip\",\"validate\"],[\"skip\",\"validate\"]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"alert alert-danger\"],[\"static-attr\",\"role\",\"alert\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"errorMessage\"]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/challenge-item-qcu.hbs" } });
});
define("pix-live/templates/components/challenge-item-qroc", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "SBzsIe8/", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"challenge-instruction\"],null,[[\"instruction\"],[[\"get\",[\"challenge\",\"_instructionAsObject\"]]]]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel challenge-response\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"challenge-proposals\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"qroc-proposal\"],null,[[\"blocks\",\"answerValue\",\"onInputChanged\"],[[\"get\",[\"challenge\",\"_proposalsAsBlocks\"]],[\"get\",[\"answers\",\"value\"]],\"inputChanged\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"errorMessage\"]]],null,1],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"assessment\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"append\",[\"helper\",[\"challenge-actionbar\"],null,[[\"skip\",\"validate\"],[\"skip\",\"validate\"]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"alert alert-danger\"],[\"static-attr\",\"role\",\"alert\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"errorMessage\"]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/challenge-item-qroc.hbs" } });
});
define("pix-live/templates/components/challenge-item-qrocm", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "r8F2xrcM", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"challenge-instruction\"],null,[[\"instruction\"],[[\"get\",[\"challenge\",\"_instructionAsObject\"]]]]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel challenge-response\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"challenge-proposals\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"qrocm-proposal\"],null,[[\"blocks\",\"answersValue\",\"onInputChanged\"],[[\"get\",[\"challenge\",\"_proposalsAsBlocks\"]],[\"get\",[\"answers\",\"_valuesAsMap\"]],\"inputChanged\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"errorMessage\"]]],null,1],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"assessment\"]]],null,0],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"append\",[\"helper\",[\"challenge-actionbar\"],null,[[\"skip\",\"validate\"],[\"skip\",\"validate\"]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"alert alert-danger\"],[\"static-attr\",\"role\",\"alert\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"unknown\",[\"errorMessage\"]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/challenge-item-qrocm.hbs" } });
});
define("pix-live/templates/components/corner-ribbon", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "5y6xtzVV", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"corner-ribbon-wrapper\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"corner-ribbon\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ribbon\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"flush-element\"],[\"text\",\"BÊTA\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/corner-ribbon.hbs" } });
});
define("pix-live/templates/components/course-banner", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "vBdH8oCf", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"course-banner\"],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container course-banner-wrapper\"],[\"flush-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"course-banner-name\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"course\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"withHomeLink\"]]],null,1],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Retour à la liste des tests\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"block\",[\"link-to\"],[\"index\"],[[\"class\"],[\"course-banner-home-link\"]],0],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/course-banner.hbs" } });
});
define("pix-live/templates/components/first-page", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "vBlf192F", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page\"],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-hero\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-hero__box\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-hero__box-item\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-hero__main-value-prop\"],[\"flush-element\"],[\"text\",\"\\n          Développez vos compétences numériques\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-hero__sub-value-prop\"],[\"flush-element\"],[\"text\",\"\\n          PIX est un projet public de plateforme en ligne d’évaluation et de certification des compétences numériques, en cours de développement.\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-challenges\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-challenges__empty\"],[\"flush-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-challenges__title\"],[\"flush-element\"],[\"text\",\"\\n      Découvrez nos épreuves et aidez-nous à les améliorer !\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-challenges__cards container\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"row courses\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,3],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-email\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-email-content\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-email__title\"],[\"flush-element\"],[\"text\",\"\\n        Vous souhaitez devenir beta-testeur ou être informé(e) du développement de Pix ?\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-email__input-container\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"unknown\",[\"load-email\"]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-features\"],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature__icon-container\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/icon-cafe.svg\"]]],[\"static-attr\",\"class\",\"first-page-feature__icon\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature__title\"],[\"flush-element\"],[\"text\",\"Vivez l’expérience PIX\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature__text\"],[\"flush-element\"],[\"text\",\" Un parcours d’évaluation convivial, accessible et interactif.\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature__icon-container\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/icon-monde.svg\"]]],[\"static-attr\",\"class\",\"first-page-feature__icon\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature__title\"],[\"flush-element\"],[\"text\",\"PIX est pour tout le monde \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature__text\"],[\"flush-element\"],[\"text\",\" Collégiens, lycéens, étudiants, professionnels, citoyens…\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature__icon-container\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/icon-reference.svg\"]]],[\"static-attr\",\"class\",\"first-page-feature__icon\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature__title\"],[\"flush-element\"],[\"text\",\"PIX est la référence\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature__text\"],[\"flush-element\"],[\"text\",\" La certification nationale de la culture numérique made in France au standard européen.\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature__icon-container\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/icon-evolutif.svg\"]]],[\"static-attr\",\"class\",\"first-page-feature__icon\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature__title\"],[\"flush-element\"],[\"text\",\"PIX est évolutif\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature__text\"],[\"flush-element\"],[\"text\",\" Le référentiel de compétences s’adapte en permanence aux évolutions du monde numérique.\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature__icon-container\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/icon-gratuit.svg\"]]],[\"static-attr\",\"class\",\"first-page-feature__icon\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature__title\"],[\"flush-element\"],[\"text\",\"PIX est gratuit\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature__text\"],[\"flush-element\"],[\"text\",\" Entraînez-vous et progressez gratuitement à votre rythme avant d’être certifié.\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-footer container\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-footer__item-marianne\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/mnsr3.svg\"]]],[\"static-attr\",\"class\",\"first-page-footer__logo-marianne-img\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-footer__item-contact\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"first-page-footer__mailto\"],[\"static-attr\",\"href\",\"mailto:contact@pix.beta.gouv.fr\"],[\"flush-element\"],[\"text\",\"Contactez-nous\"],[\"close-element\"],[\"text\",\"\\n       |\\n      \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"first-page-footer__mailto\"],[\"static-attr\",\"href\",\"https://github.com/sgmap/pix\"],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"text\",\"Le code source est libre\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-footer__item-logo\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/pix-logo.svg\"]]],[\"static-attr\",\"class\",\"first-page-footer__logo-pix-img\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"              Démarrer le test\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"course-picture\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/course-default-image.png\"]]],[\"static-attr\",\"alt\",\"Illustration du test\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"course-picture\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"course\",\"imageUrl\"]]]]],[\"static-attr\",\"alt\",\"Illustration du test\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"col-md-3 course-item animated fadeIn\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel course\"],[\"dynamic-attr\",\"data-id\",[\"concat\",[[\"unknown\",[\"course\",\"id\"]]]]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"course\",\"imageUrl\"]]],null,2,1],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"course-content\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"course-name\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"append\",[\"unknown\",[\"course\",\"name\"]],false],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"course-description\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"append\",[\"unknown\",[\"course\",\"description\"]],false],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"course-number-of-challenges\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"append\",[\"unknown\",[\"course\",\"challenges\",\"length\"]],false],[\"text\",\" épreuves\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"course-actions\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"courses.create-assessment\",[\"get\",[\"course\",\"id\"]]],[[\"class\"],[\"button button-primary start-button\"]],0],[\"text\",\"            \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"course\"]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/first-page.hbs" } });
});
define("pix-live/templates/components/form-element/errors", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "EA+p4/Wy", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"showValidationMessages\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"help-block\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"validationMessages\",\"firstObject\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/form-element/errors.hbs" } });
});
define("pix-live/templates/components/form-element/feedback-icon", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "foour8GO", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"hasFeedback\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"span\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"form-control-feedback \",[\"unknown\",[\"iconName\"]]]]],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/form-element/feedback-icon.hbs" } });
});
define("pix-live/templates/components/form-element/horizontal/checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ZpcEi+Tf", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"unknown\",[\"horizontalInputGridClass\"]],\" \",[\"unknown\",[\"horizontalInputOffsetGridClass\"]]]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"checkbox\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"\\n            \"],[\"append\",[\"helper\",[\"input\"],null,[[\"name\",\"type\",\"checked\",\"disabled\",\"required\"],[[\"get\",[\"name\"]],\"checkbox\",[\"get\",[\"value\"]],[\"get\",[\"disabled\"]],[\"get\",[\"required\"]]]]],false],[\"text\",\" \"],[\"append\",[\"unknown\",[\"label\"]],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"partial\",\"components/form-element/errors\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":true}", "meta": { "moduleName": "pix-live/templates/components/form-element/horizontal/checkbox.hbs" } });
});
define("pix-live/templates/components/form-element/horizontal/default", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "6EcKUQXM", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"hasLabel\"]]],null,5,2]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"            \"],[\"append\",[\"helper\",[\"bs-input\"],null,[[\"name\",\"type\",\"value\",\"placeholder\",\"autofocus\",\"disabled\",\"required\"],[[\"get\",[\"name\"]],[\"get\",[\"controlType\"]],[\"get\",[\"value\"]],[\"get\",[\"placeholder\"]],[\"get\",[\"autofocus\"]],[\"get\",[\"disabled\"]],[\"get\",[\"required\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"yield\",\"default\",[[\"get\",[\"value\"]],[\"get\",[\"formElementId\"]],[\"get\",[\"validation\"]]]],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"unknown\",[\"horizontalInputGridClass\"]],\" \",[\"unknown\",[\"horizontalInputOffsetGridClass\"]]]]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"has-block\",\"default\"]],null,1,0],[\"text\",\"        \"],[\"partial\",\"components/form-element/feedback-icon\"],[\"text\",\"\\n        \"],[\"partial\",\"components/form-element/errors\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"append\",[\"helper\",[\"bs-input\"],null,[[\"id\",\"name\",\"type\",\"value\",\"placeholder\",\"autofocus\",\"disabled\",\"required\"],[[\"get\",[\"formElementId\"]],[\"get\",[\"name\"]],[\"get\",[\"controlType\"]],[\"get\",[\"value\"]],[\"get\",[\"placeholder\"]],[\"get\",[\"autofocus\"]],[\"get\",[\"disabled\"]],[\"get\",[\"required\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"yield\",\"default\",[[\"get\",[\"value\"]],[\"get\",[\"formElementId\"]],[\"get\",[\"validation\"]]]],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"label\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"control-label \",[\"unknown\",[\"horizontalLabelGridClass\"]],\" \",[\"helper\",[\"if\"],[[\"get\",[\"invisibleLabel\"]],\"sr-only\"],null]]]],[\"dynamic-attr\",\"for\",[\"concat\",[[\"unknown\",[\"formElementId\"]]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"label\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"unknown\",[\"horizontalInputGridClass\"]]]]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"has-block\",\"default\"]],null,4,3],[\"text\",\"        \"],[\"partial\",\"components/form-element/feedback-icon\"],[\"text\",\"\\n        \"],[\"partial\",\"components/form-element/errors\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":true}", "meta": { "moduleName": "pix-live/templates/components/form-element/horizontal/default.hbs" } });
});
define("pix-live/templates/components/form-element/horizontal/select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "0CXg2aPo", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"hasLabel\"]]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"unknown\",[\"horizontalInputGridClass\"]],\" \",[\"unknown\",[\"horizontalInputOffsetGridClass\"]]]]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"bs-select\"],null,[[\"name\",\"content\",\"optionValuePath\",\"optionLabelPath\",\"value\"],[[\"get\",[\"name\"]],[\"get\",[\"choices\"]],[\"get\",[\"choiceValueProperty\"]],[\"get\",[\"choiceLabelProperty\"]],[\"get\",[\"value\"]]]]],false],[\"text\",\"\\n        \"],[\"partial\",\"components/form-element/feedback-icon\"],[\"text\",\"\\n        \"],[\"partial\",\"components/form-element/errors\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"label\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"control-label \",[\"unknown\",[\"horizontalLabelGridClass\"]],\" \",[\"helper\",[\"if\"],[[\"get\",[\"invisibleLabel\"]],\"sr-only\"],null]]]],[\"dynamic-attr\",\"for\",[\"concat\",[[\"unknown\",[\"formElementId\"]]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"label\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"unknown\",[\"horizontalInputGridClass\"]]]]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"bs-select\"],null,[[\"id\",\"name\",\"content\",\"optionValuePath\",\"optionLabelPath\",\"value\",\"disabled\",\"required\"],[[\"get\",[\"formElementId\"]],[\"get\",[\"name\"]],[\"get\",[\"choices\"]],[\"get\",[\"choiceValueProperty\"]],[\"get\",[\"choiceLabelProperty\"]],[\"get\",[\"value\"]],[\"get\",[\"disabled\"]],[\"get\",[\"required\"]]]]],false],[\"text\",\"\\n        \"],[\"partial\",\"components/form-element/feedback-icon\"],[\"text\",\"\\n        \"],[\"partial\",\"components/form-element/errors\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":true}", "meta": { "moduleName": "pix-live/templates/components/form-element/horizontal/select.hbs" } });
});
define("pix-live/templates/components/form-element/horizontal/textarea", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "fh5JHfaR", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"hasLabel\"]]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"unknown\",[\"horizontalInputGridClass\"]],\" \",[\"unknown\",[\"horizontalInputOffsetGridClass\"]]]]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"bs-textarea\"],null,[[\"name\",\"value\",\"placeholder\",\"autofocus\",\"cols\",\"rows\",\"disabled\",\"required\"],[[\"get\",[\"name\"]],[\"get\",[\"value\"]],[\"get\",[\"placeholder\"]],[\"get\",[\"autofocus\"]],[\"get\",[\"cols\"]],[\"get\",[\"rows\"]],[\"get\",[\"disabled\"]],[\"get\",[\"required\"]]]]],false],[\"text\",\"\\n        \"],[\"partial\",\"components/form-element/feedback-icon\"],[\"text\",\"\\n        \"],[\"partial\",\"components/form-element/errors\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"label\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"control-label \",[\"unknown\",[\"horizontalLabelGridClass\"]],\" \",[\"helper\",[\"if\"],[[\"get\",[\"invisibleLabel\"]],\"sr-only\"],null]]]],[\"dynamic-attr\",\"for\",[\"concat\",[[\"unknown\",[\"formElementId\"]]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"label\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"unknown\",[\"horizontalInputGridClass\"]]]]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"bs-textarea\"],null,[[\"id\",\"name\",\"value\",\"placeholder\",\"autofocus\",\"cols\",\"rows\",\"disabled\",\"required\"],[[\"get\",[\"formElementId\"]],[\"get\",[\"name\"]],[\"get\",[\"value\"]],[\"get\",[\"placeholder\"]],[\"get\",[\"autofocus\"]],[\"get\",[\"cols\"]],[\"get\",[\"rows\"]],[\"get\",[\"disabled\"]],[\"get\",[\"required\"]]]]],false],[\"text\",\"\\n        \"],[\"partial\",\"components/form-element/feedback-icon\"],[\"text\",\"\\n        \"],[\"partial\",\"components/form-element/errors\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":true}", "meta": { "moduleName": "pix-live/templates/components/form-element/horizontal/textarea.hbs" } });
});
define("pix-live/templates/components/form-element/inline/checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "fUztP3Fa", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"checkbox\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"input\"],null,[[\"name\",\"type\",\"checked\",\"disabled\",\"required\"],[[\"get\",[\"name\"]],\"checkbox\",[\"get\",[\"value\"]],[\"get\",[\"disabled\"]],[\"get\",[\"required\"]]]]],false],[\"text\",\" \"],[\"append\",[\"unknown\",[\"label\"]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/form-element/inline/checkbox.hbs" } });
});
define("pix-live/templates/components/form-element/inline/default", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "fHFWWXSB", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"hasLabel\"]]],null,2],[\"block\",[\"if\"],[[\"has-block\",\"default\"]],null,1,0],[\"partial\",\"components/form-element/feedback-icon\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"append\",[\"helper\",[\"bs-input\"],null,[[\"id\",\"name\",\"type\",\"value\",\"placeholder\",\"autofocus\",\"disabled\",\"required\"],[[\"get\",[\"formElementId\"]],[\"get\",[\"name\"]],[\"get\",[\"controlType\"]],[\"get\",[\"value\"]],[\"get\",[\"placeholder\"]],[\"get\",[\"autofocus\"]],[\"get\",[\"disabled\"]],[\"get\",[\"required\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"yield\",\"default\",[[\"get\",[\"value\"]],[\"get\",[\"formElementId\"]],[\"get\",[\"validation\"]]]],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"label\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"control-label \",[\"helper\",[\"if\"],[[\"get\",[\"invisibleLabel\"]],\"sr-only\"],null]]]],[\"dynamic-attr\",\"for\",[\"concat\",[[\"unknown\",[\"formElementId\"]]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"label\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":true}", "meta": { "moduleName": "pix-live/templates/components/form-element/inline/default.hbs" } });
});
define("pix-live/templates/components/form-element/inline/select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "wBS5qs+z", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"hasLabel\"]]],null,0],[\"append\",[\"helper\",[\"bs-select\"],null,[[\"id\",\"name\",\"content\",\"optionValuePath\",\"optionLabelPath\",\"value\",\"disabled\",\"required\"],[[\"get\",[\"formElementId\"]],[\"get\",[\"name\"]],[\"get\",[\"choices\"]],[\"get\",[\"choiceValueProperty\"]],[\"get\",[\"choiceLabelProperty\"]],[\"get\",[\"value\"]],[\"get\",[\"disabled\"]],[\"get\",[\"required\"]]]]],false],[\"text\",\"\\n\"],[\"partial\",\"components/form-element/feedback-icon\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"label\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"control-label \",[\"helper\",[\"if\"],[[\"get\",[\"invisibleLabel\"]],\"sr-only\"],null]]]],[\"dynamic-attr\",\"for\",[\"concat\",[[\"unknown\",[\"formElementId\"]]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"label\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":true}", "meta": { "moduleName": "pix-live/templates/components/form-element/inline/select.hbs" } });
});
define("pix-live/templates/components/form-element/inline/textarea", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "k1pEN3Dv", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"hasLabel\"]]],null,0],[\"append\",[\"helper\",[\"bs-textarea\"],null,[[\"id\",\"name\",\"value\",\"placeholder\",\"autofocus\",\"cols\",\"rows\",\"disabled\",\"required\"],[[\"get\",[\"formElementId\"]],[\"get\",[\"name\"]],[\"get\",[\"value\"]],[\"get\",[\"placeholder\"]],[\"get\",[\"autofocus\"]],[\"get\",[\"cols\"]],[\"get\",[\"rows\"]],[\"get\",[\"disabled\"]],[\"get\",[\"required\"]]]]],false],[\"text\",\"\\n\"],[\"partial\",\"components/form-element/feedback-icon\"],[\"text\",\"\\n\"],[\"partial\",\"components/form-element/errors\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"label\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"control-label \",[\"helper\",[\"if\"],[[\"get\",[\"invisibleLabel\"]],\"sr-only\"],null]]]],[\"dynamic-attr\",\"for\",[\"concat\",[[\"unknown\",[\"formElementId\"]]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"label\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":true}", "meta": { "moduleName": "pix-live/templates/components/form-element/inline/textarea.hbs" } });
});
define("pix-live/templates/components/form-element/vertical/checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "N2RnpIC7", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"checkbox\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"input\"],null,[[\"name\",\"type\",\"checked\",\"disabled\",\"required\"],[[\"get\",[\"name\"]],\"checkbox\",[\"get\",[\"value\"]],[\"get\",[\"disabled\"]],[\"get\",[\"required\"]]]]],false],[\"text\",\" \"],[\"append\",[\"unknown\",[\"label\"]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"partial\",\"components/form-element/errors\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":true}", "meta": { "moduleName": "pix-live/templates/components/form-element/vertical/checkbox.hbs" } });
});
define("pix-live/templates/components/form-element/vertical/default", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "8YpJ2HJs", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"hasLabel\"]]],null,2],[\"block\",[\"if\"],[[\"has-block\",\"default\"]],null,1,0],[\"partial\",\"components/form-element/feedback-icon\"],[\"text\",\"\\n\"],[\"partial\",\"components/form-element/errors\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"append\",[\"helper\",[\"bs-input\"],null,[[\"id\",\"name\",\"type\",\"value\",\"placeholder\",\"autofocus\",\"disabled\",\"required\"],[[\"get\",[\"formElementId\"]],[\"get\",[\"name\"]],[\"get\",[\"controlType\"]],[\"get\",[\"value\"]],[\"get\",[\"placeholder\"]],[\"get\",[\"autofocus\"]],[\"get\",[\"disabled\"]],[\"get\",[\"required\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"yield\",\"default\",[[\"get\",[\"value\"]],[\"get\",[\"formElementId\"]],[\"get\",[\"validation\"]]]],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"label\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"control-label \",[\"helper\",[\"if\"],[[\"get\",[\"invisibleLabel\"]],\"sr-only\"],null]]]],[\"dynamic-attr\",\"for\",[\"concat\",[[\"unknown\",[\"formElementId\"]]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"label\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":true}", "meta": { "moduleName": "pix-live/templates/components/form-element/vertical/default.hbs" } });
});
define("pix-live/templates/components/form-element/vertical/select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Wg7vAxzk", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"hasLabel\"]]],null,0],[\"append\",[\"helper\",[\"bs-select\"],null,[[\"id\",\"name\",\"content\",\"optionValuePath\",\"optionLabelPath\",\"value\",\"disabled\",\"required\"],[[\"get\",[\"formElementId\"]],[\"get\",[\"name\"]],[\"get\",[\"choices\"]],[\"get\",[\"choiceValueProperty\"]],[\"get\",[\"choiceLabelProperty\"]],[\"get\",[\"value\"]],[\"get\",[\"disabled\"]],[\"get\",[\"required\"]]]]],false],[\"text\",\"\\n\"],[\"partial\",\"components/form-element/feedback-icon\"],[\"text\",\"\\n\"],[\"partial\",\"components/form-element/errors\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"label\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"control-label \",[\"helper\",[\"if\"],[[\"get\",[\"invisibleLabel\"]],\"sr-only\"],null]]]],[\"dynamic-attr\",\"for\",[\"concat\",[[\"unknown\",[\"formElementId\"]]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"label\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":true}", "meta": { "moduleName": "pix-live/templates/components/form-element/vertical/select.hbs" } });
});
define("pix-live/templates/components/form-element/vertical/textarea", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "re+h4qpT", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"hasLabel\"]]],null,0],[\"append\",[\"helper\",[\"bs-textarea\"],null,[[\"id\",\"value\",\"name\",\"placeholder\",\"autofocus\",\"disabled\",\"required\",\"cols\",\"rows\"],[[\"get\",[\"formElementId\"]],[\"get\",[\"value\"]],[\"get\",[\"name\"]],[\"get\",[\"placeholder\"]],[\"get\",[\"autofocus\"]],[\"get\",[\"disabled\"]],[\"get\",[\"required\"]],[\"get\",[\"cols\"]],[\"get\",[\"rows\"]]]]],false],[\"text\",\"\\n\"],[\"partial\",\"components/form-element/feedback-icon\"],[\"text\",\"\\n\"],[\"partial\",\"components/form-element/errors\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"label\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"control-label \",[\"helper\",[\"if\"],[[\"get\",[\"invisibleLabel\"]],\"sr-only\"],null]]]],[\"dynamic-attr\",\"for\",[\"concat\",[[\"unknown\",[\"formElementId\"]]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"label\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":true}", "meta": { "moduleName": "pix-live/templates/components/form-element/vertical/textarea.hbs" } });
});
define("pix-live/templates/components/get-result", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "1uABphGS", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results\"],[\"static-attr\",\"id\",\"assessment-results\"],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"append\",[\"helper\",[\"course-banner\"],null,[[\"course\"],[[\"get\",[\"model\",\"assessment\",\"course\"]]]]],false],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results-title\"],[\"flush-element\"],[\"text\",\"\\n      Vos résultats\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results-list\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"assessment\",\"answers\"]]],null,7],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results-link\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"index\"],[[\"class\",\"tagName\"],[\"assessment-results-link-home\",\"button\"]],0],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"assessment-results-back\"],[\"flush-element\"],[\"text\",\"Revenir à la liste des tests\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"         \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"data-toggle\",\"tooltip\"],[\"static-attr\",\"data-placement\",\"top\"],[\"static-attr\",\"title\",\"Vérification en cours\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"width\",\"24\"],[\"static-attr\",\"height\",\"24\"],[\"static-attr\",\"viewBox\",\"0 0 24 24\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M20,2V4H18V8.41L14.41,12L18,15.59V20H20V22H4V20H6V15.59L9.59,12L6,8.41V4H4V2H20M16,16.41L13,13.41V10.59L16,7.59V4H8V7.59L11,10.59V13.41L8,16.41V17H10L12,15L14,17H16V16.41M12,9L10,7H14L12,9Z\"],[\"static-attr\",\"fill\",\"#446eff\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n         \"],[\"close-element\"],[\"text\",\"\\n         \"]],\"locals\":[]},{\"statements\":[[\"text\",\"         \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"data-toggle\",\"tooltip\"],[\"static-attr\",\"data-placement\",\"top\"],[\"static-attr\",\"title\",\"Sans réponse\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"width\",\"24\"],[\"static-attr\",\"height\",\"24\"],[\"static-attr\",\"viewBox\",\"0 0 24 24\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M8,8L13,12L8,16M14,8H16V16H14\"],[\"static-attr\",\"fill\",\"#3e4149\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n         \"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"answer\",\"isResultWithoutAnswer\"]]],null,2,1]],\"locals\":[]},{\"statements\":[[\"text\",\"         \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"data-toggle\",\"tooltip\"],[\"static-attr\",\"data-placement\",\"top\"],[\"static-attr\",\"title\",\"Réponse incorrecte\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"width\",\"24px\"],[\"static-attr\",\"height\",\"24px\"],[\"static-attr\",\"viewBox\",\"0 0 24 24\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z\"],[\"static-attr\",\"fill\",\"#ff4600\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n         \"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"answer\",\"isResultNotOk\"]]],null,4,3]],\"locals\":[]},{\"statements\":[[\"text\",\"         \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"data-toggle\",\"tooltip\"],[\"static-attr\",\"data-placement\",\"top\"],[\"static-attr\",\"title\",\"Réponse correcte\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"width\",\"24\"],[\"static-attr\",\"height\",\"24\"],[\"static-attr\",\"viewBox\",\"0 0 24 24\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z\"],[\"static-attr\",\"fill\",\"#30d5b0\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n         \"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results-list-item assessment-results-result\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results-result-index\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"add\"],[[\"get\",[\"index\"]],1],null],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results-result-line\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results-result-instruction\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"strip-instruction\"],[[\"helper\",[\"convert-to-html\"],[[\"get\",[\"answer\",\"challenge\",\"instruction\"]]],null]],null],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results-result-img\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"answer\",\"isResultOk\"]]],null,6,5],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"answer\",\"index\"]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/get-result.hbs" } });
});
define("pix-live/templates/components/identification-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "qi9YIM7H", "block": "{\"statements\":[[\"open-element\",\"form\",[]],[\"static-attr\",\"id\",\"identification-form\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"identify\"],[[\"on\"],[\"submit\"]]],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"firstName\"],[\"flush-element\"],[\"text\",\"Prénom\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"input\"],null,[[\"id\",\"type\",\"value\",\"class\",\"autofocus\",\"autocomplete\"],[\"firstName\",\"text\",[\"get\",[\"user\",\"firstName\"]],\"form-control\",\"true\",\"fname\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"lastName\"],[\"flush-element\"],[\"text\",\"Nom\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"input\"],null,[[\"id\",\"type\",\"value\",\"class\",\"autocomplete\"],[\"lastName\",\"text\",[\"get\",[\"user\",\"lastName\"]],\"form-control\",\"lname\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"email\"],[\"flush-element\"],[\"text\",\"Adresse e-mail\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"input\"],null,[[\"id\",\"type\",\"value\",\"class\",\"autocomplete\"],[\"email\",\"email\",[\"get\",[\"user\",\"email\"]],\"form-control\",\"email\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"hasError\"]]],null,0],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"identification-form-actions pull-right\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"button button-primary\"],[\"static-attr\",\"type\",\"submit\"],[\"flush-element\"],[\"text\",\"Identifiez-vous\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"alert alert-danger\"],[\"static-attr\",\"role\",\"alert\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"unknown\",[\"errorMessage\"]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/identification-form.hbs" } });
});
define("pix-live/templates/components/load-email", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "7JN3o9Kk", "block": "{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"form\",[]],[\"static-attr\",\"class\",\"load-email__form\"],[\"static-attr\",\"id\",\"contact-form\"],[\"flush-element\"],[\"text\",\"\\n  \\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"load-email__form-item\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"class\",\"load-email-enter\"],[\"static-attr\",\"placeholder\",\"Saisissez votre email\"],[\"static-attr\",\"type\",\"email\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"load-email__form-item\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"load-email-button\"],[\"flush-element\"],[\"text\",\"Rejoindre la communauté\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/load-email.hbs" } });
});
define("pix-live/templates/components/progress-bar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "kPlukIXT", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"progress pix-progress-bar\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"progress-bar progress-bar-info\"],[\"static-attr\",\"role\",\"progressbar\"],[\"dynamic-attr\",\"aria-valuenow\",[\"concat\",[[\"unknown\",[\"progress\",\"currentStep\"]]]]],[\"static-attr\",\"aria-valuemin\",\"0\"],[\"static-attr\",\"aria-valuemax\",\"100\"],[\"dynamic-attr\",\"style\",[\"concat\",[\"width:\",[\"unknown\",[\"progress\",\"stepPercentage\"]],\"%\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"progress\",\"currentStep\"]],false],[\"text\",\" / \"],[\"append\",[\"unknown\",[\"progress\",\"maxStep\"]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/progress-bar.hbs" } });
});
define("pix-live/templates/components/qcm-proposals", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "541XjPmh", "block": "{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"labeledCheckboxes\"]]],null,0],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"challenge-proposal\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"text\",\"        \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"type\",\"checkbox\"],[\"dynamic-attr\",\"name\",[\"concat\",[[\"helper\",[\"inc\"],[[\"get\",[\"index\"]]],null]]]],[\"dynamic-attr\",\"checked\",[\"unknown\",[\"labeledCheckbox\",\"1\"]],null],[\"dynamic-attr\",\"onclick\",[\"helper\",[\"action\"],[[\"get\",[null]],\"checkboxClicked\"],null],null],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"text\",\"        \"],[\"append\",[\"unknown\",[\"labeledCheckbox\",\"0\"]],false],[\"text\",\"\\n\\n      \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"  \\n\"]],\"locals\":[\"labeledCheckbox\",\"index\"]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/qcm-proposals.hbs" } });
});
define("pix-live/templates/components/qcu-proposals", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "m++tTdK8", "block": "{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"labeledRadios\"]]],null,0],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"challenge-proposal\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"text\",\"        \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"type\",\"radio\"],[\"dynamic-attr\",\"name\",[\"concat\",[[\"helper\",[\"inc\"],[[\"get\",[\"index\"]]],null]]]],[\"dynamic-attr\",\"checked\",[\"unknown\",[\"labeledRadio\",\"1\"]],null],[\"dynamic-attr\",\"onclick\",[\"helper\",[\"action\"],[[\"get\",[null]],\"radioClicked\",[\"get\",[\"index\"]]],null],null],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"text\",\"        \"],[\"append\",[\"unknown\",[\"labeledRadio\",\"0\"]],false],[\"text\",\"\\n\\n      \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"  \\n\"]],\"locals\":[\"labeledRadio\",\"index\"]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/qcu-proposals.hbs" } });
});
define("pix-live/templates/components/qroc-proposal", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "cGqVLvFV", "block": "{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"blocks\"]]],null,3]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"hr\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"type\",\"text\"],[\"static-attr\",\"data-uid\",\"qroc-proposal-uid\"],[\"dynamic-attr\",\"name\",[\"unknown\",[\"block\",\"input\"]],null],[\"dynamic-attr\",\"placeholder\",[\"unknown\",[\"block\",\"placeholder\"]],null],[\"dynamic-attr\",\"value\",[\"concat\",[[\"unknown\",[\"answerValue\"]]]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"block\",\"text\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"block\",\"text\"]]],null,2],[\"text\",\"  \\n  \\n\"],[\"block\",[\"if\"],[[\"get\",[\"block\",\"input\"]]],null,1],[\"text\",\"  \\n\"],[\"block\",[\"if\"],[[\"get\",[\"block\",\"breakline\"]]],null,0],[\"text\",\"\\n\"]],\"locals\":[\"block\"]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/qroc-proposal.hbs" } });
});
define("pix-live/templates/components/qrocm-proposal", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "maQCSXPQ", "block": "{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"blocks\"]]],null,3]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"hr\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"type\",\"text\"],[\"dynamic-attr\",\"name\",[\"unknown\",[\"block\",\"input\"]],null],[\"dynamic-attr\",\"value\",[\"helper\",[\"property-of\"],[[\"get\",[\"answersValue\"]],[\"get\",[\"block\",\"input\"]]],null],null],[\"dynamic-attr\",\"placeholder\",[\"unknown\",[\"block\",\"placeholder\"]],null],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"block\",\"text\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"block\",\"text\"]]],null,2],[\"text\",\"  \\n  \\n\"],[\"block\",[\"if\"],[[\"get\",[\"block\",\"input\"]]],null,1],[\"text\",\"  \\n\"],[\"block\",[\"if\"],[[\"get\",[\"block\",\"breakline\"]]],null,0],[\"text\",\"\\n\"]],\"locals\":[\"block\"]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/qrocm-proposal.hbs" } });
});
define("pix-live/templates/components/user-menu", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "cP4uzIuS", "block": "{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"class\",\"dropdown-toggle\"],[\"static-attr\",\"data-toggle\",\"dropdown\"],[\"static-attr\",\"role\",\"button\"],[\"static-attr\",\"aria-haspopup\",\"true\"],[\"static-attr\",\"aria-expanded\",\"false\"],[\"flush-element\"],[\"text\",\"John \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"caret\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"dropdown-menu\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"preferences\"]]],[\"flush-element\"],[\"text\",\"Préférences\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"role\",\"separator\"],[\"static-attr\",\"class\",\"divider\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[[\"unknown\",[\"rootURL\"]]]]],[\"flush-element\"],[\"text\",\"Déconnexion\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/user-menu.hbs" } });
});
define("pix-live/templates/courses/get-challenge-preview", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "qs7bDlso", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"challenge-preview\"],[\"dynamic-attr\",\"data-id\",[\"concat\",[[\"unknown\",[\"model\",\"challenge\",\"id\"]]]]],[\"static-attr\",\"class\",\"challenge-preview\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n\\n      \"],[\"append\",[\"helper\",[\"component\"],[[\"get\",[\"challengeItemType\"]]],[[\"challenge\",\"assessment\",\"onValidated\"],[[\"get\",[\"model\",\"challenge\"]],[\"get\",[\"model\",\"assessment\"]],[\"helper\",[\"action\"],[[\"get\",[null]],[\"get\",[\"navigate\"]]],null]]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/courses/get-challenge-preview.hbs" } });
});
define("pix-live/templates/courses/get-course-preview", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "40yVkDbO", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"course-preview\"],[\"dynamic-attr\",\"data-id\",[\"concat\",[[\"unknown\",[\"model\",\"course\",\"id\"]]]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"title\"],[\"flush-element\"],[\"text\",\"\\n            Prévisualisation du test #\"],[\"append\",[\"unknown\",[\"model\",\"course\",\"id\"]],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel course-information\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"course-name\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"course\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"course-description\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"course\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"hr\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"block\",[\"link-to\"],[\"courses.get-challenge-preview\",[\"get\",[\"model\",\"course\",\"id\"]],[\"get\",[\"model\",\"nextChallenge\",\"id\"]]],[[\"class\"],[\"pull-right button button-primary simulate-button\"]],0],[\"text\",\"\\n\\n        \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Simuler le test\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/courses/get-course-preview.hbs" } });
});
define("pix-live/templates/home-loading", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "2RGPq7SU", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"home-loading\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"loader-container\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"loader\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"loader-inner ball-zig-zag\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ball-spinner\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ball-spinner\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/home-loading.hbs" } });
});
define("pix-live/templates/home", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "u7bkA8jU", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"home\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"row courses\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,3],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"                            Démarrer le test\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                        \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"course-picture\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/course-default-image.png\"]]],[\"static-attr\",\"alt\",\"Illustration du test\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                        \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"course-picture\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"course\",\"imageUrl\"]]]]],[\"static-attr\",\"alt\",\"Illustration du test\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"              \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"col-md-4 course-item animated fadeIn\"],[\"flush-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel course\"],[\"dynamic-attr\",\"data-id\",[\"concat\",[[\"unknown\",[\"course\",\"id\"]]]]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"course\",\"imageUrl\"]]],null,2,1],[\"text\",\"\\n                      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"course-content\"],[\"flush-element\"],[\"text\",\"\\n                          \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"course-name\"],[\"flush-element\"],[\"text\",\"\\n                            \"],[\"append\",[\"unknown\",[\"course\",\"name\"]],false],[\"text\",\"\\n                          \"],[\"close-element\"],[\"text\",\"\\n                          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"course-description\"],[\"flush-element\"],[\"text\",\"\\n                            \"],[\"append\",[\"unknown\",[\"course\",\"description\"]],false],[\"text\",\"\\n                          \"],[\"close-element\"],[\"text\",\"\\n                      \"],[\"close-element\"],[\"text\",\"\\n\\n                      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"course-number-of-challenges\"],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"append\",[\"unknown\",[\"course\",\"challenges\",\"length\"]],false],[\"text\",\" épreuves\\n                      \"],[\"close-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"course-actions\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"courses.create-assessment\",[\"get\",[\"course\",\"id\"]]],[[\"class\"],[\"button button-primary start-button\"]],0],[\"text\",\"                      \"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"close-element\"],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"course\"]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/home.hbs" } });
});
define("pix-live/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "hq3HWyJV", "block": "{\"statements\":[[\"append\",[\"helper\",[\"first-page\"],null,[[\"showOnly\",\"model\"],[\"4\",[\"get\",[\"model\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/index.hbs" } });
});
define("pix-live/templates/placement-tests", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "h+aM2SoO", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"home\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"row courses\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,3],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"                            Démarrer le test\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                        \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"course-picture\"],[\"static-attr\",\"src\",\"images/course-default-image.png\"],[\"static-attr\",\"alt\",\"Illustration du test\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                        \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"course-picture\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"course\",\"imageUrl\"]]]]],[\"static-attr\",\"alt\",\"Illustration du test\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"              \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"col-md-4 course-item animated fadeIn\"],[\"flush-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel course\"],[\"dynamic-attr\",\"data-id\",[\"concat\",[[\"unknown\",[\"course\",\"id\"]]]]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"course\",\"imageUrl\"]]],null,2,1],[\"text\",\"\\n                      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"course-content\"],[\"flush-element\"],[\"text\",\"\\n                          \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"course-name\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"course\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n                          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"course-description\"],[\"flush-element\"],[\"text\",\"\\n                            \"],[\"append\",[\"unknown\",[\"course\",\"description\"]],false],[\"text\",\"\\n                          \"],[\"close-element\"],[\"text\",\"\\n                      \"],[\"close-element\"],[\"text\",\"\\n\\n                      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"course-actions\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"courses.create-assessment\",[\"get\",[\"course\",\"id\"]]],[[\"class\"],[\"button button-primary start-button\"]],0],[\"text\",\"                      \"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"close-element\"],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"course\"]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/placement-tests.hbs" } });
});
define("pix-live/templates/preferences", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "6WXxMvCR", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"preferences\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"title\"],[\"flush-element\"],[\"text\",\"\\n            Préférences\\n        \"],[\"close-element\"],[\"text\",\"\\n\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-title\"],[\"flush-element\"],[\"text\",\"\\n                Informations personnelles\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"hr\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"form\",[]],[\"static-attr\",\"class\",\"form-horizontal\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"class\",\"col-sm-3 control-label text-left\"],[\"static-attr\",\"for\",\"firstName\"],[\"flush-element\"],[\"text\",\"Prénom\"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-6\"],[\"flush-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"class\",\"form-control\"],[\"static-attr\",\"name\",\"firstName\"],[\"static-attr\",\"autocomplete\",\"on\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"class\",\"col-sm-3 control-label\"],[\"static-attr\",\"for\",\"lastName\"],[\"flush-element\"],[\"text\",\"Nom\"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-6\"],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"class\",\"form-control\"],[\"static-attr\",\"name\",\"lastName\"],[\"static-attr\",\"autocomplete\",\"on\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"class\",\"col-sm-3 control-label\"],[\"static-attr\",\"for\",\"email\"],[\"flush-element\"],[\"text\",\"Adresse email\"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-6\"],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"class\",\"form-control\"],[\"static-attr\",\"name\",\"email\"],[\"static-attr\",\"autocomplete\",\"on\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-offset-3 col-sm-6\"],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"button button-primary\"],[\"static-attr\",\"type\",\"submit\"],[\"flush-element\"],[\"text\",\"Enregistrer les préférences\"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/preferences.hbs" } });
});
define('pix-live/tests/mirage/mirage/config.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/config.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/mirage/mirage/data/answers/raw-qcm-answer.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/answers/raw-qcm-answer.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/mirage/mirage/data/answers/ref-qcm-answer.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/answers/ref-qcm-answer.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/mirage/mirage/data/answers/ref-qcu-answer.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/answers/ref-qcu-answer.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/mirage/mirage/data/answers/ref-qroc-answer.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/answers/ref-qroc-answer.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/mirage/mirage/data/answers/ref-qrocm-answer.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/answers/ref-qrocm-answer.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/mirage/mirage/data/assessments/raw-assessment.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/assessments/raw-assessment.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/mirage/mirage/data/assessments/ref-assessment.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/assessments/ref-assessment.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/mirage/mirage/data/challenges/raw-qcm-challenge.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/challenges/raw-qcm-challenge.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/mirage/mirage/data/challenges/ref-qcm-challenge.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/challenges/ref-qcm-challenge.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/mirage/mirage/data/challenges/ref-qcu-challenge.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/challenges/ref-qcu-challenge.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/mirage/mirage/data/challenges/ref-qroc-challenge.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/challenges/ref-qroc-challenge.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/mirage/mirage/data/challenges/ref-qrocm-challenge.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/challenges/ref-qrocm-challenge.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/mirage/mirage/data/courses/raw-course.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/courses/raw-course.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/mirage/mirage/data/courses/ref-course.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/courses/ref-course.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/mirage/mirage/routes/get-answer-by-challenge-and-assessment.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/routes/get-answer-by-challenge-and-assessment.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/mirage/mirage/routes/get-answer.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/routes/get-answer.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/mirage/mirage/routes/get-assessment.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/routes/get-assessment.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/mirage/mirage/routes/get-challenge.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/routes/get-challenge.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/mirage/mirage/routes/get-challenges.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/routes/get-challenges.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/mirage/mirage/routes/get-course.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/routes/get-course.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/mirage/mirage/routes/get-courses.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/routes/get-courses.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/mirage/mirage/routes/post-answers.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/routes/post-answers.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/mirage/mirage/routes/post-assessments.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/routes/post-assessments.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/utils/call-only-once', ['exports', 'pix-live/config/environment', 'lodash/lodash'], function (exports, _pixLiveConfigEnvironment, _lodashLodash) {
  exports['default'] = callOnlyOnce;

  function callOnlyOnce(targetFunction) {
    if (_pixLiveConfigEnvironment['default'].EmberENV.useDelay) {
      return _lodashLodash['default'].throttle(targetFunction, 1000, { leading: true, trailing: false });
    } else {
      return targetFunction;
    }
  }
});
define('pix-live/utils/can-use-dom', ['exports', 'ember-metrics/utils/can-use-dom'], function (exports, _emberMetricsUtilsCanUseDom) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMetricsUtilsCanUseDom['default'];
    }
  });
});
define('pix-live/utils/get-challenge-type', ['exports', 'lodash/lodash'], function (exports, _lodashLodash) {
  exports['default'] = getChallengeType;

  function getChallengeType(challengeTypeFromAirtable) {
    var result = 'qcu'; // qcu by default, no error thrown

    var challengeType = challengeTypeFromAirtable.toUpperCase();

    if (_lodashLodash['default'].contains(['QCUIMG', 'QCU', 'QRU'], challengeType)) {
      result = 'qcu';
    } else if (_lodashLodash['default'].contains(['QCMIMG', 'QCM'], challengeType)) {
      result = 'qcm';
    } else if (_lodashLodash['default'].contains(['QROC'], challengeType)) {
      result = 'qroc';
    } else if (_lodashLodash['default'].contains(['QROCM'], challengeType)) {
      result = 'qrocm';
    }

    return result;
  }
});
define('pix-live/utils/object-transforms', ['exports', 'ember-metrics/utils/object-transforms'], function (exports, _emberMetricsUtilsObjectTransforms) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMetricsUtilsObjectTransforms['default'];
    }
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('pix-live/config/environment', ['ember'], function(Ember) {
  var prefix = 'pix-live';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("pix-live/app")["default"].create({"API_HOST":"/","name":"pix-live","version":"3.0.0+b1122c28"});
}

/* jshint ignore:end */
//# sourceMappingURL=pix-live.map
