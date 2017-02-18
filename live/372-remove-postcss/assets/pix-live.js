"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('pix-live/adapters/application', ['exports', 'ember-data', 'pix-live/config/environment'], function (exports, _emberData, _pixLiveConfigEnvironment) {
  exports['default'] = _emberData['default'].JSONAPIAdapter.extend({

    namespace: 'api',
    host: _pixLiveConfigEnvironment['default'].APP.API_HOST

  });
});
define('pix-live/adapters/solution', ['exports', 'pix-live/adapters/application', 'ember'], function (exports, _pixLiveAdaptersApplication, _ember) {
  exports['default'] = _pixLiveAdaptersApplication['default'].extend({
    // XXX : can't find in the docs why query params are in 3rd position
    // XXX : need the small 'if' for production. Hacky, icky, ugly.
    queryRecord: function queryRecord(modelName, clazz, query) {
      var prefix = '/';
      if (this.host !== '/') {
        prefix = this.host + '/';
      }
      return _ember['default'].$.getJSON(prefix + this.namespace + '/assessments/' + query.assessmentId + '/solutions/' + query.answerId);
    }
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
define('pix-live/components/app-footer', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('pix-live/components/app-header', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'header',
    router: _ember['default'].inject.service()
  });
});
define('pix-live/components/app-menu', ['exports', 'ember'], function (exports, _ember) {

  var AppMenu = _ember['default'].Component.extend({
    defaultItems: [{
      title: 'Le projet',
      href: '/projet'
    }],

    menuData: _ember['default'].computed('items.[]', function () {
      return typeof this.get('items') != 'undefined' ? this.get('items') : this.get('defaultItems');
    })

  });

  AppMenu.reopenClass({
    positionalParams: 'items'
  });

  exports['default'] = AppMenu;
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
define('pix-live/components/challenge-actions', ['exports', 'ember'], function (exports, _ember) {
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
define('pix-live/components/challenge-item-generic', ['exports', 'ember', 'pix-live/utils/call-only-once', 'pix-live/utils/lodash-custom'], function (exports, _ember, _pixLiveUtilsCallOnlyOnce, _pixLiveUtilsLodashCustom) {

  var get = _ember['default'].get;

  var ChallengeItemGeneric = _ember['default'].Component.extend({
    tagName: 'article',
    classNames: ['challenge-item'],
    attributeBindings: ['challenge.id:data-challenge-id'],

    hasUserConfirmWarning: _ember['default'].computed('challenge', function () {
      return false;
    }),

    hasChallengeTimer: _ember['default'].computed('challenge', function () {
      return this.hasTimerDefined();
    }),

    hasTimerDefined: function hasTimerDefined() {
      return _pixLiveUtilsLodashCustom['default'].isInteger(get(this, 'challenge.timer'));
    },

    _getTimeout: function _getTimeout() {
      return $('.timeout-jauge-remaining').attr('data-spent');
    },

    actions: {

      validate: (0, _pixLiveUtilsCallOnlyOnce['default'])(function () {
        if (this._hasError()) {
          this.set('errorMessage', this._getErrorMessage());
          return this.sendAction('onError', this.get('errorMessage'));
        }
        var answerValue = this._getAnswerValue();
        this.sendAction('onValidated', this.get('challenge'), this.get('assessment'), answerValue, this._getTimeout());
      }),

      skip: (0, _pixLiveUtilsCallOnlyOnce['default'])(function () {
        this.set('errorMessage', null);
        this.sendAction('onValidated', this.get('challenge'), this.get('assessment'), '#ABAND#', this._getTimeout());
      }),

      setUserConfirmation: (0, _pixLiveUtilsCallOnlyOnce['default'])(function () {
        this.toggleProperty('hasUserConfirmWarning');
        this.toggleProperty('hasChallengeTimer');
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
      return this.$('.challenge-proposals input:checkbox:checked').map(function () {
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
      return this.$('.challenge-proposals input:radio:checked').map(function () {
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
    // and moreover, it is a much more robust solution when you need to test it properly.
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
define('pix-live/components/challenge-item-qrocm', ['exports', 'pix-live/utils/lodash-custom', 'pix-live/components/challenge-item-generic'], function (exports, _pixLiveUtilsLodashCustom, _pixLiveComponentsChallengeItemGeneric) {

  var ChallengeItemQrocm = _pixLiveComponentsChallengeItemGeneric['default'].extend({

    _hasError: function _hasError() {
      var allAnswers = this._getRawAnswerValue(); // ex. {"logiciel1":"word", "logiciel2":"excel", "logiciel3":""}
      var hasAtLeastOneAnswer = (0, _pixLiveUtilsLodashCustom['default'])(allAnswers).hasSomeTruthyProps();
      return _pixLiveUtilsLodashCustom['default'].isFalsy(hasAtLeastOneAnswer);
    },

    _getAnswerValue: function _getAnswerValue() {
      return jsyaml.safeDump(this._getRawAnswerValue());
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
/* global jsyaml */
define('pix-live/components/challenge-statement', ['exports', 'ember'], function (exports, _ember) {

  var ChallengeStatement = _ember['default'].Component.extend({

    selectedAttachmentUrl: null,

    init: function init() {
      this._super.apply(this, arguments);
      this.selectedAttachmentUrl = this.get('challenge.attachments.firstObject');
    },

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      var selectedRadio = this.$('.challenge-statement__file-option-input[value="' + this.selectedAttachmentUrl + '"]');
      selectedRadio.attr('checked', 'checked');
    },

    actions: {
      selectAttachementUrl: function selectAttachementUrl(attachementUrl) {
        this.set('selectedAttachmentUrl', attachementUrl);
      }
    }
  });

  ChallengeStatement.reopenClass({
    positionalParams: ['challenge']
  });

  exports['default'] = ChallengeStatement;
});
define('pix-live/components/challenge-stay', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('pix-live/components/comparison-window', ['exports', 'ember', 'pix-live/utils/labeled-checkboxes'], function (exports, _ember, _pixLiveUtilsLabeledCheckboxes) {

  var ComparisonWindow = _ember['default'].Component.extend({

    solutionArray: _ember['default'].computed('solution', function () {
      return this.get('solution').get('_valueAsArrayOfBoolean');
    }),

    labeledCheckboxes: _ember['default'].computed('answer', function () {
      return (0, _pixLiveUtilsLabeledCheckboxes['default'])(this.get('challenge').get('_proposalsAsArray'), this.get('answer').get('_valueAsArrayOfBoolean'));
    })

  });

  ComparisonWindow.reopenClass({
    positionalParams: ['answer', 'challenge', 'solution', 'index']
  });

  exports['default'] = ComparisonWindow;
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
define('pix-live/components/feedback-panel', ['exports', 'ember', 'pix-live/utils/email-validator'], function (exports, _ember, _pixLiveUtilsEmailValidator) {

  var FORM_CLOSED = 'FORM_CLOSED';
  var FORM_OPENED = 'FORM_OPENED';
  var FORM_SUBMITTED = 'FORM_SUBMITTED';

  var FeedbackPanel = _ember['default'].Component.extend({

    store: _ember['default'].inject.service(),

    email: '',
    content: '',
    error: null,
    status: FORM_CLOSED,
    isFormClosed: _ember['default'].computed.equal('status', FORM_CLOSED),
    isFormOpened: _ember['default'].computed.equal('status', FORM_OPENED),

    actions: {
      openFeedbackForm: function openFeedbackForm() {
        this.set('status', FORM_OPENED);
      },

      sendFeedback: function sendFeedback() {
        var _this = this;

        if (!_ember['default'].isEmpty(this.get('email')) && !(0, _pixLiveUtilsEmailValidator['default'])(this.get('email'))) {
          this.set('error', 'Vous devez saisir une adresse mail valide.');
          return;
        }

        if (_ember['default'].isEmpty(this.get('content').trim())) {
          this.set('error', 'Vous devez saisir un message.');
          return;
        }

        var store = this.get('store');
        var answer = this.get('answer');

        var feedback = store.createRecord('feedback', {
          email: this.get('email'),
          content: this.get('content'),
          assessment: answer.get('assessment'),
          challenge: answer.get('challenge')
        });
        feedback.save().then(function () {
          return _this.set('status', FORM_SUBMITTED);
        });
      },

      cancelFeedback: function cancelFeedback() {
        this.set('error', null);
        this.set('status', FORM_CLOSED);
      }
    }

  });

  FeedbackPanel.reopenClass({
    positionalParams: ['answer']
  });

  exports['default'] = FeedbackPanel;
});
define('pix-live/components/first-page', ['exports', 'ember', 'pix-live/config/environment'], function (exports, _ember, _pixLiveConfigEnvironment) {
  exports['default'] = _ember['default'].Component.extend({
    myWidth: $(window).width(),

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
    },

    actions: {
      startTest: function startTest(course_url, course_id) {
        if (this.isMobile() && !localStorage.getItem('pix-mobile-warning')) {
          localStorage.setItem('pix-mobile-warning', 'true');
          this.set('course_url', course_url);
          this.set('course_id', course_id);
          $('#js-modal-mobile').modal();
        } else {
          this.get('router').transitionTo(course_url, course_id);
        }
      }
    },

    isMobile: function isMobile() {
      if (_pixLiveConfigEnvironment['default'].environment !== 'test') {
        return $(window).width() < 767;
      } else {
        return this.get('isSimulatedMobileScreen');
      }
    },

    didInsertElement: function didInsertElement() {
      var that = this;
      _ember['default'].run.scheduleOnce('afterRender', this, function () {
        $('button[data-confirm]').click(function () {
          $('#js-modal-mobile').modal('hide');
          that.get('router').transitionTo(that.get('course_url'), that.get('course_id'));
        });
      });

      if (_pixLiveConfigEnvironment['default'].environment === 'test') {
        this.$().on('simulateMobileScreen', function () {
          that.set('isSimulatedMobileScreen', 'true');
        });
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
define('pix-live/components/modal-mobile', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    didInsertElement: function didInsertElement() {

      // XXX : we hack here Bootstrap,
      // because we need a display:flex to center the modal
      // since bootstrap insert an inlined-style display:block
      // we have to remove this property once the modal renders.
      _ember['default'].run.scheduleOnce('afterRender', this, function () {
        $('#js-modal-mobile').on('shown.bs.modal', function () {
          $('#js-modal-mobile').attr('style', function (i, style) {
            return style.replace(/display[^;]+;?/g, '');
          });
        });
      });
    }

  });
});
define('pix-live/components/progress-bar', ['exports', 'ember'], function (exports, _ember) {

  var ProgressBar = _ember['default'].Component.extend({});

  ProgressBar.reopenClass({
    positionalParams: ['progress']
  });

  exports['default'] = ProgressBar;
});
define('pix-live/components/qcm-proposals', ['exports', 'ember', 'pix-live/utils/labeled-checkboxes'], function (exports, _ember, _pixLiveUtilsLabeledCheckboxes) {
  exports['default'] = _ember['default'].Component.extend({

    tagName: 'div',

    labeledCheckboxes: _ember['default'].computed('proposals', 'answers', function () {

      return (0, _pixLiveUtilsLabeledCheckboxes['default'])(this.get('proposals'), this.get('answers'));
    }),

    actions: {
      checkboxClicked: function checkboxClicked() {
        this.sendAction('answerChanged');
      }
    }

  });
});
define('pix-live/components/qcu-proposals', ['exports', 'ember', 'pix-live/utils/labeled-checkboxes'], function (exports, _ember, _pixLiveUtilsLabeledCheckboxes) {

  function _uncheckAllRadioButtons() {
    this.$(':radio').prop('checked', false);
  }

  function _checkAgainTheSelectedOption(index) {
    this.$(':radio:nth(' + index + ')').prop('checked', true);
  }

  exports['default'] = _ember['default'].Component.extend({

    tagName: 'div',

    labeledRadios: _ember['default'].computed('proposals', 'answers', function () {
      return (0, _pixLiveUtilsLabeledCheckboxes['default'])(this.get('proposals'), this.get('answers'));
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
define('pix-live/components/routable-modal-backdrop', ['exports', 'ember-routable-modal/components/backdrop'], function (exports, _emberRoutableModalComponentsBackdrop) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRoutableModalComponentsBackdrop['default'];
    }
  });
});
define('pix-live/components/routable-modal-close-button', ['exports', 'ember-routable-modal/components/close-button'], function (exports, _emberRoutableModalComponentsCloseButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRoutableModalComponentsCloseButton['default'];
    }
  });
});
define('pix-live/components/routable-modal-hold', ['exports', 'ember-routable-modal/components/hold'], function (exports, _emberRoutableModalComponentsHold) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRoutableModalComponentsHold['default'];
    }
  });
});
define('pix-live/components/routable-modal-outlet', ['exports', 'ember-routable-modal/components/outlet'], function (exports, _emberRoutableModalComponentsOutlet) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRoutableModalComponentsOutlet['default'];
    }
  });
});
define('pix-live/components/timeout-jauge', ['exports', 'ember', 'pix-live/utils/lodash-custom', 'pix-live/config/environment'], function (exports, _ember, _pixLiveUtilsLodashCustom, _pixLiveConfigEnvironment) {

  var get = _ember['default'].get;
  var set = _ember['default'].set;
  var computed = _ember['default'].computed;
  var run = _ember['default'].run;

  // see http://stackoverflow.com/a/37770048/2595513
  function fmtMSS(s) {
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s;
  }

  exports['default'] = _ember['default'].Component.extend({

    // Ember Lifecycle Hook
    init: function init() {
      this._super.apply(this, arguments);

      set(this, 'totalTime', 1000 * get(this, 'allotedTime'));
      set(this, 'tickInterval', 1000);
      set(this, 'timer', null);
      this.reset();
      this.start();
    },

    remainingSeconds: computed('elapsedTime', function () {
      return _pixLiveUtilsLodashCustom['default'].round((get(this, 'totalTime') - get(this, 'elapsedTime')) / 1000);
    }),

    remainingTime: computed('remainingSeconds', function () {
      if (get(this, 'remainingSeconds') < 0) {
        return '0:00';
      }
      return fmtMSS(get(this, 'remainingSeconds'));
    }),

    hasFinished: computed('remainingSeconds', function () {
      return get(this, 'remainingSeconds') <= 0;
    }),

    percentageOfTimeout: computed('elapsedTime', function () {
      return 100 - get(this, 'remainingSeconds') / get(this, 'allotedTime') * 100;
    }),

    reset: function reset() {
      set(this, 'elapsedTime', 0);
      set(this, 'currentTime', Date.now());
    },

    start: function start() {
      this.stop();
      set(this, 'currentTime', Date.now());
      this.tick();
    },

    stop: function stop() {
      var timer = get(this, 'timer');

      if (timer) {
        run.cancel(timer);
        set(this, 'timer', null);
      }
    },

    tick: function tick() {
      if (_pixLiveConfigEnvironment['default'].environment !== 'test') {

        var tickInterval = get(this, 'tickInterval');
        var currentTime = get(this, 'currentTime');
        var elapsedTime = get(this, 'elapsedTime');
        var now = Date.now();

        set(this, 'elapsedTime', elapsedTime + (now - currentTime));
        set(this, 'currentTime', now);
        set(this, 'timer', run.later(this, this.tick, tickInterval));
      }
    },

    // Ember Lifecycle Hook
    didInsertElement: function didInsertElement() {
      var _this = this;

      if (_pixLiveConfigEnvironment['default'].environment === 'test') {
        (function () {
          var that = _this;
          _this.$().on('simulateOneMoreSecond', function () {
            set(that, 'elapsedTime', get(that, 'elapsedTime') + 1000);
          });
          _this.$().on('resetElapsedTime', function () {
            set(that, 'elapsedTime', 0);
          });
        })();
      }
    },

    // Ember Lifecycle Hook
    willDestroyElement: function willDestroyElement() {
      this.stop();
    }

  });
});
define('pix-live/components/user-menu', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'li',
    classNames: ['dropdown']
  });
});
define('pix-live/components/warning-page', ['exports', 'ember', 'pix-live/utils/lodash-custom'], function (exports, _ember, _pixLiveUtilsLodashCustom) {

  function fmtMSS(s) {
    if (!_pixLiveUtilsLodashCustom['default'].isInteger(s)) return 0;
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s;
  }

  exports['default'] = _ember['default'].Component.extend({

    _pluralize: function _pluralize(mystring, count) {
      return parseInt(count) > 1 ? mystring + 's' : mystring;
    },

    _formatTimeToHuman: function _formatTimeToHuman(allocatedTime) {
      if (typeof allocatedTime === undefined) return 0;
      var timeArr = allocatedTime.toString().split(':');
      var seconds = parseInt(timeArr[1]) < 1 ? '' : ' et ' + timeArr[1] + this._pluralize(' seconde', timeArr[1]);
      return timeArr[0] + this._pluralize(' minute', timeArr[0]) + seconds;
    },

    didInsertElement: function didInsertElement() {
      this.set('allocatedTime', fmtMSS(this.get('time')));
      this.set('allocatedHumanTime', this._formatTimeToHuman(this.get('allocatedTime')));
    },

    actions: {
      confirmWarning: function confirmWarning() {
        this.sendAction('hasUserConfirmWarning');
      }
    }
  });
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
define('pix-live/helpers/convert-to-html', ['exports', 'ember', 'pix-live/utils/lodash-custom'], function (exports, _ember, _pixLiveUtilsLodashCustom) {
  exports.convertToHtml = convertToHtml;

  function convertToHtml(params) {
    if (_pixLiveUtilsLodashCustom['default'].isArray(params) && params.length > 0) {
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
define('pix-live/helpers/extract-extension', ['exports', 'ember'], function (exports, _ember) {
  exports.extractExtension = extractExtension;

  function extractExtension(params) {
    var parts = params[0].split('.');
    var lastIndex = parts.length - 1;
    return parts[lastIndex];
  }

  exports['default'] = _ember['default'].Helper.helper(extractExtension);
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
define('pix-live/helpers/property-of', ['exports', 'ember', 'pix-live/utils/lodash-custom'], function (exports, _ember, _pixLiveUtilsLodashCustom) {
  exports.propertyOf = propertyOf;

  function propertyOf(params) {
    var map = params[0];
    var key = params[1];
    if (_pixLiveUtilsLodashCustom['default'].isObject(map) && _pixLiveUtilsLodashCustom['default'].isString(key)) {
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
define('pix-live/helpers/route-action', ['exports', 'ember-route-action-helper/helpers/route-action'], function (exports, _emberRouteActionHelperHelpersRouteAction) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRouteActionHelperHelpersRouteAction['default'];
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
define('pix-live/initializers/ajax-interceptor', ['exports', 'pix-live/config/environment'], function (exports, _pixLiveConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() /* application */{
    // XXX : Small hack, huge reward : we can now assert in tests what is the content of outgoing requests.
    if (_pixLiveConfigEnvironment['default'].environment === 'test') {
      $(document).ajaxComplete(function (event, xhr, settings) {
        if ('POST' === settings.type) {
          localStorage.setItem('miragePostUrl', JSON.stringify({
            url: '/api' + settings.url.split('api')[1],
            body: settings.data
          }));
        }
      });
    }
  }

  exports['default'] = {
    name: 'ajax-interceptor',
    initialize: initialize
  };
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
    initialize: function initialize() {}
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
define('pix-live/initializers/ember-routable-modal', ['exports', 'pix-live/config/environment', 'ember-routable-modal/configuration'], function (exports, _pixLiveConfigEnvironment, _emberRoutableModalConfiguration) {
    exports['default'] = {
        name: 'ember-routable-modal',
        initialize: function initialize() {
            var config = _pixLiveConfigEnvironment['default']['ember-routable-modal'] || {};
            _emberRoutableModalConfiguration['default'].load(config);
        }
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
    initialize: function initialize() {}
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
    initialize: function initialize() {}
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
    initialize: function initialize() {}
  };
});
define("pix-live/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('pix-live/mirage/config', ['exports', 'pix-live/mirage/routes/get-challenge', 'pix-live/mirage/routes/get-challenges', 'pix-live/mirage/routes/get-next-challenge', 'pix-live/mirage/routes/get-assessment-solutions', 'pix-live/mirage/routes/get-course', 'pix-live/mirage/routes/get-courses', 'pix-live/mirage/routes/get-answer', 'pix-live/mirage/routes/post-answers', 'pix-live/mirage/routes/get-assessment', 'pix-live/mirage/routes/post-assessments', 'pix-live/mirage/routes/get-answer-by-challenge-and-assessment', 'pix-live/mirage/routes/post-feedbacks'], function (exports, _pixLiveMirageRoutesGetChallenge, _pixLiveMirageRoutesGetChallenges, _pixLiveMirageRoutesGetNextChallenge, _pixLiveMirageRoutesGetAssessmentSolutions, _pixLiveMirageRoutesGetCourse, _pixLiveMirageRoutesGetCourses, _pixLiveMirageRoutesGetAnswer, _pixLiveMirageRoutesPostAnswers, _pixLiveMirageRoutesGetAssessment, _pixLiveMirageRoutesPostAssessments, _pixLiveMirageRoutesGetAnswerByChallengeAndAssessment, _pixLiveMirageRoutesPostFeedbacks) {
  exports['default'] = function () {

    this.passthrough('/write-coverage');
    this.post('https://fonts.googleapis.com/**', function () {});
    this.post('https://formspree.io/**', function () {});
    this.post('https://sentry.io/**', function () {});

    this.namespace = 'http://localhost:3000/api';

    this.get('/courses', _pixLiveMirageRoutesGetCourses['default']);
    this.get('/courses/:id', _pixLiveMirageRoutesGetCourse['default']);

    this.get('/challenges', _pixLiveMirageRoutesGetChallenges['default']);
    this.get('/challenges/:id', _pixLiveMirageRoutesGetChallenge['default']);

    this.post('/assessments', _pixLiveMirageRoutesPostAssessments['default']);
    this.get('/assessments/:id', _pixLiveMirageRoutesGetAssessment['default']);
    this.get('/assessments/:assessmentId/next/:challengeId', _pixLiveMirageRoutesGetNextChallenge['default']);
    this.get('/assessments/:assessmentId/next', _pixLiveMirageRoutesGetNextChallenge['default']);
    this.get('/assessments/:assessmentId/solutions/:answerId', _pixLiveMirageRoutesGetAssessmentSolutions['default']);

    this.post('/answers', _pixLiveMirageRoutesPostAnswers['default']);
    this.get('/answers/:id', _pixLiveMirageRoutesGetAnswer['default']);
    this.get('/answers', _pixLiveMirageRoutesGetAnswerByChallengeAndAssessment['default']);

    this.post('/feedbacks', _pixLiveMirageRoutesPostFeedbacks['default']);
  };
});
define('pix-live/mirage/data/answers/raw-qcm-answer', ['exports', 'pix-live/mirage/data/challenges/raw-qcm-challenge'], function (exports, _pixLiveMirageDataChallengesRawQcmChallenge) {
  exports['default'] = {
    data: {
      type: 'answers',
      id: 'raw_answer_qcm_id',
      attributes: {
        value: '',
        result: 'timedout'
      },
      relationships: {
        challenge: {
          data: {
            type: 'challenges',
            id: _pixLiveMirageDataChallengesRawQcmChallenge['default'].data.id
          }
        },
        assessment: {
          data: {
            type: 'assessments',
            id: 'raw_assessment_id'
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
        value: '2,4',
        result: 'ko'
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
        result: 'ok'
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
        value: 'logiciel1: word\nlogiciel2: excel\nlogiciel3: powerpoint',
        result: 'partially'
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
define('pix-live/mirage/data/answers/ref-qru-answer', ['exports', 'pix-live/mirage/data/challenges/ref-qru-challenge'], function (exports, _pixLiveMirageDataChallengesRefQruChallenge) {
  exports['default'] = {
    data: {
      type: 'answers',
      id: 'ref_answer_qru_id',
      attributes: {
        value: '',
        result: 'aband'
      },
      relationships: {
        challenge: {
          data: {
            type: 'challenges',
            id: _pixLiveMirageDataChallengesRefQruChallenge['default'].data.id
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
define('pix-live/mirage/data/assessments/ref-assessment', ['exports', 'pix-live/mirage/data/courses/ref-course', 'pix-live/mirage/data/answers/ref-qcu-answer', 'pix-live/mirage/data/answers/ref-qru-answer', 'pix-live/mirage/data/answers/ref-qcm-answer', 'pix-live/mirage/data/answers/ref-qroc-answer', 'pix-live/mirage/data/answers/ref-qrocm-answer'], function (exports, _pixLiveMirageDataCoursesRefCourse, _pixLiveMirageDataAnswersRefQcuAnswer, _pixLiveMirageDataAnswersRefQruAnswer, _pixLiveMirageDataAnswersRefQcmAnswer, _pixLiveMirageDataAnswersRefQrocAnswer, _pixLiveMirageDataAnswersRefQrocmAnswer) {
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
            id: _pixLiveMirageDataAnswersRefQruAnswer['default'].data.id
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

  function getTimer() {
    var mirageTestingState = JSON.parse(localStorage.getItem('mirageTestingState'));
    return mirageTestingState && mirageTestingState.stubTimer ? mirageTestingState.stubTimer : 2;
  }

  exports['default'] = {
    recalculate: function recalculate() {
      this.data.attributes.timer = getTimer();
    },
    data: {
      type: 'challenges',
      id: 'ref_qcm_challenge_id',
      attributes: {
        type: 'QCM',
        timer: getTimer(),
        instruction: 'Un QCM propose plusieurs choix, l\'utilisateur peut en choisir [plusieurs](http://link.plusieurs.url)',
        attachments: ['http://example_of_url'],
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
        'hasnt-internet-allowed': true,
        attachments: ['file.docx', 'file.odt'],
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
      id: 'ref_qroc_challenge_id',
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
define('pix-live/mirage/data/challenges/ref-qru-challenge', ['exports'], function (exports) {
  // QRU challenge with all fields filled
  exports['default'] = {
    data: {
      type: 'challenges',
      id: 'ref_qru_challenge_id',
      attributes: {
        type: 'QRU',
        timer: 70,
        'illustration-url': 'http://fakeimg.pl/350x200/?text=QRU',
        attachments: ['http://example_of_url'],
        instruction: 'Un QRU propose un seul choix, typiquement cocher si oui ou non il a effectué une action quelque [part](http://link.part.url) ',
        proposals: '' + '- Une seule possibilite '
      }
    }
  };
});
define('pix-live/mirage/data/courses/adaptive-course', ['exports'], function (exports) {
  exports['default'] = {
    data: {
      type: 'courses',
      id: 'adaptive_course_id',
      attributes: {
        name: 'Adaptive Course',
        'is-adaptive': true,
        description: 'Est un test adaptatif',
        duration: 10,
        'image-url': 'http://fakeimg.pl/350x200/?text=Adaptive%20Course'
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
define('pix-live/mirage/data/courses/ref-course', ['exports', 'pix-live/mirage/data/challenges/ref-qcm-challenge', 'pix-live/mirage/data/challenges/ref-qcu-challenge', 'pix-live/mirage/data/challenges/ref-qru-challenge', 'pix-live/mirage/data/challenges/ref-qroc-challenge', 'pix-live/mirage/data/challenges/ref-qrocm-challenge'], function (exports, _pixLiveMirageDataChallengesRefQcmChallenge, _pixLiveMirageDataChallengesRefQcuChallenge, _pixLiveMirageDataChallengesRefQruChallenge, _pixLiveMirageDataChallengesRefQrocChallenge, _pixLiveMirageDataChallengesRefQrocmChallenge) {
  exports['default'] = {
    data: {
      type: 'courses',
      id: 'ref_course_id',
      attributes: {
        name: 'First Course',
        description: 'Contient toutes sortes d\'epreuves avec différentes caractéristiques couvrant tous les cas d\'usage.',
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
            id: _pixLiveMirageDataChallengesRefQruChallenge['default'].data.id
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
define('pix-live/mirage/data/feedbacks/ref-feedback', ['exports'], function (exports) {
  exports['default'] = {
    data: {
      type: 'feedbacks',
      id: 'ref_feedback_id',
      attributes: {
        email: 'shi@fu.me',
        content: 'Some content'
      },
      relationships: {
        assessment: {
          data: {
            type: 'assessment',
            id: 'assessment_id'
          }
        },
        challenge: {
          data: {
            type: 'challenge',
            id: 'challenge_id'
          }
        }
      }
    }
  };
});
define('pix-live/mirage/data/solutions/ref-solution', ['exports'], function (exports) {
  exports['default'] = {
    data: {
      type: 'solutions',
      id: 'ref_solution_id',
      attributes: {
        value: '2, 3'
      }
    }
  };
});
define('pix-live/mirage/routes/get-answer-by-challenge-and-assessment', ['exports', 'pix-live/utils/lodash-custom', 'pix-live/mirage/data/answers/raw-qcm-answer', 'pix-live/mirage/data/answers/ref-qcm-answer', 'pix-live/mirage/data/answers/ref-qcu-answer', 'pix-live/mirage/data/answers/ref-qru-answer', 'pix-live/mirage/data/answers/ref-qroc-answer', 'pix-live/mirage/data/answers/ref-qrocm-answer'], function (exports, _pixLiveUtilsLodashCustom, _pixLiveMirageDataAnswersRawQcmAnswer, _pixLiveMirageDataAnswersRefQcmAnswer, _pixLiveMirageDataAnswersRefQcuAnswer, _pixLiveMirageDataAnswersRefQruAnswer, _pixLiveMirageDataAnswersRefQrocAnswer, _pixLiveMirageDataAnswersRefQrocmAnswer) {
  exports['default'] = function (schema, request) {

    var allAnswers = [_pixLiveMirageDataAnswersRawQcmAnswer['default'], _pixLiveMirageDataAnswersRefQcuAnswer['default'], _pixLiveMirageDataAnswersRefQruAnswer['default'], _pixLiveMirageDataAnswersRefQcmAnswer['default'], _pixLiveMirageDataAnswersRefQrocAnswer['default'], _pixLiveMirageDataAnswersRefQrocmAnswer['default']];

    var answers = _pixLiveUtilsLodashCustom['default'].map(allAnswers, function (oneAnswer) {
      return { id: oneAnswer.data.id, obj: oneAnswer };
    });

    var answer = _pixLiveUtilsLodashCustom['default'].find(answers, function (oneAnswer) {
      var belongsToAssessment = _pixLiveUtilsLodashCustom['default'].get(oneAnswer.obj, 'data.relationships.assessment.data.id') === request.queryParams.assessment;
      var belongsToChallenge = _pixLiveUtilsLodashCustom['default'].get(oneAnswer.obj, 'data.relationships.challenge.data.id') === request.queryParams.challenge;
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
define('pix-live/mirage/routes/get-answer', ['exports', 'pix-live/utils/lodash-custom', 'pix-live/mirage/data/answers/raw-qcm-answer', 'pix-live/mirage/data/answers/ref-qcm-answer', 'pix-live/mirage/data/answers/ref-qcu-answer', 'pix-live/mirage/data/answers/ref-qru-answer', 'pix-live/mirage/data/answers/ref-qroc-answer', 'pix-live/mirage/data/answers/ref-qrocm-answer'], function (exports, _pixLiveUtilsLodashCustom, _pixLiveMirageDataAnswersRawQcmAnswer, _pixLiveMirageDataAnswersRefQcmAnswer, _pixLiveMirageDataAnswersRefQcuAnswer, _pixLiveMirageDataAnswersRefQruAnswer, _pixLiveMirageDataAnswersRefQrocAnswer, _pixLiveMirageDataAnswersRefQrocmAnswer) {
  exports['default'] = function (schema, request) {

    var allAnswers = [_pixLiveMirageDataAnswersRawQcmAnswer['default'], _pixLiveMirageDataAnswersRefQcuAnswer['default'], _pixLiveMirageDataAnswersRefQruAnswer['default'], _pixLiveMirageDataAnswersRefQcmAnswer['default'], _pixLiveMirageDataAnswersRefQrocAnswer['default'], _pixLiveMirageDataAnswersRefQrocmAnswer['default']];

    var answers = _pixLiveUtilsLodashCustom['default'].map(allAnswers, function (oneAnswer) {
      return { id: oneAnswer.data.id, obj: oneAnswer };
    });

    var answer = _pixLiveUtilsLodashCustom['default'].find(answers, { id: request.params.id });

    if (answer) {
      return answer.obj;
    } else {
      throw new Error({ message: '404 The answer you required in the fake server does not exist ' + request.params.id });
    }
  };
});
define('pix-live/mirage/routes/get-assessment-solutions', ['exports', 'pix-live/mirage/data/solutions/ref-solution'], function (exports, _pixLiveMirageDataSolutionsRefSolution) {
  exports['default'] = function () {

    return _pixLiveMirageDataSolutionsRefSolution['default'];
  };
});
define('pix-live/mirage/routes/get-assessment', ['exports', 'pix-live/utils/lodash-custom', 'pix-live/mirage/data/assessments/raw-assessment', 'pix-live/mirage/data/assessments/ref-assessment'], function (exports, _pixLiveUtilsLodashCustom, _pixLiveMirageDataAssessmentsRawAssessment, _pixLiveMirageDataAssessmentsRefAssessment) {
  exports['default'] = function (schema, request) {

    var allAssessments = [_pixLiveMirageDataAssessmentsRawAssessment['default'], _pixLiveMirageDataAssessmentsRefAssessment['default']];

    var assessments = _pixLiveUtilsLodashCustom['default'].map(allAssessments, function (oneAssessment) {
      return { id: oneAssessment.data.id, obj: oneAssessment };
    });

    var assessment = _pixLiveUtilsLodashCustom['default'].find(assessments, { id: request.params.id });

    if (assessment) {
      return assessment.obj;
    } else {
      throw new Error('The assessment you required in the fake server does not exist ' + request.params.id);
    }
  };
});
define('pix-live/mirage/routes/get-challenge', ['exports', 'pix-live/utils/lodash-custom', 'pix-live/mirage/data/challenges/raw-qcm-challenge', 'pix-live/mirage/data/challenges/ref-qcm-challenge', 'pix-live/mirage/data/challenges/ref-qcu-challenge', 'pix-live/mirage/data/challenges/ref-qru-challenge', 'pix-live/mirage/data/challenges/ref-qroc-challenge', 'pix-live/mirage/data/challenges/ref-qrocm-challenge'], function (exports, _pixLiveUtilsLodashCustom, _pixLiveMirageDataChallengesRawQcmChallenge, _pixLiveMirageDataChallengesRefQcmChallenge, _pixLiveMirageDataChallengesRefQcuChallenge, _pixLiveMirageDataChallengesRefQruChallenge, _pixLiveMirageDataChallengesRefQrocChallenge, _pixLiveMirageDataChallengesRefQrocmChallenge) {
  exports['default'] = function (schema, request) {

    var allChallenges = [_pixLiveMirageDataChallengesRawQcmChallenge['default'], _pixLiveMirageDataChallengesRefQcmChallenge['default'], _pixLiveMirageDataChallengesRefQcuChallenge['default'], _pixLiveMirageDataChallengesRefQruChallenge['default'], _pixLiveMirageDataChallengesRefQrocChallenge['default'], _pixLiveMirageDataChallengesRefQrocmChallenge['default']];

    var challenges = _pixLiveUtilsLodashCustom['default'].map(allChallenges, function (oneChallenge) {
      return { id: oneChallenge.data.id, obj: oneChallenge };
    });

    var challenge = _pixLiveUtilsLodashCustom['default'].find(challenges, { id: request.params.id });

    if (challenge) {
      if (challenge.obj.recalculate) {
        challenge.obj.recalculate();
      }

      return challenge.obj;
    } else {
      throw new Error('The challenge you required in the fake server does not exist ' + request.params.id);
    }
  };
});
define('pix-live/mirage/routes/get-challenges', ['exports', 'pix-live/mirage/data/challenges/raw-qcm-challenge', 'pix-live/mirage/data/challenges/ref-qcm-challenge', 'pix-live/mirage/data/challenges/ref-qcu-challenge', 'pix-live/mirage/data/challenges/ref-qru-challenge', 'pix-live/mirage/data/challenges/ref-qroc-challenge', 'pix-live/mirage/data/challenges/ref-qrocm-challenge'], function (exports, _pixLiveMirageDataChallengesRawQcmChallenge, _pixLiveMirageDataChallengesRefQcmChallenge, _pixLiveMirageDataChallengesRefQcuChallenge, _pixLiveMirageDataChallengesRefQruChallenge, _pixLiveMirageDataChallengesRefQrocChallenge, _pixLiveMirageDataChallengesRefQrocmChallenge) {
  exports['default'] = function () {

    return {
      data: [_pixLiveMirageDataChallengesRawQcmChallenge['default'], _pixLiveMirageDataChallengesRefQcmChallenge['default'].data, _pixLiveMirageDataChallengesRefQcuChallenge['default'].data, _pixLiveMirageDataChallengesRefQruChallenge['default'].data, _pixLiveMirageDataChallengesRefQrocChallenge['default'].data, _pixLiveMirageDataChallengesRefQrocmChallenge['default'].data]
    };
  };
});
define('pix-live/mirage/routes/get-course', ['exports', 'pix-live/utils/lodash-custom', 'pix-live/mirage/data/courses/ref-course', 'pix-live/mirage/data/courses/raw-course'], function (exports, _pixLiveUtilsLodashCustom, _pixLiveMirageDataCoursesRefCourse, _pixLiveMirageDataCoursesRawCourse) {
  exports['default'] = function (schema, request) {

    var allCourses = [_pixLiveMirageDataCoursesRefCourse['default'], _pixLiveMirageDataCoursesRawCourse['default']];

    var courses = _pixLiveUtilsLodashCustom['default'].map(allCourses, function (oneCourse) {
      return { id: oneCourse.data.id, obj: oneCourse };
    });

    var course = _pixLiveUtilsLodashCustom['default'].find(courses, { id: request.params.id });

    if (course) {
      return course.obj;
    } else {
      throw new Error('The course you required in the fake server does not exist ' + request.params.id);
    }
  };
});
define('pix-live/mirage/routes/get-courses', ['exports', 'pix-live/utils/lodash-custom', 'pix-live/mirage/data/courses/ref-course', 'pix-live/mirage/data/courses/raw-course', 'pix-live/mirage/data/courses/adaptive-course'], function (exports, _pixLiveUtilsLodashCustom, _pixLiveMirageDataCoursesRefCourse, _pixLiveMirageDataCoursesRawCourse, _pixLiveMirageDataCoursesAdaptiveCourse) {
  exports['default'] = function (schema, request) {

    var allCourses = [_pixLiveMirageDataCoursesRefCourse['default'].data, _pixLiveMirageDataCoursesRawCourse['default'].data, _pixLiveMirageDataCoursesAdaptiveCourse['default'].data];

    var filteredCourses = _pixLiveUtilsLodashCustom['default'].filter(allCourses, function (oneCourse) {
      return _pixLiveUtilsLodashCustom['default'].isEmpty(request.queryParams.isAdaptive) || oneCourse.attributes['is-adaptive'];
    });

    return { data: filteredCourses };
  };
});
define('pix-live/mirage/routes/get-next-challenge', ['exports', 'pix-live/mirage/data/challenges/raw-qcm-challenge', 'pix-live/mirage/data/challenges/ref-qcm-challenge', 'pix-live/mirage/data/challenges/ref-qcu-challenge', 'pix-live/mirage/data/challenges/ref-qru-challenge', 'pix-live/mirage/data/challenges/ref-qroc-challenge', 'pix-live/mirage/data/challenges/ref-qrocm-challenge'], function (exports, _pixLiveMirageDataChallengesRawQcmChallenge, _pixLiveMirageDataChallengesRefQcmChallenge, _pixLiveMirageDataChallengesRefQcuChallenge, _pixLiveMirageDataChallengesRefQruChallenge, _pixLiveMirageDataChallengesRefQrocChallenge, _pixLiveMirageDataChallengesRefQrocmChallenge) {
  exports['default'] = function (schema, request) {

    // case 1 : we're trying to reach the first challenge for a given assessment
    if (!request.params.challengeId) {
      switch (request.params.assessmentId) {
        case 'raw_assessment_id':
          return _pixLiveMirageDataChallengesRawQcmChallenge['default'];
        case 'ref_assessment_id':
          return _pixLiveMirageDataChallengesRefQcmChallenge['default'];
        default:
          throw new Error('This assessment is not defined ' + request.params.assessmentId);
      }
    }

    // case 2 : test already started, challenge exists.
    var nextChallenge = {
      // raw_course
      'raw_qcm_challenge_id': 'null', // JSON should contain 'null', not null

      // ref_course
      'ref_qcm_challenge_id': _pixLiveMirageDataChallengesRefQcuChallenge['default'],
      'ref_qcu_challenge_id': _pixLiveMirageDataChallengesRefQruChallenge['default'],
      'ref_qru_challenge_id': _pixLiveMirageDataChallengesRefQrocChallenge['default'],
      'ref_qroc_challenge_id': _pixLiveMirageDataChallengesRefQrocmChallenge['default'],
      'ref_qrocm_challenge_id': 'null'
    };

    var challenge = nextChallenge[request.params.challengeId];

    if (challenge) {
      return challenge;
    } else {
      throw new Error('There is no challenge following challenge ' + request.params.challengeId);
    }
  };
});
define('pix-live/mirage/routes/post-answers', ['exports', 'pix-live/utils/lodash-custom', 'pix-live/mirage/data/challenges/raw-qcm-challenge', 'pix-live/mirage/data/challenges/ref-qcm-challenge', 'pix-live/mirage/data/challenges/ref-qcu-challenge', 'pix-live/mirage/data/challenges/ref-qru-challenge', 'pix-live/mirage/data/challenges/ref-qroc-challenge', 'pix-live/mirage/data/challenges/ref-qrocm-challenge', 'pix-live/mirage/data/answers/raw-qcm-answer', 'pix-live/mirage/data/answers/ref-qcu-answer', 'pix-live/mirage/data/answers/ref-qru-answer', 'pix-live/mirage/data/answers/ref-qcm-answer', 'pix-live/mirage/data/answers/ref-qroc-answer', 'pix-live/mirage/data/answers/ref-qrocm-answer'], function (exports, _pixLiveUtilsLodashCustom, _pixLiveMirageDataChallengesRawQcmChallenge, _pixLiveMirageDataChallengesRefQcmChallenge, _pixLiveMirageDataChallengesRefQcuChallenge, _pixLiveMirageDataChallengesRefQruChallenge, _pixLiveMirageDataChallengesRefQrocChallenge, _pixLiveMirageDataChallengesRefQrocmChallenge, _pixLiveMirageDataAnswersRawQcmAnswer, _pixLiveMirageDataAnswersRefQcuAnswer, _pixLiveMirageDataAnswersRefQruAnswer, _pixLiveMirageDataAnswersRefQcmAnswer, _pixLiveMirageDataAnswersRefQrocAnswer, _pixLiveMirageDataAnswersRefQrocmAnswer) {
  exports['default'] = function (schema, request) {

    var answer = JSON.parse(request.requestBody);
    var challengeId = answer.data.relationships.challenge.data.id;

    var allChallenges = [_pixLiveMirageDataChallengesRawQcmChallenge['default'], _pixLiveMirageDataChallengesRefQcmChallenge['default'], _pixLiveMirageDataChallengesRefQcuChallenge['default'], _pixLiveMirageDataChallengesRefQruChallenge['default'], _pixLiveMirageDataChallengesRefQrocChallenge['default'], _pixLiveMirageDataChallengesRefQrocmChallenge['default']];

    var allAnswers = [_pixLiveMirageDataAnswersRawQcmAnswer['default'], _pixLiveMirageDataAnswersRefQcmAnswer['default'], _pixLiveMirageDataAnswersRefQcuAnswer['default'], _pixLiveMirageDataAnswersRefQruAnswer['default'], _pixLiveMirageDataAnswersRefQrocAnswer['default'], _pixLiveMirageDataAnswersRefQrocmAnswer['default']];

    var answers = _pixLiveUtilsLodashCustom['default'].map(allChallenges, function (oneChallenge, index) {
      return { id: oneChallenge.data.id, obj: allAnswers[index] };
    });

    var finalAnswer = _pixLiveUtilsLodashCustom['default'].find(answers, { id: challengeId });

    if (finalAnswer) {
      return finalAnswer.obj;
    } else {
      throw new Error('Unable to POST this answer in the stub, sorry');
    }
  };
});

// answers
define('pix-live/mirage/routes/post-assessments', ['exports', 'pix-live/utils/lodash-custom', 'pix-live/mirage/data/assessments/raw-assessment', 'pix-live/mirage/data/assessments/ref-assessment'], function (exports, _pixLiveUtilsLodashCustom, _pixLiveMirageDataAssessmentsRawAssessment, _pixLiveMirageDataAssessmentsRefAssessment) {
  exports['default'] = function (schema, request) {

    var answer = JSON.parse(request.requestBody);
    var courseId = answer.data.relationships.course.data.id;

    var allAssessments = [_pixLiveMirageDataAssessmentsRawAssessment['default'], _pixLiveMirageDataAssessmentsRefAssessment['default']];

    var assessments = _pixLiveUtilsLodashCustom['default'].map(allAssessments, function (oneAssessment) {
      return { id: oneAssessment.data.relationships.course.data.id, obj: oneAssessment };
    });

    var assessment = _pixLiveUtilsLodashCustom['default'].find(assessments, { id: courseId });

    if (assessment) {
      return assessment.obj;
    } else {
      throw new Error('undefined new assessment, sorry');
    }
  };
});
define('pix-live/mirage/routes/post-feedbacks', ['exports', 'pix-live/mirage/data/feedbacks/ref-feedback'], function (exports, _pixLiveMirageDataFeedbacksRefFeedback) {
  exports['default'] = function () {
    return _pixLiveMirageDataFeedbacksRefFeedback['default'];
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
    timeout: attr('number'),
    assessment: belongsTo('assessment'),
    challenge: belongsTo('challenge'),

    isResultOk: computed('result', function () {
      return this.get('result') === 'ok';
    }),
    isResultWithoutAnswer: computed('result', function () {
      return this.get('result') === 'aband';
    }),
    isResultPartiallyOk: computed('result', function () {
      return this.get('result') === 'partially';
    }),
    isResultNotOk: computed('result', function () {
      return this.get('result') === 'ko';
    }),
    isResultTimedOut: computed('result', function () {
      return this.get('result') === 'timedout';
    })

  });
});
define('pix-live/models/answer/value-as-array-of-boolean-mixin', ['exports', 'ember', 'pix-live/utils/lodash-custom'], function (exports, _ember, _pixLiveUtilsLodashCustom) {
  exports['default'] = _ember['default'].Mixin.create({

    /*
    * Convert "1,2,4" into [true, true, false, true]
    */
    _valueAsArrayOfBoolean: _ember['default'].computed('value', function () {
      return _pixLiveUtilsLodashCustom['default'].chain(this.get('value')) // in the worst case : ',4, 2 , 2,1,  ,'
      .checkPoint(function (e) {
        return _pixLiveUtilsLodashCustom['default'].isString(e) ? e : '';
      }) // check if string
      .split(',') // now ['', '4', ' 2 ', ' 2', '1', '  ', '']
      .map(_pixLiveUtilsLodashCustom['default'].trim) // now ['', '4', '2', '2', '1', '', '']
      .reject(_pixLiveUtilsLodashCustom['default'].isEmpty) // now ['4', '2', '2', '1']
      .checkPoint(function (e) {
        return _pixLiveUtilsLodashCustom['default'].every(e, _pixLiveUtilsLodashCustom['default'].isStrictlyPositiveInteger) ? e : [];
      }) // check if int >= 1
      .map(_pixLiveUtilsLodashCustom['default'].parseInt) // now [4, 2, 2, 1]
      .sortBy() // now [1, 2, 2, 4]
      .uniqBy() // now [1, 2, 4]
      .map(function (e) {
        return e - 1;
      }) // now [0, 1, 3]
      .thru(function (e) {
        return _pixLiveUtilsLodashCustom['default'].times(_pixLiveUtilsLodashCustom['default'].max(e) + 1, function (o) {
          return (0, _pixLiveUtilsLodashCustom['default'])(e).includes(o);
        });
      }).value();
    })

  });
});
define('pix-live/models/answer/value-as-array-of-string-mixin', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Mixin.create({

    _valuesAsMap: _ember['default'].computed('value', function () {
      try {
        return jsyaml.load(this.get('value'));
      } catch (e) {
        return undefined;
      }
    })

  });
});
/* global jsyaml */
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
define('pix-live/models/challenge', ['exports', 'ember', 'ember-data', 'pix-live/models/challenge/proposals-as-array-mixin', 'pix-live/models/challenge/proposals-as-blocks-mixin', 'pix-live/utils/lodash-custom'], function (exports, _ember, _emberData, _pixLiveModelsChallengeProposalsAsArrayMixin, _pixLiveModelsChallengeProposalsAsBlocksMixin, _pixLiveUtilsLodashCustom) {
  var Model = _emberData['default'].Model;
  var attr = _emberData['default'].attr;

  var ChallengeModel = Model.extend(_pixLiveModelsChallengeProposalsAsArrayMixin['default'], _pixLiveModelsChallengeProposalsAsBlocksMixin['default'], {

    instruction: attr('string'),
    proposals: attr('string'),
    hasntInternetAllowed: attr('boolean'),
    timer: attr('number'),
    illustrationUrl: attr('string'),
    type: attr('string'),

    attachments: attr('array'),
    hasAttachment: _ember['default'].computed.notEmpty('attachments'),
    hasSingleAttachment: _ember['default'].computed.equal('attachments.length', 1),
    hasMultipleAttachments: _ember['default'].computed.gt('attachments.length', 1),
    hasTimer: _ember['default'].computed.notEmpty('timer'),

    challengeItemType: _ember['default'].computed('type', function () {
      var result = undefined;
      var challengeType = this.get('type').toUpperCase();

      if ((0, _pixLiveUtilsLodashCustom['default'])(challengeType).isAmongst(['QCUIMG', 'QCU', 'QRU'])) {
        result = 'qcu';
      } else if ((0, _pixLiveUtilsLodashCustom['default'])(challengeType).isAmongst(['QCMIMG', 'QCM'])) {
        result = 'qcm';
      } else if ((0, _pixLiveUtilsLodashCustom['default'])(challengeType).isAmongst(['QROC'])) {
        result = 'qroc';
      } else if ((0, _pixLiveUtilsLodashCustom['default'])(challengeType).isAmongst(['QROCM', 'QROCM-IND', 'QROCM-DEP'])) {
        result = 'qrocm';
      }

      return 'challenge-item-' + result;
    })

  });

  exports['default'] = ChallengeModel;
});
define('pix-live/models/challenge/proposals-as-array-mixin', ['exports', 'ember', 'pix-live/utils/lodash-custom'], function (exports, _ember, _pixLiveUtilsLodashCustom) {

  function calculate(proposals) {
    return _pixLiveUtilsLodashCustom['default'].chain(proposals).thru(function (e) {
      return '\n' + e;
    }).split(/\n\s*-\s*/).removeFirstElement().value();
  }

  exports['default'] = _ember['default'].Mixin.create({
    _proposalsAsArray: _ember['default'].computed('proposals', function () {

      var proposals = this.get('proposals');
      var DEFAULT_RETURN_VALUE = [];

      // check pre-conditions
      if ((0, _pixLiveUtilsLodashCustom['default'])(proposals).isNotString()) return DEFAULT_RETURN_VALUE;
      if ((0, _pixLiveUtilsLodashCustom['default'])(proposals).isEmpty()) return DEFAULT_RETURN_VALUE;

      return calculate(proposals);
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
    isAdaptive: attr('boolean'),
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
define('pix-live/models/feedback', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({

    email: _emberData['default'].attr('string'),
    content: _emberData['default'].attr('string'),
    assessment: _emberData['default'].belongsTo('assessment'),
    challenge: _emberData['default'].belongsTo('challenge')

  });
});
define('pix-live/models/solution', ['exports', 'ember-data', 'pix-live/models/answer/value-as-array-of-boolean-mixin'], function (exports, _emberData, _pixLiveModelsAnswerValueAsArrayOfBooleanMixin) {
  var Model = _emberData['default'].Model;
  var attr = _emberData['default'].attr;
  exports['default'] = Model.extend(_pixLiveModelsAnswerValueAsArrayOfBooleanMixin['default'], {

    value: attr('string')

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

    this.route('challenges.get-preview', { path: '/challenges/:challenge_id/preview' });

    this.route('courses.get-course-preview', { path: '/courses/:course_id/preview' });
    this.route('courses.get-challenge-preview', { path: '/courses/:course_id/preview/challenges/:challenge_id' });
    this.route('courses.create-assessment', { path: '/courses/:course_id/assessment' });

    this.route('assessments.get-challenge', { path: '/assessments/:assessment_id/challenges/:challenge_id' });
    this.route('assessments.get-results', { path: '/assessments/:assessment_id/results' });
    this.route('project', { path: '/projet' });
    this.route('assessments.get-comparison', { path: '/assessments/:assessment_id/results/compare/:answer_id/:index' });
  });
});
define('pix-live/routes/assessments/get-challenge', ['exports', 'ember', 'rsvp'], function (exports, _ember, _rsvp) {
  exports['default'] = _ember['default'].Route.extend({

    assessmentService: _ember['default'].inject.service('assessment'),

    model: function model(params) {
      var _this = this;

      var store = this.get('store');

      var assessmentId = params.assessment_id;
      var challengeId = params.challenge_id;

      var promises = {
        assessment: store.findRecord('assessment', assessmentId),
        challenge: store.findRecord('challenge', challengeId),
        answers: store.queryRecord('answer', { assessment: assessmentId, challenge: challengeId })
      };

      return _rsvp['default'].hash(promises).then(function (model) {
        return _this._addProgressToModel(model);
      });
    },

    serialize: function serialize(model) {
      return {
        assessment_id: model.assessment.id,
        challenge_id: model.challenge.id
      };
    },

    actions: {

      saveAnswerAndNavigate: function saveAnswerAndNavigate(currentChallenge, assessment, answerValue, answerTimeout) {
        var _this2 = this;

        var answer = this._createAnswer(answerValue, answerTimeout, currentChallenge, assessment);
        answer.save().then(function () {
          _this2._navigateToNextView(currentChallenge, assessment);
        });
      }
    },

    _createAnswer: function _createAnswer(answerValue, answerTimeout, currentChallenge, assessment) {
      return this.get('store').createRecord('answer', {
        value: answerValue,
        timeout: answerTimeout,
        challenge: currentChallenge,
        assessment: assessment
      });
    },

    _urlForNextChallenge: function _urlForNextChallenge(adapter, assessmentId, currentChallengeId) {
      return adapter.buildURL('assessment', assessmentId) + '/next/' + currentChallengeId;
    },

    _navigateToNextView: function _navigateToNextView(currentChallenge, assessment) {
      var _this3 = this;

      var adapter = this.get('store').adapterFor('application');
      adapter.ajax(this._urlForNextChallenge(adapter, assessment.get('id'), currentChallenge.get('id')), 'GET').then(function (nextChallenge) {
        if (nextChallenge) {
          _this3.transitionTo('assessments.get-challenge', assessment.get('id'), nextChallenge.data.id);
        } else {
          _this3.transitionTo('assessments.get-results', assessment.get('id'));
        }
      });
    },

    _addProgressToModel: function _addProgressToModel(model) {
      return model.assessment.get('course').then(function (course) {
        model.progress = course.getProgress(model.challenge);
        return model;
      });
    }

  });
});
define('pix-live/routes/assessments/get-comparison', ['exports', 'ember', 'ember-routable-modal/mixins/route', 'rsvp'], function (exports, _ember, _emberRoutableModalMixinsRoute, _rsvp) {
  exports['default'] = _ember['default'].Route.extend(_emberRoutableModalMixinsRoute['default'], {

    model: function model(params) {
      var store = this.get('store');

      var assessmentId = params.assessment_id;
      var answerId = params.answer_id;
      var index = params.index;

      return store.findRecord('answer', answerId).then(function (answer) {
        return store.findRecord('challenge', answer.get('challenge.id')).then(function (challenge) {
          return store.queryRecord('solution', { assessmentId: assessmentId, answerId: answerId }).then(function (solution) {
            return _rsvp['default'].hash({
              answer: answer,
              challenge: challenge,
              solution: solution,
              index: index
            });
          });
        });
      });
    }

  });
});
define('pix-live/routes/assessments/get-results', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model(params) {
      return this.store.findRecord('assessment', params.assessment_id, { reload: true });
    },

    serialize: function serialize(model) {
      return {
        assessment_id: model.assessment.id
      };
    },

    actions: {

      openComparison: function openComparison(assessment_id, answer_id, index) {
        this.get('router').transitionTo('assessments.get-comparison', assessment_id, answer_id, index);
      }
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

    _urlForNextChallenge: function _urlForNextChallenge(adapter, assessmentId) {
      return adapter.buildURL('assessment', assessmentId) + '/next';
    },

    afterModel: function afterModel(model) {
      var _this = this;

      // FIXME: manage the case when assessment's course has no challenge
      //this.transitionTo('assessments.get-challenge', model.assessment.get('id'), model.assessment.get('firstChallenge.id'));
      var assessment = model.assessment;
      var adapter = this.get('store').adapterFor('application');
      adapter.ajax(this._urlForNextChallenge(adapter, assessment.get('id') /* no current challenge */), 'GET').then(function (nextChallenge) {
        if (nextChallenge) {
          _this.transitionTo('assessments.get-challenge', assessment.get('id'), nextChallenge.data.id);
        } else {
          _this.transitionTo('assessments.get-results', assessment.get('id'));
        }
      });
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
      return this.store.query('course', { isAdaptive: true });
    }
  });
});
define('pix-live/routes/project', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('pix-live/serializers/challenge', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].JSONAPISerializer.extend({

    normalizeResponse: function normalizeResponse(store, primaryModelClass, payload) {
      var challengeAttachments = payload.data.attributes.attachments;
      if (!challengeAttachments) {
        challengeAttachments = [];
      }
      return this._super.apply(this, arguments);
    }

  });
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
define('pix-live/services/current-routed-modal', ['exports', 'ember', 'ember-routable-modal/configuration'], function (exports, _ember, _emberRoutableModalConfiguration) {
    exports['default'] = _ember['default'].Service.extend({
        routing: _ember['default'].inject.service('-routing'),
        routeName: null,
        activeListener: (function () {
            if (typeof _ember['default'].$ !== 'undefined') {
                _ember['default'].$('body')[this.get('routeName') ? 'addClass' : 'removeClass'](_emberRoutableModalConfiguration['default'].modalOpenBodyClassName);
            }
        }).observes('routeName'),
        init: function init() {
            var _this = this;

            this._super.apply(this, arguments);

            if (typeof _ember['default'].$ !== 'undefined' && typeof window !== 'undefined') {
                _ember['default'].$(window).on('popstate.ember-routable-modal', function () {
                    if (_this.get('routeName')) {
                        _this.set('routeName', null);
                    }
                });
            }
        },
        clear: function clear() {
            this.set('routeName', null);
        },
        close: function close() {
            var rout = this.get('routing.router.router');
            var handlerInfos = this.get('routing.router.router.state.handlerInfos');
            var currentController = handlerInfos[handlerInfos.length - 1]._handler.controller;

            this.set('routeName', null);

            if (currentController._isModalRoute) {
                var parentRoute = handlerInfos[handlerInfos.length - 2].name;

                rout.transitionTo(parentRoute);
            } else {
                var url = this.get('routing').generateURL(this.get('routing.currentPath'));

                rout.updateURL(url);
            }
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
  exports["default"] = Ember.HTMLBars.template({ "id": "Lss/9i1M", "block": "{\"statements\":[[\"append\",[\"helper\",[\"app-header\"],null,[[\"id\"],[\"app-header\"]]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"body\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"routable-modal-outlet\"]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/application.hbs" } });
});
define("pix-live/templates/assessments/get-challenge-loading", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "hPhP7kdH", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"assessment-challenge-loading\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"loader-container\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"loader\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"loader-inner ball-zig-zag\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ball-spinner\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ball-spinner\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/assessments/get-challenge-loading.hbs" } });
});
define("pix-live/templates/assessments/get-challenge", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "iH5ezu9v", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"assessment-challenge\"],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"append\",[\"helper\",[\"course-banner\"],null,[[\"course\",\"withHomeLink\"],[[\"get\",[\"model\",\"assessment\",\"course\"]],true]]],false],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"unless\"],[[\"get\",[\"model\",\"assessment\",\"course\",\"isAdaptive\"]]],null,0],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"component\"],[[\"get\",[\"model\",\"challenge\",\"challengeItemType\"]]],[[\"challenge\",\"assessment\",\"answers\",\"onValidated\"],[[\"get\",[\"model\",\"challenge\"]],[\"get\",[\"model\",\"assessment\"]],[\"get\",[\"model\",\"answers\"]],\"saveAnswerAndNavigate\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"append\",[\"helper\",[\"progress-bar\"],[[\"get\",[\"model\",\"progress\"]]],null],false],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/assessments/get-challenge.hbs" } });
});
define("pix-live/templates/assessments/get-comparison", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "q0IHBspE", "block": "{\"statements\":[[\"append\",[\"helper\",[\"comparison-window\"],[[\"get\",[\"model\",\"answer\"]],[\"get\",[\"model\",\"challenge\"]],[\"get\",[\"model\",\"solution\"]],[\"get\",[\"model\",\"index\"]]],null],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/assessments/get-comparison.hbs" } });
});
define("pix-live/templates/assessments/get-results", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "NrVCKsl2", "block": "{\"statements\":[[\"append\",[\"helper\",[\"get-result\"],null,[[\"assessment\"],[[\"get\",[\"model\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/assessments/get-results.hbs" } });
});
define("pix-live/templates/challenges/get-preview", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "rnGG28G4", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"challenge-preview\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"component\"],[[\"get\",[\"challengeItemType\"]]],[[\"challenge\"],[[\"get\",[\"model\",\"challenge\"]]]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/challenges/get-preview.hbs" } });
});
define("pix-live/templates/components/app-footer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "n/Szc4/o", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"app-footer\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"app-footer__pix-logo\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"app-footer__pix-logo-img\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/pix-logo.svg\"]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"app-footer__item-contact\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"app-footer__link-text\"],[\"static-attr\",\"href\",\"mailto:contact@pix.beta.gouv.fr\"],[\"flush-element\"],[\"text\",\"Contactez-nous\"],[\"close-element\"],[\"text\",\"\\n    |\\n    \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"app-footer__link-text\"],[\"static-attr\",\"href\",\"https://github.com/sgmap/pix\"],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"text\",\"Le code source est libre\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"app-footer__item-marianne\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/mnsr3.svg\"]]],[\"static-attr\",\"class\",\"app-footer__logo-marianne-img\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/app-footer.hbs" } });
});
define("pix-live/templates/components/app-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "3xyCyIF6", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"router\",\"currentRouteName\"]],\"index\"],null]],null,1,0],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"app-header-started\"],[\"flush-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"nav\",[]],[\"static-attr\",\"class\",\"app-header-navbar\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"app-header-navbar__container container\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"navbar-header row\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"navbar-header__brand\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"class\",\"app-header-logo-svg\"],[\"static-attr\",\"width\",\"82px\"],[\"static-attr\",\"height\",\"78px\"],[\"static-attr\",\"viewBox\",\"0 -4 130 98\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"flush-element\"],[\"open-element\",\"defs\",[]],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"Home\"],[\"static-attr\",\"stroke\",\"none\"],[\"static-attr\",\"stroke-width\",\"1\"],[\"static-attr\",\"fill\",\"none\"],[\"static-attr\",\"fill-rule\",\"evenodd\"],[\"flush-element\"],[\"open-element\",\"g\",[]],[\"static-attr\",\"transform\",\"translate(-655.000000, -12.000000)\"],[\"static-attr\",\"id\",\"MenuBar\"],[\"flush-element\"],[\"open-element\",\"g\",[]],[\"flush-element\"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"pix-logo\"],[\"static-attr\",\"transform\",\"translate(655.000000, 12.000000)\"],[\"flush-element\"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"pix\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M112.985852,65.9858088 C116.818681,65.9858088 116.928334,65.4400159 114.62854,62.4931224 L101.487041,46.4483316 C100.501461,45.2477813 99.9538442,44.2653218 99.9538442,43.5012764 C99.9538442,42.6281048 100.501461,41.645807 101.487041,40.5543829 L114.62854,24.5095921 C116.928334,21.5626986 116.818681,21.0169057 112.985852,21.0169057 L111.671637,21.0169057 C107.838808,21.0169057 106.415103,21.7809511 104.115308,24.5095921 L94.0402021,36.7341561 C89.7690852,41.645807 89.7690852,45.3569075 94.0402021,50.2685584 L104.115308,62.4931224 C106.415103,65.2217635 107.838808,65.9858088 111.671637,65.9858088 L112.985852,65.9858088 Z\"],[\"static-attr\",\"id\",\"Page-1\"],[\"static-attr\",\"fill\",\"#3D68FF\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M96.7648554,65.9858088 C100.597684,65.9858088 100.707338,65.4400159 98.4075428,62.4931224 L85.2660439,46.4483316 C84.2804639,45.2477813 83.7328474,44.2653218 83.7328474,43.5012764 C83.7328474,42.6281048 84.2804639,41.645807 85.2660439,40.5543829 L98.4075428,24.5095921 C100.707338,21.5626986 100.597684,21.0169057 96.7648554,21.0169057 L95.4506407,21.0169057 C91.6178116,21.0169057 90.194106,21.7809511 87.8943112,24.5095921 L77.8192053,36.7341561 C73.5480884,41.645807 73.5480884,45.3569075 77.8192053,50.2685584 L87.8943112,62.4931224 C90.194106,65.2217635 91.6178116,65.9858088 95.4506407,65.9858088 L96.7648554,65.9858088 Z\"],[\"static-attr\",\"id\",\"Page-1\"],[\"static-attr\",\"fill\",\"#FFBE00\"],[\"static-attr\",\"transform\",\"translate(87.274616, 43.501357) scale(-1, 1) translate(-87.274616, -43.501357) \"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M0,83.0943784 C0,86.45967 0.844134004,87.3009929 4.22067002,87.3009929 L5.34607389,87.3009929 C8.7226099,87.3009929 9.56674391,86.45967 9.56674391,83.0943784 L9.56674391,63.5572245 C12.0991459,67.5767886 16.6950046,69.6333736 23.3541578,69.6333736 C36.3911944,69.6333736 42.8628343,62.809346 42.8628343,49.2548969 L42.8628343,41.1221627 C42.8628343,27.5675519 35.9222491,21.2110696 21.3844578,21.2110696 C7.8784759,21.2110696 0,27.7546023 0,41.1221627 L0,83.0943784 Z M33.2023338,49.4417857 C33.2023338,57.294025 30.5761752,60.5658722 21.4783766,60.5658722 C12.1929025,60.5658722 9.56674391,57.2005806 9.56674391,49.4417857 L9.56674391,41.4024959 C9.56674391,33.5502566 12.380578,30.184965 21.4783766,30.184965 C30.7636884,30.184965 33.2023338,33.5502566 33.2023338,41.4024959 L33.2023338,49.4417857 Z\"],[\"static-attr\",\"id\",\"Fill-1\"],[\"static-attr\",\"fill\",\"#3D68FF\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M53.086199,62.9068321 C53.086199,66.2721237 53.930333,67.1134466 57.306869,67.1134466 L58.5260295,67.1134466 C61.9025655,67.1134466 62.7466995,66.2721237 62.7466995,62.9068321 L62.7466995,24.9541805 C62.7466995,21.5888889 61.9025655,20.747566 58.5260295,20.747566 L57.306869,20.747566 C53.930333,20.747566 53.086199,21.5888889 53.086199,24.9541805 L53.086199,62.9068321 Z M53.7426576,10.6518528 C56.0875463,12.8953267 59.8391088,12.8953267 62.090241,10.6518528 C64.4349676,8.3147729 64.4349676,4.57570371 62.090241,2.33222986 C59.8391088,-0.00485005516 56.0875463,-0.00485005516 53.7426576,2.33222986 C51.397931,4.57570371 51.397931,8.3147729 53.7426576,10.6518528 L53.7426576,10.6518528 Z\"],[\"static-attr\",\"id\",\"Fill-2\"],[\"static-attr\",\"fill\",\"#3D68FF\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"navbar-header__ribbon\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"append\",[\"unknown\",[\"corner-ribbon\"]],false],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"app-header\"],[\"flush-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"app-header-container\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"app-header-container-marianne\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"app-header-marianne\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/logo-de-la-republique-francaise.svg\"]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"app-header-container-logo\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"app-header-logo\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"app-header-logo-svg\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/pix-logo.svg\"]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"append\",[\"unknown\",[\"app-menu\"]],false],[\"text\",\"\\n      \"],[\"append\",[\"unknown\",[\"corner-ribbon\"]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/app-header.hbs" } });
});
define("pix-live/templates/components/app-menu", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "j30AxXzS", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"app-menu-wrapper\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"app-menu\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"menuData\"]]],null,2],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"app-menu__item\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[[\"unknown\",[\"rootURL\"]],[\"unknown\",[\"menuItem\",\"href\"]]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"menuItem\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"app-menu__item\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[[\"unknown\",[\"rootURL\"]],[\"unknown\",[\"item\",\"href\"]]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"item\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"item\"]},{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"menuItem\"]]],null,1,0]],\"locals\":[\"menuItem\"]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/app-menu.hbs" } });
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
define("pix-live/templates/components/challenge-actions", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "pS2m+4V+", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"challenge-actions\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"challenge-actions__action challenge-actions__action-skip\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"skip\"]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"challenge-actions__action-skip-text\"],[\"flush-element\"],[\"text\",\"Je passe\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"challenge-actions__action challenge-actions__action-validate\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"validate\"]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"challenge-actions__action-validate-text\"],[\"flush-element\"],[\"text\",\"Je valide\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/challenge-actions.hbs" } });
});
define("pix-live/templates/components/challenge-item-generic", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "kUR9P7Iu", "block": "{\"statements\":[[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/challenge-item-generic.hbs" } });
});
define("pix-live/templates/components/challenge-item-qcm", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "AxbCxM7x", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"hasChallengeTimer\"]]],null,7],[\"text\",\"\\n\"],[\"block\",[\"unless\"],[[\"get\",[\"hasChallengeTimer\"]]],null,5]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"append\",[\"helper\",[\"challenge-actions\"],null,[[\"skip\",\"validate\"],[\"skip\",\"validate\"]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"alert alert-danger\"],[\"static-attr\",\"role\",\"alert\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"unknown\",[\"errorMessage\"]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel__row timeout-jauge-wrapper\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"timeout-jauge\"],null,[[\"allotedTime\"],[[\"get\",[\"challenge\",\"timer\"]]]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"hasUserConfirmWarning\"]]],null,2]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"append\",[\"unknown\",[\"challenge-stay\"]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"challenge\",\"hasntInternetAllowed\"]]],null,4],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"challenge-statement\"],[[\"get\",[\"challenge\"]]],null],false],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel challenge-response\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel__row challenge-proposals\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"qcm-proposals\"],null,[[\"answers\",\"proposals\",\"onAnswerUpdated\"],[[\"get\",[\"answers\",\"_valueAsArrayOfBoolean\"]],[\"get\",[\"challenge\",\"_proposalsAsArray\"]],\"answerChanged\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"challenge\",\"timer\"]]],null,3],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"errorMessage\"]]],null,1],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"assessment\"]]],null,0],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"append\",[\"helper\",[\"warning-page\"],null,[[\"hasUserConfirmWarning\",\"time\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"setUserConfirmation\"],null],[\"get\",[\"challenge\",\"timer\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"unless\"],[[\"get\",[\"hasUserConfirmWarning\"]]],null,6]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/challenge-item-qcm.hbs" } });
});
define("pix-live/templates/components/challenge-item-qcu", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "n15A1mCp", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"hasChallengeTimer\"]]],null,7],[\"text\",\"\\n\"],[\"block\",[\"unless\"],[[\"get\",[\"hasChallengeTimer\"]]],null,5]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"append\",[\"helper\",[\"challenge-actions\"],null,[[\"skip\",\"validate\"],[\"skip\",\"validate\"]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"alert alert-danger\"],[\"static-attr\",\"role\",\"alert\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"unknown\",[\"errorMessage\"]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel__row timeout-jauge-wrapper\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"timeout-jauge\"],null,[[\"allotedTime\"],[[\"get\",[\"challenge\",\"timer\"]]]]],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"hasUserConfirmWarning\"]]],null,2]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"append\",[\"unknown\",[\"challenge-stay\"]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"challenge\",\"hasntInternetAllowed\"]]],null,4],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"challenge-statement\"],[[\"get\",[\"challenge\"]]],null],false],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel challenge-response\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel__row challenge-proposals\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"qcu-proposals\"],null,[[\"answers\",\"proposals\",\"onAnswerUpdated\"],[[\"get\",[\"answers\",\"_valueAsArrayOfBoolean\"]],[\"get\",[\"challenge\",\"_proposalsAsArray\"]],\"answerChanged\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"challenge\",\"timer\"]]],null,3],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"errorMessage\"]]],null,1],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"assessment\"]]],null,0]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"append\",[\"helper\",[\"warning-page\"],null,[[\"hasUserConfirmWarning\",\"time\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"setUserConfirmation\"],null],[\"get\",[\"challenge\",\"timer\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"unless\"],[[\"get\",[\"hasUserConfirmWarning\"]]],null,6]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/challenge-item-qcu.hbs" } });
});
define("pix-live/templates/components/challenge-item-qroc", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "him3+jrR", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"hasChallengeTimer\"]]],null,7],[\"text\",\"\\n\"],[\"block\",[\"unless\"],[[\"get\",[\"hasChallengeTimer\"]]],null,5]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"append\",[\"helper\",[\"challenge-actions\"],null,[[\"skip\",\"validate\"],[\"skip\",\"validate\"]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"alert alert-danger\"],[\"static-attr\",\"role\",\"alert\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"unknown\",[\"errorMessage\"]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel__row timeout-jauge-wrapper\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"timeout-jauge\"],null,[[\"allotedTime\"],[[\"get\",[\"challenge\",\"timer\"]]]]],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"hasUserConfirmWarning\"]]],null,2]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"append\",[\"unknown\",[\"challenge-stay\"]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"challenge\",\"hasntInternetAllowed\"]]],null,4],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"challenge-statement\"],[[\"get\",[\"challenge\"]]],null],false],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel challenge-response\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel__row challenge-proposals\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"qroc-proposal\"],null,[[\"blocks\",\"answerValue\",\"onInputChanged\"],[[\"get\",[\"challenge\",\"_proposalsAsBlocks\"]],[\"get\",[\"answers\",\"value\"]],\"inputChanged\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"challenge\",\"timer\"]]],null,3],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"errorMessage\"]]],null,1],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"assessment\"]]],null,0]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"append\",[\"helper\",[\"warning-page\"],null,[[\"hasUserConfirmWarning\",\"time\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"setUserConfirmation\"],null],[\"get\",[\"challenge\",\"timer\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"unless\"],[[\"get\",[\"hasUserConfirmWarning\"]]],null,6]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/challenge-item-qroc.hbs" } });
});
define("pix-live/templates/components/challenge-item-qrocm", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "rh7Zj3l0", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"hasChallengeTimer\"]]],null,7],[\"text\",\"\\n\"],[\"block\",[\"unless\"],[[\"get\",[\"hasChallengeTimer\"]]],null,5]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"append\",[\"helper\",[\"challenge-actions\"],null,[[\"skip\",\"validate\"],[\"skip\",\"validate\"]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"alert alert-danger\"],[\"static-attr\",\"role\",\"alert\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"unknown\",[\"errorMessage\"]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel__row timeout-jauge-wrapper\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"timeout-jauge\"],null,[[\"allotedTime\"],[[\"get\",[\"challenge\",\"timer\"]]]]],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"hasUserConfirmWarning\"]]],null,2]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"append\",[\"unknown\",[\"challenge-stay\"]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"challenge\",\"hasntInternetAllowed\"]]],null,4],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"challenge-statement\"],[[\"get\",[\"challenge\"]]],null],false],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel challenge-response\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel__row challenge-proposals\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"qrocm-proposal\"],null,[[\"blocks\",\"answersValue\",\"onInputChanged\"],[[\"get\",[\"challenge\",\"_proposalsAsBlocks\"]],[\"get\",[\"answers\",\"_valuesAsMap\"]],\"inputChanged\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"challenge\",\"timer\"]]],null,3],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"errorMessage\"]]],null,1],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"assessment\"]]],null,0]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"append\",[\"helper\",[\"warning-page\"],null,[[\"hasUserConfirmWarning\",\"time\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"setUserConfirmation\"],null],[\"get\",[\"challenge\",\"timer\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"unless\"],[[\"get\",[\"hasUserConfirmWarning\"]]],null,6]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/challenge-item-qrocm.hbs" } });
});
define("pix-live/templates/components/challenge-statement", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "vcWfpHmm", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel challenge-statement\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"challenge\",\"instruction\"]]],null,5],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"challenge\",\"illustrationUrl\"]]],null,4],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"challenge\",\"hasAttachment\"]]],null,3],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"challenge-statement__file-option\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"class\",\"challenge-statement__file-option-label\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"class\",\"challenge-statement__file-option-input\"],[\"static-attr\",\"type\",\"radio\"],[\"dynamic-attr\",\"value\",[\"concat\",[[\"get\",[\"attachmentUrl\"]]]]],[\"static-attr\",\"name\",\"attachment_selector\"],[\"dynamic-attr\",\"onclick\",[\"helper\",[\"action\"],[[\"get\",[null]],\"selectAttachementUrl\",[\"get\",[\"attachmentUrl\"]]],null],null],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                fichier .\"],[\"append\",[\"helper\",[\"extract-extension\"],[[\"get\",[\"attachmentUrl\"]]],null],false],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"attachmentUrl\"]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"challenge-statement__text\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"challenge-statement__text-content\"],[\"flush-element\"],[\"text\",\"Choisissez le type de fichier que vous voulez utiliser\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"challenge-statement__help-icon\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"challenge-statement__help-tooltip\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"challenge-statement__help-text\"],[\"flush-element\"],[\"text\",\"Pix vous laisse le choix du format de fichier à télécharger. Si vous ne savez pas quelle option retenir, conservez le choix par défaut. Il correspond au format de fichier pris en charge par le plus grand nombre de logiciels.\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"challenge-statement__file-options\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"challenge\",\"attachments\"]]],null,0],[\"text\",\"        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"challenge-statement__action\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"challenge-statement__action-link\"],[\"dynamic-attr\",\"href\",[\"concat\",[[\"unknown\",[\"selectedAttachmentUrl\"]]]]],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"challenge-statement__action-label\"],[\"flush-element\"],[\"text\",\"Télécharger\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"challenge-statement__action\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"challenge-statement__action-link\"],[\"dynamic-attr\",\"href\",[\"concat\",[[\"unknown\",[\"challenge\",\"attachments\",\"firstObject\"]]]]],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"challenge-statement__action-label\"],[\"flush-element\"],[\"text\",\"Télécharger\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel__row challenge-statement__attachments-section\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"challenge\",\"hasSingleAttachment\"]]],null,2],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"challenge\",\"hasMultipleAttachments\"]]],null,1],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel__row challenge-statement__illustration-section\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"challenge-statement__illustration\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"challenge\",\"illustrationUrl\"]]]]],[\"static-attr\",\"alt\",\"Illustration de l'épreuve\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel__row challenge-statement__instruction-section\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"markdown-to-html\"],null,[[\"class\",\"extensions\",\"markdown\"],[\"challenge-statement__instruction\",\"targetBlank\",[\"get\",[\"challenge\",\"instruction\"]]]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/challenge-statement.hbs" } });
});
define("pix-live/templates/components/challenge-stay", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "oY6w6udg", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"challenge-stay\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"challenge-stay__container\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"challenge-stay__icon\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"width\",\"24\"],[\"static-attr\",\"height\",\"24\"],[\"static-attr\",\"viewBox\",\"0 0 24 24\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M13,10V6H11V10H13M13,14V12H11V14H13Z\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"challenge-stay__text\"],[\"flush-element\"],[\"text\",\"Vous devez répondre à cette question sans sortir de cette page !\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/challenge-stay.hbs" } });
});
define("pix-live/templates/components/comparison-window", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "0I1Yoeyv", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"comparison-window\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"routable-modal--dialog comparison-window--dialog\"],[\"flush-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"routable-modal--content comparison-window--content\"],[\"flush-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"routable-modal--header comparison-window--header\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"routable-modal-close-button\"],null,[[\"class\"],[\"routable-modal--close-button\"]],10],[\"text\",\"        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results-result-index\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"unknown\",[\"index\"]],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results-result-light-line\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results-result-titre\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"answer\",\"isResultOk\"]]],null,9,8],[\"text\",\"        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"routable-modal--body comparison-window--body\"],[\"flush-element\"],[\"text\",\"\\n\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel comparison-window__instruction\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel__row \"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"append\",[\"helper\",[\"markdown-to-html\"],null,[[\"class\",\"extensions\",\"markdown\"],[\"challenge-statement__instruction\",\"targetBlank\",[\"get\",[\"challenge\",\"instruction\"]]]]],false],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"challenge\",\"illustrationUrl\"]]],null,1],[\"text\",\"        \"],[\"close-element\"],[\"text\",\"\\n\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel comparison-window__proposals\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel__row \"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"labeledCheckboxes\"]]],null,0],[\"text\",\"          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"routable-modal--footer comparison-window--footer\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"feedback-panel\"],[[\"get\",[\"answer\"]]],null],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"challenge-response__proposal\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"class\",\"challenge-response__proposal-label\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"text\",\"                \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"class\",\"comparison-window-boolean\"],[\"static-attr\",\"type\",\"checkbox\"],[\"static-attr\",\"disabled\",\"disabled\"],[\"dynamic-attr\",\"name\",[\"concat\",[[\"helper\",[\"inc\"],[[\"get\",[\"index\"]]],null]]]],[\"dynamic-attr\",\"checked\",[\"unknown\",[\"labeledCheckbox\",\"1\"]],null],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"text\",\"                \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"comparison-window-oracle\"],[\"dynamic-attr\",\"data-goodness\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"get\"],[[\"get\",[\"solutionArray\"]],[\"helper\",[\"concat\"],[[\"get\",[\"index\"]]],null]],null],\"good\",\"bad\"],null]]]],[\"dynamic-attr\",\"data-checked\",[\"helper\",[\"if\"],[[\"get\",[\"labeledCheckbox\",\"1\"]],\"yes\",\"no\"],null],null],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"append\",[\"unknown\",[\"labeledCheckbox\",\"0\"]],false],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"labeledCheckbox\",\"index\"]},{\"statements\":[[\"text\",\"         \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel__row challenge-statement__illustration-section\"],[\"flush-element\"],[\"text\",\"\\n           \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"challenge-statement__illustration\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"challenge\",\"illustrationUrl\"]]]]],[\"static-attr\",\"alt\",\"Illustration de l'épreuve\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n         \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"data-toggle\",\"tooltip\"],[\"static-attr\",\"data-placement\",\"top\"],[\"static-attr\",\"data-lines\",\"2\"],[\"static-attr\",\"title\",\"Correction automatique en cours de développement ;)\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"width\",\"24\"],[\"static-attr\",\"height\",\"24\"],[\"static-attr\",\"viewBox\",\"0 -2 24 24\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z\"],[\"static-attr\",\"fill\",\"#446eff\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n          \"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"data-toggle\",\"tooltip\"],[\"static-attr\",\"data-placement\",\"top\"],[\"static-attr\",\"title\",\"Temps dépassé\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"width\",\"24\"],[\"static-attr\",\"height\",\"24\"],[\"static-attr\",\"viewBox\",\"0 -2 24 24\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M11,17A1,1 0 0,0 12,18A1,1 0 0,0 13,17A1,1 0 0,0 12,16A1,1 0 0,0 11,17M11,3V7H13V5.08C16.39,5.57 19,8.47 19,12A7,7 0 0,1 12,19A7,7 0 0,1 5,12C5,10.32 5.59,8.78 6.58,7.58L12,13L13.41,11.59L6.61,4.79V4.81C4.42,6.45 3,9.05 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M18,12A1,1 0 0,0 17,11A1,1 0 0,0 16,12A1,1 0 0,0 17,13A1,1 0 0,0 18,12M6,12A1,1 0 0,0 7,13A1,1 0 0,0 8,12A1,1 0 0,0 7,11A1,1 0 0,0 6,12Z\"],[\"static-attr\",\"fill\",\"red\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results-result-text\"],[\"flush-element\"],[\"text\",\"Vous avez dépassé le temps imparti\"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"answer\",\"isResultTimedOut\"]]],null,3,2]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"data-toggle\",\"tooltip\"],[\"static-attr\",\"data-placement\",\"top\"],[\"static-attr\",\"title\",\"Sans réponse\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"width\",\"24\"],[\"static-attr\",\"height\",\"24\"],[\"static-attr\",\"viewBox\",\"0 -2 24 24\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M8,8L13,12L8,16M14,8H16V16H14\"],[\"static-attr\",\"fill\",\"#3e4149\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results-result-text\"],[\"flush-element\"],[\"text\",\"Vous n'avez pas donné de réponse\"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"answer\",\"isResultWithoutAnswer\"]]],null,5,4]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"data-toggle\",\"tooltip\"],[\"static-attr\",\"data-placement\",\"top\"],[\"static-attr\",\"title\",\"Réponse incorrecte\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"width\",\"24px\"],[\"static-attr\",\"height\",\"24px\"],[\"static-attr\",\"viewBox\",\"0 -2 24 24\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z\"],[\"static-attr\",\"fill\",\"#ff4600\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results-result-text\"],[\"flush-element\"],[\"text\",\"Vous n'avez pas la bonne réponse\"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"answer\",\"isResultNotOk\"]]],null,7,6]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"data-toggle\",\"tooltip\"],[\"static-attr\",\"data-placement\",\"top\"],[\"static-attr\",\"title\",\"Réponse correcte\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"width\",\"24\"],[\"static-attr\",\"height\",\"24\"],[\"static-attr\",\"viewBox\",\"0 -2 24 24\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z\"],[\"static-attr\",\"fill\",\"#30d5b0\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results-result-text\"],[\"flush-element\"],[\"text\",\"Vous avez la bonne réponse !\"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"close-button-container\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"fermer \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"width\",\"24\"],[\"static-attr\",\"height\",\"24\"],[\"static-attr\",\"viewBox\",\"0 0 24 27\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z\"],[\"static-attr\",\"fill\",\"white\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/comparison-window.hbs" } });
});
define("pix-live/templates/components/corner-ribbon", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "iPqZz3Yr", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"corner-ribbon-wrapper\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"corner-ribbon\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ribbon\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"https://github.com/sgmap/pix\"],[\"flush-element\"],[\"text\",\"BÊTA\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/corner-ribbon.hbs" } });
});
define("pix-live/templates/components/course-banner", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "vBdH8oCf", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"course-banner\"],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container course-banner-wrapper\"],[\"flush-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"course-banner-name\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"course\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"withHomeLink\"]]],null,1],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Retour à la liste des tests\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"block\",[\"link-to\"],[\"index\"],[[\"class\"],[\"course-banner-home-link\"]],0],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/course-banner.hbs" } });
});
define("pix-live/templates/components/feedback-panel", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "lzXD5PBH", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"feedback-panel\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isFormClosed\"]]],null,4,3],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"feedback-panel__view feedback-panel__view--mercix\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Votre commentaire a bien été transmis à l’équipe du projet PIX.\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Mercix !\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"alert alert-danger\"],[\"static-attr\",\"role\",\"alert\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"append\",[\"unknown\",[\"error\"]],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"feedback-panel__view feedback-panel__view--form\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"feedback-panel__form-title\"],[\"flush-element\"],[\"text\",\"Signaler un problème\"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"feedback-panel__form-description\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"PIX est à l’écoute de vos remarques pour améliorer les épreuves proposées #personnenestparfait.\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Vous pouvez nous laisser votre adresse mail si vous le souhaitez. Vos coordonnées ne feront l’objet d’aucune transmission à des tiers.\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"feedback-panel__form-wrapper\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"form\",[]],[\"static-attr\",\"class\",\"feedback-panel__form\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"feedback-panel__group\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"append\",[\"helper\",[\"input\"],null,[[\"class\",\"type\",\"value\",\"placeholder\"],[\"feedback-panel__field feedback-panel__field--email\",\"text\",[\"get\",[\"email\"]],\"Votre email (optionnel)\"]]],false],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"feedback-panel__group\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"append\",[\"helper\",[\"textarea\"],null,[[\"class\",\"value\",\"placeholder\",\"rows\"],[\"feedback-panel__field feedback-panel__field--content\",[\"get\",[\"content\"]],\"Votre message\",6]]],false],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"error\"]]],null,1],[\"text\",\"          \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"feedback-panel__button feedback-panel__button--send\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"sendFeedback\"]],[\"flush-element\"],[\"text\",\"Envoyer\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"feedback-panel__button feedback-panel__button--cancel\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"cancelFeedback\"]],[\"flush-element\"],[\"text\",\"Annuler\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"isFormOpened\"]]],null,2,0]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"feedback-panel__view feedback-panel__view--link\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"feedback-panel__open-link\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"openFeedbackForm\"]],[\"flush-element\"],[\"text\",\"Signaler un problème\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/feedback-panel.hbs" } });
});
define("pix-live/templates/components/first-page", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "DY7mQxYb", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page\"],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-hero\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-hero__box\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-hero__box-item\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-hero__main-value-prop\"],[\"flush-element\"],[\"text\",\"\\n          Développez vos compétences numériques\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-hero__sub-value-prop\"],[\"flush-element\"],[\"text\",\"\\n          PIX est un projet public de plateforme en ligne d’évaluation et de certification des compétences numériques, en cours de développement.\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-challenges\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-challenges__empty\"],[\"flush-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-challenges__title\"],[\"flush-element\"],[\"text\",\"\\n      Découvrez nos épreuves et aidez-nous à les améliorer !\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-challenges__cards container\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"row courses\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,2],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"append\",[\"unknown\",[\"modal-mobile\"]],false],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-email\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-email-content\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-email__title\"],[\"flush-element\"],[\"text\",\"\\n        Vous souhaitez devenir beta-testeur ou être informé(e) du développement de Pix ?\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-email__input-container\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"unknown\",[\"load-email\"]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-features\"],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature__icon-container\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/icon-cafe.svg\"]]],[\"static-attr\",\"class\",\"first-page-feature__icon\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature__title\"],[\"flush-element\"],[\"text\",\"Vivez l’expérience PIX\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature__text\"],[\"flush-element\"],[\"text\",\" Un parcours d’évaluation convivial, accessible et interactif.\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature__icon-container\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/icon-monde.svg\"]]],[\"static-attr\",\"class\",\"first-page-feature__icon\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature__title\"],[\"flush-element\"],[\"text\",\"PIX est pour tout le monde \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature__text\"],[\"flush-element\"],[\"text\",\" Collégiens, lycéens, étudiants, professionnels, citoyens…\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature__icon-container\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/icon-reference.svg\"]]],[\"static-attr\",\"class\",\"first-page-feature__icon\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature__title\"],[\"flush-element\"],[\"text\",\"PIX est la référence\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature__text\"],[\"flush-element\"],[\"text\",\" La certification nationale de la culture numérique made in France au standard européen.\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature__icon-container\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/icon-evolutif.svg\"]]],[\"static-attr\",\"class\",\"first-page-feature__icon\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature__title\"],[\"flush-element\"],[\"text\",\"PIX est évolutif\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature__text\"],[\"flush-element\"],[\"text\",\" Le référentiel de compétences s’adapte en permanence aux évolutions du monde numérique.\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature__icon-container\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/icon-gratuit.svg\"]]],[\"static-attr\",\"class\",\"first-page-feature__icon\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature__title\"],[\"flush-element\"],[\"text\",\"PIX est gratuit\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-feature__text\"],[\"flush-element\"],[\"text\",\" Entraînez-vous et progressez gratuitement à votre rythme avant d’être certifié.\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"first-page-about\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"\"],[\"dynamic-attr\",\"href\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"/projet\"]]],[\"flush-element\"],[\"text\",\"En savoir plus sur le projet\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"app-footer\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"course-picture\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/course-default-image.png\"]]],[\"static-attr\",\"alt\",\"Illustration du test\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"course-picture\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"course\",\"imageUrl\"]]]]],[\"static-attr\",\"alt\",\"Illustration du test\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"col-md-3 course-item animated fadeIn\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel course\"],[\"dynamic-attr\",\"data-id\",[\"concat\",[[\"unknown\",[\"course\",\"id\"]]]]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"course\",\"imageUrl\"]]],null,1,0],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"course-content\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"course-name\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"append\",[\"unknown\",[\"course\",\"name\"]],false],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"course-description\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"append\",[\"unknown\",[\"course\",\"description\"]],false],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"course-number-of-challenges\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"append\",[\"unknown\",[\"course\",\"challenges\",\"length\"]],false],[\"text\",\" épreuves\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"course-actions\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"text\",\"              \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"button start-button\"],[\"static-attr\",\"style\",\"cursor: pointer;\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"startTest\",\"courses.create-assessment\",[\"get\",[\"course\",\"id\"]]]],[\"flush-element\"],[\"text\",\"Démarrer le test\"],[\"close-element\"],[\"text\",\"\\n\\n            \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"course\"]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/first-page.hbs" } });
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
  exports["default"] = Ember.HTMLBars.template({ "id": "xN7iUrFv", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results\"],[\"static-attr\",\"id\",\"assessment-results\"],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"append\",[\"helper\",[\"course-banner\"],null,[[\"course\"],[[\"get\",[\"assessment\",\"course\"]]]]],false],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results-title\"],[\"flush-element\"],[\"text\",\"\\n      Vos résultats\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results-list\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"assessment\",\"answers\"]]],null,12],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results-link\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"index\"],[[\"class\",\"tagName\"],[\"assessment-results-link-home\",\"button\"]],0],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"assessment-results-back\"],[\"flush-element\"],[\"text\",\"Revenir à la liste des tests\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"assessment-results-result-correction-button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"route-action\"],[\"openComparison\",[\"get\",[\"assessment\",\"id\"]],[\"get\",[\"answer\",\"id\"]],[\"helper\",[\"add\"],[[\"get\",[\"index\"]],1],null]],null]]],[\"flush-element\"],[\"text\",\" RÉPONSE \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"       \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"data-toggle\",\"tooltip\"],[\"static-attr\",\"data-placement\",\"top\"],[\"static-attr\",\"data-lines\",\"2\"],[\"static-attr\",\"title\",\"Correction automatique en cours de développement ;)\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"width\",\"24\"],[\"static-attr\",\"height\",\"24\"],[\"static-attr\",\"viewBox\",\"0 0 24 24\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z\"],[\"static-attr\",\"fill\",\"#446eff\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"data-toggle\",\"tooltip\"],[\"static-attr\",\"data-placement\",\"top\"],[\"static-attr\",\"title\",\"Temps dépassé\"],[\"flush-element\"],[\"text\",\"\\n         \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"width\",\"24\"],[\"static-attr\",\"height\",\"24\"],[\"static-attr\",\"viewBox\",\"0 0 24 24\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M11,17A1,1 0 0,0 12,18A1,1 0 0,0 13,17A1,1 0 0,0 12,16A1,1 0 0,0 11,17M11,3V7H13V5.08C16.39,5.57 19,8.47 19,12A7,7 0 0,1 12,19A7,7 0 0,1 5,12C5,10.32 5.59,8.78 6.58,7.58L12,13L13.41,11.59L6.61,4.79V4.81C4.42,6.45 3,9.05 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M18,12A1,1 0 0,0 17,11A1,1 0 0,0 16,12A1,1 0 0,0 17,13A1,1 0 0,0 18,12M6,12A1,1 0 0,0 7,13A1,1 0 0,0 8,12A1,1 0 0,0 7,11A1,1 0 0,0 6,12Z\"],[\"static-attr\",\"fill\",\"red\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n       \"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"answer\",\"isResultTimedOut\"]]],null,3,2]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"data-toggle\",\"tooltip\"],[\"static-attr\",\"data-placement\",\"top\"],[\"static-attr\",\"title\",\"Réponse partielle\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"width\",\"22\"],[\"static-attr\",\"height\",\"22\"],[\"static-attr\",\"viewBox\",\"0 0 24 25\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"flush-element\"],[\"open-element\",\"defs\",[]],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M941,28.7873535 C944.182598,28.7873535 947.234845,30.0516356 949.485281,32.3020721 C951.735718,34.5525087 953,37.6047556 953,40.7873535 C953,47.4147705 947.627417,52.7873535 941,52.7873535 C937.817402,52.7873535 934.765155,51.5230714 932.514719,49.2726349 C930.264282,47.0221983 929,43.9699514 929,40.7873535 C929,37.6047556 930.264282,34.5525087 932.514719,32.3020721 C934.765155,30.0516356 937.817402,28.7873535 941,28.7873535 L941,28.7873535 Z\"],[\"static-attr\",\"id\",\"path-1\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"mask\",[]],[\"static-attr\",\"id\",\"mask-2\"],[\"static-attr\",\"maskContentUnits\",\"userSpaceOnUse\"],[\"static-attr\",\"maskUnits\",\"objectBoundingBox\"],[\"static-attr\",\"x\",\"0\"],[\"static-attr\",\"y\",\"0\"],[\"static-attr\",\"width\",\"24\"],[\"static-attr\",\"height\",\"24\"],[\"static-attr\",\"fill\",\"white\"],[\"flush-element\"],[\"open-element\",\"use\",[]],[\"static-attr\",\"xlink:href\",\"#path-1\",\"http://www.w3.org/1999/xlink\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"Résultats\"],[\"static-attr\",\"stroke\",\"none\"],[\"static-attr\",\"stroke-width\",\"1\"],[\"static-attr\",\"fill\",\"none\"],[\"static-attr\",\"fill-rule\",\"evenodd\"],[\"flush-element\"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"test-fin-1\"],[\"static-attr\",\"transform\",\"translate(-1155.000000, -532.000000)\"],[\"static-attr\",\"stroke\",\"#FFBE00\"],[\"static-attr\",\"stroke-width\",\"14\"],[\"flush-element\"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"Group3\"],[\"static-attr\",\"transform\",\"translate(226.000000, 504.000000)\"],[\"flush-element\"],[\"open-element\",\"use\",[]],[\"static-attr\",\"id\",\"Shape-Copy-3\"],[\"static-attr\",\"mask\",\"url(#mask-2)\"],[\"static-attr\",\"xlink:href\",\"#path-1\",\"http://www.w3.org/1999/xlink\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"answer\",\"isResultPartiallyOk\"]]],null,5,4]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"data-toggle\",\"tooltip\"],[\"static-attr\",\"data-placement\",\"top\"],[\"static-attr\",\"title\",\"Sans réponse\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"width\",\"24\"],[\"static-attr\",\"height\",\"24\"],[\"static-attr\",\"viewBox\",\"0 0 24 24\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M8,8L13,12L8,16M14,8H16V16H14\"],[\"static-attr\",\"fill\",\"#3e4149\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"answer\",\"isResultWithoutAnswer\"]]],null,7,6]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"data-toggle\",\"tooltip\"],[\"static-attr\",\"data-placement\",\"top\"],[\"static-attr\",\"title\",\"Réponse incorrecte\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"width\",\"24px\"],[\"static-attr\",\"height\",\"24px\"],[\"static-attr\",\"viewBox\",\"0 0 24 24\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z\"],[\"static-attr\",\"fill\",\"#ff4600\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"answer\",\"isResultNotOk\"]]],null,9,8]],\"locals\":[]},{\"statements\":[[\"text\",\"         \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"data-toggle\",\"tooltip\"],[\"static-attr\",\"data-placement\",\"top\"],[\"static-attr\",\"title\",\"Réponse correcte\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"width\",\"24\"],[\"static-attr\",\"height\",\"24\"],[\"static-attr\",\"viewBox\",\"0 0 24 24\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z\"],[\"static-attr\",\"fill\",\"#30d5b0\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results-list-item assessment-results-result\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results-result-index\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"add\"],[[\"get\",[\"index\"]],1],null],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results-result-line\"],[\"flush-element\"],[\"text\",\"\\n\\n        \"],[\"close-element\"],[\"text\",\"\\n\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results-result-img\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"answer\",\"isResultOk\"]]],null,11,10],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results-result-instruction\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"strip-instruction\"],[[\"helper\",[\"convert-to-html\"],[[\"get\",[\"answer\",\"challenge\",\"instruction\"]]],null]],null],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"js-correct-answer assessment-results-result-correction\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"answer\",\"challenge\",\"type\"]],\"QCM\"],null]],null,1],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"answer\",\"index\"]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/get-result.hbs" } });
});
define("pix-live/templates/components/identification-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "qi9YIM7H", "block": "{\"statements\":[[\"open-element\",\"form\",[]],[\"static-attr\",\"id\",\"identification-form\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"identify\"],[[\"on\"],[\"submit\"]]],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"firstName\"],[\"flush-element\"],[\"text\",\"Prénom\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"input\"],null,[[\"id\",\"type\",\"value\",\"class\",\"autofocus\",\"autocomplete\"],[\"firstName\",\"text\",[\"get\",[\"user\",\"firstName\"]],\"form-control\",\"true\",\"fname\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"lastName\"],[\"flush-element\"],[\"text\",\"Nom\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"input\"],null,[[\"id\",\"type\",\"value\",\"class\",\"autocomplete\"],[\"lastName\",\"text\",[\"get\",[\"user\",\"lastName\"]],\"form-control\",\"lname\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"email\"],[\"flush-element\"],[\"text\",\"Adresse e-mail\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"input\"],null,[[\"id\",\"type\",\"value\",\"class\",\"autocomplete\"],[\"email\",\"email\",[\"get\",[\"user\",\"email\"]],\"form-control\",\"email\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"hasError\"]]],null,0],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"identification-form-actions pull-right\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"button button-primary\"],[\"static-attr\",\"type\",\"submit\"],[\"flush-element\"],[\"text\",\"Identifiez-vous\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"alert alert-danger\"],[\"static-attr\",\"role\",\"alert\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"unknown\",[\"errorMessage\"]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/identification-form.hbs" } });
});
define("pix-live/templates/components/load-email", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "7JN3o9Kk", "block": "{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"form\",[]],[\"static-attr\",\"class\",\"load-email__form\"],[\"static-attr\",\"id\",\"contact-form\"],[\"flush-element\"],[\"text\",\"\\n  \\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"load-email__form-item\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"class\",\"load-email-enter\"],[\"static-attr\",\"placeholder\",\"Saisissez votre email\"],[\"static-attr\",\"type\",\"email\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"load-email__form-item\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"load-email-button\"],[\"flush-element\"],[\"text\",\"Rejoindre la communauté\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/load-email.hbs" } });
});
define("pix-live/templates/components/modal-mobile", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "19EiGg0z", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-mobile\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal fade\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"static-attr\",\"role\",\"dialog\"],[\"static-attr\",\"id\",\"js-modal-mobile\"],[\"static-attr\",\"class\",\"js-modal-mobile\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-dialog\"],[\"static-attr\",\"role\",\"document\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-content\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-header\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"modal-title\"],[\"flush-element\"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"width\",\"50\"],[\"static-attr\",\"height\",\"50\"],[\"static-attr\",\"viewBox\",\"1 2 21 21\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M13,10V6H11V10H13M13,14V12H11V14H13Z\"],[\"static-attr\",\"fill\",\"#ffbe00\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-body\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Certaines épreuves PIX peuvent être difficiles à réussir sur mobile. Pour une meilleure expérience, nous vous conseillons de passer ce test sur un ordinateur.\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-footer\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-button-container\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"btn btn-primary modal-mobile__confirm-button\"],[\"static-attr\",\"data-confirm\",\"modal\"],[\"flush-element\"],[\"text\",\"Continuer\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-button-container\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"nohref\",\"\"],[\"static-attr\",\"data-dismiss\",\"modal\"],[\"static-attr\",\"class\",\"modal-mobile__dismiss-link\"],[\"flush-element\"],[\"text\",\"Revenir à l’accueil\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"comment\",\" /.modal-content \"],[\"text\",\"\\n    \"],[\"close-element\"],[\"comment\",\" /.modal-dialog \"],[\"text\",\"\\n  \"],[\"close-element\"],[\"comment\",\" /.modal \"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/modal-mobile.hbs" } });
});
define("pix-live/templates/components/progress-bar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "kPlukIXT", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"progress pix-progress-bar\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"progress-bar progress-bar-info\"],[\"static-attr\",\"role\",\"progressbar\"],[\"dynamic-attr\",\"aria-valuenow\",[\"concat\",[[\"unknown\",[\"progress\",\"currentStep\"]]]]],[\"static-attr\",\"aria-valuemin\",\"0\"],[\"static-attr\",\"aria-valuemax\",\"100\"],[\"dynamic-attr\",\"style\",[\"concat\",[\"width:\",[\"unknown\",[\"progress\",\"stepPercentage\"]],\"%\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"progress\",\"currentStep\"]],false],[\"text\",\" / \"],[\"append\",[\"unknown\",[\"progress\",\"maxStep\"]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/progress-bar.hbs" } });
});
define("pix-live/templates/components/qcm-proposals", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "4jIYyeTn", "block": "{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"labeledCheckboxes\"]]],null,0],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"challenge-response__proposal\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"class\",\"challenge-response__proposal-label\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"text\",\"        \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"class\",\"challenge-response__proposal-input\"],[\"static-attr\",\"type\",\"checkbox\"],[\"dynamic-attr\",\"name\",[\"concat\",[[\"helper\",[\"inc\"],[[\"get\",[\"index\"]]],null]]]],[\"dynamic-attr\",\"checked\",[\"unknown\",[\"labeledCheckbox\",\"1\"]],null],[\"dynamic-attr\",\"onclick\",[\"helper\",[\"action\"],[[\"get\",[null]],\"checkboxClicked\"],null],null],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"text\",\"        \"],[\"append\",[\"unknown\",[\"labeledCheckbox\",\"0\"]],false],[\"text\",\"\\n\\n      \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"labeledCheckbox\",\"index\"]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/qcm-proposals.hbs" } });
});
define("pix-live/templates/components/qcu-proposals", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "kEWCWerW", "block": "{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"labeledRadios\"]]],null,0],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"challenge-response__proposal\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"class\",\"challenge-response__proposal-label\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"text\",\"      \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"class\",\"challenge-response__proposal-input\"],[\"static-attr\",\"type\",\"radio\"],[\"dynamic-attr\",\"name\",[\"concat\",[[\"helper\",[\"inc\"],[[\"get\",[\"index\"]]],null]]]],[\"dynamic-attr\",\"checked\",[\"unknown\",[\"labeledRadio\",\"1\"]],null],[\"dynamic-attr\",\"onclick\",[\"helper\",[\"action\"],[[\"get\",[null]],\"radioClicked\",[\"get\",[\"index\"]]],null],null],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"text\",\"      \"],[\"append\",[\"unknown\",[\"labeledRadio\",\"0\"]],false],[\"text\",\"\\n\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"labeledRadio\",\"index\"]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/qcu-proposals.hbs" } });
});
define("pix-live/templates/components/qroc-proposal", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "podAFB6T", "block": "{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"blocks\"]]],null,3]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"hr\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"class\",\"challenge-response__proposal-input\"],[\"static-attr\",\"type\",\"text\"],[\"dynamic-attr\",\"name\",[\"unknown\",[\"block\",\"input\"]],null],[\"dynamic-attr\",\"placeholder\",[\"unknown\",[\"block\",\"placeholder\"]],null],[\"dynamic-attr\",\"value\",[\"concat\",[[\"unknown\",[\"answerValue\"]]]]],[\"static-attr\",\"data-uid\",\"qroc-proposal-uid\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"block\",\"text\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"block\",\"text\"]]],null,2],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"block\",\"input\"]]],null,1],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"block\",\"breakline\"]]],null,0],[\"text\",\"\\n\"]],\"locals\":[\"block\"]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/qroc-proposal.hbs" } });
});
define("pix-live/templates/components/qrocm-proposal", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "6zSSg6Bf", "block": "{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"blocks\"]]],null,3]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"hr\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"class\",\"challenge-response__proposal-input\"],[\"static-attr\",\"type\",\"text\"],[\"dynamic-attr\",\"name\",[\"unknown\",[\"block\",\"input\"]],null],[\"dynamic-attr\",\"placeholder\",[\"unknown\",[\"block\",\"placeholder\"]],null],[\"dynamic-attr\",\"value\",[\"helper\",[\"property-of\"],[[\"get\",[\"answersValue\"]],[\"get\",[\"block\",\"input\"]]],null],null],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"block\",\"text\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"block\",\"text\"]]],null,2],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"block\",\"input\"]]],null,1],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"block\",\"breakline\"]]],null,0],[\"text\",\"\\n\"]],\"locals\":[\"block\"]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/qrocm-proposal.hbs" } });
});
define("pix-live/templates/components/routable-modal-backdrop", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "AMknviEh", "block": "{\"statements\":[[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/routable-modal-backdrop.hbs" } });
});
define("pix-live/templates/components/routable-modal-close-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "E0HRpI+K", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"has-block\",\"default\"]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"×\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/routable-modal-close-button.hbs" } });
});
define("pix-live/templates/components/routable-modal-hold", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "zKeDUtjz", "block": "{\"statements\":[[\"append\",[\"helper\",[\"outlet\"],[\"routable-modal-outlet\"],null],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/routable-modal-hold.hbs" } });
});
define("pix-live/templates/components/routable-modal-outlet", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "IgLQm0V/", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"current\",\"routeName\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"append\",[\"unknown\",[\"routable-modal-hold\"]],false],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"routable-modal-backdrop\"]],false],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/routable-modal-outlet.hbs" } });
});
define("pix-live/templates/components/timeout-jauge", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "TuyA8rr4", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"timeout-jauge\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"timeout-jauge-container\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"timeout-jauge-clock\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"hasFinished\"]]],null,1,0],[\"text\",\"      \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"timeout-jauge-remaining\"],[\"dynamic-attr\",\"data-spent\",[\"concat\",[[\"unknown\",[\"remainingSeconds\"]]]]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"unknown\",[\"remainingTime\"]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"timeout-jauge-progress\"],[\"dynamic-attr\",\"style\",[\"concat\",[\"width:\",[\"unknown\",[\"percentageOfTimeout\"]],\"%\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"width\",\"24\"],[\"static-attr\",\"height\",\"24\"],[\"static-attr\",\"viewBox\",\"0 0 24 24\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M11,17A1,1 0 0,0 12,18A1,1 0 0,0 13,17A1,1 0 0,0 12,16A1,1 0 0,0 11,17M11,3V7H13V5.08C16.39,5.57 19,8.47 19,12A7,7 0 0,1 12,19A7,7 0 0,1 5,12C5,10.32 5.59,8.78 6.58,7.58L12,13L13.41,11.59L6.61,4.79V4.81C4.42,6.45 3,9.05 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M18,12A1,1 0 0,0 17,11A1,1 0 0,0 16,12A1,1 0 0,0 17,13A1,1 0 0,0 18,12M6,12A1,1 0 0,0 7,13A1,1 0 0,0 8,12A1,1 0 0,0 7,11A1,1 0 0,0 6,12Z\"],[\"static-attr\",\"fill\",\"black\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"width\",\"24\"],[\"static-attr\",\"height\",\"24\"],[\"static-attr\",\"viewBox\",\"0 0 24 24\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M11,17A1,1 0 0,0 12,18A1,1 0 0,0 13,17A1,1 0 0,0 12,16A1,1 0 0,0 11,17M11,3V7H13V5.08C16.39,5.57 19,8.47 19,12A7,7 0 0,1 12,19A7,7 0 0,1 5,12C5,10.32 5.59,8.78 6.58,7.58L12,13L13.41,11.59L6.61,4.79V4.81C4.42,6.45 3,9.05 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M18,12A1,1 0 0,0 17,11A1,1 0 0,0 16,12A1,1 0 0,0 17,13A1,1 0 0,0 18,12M6,12A1,1 0 0,0 7,13A1,1 0 0,0 8,12A1,1 0 0,0 7,11A1,1 0 0,0 6,12Z\"],[\"static-attr\",\"fill\",\"red\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/timeout-jauge.hbs" } });
});
define("pix-live/templates/components/user-menu", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "wuppAta7", "block": "{\"statements\":[[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"#\"]]],[\"static-attr\",\"class\",\"dropdown-toggle\"],[\"static-attr\",\"data-toggle\",\"dropdown\"],[\"static-attr\",\"role\",\"button\"],[\"static-attr\",\"aria-haspopup\",\"true\"],[\"static-attr\",\"aria-expanded\",\"false\"],[\"flush-element\"],[\"text\",\"John \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"caret\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"dropdown-menu\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"preferences\"]]],[\"flush-element\"],[\"text\",\"Préférences\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"role\",\"separator\"],[\"static-attr\",\"class\",\"divider\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[[\"unknown\",[\"rootURL\"]]]]],[\"flush-element\"],[\"text\",\"Déconnexion\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/user-menu.hbs" } });
});
define("pix-live/templates/components/warning-page", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "SWdY1pAE", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"challenge-item-warning\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"challenge-item-warning__instruction-primary\"],[\"flush-element\"],[\"text\",\"\\n    Attention,\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    vous disposerez de \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"challenge-item-warning__instruction-time\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"allocatedHumanTime\"]],false],[\"close-element\"],[\"text\",\" pour\\n    réussir l’épreuve.\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"challenge-item-warning__intruction-secondary\"],[\"flush-element\"],[\"text\",\"\\n    Vous pourrez continuer à répondre ensuite, mais l’épreuve ne sera pas considérée comme réussie.\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"challenge-item-warning__allocated-time\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"challenge__allocated-time__jauge\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"width\",\"25\"],[\"static-attr\",\"ght\",\"25\"],[\"static-attr\",\"viewBox\",\"0 0 21 21\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M11,17A1,1 0 0,0 12,18A1,1 0 0,0 13,17A1,1 0 0,0 12,16A1,1 0 0,0 11,17M11,3V7H13V5.08C16.39,5.57 19,8.47 19,12A7,7 0 0,1 12,19A7,7 0 0,1 5,12C5,10.32 5.59,8.78 6.58,7.58L12,13L13.41,11.59L6.61,4.79V4.81C4.42,6.45 3,9.05 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M18,12A1,1 0 0,0 17,11A1,1 0 0,0 16,12A1,1 0 0,0 17,13A1,1 0 0,0 18,12M6,12A1,1 0 0,0 7,13A1,1 0 0,0 8,12A1,1 0 0,0 7,11A1,1 0 0,0 6,12Z\"],[\"static-attr\",\"fill\",\"black\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"challenge__allocated-time__value\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"allocatedTime\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"challenge-item-warning__action\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"challenge-item-warning__confirm-btn\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"confirmWarning\"]],[\"flush-element\"],[\"text\",\"Commencer l'épreuve\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/warning-page.hbs" } });
});
define("pix-live/templates/courses/get-challenge-preview", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "8ckJ2KUM", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"challenge-preview\"],[\"dynamic-attr\",\"data-id\",[\"concat\",[[\"unknown\",[\"model\",\"challenge\",\"id\"]]]]],[\"static-attr\",\"class\",\"challenge-preview\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n\\n    \"],[\"append\",[\"helper\",[\"component\"],[[\"get\",[\"challengeItemType\"]]],[[\"challenge\",\"assessment\",\"onValidated\"],[[\"get\",[\"model\",\"challenge\"]],[\"get\",[\"model\",\"assessment\"]],[\"helper\",[\"action\"],[[\"get\",[null]],[\"get\",[\"navigate\"]]],null]]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/courses/get-challenge-preview.hbs" } });
});
define("pix-live/templates/courses/get-course-preview", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "bQ9fUjdV", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"course-preview\"],[\"dynamic-attr\",\"data-id\",[\"concat\",[[\"unknown\",[\"model\",\"course\",\"id\"]]]]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"title\"],[\"flush-element\"],[\"text\",\"\\n      Prévisualisation du test #\"],[\"append\",[\"unknown\",[\"model\",\"course\",\"id\"]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel course-information\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"course-name\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"course\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"course-description\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"course\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"hr\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"block\",[\"link-to\"],[\"courses.get-challenge-preview\",[\"get\",[\"model\",\"course\",\"id\"]],[\"get\",[\"model\",\"nextChallenge\",\"id\"]]],[[\"class\"],[\"pull-right button button-primary simulate-button\"]],0],[\"text\",\"\\n\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Simuler le test\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/courses/get-course-preview.hbs" } });
});
define("pix-live/templates/home-loading", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "S3WTexzT", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"home-loading\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"loader-container\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"loader\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"loader-inner ball-zig-zag\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ball-spinner\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ball-spinner\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/home-loading.hbs" } });
});
define("pix-live/templates/home", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "3w1p9U87", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"home\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"row courses\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,3],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"                Démarrer le test\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"              \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"course-picture\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/course-default-image.png\"]]],[\"static-attr\",\"alt\",\"Illustration du test\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"              \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"course-picture\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"course\",\"imageUrl\"]]]]],[\"static-attr\",\"alt\",\"Illustration du test\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"col-md-4 course-item animated fadeIn\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel course\"],[\"dynamic-attr\",\"data-id\",[\"concat\",[[\"unknown\",[\"course\",\"id\"]]]]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"course\",\"imageUrl\"]]],null,2,1],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"course-content\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"course-name\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"append\",[\"unknown\",[\"course\",\"name\"]],false],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"course-description\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"append\",[\"unknown\",[\"course\",\"description\"]],false],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"course-number-of-challenges\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"append\",[\"unknown\",[\"course\",\"challenges\",\"length\"]],false],[\"text\",\" épreuves\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"course-actions\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"courses.create-assessment\",[\"get\",[\"course\",\"id\"]]],[[\"class\"],[\"button button-primary start-button\"]],0],[\"text\",\"            \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"course\"]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/home.hbs" } });
});
define("pix-live/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "hq3HWyJV", "block": "{\"statements\":[[\"append\",[\"helper\",[\"first-page\"],null,[[\"showOnly\",\"model\"],[\"4\",[\"get\",[\"model\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/index.hbs" } });
});
define("pix-live/templates/placement-tests", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "9UmagCtV", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"home\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"row courses\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,3],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"                Démarrer le test\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"              \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"course-picture\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURM\"]],\"images/course-default-image.png\"]]],[\"static-attr\",\"alt\",\"Illustration du test\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"              \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"course-picture\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"course\",\"imageUrl\"]]]]],[\"static-attr\",\"alt\",\"Illustration du test\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"col-md-4 course-item animated fadeIn\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel course\"],[\"dynamic-attr\",\"data-id\",[\"concat\",[[\"unknown\",[\"course\",\"id\"]]]]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"course\",\"imageUrl\"]]],null,2,1],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"course-content\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"course-name\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"course\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"course-description\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"append\",[\"unknown\",[\"course\",\"description\"]],false],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"course-actions\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"courses.create-assessment\",[\"get\",[\"course\",\"id\"]]],[[\"class\"],[\"button button-primary start-button\"]],0],[\"text\",\"            \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"course\"]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/placement-tests.hbs" } });
});
define("pix-live/templates/project", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "jbvezoFu", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"project-page\"],[\"static-attr\",\"class\",\"project-page\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"project-page__panel project-page__header\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h1\",[]],[\"static-attr\",\"class\",\"project-page__header-text\"],[\"flush-element\"],[\"text\",\"PIX est un projet public de plateforme en ligne d’évaluation et de certification des compétences numériques, en cours de développement.\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel project-page__panel project-page__populations\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"project-page__populations-headline\"],[\"flush-element\"],[\"text\",\"Le service sera accessible gratuitement et ouvert à tous les francophones :\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"project-page__user-types\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"project-page__user-type\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"project-page__user-type-image\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/project/schoolers.png\"]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"project-page__user-type-name\"],[\"flush-element\"],[\"text\",\"Collégiens et lycéens\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"project-page__user-type\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"project-page__user-type-image\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/project/students.png\"]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"project-page__user-type-name\"],[\"flush-element\"],[\"text\",\"Étudiants\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"project-page__user-type\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"project-page__user-type-image\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/project/professionals.png\"]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"project-page__user-type-name\"],[\"flush-element\"],[\"text\",\"Professionnels de tous secteurs\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"project-page__user-type\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"project-page__user-type-image\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/project/citizens.png\"]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"project-page__user-type-name\"],[\"flush-element\"],[\"text\",\"Citoyens\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"project-page__populations-description\"],[\"flush-element\"],[\"text\",\"Son objectif est d’accompagner l’élévation du niveau général de connaissances et de compétences numériques et ainsi de préparer la transformation digitale de l’ensemble de notre société et de notre économie.\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel project-page__panel project-page__value project-page__value--measure\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"project-page__value-header\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"project-page__value-header-image\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/project/measure.png\"]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"project-page__value-header-name\"],[\"flush-element\"],[\"text\",\"Mesurer ses compétences numériques\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"hr\",[]],[\"static-attr\",\"class\",\"project-page__value-header-line\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"project-page__value-body\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"PIX permettra d’obtenir un profil de compétences associé à un score global sur 1024 pix. En conformité avec le cadre de référence européen DIGCOMP, PIX évaluera les compétences numériques sur 8 niveaux et 5 grands domaines :\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Informations et données\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Communication et collaboration\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Création de contenu\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Protection et sécurité\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Environnement numérique\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Les épreuves évalueront les connaissances mais également les savoir-faire et la capacité à identifier les enjeux du numérique.\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Des modalités innovantes d’évaluation seront proposées, dépassant le cadre habituel des QCM et privilégiant la mesure in vivo de compétences à partir d’activités réalisées dans leur environnement numérique réel : interactions, manipulations de fichiers, résolutions de problèmes, productions créatives, évaluations par les pairs, etc.\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel project-page__panel project-page__value project-page__value--develop\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"project-page__value-header\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"project-page__value-header-image\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/project/develop.png\"]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"project-page__value-header-name\"],[\"flush-element\"],[\"text\",\"Développer ses compétences numériques\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"hr\",[]],[\"static-attr\",\"class\",\"project-page__value-header-line\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"project-page__value-body\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Les apports de PIX au développement des compétences de chacun sont triples :\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"1. PIX permettra d’apprendre en se testant. Une part importante des épreuves PIX sont conçues sous la forme de défis à relever au cours desquels on développe ses compétences.\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"2. En s’appuyant sur les résultats des épreuves, PIX offrira également des recommandations ciblées de formation.\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"3. Le service proposera enfin un accès dédié aux équipes pédagogiques (collège, lycée, enseignement supérieur) et aux responsables de formation continue. Ils pourront suivre l’évolution des compétences des publics qu’ils encadrent, et concevoir des stratégies de formation sur mesure.\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Pour témoigner des progrès de manière continue et stimulante, les utilisateurs disposeront d’un compte personnel sécurisé qui leur permettra de faire valoir leurs nouveaux acquis à leur rythme et tout au long de la vie.\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel project-page__panel project-page__value project-page__value--valorize\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"project-page__value-header\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"project-page__value-header-image\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/project/valorize.png\"]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"project-page__value-header-name\"],[\"flush-element\"],[\"text\",\"Valoriser ses compétences numériques\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"hr\",[]],[\"static-attr\",\"class\",\"project-page__value-header-line\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"project-page__value-body\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"PIX proposera, de manière optionnelle, un mode « certifiant », permettant d’obtenir une certification\\n        officielle fiable et reconnue par l’éducation nationale, l’enseignement supérieur et le monde professionnel.\"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Ce test complémentaire nécessitera, dans un premier temps, une passation en présentiel dans les centres\\n        agréés par PIX : collèges, lycées, établissements d’enseignement supérieur, structures partenaires.\"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Des solutions de passation du mode certifiant à distance seront étudiées par la suite, à destination des\\n        professionnels.\"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"PIX se substituera au Brevet informatique et internet (B2i) et à la Certification informatique et internet\\n        (C2i) progressivement à partir de la rentrée 2017–2018.\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"project-page__presentation\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"project-page__panel project-page__presentation-container\"],[\"flush-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"project-page__presentation-header\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"project-page__presentation-header-name\"],[\"flush-element\"],[\"text\",\"PIX, un service en ligne co-construit et évolutif\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"hr\",[]],[\"static-attr\",\"class\",\"project-page__presentation-header-line\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"project-page__presentation-body\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"PIX respectera l’exigence de neutralité du service public et sera compatible avec l’ensemble des environnements numériques : diversité des systèmes d’exploitation et des services en ligne, logiciels propriétaires comme logiciels libres, etc.\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"PIX est développé selon la méthodologie agile des « Startups d’État » dans le cadre d’un partenariat entre tous les acteurs du ministère de l’Éducation nationale, de l’Enseignement supérieur et la Recherche, le Conseil national éducation-économie et le secrétariat général à la modernisation de l’action publique.\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Le projet fait l’objet d’une démarche inédite de co-construction avec des acteurs du monde professionnel.\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Des panels de tests sont organisés en établissement scolaire, dans l’enseignement supérieur ou en entreprise toutes les deux semaines pour mettre à l’épreuve les nouvelles fonctionnalités au fur et à mesure de leur développement et pour calibrer les épreuves.\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"PIX fait appel à la multitude des utilisateurs. Toutes les personnes, établissements et entreprises qui le souhaitent ont la possibilité de rejoindre la communauté des bêta-testeurs à distance. Le référentiel de compétences et les épreuves sont pensés pour évoluer dans le temps à l’aune des retours des utilisateurs.\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Le code source de la plateforme PIX est libre.\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"append\",[\"unknown\",[\"app-footer\"]],false],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/project.hbs" } });
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
define('pix-live/tests/mirage/mirage/data/answers/ref-qru-answer.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/answers/ref-qru-answer.js', function () {
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
define('pix-live/tests/mirage/mirage/data/challenges/ref-qru-challenge.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/challenges/ref-qru-challenge.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/mirage/mirage/data/courses/adaptive-course.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/courses/adaptive-course.js', function () {
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
define('pix-live/tests/mirage/mirage/data/feedbacks/ref-feedback.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/feedbacks/ref-feedback.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/mirage/mirage/data/solutions/ref-solution.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/solutions/ref-solution.js', function () {
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
define('pix-live/tests/mirage/mirage/routes/get-assessment-solutions.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/routes/get-assessment-solutions.js', function () {
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
define('pix-live/tests/mirage/mirage/routes/get-next-challenge.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/routes/get-next-challenge.js', function () {
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
define('pix-live/tests/mirage/mirage/routes/post-feedbacks.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/routes/post-feedbacks.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/transforms/array', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Transform.extend({

    deserialize: function deserialize(serialized) {
      return serialized;
    },

    serialize: function serialize(deserialized) {
      return deserialized;
    }

  });
});
define('pix-live/utils/call-only-once', ['exports', 'pix-live/config/environment', 'pix-live/utils/lodash-custom'], function (exports, _pixLiveConfigEnvironment, _pixLiveUtilsLodashCustom) {
  exports['default'] = callOnlyOnce;

  function callOnlyOnce(targetFunction) {
    if (_pixLiveConfigEnvironment['default'].EmberENV.useDelay) {
      return _pixLiveUtilsLodashCustom['default'].throttle(targetFunction, 1000, { leading: true, trailing: false });
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
define("pix-live/utils/email-validator", ["exports"], function (exports) {
  exports["default"] = isValidate;

  function isValidate(email) {
    var pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return pattern.test(email.trim());
  }
});
define('pix-live/utils/get-challenge-type', ['exports', 'pix-live/utils/lodash-custom'], function (exports, _pixLiveUtilsLodashCustom) {
  exports['default'] = getChallengeType;

  function getChallengeType(challengeTypeFromAirtable) {
    var result = 'qcu'; // qcu by default, no error thrown
    var challengeType = challengeTypeFromAirtable.toUpperCase();

    if ((0, _pixLiveUtilsLodashCustom['default'])(challengeType).isAmongst(['QCUIMG', 'QCU', 'QRU'])) {
      result = 'qcu';
    } else if ((0, _pixLiveUtilsLodashCustom['default'])(challengeType).isAmongst(['QCMIMG', 'QCM'])) {
      result = 'qcm';
    } else if ((0, _pixLiveUtilsLodashCustom['default'])(challengeType).isAmongst(['QROC'])) {
      result = 'qroc';
    } else if ((0, _pixLiveUtilsLodashCustom['default'])(challengeType).isAmongst(['QROCM', 'QROCM-IND', 'QROCM-DEP'])) {
      result = 'qrocm';
    }

    return result;
  }
});
define('pix-live/utils/labeled-checkboxes', ['exports', 'pix-live/utils/lodash-custom'], function (exports, _pixLiveUtilsLodashCustom) {
  exports['default'] = labeledCheckboxes;

  /*
   * Example :
   * => Input :
   *     proposals :  ['is sky red ?' , 'is sun red ?' , 'is grass red ?' , 'is cloud red ?']
   * => Input :
   *     userAnswers :  [false, true]
   *
   * WARNING : only first(s) userAnswers are given,
   *           all others have implicitly the boolean value "false"
   *
   * => Output :
   *    [['is sky red ?', false],
   *     ['is sun red ?', true],
   *     ['is grass red ?', false],
   *     ['are clouds red ?' false]]
   */

  function labeledCheckboxes(proposals, userAnswers) {

    // accept that user didn't give any answer yet
    var definedUserAnswers = _pixLiveUtilsLodashCustom['default'].isNil(userAnswers) ? [] : userAnswers;

    // check pre-conditions
    if ((0, _pixLiveUtilsLodashCustom['default'])(proposals).isNotArrayOfString()) return [];
    if ((0, _pixLiveUtilsLodashCustom['default'])(proposals).isEmpty()) return [];
    if ((0, _pixLiveUtilsLodashCustom['default'])(definedUserAnswers).isNotArrayOfBoolean()) return [];
    if ((0, _pixLiveUtilsLodashCustom['default'])(definedUserAnswers).size() > (0, _pixLiveUtilsLodashCustom['default'])(proposals).size()) return [];

    var sizeDifference = (0, _pixLiveUtilsLodashCustom['default'])(proposals).size() - (0, _pixLiveUtilsLodashCustom['default'])(definedUserAnswers).size(); // 2
    var arrayOfFalse = _pixLiveUtilsLodashCustom['default'].times(sizeDifference, _pixLiveUtilsLodashCustom['default'].constant(false)); // [false, false]

    return _pixLiveUtilsLodashCustom['default'].chain(definedUserAnswers) // [false, true]
    .concat(arrayOfFalse) // [false, true, false, false]
    .zip(proposals) // [[false, 'prop 1'], [true, 'prop 2'], [false, 'prop 3'], [false, 'prop 4']]
    .map(_pixLiveUtilsLodashCustom['default'].reverse) // [['prop 1', false], ['prop 2', true], ['prop 3', false], ['prop 4', false]]
    .value();
  }
});
define('pix-live/utils/lodash-custom', ['exports'], function (exports) {
  /* global _ */

  _.mixin({

    // Simple alias for includes, last arg fromIndex excluded.
    // Therefore, no test on this function.
    /* istanbul ignore next */
    isAmongst: function isAmongst(element, collection) {
      return _.includes(collection, element);
    },
    forceString: function forceString(x) {
      if (_(x).isNonEmptyString()) {
        return x;
      } else {
        return '';
      }
    },
    // See http://stackoverflow.com/a/10834843
    /* istanbul ignore next */
    isStrictlyPositiveInteger: function isStrictlyPositiveInteger(str) {
      return (/^\+?[1-9]\d*$/.test(str)
      );
    },
    // Just an alias, ignore test
    /* istanbul ignore next */
    checkPoint: _.thru,
    isTrue: function isTrue(x) {
      return x === true;
    },
    removeFirstElement: function removeFirstElement(x) {
      return _.drop(x, 1);
    },
    isArrayOfString: function isArrayOfString(x) {
      return _.isArray(x) && _.every(x, _.isString);
    },
    isNotString: function isNotString(x) {
      return !_.isString(x);
    },
    isNotArrayOfString: function isNotArrayOfString(x) {
      return !_.isArrayOfString(x);
    },
    isNotArray: function isNotArray(x) {
      return !_.isArray(x);
    },
    isArrayOfBoolean: function isArrayOfBoolean(x) {
      return _.isArray(x) && _.every(x, _.isBoolean);
    },
    isNotArrayOfBoolean: function isNotArrayOfBoolean(x) {
      return !_.isArrayOfBoolean(x);
    },
    isTruthy: function isTruthy(x) {
      return x !== false // not the boolean false
       && x !== 0 // not the number 0
       && x !== undefined // not an undefined value
       && x !== null // not a null value
       && x !== '' // not an empty string
       && !_.isNaN(x) // not a NaN
       && !(_.isArray(x) && _.isEmpty(x)) // not an empty array
       && !(_.isObject(x) && _.isEmpty(x)); // not an empty object
    },
    // Not enough value to test a one line function, mainly an alias here.
    /* istanbul ignore next */
    isFalsy: function isFalsy(x) {
      return !_.isTruthy(x);
    },
    isNonEmptyString: function isNonEmptyString(x) {
      return _.isString(x) && !_.isEmpty(x);
    },
    hasSomeTruthyProps: function hasSomeTruthyProps(x) {
      if (!_.isObject(x)) return false;
      if (_.isEmpty(x)) return false;
      return _.some(x, function (value) {
        return _.isTruthy(value);
      });
    }
  }, { chain: false });

  exports['default'] = _;
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
  require("pix-live/app")["default"].create({"API_HOST":"/","name":"pix-live","version":"5.0.0+a0f0bfe3"});
}

/* jshint ignore:end */
//# sourceMappingURL=pix-live.map
