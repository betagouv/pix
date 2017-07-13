"use strict";



define('pix-live/adapters/application', ['exports', 'ember', 'ember-data', 'pix-live/config/environment'], function (exports, _ember, _emberData, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPIAdapter.extend({

    namespace: 'api',
    host: _environment.default.APP.API_HOST,

    session: _ember.default.inject.service(),

    headers: _ember.default.computed('session.data.authenticated.token', function () {

      var tokenBearer = void 0;
      if (this.get('session.data.authenticated.token')) {
        tokenBearer = 'Bearer ' + this.get('session.data.authenticated.token');
      } else {
        tokenBearer = '';
      }

      return {
        'Authorization': tokenBearer
      };
    })

  });
});
define('pix-live/adapters/challenge', ['exports', 'pix-live/adapters/application'], function (exports, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var RSVP = Ember.RSVP;
  exports.default = _application.default.extend({
    queryNext: function queryNext(store, assessmentId) {
      return this.ajax(this.host + '/' + this.namespace + '/assessments/' + assessmentId + '/next', 'GET').then(function (payload) {
        var challenge = null;
        if (payload) {
          challenge = store.push(payload);
        }
        return RSVP.resolve(challenge);
      });
    }
  });
});
define('pix-live/adapters/solution', ['exports', 'pix-live/adapters/application', 'ember'], function (exports, _application, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var RSVP = _ember.default.RSVP;
  exports.default = _application.default.extend({
    queryRecord: function queryRecord(modelName, clazz, query) {
      return _ember.default.$.getJSON(this.host + '/' + this.namespace + '/assessments/' + query.assessmentId + '/solutions/' + query.answerId, function (data) {
        return RSVP.resolve(data);
      });
    },

    // refresh cache
    refreshRecord: function refreshRecord(modelName, clazz) {
      return _ember.default.$.post(this.host + '/' + this.namespace + '/challenges/' + clazz.challengeId + '/solution', function (data) {
        return RSVP.resolve(data);
      });
    }
  });
});
define('pix-live/app', ['exports', 'ember', 'pix-live/resolver', 'ember-load-initializers', 'pix-live/config/environment'], function (exports, _ember, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = _ember.default.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('pix-live/authenticators/simple', ['exports', 'ember-simple-auth/authenticators/base', 'ember'], function (exports, _base, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var RSVP = _ember.default.RSVP;
  exports.default = _base.default.extend({

    ajax: _ember.default.inject.service(),

    restore: function restore(data) {
      return RSVP.resolve(data);
    },
    authenticate: function authenticate(email, password) {
      return this.get('ajax').request('/api/authentications', {
        method: 'POST',
        data: JSON.stringify({
          data: {
            attributes: {
              password: password,
              email: email
            }
          }
        })
      }).then(function (payload) {
        return RSVP.Promise.resolve({
          token: payload.data.attributes.token,
          userId: payload.data.attributes['user-id']
        });
      });
    }
  });
});
define('pix-live/components/app-footer', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({

    classNames: ['app-footer']

  });
});
define('pix-live/components/beta-logo', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({

    tagName: 'div',
    classNames: ['beta-logo']
  });
});
define('pix-live/components/bs-accordion-item', ['exports', 'ember-bootstrap/components/bs-accordion-item'], function (exports, _bsAccordionItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAccordionItem.default;
    }
  });
});
define('pix-live/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _bsAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
define('pix-live/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _bsAlert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
define('pix-live/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _bsButtonGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsButtonGroup.default;
});
define('pix-live/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _bsButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsButton.default;
});
define('pix-live/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _bsCollapse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
define('pix-live/components/bs-dropdown-button', ['exports', 'ember-bootstrap/components/bs-dropdown-button'], function (exports, _bsDropdownButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDropdownButton.default;
    }
  });
});
define('pix-live/components/bs-dropdown-menu', ['exports', 'ember-bootstrap/components/bs-dropdown-menu'], function (exports, _bsDropdownMenu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDropdownMenu.default;
    }
  });
});
define('pix-live/components/bs-dropdown-toggle', ['exports', 'ember-bootstrap/components/bs-dropdown-toggle'], function (exports, _bsDropdownToggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDropdownToggle.default;
    }
  });
});
define('pix-live/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _bsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
define('pix-live/components/bs-form-element', ['exports', 'ember-bootstrap/components/bs-form-element'], function (exports, _bsFormElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsFormElement.default;
    }
  });
});
define('pix-live/components/bs-form-group', ['exports', 'ember-bootstrap/components/bs-form-group'], function (exports, _bsFormGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsFormGroup.default;
    }
  });
});
define('pix-live/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _bsForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
define('pix-live/components/bs-input', ['exports', 'ember-bootstrap/components/bs-input'], function (exports, _bsInput) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsInput.default;
    }
  });
});
define('pix-live/components/bs-modal-backdrop', ['exports', 'ember-bootstrap/components/bs-modal-backdrop'], function (exports, _bsModalBackdrop) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalBackdrop.default;
    }
  });
});
define('pix-live/components/bs-modal-body', ['exports', 'ember-bootstrap/components/bs-modal-body'], function (exports, _bsModalBody) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalBody.default;
    }
  });
});
define('pix-live/components/bs-modal-dialog', ['exports', 'ember-bootstrap/components/bs-modal-dialog'], function (exports, _bsModalDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalDialog.default;
    }
  });
});
define('pix-live/components/bs-modal-footer', ['exports', 'ember-bootstrap/components/bs-modal-footer'], function (exports, _bsModalFooter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalFooter.default;
    }
  });
});
define('pix-live/components/bs-modal-header', ['exports', 'ember-bootstrap/components/bs-modal-header'], function (exports, _bsModalHeader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalHeader.default;
    }
  });
});
define('pix-live/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _bsModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
define('pix-live/components/bs-nav-item', ['exports', 'ember-bootstrap/components/bs-nav-item'], function (exports, _bsNavItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNavItem.default;
    }
  });
});
define('pix-live/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _bsNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
define('pix-live/components/bs-navbar-content', ['exports', 'ember-bootstrap/components/bs-navbar-content'], function (exports, _bsNavbarContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNavbarContent.default;
    }
  });
});
define('pix-live/components/bs-navbar-nav', ['exports', 'ember-bootstrap/components/bs-navbar-nav'], function (exports, _bsNavbarNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNavbarNav.default;
    }
  });
});
define('pix-live/components/bs-navbar-toggle', ['exports', 'ember-bootstrap/components/bs-navbar-toggle'], function (exports, _bsNavbarToggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNavbarToggle.default;
    }
  });
});
define('pix-live/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _bsNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
define('pix-live/components/bs-progress-bar', ['exports', 'ember-bootstrap/components/bs-progress-bar'], function (exports, _bsProgressBar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsProgressBar.default;
    }
  });
});
define('pix-live/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _bsProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
define('pix-live/components/bs-select', ['exports', 'ember-bootstrap/components/bs-select'], function (exports, _bsSelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsSelect.default;
    }
  });
});
define('pix-live/components/bs-tab-pane', ['exports', 'ember-bootstrap/components/bs-tab-pane'], function (exports, _bsTabPane) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTabPane.default;
    }
  });
});
define('pix-live/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _bsTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
define('pix-live/components/bs-textarea', ['exports', 'ember-bootstrap/components/bs-textarea'], function (exports, _bsTextarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTextarea.default;
    }
  });
});
define('pix-live/components/challenge-actions', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({

    classNames: ['challenge-actions'],

    challengeSkipped: null, // action
    answerValidated: null, // action

    _validateButtonStatus: 'enable', // enable, pending, offline
    isValidateButtonEnable: _ember.default.computed.equal('_validateButtonStatus', 'enable'),
    isValidateButtonPending: _ember.default.computed.equal('_validateButtonStatus', 'pending'),
    isValidateButtonOffline: _ember.default.computed.equal('_validateButtonStatus', 'offline'),

    actions: {
      skipChallenge: function skipChallenge() {
        this.get('challengeSkipped')();
      },
      validateAnswer: function validateAnswer() {
        var _this = this;

        this.set('_validateButtonStatus', 'pending');

        var promise = this.get('answerValidated')();
        promise.then(function () {
          _this.set('_validateButtonStatus', 'enable');
        }).catch(function () {
          _this.set('_validateButtonStatus', 'enable');
        });
      }
    }

  });
});
define('pix-live/components/challenge-item-generic', ['exports', 'ember', 'pix-live/utils/call-only-once', 'pix-live/utils/lodash-custom', 'pix-live/config/environment'], function (exports, _ember, _callOnlyOnce, _lodashCustom, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var RSVP = _ember.default.RSVP;


  var ChallengeItemGeneric = _ember.default.Component.extend({

    tagName: 'article',
    classNames: ['challenge-item'],
    attributeBindings: ['challenge.id:data-challenge-id'],

    answerValidated: null, // action

    _elapsedTime: null,
    _timer: null,
    _isUserAwareThatChallengeIsTimed: false,

    init: function init() {
      this._super.apply(this, arguments);
      if (!_lodashCustom.default.isInteger(this.get('challenge.timer'))) {
        this._start();
      }
    },
    didUpdateAttrs: function didUpdateAttrs() {
      this._super.apply(this, arguments);
      if (!this.get('_isUserAwareThatChallengeIsTimed')) {
        this.set('hasUserConfirmWarning', false);
        this.set('hasChallengeTimer', this.hasTimerDefined());
      }
    },
    willDestroyElement: function willDestroyElement() {
      this._super.apply(this, arguments);
      var timer = this.get('_timer');
      _ember.default.run.cancel(timer);
    },


    hasUserConfirmWarning: _ember.default.computed('challenge', function () {
      return false;
    }),

    hasChallengeTimer: _ember.default.computed('challenge', function () {
      return this.hasTimerDefined();
    }),

    canDisplayFeedbackPanel: _ember.default.computed('_isUserAwareThatChallengeIsTimed', function () {
      return !this.hasTimerDefined() || this.hasTimerDefined() && this.get('_isUserAwareThatChallengeIsTimed');
    }),

    hasTimerDefined: function hasTimerDefined() {
      return _lodashCustom.default.isInteger(this.get('challenge.timer'));
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
      if (_environment.default.APP.isChallengeTimerEnable) {
        var timer = _ember.default.run.later(this, function () {
          var elapsedTime = this.get('_elapsedTime');
          this.set('_elapsedTime', elapsedTime + 1);
          this.notifyPropertyChange('_elapsedTime');
          this._tick();
        }, 1000);

        this.set('_timer', timer);
      }
    },


    actions: {
      validateAnswer: function validateAnswer() {
        if (this._hasError()) {
          var errorMessage = this._getErrorMessage();
          this.set('errorMessage', errorMessage);
          return RSVP.reject(errorMessage);
        }
        var answerValue = this._getAnswerValue();
        this.set('_isUserAwareThatChallengeIsTimed', false);
        return this.get('answerValidated')(this.get('challenge'), this.get('assessment'), answerValue, this._getTimeout(), this._getElapsedTime());
      },


      skipChallenge: (0, _callOnlyOnce.default)(function () {
        this.set('errorMessage', null);
        this.set('_isUserAwareThatChallengeIsTimed', false);
        this.get('answerValidated')(this.get('challenge'), this.get('assessment'), '#ABAND#', this._getTimeout(), this._getElapsedTime());
      }),

      setUserConfirmation: function setUserConfirmation() {
        this._start();
        this.toggleProperty('hasUserConfirmWarning');
        this.toggleProperty('hasChallengeTimer');
        this.set('_isUserAwareThatChallengeIsTimed', true);
      }
    }

  });

  exports.default = ChallengeItemGeneric;
});
define('pix-live/components/challenge-item-qcm', ['exports', 'pix-live/components/challenge-item-generic'], function (exports, _challengeItemGeneric) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var ChallengeItemQcm = _challengeItemGeneric.default.extend({

    _hasError: function _hasError() {
      return this._getAnswerValue().length < 1;
    },

    _getAnswerValue: function _getAnswerValue() {
      return this.$('input[type=checkbox][id^=checkbox_]:checked').map(function () {
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

  exports.default = ChallengeItemQcm;
});
define('pix-live/components/challenge-item-qcu', ['exports', 'pix-live/components/challenge-item-generic'], function (exports, _challengeItemGeneric) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var ChallengeItemQcu = _challengeItemGeneric.default.extend({

    _hasError: function _hasError() {
      return this._getAnswerValue().length < 1;
    },

    _getAnswerValue: function _getAnswerValue() {
      return this.$('.challenge-proposals input:radio:checked').map(function () {
        return this.value;
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

  exports.default = ChallengeItemQcu;
});
define('pix-live/components/challenge-item-qroc', ['exports', 'pix-live/components/challenge-item-generic'], function (exports, _challengeItemGeneric) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var ChallengeItemQroc = _challengeItemGeneric.default.extend({

    _hasError: function _hasError() {
      return this._getAnswerValue().length < 1;
    },

    _getAnswerValue: function _getAnswerValue() {
      return this.$('input[data-uid="qroc-proposal-uid"]').val();
    },
    _getErrorMessage: function _getErrorMessage() {
      return 'Pour valider, saisir une réponse. Sinon, passer.';
    },


    actions: {
      answerChanged: function answerChanged() {
        this.set('errorMessage', null);
      }
    }

  });

  exports.default = ChallengeItemQroc;
});
define('pix-live/components/challenge-item-qrocm', ['exports', 'pix-live/utils/lodash-custom', 'pix-live/components/challenge-item-generic'], function (exports, _lodashCustom, _challengeItemGeneric) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var ChallengeItemQrocm = _challengeItemGeneric.default.extend({

    _hasError: function _hasError() {
      var allAnswers = this._getRawAnswerValue(); // ex. {"logiciel1":"word", "logiciel2":"excel", "logiciel3":""}
      var hasAtLeastOneAnswer = (0, _lodashCustom.default)(allAnswers).hasSomeTruthyProps();
      return _lodashCustom.default.isFalsy(hasAtLeastOneAnswer);
    },

    _getAnswerValue: function _getAnswerValue() {
      return jsyaml.safeDump(this._getRawAnswerValue());
    },
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
      answerChanged: function answerChanged() {
        this.set('errorMessage', null);
      }
    }

  });

  exports.default = ChallengeItemQrocm;
});
define('pix-live/components/challenge-statement', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({

    classNames: ['rounded-panel', 'challenge-statement'],

    attributeBindings: ['tabindex', 'id'],
    tabindex: -1,

    challenge: null,

    init: function init() {
      this._super.apply(this, arguments);
      this.id = 'challenge_statement_' + this.get('challenge.id');
    },
    didReceiveAttrs: function didReceiveAttrs() {
      this._super.apply(this, arguments);
      _ember.default.$('#' + this.id).focus();
    },
    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      _ember.default.$('#' + this.id).focus();
    },


    selectedAttachmentUrl: _ember.default.computed('challenge.attachments', function () {
      return this.get('challenge.attachments.firstObject');
    }),

    attachmentsData: _ember.default.computed('challenge.attachements', function () {
      return this.get('challenge.attachments');
    }),

    actions: {
      selectAttachementUrl: function selectAttachementUrl(attachementUrl) {
        this.set('selectedAttachmentUrl', attachementUrl);
      }
    }
  });
});
define('pix-live/components/challenge-stay', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({

    classNames: ['challenge-stay']

  });
});
define('pix-live/components/comparison-window', ['exports', 'ember', 'pix-live/utils/result-icon-url'], function (exports, _ember, _resultIconUrl) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var contentReference = {
    ok: {
      status: 'ok',
      title: 'Vous avez la bonne réponse !',
      tooltip: 'Réponse correcte'
    },

    ko: {
      status: 'ko',
      title: 'Vous n\'avez pas la bonne réponse',
      tooltip: 'Réponse incorrecte'
    },

    aband: {
      status: 'aband',
      title: 'Vous n\'avez pas donné de réponse',
      tooltip: 'Sans réponse'
    },

    partially: {
      status: 'partially',
      title: 'Vous avez donné une réponse partielle',
      tooltip: 'Réponse partielle'
    },

    timedout: {
      status: 'timedout',
      title: 'Vous avez dépassé le temps imparti',
      tooltip: 'Temps dépassé'
    },

    default: {
      status: 'default',
      title: '',
      tooltip: 'Correction automatique en cours de développement ;)'
    }
  };

  function _setFocusOnFirstTabbableElement(modalId) {
    var $tabbableElementInModal = _ember.default.$(modalId).find(':tabbable');

    var $firstElementToFocus = $tabbableElementInModal.get(0);
    $firstElementToFocus.focus();
  }

  exports.default = _ember.default.Component.extend({

    modal: _ember.default.inject.service('current-routed-modal'),

    classNames: ['comparison-window'],

    answer: null,
    challenge: null,
    solution: null,
    index: null,

    isAssessmentChallengeTypeQroc: _ember.default.computed.equal('challenge.type', 'QROC'),
    isAssessmentChallengeTypeQcm: _ember.default.computed.equal('challenge.type', 'QCM'),
    isAssessmentChallengeTypeQcu: _ember.default.computed.equal('challenge.type', 'QCU'),
    isAssessmentChallengeTypeQrocm: _ember.default.computed.equal('challenge.type', 'QROCM'),
    isAssessmentChallengeTypeQrocmInd: _ember.default.computed.equal('challenge.type', 'QROCM-ind'),
    isAssessmentChallengeTypeQrocmDep: _ember.default.computed.equal('challenge.type', 'QROCM-dep'),

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);

      var modalId = '#' + this.elementId;

      _setFocusOnFirstTabbableElement(modalId);

      _ember.default.$(modalId).find(':tabbable').last().on('blur', function () {
        _setFocusOnFirstTabbableElement(modalId);
      });
    },
    keyUp: function keyUp(event) {
      if (event.key === 'Escape') {
        this.get('modal').close();
      }

      event.preventDefault();
    },
    didDestroyElement: function didDestroyElement() {
      _ember.default.$('#open-comparison_' + this.get('index')).focus();
    },


    resultItem: _ember.default.computed('answer.result', function () {
      var resultItem = contentReference['default'];
      var answerStatus = this.get('answer.result');

      if (answerStatus && answerStatus in contentReference) {
        resultItem = contentReference[answerStatus];
      }
      return resultItem;
    }),

    resultItemIcon: _ember.default.computed('resultItem', function () {
      return (0, _resultIconUrl.default)(this.get('resultItem.status'));
    })
  });
});
define('pix-live/components/corner-ribbon', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({});
});
define('pix-live/components/course-banner', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({

    classNames: ['course-banner'],

    course: null,
    withHomeLink: false

  });
});
define('pix-live/components/course-item', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var CourseItem = _ember.default.Component.extend({

    course: null,

    tagName: 'article',
    classNames: ['course-item', 'rounded-panel'],
    attributeBindings: ['tabindex'],
    tabindex: 0,

    imageUrl: _ember.default.computed('course', function () {
      var imageUrl = this.get('course.imageUrl');
      return imageUrl ? imageUrl : '/images/course-default-image.png';
    }),

    actions: {
      startCourse: function startCourse(course) {
        this.sendAction('startCourse', course);
      }
    }

  });

  exports.default = CourseItem;
});
define('pix-live/components/course-list', ['exports', 'ember', 'pix-live/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


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

  var CourseList = _ember.default.Component.extend({

    courses: null,
    selectedCourse: null,

    classNames: ['course-list'],

    isLoading: _ember.default.computed.readOnly('courses.isPending'),

    filteredCourses: _ember.default.computed('courses.[]', function () {
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
      _ember.default.run.scheduleOnce('afterRender', this, function () {
        $('button[data-confirm]').click(function () {
          $('#js-modal-mobile').modal('hide');
          that.sendAction('startCourse', that.get('selectedCourse'));
        });
      });

      if (_environment.default.APP.isMobileSimulationEnabled) {
        this.$().on('simulateMobileScreen', function () {
          that.set('isSimulatedMobileScreen', 'true');
        });
      }
    },
    _isMobile: function _isMobile() {
      if (_environment.default.APP.isMobileSimulationEnabled) {
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

  exports.default = CourseList;
});
define('pix-live/components/cp-panel-body', ['exports', 'ember-collapsible-panel/components/cp-panel-body/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('pix-live/components/cp-panel-toggle', ['exports', 'ember-collapsible-panel/components/cp-panel-toggle/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('pix-live/components/cp-panel', ['exports', 'ember-collapsible-panel/components/cp-panel/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('pix-live/components/cp-panels', ['exports', 'ember-collapsible-panel/components/cp-panels/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('pix-live/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormhole) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberWormhole.default;
    }
  });
});
define('pix-live/components/feature-item', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({

    tagName: 'article',
    classNames: ['feature-item']

  });
});
define('pix-live/components/feature-list', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({

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
define('pix-live/components/feedback-panel', ['exports', 'ember', 'pix-live/utils/email-validator', 'pix-live/config/environment'], function (exports, _ember, _emailValidator, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var FORM_CLOSED = 'FORM_CLOSED';
  var FORM_OPENED = 'FORM_OPENED';
  var FORM_SUBMITTED = 'FORM_SUBMITTED';

  exports.default = _ember.default.Component.extend({

    store: _ember.default.inject.service(),

    classNames: ['feedback-panel'],

    assessment: null,
    challenge: null,
    collapsible: true,

    _status: null,
    _email: null,
    _content: null,
    _error: null,

    isFormClosed: _ember.default.computed.equal('_status', FORM_CLOSED),
    isFormOpened: _ember.default.computed.equal('_status', FORM_OPENED),
    isFormSubmitted: _ember.default.computed.equal('_status', FORM_SUBMITTED),

    didReceiveAttrs: function didReceiveAttrs() {
      this._super.apply(this, arguments);
      this._reset();
    },
    _reset: function _reset() {
      this.set('_email', null);
      this.set('_content', null);
      this.set('_error', null);
      this.set('_status', this._getDefaultStatus());
    },
    _closeForm: function _closeForm() {
      this.set('_status', FORM_CLOSED);
      this.set('_error', null);
    },
    _getDefaultStatus: function _getDefaultStatus() {
      return this.get('collapsible') ? FORM_CLOSED : FORM_OPENED;
    },


    _scrollToPanel: function _scrollToPanel() {
      _ember.default.$('body').animate({
        scrollTop: _ember.default.$('.feedback-panel__view').offset().top - 15
      }, _environment.default.APP.FEEDBACK_PANEL_SCROLL_DURATION);
    },

    actions: {
      openFeedbackForm: function openFeedbackForm() {
        this.set('_status', FORM_OPENED);
        this._scrollToPanel();
      },
      cancelFeedback: function cancelFeedback() {
        this._closeForm();
      },
      sendFeedback: function sendFeedback() {
        var _this = this;

        var email = this.get('_email');
        if (!_ember.default.isEmpty(email) && !(0, _emailValidator.default)(email)) {
          this.set('_error', 'Vous devez saisir une adresse mail valide.');
          return;
        }

        var content = this.get('_content');
        if (_ember.default.isEmpty(content) || _ember.default.isEmpty(content.trim())) {
          this.set('_error', 'Vous devez saisir un message.');
          return;
        }

        var store = this.get('store');
        var assessment = this.get('assessment');
        var challenge = this.get('challenge');

        var feedback = store.createRecord('feedback', {
          email: this.get('_email'),
          content: this.get('_content'),
          assessment: assessment,
          challenge: challenge
        });
        feedback.save().then(function () {
          return _this.set('_status', FORM_SUBMITTED);
        });
      }
    }
  });
});
define('pix-live/components/follower-form', ['exports', 'ember', 'pix-live/config/environment', 'pix-live/utils/email-validator'], function (exports, _ember, _environment, _emailValidator) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  function hideMessageDiv(context) {
    _ember.default.run.later(function () {
      context.set('status', 'empty');
      context.set('errorType', 'invalid');
    }, _environment.default.APP.MESSAGE_DISPLAY_DURATION);
  }

  function getErrorType(errors) {
    var statusCode = parseInt(errors[0].status);
    return statusCode === 409 ? 'exist' : 'invalid';
  }

  exports.default = _ember.default.Component.extend({

    store: _ember.default.inject.service(),

    classNames: ['follower-form'],

    _followerEmail: null,
    errorType: 'invalid', // invalid | exist
    status: 'empty', // empty | pending | success | error

    messages: {
      error: {
        invalid: 'Votre adresse n\'est pas valide',
        exist: 'L\'e-mail choisi est déjà utilisé'
      },
      success: 'Merci pour votre inscription'
    },

    hasError: _ember.default.computed.equal('status', 'error'),
    isPending: _ember.default.computed.equal('status', 'pending'),
    hasSuccess: _ember.default.computed.equal('status', 'success'),
    hasMessage: _ember.default.computed.or('hasError', 'hasSuccess'),

    messageClassName: _ember.default.computed('status', function () {
      return this.get('status') === 'error' ? 'has-error' : 'has-success';
    }),

    infoMessage: _ember.default.computed('hasError', function () {
      var currentErrorType = this.get('errorType');
      return this.get('hasError') ? this.get('messages.error')[currentErrorType] : this.get('messages.success');
    }),

    submitButtonText: _ember.default.computed('status', function () {
      return this.get('status') === 'pending' ? 'envoi en cours' : 's\'inscrire';
    }),

    actions: {
      submit: function submit() {
        var _this = this;

        this.set('status', 'pending');
        var email = this.get('_followerEmail') ? this.get('_followerEmail').trim() : '';
        if (!(0, _emailValidator.default)(email)) {
          this.set('status', 'error');
          hideMessageDiv(this);
          return;
        }

        var store = this.get('store');
        var follower = store.createRecord('follower', { email: email });
        follower.save().then(function () {
          _this.set('status', 'success');
          hideMessageDiv(_this);
          _this.set('_followerEmail', null);
        }).catch(function (_ref) {
          var errors = _ref.errors;

          _this.set('errorType', getErrorType(errors));
          _this.set('status', 'error');
          hideMessageDiv(_this);
        });
      }
    }
  });
});
define('pix-live/components/g-recaptcha', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({

    classNames: ['gg-recaptcha'],

    googleRecaptcha: _ember.default.inject.service(),

    validateRecaptcha: null, // action
    resetRecaptcha: null, // action

    tokenHasBeenUsed: null,
    validation: null,

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      var component = this;
      this.get('googleRecaptcha').loadScript().then(function () {
        component.renderRecaptcha();
      });
    },
    didUpdateAttrs: function didUpdateAttrs() {
      this._super.apply(this, arguments);
      if (this.get('tokenHasBeenUsed')) {
        this.get('googleRecaptcha').reset();
      }
    },
    renderRecaptcha: function renderRecaptcha() {
      var callback = this.get('validateCallback').bind(this);
      var expiredCallback = this.get('expiredCallback').bind(this);
      this.get('googleRecaptcha').render('g-recaptcha-container', callback, expiredCallback);
    },
    validateCallback: function validateCallback(recaptchaResponse) {
      this.set('recaptchaToken', recaptchaResponse);
      this.set('tokenHasBeenUsed', false);
    },
    expiredCallback: function expiredCallback() {
      this.set('recaptchaToken', null);
      this.set('tokenHasBeenUsed', false);
    }
  });
});
define('pix-live/components/markdown-to-html', ['exports', 'ember-cli-showdown/components/markdown-to-html'], function (exports, _markdownToHtml) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _markdownToHtml.default;
    }
  });
});
define('pix-live/components/medal-item', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({
    classNames: ['medal-item'],

    pixScore: null
  });
});
define('pix-live/components/modal-mobile', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({

    didInsertElement: function didInsertElement() {

      // XXX : we hack here Bootstrap,
      // because we need a display:flex to center the modal
      // since bootstrap insert an inlined-style display:block
      // we have to remove this property once the modal renders.
      _ember.default.run.scheduleOnce('afterRender', this, function () {
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
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({

    classNames: ['navbar-header']

  });
});
define('pix-live/components/pix-logo', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({

    classNames: ['pix-logo']

  });
});
define('pix-live/components/progress-bar', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({
    classNames: ['progress', 'pix-progress-bar'],

    barStyle: _ember.default.computed('progress.stepPercentage', function () {
      return _ember.default.String.htmlSafe('width: ' + this.get('progress.stepPercentage') + '%');
    })
  });
});
define('pix-live/components/qcm-proposals', ['exports', 'ember', 'pix-live/utils/labeled-checkboxes', 'pix-live/utils/proposals-as-array', 'pix-live/utils/value-as-array-of-boolean'], function (exports, _ember, _labeledCheckboxes, _proposalsAsArray, _valueAsArrayOfBoolean) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({

    answersValue: null,
    proposals: null,
    answerChanged: null,

    labeledCheckboxes: _ember.default.computed('proposals', 'answersValue', function () {
      var arrayOfProposals = (0, _proposalsAsArray.default)(this.get('proposals'));
      var arrayOfBoolean = (0, _valueAsArrayOfBoolean.default)(this.get('answersValue'));

      return (0, _labeledCheckboxes.default)(arrayOfProposals, arrayOfBoolean);
    })
  });
});
define('pix-live/components/qcm-solution-panel', ['exports', 'ember', 'pix-live/utils/labeled-checkboxes', 'pix-live/utils/value-as-array-of-boolean', 'pix-live/utils/proposals-as-array', 'pix-live/utils/lodash-custom'], function (exports, _ember, _labeledCheckboxes, _valueAsArrayOfBoolean, _proposalsAsArray, _lodashCustom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({
    classNames: ['qcm-solution-panel'],
    answer: null,
    solution: null,
    challenge: null,

    solutionArray: _ember.default.computed('solution', function () {
      var solution = this.get('solution.value');
      return _lodashCustom.default.isNonEmptyString(solution) ? (0, _valueAsArrayOfBoolean.default)(solution) : [];
    }),

    labeledCheckboxes: _ember.default.computed('answer', function () {
      var answer = this.get('answer.value');
      var checkboxes = [];
      if (_lodashCustom.default.isNonEmptyString(answer)) {
        var proposals = this.get('challenge.proposals');
        var proposalsArray = (0, _proposalsAsArray.default)(proposals);
        var answerArray = (0, _valueAsArrayOfBoolean.default)(answer);
        checkboxes = (0, _labeledCheckboxes.default)(proposalsArray, answerArray);
      }
      return checkboxes;
    })
  });
});
define('pix-live/components/qcu-proposals', ['exports', 'ember', 'pix-live/utils/labeled-checkboxes', 'pix-live/utils/proposals-as-array', 'pix-live/utils/value-as-array-of-boolean'], function (exports, _ember, _labeledCheckboxes, _proposalsAsArray, _valueAsArrayOfBoolean) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({

    answersValue: null,
    proposals: null,
    answerChanged: null, // action

    labeledRadios: _ember.default.computed('proposals', 'answersValue', function () {
      var arrayOfProposals = (0, _proposalsAsArray.default)(this.get('proposals'));
      return (0, _labeledCheckboxes.default)(arrayOfProposals, (0, _valueAsArrayOfBoolean.default)(this.get('answersValue')));
    }),

    _uncheckAllRadioButtons: function _uncheckAllRadioButtons() {
      this.$(':radio').prop('checked', false);
    },
    _checkAgainTheSelectedOption: function _checkAgainTheSelectedOption(index) {
      this.$(':radio:nth(' + index + ')').prop('checked', true);
    },


    actions: {
      radioClicked: function radioClicked(index) {
        this._uncheckAllRadioButtons();
        this._checkAgainTheSelectedOption(index);
        this.get('answerChanged')();
      }
    }

  });
});
define('pix-live/components/qcu-solution-panel', ['exports', 'ember', 'pix-live/utils/labeled-checkboxes', 'pix-live/utils/value-as-array-of-boolean', 'pix-live/utils/proposals-as-array', 'pix-live/utils/lodash-custom'], function (exports, _ember, _labeledCheckboxes, _valueAsArrayOfBoolean, _proposalsAsArray, _lodashCustom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({
    classNames: ['qcu-solution-panel'],
    answer: null,
    solution: null,
    challenge: null,

    solutionArray: _ember.default.computed('solution', function () {
      var solution = this.get('solution.value');
      return _lodashCustom.default.isNonEmptyString(solution) ? (0, _valueAsArrayOfBoolean.default)(solution) : [];
    }),

    labeledRadios: _ember.default.computed('answer', function () {
      var answer = this.get('answer.value');
      var radiosArray = [];
      if (_lodashCustom.default.isNonEmptyString(answer)) {
        var proposals = this.get('challenge.proposals');
        var proposalsArray = (0, _proposalsAsArray.default)(proposals);
        var answerArray = (0, _valueAsArrayOfBoolean.default)(answer);
        radiosArray = (0, _labeledCheckboxes.default)(proposalsArray, answerArray);
      }

      return radiosArray;
    })
  });
});
define('pix-live/components/qroc-proposal', ['exports', 'ember', 'pix-live/utils/proposals-as-blocks'], function (exports, _ember, _proposalsAsBlocks) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({

    classNames: ['qroc-proposal'],

    proposals: null,
    answerValue: null,
    answerChanged: null, // action

    _blocks: _ember.default.computed('proposals', function () {
      return (0, _proposalsAsBlocks.default)(this.get('proposals'));
    }),

    userAnswer: _ember.default.computed('answerValue', function () {
      var answer = this.get('answerValue') || '';
      return answer.indexOf('#ABAND#') > -1 ? '' : answer;
    }),

    didInsertElement: function didInsertElement() {
      var _this = this;

      this.$('input').keydown(function () {
        _this.get('answerChanged')();
      });
    }
  });
});
define('pix-live/components/qroc-solution-panel', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var classByResultValue = {
    ok: 'correction-qroc-box__input-right-answer',
    ko: 'correction-qroc-box__input-wrong-answer',
    aband: 'correction-qroc-box__input-no-answer'
  };

  exports.default = _ember.default.Component.extend({

    answer: null,
    solution: null,

    inputClass: _ember.default.computed('answer.result', function () {
      return classByResultValue[this.get('answer.result')] || '';
    }),

    isResultOk: _ember.default.computed('answer', function () {
      return this.get('answer.result') === 'ok';
    }),

    answerToDisplay: _ember.default.computed('answer', function () {
      var answer = this.get('answer.value');
      if (answer === '#ABAND#') {
        return 'Pas de réponse';
      }
      return answer;
    }),

    solutionToDisplay: _ember.default.computed('solution.value', function () {
      var solutionVariants = this.get('solution.value');
      if (!solutionVariants) {
        return '';
      }
      return solutionVariants.split('\n')[0];
    })
  });
});
define('pix-live/components/qrocm-ind-solution-panel', ['exports', 'ember', 'lodash', 'pix-live/utils/answers-as-object', 'pix-live/utils/solution-as-object', 'pix-live/utils/labels-as-object', 'pix-live/utils/result-details-as-object'], function (exports, _ember, _lodash, _answersAsObject, _solutionAsObject, _labelsAsObject, _resultDetailsAsObject) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


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

  var QrocmIndSolutionPanel = _ember.default.Component.extend({

    inputFields: _ember.default.computed('challenge.proposals', 'answer.value', 'solution.value', function () {

      var labels = (0, _labelsAsObject.default)(this.get('challenge.proposals'));
      var answers = (0, _answersAsObject.default)(this.get('answer.value'), _lodash.default.keys(labels));
      var solutions = (0, _solutionAsObject.default)(this.get('solution.value'));
      var resultDetails = (0, _resultDetailsAsObject.default)(this.get('answer.resultDetails'));

      var inputFields = [];

      _lodash.default.forEach(labels, function (label, labelKey) {
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

  exports.default = QrocmIndSolutionPanel;
});
define('pix-live/components/qrocm-proposal', ['exports', 'ember', 'pix-live/utils/proposals-as-blocks'], function (exports, _ember, _proposalsAsBlocks) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({

    classNames: ['qrocm-proposal'],

    proposals: null,
    answersValue: null,
    answerChanged: null, // action

    _blocks: _ember.default.computed('proposals', function () {
      return (0, _proposalsAsBlocks.default)(this.get('proposals'));
    }),

    didInsertElement: function didInsertElement() {
      this.$('input').keydown(function () {
        this.get('answerChanged')();
      });
    }

  });
});
define('pix-live/components/result-item', ['exports', 'ember', 'pix-live/utils/result-icon-url'], function (exports, _ember, _resultIconUrl) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var contentReference = {
    ok: {
      status: 'ok',
      tooltip: 'Réponse correcte'
    },

    ko: {
      status: 'ko',
      tooltip: 'Réponse incorrecte'
    },

    aband: {
      status: 'aband',
      tooltip: 'Sans réponse'
    },

    partially: {
      status: 'partially',
      tooltip: 'Réponse partielle'
    },

    timedout: {
      status: 'timedout',
      tooltip: 'Temps dépassé'
    },

    default: {
      status: 'default',
      tooltip: 'Correction automatique en cours de développement ;)'
    }
  };

  exports.default = _ember.default.Component.extend({

    classNames: ['result-item'],

    attributeBindings: ['tabindex'],

    tabindex: 0,

    resultItem: _ember.default.computed('answer.result', function () {
      if (!this.get('answer.result')) return;
      return contentReference[this.get('answer.result')] || contentReference['default'];
    }),

    resultTooltip: _ember.default.computed('resultItem', function () {
      return this.get('resultItem') ? this.get('resultItem').tooltip : null;
    }),

    resultItemIcon: _ember.default.computed('resultItem', function () {
      return (0, _resultIconUrl.default)(this.get('resultItem.status'));
    }),

    validationImplementedForChallengeType: _ember.default.computed('answer.challenge.type', function () {
      var implementedTypes = ['QCM', 'QROC', 'QCU', 'QROCM-ind'];
      var challengeType = this.get('answer.challenge.type');
      return implementedTypes.includes(challengeType);
    }),

    didRender: function didRender() {
      this._super.apply(this, arguments);

      var tooltipElement = this.$('[data-toggle="tooltip"]');
      var tooltipValue = this.get('resultTooltip');

      if (tooltipValue) {
        tooltipElement.tooltip({ title: tooltipValue });
      }
    },


    actions: {
      openComparisonPopin: function openComparisonPopin() {
        var assessmentId = this.get('answer.assessment.id');
        var answerId = this.get('answer.id');
        var index = this.get('index') + 1;

        this.sendAction('openComparison', assessmentId, answerId, index);
      }
    }
  });
});
define('pix-live/components/routable-modal-backdrop', ['exports', 'ember-routable-modal/components/backdrop'], function (exports, _backdrop) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _backdrop.default;
    }
  });
});
define('pix-live/components/routable-modal-close-button', ['exports', 'ember-routable-modal/components/close-button'], function (exports, _closeButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _closeButton.default;
    }
  });
});
define('pix-live/components/routable-modal-hold', ['exports', 'ember-routable-modal/components/hold'], function (exports, _hold) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hold.default;
    }
  });
});
define('pix-live/components/routable-modal-outlet', ['exports', 'ember-routable-modal/components/outlet'], function (exports, _outlet) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _outlet.default;
    }
  });
});
define('pix-live/components/scoring-panel-tantpix', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({
    classNames: ['scoring-panel-tantpix']
  });
});
define('pix-live/components/scoring-panel', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({

    classNames: ['scoring-panel'],

    assessment: null,

    hasATrophy: _ember.default.computed.gt('assessment.estimatedLevel', 0),
    hasSomePix: _ember.default.computed.gt('assessment.pixScore', 0)
  });
});
define('pix-live/components/signin-form', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({

    classNames: ['signin-form-container'],

    displayErrorMessage: false,
    signin: null,
    email: '',
    password: '',

    actions: {
      submit: function submit() {
        var _this = this;

        this.set('displayErrorMessage', false);
        this.get('onSubmit')(this.get('email'), this.get('password')).catch(function () {
          _this.set('displayErrorMessage', true);
        });
      }
    }

  });
});
define('pix-live/components/signup-form', ['exports', 'ember', 'pix-live/utils/email-validator', 'pix-live/utils/password-validator', 'pix-live/config/environment'], function (exports, _ember, _emailValidator, _passwordValidator, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var ERROR_INPUT_MESSAGE_MAP = {
    firstName: 'Votre prénom n’est pas renseigné.',
    lastName: 'Votre nom n’est pas renseigné.',
    email: 'Votre email n’est pas valide.',
    password: 'Votre mot de passe doit comporter au moins une lettre, un chiffre et 8 caractères.'
  };
  var TEMPORARY_DIV_CLASS_MAP = {
    error: 'signup-form__temporary-msg--error',
    success: 'signup-form__temporary-msg--success'
  };

  function getErrorMessage(status, key) {
    return status === 'error' ? ERROR_INPUT_MESSAGE_MAP[key] : null;
  }

  function getValidationStatus(isValidField) {
    return isValidField ? 'error' : 'success';
  }

  function isValuePresent(value) {
    return value.trim() ? true : false;
  }

  exports.default = _ember.default.Component.extend({
    classNames: ['signup-form'],

    _notificationMessage: null,
    validation: null,
    _tokenHasBeenUsed: null,

    init: function init() {
      this._super.apply(this, arguments);
      this._resetValidationFields();
    },
    _updateValidationStatus: function _updateValidationStatus(key, status, message) {
      var statusObject = 'validation.' + key + '.status';
      var messageObject = 'validation.' + key + '.message';
      this.set(statusObject, status);
      this.set(messageObject, message);
    },
    _getModelAttributeValueFromKey: function _getModelAttributeValueFromKey(key) {
      var userModel = this.get('user');
      return userModel.get(key);
    },
    _toggleConfirmation: function _toggleConfirmation(status, message) {
      var _this = this;

      this.set('temporaryAlert', { status: TEMPORARY_DIV_CLASS_MAP[status], message: message });
      if (_environment.default.APP.isMessageStatusTogglingEnabled) {
        _ember.default.run.later(function () {
          _this.set('temporaryAlert', { status: 'default', message: '' });
        }, _environment.default.APP.MESSAGE_DISPLAY_DURATION);
      }
    },
    _resetValidationFields: function _resetValidationFields() {
      var defaultValidationObject = {
        lastName: {
          status: 'default',
          message: null
        },
        firstName: {
          status: 'default',
          message: null
        },
        email: {
          status: 'default',
          message: null
        },
        password: {
          status: 'default',
          message: null
        },
        cgu: {
          status: 'default',
          message: null
        },
        recaptchaToken: {
          status: 'default',
          message: null
        }
      };
      this.set('validation', defaultValidationObject);
    },
    _updateInputsStatus: function _updateInputsStatus() {
      var _this2 = this;

      var errors = this.get('user.errors.content');
      errors.forEach(function (_ref) {
        var attribute = _ref.attribute,
            message = _ref.message;

        _this2._updateValidationStatus(attribute, 'error', message);
      });
    },


    _executeFieldValidation: function _executeFieldValidation(key, isValid) {
      var modelAttrValue = this._getModelAttributeValueFromKey(key);
      var isValidInput = !isValid(modelAttrValue);
      var status = getValidationStatus(isValidInput);
      var message = getErrorMessage(status, key);
      this._updateValidationStatus(key, status, message);
    },

    actions: {
      resetTokenHasBeenUsed: function resetTokenHasBeenUsed() {
        this.set('_tokenHasBeenUsed', false);
      },
      validateInput: function validateInput(key) {
        this._executeFieldValidation(key, isValuePresent);
      },
      validateInputEmail: function validateInputEmail(key) {
        this._executeFieldValidation(key, _emailValidator.default);
      },
      validateInputPassword: function validateInputPassword(key) {
        this._executeFieldValidation(key, _passwordValidator.default);
      },
      signup: function signup() {
        var _this3 = this;

        this.set('_notificationMessage', null);
        this.get('user').save().then(function () {
          _this3.set('_notificationMessage', 'Votre compte a bien été créé !');
          _this3._resetValidationFields();
          _this3.sendAction('refresh');
          _this3.set('_tokenHasBeenUsed', true);
        }).catch(function () {
          _this3._updateInputsStatus();
          _this3.set('_tokenHasBeenUsed', true);
        });
      }
    }
  });
});
define('pix-live/components/signup-textfield', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var INPUT_VALIDATION_STATUS_MAP = {
    default: 'signup-textfield__input--default',
    error: 'signup-textfield__input--error',
    success: 'signup-textfield__input--success'
  };

  var ICON_TYPE_STATUS_MAP = {
    default: '',
    error: 'error',
    success: 'success'
  };

  var MESSAGE_VALIDATION_STATUS_MAP = {
    default: 'signup-textfield__message--default',
    error: 'signup-textfield__message--error',
    success: 'signup-textfield__message--success'
  };

  var INPUT_CONTAINER_VALIDATION_STATUS_MAP = {
    default: 'signup-textfield__input-container--default',
    error: 'signup-textfield__input-container--error',
    success: 'signup-textfield__input-container--success'
  };

  exports.default = _ember.default.Component.extend({
    classNames: ['signup-textfield'],

    label: '',
    textfieldName: '',
    validationMessage: '',

    textfieldType: _ember.default.computed('textfieldName', function () {
      if (this.get('textfieldName') === 'password') {
        return 'password';
      }
      if (this.get('textfieldName') === 'email') {
        return 'email';
      }
      return 'text';
    }),

    _isValidationStatusNotDefault: function _isValidationStatusNotDefault() {
      return this.get('validationStatus') !== 'default';
    },


    hasIcon: _ember.default.computed('validationStatus', 'user.errors.content', function () {
      return this._isValidationStatusNotDefault();
    }),

    inputContainerStatusClass: _ember.default.computed('validationStatus', function () {
      var inputValidationStatus = this.get('validationStatus');
      return INPUT_CONTAINER_VALIDATION_STATUS_MAP[inputValidationStatus] || null;
    }),

    iconType: _ember.default.computed('validationStatus', function () {
      var inputValidationStatus = this.get('validationStatus');
      return ICON_TYPE_STATUS_MAP[inputValidationStatus] || '';
    }),

    inputValidationStatus: _ember.default.computed('validationStatus', function () {
      var inputValidationStatus = this.get('validationStatus');
      return INPUT_VALIDATION_STATUS_MAP[inputValidationStatus] || '';
    }),

    validationMessageClass: _ember.default.computed('validationStatus', function () {
      var inputValidationStatus = this.get('validationStatus');
      return MESSAGE_VALIDATION_STATUS_MAP[inputValidationStatus] || '';
    }),

    actions: {
      validate: function validate() {
        this.sendAction('validate', this.get('textfieldName'));
      }
    }
  });
});
define('pix-live/components/timeout-jauge', ['exports', 'ember', 'pix-live/utils/lodash-custom', 'pix-live/config/environment'], function (exports, _ember, _lodashCustom, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var get = _ember.default.get;
  var set = _ember.default.set;
  var computed = _ember.default.computed;
  var run = _ember.default.run;

  // see http://stackoverflow.com/a/37770048/2595513
  function fmtMSS(s) {
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s;
  }

  exports.default = _ember.default.Component.extend({

    allotedTime: null,

    _totalTime: _ember.default.computed('allotedTime', function () {
      var actualAllotedTime = get(this, 'allotedTime');
      if (!_lodashCustom.default.isNumeric(actualAllotedTime)) {
        return 0;
      }
      return 1000 * actualAllotedTime;
    }),
    _tickInterval: 1000,
    _timer: null,
    _elapsedTime: null,
    _currentTime: Date.now(),

    remainingSeconds: computed('_elapsedTime', function () {
      return _lodashCustom.default.round((get(this, '_totalTime') - get(this, '_elapsedTime')) / 1000);
    }),

    remainingTime: computed('remainingSeconds', function () {
      if (get(this, 'remainingSeconds') < 0) {
        return '0:00';
      }
      return fmtMSS(get(this, 'remainingSeconds'));
    }),

    percentageOfTimeout: computed('_elapsedTime', function () {
      var actualAllotedTime = get(this, 'allotedTime');
      if (!_lodashCustom.default.isNumeric(actualAllotedTime) || !_lodashCustom.default.isStrictlyPositiveInteger(actualAllotedTime.toString())) {
        return 0;
      }
      return 100 - get(this, 'remainingSeconds') / actualAllotedTime * 100;
    }),

    jaugeWidthStyle: computed('percentageOfTimeout', function () {
      return _ember.default.String.htmlSafe('width: ' + this.get('percentageOfTimeout') + '%');
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
      if (_environment.default.APP.isTimerCountdownEnabled) {

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
define('pix-live/components/trophy-item', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({
    classNames: ['trophy-item'],

    level: null
  });
});
define('pix-live/components/warning-page', ['exports', 'ember', 'pix-live/utils/lodash-custom'], function (exports, _ember, _lodashCustom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


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

    if (_lodashCustom.default.isNotInteger(time)) {
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

    if (_lodashCustom.default.isNotInteger(time) || !time) {
      return 0;
    }

    var minutes = _getMinutes(time);
    var seconds = _getSeconds(time);

    var formattedMinutes = minutes;
    var formattedSeconds = seconds < 9 ? '0' + seconds : '' + seconds;

    return formattedMinutes + ':' + formattedSeconds;
  }

  exports.default = _ember.default.Component.extend({

    allocatedHumanTime: _ember.default.computed('time', function () {
      return _formatTimeForText(this.get('time'));
    }),

    allocatedTime: _ember.default.computed('time', function () {
      return _formatTimeForButton(this.get('time'));
    }),

    actions: {
      confirmWarning: function confirmWarning() {
        this.sendAction('hasUserConfirmWarning');
      }
    }
  });
});
define('pix-live/helpers/abs', ['exports', 'ember-math-helpers/helpers/abs'], function (exports, _abs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _abs.default;
    }
  });
  Object.defineProperty(exports, 'abs', {
    enumerable: true,
    get: function () {
      return _abs.abs;
    }
  });
});
define('pix-live/helpers/acos', ['exports', 'ember-math-helpers/helpers/acos'], function (exports, _acos) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _acos.default;
    }
  });
  Object.defineProperty(exports, 'acos', {
    enumerable: true,
    get: function () {
      return _acos.acos;
    }
  });
});
define('pix-live/helpers/acosh', ['exports', 'ember-math-helpers/helpers/acosh'], function (exports, _acosh) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _acosh.default;
    }
  });
  Object.defineProperty(exports, 'acosh', {
    enumerable: true,
    get: function () {
      return _acosh.acosh;
    }
  });
});
define('pix-live/helpers/add', ['exports', 'ember-math-helpers/helpers/add'], function (exports, _add) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _add.default;
    }
  });
  Object.defineProperty(exports, 'add', {
    enumerable: true,
    get: function () {
      return _add.add;
    }
  });
});
define('pix-live/helpers/app-version', ['exports', 'ember', 'pix-live/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = _ember.default.Helper.helper(appVersion);
});
define('pix-live/helpers/asin', ['exports', 'ember-math-helpers/helpers/asin'], function (exports, _asin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _asin.default;
    }
  });
  Object.defineProperty(exports, 'asin', {
    enumerable: true,
    get: function () {
      return _asin.asin;
    }
  });
});
define('pix-live/helpers/asinh', ['exports', 'ember-math-helpers/helpers/asinh'], function (exports, _asinh) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _asinh.default;
    }
  });
  Object.defineProperty(exports, 'asinh', {
    enumerable: true,
    get: function () {
      return _asinh.asinh;
    }
  });
});
define('pix-live/helpers/atan', ['exports', 'ember-math-helpers/helpers/atan'], function (exports, _atan) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _atan.default;
    }
  });
  Object.defineProperty(exports, 'atan', {
    enumerable: true,
    get: function () {
      return _atan.atan;
    }
  });
});
define('pix-live/helpers/atan2', ['exports', 'ember-math-helpers/helpers/atan2'], function (exports, _atan) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _atan.default;
    }
  });
  Object.defineProperty(exports, 'atan2', {
    enumerable: true,
    get: function () {
      return _atan.atan2;
    }
  });
});
define('pix-live/helpers/atanh', ['exports', 'ember-math-helpers/helpers/atanh'], function (exports, _atanh) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _atanh.default;
    }
  });
  Object.defineProperty(exports, 'atanh', {
    enumerable: true,
    get: function () {
      return _atanh.atanh;
    }
  });
});
define('pix-live/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _bsContains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
define('pix-live/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _bsEq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function () {
      return _bsEq.eq;
    }
  });
});
define('pix-live/helpers/bs-not', ['exports', 'ember-bootstrap/helpers/bs-not'], function (exports, _bsNot) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNot.default;
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function () {
      return _bsNot.not;
    }
  });
});
define('pix-live/helpers/bs-read-path', ['exports', 'ember-bootstrap/helpers/bs-read-path'], function (exports, _bsReadPath) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsReadPath.default;
    }
  });
  Object.defineProperty(exports, 'readPath', {
    enumerable: true,
    get: function () {
      return _bsReadPath.readPath;
    }
  });
});
define('pix-live/helpers/cbrt', ['exports', 'ember-math-helpers/helpers/cbrt'], function (exports, _cbrt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cbrt.default;
    }
  });
  Object.defineProperty(exports, 'cbrt', {
    enumerable: true,
    get: function () {
      return _cbrt.cbrt;
    }
  });
});
define('pix-live/helpers/ceil', ['exports', 'ember-math-helpers/helpers/ceil'], function (exports, _ceil) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ceil.default;
    }
  });
  Object.defineProperty(exports, 'ceil', {
    enumerable: true,
    get: function () {
      return _ceil.ceil;
    }
  });
});
define('pix-live/helpers/clz32', ['exports', 'ember-math-helpers/helpers/clz32'], function (exports, _clz) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _clz.default;
    }
  });
  Object.defineProperty(exports, 'clz32', {
    enumerable: true,
    get: function () {
      return _clz.clz32;
    }
  });
});
define('pix-live/helpers/convert-to-html', ['exports', 'ember', 'pix-live/utils/lodash-custom'], function (exports, _ember, _lodashCustom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.convertToHtml = convertToHtml;
  /* global showdown */
  function convertToHtml(params) {
    if (_lodashCustom.default.isArray(params) && params.length > 0) {
      var converter = new showdown.Converter();
      return converter.makeHtml(params[0]);
    }
    return '';
  }

  exports.default = _ember.default.Helper.helper(convertToHtml);
});
define('pix-live/helpers/cos', ['exports', 'ember-math-helpers/helpers/cos'], function (exports, _cos) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cos.default;
    }
  });
  Object.defineProperty(exports, 'cos', {
    enumerable: true,
    get: function () {
      return _cos.cos;
    }
  });
});
define('pix-live/helpers/cosh', ['exports', 'ember-math-helpers/helpers/cosh'], function (exports, _cosh) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cosh.default;
    }
  });
  Object.defineProperty(exports, 'cosh', {
    enumerable: true,
    get: function () {
      return _cosh.cosh;
    }
  });
});
define('pix-live/helpers/div', ['exports', 'ember-math-helpers/helpers/div'], function (exports, _div) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _div.default;
    }
  });
  Object.defineProperty(exports, 'div', {
    enumerable: true,
    get: function () {
      return _div.div;
    }
  });
});
define('pix-live/helpers/eq', ['exports', 'ember', 'pix-live/utils/lodash-custom'], function (exports, _ember, _lodashCustom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.eq = eq;
  function eq(params) {
    var isEqual = false;
    if (_lodashCustom.default.isArray(params) && params.length > 0) {
      isEqual = params[0] === params[1] ? true : false;
    }
    return isEqual;
  }

  exports.default = _ember.default.Helper.helper(eq);
});
define('pix-live/helpers/exp', ['exports', 'ember-math-helpers/helpers/exp'], function (exports, _exp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _exp.default;
    }
  });
  Object.defineProperty(exports, 'exp', {
    enumerable: true,
    get: function () {
      return _exp.exp;
    }
  });
});
define('pix-live/helpers/expm1', ['exports', 'ember-math-helpers/helpers/expm1'], function (exports, _expm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _expm.default;
    }
  });
  Object.defineProperty(exports, 'expm1', {
    enumerable: true,
    get: function () {
      return _expm.expm1;
    }
  });
});
define('pix-live/helpers/extract-extension', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.extractExtension = extractExtension;
  function extractExtension(params) {
    var parts = params[0].split('.');
    var lastIndex = parts.length - 1;
    return parts[lastIndex];
  }

  exports.default = _ember.default.Helper.helper(extractExtension);
});
define('pix-live/helpers/floor', ['exports', 'ember-math-helpers/helpers/floor'], function (exports, _floor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _floor.default;
    }
  });
  Object.defineProperty(exports, 'floor', {
    enumerable: true,
    get: function () {
      return _floor.floor;
    }
  });
});
define('pix-live/helpers/fround', ['exports', 'ember-math-helpers/helpers/fround'], function (exports, _fround) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fround.default;
    }
  });
  Object.defineProperty(exports, 'fround', {
    enumerable: true,
    get: function () {
      return _fround.fround;
    }
  });
});
define('pix-live/helpers/get-challenge-component-class', ['exports', 'ember', 'pix-live/utils/lodash-custom'], function (exports, _ember, _lodashCustom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getChallengeComponentClass = getChallengeComponentClass;
  function getChallengeComponentClass(params) {
    var result = void 0;
    var challenge = params[0];
    var challengeType = challenge.get('type').toUpperCase();
    if ((0, _lodashCustom.default)(challengeType).isAmongst(['QCUIMG', 'QCU', 'QRU'])) {
      result = 'qcu';
    } else if ((0, _lodashCustom.default)(challengeType).isAmongst(['QCMIMG', 'QCM'])) {
      result = 'qcm';
    } else if ((0, _lodashCustom.default)(challengeType).isAmongst(['QROC'])) {
      result = 'qroc';
    } else if ((0, _lodashCustom.default)(challengeType).isAmongst(['QROCM', 'QROCM-IND', 'QROCM-DEP'])) {
      result = 'qrocm';
    }
    return 'challenge-item-' + result;
  }

  exports.default = _ember.default.Helper.helper(getChallengeComponentClass);
});
define('pix-live/helpers/hypot', ['exports', 'ember-math-helpers/helpers/hypot'], function (exports, _hypot) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hypot.default;
    }
  });
  Object.defineProperty(exports, 'hypot', {
    enumerable: true,
    get: function () {
      return _hypot.hypot;
    }
  });
});
define('pix-live/helpers/imul', ['exports', 'ember-math-helpers/helpers/imul'], function (exports, _imul) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _imul.default;
    }
  });
  Object.defineProperty(exports, 'imul', {
    enumerable: true,
    get: function () {
      return _imul.imul;
    }
  });
});
define('pix-live/helpers/inc', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.inc = inc;
  function inc(params) {
    return params[0] + 1;
  }

  exports.default = _ember.default.Helper.helper(inc);
});
define('pix-live/helpers/log-e', ['exports', 'ember-math-helpers/helpers/log-e'], function (exports, _logE) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _logE.default;
    }
  });
  Object.defineProperty(exports, 'logE', {
    enumerable: true,
    get: function () {
      return _logE.logE;
    }
  });
});
define('pix-live/helpers/log10', ['exports', 'ember-math-helpers/helpers/log10'], function (exports, _log) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _log.default;
    }
  });
  Object.defineProperty(exports, 'log10', {
    enumerable: true,
    get: function () {
      return _log.log10;
    }
  });
});
define('pix-live/helpers/log1p', ['exports', 'ember-math-helpers/helpers/log1p'], function (exports, _log1p) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _log1p.default;
    }
  });
  Object.defineProperty(exports, 'log1p', {
    enumerable: true,
    get: function () {
      return _log1p.log1p;
    }
  });
});
define('pix-live/helpers/log2', ['exports', 'ember-math-helpers/helpers/log2'], function (exports, _log) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _log.default;
    }
  });
  Object.defineProperty(exports, 'log2', {
    enumerable: true,
    get: function () {
      return _log.log2;
    }
  });
});
define('pix-live/helpers/max', ['exports', 'ember-math-helpers/helpers/max'], function (exports, _max) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _max.default;
    }
  });
  Object.defineProperty(exports, 'max', {
    enumerable: true,
    get: function () {
      return _max.max;
    }
  });
});
define('pix-live/helpers/min', ['exports', 'ember-math-helpers/helpers/min'], function (exports, _min) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _min.default;
    }
  });
  Object.defineProperty(exports, 'min', {
    enumerable: true,
    get: function () {
      return _min.min;
    }
  });
});
define('pix-live/helpers/mod', ['exports', 'ember-math-helpers/helpers/mod'], function (exports, _mod) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mod.default;
    }
  });
  Object.defineProperty(exports, 'mod', {
    enumerable: true,
    get: function () {
      return _mod.mod;
    }
  });
});
define('pix-live/helpers/mult', ['exports', 'ember-math-helpers/helpers/mult'], function (exports, _mult) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mult.default;
    }
  });
  Object.defineProperty(exports, 'mult', {
    enumerable: true,
    get: function () {
      return _mult.mult;
    }
  });
});
define('pix-live/helpers/or', ['exports', 'ember', 'pix-live/utils/lodash-custom'], function (exports, _ember, _lodashCustom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.or = or;


  function _isATruthyValue(value) {
    return _lodashCustom.default.isTruthy(value) && value === true;
  }

  function or(params) {
    var hasTruthyValue = false;
    if (_lodashCustom.default.isArray(params) && params.length > 1) {
      hasTruthyValue = _isATruthyValue(params[0]) || _isATruthyValue(params[1]) ? true : false;
    }
    return hasTruthyValue;
  }

  exports.default = _ember.default.Helper.helper(or);
});
define('pix-live/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('pix-live/helpers/pow', ['exports', 'ember-math-helpers/helpers/pow'], function (exports, _pow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pow.default;
    }
  });
  Object.defineProperty(exports, 'pow', {
    enumerable: true,
    get: function () {
      return _pow.pow;
    }
  });
});
define('pix-live/helpers/property-of', ['exports', 'ember', 'pix-live/utils/lodash-custom'], function (exports, _ember, _lodashCustom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.propertyOf = propertyOf;
  function propertyOf(params) {
    var map = params[0];
    var key = params[1];
    if (_lodashCustom.default.isObject(map) && _lodashCustom.default.isString(key)) {
      return map[key];
    }
    return '';
  }

  exports.default = _ember.default.Helper.helper(propertyOf);
});
define('pix-live/helpers/random', ['exports', 'ember-math-helpers/helpers/random'], function (exports, _random) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _random.default;
    }
  });
  Object.defineProperty(exports, 'random', {
    enumerable: true,
    get: function () {
      return _random.random;
    }
  });
});
define('pix-live/helpers/round', ['exports', 'ember-math-helpers/helpers/round'], function (exports, _round) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _round.default;
    }
  });
  Object.defineProperty(exports, 'round', {
    enumerable: true,
    get: function () {
      return _round.round;
    }
  });
});
define('pix-live/helpers/route-action', ['exports', 'ember-route-action-helper/helpers/route-action'], function (exports, _routeAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _routeAction.default;
    }
  });
});
define('pix-live/helpers/sign', ['exports', 'ember-math-helpers/helpers/sign'], function (exports, _sign) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sign.default;
    }
  });
  Object.defineProperty(exports, 'sign', {
    enumerable: true,
    get: function () {
      return _sign.sign;
    }
  });
});
define('pix-live/helpers/sin', ['exports', 'ember-math-helpers/helpers/sin'], function (exports, _sin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sin.default;
    }
  });
  Object.defineProperty(exports, 'sin', {
    enumerable: true,
    get: function () {
      return _sin.sin;
    }
  });
});
define('pix-live/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('pix-live/helpers/sqrt', ['exports', 'ember-math-helpers/helpers/sqrt'], function (exports, _sqrt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sqrt.default;
    }
  });
  Object.defineProperty(exports, 'sqrt', {
    enumerable: true,
    get: function () {
      return _sqrt.sqrt;
    }
  });
});
define('pix-live/helpers/strip-instruction', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.stripInstruction = stripInstruction;
  function stripInstruction(params) {
    var result = $(params[0]).text();
    result = result.substr(0, 70);
    result += '...';
    return result;
  }

  exports.default = _ember.default.Helper.helper(stripInstruction);
});
define('pix-live/helpers/sub', ['exports', 'ember-math-helpers/helpers/sub'], function (exports, _sub) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sub.default;
    }
  });
  Object.defineProperty(exports, 'sub', {
    enumerable: true,
    get: function () {
      return _sub.sub;
    }
  });
});
define('pix-live/helpers/tan', ['exports', 'ember-math-helpers/helpers/tan'], function (exports, _tan) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tan.default;
    }
  });
  Object.defineProperty(exports, 'tan', {
    enumerable: true,
    get: function () {
      return _tan.tan;
    }
  });
});
define('pix-live/helpers/tanh', ['exports', 'ember-math-helpers/helpers/tanh'], function (exports, _tanh) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tanh.default;
    }
  });
  Object.defineProperty(exports, 'tanh', {
    enumerable: true,
    get: function () {
      return _tanh.tanh;
    }
  });
});
define('pix-live/helpers/trunc', ['exports', 'ember-math-helpers/helpers/trunc'], function (exports, _trunc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trunc.default;
    }
  });
  Object.defineProperty(exports, 'trunc', {
    enumerable: true,
    get: function () {
      return _trunc.trunc;
    }
  });
});
define('pix-live/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'pix-live/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('pix-live/initializers/bootstrap-linkto', ['exports', 'ember-bootstrap/initializers/bootstrap-linkto'], function (exports, _bootstrapLinkto) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bootstrapLinkto.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _bootstrapLinkto.initialize;
    }
  });
});
define('pix-live/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('pix-live/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('pix-live/initializers/ember-cli-mirage', ['exports', 'ember', 'ember-cli-mirage/utils/read-modules', 'pix-live/config/environment', 'pix-live/mirage/config', 'ember-cli-mirage/server', 'lodash/assign'], function (exports, _ember, _readModules, _environment, _config, _server, _assign2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.startMirage = startMirage;
  var getWithDefault = _ember.default.getWithDefault;
  exports.default = {
    name: 'ember-cli-mirage',
    initialize: function initialize(application) {
      if (arguments.length > 1) {
        // Ember < 2.1
        var container = arguments[0],
            application = arguments[1];
      }

      if (_shouldUseMirage(_environment.default.environment, _environment.default['ember-cli-mirage'])) {
        startMirage(_environment.default);
      }
    }
  };
  function startMirage() {
    var env = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _environment.default;

    var environment = env.environment;
    var discoverEmberDataModels = getWithDefault(env['ember-cli-mirage'] || {}, 'discoverEmberDataModels', true);
    var modules = (0, _readModules.default)(env.modulePrefix);
    var options = (0, _assign2.default)(modules, { environment: environment, baseConfig: _config.default, testConfig: _config.testConfig, discoverEmberDataModels: discoverEmberDataModels });

    return new _server.default(options);
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
define('pix-live/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/index'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('pix-live/initializers/ember-routable-modal', ['exports', 'pix-live/config/environment', 'ember-routable-modal/configuration', 'ember'], function (exports, _environment, _configuration, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        name: 'ember-routable-modal',
        initialize: function initialize() {
            var config = _environment.default['ember-routable-modal'] || {};
            _configuration.default.load(config);

            _ember.default.Router.reopen({
                currentRoutedModalService: _ember.default.inject.service('current-routed-modal'),
                currentRoutedModalWillTransition: function () {
                    this.get('currentRoutedModalService').clear();
                }.on('willTransition')
            });
        }
    };
});
define('pix-live/initializers/ember-simple-auth', ['exports', 'pix-live/config/environment', 'ember-simple-auth/configuration', 'ember-simple-auth/initializers/setup-session', 'ember-simple-auth/initializers/setup-session-service'], function (exports, _environment, _configuration, _setupSession, _setupSessionService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-simple-auth',

    initialize: function initialize(registry) {
      var config = _environment.default['ember-simple-auth'] || {};
      config.baseURL = _environment.default.rootURL || _environment.default.baseURL;
      _configuration.default.load(config);

      (0, _setupSession.default)(registry);
      (0, _setupSessionService.default)(registry);
    }
  };
});
define('pix-live/initializers/export-application-global', ['exports', 'ember', 'pix-live/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
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

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
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

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('pix-live/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('pix-live/initializers/jquery-tabbable', ['exports', 'ember-tabbable/initializers/jquery-tabbable'], function (exports, _jqueryTabbable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _jqueryTabbable.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _jqueryTabbable.initialize;
    }
  });
});
define('pix-live/initializers/load-bootstrap-config', ['exports', 'pix-live/config/environment', 'ember-bootstrap/config'], function (exports, _environment, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  exports.default = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define('pix-live/initializers/metrics', ['exports', 'pix-live/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    var _config$metricsAdapte = _environment.default.metricsAdapters,
        metricsAdapters = _config$metricsAdapte === undefined ? [] : _config$metricsAdapte;
    var _config$environment = _environment.default.environment,
        environment = _config$environment === undefined ? 'development' : _config$environment;

    var options = { metricsAdapters: metricsAdapters, environment: environment };

    application.register('config:metrics', options, { instantiate: false });
    application.inject('service:metrics', 'options', 'config:metrics');
  }

  exports.default = {
    name: 'metrics',
    initialize: initialize
  };
});
define('pix-live/initializers/modals-container', ['exports', 'ember-bootstrap/initializers/modals-container'], function (exports, _modalsContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _modalsContainer.default;
});
define('pix-live/initializers/router', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;

  // See http://stackoverflow.com/questions/18302463/get-current-route-name-in-ember
  function initialize(application) {
    application.inject('route', 'router', 'router:main');
    application.inject('component', 'router', 'router:main');
  }

  exports.default = {
    name: 'router',
    initialize: initialize
  };
});
define('pix-live/initializers/store', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('pix-live/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("pix-live/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('pix-live/instance-initializers/ember-simple-auth', ['exports', 'ember-simple-auth/instance-initializers/setup-session-restoration'], function (exports, _setupSessionRestoration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-simple-auth',

    initialize: function initialize(instance) {
      (0, _setupSessionRestoration.default)(instance);
    }
  };
});
define('pix-live/mirage/config', ['exports', 'pix-live/mirage/routes/get-challenge', 'pix-live/mirage/routes/get-challenges', 'pix-live/mirage/routes/get-next-challenge', 'pix-live/mirage/routes/get-assessment-solutions', 'pix-live/mirage/routes/get-course', 'pix-live/mirage/routes/get-courses', 'pix-live/mirage/routes/get-courses-of-the-week', 'pix-live/mirage/routes/get-answer', 'pix-live/mirage/routes/post-answers', 'pix-live/mirage/routes/patch-answer', 'pix-live/mirage/routes/get-assessment', 'pix-live/mirage/routes/post-assessments', 'pix-live/mirage/routes/get-answer-by-challenge-and-assessment', 'pix-live/mirage/routes/post-followers', 'pix-live/mirage/routes/post-feedbacks', 'pix-live/mirage/routes/post-refresh-solution', 'pix-live/mirage/routes/post-users', 'pix-live/mirage/routes/post-authentications'], function (exports, _getChallenge, _getChallenges, _getNextChallenge, _getAssessmentSolutions, _getCourse, _getCourses, _getCoursesOfTheWeek, _getAnswer, _postAnswers, _patchAnswer, _getAssessment, _postAssessments, _getAnswerByChallengeAndAssessment, _postFollowers, _postFeedbacks, _postRefreshSolution, _postUsers, _postAuthentications) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    this.passthrough('/write-coverage');
    this.post('https://fonts.googleapis.com/**', function () {});
    this.post('https://formspree.io/**', function () {});
    this.post('https://sentry.io/**', function () {});

    this.urlPrefix = 'http://localhost:3000';
    this.namespace = '/api';
    this.timing = 0; // response delay

    this.get('/courses', _getCourses.default);
    this.get('/courses?isCourseOfTheWeek=true', _getCoursesOfTheWeek.default);

    this.get('/challenges', _getChallenges.default);
    this.get('/challenges/:id', _getChallenge.default);

    this.post('/challenges/:challengeId/solution', _postRefreshSolution.default);

    this.post('/assessments', _postAssessments.default);
    this.get('/assessments/:id', _getAssessment.default);
    this.get('/assessments/:assessmentId/next/:challengeId', _getNextChallenge.default);
    this.get('/assessments/:assessmentId/next', _getNextChallenge.default);
    this.get('/assessments/:assessmentId/solutions/:answerId', _getAssessmentSolutions.default);

    this.post('/answers', _postAnswers.default);
    this.get('/answers/:id', _getAnswer.default);
    this.get('/answers', _getAnswerByChallengeAndAssessment.default);
    this.patch('/answers/:id', _patchAnswer.default);

    this.post('/feedbacks', _postFeedbacks.default);

    this.post('/followers', _postFollowers.default);

    this.post('/users', _postUsers.default);

    //Nouveau Mirage

    //CourseGroups
    this.get('/course-groups');

    //Courses
    this.get('/courses/:id', function (schema, request) {

      var id = request.params.id;
      if (['ref_course_id', 'highligthed_course_id', 'ref_timed_challenge_course_id'].includes(id)) {
        return (0, _getCourse.default)(schema, request);
      }
      return schema.courses.find(id);
    });

    this.post('/authentications', _postAuthentications.default);
  };
});
define('pix-live/mirage/data/answers/ref-qcm-answer', ['exports', 'pix-live/mirage/data/challenges/ref-qcm-challenge'], function (exports, _refQcmChallenge) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
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
            id: _refQcmChallenge.default.data.id
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
define('pix-live/mirage/data/answers/ref-qcu-answer', ['exports', 'pix-live/mirage/data/challenges/ref-qcu-challenge'], function (exports, _refQcuChallenge) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
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
            id: _refQcuChallenge.default.data.id
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
define('pix-live/mirage/data/answers/ref-qroc-answer', ['exports', 'pix-live/mirage/data/challenges/ref-qroc-challenge'], function (exports, _refQrocChallenge) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
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
            id: _refQrocChallenge.default.data.id
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
define('pix-live/mirage/data/answers/ref-qrocm-answer', ['exports', 'pix-live/mirage/data/challenges/ref-qrocm-challenge'], function (exports, _refQrocmChallenge) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
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
            id: _refQrocmChallenge.default.data.id
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
define('pix-live/mirage/data/answers/ref-qru-answer', ['exports', 'pix-live/mirage/data/challenges/ref-qru-challenge'], function (exports, _refQruChallenge) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
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
            id: _refQruChallenge.default.data.id
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
define('pix-live/mirage/data/answers/ref-timed-answer-bis', ['exports', 'pix-live/mirage/data/challenges/ref-timed-challenge-bis'], function (exports, _refTimedChallengeBis) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    data: {
      type: 'answers',
      id: 'ref_timed_answer_bis_id',
      attributes: {
        value: '',
        result: 'aband'
      },
      relationships: {
        challenge: {
          data: {
            type: 'challenges',
            id: _refTimedChallengeBis.default.data.id
          }
        },
        assessment: {
          data: {
            type: 'assessments',
            id: 'ref_timed_challenge_assessment_id'
          }
        }
      }
    }
  };
});
define('pix-live/mirage/data/answers/ref-timed-answer', ['exports', 'pix-live/mirage/data/challenges/ref-timed-challenge'], function (exports, _refTimedChallenge) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    data: {
      type: 'answers',
      id: 'ref_timed_answer_id',
      attributes: {
        value: '',
        result: 'aband'
      },
      relationships: {
        challenge: {
          data: {
            type: 'challenges',
            id: _refTimedChallenge.default.data.id
          }
        },
        assessment: {
          data: {
            type: 'assessments',
            id: 'ref_timed_challenge_assessment_id'
          }
        }
      }
    }
  };
});
define('pix-live/mirage/data/assessments/ref-assessment-timed-challenges', ['exports', 'pix-live/mirage/data/courses/ref-course-timed-challenges', 'pix-live/mirage/data/answers/ref-timed-answer', 'pix-live/mirage/data/answers/ref-timed-answer-bis'], function (exports, _refCourseTimedChallenges, _refTimedAnswer, _refTimedAnswerBis) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    data: {
      type: 'assessments',
      id: 'ref_timed_challenge_assessment_id',
      attributes: {
        'user-id': 'user_id',
        'user-name': 'Jon Snow',
        'user-email': 'jsnow@winterfell.got'
      },
      relationships: {
        course: {
          data: {
            type: 'courses',
            id: _refCourseTimedChallenges.default.data.id
          }
        },
        answers: {
          data: [{
            type: 'answers',
            id: _refTimedAnswer.default.data.id
          }, {
            type: 'answers',
            id: _refTimedAnswerBis.default.data.id
          }]
        }
      }
    }
  };
});
define('pix-live/mirage/data/assessments/ref-assessment', ['exports', 'pix-live/mirage/data/courses/ref-course', 'pix-live/mirage/data/answers/ref-qcu-answer', 'pix-live/mirage/data/answers/ref-qru-answer', 'pix-live/mirage/data/answers/ref-qcm-answer', 'pix-live/mirage/data/answers/ref-qroc-answer', 'pix-live/mirage/data/answers/ref-qrocm-answer'], function (exports, _refCourse, _refQcuAnswer, _refQruAnswer, _refQcmAnswer, _refQrocAnswer, _refQrocmAnswer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
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
            id: _refCourse.default.data.id
          }
        },
        answers: {
          data: [{
            type: 'answers',
            id: _refQcmAnswer.default.data.id
          }, {
            type: 'answers',
            id: _refQcuAnswer.default.data.id
          }, {
            type: 'answers',
            id: _refQruAnswer.default.data.id
          }, {
            type: 'answers',
            id: _refQrocAnswer.default.data.id
          }, {
            type: 'answers',
            id: _refQrocmAnswer.default.data.id
          }]
        }
      }
    }
  };
});
define('pix-live/mirage/data/authentications/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    data: {
      type: 'authentication',
      attributes: {
        user_id: 1,
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJlbWFpbCI6InBpeEBjb250YWN0LmNvbSIsImlhdCI6MTQ5Njc0MjQwNywiZXhwIjoxNDk3MzQ3MjA3fQ.KateqHWs9Qaq5zxUxEcOATaPPPh72_HeZIBmCgmtWDo'
      },
      id: 1
    }
  };
});
define('pix-live/mirage/data/challenges/ref-qcm-challenge', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
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
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
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
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
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
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
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
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
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
define('pix-live/mirage/data/challenges/ref-timed-challenge-bis', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    data: {
      type: 'challenge',
      id: 'ref_timed_challenge_bis_id',
      attributes: {
        type: 'QRU',
        timer: 5,
        'illustration-url': 'http://fakeimg.pl/350x200/?text=QRU',
        attachments: ['http://example_of_url'],
        instruction: 'Une question timée contient un décompte en bas a droite qui se decremente à chaque seconde ',
        proposals: '' + '- Une seule possibilite '
      }
    }
  };
});
define('pix-live/mirage/data/challenges/ref-timed-challenge', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    data: {
      type: 'challenge',
      id: 'ref_timed_challenge_id',
      attributes: {
        type: 'QRU',
        timer: 5,
        'illustration-url': 'http://fakeimg.pl/350x200/?text=QRU',
        attachments: ['http://example_of_url'],
        instruction: 'Une question timée contient un décompte en bas a droite qui se decremente à chaque seconde ',
        proposals: '' + '- Une seule possibilite '
      }
    }
  };
});
define('pix-live/mirage/data/courses/highlighted-course', ['exports', 'pix-live/mirage/data/challenges/ref-qcm-challenge'], function (exports, _refQcmChallenge) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
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
            id: _refQcmChallenge.default.data.id
          }]
        }
      }
    }
  };
});
define('pix-live/mirage/data/courses/ref-course-timed-challenges', ['exports', 'pix-live/mirage/data/challenges/ref-timed-challenge', 'pix-live/mirage/data/challenges/ref-timed-challenge-bis'], function (exports, _refTimedChallenge, _refTimedChallengeBis) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    data: {
      type: 'courses',
      id: 'ref_timed_challenge_course_id',
      attributes: {
        name: 'Course with timed challenges',
        description: 'Contient uniquement des épreuves timées',
        duration: 10,
        'image-url': 'http://fakeimg.pl/350x200/?text=First%20Course'
      },
      relationships: {
        challenges: {
          data: [{
            type: 'challenges',
            id: _refTimedChallenge.default.data.id
          }, {
            type: 'challenges',
            id: _refTimedChallengeBis.default.data.id
          }]
        }
      }
    }
  };
});
define('pix-live/mirage/data/courses/ref-course', ['exports', 'pix-live/mirage/data/challenges/ref-qcm-challenge', 'pix-live/mirage/data/challenges/ref-qcu-challenge', 'pix-live/mirage/data/challenges/ref-qru-challenge', 'pix-live/mirage/data/challenges/ref-qroc-challenge', 'pix-live/mirage/data/challenges/ref-qrocm-challenge'], function (exports, _refQcmChallenge, _refQcuChallenge, _refQruChallenge, _refQrocChallenge, _refQrocmChallenge) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
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
            id: _refQcmChallenge.default.data.id
          }, {
            type: 'challenges',
            id: _refQcuChallenge.default.data.id
          }, {
            type: 'challenges',
            id: _refQruChallenge.default.data.id
          }, {
            type: 'challenges',
            id: _refQrocChallenge.default.data.id
          }, {
            type: 'challenges',
            id: _refQrocmChallenge.default.data.id
          }]
        }
      }
    }
  };
});
define('pix-live/mirage/data/feedbacks/ref-feedback', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
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
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
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
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
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
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    data: {
      type: 'solutions',
      id: 'ref_solution_id',
      attributes: {
        value: '2,3'
      }
    }
  };
});
define('pix-live/mirage/data/users/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    data: {
      type: 'users',
      id: 'user_id',
      attributes: {
        'first-name': 'Samurai',
        'last-name': 'Jack',
        'email': 'samurai.jack@cartoon-network.com',
        'password': 'Back2TheP@st',
        'cgu': true
      }
    }
  };
});
define('pix-live/mirage/factories/course-group', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.Factory.extend({
    name: function name() {
      return _emberCliMirage.faker.name.lastName();
    }
  });
});
define('pix-live/mirage/factories/course', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.Factory.extend({
    name: function name(i) {
      return 'course ' + i;
    }
  });
});
define('pix-live/mirage/fixtures/answers', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = [{ id: 'ref_answer_qcm_id', value: '2, 4', result: 'ko', challengeId: 'ref_qcm_challenge_id', assessment: 'ref_assessment_id' }, { id: 'ref_answer_qcu_id', value: '2', result: 'ok', challengeId: 'ref_qcu_challenge_id', assessment: 'ref_assessment_id' }, { id: 'ref_answer_qroc_id', value: 'Bill', result: 'pending', challengeId: 'ref_qroc_challenge_id', assessment: 'ref_assessment_id' }, { id: 'ref_answer_qrocm_id', value: 'logiciel1: word\nlogiciel2: excel\nlogiciel3: powerpoint', result: 'partially', challengeId: 'ref_qrocm_challenge_id', assessment: 'ref_assessment_id' }, { id: 'ref_answer_qru_id', value: '', result: 'aband', challengeId: 'ref_qru_challenge_id', assessment: 'ref_assessment_id' }, { id: 'ref_timed_answer_id', value: '', result: 'aband', challengeId: 'ref_timed_challenge_id', assessment: 'ref_timed_challenge_assessment_id' }, { id: 'ref_timed_answer_bis_id', value: '', result: 'aband', challengeId: 'ref_timed_challenge_bis_id', assessment: 'ref_timed_challenge_assessment_id' }];
});
define('pix-live/mirage/fixtures/assessments', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = [{ id: 'ref_assessment_id', 'user-id': 'user_id', 'user-name': 'Jon Snow', 'user-email': 'jsnow@winterfell.got', course: 'ref_course_id', answers: ['ref_answer_qcm_id', 'ref_answer_qcu_id', 'ref_answer_qroc_id', 'ref_answer_qrocm_id', 'ref_answer_qru_id'] }, { id: 'ref_timed_challenge_assessment_id', 'user-id': 'user_id', 'user-name': 'Jon Snow', 'user-email': 'jsnow@winterfell.got', course: 'ref_timed_challenge_course_id', answers: ['ref_timed_answer_id', 'ref_timed_answer_bis_id'] }];
});
define('pix-live/mirage/fixtures/challenges', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = [{
    id: 'ref_qcm_challenge_id',
    type: 'QCM',
    timer: 2,
    instruction: 'Un QCM propose plusieurs choix, l\'utilisateur peut en choisir [plusieurs](http://link.plusieurs.url)',
    attachments: ['http://example_of_url'],
    'illustration-url': 'http://fakeimg.pl/350x200/?text=PictureOfQCM',
    proposals: '- possibilite 1, et/ou' + '\n - possibilite 2, et/ou' + '\n - possibilite 3, et/ou' + '\n - possibilite 4'
  }, {
    id: 'ref_qcu_challenge_id',
    type: 'QCU',
    timer: 2,
    instruction: 'Un QCU propose plusieurs choix, l\'utilisateur peut en choisir [un seul](http://link.unseul.url)',
    attachments: ['file.docx', 'file.odt'],
    'illustration-url': 'http://fakeimg.pl/350x200/?text=QCU',
    'hasnt-internet-allowed': true,
    proposals: '- 1ere possibilite\n ' + '- 2eme possibilite\n ' + '- 3eme possibilite\n' + '- 4eme possibilite'
  }, {
    id: 'ref_qroc_challenge_id',
    type: 'QROC',
    instruction: 'Un QROC est une question ouverte avec un simple champ texte libre pour répondre',
    proposals: 'Entrez le prénom de B. Gates : ${firstname#prénom} (en toutes lettres)\nSVP'
  }, {
    id: 'ref_qrocm_challenge_id',
    type: 'QROCM',
    instruction: 'Un QROCM est une question [ouverte](http://link.ouverte.url) avec plusieurs champs texte libre pour repondre',
    proposals: 'Trois logiciels libres : ${logiciel1#un} ${logiciel2#deux} ${logiciel3#trois}\nMerci'
  }, {
    id: 'ref_qru_challenge_id',
    type: 'QRU',
    'illustration-url': 'http://fakeimg.pl/350x200/?text=QRU',
    attachments: ['http://example_of_url'],
    instruction: 'Un QRU propose un seul choix, typiquement cocher si oui ou non il a effectué une action quelque [part](http://link.part.url) ',
    proposals: '- Une seule possibilite '
  }, {
    id: 'ref_timed_challenge_id',
    type: 'QRU',
    timer: 5,
    'illustration-url': 'http://fakeimg.pl/350x200/?text=QRU',
    attachments: ['http://example_of_url'],
    instruction: 'Une question timée contient un décompte en bas a droite qui se decremente à chaque seconde ',
    proposals: '- Une seule possibilite '
  }, {
    id: 'ref_timed_challenge_bis_id',
    type: 'QRU',
    timer: 5,
    'illustration-url': 'http://fakeimg.pl/350x200/?text=QRU',
    attachments: ['http://example_of_url'],
    instruction: 'Une question timée contient un décompte en bas a droite qui se decremente à chaque seconde ',
    proposals: '- Une seule possibilite '
  }];
});
define('pix-live/mirage/fixtures/courses', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = [{
    id: 'highligthed_course_id',
    name: 'Traiter des données',
    description: 'Recherche d\'information, gestion et traitement de données.',
    'image-url': 'http://fakeimg.pl/350x200/?text=First%20Course',
    challenges: ['ref_qcm_challenge_id']
  }, {
    id: 'ref_course_id',
    name: 'First Course',
    description: 'Contient toutes sortes d\'epreuves avec différentes caractéristiques couvrant tous les cas d\'usage.',
    duration: 10,
    'image-url': 'http://fakeimg.pl/350x200/?text=First%20Course',
    challengeId: ['ref_qcm_challenge_id', 'ref_qcu_challenge_id', 'ref_qru_challenge_id', 'ref_qroc_challenge_id', 'ref_qrocm_challenge_id']
  }, {
    id: 'ref_timed_challenge_course_id',
    name: 'Course with timed challenges',
    description: 'Contient uniquement des épreuves timées',
    duration: 10,
    'image-url': 'http://fakeimg.pl/350x200/?text=First%20Course',
    challenges: ['ref_timed_challenge_id', 'ref_timed_challenge_bis_id']
  }];
});
define('pix-live/mirage/fixtures/feedbacks', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = [{ id: 'ref_feedback_id', email: 'shi@fu.me', content: 'Some content', assessment: 'assessment_id', challenge: 'challenge_id' }];
});
define('pix-live/mirage/fixtures/followers', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = [{ id: 'follower_id', 'email': 'jsnow@winterfell.got' }];
});
define('pix-live/mirage/fixtures/solutions', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = [{ id: 'ref_solution_id', value: '2' }, { id: 'ref_solution_id2', value: '2,3' }];
});
define('pix-live/mirage/fixtures/users', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = [{ id: 'user_id' }];
});
define('pix-live/mirage/routes/get-answer-by-challenge-and-assessment', ['exports', 'pix-live/utils/lodash-custom', 'pix-live/mirage/data/answers/ref-qcm-answer', 'pix-live/mirage/data/answers/ref-qcu-answer', 'pix-live/mirage/data/answers/ref-qru-answer', 'pix-live/mirage/data/answers/ref-qroc-answer', 'pix-live/mirage/data/answers/ref-qrocm-answer', 'pix-live/mirage/data/answers/ref-timed-answer', 'pix-live/mirage/data/answers/ref-timed-answer-bis'], function (exports, _lodashCustom, _refQcmAnswer, _refQcuAnswer, _refQruAnswer, _refQrocAnswer, _refQrocmAnswer, _refTimedAnswer, _refTimedAnswerBis) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (schema, request) {

    var allAnswers = [_refQcuAnswer.default, _refQruAnswer.default, _refQcmAnswer.default, _refQrocAnswer.default, _refQrocmAnswer.default, _refTimedAnswer.default, _refTimedAnswerBis.default];

    var answers = _lodashCustom.default.map(allAnswers, function (oneAnswer) {
      return { id: oneAnswer.data.id, obj: oneAnswer };
    });

    var answer = _lodashCustom.default.find(answers, function (oneAnswer) {
      var belongsToAssessment = _lodashCustom.default.get(oneAnswer.obj, 'data.relationships.assessment.data.id') === request.queryParams.assessment;
      var belongsToChallenge = _lodashCustom.default.get(oneAnswer.obj, 'data.relationships.challenge.data.id') === request.queryParams.challenge;
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
define('pix-live/mirage/routes/get-answer', ['exports', 'pix-live/utils/lodash-custom', 'pix-live/mirage/data/answers/ref-qcm-answer', 'pix-live/mirage/data/answers/ref-qcu-answer', 'pix-live/mirage/data/answers/ref-qru-answer', 'pix-live/mirage/data/answers/ref-qroc-answer', 'pix-live/mirage/data/answers/ref-qrocm-answer', 'pix-live/mirage/data/answers/ref-timed-answer', 'pix-live/mirage/data/answers/ref-timed-answer-bis'], function (exports, _lodashCustom, _refQcmAnswer, _refQcuAnswer, _refQruAnswer, _refQrocAnswer, _refQrocmAnswer, _refTimedAnswer, _refTimedAnswerBis) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (schema, request) {

    var allAnswers = [_refQcuAnswer.default, _refQruAnswer.default, _refQcmAnswer.default, _refQrocAnswer.default, _refQrocmAnswer.default, _refTimedAnswer.default, _refTimedAnswerBis.default];

    var answers = _lodashCustom.default.map(allAnswers, function (oneAnswer) {
      return { id: oneAnswer.data.id, obj: oneAnswer };
    });

    var answer = _lodashCustom.default.find(answers, { id: request.params.id });

    if (answer) {
      return answer.obj;
    } else {
      throw new Error({ message: '404 The answer you required in the fake server does not exist ' + request.params.id });
    }
  };
});
define('pix-live/mirage/routes/get-assessment-solutions', ['exports', 'pix-live/mirage/data/solutions/ref-solution', 'pix-live/mirage/data/solutions/ref-qcu-solution'], function (exports, _refSolution, _refQcuSolution) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (schema, request) {

    return request.params.answerId === 'ref_answer_qcu_id' ? _refQcuSolution.default : _refSolution.default;
  };
});
define('pix-live/mirage/routes/get-assessment', ['exports', 'pix-live/utils/lodash-custom', 'pix-live/mirage/data/assessments/ref-assessment', 'pix-live/mirage/data/assessments/ref-assessment-timed-challenges'], function (exports, _lodashCustom, _refAssessment, _refAssessmentTimedChallenges) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (schema, request) {

    var allAssessments = [_refAssessment.default, _refAssessmentTimedChallenges.default];

    var assessments = _lodashCustom.default.map(allAssessments, function (oneAssessment) {
      return { id: oneAssessment.data.id, obj: oneAssessment };
    });

    var assessment = _lodashCustom.default.find(assessments, { id: request.params.id });

    if (assessment) {
      return assessment.obj;
    } else {
      throw new Error('The assessment you required in the fake server does not exist ' + request.params.id);
    }
  };
});
define('pix-live/mirage/routes/get-challenge', ['exports', 'pix-live/utils/lodash-custom', 'pix-live/mirage/data/challenges/ref-qcm-challenge', 'pix-live/mirage/data/challenges/ref-qcu-challenge', 'pix-live/mirage/data/challenges/ref-qru-challenge', 'pix-live/mirage/data/challenges/ref-qroc-challenge', 'pix-live/mirage/data/challenges/ref-qrocm-challenge', 'pix-live/mirage/data/challenges/ref-timed-challenge', 'pix-live/mirage/data/challenges/ref-timed-challenge-bis'], function (exports, _lodashCustom, _refQcmChallenge, _refQcuChallenge, _refQruChallenge, _refQrocChallenge, _refQrocmChallenge, _refTimedChallenge, _refTimedChallengeBis) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (schema, request) {

    var allChallenges = [_refQcmChallenge.default, _refQcuChallenge.default, _refQruChallenge.default, _refQrocChallenge.default, _refQrocmChallenge.default, _refTimedChallenge.default, _refTimedChallengeBis.default];

    var challenges = _lodashCustom.default.map(allChallenges, function (oneChallenge) {
      return { id: oneChallenge.data.id, obj: oneChallenge };
    });

    var challenge = _lodashCustom.default.find(challenges, { id: request.params.id });

    if (challenge) {
      return challenge.obj;
    } else {
      throw new Error('The challenge you required in the fake server does not exist ' + request.params.id);
    }
  };
});
define('pix-live/mirage/routes/get-challenges', ['exports', 'pix-live/mirage/data/challenges/ref-qcm-challenge', 'pix-live/mirage/data/challenges/ref-qcu-challenge', 'pix-live/mirage/data/challenges/ref-qru-challenge', 'pix-live/mirage/data/challenges/ref-qroc-challenge', 'pix-live/mirage/data/challenges/ref-qrocm-challenge', 'pix-live/mirage/data/challenges/ref-timed-challenge', 'pix-live/mirage/data/challenges/ref-timed-challenge-bis'], function (exports, _refQcmChallenge, _refQcuChallenge, _refQruChallenge, _refQrocChallenge, _refQrocmChallenge, _refTimedChallenge, _refTimedChallengeBis) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {

    return {
      data: [_refQcmChallenge.default.data, _refQcuChallenge.default.data, _refQruChallenge.default.data, _refQrocChallenge.default.data, _refQrocmChallenge.default.data, _refTimedChallenge.default.data, _refTimedChallengeBis.default.data]
    };
  };
});
define('pix-live/mirage/routes/get-course', ['exports', 'pix-live/utils/lodash-custom', 'pix-live/mirage/data/courses/ref-course', 'pix-live/mirage/data/courses/highlighted-course', 'pix-live/mirage/data/courses/ref-course-timed-challenges'], function (exports, _lodashCustom, _refCourse, _highlightedCourse, _refCourseTimedChallenges) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (schema, request) {

    var allCourses = [_refCourse.default, _highlightedCourse.default, _refCourseTimedChallenges.default];

    var courses = _lodashCustom.default.map(allCourses, function (oneCourse) {
      return { id: oneCourse.data.id, obj: oneCourse };
    });

    var course = _lodashCustom.default.find(courses, { id: request.params.id });

    if (course) {
      return course.obj;
    } else {
      throw new Error('The course you required in the fake server does not exist ' + request.params.id);
    }
  };
});
define('pix-live/mirage/routes/get-courses-of-the-week', ['exports', 'pix-live/mirage/data/courses/highlighted-course'], function (exports, _highlightedCourse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    return { data: [_highlightedCourse.default.data] };
  };
});
define('pix-live/mirage/routes/get-courses', ['exports', 'pix-live/mirage/data/courses/ref-course', 'pix-live/mirage/data/courses/highlighted-course'], function (exports, _refCourse, _highlightedCourse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (schema, request) {
    var courses = [_refCourse.default.data];

    if (request.queryParams && request.queryParams.isCourseOfTheWeek) {
      courses.push(_highlightedCourse.default.data);
    }

    return { data: courses };
  };
});
define('pix-live/mirage/routes/get-next-challenge', ['exports', 'pix-live/mirage/data/challenges/ref-qcm-challenge', 'pix-live/mirage/data/challenges/ref-qcu-challenge', 'pix-live/mirage/data/challenges/ref-qru-challenge', 'pix-live/mirage/data/challenges/ref-qroc-challenge', 'pix-live/mirage/data/challenges/ref-qrocm-challenge', 'pix-live/mirage/data/challenges/ref-timed-challenge-bis'], function (exports, _refQcmChallenge, _refQcuChallenge, _refQruChallenge, _refQrocChallenge, _refQrocmChallenge, _refTimedChallengeBis) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (schema, request) {

    // case 1 : we're trying to reach the first challenge for a given assessment
    if (!request.params.challengeId) {
      switch (request.params.assessmentId) {
        case 'ref_assessment_id':
          return _refQcmChallenge.default;
        default:
          throw new Error('This assessment is not defined ' + request.params.assessmentId);
      }
    }

    // case 2 : test already started, challenge exists.
    var nextChallenge = {

      // ref_course
      'ref_qcm_challenge_id': _refQcuChallenge.default,
      'ref_qcu_challenge_id': _refQruChallenge.default,
      'ref_qru_challenge_id': _refQrocChallenge.default,
      'ref_qroc_challenge_id': _refQrocmChallenge.default,
      'ref_qrocm_challenge_id': 'null',

      'ref_timed_challenge_id': _refTimedChallengeBis.default,
      'ref_timed_challenge_bis_id': 'null'

    };

    var challenge = nextChallenge[request.params.challengeId];

    if (challenge) {
      return challenge;
    } else {
      throw new Error('There is no challenge following challenge ' + request.params.challengeId);
    }
  };
});
define('pix-live/mirage/routes/patch-answer', ['exports', 'pix-live/utils/lodash-custom', 'pix-live/mirage/data/answers/ref-qcu-answer', 'pix-live/mirage/data/answers/ref-qru-answer', 'pix-live/mirage/data/answers/ref-qcm-answer', 'pix-live/mirage/data/answers/ref-qroc-answer', 'pix-live/mirage/data/answers/ref-qrocm-answer', 'pix-live/mirage/data/answers/ref-timed-answer', 'pix-live/mirage/data/answers/ref-timed-answer-bis'], function (exports, _lodashCustom, _refQcuAnswer, _refQruAnswer, _refQcmAnswer, _refQrocAnswer, _refQrocmAnswer, _refTimedAnswer, _refTimedAnswerBis) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (schema, request) {

    var receivedAnswer = JSON.parse(request.requestBody);

    var allAnswers = [_refQcmAnswer.default, _refQcuAnswer.default, _refQruAnswer.default, _refQrocAnswer.default, _refQrocmAnswer.default, _refTimedAnswer.default, _refTimedAnswerBis.default];
    var existingAnswer = _lodashCustom.default.find(allAnswers, function (answer) {
      return answer.data.id === receivedAnswer.data.id;
    });
    if (!existingAnswer) {
      throw new Error('Unable to PATCH this answer: no answer with id `' + receivedAnswer.data.id + '` found in the stubs.');
    }

    var updatedAnswer = existingAnswer;
    Object.assign(updatedAnswer.data.attributes, receivedAnswer.data.attributes);
    return updatedAnswer;
  };
});
define('pix-live/mirage/routes/post-answers', ['exports', 'pix-live/utils/lodash-custom', 'pix-live/mirage/data/challenges/ref-qcm-challenge', 'pix-live/mirage/data/challenges/ref-qcu-challenge', 'pix-live/mirage/data/challenges/ref-qru-challenge', 'pix-live/mirage/data/challenges/ref-qroc-challenge', 'pix-live/mirage/data/challenges/ref-qrocm-challenge', 'pix-live/mirage/data/challenges/ref-timed-challenge', 'pix-live/mirage/data/challenges/ref-timed-challenge-bis', 'pix-live/mirage/data/answers/ref-qcu-answer', 'pix-live/mirage/data/answers/ref-qru-answer', 'pix-live/mirage/data/answers/ref-qcm-answer', 'pix-live/mirage/data/answers/ref-qroc-answer', 'pix-live/mirage/data/answers/ref-qrocm-answer', 'pix-live/mirage/data/answers/ref-timed-answer', 'pix-live/mirage/data/answers/ref-timed-answer-bis'], function (exports, _lodashCustom, _refQcmChallenge, _refQcuChallenge, _refQruChallenge, _refQrocChallenge, _refQrocmChallenge, _refTimedChallenge, _refTimedChallengeBis, _refQcuAnswer, _refQruAnswer, _refQcmAnswer, _refQrocAnswer, _refQrocmAnswer, _refTimedAnswer, _refTimedAnswerBis) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (schema, request) {

    var answer = JSON.parse(request.requestBody);
    var challengeId = answer.data.relationships.challenge.data.id;

    var allChallenges = [_refQcmChallenge.default, _refQcuChallenge.default, _refQruChallenge.default, _refQrocChallenge.default, _refQrocmChallenge.default, _refTimedChallenge.default, _refTimedChallengeBis.default];

    var allAnswers = [_refQcmAnswer.default, _refQcuAnswer.default, _refQruAnswer.default, _refQrocAnswer.default, _refQrocmAnswer.default, _refTimedAnswer.default, _refTimedAnswerBis.default];

    var answers = _lodashCustom.default.map(allChallenges, function (oneChallenge, index) {
      return { id: oneChallenge.data.id, obj: allAnswers[index] };
    });

    var finalAnswer = _lodashCustom.default.find(answers, { id: challengeId });

    if (finalAnswer) {
      return finalAnswer.obj;
    } else {
      throw new Error('Unable to POST this answer in the stub, sorry');
    }
  };
});
define('pix-live/mirage/routes/post-assessments', ['exports', 'pix-live/utils/lodash-custom', 'pix-live/mirage/data/assessments/ref-assessment'], function (exports, _lodashCustom, _refAssessment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (schema, request) {

    var answer = JSON.parse(request.requestBody);
    var courseId = answer.data.relationships.course.data.id;

    var allAssessments = [_refAssessment.default];

    var assessments = _lodashCustom.default.map(allAssessments, function (oneAssessment) {
      return { id: oneAssessment.data.relationships.course.data.id, obj: oneAssessment };
    });

    var assessment = _lodashCustom.default.find(assessments, { id: courseId });

    if (assessment) {
      return assessment.obj;
    } else if (_lodashCustom.default.startsWith(courseId, 'null')) {
      return _refAssessment.default;
    } else {
      throw new Error('undefined new assessment, sorry');
    }
  };
});
define('pix-live/mirage/routes/post-authentications', ['exports', 'pix-live/mirage/data/authentications'], function (exports, _authentications) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    return _authentications.default;
  };
});
define('pix-live/mirage/routes/post-feedbacks', ['exports', 'pix-live/mirage/data/feedbacks/ref-feedback'], function (exports, _refFeedback) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    return _refFeedback.default;
  };
});
define('pix-live/mirage/routes/post-followers', ['exports', 'pix-live/mirage/data/followers'], function (exports, _followers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {

    return _followers.default;
  };
});
define('pix-live/mirage/routes/post-refresh-solution', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {

    return 'ok';
  };
});
define('pix-live/mirage/routes/post-users', ['exports', 'pix-live/mirage/data/users'], function (exports, _users) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {

    return _users.default;
  };
});
define('pix-live/mirage/scenarios/default', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (server) {

    var courses = server.createList('course', 2, { name: 'course name' });
    server.createList('courseGroup', 3, { courses: courses });
  };
});
define('pix-live/mirage/serializers/application', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.JSONAPISerializer.extend({});
});
define('pix-live/models/answer', ['exports', 'ember-data', 'pix-live/models/answer/value-as-array-of-string-mixin'], function (exports, _emberData, _valueAsArrayOfStringMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Model = _emberData.default.Model,
      attr = _emberData.default.attr,
      belongsTo = _emberData.default.belongsTo;
  exports.default = Model.extend(_valueAsArrayOfStringMixin.default, {

    value: attr('string'),
    result: attr('string'),
    resultDetails: attr('string'),
    timeout: attr('number'),
    elapsedTime: attr('number'),
    assessment: belongsTo('assessment'),
    challenge: belongsTo('challenge')
  });
});
define('pix-live/models/answer/value-as-array-of-string-mixin', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Mixin.create({

    _valuesAsMap: _ember.default.computed('value', function () {
      try {
        return jsyaml.load(this.get('value'));
      } catch (e) {
        return undefined;
      }
    })

  });
});
define('pix-live/models/assessment', ['exports', 'ember', 'ember-data'], function (exports, _ember, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var attr = _emberData.default.attr,
      Model = _emberData.default.Model,
      belongsTo = _emberData.default.belongsTo,
      hasMany = _emberData.default.hasMany;
  var computed = _ember.default.computed;
  exports.default = Model.extend({

    course: belongsTo('course', { inverse: null }),
    answers: hasMany('answer'),
    userName: attr('string'),
    userEmail: attr('string'),
    firstChallenge: computed.alias('course.challenges.firstObject'),
    estimatedLevel: attr('number'),
    pixScore: attr('number')

  });
});
define('pix-live/models/challenge', ['exports', 'ember', 'ember-data'], function (exports, _ember, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Model = _emberData.default.Model,
      attr = _emberData.default.attr,
      belongsTo = _emberData.default.belongsTo;
  exports.default = Model.extend({

    instruction: attr('string'),
    proposals: attr('string'),
    hasntInternetAllowed: attr('boolean'),
    timer: attr('number'),
    illustrationUrl: attr('string'),
    type: attr('string'),

    attachments: attr('array'),
    answer: belongsTo('answer'),

    hasAttachment: _ember.default.computed.notEmpty('attachments'),
    hasSingleAttachment: _ember.default.computed.equal('attachments.length', 1),
    hasMultipleAttachments: _ember.default.computed.gt('attachments.length', 1),
    hasTimer: _ember.default.computed.notEmpty('timer')
  });
});
define('pix-live/models/course-group', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Model = _emberData.default.Model,
      attr = _emberData.default.attr,
      hasMany = _emberData.default.hasMany;
  exports.default = Model.extend({
    name: attr('string'),
    courses: hasMany('course', { inverse: null })
  });
});
define('pix-live/models/course', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Model = _emberData.default.Model,
      attr = _emberData.default.attr,
      hasMany = _emberData.default.hasMany;
  exports.default = Model.extend({

    name: attr('string'),
    description: attr('string'),
    duration: attr('number'),
    imageUrl: attr('string'),
    isAdaptive: attr('boolean'),
    nbChallenges: attr('number'),
    challenges: hasMany('challenge', { inverse: null }),

    getProgress: function getProgress(challenge) {
      var challengeIndex = this.get('challenges').indexOf(challenge);

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
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({

    email: _emberData.default.attr('string'),
    content: _emberData.default.attr('string'),
    assessment: _emberData.default.belongsTo('assessment'),
    challenge: _emberData.default.belongsTo('challenge')

  });
});
define('pix-live/models/follower', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    email: _emberData.default.attr('string')
  });
});
define('pix-live/models/solution', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Model = _emberData.default.Model,
      attr = _emberData.default.attr;
  exports.default = Model.extend({

    value: attr('string')

  });
});
define('pix-live/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Model = _emberData.default.Model,
      attr = _emberData.default.attr;
  exports.default = Model.extend({
    firstName: attr('string'),
    lastName: attr('string'),
    email: attr('string'),
    password: attr('string'),
    cgu: attr('boolean'),
    recaptchaToken: attr('string')
  });
});
define('pix-live/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('pix-live/router', ['exports', 'ember', 'pix-live/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = _ember.default.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  // XXX https://github.com/poteto/ember-metrics/issues/43#issuecomment-252081256
  if (_environment.default.environment === 'integration' || _environment.default.environment === 'staging' || _environment.default.environment === 'production') {
    // do not make any sense in test ENV, therefore can be safely ignored
    /* istanbul ignore next */
    Router.reopen({
      metrics: _ember.default.inject.service(),

      didTransition: function didTransition() {
        this._super.apply(this, arguments);
        this._trackPage();
      },
      _trackPage: function _trackPage() {
        var _this = this;

        _ember.default.run.scheduleOnce('afterRender', this, function () {
          var page = _this.get('url');
          var title = _this.getWithDefault('currentRouteName', 'unknown');
          _ember.default.get(_this, 'metrics').trackPage({ page: page, title: title });
        });
      }
    });
  }

  Router.map(function () {
    this.route('index', { path: '/' });
    this.route('courses');
    this.route('placement-tests');
    this.route('project', { path: '/projet' });
    this.route('competences');
    this.route('inscription');
    this.route('compte');

    this.route('challenges.get-preview', { path: '/challenges/:challenge_id/preview' });

    this.route('courses.get-course-preview', { path: '/courses/:course_id/preview' });
    this.route('courses.get-challenge-preview', { path: '/courses/:course_id/preview/challenges/:challenge_id' });
    this.route('courses.create-assessment', { path: '/courses/:course_id' });
    this.route('courses.create-assessment-old', { path: '/courses/:course_id/assessment' });

    this.route('assessments.get-challenge', { path: '/assessments/:assessment_id/challenges/:challenge_id' });
    this.route('assessments.get-results', { path: '/assessments/:assessment_id/results' });
    this.route('assessments.get-comparison', { path: '/assessments/:assessment_id/results/compare/:answer_id/:index' });
    this.route('course-groups', { path: '/defis-pix' });
    this.route('connexion');
    this.route('deconnexion');
  });

  exports.default = Router;
});
define('pix-live/routes/application', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({
    splash: _ember.default.inject.service(),

    activate: function activate() {
      this.get('splash').hide();
    }
  });
});
define('pix-live/routes/assessments/get-challenge', ['exports', 'ember', 'pix-live/routes/base-route'], function (exports, _ember, _baseRoute) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var RSVP = _ember.default.RSVP;
  exports.default = _baseRoute.default.extend({

    assessmentService: _ember.default.inject.service('assessment'),

    model: function model(params) {

      var store = this.get('store');

      var assessmentId = params.assessment_id;
      var challengeId = params.challenge_id;

      return RSVP.hash({
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
    _findOrCreateAnswer: function _findOrCreateAnswer(challenge, assessment) {
      var answer = assessment.get('answers').findBy('challenge.id', challenge.get('id'));
      if (!answer) {
        answer = this.get('store').createRecord('answer', {
          assessment: assessment,
          challenge: challenge
        });
      }
      return answer;
    },
    _urlForNextChallenge: function _urlForNextChallenge(adapter, assessmentId, challengeId) {
      return adapter.buildURL('assessment', assessmentId) + '/next/' + challengeId;
    },
    _navigateToNextView: function _navigateToNextView(challenge, assessment) {
      var _this = this;

      var adapter = this.get('store').adapterFor('application');
      return adapter.ajax(this._urlForNextChallenge(adapter, assessment.get('id'), challenge.get('id')), 'GET').then(function (nextChallenge) {
        if (nextChallenge) {
          return _this.transitionTo('assessments.get-challenge', assessment.get('id'), nextChallenge.data.id);
        } else {
          return _this.transitionTo('assessments.get-results', assessment.get('id'));
        }
      });
    },


    actions: {
      saveAnswerAndNavigate: function saveAnswerAndNavigate(challenge, assessment, answerValue, answerTimeout, answerElapsedTime) {
        var _this2 = this;

        var answer = this._findOrCreateAnswer(challenge, assessment);
        answer.setProperties({
          value: answerValue,
          timeout: answerTimeout,
          elapsedTime: answerElapsedTime
        });
        return answer.save().then(function () {
          return _this2._navigateToNextView(challenge, assessment);
        }).catch(function (err) {
          alert('Erreur lors de l\u2019enregistrement de la r\xE9ponse : ' + err);
          return err;
        });
      }
    }

  });
});
define('pix-live/routes/assessments/get-comparison', ['exports', 'ember-routable-modal/mixins/route', 'pix-live/routes/base-route'], function (exports, _route, _baseRoute) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var RSVP = Ember.RSVP;
  exports.default = _baseRoute.default.extend(_route.default, {
    model: function model(params) {
      var store = this.get('store');

      var assessmentId = params.assessment_id;
      var answerId = params.answer_id;
      var index = params.index;

      return store.findRecord('answer', answerId).then(function (answer) {
        return store.findRecord('challenge', answer.get('challenge.id')).then(function (challenge) {
          return store.queryRecord('solution', { assessmentId: assessmentId, answerId: answerId }).then(function (solution) {
            return RSVP.hash({
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
define('pix-live/routes/assessments/get-results', ['exports', 'ember', 'pix-live/routes/base-route'], function (exports, _ember, _baseRoute) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _baseRoute.default.extend({
    model: function model(params) {
      return _ember.default.RSVP.hash({
        assessment: this.store.findRecord('assessment', params.assessment_id, { reload: true })
      });
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
define('pix-live/routes/base-route', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({

    //Toutes les pages reset le scroll par défaut (surcharger scrollToTop dans une route si on ne veut pas de scrollReset)
    scrollsToTop: true,

    activate: function activate() {
      this._super();
      if (this.get('scrollsToTop')) {
        window.scrollTo(0, 0);
      }
    }
  });
});
define('pix-live/routes/challenges/get-preview', ['exports', 'pix-live/utils/lodash-custom', 'pix-live/routes/base-route'], function (exports, _lodashCustom, _baseRoute) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _baseRoute.default.extend({
    model: function model(params) {
      var store = this.get('store');
      return store.findRecord('challenge', params.challenge_id);
    },
    afterModel: function afterModel(challenge) {
      var store = this.get('store');
      var that = this;
      // creates a fake course
      var course = store.createRecord('course', { id: 'null' + _lodashCustom.default.guid(), challenges: [challenge] });
      var assessment = store.createRecord('assessment', { course: course });
      var solutionAdapter = store.adapterFor('solution');

      solutionAdapter.refreshRecord('solution', { challengeId: challenge.get('id') });
      return assessment.save().then(function () {
        return that.transitionTo('assessments.get-challenge', { assessment: assessment, challenge: challenge });
      });
    }
  });
});
define('pix-live/routes/competences', ['exports', 'ember', 'pix-live/routes/base-route'], function (exports, _ember, _baseRoute) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var domains = [{
    id: 'information-et-donnees',
    title: 'Informations et données',
    topics: [{
      title: 'Mener une recherche et une veille d’information',
      description: 'Mener une recherche et une veille d’information pour répondre à un besoin d’information et se tenir au courant de l’actualité d’un sujet (avec un moteur de recherche, au sein d’un réseau social, par abonnement à des flux ou des lettres d’information, ou tout autre moyen).',
      themes: 'Web et navigation ; Moteur de recherche et requête ; Veille d’information, flux et curation ; Evaluation de l’information ; Source et citation ; Gouvernance d’internet et ouverture du web ; Abondance de l’information, filtrage et personnalisation ; Recul critique face à l’information et aux médias ; Droit d’auteur.'
    }, {
      title: 'Gérer des données',
      description: 'Stocker et organiser des données pour les retrouver, les conserver et en faciliter l’accès et la gestion (avec un gestionnaire de fichiers, un espace de stockage en ligne, des tags, des classeurs, des bases de données, un système d’information, etc.).',
      themes: 'Dossier et fichier ; Stockage et compression ; Transfert et synchronisation ; Recherche et méta-données ; Indexation sémantique et libellé (tag) ; Structuration des données ; Système d’information ; Localisation des données et droit applicable ; Modèles et stratégies économiques ; Sécurité du système d’information.'
    }, {
      title: 'Traiter des données',
      description: 'Appliquer des traitements à des données pour les analyser et les interpréter (avec un tableur, un programme, un logiciel de traitement d’enquête, une requête calcul dans une base de données, etc.).',
      themes: 'Données quantitatives, type et format de données ; Calcul, traitement statistique et représentation graphique ; Flux de données ; Collecte et exploitation de données massives ; Pensée algorithmique et informatique ; Vie privée et confidentialité ; Interopérabilité'
    }]
  }, {
    id: 'communication-et-collaboration',
    title: 'Communication et collaboration',
    topics: [{
      title: 'Interagir',
      description: 'Interagir avec des individus et de petits groupes pour échanger dans divers contextes liés à la vie privée ou à une activité professionnelle, de façon ponctuelle et récurrente (avec une messagerie électronique, une messagerie instantanée, un système de visio-conférence, etc.).',
      themes: 'Protocoles pour l\'interaction ; Modalités d\'interaction et rôles ; Applications et services pour l\'interaction ; Vie privée et confidentialité ; Identité numérique et signaux ; Vie connectée ; Codes de communication et netiquette'
    }, {
      title: 'Partager et publier',
      description: 'Partager et publier des informations et des contenus pour communiquer ses propres productions ou opinions, relayer celles des autres en contexte de communication publique (avec des plateformes de partage, des réseaux sociaux, des blogs, des espaces de forum et de commentaire, des CMS, etc.).',
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
      description: 'Prévenir et limiter les risques générés par le numérique sur la santé, le bien- être et l\'environnement mais aussi tirer parti de ses potentialités pour favoriser le développement personnel, le soin, l\'inclusion dans la société et la qualité des conditions de vie, pour soi et pour les autres (avec la connaissance des effets du numérique sur la santé physique et psychique et sur l\'environnement, et des pratiques, services et outils numériques dédiés au bien-être, à la santé, à l\'accessibilité).',
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

  exports.default = _baseRoute.default.extend({

    panelActions: _ember.default.inject.service(),

    model: function model() {
      return domains;
    }
  });
});
define('pix-live/routes/compte', ['exports', 'ember', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _ember, _authenticatedRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend(_authenticatedRouteMixin.default, {

    authenticationRoute: '/connexion'

  });
});
define('pix-live/routes/connexion', ['exports', 'ember', 'ember-simple-auth/mixins/unauthenticated-route-mixin'], function (exports, _ember, _unauthenticatedRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend(_unauthenticatedRouteMixin.default, {

    session: _ember.default.inject.service(),

    routeIfAlreadyAuthenticated: '/compte',

    actions: {
      signin: function signin(email, password) {
        var _this = this;

        return this.get('session').authenticate('authenticator:simple', email, password).then(function () {
          _this.transitionTo(_this.routeIfAlreadyAuthenticated);
        });
      }
    }
  });
});
define('pix-live/routes/course-groups', ['exports', 'pix-live/routes/base-route'], function (exports, _baseRoute) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _baseRoute.default.extend({
    model: function model() {
      return this.get('store').findAll('courseGroup');
    },


    actions: {
      startCourse: function startCourse(course) {
        this.transitionTo('courses.create-assessment', course.get('id'));
      }
    }

  });
});
define('pix-live/routes/courses', ['exports', 'pix-live/routes/base-route'], function (exports, _baseRoute) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _baseRoute.default.extend({
    model: function model() {
      return this.get('store').findAll('course');
    },


    actions: {
      startCourse: function startCourse(course) {
        this.transitionTo('courses.create-assessment', course.id);
      }
    }

  });
});
define('pix-live/routes/courses/create-assessment-old', ['exports', 'pix-live/routes/base-route'], function (exports, _baseRoute) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _baseRoute.default.extend({
    model: function model(params) {
      return params.course_id;
    },
    afterModel: function afterModel(courseId) {
      this.transitionTo('courses.create-assessment', courseId);
    }
  });
});
define('pix-live/routes/courses/create-assessment', ['exports', 'pix-live/routes/base-route'], function (exports, _baseRoute) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _baseRoute.default.extend({
    model: function model(params) {
      return {
        courseId: params.course_id
      };
    },
    afterModel: function afterModel(model) {
      var _this = this;

      var store = this.get('store');
      var challengeAdapter = store.adapterFor('challenge');

      var assessment = void 0;

      return store.findRecord('course', model.courseId).then(function (course) {
        return store.createRecord('assessment', { course: course }).save();
      }).then(function (createdAssessment) {
        assessment = createdAssessment;
        return challengeAdapter.queryNext(store, assessment.get('id'));
      }).then(function (challenge) {
        if (challenge) {
          _this.transitionTo('assessments.get-challenge', { assessment: assessment, challenge: challenge });
        } else {
          _this.transitionTo('assessments.get-results', { assessment: assessment });
        }
      });
    }
  });
});
define('pix-live/routes/courses/get-challenge-preview', ['exports', 'ember', 'pix-live/utils/get-challenge-type', 'pix-live/routes/base-route'], function (exports, _ember, _getChallengeType, _baseRoute) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var RSVP = _ember.default.RSVP;
  exports.default = _baseRoute.default.extend({

    assessmentService: _ember.default.inject.service('assessment'),

    model: function model(params) {
      var store = this.get('store');

      var promises = {
        course: store.findRecord('course', params.course_id),
        challenge: store.findRecord('challenge', params.challenge_id)
      };

      return RSVP.hash(promises).then(function (results) {

        var challenge = results.challenge;
        var course = RSVP.resolve(results.course);

        var assessment = _ember.default.Object.create({
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
      var challengeType = (0, _getChallengeType.default)(model.challenge.get('type'));
      controller.set('challengeItemType', 'challenge-item-' + challengeType);
    },
    serialize: function serialize(model) {
      return model.assessment.get('course').then(function (course) {
        return {
          course_id: course.id,
          challenge_id: model.challenge.id
        };
      });
    },


    actions: {
      navigate: function navigate(challenge, assessment) {
        var _this = this;

        this.get('assessmentService').getNextChallenge(challenge, assessment).then(function (nextChallenge) {
          _this.transitionToRoute('courses.get-challenge-preview', { challenge: nextChallenge, assessment: assessment });
        });
      }
    }
  });
});
define('pix-live/routes/courses/get-course-preview', ['exports', 'pix-live/routes/base-route'], function (exports, _baseRoute) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var RSVP = Ember.RSVP;
  exports.default = _baseRoute.default.extend({
    model: function model(params) {
      return this.get('store').findRecord('course', params.course_id).then(function (course) {
        return RSVP.hash({
          course: course,
          nextChallenge: course.get('challenges.firstObject')
        });
      });
    }
  });
});
define('pix-live/routes/deconnexion', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({

    session: _ember.default.inject.service('session'),

    beforeModel: function beforeModel() {
      this.get('session').invalidate();
      this.transitionTo('/');
    }
  });
});
define('pix-live/routes/index', ['exports', 'ember', 'pix-live/routes/base-route'], function (exports, _ember, _baseRoute) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _baseRoute.default.extend({

    session: _ember.default.inject.service(),

    model: function model() {
      return {
        coursesOfTheWeek: this.get('store').query('course', { isCourseOfTheWeek: true }),
        progressionCourses: this.get('store').query('course', { isCourseOfTheWeek: false, isAdaptive: false })
      };
    },


    actions: {
      startCourse: function startCourse(course) {
        this.transitionTo('courses.create-assessment', course.get('id'));
      }
    }

  });
});
define('pix-live/routes/inscription', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({
    model: function model() {
      // XXX: Model needs to be initialize with empty to handle validations on all fields from Api
      return this.store.createRecord('user', {
        lastName: '',
        firstName: '',
        email: '',
        password: '',
        cgu: false
      });
    },


    actions: {
      refresh: function refresh() {
        this.refresh();
      }
    }
  });
});
define('pix-live/routes/placement-tests', ['exports', 'ember', 'pix-live/routes/base-route'], function (exports, _ember, _baseRoute) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _baseRoute.default.extend({

    delay: _ember.default.inject.service(),

    model: function model() {
      return this.store.query('course', { isAdaptive: true });
    },


    actions: {
      startCourse: function startCourse(course) {
        this.transitionTo('courses.create-assessment', course.get('id'));
      }
    }

  });
});
define('pix-live/routes/project', ['exports', 'pix-live/routes/base-route'], function (exports, _baseRoute) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _baseRoute.default.extend({});
});
define('pix-live/serializers/challenge', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPISerializer.extend({
    normalizeResponse: function normalizeResponse(store, primaryModelClass, payload) {
      var challengeAttachments = payload.data.attributes.attachments;
      if (!challengeAttachments) {
        challengeAttachments = [];
      }
      return this._super.apply(this, arguments);
    }
  });
});
define('pix-live/services/ajax', ['exports', 'ember-ajax/services/ajax', 'pix-live/config/environment'], function (exports, _ajax, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ajax.default.extend({
    host: _environment.default.APP.API_HOST,
    contentType: 'application/json; charset=utf-8'
  });
});
define('pix-live/services/assessment', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Service.extend({
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
define('pix-live/services/cookies', ['exports', 'ember-cookies/services/cookies'], function (exports, _cookies) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _cookies.default;
});
define('pix-live/services/current-routed-modal', ['exports', 'ember', 'ember-routable-modal/configuration'], function (exports, _ember, _configuration) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Service.extend({
        routing: _ember.default.inject.service('-routing'),
        routeName: null,
        activeListener: function () {
            if (typeof _ember.default.$ !== 'undefined') {
                _ember.default.$('body')[this.get('routeName') ? 'addClass' : 'removeClass'](_configuration.default.modalOpenBodyClassName);
            }
        }.observes('routeName'),
        init: function init() {
            var _this = this;

            this._super.apply(this, arguments);

            if (typeof _ember.default.$ !== 'undefined' && typeof window !== 'undefined') {
                _ember.default.$(window).on('popstate.ember-routable-modal', function () {
                    if (_this.get('routeName')) {
                        _this.set('routeName', null);
                    }
                });
            }
        },
        clear: function clear() {
            if (this.get('routeName')) {
                this.set('routeName', null);
            }
        },
        close: function close() {
            var routerMain = this.get('routing.router');
            var routerLib = routerMain._routerMicrolib || routerMain.router;
            var handlerInfos = routerLib.state.handlerInfos;
            var currentController = handlerInfos[handlerInfos.length - 1]._handler.controller;

            this.set('routeName', null);

            if (currentController._isModalRoute) {
                var parentRoute = handlerInfos[handlerInfos.length - 2].name;

                routerLib.transitionTo(parentRoute);
            } else {
                var url = this.get('routing').generateURL(this.get('routing.currentPath'));

                routerLib.updateURL(url);
            }
        }
    });
});
define('pix-live/services/delay', ['exports', 'ember', 'pix-live/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var RSVP = _ember.default.RSVP;
  exports.default = _ember.default.Service.extend({
    ms: function ms(_ms) {
      /* istanbul ignore if  */
      if (_environment.default.EmberENV.useDelay) {
        //unreachable by tests
        return new RSVP.Promise(function (resolve) {
          setTimeout(resolve, _ms);
        });
      }
      // test-only, to avoid test to take too long
      return new RSVP.resolve();
    }
  });
});
define('pix-live/services/dependency-checker', ['exports', 'ember', 'pix-live/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Service.extend({

    hasLiquidFire: _ember.default.computed('', function () {
      return _environment.default['ember-collapsible-panel'].hasLiquidFire;
    })

  });
});
define('pix-live/services/google-recaptcha', ['exports', 'ember', 'pix-live/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var jQuery = _ember.default.$;
  var RSVP = _ember.default.RSVP;
  exports.default = _ember.default.Service.extend({
    loadScript: function loadScript() {
      return new RSVP.Promise(function (resolve) {
        jQuery.getScript('https://www.google.com/recaptcha/api.js?onload=onGrecaptchaLoad&render=explicit', function () {
          window.onGrecaptchaLoad = function () {
            resolve();
          };
        });
      });
    },
    render: function render(containerId, callback, expiredCallback) {
      var grecaptcha = window.grecaptcha;
      _ember.default.assert('window.grecaptcha must be available', grecaptcha);
      if (!this.get('isDestroyed')) {
        var parameters = {
          'callback': callback,
          'expired-callback': expiredCallback,
          'sitekey': _environment.default.APP.GOOGLE_RECAPTCHA_KEY
        };
        grecaptcha.render(containerId, parameters);
      }
    },
    reset: function reset() {
      var grecaptcha = window.grecaptcha;
      grecaptcha.reset();
    }
  });
});
define('pix-live/services/metrics', ['exports', 'ember-metrics/services/metrics'], function (exports, _metrics) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _metrics.default;
    }
  });
});
define('pix-live/services/panel-actions', ['exports', 'ember-collapsible-panel/services/panel-actions'], function (exports, _panelActions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _panelActions.default;
    }
  });
});
define('pix-live/services/session', ['exports', 'ember-simple-auth/services/session'], function (exports, _session) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _session.default;
});
define('pix-live/services/splash', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Service.extend({
    hide: function hide() {
      var splash = document.getElementById('app-splash');
      if (splash) {
        splash.parentNode.removeChild(splash);
      }
    }
  });
});
define('pix-live/session-stores/application', ['exports', 'ember-simple-auth/session-stores/adaptive'], function (exports, _adaptive) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _adaptive.default.extend();
});
define("pix-live/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Nu0nIvF0", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"body\"],[13],[0,\"\\n  \"],[1,[26,[\"outlet\"]],false],[0,\"\\n  \"],[1,[26,[\"routable-modal-outlet\"]],false],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/application.hbs" } });
});
define("pix-live/templates/assessments/get-challenge", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "uyM2AW7G", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"assessment-challenge\"],[13],[0,\"\\n\\n  \"],[11,\"div\",[]],[15,\"class\",\"assessment-challenge__course-banner\"],[13],[0,\"\\n    \"],[1,[33,[\"course-banner\"],null,[[\"course\",\"withHomeLink\"],[[28,[\"model\",\"assessment\",\"course\"]],true]]],false],[0,\"\\n  \"],[14],[0,\"\\n\\n  \"],[11,\"div\",[]],[15,\"class\",\"assessment-challenge__content\"],[13],[0,\"\\n\"],[6,[\"unless\"],[[28,[\"model\",\"assessment\",\"course\",\"isAdaptive\"]]],null,{\"statements\":[[0,\"      \"],[11,\"div\",[]],[15,\"class\",\"assessment-challenge__progress-bar\"],[13],[0,\"\\n        \"],[1,[33,[\"progress-bar\"],null,[[\"progress\"],[[28,[\"model\",\"progress\"]]]]],false],[0,\"\\n      \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n    \"],[1,[33,[\"component\"],[[33,[\"get-challenge-component-class\"],[[28,[\"model\",\"challenge\"]]],null]],[[\"challenge\",\"assessment\",\"answers\",\"answerValidated\"],[[28,[\"model\",\"challenge\"]],[28,[\"model\",\"assessment\"]],[28,[\"model\",\"answers\"]],[33,[\"route-action\"],[\"saveAnswerAndNavigate\"],null]]]],false],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/assessments/get-challenge.hbs" } });
});
define("pix-live/templates/assessments/get-comparison", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "lmSFvr26", "block": "{\"statements\":[[1,[33,[\"comparison-window\"],null,[[\"answer\",\"challenge\",\"solution\",\"index\"],[[28,[\"model\",\"answer\"]],[28,[\"model\",\"challenge\"]],[28,[\"model\",\"solution\"]],[28,[\"model\",\"index\"]]]]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/assessments/get-comparison.hbs" } });
});
define("pix-live/templates/assessments/get-results", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "8SdWK64n", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"assessment-results\"],[13],[0,\"\\n\\n\"],[6,[\"if\"],[[28,[\"model\",\"assessment\",\"course\",\"isAdaptive\"]]],null,{\"statements\":[[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"assessment-results__logo-banner\"],[13],[0,\"\\n      \"],[1,[26,[\"pix-logo\"]],false],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"assessment-results__scoring\"],[13],[0,\"\\n      \"],[1,[33,[\"scoring-panel\"],null,[[\"assessment\"],[[28,[\"model\",\"assessment\"]]]]],false],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"assessment-results__course-banner\"],[13],[0,\"\\n      \"],[1,[33,[\"course-banner\"],null,[[\"course\"],[[28,[\"model\",\"assessment\",\"course\"]]]]],false],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]}],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"assessment-results__content\"],[13],[0,\"\\n    \"],[11,\"h2\",[]],[15,\"class\",\"assessment-results__title\"],[13],[0,\"\\n      Vos résultats\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"assessment-results__list\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"model\",\"assessment\",\"answers\"]]],null,{\"statements\":[[0,\"        \"],[1,[33,[\"result-item\"],null,[[\"answer\",\"index\",\"openComparison\",\"a11y-focus-id\"],[[28,[\"answer\"]],[28,[\"index\"]],\"openComparison\",[33,[\"concat\"],[\"open-comparison_\",[33,[\"add\"],[[28,[\"index\"]],1],null]],null]]]],false],[0,\"\\n\"]],\"locals\":[\"answer\",\"index\"]},null],[0,\"    \"],[14],[0,\"\\n\\n    \"],[11,\"div\",[]],[15,\"class\",\"assessment-results__index-link-container\"],[13],[0,\"\\n\"],[6,[\"link-to\"],[\"index\"],[[\"class\",\"tagName\"],[\"assessment-results__index-link__element\",\"button\"]],{\"statements\":[[0,\"        \"],[11,\"span\",[]],[15,\"class\",\"assessment-results__link-back\"],[13],[0,\"Revenir à la liste des tests\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/assessments/get-results.hbs" } });
});
define("pix-live/templates/challenges/get-preview", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "sWBixesV", "block": "{\"statements\":[[11,\"div\",[]],[15,\"id\",\"challenge-preview\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n      \"],[1,[33,[\"component\"],[[33,[\"get-challenge-component-class\"],[[28,[\"model\",\"challenge\"]]],null]],[[\"challenge\"],[[28,[\"model\",\"challenge\"]]]]],false],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/challenges/get-preview.hbs" } });
});
define("pix-live/templates/competences", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ogGoUPJ8", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"competences-page\"],[13],[0,\"\\n\\n  \"],[1,[33,[\"navbar-header\"],null,[[\"class\"],[\"navbar-header--white\"]]],false],[0,\"\\n\\n  \"],[11,\"div\",[]],[15,\"class\",\"competences-page__panel competences-page__header\"],[13],[0,\"\\n    \"],[11,\"h1\",[]],[15,\"class\",\"competences-page__header-text\"],[13],[0,\"\\n      Retrouvez les 5 domaines de compétences que Pix souhaite évaluer, en accord avec le référentiel européen DIGCOMP.\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\\n\"],[6,[\"cp-panels\"],null,[[\"class\"],[\"competences-page__domains\"]],{\"statements\":[[6,[\"each\"],[[28,[\"model\"]]],null,{\"statements\":[[6,[\"component\"],[[28,[\"panels\",\"panel\"]]],[[\"class\"],[\"rounded-panel competences-domain\"]],{\"statements\":[[6,[\"component\"],[[28,[\"panel\",\"toggle\"]]],[[\"class\"],[\"competences-domain__header\"]],{\"statements\":[[0,\"          \"],[11,\"h2\",[]],[15,\"class\",\"competences-domain__title\"],[13],[1,[28,[\"domain\",\"title\"]],false],[14],[0,\"\\n          \"],[11,\"span\",[]],[15,\"class\",\"competences-domain__title-icon\"],[13],[14],[0,\"\\n\"]],\"locals\":[]},null],[6,[\"component\"],[[28,[\"panel\",\"body\"]]],[[\"class\"],[\"competences-domain__content\"]],{\"statements\":[[0,\"          \"],[11,\"div\",[]],[15,\"class\",\"competences-domain__topics\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"domain\",\"topics\"]]],null,{\"statements\":[[0,\"              \"],[11,\"div\",[]],[15,\"class\",\"domain-topic\"],[13],[0,\"\\n                \"],[11,\"h3\",[]],[15,\"class\",\"domain-topic__title\"],[13],[1,[28,[\"topic\",\"title\"]],false],[14],[0,\"\\n                \"],[11,\"p\",[]],[15,\"class\",\"domain-topic__description\"],[13],[1,[28,[\"topic\",\"description\"]],false],[14],[0,\"\\n                \"],[11,\"div\",[]],[15,\"class\",\"domain-topic__themes\"],[13],[0,\"\\n                  \"],[11,\"h4\",[]],[15,\"class\",\"domain-topic__themes-title\"],[13],[0,\"Thématiques associées\"],[14],[0,\"\\n                  \"],[11,\"p\",[]],[15,\"class\",\"domain-topic__themes-content\"],[13],[1,[28,[\"topic\",\"themes\"]],false],[14],[0,\"\\n                \"],[14],[0,\"\\n              \"],[14],[0,\"\\n\"]],\"locals\":[\"topic\"]},null],[0,\"          \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[\"panel\"]},null]],\"locals\":[\"domain\"]},null]],\"locals\":[\"panels\"]},null],[0,\"\\n\"],[14],[0,\"\\n\\n\"],[1,[26,[\"app-footer\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/competences.hbs" } });
});
define("pix-live/templates/components/app-footer", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ebHE5wPT", "block": "{\"statements\":[[11,\"section\",[]],[15,\"class\",\"app-footer__section app-footer__section--pix-logo\"],[13],[0,\"\\n  \"],[1,[26,[\"pix-logo\"]],false],[0,\"\\n\"],[14],[0,\"\\n\\n\"],[11,\"section\",[]],[15,\"class\",\"app-footer__section app-footer__section--contact\"],[13],[0,\"\\n  \"],[11,\"a\",[]],[15,\"class\",\"app-footer__link-text\"],[15,\"href\",\"mailto:contact@pix.beta.gouv.fr\"],[13],[0,\"Contactez-nous\"],[14],[0,\"\\n  |\\n  \"],[11,\"a\",[]],[15,\"class\",\"app-footer__link-text\"],[15,\"href\",\"https://github.com/sgmap/pix\"],[15,\"target\",\"_blank\"],[13],[0,\"Le code source est libre\"],[14],[0,\"\\n\"],[14],[0,\"\\n\\n\"],[11,\"section\",[]],[15,\"class\",\"app-footer__section app-footer__section--marianne-logo\"],[13],[0,\"\\n  \"],[11,\"img\",[]],[15,\"src\",\"/images/mnsr3.svg\"],[15,\"class\",\"app-footer__logo-marianne-img\"],[15,\"alt\",\"Logo du Ministère de l'Éducation Nationale, de l'Enseignement Supérieur et de la Recherche\"],[13],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/app-footer.hbs" } });
});
define("pix-live/templates/components/beta-logo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "GelKjWD8", "block": "{\"statements\":[[11,\"div\",[]],[13],[0,\"Bêta\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/beta-logo.hbs" } });
});
define("pix-live/templates/components/bs-accordion-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "L3szbjHc", "block": "{\"statements\":[[11,\"div\",[]],[15,\"role\",\"tab\"],[16,\"class\",[34,[\"panel-heading \",[33,[\"if\"],[[28,[\"collapsed\"]],\"collapsed\",\"expanded\"],null]]]],[5,[\"action\"],[[28,[null]],\"toggleActive\"]],[13],[0,\"\\n    \"],[11,\"h4\",[]],[15,\"class\",\"panel-title\"],[13],[0,\"\\n        \"],[11,\"a\",[]],[15,\"href\",\"#\"],[13],[0,\"\\n            \"],[1,[26,[\"title\"]],false],[0,\"\\n        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[6,[\"bs-collapse\"],null,[[\"collapsed\",\"class\"],[[28,[\"collapsed\"]],\"panel-collapse\"]],{\"statements\":[[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"panel-body\"],[13],[0,\"\\n        \"],[18,\"default\"],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/bs-accordion-item.hbs" } });
});
define("pix-live/templates/components/bs-alert", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "sNFxreqi", "block": "{\"statements\":[[6,[\"unless\"],[[28,[\"hidden\"]]],null,{\"statements\":[[6,[\"if\"],[[28,[\"dismissible\"]]],null,{\"statements\":[[0,\"    \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"close\"],[15,\"aria-label\",\"Close\"],[5,[\"action\"],[[28,[null]],\"dismiss\"]],[13],[11,\"span\",[]],[15,\"aria-hidden\",\"true\"],[13],[0,\"×\"],[14],[14],[0,\"\\n\"]],\"locals\":[]},null],[18,\"default\"],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/bs-alert.hbs" } });
});
define("pix-live/templates/components/bs-button", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "rsTF3+cd", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"icon\"]]],null,{\"statements\":[[11,\"i\",[]],[16,\"class\",[34,[[26,[\"icon\"]]]]],[13],[14],[0,\" \"]],\"locals\":[]},null],[1,[26,[\"text\"]],false],[18,\"default\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/bs-button.hbs" } });
});
define("pix-live/templates/components/bs-form-element", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "y8cZdTyS", "block": "{\"statements\":[[19,[28,[\"formElementTemplate\"]]]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":true}", "meta": { "moduleName": "pix-live/templates/components/bs-form-element.hbs" } });
});
define("pix-live/templates/components/bs-form-group", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6Ns4sc2P", "block": "{\"statements\":[[18,\"default\"],[0,\"\\n\"],[6,[\"if\"],[[28,[\"hasFeedback\"]]],null,{\"statements\":[[0,\"    \"],[11,\"span\",[]],[16,\"class\",[34,[\"form-control-feedback \",[26,[\"iconName\"]]]]],[15,\"aria-hidden\",\"true\"],[13],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/bs-form-group.hbs" } });
});
define("pix-live/templates/components/bs-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Ku36Nwc/", "block": "{\"statements\":[[18,\"default\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/bs-form.hbs" } });
});
define("pix-live/templates/components/bs-modal-dialog", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "tkb+OWwf", "block": "{\"statements\":[[11,\"div\",[]],[16,\"class\",[34,[\"modal-dialog \",[26,[\"sizeClass\"]]]]],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"modal-content\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"header\"]]],null,{\"statements\":[[0,\"            \"],[1,[33,[\"bs-modal-header\"],null,[[\"title\",\"closeButton\"],[[28,[\"title\"]],[28,[\"closeButton\"]]]]],false],[0,\"\\n\"]],\"locals\":[]},null],[6,[\"if\"],[[28,[\"body\"]]],null,{\"statements\":[[6,[\"bs-modal-body\"],null,null,{\"statements\":[[0,\"                \"],[18,\"default\"],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},{\"statements\":[[0,\"            \"],[18,\"default\"],[0,\"\\n\"]],\"locals\":[]}],[0,\"\\n\"],[6,[\"if\"],[[28,[\"footer\"]]],null,{\"statements\":[[0,\"            \"],[1,[26,[\"bs-modal-footer\"]],false],[0,\"\\n\"]],\"locals\":[]},null],[0,\"    \"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/bs-modal-dialog.hbs" } });
});
define("pix-live/templates/components/bs-modal-footer", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "JWDJvYk9", "block": "{\"statements\":[[6,[\"if\"],[[29,\"default\"]],null,{\"statements\":[[0,\"    \"],[18,\"default\",[[28,[null]]]],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[6,[\"if\"],[[28,[\"hasSubmitButton\"]]],null,{\"statements\":[[0,\"        \"],[6,[\"bs-button\"],null,[[\"type\",\"action\"],[\"default\",\"close\"]],{\"statements\":[[1,[26,[\"closeTitle\"]],false]],\"locals\":[]},null],[0,\"\\n        \"],[6,[\"bs-button\"],null,[[\"type\",\"buttonType\",\"disabled\"],[\"primary\",\"submit\",[28,[\"submitDisabled\"]]]],{\"statements\":[[1,[26,[\"submitTitle\"]],false]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"        \"],[6,[\"bs-button\"],null,[[\"type\",\"action\"],[\"primary\",\"close\"]],{\"statements\":[[1,[26,[\"closeTitle\"]],false]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[]}]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/bs-modal-footer.hbs" } });
});
define("pix-live/templates/components/bs-modal-header", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "hRvifQMm", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"closeButton\"]]],null,{\"statements\":[[0,\"    \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"close\"],[15,\"aria-label\",\"Close\"],[5,[\"action\"],[[28,[null]],\"close\"]],[13],[11,\"span\",[]],[15,\"aria-hidden\",\"true\"],[13],[0,\"×\"],[14],[14],[0,\"\\n\"]],\"locals\":[]},null],[6,[\"if\"],[[29,\"default\"]],null,{\"statements\":[[0,\"    \"],[18,\"default\",[[28,[null]]]],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"    \"],[11,\"h4\",[]],[15,\"class\",\"modal-title\"],[13],[1,[26,[\"title\"]],false],[14],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/bs-modal-header.hbs" } });
});
define("pix-live/templates/components/bs-modal", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "b20xoZBo", "block": "{\"statements\":[[6,[\"ember-wormhole\"],null,[[\"to\",\"renderInPlace\"],[\"ember-bootstrap-modal-container\",[28,[\"renderInPlace\"]]]],{\"statements\":[[0,\"\\n\"],[6,[\"bs-modal-dialog\"],null,[[\"close\",\"fade\",\"in\",\"id\",\"title\",\"closeButton\",\"keyboard\",\"header\",\"body\",\"footer\",\"size\",\"backdropClose\"],[[33,[\"action\"],[[28,[null]],\"close\"],null],[28,[\"fade\"]],[28,[\"in\"]],[28,[\"modalId\"]],[28,[\"title\"]],[28,[\"closeButton\"]],[28,[\"keyboard\"]],[28,[\"header\"]],[28,[\"body\"]],[28,[\"footer\"]],[28,[\"size\"]],[28,[\"backdropClose\"]]]],{\"statements\":[[0,\"  \"],[18,\"default\",[[28,[null]]]],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[\"showBackdrop\"]]],null,{\"statements\":[[0,\"  \"],[11,\"div\",[]],[16,\"class\",[34,[\"modal-backdrop \",[33,[\"if\"],[[28,[\"fade\"]],\"fade\"],null],\" \",[33,[\"if\"],[[28,[\"in\"]],\"in\"],null]]]],[16,\"id\",[34,[[26,[\"backdropId\"]]]]],[13],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/bs-modal.hbs" } });
});
define("pix-live/templates/components/bs-progress-bar", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "gLXzMl47", "block": "{\"statements\":[[0,\"\\n\"],[6,[\"if\"],[[28,[\"showLabel\"]]],null,{\"statements\":[[6,[\"if\"],[[29,\"default\"]],null,{\"statements\":[[0,\"        \"],[18,\"default\",[[28,[\"percentRounded\"]]]],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"        \"],[1,[26,[\"percentRounded\"]],false],[0,\"%\\n\"]],\"locals\":[]}]],\"locals\":[]},{\"statements\":[[6,[\"if\"],[[29,\"default\"]],null,{\"statements\":[[0,\"        \"],[11,\"span\",[]],[15,\"class\",\"sr-only\"],[13],[18,\"default\",[[28,[\"percentRounded\"]]]],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"        \"],[11,\"span\",[]],[15,\"class\",\"sr-only\"],[13],[1,[26,[\"percentRounded\"]],false],[0,\"%\"],[14],[0,\"\\n\"]],\"locals\":[]}],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/bs-progress-bar.hbs" } });
});
define("pix-live/templates/components/bs-progress", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "XZP7lpZ4", "block": "{\"statements\":[[18,\"default\"],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/bs-progress.hbs" } });
});
define("pix-live/templates/components/bs-select", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "cbQDAPAg", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"prompt\"]]],null,{\"statements\":[[0,\"    \"],[11,\"option\",[]],[15,\"disabled\",\"\"],[16,\"selected\",[33,[\"bs-not\"],[[28,[\"value\"]]],null],null],[13],[0,\"\\n        \"],[1,[26,[\"prompt\"]],false],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"each\"],[[28,[\"content\"]]],[[\"key\"],[\"@identity\"]],{\"statements\":[[0,\"    \"],[11,\"option\",[]],[16,\"value\",[34,[[33,[\"bs-read-path\"],[[28,[\"item\"]],[28,[\"optionValuePath\"]]],null]]]],[16,\"selected\",[33,[\"bs-eq\"],[[28,[\"item\"]],[28,[\"value\"]]],null],null],[13],[0,\"\\n        \"],[1,[33,[\"bs-read-path\"],[[28,[\"item\"]],[28,[\"optionLabelPath\"]]],null],false],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[\"item\"]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/bs-select.hbs" } });
});
define("pix-live/templates/components/challenge-actions", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Z0fbggff", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"isValidateButtonEnable\"]]],null,{\"statements\":[[0,\"  \"],[11,\"a\",[]],[15,\"class\",\"challenge-actions__action challenge-actions__action-validate\"],[15,\"href\",\"#\"],[5,[\"action\"],[[28,[null]],\"validateAnswer\"]],[13],[0,\"\\n  \"],[11,\"span\",[]],[15,\"class\",\"challenge-actions__action-validate-text\"],[13],[0,\"Je valide\"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[6,[\"if\"],[[28,[\"isValidateButtonPending\"]]],null,{\"statements\":[[0,\"  \"],[11,\"div\",[]],[15,\"class\",\"challenge-actions__loader challenge-actions__loader--validate\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"challenge-actions__loader-spinner\"],[13],[14],[0,\"\\n  \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]}],[0,\"\\n\"],[11,\"a\",[]],[15,\"class\",\"challenge-actions__action challenge-actions__action-skip\"],[15,\"href\",\"#\"],[5,[\"action\"],[[28,[null]],\"skipChallenge\"]],[13],[0,\"\\n  \"],[11,\"span\",[]],[15,\"class\",\"challenge-actions__action-skip-text\"],[13],[0,\"Je passe\"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/challenge-actions.hbs" } });
});
define("pix-live/templates/components/challenge-item-generic", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ThhVMHHA", "block": "{\"statements\":[[18,\"default\"],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/challenge-item-generic.hbs" } });
});
define("pix-live/templates/components/challenge-item-qcm", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "v2+aA+W2", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"hasChallengeTimer\"]]],null,{\"statements\":[[6,[\"unless\"],[[28,[\"hasUserConfirmWarning\"]]],null,{\"statements\":[[0,\"    \"],[1,[33,[\"warning-page\"],null,[[\"hasUserConfirmWarning\",\"time\"],[[33,[\"action\"],[[28,[null]],\"setUserConfirmation\"],null],[28,[\"challenge\",\"timer\"]]]]],false],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"unless\"],[[28,[\"hasChallengeTimer\"]]],null,{\"statements\":[[0,\"\\n\"],[6,[\"if\"],[[28,[\"challenge\",\"hasntInternetAllowed\"]]],null,{\"statements\":[[0,\"    \"],[1,[26,[\"challenge-stay\"]],false],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n  \"],[1,[33,[\"challenge-statement\"],null,[[\"challenge\"],[[28,[\"challenge\"]]]]],false],[0,\"\\n\\n  \"],[11,\"div\",[]],[15,\"class\",\"rounded-panel challenge-response\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"rounded-panel__row challenge-proposals\"],[13],[0,\"\\n      \"],[1,[33,[\"qcm-proposals\"],null,[[\"answersValue\",\"proposals\",\"answerChanged\"],[[28,[\"answers\",\"value\"]],[28,[\"challenge\",\"proposals\"]],[33,[\"action\"],[[28,[null]],\"answerChanged\"],null]]]],false],[0,\"\\n    \"],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"challenge\",\"timer\"]]],null,{\"statements\":[[6,[\"if\"],[[28,[\"hasUserConfirmWarning\"]]],null,{\"statements\":[[0,\"      \"],[11,\"div\",[]],[15,\"class\",\"rounded-panel__row timeout-jauge-wrapper\"],[13],[0,\"\\n        \"],[1,[33,[\"timeout-jauge\"],null,[[\"allotedTime\"],[[28,[\"challenge\",\"timer\"]]]]],false],[0,\"\\n      \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[0,\"  \"],[14],[0,\"\\n\\n\"],[6,[\"if\"],[[28,[\"errorMessage\"]]],null,{\"statements\":[[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"alert alert-danger\"],[15,\"role\",\"alert\"],[13],[0,\"\\n      \"],[1,[26,[\"errorMessage\"]],false],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[\"assessment\"]]],null,{\"statements\":[[0,\"    \"],[1,[33,[\"challenge-actions\"],null,[[\"challengeSkipped\",\"answerValidated\"],[[33,[\"action\"],[[28,[null]],\"skipChallenge\"],null],[33,[\"action\"],[[28,[null]],\"validateAnswer\"],null]]]],false],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[\"canDisplayFeedbackPanel\"]]],null,{\"statements\":[[0,\"  \"],[11,\"div\",[]],[15,\"class\",\"challenge-item__feedback\"],[13],[0,\"\\n    \"],[1,[33,[\"feedback-panel\"],null,[[\"assessment\",\"challenge\"],[[28,[\"assessment\"]],[28,[\"challenge\"]]]]],false],[0,\"\\n  \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/challenge-item-qcm.hbs" } });
});
define("pix-live/templates/components/challenge-item-qcu", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "fE3suQlR", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"hasChallengeTimer\"]]],null,{\"statements\":[[6,[\"unless\"],[[28,[\"hasUserConfirmWarning\"]]],null,{\"statements\":[[0,\"    \"],[1,[33,[\"warning-page\"],null,[[\"hasUserConfirmWarning\",\"time\"],[[33,[\"action\"],[[28,[null]],\"setUserConfirmation\"],null],[28,[\"challenge\",\"timer\"]]]]],false],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"unless\"],[[28,[\"hasChallengeTimer\"]]],null,{\"statements\":[[0,\"\\n\"],[6,[\"if\"],[[28,[\"challenge\",\"hasntInternetAllowed\"]]],null,{\"statements\":[[0,\"    \"],[1,[26,[\"challenge-stay\"]],false],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n  \"],[1,[33,[\"challenge-statement\"],null,[[\"challenge\"],[[28,[\"challenge\"]]]]],false],[0,\"\\n\\n  \"],[11,\"div\",[]],[15,\"class\",\"rounded-panel challenge-response\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"rounded-panel__row challenge-proposals\"],[13],[0,\"\\n      \"],[1,[33,[\"qcu-proposals\"],null,[[\"answersValue\",\"proposals\",\"answerChanged\"],[[28,[\"answers\",\"value\"]],[28,[\"challenge\",\"proposals\"]],[33,[\"action\"],[[28,[null]],\"answerChanged\"],null]]]],false],[0,\"\\n    \"],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"challenge\",\"timer\"]]],null,{\"statements\":[[6,[\"if\"],[[28,[\"hasUserConfirmWarning\"]]],null,{\"statements\":[[0,\"        \"],[11,\"div\",[]],[15,\"class\",\"rounded-panel__row timeout-jauge-wrapper\"],[13],[0,\"\\n          \"],[1,[33,[\"timeout-jauge\"],null,[[\"allotedTime\"],[[28,[\"challenge\",\"timer\"]]]]],false],[0,\"\\n        \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[0,\"  \"],[14],[0,\"\\n\\n\"],[6,[\"if\"],[[28,[\"errorMessage\"]]],null,{\"statements\":[[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"alert alert-danger\"],[15,\"role\",\"alert\"],[13],[0,\"\\n      \"],[1,[26,[\"errorMessage\"]],false],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[\"assessment\"]]],null,{\"statements\":[[0,\"    \"],[1,[33,[\"challenge-actions\"],null,[[\"challengeSkipped\",\"answerValidated\"],[[33,[\"action\"],[[28,[null]],\"skipChallenge\"],null],[33,[\"action\"],[[28,[null]],\"validateAnswer\"],null]]]],false],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[\"canDisplayFeedbackPanel\"]]],null,{\"statements\":[[0,\"  \"],[11,\"div\",[]],[15,\"class\",\"challenge-item__feedback\"],[13],[0,\"\\n    \"],[1,[33,[\"feedback-panel\"],null,[[\"assessment\",\"challenge\"],[[28,[\"assessment\"]],[28,[\"challenge\"]]]]],false],[0,\"\\n  \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/challenge-item-qcu.hbs" } });
});
define("pix-live/templates/components/challenge-item-qroc", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "sa1ipoD/", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"hasChallengeTimer\"]]],null,{\"statements\":[[6,[\"unless\"],[[28,[\"hasUserConfirmWarning\"]]],null,{\"statements\":[[0,\"    \"],[1,[33,[\"warning-page\"],null,[[\"hasUserConfirmWarning\",\"time\"],[[33,[\"action\"],[[28,[null]],\"setUserConfirmation\"],null],[28,[\"challenge\",\"timer\"]]]]],false],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"unless\"],[[28,[\"hasChallengeTimer\"]]],null,{\"statements\":[[0,\"\\n\"],[6,[\"if\"],[[28,[\"challenge\",\"hasntInternetAllowed\"]]],null,{\"statements\":[[0,\"    \"],[1,[26,[\"challenge-stay\"]],false],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n  \"],[1,[33,[\"challenge-statement\"],null,[[\"challenge\"],[[28,[\"challenge\"]]]]],false],[0,\"\\n\\n  \"],[11,\"div\",[]],[15,\"class\",\"rounded-panel challenge-response\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"rounded-panel__row challenge-proposals\"],[13],[0,\"\\n      \"],[1,[33,[\"qroc-proposal\"],null,[[\"proposals\",\"answerValue\",\"answerChanged\"],[[28,[\"challenge\",\"proposals\"]],[28,[\"answers\",\"value\"]],[33,[\"action\"],[[28,[null]],\"answerChanged\"],null]]]],false],[0,\"\\n    \"],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"challenge\",\"timer\"]]],null,{\"statements\":[[6,[\"if\"],[[28,[\"hasUserConfirmWarning\"]]],null,{\"statements\":[[0,\"        \"],[11,\"div\",[]],[15,\"class\",\"rounded-panel__row timeout-jauge-wrapper\"],[13],[0,\"\\n          \"],[1,[33,[\"timeout-jauge\"],null,[[\"allotedTime\"],[[28,[\"challenge\",\"timer\"]]]]],false],[0,\"\\n        \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[0,\"  \"],[14],[0,\"\\n\\n\"],[6,[\"if\"],[[28,[\"errorMessage\"]]],null,{\"statements\":[[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"alert alert-danger\"],[15,\"role\",\"alert\"],[13],[0,\"\\n      \"],[1,[26,[\"errorMessage\"]],false],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[\"assessment\"]]],null,{\"statements\":[[0,\"    \"],[1,[33,[\"challenge-actions\"],null,[[\"challengeSkipped\",\"answerValidated\"],[[33,[\"action\"],[[28,[null]],\"skipChallenge\"],null],[33,[\"action\"],[[28,[null]],\"validateAnswer\"],null]]]],false],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[\"canDisplayFeedbackPanel\"]]],null,{\"statements\":[[0,\"  \"],[11,\"div\",[]],[15,\"class\",\"challenge-item__feedback\"],[13],[0,\"\\n    \"],[1,[33,[\"feedback-panel\"],null,[[\"assessment\",\"challenge\"],[[28,[\"assessment\"]],[28,[\"challenge\"]]]]],false],[0,\"\\n  \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/challenge-item-qroc.hbs" } });
});
define("pix-live/templates/components/challenge-item-qrocm", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "EiLFbjFo", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"hasChallengeTimer\"]]],null,{\"statements\":[[6,[\"unless\"],[[28,[\"hasUserConfirmWarning\"]]],null,{\"statements\":[[0,\"    \"],[1,[33,[\"warning-page\"],null,[[\"hasUserConfirmWarning\",\"time\"],[[33,[\"action\"],[[28,[null]],\"setUserConfirmation\"],null],[28,[\"challenge\",\"timer\"]]]]],false],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"unless\"],[[28,[\"hasChallengeTimer\"]]],null,{\"statements\":[[0,\"\\n\"],[6,[\"if\"],[[28,[\"challenge\",\"hasntInternetAllowed\"]]],null,{\"statements\":[[0,\"    \"],[1,[26,[\"challenge-stay\"]],false],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n  \"],[1,[33,[\"challenge-statement\"],null,[[\"challenge\"],[[28,[\"challenge\"]]]]],false],[0,\"\\n\\n  \"],[11,\"div\",[]],[15,\"class\",\"rounded-panel challenge-response\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"rounded-panel__row challenge-proposals\"],[13],[0,\"\\n      \"],[1,[33,[\"qrocm-proposal\"],null,[[\"proposals\",\"answersValue\",\"answerChanged\"],[[28,[\"challenge\",\"proposals\"]],[28,[\"answers\",\"_valuesAsMap\"]],[33,[\"action\"],[[28,[null]],\"answerChanged\"],null]]]],false],[0,\"\\n    \"],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"challenge\",\"timer\"]]],null,{\"statements\":[[6,[\"if\"],[[28,[\"hasUserConfirmWarning\"]]],null,{\"statements\":[[0,\"        \"],[11,\"div\",[]],[15,\"class\",\"rounded-panel__row timeout-jauge-wrapper\"],[13],[0,\"\\n          \"],[1,[33,[\"timeout-jauge\"],null,[[\"allotedTime\"],[[28,[\"challenge\",\"timer\"]]]]],false],[0,\"\\n        \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[0,\"  \"],[14],[0,\"\\n\\n\"],[6,[\"if\"],[[28,[\"errorMessage\"]]],null,{\"statements\":[[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"alert alert-danger\"],[15,\"role\",\"alert\"],[13],[0,\"\\n      \"],[1,[26,[\"errorMessage\"]],false],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[\"assessment\"]]],null,{\"statements\":[[0,\"    \"],[1,[33,[\"challenge-actions\"],null,[[\"challengeSkipped\",\"answerValidated\"],[[33,[\"action\"],[[28,[null]],\"skipChallenge\"],null],[33,[\"action\"],[[28,[null]],\"validateAnswer\"],null]]]],false],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[\"canDisplayFeedbackPanel\"]]],null,{\"statements\":[[0,\"  \"],[11,\"div\",[]],[15,\"class\",\"challenge-item__feedback\"],[13],[0,\"\\n    \"],[1,[33,[\"feedback-panel\"],null,[[\"assessment\",\"challenge\"],[[28,[\"assessment\"]],[28,[\"challenge\"]]]]],false],[0,\"\\n  \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/challenge-item-qrocm.hbs" } });
});
define("pix-live/templates/components/challenge-statement", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "yfNN7szC", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"challenge\",\"instruction\"]]],null,{\"statements\":[[0,\"  \"],[11,\"div\",[]],[15,\"class\",\"rounded-panel__row challenge-statement__instruction-section\"],[13],[0,\"\\n    \"],[1,[33,[\"markdown-to-html\"],null,[[\"class\",\"markdown\"],[\"challenge-statement__instruction\",[28,[\"challenge\",\"instruction\"]]]]],false],[0,\"\\n  \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[\"challenge\",\"illustrationUrl\"]]],null,{\"statements\":[[0,\"  \"],[11,\"div\",[]],[15,\"class\",\"rounded-panel__row challenge-statement__illustration-section\"],[13],[0,\"\\n    \"],[11,\"img\",[]],[15,\"class\",\"challenge-statement__illustration\"],[16,\"src\",[34,[[28,[\"challenge\",\"illustrationUrl\"]]]]],[15,\"alt\",\"Illustration de l'épreuve\"],[13],[14],[0,\"\\n  \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[\"challenge\",\"hasAttachment\"]]],null,{\"statements\":[[0,\"  \"],[11,\"div\",[]],[15,\"class\",\"rounded-panel__row challenge-statement__attachments-section\"],[13],[0,\"\\n\\n\"],[6,[\"if\"],[[28,[\"challenge\",\"hasSingleAttachment\"]]],null,{\"statements\":[[0,\"      \"],[11,\"div\",[]],[15,\"class\",\"challenge-statement__action\"],[13],[0,\"\\n        \"],[11,\"a\",[]],[15,\"class\",\"challenge-statement__action-link\"],[16,\"href\",[34,[[28,[\"challenge\",\"attachments\",\"firstObject\"]]]]],[15,\"target\",\"_blank\"],[15,\"download\",\"\"],[13],[0,\"\\n          \"],[11,\"span\",[]],[15,\"class\",\"challenge-statement__action-label\"],[13],[0,\"Télécharger\"],[14],[0,\"\\n        \"],[14],[0,\"\\n      \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[\"challenge\",\"hasMultipleAttachments\"]]],null,{\"statements\":[[0,\"      \"],[11,\"p\",[]],[15,\"class\",\"challenge-statement__text\"],[13],[0,\"\\n        \"],[11,\"span\",[]],[15,\"class\",\"challenge-statement__text-content\"],[13],[0,\"Choisissez le type de fichier que vous voulez utiliser\"],[14],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"challenge-statement__help-icon\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"challenge-statement__help-tooltip\"],[13],[0,\"\\n          \"],[11,\"span\",[]],[15,\"class\",\"challenge-statement__help-text\"],[13],[0,\"Pix vous laisse le choix du format de fichier à télécharger. Si vous ne savez pas quelle option retenir, conservez le choix par défaut. Il correspond au format de fichier pris en charge par le plus grand nombre de logiciels.\"],[14],[0,\"\\n        \"],[14],[0,\"\\n      \"],[14],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"ul\",[]],[15,\"class\",\"challenge-statement__file-options\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"attachmentsData\"]]],null,{\"statements\":[[0,\"          \"],[11,\"li\",[]],[15,\"class\",\"challenge-statement__file-option\"],[13],[0,\"\\n\\n\"],[0,\"            \"],[11,\"input\",[]],[15,\"type\",\"radio\"],[16,\"id\",[34,[\"attachment\",[28,[\"index\"]]]]],[15,\"class\",\"challenge-statement__file-option_input\"],[15,\"name\",\"attachment_selector\"],[16,\"value\",[34,[[28,[\"attachmentUrl\"]]]]],[16,\"onclick\",[33,[\"action\"],[[28,[null]],\"selectAttachementUrl\",[28,[\"attachmentUrl\"]]],null],null],[16,\"checked\",[34,[[33,[\"if\"],[[33,[\"eq\"],[[28,[\"attachmentUrl\"]],[28,[\"selectedAttachmentUrl\"]]],null],\"checked\"],null]]]],[13],[14],[0,\"\\n\\n            \"],[11,\"label\",[]],[15,\"class\",\"label-checkbox-downloadable\"],[16,\"for\",[34,[\"attachment\",[28,[\"index\"]]]]],[13],[0,\"\\n              \"],[11,\"span\",[]],[15,\"class\",\"challenge-statement__file-option-label\"],[13],[0,\"fichier .\"],[1,[33,[\"extract-extension\"],[[28,[\"attachmentUrl\"]]],null],false],[14],[0,\"\\n            \"],[14],[0,\"\\n\\n          \"],[14],[0,\"\\n\"]],\"locals\":[\"attachmentUrl\",\"index\"]},null],[0,\"      \"],[14],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"challenge-statement__action\"],[13],[0,\"\\n        \"],[11,\"a\",[]],[15,\"class\",\"challenge-statement__action-link\"],[16,\"href\",[34,[[26,[\"selectedAttachmentUrl\"]]]]],[15,\"target\",\"_blank\"],[15,\"download\",\"\"],[13],[0,\"\\n          \"],[11,\"span\",[]],[15,\"class\",\"challenge-statement__action-label\"],[13],[0,\"Télécharger\"],[14],[0,\"\\n        \"],[14],[0,\"\\n      \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"  \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/challenge-statement.hbs" } });
});
define("pix-live/templates/components/challenge-stay", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "l4IFVGwK", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"challenge-stay__container\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"challenge-stay__icon\"],[13],[0,\"\\n    \"],[11,\"img\",[]],[15,\"class\",\"challenge-stay__icon-img\"],[15,\"src\",\"/images/icon-warning.svg\"],[15,\"alt\",\"Avertissement sur les conditions de réalisation de l'épreuve\"],[13],[14],[0,\"\\n  \"],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"challenge-stay__text\"],[13],[0,\"Vous devez répondre à cette question sans sortir de cette page !\"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/challenge-stay.hbs" } });
});
define("pix-live/templates/components/comparison-window", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "47Y2U0p5", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"routable-modal--dialog comparison-window--dialog\"],[13],[0,\"\\n\\n  \"],[11,\"div\",[]],[15,\"class\",\"routable-modal--content comparison-window--content\"],[13],[0,\"\\n\\n    \"],[11,\"div\",[]],[15,\"class\",\"routable-modal--header comparison-window__header\"],[13],[0,\"\\n\\n\\n\"],[6,[\"routable-modal-close-button\"],null,[[\"class\"],[\"routable-modal--close-button\"]],{\"statements\":[[0,\"        \"],[11,\"div\",[]],[15,\"class\",\"close-button-container\"],[13],[0,\"\\n          \"],[11,\"div\",[]],[13],[0,\"fermer\"],[14],[0,\"\\n          \"],[11,\"div\",[]],[13],[0,\"\\n            \"],[11,\"img\",[]],[15,\"src\",\"/images/comparison-window/icon-close-modal.svg\"],[15,\"alt\",\"Fermer la fenêtre modale\"],[15,\"width\",\"24\"],[15,\"height\",\"24\"],[13],[14],[0,\"\\n          \"],[14],[0,\"\\n        \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"comparison-window__result-item-index\"],[13],[0,\"\\n        \"],[1,[26,[\"index\"]],false],[0,\"\\n      \"],[14],[0,\"\\n\\n      \"],[11,\"div\",[]],[15,\"class\",\"comparison-window__result-item-line\"],[13],[0,\"\\n      \"],[14],[0,\"\\n\\n      \"],[11,\"div\",[]],[15,\"class\",\"comparison-window__title\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"data-toggle\",\"tooltip\"],[15,\"data-placement\",\"top\"],[16,\"title\",[34,[[28,[\"resultItem\",\"tooltip\"]]]]],[13],[0,\"\\n          \"],[11,\"img\",[]],[16,\"class\",[34,[\"comparison-window__result-icon comparison-window__result-icon--\",[28,[\"resultItem\",\"status\"]]]]],[16,\"src\",[26,[\"resultItemIcon\"]],null],[15,\"alt\",\"\"],[13],[14],[0,\"\\n        \"],[14],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"comparison-window__title-text\"],[13],[1,[28,[\"resultItem\",\"title\"]],false],[14],[0,\"\\n    \"],[14],[0,\"\\n\\n    \"],[11,\"div\",[]],[15,\"class\",\"routable-modal--body comparison-window--body\"],[13],[0,\"\\n\\n      \"],[11,\"div\",[]],[15,\"class\",\"rounded-panel comparison-window__instruction\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"rounded-panel__row \"],[13],[0,\"\\n          \"],[1,[33,[\"markdown-to-html\"],null,[[\"class\",\"markdown\"],[\"challenge-statement__instruction\",[28,[\"challenge\",\"instruction\"]]]]],false],[0,\"\\n        \"],[14],[0,\"\\n\\n\"],[6,[\"if\"],[[28,[\"challenge\",\"illustrationUrl\"]]],null,{\"statements\":[[0,\"          \"],[11,\"div\",[]],[15,\"class\",\"rounded-panel__row challenge-statement__illustration-section\"],[13],[0,\"\\n            \"],[11,\"img\",[]],[15,\"class\",\"challenge-statement__illustration\"],[16,\"src\",[34,[[28,[\"challenge\",\"illustrationUrl\"]]]]],[15,\"alt\",\"Illustration de l'épreuve\"],[13],[14],[0,\"\\n          \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"      \"],[14],[0,\"\\n\\n\"],[6,[\"if\"],[[28,[\"isAssessmentChallengeTypeQcm\"]]],null,{\"statements\":[[0,\"        \"],[1,[33,[\"qcm-solution-panel\"],null,[[\"challenge\",\"answer\",\"solution\"],[[28,[\"challenge\"]],[28,[\"answer\"]],[28,[\"solution\"]]]]],false],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\\n\"],[6,[\"if\"],[[28,[\"isAssessmentChallengeTypeQcu\"]]],null,{\"statements\":[[0,\"          \"],[1,[33,[\"qcu-solution-panel\"],null,[[\"challenge\",\"answer\",\"solution\"],[[28,[\"challenge\"]],[28,[\"answer\"]],[28,[\"solution\"]]]]],false],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[\"isAssessmentChallengeTypeQroc\"]]],null,{\"statements\":[[0,\"        \"],[11,\"div\",[]],[15,\"class\",\"comparison-window__corrected-answers comparison-window__corrected-answers--qroc\"],[13],[0,\"\\n          \"],[1,[33,[\"qroc-solution-panel\"],null,[[\"answer\",\"solution\"],[[28,[\"answer\"]],[28,[\"solution\"]]]]],false],[0,\"\\n        \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[\"isAssessmentChallengeTypeQrocmInd\"]]],null,{\"statements\":[[0,\"        \"],[11,\"div\",[]],[15,\"class\",\"comparison-window__corrected-answers comparison-window__corrected-answers--qrocm\"],[13],[0,\"\\n          \"],[1,[33,[\"qrocm-ind-solution-panel\"],null,[[\"answer\",\"solution\",\"challenge\"],[[28,[\"answer\"]],[28,[\"solution\"]],[28,[\"challenge\"]]]]],false],[0,\"\\n        \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"    \"],[14],[0,\"\\n\\n    \"],[11,\"div\",[]],[15,\"class\",\"routable-modal--footer\"],[13],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"comparison-window__feedback-panel\"],[13],[0,\"\\n        \"],[1,[33,[\"feedback-panel\"],null,[[\"assessment\",\"challenge\",\"collapsible\"],[[28,[\"answer\",\"assessment\"]],[28,[\"challenge\"]],false]]],false],[0,\"\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/comparison-window.hbs" } });
});
define("pix-live/templates/components/corner-ribbon", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "CzoDeLL1", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"corner-ribbon-wrapper\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"corner-ribbon\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"ribbon\"],[13],[0,\"\\n      \"],[11,\"a\",[]],[15,\"href\",\"https://github.com/sgmap/pix\"],[13],[0,\"BÊTA\"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/corner-ribbon.hbs" } });
});
define("pix-live/templates/components/course-banner", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "HCT6KAih", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"course-banner__container\"],[13],[0,\"\\n\\n  \"],[11,\"h1\",[]],[15,\"class\",\"course-banner__name\"],[13],[1,[28,[\"course\",\"name\"]],false],[14],[0,\"\\n\\n\"],[6,[\"if\"],[[28,[\"withHomeLink\"]]],null,{\"statements\":[[0,\"    \"],[6,[\"link-to\"],[\"index\"],[[\"class\"],[\"course-banner__home-link\"]],{\"statements\":[[0,\"Retour à la liste des tests\"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/course-banner.hbs" } });
});
define("pix-live/templates/components/course-item-placeholder", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "RTQykSpW", "block": "{\"statements\":[[11,\"article\",[]],[15,\"class\",\"course-item-placeholder rounded-panel\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"course-item-placeholder__picture\"],[13],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"course-item-placeholder__container\"],[13],[0,\"\\n    \"],[11,\"h3\",[]],[15,\"class\",\"course-item-placeholder__name\"],[13],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"course-item-placeholder__description\"],[13],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"course-item-placeholder__challenges-number\"],[13],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"course-item-placeholder__begin-button\"],[13],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/course-item-placeholder.hbs" } });
});
define("pix-live/templates/components/course-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "FRv/Vcj3", "block": "{\"statements\":[[11,\"img\",[]],[15,\"class\",\"course-item__picture\"],[16,\"src\",[34,[[26,[\"imageUrl\"]]]]],[15,\"alt\",\"\"],[13],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"course-item__container\"],[13],[0,\"\\n  \"],[11,\"h3\",[]],[15,\"class\",\"course-item__name\"],[13],[1,[28,[\"course\",\"name\"]],false],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"course-item__description\"],[13],[1,[28,[\"course\",\"description\"]],false],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"course-item__challenges-number\"],[13],[0,\"\\n    \"],[6,[\"if\"],[[28,[\"course\",\"challenges\",\"length\"]]],null,{\"statements\":[[0,\" \"],[1,[28,[\"course\",\"challenges\",\"length\"]],false]],\"locals\":[]},{\"statements\":[[0,\" \"],[1,[28,[\"course\",\"nbChallenges\"]],false]],\"locals\":[]}],[0,\" épreuves\\n  \"],[14],[0,\"\\n\\n\"],[0,\"  \"],[11,\"a\",[]],[15,\"class\",\"course-item__begin-button\"],[15,\"href\",\"#\"],[15,\"style\",\"cursor: pointer;\"],[16,\"title\",[34,[\"Commencer le test \\\"\",[28,[\"course\",\"name\"]],\"\\\"\"]]],[5,[\"action\"],[[28,[null]],\"startCourse\",[28,[\"course\"]]]],[13],[0,\"\\n    Commencer\\n  \"],[14],[0,\"\\n\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/course-item.hbs" } });
});
define("pix-live/templates/components/course-list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qat1fbAP", "block": "{\"statements\":[[11,\"ul\",[]],[15,\"class\",\"course-list__ul\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"filteredCourses\"]]],null,{\"statements\":[[0,\"    \"],[11,\"li\",[]],[15,\"class\",\"course-list__li\"],[13],[0,\"\\n      \"],[1,[33,[\"course-item\"],null,[[\"course\",\"startCourse\"],[[28,[\"course\"]],\"startCourse\"]]],false],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[\"course\"]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[\"isLoading\"]]],null,{\"statements\":[[0,\"    \"],[11,\"li\",[]],[15,\"class\",\"course-list__li\"],[13],[1,[33,[\"course-item-placeholder\"],null,[[\"class\"],[\"course-item-placeholder--first\"]]],false],[14],[0,\"\\n    \"],[11,\"li\",[]],[15,\"class\",\"course-list__li\"],[13],[1,[26,[\"course-item-placeholder\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},null],[14],[0,\"\\n\\n\"],[1,[26,[\"modal-mobile\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/course-list.hbs" } });
});
define("pix-live/templates/components/feature-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "44sTdlYc", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"feature-item__icon-container\"],[13],[0,\"\\n  \"],[11,\"img\",[]],[15,\"class\",\"feature-item__icon\"],[16,\"src\",[34,[\"/images/features/icon-\",[28,[\"feature\",\"icon\"]],\".svg\"]]],[13],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"feature-item__title\"],[13],[1,[28,[\"feature\",\"title\"]],false],[14],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"feature-item__description\"],[13],[1,[28,[\"feature\",\"description\"]],false],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/feature-item.hbs" } });
});
define("pix-live/templates/components/feature-list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "bNuuBgM+", "block": "{\"statements\":[[11,\"ul\",[]],[15,\"class\",\"feature-list__ul\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"features\"]]],null,{\"statements\":[[0,\"    \"],[11,\"li\",[]],[15,\"class\",\"feature-list__li\"],[13],[0,\"\\n      \"],[1,[33,[\"feature-item\"],null,[[\"feature\"],[[28,[\"feature\"]]]]],false],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[\"feature\"]},null],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/feature-list.hbs" } });
});
define("pix-live/templates/components/feedback-panel", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "WaOmIgur", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"isFormClosed\"]]],null,{\"statements\":[[0,\"  \"],[11,\"div\",[]],[15,\"class\",\"feedback-panel__view feedback-panel__view--link\"],[13],[0,\"\\n    \"],[11,\"a\",[]],[15,\"class\",\"feedback-panel__open-link\"],[15,\"href\",\"#\"],[5,[\"action\"],[[28,[null]],\"openFeedbackForm\"]],[13],[0,\"Signaler un problème\"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[\"isFormOpened\"]]],null,{\"statements\":[[0,\"  \"],[11,\"div\",[]],[15,\"class\",\"feedback-panel__view feedback-panel__view--form\"],[13],[0,\"\\n    \"],[11,\"h3\",[]],[15,\"class\",\"feedback-panel__form-title\"],[13],[0,\"Signaler un problème\"],[14],[0,\"\\n\\n    \"],[11,\"div\",[]],[15,\"class\",\"feedback-panel__form-description\"],[13],[0,\"\\n      \"],[11,\"p\",[]],[13],[0,\"PIX est à l’écoute de vos remarques pour améliorer les épreuves proposées #personnenestparfait.\"],[14],[0,\"\\n      \"],[11,\"p\",[]],[13],[0,\"Vous pouvez nous laisser votre adresse mail si vous le souhaitez. Vos coordonnées ne feront l’objet d’aucune transmission à des tiers.\"],[14],[0,\"\\n    \"],[14],[0,\"\\n\\n    \"],[11,\"div\",[]],[15,\"class\",\"feedback-panel__form-wrapper\"],[13],[0,\"\\n      \"],[11,\"form\",[]],[15,\"class\",\"feedback-panel__form\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"feedback-panel__group\"],[13],[0,\"\\n          \"],[1,[33,[\"input\"],null,[[\"class\",\"type\",\"value\",\"placeholder\"],[\"feedback-panel__field feedback-panel__field--email\",\"text\",[28,[\"_email\"]],\"Votre email (optionnel)\"]]],false],[0,\"\\n        \"],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"feedback-panel__group\"],[13],[0,\"\\n          \"],[1,[33,[\"textarea\"],null,[[\"class\",\"value\",\"placeholder\",\"rows\"],[\"feedback-panel__field feedback-panel__field--content\",[28,[\"_content\"]],\"Votre message\",6]]],false],[0,\"\\n        \"],[14],[0,\"\\n\\n\"],[6,[\"if\"],[[28,[\"_error\"]]],null,{\"statements\":[[0,\"          \"],[11,\"div\",[]],[15,\"class\",\"alert alert-danger\"],[15,\"role\",\"alert\"],[13],[0,\"\\n            \"],[1,[26,[\"_error\"]],false],[0,\"\\n          \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"        \"],[11,\"button\",[]],[15,\"class\",\"feedback-panel__button feedback-panel__button--send\"],[5,[\"action\"],[[28,[null]],\"sendFeedback\"]],[13],[0,\"Envoyer\"],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"collapsible\"]]],null,{\"statements\":[[0,\"          \"],[11,\"button\",[]],[15,\"class\",\"feedback-panel__button feedback-panel__button--cancel\"],[5,[\"action\"],[[28,[null]],\"cancelFeedback\"]],[13],[0,\"Annuler\\n          \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[\"isFormSubmitted\"]]],null,{\"statements\":[[0,\"  \"],[11,\"div\",[]],[15,\"class\",\"feedback-panel__view feedback-panel__view--mercix\"],[13],[0,\"\\n    \"],[11,\"p\",[]],[13],[0,\"Votre commentaire a bien été transmis à l’équipe du projet PIX.\"],[14],[0,\"\\n    \"],[11,\"p\",[]],[13],[0,\"Mercix !\"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/feedback-panel.hbs" } });
});
define("pix-live/templates/components/follower-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "yGT1r6qV", "block": "{\"statements\":[[11,\"form\",[]],[15,\"class\",\"follower__form\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"follower__form-container\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"follower__form-item follower__form-input-container\"],[13],[0,\"\\n      \"],[1,[33,[\"input\"],null,[[\"class\",\"placeholder\",\"type\",\"value\"],[\"follower-email\",\"Saisissez votre email\",\"email\",[28,[\"_followerEmail\"]]]]],false],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"follower__form-item\"],[13],[0,\"\\n      \"],[11,\"button\",[]],[16,\"class\",[34,[\"follower-form__button \",[33,[\"if\"],[[28,[\"isPending\"]],\"follower-form__button--pending\",\"follower-form__button--default\"],null]]]],[5,[\"action\"],[[28,[null]],\"submit\"],[[\"allowedKeys\"],[\"enter\"]]],[13],[1,[26,[\"submitButtonText\"]],false],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\\n\"],[6,[\"if\"],[[28,[\"hasMessage\"]]],null,{\"statements\":[[0,\"    \"],[11,\"div\",[]],[16,\"class\",[34,[\"follower-info-message \",[26,[\"messageClassName\"]]]]],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"hasError\"]]],null,{\"statements\":[[0,\"      \"],[11,\"img\",[]],[15,\"class\",\"follower-form__icon follower-form__icon--error\"],[15,\"style\",\"width:15px;height:15px;\"],[15,\"src\",\"/images/icons/icon-error.svg\"],[15,\"alt\",\"\"],[13],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"      \"],[11,\"img\",[]],[15,\"class\",\"follower-form__icon follower-form__icon--success\"],[15,\"style\",\"width:12px;height:15px\"],[15,\"src\",\"/images/icons/icon-success.svg\"],[15,\"alt\",\"\"],[13],[14],[0,\"\\n\"]],\"locals\":[]}],[0,\"    \"],[11,\"span\",[]],[13],[1,[26,[\"infoMessage\"]],false],[14],[0,\"\\n  \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/follower-form.hbs" } });
});
define("pix-live/templates/components/form-element/errors", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "a0ZLrxhj", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"showValidationMessages\"]]],null,{\"statements\":[[0,\"    \"],[11,\"span\",[]],[15,\"class\",\"help-block\"],[13],[1,[28,[\"validationMessages\",\"firstObject\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/form-element/errors.hbs" } });
});
define("pix-live/templates/components/form-element/feedback-icon", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "bgy4arH8", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"hasFeedback\"]]],null,{\"statements\":[[0,\"    \"],[11,\"span\",[]],[16,\"class\",[34,[\"form-control-feedback \",[26,[\"iconName\"]]]]],[15,\"aria-hidden\",\"true\"],[13],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/form-element/feedback-icon.hbs" } });
});
define("pix-live/templates/components/form-element/horizontal/checkbox", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "W3sQMUvg", "block": "{\"statements\":[[11,\"div\",[]],[16,\"class\",[34,[[26,[\"horizontalInputGridClass\"]],\" \",[26,[\"horizontalInputOffsetGridClass\"]]]]],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"checkbox\"],[13],[0,\"\\n        \"],[11,\"label\",[]],[13],[0,\"\\n            \"],[1,[33,[\"input\"],null,[[\"name\",\"type\",\"checked\",\"disabled\",\"required\"],[[28,[\"name\"]],\"checkbox\",[28,[\"value\"]],[28,[\"disabled\"]],[28,[\"required\"]]]]],false],[0,\" \"],[1,[26,[\"label\"]],false],[0,\"\\n        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[19,\"components/form-element/errors\"],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":true}", "meta": { "moduleName": "pix-live/templates/components/form-element/horizontal/checkbox.hbs" } });
});
define("pix-live/templates/components/form-element/horizontal/default", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "IGp7B6Kv", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"hasLabel\"]]],null,{\"statements\":[[0,\"    \"],[11,\"label\",[]],[16,\"class\",[34,[\"control-label \",[26,[\"horizontalLabelGridClass\"]],\" \",[33,[\"if\"],[[28,[\"invisibleLabel\"]],\"sr-only\"],null]]]],[16,\"for\",[34,[[26,[\"formElementId\"]]]]],[13],[1,[26,[\"label\"]],false],[14],[0,\"\\n    \"],[11,\"div\",[]],[16,\"class\",[34,[[26,[\"horizontalInputGridClass\"]]]]],[13],[0,\"\\n\"],[6,[\"if\"],[[29,\"default\"]],null,{\"statements\":[[0,\"            \"],[18,\"default\",[[28,[\"value\"]],[28,[\"formElementId\"]],[28,[\"validation\"]]]],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"            \"],[1,[33,[\"bs-input\"],null,[[\"id\",\"name\",\"type\",\"value\",\"placeholder\",\"autofocus\",\"disabled\",\"required\"],[[28,[\"formElementId\"]],[28,[\"name\"]],[28,[\"controlType\"]],[28,[\"value\"]],[28,[\"placeholder\"]],[28,[\"autofocus\"]],[28,[\"disabled\"]],[28,[\"required\"]]]]],false],[0,\"\\n\"]],\"locals\":[]}],[0,\"        \"],[19,\"components/form-element/feedback-icon\"],[0,\"\\n        \"],[19,\"components/form-element/errors\"],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"    \"],[11,\"div\",[]],[16,\"class\",[34,[[26,[\"horizontalInputGridClass\"]],\" \",[26,[\"horizontalInputOffsetGridClass\"]]]]],[13],[0,\"\\n\"],[6,[\"if\"],[[29,\"default\"]],null,{\"statements\":[[0,\"            \"],[18,\"default\",[[28,[\"value\"]],[28,[\"formElementId\"]],[28,[\"validation\"]]]],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"            \"],[1,[33,[\"bs-input\"],null,[[\"name\",\"type\",\"value\",\"placeholder\",\"autofocus\",\"disabled\",\"required\"],[[28,[\"name\"]],[28,[\"controlType\"]],[28,[\"value\"]],[28,[\"placeholder\"]],[28,[\"autofocus\"]],[28,[\"disabled\"]],[28,[\"required\"]]]]],false],[0,\"\\n\"]],\"locals\":[]}],[0,\"        \"],[19,\"components/form-element/feedback-icon\"],[0,\"\\n        \"],[19,\"components/form-element/errors\"],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":true}", "meta": { "moduleName": "pix-live/templates/components/form-element/horizontal/default.hbs" } });
});
define("pix-live/templates/components/form-element/horizontal/select", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3DZ4ffl1", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"hasLabel\"]]],null,{\"statements\":[[0,\"    \"],[11,\"label\",[]],[16,\"class\",[34,[\"control-label \",[26,[\"horizontalLabelGridClass\"]],\" \",[33,[\"if\"],[[28,[\"invisibleLabel\"]],\"sr-only\"],null]]]],[16,\"for\",[34,[[26,[\"formElementId\"]]]]],[13],[1,[26,[\"label\"]],false],[14],[0,\"\\n    \"],[11,\"div\",[]],[16,\"class\",[34,[[26,[\"horizontalInputGridClass\"]]]]],[13],[0,\"\\n        \"],[1,[33,[\"bs-select\"],null,[[\"id\",\"name\",\"content\",\"optionValuePath\",\"optionLabelPath\",\"value\",\"disabled\",\"required\"],[[28,[\"formElementId\"]],[28,[\"name\"]],[28,[\"choices\"]],[28,[\"choiceValueProperty\"]],[28,[\"choiceLabelProperty\"]],[28,[\"value\"]],[28,[\"disabled\"]],[28,[\"required\"]]]]],false],[0,\"\\n        \"],[19,\"components/form-element/feedback-icon\"],[0,\"\\n        \"],[19,\"components/form-element/errors\"],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"    \"],[11,\"div\",[]],[16,\"class\",[34,[[26,[\"horizontalInputGridClass\"]],\" \",[26,[\"horizontalInputOffsetGridClass\"]]]]],[13],[0,\"\\n        \"],[1,[33,[\"bs-select\"],null,[[\"name\",\"content\",\"optionValuePath\",\"optionLabelPath\",\"value\"],[[28,[\"name\"]],[28,[\"choices\"]],[28,[\"choiceValueProperty\"]],[28,[\"choiceLabelProperty\"]],[28,[\"value\"]]]]],false],[0,\"\\n        \"],[19,\"components/form-element/feedback-icon\"],[0,\"\\n        \"],[19,\"components/form-element/errors\"],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":true}", "meta": { "moduleName": "pix-live/templates/components/form-element/horizontal/select.hbs" } });
});
define("pix-live/templates/components/form-element/horizontal/textarea", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "pa3n/w+x", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"hasLabel\"]]],null,{\"statements\":[[0,\"    \"],[11,\"label\",[]],[16,\"class\",[34,[\"control-label \",[26,[\"horizontalLabelGridClass\"]],\" \",[33,[\"if\"],[[28,[\"invisibleLabel\"]],\"sr-only\"],null]]]],[16,\"for\",[34,[[26,[\"formElementId\"]]]]],[13],[1,[26,[\"label\"]],false],[14],[0,\"\\n    \"],[11,\"div\",[]],[16,\"class\",[34,[[26,[\"horizontalInputGridClass\"]]]]],[13],[0,\"\\n        \"],[1,[33,[\"bs-textarea\"],null,[[\"id\",\"name\",\"value\",\"placeholder\",\"autofocus\",\"cols\",\"rows\",\"disabled\",\"required\"],[[28,[\"formElementId\"]],[28,[\"name\"]],[28,[\"value\"]],[28,[\"placeholder\"]],[28,[\"autofocus\"]],[28,[\"cols\"]],[28,[\"rows\"]],[28,[\"disabled\"]],[28,[\"required\"]]]]],false],[0,\"\\n        \"],[19,\"components/form-element/feedback-icon\"],[0,\"\\n        \"],[19,\"components/form-element/errors\"],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"    \"],[11,\"div\",[]],[16,\"class\",[34,[[26,[\"horizontalInputGridClass\"]],\" \",[26,[\"horizontalInputOffsetGridClass\"]]]]],[13],[0,\"\\n        \"],[1,[33,[\"bs-textarea\"],null,[[\"name\",\"value\",\"placeholder\",\"autofocus\",\"cols\",\"rows\",\"disabled\",\"required\"],[[28,[\"name\"]],[28,[\"value\"]],[28,[\"placeholder\"]],[28,[\"autofocus\"]],[28,[\"cols\"]],[28,[\"rows\"]],[28,[\"disabled\"]],[28,[\"required\"]]]]],false],[0,\"\\n        \"],[19,\"components/form-element/feedback-icon\"],[0,\"\\n        \"],[19,\"components/form-element/errors\"],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":true}", "meta": { "moduleName": "pix-live/templates/components/form-element/horizontal/textarea.hbs" } });
});
define("pix-live/templates/components/form-element/inline/checkbox", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "9hqUGTQN", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"checkbox\"],[13],[0,\"\\n    \"],[11,\"label\",[]],[13],[0,\"\\n        \"],[1,[33,[\"input\"],null,[[\"name\",\"type\",\"checked\",\"disabled\",\"required\"],[[28,[\"name\"]],\"checkbox\",[28,[\"value\"]],[28,[\"disabled\"]],[28,[\"required\"]]]]],false],[0,\" \"],[1,[26,[\"label\"]],false],[0,\"\\n    \"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/form-element/inline/checkbox.hbs" } });
});
define("pix-live/templates/components/form-element/inline/default", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "YhoJ1NsU", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"hasLabel\"]]],null,{\"statements\":[[0,\"    \"],[11,\"label\",[]],[16,\"class\",[34,[\"control-label \",[33,[\"if\"],[[28,[\"invisibleLabel\"]],\"sr-only\"],null]]]],[16,\"for\",[34,[[26,[\"formElementId\"]]]]],[13],[1,[26,[\"label\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},null],[6,[\"if\"],[[29,\"default\"]],null,{\"statements\":[[0,\"    \"],[18,\"default\",[[28,[\"value\"]],[28,[\"formElementId\"]],[28,[\"validation\"]]]],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"    \"],[1,[33,[\"bs-input\"],null,[[\"id\",\"name\",\"type\",\"value\",\"placeholder\",\"autofocus\",\"disabled\",\"required\"],[[28,[\"formElementId\"]],[28,[\"name\"]],[28,[\"controlType\"]],[28,[\"value\"]],[28,[\"placeholder\"]],[28,[\"autofocus\"]],[28,[\"disabled\"]],[28,[\"required\"]]]]],false],[0,\"\\n\"]],\"locals\":[]}],[19,\"components/form-element/feedback-icon\"],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":true}", "meta": { "moduleName": "pix-live/templates/components/form-element/inline/default.hbs" } });
});
define("pix-live/templates/components/form-element/inline/select", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "HLc1LsMw", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"hasLabel\"]]],null,{\"statements\":[[0,\"    \"],[11,\"label\",[]],[16,\"class\",[34,[\"control-label \",[33,[\"if\"],[[28,[\"invisibleLabel\"]],\"sr-only\"],null]]]],[16,\"for\",[34,[[26,[\"formElementId\"]]]]],[13],[1,[26,[\"label\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},null],[1,[33,[\"bs-select\"],null,[[\"id\",\"name\",\"content\",\"optionValuePath\",\"optionLabelPath\",\"value\",\"disabled\",\"required\"],[[28,[\"formElementId\"]],[28,[\"name\"]],[28,[\"choices\"]],[28,[\"choiceValueProperty\"]],[28,[\"choiceLabelProperty\"]],[28,[\"value\"]],[28,[\"disabled\"]],[28,[\"required\"]]]]],false],[0,\"\\n\"],[19,\"components/form-element/feedback-icon\"],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":true}", "meta": { "moduleName": "pix-live/templates/components/form-element/inline/select.hbs" } });
});
define("pix-live/templates/components/form-element/inline/textarea", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "BG9hOloQ", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"hasLabel\"]]],null,{\"statements\":[[0,\"    \"],[11,\"label\",[]],[16,\"class\",[34,[\"control-label \",[33,[\"if\"],[[28,[\"invisibleLabel\"]],\"sr-only\"],null]]]],[16,\"for\",[34,[[26,[\"formElementId\"]]]]],[13],[1,[26,[\"label\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},null],[1,[33,[\"bs-textarea\"],null,[[\"id\",\"name\",\"value\",\"placeholder\",\"autofocus\",\"cols\",\"rows\",\"disabled\",\"required\"],[[28,[\"formElementId\"]],[28,[\"name\"]],[28,[\"value\"]],[28,[\"placeholder\"]],[28,[\"autofocus\"]],[28,[\"cols\"]],[28,[\"rows\"]],[28,[\"disabled\"]],[28,[\"required\"]]]]],false],[0,\"\\n\"],[19,\"components/form-element/feedback-icon\"],[0,\"\\n\"],[19,\"components/form-element/errors\"],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":true}", "meta": { "moduleName": "pix-live/templates/components/form-element/inline/textarea.hbs" } });
});
define("pix-live/templates/components/form-element/vertical/checkbox", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "bcpprown", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"checkbox\"],[13],[0,\"\\n    \"],[11,\"label\",[]],[13],[0,\"\\n        \"],[1,[33,[\"input\"],null,[[\"name\",\"type\",\"checked\",\"disabled\",\"required\"],[[28,[\"name\"]],\"checkbox\",[28,[\"value\"]],[28,[\"disabled\"]],[28,[\"required\"]]]]],false],[0,\" \"],[1,[26,[\"label\"]],false],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[19,\"components/form-element/errors\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":true}", "meta": { "moduleName": "pix-live/templates/components/form-element/vertical/checkbox.hbs" } });
});
define("pix-live/templates/components/form-element/vertical/default", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "APIjCF5l", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"hasLabel\"]]],null,{\"statements\":[[0,\"    \"],[11,\"label\",[]],[16,\"class\",[34,[\"control-label \",[33,[\"if\"],[[28,[\"invisibleLabel\"]],\"sr-only\"],null]]]],[16,\"for\",[34,[[26,[\"formElementId\"]]]]],[13],[1,[26,[\"label\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},null],[6,[\"if\"],[[29,\"default\"]],null,{\"statements\":[[0,\"    \"],[18,\"default\",[[28,[\"value\"]],[28,[\"formElementId\"]],[28,[\"validation\"]]]],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"    \"],[1,[33,[\"bs-input\"],null,[[\"id\",\"name\",\"type\",\"value\",\"placeholder\",\"autofocus\",\"disabled\",\"required\"],[[28,[\"formElementId\"]],[28,[\"name\"]],[28,[\"controlType\"]],[28,[\"value\"]],[28,[\"placeholder\"]],[28,[\"autofocus\"]],[28,[\"disabled\"]],[28,[\"required\"]]]]],false],[0,\"\\n\"]],\"locals\":[]}],[19,\"components/form-element/feedback-icon\"],[0,\"\\n\"],[19,\"components/form-element/errors\"],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":true}", "meta": { "moduleName": "pix-live/templates/components/form-element/vertical/default.hbs" } });
});
define("pix-live/templates/components/form-element/vertical/select", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "xVvOjR36", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"hasLabel\"]]],null,{\"statements\":[[0,\"    \"],[11,\"label\",[]],[16,\"class\",[34,[\"control-label \",[33,[\"if\"],[[28,[\"invisibleLabel\"]],\"sr-only\"],null]]]],[16,\"for\",[34,[[26,[\"formElementId\"]]]]],[13],[1,[26,[\"label\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},null],[1,[33,[\"bs-select\"],null,[[\"id\",\"name\",\"content\",\"optionValuePath\",\"optionLabelPath\",\"value\",\"disabled\",\"required\"],[[28,[\"formElementId\"]],[28,[\"name\"]],[28,[\"choices\"]],[28,[\"choiceValueProperty\"]],[28,[\"choiceLabelProperty\"]],[28,[\"value\"]],[28,[\"disabled\"]],[28,[\"required\"]]]]],false],[0,\"\\n\"],[19,\"components/form-element/feedback-icon\"],[0,\"\\n\"],[19,\"components/form-element/errors\"],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":true}", "meta": { "moduleName": "pix-live/templates/components/form-element/vertical/select.hbs" } });
});
define("pix-live/templates/components/form-element/vertical/textarea", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "zpm8il/0", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"hasLabel\"]]],null,{\"statements\":[[0,\"    \"],[11,\"label\",[]],[16,\"class\",[34,[\"control-label \",[33,[\"if\"],[[28,[\"invisibleLabel\"]],\"sr-only\"],null]]]],[16,\"for\",[34,[[26,[\"formElementId\"]]]]],[13],[1,[26,[\"label\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},null],[1,[33,[\"bs-textarea\"],null,[[\"id\",\"value\",\"name\",\"placeholder\",\"autofocus\",\"disabled\",\"required\",\"cols\",\"rows\"],[[28,[\"formElementId\"]],[28,[\"value\"]],[28,[\"name\"]],[28,[\"placeholder\"]],[28,[\"autofocus\"]],[28,[\"disabled\"]],[28,[\"required\"]],[28,[\"cols\"]],[28,[\"rows\"]]]]],false],[0,\"\\n\"],[19,\"components/form-element/feedback-icon\"],[0,\"\\n\"],[19,\"components/form-element/errors\"],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":true}", "meta": { "moduleName": "pix-live/templates/components/form-element/vertical/textarea.hbs" } });
});
define("pix-live/templates/components/g-recaptcha", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "RNLluJBe", "block": "{\"statements\":[[11,\"div\",[]],[15,\"id\",\"g-recaptcha-container\"],[13],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/g-recaptcha.hbs" } });
});
define("pix-live/templates/components/medal-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "G9ffs1XW", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"medal-item__div\"],[13],[0,\"\\n  \"],[11,\"img\",[]],[16,\"src\",[34,[[26,[\"rootURL\"]],\"/images/medaille.svg\"]]],[15,\"alt\",\"Médaille obtenue\"],[15,\"class\",\"medal-item__medal-img\"],[13],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"medal-item__pix-score\"],[13],[0,\"+\"],[1,[26,[\"pixScore\"]],false],[14],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"medal-item__pix-text\"],[13],[0,\"pix\"],[14],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"medal-item__bêta\"],[13],[0,\"BÊTA\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/medal-item.hbs" } });
});
define("pix-live/templates/components/modal-mobile", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mCydd35U", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"modal-mobile\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"modal fade js-modal-mobile\"],[15,\"tabindex\",\"-1\"],[15,\"role\",\"dialog\"],[15,\"id\",\"js-modal-mobile\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"modal-dialog\"],[15,\"role\",\"document\"],[13],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"modal-content\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"modal-header\"],[13],[0,\"\\n          \"],[11,\"h4\",[]],[15,\"class\",\"modal-title\"],[13],[0,\"\\n            \"],[11,\"img\",[]],[15,\"class\",\"modal-title__warning-icon\"],[15,\"src\",\"/images/icon-mobile-support-warning.svg\"],[15,\"alt\",\"Message d'alerte concernant le support des terminaux mobiles\"],[13],[14],[0,\"\\n          \"],[14],[0,\"\\n        \"],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"modal-body\"],[13],[0,\"\\n          \"],[11,\"p\",[]],[13],[0,\"Certaines épreuves PIX peuvent être difficiles à réussir sur mobile. Pour une meilleure expérience, nous vous conseillons de passer ce test sur un ordinateur.\"],[14],[0,\"\\n        \"],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"modal-footer\"],[13],[0,\"\\n          \"],[11,\"div\",[]],[15,\"class\",\"modal-button-container\"],[13],[0,\"\\n            \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"btn btn-primary modal-mobile__confirm-button\"],[15,\"data-confirm\",\"modal\"],[13],[0,\"Continuer\"],[14],[0,\"\\n          \"],[14],[0,\"\\n          \"],[11,\"div\",[]],[15,\"class\",\"modal-button-container\"],[13],[0,\"\\n            \"],[11,\"a\",[]],[15,\"nohref\",\"\"],[15,\"data-dismiss\",\"modal\"],[15,\"class\",\"modal-mobile__dismiss-link\"],[13],[0,\"Revenir à l’accueil\"],[14],[0,\"\\n          \"],[14],[0,\"\\n        \"],[14],[0,\"\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/modal-mobile.hbs" } });
});
define("pix-live/templates/components/navbar-header", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "jCyR13c+", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"navbar-header__container\"],[13],[0,\"\\n\\n  \"],[4,\" Logo (left) \"],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"navbar-header-logo\"],[13],[0,\"\\n    \"],[1,[26,[\"pix-logo\"]],false],[0,\"\\n  \"],[14],[0,\"\\n\\n  \"],[4,\" Links (right) \"],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"navbar-header-links\"],[13],[0,\"\\n    \"],[11,\"ul\",[]],[15,\"class\",\"navbar-header-links__list\"],[13],[0,\"\\n      \"],[11,\"li\",[]],[15,\"class\",\"navbar-header-links__item\"],[13],[0,\"\\n        \"],[6,[\"link-to\"],[\"project\"],[[\"class\"],[\"navbar-header-links__link navbar-header-links__link--project\"]],{\"statements\":[[0,\"Projet\"]],\"locals\":[]},null],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"li\",[]],[15,\"class\",\"navbar-header-links__item\"],[13],[0,\"\\n        \"],[6,[\"link-to\"],[\"competences\"],[[\"class\"],[\"navbar-header-links__link navbar-header-links__link--competences\"]],{\"statements\":[[0,\"Compétences\"]],\"locals\":[]},null],[0,\"\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/navbar-header.hbs" } });
});
define("pix-live/templates/components/pix-logo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "NukAoSBt", "block": "{\"statements\":[[6,[\"link-to\"],[\"index\"],[[\"class\",\"title\"],[\"pix-logo__link\",\"Lien vers la page d'accueil de PIX\"]],{\"statements\":[[0,\"  \"],[11,\"img\",[]],[15,\"class\",\"pix-logo__image\"],[15,\"src\",\"/images/pix-logo.svg\"],[15,\"alt\",\"Logo officiel de PIX (version bêta)\"],[13],[14],[0,\"\\n  \"],[11,\"span\",[]],[15,\"class\",\"pix-logo__beta\"],[13],[0,\"Bêta\"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/pix-logo.hbs" } });
});
define("pix-live/templates/components/progress-bar", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "1n4SDBS4", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"progress-bar progress-bar-info\"],[15,\"role\",\"progressbar\"],[16,\"aria-valuenow\",[28,[\"progress\",\"currentStep\"]],null],[15,\"aria-valuemin\",\"0\"],[15,\"aria-valuemax\",\"100\"],[16,\"style\",[26,[\"barStyle\"]],null],[13],[0,\"\\n  \"],[1,[28,[\"progress\",\"currentStep\"]],false],[0,\" / \"],[1,[28,[\"progress\",\"maxStep\"]],false],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/progress-bar.hbs" } });
});
define("pix-live/templates/components/qcm-proposals", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "1EjKkZdC", "block": "{\"statements\":[[6,[\"each\"],[[28,[\"labeledCheckboxes\"]]],null,{\"statements\":[[11,\"p\",[]],[15,\"class\",\"proposal-paragraph\"],[13],[0,\"\\n\\n\"],[0,\"  \"],[11,\"input\",[]],[15,\"type\",\"checkbox\"],[16,\"id\",[34,[\"checkbox_\",[33,[\"inc\"],[[28,[\"index\"]]],null]]]],[16,\"checked\",[28,[\"labeledCheckbox\",\"1\"]],null],[16,\"name\",[34,[[33,[\"inc\"],[[28,[\"index\"]]],null]]]],[13],[14],[0,\"\\n\\n\"],[0,\"  \"],[11,\"label\",[]],[16,\"for\",[34,[\"checkbox_\",[33,[\"inc\"],[[28,[\"index\"]]],null]]]],[15,\"class\",\"label-checkbox-proposal--qcm\"],[13],[0,\"\\n\\n\"],[0,\"    \"],[11,\"span\",[]],[15,\"class\",\"proposal-text\"],[13],[1,[28,[\"labeledCheckbox\",\"0\"]],false],[14],[0,\"\\n\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[\"labeledCheckbox\",\"index\"]},null],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/qcm-proposals.hbs" } });
});
define("pix-live/templates/components/qcm-solution-panel", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "AgipfWGp", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"qcm-panel__proposals rounded-panel\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"rounded-panel__row qcm-panel__proposal-list\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"labeledCheckboxes\"]]],null,{\"statements\":[[0,\"      \"],[11,\"p\",[]],[15,\"class\",\"qcm-panel__proposal-item\"],[13],[0,\"\\n        \"],[11,\"label\",[]],[15,\"class\",\"qcm-panel__proposal-label qcm-proposal-label\"],[13],[0,\"\\n\\n          \"],[11,\"input\",[]],[15,\"type\",\"checkbox\"],[15,\"class\",\"qcm-panel__proposal-checkbox\"],[16,\"checked\",[33,[\"if\"],[[28,[\"labeledCheckbox\",\"1\"]],\"checked\",\"\"],null],null],[15,\"disabled\",\"disabled\"],[13],[14],[0,\"\\n\\n          \"],[11,\"span\",[]],[15,\"class\",\"qcm-proposal-label__oracle\"],[16,\"data-goodness\",[34,[[33,[\"if\"],[[33,[\"get\"],[[28,[\"solutionArray\"]],[33,[\"concat\"],[[28,[\"index\"]]],null]],null],\"good\",\"bad\"],null]]]],[16,\"data-checked\",[33,[\"if\"],[[28,[\"labeledCheckbox\",\"1\"]],\"yes\",\"no\"],null],null],[13],[0,\"\\n            \"],[1,[28,[\"labeledCheckbox\",\"0\"]],false],[0,\"\\n          \"],[14],[0,\"\\n        \"],[14],[0,\"\\n      \"],[14],[0,\"\\n\"]],\"locals\":[\"labeledCheckbox\",\"index\"]},null],[0,\"  \"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/qcm-solution-panel.hbs" } });
});
define("pix-live/templates/components/qcu-proposals", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ZcDaxR+U", "block": "{\"statements\":[[11,\"form\",[]],[16,\"onchange\",[34,[[33,[\"action\"],[[28,[null]],\"radioClicked\"],null]]]],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"labeledRadios\"]]],null,{\"statements\":[[11,\"p\",[]],[15,\"class\",\"proposal-paragraph\"],[13],[0,\"\\n\\n\"],[0,\"  \"],[11,\"input\",[]],[15,\"type\",\"radio\"],[15,\"name\",\"radio\"],[16,\"value\",[34,[[33,[\"inc\"],[[28,[\"index\"]]],null]]]],[16,\"id\",[34,[\"radio_\",[33,[\"inc\"],[[28,[\"index\"]]],null]]]],[16,\"checked\",[28,[\"labeledRadio\",\"1\"]],null],[13],[14],[0,\"\\n\\n\"],[0,\"  \"],[11,\"label\",[]],[16,\"for\",[34,[\"radio_\",[33,[\"inc\"],[[28,[\"index\"]]],null]]]],[15,\"class\",\"label-checkbox-proposal--qcu\"],[13],[0,\"\\n\\n\"],[0,\"    \"],[11,\"span\",[]],[15,\"class\",\"sr-only\"],[13],[0,\"La réponse à la question est : \"],[14],[11,\"span\",[]],[15,\"class\",\"proposal-text\"],[13],[1,[28,[\"labeledRadio\",\"0\"]],false],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[\"labeledRadio\",\"index\"]},null],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/qcu-proposals.hbs" } });
});
define("pix-live/templates/components/qcu-solution-panel", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Tm9pjsTF", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"qcu-panel__proposals rounded-panel\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"rounded-panel__row qcu-panel__proposal-list\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"labeledRadios\"]]],null,{\"statements\":[[0,\"      \"],[11,\"p\",[]],[15,\"class\",\"qcu-panel__proposal-item\"],[13],[0,\"\\n\\n        \"],[11,\"label\",[]],[15,\"class\",\"qcu-panel__proposal-label qcu-proposal-label\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"labeledItemRadio\",\"1\"]]],null,{\"statements\":[[0,\"            \"],[11,\"svg\",[]],[15,\"class\",\"radio-on picture-radio-proposal--qcu\"],[15,\"width\",\"18px\"],[15,\"height\",\"18px\"],[15,\"viewBox\",\"0 0 18 18\"],[15,\"version\",\"1.1\"],[15,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[15,\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[13],[0,\"\\n              \"],[11,\"g\",[]],[15,\"id\",\"Styles\"],[15,\"stroke\",\"none\"],[15,\"stroke-width\",\"1\"],[15,\"fill\",\"none\"],[15,\"fill-rule\",\"evenodd\"],[13],[0,\"\\n                \"],[11,\"g\",[]],[15,\"id\",\"Icons\"],[15,\"transform\",\"translate(-133.000000, -89.000000)\"],[15,\"fill\",\"#7D808B\"],[13],[0,\"\\n                  \"],[11,\"g\",[]],[15,\"id\",\"icontest--radio-enabled\"],[15,\"transform\",\"translate(132.000000, 88.000000)\"],[13],[0,\"\\n                    \"],[11,\"path\",[]],[15,\"d\",\"M10,1 C12.3869484,1 14.6761336,1.94821156 16.363961,3.63603897 C18.0517884,5.32386638 19,7.61305159 19,10 C19,14.9705627 14.9705627,19 10,19 C7.61305159,19 5.32386638,18.0517884 3.63603897,16.363961 C1.94821156,14.6761336 1,12.3869484 1,10 C1,7.61305159 1.94821156,5.32386638 3.63603897,3.63603897 C5.32386638,1.94821156 7.61305159,1 10,1 L10,1 Z M9.1,14.05 L15.4,7.75 L14.131,6.481 L9.1,11.503 L6.319,8.731 L5.05,10 L9.1,14.05 Z\"],[15,\"id\",\"Shape\"],[13],[14],[0,\"\\n                  \"],[14],[0,\"\\n                \"],[14],[0,\"\\n              \"],[14],[0,\"\\n            \"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"            \"],[11,\"svg\",[]],[15,\"class\",\"radio-off picture-radio-proposal--qcu\"],[15,\"width\",\"18px\"],[15,\"height\",\"18px\"],[15,\"viewBox\",\"0 0 18 18\"],[15,\"version\",\"1.1\"],[15,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[15,\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[13],[0,\"\\n              \"],[11,\"g\",[]],[15,\"id\",\"Page-1\"],[15,\"stroke\",\"none\"],[15,\"stroke-width\",\"1\"],[15,\"fill\",\"none\"],[15,\"fill-rule\",\"evenodd\"],[13],[0,\"\\n                \"],[11,\"circle\",[]],[15,\"id\",\"Oval\"],[15,\"stroke\",\"#7D808B\"],[15,\"stroke-width\",\"2\"],[15,\"cx\",\"9\"],[15,\"cy\",\"9\"],[15,\"r\",\"8\"],[13],[14],[0,\"\\n              \"],[14],[0,\"\\n            \"],[14],[0,\"\\n\"]],\"locals\":[]}],[0,\"\\n          \"],[11,\"span\",[]],[15,\"class\",\"qcu-proposal-label__oracle\"],[16,\"data-goodness\",[34,[[33,[\"if\"],[[33,[\"get\"],[[28,[\"solutionArray\"]],[33,[\"concat\"],[[28,[\"index\"]]],null]],null],\"good\",\"bad\"],null]]]],[16,\"data-checked\",[33,[\"if\"],[[28,[\"labeledItemRadio\",\"1\"]],\"yes\",\"no\"],null],null],[13],[0,\"\\n            \"],[1,[28,[\"labeledItemRadio\",\"0\"]],false],[0,\"\\n          \"],[14],[0,\"\\n        \"],[14],[0,\"\\n\\n      \"],[14],[0,\"\\n\"]],\"locals\":[\"labeledItemRadio\",\"index\"]},null],[0,\"  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/qcu-solution-panel.hbs" } });
});
define("pix-live/templates/components/qroc-proposal", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "BhvL/u7+", "block": "{\"statements\":[[6,[\"each\"],[[28,[\"_blocks\"]]],null,{\"statements\":[[0,\"\\n\"],[6,[\"if\"],[[28,[\"block\",\"text\"]]],null,{\"statements\":[[0,\"    \"],[11,\"span\",[]],[15,\"id\",\"qroc_input\"],[13],[1,[28,[\"block\",\"text\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[\"block\",\"input\"]]],null,{\"statements\":[[0,\"    \"],[11,\"input\",[]],[15,\"class\",\"challenge-response__proposal-input\"],[15,\"type\",\"text\"],[15,\"for\",\"qroc_input\"],[16,\"name\",[28,[\"block\",\"input\"]],null],[16,\"placeholder\",[28,[\"block\",\"placeholder\"]],null],[16,\"value\",[34,[[26,[\"userAnswer\"]]]]],[15,\"data-uid\",\"qroc-proposal-uid\"],[13],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[\"block\",\"breakline\"]]],null,{\"statements\":[[0,\"    \"],[11,\"br\",[]],[13],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[\"block\"]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/qroc-proposal.hbs" } });
});
define("pix-live/templates/components/qroc-solution-panel", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "c9KvMh8z", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"correction-qroc-box rounded-panel\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"rounded-panel__row \"],[13],[0,\"\\n\\n    \"],[11,\"div\",[]],[15,\"class\",\"correction-qroc-box__answer\"],[13],[0,\"\\n      \"],[11,\"input\",[]],[16,\"class\",[34,[[26,[\"inputClass\"]],\" correction-qroc-box--answer__input\"]]],[16,\"value\",[34,[[26,[\"answerToDisplay\"]]]]],[15,\"disabled\",\"\"],[13],[14],[0,\"\\n    \"],[14],[0,\"\\n\\n\"],[6,[\"unless\"],[[28,[\"isResultOk\"]]],null,{\"statements\":[[0,\"      \"],[11,\"div\",[]],[15,\"class\",\"correction-qroc-box__solution\"],[13],[0,\"\\n        \"],[11,\"img\",[]],[15,\"class\",\"correction-qroc-box__solution-img\"],[15,\"src\",\"/images/comparison-window/icon-arrow-right.svg\"],[15,\"alt\",\"\"],[13],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"correction-qroc-box__solution-text\"],[13],[1,[26,[\"solutionToDisplay\"]],false],[14],[0,\"\\n      \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/qroc-solution-panel.hbs" } });
});
define("pix-live/templates/components/qrocm-ind-solution-panel", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "cLVmpYSG", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"qrocm-solution-panel rounded-panel\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"rounded-panel__row \"],[13],[0,\"\\n\\n    \"],[11,\"div\",[]],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"inputFields\"]]],null,{\"statements\":[[0,\"        \"],[11,\"div\",[]],[15,\"class\",\"correction-qrocm\"],[13],[0,\"\\n\\n          \"],[11,\"div\",[]],[15,\"class\",\"correction-qrocm__label\"],[13],[0,\"\\n            \"],[11,\"span\",[]],[13],[1,[28,[\"field\",\"label\"]],false],[14],[0,\"\\n          \"],[14],[0,\"\\n\\n          \"],[11,\"div\",[]],[15,\"class\",\"correction-qrocm__answer-solution\"],[13],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"correction-qrocm__answer\"],[13],[0,\"\\n              \"],[11,\"input\",[]],[16,\"value\",[34,[[28,[\"field\",\"answer\"]]]]],[16,\"class\",[34,[\"correction-qrocm__answer-input \",[28,[\"field\",\"inputClass\"]]]]],[15,\"disabled\",\"\"],[13],[14],[0,\"\\n            \"],[14],[0,\"\\n\\n\"],[6,[\"if\"],[[28,[\"field\",\"emptyOrWrongAnswer\"]]],null,{\"statements\":[[0,\"              \"],[11,\"div\",[]],[15,\"class\",\"correction-qrocm__solution\"],[13],[0,\"\\n                \"],[11,\"img\",[]],[15,\"class\",\"correction-qrocm__solution-img\"],[15,\"src\",\"/images/comparison-window/icon-arrow-right.svg\"],[15,\"alt\",\"\"],[13],[14],[0,\"\\n                \"],[11,\"div\",[]],[15,\"class\",\"correction-qrocm__solution-text\"],[13],[1,[28,[\"field\",\"solution\"]],false],[14],[0,\"\\n              \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"          \"],[14],[0,\"\\n\\n        \"],[14],[0,\"\\n\"]],\"locals\":[\"field\"]},null],[0,\"    \"],[14],[0,\"\\n\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/qrocm-ind-solution-panel.hbs" } });
});
define("pix-live/templates/components/qrocm-proposal", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "tg0NhPWV", "block": "{\"statements\":[[6,[\"each\"],[[28,[\"_blocks\"]]],null,{\"statements\":[[0,\"\\n\"],[6,[\"if\"],[[28,[\"block\",\"text\"]]],null,{\"statements\":[[0,\"    \"],[11,\"span\",[]],[13],[1,[28,[\"block\",\"text\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[\"block\",\"input\"]]],null,{\"statements\":[[0,\"    \"],[11,\"input\",[]],[15,\"class\",\"challenge-response__proposal-input\"],[15,\"type\",\"text\"],[16,\"name\",[28,[\"block\",\"input\"]],null],[16,\"placeholder\",[28,[\"block\",\"placeholder\"]],null],[16,\"value\",[33,[\"property-of\"],[[28,[\"answersValue\"]],[28,[\"block\",\"input\"]]],null],null],[13],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[\"block\",\"breakline\"]]],null,{\"statements\":[[0,\"    \"],[11,\"br\",[]],[13],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[\"block\"]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/qrocm-proposal.hbs" } });
});
define("pix-live/templates/components/result-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Q8TfL4dX", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"result-item__index\"],[13],[0,\"\\n  \"],[1,[33,[\"add\"],[[28,[\"index\"]],1],null],false],[0,\"\\n\"],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"result-item__item-line\"],[13],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"result-item__icon\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"data-toggle\",\"tooltip\"],[15,\"data-placement\",\"top\"],[16,\"title\",[34,[[28,[\"resultItem\",\"tooltip\"]]]]],[13],[0,\"\\n    \"],[11,\"img\",[]],[16,\"class\",[34,[\"result-item__icon-img result-item__icon-img--\",[28,[\"resultItem\",\"status\"]]]]],[16,\"src\",[26,[\"resultItemIcon\"]],null],[15,\"alt\",\"\"],[13],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"result-item__instruction\"],[13],[0,\"\\n  \"],[1,[33,[\"strip-instruction\"],[[33,[\"convert-to-html\"],[[28,[\"answer\",\"challenge\",\"instruction\"]]],null]],null],false],[0,\"\\n\"],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"result-item__correction\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"validationImplementedForChallengeType\"]]],null,{\"statements\":[[0,\"    \"],[11,\"button\",[]],[15,\"class\",\"result-item__correction__button js-correct-answer\"],[16,\"id\",[34,[[26,[\"a11y-focus-id\"]]]]],[5,[\"action\"],[[28,[null]],\"openComparisonPopin\",[28,[\"a11y-focus-id\"]]]],[13],[0,\" RÉPONSE\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/result-item.hbs" } });
});
define("pix-live/templates/components/routable-modal-backdrop", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "+AbAIzkS", "block": "{\"statements\":[[18,\"default\"],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/routable-modal-backdrop.hbs" } });
});
define("pix-live/templates/components/routable-modal-close-button", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "9oDvizLM", "block": "{\"statements\":[[6,[\"if\"],[[29,\"default\"]],null,{\"statements\":[[0,\"    \"],[18,\"default\"],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"    \"],[11,\"span\",[]],[13],[0,\"×\"],[14],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/routable-modal-close-button.hbs" } });
});
define("pix-live/templates/components/routable-modal-hold", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ZOT3E60t", "block": "{\"statements\":[[1,[33,[\"outlet\"],[\"routable-modal-outlet\"],null],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/routable-modal-hold.hbs" } });
});
define("pix-live/templates/components/routable-modal-outlet", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "WUY8+3Nq", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"current\",\"routeName\"]]],null,{\"statements\":[[0,\"    \"],[1,[26,[\"routable-modal-hold\"]],false],[0,\"\\n    \"],[1,[26,[\"routable-modal-backdrop\"]],false],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/routable-modal-outlet.hbs" } });
});
define("pix-live/templates/components/scoring-panel-tantpix", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "sDmUZdSw", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"tantpix-panel__illustration-container\"],[13],[0,\"\\n  \"],[11,\"img\",[]],[16,\"src\",[34,[[26,[\"rootURL\"]],\"/images/smiley.png\"]]],[16,\"srcset\",[34,[[26,[\"rootURL\"]],\"/images/smiley@2x.png 2x,\\n\\t\\t\\t\\t\\t \",[26,[\"rootURL\"]],\"/images/smiley@3x.png 3x\"]]],[15,\"class\",\"tantpix-panel__illustration\"],[15,\"alt\",\"smiley\"],[13],[14],[0,\"\\n\"],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"tantpix-panel__title-container\"],[13],[0,\"\\n  \"],[11,\"h1\",[]],[15,\"class\",\"tantpix-panel__title\"],[13],[0,\"Tant pix !\"],[14],[0,\"\\n\"],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"tantpix-panel__description-container\"],[13],[0,\"\\n  \"],[11,\"p\",[]],[15,\"class\",\"tantpix-panel__description\"],[13],[0,\"\\n    Manifestement, ce n'est pas votre jour mais vous ferez mieux la prochaine fois.\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"tantpix-panel__button-container\"],[13],[0,\"\\n\"],[6,[\"link-to\"],[\"index\"],[[\"class\",\"tagName\"],[\"tantpix-panel__button\",\"button\"]],{\"statements\":[[0,\"    revenir à l'accueil\\n\"]],\"locals\":[]},null],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/scoring-panel-tantpix.hbs" } });
});
define("pix-live/templates/components/scoring-panel", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ChmGxbdD", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"hasSomePix\"]]],null,{\"statements\":[[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"scoring-panel__reward\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"hasATrophy\"]]],null,{\"statements\":[[0,\"      \"],[1,[33,[\"trophy-item\"],null,[[\"level\"],[[28,[\"assessment\",\"estimatedLevel\"]]]]],false],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"      \"],[1,[33,[\"medal-item\"],null,[[\"pixScore\"],[[28,[\"assessment\",\"pixScore\"]]]]],false],[0,\"\\n\"]],\"locals\":[]}],[0,\"  \"],[14],[0,\"\\n\\n  \"],[11,\"div\",[]],[15,\"class\",\"scoring-panel__congrats\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"scoring-panel__congrats-course-name\"],[13],[1,[28,[\"assessment\",\"course\",\"name\"]],false],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"scoring-panel__congrats-line\"],[13],[14],[0,\"\\n\\n\"],[6,[\"if\"],[[28,[\"hasATrophy\"]]],null,{\"statements\":[[0,\"      \"],[11,\"div\",[]],[15,\"class\",\"scoring-panel__congrats-felicitations\"],[13],[0,\"Félicitations !\"],[14],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"scoring-panel__congrats-scoring\"],[13],[0,\"Vous avez obtenu le niveau \"],[1,[28,[\"assessment\",\"estimatedLevel\"]],false],[0,\" pour\\n        cette\\n        compétence et avez gagné \"],[1,[28,[\"assessment\",\"pixScore\"]],false],[0,\" pix.\\n      \"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"      \"],[11,\"div\",[]],[15,\"class\",\"scoring-panel__congrats-pas-mal\"],[13],[0,\"Pas mal, mais pas max !\"],[14],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"scoring-panel__congrats-scoring\"],[13],[0,\"Vous avez gagné \"],[1,[28,[\"assessment\",\"pixScore\"]],false],[0,\" pix ! *\"],[11,\"br\",[]],[13],[14],[0,\"\\n        Allez, encore quelques petits efforts et vous décrocherez le premier niveau\\n      \"],[14],[0,\"\\n\"]],\"locals\":[]}],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"scoring-panel__congrats-beta\"],[13],[0,\"*En version bêta, les pix et niveaux délivrés sont provisoires\"],[14],[0,\"\\n  \"],[14],[0,\"\\n\\n\"],[6,[\"link-to\"],[\"index\"],[[\"class\",\"tagName\"],[\"scoring-panel__index-link__element\",\"button\"]],{\"statements\":[[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"scoring-panel__index-link\"],[13],[0,\"\\n      \"],[11,\"span\",[]],[15,\"class\",\"scoring-panel__index-link-back\"],[13],[0,\"REVENIR À L'ACCUEIL\"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"  \"],[1,[26,[\"scoring-panel-tantpix\"]],false],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/scoring-panel.hbs" } });
});
define("pix-live/templates/components/signin-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "VhiRgSik", "block": "{\"statements\":[[11,\"a\",[]],[15,\"href\",\"/\"],[15,\"class\",\"signin-form__home-link\"],[13],[0,\"Revenir à la page d'accueil\\n  \"],[11,\"img\",[]],[15,\"class\",\"signin-form__home-link_close\"],[15,\"alt\",\"\"],[15,\"src\",\"/images/icons/icon-close.svg\"],[13],[14],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"signin-form__panel\"],[13],[0,\"\\n\\n  \"],[1,[26,[\"pix-logo\"]],false],[0,\"\\n\\n  \"],[11,\"h1\",[]],[15,\"class\",\"signin-form__panel-title\"],[13],[0,\"Se connecter\"],[14],[0,\"\\n\\n\"],[6,[\"if\"],[[28,[\"displayErrorMessage\"]]],null,{\"statements\":[[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"signin-form__errors\"],[13],[0,\"L'adresse email et/ou le mot de passe saisi sont incorrects\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"signin-form__form\"],[13],[0,\"\\n    \"],[11,\"form\",[]],[5,[\"action\"],[[28,[null]],\"submit\"],[[\"on\"],[\"submit\"]]],[13],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"signin-form__form-field\"],[13],[0,\"\\n        \"],[11,\"label\",[]],[15,\"for\",\"pix-email\"],[13],[0,\"Adresse e-mail\"],[14],[0,\"\\n        \"],[1,[33,[\"input\"],null,[[\"id\",\"type\",\"placeholder\",\"value\"],[\"pix-email\",\"email\",\"nom@exemple.fr\",[28,[\"email\"]]]]],false],[0,\"\\n      \"],[14],[0,\"\\n\\n\\n      \"],[11,\"div\",[]],[15,\"class\",\"signin-form__form-field\"],[13],[0,\"\\n        \"],[11,\"label\",[]],[15,\"for\",\"pix-password\"],[13],[0,\"Mot de passe\"],[14],[0,\"\\n        \"],[1,[33,[\"input\"],null,[[\"id\",\"type\",\"value\"],[\"pix-password\",\"password\",[28,[\"password\"]]]]],false],[0,\"\\n      \"],[14],[0,\"\\n\\n      \"],[11,\"div\",[]],[15,\"class\",\"signin-form__form-field signin-form__form-field-button\"],[13],[0,\"\\n        \"],[11,\"button\",[]],[15,\"type\",\"submit\"],[15,\"class\",\"signin-form__submit_button\"],[5,[\"action\"],[[28,[null]],\"submit\"],[[\"allowedKeys\"],[\"enter\"]]],[13],[0,\"Je me connecte\"],[14],[0,\"\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/signin-form.hbs" } });
});
define("pix-live/templates/components/signup-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3vOgj1JG", "block": "{\"statements\":[[11,\"form\",[]],[15,\"class\",\"signup-form-container\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"signup-form__logo\"],[13],[0,\"\\n    \"],[1,[26,[\"pix-logo\"]],false],[0,\"\\n  \"],[14],[0,\"\\n\\n  \"],[11,\"div\",[]],[15,\"class\",\"signup-form__heading-container\"],[13],[0,\"\\n    \"],[11,\"h1\",[]],[15,\"class\",\"signup-form__heading\"],[13],[0,\"Inscription gratuite\"],[14],[0,\"\\n  \"],[14],[0,\"\\n\\n\"],[6,[\"if\"],[[28,[\"_notificationMessage\"]]],null,{\"statements\":[[0,\"    \"],[11,\"p\",[]],[15,\"class\",\"signup-form__notification-message\"],[15,\"aria-live\",\"polite\"],[13],[1,[26,[\"_notificationMessage\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"signup-form__input-container\"],[13],[0,\"\\n    \"],[1,[33,[\"signup-textfield\"],null,[[\"label\",\"textfieldName\",\"inputBindingValue\",\"validate\",\"validationStatus\",\"validationMessage\"],[\"Nom\",\"lastName\",[28,[\"user\",\"lastName\"]],\"validateInput\",[28,[\"validation\",\"lastName\",\"status\"]],[28,[\"validation\",\"lastName\",\"message\"]]]]],false],[0,\"\\n  \"],[14],[0,\"\\n\\n  \"],[11,\"div\",[]],[15,\"class\",\"signup-form__input-container\"],[13],[0,\"\\n    \"],[1,[33,[\"signup-textfield\"],null,[[\"label\",\"textfieldName\",\"inputBindingValue\",\"validate\",\"validationStatus\",\"validationMessage\"],[\"Prénom\",\"firstName\",[28,[\"user\",\"firstName\"]],\"validateInput\",[28,[\"validation\",\"firstName\",\"status\"]],[28,[\"validation\",\"firstName\",\"message\"]]]]],false],[0,\"\\n  \"],[14],[0,\"\\n\\n  \"],[11,\"div\",[]],[15,\"class\",\"signup-form__input-container\"],[13],[0,\"\\n    \"],[1,[33,[\"signup-textfield\"],null,[[\"label\",\"textfieldName\",\"validationStatus\",\"validate\",\"inputBindingValue\",\"validationMessage\"],[\"Adresse Email\",\"email\",[28,[\"validation\",\"email\",\"status\"]],\"validateInputEmail\",[28,[\"user\",\"email\"]],[28,[\"validation\",\"email\",\"message\"]]]]],false],[0,\"\\n  \"],[14],[0,\"\\n\\n  \"],[11,\"div\",[]],[15,\"class\",\"signup-form__input-container\"],[13],[0,\"\\n    \"],[1,[33,[\"signup-textfield\"],null,[[\"label\",\"textfieldName\",\"validationStatus\",\"validate\",\"inputBindingValue\",\"validationMessage\"],[\"Mot de passe\",\"password\",[28,[\"validation\",\"password\",\"status\"]],\"validateInputPassword\",[28,[\"user\",\"password\"]],[28,[\"validation\",\"password\",\"message\"]]]]],false],[0,\"\\n  \"],[14],[0,\"\\n\\n  \"],[11,\"div\",[]],[15,\"class\",\"signup-form__cgu-container\"],[13],[0,\"\\n\\n\"],[6,[\"if\"],[[28,[\"user\",\"errors\",\"cgu\"]]],null,{\"statements\":[[0,\"      \"],[11,\"div\",[]],[15,\"class\",\"signup-textfield__cgu-message--error\"],[13],[0,\"\\n        \"],[1,[28,[\"user\",\"errors\",\"cgu\",\"firstObject\",\"message\"]],false],[0,\"\\n      \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n    \"],[11,\"label\",[]],[15,\"for\",\"pix-cgu\"],[15,\"class\",\"signup-form__cgu-label\"],[13],[0,\"\\n      \"],[1,[33,[\"input\"],null,[[\"type\",\"id\",\"checked\"],[\"checkbox\",\"pix-cgu\",[28,[\"user\",\"cgu\"]]]]],false],[0,\"\\n      \"],[11,\"span\",[]],[13],[0,\"J'​accepte les \"],[6,[\"link-to\"],[\"inscription\"],[[\"class\"],[\"signup__cgu-link\"]],{\"statements\":[[0,\"\\n        conditions d'​utilisation de Pix\"]],\"locals\":[]},null],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\\n  \"],[11,\"div\",[]],[15,\"class\",\"signup-form__captcha-container\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"user\",\"errors\",\"recaptchaToken\"]]],null,{\"statements\":[[0,\"      \"],[11,\"div\",[]],[15,\"class\",\"signup-field__recaptcha-message--error\"],[13],[1,[28,[\"user\",\"errors\",\"recaptchaToken\",\"firstObject\",\"message\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"    \"],[1,[33,[\"g-recaptcha\"],null,[[\"recaptchaToken\",\"tokenHasBeenUsed\"],[[28,[\"user\",\"recaptchaToken\"]],[28,[\"_tokenHasBeenUsed\"]]]]],false],[0,\"\\n  \"],[14],[0,\"\\n\\n  \"],[11,\"div\",[]],[15,\"class\",\"signup-form__submit-container\"],[13],[0,\"\\n    \"],[11,\"button\",[]],[15,\"class\",\"signup__submit-button\"],[5,[\"action\"],[[28,[null]],\"signup\"]],[13],[0,\"Je m'inscris\"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/signup-form.hbs" } });
});
define("pix-live/templates/components/signup-textfield", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "s2O+AwXF", "block": "{\"statements\":[[11,\"label\",[]],[16,\"for\",[34,[[26,[\"textfieldName\"]]]]],[15,\"class\",\"signup-textfield__label\"],[13],[1,[26,[\"label\"]],false],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"hasIcon\"]]],null,{\"statements\":[[0,\"  \"],[11,\"div\",[]],[16,\"class\",[34,[\"signup-textfield__message \",[26,[\"validationMessageClass\"]],\" signup-textfield__message-\",[26,[\"textfieldType\"]],\"\\n\"]]],[15,\"role\",\"alert\"],[13],[1,[26,[\"validationMessage\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[11,\"div\",[]],[16,\"class\",[34,[\"signup-textfield__input-field-container \",[26,[\"inputContainerStatusClass\"]]]]],[13],[0,\"\\n  \"],[1,[33,[\"input\"],[[33,[\"-input-type\"],[[28,[\"textfieldType\"]]],null]],[[\"type\",\"id\",\"value\",\"focus-out\",\"class\"],[[28,[\"textfieldType\"]],[28,[\"textfieldName\"]],[28,[\"inputBindingValue\"]],[33,[\"action\"],[[28,[null]],\"validate\"],null],[33,[\"concat\"],[\"signup-textfield__input\",\" \",[33,[\"if\"],[[28,[\"inputValidationStatus\"]],[33,[\"-normalize-class\"],[\"inputValidationStatus\",[28,[\"inputValidationStatus\"]]],null]],null],\" \"],null]]]],false],[0,\"\\n\\n\\n\"],[6,[\"if\"],[[28,[\"hasIcon\"]]],null,{\"statements\":[[6,[\"if\"],[[33,[\"eq\"],[[28,[\"validationStatus\"]],\"error\"],null]],null,{\"statements\":[[0,\"      \"],[11,\"img\",[]],[15,\"src\",\"/images/icons/icon-error.svg\"],[15,\"class\",\"signup-textfield__icon signup-textfield__icon--error\"],[13],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"      \"],[11,\"img\",[]],[15,\"src\",\"/images/icons/icon-success.svg\"],[15,\"class\",\"signup-textfield__icon signup-textfield__icon--success validation-icon-success\"],[13],[14],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[]},null],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/signup-textfield.hbs" } });
});
define("pix-live/templates/components/timeout-jauge", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Xx4Gz0uK", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"timeout-jauge\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"timeout-jauge-container\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"timeout-jauge-clock\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"hasFinished\"]]],null,{\"statements\":[[0,\"        \"],[11,\"img\",[]],[15,\"class\",\"svg-timeout-clock-red\"],[15,\"src\",\"/images/icon-timeout-red.svg\"],[15,\"alt\",\"Icône indiquant que le temps alloué est dépassé\"],[13],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"        \"],[11,\"img\",[]],[15,\"class\",\"svg-timeout-clock-black\"],[15,\"src\",\"/images/icon-timeout-black.svg\"],[15,\"alt\",\"Icône indiquant qu'il reste du temps pour accomplir l'épreuve\"],[13],[14],[0,\"\\n\"]],\"locals\":[]}],[0,\"      \"],[11,\"div\",[]],[13],[0,\" \"],[14],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"timeout-jauge-remaining\"],[16,\"data-spent\",[34,[[26,[\"remainingSeconds\"]]]]],[13],[0,\"\\n        \"],[1,[26,[\"remainingTime\"]],false],[0,\"\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"timeout-jauge-progress\"],[16,\"style\",[26,[\"jaugeWidthStyle\"]],null],[13],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/timeout-jauge.hbs" } });
});
define("pix-live/templates/components/trophy-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Ok+JDMRr", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"trophy-item__div-img\"],[13],[0,\"\\n  \"],[11,\"img\",[]],[16,\"src\",[34,[[26,[\"rootURL\"]],\"/images/coupe.svg\"]]],[15,\"alt\",\"Coupe obtenue\"],[15,\"class\",\"trophy-item__img\"],[13],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"trophy-item__level\"],[13],[0,\"NIVEAU \"],[1,[26,[\"level\"]],false],[14],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"trophy-item__bêta\"],[13],[0,\"BÊTA\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/trophy-item.hbs" } });
});
define("pix-live/templates/components/warning-page", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "kY4kvXCs", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"challenge-item-warning\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"challenge-item-warning__instruction-primary\"],[13],[0,\"\\n    Vous disposerez de \"],[11,\"span\",[]],[15,\"class\",\"challenge-item-warning__instruction-time\"],[13],[1,[26,[\"allocatedHumanTime\"]],false],[14],[0,\" pour\\n    réussir l’épreuve.\\n  \"],[14],[0,\"\\n\\n  \"],[11,\"div\",[]],[15,\"class\",\"challenge-item-warning__intruction-secondary\"],[13],[0,\"\\n    Vous pourrez continuer à répondre ensuite, mais l’épreuve ne sera pas considérée comme réussie.\\n  \"],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"challenge-item-warning__allocated-time\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"challenge__allocated-time__jauge\"],[13],[0,\"\\n      \"],[11,\"img\",[]],[15,\"class\",\"challenge__allocated-time__warning-icon\"],[15,\"src\",\"/images/icon-timed-challenge.svg\"],[15,\"alt\",\"Message d'avertissement\"],[13],[14],[0,\"\\n      \"],[11,\"span\",[]],[15,\"class\",\"challenge__allocated-time__value\"],[13],[1,[26,[\"allocatedTime\"]],false],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"challenge-item-warning__action\"],[13],[0,\"\\n    \"],[11,\"button\",[]],[15,\"class\",\"challenge-item-warning__confirm-btn\"],[5,[\"action\"],[[28,[null]],\"confirmWarning\"]],[13],[0,\"Commencer l'épreuve\"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/components/warning-page.hbs" } });
});
define("pix-live/templates/compte", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5v+UEzde", "block": "{\"statements\":[[11,\"div\",[]],[13],[0,\"\\n  \"],[11,\"h1\",[]],[13],[0,\"Bienvenue sur l'espace compte\"],[14],[0,\"\\n\\n  \"],[11,\"a\",[]],[15,\"href\",\"/deconnexion\"],[13],[0,\"Se déconnecter\"],[14],[0,\"\\n\\n  \"],[1,[26,[\"outlet\"]],false],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/compte.hbs" } });
});
define("pix-live/templates/connexion", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "hXw9VW9l", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"signin-container\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"signin-no-account\"],[13],[0,\"\\n    \"],[11,\"p\",[]],[15,\"class\",\"signin-no-account-text\"],[15,\"title\",\"\"],[13],[0,\"Vous n'avez pas encore de compte Pix ?\"],[14],[0,\"\\n    \"],[11,\"a\",[]],[15,\"class\",\"signin-inscription-button\"],[15,\"href\",\"/inscription\"],[13],[0,\"S'inscrire \"],[11,\"span\",[]],[15,\"class\",\"sr-only\"],[13],[0,\" sur Pix\"],[14],[0,\" \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\\n  \"],[1,[33,[\"signin-form\"],null,[[\"onSubmit\"],[[33,[\"route-action\"],[\"signin\"],null]]]],false],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/connexion.hbs" } });
});
define("pix-live/templates/course-groups", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5g9Wgc3x", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"course-groups-page\"],[13],[0,\"\\n\\n  \"],[1,[33,[\"navbar-header\"],null,[[\"class\"],[\"navbar-header--white\"]]],false],[0,\"\\n\\n  \"],[11,\"div\",[]],[15,\"class\",\"course-groups-page__header\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"course-groups-page__header-title\"],[13],[0,\"Les défis \"],[11,\"span\",[]],[15,\"class\",\"course-groups-page__header-title__pix-span\"],[13],[0,\"pix\"],[14],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"course-groups-page__header-description\"],[13],[0,\"Chaque semaine, testez vos compétences numériques sur un nouveau\\n      sujet.\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\\n  \"],[11,\"div\",[]],[15,\"class\",\"course-groups-page__course-groups\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"model\"]]],null,{\"statements\":[[0,\"      \"],[11,\"div\",[]],[15,\"class\",\"course-groups-page__course-group-item\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"course-groups-page__course-group-name\"],[13],[1,[28,[\"courseGroup\",\"name\"]],false],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"course-groups-page_course-group-line\"],[13],[14],[0,\"\\n\\n        \"],[11,\"div\",[]],[15,\"class\",\"course-groups-page__courses\"],[13],[1,[33,[\"course-list\"],null,[[\"courses\",\"startCourse\"],[[28,[\"courseGroup\",\"courses\"]],\"startCourse\"]]],false],[14],[0,\"\\n      \"],[14],[0,\"\\n\"]],\"locals\":[\"courseGroup\"]},null],[0,\"  \"],[14],[0,\"\\n\\n  \"],[1,[26,[\"app-footer\"]],false],[0,\"\\n\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/course-groups.hbs" } });
});
define("pix-live/templates/courses-loading", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7PcgeP7H", "block": "{\"statements\":[[11,\"div\",[]],[15,\"id\",\"home-loading\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"loader-container\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"loader\"],[13],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"loader-inner ball-zig-zag\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"ball-spinner\"],[13],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"ball-spinner\"],[13],[14],[0,\"\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/courses-loading.hbs" } });
});
define("pix-live/templates/courses", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "yZMBWsRJ", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"courses-page\"],[13],[0,\"\\n  \"],[1,[33,[\"course-list\"],null,[[\"courses\",\"startCourse\"],[[28,[\"model\"]],\"startCourse\"]]],false],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/courses.hbs" } });
});
define("pix-live/templates/courses/get-challenge-preview", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "hhTOSysZ", "block": "{\"statements\":[[11,\"div\",[]],[15,\"id\",\"challenge-preview\"],[16,\"data-id\",[34,[[28,[\"model\",\"challenge\",\"id\"]]]]],[15,\"class\",\"challenge-preview\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n\\n    \"],[1,[33,[\"component\"],[[33,[\"get-challenge-component-class\"],[[28,[\"model\",\"challenge\"]]],null]],[[\"challenge\",\"assessment\",\"answerValidated\"],[[28,[\"model\",\"challenge\"]],[28,[\"model\",\"assessment\"]],[33,[\"route-action\"],[\"navigate\"],null]]]],false],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/courses/get-challenge-preview.hbs" } });
});
define("pix-live/templates/courses/get-course-preview", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "HlfQvj4e", "block": "{\"statements\":[[11,\"div\",[]],[15,\"id\",\"course-preview\"],[16,\"data-id\",[34,[[28,[\"model\",\"course\",\"id\"]]]]],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n\\n    \"],[11,\"div\",[]],[15,\"class\",\"title\"],[13],[0,\"\\n      Prévisualisation du test #\"],[1,[28,[\"model\",\"course\",\"id\"]],false],[0,\"\\n    \"],[14],[0,\"\\n\\n    \"],[11,\"div\",[]],[15,\"class\",\"rounded-panel course-information\"],[13],[0,\"\\n      \"],[11,\"h3\",[]],[15,\"class\",\"course-name\"],[13],[1,[28,[\"model\",\"course\",\"name\"]],false],[14],[0,\"\\n      \"],[11,\"p\",[]],[15,\"class\",\"course-description\"],[13],[1,[28,[\"model\",\"course\",\"description\"]],false],[14],[0,\"\\n      \"],[11,\"hr\",[]],[13],[14],[0,\"\\n      \"],[6,[\"link-to\"],[\"courses.get-challenge-preview\",[28,[\"model\",\"course\",\"id\"]],[28,[\"model\",\"nextChallenge\",\"id\"]]],[[\"class\"],[\"pull-right button button-primary simulate-button\"]],{\"statements\":[[0,\"Simuler le test\"]],\"locals\":[]},null],[0,\"\\n\\n    \"],[14],[0,\"\\n\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/courses/get-course-preview.hbs" } });
});
define("pix-live/templates/deconnexion", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5uQdCL+h", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/deconnexion.hbs" } });
});
define("pix-live/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ozfULHW8", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"index-page\"],[13],[0,\"\\n\\n  \"],[11,\"div\",[]],[15,\"class\",\"index-page__background\"],[13],[14],[0,\"\\n\\n  \"],[11,\"section\",[]],[15,\"class\",\"index-page__section index-page__section--hero index-page-hero\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"index-page-hero__navbar-header\"],[13],[0,\"\\n      \"],[1,[26,[\"navbar-header\"]],false],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"index-page-hero__content\"],[13],[0,\"\\n      \"],[11,\"h1\",[]],[15,\"class\",\"index-page-hero__title\"],[13],[0,\"Développez vos compétences numériques\"],[14],[0,\"\\n      \"],[11,\"p\",[]],[15,\"class\",\"index-page-hero__description\"],[13],[0,\"PIX est un projet public de plateforme en ligne d’évaluation et de certification des compétences numériques, en cours de développement.\"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\\n  \"],[11,\"section\",[]],[15,\"class\",\"index-page__section index-page__section--challenges index-page-challenges\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"index-page-challenges__container\"],[13],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"index-page-challenges__presentation\"],[13],[0,\"\\n        \"],[11,\"h2\",[]],[15,\"class\",\"index-page-challenges__presentation-title\"],[13],[0,\"Les défis \"],[11,\"span\",[]],[15,\"class\",\"text--marigold\"],[13],[0,\"Pix\"],[14],[0,\" de la semaine\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[15,\"class\",\"index-page-challenges__presentation-text\"],[13],[0,\"Chaque semaine, testez vos compétences numériques sur un nouveau sujet.\"],[14],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"index-page-challenges__course-list\"],[13],[0,\"\\n        \"],[1,[33,[\"course-list\"],null,[[\"courses\",\"startCourse\",\"limit\"],[[28,[\"model\",\"coursesOfTheWeek\"]],\"startCourse\",2]]],false],[0,\"\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"index-page-challenges__courses-of-the-week\"],[13],[0,\"\\n\"],[6,[\"link-to\"],[\"course-groups\"],[[\"class\"],[\"index-page-challenges__courses-of-the-week-link\"]],{\"statements\":[[0,\"        VOIR LES DÉFIS PRÉCÉDENTS\"]],\"locals\":[]},null],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\\n  \"],[11,\"section\",[]],[15,\"class\",\"index-page__section index-page__section--courses index-page-courses\"],[13],[0,\"\\n    \"],[11,\"h2\",[]],[15,\"class\",\"index-page-courses__title\"],[13],[0,\"Découvrez nos épreuves et aidez‑nous à les améliorer !\"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"index-page-courses__course-list\"],[13],[0,\"\\n      \"],[1,[33,[\"course-list\"],null,[[\"courses\",\"startCourse\"],[[28,[\"model\",\"progressionCourses\"]],\"startCourse\"]]],false],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\\n  \"],[11,\"section\",[]],[15,\"class\",\"index-page__section index-page__section--community index-page-community\"],[13],[0,\"\\n    \"],[11,\"h2\",[]],[15,\"class\",\"index-page-community__title\"],[13],[0,\"Rejoindre la communauté\"],[14],[0,\"\\n    \"],[11,\"p\",[]],[15,\"class\",\"index-page-community__description\"],[13],[0,\"Vous souhaitez devenir béta‑testeur\"],[11,\"br\",[]],[13],[14],[0,\"ou être informé(e) du\\n      développement de Pix ?\"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"index-page-community__form\"],[13],[0,\"\\n      \"],[1,[26,[\"follower-form\"]],false],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\\n  \"],[11,\"section\",[]],[15,\"class\",\"index-page__section index-page__section--features index-page-features\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"index-page-features__list\"],[13],[0,\"\\n      \"],[1,[26,[\"feature-list\"]],false],[0,\"\\n    \"],[14],[0,\"\\n    \"],[6,[\"link-to\"],[\"project\"],[[\"class\"],[\"index-page-features__project-button\"]],{\"statements\":[[0,\"En savoir plus sur le projet\"]],\"locals\":[]},null],[0,\"\\n  \"],[14],[0,\"\\n\\n\"],[14],[0,\"\\n\\n\"],[1,[26,[\"app-footer\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/index.hbs" } });
});
define("pix-live/templates/inscription", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "eYDErBTu", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"inscription-page\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"signup-container\"],[13],[0,\"\\n    \"],[1,[33,[\"signup-form\"],null,[[\"user\",\"refresh\"],[[28,[\"model\"]],\"refresh\"]]],false],[0,\"\\n  \"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/inscription.hbs" } });
});
define("pix-live/templates/placement-tests", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "KVheE8CV", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"placement-tests-page-courses__course-list\"],[13],[0,\"\\n  \"],[1,[33,[\"course-list\"],null,[[\"courses\",\"startCourse\"],[[28,[\"model\"]],\"startCourse\"]]],false],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/placement-tests.hbs" } });
});
define("pix-live/templates/project", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "L5B6BIE5", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"project-page\"],[13],[0,\"\\n\\n  \"],[1,[33,[\"navbar-header\"],null,[[\"class\"],[\"navbar-header--white\"]]],false],[0,\"\\n\\n  \"],[11,\"section\",[]],[15,\"class\",\"project-page__panel project-page__header\"],[13],[0,\"\\n    \"],[11,\"h1\",[]],[15,\"class\",\"project-page__header-text\"],[13],[0,\"PIX est un projet public de plateforme en ligne d’évaluation et de certification des compétences numériques, en cours de développement.\"],[14],[0,\"\\n  \"],[14],[0,\"\\n\\n  \"],[11,\"section\",[]],[15,\"class\",\"rounded-panel project-page__panel project-page__populations\"],[13],[0,\"\\n    \"],[11,\"p\",[]],[15,\"class\",\"project-page__populations-headline\"],[13],[0,\"Le service sera accessible gratuitement et ouvert à tous les francophones :\"],[14],[0,\"\\n    \"],[11,\"ul\",[]],[15,\"class\",\"project-page__user-types\"],[13],[0,\"\\n      \"],[11,\"li\",[]],[15,\"class\",\"project-page__user-type\"],[13],[0,\"\\n        \"],[11,\"img\",[]],[15,\"class\",\"project-page__user-type-image\"],[16,\"src\",[34,[[26,[\"rootURL\"]],\"images/project/schoolers.png\"]]],[15,\"alt\",\"\"],[13],[14],[0,\"\\n        \"],[11,\"span\",[]],[15,\"class\",\"project-page__user-type-name\"],[13],[0,\"Collégiens et lycéens\"],[14],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"li\",[]],[15,\"class\",\"project-page__user-type\"],[13],[0,\"\\n        \"],[11,\"img\",[]],[15,\"class\",\"project-page__user-type-image\"],[16,\"src\",[34,[[26,[\"rootURL\"]],\"images/project/students.png\"]]],[15,\"alt\",\"\"],[13],[14],[0,\"\\n        \"],[11,\"span\",[]],[15,\"class\",\"project-page__user-type-name\"],[13],[0,\"Étudiants\"],[14],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"li\",[]],[15,\"class\",\"project-page__user-type\"],[13],[0,\"\\n        \"],[11,\"img\",[]],[15,\"class\",\"project-page__user-type-image\"],[16,\"src\",[34,[[26,[\"rootURL\"]],\"images/project/professionals.png\"]]],[15,\"alt\",\"\"],[13],[14],[0,\"\\n        \"],[11,\"span\",[]],[15,\"class\",\"project-page__user-type-name\"],[13],[0,\"Professionnels de tous secteurs\"],[14],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"li\",[]],[15,\"class\",\"project-page__user-type\"],[13],[0,\"\\n        \"],[11,\"img\",[]],[15,\"class\",\"project-page__user-type-image\"],[16,\"src\",[34,[[26,[\"rootURL\"]],\"images/project/citizens.png\"]]],[15,\"alt\",\"\"],[13],[14],[0,\"\\n        \"],[11,\"span\",[]],[15,\"class\",\"project-page__user-type-name\"],[13],[0,\"Citoyens\"],[14],[0,\"\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"p\",[]],[15,\"class\",\"project-page__populations-description\"],[13],[0,\"Son objectif est d’accompagner l’élévation du niveau général de connaissances et de compétences numériques et ainsi de préparer la transformation digitale de l’ensemble de notre société et de notre économie.\"],[14],[0,\"\\n  \"],[14],[0,\"\\n\\n  \"],[11,\"section\",[]],[15,\"class\",\"rounded-panel project-page__panel project-page__value project-page__value--measure\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"project-page__value-header\"],[13],[0,\"\\n      \"],[11,\"img\",[]],[15,\"class\",\"project-page__value-header-image\"],[16,\"src\",[34,[[26,[\"rootURL\"]],\"images/project/measure.png\"]]],[15,\"alt\",\"\"],[13],[14],[0,\"\\n      \"],[11,\"h2\",[]],[15,\"class\",\"project-page__value-header-name\"],[13],[0,\"Mesurer ses compétences numériques\"],[14],[0,\"\\n      \"],[11,\"hr\",[]],[15,\"class\",\"project-page__value-header-line\"],[13],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"project-page__value-body\"],[13],[0,\"\\n      \"],[11,\"p\",[]],[13],[0,\"PIX permettra d’obtenir un profil de compétences associé à un score global sur 1024 pix. En conformité avec le cadre de référence européen DIGCOMP, PIX évaluera les compétences numériques sur 8 niveaux et 5 grands domaines :\"],[14],[0,\"\\n      \"],[11,\"ul\",[]],[13],[0,\"\\n        \"],[11,\"li\",[]],[13],[0,\"Informations et données\"],[14],[0,\"\\n        \"],[11,\"li\",[]],[13],[0,\"Communication et collaboration\"],[14],[0,\"\\n        \"],[11,\"li\",[]],[13],[0,\"Création de contenu\"],[14],[0,\"\\n        \"],[11,\"li\",[]],[13],[0,\"Protection et sécurité\"],[14],[0,\"\\n        \"],[11,\"li\",[]],[13],[0,\"Environnement numérique\"],[14],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"p\",[]],[13],[0,\"Les épreuves évalueront les connaissances mais également les savoir-faire et la capacité à identifier les enjeux du numérique.\"],[14],[0,\"\\n      \"],[11,\"p\",[]],[13],[0,\"Des modalités innovantes d’évaluation seront proposées, dépassant le cadre habituel des QCM et privilégiant la mesure in vivo de compétences à partir d’activités réalisées dans leur environnement numérique réel : interactions, manipulations de fichiers, résolutions de problèmes, productions créatives, évaluations par les pairs, etc.\"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\\n  \"],[11,\"section\",[]],[15,\"class\",\"rounded-panel project-page__panel project-page__value project-page__value--develop\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"project-page__value-header\"],[13],[0,\"\\n      \"],[11,\"img\",[]],[15,\"class\",\"project-page__value-header-image\"],[16,\"src\",[34,[[26,[\"rootURL\"]],\"images/project/develop.png\"]]],[15,\"alt\",\"\"],[13],[14],[0,\"\\n      \"],[11,\"h2\",[]],[15,\"class\",\"project-page__value-header-name\"],[13],[0,\"Développer ses compétences numériques\"],[14],[0,\"\\n      \"],[11,\"hr\",[]],[15,\"class\",\"project-page__value-header-line\"],[13],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"project-page__value-body\"],[13],[0,\"\\n      \"],[11,\"p\",[]],[13],[0,\"Les apports de PIX au développement des compétences de chacun sont triples :\"],[14],[0,\"\\n      \"],[11,\"p\",[]],[13],[0,\"1. PIX permettra d’apprendre en se testant. Une part importante des épreuves PIX sont conçues sous la forme de défis à relever au cours desquels on développe ses compétences.\"],[14],[0,\"\\n      \"],[11,\"p\",[]],[13],[0,\"2. En s’appuyant sur les résultats des épreuves, PIX offrira également des recommandations ciblées de formation.\"],[14],[0,\"\\n      \"],[11,\"p\",[]],[13],[0,\"3. Le service proposera enfin un accès dédié aux équipes pédagogiques (collège, lycée, enseignement supérieur) et aux responsables de formation continue. Ils pourront suivre l’évolution des compétences des publics qu’ils encadrent, et concevoir des stratégies de formation sur mesure.\"],[14],[0,\"\\n      \"],[11,\"p\",[]],[13],[0,\"Pour témoigner des progrès de manière continue et stimulante, les utilisateurs disposeront d’un compte personnel sécurisé qui leur permettra de faire valoir leurs nouveaux acquis à leur rythme et tout au long de la vie.\"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\\n  \"],[11,\"section\",[]],[15,\"class\",\"rounded-panel project-page__panel project-page__value project-page__value--valorize\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"project-page__value-header\"],[13],[0,\"\\n      \"],[11,\"img\",[]],[15,\"class\",\"project-page__value-header-image\"],[16,\"src\",[34,[[26,[\"rootURL\"]],\"images/project/valorize.png\"]]],[15,\"alt\",\"\"],[13],[14],[0,\"\\n      \"],[11,\"h2\",[]],[15,\"class\",\"project-page__value-header-name\"],[13],[0,\"Valoriser ses compétences numériques\"],[14],[0,\"\\n      \"],[11,\"hr\",[]],[15,\"class\",\"project-page__value-header-line\"],[13],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"project-page__value-body\"],[13],[0,\"\\n      \"],[11,\"p\",[]],[13],[0,\"PIX proposera, de manière optionnelle, un mode « certifiant », permettant d’obtenir une certification\\n        officielle fiable et reconnue par l’éducation nationale, l’enseignement supérieur et le monde professionnel.\"],[14],[0,\"\\n\\n      \"],[11,\"p\",[]],[13],[0,\"Ce test complémentaire nécessitera, dans un premier temps, une passation en présentiel dans les centres\\n        agréés par PIX : collèges, lycées, établissements d’enseignement supérieur, structures partenaires.\"],[14],[0,\"\\n\\n      \"],[11,\"p\",[]],[13],[0,\"Des solutions de passation du mode certifiant à distance seront étudiées par la suite, à destination des\\n        professionnels.\"],[14],[0,\"\\n\\n      \"],[11,\"p\",[]],[13],[0,\"PIX se substituera au Brevet informatique et internet (B2i) et à la Certification informatique et internet\\n        (C2i) progressivement à partir de la rentrée 2017–2018.\"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\\n  \"],[11,\"section\",[]],[15,\"class\",\"project-page__presentation\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"project-page__panel project-page__presentation-container\"],[13],[0,\"\\n\\n      \"],[11,\"div\",[]],[15,\"class\",\"project-page__presentation-header\"],[13],[0,\"\\n        \"],[11,\"h2\",[]],[15,\"class\",\"project-page__presentation-header-name\"],[13],[0,\"PIX, un service en ligne co-construit et évolutif\"],[14],[0,\"\\n        \"],[11,\"hr\",[]],[15,\"class\",\"project-page__presentation-header-line\"],[13],[14],[0,\"\\n      \"],[14],[0,\"\\n\\n      \"],[11,\"div\",[]],[15,\"class\",\"project-page__presentation-body\"],[13],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"PIX respectera l’exigence de neutralité du service public et sera compatible avec l’ensemble des environnements numériques : diversité des systèmes d’exploitation et des services en ligne, logiciels propriétaires comme logiciels libres, etc.\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"PIX est développé selon la méthodologie agile des « Startups d’État » dans le cadre d’un partenariat entre tous les acteurs du ministère de l’Éducation nationale, de l’Enseignement supérieur et la Recherche, le Conseil national éducation-économie et le secrétariat général à la modernisation de l’action publique.\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"Le projet fait l’objet d’une démarche inédite de co-construction avec des acteurs du monde professionnel.\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"Des panels de tests sont organisés en établissement scolaire, dans l’enseignement supérieur ou en entreprise toutes les deux semaines pour mettre à l’épreuve les nouvelles fonctionnalités au fur et à mesure de leur développement et pour calibrer les épreuves.\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"PIX fait appel à la multitude des utilisateurs. Toutes les personnes, établissements et entreprises qui le souhaitent ont la possibilité de rejoindre la communauté des bêta-testeurs à distance. Le référentiel de compétences et les épreuves sont pensés pour évoluer dans le temps à l’aune des retours des utilisateurs.\"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"Le code source de la plateforme PIX est libre.\"],[14],[0,\"\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\\n\"],[14],[0,\"\\n\\n\"],[1,[26,[\"app-footer\"]],false],[0,\"\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "pix-live/templates/project.hbs" } });
});
define('pix-live/tests/mirage/mirage.lint-test', [], function () {
  'use strict';

  describe('ESLint | mirage', function () {

    it('mirage/config.js', function () {
      // test passed
    });

    it('mirage/data/answers/ref-qcm-answer.js', function () {
      // test passed
    });

    it('mirage/data/answers/ref-qcu-answer.js', function () {
      // test passed
    });

    it('mirage/data/answers/ref-qroc-answer.js', function () {
      // test passed
    });

    it('mirage/data/answers/ref-qrocm-answer.js', function () {
      // test passed
    });

    it('mirage/data/answers/ref-qru-answer.js', function () {
      // test passed
    });

    it('mirage/data/answers/ref-timed-answer-bis.js', function () {
      // test passed
    });

    it('mirage/data/answers/ref-timed-answer.js', function () {
      // test passed
    });

    it('mirage/data/assessments/ref-assessment-timed-challenges.js', function () {
      // test passed
    });

    it('mirage/data/assessments/ref-assessment.js', function () {
      // test passed
    });

    it('mirage/data/authentications/index.js', function () {
      // test passed
    });

    it('mirage/data/challenges/ref-qcm-challenge.js', function () {
      // test passed
    });

    it('mirage/data/challenges/ref-qcu-challenge.js', function () {
      // test passed
    });

    it('mirage/data/challenges/ref-qroc-challenge.js', function () {
      // test passed
    });

    it('mirage/data/challenges/ref-qrocm-challenge.js', function () {
      // test passed
    });

    it('mirage/data/challenges/ref-qru-challenge.js', function () {
      // test passed
    });

    it('mirage/data/challenges/ref-timed-challenge-bis.js', function () {
      // test passed
    });

    it('mirage/data/challenges/ref-timed-challenge.js', function () {
      // test passed
    });

    it('mirage/data/courses/highlighted-course.js', function () {
      // test passed
    });

    it('mirage/data/courses/ref-course-timed-challenges.js', function () {
      // test passed
    });

    it('mirage/data/courses/ref-course.js', function () {
      // test passed
    });

    it('mirage/data/feedbacks/ref-feedback.js', function () {
      // test passed
    });

    it('mirage/data/followers/index.js', function () {
      // test passed
    });

    it('mirage/data/solutions/ref-qcu-solution.js', function () {
      // test passed
    });

    it('mirage/data/solutions/ref-solution.js', function () {
      // test passed
    });

    it('mirage/data/users/index.js', function () {
      // test passed
    });

    it('mirage/factories/course-group.js', function () {
      // test passed
    });

    it('mirage/factories/course.js', function () {
      // test passed
    });

    it('mirage/fixtures/answers.js', function () {
      // test passed
    });

    it('mirage/fixtures/assessments.js', function () {
      // test passed
    });

    it('mirage/fixtures/challenges.js', function () {
      // test passed
    });

    it('mirage/fixtures/courses.js', function () {
      // test passed
    });

    it('mirage/fixtures/feedbacks.js', function () {
      // test passed
    });

    it('mirage/fixtures/followers.js', function () {
      // test passed
    });

    it('mirage/fixtures/solutions.js', function () {
      // test passed
    });

    it('mirage/fixtures/users.js', function () {
      // test passed
    });

    it('mirage/routes/get-answer-by-challenge-and-assessment.js', function () {
      // test passed
    });

    it('mirage/routes/get-answer.js', function () {
      // test passed
    });

    it('mirage/routes/get-assessment-solutions.js', function () {
      // test passed
    });

    it('mirage/routes/get-assessment.js', function () {
      // test passed
    });

    it('mirage/routes/get-challenge.js', function () {
      // test passed
    });

    it('mirage/routes/get-challenges.js', function () {
      // test passed
    });

    it('mirage/routes/get-course.js', function () {
      // test passed
    });

    it('mirage/routes/get-courses-of-the-week.js', function () {
      // test passed
    });

    it('mirage/routes/get-courses.js', function () {
      // test passed
    });

    it('mirage/routes/get-next-challenge.js', function () {
      // test passed
    });

    it('mirage/routes/patch-answer.js', function () {
      // test passed
    });

    it('mirage/routes/post-answers.js', function () {
      // test passed
    });

    it('mirage/routes/post-assessments.js', function () {
      // test passed
    });

    it('mirage/routes/post-authentications.js', function () {
      // test passed
    });

    it('mirage/routes/post-feedbacks.js', function () {
      // test passed
    });

    it('mirage/routes/post-followers.js', function () {
      // test passed
    });

    it('mirage/routes/post-refresh-solution.js', function () {
      // test passed
    });

    it('mirage/routes/post-users.js', function () {
      // test passed
    });

    it('mirage/scenarios/default.js', function () {
      // test passed
    });

    it('mirage/serializers/application.js', function () {
      // test passed
    });
  });
});
define('pix-live/transforms/array', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Transform.extend({
    deserialize: function deserialize(serialized) {
      return serialized;
    },
    serialize: function serialize(deserialized) {
      return deserialized;
    }
  });
});
define('pix-live/utils/answers-as-object', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = answersAsObject;
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
define('pix-live/utils/call-only-once', ['exports', 'pix-live/config/environment', 'pix-live/utils/lodash-custom'], function (exports, _environment, _lodashCustom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = callOnlyOnce;
  function callOnlyOnce(targetFunction) {
    if (_environment.default.EmberENV.useDelay) {
      return _lodashCustom.default.throttle(targetFunction, 1000, { leading: true, trailing: false });
    } else {
      return targetFunction;
    }
  }
});
define('pix-live/utils/can-use-dom', ['exports', 'ember-metrics/utils/can-use-dom'], function (exports, _canUseDom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _canUseDom.default;
    }
  });
});
define("pix-live/utils/email-validator", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isEmailValid;
  function isEmailValid(email) {
    if (!email) {
      return false;
    }
    // From http://stackoverflow.com/a/46181/5430854
    var pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return pattern.test(email.trim());
  }
});
define('pix-live/utils/get-challenge-type', ['exports', 'pix-live/utils/lodash-custom'], function (exports, _lodashCustom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getChallengeType;
  function getChallengeType(challengeTypeFromAirtable) {
    var result = 'qcu'; // qcu by default, no error thrown
    var challengeType = challengeTypeFromAirtable.toUpperCase();

    if ((0, _lodashCustom.default)(challengeType).isAmongst(['QCUIMG', 'QCU', 'QRU'])) {
      result = 'qcu';
    } else if ((0, _lodashCustom.default)(challengeType).isAmongst(['QCMIMG', 'QCM'])) {
      result = 'qcm';
    } else if ((0, _lodashCustom.default)(challengeType).isAmongst(['QROC'])) {
      result = 'qroc';
    } else if ((0, _lodashCustom.default)(challengeType).isAmongst(['QROCM', 'QROCM-IND', 'QROCM-DEP'])) {
      result = 'qrocm';
    }

    return result;
  }
});
define('pix-live/utils/labeled-checkboxes', ['exports', 'pix-live/utils/lodash-custom'], function (exports, _lodashCustom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = labeledCheckboxes;


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
    var definedUserAnswers = _lodashCustom.default.isNil(userAnswers) ? [] : userAnswers;

    // check pre-conditions
    if ((0, _lodashCustom.default)(proposals).isNotArrayOfString()) return [];
    if ((0, _lodashCustom.default)(proposals).isEmpty()) return [];
    if ((0, _lodashCustom.default)(definedUserAnswers).isNotArrayOfBoolean()) return [];
    if ((0, _lodashCustom.default)(definedUserAnswers).size() > (0, _lodashCustom.default)(proposals).size()) return [];

    var sizeDifference = (0, _lodashCustom.default)(proposals).size() - (0, _lodashCustom.default)(definedUserAnswers).size(); // 2
    var arrayOfFalse = _lodashCustom.default.times(sizeDifference, _lodashCustom.default.constant(false)); // [false, false]

    return _lodashCustom.default.chain(definedUserAnswers) // [false, true]
    .concat(arrayOfFalse) // [false, true, false, false]
    .zip(proposals) // [[false, 'prop 1'], [true, 'prop 2'], [false, 'prop 3'], [false, 'prop 4']]
    .map(_lodashCustom.default.reverse) // [['prop 1', false], ['prop 2', true], ['prop 3', false], ['prop 4', false]]
    .value();
  }
});
define('pix-live/utils/labels-as-object', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = labelsAsObject;
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
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
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

  exports.default = _;
});
define('pix-live/utils/object-transforms', ['exports', 'ember-metrics/utils/object-transforms'], function (exports, _objectTransforms) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _objectTransforms.default;
    }
  });
});
define("pix-live/utils/password-validator", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isPasswordValid;
  function isPasswordValid(password) {
    if (!password) {
      return false;
    }
    var pattern = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!%*#?&-]{8,}/;
    return pattern.test(password.trim());
  }
});
define('pix-live/utils/proposals-as-array', ['exports', 'pix-live/utils/lodash-custom'], function (exports, _lodashCustom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = proposalsAsArray;


  function calculate(proposals) {
    return _lodashCustom.default.chain(proposals).thru(function (e) {
      return '\n' + e;
    }).split(/\n\s*-\s*/).removeFirstElement().value();
  }

  function proposalsAsArray(proposals) {
    // check pre-conditions
    var DEFAULT_RETURN_VALUE = [];

    if ((0, _lodashCustom.default)(proposals).isNotString()) return DEFAULT_RETURN_VALUE;
    if ((0, _lodashCustom.default)(proposals).isEmpty()) return DEFAULT_RETURN_VALUE;

    return calculate(proposals);
  }
});
define('pix-live/utils/proposals-as-blocks', ['exports', 'lodash'], function (exports, _lodash) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = proposalsAsBlocks;


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

  function proposalsAsBlocks(proposals) {

    if ((0, _lodash.isEmpty)(proposals)) {
      return [];
    }

    var result = [];

    var lines = proposals.split(/[\r|\n]+/);
    lines.forEach(function (line, index) {
      var parts = line.split(/\s*(\${)|}\s*/);
      for (var j = 0; j < parts.length; j += 1) {
        var _parseInput = parseInput(lastIsOpening || false, parts[j]),
            lastIsOpening = _parseInput.lastIsOpening,
            block = _parseInput.block;

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
  }
});
define('pix-live/utils/result-details-as-object', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = resultDetailsAsObject;
  function resultDetailsAsObject(yamlResultDetails) {
    var resultDetailsAsObject = {};
    if (yamlResultDetails !== 'null\n') {
      resultDetailsAsObject = jsyaml.safeLoad(yamlResultDetails);
    }
    return resultDetailsAsObject;
  }
});
define("pix-live/utils/result-icon-url", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = resultIconUrl;
  function resultIconUrl(resultStatus) {
    if (!resultStatus) {
      return null;
    }
    return "/images/answer-validation/icon-" + resultStatus + ".svg";
  }
});
define('pix-live/utils/solution-as-object', ['exports', 'lodash'], function (exports, _lodash) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = solutionAsObject;


  function transformSolutionsToString(solutionsAsObject) {
    _lodash.default.each(solutionsAsObject, function (potentialSolution) {
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
define('pix-live/utils/value-as-array-of-boolean', ['exports', 'pix-live/utils/lodash-custom'], function (exports, _lodashCustom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = valueAsArrayOfBoolean;
  function valueAsArrayOfBoolean(value) {
    return _lodashCustom.default.chain(value) // in the worst case : ',4, 2 , 2,1,  ,'
    .checkPoint(function (e) {
      return _lodashCustom.default.isString(e) ? e : '';
    }) // check if string
    .split(',') // now ['', '4', ' 2 ', ' 2', '1', '  ', '']
    .map(_lodashCustom.default.trim) // now ['', '4', '2', '2', '1', '', '']
    .reject(_lodashCustom.default.isEmpty) // now ['4', '2', '2', '1']
    .checkPoint(function (e) {
      return _lodashCustom.default.every(e, _lodashCustom.default.isStrictlyPositiveInteger) ? e : [];
    }) // check if int >= 1
    .map(_lodashCustom.default.parseInt) // now [4, 2, 2, 1]
    .sortBy() // now [1, 2, 2, 4]
    .uniqBy() // now [1, 2, 4]
    .map(function (e) {
      return e - 1;
    }) // now [0, 1, 3]
    .thru(function (e) {
      return _lodashCustom.default.times(_lodashCustom.default.max(e) + 1, function (o) {
        return (0, _lodashCustom.default)(e).includes(o);
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
  require("pix-live/app")["default"].create({"API_HOST":"","isChallengeTimerEnable":true,"MESSAGE_DISPLAY_DURATION":1500,"isMobileSimulationEnabled":false,"isTimerCountdownEnabled":true,"isMessageStatusTogglingEnabled":true,"LOAD_EXTERNAL_SCRIPT":true,"GOOGLE_RECAPTCHA_KEY":"6LdPdiIUAAAAADhuSc8524XPDWVynfmcmHjaoSRO","FEEDBACK_PANEL_SCROLL_DURATION":800,"name":"pix-live","version":"1.14.0+c602daaf"});
}
//# sourceMappingURL=pix-live.map
