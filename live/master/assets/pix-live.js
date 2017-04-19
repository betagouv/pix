"use strict";



define('pix-live/adapters/application', ['exports', 'ember-data', 'pix-live/config/environment'], function (exports, _emberData, _pixLiveConfigEnvironment) {
  exports['default'] = _emberData['default'].JSONAPIAdapter.extend({

    namespace: 'api',
    host: _pixLiveConfigEnvironment['default'].APP.API_HOST

  });
});
define('pix-live/adapters/challenge', ['exports', 'pix-live/adapters/application', 'rsvp'], function (exports, _pixLiveAdaptersApplication, _rsvp) {
  exports['default'] = _pixLiveAdaptersApplication['default'].extend({

    queryNext: function queryNext(store, assessmentId) {
      return this.ajax(this.host + '/' + this.namespace + '/assessments/' + assessmentId + '/next', 'GET').then(function (payload) {
        var challenge = null;
        if (payload) {
          challenge = store.push(payload);
        }
        return _rsvp['default'].resolve(challenge);
      });
    }

  });
});
define('pix-live/adapters/solution', ['exports', 'pix-live/adapters/application', 'ember', 'rsvp'], function (exports, _pixLiveAdaptersApplication, _ember, _rsvp) {
  exports['default'] = _pixLiveAdaptersApplication['default'].extend({

    queryRecord: function queryRecord(modelName, clazz, query) {
      return _ember['default'].$.getJSON(this.host + '/' + this.namespace + '/assessments/' + query.assessmentId + '/solutions/' + query.answerId, function (data) {
        return _rsvp['default'].resolve(data);
      });
    },
    // refresh cache
    refreshRecord: function refreshRecord(modelName, clazz) {
      return _ember['default'].$.post(this.host + '/' + this.namespace + '/challenges/' + clazz.challengeId + '/solution', function (data) {
        return _rsvp['default'].resolve(data);
      });
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
  exports['default'] = _ember['default'].Component.extend({

    classNames: ['app-footer']

  });
});
define('pix-live/components/app-header', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'header'
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

    classNames: ['challenge-actions'],

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
define('pix-live/components/challenge-item-generic', ['exports', 'ember', 'pix-live/utils/call-only-once', 'pix-live/utils/lodash-custom', 'pix-live/config/environment'], function (exports, _ember, _pixLiveUtilsCallOnlyOnce, _pixLiveUtilsLodashCustom, _pixLiveConfigEnvironment) {

  var get = _ember['default'].get;

  var ChallengeItemGeneric = _ember['default'].Component.extend({
    tagName: 'article',
    classNames: ['challenge-item'],
    attributeBindings: ['challenge.id:data-challenge-id'],
    _elapsedTime: null,
    _timer: null,

    init: function init() {
      this._super.apply(this, arguments);
      if (!_pixLiveUtilsLodashCustom['default'].isInteger(this.get('challenge.timer'))) {
        this._start();
      }
    },

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

    _getElapsedTime: function _getElapsedTime() {
      return this.get('_elapsedTime');
    },

    _start: function _start() {
      this.set('_elapsedTime', 0);
      this._tick();
    },

    _tick: function _tick() {
      if (_pixLiveConfigEnvironment['default'].APP.isChallengeTimerEnable) {
        var timer = _ember['default'].run.later(this, function () {
          var elapsedTime = this.get('_elapsedTime');
          this.set('_elapsedTime', elapsedTime + 1);
          this.notifyPropertyChange('_elapsedTime');
          this._tick();
        }, 1000);

        this.set('_timer', timer);
      }
    },

    willDestroyElement: function willDestroyElement() {
      this._super.apply(this, arguments);
      var timer = this.get('_timer');
      _ember['default'].run.cancel(timer);
    },

    actions: {

      validate: (0, _pixLiveUtilsCallOnlyOnce['default'])(function () {
        if (this._hasError()) {
          this.set('errorMessage', this._getErrorMessage());
          return this.sendAction('onError', this.get('errorMessage'));
        }
        var answerValue = this._getAnswerValue();
        this.sendAction('onValidated', this.get('challenge'), this.get('assessment'), answerValue, this._getTimeout(), this._getElapsedTime());
      }),

      skip: (0, _pixLiveUtilsCallOnlyOnce['default'])(function () {
        this.set('errorMessage', null);
        this.sendAction('onValidated', this.get('challenge'), this.get('assessment'), '#ABAND#', this._getTimeout(), this._getElapsedTime());
      }),

      setUserConfirmation: (0, _pixLiveUtilsCallOnlyOnce['default'])(function () {
        this._start();
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
    // and moreover, it is a much more robust solution when you need to test it properly.
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

    classNames: ['rounded-panel', 'challenge-statement'],

    selectedAttachmentUrl: _ember['default'].computed('challenge.attachments', function () {
      return this.get('challenge.attachments.firstObject');
    }),

    attachmentsData: _ember['default'].computed('challenge.attachements', function () {
      return this.get('challenge.attachments');
    }),

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
  exports['default'] = _ember['default'].Component.extend({

    classNames: ['challenge-stay']

  });
});
define('pix-live/components/comparison-window', ['exports', 'ember'], function (exports, _ember) {

  var contentReference = {
    ok: {
      title: 'Vous avez la bonne réponse !',
      titleTooltip: 'Réponse correcte',
      path: 'M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z',
      color: '#30d5b0'
    },

    ko: {
      title: 'Vous n\'avez pas la bonne réponse',
      titleTooltip: 'Réponse incorrecte',
      path: 'M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z',
      color: '#ff4600'
    },

    aband: {
      title: 'Vous n\'avez pas donné de réponse',
      titleTooltip: 'Sans réponse',
      path: 'M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M8,8L13,12L8,16M14,8H16V16H14',
      color: '#3e4149'
    },

    partially: {
      title: 'Vous avez donné une réponse partielle',
      titleTooltip: 'Réponse partielle',
      path: 'M941,28.7873535 C944.182598,28.7873535 947.234845,30.0516356 949.485281,32.3020721 C951.735718,34.5525087 953,37.6047556 953,40.7873535 C953,47.4147705 947.627417,52.7873535 941,52.7873535 C937.817402,52.7873535 934.765155,51.5230714 932.514719,49.2726349 C930.264282,47.0221983 929,43.9699514 929,40.7873535 C929,37.6047556 930.264282,34.5525087 932.514719,32.3020721 C934.765155,30.0516356 937.817402,28.7873535 941,28.7873535 L941,28.7873535 Z',
      color: '#ffffff',
      custom: true
    },

    timedout: {
      title: 'Vous avez dépassé le temps imparti',
      titleTooltip: 'Temps dépassé',
      path: 'M11,17A1,1 0 0,0 12,18A1,1 0 0,0 13,17A1,1 0 0,0 12,16A1,1 0 0,0 11,17M11,3V7H13V5.08C16.39,5.57 19,8.47 19,12A7,7 0 0,1 12,19A7,7 0 0,1 5,12C5,10.32 5.59,8.78 6.58,7.58L12,13L13.41,11.59L6.61,4.79V4.81C4.42,6.45 3,9.05 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M18,12A1,1 0 0,0 17,11A1,1 0 0,0 16,12A1,1 0 0,0 17,13A1,1 0 0,0 18,12M6,12A1,1 0 0,0 7,13A1,1 0 0,0 8,12A1,1 0 0,0 7,11A1,1 0 0,0 6,12Z',
      color: '#ff0000'
    },

    'default': {
      title: '',
      titleTooltip: 'Correction automatique en cours de développement ;)',
      path: 'M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z',
      color: '#446eff'
    }
  };

  var ComparisonWindow = _ember['default'].Component.extend({

    classNames: ['comparison-window'],

    answer: null,
    challenge: null,
    solution: null,
    index: null,

    isAssessmentChallengeTypeQroc: _ember['default'].computed.equal('challenge.type', 'QROC'),
    isAssessmentChallengeTypeQcm: _ember['default'].computed.equal('challenge.type', 'QCM'),
    isAssessmentChallengeTypeQcu: _ember['default'].computed.equal('challenge.type', 'QCU'),
    isAssessmentChallengeTypeQrocm: _ember['default'].computed.equal('challenge.type', 'QROCM'),
    isAssessmentChallengeTypeQrocmInd: _ember['default'].computed.equal('challenge.type', 'QROCM-ind'),
    isAssessmentChallengeTypeQrocmDep: _ember['default'].computed.equal('challenge.type', 'QROCM-dep'),

    resultItem: _ember['default'].computed('answer.result', function () {
      var resultItem = contentReference['default'];
      var answerStatus = this.get('answer.result');

      if (answerStatus && answerStatus in contentReference) {
        resultItem = contentReference[answerStatus];
      }
      return resultItem;
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

    classNames: ['course-banner'],

    course: null,
    withHomeLink: false

  });
});
define('pix-live/components/course-item', ['exports', 'ember'], function (exports, _ember) {

  var CourseItem = _ember['default'].Component.extend({

    course: null,

    tagName: 'article',
    classNames: ['course-item', 'rounded-panel'],

    imageUrl: _ember['default'].computed('course', function () {
      var imageUrl = this.get('course.imageUrl');
      return imageUrl ? imageUrl : '/images/course-default-image.png';
    }),

    actions: {
      startCourse: function startCourse(course) {
        this.sendAction('startCourse', course);
      }
    }

  });

  exports['default'] = CourseItem;
});
define('pix-live/components/course-list', ['exports', 'ember', 'pix-live/config/environment'], function (exports, _ember, _pixLiveConfigEnvironment) {

  function _userNotAlreadyWarnedAboutMobileIncompleteSupport(that) {
    return that._isMobile() && !localStorage.getItem('pix-mobile-warning');
  }

  function _rememberThatUserIsNowAware() {
    localStorage.setItem('pix-mobile-warning', 'true');
  }

  function _storeCourseToDisplayAfterWarning(that, course) {
    that.set('selectedCourse', course);
  }

  function _displayWarningModal() {
    $('#js-modal-mobile').modal();
  }

  var CourseList = _ember['default'].Component.extend({

    courses: null,
    selectedCourse: null,

    classNames: ['course-list'],

    filteredCourses: _ember['default'].computed('courses.[]', function () {
      var courses = this.get('courses');
      var filteredCourses = [];

      if (courses) {
        var limit = this.get('limit');
        filteredCourses = courses.toArray();
        if (limit) {
          filteredCourses = courses.slice(0, limit);
        }
      }
      return filteredCourses;
    }),

    didInsertElement: function didInsertElement() {
      var that = this;
      _ember['default'].run.scheduleOnce('afterRender', this, function () {
        $('button[data-confirm]').click(function () {
          $('#js-modal-mobile').modal('hide');
          that.sendAction('startCourse', that.get('selectedCourse'));
        });
      });

      if (_pixLiveConfigEnvironment['default'].APP.isMobileSimulationEnabled) {
        this.$().on('simulateMobileScreen', function () {
          that.set('isSimulatedMobileScreen', 'true');
        });
      }
    },

    _isMobile: function _isMobile() {
      if (_pixLiveConfigEnvironment['default'].APP.isMobileSimulationEnabled) {
        return this.get('isSimulatedMobileScreen');
      }
      return $(window).width() < 767;
    },

    actions: {
      startCourse: function startCourse(course) {
        if (_userNotAlreadyWarnedAboutMobileIncompleteSupport(this)) {
          _rememberThatUserIsNowAware();
          _storeCourseToDisplayAfterWarning(this, course);
          _displayWarningModal();
        } else {
          this.sendAction('startCourse', course);
        }
      }
    }

  });

  exports['default'] = CourseList;
});
define('pix-live/components/cp-panel-body', ['exports', 'ember-collapsible-panel/components/cp-panel-body/component'], function (exports, _emberCollapsiblePanelComponentsCpPanelBodyComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCollapsiblePanelComponentsCpPanelBodyComponent['default'];
    }
  });
});
define('pix-live/components/cp-panel-toggle', ['exports', 'ember-collapsible-panel/components/cp-panel-toggle/component'], function (exports, _emberCollapsiblePanelComponentsCpPanelToggleComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCollapsiblePanelComponentsCpPanelToggleComponent['default'];
    }
  });
});
define('pix-live/components/cp-panel', ['exports', 'ember-collapsible-panel/components/cp-panel/component'], function (exports, _emberCollapsiblePanelComponentsCpPanelComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCollapsiblePanelComponentsCpPanelComponent['default'];
    }
  });
});
define('pix-live/components/cp-panels', ['exports', 'ember-collapsible-panel/components/cp-panels/component'], function (exports, _emberCollapsiblePanelComponentsCpPanelsComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCollapsiblePanelComponentsCpPanelsComponent['default'];
    }
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
define('pix-live/components/feature-item', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    tagName: 'article',
    classNames: ['feature-item']

  });
});
define('pix-live/components/feature-list', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    classNames: ['feature-list'],

    init: function init() {
      this._super.apply(this, arguments);
      this.features = [{
        icon: 'cafe',
        title: 'Vivez l’expérience PIX',
        description: 'Un parcours d’évaluation convivial, accessible et interactif.'
      }, {
        icon: 'monde',
        title: 'PIX est pour tout le monde',
        description: 'Collégiens, lycéens, étudiants, professionnels, citoyens…'
      }, {
        icon: 'reference',
        title: 'PIX est la référence',
        description: 'La certification nationale de la culture numérique made in France au standard européen.'
      }, {
        icon: 'evolutif',
        title: 'PIX est évolutif',
        description: 'Le référentiel de compétences s’adapte en permanence aux évolutions du monde numérique.'
      }, {
        icon: 'gratuit',
        title: 'PIX est gratuit',
        description: 'Entraînez-vous et progressez gratuitement à votre rythme avant d’être certifié.'
      }];
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
define('pix-live/components/follower-form', ['exports', 'ember', 'pix-live/config/environment', 'pix-live/utils/email-validator'], function (exports, _ember, _pixLiveConfigEnvironment, _pixLiveUtilsEmailValidator) {

  function hideMessageDiv(context) {
    _ember['default'].run.later(function () {
      context.set('status', 'empty');
      context.set('errorType', 'invalid');
    }, _pixLiveConfigEnvironment['default'].APP.MESSAGE_DISPLAY_DURATION);
  }

  function getErrorType(errors) {
    var statusCode = parseInt(errors[0].status);
    return statusCode === 409 ? 'exist' : 'invalid';
  }

  exports['default'] = _ember['default'].Component.extend({

    classNames: ['follower-form'],

    store: _ember['default'].inject.service(),
    errorType: 'invalid',
    status: 'empty', // empty | pending | success | error

    messages: {
      error: {
        invalid: 'Votre adresse n\'est pas valide',
        exist: 'L\'e-mail choisi est déjà utilisé'
      },
      success: 'Merci pour votre inscription'
    },

    hasError: _ember['default'].computed('status', function () {
      return this.get('status') === 'error';
    }),

    isPending: _ember['default'].computed('status', function () {
      return this.get('status') === 'pending';
    }),

    hasSuccess: _ember['default'].computed('status', function () {
      return this.get('status') === 'success';
    }),

    hasMessage: _ember['default'].computed('hasError', 'hasSuccess', function () {
      return this.get('hasError') || this.get('hasSuccess');
    }),

    messageClassName: _ember['default'].computed('status', function () {
      return this.get('status') === 'error' ? 'has-error' : 'has-success';
    }),

    infoMessage: _ember['default'].computed('hasError', function () {
      var currentErrorType = this.get('errorType');
      return this.get('hasError') ? this.get('messages.error')[currentErrorType] : this.get('messages.success');
    }),

    submitButtonText: _ember['default'].computed('status', function () {
      return this.get('status') === 'pending' ? 'envoi en cours' : 's\'inscrire';
    }),

    actions: {
      submit: function submit() {
        var _this = this;

        this.set('status', 'pending');
        var email = this.get('followerEmail') ? this.get('followerEmail').trim() : '';
        if (!(0, _pixLiveUtilsEmailValidator['default'])(email)) {
          this.set('status', 'error');
          hideMessageDiv(this);
          return;
        }

        var store = this.get('store');
        var follower = store.createRecord('follower', { email: email });
        follower.save().then(function () {
          _this.set('status', 'success');
          hideMessageDiv(_this);
          _this.set('followerEmail', null);
        })['catch'](function (_ref) {
          var errors = _ref.errors;

          _this.set('errorType', getErrorType(errors));
          _this.set('status', 'error');
          hideMessageDiv(_this);
        });
      }
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
define('pix-live/components/navbar-header', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    classNames: ['navbar-header']

  });
});
define('pix-live/components/pix-logo', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    classNames: ['pix-logo']

  });
});
define('pix-live/components/progress-bar', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['progress', 'pix-progress-bar'],

    barStyle: _ember['default'].computed('progress.stepPercentage', function () {
      return _ember['default'].String.htmlSafe('width: ' + this.get('progress.stepPercentage') + '%');
    })
  });
});
define('pix-live/components/qcm-proposals', ['exports', 'ember', 'pix-live/utils/labeled-checkboxes'], function (exports, _ember, _pixLiveUtilsLabeledCheckboxes) {
  exports['default'] = _ember['default'].Component.extend({

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
define('pix-live/components/qcm-solution-panel', ['exports', 'ember', 'pix-live/utils/labeled-checkboxes', 'pix-live/utils/value-as-array-of-boolean', 'pix-live/utils/proposals-as-array', 'pix-live/utils/lodash-custom'], function (exports, _ember, _pixLiveUtilsLabeledCheckboxes, _pixLiveUtilsValueAsArrayOfBoolean, _pixLiveUtilsProposalsAsArray, _pixLiveUtilsLodashCustom) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['qcm-solution-panel'],
    answer: null,
    solution: null,
    challenge: null,

    solutionArray: _ember['default'].computed('solution', function () {
      var solution = this.get('solution.value');
      return _pixLiveUtilsLodashCustom['default'].isNonEmptyString(solution) ? (0, _pixLiveUtilsValueAsArrayOfBoolean['default'])(solution) : [];
    }),

    labeledCheckboxes: _ember['default'].computed('answer', function () {
      var answer = this.get('answer.value');
      var checkboxes = [];
      if (_pixLiveUtilsLodashCustom['default'].isNonEmptyString(answer)) {
        var proposals = this.get('challenge.proposals');
        var proposalsArray = (0, _pixLiveUtilsProposalsAsArray['default'])(proposals);
        var answerArray = (0, _pixLiveUtilsValueAsArrayOfBoolean['default'])(answer);
        checkboxes = (0, _pixLiveUtilsLabeledCheckboxes['default'])(proposalsArray, answerArray);
      }
      return checkboxes;
    })
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
define('pix-live/components/qcu-solution-panel', ['exports', 'ember', 'pix-live/utils/labeled-checkboxes', 'pix-live/utils/value-as-array-of-boolean', 'pix-live/utils/proposals-as-array', 'pix-live/utils/lodash-custom'], function (exports, _ember, _pixLiveUtilsLabeledCheckboxes, _pixLiveUtilsValueAsArrayOfBoolean, _pixLiveUtilsProposalsAsArray, _pixLiveUtilsLodashCustom) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['qcu-solution-panel'],
    answer: null,
    solution: null,
    challenge: null,

    solutionArray: _ember['default'].computed('solution', function () {
      var solution = this.get('solution.value');
      return _pixLiveUtilsLodashCustom['default'].isNonEmptyString(solution) ? (0, _pixLiveUtilsValueAsArrayOfBoolean['default'])(solution) : [];
    }),

    labeledRadios: _ember['default'].computed('answer', function () {
      var answer = this.get('answer.value');
      var radiosArray = [];
      if (_pixLiveUtilsLodashCustom['default'].isNonEmptyString(answer)) {
        var proposals = this.get('challenge.proposals');
        var proposalsArray = (0, _pixLiveUtilsProposalsAsArray['default'])(proposals);
        var answerArray = (0, _pixLiveUtilsValueAsArrayOfBoolean['default'])(answer);
        radiosArray = (0, _pixLiveUtilsLabeledCheckboxes['default'])(proposalsArray, answerArray);
      }

      return radiosArray;
    })
  });
});
define('pix-live/components/qroc-proposal', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    classNames: ['qroc-proposal'],

    userAnswer: _ember['default'].computed('answerValue', function () {
      var answer = this.get('answerValue') || '';
      return answer.indexOf('#ABAND#') > -1 ? '' : answer;
    }),

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
define('pix-live/components/qroc-solution-panel', ['exports', 'ember'], function (exports, _ember) {

  var classByResultValue = {
    ok: 'correction-qroc-box__input-right-answer',
    ko: 'correction-qroc-box__input-wrong-answer',
    aband: 'correction-qroc-box__input-no-answer'
  };

  var QrocSolutionPanel = _ember['default'].Component.extend({

    answer: null,
    solution: null,

    inputClass: _ember['default'].computed('answer.result', function () {
      return classByResultValue[this.get('answer.result')] || '';
    }),

    isResultOk: _ember['default'].computed('answer', function () {
      return this.get('answer.result') === 'ok';
    }),

    answerToDisplay: _ember['default'].computed('answer', function () {
      var answer = this.get('answer.value');
      if (answer === '#ABAND#') {
        return 'Pas de réponse';
      }
      return answer;
    }),

    solutionToDisplay: _ember['default'].computed('solution.value', function () {
      var solutionVariants = this.get('solution.value');
      if (!solutionVariants) {
        return '';
      }
      return solutionVariants.split('\n')[0];
    })
  });

  QrocSolutionPanel.reopenClass({
    positionalParams: ['answer', 'solution']
  });

  exports['default'] = QrocSolutionPanel;
});
define('pix-live/components/qrocm-ind-solution-panel', ['exports', 'ember', 'lodash', 'pix-live/utils/answers-as-object', 'pix-live/utils/solution-as-object', 'pix-live/utils/labels-as-object', 'pix-live/utils/result-details-as-object'], function (exports, _ember, _lodash, _pixLiveUtilsAnswersAsObject, _pixLiveUtilsSolutionAsObject, _pixLiveUtilsLabelsAsObject, _pixLiveUtilsResultDetailsAsObject) {

  function _computeAnswerOutcome(inputFieldValue, resultDetail) {
    if (inputFieldValue === '') {
      return 'empty';
    }
    return resultDetail === true ? 'ok' : 'ko';
  }

  function _computeInputClass(answerOutcome) {
    if (answerOutcome === 'empty') {
      return 'correction-qroc-box__input-no-answer';
    }
    if (answerOutcome === 'ok') {
      return 'correction-qroc-box__input-right-answer';
    }
    return 'correction-qroc-box__input-wrong-answer';
  }

  var QrocmIndSolutionPanel = _ember['default'].Component.extend({

    inputFields: _ember['default'].computed('challenge.proposals', 'answer.value', 'solution.value', function () {

      var labels = (0, _pixLiveUtilsLabelsAsObject['default'])(this.get('challenge.proposals'));
      var answers = (0, _pixLiveUtilsAnswersAsObject['default'])(this.get('answer.value'), _lodash['default'].keys(labels));
      var solutions = (0, _pixLiveUtilsSolutionAsObject['default'])(this.get('solution.value'));
      var resultDetails = (0, _pixLiveUtilsResultDetailsAsObject['default'])(this.get('answer.resultDetails'));

      var inputFields = [];

      _lodash['default'].forEach(labels, function (label, labelKey) {
        var answerOutcome = _computeAnswerOutcome(answers[labelKey], resultDetails[labelKey]);
        var inputClass = _computeInputClass(answerOutcome);

        if (answers[labelKey] === '') {
          answers[labelKey] = 'Pas de réponse';
        }
        var inputField = {
          label: labels[labelKey],
          answer: answers[labelKey],
          solution: solutions[labelKey][0],
          emptyOrWrongAnswer: answerOutcome === 'empty' || answerOutcome === 'ko',
          inputClass: inputClass
        };
        inputFields.push(inputField);
      });

      return inputFields;
    })

  });

  exports['default'] = QrocmIndSolutionPanel;
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
define('pix-live/components/result-item', ['exports', 'ember'], function (exports, _ember) {

  var contentReference = {
    ok: {
      title: 'Réponse correcte',
      path: 'M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z',
      color: '#30d5b0',
      selector: 'svg-correct-answer'
    },

    ko: {
      title: 'Réponse incorrecte',
      path: 'M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z',
      color: '#ff4600',
      selector: 'svg-correct-answer'
    },

    aband: {
      title: 'Sans réponse',
      path: 'M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M8,8L13,12L8,16M14,8H16V16H14',
      color: '#3e4149',
      selector: 'svg-correct-answer'
    },

    partially: {
      title: 'Réponse partielle',
      path: 'M941,28.7873535 C944.182598,28.7873535 947.234845,30.0516356 949.485281,32.3020721 C951.735718,34.5525087 953,37.6047556 953,40.7873535 C953,47.4147705 947.627417,52.7873535 941,52.7873535 C937.817402,52.7873535 934.765155,51.5230714 932.514719,49.2726349 C930.264282,47.0221983 929,43.9699514 929,40.7873535 C929,37.6047556 930.264282,34.5525087 932.514719,32.3020721 C934.765155,30.0516356 937.817402,28.7873535 941,28.7873535 L941,28.7873535 Z',
      color: '#ffffff',
      custom: true,
      selector: 'svg-correct-answer'
    },

    timedout: {
      title: 'Temps dépassé',
      path: 'M11,17A1,1 0 0,0 12,18A1,1 0 0,0 13,17A1,1 0 0,0 12,16A1,1 0 0,0 11,17M11,3V7H13V5.08C16.39,5.57 19,8.47 19,12A7,7 0 0,1 12,19A7,7 0 0,1 5,12C5,10.32 5.59,8.78 6.58,7.58L12,13L13.41,11.59L6.61,4.79V4.81C4.42,6.45 3,9.05 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M18,12A1,1 0 0,0 17,11A1,1 0 0,0 16,12A1,1 0 0,0 17,13A1,1 0 0,0 18,12M6,12A1,1 0 0,0 7,13A1,1 0 0,0 8,12A1,1 0 0,0 7,11A1,1 0 0,0 6,12Z',
      color: '#ff0000',
      selector: 'svg-correct-answer'
    },

    'default': {
      title: 'Correction automatique en cours de développement ;)',
      path: 'M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z',
      color: '#446eff',
      selector: 'svg-correct-answer'
    }

  };

  var timeOutAfterRender = 1000; //XXX: Wait after attribute rendering

  var resultItem = _ember['default'].Component.extend({
    classNames: ['result-item'],
    didRender: function didRender() {
      this._super.apply(this, arguments);
      _ember['default'].run.debounce(this, function () {
        $('[data-toggle="tooltip"]').tooltip();
      }, timeOutAfterRender);
    },

    resultItemContent: _ember['default'].computed('answer.result', function () {
      if (!this.get('answer.result')) return;
      return contentReference[this.get('answer.result')] || contentReference['default'];
    }),

    validationImplementedForChallengeType: _ember['default'].computed('answer.challenge.type', function () {
      var implementedTypes = ['QCM', 'QROC', 'QCU', 'QROCM-ind'];
      var challengeType = this.get('answer.challenge.type');
      return implementedTypes.includes(challengeType);
    }),

    actions: {
      openComparisonPopin: function openComparisonPopin() {
        var assessmentId = this.get('answer.assessment.id');
        var answerId = this.get('answer.id');
        var index = this.get('index') + 1;

        this.sendAction('openComparison', assessmentId, answerId, index);
      }
    }
  });

  exports['default'] = resultItem;
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

    allotedTime: null,

    _totalTime: _ember['default'].computed('allotedTime', function () {
      var actualAllotedTime = get(this, 'allotedTime');
      if (!_pixLiveUtilsLodashCustom['default'].isNumeric(actualAllotedTime)) {
        return 0;
      }
      return 1000 * actualAllotedTime;
    }),
    _tickInterval: 1000,
    _timer: null,
    _elapsedTime: null,
    _currentTime: Date.now(),

    remainingSeconds: computed('_elapsedTime', function () {
      return _pixLiveUtilsLodashCustom['default'].round((get(this, '_totalTime') - get(this, '_elapsedTime')) / 1000);
    }),

    remainingTime: computed('remainingSeconds', function () {
      if (get(this, 'remainingSeconds') < 0) {
        return '0:00';
      }
      return fmtMSS(get(this, 'remainingSeconds'));
    }),

    percentageOfTimeout: computed('_elapsedTime', function () {
      var actualAllotedTime = get(this, 'allotedTime');
      if (!_pixLiveUtilsLodashCustom['default'].isNumeric(actualAllotedTime) || !_pixLiveUtilsLodashCustom['default'].isStrictlyPositiveInteger(actualAllotedTime.toString())) {
        return 0;
      }
      return 100 - get(this, 'remainingSeconds') / actualAllotedTime * 100;
    }),

    jaugeWidthStyle: computed('percentageOfTimeout', function () {
      return _ember['default'].String.htmlSafe('width: ' + this.get('percentageOfTimeout') + '%');
    }),

    hasFinished: computed('remainingSeconds', function () {
      return get(this, 'remainingSeconds') <= 0;
    }),

    _start: function _start() {
      this._stop();
      set(this, '_currentTime', Date.now());
      this._tick();
    },

    _stop: function _stop() {
      var _timer = get(this, '_timer');

      if (_timer) {
        run.cancel(_timer);
        set(this, '_timer', null);
      }
    },

    _tick: function _tick() {
      if (_pixLiveConfigEnvironment['default'].APP.isTimerCountdownEnabled) {

        var _tickInterval = get(this, '_tickInterval');
        var _currentTime = get(this, '_currentTime');
        var _elapsedTime = get(this, '_elapsedTime');
        var now = Date.now();

        set(this, '_elapsedTime', _elapsedTime + (now - _currentTime));
        set(this, '_currentTime', now);
        set(this, '_timer', run.later(this, this._tick, _tickInterval));
      }
    },

    init: function init() {
      this._super.apply(this, arguments);
      this._start();
    },

    willDestroyElement: function willDestroyElement() {
      this._stop();
    }

  });
});
define('pix-live/components/warning-page', ['exports', 'ember', 'pix-live/utils/lodash-custom'], function (exports, _ember, _pixLiveUtilsLodashCustom) {

  function _pluralize(word, count) {
    if (!count) {
      return '';
    }
    return count > 1 ? count + ' ' + word + 's' : count + ' ' + word;
  }

  function _getMinutes(time) {
    return Math.floor(time / 60);
  }

  function _getSeconds(time) {
    return time % 60;
  }

  function _formatTimeForText(time) {

    if (_pixLiveUtilsLodashCustom['default'].isNotInteger(time)) {
      return '';
    }

    var minutes = _getMinutes(time);
    var seconds = _getSeconds(time);

    var formattedMinutes = _pluralize('minute', minutes);
    var formattedSeconds = _pluralize('seconde', seconds);
    var joiningWord = !minutes || !seconds ? '' : ' et ';

    return '' + formattedMinutes + joiningWord + formattedSeconds;
  }

  function _formatTimeForButton(time) {

    if (_pixLiveUtilsLodashCustom['default'].isNotInteger(time) || !time) {
      return 0;
    }

    var minutes = _getMinutes(time);
    var seconds = _getSeconds(time);

    var formattedMinutes = minutes;
    var formattedSeconds = seconds < 9 ? '0' + seconds : '' + seconds;

    return formattedMinutes + ':' + formattedSeconds;
  }

  exports['default'] = _ember['default'].Component.extend({

    allocatedHumanTime: _ember['default'].computed('time', function () {
      return _formatTimeForText(this.get('time'));
    }),

    allocatedTime: _ember['default'].computed('time', function () {
      return _formatTimeForButton(this.get('time'));
    }),

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
define('pix-live/helpers/abs', ['exports', 'ember-math-helpers/helpers/abs'], function (exports, _emberMathHelpersHelpersAbs) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersAbs['default'];
    }
  });
  Object.defineProperty(exports, 'abs', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersAbs.abs;
    }
  });
});
define('pix-live/helpers/acos', ['exports', 'ember-math-helpers/helpers/acos'], function (exports, _emberMathHelpersHelpersAcos) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersAcos['default'];
    }
  });
  Object.defineProperty(exports, 'acos', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersAcos.acos;
    }
  });
});
define('pix-live/helpers/acosh', ['exports', 'ember-math-helpers/helpers/acosh'], function (exports, _emberMathHelpersHelpersAcosh) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersAcosh['default'];
    }
  });
  Object.defineProperty(exports, 'acosh', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersAcosh.acosh;
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
define('pix-live/helpers/app-version', ['exports', 'ember', 'pix-live/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _pixLiveConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _pixLiveConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('pix-live/helpers/asin', ['exports', 'ember-math-helpers/helpers/asin'], function (exports, _emberMathHelpersHelpersAsin) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersAsin['default'];
    }
  });
  Object.defineProperty(exports, 'asin', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersAsin.asin;
    }
  });
});
define('pix-live/helpers/asinh', ['exports', 'ember-math-helpers/helpers/asinh'], function (exports, _emberMathHelpersHelpersAsinh) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersAsinh['default'];
    }
  });
  Object.defineProperty(exports, 'asinh', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersAsinh.asinh;
    }
  });
});
define('pix-live/helpers/atan', ['exports', 'ember-math-helpers/helpers/atan'], function (exports, _emberMathHelpersHelpersAtan) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersAtan['default'];
    }
  });
  Object.defineProperty(exports, 'atan', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersAtan.atan;
    }
  });
});
define('pix-live/helpers/atan2', ['exports', 'ember-math-helpers/helpers/atan2'], function (exports, _emberMathHelpersHelpersAtan2) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersAtan2['default'];
    }
  });
  Object.defineProperty(exports, 'atan2', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersAtan2.atan2;
    }
  });
});
define('pix-live/helpers/atanh', ['exports', 'ember-math-helpers/helpers/atanh'], function (exports, _emberMathHelpersHelpersAtanh) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersAtanh['default'];
    }
  });
  Object.defineProperty(exports, 'atanh', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersAtanh.atanh;
    }
  });
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
define('pix-live/helpers/cbrt', ['exports', 'ember-math-helpers/helpers/cbrt'], function (exports, _emberMathHelpersHelpersCbrt) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersCbrt['default'];
    }
  });
  Object.defineProperty(exports, 'cbrt', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersCbrt.cbrt;
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
define('pix-live/helpers/clz32', ['exports', 'ember-math-helpers/helpers/clz32'], function (exports, _emberMathHelpersHelpersClz32) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersClz32['default'];
    }
  });
  Object.defineProperty(exports, 'clz32', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersClz32.clz32;
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
define('pix-live/helpers/cos', ['exports', 'ember-math-helpers/helpers/cos'], function (exports, _emberMathHelpersHelpersCos) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersCos['default'];
    }
  });
  Object.defineProperty(exports, 'cos', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersCos.cos;
    }
  });
});
define('pix-live/helpers/cosh', ['exports', 'ember-math-helpers/helpers/cosh'], function (exports, _emberMathHelpersHelpersCosh) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersCosh['default'];
    }
  });
  Object.defineProperty(exports, 'cosh', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersCosh.cosh;
    }
  });
});
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
define('pix-live/helpers/eq', ['exports', 'ember', 'pix-live/utils/lodash-custom'], function (exports, _ember, _pixLiveUtilsLodashCustom) {
  exports.eq = eq;

  function eq(params) {
    var isEqual = false;
    if (_pixLiveUtilsLodashCustom['default'].isArray(params) && params.length > 0) {
      isEqual = params[0] === params[1] ? true : false;
    }
    return isEqual;
  }

  exports['default'] = _ember['default'].Helper.helper(eq);
});
define('pix-live/helpers/exp', ['exports', 'ember-math-helpers/helpers/exp'], function (exports, _emberMathHelpersHelpersExp) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersExp['default'];
    }
  });
  Object.defineProperty(exports, 'exp', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersExp.exp;
    }
  });
});
define('pix-live/helpers/expm1', ['exports', 'ember-math-helpers/helpers/expm1'], function (exports, _emberMathHelpersHelpersExpm1) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersExpm1['default'];
    }
  });
  Object.defineProperty(exports, 'expm1', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersExpm1.expm1;
    }
  });
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
define('pix-live/helpers/fround', ['exports', 'ember-math-helpers/helpers/fround'], function (exports, _emberMathHelpersHelpersFround) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersFround['default'];
    }
  });
  Object.defineProperty(exports, 'fround', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersFround.fround;
    }
  });
});
define('pix-live/helpers/hypot', ['exports', 'ember-math-helpers/helpers/hypot'], function (exports, _emberMathHelpersHelpersHypot) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersHypot['default'];
    }
  });
  Object.defineProperty(exports, 'hypot', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersHypot.hypot;
    }
  });
});
define('pix-live/helpers/imul', ['exports', 'ember-math-helpers/helpers/imul'], function (exports, _emberMathHelpersHelpersImul) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersImul['default'];
    }
  });
  Object.defineProperty(exports, 'imul', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersImul.imul;
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
define('pix-live/helpers/log-e', ['exports', 'ember-math-helpers/helpers/log-e'], function (exports, _emberMathHelpersHelpersLogE) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersLogE['default'];
    }
  });
  Object.defineProperty(exports, 'logE', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersLogE.logE;
    }
  });
});
define('pix-live/helpers/log10', ['exports', 'ember-math-helpers/helpers/log10'], function (exports, _emberMathHelpersHelpersLog10) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersLog10['default'];
    }
  });
  Object.defineProperty(exports, 'log10', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersLog10.log10;
    }
  });
});
define('pix-live/helpers/log1p', ['exports', 'ember-math-helpers/helpers/log1p'], function (exports, _emberMathHelpersHelpersLog1p) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersLog1p['default'];
    }
  });
  Object.defineProperty(exports, 'log1p', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersLog1p.log1p;
    }
  });
});
define('pix-live/helpers/log2', ['exports', 'ember-math-helpers/helpers/log2'], function (exports, _emberMathHelpersHelpersLog2) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersLog2['default'];
    }
  });
  Object.defineProperty(exports, 'log2', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersLog2.log2;
    }
  });
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
define('pix-live/helpers/or', ['exports', 'ember', 'pix-live/utils/lodash-custom'], function (exports, _ember, _pixLiveUtilsLodashCustom) {
  exports.or = or;

  function _isATruthyValue(value) {
    return _pixLiveUtilsLodashCustom['default'].isTruthy(value) && value === true;
  }

  function or(params) {
    var hasTruthyValue = false;
    if (_pixLiveUtilsLodashCustom['default'].isArray(params) && params.length > 1) {
      hasTruthyValue = _isATruthyValue(params[0]) || _isATruthyValue(params[1]) ? true : false;
    }
    return hasTruthyValue;
  }

  exports['default'] = _ember['default'].Helper.helper(or);
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
define('pix-live/helpers/sign', ['exports', 'ember-math-helpers/helpers/sign'], function (exports, _emberMathHelpersHelpersSign) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersSign['default'];
    }
  });
  Object.defineProperty(exports, 'sign', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersSign.sign;
    }
  });
});
define('pix-live/helpers/sin', ['exports', 'ember-math-helpers/helpers/sin'], function (exports, _emberMathHelpersHelpersSin) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersSin['default'];
    }
  });
  Object.defineProperty(exports, 'sin', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersSin.sin;
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
define('pix-live/helpers/tan', ['exports', 'ember-math-helpers/helpers/tan'], function (exports, _emberMathHelpersHelpersTan) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersTan['default'];
    }
  });
  Object.defineProperty(exports, 'tan', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersTan.tan;
    }
  });
});
define('pix-live/helpers/tanh', ['exports', 'ember-math-helpers/helpers/tanh'], function (exports, _emberMathHelpersHelpersTanh) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersTanh['default'];
    }
  });
  Object.defineProperty(exports, 'tanh', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersTanh.tanh;
    }
  });
});
define('pix-live/helpers/trunc', ['exports', 'ember-math-helpers/helpers/trunc'], function (exports, _emberMathHelpersHelpersTrunc) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersTrunc['default'];
    }
  });
  Object.defineProperty(exports, 'trunc', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersTrunc.trunc;
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
        if ('POST' === settings.type) {
          localStorage.setItem('POST_ON_URL_' + settings.url.split('api')[1], settings.data);
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
define('pix-live/initializers/ember-cli-mirage', ['exports', 'ember-cli-mirage/utils/read-modules', 'pix-live/config/environment', 'pix-live/mirage/config', 'ember-cli-mirage/server', 'lodash/assign'], function (exports, _emberCliMirageUtilsReadModules, _pixLiveConfigEnvironment, _pixLiveMirageConfig, _emberCliMirageServer, _lodashAssign) {
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
    var options = (0, _lodashAssign['default'])(modules, { environment: environment, baseConfig: _pixLiveMirageConfig['default'], testConfig: _pixLiveMirageConfig.testConfig });

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
define('pix-live/mirage/config', ['exports', 'pix-live/mirage/routes/get-challenge', 'pix-live/mirage/routes/get-challenges', 'pix-live/mirage/routes/get-next-challenge', 'pix-live/mirage/routes/get-assessment-solutions', 'pix-live/mirage/routes/get-course', 'pix-live/mirage/routes/get-courses', 'pix-live/mirage/routes/get-courses-of-the-week', 'pix-live/mirage/routes/get-answer', 'pix-live/mirage/routes/post-answers', 'pix-live/mirage/routes/get-assessment', 'pix-live/mirage/routes/post-assessments', 'pix-live/mirage/routes/get-answer-by-challenge-and-assessment', 'pix-live/mirage/routes/post-followers', 'pix-live/mirage/routes/post-feedbacks', 'pix-live/mirage/routes/post-refresh-solution'], function (exports, _pixLiveMirageRoutesGetChallenge, _pixLiveMirageRoutesGetChallenges, _pixLiveMirageRoutesGetNextChallenge, _pixLiveMirageRoutesGetAssessmentSolutions, _pixLiveMirageRoutesGetCourse, _pixLiveMirageRoutesGetCourses, _pixLiveMirageRoutesGetCoursesOfTheWeek, _pixLiveMirageRoutesGetAnswer, _pixLiveMirageRoutesPostAnswers, _pixLiveMirageRoutesGetAssessment, _pixLiveMirageRoutesPostAssessments, _pixLiveMirageRoutesGetAnswerByChallengeAndAssessment, _pixLiveMirageRoutesPostFollowers, _pixLiveMirageRoutesPostFeedbacks, _pixLiveMirageRoutesPostRefreshSolution) {
  exports['default'] = function () {
    this.logging = false;
    this.passthrough('/write-coverage');
    this.post('https://fonts.googleapis.com/**', function () {});
    this.post('https://formspree.io/**', function () {});
    this.post('https://sentry.io/**', function () {});

    this.namespace = 'http://localhost:3000/api';

    this.get('/courses', _pixLiveMirageRoutesGetCourses['default']);
    this.get('/courses?isCourseOfTheWeek=true', _pixLiveMirageRoutesGetCoursesOfTheWeek['default']);
    this.get('/courses/:id', _pixLiveMirageRoutesGetCourse['default']);

    this.get('/challenges', _pixLiveMirageRoutesGetChallenges['default']);
    this.get('/challenges/:id', _pixLiveMirageRoutesGetChallenge['default']);

    this.post('/challenges/:challengeId/solution', _pixLiveMirageRoutesPostRefreshSolution['default']);

    this.post('/assessments', _pixLiveMirageRoutesPostAssessments['default']);
    this.get('/assessments/:id', _pixLiveMirageRoutesGetAssessment['default']);
    this.get('/assessments/:assessmentId/next/:challengeId', _pixLiveMirageRoutesGetNextChallenge['default']);
    this.get('/assessments/:assessmentId/next', _pixLiveMirageRoutesGetNextChallenge['default']);
    this.get('/assessments/:assessmentId/solutions/:answerId', _pixLiveMirageRoutesGetAssessmentSolutions['default']);

    this.post('/answers', _pixLiveMirageRoutesPostAnswers['default']);
    this.get('/answers/:id', _pixLiveMirageRoutesGetAnswer['default']);
    this.get('/answers', _pixLiveMirageRoutesGetAnswerByChallengeAndAssessment['default']);

    this.post('/feedbacks', _pixLiveMirageRoutesPostFeedbacks['default']);

    this.post('/followers', _pixLiveMirageRoutesPostFollowers['default']);
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
define('pix-live/mirage/data/challenges/ref-qcm-challenge', ['exports'], function (exports) {
  // QCM challenge with all field filled

  exports['default'] = {
    data: {
      type: 'challenge',
      id: 'ref_qcm_challenge_id',
      attributes: {
        type: 'QCM',
        timer: 2,
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
      type: 'challenge',
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
      type: 'challenge',
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
      type: 'challenge',
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
      type: 'challenge',
      id: 'ref_qru_challenge_id',
      attributes: {
        type: 'QRU',
        'illustration-url': 'http://fakeimg.pl/350x200/?text=QRU',
        attachments: ['http://example_of_url'],
        instruction: 'Un QRU propose un seul choix, typiquement cocher si oui ou non il a effectué une action quelque [part](http://link.part.url) ',
        proposals: '' + '- Une seule possibilite '
      }
    }
  };
});
define('pix-live/mirage/data/courses/highlighted-course', ['exports', 'pix-live/mirage/data/challenges/ref-qcm-challenge'], function (exports, _pixLiveMirageDataChallengesRefQcmChallenge) {
  exports['default'] = {
    data: {
      type: 'courses',
      id: 'highligthed_course_id',
      attributes: {
        name: 'Traiter des données',
        description: 'Recherche d\'information, gestion et traitement de données.',
        'image-url': 'http://fakeimg.pl/350x200/?text=First%20Course'
      },
      relationships: {
        challenges: {
          data: [{
            type: 'challenges',
            id: _pixLiveMirageDataChallengesRefQcmChallenge['default'].data.id
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
define('pix-live/mirage/data/followers/index', ['exports'], function (exports) {
  exports['default'] = {
    data: {
      type: 'followers',
      id: 'follower_id',
      attributes: {
        'email': 'jsnow@winterfell.got'
      }
    }
  };
});
define('pix-live/mirage/data/solutions/ref-qcu-solution', ['exports'], function (exports) {
  exports['default'] = {
    data: {
      type: 'solutions',
      id: 'ref_solution_id',
      attributes: {
        value: '2'
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
        value: '2,3'
      }
    }
  };
});
define('pix-live/mirage/routes/get-answer-by-challenge-and-assessment', ['exports', 'pix-live/utils/lodash-custom', 'pix-live/mirage/data/answers/ref-qcm-answer', 'pix-live/mirage/data/answers/ref-qcu-answer', 'pix-live/mirage/data/answers/ref-qru-answer', 'pix-live/mirage/data/answers/ref-qroc-answer', 'pix-live/mirage/data/answers/ref-qrocm-answer'], function (exports, _pixLiveUtilsLodashCustom, _pixLiveMirageDataAnswersRefQcmAnswer, _pixLiveMirageDataAnswersRefQcuAnswer, _pixLiveMirageDataAnswersRefQruAnswer, _pixLiveMirageDataAnswersRefQrocAnswer, _pixLiveMirageDataAnswersRefQrocmAnswer) {
  exports['default'] = function (schema, request) {

    var allAnswers = [_pixLiveMirageDataAnswersRefQcuAnswer['default'], _pixLiveMirageDataAnswersRefQruAnswer['default'], _pixLiveMirageDataAnswersRefQcmAnswer['default'], _pixLiveMirageDataAnswersRefQrocAnswer['default'], _pixLiveMirageDataAnswersRefQrocmAnswer['default']];

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
define('pix-live/mirage/routes/get-answer', ['exports', 'pix-live/utils/lodash-custom', 'pix-live/mirage/data/answers/ref-qcm-answer', 'pix-live/mirage/data/answers/ref-qcu-answer', 'pix-live/mirage/data/answers/ref-qru-answer', 'pix-live/mirage/data/answers/ref-qroc-answer', 'pix-live/mirage/data/answers/ref-qrocm-answer'], function (exports, _pixLiveUtilsLodashCustom, _pixLiveMirageDataAnswersRefQcmAnswer, _pixLiveMirageDataAnswersRefQcuAnswer, _pixLiveMirageDataAnswersRefQruAnswer, _pixLiveMirageDataAnswersRefQrocAnswer, _pixLiveMirageDataAnswersRefQrocmAnswer) {
  exports['default'] = function (schema, request) {

    var allAnswers = [_pixLiveMirageDataAnswersRefQcuAnswer['default'], _pixLiveMirageDataAnswersRefQruAnswer['default'], _pixLiveMirageDataAnswersRefQcmAnswer['default'], _pixLiveMirageDataAnswersRefQrocAnswer['default'], _pixLiveMirageDataAnswersRefQrocmAnswer['default']];

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
define('pix-live/mirage/routes/get-assessment-solutions', ['exports', 'pix-live/mirage/data/solutions/ref-solution', 'pix-live/mirage/data/solutions/ref-qcu-solution'], function (exports, _pixLiveMirageDataSolutionsRefSolution, _pixLiveMirageDataSolutionsRefQcuSolution) {
  exports['default'] = function (schema, request) {

    return request.params.answerId === 'ref_answer_qcu_id' ? _pixLiveMirageDataSolutionsRefQcuSolution['default'] : _pixLiveMirageDataSolutionsRefSolution['default'];
  };
});
define('pix-live/mirage/routes/get-assessment', ['exports', 'pix-live/utils/lodash-custom', 'pix-live/mirage/data/assessments/ref-assessment'], function (exports, _pixLiveUtilsLodashCustom, _pixLiveMirageDataAssessmentsRefAssessment) {
  exports['default'] = function (schema, request) {

    var allAssessments = [_pixLiveMirageDataAssessmentsRefAssessment['default']];

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
define('pix-live/mirage/routes/get-challenge', ['exports', 'pix-live/utils/lodash-custom', 'pix-live/mirage/data/challenges/ref-qcm-challenge', 'pix-live/mirage/data/challenges/ref-qcu-challenge', 'pix-live/mirage/data/challenges/ref-qru-challenge', 'pix-live/mirage/data/challenges/ref-qroc-challenge', 'pix-live/mirage/data/challenges/ref-qrocm-challenge'], function (exports, _pixLiveUtilsLodashCustom, _pixLiveMirageDataChallengesRefQcmChallenge, _pixLiveMirageDataChallengesRefQcuChallenge, _pixLiveMirageDataChallengesRefQruChallenge, _pixLiveMirageDataChallengesRefQrocChallenge, _pixLiveMirageDataChallengesRefQrocmChallenge) {
  exports['default'] = function (schema, request) {

    var allChallenges = [_pixLiveMirageDataChallengesRefQcmChallenge['default'], _pixLiveMirageDataChallengesRefQcuChallenge['default'], _pixLiveMirageDataChallengesRefQruChallenge['default'], _pixLiveMirageDataChallengesRefQrocChallenge['default'], _pixLiveMirageDataChallengesRefQrocmChallenge['default']];

    var challenges = _pixLiveUtilsLodashCustom['default'].map(allChallenges, function (oneChallenge) {
      return { id: oneChallenge.data.id, obj: oneChallenge };
    });

    var challenge = _pixLiveUtilsLodashCustom['default'].find(challenges, { id: request.params.id });

    if (challenge) {
      return challenge.obj;
    } else {
      throw new Error('The challenge you required in the fake server does not exist ' + request.params.id);
    }
  };
});
define('pix-live/mirage/routes/get-challenges', ['exports', 'pix-live/mirage/data/challenges/ref-qcm-challenge', 'pix-live/mirage/data/challenges/ref-qcu-challenge', 'pix-live/mirage/data/challenges/ref-qru-challenge', 'pix-live/mirage/data/challenges/ref-qroc-challenge', 'pix-live/mirage/data/challenges/ref-qrocm-challenge'], function (exports, _pixLiveMirageDataChallengesRefQcmChallenge, _pixLiveMirageDataChallengesRefQcuChallenge, _pixLiveMirageDataChallengesRefQruChallenge, _pixLiveMirageDataChallengesRefQrocChallenge, _pixLiveMirageDataChallengesRefQrocmChallenge) {
  exports['default'] = function () {

    return {
      data: [_pixLiveMirageDataChallengesRefQcmChallenge['default'].data, _pixLiveMirageDataChallengesRefQcuChallenge['default'].data, _pixLiveMirageDataChallengesRefQruChallenge['default'].data, _pixLiveMirageDataChallengesRefQrocChallenge['default'].data, _pixLiveMirageDataChallengesRefQrocmChallenge['default'].data]
    };
  };
});
define('pix-live/mirage/routes/get-course', ['exports', 'pix-live/utils/lodash-custom', 'pix-live/mirage/data/courses/ref-course', 'pix-live/mirage/data/courses/highlighted-course'], function (exports, _pixLiveUtilsLodashCustom, _pixLiveMirageDataCoursesRefCourse, _pixLiveMirageDataCoursesHighlightedCourse) {
  exports['default'] = function (schema, request) {

    var allCourses = [_pixLiveMirageDataCoursesRefCourse['default'], _pixLiveMirageDataCoursesHighlightedCourse['default']];

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
define('pix-live/mirage/routes/get-courses-of-the-week', ['exports', 'pix-live/mirage/data/courses/highlighted-course'], function (exports, _pixLiveMirageDataCoursesHighlightedCourse) {
  exports['default'] = function () {
    return { data: [_pixLiveMirageDataCoursesHighlightedCourse['default'].data] };
  };
});
define('pix-live/mirage/routes/get-courses', ['exports', 'pix-live/mirage/data/courses/ref-course', 'pix-live/mirage/data/courses/highlighted-course'], function (exports, _pixLiveMirageDataCoursesRefCourse, _pixLiveMirageDataCoursesHighlightedCourse) {
  exports['default'] = function (schema, request) {
    var courses = [_pixLiveMirageDataCoursesRefCourse['default'].data];

    if (request.queryParams && request.queryParams.isCourseOfTheWeek) {
      courses.push(_pixLiveMirageDataCoursesHighlightedCourse['default'].data);
    }

    return { data: courses };
  };
});
define('pix-live/mirage/routes/get-next-challenge', ['exports', 'pix-live/mirage/data/challenges/ref-qcm-challenge', 'pix-live/mirage/data/challenges/ref-qcu-challenge', 'pix-live/mirage/data/challenges/ref-qru-challenge', 'pix-live/mirage/data/challenges/ref-qroc-challenge', 'pix-live/mirage/data/challenges/ref-qrocm-challenge'], function (exports, _pixLiveMirageDataChallengesRefQcmChallenge, _pixLiveMirageDataChallengesRefQcuChallenge, _pixLiveMirageDataChallengesRefQruChallenge, _pixLiveMirageDataChallengesRefQrocChallenge, _pixLiveMirageDataChallengesRefQrocmChallenge) {
  exports['default'] = function (schema, request) {

    // case 1 : we're trying to reach the first challenge for a given assessment
    if (!request.params.challengeId) {
      switch (request.params.assessmentId) {
        case 'ref_assessment_id':
          return _pixLiveMirageDataChallengesRefQcmChallenge['default'];
        default:
          throw new Error('This assessment is not defined ' + request.params.assessmentId);
      }
    }

    // case 2 : test already started, challenge exists.
    var nextChallenge = {

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
define('pix-live/mirage/routes/post-answers', ['exports', 'pix-live/utils/lodash-custom', 'pix-live/mirage/data/challenges/ref-qcm-challenge', 'pix-live/mirage/data/challenges/ref-qcu-challenge', 'pix-live/mirage/data/challenges/ref-qru-challenge', 'pix-live/mirage/data/challenges/ref-qroc-challenge', 'pix-live/mirage/data/challenges/ref-qrocm-challenge', 'pix-live/mirage/data/answers/ref-qcu-answer', 'pix-live/mirage/data/answers/ref-qru-answer', 'pix-live/mirage/data/answers/ref-qcm-answer', 'pix-live/mirage/data/answers/ref-qroc-answer', 'pix-live/mirage/data/answers/ref-qrocm-answer'], function (exports, _pixLiveUtilsLodashCustom, _pixLiveMirageDataChallengesRefQcmChallenge, _pixLiveMirageDataChallengesRefQcuChallenge, _pixLiveMirageDataChallengesRefQruChallenge, _pixLiveMirageDataChallengesRefQrocChallenge, _pixLiveMirageDataChallengesRefQrocmChallenge, _pixLiveMirageDataAnswersRefQcuAnswer, _pixLiveMirageDataAnswersRefQruAnswer, _pixLiveMirageDataAnswersRefQcmAnswer, _pixLiveMirageDataAnswersRefQrocAnswer, _pixLiveMirageDataAnswersRefQrocmAnswer) {
  exports['default'] = function (schema, request) {

    var answer = JSON.parse(request.requestBody);
    var challengeId = answer.data.relationships.challenge.data.id;

    var allChallenges = [_pixLiveMirageDataChallengesRefQcmChallenge['default'], _pixLiveMirageDataChallengesRefQcuChallenge['default'], _pixLiveMirageDataChallengesRefQruChallenge['default'], _pixLiveMirageDataChallengesRefQrocChallenge['default'], _pixLiveMirageDataChallengesRefQrocmChallenge['default']];

    var allAnswers = [_pixLiveMirageDataAnswersRefQcmAnswer['default'], _pixLiveMirageDataAnswersRefQcuAnswer['default'], _pixLiveMirageDataAnswersRefQruAnswer['default'], _pixLiveMirageDataAnswersRefQrocAnswer['default'], _pixLiveMirageDataAnswersRefQrocmAnswer['default']];

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
define('pix-live/mirage/routes/post-assessments', ['exports', 'pix-live/utils/lodash-custom', 'pix-live/mirage/data/assessments/ref-assessment'], function (exports, _pixLiveUtilsLodashCustom, _pixLiveMirageDataAssessmentsRefAssessment) {
  exports['default'] = function (schema, request) {

    var answer = JSON.parse(request.requestBody);
    var courseId = answer.data.relationships.course.data.id;

    var allAssessments = [_pixLiveMirageDataAssessmentsRefAssessment['default']];

    var assessments = _pixLiveUtilsLodashCustom['default'].map(allAssessments, function (oneAssessment) {
      return { id: oneAssessment.data.relationships.course.data.id, obj: oneAssessment };
    });

    var assessment = _pixLiveUtilsLodashCustom['default'].find(assessments, { id: courseId });

    if (assessment) {
      return assessment.obj;
    } else if (_pixLiveUtilsLodashCustom['default'].startsWith(courseId, 'null')) {
      return _pixLiveMirageDataAssessmentsRefAssessment['default'];
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
define('pix-live/mirage/routes/post-followers', ['exports', 'pix-live/mirage/data/followers'], function (exports, _pixLiveMirageDataFollowers) {
  exports['default'] = function () {

    return _pixLiveMirageDataFollowers['default'];
  };
});
define('pix-live/mirage/routes/post-refresh-solution', ['exports'], function (exports) {
  exports['default'] = function () {

    return 'ok';
  };
});
define('pix-live/models/answer', ['exports', 'ember-data', 'pix-live/models/answer/value-as-array-of-boolean-mixin', 'pix-live/models/answer/value-as-array-of-string-mixin'], function (exports, _emberData, _pixLiveModelsAnswerValueAsArrayOfBooleanMixin, _pixLiveModelsAnswerValueAsArrayOfStringMixin) {
  var Model = _emberData['default'].Model;
  var attr = _emberData['default'].attr;
  var belongsTo = _emberData['default'].belongsTo;
  exports['default'] = Model.extend(_pixLiveModelsAnswerValueAsArrayOfBooleanMixin['default'], _pixLiveModelsAnswerValueAsArrayOfStringMixin['default'], {

    value: attr('string'),
    result: attr('string'),
    resultDetails: attr('string'),
    timeout: attr('number'),
    elapsedTime: attr('number'),
    assessment: belongsTo('assessment'),
    challenge: belongsTo('challenge')
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
define('pix-live/models/follower', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    email: _emberData['default'].attr('string')
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
    this.route('courses');
    this.route('placement-tests');
    this.route('project', { path: '/projet' });
    this.route('competences');

    this.route('challenges.get-preview', { path: '/challenges/:challenge_id/preview' });

    this.route('courses.get-course-preview', { path: '/courses/:course_id/preview' });
    this.route('courses.get-challenge-preview', { path: '/courses/:course_id/preview/challenges/:challenge_id' });
    this.route('courses.create-assessment', { path: '/courses/:course_id' });
    this.route('courses.create-assessment-old', { path: '/courses/:course_id/assessment' });

    this.route('assessments.get-challenge', { path: '/assessments/:assessment_id/challenges/:challenge_id' });
    this.route('assessments.get-results', { path: '/assessments/:assessment_id/results' });
    this.route('assessments.get-comparison', { path: '/assessments/:assessment_id/results/compare/:answer_id/:index' });
  });
});
define('pix-live/routes/assessments/get-challenge', ['exports', 'ember', 'rsvp'], function (exports, _ember, _rsvp) {
  exports['default'] = _ember['default'].Route.extend({

    assessmentService: _ember['default'].inject.service('assessment'),

    model: function model(params) {
      var store = this.get('store');

      var assessmentId = params.assessment_id;
      var challengeId = params.challenge_id;

      return _rsvp['default'].hash({
        assessment: store.findRecord('assessment', assessmentId),
        challenge: store.findRecord('challenge', challengeId),
        answers: store.queryRecord('answer', { assessment: assessmentId, challenge: challengeId })
      });
    },

    afterModel: function afterModel(model) {
      return model.assessment.get('course').then(function (course) {
        model.progress = course.getProgress(model.challenge);
        return model;
      });
    },

    serialize: function serialize(model) {
      return {
        assessment_id: model.assessment.id,
        challenge_id: model.challenge.id
      };
    },

    _createAnswer: function _createAnswer(answerValue, answerTimeout, currentChallenge, assessment, answerElapsedTime) {
      return this.get('store').createRecord('answer', {
        value: answerValue,
        timeout: answerTimeout,
        challenge: currentChallenge,
        elapsedTime: answerElapsedTime,
        assessment: assessment
      });
    },

    _urlForNextChallenge: function _urlForNextChallenge(adapter, assessmentId, currentChallengeId) {
      return adapter.buildURL('assessment', assessmentId) + '/next/' + currentChallengeId;
    },

    _navigateToNextView: function _navigateToNextView(currentChallenge, assessment) {
      var _this = this;

      var adapter = this.get('store').adapterFor('application');
      adapter.ajax(this._urlForNextChallenge(adapter, assessment.get('id'), currentChallenge.get('id')), 'GET').then(function (nextChallenge) {
        if (nextChallenge) {
          _this.transitionTo('assessments.get-challenge', assessment.get('id'), nextChallenge.data.id);
        } else {
          _this.transitionTo('assessments.get-results', assessment.get('id'));
        }
      });
    },

    actions: {

      saveAnswerAndNavigate: function saveAnswerAndNavigate(currentChallenge, assessment, answerValue, answerTimeout, answerElapsedTime) {
        var _this2 = this;

        var answer = this._createAnswer(answerValue, answerTimeout, currentChallenge, assessment, answerElapsedTime);
        answer.save().then(function () {
          _this2._navigateToNextView(currentChallenge, assessment);
        });
      }
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
        this.transitionTo('assessments.get-comparison', assessment_id, answer_id, index);
      }
    }

  });
});
define('pix-live/routes/challenges/get-preview', ['exports', 'ember', 'pix-live/utils/lodash-custom'], function (exports, _ember, _pixLiveUtilsLodashCustom) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model(params) {
      var store = this.get('store');
      return store.findRecord('challenge', params.challenge_id);
    },

    afterModel: function afterModel(challenge) {
      var store = this.get('store');
      var that = this;
      // creates a fake course
      var course = store.createRecord('course', { id: 'null' + _pixLiveUtilsLodashCustom['default'].guid(), challenges: [challenge] });
      var assessment = store.createRecord('assessment', { course: course });
      var solutionAdapter = store.adapterFor('solution');

      solutionAdapter.refreshRecord('solution', { challengeId: challenge.get('id') });
      return assessment.save().then(function () {
        return that.transitionTo('assessments.get-challenge', { assessment: assessment, challenge: challenge });
      });
    }

  });
});
define('pix-live/routes/competences', ['exports', 'ember'], function (exports, _ember) {

  var domains = [{
    id: 'information-et-donnees',
    title: 'Informations et données',
    topics: [{
      title: 'Mener une recherche et une veille d’information',
      description: 'Mener une recherche et une veille d’information pour répondre à un besoin d’information et se tenir au courant de l’actualité d’u sujet (avec un moteur de recherche, au sein d’un réseau social, par abonnement à des flux ou des lettres d’information, ou tout autre moyen.)',
      themes: 'Web et navigation ; Moteur de recherche et requête ; Veille d’information, flux encuration ; Evaluation de l’information ; Source et citation ; Gouvernance d’internet et ouverture du web ; Abondance de l’information, filtrage et personnalisation ; Recul critique face à l’information et aux médias ; Droit d’auteur.'
    }, {
      title: 'Gérer des données',
      description: 'Stocker et organiser des données pour les retrouver, les conserver et en faciliter l’accès et la gestion (avec un gestionnaire de fichiers, un espace de stockage en ligne, des tags, des classeurs, des bases de données, un système d’information, etc.).',
      themes: 'Dossier et fichier ; Stockage et compression ; Transfert et synchronisation ; Recherche et méta-données ; Indexation sémantique et libellé (tag) ; Structuration des données ; Système d’information ; Localisation des données et droit applicable ; Modèles et stratégies économiques ; Sécurité du système d’information.'
    }, {
      title: 'Traiter des données',
      description: 'Appliquer des traitements à des données pour les analyser et les interpréter (avec un tableur, un programme, un logiciel de traitement d’enquête, une requête calcul dans une base de données, etc.).',
      themes: 'Dossier et fichier ; Stockage et compression ; Transfert et synchronisation ; Recherche et méta-données ; Indexation sémantique et libellé (tag) ; Structuration des données ; Système d’information ; Localisation des données et droit applicable ; Modèles et stratégies économiques ; Sécurité du système d’information.'
    }]
  }, {
    id: 'communication-et-collaboration',
    title: 'Communication et collaboration',
    topics: [{
      title: 'Interagir',
      description: 'Interagir avec des individus et de petits groupespour échanger dans divers contextes liés à la vie privée ou à une activité professionnelle, de façon ponctuelle et récurrente (avec une messagerie électronique, une messagerie instantanée, un système de visio-conférence, etc.).',
      themes: 'Protocoles pour l\'interaction ; Modalités d\'interaction et rôles ; Applications et services pour l\'interaction ; Vie privée et confidentialité ; Identité numérique et signaux ; Vie connectée ; Codes de communication et netiquette'
    }, {
      title: 'Partager et publier',
      description: 'Partager et publier des informations et des contenus pour communiquer ses propres productions ou opinions, relayer celles des autres en contexte de communication publique(avec des plateformes de partage, des réseaux sociaux, des blogs, des espaces de forum et de commentaire, des CMS, etc.).',
      themes: 'Protocoles et modalités de partage ; Applications et services pour le partage ; Règles de publication et visibilité ; Réseaux sociaux ; Liberté d\'expression et droit à l\'information ; Formation en ligne ; Vie privée et confidentialité ; Identité numérique et signaux ; Pratiques sociales et participation citoyenne ; e- Réputation et influence ; Ecriture pour le web ; Codes de communication et netiquette ; Droit d\'auteur'
    }, {
      title: 'Collaborer',
      description: 'Collaborer dans un groupe pour réaliser un projet, co-produire des ressources, des connaissances, des données, et pour apprendre (avec des plateformes de travail collaboratif et de partage de document, des éditeurs en ligne, des fonctionnalités de suivi de modifications ou de gestion de versions, etc.).',
      themes: 'Modalités de collaboration et rôles ; Applications et services de partage de document et d\'édition en ligne ; Versions et révisions ; Droits d\'accès et conflit d\'accès ; Gestion de projet ; Droit d\'auteur ; Vie connectée ; Vie privée et confidentialité'
    }, {
      title: 'S\'insérer dans le monde numérique',
      description: 'Maîtriser les stratégies et enjeux de la présence en ligne, et choisir ses pratiques pour se positionner en tant qu\'acteur social, économique et citoyen dans le monde numérique, en lien avec ses règles, limites et potentialités, et en accord avec des valeurs et/ou pour répondre à des objectifs (avec les réseaux sociaux et les outils permettant de développer une présence publique sur le web, et en lien avec la vie citoyenne, la vie professionnelle, la vie privée, etc.).',
      themes: 'Identité numérique et signaux ; e-Réputation et influence ; Codes de communication et netiquette ; Pratiques sociales et participation citoyenne ; Modèles et stratégies économiques ; Questions éthiques et valeurs ; Gouvernance d\'internet et ouverture du web ; Liberté d\'expression et droit à l\'information'
    }]
  }, {
    id: 'creation-de-contenu',
    title: 'Création de contenu',
    topics: [{
      title: 'Développer des documents textuels',
      description: 'Produire des documents à contenu majoritairement textuel pour communiquer des idées, rendre compte et valoriser ses travaux (avec des logiciels de traitement de texte, de présentation, de création de page web, de carte conceptuelle, etc.).',
      themes: 'Applications d\'édition de documents textuels ; Structure et séparation forme et contenu ; Illustration et intégration ; Charte graphique et identité visuelle ; Interopérabilité ; Ergonomie et réutilisabilité du document ; Accessibilité ; Droit d\'auteur'
    }, {
      title: 'Développer des documents multimédia',
      description: 'Développer des documents à contenu multimédia pour créer ses propres productions multimédia, enrichir ses créations majoritairement textuelles ou créer une oeuvre transformative (mashup, remix, ...) (avec des logiciels de capture et d\'édition d\'image / son / vidéo / animation, des logiciels utiles aux pré-traitements avant intégration, etc.).',
      themes: 'Applications d\'édition de documents multimédia ; Capture son, image et vidéo et numérisation ; Interopérabilité ; Accessibilité ; Droit d\'auteur ; Charte graphique et identité visuelle'
    }, {
      title: 'Adapter les documents à leur finalité',
      description: 'Adapter des documents de tous types en fonction de l\'usage envisagé et maîtriser l\'usage des licences pour permettre, faciliter et encadrer l\'utilisation dans divers contextes (mise à jour fréquente, diffusion multicanale, impression, mise en ligne, projection, etc.) (avec les fonctionnalités des logiciels liées à la préparation d\'impression, de projection, de mise en ligne, les outils de conversion de format, etc.).',
      themes: 'Licences ; Diffusion et mise en ligne d\'un document Ergonomie et réutilisabilité du document ; Ecriture pour le web ; Interopérabilité ; Accessibilité ; Vie privée et confidentialité'
    }, {
      title: 'Programmer',
      description: 'Ecrire des programmes et des algorithmes pour répondre à un besoin (automatiser une tâche répétitive, accomplir des tâches complexes ou chronophages, résoudre un problème logique, etc.) et pour développer un contenu riche (jeu, site web, etc.) (avec des environnements de développement informatique simples, des logiciels de planification de tâches, etc.).',
      themes: 'Algorithme et programme ; Représentation et codage de l\'information ; Complexité ; Pensée algorithmique et informatique ; Collecte et exploitation de données massives ; Intelligence artificielle et robots'
    }]
  }, {
    id: 'protection-et-securite',
    title: 'Protection et sécurité',
    topics: [{
      title: 'Sécuriser l\'environnement numérique',
      description: 'Sécuriser les équipements, les communications et les données pour se prémunir contre les attaques, pièges, désagréments et incidents susceptibles de nuire au bon fonctionnement des matériels, logiciels, sites internet, et de compromettre les transactions et les données (avec des logiciels de protection, des techniques de chiffrement, la maîtrise de bonnes pratiques, etc.).',
      themes: 'Attaques et menaces ; Chiffrement ; Logiciels de prévention et de protection ; Authentification ; Sécurité du système d\'information ; Vie privée et confidentialité'
    }, {
      title: 'Protéger les données personnelles et la vie privée',
      description: 'Maîtriser ses traces et gérer les données personnelles pour protéger sa vie privée et celle des autres, et adopter une pratique éclairée (avec le paramétrage des paramètres de confidentialité, la surveillance régulière de ses traces par des alertes ou autres outils, etc.).',
      themes: 'Données personnelles et loi ; Traces ; Vie privée et confidentialité ; Collecte et exploitation de données massives'
    }, {
      title: 'Protéger la santé, le bien-être et l\'environnement',
      description: 'Prévenir et limiter les risques générés par le numérique sur la santé, le bien- être et l\'environnement mais aussi tirer parti de ses potentialités pour favoriser le développement personnel, le soin, l\'inclusion dans la société et la qualité des conditions de vie, pour soi et pour les autres (avec la connaissance des effets du numérique sur la santé physique et psychique et sur l\'environnement, et des pratiques, services et outils numériques dédiés au bien-être, à la santé, à l\'accessibilité)',
      themes: 'Ergonomie du poste de travail ; Communication sans fil et ondes ; Impact environnemental ; Accessibilité ; Vie connectée ; Capteurs ; Intelligence artificielle et robots ; Santé ; Vie privée et confidentialité'
    }]
  }, {
    id: 'environnement-numerique',
    title: 'Environnement numérique',
    topics: [{
      title: 'Résoudre des problèmes techniques',
      description: 'Résoudre des problèmes techniques pour garantir et rétablir le bon fonctionnement d\'un environnement informatique (avec les outils de configuration et de maintenance des logiciels ou des systèmes d\'exploitation, et en mobilisant les ressources techniques ou humaines nécessaires, etc.).',
      themes: 'Panne et support informatique ; Administration et configuration ; Maintenance et mise à jour ; Sauvegarde et restauration ; Interopérabilité ; Complexité'
    }, {
      title: 'Construire un environnement numérique',
      description: 'Installer, configurer et enrichir un environnement numérique (matériels, outils, services) pour disposer d\'un cadre adapté aux activités menées, à leur contexte d\'exercice ou à des valeurs (avec les outils de configuration des logiciels et des systèmes d\'exploitation, l\'installation de nouveaux logiciels ou la souscription à des services, etc.).',
      themes: 'Histoire de l\'informatique ; Informatique et matériel ; Logiciels, applications et services ; Système d\'exploitation ; Réseau informatique ; Offre (matériel, logiciel, service) ; Modèles et stratégies économiques'
    }]
  }];

  exports['default'] = _ember['default'].Route.extend({

    panelActions: _ember['default'].inject.service(),

    model: function model() {
      return domains;
    }

  });
});
define('pix-live/routes/courses', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model() {
      return this.get('store').findAll('course');
    },

    actions: {
      startCourse: function startCourse(course) {
        this.transitionTo('courses.create-assessment', course);
      }
    }

  });
});
define('pix-live/routes/courses/create-assessment-old', ['exports', 'ember'], function (exports, _ember) {

  /*
  * keep old URL /courses/:course_id/assessment, with redirection
  */
  exports['default'] = _ember['default'].Route.extend({

    model: function model(params) {
      return params.course_id;
    },

    afterModel: function afterModel(courseId) {
      this.transitionTo('courses.create-assessment', courseId);
    }

  });
});
define('pix-live/routes/courses/create-assessment', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model(params) {
      var store = this.get('store');
      return store.findRecord('course', params.course_id);
    },

    afterModel: function afterModel(course) {
      var _this = this;

      var store = this.get('store');
      var challengeAdapter = store.adapterFor('challenge');
      var assessment = store.createRecord('assessment', { course: course });
      assessment.save().then(function () {
        challengeAdapter.queryNext(store, assessment.get('id')).then(function (challenge) {
          if (challenge) {
            _this.transitionTo('assessments.get-challenge', { assessment: assessment, challenge: challenge });
          } else {
            _this.transitionTo('assessments.get-results', { assessment: assessment });
          }
        });
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
define('pix-live/routes/index', ['exports', 'ember', 'rsvp'], function (exports, _ember, _rsvp) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model() {
      return _rsvp['default'].hash({
        coursesOfTheWeek: this.get('store').query('course', { isCourseOfTheWeek: true }),
        progressionCourses: this.get('store').query('course', { isCourseOfTheWeek: false, isAdaptive: false })
      });
    },

    actions: {
      startCourse: function startCourse(course) {
        this.transitionTo('courses.create-assessment', course);
      }
    }

  });
});
define('pix-live/routes/placement-tests', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    delay: _ember['default'].inject.service(),

    model: function model() {
      return this.store.query('course', { isAdaptive: true });
    },

    actions: {
      startCourse: function startCourse(course) {
        this.transitionTo('courses.create-assessment', course);
      }
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
define('pix-live/services/dependency-checker', ['exports', 'ember', 'pix-live/config/environment'], function (exports, _ember, _pixLiveConfigEnvironment) {
  exports['default'] = _ember['default'].Service.extend({

    hasLiquidFire: _ember['default'].computed('', function () {
      return _pixLiveConfigEnvironment['default']['ember-collapsible-panel'].hasLiquidFire;
    })

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
define('pix-live/services/panel-actions', ['exports', 'ember-collapsible-panel/services/panel-actions'], function (exports, _emberCollapsiblePanelServicesPanelActions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCollapsiblePanelServicesPanelActions['default'];
    }
  });
});
define("pix-live/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "SZmzyhNr", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"body\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"routable-modal-outlet\"]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/application.hbs" } });
});
define("pix-live/templates/assessments/get-challenge", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "3Od31FqE", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-challenge\"],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-challenge__course-banner\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"course-banner\"],null,[[\"course\",\"withHomeLink\"],[[\"get\",[\"model\",\"assessment\",\"course\"]],true]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-challenge__content\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"unless\"],[[\"get\",[\"model\",\"assessment\",\"course\",\"isAdaptive\"]]],null,0],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"component\"],[[\"get\",[\"model\",\"challenge\",\"challengeItemType\"]]],[[\"challenge\",\"assessment\",\"answers\",\"onValidated\"],[[\"get\",[\"model\",\"challenge\"]],[\"get\",[\"model\",\"assessment\"]],[\"get\",[\"model\",\"answers\"]],\"saveAnswerAndNavigate\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-challenge__progress-bar\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"progress-bar\"],null,[[\"progress\"],[[\"get\",[\"model\",\"progress\"]]]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/assessments/get-challenge.hbs" } });
});
define("pix-live/templates/assessments/get-comparison", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Mgh34V/I", "block": "{\"statements\":[[\"append\",[\"helper\",[\"comparison-window\"],null,[[\"answer\",\"challenge\",\"solution\",\"index\"],[[\"get\",[\"model\",\"answer\"]],[\"get\",[\"model\",\"challenge\"]],[\"get\",[\"model\",\"solution\"]],[\"get\",[\"model\",\"index\"]]]]],false],[\"text\",\"\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/assessments/get-comparison.hbs" } });
});
define("pix-live/templates/assessments/get-results", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "n4CZNSLy", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results\"],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results__course-banner\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"course-banner\"],null,[[\"course\"],[[\"get\",[\"model\",\"course\"]]]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results__content\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results__title\"],[\"flush-element\"],[\"text\",\"\\n      Vos résultats\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results__list\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"answers\"]]],null,1],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results__index-link-container\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"index\"],[[\"class\",\"tagName\"],[\"assessment-results__index-link__element\",\"button\"]],0],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"assessment-results__link-back\"],[\"flush-element\"],[\"text\",\"Revenir à la liste des tests\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"append\",[\"helper\",[\"result-item\"],null,[[\"answer\",\"index\",\"openComparison\"],[[\"get\",[\"answer\"]],[\"get\",[\"index\"]],\"openComparison\"]]],false],[\"text\",\"\\n\"]],\"locals\":[\"answer\",\"index\"]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/assessments/get-results.hbs" } });
});
define("pix-live/templates/challenges/get-preview", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "rnGG28G4", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"challenge-preview\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"component\"],[[\"get\",[\"challengeItemType\"]]],[[\"challenge\"],[[\"get\",[\"model\",\"challenge\"]]]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/challenges/get-preview.hbs" } });
});
define("pix-live/templates/competences", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "MHx1Nqek", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"competences-page\"],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"append\",[\"helper\",[\"navbar-header\"],null,[[\"class\"],[\"navbar-header--white\"]]],false],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"competences-page__panel competences-page__header\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h1\",[]],[\"static-attr\",\"class\",\"competences-page__header-text\"],[\"flush-element\"],[\"text\",\"\\n      Retrouvez les 5 domaines de compétences que Pix souhaite évaluer, en accord avec le référentiel européen DIGCOMP.\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"cp-panels\"],null,[[\"class\"],[\"competences-page__domains\"]],5],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"app-footer\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"              \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"domain-topic\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"domain-topic__title\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"topic\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"domain-topic__description\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"topic\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"domain-topic__themes\"],[\"flush-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"domain-topic__themes-title\"],[\"flush-element\"],[\"text\",\"Thématiques associées\"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"domain-topic__themes-content\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"topic\",\"themes\"]],false],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"topic\"]},{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"competences-domain__topics\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"domain\",\"topics\"]]],null,0],[\"text\",\"          \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"competences-domain__title\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"domain\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"competences-domain__title-icon\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"panel\",\"toggle\"],null,[[\"class\"],[\"competences-domain__header\"]],2],[\"block\",[\"panel\",\"body\"],null,[[\"class\"],[\"competences-domain__content\"]],1]],\"locals\":[\"panel\"]},{\"statements\":[[\"block\",[\"panels\",\"panel\"],null,[[\"class\"],[\"rounded-panel competences-domain\"]],3]],\"locals\":[\"domain\"]},{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,4]],\"locals\":[\"panels\"]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/competences.hbs" } });
});
define("pix-live/templates/components/app-footer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "8XfOWS/M", "block": "{\"statements\":[[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"app-footer__section app-footer__section--pix-logo\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"pix-logo\"]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"app-footer__section app-footer__section--contact\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"app-footer__link-text\"],[\"static-attr\",\"href\",\"mailto:contact@pix.beta.gouv.fr\"],[\"flush-element\"],[\"text\",\"Contactez-nous\"],[\"close-element\"],[\"text\",\"\\n  |\\n  \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"app-footer__link-text\"],[\"static-attr\",\"href\",\"https://github.com/sgmap/pix\"],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"text\",\"Le code source est libre\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"app-footer__section app-footer__section--marianne-logo\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/mnsr3.svg\"]]],[\"static-attr\",\"class\",\"app-footer__logo-marianne-img\"],[\"static-attr\",\"alt\",\"Logo du Ministère de l'Éducation Nationale, de l'Enseignement Supérieur et de la Recherche\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/app-footer.hbs" } });
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
  exports["default"] = Ember.HTMLBars.template({ "id": "Ga6io8bH", "block": "{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"challenge-actions__action challenge-actions__action-skip\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"skip\"]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"challenge-actions__action-skip-text\"],[\"flush-element\"],[\"text\",\"Je passe\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"challenge-actions__action challenge-actions__action-validate\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"validate\"]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"challenge-actions__action-validate-text\"],[\"flush-element\"],[\"text\",\"Je valide\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/challenge-actions.hbs" } });
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
  exports["default"] = Ember.HTMLBars.template({ "id": "eRDbN+zw", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"challenge\",\"instruction\"]]],null,5],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"challenge\",\"illustrationUrl\"]]],null,4],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"challenge\",\"hasAttachment\"]]],null,3]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"challenge-statement__file-option\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"text\",\"            \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"type\",\"radio\"],[\"dynamic-attr\",\"id\",[\"concat\",[\"attachment\",[\"get\",[\"index\"]]]]],[\"static-attr\",\"class\",\"challenge-statement__file-option-input\"],[\"static-attr\",\"name\",\"attachment_selector\"],[\"dynamic-attr\",\"value\",[\"concat\",[[\"get\",[\"attachmentUrl\"]]]]],[\"dynamic-attr\",\"checked\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"attachmentUrl\"]],[\"get\",[\"selectedAttachmentUrl\"]]],null],\"checked\"],null]]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n            \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"class\",\"label-checkbox-downloadable\"],[\"dynamic-attr\",\"for\",[\"concat\",[\"attachment\",[\"get\",[\"index\"]]]]],[\"dynamic-attr\",\"onclick\",[\"helper\",[\"action\"],[[\"get\",[null]],\"selectAttachementUrl\",[\"get\",[\"attachmentUrl\"]]],null],null],[\"flush-element\"],[\"text\",\"\\n\\n              \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"challenge-statement__file-option-label\"],[\"flush-element\"],[\"text\",\"fichier .\"],[\"append\",[\"helper\",[\"extract-extension\"],[[\"get\",[\"attachmentUrl\"]]],null],false],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"text\",\"              \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"class\",\"radio2-on picture-checkbox-downloadable\"],[\"static-attr\",\"width\",\"17px\"],[\"static-attr\",\"height\",\"17px\"],[\"static-attr\",\"viewBox\",\"0 0 17 17\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"Page-1\"],[\"static-attr\",\"stroke\",\"none\"],[\"static-attr\",\"stroke-width\",\"1\"],[\"static-attr\",\"fill\",\"none\"],[\"static-attr\",\"fill-rule\",\"evenodd\"],[\"flush-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"g\",[]],[\"dynamic-attr\",\"id\",[\"concat\",[\"filled\",[\"get\",[\"index\"]]]]],[\"static-attr\",\"transform\",\"translate(1.000000, 1.000000)\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"circle\",[]],[\"static-attr\",\"id\",\"Oval-ext\"],[\"static-attr\",\"stroke\",\"#7D808B\"],[\"static-attr\",\"stroke-width\",\"2\"],[\"static-attr\",\"fill\",\"#FFFFFF\"],[\"static-attr\",\"cx\",\"7.5\"],[\"static-attr\",\"cy\",\"7.5\"],[\"static-attr\",\"r\",\"7.5\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"circle\",[]],[\"static-attr\",\"id\",\"Oval-Bleu\"],[\"static-attr\",\"fill\",\"#3D68FF\"],[\"static-attr\",\"cx\",\"7.5250001\"],[\"static-attr\",\"cy\",\"7.55500031\"],[\"static-attr\",\"r\",\"4.125\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"class\",\"radio2-off picture-checkbox-downloadable\"],[\"static-attr\",\"width\",\"17px\"],[\"static-attr\",\"height\",\"17px\"],[\"static-attr\",\"viewBox\",\"0 0 17 17\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"Page-1\"],[\"static-attr\",\"stroke\",\"none\"],[\"static-attr\",\"stroke-width\",\"1\"],[\"static-attr\",\"fill\",\"none\"],[\"static-attr\",\"fill-rule\",\"evenodd\"],[\"flush-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"myicon\"],[\"static-attr\",\"transform\",\"translate(1.000000, 1.000000)\"],[\"static-attr\",\"stroke\",\"#7D808B\"],[\"static-attr\",\"stroke-width\",\"2\"],[\"static-attr\",\"fill\",\"#FFFFFF\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"circle\",[]],[\"static-attr\",\"id\",\"Oval-ext\"],[\"static-attr\",\"cx\",\"7.5\"],[\"static-attr\",\"cy\",\"7.5\"],[\"static-attr\",\"r\",\"7.5\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\\n          \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"attachmentUrl\",\"index\"]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"challenge-statement__text\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"challenge-statement__text-content\"],[\"flush-element\"],[\"text\",\"Choisissez le type de fichier que vous voulez utiliser\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"challenge-statement__help-icon\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"challenge-statement__help-tooltip\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"challenge-statement__help-text\"],[\"flush-element\"],[\"text\",\"Pix vous laisse le choix du format de fichier à télécharger. Si vous ne savez pas quelle option retenir, conservez le choix par défaut. Il correspond au format de fichier pris en charge par le plus grand nombre de logiciels.\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"challenge-statement__file-options\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"attachmentsData\"]]],null,0],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"challenge-statement__action\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"challenge-statement__action-link\"],[\"dynamic-attr\",\"href\",[\"concat\",[[\"unknown\",[\"selectedAttachmentUrl\"]]]]],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"challenge-statement__action-label\"],[\"flush-element\"],[\"text\",\"Télécharger\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"challenge-statement__action\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"challenge-statement__action-link\"],[\"dynamic-attr\",\"href\",[\"concat\",[[\"unknown\",[\"challenge\",\"attachments\",\"firstObject\"]]]]],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"challenge-statement__action-label\"],[\"flush-element\"],[\"text\",\"Télécharger\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel__row challenge-statement__attachments-section\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"challenge\",\"hasSingleAttachment\"]]],null,2],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"challenge\",\"hasMultipleAttachments\"]]],null,1],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel__row challenge-statement__illustration-section\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"challenge-statement__illustration\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"challenge\",\"illustrationUrl\"]]]]],[\"static-attr\",\"alt\",\"Illustration de l'épreuve\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel__row challenge-statement__instruction-section\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"markdown-to-html\"],null,[[\"class\",\"extensions\",\"markdown\"],[\"challenge-statement__instruction\",\"targetBlank\",[\"get\",[\"challenge\",\"instruction\"]]]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/challenge-statement.hbs" } });
});
define("pix-live/templates/components/challenge-stay", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "o2YixRM7", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"challenge-stay__container\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"challenge-stay__icon\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"width\",\"24\"],[\"static-attr\",\"height\",\"24\"],[\"static-attr\",\"viewBox\",\"0 0 24 24\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M13,10V6H11V10H13M13,14V12H11V14H13Z\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"challenge-stay__text\"],[\"flush-element\"],[\"text\",\"Vous devez répondre à cette question sans sortir de cette page !\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/challenge-stay.hbs" } });
});
define("pix-live/templates/components/comparison-window", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "i233cjta", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"routable-modal--dialog comparison-window--dialog\"],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"routable-modal--content comparison-window--content\"],[\"flush-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"routable-modal--header comparison-window__header\"],[\"flush-element\"],[\"text\",\"\\n\\n\\n\"],[\"block\",[\"routable-modal-close-button\"],null,[[\"class\"],[\"routable-modal--close-button\"]],7],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"comparison-window__result-item-index\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"unknown\",[\"index\"]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"comparison-window__result-item-line\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"comparison-window__title\"],[\"flush-element\"],[\"text\",\"\\n\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"data-toggle\",\"tooltip\"],[\"static-attr\",\"data-placement\",\"top\"],[\"dynamic-attr\",\"title\",[\"concat\",[[\"unknown\",[\"resultItem\",\"titleTooltip\"]]]]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"resultItem\",\"custom\"]]],null,6,5],[\"text\",\"        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"comparison-window__title-text\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"resultItem\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"routable-modal--body comparison-window--body\"],[\"flush-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel comparison-window__instruction\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel__row \"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"markdown-to-html\"],null,[[\"class\",\"extensions\",\"markdown\"],[\"challenge-statement__instruction\",\"targetBlank\",[\"get\",[\"challenge\",\"instruction\"]]]]],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"challenge\",\"illustrationUrl\"]]],null,4],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isAssessmentChallengeTypeQcm\"]]],null,3],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isAssessmentChallengeTypeQcu\"]]],null,2],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isAssessmentChallengeTypeQroc\"]]],null,1],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isAssessmentChallengeTypeQrocmInd\"]]],null,0],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"routable-modal--footer\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"comparison-window__feedback-panel\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"feedback-panel\"],[[\"get\",[\"answer\"]]],null],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"comparison-window__corrected-answers comparison-window__corrected-answers--qrocm\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"qrocm-ind-solution-panel\"],null,[[\"answer\",\"solution\",\"challenge\"],[[\"get\",[\"answer\"]],[\"get\",[\"solution\"]],[\"get\",[\"challenge\"]]]]],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"comparison-window__corrected-answers comparison-window__corrected-answers--qroc\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"qroc-solution-panel\"],null,[[\"answer\",\"solution\"],[[\"get\",[\"answer\"]],[\"get\",[\"solution\"]]]]],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"append\",[\"helper\",[\"qcu-solution-panel\"],null,[[\"challenge\",\"answer\",\"solution\"],[[\"get\",[\"challenge\"]],[\"get\",[\"answer\"]],[\"get\",[\"solution\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"append\",[\"helper\",[\"qcm-solution-panel\"],null,[[\"challenge\",\"answer\",\"solution\"],[[\"get\",[\"challenge\"]],[\"get\",[\"answer\"]],[\"get\",[\"solution\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel__row challenge-statement__illustration-section\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"challenge-statement__illustration\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"challenge\",\"illustrationUrl\"]]]]],[\"static-attr\",\"alt\",\"Illustration de l'épreuve\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"svg\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"unknown\",[\"resultItem\",\"color\"]]]]],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"width\",\"24\"],[\"static-attr\",\"height\",\"24\"],[\"static-attr\",\"viewBox\",\"0 0 24 24\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"dynamic-attr\",\"d\",[\"concat\",[[\"unknown\",[\"resultItem\",\"path\"]]]]],[\"dynamic-attr\",\"fill\",[\"concat\",[[\"unknown\",[\"resultItem\",\"color\"]]]]],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"svg\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"unknown\",[\"resultItem\",\"color\"]]]]],[\"static-attr\",\"width\",\"22\"],[\"static-attr\",\"height\",\"22\"],[\"static-attr\",\"viewBox\",\"0 0 24 25\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"flush-element\"],[\"open-element\",\"defs\",[]],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"dynamic-attr\",\"d\",[\"concat\",[[\"unknown\",[\"resultItem\",\"path\"]]]]],[\"static-attr\",\"id\",\"path-1\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"mask\",[]],[\"static-attr\",\"id\",\"mask-2\"],[\"static-attr\",\"maskContentUnits\",\"userSpaceOnUse\"],[\"static-attr\",\"maskUnits\",\"objectBoundingBox\"],[\"static-attr\",\"x\",\"0\"],[\"static-attr\",\"y\",\"0\"],[\"static-attr\",\"width\",\"24\"],[\"static-attr\",\"height\",\"24\"],[\"static-attr\",\"fill\",\"white\"],[\"flush-element\"],[\"open-element\",\"use\",[]],[\"static-attr\",\"xlink:href\",\"#path-1\",\"http://www.w3.org/1999/xlink\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"Résultats\"],[\"static-attr\",\"stroke\",\"none\"],[\"static-attr\",\"stroke-width\",\"1\"],[\"static-attr\",\"fill\",\"none\"],[\"static-attr\",\"fill-rule\",\"evenodd\"],[\"flush-element\"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"test-fin-1\"],[\"static-attr\",\"transform\",\"translate(-1155.000000, -532.000000)\"],[\"static-attr\",\"stroke\",\"#FFBE00\"],[\"static-attr\",\"stroke-width\",\"14\"],[\"flush-element\"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"Group3\"],[\"static-attr\",\"transform\",\"translate(226.000000, 504.000000)\"],[\"flush-element\"],[\"open-element\",\"use\",[]],[\"static-attr\",\"id\",\"Shape-Copy-3\"],[\"static-attr\",\"mask\",\"url(#mask-2)\"],[\"static-attr\",\"xlink:href\",\"#path-1\",\"http://www.w3.org/1999/xlink\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"close-button-container\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"fermer\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"width\",\"24\"],[\"static-attr\",\"height\",\"24\"],[\"static-attr\",\"viewBox\",\"0 0 24 27\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z\"],[\"static-attr\",\"fill\",\"white\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/comparison-window.hbs" } });
});
define("pix-live/templates/components/corner-ribbon", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "iPqZz3Yr", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"corner-ribbon-wrapper\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"corner-ribbon\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ribbon\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"https://github.com/sgmap/pix\"],[\"flush-element\"],[\"text\",\"BÊTA\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/corner-ribbon.hbs" } });
});
define("pix-live/templates/components/course-banner", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "tZCs2NTg", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"course-banner__container\"],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"course-banner__name\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"course\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"withHomeLink\"]]],null,1],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Retour à la liste des tests\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"block\",[\"link-to\"],[\"index\"],[[\"class\"],[\"course-banner__home-link\"]],0],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/course-banner.hbs" } });
});
define("pix-live/templates/components/course-item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "iGLBVMJS", "block": "{\"statements\":[[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"course-item__picture\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"imageUrl\"]]]]],[\"static-attr\",\"alt\",\"\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"course-item__content\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"course-item__name\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"course\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"course-item__description\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"course\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"course-item__challenges-number\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"course\",\"challenges\",\"length\"]],false],[\"text\",\" épreuves\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"text\",\"  \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"course-item__begin-button\"],[\"static-attr\",\"style\",\"cursor: pointer;\"],[\"dynamic-attr\",\"title\",[\"concat\",[\"Commencer le test \\\"\",[\"unknown\",[\"course\",\"name\"]],\"\\\"\"]]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"startCourse\",[\"get\",[\"course\"]]]],[\"flush-element\"],[\"text\",\"\\n    Commencer\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/course-item.hbs" } });
});
define("pix-live/templates/components/course-list", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "RRuKeP8J", "block": "{\"statements\":[[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"course-list__ul\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"filteredCourses\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"modal-mobile\"]],false],[\"text\",\"\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"course-list__li animated fadeIn\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"course-item\"],null,[[\"course\",\"startCourse\"],[[\"get\",[\"course\"]],\"startCourse\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"course\"]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/course-list.hbs" } });
});
define("pix-live/templates/components/feature-item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "R2lmOB4g", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"feature-item__icon-container\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"feature-item__icon\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/icon-\",[\"unknown\",[\"feature\",\"icon\"]],\".svg\"]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"feature-item__title\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"feature\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"feature-item__description\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"feature\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/feature-item.hbs" } });
});
define("pix-live/templates/components/feature-list", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "M/QAlCMq", "block": "{\"statements\":[[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"feature-list__ul\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"features\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"feature-list__li\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"feature-item\"],null,[[\"feature\"],[[\"get\",[\"feature\"]]]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"feature\"]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/feature-list.hbs" } });
});
define("pix-live/templates/components/feedback-panel", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "lzXD5PBH", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"feedback-panel\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isFormClosed\"]]],null,4,3],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"feedback-panel__view feedback-panel__view--mercix\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Votre commentaire a bien été transmis à l’équipe du projet PIX.\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Mercix !\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"alert alert-danger\"],[\"static-attr\",\"role\",\"alert\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"append\",[\"unknown\",[\"error\"]],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"feedback-panel__view feedback-panel__view--form\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"feedback-panel__form-title\"],[\"flush-element\"],[\"text\",\"Signaler un problème\"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"feedback-panel__form-description\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"PIX est à l’écoute de vos remarques pour améliorer les épreuves proposées #personnenestparfait.\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Vous pouvez nous laisser votre adresse mail si vous le souhaitez. Vos coordonnées ne feront l’objet d’aucune transmission à des tiers.\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"feedback-panel__form-wrapper\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"form\",[]],[\"static-attr\",\"class\",\"feedback-panel__form\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"feedback-panel__group\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"append\",[\"helper\",[\"input\"],null,[[\"class\",\"type\",\"value\",\"placeholder\"],[\"feedback-panel__field feedback-panel__field--email\",\"text\",[\"get\",[\"email\"]],\"Votre email (optionnel)\"]]],false],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"feedback-panel__group\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"append\",[\"helper\",[\"textarea\"],null,[[\"class\",\"value\",\"placeholder\",\"rows\"],[\"feedback-panel__field feedback-panel__field--content\",[\"get\",[\"content\"]],\"Votre message\",6]]],false],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"error\"]]],null,1],[\"text\",\"          \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"feedback-panel__button feedback-panel__button--send\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"sendFeedback\"]],[\"flush-element\"],[\"text\",\"Envoyer\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"feedback-panel__button feedback-panel__button--cancel\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"cancelFeedback\"]],[\"flush-element\"],[\"text\",\"Annuler\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"isFormOpened\"]]],null,2,0]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"feedback-panel__view feedback-panel__view--link\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"feedback-panel__open-link\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"openFeedbackForm\"]],[\"flush-element\"],[\"text\",\"Signaler un problème\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/feedback-panel.hbs" } });
});
define("pix-live/templates/components/follower-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Qvvbl6/5", "block": "{\"statements\":[[\"open-element\",\"form\",[]],[\"static-attr\",\"class\",\"follower__form\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"follower__form-container\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"follower__form-item follower__form-input-container\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"class\",\"placeholder\",\"type\",\"value\"],[\"follower-email\",\"Saisissez votre email\",\"email\",[\"get\",[\"followerEmail\"]]]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"follower__form-item\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"follower-form__button \",[\"helper\",[\"if\"],[[\"get\",[\"isPending\"]],\"follower-form__button--pending\",\"follower-form__button--default\"],null]]]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"submit\"],[[\"allowedKeys\"],[\"enter\"]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"submitButtonText\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"hasMessage\"]]],null,2],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"style\",\"width:12px;height:15px\"],[\"static-attr\",\"viewBox\",\"0 0 24 24\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"fill\",\"#30d5b0\"],[\"static-attr\",\"d\",\"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"style\",\"width:15px;height:15px;\"],[\"static-attr\",\"viewBox\",\"0 0 24 24\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"fill\",\"#f45c00\"],[\"static-attr\",\"d\",\"M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"follower-info-message \",[\"unknown\",[\"messageClassName\"]]]]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"hasError\"]]],null,1,0],[\"text\",\"    \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"infoMessage\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/follower-form.hbs" } });
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
  exports["default"] = Ember.HTMLBars.template({ "id": "eh6OdcN2", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results\"],[\"static-attr\",\"id\",\"assessment-results\"],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"append\",[\"helper\",[\"course-banner\"],null,[[\"course\"],[[\"get\",[\"assessment\",\"course\"]]]]],false],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results-title\"],[\"flush-element\"],[\"text\",\"\\n      Vos résultats\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results-list\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"assessment\",\"answers\"]]],null,16],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results-link\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"index\"],[[\"class\",\"tagName\"],[\"assessment-results-link-home\",\"button\"]],0],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"assessment-results-back\"],[\"flush-element\"],[\"text\",\"Revenir à la liste des tests\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"assessment-results-result-correction-button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"route-action\"],[\"openComparison\",[\"get\",[\"assessment\",\"id\"]],[\"get\",[\"answer\",\"id\"]],[\"helper\",[\"add\"],[[\"get\",[\"index\"]],1],null]],null]]],[\"flush-element\"],[\"text\",\" RÉPONSE \"],[\"close-element\"],[\"text\",\"\\n      \"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"answer\",\"challenge\",\"type\"]],\"QROCM-ind\"],null]],null,1]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"assessment-results-result-correction-button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"route-action\"],[\"openComparison\",[\"get\",[\"assessment\",\"id\"]],[\"get\",[\"answer\",\"id\"]],[\"helper\",[\"add\"],[[\"get\",[\"index\"]],1],null]],null]]],[\"flush-element\"],[\"text\",\" RÉPONSE \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"answer\",\"challenge\",\"type\"]],\"QROC\"],null]],null,3,2]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"assessment-results-result-correction-button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"route-action\"],[\"openComparison\",[\"get\",[\"assessment\",\"id\"]],[\"get\",[\"answer\",\"id\"]],[\"helper\",[\"add\"],[[\"get\",[\"index\"]],1],null]],null]]],[\"flush-element\"],[\"text\",\" RÉPONSE \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"       \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"data-toggle\",\"tooltip\"],[\"static-attr\",\"data-placement\",\"top\"],[\"static-attr\",\"data-lines\",\"2\"],[\"static-attr\",\"title\",\"Correction automatique en cours de développement ;)\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"width\",\"24\"],[\"static-attr\",\"height\",\"24\"],[\"static-attr\",\"viewBox\",\"0 0 24 24\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z\"],[\"static-attr\",\"fill\",\"#446eff\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"data-toggle\",\"tooltip\"],[\"static-attr\",\"data-placement\",\"top\"],[\"static-attr\",\"title\",\"Temps dépassé\"],[\"flush-element\"],[\"text\",\"\\n         \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"width\",\"24\"],[\"static-attr\",\"height\",\"24\"],[\"static-attr\",\"viewBox\",\"0 0 24 24\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M11,17A1,1 0 0,0 12,18A1,1 0 0,0 13,17A1,1 0 0,0 12,16A1,1 0 0,0 11,17M11,3V7H13V5.08C16.39,5.57 19,8.47 19,12A7,7 0 0,1 12,19A7,7 0 0,1 5,12C5,10.32 5.59,8.78 6.58,7.58L12,13L13.41,11.59L6.61,4.79V4.81C4.42,6.45 3,9.05 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M18,12A1,1 0 0,0 17,11A1,1 0 0,0 16,12A1,1 0 0,0 17,13A1,1 0 0,0 18,12M6,12A1,1 0 0,0 7,13A1,1 0 0,0 8,12A1,1 0 0,0 7,11A1,1 0 0,0 6,12Z\"],[\"static-attr\",\"fill\",\"red\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n       \"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"answer\",\"isResultTimedOut\"]]],null,7,6]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"data-toggle\",\"tooltip\"],[\"static-attr\",\"data-placement\",\"top\"],[\"static-attr\",\"title\",\"Réponse partielle\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"width\",\"22\"],[\"static-attr\",\"height\",\"22\"],[\"static-attr\",\"viewBox\",\"0 0 24 25\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"flush-element\"],[\"open-element\",\"defs\",[]],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M941,28.7873535 C944.182598,28.7873535 947.234845,30.0516356 949.485281,32.3020721 C951.735718,34.5525087 953,37.6047556 953,40.7873535 C953,47.4147705 947.627417,52.7873535 941,52.7873535 C937.817402,52.7873535 934.765155,51.5230714 932.514719,49.2726349 C930.264282,47.0221983 929,43.9699514 929,40.7873535 C929,37.6047556 930.264282,34.5525087 932.514719,32.3020721 C934.765155,30.0516356 937.817402,28.7873535 941,28.7873535 L941,28.7873535 Z\"],[\"static-attr\",\"id\",\"path-1\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"mask\",[]],[\"static-attr\",\"id\",\"mask-2\"],[\"static-attr\",\"maskContentUnits\",\"userSpaceOnUse\"],[\"static-attr\",\"maskUnits\",\"objectBoundingBox\"],[\"static-attr\",\"x\",\"0\"],[\"static-attr\",\"y\",\"0\"],[\"static-attr\",\"width\",\"24\"],[\"static-attr\",\"height\",\"24\"],[\"static-attr\",\"fill\",\"white\"],[\"flush-element\"],[\"open-element\",\"use\",[]],[\"static-attr\",\"xlink:href\",\"#path-1\",\"http://www.w3.org/1999/xlink\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"Résultats\"],[\"static-attr\",\"stroke\",\"none\"],[\"static-attr\",\"stroke-width\",\"1\"],[\"static-attr\",\"fill\",\"none\"],[\"static-attr\",\"fill-rule\",\"evenodd\"],[\"flush-element\"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"test-fin-1\"],[\"static-attr\",\"transform\",\"translate(-1155.000000, -532.000000)\"],[\"static-attr\",\"stroke\",\"#FFBE00\"],[\"static-attr\",\"stroke-width\",\"14\"],[\"flush-element\"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"Group3\"],[\"static-attr\",\"transform\",\"translate(226.000000, 504.000000)\"],[\"flush-element\"],[\"open-element\",\"use\",[]],[\"static-attr\",\"id\",\"Shape-Copy-3\"],[\"static-attr\",\"mask\",\"url(#mask-2)\"],[\"static-attr\",\"xlink:href\",\"#path-1\",\"http://www.w3.org/1999/xlink\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"answer\",\"isResultPartiallyOk\"]]],null,9,8]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"data-toggle\",\"tooltip\"],[\"static-attr\",\"data-placement\",\"top\"],[\"static-attr\",\"title\",\"Sans réponse\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"width\",\"24\"],[\"static-attr\",\"height\",\"24\"],[\"static-attr\",\"viewBox\",\"0 0 24 24\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M8,8L13,12L8,16M14,8H16V16H14\"],[\"static-attr\",\"fill\",\"#3e4149\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"answer\",\"isResultWithoutAnswer\"]]],null,11,10]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"data-toggle\",\"tooltip\"],[\"static-attr\",\"data-placement\",\"top\"],[\"static-attr\",\"title\",\"Réponse incorrecte\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"width\",\"24px\"],[\"static-attr\",\"height\",\"24px\"],[\"static-attr\",\"viewBox\",\"0 0 24 24\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z\"],[\"static-attr\",\"fill\",\"#ff4600\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"answer\",\"isResultNotOk\"]]],null,13,12]],\"locals\":[]},{\"statements\":[[\"text\",\"         \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"data-toggle\",\"tooltip\"],[\"static-attr\",\"data-placement\",\"top\"],[\"static-attr\",\"title\",\"Réponse correcte\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"width\",\"24\"],[\"static-attr\",\"height\",\"24\"],[\"static-attr\",\"viewBox\",\"0 0 24 24\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z\"],[\"static-attr\",\"fill\",\"#30d5b0\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results-list-item assessment-results-result\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results-result-index\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"add\"],[[\"get\",[\"index\"]],1],null],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results-result-line\"],[\"flush-element\"],[\"text\",\"\\n\\n        \"],[\"close-element\"],[\"text\",\"\\n\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results-result-img\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"answer\",\"isResultOk\"]]],null,15,14],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"assessment-results-result-instruction\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"strip-instruction\"],[[\"helper\",[\"convert-to-html\"],[[\"get\",[\"answer\",\"challenge\",\"instruction\"]]],null]],null],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"js-correct-answer assessment-results-result-correction\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"answer\",\"challenge\",\"type\"]],\"QCM\"],null]],null,5,4],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"answer\",\"index\"]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/get-result.hbs" } });
});
define("pix-live/templates/components/modal-mobile", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "6wYyR6Lc", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-mobile\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal fade js-modal-mobile\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"static-attr\",\"role\",\"dialog\"],[\"static-attr\",\"id\",\"js-modal-mobile\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-dialog\"],[\"static-attr\",\"role\",\"document\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-content\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-header\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"modal-title\"],[\"flush-element\"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"width\",\"50\"],[\"static-attr\",\"height\",\"50\"],[\"static-attr\",\"viewBox\",\"1 2 21 21\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M13,10V6H11V10H13M13,14V12H11V14H13Z\"],[\"static-attr\",\"fill\",\"#ffbe00\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-body\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Certaines épreuves PIX peuvent être difficiles à réussir sur mobile. Pour une meilleure expérience, nous vous conseillons de passer ce test sur un ordinateur.\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-footer\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-button-container\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"btn btn-primary modal-mobile__confirm-button\"],[\"static-attr\",\"data-confirm\",\"modal\"],[\"flush-element\"],[\"text\",\"Continuer\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-button-container\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"nohref\",\"\"],[\"static-attr\",\"data-dismiss\",\"modal\"],[\"static-attr\",\"class\",\"modal-mobile__dismiss-link\"],[\"flush-element\"],[\"text\",\"Revenir à l’accueil\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/modal-mobile.hbs" } });
});
define("pix-live/templates/components/navbar-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ceZU7PiT", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"navbar-header__container\"],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"comment\",\" Logo (left) \"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"navbar-header-logo\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"pix-logo\"]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"comment\",\" Links (right) \"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"navbar-header-links\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"navbar-header-links__list\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"navbar-header-links__item\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"block\",[\"link-to\"],[\"project\"],[[\"class\"],[\"navbar-header-links__link navbar-header-links__link--project\"]],1],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"navbar-header-links__item\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"block\",[\"link-to\"],[\"competences\"],[[\"class\"],[\"navbar-header-links__link navbar-header-links__link--competences\"]],0],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Compétences\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Projet\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/navbar-header.hbs" } });
});
define("pix-live/templates/components/pix-logo", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "w0iHcMkY", "block": "{\"statements\":[[\"block\",[\"link-to\"],[\"index\"],[[\"class\",\"title\"],[\"pix-logo__link\",\"Lien vers la page d'accueil\"]],0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"pix-logo__image\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/pix-logo.svg\"]]],[\"static-attr\",\"alt\",\"Logo Pix\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"pix-logo__beta\"],[\"flush-element\"],[\"text\",\"Bêta\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/pix-logo.hbs" } });
});
define("pix-live/templates/components/progress-bar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "xtufqd1I", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"progress-bar progress-bar-info\"],[\"static-attr\",\"role\",\"progressbar\"],[\"dynamic-attr\",\"aria-valuenow\",[\"unknown\",[\"progress\",\"currentStep\"]],null],[\"static-attr\",\"aria-valuemin\",\"0\"],[\"static-attr\",\"aria-valuemax\",\"100\"],[\"dynamic-attr\",\"style\",[\"unknown\",[\"barStyle\"]],null],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"progress\",\"currentStep\"]],false],[\"text\",\" / \"],[\"append\",[\"unknown\",[\"progress\",\"maxStep\"]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/progress-bar.hbs" } });
});
define("pix-live/templates/components/qcm-proposals", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "61r7Pfxk", "block": "{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"labeledCheckboxes\"]]],null,0],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"proposal-paragraph\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"text\",\"  \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"type\",\"checkbox\"],[\"static-attr\",\"class\",\"input-checkbox-proposal\"],[\"dynamic-attr\",\"id\",[\"concat\",[[\"helper\",[\"inc\"],[[\"get\",[\"index\"]]],null]]]],[\"dynamic-attr\",\"checked\",[\"unknown\",[\"labeledCheckbox\",\"1\"]],null],[\"dynamic-attr\",\"name\",[\"concat\",[[\"helper\",[\"inc\"],[[\"get\",[\"index\"]]],null]]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"text\",\"  \"],[\"open-element\",\"label\",[]],[\"dynamic-attr\",\"for\",[\"concat\",[[\"helper\",[\"inc\"],[[\"get\",[\"index\"]]],null]]]],[\"static-attr\",\"class\",\"label-checkbox-proposal--qcm\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"text\",\"    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"proposal-text\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"labeledCheckbox\",\"0\"]],false],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"text\",\"    \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"class\",\"checkbox-on picture-checkbox-proposal--qcm\"],[\"static-attr\",\"width\",\"18px\"],[\"static-attr\",\"height\",\"18px\"],[\"static-attr\",\"viewBox\",\"0 0 18 18\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"flush-element\"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"Styles\"],[\"static-attr\",\"stroke\",\"none\"],[\"static-attr\",\"stroke-width\",\"1\"],[\"static-attr\",\"fill\",\"none\"],[\"static-attr\",\"fill-rule\",\"evenodd\"],[\"flush-element\"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"Icons\"],[\"static-attr\",\"transform\",\"translate(-253.000000, -89.000000)\"],[\"static-attr\",\"fill\",\"#3D68FF\"],[\"flush-element\"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"icontest--checkbox-enabled\"],[\"static-attr\",\"transform\",\"translate(252.000000, 88.000000)\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M8,15 L3,10 L4.41,8.58 L8,12.17 L15.59,4.58 L17,6 L8,15 Z M17,1 L3,1 C1.89,1 1,1.89 1,3 L1,17 C1,18.1045695 1.8954305,19 3,19 L17,19 C18.1045695,19 19,18.1045695 19,17 L19,3 C19,1.89 18.1,1 17,1 Z\"],[\"static-attr\",\"id\",\"Shape\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"class\",\"checkbox-off picture-checkbox-proposal--qcm\"],[\"static-attr\",\"width\",\"18px\"],[\"static-attr\",\"height\",\"18px\"],[\"static-attr\",\"viewBox\",\"0 0 18 18\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"flush-element\"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"Styles\"],[\"static-attr\",\"stroke\",\"none\"],[\"static-attr\",\"stroke-width\",\"1\"],[\"static-attr\",\"fill\",\"none\"],[\"static-attr\",\"fill-rule\",\"evenodd\"],[\"flush-element\"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"Icons\"],[\"static-attr\",\"transform\",\"translate(-213.000000, -89.000000)\"],[\"static-attr\",\"fill\",\"#7D808B\"],[\"flush-element\"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"icontest--checkbox-off\"],[\"static-attr\",\"transform\",\"translate(212.000000, 88.000000)\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M17,1 L3,1 C1.89,1 1,1.89 1,3 L1,17 C1,18.1045695 1.8954305,19 3,19 L17,19 C18.1045695,19 19,18.1045695 19,17 L19,3 C19,1.89 18.1,1 17,1 L17,1 Z M17,3 L17,17 L3,17 L3,3 L17,3 Z\"],[\"static-attr\",\"id\",\"Shape\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"labeledCheckbox\",\"index\"]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/qcm-proposals.hbs" } });
});
define("pix-live/templates/components/qcm-solution-panel", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "94J5IRhX", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"qcm-panel__proposals rounded-panel\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel__row qcm-panel__proposal-list\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"labeledCheckboxes\"]]],null,2],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"class\",\"checkbox-disabled-off qcm-proposal-label__checkbox-picture\"],[\"static-attr\",\"width\",\"18px\"],[\"static-attr\",\"height\",\"18px\"],[\"static-attr\",\"viewBox\",\"0 0 18 18\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"Styles\"],[\"static-attr\",\"stroke\",\"none\"],[\"static-attr\",\"stroke-width\",\"1\"],[\"static-attr\",\"fill\",\"none\"],[\"static-attr\",\"fill-rule\",\"evenodd\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"Icons\"],[\"static-attr\",\"transform\",\"translate(-213.000000, -89.000000)\"],[\"static-attr\",\"fill\",\"#7D808B\"],[\"flush-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"icontest--checkbox-off\"],[\"static-attr\",\"transform\",\"translate(212.000000, 88.000000)\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M17,1 L3,1 C1.89,1 1,1.89 1,3 L1,17 C1,18.1045695 1.8954305,19 3,19 L17,19 C18.1045695,19 19,18.1045695 19,17 L19,3 C19,1.89 18.1,1 17,1 L17,1 Z M17,3 L17,17 L3,17 L3,3 L17,3 Z\"],[\"static-attr\",\"id\",\"Shape\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"class\",\"checkbox-disabled-on qcm-proposal-label__checkbox-picture\"],[\"static-attr\",\"width\",\"18px\"],[\"static-attr\",\"height\",\"18px\"],[\"static-attr\",\"viewBox\",\"0 0 18 18\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"Styles\"],[\"static-attr\",\"stroke\",\"none\"],[\"static-attr\",\"stroke-width\",\"1\"],[\"static-attr\",\"fill\",\"none\"],[\"static-attr\",\"fill-rule\",\"evenodd\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"Icons\"],[\"static-attr\",\"transform\",\"translate(-293.000000, -89.000000)\"],[\"static-attr\",\"fill\",\"#7D808B\"],[\"flush-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"icontest--checkbox-disabled\"],[\"static-attr\",\"transform\",\"translate(292.000000, 88.000000)\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M8,15 L3,10 L4.41,8.58 L8,12.17 L15.59,4.58 L17,6 L8,15 Z M17,1 L3,1 C1.89,1 1,1.89 1,3 L1,17 C1,18.1045695 1.8954305,19 3,19 L17,19 C18.1045695,19 19,18.1045695 19,17 L19,3 C19,1.89 18.1,1 17,1 Z\"],[\"static-attr\",\"id\",\"Shape\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"qcm-panel__proposal-item\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"class\",\"qcm-panel__proposal-label qcm-proposal-label\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"labeledCheckbox\",\"1\"]]],null,1,0],[\"text\",\"          \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"qcm-proposal-label__oracle\"],[\"dynamic-attr\",\"data-goodness\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"get\"],[[\"get\",[\"solutionArray\"]],[\"helper\",[\"concat\"],[[\"get\",[\"index\"]]],null]],null],\"good\",\"bad\"],null]]]],[\"dynamic-attr\",\"data-checked\",[\"helper\",[\"if\"],[[\"get\",[\"labeledCheckbox\",\"1\"]],\"yes\",\"no\"],null],null],[\"flush-element\"],[\"text\",\"\\n            \"],[\"append\",[\"unknown\",[\"labeledCheckbox\",\"0\"]],false],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"labeledCheckbox\",\"index\"]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/qcm-solution-panel.hbs" } });
});
define("pix-live/templates/components/qcu-proposals", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "0PF8f8Mr", "block": "{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"labeledRadios\"]]],null,0],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"proposal-paragraph\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"text\",\"  \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"type\",\"radio\"],[\"static-attr\",\"class\",\"input-radio-proposal\"],[\"dynamic-attr\",\"name\",[\"concat\",[[\"helper\",[\"inc\"],[[\"get\",[\"index\"]]],null]]]],[\"dynamic-attr\",\"checked\",[\"unknown\",[\"labeledRadio\",\"1\"]],null],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"text\",\"  \"],[\"open-element\",\"label\",[]],[\"dynamic-attr\",\"for\",[\"concat\",[[\"helper\",[\"inc\"],[[\"get\",[\"index\"]]],null]]]],[\"dynamic-attr\",\"onclick\",[\"helper\",[\"action\"],[[\"get\",[null]],\"radioClicked\",[\"get\",[\"index\"]]],null],null],[\"static-attr\",\"class\",\"label-checkbox-proposal--qcu\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"text\",\"    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"proposal-text\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"labeledRadio\",\"0\"]],false],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"text\",\"    \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"class\",\"radio-on picture-checkbox-proposal--qcu\"],[\"static-attr\",\"width\",\"18px\"],[\"static-attr\",\"height\",\"18px\"],[\"static-attr\",\"viewBox\",\"0 0 18 18\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"flush-element\"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"Styles\"],[\"static-attr\",\"stroke\",\"none\"],[\"static-attr\",\"stroke-width\",\"1\"],[\"static-attr\",\"fill\",\"none\"],[\"static-attr\",\"fill-rule\",\"evenodd\"],[\"flush-element\"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"Icons\"],[\"static-attr\",\"transform\",\"translate(-133.000000, -89.000000)\"],[\"static-attr\",\"fill\",\"#3D68FF\"],[\"flush-element\"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"icontest--radio-enabled\"],[\"static-attr\",\"transform\",\"translate(132.000000, 88.000000)\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M10,1 C12.3869484,1 14.6761336,1.94821156 16.363961,3.63603897 C18.0517884,5.32386638 19,7.61305159 19,10 C19,14.9705627 14.9705627,19 10,19 C7.61305159,19 5.32386638,18.0517884 3.63603897,16.363961 C1.94821156,14.6761336 1,12.3869484 1,10 C1,7.61305159 1.94821156,5.32386638 3.63603897,3.63603897 C5.32386638,1.94821156 7.61305159,1 10,1 L10,1 Z M9.1,14.05 L15.4,7.75 L14.131,6.481 L9.1,11.503 L6.319,8.731 L5.05,10 L9.1,14.05 Z\"],[\"static-attr\",\"id\",\"Shape\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"class\",\"radio-off picture-checkbox-proposal--qcu\"],[\"static-attr\",\"width\",\"18px\"],[\"static-attr\",\"height\",\"18px\"],[\"static-attr\",\"viewBox\",\"0 0 18 18\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"flush-element\"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"Page-1\"],[\"static-attr\",\"stroke\",\"none\"],[\"static-attr\",\"stroke-width\",\"1\"],[\"static-attr\",\"fill\",\"none\"],[\"static-attr\",\"fill-rule\",\"evenodd\"],[\"flush-element\"],[\"open-element\",\"circle\",[]],[\"static-attr\",\"id\",\"Oval\"],[\"static-attr\",\"stroke\",\"#7D808B\"],[\"static-attr\",\"stroke-width\",\"2\"],[\"static-attr\",\"cx\",\"9\"],[\"static-attr\",\"cy\",\"9\"],[\"static-attr\",\"r\",\"8\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"labeledRadio\",\"index\"]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/qcu-proposals.hbs" } });
});
define("pix-live/templates/components/qcu-solution-panel", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "p6+TDgz5", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"qcu-panel__proposals rounded-panel\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel__row qcu-panel__proposal-list\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"labeledRadios\"]]],null,2],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"class\",\"radio-off picture-radio-proposal--qcu\"],[\"static-attr\",\"width\",\"18px\"],[\"static-attr\",\"height\",\"18px\"],[\"static-attr\",\"viewBox\",\"0 0 18 18\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"Page-1\"],[\"static-attr\",\"stroke\",\"none\"],[\"static-attr\",\"stroke-width\",\"1\"],[\"static-attr\",\"fill\",\"none\"],[\"static-attr\",\"fill-rule\",\"evenodd\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"circle\",[]],[\"static-attr\",\"id\",\"Oval\"],[\"static-attr\",\"stroke\",\"#7D808B\"],[\"static-attr\",\"stroke-width\",\"2\"],[\"static-attr\",\"cx\",\"9\"],[\"static-attr\",\"cy\",\"9\"],[\"static-attr\",\"r\",\"8\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"class\",\"radio-on picture-radio-proposal--qcu\"],[\"static-attr\",\"width\",\"18px\"],[\"static-attr\",\"height\",\"18px\"],[\"static-attr\",\"viewBox\",\"0 0 18 18\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"Styles\"],[\"static-attr\",\"stroke\",\"none\"],[\"static-attr\",\"stroke-width\",\"1\"],[\"static-attr\",\"fill\",\"none\"],[\"static-attr\",\"fill-rule\",\"evenodd\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"Icons\"],[\"static-attr\",\"transform\",\"translate(-133.000000, -89.000000)\"],[\"static-attr\",\"fill\",\"#7D808B\"],[\"flush-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"icontest--radio-enabled\"],[\"static-attr\",\"transform\",\"translate(132.000000, 88.000000)\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M10,1 C12.3869484,1 14.6761336,1.94821156 16.363961,3.63603897 C18.0517884,5.32386638 19,7.61305159 19,10 C19,14.9705627 14.9705627,19 10,19 C7.61305159,19 5.32386638,18.0517884 3.63603897,16.363961 C1.94821156,14.6761336 1,12.3869484 1,10 C1,7.61305159 1.94821156,5.32386638 3.63603897,3.63603897 C5.32386638,1.94821156 7.61305159,1 10,1 L10,1 Z M9.1,14.05 L15.4,7.75 L14.131,6.481 L9.1,11.503 L6.319,8.731 L5.05,10 L9.1,14.05 Z\"],[\"static-attr\",\"id\",\"Shape\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"qcu-panel__proposal-item\"],[\"flush-element\"],[\"text\",\"\\n\\n        \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"class\",\"qcu-panel__proposal-label qcu-proposal-label\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"labeledItemRadio\",\"1\"]]],null,1,0],[\"text\",\"\\n          \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"qcu-proposal-label__oracle\"],[\"dynamic-attr\",\"data-goodness\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"get\"],[[\"get\",[\"solutionArray\"]],[\"helper\",[\"concat\"],[[\"get\",[\"index\"]]],null]],null],\"good\",\"bad\"],null]]]],[\"dynamic-attr\",\"data-checked\",[\"helper\",[\"if\"],[[\"get\",[\"labeledItemRadio\",\"1\"]],\"yes\",\"no\"],null],null],[\"flush-element\"],[\"text\",\"\\n            \"],[\"append\",[\"unknown\",[\"labeledItemRadio\",\"0\"]],false],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"labeledItemRadio\",\"index\"]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/qcu-solution-panel.hbs" } });
});
define("pix-live/templates/components/qroc-proposal", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "9vnSLfnx", "block": "{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"blocks\"]]],null,3]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"class\",\"challenge-response__proposal-input\"],[\"static-attr\",\"type\",\"text\"],[\"dynamic-attr\",\"name\",[\"unknown\",[\"block\",\"input\"]],null],[\"dynamic-attr\",\"placeholder\",[\"unknown\",[\"block\",\"placeholder\"]],null],[\"dynamic-attr\",\"value\",[\"concat\",[[\"unknown\",[\"userAnswer\"]]]]],[\"static-attr\",\"data-uid\",\"qroc-proposal-uid\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"block\",\"text\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"block\",\"text\"]]],null,2],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"block\",\"input\"]]],null,1],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"block\",\"breakline\"]]],null,0],[\"text\",\"\\n\"]],\"locals\":[\"block\"]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/qroc-proposal.hbs" } });
});
define("pix-live/templates/components/qroc-solution-panel", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "nj/AkbKE", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"correction-qroc-box rounded-panel\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel__row \"],[\"flush-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"correction-qroc-box__answer\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"input\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"unknown\",[\"inputClass\"]],\" correction-qroc-box--answer__input\"]]],[\"dynamic-attr\",\"value\",[\"concat\",[[\"unknown\",[\"answerToDisplay\"]]]]],[\"static-attr\",\"disabled\",\"\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"unless\"],[[\"get\",[\"isResultOk\"]]],null,0],[\"text\",\"\\n\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"correction-qroc-box__solution\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"style\",\"width:18px;height:18px\"],[\"static-attr\",\"viewBox\",\"0 0 24 24\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"fill\",\"#12caa1\"],[\"static-attr\",\"d\",\"M5,21A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5M6,13H14.5L11,16.5L12.42,17.92L18.34,12L12.42,6.08L11,7.5L14.5,11H6V13Z\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"correction-qroc-box__solution-text\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"solutionToDisplay\"]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/qroc-solution-panel.hbs" } });
});
define("pix-live/templates/components/qrocm-ind-solution-panel", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "SnEcsAvD", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"qrocm-solution-panel rounded-panel\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel__row \"],[\"flush-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"inputFields\"]]],null,1],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"              \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"correction-qrocm__solution\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"style\",\"width:18px;height:18px\"],[\"static-attr\",\"viewBox\",\"0 0 24 24\"],[\"flush-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"fill\",\"#12caa1\"],[\"static-attr\",\"d\",\"M5,21A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5M6,13H14.5L11,16.5L12.42,17.92L18.34,12L12.42,6.08L11,7.5L14.5,11H6V13Z\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"correction-qrocm__solution-text\"],[\"flush-element\"],[\"text\",\"\\n                  \"],[\"append\",[\"unknown\",[\"field\",\"solution\"]],false],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"correction-qrocm\"],[\"flush-element\"],[\"text\",\"\\n\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"correction-qrocm__label\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"field\",\"label\"]],false],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"correction-qrocm__answer-solution\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"correction-qrocm__answer\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"input\",[]],[\"dynamic-attr\",\"value\",[\"concat\",[[\"unknown\",[\"field\",\"answer\"]]]]],[\"dynamic-attr\",\"class\",[\"concat\",[\"correction-qrocm__answer-input \",[\"unknown\",[\"field\",\"inputClass\"]]]]],[\"static-attr\",\"disabled\",\"\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"field\",\"emptyOrWrongAnswer\"]]],null,0],[\"text\",\"          \"],[\"close-element\"],[\"text\",\"\\n\\n        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"field\"]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/qrocm-ind-solution-panel.hbs" } });
});
define("pix-live/templates/components/qrocm-proposal", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "VwVjOavh", "block": "{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"blocks\"]]],null,3]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\" \\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"class\",\"challenge-response__proposal-input\"],[\"static-attr\",\"type\",\"text\"],[\"dynamic-attr\",\"name\",[\"unknown\",[\"block\",\"input\"]],null],[\"dynamic-attr\",\"placeholder\",[\"unknown\",[\"block\",\"placeholder\"]],null],[\"dynamic-attr\",\"value\",[\"helper\",[\"property-of\"],[[\"get\",[\"answersValue\"]],[\"get\",[\"block\",\"input\"]]],null],null],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"block\",\"text\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"block\",\"text\"]]],null,2],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"block\",\"input\"]]],null,1],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"block\",\"breakline\"]]],null,0],[\"text\",\"\\n\"]],\"locals\":[\"block\"]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/qrocm-proposal.hbs" } });
});
define("pix-live/templates/components/result-item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "9rB/OJG2", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"result-item__index\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"add\"],[[\"get\",[\"index\"]],1],null],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"result-item__item-line\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"result-item__icon\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"data-toggle\",\"tooltip\"],[\"static-attr\",\"data-placement\",\"top\"],[\"dynamic-attr\",\"title\",[\"concat\",[[\"unknown\",[\"resultItemContent\",\"title\"]]]]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"resultItemContent\",\"custom\"]]],null,2,1],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"result-item__instruction\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"strip-instruction\"],[[\"helper\",[\"convert-to-html\"],[[\"get\",[\"answer\",\"challenge\",\"instruction\"]]],null]],null],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"result-item__correction\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"validationImplementedForChallengeType\"]]],null,0],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"result-item__correction__button js-correct-answer\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"openComparisonPopin\"]],[\"flush-element\"],[\"text\",\" RÉPONSE\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"width\",\"24\"],[\"static-attr\",\"height\",\"24\"],[\"static-attr\",\"viewBox\",\"0 0 24 24\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"dynamic-attr\",\"d\",[\"concat\",[[\"unknown\",[\"resultItemContent\",\"path\"]]]]],[\"dynamic-attr\",\"fill\",[\"concat\",[[\"unknown\",[\"resultItemContent\",\"color\"]]]]],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"width\",\"22\"],[\"static-attr\",\"height\",\"22\"],[\"static-attr\",\"viewBox\",\"0 0 24 25\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"flush-element\"],[\"open-element\",\"defs\",[]],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"dynamic-attr\",\"d\",[\"concat\",[[\"unknown\",[\"resultItemContent\",\"path\"]]]]],[\"static-attr\",\"id\",\"path-1\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"mask\",[]],[\"static-attr\",\"id\",\"mask-2\"],[\"static-attr\",\"maskContentUnits\",\"userSpaceOnUse\"],[\"static-attr\",\"maskUnits\",\"objectBoundingBox\"],[\"static-attr\",\"x\",\"0\"],[\"static-attr\",\"y\",\"0\"],[\"static-attr\",\"width\",\"24\"],[\"static-attr\",\"height\",\"24\"],[\"static-attr\",\"fill\",\"white\"],[\"flush-element\"],[\"open-element\",\"use\",[]],[\"static-attr\",\"xlink:href\",\"#path-1\",\"http://www.w3.org/1999/xlink\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"Résultats\"],[\"static-attr\",\"stroke\",\"none\"],[\"static-attr\",\"stroke-width\",\"1\"],[\"static-attr\",\"fill\",\"none\"],[\"static-attr\",\"fill-rule\",\"evenodd\"],[\"flush-element\"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"test-fin-1\"],[\"static-attr\",\"transform\",\"translate(-1155.000000, -532.000000)\"],[\"static-attr\",\"stroke\",\"#FFBE00\"],[\"static-attr\",\"stroke-width\",\"14\"],[\"flush-element\"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"Group3\"],[\"static-attr\",\"transform\",\"translate(226.000000, 504.000000)\"],[\"flush-element\"],[\"open-element\",\"use\",[]],[\"static-attr\",\"id\",\"Shape-Copy-3\"],[\"static-attr\",\"mask\",\"url(#mask-2)\"],[\"static-attr\",\"xlink:href\",\"#path-1\",\"http://www.w3.org/1999/xlink\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/result-item.hbs" } });
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
  exports["default"] = Ember.HTMLBars.template({ "id": "CIdrWWlY", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"timeout-jauge\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"timeout-jauge-container\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"timeout-jauge-clock\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"hasFinished\"]]],null,1,0],[\"text\",\"      \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"timeout-jauge-remaining\"],[\"dynamic-attr\",\"data-spent\",[\"concat\",[[\"unknown\",[\"remainingSeconds\"]]]]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"unknown\",[\"remainingTime\"]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"timeout-jauge-progress\"],[\"dynamic-attr\",\"style\",[\"unknown\",[\"jaugeWidthStyle\"]],null],[\"flush-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"class\",\"svg-timeout-clock-black\"],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"width\",\"24\"],[\"static-attr\",\"height\",\"24\"],[\"static-attr\",\"viewBox\",\"0 0 24 24\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M11,17A1,1 0 0,0 12,18A1,1 0 0,0 13,17A1,1 0 0,0 12,16A1,1 0 0,0 11,17M11,3V7H13V5.08C16.39,5.57 19,8.47 19,12A7,7 0 0,1 12,19A7,7 0 0,1 5,12C5,10.32 5.59,8.78 6.58,7.58L12,13L13.41,11.59L6.61,4.79V4.81C4.42,6.45 3,9.05 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M18,12A1,1 0 0,0 17,11A1,1 0 0,0 16,12A1,1 0 0,0 17,13A1,1 0 0,0 18,12M6,12A1,1 0 0,0 7,13A1,1 0 0,0 8,12A1,1 0 0,0 7,11A1,1 0 0,0 6,12Z\"],[\"static-attr\",\"fill\",\"black\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"class\",\"svg-timeout-clock-red\"],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"width\",\"24\"],[\"static-attr\",\"height\",\"24\"],[\"static-attr\",\"viewBox\",\"0 0 24 24\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M11,17A1,1 0 0,0 12,18A1,1 0 0,0 13,17A1,1 0 0,0 12,16A1,1 0 0,0 11,17M11,3V7H13V5.08C16.39,5.57 19,8.47 19,12A7,7 0 0,1 12,19A7,7 0 0,1 5,12C5,10.32 5.59,8.78 6.58,7.58L12,13L13.41,11.59L6.61,4.79V4.81C4.42,6.45 3,9.05 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M18,12A1,1 0 0,0 17,11A1,1 0 0,0 16,12A1,1 0 0,0 17,13A1,1 0 0,0 18,12M6,12A1,1 0 0,0 7,13A1,1 0 0,0 8,12A1,1 0 0,0 7,11A1,1 0 0,0 6,12Z\"],[\"static-attr\",\"fill\",\"red\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/timeout-jauge.hbs" } });
});
define("pix-live/templates/components/warning-page", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "YgAjEug3", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"challenge-item-warning\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"challenge-item-warning__instruction-primary\"],[\"flush-element\"],[\"text\",\"\\n    Vous disposerez de \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"challenge-item-warning__instruction-time\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"allocatedHumanTime\"]],false],[\"close-element\"],[\"text\",\" pour\\n    réussir l’épreuve.\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"challenge-item-warning__intruction-secondary\"],[\"flush-element\"],[\"text\",\"\\n    Vous pourrez continuer à répondre ensuite, mais l’épreuve ne sera pas considérée comme réussie.\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"challenge-item-warning__allocated-time\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"challenge__allocated-time__jauge\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"width\",\"25\"],[\"static-attr\",\"ght\",\"25\"],[\"static-attr\",\"viewBox\",\"0 0 21 21\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M11,17A1,1 0 0,0 12,18A1,1 0 0,0 13,17A1,1 0 0,0 12,16A1,1 0 0,0 11,17M11,3V7H13V5.08C16.39,5.57 19,8.47 19,12A7,7 0 0,1 12,19A7,7 0 0,1 5,12C5,10.32 5.59,8.78 6.58,7.58L12,13L13.41,11.59L6.61,4.79V4.81C4.42,6.45 3,9.05 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M18,12A1,1 0 0,0 17,11A1,1 0 0,0 16,12A1,1 0 0,0 17,13A1,1 0 0,0 18,12M6,12A1,1 0 0,0 7,13A1,1 0 0,0 8,12A1,1 0 0,0 7,11A1,1 0 0,0 6,12Z\"],[\"static-attr\",\"fill\",\"black\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"challenge__allocated-time__value\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"allocatedTime\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"challenge-item-warning__action\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"challenge-item-warning__confirm-btn\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"confirmWarning\"]],[\"flush-element\"],[\"text\",\"Commencer l'épreuve\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/warning-page.hbs" } });
});
define("pix-live/templates/courses-loading", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "VFE4RSTE", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"home-loading\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"loader-container\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"loader\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"loader-inner ball-zig-zag\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ball-spinner\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"ball-spinner\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/courses-loading.hbs" } });
});
define("pix-live/templates/courses", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "JwPSSH3T", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"courses-page\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"course-list\"],null,[[\"courses\",\"startCourse\"],[[\"get\",[\"model\"]],\"startCourse\"]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/courses.hbs" } });
});
define("pix-live/templates/courses/get-challenge-preview", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "8ckJ2KUM", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"challenge-preview\"],[\"dynamic-attr\",\"data-id\",[\"concat\",[[\"unknown\",[\"model\",\"challenge\",\"id\"]]]]],[\"static-attr\",\"class\",\"challenge-preview\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n\\n    \"],[\"append\",[\"helper\",[\"component\"],[[\"get\",[\"challengeItemType\"]]],[[\"challenge\",\"assessment\",\"onValidated\"],[[\"get\",[\"model\",\"challenge\"]],[\"get\",[\"model\",\"assessment\"]],[\"helper\",[\"action\"],[[\"get\",[null]],[\"get\",[\"navigate\"]]],null]]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/courses/get-challenge-preview.hbs" } });
});
define("pix-live/templates/courses/get-course-preview", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "bQ9fUjdV", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"course-preview\"],[\"dynamic-attr\",\"data-id\",[\"concat\",[[\"unknown\",[\"model\",\"course\",\"id\"]]]]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"title\"],[\"flush-element\"],[\"text\",\"\\n      Prévisualisation du test #\"],[\"append\",[\"unknown\",[\"model\",\"course\",\"id\"]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"rounded-panel course-information\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"course-name\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"course\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"course-description\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"course\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"hr\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"block\",[\"link-to\"],[\"courses.get-challenge-preview\",[\"get\",[\"model\",\"course\",\"id\"]],[\"get\",[\"model\",\"nextChallenge\",\"id\"]]],[[\"class\"],[\"pull-right button button-primary simulate-button\"]],0],[\"text\",\"\\n\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Simuler le test\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/courses/get-course-preview.hbs" } });
});
define("pix-live/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "sOxPUNRO", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"index-page\"],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"index-page__background\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"index-page__section index-page__section--hero index-page-hero\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"index-page-hero__navbar-header\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"unknown\",[\"navbar-header\"]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"index-page-hero__content\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"h1\",[]],[\"static-attr\",\"class\",\"index-page-hero__title\"],[\"flush-element\"],[\"text\",\"Développez vos compétences numériques\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"index-page-hero__description\"],[\"flush-element\"],[\"text\",\"PIX est un projet public de plateforme en ligne d’évaluation et de certification des compétences numériques, en cours de développement.\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"model\",\"coursesOfTheWeek\"]]],null,1],[\"text\",\"\\n  \"],[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"index-page__section index-page__section--courses index-page-courses\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"index-page-courses__title\"],[\"flush-element\"],[\"text\",\"Découvrez nos épreuves et aidez‑nous à les améliorer !\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"index-page-courses__course-list\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"course-list\"],null,[[\"courses\",\"startCourse\"],[[\"get\",[\"model\",\"progressionCourses\"]],\"startCourse\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"index-page__section index-page__section--community index-page-community\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"index-page-community__title\"],[\"flush-element\"],[\"text\",\"Rejoindre la communauté\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"index-page-community__description\"],[\"flush-element\"],[\"text\",\"Vous souhaitez devenir béta‑testeur\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"ou être informé(e) du développement de Pix ?\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"index-page-community__form\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"unknown\",[\"follower-form\"]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"index-page__section index-page__section--features index-page-features\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"index-page-features__list\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"unknown\",[\"feature-list\"]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"block\",[\"link-to\"],[\"project\"],[[\"class\"],[\"index-page-features__project-button\"]],0],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"app-footer\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"En savoir plus sur le projet\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"index-page__section index-page__section--challenges index-page-challenges\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"index-page-challenges__container\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"index-page-challenges__presentation\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"index-page-challenges__presentation-title\"],[\"flush-element\"],[\"text\",\"Le défi \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"text--marigold\"],[\"flush-element\"],[\"text\",\"Pix\"],[\"close-element\"],[\"text\",\" de la semaine\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"index-page-challenges__presentation-text\"],[\"flush-element\"],[\"text\",\"Chaque semaine, testez vos compétences numériques sur un nouveau sujet.\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"index-page-challenges__course-list\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"course-list\"],null,[[\"courses\",\"startCourse\",\"limit\"],[[\"get\",[\"model\",\"coursesOfTheWeek\"]],\"startCourse\",2]]],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/index.hbs" } });
});
define("pix-live/templates/placement-tests", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "/pb3PwKm", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"placement-tests-page-courses__course-list\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"course-list\"],null,[[\"courses\",\"startCourse\"],[[\"get\",[\"model\"]],\"startCourse\"]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/placement-tests.hbs" } });
});
define("pix-live/templates/project", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "QDmB7dSL", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"project-page\"],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"append\",[\"helper\",[\"navbar-header\"],null,[[\"class\"],[\"navbar-header--white\"]]],false],[\"text\",\"\\n\\n  \"],[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"project-page__panel project-page__header\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h1\",[]],[\"static-attr\",\"class\",\"project-page__header-text\"],[\"flush-element\"],[\"text\",\"PIX est un projet public de plateforme en ligne d’évaluation et de certification des compétences numériques, en cours de développement.\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"rounded-panel project-page__panel project-page__populations\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"project-page__populations-headline\"],[\"flush-element\"],[\"text\",\"Le service sera accessible gratuitement et ouvert à tous les francophones :\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"project-page__user-types\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"project-page__user-type\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"project-page__user-type-image\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/project/schoolers.png\"]]],[\"static-attr\",\"alt\",\"\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"project-page__user-type-name\"],[\"flush-element\"],[\"text\",\"Collégiens et lycéens\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"project-page__user-type\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"project-page__user-type-image\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/project/students.png\"]]],[\"static-attr\",\"alt\",\"\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"project-page__user-type-name\"],[\"flush-element\"],[\"text\",\"Étudiants\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"project-page__user-type\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"project-page__user-type-image\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/project/professionals.png\"]]],[\"static-attr\",\"alt\",\"\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"project-page__user-type-name\"],[\"flush-element\"],[\"text\",\"Professionnels de tous secteurs\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"project-page__user-type\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"project-page__user-type-image\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/project/citizens.png\"]]],[\"static-attr\",\"alt\",\"\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"project-page__user-type-name\"],[\"flush-element\"],[\"text\",\"Citoyens\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"project-page__populations-description\"],[\"flush-element\"],[\"text\",\"Son objectif est d’accompagner l’élévation du niveau général de connaissances et de compétences numériques et ainsi de préparer la transformation digitale de l’ensemble de notre société et de notre économie.\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"rounded-panel project-page__panel project-page__value project-page__value--measure\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"project-page__value-header\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"project-page__value-header-image\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/project/measure.png\"]]],[\"static-attr\",\"alt\",\"\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"project-page__value-header-name\"],[\"flush-element\"],[\"text\",\"Mesurer ses compétences numériques\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"hr\",[]],[\"static-attr\",\"class\",\"project-page__value-header-line\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"project-page__value-body\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"PIX permettra d’obtenir un profil de compétences associé à un score global sur 1024 pix. En conformité avec le cadre de référence européen DIGCOMP, PIX évaluera les compétences numériques sur 8 niveaux et 5 grands domaines :\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Informations et données\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Communication et collaboration\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Création de contenu\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Protection et sécurité\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Environnement numérique\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Les épreuves évalueront les connaissances mais également les savoir-faire et la capacité à identifier les enjeux du numérique.\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Des modalités innovantes d’évaluation seront proposées, dépassant le cadre habituel des QCM et privilégiant la mesure in vivo de compétences à partir d’activités réalisées dans leur environnement numérique réel : interactions, manipulations de fichiers, résolutions de problèmes, productions créatives, évaluations par les pairs, etc.\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"rounded-panel project-page__panel project-page__value project-page__value--develop\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"project-page__value-header\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"project-page__value-header-image\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/project/develop.png\"]]],[\"static-attr\",\"alt\",\"\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"project-page__value-header-name\"],[\"flush-element\"],[\"text\",\"Développer ses compétences numériques\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"hr\",[]],[\"static-attr\",\"class\",\"project-page__value-header-line\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"project-page__value-body\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Les apports de PIX au développement des compétences de chacun sont triples :\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"1. PIX permettra d’apprendre en se testant. Une part importante des épreuves PIX sont conçues sous la forme de défis à relever au cours desquels on développe ses compétences.\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"2. En s’appuyant sur les résultats des épreuves, PIX offrira également des recommandations ciblées de formation.\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"3. Le service proposera enfin un accès dédié aux équipes pédagogiques (collège, lycée, enseignement supérieur) et aux responsables de formation continue. Ils pourront suivre l’évolution des compétences des publics qu’ils encadrent, et concevoir des stratégies de formation sur mesure.\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Pour témoigner des progrès de manière continue et stimulante, les utilisateurs disposeront d’un compte personnel sécurisé qui leur permettra de faire valoir leurs nouveaux acquis à leur rythme et tout au long de la vie.\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"rounded-panel project-page__panel project-page__value project-page__value--valorize\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"project-page__value-header\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"project-page__value-header-image\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"images/project/valorize.png\"]]],[\"static-attr\",\"alt\",\"\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"project-page__value-header-name\"],[\"flush-element\"],[\"text\",\"Valoriser ses compétences numériques\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"hr\",[]],[\"static-attr\",\"class\",\"project-page__value-header-line\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"project-page__value-body\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"PIX proposera, de manière optionnelle, un mode « certifiant », permettant d’obtenir une certification\\n        officielle fiable et reconnue par l’éducation nationale, l’enseignement supérieur et le monde professionnel.\"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Ce test complémentaire nécessitera, dans un premier temps, une passation en présentiel dans les centres\\n        agréés par PIX : collèges, lycées, établissements d’enseignement supérieur, structures partenaires.\"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Des solutions de passation du mode certifiant à distance seront étudiées par la suite, à destination des\\n        professionnels.\"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"PIX se substituera au Brevet informatique et internet (B2i) et à la Certification informatique et internet\\n        (C2i) progressivement à partir de la rentrée 2017–2018.\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"project-page__presentation\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"project-page__panel project-page__presentation-container\"],[\"flush-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"project-page__presentation-header\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"project-page__presentation-header-name\"],[\"flush-element\"],[\"text\",\"PIX, un service en ligne co-construit et évolutif\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"hr\",[]],[\"static-attr\",\"class\",\"project-page__presentation-header-line\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"project-page__presentation-body\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"PIX respectera l’exigence de neutralité du service public et sera compatible avec l’ensemble des environnements numériques : diversité des systèmes d’exploitation et des services en ligne, logiciels propriétaires comme logiciels libres, etc.\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"PIX est développé selon la méthodologie agile des « Startups d’État » dans le cadre d’un partenariat entre tous les acteurs du ministère de l’Éducation nationale, de l’Enseignement supérieur et la Recherche, le Conseil national éducation-économie et le secrétariat général à la modernisation de l’action publique.\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Le projet fait l’objet d’une démarche inédite de co-construction avec des acteurs du monde professionnel.\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Des panels de tests sont organisés en établissement scolaire, dans l’enseignement supérieur ou en entreprise toutes les deux semaines pour mettre à l’épreuve les nouvelles fonctionnalités au fur et à mesure de leur développement et pour calibrer les épreuves.\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"PIX fait appel à la multitude des utilisateurs. Toutes les personnes, établissements et entreprises qui le souhaitent ont la possibilité de rejoindre la communauté des bêta-testeurs à distance. Le référentiel de compétences et les épreuves sont pensés pour évoluer dans le temps à l’aune des retours des utilisateurs.\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Le code source de la plateforme PIX est libre.\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"app-footer\"]],false],[\"text\",\"\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/project.hbs" } });
});
define('pix-live/tests/mirage/mirage/config.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/config.js', function () {
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
define('pix-live/tests/mirage/mirage/data/assessments/ref-assessment.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/assessments/ref-assessment.js', function () {
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
define('pix-live/tests/mirage/mirage/data/courses/highlighted-course.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/courses/highlighted-course.js', function () {
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
define('pix-live/tests/mirage/mirage/data/followers/index.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/followers/index.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/mirage/mirage/data/solutions/ref-qcu-solution.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/solutions/ref-qcu-solution.js', function () {
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
define('pix-live/tests/mirage/mirage/routes/get-courses-of-the-week.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/routes/get-courses-of-the-week.js', function () {
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
define('pix-live/tests/mirage/mirage/routes/post-followers.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/routes/post-followers.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('pix-live/tests/mirage/mirage/routes/post-refresh-solution.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/routes/post-refresh-solution.js', function () {
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
define('pix-live/utils/answers-as-object', ['exports'], function (exports) {
  exports['default'] = answersAsObject;
  /* global jsyaml */

  function answersAsObject(answer, inputKeys) {
    if (answer === '#ABAND#') {
      return inputKeys.reduce(function (answersObject, key) {
        answersObject[key] = '';
        return answersObject;
      }, {});
    }
    return jsyaml.safeLoad(answer);
  }
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
  exports["default"] = isEmailValid;

  function isEmailValid(email) {
    if (!email) {
      return false;
    }
    // From http://stackoverflow.com/a/46181/5430854
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
define('pix-live/utils/labels-as-object', ['exports'], function (exports) {
  exports['default'] = labelsAsObject;
  function deletePlaceholderInLabel(keyInput) {
    if (keyInput.indexOf('#') != -1) {
      keyInput = keyInput.substring(0, keyInput.indexOf('#'));
    }
    return keyInput;
  }

  function labelsAsObject(labels) {
    var proposalsWithoutLineBreak = labels.replace(/\n/g, '');
    var proposalsSplitted = proposalsWithoutLineBreak.split(/\$\{|}/).slice(0, -1);
    var labelsAsObject = {};
    proposalsSplitted.forEach(function (element, index) {
      if (index % 2 != 0) {
        element = deletePlaceholderInLabel(element);
        labelsAsObject[element] = proposalsSplitted[index - 1];
      }
    });
    return labelsAsObject;
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
    isNonEmptyArray: function isNonEmptyArray(x) {
      return _.isArray(x) && !_.isEmpty(x);
    },
    hasSomeTruthyProps: function hasSomeTruthyProps(x) {
      if (!_.isObject(x)) return false;
      if (_.isEmpty(x)) return false;
      return _.some(x, function (value) {
        return _.isTruthy(value);
      });
    },

    isNotInteger: function isNotInteger(x) {
      return !_.isInteger(x);
    },

    isNumeric: function isNumeric(value) {
      if (typeof value === 'number') return true;
      var str = (value || '').toString();
      if (!str) return false;
      return !isNaN(str);
    },

    // See http://veerasundar.com/blog/2013/01/underscore-js-and-guid-function/
    guid: function guid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
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
define('pix-live/utils/proposals-as-array', ['exports', 'pix-live/utils/lodash-custom'], function (exports, _pixLiveUtilsLodashCustom) {
  exports['default'] = proposalsAsArray;

  function calculate(proposals) {
    return _pixLiveUtilsLodashCustom['default'].chain(proposals).thru(function (e) {
      return '\n' + e;
    }).split(/\n\s*-\s*/).removeFirstElement().value();
  }

  function proposalsAsArray(proposals) {
    // check pre-conditions
    var DEFAULT_RETURN_VALUE = [];

    if ((0, _pixLiveUtilsLodashCustom['default'])(proposals).isNotString()) return DEFAULT_RETURN_VALUE;
    if ((0, _pixLiveUtilsLodashCustom['default'])(proposals).isEmpty()) return DEFAULT_RETURN_VALUE;

    return calculate(proposals);
  }
});
define('pix-live/utils/result-details-as-object', ['exports'], function (exports) {
  exports['default'] = resultDetailsAsObject;
  /* global jsyaml */

  function resultDetailsAsObject(yamlResultDetails) {
    var resultDetailsAsObject = {};
    if (yamlResultDetails !== 'null\n') {
      resultDetailsAsObject = jsyaml.safeLoad(yamlResultDetails);
    }
    return resultDetailsAsObject;
  }
});
define('pix-live/utils/solution-as-object', ['exports', 'lodash'], function (exports, _lodash) {
  exports['default'] = solutionAsObject;

  function transformSolutionsToString(solutionsAsObject) {
    _lodash['default'].each(solutionsAsObject, function (potentialSolution) {
      potentialSolution.forEach(function (value, index) {
        potentialSolution[index] = potentialSolution[index].toString();
      });
    });
    return solutionsAsObject;
  }

  function solutionAsObject(yamlSolution) {
    var solutionsAsObject = jsyaml.safeLoad(yamlSolution);
    solutionsAsObject = transformSolutionsToString(solutionsAsObject);
    return solutionsAsObject;
  }
});
/* global jsyaml */
define('pix-live/utils/value-as-array-of-boolean', ['exports', 'pix-live/utils/lodash-custom'], function (exports, _pixLiveUtilsLodashCustom) {
  exports['default'] = valueAsArrayOfBoolean;

  function valueAsArrayOfBoolean(value) {
    return _pixLiveUtilsLodashCustom['default'].chain(value) // in the worst case : ',4, 2 , 2,1,  ,'
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
  }
});


define('pix-live/config/environment', ['ember'], function(Ember) {
  var prefix = 'pix-live';
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

});

if (!runningTests) {
  require("pix-live/app")["default"].create({"API_HOST":"","isChallengeTimerEnable":true,"MESSAGE_DISPLAY_DURATION":1500,"isMobileSimulationEnabled":false,"isTimerCountdownEnabled":true,"name":"pix-live","version":"1.6.2+c0c7c546"});
}
//# sourceMappingURL=pix-live.map
