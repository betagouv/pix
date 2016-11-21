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

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
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
    session: _ember['default'].inject.service(),
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
define('pix-live/components/challenge-item', ['exports', 'ember', 'lodash/lodash'], function (exports, _ember, _lodashLodash) {
  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

  var computed = _ember['default'].computed;
  var inject = _ember['default'].inject;

  function actionValidate() {
    if (this._hasError()) {
      this.set('errorMessage', this._getErrorMessage());
      return this.sendAction('onError', this.get('errorMessage'));
    }
    var value = this._getAnswerValue();
    this.sendAction('onValidated', this.get('challenge'), this.get('assessment'), value);
  }

  function actionSkip() {
    this.set('errorMessage', null);
    this.sendAction('onValidated', this.get('challenge'), this.get('assessment'), '#ABAND#');
  }

  function callOnlyOnce(targetFunction) {
    if (EmberENV.useDelay) {
      return _lodashLodash['default'].throttle(targetFunction, 1000, { leading: true, trailing: false });
    } else {
      return targetFunction;
    }
  }

  function getFirstValueOfDictionary(answers) {
    return _lodashLodash['default'].pairs(answers)[0][1];
  }

  var ChallengeItem = _ember['default'].Component.extend({

    tagName: 'article',
    classNames: ['challenge-item'],
    attributeBindings: ['challenge.id:data-challenge-id'],

    assessmentService: inject.service('assessment'),

    challenge: null,
    assessment: null,
    selectedProposal: null,
    errorMessage: null,
    answers: {},

    hasIllustration: computed.notEmpty('challenge.illustrationUrl'),
    hasAttachment: computed.notEmpty('challenge.attachmentUrl'),
    isChallengePreviewMode: computed.empty('assessment'),
    hasError: computed.notEmpty('errorMessage'),

    // FIXME: too much duplication :x
    challengeIsTypeQROC: computed('challenge.type', function () {
      var challengeType = this.get('challenge.type');
      return ['QROC', 'QROCM'].any(function (type) {
        return type === challengeType;
      });
    }),
    challengeIsTypeQCM: computed('challenge.type', function () {
      var challengeType = this.get('challenge.type');
      return ['QCM', 'QCMIMG'].any(function (type) {
        return type === challengeType;
      });
    }),
    challengeIsTypeQCU: computed('challenge.type', function () {
      var challengeType = this.get('challenge.type');
      return ['QCU', 'QCUIMG'].any(function (type) {
        return type === challengeType;
      });
    }),

    onSelectedProposalChanged: _ember['default'].observer('selectedProposal', function () {
      this.set('errorMessage', null);
    }),

    didUpdateAttrs: function didUpdateAttrs() {
      this._super.apply(this, arguments);
      this.set('selectedProposal', null);
      this.set('answers', {});
    },
    actions: {

      updateQrocAnswer: function updateQrocAnswer(event) {
        var _event$currentTarget = event.currentTarget;
        var name = _event$currentTarget.name;
        var value = _event$currentTarget.value;

        this.set('answers.' + name, value);
        this.set('errorMessage', null);
      },

      updateQcmAnswer: function updateQcmAnswer(event) {
        var _event$currentTarget2 = event.currentTarget;
        var name = _event$currentTarget2.name;
        var checked = _event$currentTarget2.checked;

        var answers = this.get('answers');

        if (checked) {
          if (_ember['default'].isArray(answers)) {
            answers.push(name);
          } else {
            answers = [name];
          }
        } else {
          _lodashLodash['default'].remove(answers, function (answer) {
            return answer === name;
          });
        }

        this.set('answers', answers);
        this.set('errorMessage', null);
      },

      // XXX: prevent double-clicking from creating double record.
      validate: callOnlyOnce(actionValidate),

      skip: callOnlyOnce(actionSkip)
    },

    // eslint-disable-next-line complexity
    _getAnswerValue: function _getAnswerValue() {
      var challengeType = this.get('challenge.type');
      console.log(challengeType);

      switch (challengeType) {
        case 'QCUIMG':
        case 'QRU':
        case 'QCU':
          {
            var selectedValue = this.get('selectedProposal');
            return '' + (selectedValue + 1);
          }
        case 'QCMIMG':
        case 'QCM':
          {
            var answers = this.get('answers');
            return '' + answers.map(function (answer) {
              return parseInt(answer, 10) + 1;
            }).join(', ');
          }
        case 'QROC':
          {
            var answers = this.get('answers');
            return getFirstValueOfDictionary(answers);
          }
        case 'QROCM':
          {
            var answers = this.get('answers');
            return _lodashLodash['default'].pairs(answers).map(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2);

              var key = _ref2[0];
              var value = _ref2[1];
              return key + ' = "' + value + '"';
            }).join(', ');
          }
        default:
          return null;
      }
    },

    // eslint-disable-next-line complexity
    _hasError: function _hasError() {
      switch (this.get('challenge.type')) {
        case 'QCUIMG':
        case 'QRU':
        case 'QCU':
          return _ember['default'].isEmpty(this.get('selectedProposal'));
        case 'QCMIMG':
        case 'QCM':
          return !(this.get('answers.length') >= 1);
        case 'QROC':
        case 'QROCM':
          {
            var values = _lodashLodash['default'].values(this.get('answers'));
            return _ember['default'].isEmpty(values) || values.length < 1 || values.every(_ember['default'].isBlank);
          }
        default:
          return false;
      }
    },

    // eslint-disable-next-line complexity
    _getErrorMessage: function _getErrorMessage() {
      switch (this.get('challenge.type')) {
        case 'QCUIMG':
        case 'QCU':
          return "Pour valider, sélectionner une réponse. Sinon, passer.";
        case 'QCMIMG':
        case 'QCM':
          return "Pour valider, sélectionner au moins une réponse. Sinon, passer.";
        case 'QROC':
          return "Pour valider, saisir une réponse. Sinon, passer.";
        case 'QRU':
          return "Cocher la case avant de valider. Sinon, passer.";
        case 'QROCM':
          return "Pour valider, saisir au moins une réponse. Sinon, passer.";
        default:
          return "Pour valider, répondez correctement à l'épreuve. Sinon passer.";
      }
    }
  });

  ChallengeItem.reopenClass({
    positionalParams: ['challenge', 'assessment']
  });

  exports['default'] = ChallengeItem;
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
define('pix-live/components/identification-form', ['exports', 'ember', 'lodash/lodash'], function (exports, _ember, _lodashLodash) {

  // XXX from http://stackoverflow.com/a/46181/2120773
  function validateEmail(email) {

    var regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExp.test(email);
  }

  function getInputErrors(user) {

    var errors = [];

    if (_ember['default'].isEmpty(user.firstName)) {
      errors.push('Vous devez saisir votre prénom.');
    }
    if (_ember['default'].isEmpty(user.lastName)) {
      errors.push('Vous devez saisir votre nom.');
    }
    if (_ember['default'].isEmpty(user.email) || !validateEmail(user.email)) {
      errors.push('Vous devez saisir une adresse e-mail valide.');
    }
    return errors;
  }

  function removeErrorMessage(component) {

    component.set('errorMessage', null);
  }

  function setUserInSession(component, user) {

    var session = component.get('session');
    session.set('user', user);
    session.save();
  }

  function callActionOnUserIdentified(component) {

    component.sendAction('onUserIdentified');
  }

  exports['default'] = _ember['default'].Component.extend({

    session: _ember['default'].inject.service('session'),

    user: _ember['default'].Object.create(),
    errorMessage: null,

    hasError: _ember['default'].computed.notEmpty('errorMessage'),

    actions: {

      identify: function identify() {

        var user = this.get('user');

        var errors = getInputErrors(user);

        if (_ember['default'].isEmpty(errors)) {
          removeErrorMessage(this);
          setUserInSession(this, user);
          callActionOnUserIdentified(this);
        } else {
          this.set('errorMessage', _lodashLodash['default'].first(errors));
        }
      }

    }

  });
});
define('pix-live/components/load-email', ['exports', 'ember'], function (exports, _ember) {

  // The whole component is left untested for 17/11 release.`
  // Issue raised https://github.com/sgmap/pix-live/issues/142

  exports['default'] = _ember['default'].Component.extend({
    didInsertElement: function didInsertElement() {
      _ember['default'].run.scheduleOnce('afterRender', this, function () {

        var btn = $('.load-email')[0];
        var $contactForm = $('#contact-form');

        $contactForm.submit(
        /* istanbul ignore next */
        function (e) {
          e.preventDefault();
          btn.textContent = 'Veuillez patienter...';
          var emailValue = $('.first-page-email-enter').val();
          $.ajax({
            url: 'https://formspree.io/1024pix@gmail.com',
            method: 'POST',
            data: { email: emailValue },
            dataType: 'json',
            success: function success(data) {
              btn.classList.add('load-email-is-active');
              $('.first-page-email-enter').attr('disabled', 'disabled');
              $('button.load-email').attr('disabled', 'disabled');
              btn.textContent = 'Rejoindre la communauté';
            },
            error: function error() {
              btn.classList.add('load-email-is-error');
              setTimeout(function () {
                $('.first-page-email-enter').val('');
                btn.classList.remove('load-email-is-error');
                btn.textContent = 'Rejoindre la communauté';
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
  exports['default'] = _ember['default'].Controller.extend({
    session: _ember['default'].inject.service()
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
define('pix-live/initializers/enable-sentry', ['exports'], function (exports) {
  exports.initialize = initialize;

  function initialize() {
    if (EmberENV.environment) {
      Raven.config('https://4b60c9f39a844832956f840b9d0d1359@sentry.io/99479').install();
    }
  }

  exports['default'] = {
    name: 'enable-sentry',
    initialize: initialize
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
define('pix-live/mirage/config', ['exports', 'pix-live/mirage/routes/get-challenge', 'pix-live/mirage/routes/get-challenges', 'pix-live/mirage/routes/get-course', 'pix-live/mirage/routes/get-courses', 'pix-live/mirage/routes/get-answer', 'pix-live/mirage/routes/post-answers', 'pix-live/mirage/routes/get-assessment', 'pix-live/mirage/routes/post-assessments'], function (exports, _pixLiveMirageRoutesGetChallenge, _pixLiveMirageRoutesGetChallenges, _pixLiveMirageRoutesGetCourse, _pixLiveMirageRoutesGetCourses, _pixLiveMirageRoutesGetAnswer, _pixLiveMirageRoutesPostAnswers, _pixLiveMirageRoutesGetAssessment, _pixLiveMirageRoutesPostAssessments) {
  exports['default'] = function () {

    this.namespace = 'http://localhost:3000/api';

    this.get('/courses', _pixLiveMirageRoutesGetCourses['default']);
    this.get('/courses/:id', _pixLiveMirageRoutesGetCourse['default']);

    this.get('/challenges', _pixLiveMirageRoutesGetChallenges['default']);
    this.get('/challenges/:id', _pixLiveMirageRoutesGetChallenge['default']);

    this.post('/assessments', _pixLiveMirageRoutesPostAssessments['default']);
    this.get('/assessments/:id', _pixLiveMirageRoutesGetAssessment['default']);

    this.post('/answers', _pixLiveMirageRoutesPostAnswers['default']);
    this.get('/answers/:id', _pixLiveMirageRoutesGetAnswer['default']);
  };
});
define('pix-live/mirage/data/answers/qcm-answer-ko', ['exports', 'pix-live/mirage/data/challenges/qcm-challenge'], function (exports, _pixLiveMirageDataChallengesQcmChallenge) {
  exports['default'] = {
    data: {
      type: 'answers',
      id: 'answer_qcm_ko_id',
      attributes: {
        value: '1,2,5',
        result: 'ko'
      },
      relationships: {
        challenge: {
          data: {
            type: 'challenges',
            id: _pixLiveMirageDataChallengesQcmChallenge['default'].data.id
          }
        }
      }
    }
  };
});
define('pix-live/mirage/data/answers/qcm-answer-ok', ['exports', 'pix-live/mirage/data/challenges/qcm-challenge'], function (exports, _pixLiveMirageDataChallengesQcmChallenge) {
  exports['default'] = {
    data: {
      type: 'answers',
      id: 'answer_qcm_ok_id',
      attributes: {
        value: '1,2,5',
        result: 'ok'
      },
      relationships: {
        challenge: {
          data: {
            type: 'challenges',
            id: _pixLiveMirageDataChallengesQcmChallenge['default'].data.id
          }
        }
      }
    }
  };
});
define('pix-live/mirage/data/answers/qcm-answer', ['exports', 'pix-live/mirage/data/challenges/qcm-challenge'], function (exports, _pixLiveMirageDataChallengesQcmChallenge) {
  exports['default'] = {
    data: {
      type: 'answers',
      id: 'answer_qcm_id',
      attributes: {
        value: '1,2,5',
        result: 'pending'
      },
      relationships: {
        challenge: {
          data: {
            type: 'challenges',
            id: _pixLiveMirageDataChallengesQcmChallenge['default'].data.id
          }
        }
      }
    }
  };
});
define('pix-live/mirage/data/answers/qcu-answer-aband', ['exports', 'pix-live/mirage/data/challenges/qcu-challenge-aband'], function (exports, _pixLiveMirageDataChallengesQcuChallengeAband) {
  exports['default'] = {
    data: {
      type: 'answers',
      id: 'answer_qcu_aband_id',
      attributes: {
        value: '',
        result: 'aband'
      },
      relationships: {
        challenge: {
          data: {
            type: 'challenges',
            id: _pixLiveMirageDataChallengesQcuChallengeAband['default'].data.id
          }
        }
      }
    }
  };
});
define('pix-live/mirage/data/answers/qcu-answer-with-image', ['exports', 'pix-live/mirage/data/challenges/qcu-challenge-with-image'], function (exports, _pixLiveMirageDataChallengesQcuChallengeWithImage) {
  exports['default'] = {
    data: {
      type: 'answers',
      id: 'answer_qcu_with_image_id',
      attributes: {
        value: '2',
        result: 'ko'
      },
      relationships: {
        challenge: {
          data: {
            type: 'challenges',
            id: _pixLiveMirageDataChallengesQcuChallengeWithImage['default'].data.id
          }
        }
      }
    }
  };
});
define('pix-live/mirage/data/answers/qcu-answer', ['exports', 'pix-live/mirage/data/challenges/qcu-challenge'], function (exports, _pixLiveMirageDataChallengesQcuChallenge) {
  exports['default'] = {
    data: {
      type: 'answers',
      id: 'answer_qcu_id',
      attributes: {
        value: '3',
        result: 'ok'
      },
      relationships: {
        challenge: {
          data: {
            type: 'challenges',
            id: _pixLiveMirageDataChallengesQcuChallenge['default'].data.id
          }
        }
      }
    }
  };
});
define('pix-live/mirage/data/answers/qroc-answer-ko', ['exports', 'pix-live/mirage/data/challenges/qroc-challenge'], function (exports, _pixLiveMirageDataChallengesQrocChallenge) {
  exports['default'] = {
    data: {
      type: 'answers',
      id: 'answer_qroc_ko_id',
      attributes: {
        value: 'hokuto no ken',
        result: 'ko'
      },
      relationships: {
        challenge: {
          data: {
            type: 'challenges',
            id: _pixLiveMirageDataChallengesQrocChallenge['default'].data.id
          }
        }
      }
    }
  };
});
define('pix-live/mirage/data/answers/qroc-answer-ok', ['exports', 'pix-live/mirage/data/challenges/qroc-challenge'], function (exports, _pixLiveMirageDataChallengesQrocChallenge) {
  exports['default'] = {
    data: {
      type: 'answers',
      id: 'answer_qroc_ok_id',
      attributes: {
        value: 'la couteaudérie', // Erreur d'accent volontaire
        result: 'ok'
      },
      relationships: {
        challenge: {
          data: {
            type: 'challenges',
            id: _pixLiveMirageDataChallengesQrocChallenge['default'].data.id
          }
        }
      }
    }
  };
});
define('pix-live/mirage/data/answers/qroc-answer', ['exports', 'pix-live/mirage/data/challenges/qroc-challenge'], function (exports, _pixLiveMirageDataChallengesQrocChallenge) {
  exports['default'] = {
    data: {
      type: 'answers',
      id: 'answer_qroc_id',
      attributes: {
        value: 'rue de la couteauderie',
        result: 'pending'
      },
      relationships: {
        challenge: {
          data: {
            type: 'challenges',
            id: _pixLiveMirageDataChallengesQrocChallenge['default'].data.id
          }
        }
      }
    }
  };
});
define('pix-live/mirage/data/answers/qrocm-answer', ['exports', 'pix-live/mirage/data/challenges/qrocm-challenge'], function (exports, _pixLiveMirageDataChallengesQrocmChallenge) {
  exports['default'] = {
    data: {
      type: 'answers',
      id: 'answer_qrocm_id',
      attributes: {
        value: 'logiciel 1 = "LOTUS", logiciel 2 = "FIREFOX", logiciel 3 = "GOOGLE"',
        result: 'pending'
      },
      relationships: {
        challenge: {
          data: {
            type: 'challenges',
            id: _pixLiveMirageDataChallengesQrocmChallenge['default'].data.id
          }
        }
      }
    }
  };
});
define('pix-live/mirage/data/assessments/completed-assessment-qcm', ['exports', 'pix-live/mirage/data/courses/simple-course', 'pix-live/mirage/data/answers/qcm-answer-ok', 'pix-live/mirage/data/answers/qcm-answer-ko'], function (exports, _pixLiveMirageDataCoursesSimpleCourse, _pixLiveMirageDataAnswersQcmAnswerOk, _pixLiveMirageDataAnswersQcmAnswerKo) {
  exports['default'] = {
    data: {
      type: 'assessments',
      id: 'completed_assessment_qcm_id',
      attributes: {
        "user-id": 'user_id',
        "user-name": 'Jon Snow',
        "user-email": 'jsnow@winterfell.got'
      },
      relationships: {
        course: {
          data: {
            type: 'courses',
            id: _pixLiveMirageDataCoursesSimpleCourse['default'].data.id
          }
        },
        answers: {
          data: [{
            type: 'answers',
            id: _pixLiveMirageDataAnswersQcmAnswerOk['default'].data.id
          }, {
            type: 'answers',
            id: _pixLiveMirageDataAnswersQcmAnswerKo['default'].data.id
          }]
        }
      }
    }
  };
});
define('pix-live/mirage/data/assessments/completed-assessment-qroc', ['exports', 'pix-live/mirage/data/courses/simple-course', 'pix-live/mirage/data/answers/qroc-answer-ok', 'pix-live/mirage/data/answers/qroc-answer-ko'], function (exports, _pixLiveMirageDataCoursesSimpleCourse, _pixLiveMirageDataAnswersQrocAnswerOk, _pixLiveMirageDataAnswersQrocAnswerKo) {
  exports['default'] = {
    data: {
      type: 'assessments',
      id: 'completed_assessment_qroc_id',
      attributes: {
        "user-id": 'user_id',
        "user-name": 'Jon Snow',
        "user-email": 'jsnow@winterfell.got'
      },
      relationships: {
        course: {
          data: {
            type: 'courses',
            id: _pixLiveMirageDataCoursesSimpleCourse['default'].data.id
          }
        },
        answers: {
          data: [{
            type: 'answers',
            id: _pixLiveMirageDataAnswersQrocAnswerKo['default'].data.id
          }, {
            type: 'answers',
            id: _pixLiveMirageDataAnswersQrocAnswerOk['default'].data.id
          }]
        }
      }
    }
  };
});
define('pix-live/mirage/data/assessments/completed-assessment', ['exports', 'pix-live/mirage/data/courses/simple-course', 'pix-live/mirage/data/answers/qcu-answer', 'pix-live/mirage/data/answers/qcu-answer-with-image', 'pix-live/mirage/data/answers/qcm-answer', 'pix-live/mirage/data/answers/qcu-answer-aband', 'pix-live/mirage/data/answers/qroc-answer', 'pix-live/mirage/data/answers/qrocm-answer'], function (exports, _pixLiveMirageDataCoursesSimpleCourse, _pixLiveMirageDataAnswersQcuAnswer, _pixLiveMirageDataAnswersQcuAnswerWithImage, _pixLiveMirageDataAnswersQcmAnswer, _pixLiveMirageDataAnswersQcuAnswerAband, _pixLiveMirageDataAnswersQrocAnswer, _pixLiveMirageDataAnswersQrocmAnswer) {
  exports['default'] = {
    data: {
      type: 'assessments',
      id: 'completed_assessment_id',
      attributes: {
        "user-id": 'user_id',
        "user-name": 'Jon Snow',
        "user-email": 'jsnow@winterfell.got'
      },
      relationships: {
        course: {
          data: {
            type: 'courses',
            id: _pixLiveMirageDataCoursesSimpleCourse['default'].data.id
          }
        },
        answers: {
          data: [{
            type: 'answers',
            id: _pixLiveMirageDataAnswersQcuAnswer['default'].data.id
          }, {
            type: 'answers',
            id: _pixLiveMirageDataAnswersQcuAnswerWithImage['default'].data.id
          }, {
            type: 'answers',
            id: _pixLiveMirageDataAnswersQcmAnswer['default'].data.id
          }, {
            type: 'answers',
            id: _pixLiveMirageDataAnswersQrocAnswer['default'].data.id
          }, {
            type: 'answers',
            id: _pixLiveMirageDataAnswersQcuAnswerAband['default'].data.id
          }, {
            type: 'answers',
            id: _pixLiveMirageDataAnswersQrocmAnswer['default'].data.id
          }]
        }
      }
    }
  };
});
define('pix-live/mirage/data/assessments/in-progress-assessment', ['exports', 'pix-live/mirage/data/courses/simple-course', 'pix-live/mirage/data/answers/qcm-answer'], function (exports, _pixLiveMirageDataCoursesSimpleCourse, _pixLiveMirageDataAnswersQcmAnswer) {
  exports['default'] = {
    data: {
      type: 'assessments',
      id: 'in_progress_assessment_id',
      attributes: {
        "user-id": 'user_id',
        "user-name": 'Jon Snow',
        "user-email": 'jsnow@winterfell.got'
      },
      relationships: {
        course: {
          data: {
            type: 'courses',
            id: _pixLiveMirageDataCoursesSimpleCourse['default'].data.id
          }
        },
        answers: {
          data: [{
            type: 'answers',
            id: _pixLiveMirageDataAnswersQcmAnswer['default'].data.id
          }]
        }
      }
    }
  };
});
define('pix-live/mirage/data/assessments/new-assessment-of-noimage-course', ['exports', 'pix-live/mirage/data/courses/no-image-course'], function (exports, _pixLiveMirageDataCoursesNoImageCourse) {
  exports['default'] = {
    data: {
      type: 'assessments',
      id: 'new_assessment_of_noimage_course_id',
      attributes: {
        'user-id': 'user_id',
        'user-name': 'Jon Snow',
        'user-email': 'jsnow@winterfell.got'
      },
      relationships: {
        course: {
          data: {
            type: 'courses',
            id: _pixLiveMirageDataCoursesNoImageCourse['default'].data.id
          }
        }
      }
    }
  };
});
define('pix-live/mirage/data/assessments/new-assessment-of-simple-course', ['exports', 'pix-live/mirage/data/courses/simple-course'], function (exports, _pixLiveMirageDataCoursesSimpleCourse) {
  exports['default'] = {
    data: {
      type: 'assessments',
      id: 'new_assessment_id',
      attributes: {
        "user-id": 'user_id',
        "user-name": 'Jon Snow',
        "user-email": 'jsnow@winterfell.got'
      },
      relationships: {
        course: {
          data: {
            type: 'courses',
            id: _pixLiveMirageDataCoursesSimpleCourse['default'].data.id
          }
        }
      }
    }
  };
});
define('pix-live/mirage/data/assessments/new-assessment', ['exports', 'pix-live/mirage/data/courses/simple-course'], function (exports, _pixLiveMirageDataCoursesSimpleCourse) {
  exports['default'] = {
    data: {
      type: 'assessments',
      id: 'new_assessment_id',
      attributes: {
        "user-id": 'user_id',
        "user-name": 'Jon Snow',
        "user-email": 'jsnow@winterfell.got'
      },
      relationships: {
        course: {
          data: {
            type: 'courses',
            id: _pixLiveMirageDataCoursesSimpleCourse['default'].data.id
          }
        }
      }
    }
  };
});
define('pix-live/mirage/data/challenges/qcm-challenge', ['exports'], function (exports) {
  exports['default'] = {
    data: {
      type: 'challenges',
      id: 'qcm_challenge_id',
      attributes: {
        type: 'QCM',
        instruction: "Que peut-on dire des œufs de catégorie A ?",
        proposals: "- Ils sont bio.\n - Ils pèsent plus de 63 grammes.\n - Ce sont des oeufs frais.\n - Ils sont destinés aux consommateurs.\n - Ils ne sont pas lavés."
      }
    }
  };
});
define('pix-live/mirage/data/challenges/qcu-challenge-aband', ['exports'], function (exports) {
  exports['default'] = {
    data: {
      type: 'challenges',
      id: 'qcu_challenge_aband_id',
      attributes: {
        type: 'QCU',
        instruction: "Cette question sera considérée comme abandonnée",
        proposals: "" + "- D’accord\n " + "- Pas d’accord (mais c'est pareil)\n "
      }
    }
  };
});
define('pix-live/mirage/data/challenges/qcu-challenge-with-attachment', ['exports'], function (exports) {
  exports['default'] = {
    data: {
      type: 'challenges',
      id: 'qcu_challenge_with_attachment_id',
      attributes: {
        type: 'QCU',
        'attachment-url': 'http://example_of_url',
        'attachment-filename': 'example_of_filename.pdf',
        instruction: "Julie a déposé un document dans un espace de stockage partagé avec Pierre. Elle lui envoie un mail pour l’en informer. Quel est le meilleur message ?",
        proposals: "" + "- J’ai déposé le document ici : P: > Equipe > Communication > Textes > intro.odt\n " + "- Ci-joint le document que j’ai déposé dans l’espace partagé\n " + "- J’ai déposé le document intro.odt dans l’espace partagé\n" + "- J’ai déposé un nouveau document dans l’espace partagé, si tu ne le trouves pas je te l’enverrai par mail"
      }
    }
  };
});
define('pix-live/mirage/data/challenges/qcu-challenge-with-image', ['exports'], function (exports) {
  exports['default'] = {
    data: {
      type: 'challenges',
      id: 'qcu_challenge_with_image_id',
      attributes: {
        type: 'QCU',
        'illustration-url': 'http://fakeimg.pl/350x200/?text=DavidB&font=lobster',
        instruction: "Stéphanie a mis une **information** dans un espace de stockage partagé avec Roger. Comment pourrait-elle le communiquer à Roger ?",
        proposals: "" + "- J’ai déposé le document ici : P: > Equipe > Communication > Textes > intro.odt\n " + "- Ci-joint le document que j’ai déposé dans l’espace partagé\n " + "- J’ai déposé le document intro.odt dans l’espace partagé\n" + "- J’ai déposé un nouveau document dans l’espace partagé, si tu ne le trouves pas je te l’enverrai par mail"
      }
    }
  };
});
define('pix-live/mirage/data/challenges/qcu-challenge-with-links-in-instruction', ['exports'], function (exports) {
  exports['default'] = {
    data: {
      type: 'challenges',
      id: 'qcu_challenge_id_with_links_in_instruction',
      attributes: {
        type: 'QCU',
        instruction: "" + "Une consigne avec plusieurs liens : \n" + "- [Lien #1](http://lien.1.url)\n" + "- [Lien #2](http://lien.2.url)\n" + "- [Lien #3](http://lien.3.url)",
        proposals: "" + "- Choix #1\n " + "- Choix #2\n " + "- Choix #3"
      }
    }
  };
});
define('pix-live/mirage/data/challenges/qcu-challenge', ['exports'], function (exports) {
  exports['default'] = {
    data: {
      type: 'challenges',
      id: 'qcu_challenge_id',
      attributes: {
        type: 'QCU',
        instruction: "Julie a déposé un document dans un espace de [stockage](https://fr.wikipedia.org/wiki/Stockage) partagé avec Pierre. Elle lui envoie un mail pour l’en informer. Quel est le meilleur message ?",
        proposals: "" + "- J’ai déposé le document ici : P: > Equipe > Communication > Textes > intro.odt\n " + "- Ci-joint le document que j’ai déposé dans l’espace partagé\n " + "- J’ai déposé le document intro.odt dans l’espace partagé\n" + "- J’ai déposé un nouveau document dans l’espace partagé, si tu ne le trouves pas je te l’enverrai par mail"
      }
    }
  };
});
define('pix-live/mirage/data/challenges/qroc-challenge', ['exports'], function (exports) {
  exports['default'] = {
    data: {
      type: 'challenges',
      id: 'qroc_challenge_id',
      attributes: {
        type: 'QROC',
        instruction: "Dans le village de Montrésor (37, France), sur quelle rue débouche la rue des Perrières ?",
        proposals: "${Rue#Rue de...}"
      }
    }
  };
});
define('pix-live/mirage/data/challenges/qrocm-challenge', ['exports'], function (exports) {
  exports['default'] = {
    data: {
      type: 'challenges',
      id: 'qrocm_challenge_id',
      attributes: {
        type: 'QROCM',
        instruction: "Citez un ou plusieurs logiciel(s) permettant de réaliser un montage vidéo.",
        proposals: "Réponses : ${logiciel} ${logiciel} ${logiciel}"
      }
    }
  };
});
define('pix-live/mirage/data/courses/no-image-course', ['exports', 'pix-live/mirage/data/challenges/qcu-challenge', 'pix-live/mirage/data/challenges/qcm-challenge', 'pix-live/mirage/data/challenges/qrocm-challenge'], function (exports, _pixLiveMirageDataChallengesQcuChallenge, _pixLiveMirageDataChallengesQcmChallenge, _pixLiveMirageDataChallengesQrocmChallenge) {
  exports['default'] = {
    data: {
      type: "courses",
      id: "course_with_no_image",
      attributes: {
        name: "Test sans image",
        description: "Description d'un test sans image",
        duration: 20
      },
      relationships: {
        challenges: {
          data: [{
            type: "challenges",
            id: _pixLiveMirageDataChallengesQcuChallenge['default'].data.id
          }, {
            type: "challenges",
            id: _pixLiveMirageDataChallengesQrocmChallenge['default'].data.id
          }]
        }
      }
    }
  };
});
define('pix-live/mirage/data/courses/simple-course', ['exports', 'pix-live/mirage/data/challenges/qcu-challenge-with-image', 'pix-live/mirage/data/challenges/qcu-challenge', 'pix-live/mirage/data/challenges/qcm-challenge', 'pix-live/mirage/data/challenges/qroc-challenge', 'pix-live/mirage/data/challenges/qrocm-challenge'], function (exports, _pixLiveMirageDataChallengesQcuChallengeWithImage, _pixLiveMirageDataChallengesQcuChallenge, _pixLiveMirageDataChallengesQcmChallenge, _pixLiveMirageDataChallengesQrocChallenge, _pixLiveMirageDataChallengesQrocmChallenge) {
  exports['default'] = {
    data: {
      type: "courses",
      id: "simple_course_id",
      attributes: {
        name: "Name of the course",
        description: "A short description of the course",
        duration: 10,
        "image-url": 'https://dl.airtable.com/L8AQwmIURNu79XmKFoPO_storage-1209059_960_720.jpg'
      },
      relationships: {
        challenges: {
          data: [{
            type: "challenges",
            id: _pixLiveMirageDataChallengesQcmChallenge['default'].data.id
          }, {
            type: "challenges",
            id: _pixLiveMirageDataChallengesQcuChallenge['default'].data.id
          }, {
            type: "challenges",
            id: _pixLiveMirageDataChallengesQcuChallengeWithImage['default'].data.id
          }, {
            type: "challenges",
            id: _pixLiveMirageDataChallengesQrocChallenge['default'].data.id
          }, {
            type: "challenges",
            id: _pixLiveMirageDataChallengesQrocmChallenge['default'].data.id
          }]
        }
      }
    }
  };
});
define('pix-live/mirage/routes/get-answer', ['exports', 'lodash/lodash', 'pix-live/mirage/data/answers/qcu-answer-aband', 'pix-live/mirage/data/answers/qcu-answer', 'pix-live/mirage/data/answers/qcu-answer-with-image', 'pix-live/mirage/data/answers/qrocm-answer', 'pix-live/mirage/data/answers/qcm-answer', 'pix-live/mirage/data/answers/qcm-answer-ko', 'pix-live/mirage/data/answers/qcm-answer-ok', 'pix-live/mirage/data/answers/qroc-answer-ko', 'pix-live/mirage/data/answers/qroc-answer', 'pix-live/mirage/data/answers/qroc-answer-ok'], function (exports, _lodashLodash, _pixLiveMirageDataAnswersQcuAnswerAband, _pixLiveMirageDataAnswersQcuAnswer, _pixLiveMirageDataAnswersQcuAnswerWithImage, _pixLiveMirageDataAnswersQrocmAnswer, _pixLiveMirageDataAnswersQcmAnswer, _pixLiveMirageDataAnswersQcmAnswerKo, _pixLiveMirageDataAnswersQcmAnswerOk, _pixLiveMirageDataAnswersQrocAnswerKo, _pixLiveMirageDataAnswersQrocAnswer, _pixLiveMirageDataAnswersQrocAnswerOk) {
  exports['default'] = function (schema, request) {

    var allAnswers = [_pixLiveMirageDataAnswersQcuAnswer['default'], _pixLiveMirageDataAnswersQcuAnswerWithImage['default'], _pixLiveMirageDataAnswersQcmAnswer['default'], _pixLiveMirageDataAnswersQrocmAnswer['default'], _pixLiveMirageDataAnswersQcmAnswerKo['default'], _pixLiveMirageDataAnswersQcmAnswerOk['default'], _pixLiveMirageDataAnswersQcuAnswerAband['default'], _pixLiveMirageDataAnswersQrocAnswerKo['default'], _pixLiveMirageDataAnswersQrocAnswer['default'], _pixLiveMirageDataAnswersQrocAnswerOk['default']];

    var answers = _lodashLodash['default'].map(allAnswers, function (oneAnswer) {
      return { id: oneAnswer.data.id, obj: oneAnswer };
    });

    var answer = _lodashLodash['default'].find(answers, { id: request.params.id });

    if (answer) {
      return answer.obj;
    } else {
      throw new Error('The answer you required in the fake server does not exist ' + request.params.id);
    }
  };
});
define('pix-live/mirage/routes/get-assessment', ['exports', 'pix-live/mirage/data/assessments/completed-assessment', 'pix-live/mirage/data/assessments/completed-assessment-qcm', 'pix-live/mirage/data/assessments/completed-assessment-qroc', 'pix-live/mirage/data/assessments/in-progress-assessment'], function (exports, _pixLiveMirageDataAssessmentsCompletedAssessment, _pixLiveMirageDataAssessmentsCompletedAssessmentQcm, _pixLiveMirageDataAssessmentsCompletedAssessmentQroc, _pixLiveMirageDataAssessmentsInProgressAssessment) {
  exports['default'] = function (schema, request) {

    switch (request.params.id) {
      case _pixLiveMirageDataAssessmentsInProgressAssessment['default'].data.id:
        return _pixLiveMirageDataAssessmentsInProgressAssessment['default'];
      case _pixLiveMirageDataAssessmentsCompletedAssessment['default'].data.id:
        return _pixLiveMirageDataAssessmentsCompletedAssessment['default'];
      case _pixLiveMirageDataAssessmentsCompletedAssessmentQcm['default'].data.id:
        return _pixLiveMirageDataAssessmentsCompletedAssessmentQcm['default'];
      case _pixLiveMirageDataAssessmentsCompletedAssessmentQroc['default'].data.id:
        return _pixLiveMirageDataAssessmentsCompletedAssessmentQroc['default'];
      default:
        return _pixLiveMirageDataAssessmentsCompletedAssessment['default'];
    }
  };
});
define('pix-live/mirage/routes/get-challenge', ['exports', 'lodash/lodash', 'pix-live/mirage/data/challenges/qcu-challenge-aband', 'pix-live/mirage/data/challenges/qcu-challenge-with-image', 'pix-live/mirage/data/challenges/qcu-challenge-with-attachment', 'pix-live/mirage/data/challenges/qcu-challenge-with-links-in-instruction', 'pix-live/mirage/data/challenges/qcu-challenge', 'pix-live/mirage/data/challenges/qcm-challenge', 'pix-live/mirage/data/challenges/qroc-challenge', 'pix-live/mirage/data/challenges/qrocm-challenge'], function (exports, _lodashLodash, _pixLiveMirageDataChallengesQcuChallengeAband, _pixLiveMirageDataChallengesQcuChallengeWithImage, _pixLiveMirageDataChallengesQcuChallengeWithAttachment, _pixLiveMirageDataChallengesQcuChallengeWithLinksInInstruction, _pixLiveMirageDataChallengesQcuChallenge, _pixLiveMirageDataChallengesQcmChallenge, _pixLiveMirageDataChallengesQrocChallenge, _pixLiveMirageDataChallengesQrocmChallenge) {
  exports['default'] = function (schema, request) {

    var allChallenges = [_pixLiveMirageDataChallengesQcuChallengeAband['default'], _pixLiveMirageDataChallengesQcuChallengeWithImage['default'], _pixLiveMirageDataChallengesQcuChallengeWithAttachment['default'], _pixLiveMirageDataChallengesQcuChallengeWithLinksInInstruction['default'], _pixLiveMirageDataChallengesQcuChallenge['default'], _pixLiveMirageDataChallengesQcmChallenge['default'], _pixLiveMirageDataChallengesQrocChallenge['default'], _pixLiveMirageDataChallengesQrocmChallenge['default']];

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
define('pix-live/mirage/routes/get-challenges', ['exports', 'pix-live/mirage/data/challenges/qcu-challenge', 'pix-live/mirage/data/challenges/qcm-challenge', 'pix-live/mirage/data/challenges/qroc-challenge', 'pix-live/mirage/data/challenges/qrocm-challenge'], function (exports, _pixLiveMirageDataChallengesQcuChallenge, _pixLiveMirageDataChallengesQcmChallenge, _pixLiveMirageDataChallengesQrocChallenge, _pixLiveMirageDataChallengesQrocmChallenge) {
  exports['default'] = function () {

    return {
      data: [_pixLiveMirageDataChallengesQcuChallenge['default'].data, _pixLiveMirageDataChallengesQcmChallenge['default'].data, _pixLiveMirageDataChallengesQrocChallenge['default'].data, _pixLiveMirageDataChallengesQrocmChallenge['default'].data]
    };
  };
});
define('pix-live/mirage/routes/get-course', ['exports', 'pix-live/mirage/data/courses/simple-course', 'pix-live/mirage/data/courses/no-image-course'], function (exports, _pixLiveMirageDataCoursesSimpleCourse, _pixLiveMirageDataCoursesNoImageCourse) {
  exports['default'] = function (schema, request) {

    var courseId = request.params.id;

    if (courseId === 'course_with_no_image') {
      return _pixLiveMirageDataCoursesNoImageCourse['default'];
    }
    return _pixLiveMirageDataCoursesSimpleCourse['default'];
  };
});
define('pix-live/mirage/routes/get-courses', ['exports', 'pix-live/mirage/data/courses/simple-course', 'pix-live/mirage/data/courses/no-image-course'], function (exports, _pixLiveMirageDataCoursesSimpleCourse, _pixLiveMirageDataCoursesNoImageCourse) {
  exports['default'] = function () {
    return {
      data: [_pixLiveMirageDataCoursesSimpleCourse['default'].data, _pixLiveMirageDataCoursesNoImageCourse['default'].data]
    };
  };
});
define('pix-live/mirage/routes/post-answers', ['exports', 'pix-live/mirage/data/challenges/qcm-challenge', 'pix-live/mirage/data/challenges/qcu-challenge', 'pix-live/mirage/data/challenges/qroc-challenge', 'pix-live/mirage/data/challenges/qcu-challenge-with-image', 'pix-live/mirage/data/challenges/qrocm-challenge', 'pix-live/mirage/data/answers/qcm-answer', 'pix-live/mirage/data/answers/qcu-answer', 'pix-live/mirage/data/answers/qroc-answer', 'pix-live/mirage/data/answers/qcu-answer-with-image', 'pix-live/mirage/data/answers/qrocm-answer'], function (exports, _pixLiveMirageDataChallengesQcmChallenge, _pixLiveMirageDataChallengesQcuChallenge, _pixLiveMirageDataChallengesQrocChallenge, _pixLiveMirageDataChallengesQcuChallengeWithImage, _pixLiveMirageDataChallengesQrocmChallenge, _pixLiveMirageDataAnswersQcmAnswer, _pixLiveMirageDataAnswersQcuAnswer, _pixLiveMirageDataAnswersQrocAnswer, _pixLiveMirageDataAnswersQcuAnswerWithImage, _pixLiveMirageDataAnswersQrocmAnswer) {
  exports['default'] = function (schema, request) {

    var answer = JSON.parse(request.requestBody);

    switch (answer.data.relationships.challenge.data.id) {

      case _pixLiveMirageDataChallengesQcmChallenge['default'].data.id:
        return _pixLiveMirageDataAnswersQcmAnswer['default'];
      case _pixLiveMirageDataChallengesQcuChallenge['default'].data.id:
        return _pixLiveMirageDataAnswersQcuAnswer['default'];
      case _pixLiveMirageDataChallengesQrocChallenge['default'].data.id:
        return _pixLiveMirageDataAnswersQrocAnswer['default'];
      case _pixLiveMirageDataChallengesQcuChallengeWithImage['default'].data.id:
        return _pixLiveMirageDataAnswersQcuAnswerWithImage['default'];
      case _pixLiveMirageDataChallengesQrocmChallenge['default'].data.id:
        return _pixLiveMirageDataAnswersQrocmAnswer['default'];
      default:
        throw new Error();
    }
  };
});
define('pix-live/mirage/routes/post-assessments', ['exports', 'pix-live/mirage/data/assessments/new-assessment-of-simple-course', 'pix-live/mirage/data/assessments/new-assessment-of-noimage-course'], function (exports, _pixLiveMirageDataAssessmentsNewAssessmentOfSimpleCourse, _pixLiveMirageDataAssessmentsNewAssessmentOfNoimageCourse) {
  exports['default'] = function (schema, request) {

    var answer = JSON.parse(request.requestBody);

    switch (answer.data.relationships.course.data.id) {

      case _pixLiveMirageDataAssessmentsNewAssessmentOfSimpleCourse['default'].data.relationships.course.data.id:
        return _pixLiveMirageDataAssessmentsNewAssessmentOfSimpleCourse['default'];
      case _pixLiveMirageDataAssessmentsNewAssessmentOfNoimageCourse['default'].data.relationships.course.data.id:
        return _pixLiveMirageDataAssessmentsNewAssessmentOfNoimageCourse['default'];
      default:
        throw new Error('undefined new assessment, sorry');
    }
  };
});
define('pix-live/models/answer', ['exports', 'ember-data'], function (exports, _emberData) {
  var Model = _emberData['default'].Model;
  var attr = _emberData['default'].attr;
  var belongsTo = _emberData['default'].belongsTo;
  var _Ember = Ember;
  var computed = _Ember.computed;
  exports['default'] = Model.extend({

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
define('pix-live/models/assessment', ['exports', 'ember-data'], function (exports, _emberData) {
  var attr = _emberData['default'].attr;
  var Model = _emberData['default'].Model;
  var belongsTo = _emberData['default'].belongsTo;
  var hasMany = _emberData['default'].hasMany;
  var _Ember = Ember;
  var computed = _Ember.computed;
  var isEqual = _Ember.isEqual;
  exports['default'] = Model.extend({

    course: belongsTo('course', { inverse: null }),
    answers: hasMany('answer'),
    userName: attr('string'),
    userEmail: attr('string'),

    numberOfValidatedAnswers: computed('answers', function () {
      return this.get('answers').filter(function (answer) {
        return answer.get('value') !== '#ABAND#';
      }).get('length');
    }),

    firstChallenge: computed.alias('course.challenges.firstObject')

  });
});
define('pix-live/models/challenge', ['exports', 'ember-data', 'pix-live/models/challenge/proposals-as-array-mixin', 'pix-live/models/challenge/proposals-as-blocks-mixin'], function (exports, _emberData, _pixLiveModelsChallengeProposalsAsArrayMixin, _pixLiveModelsChallengeProposalsAsBlocksMixin) {
  var Model = _emberData['default'].Model;
  var attr = _emberData['default'].attr;

  var ChallengeModel = Model.extend(_pixLiveModelsChallengeProposalsAsArrayMixin['default'], _pixLiveModelsChallengeProposalsAsBlocksMixin['default'], {

    instruction: attr('string'),
    proposals: attr('string'),
    illustrationUrl: attr('string'),
    type: attr('string'),
    attachmentUrl: attr('string'),
    attachmentFilename: attr('string')

  });

  exports['default'] = ChallengeModel;
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
      case "":
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
    this.route('preferences');

    this.route('challenges.get-preview', { path: '/challenges/:challenge_id/preview' });

    this.route('courses.get-course-preview', { path: '/courses/:course_id/preview' });
    this.route('courses.get-challenge-preview', { path: '/courses/:course_id/preview/challenges/:challenge_id' });
    this.route('courses.create-assessment', { path: '/courses/:course_id/assessment' });

    this.route('assessments.get-challenge', { path: '/assessments/:assessment_id/challenges/:challenge_id' });
    this.route('assessments.get-results', { path: '/assessments/:assessment_id/results' });
  });
});
define('pix-live/routes/assessments/get-challenge', ['exports', 'ember', 'rsvp', 'ember-data'], function (exports, _ember, _rsvp, _emberData) {
  exports['default'] = _ember['default'].Route.extend({

    assessmentService: _ember['default'].inject.service('assessment'),

    model: function model(params) {
      var store = this.get('store');
      var assessmentPromise = store.findRecord('assessment', params.assessment_id);
      var challengePromise = store.findRecord('challenge', params.challenge_id);

      return _rsvp['default'].hash({
        assessment: assessmentPromise,
        challenge: challengePromise
      });
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
          return _this2.transitionTo('assessments.get-challenge', { challenge: challenge, assessment: assessment });
        }
        return _this2.transitionTo('assessments.get-results', { assessment: assessment });
      });
    },

    setupController: function setupController(controller, model) {
      this._super(controller, model);

      var progressToSet = model.assessment.get('course').then(function (course) {
        return course.getProgress(model.challenge);
      });

      controller.set('progress', _emberData['default'].PromiseObject.create({ promise: progressToSet }));
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
        assessment: store.findRecord('assessment', params.assessment_id)
      });
    },

    serialize: function serialize(model) {
      return {
        assessment_id: model.assessment.id
      };
    }

  });
});
define('pix-live/routes/challenges/get-preview', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model(params) {
      return this.get('store').findRecord('challenge', params.challenge_id);
    }

  });
});
define('pix-live/routes/courses/create-assessment', ['exports', 'ember', 'rsvp'], function (exports, _ember, _rsvp) {
  exports['default'] = _ember['default'].Route.extend({

    session: _ember['default'].inject.service(),

    model: function model(params) {
      var _this = this;

      var store = this.get('store');
      return store.findRecord('course', params.course_id).then(function (course) {

        // FIXME : add (route?) tests
        var userName = _this.get('session.user.firstName') + ' ' + _this.get('session.user.lastName');
        var userEmail = _this.get('session.user.email');

        return store.createRecord('assessment', { course: course, userName: userName, userEmail: userEmail }).save().then(function (assessment) {
          return _rsvp['default'].hash({
            assessment: assessment,
            challenge: assessment.get('firstChallenge')
          });
        });
      });
    },

    afterModel: function afterModel(model) {
      // FIXME: manage the case when assessment's course has no challenge
      this.transitionTo('assessments.get-challenge', model);
    }

  });
});
define('pix-live/routes/courses/get-challenge-preview', ['exports', 'ember', 'rsvp'], function (exports, _ember, _rsvp) {
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
    },

    actions: {

      navigateToHome: function navigateToHome() {
        this.transitionTo('home');
      }
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
define('pix-live/services/delay', ['exports', 'ember', 'rsvp'], function (exports, _ember, _rsvp) {
  exports['default'] = _ember['default'].Service.extend({
    ms: function ms(_ms) {
      /* istanbul ignore if  */
      if (EmberENV.useDelay) {
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
define('pix-live/services/session', ['exports', 'ember'], function (exports, _ember) {
  var SESSION_KEY = 'pix-live.session';

  exports.SESSION_KEY = SESSION_KEY;
  exports['default'] = _ember['default'].Service.extend({

    user: null,

    init: function init() {
      this._super.apply(this, arguments);

      var session = localStorage.getItem(SESSION_KEY);

      if (!_ember['default'].isEmpty(session)) {
        try {
          session = JSON.parse(session);
          this.set('user', session.user);
        } catch (e) {
          _ember['default'].Logger.warn('bad session. Continuing with an empty session');
        }
      }
    },

    save: function save() {
      var session = {
        user: this.get('user')
      };
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    },

    isIdentified: function isIdentified() {
      return !_ember['default'].isEmpty(this.get('user'));
    }

  });
});
define("pix-live/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "pix-live/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "body");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "app-header", [], ["id", "app-header"], ["loc", [null, [1, 0], [1, 31]]], 0, 0], ["content", "outlet", ["loc", [null, [4, 2], [4, 12]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("pix-live/templates/assessments/get-challenge-loading", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 6
          }
        },
        "moduleName": "pix-live/templates/assessments/get-challenge-loading.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "assessment-challenge-loading");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "loader-container");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "loader");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "loader-inner ball-zig-zag");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "ball-spinner");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "ball-spinner");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("pix-live/templates/assessments/get-challenge", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "pix-live/templates/assessments/get-challenge.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "assessment-challenge");
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [3]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element1, 1, 1);
        morphs[2] = dom.createMorphAt(element1, 3, 3);
        return morphs;
      },
      statements: [["inline", "course-banner", [], ["course", ["subexpr", "@mut", [["get", "model.assessment.course", ["loc", [null, [3, 25], [3, 48]]], 0, 0, 0, 0]], [], [], 0, 0], "withHomeLink", true], ["loc", [null, [3, 2], [3, 68]]], 0, 0], ["inline", "progress-bar", [], ["progress", ["subexpr", "@mut", [["get", "progress", ["loc", [null, [6, 28], [6, 36]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [6, 4], [6, 38]]], 0, 0], ["inline", "challenge-item", [["get", "model.challenge", ["loc", [null, [7, 21], [7, 36]]], 0, 0, 0, 0], ["get", "model.assessment", ["loc", [null, [7, 37], [7, 53]]], 0, 0, 0, 0]], ["onValidated", "saveAnswerAndNavigate"], ["loc", [null, [7, 4], [7, 91]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("pix-live/templates/assessments/get-results", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "pix-live/templates/assessments/get-results.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "get-result", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [1, 19], [1, 24]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [1, 0], [1, 26]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("pix-live/templates/challenges/get-preview", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "pix-live/templates/challenges/get-preview.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "challenge-preview");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]), 1, 1);
        return morphs;
      },
      statements: [["inline", "challenge-item", [["get", "model", ["loc", [null, [4, 23], [4, 28]]], 0, 0, 0, 0]], [], ["loc", [null, [4, 6], [4, 30]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("pix-live/templates/components/app-footer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 32,
            "column": 6
          }
        },
        "moduleName": "pix-live/templates/components/app-footer.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid");
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row links-bar");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "container");
        var el4 = dom.createTextNode("\n\n          ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4, "class", "col-md-4 links");
        var el5 = dom.createTextNode("\n              ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "links-title");
        var el6 = dom.createTextNode("PIX");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n              ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        var el7 = dom.createTextNode("Créer un compte");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n              ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        var el7 = dom.createTextNode("Se connecter");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n              ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        var el7 = dom.createTextNode("Pour les entreprises");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n          ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4, "class", "col-md-4 links");
        var el5 = dom.createTextNode("\n              ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "links-title");
        var el6 = dom.createTextNode("À propos");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n              ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        var el7 = dom.createTextNode("Qui sommes-nous ?");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n              ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        var el7 = dom.createTextNode("Informations presse");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n              ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        var el7 = dom.createTextNode("F.A.Q.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n          ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4, "class", "col-md-4 links");
        var el5 = dom.createTextNode("\n              ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "links-title");
        var el6 = dom.createTextNode("Nous contacter");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n              ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        var el7 = dom.createTextNode("Contacter PIX");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n              ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        var el7 = dom.createTextNode("Contacter le SGMAP");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row bottom-bar");
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1, 1]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element1, [3, 0]);
        var element3 = dom.childAt(element1, [5, 0]);
        var element4 = dom.childAt(element1, [7, 0]);
        var element5 = dom.childAt(element0, [3]);
        var element6 = dom.childAt(element5, [3, 0]);
        var element7 = dom.childAt(element5, [5, 0]);
        var element8 = dom.childAt(element5, [7, 0]);
        var element9 = dom.childAt(element0, [5]);
        var element10 = dom.childAt(element9, [3, 0]);
        var element11 = dom.childAt(element9, [5, 0]);
        var morphs = new Array(8);
        morphs[0] = dom.createAttrMorph(element2, 'href');
        morphs[1] = dom.createAttrMorph(element3, 'href');
        morphs[2] = dom.createAttrMorph(element4, 'href');
        morphs[3] = dom.createAttrMorph(element6, 'href');
        morphs[4] = dom.createAttrMorph(element7, 'href');
        morphs[5] = dom.createAttrMorph(element8, 'href');
        morphs[6] = dom.createAttrMorph(element10, 'href');
        morphs[7] = dom.createAttrMorph(element11, 'href');
        return morphs;
      },
      statements: [["attribute", "href", ["concat", [["get", "rootURL", ["loc", [null, [8, 29], [8, 36]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "href", ["concat", [["get", "rootURL", ["loc", [null, [9, 29], [9, 36]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "href", ["concat", [["get", "rootURL", ["loc", [null, [10, 29], [10, 36]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "href", ["concat", [["get", "rootURL", ["loc", [null, [15, 29], [15, 36]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "href", ["concat", [["get", "rootURL", ["loc", [null, [16, 29], [16, 36]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "href", ["concat", [["get", "rootURL", ["loc", [null, [17, 29], [17, 36]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "href", ["concat", [["get", "rootURL", ["loc", [null, [22, 29], [22, 36]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "href", ["concat", [["get", "rootURL", ["loc", [null, [23, 29], [23, 36]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("pix-live/templates/components/app-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 20,
              "column": 0
            }
          },
          "moduleName": "pix-live/templates/components/app-header.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "app-header");
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("  \n  \n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "app-header-container");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "app-header-container-marianne");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "app-header-marianne");
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("img");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n      ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "app-header-container-logo");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "app-header-logo");
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("img");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n      ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [1]);
          var element3 = dom.childAt(element2, [3]);
          var element4 = dom.childAt(element3, [1, 1, 1]);
          var element5 = dom.childAt(element3, [3, 1, 1]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(element2, 1, 1);
          morphs[1] = dom.createAttrMorph(element4, 'src');
          morphs[2] = dom.createAttrMorph(element5, 'src');
          return morphs;
        },
        statements: [["content", "corner-ribbon", ["loc", [null, [4, 2], [4, 19]]], 0, 0, 0, 0], ["attribute", "src", ["concat", [["get", "rootURL", ["loc", [null, [9, 20], [9, 27]]], 0, 0, 0, 0], "images/logo-de-la-republique-francaise.svg"], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "src", ["concat", [["get", "rootURL", ["loc", [null, [14, 20], [14, 27]]], 0, 0, 0, 0], "images/pix-logo.svg"], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 20,
              "column": 0
            },
            "end": {
              "line": 43,
              "column": 0
            }
          },
          "moduleName": "pix-live/templates/components/app-header.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  \n");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "app-header-started");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("  \n\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("nav");
          dom.setAttribute(el2, "class", "navbar");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "container");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "navbar-header");
          var el5 = dom.createTextNode("\n            ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("button");
          dom.setAttribute(el5, "type", "button");
          dom.setAttribute(el5, "class", "navbar-toggle collapsed");
          dom.setAttribute(el5, "data-toggle", "collapse");
          dom.setAttribute(el5, "data-target", "#navbar");
          dom.setAttribute(el5, "aria-expanded", "false");
          dom.setAttribute(el5, "aria-controls", "navbar");
          var el6 = dom.createTextNode("\n                ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("span");
          dom.setAttribute(el6, "class", "sr-only");
          var el7 = dom.createTextNode("Toggle navigation");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n                ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("span");
          dom.setAttribute(el6, "class", "icon-bar");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n                ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("span");
          dom.setAttribute(el6, "class", "icon-bar");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n                ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("span");
          dom.setAttribute(el6, "class", "icon-bar");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n            ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n            ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "navbar-brand");
          var el6 = dom.createTextNode("\n                ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("img");
          dom.setAttribute(el6, "alt", "Logo PIX");
          dom.setAttribute(el6, "width", "auto");
          dom.setAttribute(el6, "height", "60");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n            ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [3, 1, 1, 3, 1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(element0, 1, 1);
          morphs[1] = dom.createAttrMorph(element1, 'src');
          return morphs;
        },
        statements: [["content", "corner-ribbon", ["loc", [null, [23, 0], [23, 17]]], 0, 0, 0, 0], ["attribute", "src", ["concat", [["get", "rootURL", ["loc", [null, [36, 28], [36, 35]]], 0, 0, 0, 0], "images/pix-logo.svg"], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 45,
            "column": 0
          }
        },
        "moduleName": "pix-live/templates/components/app-header.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        return morphs;
      },
      statements: [["block", "if", [["subexpr", "eq", [["get", "router.currentRouteName", ["loc", [null, [2, 10], [2, 33]]], 0, 0, 0, 0], "index"], [], ["loc", [null, [2, 6], [2, 42]]], 0, 0]], [], 0, 1, ["loc", [null, [2, 0], [43, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("pix-live/templates/components/beta-logo", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 15
          }
        },
        "moduleName": "pix-live/templates/components/beta-logo.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("Bêta");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("pix-live/templates/components/bs-accordion-item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "pix-live/templates/components/bs-accordion-item.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "panel-body");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "yield", ["loc", [null, [10, 8], [10, 17]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 0
          }
        },
        "moduleName": "pix-live/templates/components/bs-accordion-item.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "role", "tab");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h4");
        dom.setAttribute(el2, "class", "panel-title");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "#");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createElementMorph(element0);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [1, 1]), 1, 1);
        morphs[3] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["panel-heading ", ["subexpr", "if", [["get", "collapsed", ["loc", [null, [1, 68], [1, 77]]], 0, 0, 0, 0], "collapsed", "expanded"], [], ["loc", [null, [1, 63], [1, 102]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["element", "action", ["toggleActive"], [], ["loc", [null, [1, 16], [1, 41]]], 0, 0], ["content", "title", ["loc", [null, [4, 12], [4, 21]]], 0, 0, 0, 0], ["block", "bs-collapse", [], ["collapsed", ["subexpr", "@mut", [["get", "collapsed", ["loc", [null, [8, 25], [8, 34]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "panel-collapse"], 0, null, ["loc", [null, [8, 0], [12, 16]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("pix-live/templates/components/bs-alert", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 0
              },
              "end": {
                "line": 4,
                "column": 0
              }
            },
            "moduleName": "pix-live/templates/components/bs-alert.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "type", "button");
            dom.setAttribute(el1, "class", "close");
            dom.setAttribute(el1, "aria-label", "Close");
            var el2 = dom.createElement("span");
            dom.setAttribute(el2, "aria-hidden", "true");
            var el3 = dom.createTextNode("×");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(1);
            morphs[0] = dom.createElementMorph(element0);
            return morphs;
          },
          statements: [["element", "action", ["dismiss"], [], ["loc", [null, [3, 59], [3, 79]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "pix-live/templates/components/bs-alert.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "if", [["get", "dismissible", ["loc", [null, [2, 6], [2, 17]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [2, 0], [4, 7]]]], ["content", "yield", ["loc", [null, [5, 0], [5, 9]]], 0, 0, 0, 0]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "pix-live/templates/components/bs-alert.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
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
      statements: [["block", "unless", [["get", "hidden", ["loc", [null, [1, 10], [1, 16]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [6, 11]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("pix-live/templates/components/bs-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 37
            }
          },
          "moduleName": "pix-live/templates/components/bs-button.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [0]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["get", "icon", ["loc", [null, [1, 24], [1, 28]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 61
          }
        },
        "moduleName": "pix-live/templates/components/bs-button.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "icon", ["loc", [null, [1, 6], [1, 10]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [1, 44]]]], ["content", "text", ["loc", [null, [1, 44], [1, 52]]], 0, 0, 0, 0], ["content", "yield", ["loc", [null, [1, 52], [1, 61]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("pix-live/templates/components/bs-form-element", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 31
          }
        },
        "moduleName": "pix-live/templates/components/bs-form-element.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
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
      statements: [["inline", "partial", [["get", "formElementTemplate", ["loc", [null, [1, 10], [1, 29]]], 0, 0, 0, 0]], [], ["loc", [null, [1, 0], [1, 31]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("pix-live/templates/components/bs-form-group", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 4,
              "column": 0
            }
          },
          "moduleName": "pix-live/templates/components/bs-form-group.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "aria-hidden", "true");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["form-control-feedback ", ["get", "iconName", ["loc", [null, [3, 41], [3, 49]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 7
          }
        },
        "moduleName": "pix-live/templates/components/bs-form-group.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]], 0, 0, 0, 0], ["block", "if", [["get", "hasFeedback", ["loc", [null, [2, 6], [2, 17]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [2, 0], [4, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("pix-live/templates/components/bs-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 9
          }
        },
        "moduleName": "pix-live/templates/components/bs-form.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
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
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("pix-live/templates/components/bs-modal-dialog", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 8
            },
            "end": {
              "line": 5,
              "column": 8
            }
          },
          "moduleName": "pix-live/templates/components/bs-modal-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "bs-modal-header", [], ["title", ["subexpr", "@mut", [["get", "title", ["loc", [null, [4, 36], [4, 41]]], 0, 0, 0, 0]], [], [], 0, 0], "closeButton", ["subexpr", "@mut", [["get", "closeButton", ["loc", [null, [4, 54], [4, 65]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 12], [4, 67]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 12
              },
              "end": {
                "line": 9,
                "column": 12
              }
            },
            "moduleName": "pix-live/templates/components/bs-modal-dialog.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "yield", ["loc", [null, [8, 16], [8, 25]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 8
            },
            "end": {
              "line": 10,
              "column": 8
            }
          },
          "moduleName": "pix-live/templates/components/bs-modal-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
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
        statements: [["block", "bs-modal-body", [], [], 0, null, ["loc", [null, [7, 12], [9, 30]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 8
            },
            "end": {
              "line": 12,
              "column": 8
            }
          },
          "moduleName": "pix-live/templates/components/bs-modal-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "yield", ["loc", [null, [11, 12], [11, 21]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 8
            },
            "end": {
              "line": 16,
              "column": 8
            }
          },
          "moduleName": "pix-live/templates/components/bs-modal-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "bs-modal-footer", ["loc", [null, [15, 12], [15, 31]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 6
          }
        },
        "moduleName": "pix-live/templates/components/bs-modal-dialog.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "modal-content");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(element1, 1, 1);
        morphs[2] = dom.createMorphAt(element1, 2, 2);
        morphs[3] = dom.createMorphAt(element1, 4, 4);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["modal-dialog ", ["get", "sizeClass", ["loc", [null, [1, 27], [1, 36]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["block", "if", [["get", "header", ["loc", [null, [3, 14], [3, 20]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [3, 8], [5, 15]]]], ["block", "if", [["get", "body", ["loc", [null, [6, 14], [6, 18]]], 0, 0, 0, 0]], [], 1, 2, ["loc", [null, [6, 8], [12, 15]]]], ["block", "if", [["get", "footer", ["loc", [null, [14, 14], [14, 20]]], 0, 0, 0, 0]], [], 3, null, ["loc", [null, [14, 8], [16, 15]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define("pix-live/templates/components/bs-modal-footer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "pix-live/templates/components/bs-modal-footer.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "yield", [["get", "this", ["loc", [null, [2, 12], [2, 16]]], 0, 0, 0, 0]], [], ["loc", [null, [2, 4], [2, 18]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 5,
                  "column": 8
                },
                "end": {
                  "line": 5,
                  "column": 66
                }
              },
              "moduleName": "pix-live/templates/components/bs-modal-footer.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
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
            statements: [["content", "closeTitle", ["loc", [null, [5, 52], [5, 66]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 6,
                  "column": 8
                },
                "end": {
                  "line": 6,
                  "column": 96
                }
              },
              "moduleName": "pix-live/templates/components/bs-modal-footer.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
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
            statements: [["content", "submitTitle", ["loc", [null, [6, 81], [6, 96]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 4
              },
              "end": {
                "line": 7,
                "column": 4
              }
            },
            "moduleName": "pix-live/templates/components/bs-modal-footer.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            return morphs;
          },
          statements: [["block", "bs-button", [], ["type", "default", "action", "close"], 0, null, ["loc", [null, [5, 8], [5, 80]]]], ["block", "bs-button", [], ["type", "primary", "buttonType", "submit", "disabled", ["subexpr", "@mut", [["get", "submitDisabled", ["loc", [null, [6, 65], [6, 79]]], 0, 0, 0, 0]], [], [], 0, 0]], 1, null, ["loc", [null, [6, 8], [6, 110]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 8,
                  "column": 8
                },
                "end": {
                  "line": 8,
                  "column": 66
                }
              },
              "moduleName": "pix-live/templates/components/bs-modal-footer.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
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
            statements: [["content", "closeTitle", ["loc", [null, [8, 52], [8, 66]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 4
              },
              "end": {
                "line": 9,
                "column": 4
              }
            },
            "moduleName": "pix-live/templates/components/bs-modal-footer.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["block", "bs-button", [], ["type", "primary", "action", "close"], 0, null, ["loc", [null, [8, 8], [8, 80]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 0
            }
          },
          "moduleName": "pix-live/templates/components/bs-modal-footer.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
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
        statements: [["block", "if", [["get", "hasSubmitButton", ["loc", [null, [4, 10], [4, 25]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [4, 4], [9, 11]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 7
          }
        },
        "moduleName": "pix-live/templates/components/bs-modal-footer.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
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
      statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [10, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("pix-live/templates/components/bs-modal-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "pix-live/templates/components/bs-modal-header.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "type", "button");
          dom.setAttribute(el1, "class", "close");
          dom.setAttribute(el1, "aria-label", "Close");
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "aria-hidden", "true");
          var el3 = dom.createTextNode("×");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["element", "action", ["close"], [], ["loc", [null, [2, 59], [2, 77]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "pix-live/templates/components/bs-modal-header.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "yield", [["get", "this", ["loc", [null, [5, 12], [5, 16]]], 0, 0, 0, 0]], [], ["loc", [null, [5, 4], [5, 18]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "pix-live/templates/components/bs-modal-header.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          dom.setAttribute(el1, "class", "modal-title");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "title", ["loc", [null, [7, 28], [7, 37]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "pix-live/templates/components/bs-modal-header.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "closeButton", ["loc", [null, [1, 6], [1, 17]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["block", "if", [["get", "hasBlock", ["loc", [null, [4, 6], [4, 14]]], 0, 0, 0, 0]], [], 1, 2, ["loc", [null, [4, 0], [8, 7]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("pix-live/templates/components/bs-modal", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 0
              },
              "end": {
                "line": 5,
                "column": 0
              }
            },
            "moduleName": "pix-live/templates/components/bs-modal.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "this", ["loc", [null, [4, 10], [4, 14]]], 0, 0, 0, 0]], [], ["loc", [null, [4, 2], [4, 16]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 0
              },
              "end": {
                "line": 9,
                "column": 0
              }
            },
            "moduleName": "pix-live/templates/components/bs-modal.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element0, 'class');
            morphs[1] = dom.createAttrMorph(element0, 'id');
            return morphs;
          },
          statements: [["attribute", "class", ["concat", ["modal-backdrop ", ["subexpr", "if", [["get", "fade", ["loc", [null, [8, 34], [8, 38]]], 0, 0, 0, 0], "fade"], [], ["loc", [null, [8, 29], [8, 47]]], 0, 0], " ", ["subexpr", "if", [["get", "in", ["loc", [null, [8, 53], [8, 55]]], 0, 0, 0, 0], "in"], [], ["loc", [null, [8, 48], [8, 62]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "id", ["concat", [["get", "backdropId", ["loc", [null, [8, 70], [8, 80]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 11,
              "column": 0
            }
          },
          "moduleName": "pix-live/templates/components/bs-modal.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["block", "bs-modal-dialog", [], ["close", ["subexpr", "action", ["close"], [], ["loc", [null, [3, 25], [3, 41]]], 0, 0], "fade", ["subexpr", "@mut", [["get", "fade", ["loc", [null, [3, 47], [3, 51]]], 0, 0, 0, 0]], [], [], 0, 0], "in", ["subexpr", "@mut", [["get", "in", ["loc", [null, [3, 55], [3, 57]]], 0, 0, 0, 0]], [], [], 0, 0], "id", ["subexpr", "@mut", [["get", "modalId", ["loc", [null, [3, 61], [3, 68]]], 0, 0, 0, 0]], [], [], 0, 0], "title", ["subexpr", "@mut", [["get", "title", ["loc", [null, [3, 75], [3, 80]]], 0, 0, 0, 0]], [], [], 0, 0], "closeButton", ["subexpr", "@mut", [["get", "closeButton", ["loc", [null, [3, 93], [3, 104]]], 0, 0, 0, 0]], [], [], 0, 0], "keyboard", ["subexpr", "@mut", [["get", "keyboard", ["loc", [null, [3, 114], [3, 122]]], 0, 0, 0, 0]], [], [], 0, 0], "header", ["subexpr", "@mut", [["get", "header", ["loc", [null, [3, 130], [3, 136]]], 0, 0, 0, 0]], [], [], 0, 0], "body", ["subexpr", "@mut", [["get", "body", ["loc", [null, [3, 142], [3, 146]]], 0, 0, 0, 0]], [], [], 0, 0], "footer", ["subexpr", "@mut", [["get", "footer", ["loc", [null, [3, 154], [3, 160]]], 0, 0, 0, 0]], [], [], 0, 0], "size", ["subexpr", "@mut", [["get", "size", ["loc", [null, [3, 166], [3, 170]]], 0, 0, 0, 0]], [], [], 0, 0], "backdropClose", ["subexpr", "@mut", [["get", "backdropClose", ["loc", [null, [3, 185], [3, 198]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [3, 0], [5, 20]]]], ["block", "if", [["get", "showBackdrop", ["loc", [null, [7, 6], [7, 18]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [7, 0], [9, 7]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 19
          }
        },
        "moduleName": "pix-live/templates/components/bs-modal.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
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
      statements: [["block", "ember-wormhole", [], ["to", "ember-bootstrap-modal-container", "renderInPlace", ["subexpr", "@mut", [["get", "renderInPlace", ["loc", [null, [1, 69], [1, 82]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [1, 0], [11, 19]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("pix-live/templates/components/bs-progress-bar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 4
              },
              "end": {
                "line": 5,
                "column": 4
              }
            },
            "moduleName": "pix-live/templates/components/bs-progress-bar.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "percentRounded", ["loc", [null, [4, 16], [4, 30]]], 0, 0, 0, 0]], [], ["loc", [null, [4, 8], [4, 32]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 4
              },
              "end": {
                "line": 7,
                "column": 4
              }
            },
            "moduleName": "pix-live/templates/components/bs-progress-bar.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("%\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "percentRounded", ["loc", [null, [6, 8], [6, 26]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "pix-live/templates/components/bs-progress-bar.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
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
        statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [3, 10], [3, 18]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [3, 4], [7, 11]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 4
              },
              "end": {
                "line": 11,
                "column": 4
              }
            },
            "moduleName": "pix-live/templates/components/bs-progress-bar.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "sr-only");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "percentRounded", ["loc", [null, [10, 38], [10, 52]]], 0, 0, 0, 0]], [], ["loc", [null, [10, 30], [10, 54]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 4
              },
              "end": {
                "line": 13,
                "column": 4
              }
            },
            "moduleName": "pix-live/templates/components/bs-progress-bar.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "sr-only");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("%");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "percentRounded", ["loc", [null, [12, 30], [12, 48]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 0
            }
          },
          "moduleName": "pix-live/templates/components/bs-progress-bar.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [9, 10], [9, 18]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [9, 4], [13, 11]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 16,
            "column": 0
          }
        },
        "moduleName": "pix-live/templates/components/bs-progress-bar.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "showLabel", ["loc", [null, [2, 6], [2, 15]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [2, 0], [15, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("pix-live/templates/components/bs-progress", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "pix-live/templates/components/bs-progress.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("pix-live/templates/components/bs-select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "pix-live/templates/components/bs-select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          dom.setAttribute(el1, "disabled", "");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element1, 'selected');
          morphs[1] = dom.createMorphAt(element1, 1, 1);
          return morphs;
        },
        statements: [["attribute", "selected", ["subexpr", "bs-not", [["get", "value", ["loc", [null, [2, 39], [2, 44]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [2, 46]]], 0, 0], 0, 0, 0, 0], ["content", "prompt", ["loc", [null, [3, 8], [3, 18]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "pix-live/templates/components/bs-select.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'value');
          morphs[1] = dom.createAttrMorph(element0, 'selected');
          morphs[2] = dom.createMorphAt(element0, 1, 1);
          return morphs;
        },
        statements: [["attribute", "value", ["concat", [["subexpr", "bs-read-path", [["get", "item", ["loc", [null, [8, 34], [8, 38]]], 0, 0, 0, 0], ["get", "optionValuePath", ["loc", [null, [8, 39], [8, 54]]], 0, 0, 0, 0]], [], ["loc", [null, [8, 19], [8, 56]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "selected", ["subexpr", "bs-eq", [["get", "item", ["loc", [null, [9, 29], [9, 33]]], 0, 0, 0, 0], ["get", "value", ["loc", [null, [9, 34], [9, 39]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [9, 41]]], 0, 0], 0, 0, 0, 0], ["inline", "bs-read-path", [["get", "item", ["loc", [null, [10, 23], [10, 27]]], 0, 0, 0, 0], ["get", "optionLabelPath", ["loc", [null, [10, 28], [10, 43]]], 0, 0, 0, 0]], [], ["loc", [null, [10, 8], [10, 45]]], 0, 0]],
        locals: ["item"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 9
          }
        },
        "moduleName": "pix-live/templates/components/bs-select.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "prompt", ["loc", [null, [1, 6], [1, 12]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [5, 7]]]], ["block", "each", [["get", "content", ["loc", [null, [7, 8], [7, 15]]], 0, 0, 0, 0]], ["key", "@identity"], 1, null, ["loc", [null, [7, 0], [12, 9]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("pix-live/templates/components/challenge-item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 4
            },
            "end": {
              "line": 7,
              "column": 4
            }
          },
          "moduleName": "pix-live/templates/components/challenge-item.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "challenge-instruction");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["inline", "markdown-to-html", [], ["extensions", "targetBlank", "markdown", ["subexpr", "@mut", [["get", "challenge.instruction", ["loc", [null, [6, 94], [6, 115]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [6, 40], [6, 118]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 4
            },
            "end": {
              "line": 14,
              "column": 4
            }
          },
          "moduleName": "pix-live/templates/components/challenge-item.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("hr");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", " challenge-illustration");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.setAttribute(el2, "alt", "ceci est une image");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element6 = dom.childAt(fragment, [3, 1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element6, 'src');
          return morphs;
        },
        statements: [["attribute", "src", ["concat", [["get", "challenge.illustrationUrl", ["loc", [null, [12, 21], [12, 46]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 4
            },
            "end": {
              "line": 25,
              "column": 4
            }
          },
          "moduleName": "pix-live/templates/components/challenge-item.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("hr");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "challenge-attachment");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          dom.setAttribute(el2, "class", "button");
          dom.setAttribute(el2, "target", "_blank");
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("span");
          dom.setAttribute(el3, "class", "glyphicon glyphicon-download");
          dom.setAttribute(el3, "aria-hidden", "true");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          Télécharger le fichier");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element5 = dom.childAt(fragment, [3, 1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element5, 'href');
          morphs[1] = dom.createAttrMorph(element5, 'download');
          morphs[2] = dom.createMorphAt(element5, 5, 5);
          return morphs;
        },
        statements: [["attribute", "href", ["concat", [["get", "challenge.attachmentUrl", ["loc", [null, [18, 19], [18, 42]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "download", ["concat", [["get", "challenge.attachmentFilename", ["loc", [null, [19, 23], [19, 51]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "challenge.attachmentFilename", ["loc", [null, [22, 10], [22, 42]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 34,
                  "column": 10
                },
                "end": {
                  "line": 36,
                  "column": 10
                }
              },
              "moduleName": "pix-live/templates/components/challenge-item.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("span");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
              return morphs;
            },
            statements: [["content", "block.text", ["loc", [null, [35, 18], [35, 32]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 38,
                  "column": 10
                },
                "end": {
                  "line": 40,
                  "column": 10
                }
              },
              "moduleName": "pix-live/templates/components/challenge-item.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["inline", "input", [], ["name", ["subexpr", "@mut", [["get", "block.input", ["loc", [null, [39, 25], [39, 36]]], 0, 0, 0, 0]], [], [], 0, 0], "type", "text", "placeholder", ["subexpr", "@mut", [["get", "block.placeholder", ["loc", [null, [39, 61], [39, 78]]], 0, 0, 0, 0]], [], [], 0, 0], "change", ["subexpr", "action", ["updateQrocAnswer"], [], ["loc", [null, [39, 86], [39, 113]]], 0, 0]], ["loc", [null, [39, 12], [39, 116]]], 0, 0]],
            locals: [],
            templates: []
          };
        })();
        var child2 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 42,
                  "column": 10
                },
                "end": {
                  "line": 44,
                  "column": 10
                }
              },
              "moduleName": "pix-live/templates/components/challenge-item.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("hr");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 32,
                "column": 8
              },
              "end": {
                "line": 46,
                "column": 8
              }
            },
            "moduleName": "pix-live/templates/components/challenge-item.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
            return morphs;
          },
          statements: [["block", "if", [["get", "block.text", ["loc", [null, [34, 16], [34, 26]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [34, 10], [36, 17]]]], ["block", "if", [["get", "block.input", ["loc", [null, [38, 16], [38, 27]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [38, 10], [40, 17]]]], ["block", "if", [["get", "block.breakline", ["loc", [null, [42, 16], [42, 31]]], 0, 0, 0, 0]], [], 2, null, ["loc", [null, [42, 10], [44, 17]]]]],
          locals: ["block"],
          templates: [child0, child1, child2]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 31,
              "column": 6
            },
            "end": {
              "line": 48,
              "column": 6
            }
          },
          "moduleName": "pix-live/templates/components/challenge-item.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "each", [["get", "challenge._proposalsAsBlocks", ["loc", [null, [32, 16], [32, 44]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [32, 8], [46, 17]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child4 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 49,
                  "column": 8
                },
                "end": {
                  "line": 57,
                  "column": 8
                }
              },
              "moduleName": "pix-live/templates/components/challenge-item.hbs"
            },
            isEmpty: false,
            arity: 2,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("p");
              dom.setAttribute(el1, "class", "challenge-proposal");
              var el2 = dom.createTextNode("\n            ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("label");
              var el3 = dom.createTextNode("\n              ");
              dom.appendChild(el2, el3);
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n              ");
              dom.appendChild(el2, el3);
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n            ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n          ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element4 = dom.childAt(fragment, [1, 1]);
              var morphs = new Array(3);
              morphs[0] = dom.createAttrMorph(element4, 'for');
              morphs[1] = dom.createMorphAt(element4, 1, 1);
              morphs[2] = dom.createMorphAt(element4, 3, 3);
              return morphs;
            },
            statements: [["attribute", "for", ["concat", ["proposal_", ["get", "index", ["loc", [null, [51, 35], [51, 40]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "input", [], ["id", ["subexpr", "concat", ["proposal_", ["get", "index", ["loc", [null, [52, 45], [52, 50]]], 0, 0, 0, 0]], [], ["loc", [null, [52, 25], [52, 51]]], 0, 0], "type", "checkbox", "name", ["subexpr", "@mut", [["get", "index", ["loc", [null, [53, 19], [53, 24]]], 0, 0, 0, 0]], [], [], 0, 0], "change", ["subexpr", "action", ["updateQcmAnswer"], [], ["loc", [null, [53, 32], [53, 58]]], 0, 0]], ["loc", [null, [52, 14], [53, 60]]], 0, 0], ["content", "proposal", ["loc", [null, [54, 14], [54, 26]]], 0, 0, 0, 0]],
            locals: ["proposal", "index"],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 48,
                "column": 6
              },
              "end": {
                "line": 59,
                "column": 6
              }
            },
            "moduleName": "pix-live/templates/components/challenge-item.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            return morphs;
          },
          statements: [["block", "each", [["get", "challenge._proposalsAsArray", ["loc", [null, [49, 16], [49, 43]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [49, 8], [57, 17]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 60,
                  "column": 8
                },
                "end": {
                  "line": 64,
                  "column": 8
                }
              },
              "moduleName": "pix-live/templates/components/challenge-item.hbs"
            },
            isEmpty: false,
            arity: 2,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("p");
              dom.setAttribute(el1, "class", "challenge-proposal");
              var el2 = dom.createTextNode("\n            ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("label");
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode(" ");
              dom.appendChild(el2, el3);
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n          ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element3 = dom.childAt(fragment, [1, 1]);
              var morphs = new Array(2);
              morphs[0] = dom.createMorphAt(element3, 0, 0);
              morphs[1] = dom.createMorphAt(element3, 2, 2);
              return morphs;
            },
            statements: [["inline", "radio-button", [], ["name", "proposals", "value", ["subexpr", "@mut", [["get", "index", ["loc", [null, [62, 57], [62, 62]]], 0, 0, 0, 0]], [], [], 0, 0], "checked", ["subexpr", "@mut", [["get", "selectedProposal", ["loc", [null, [62, 71], [62, 87]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [62, 19], [62, 89]]], 0, 0], ["content", "proposal", ["loc", [null, [62, 90], [62, 104]]], 0, 0, 0, 0]],
            locals: ["proposal", "index"],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 59,
                "column": 6
              },
              "end": {
                "line": 65,
                "column": 6
              }
            },
            "moduleName": "pix-live/templates/components/challenge-item.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            return morphs;
          },
          statements: [["block", "each", [["get", "challenge._proposalsAsArray", ["loc", [null, [60, 16], [60, 43]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [60, 8], [64, 17]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 48,
              "column": 6
            },
            "end": {
              "line": 65,
              "column": 6
            }
          },
          "moduleName": "pix-live/templates/components/challenge-item.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
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
        statements: [["block", "if", [["get", "challengeIsTypeQCM", ["loc", [null, [48, 16], [48, 34]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [48, 6], [65, 6]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child5 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 68,
              "column": 4
            },
            "end": {
              "line": 73,
              "column": 4
            }
          },
          "moduleName": "pix-live/templates/components/challenge-item.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("hr");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "alert alert-danger");
          dom.setAttribute(el1, "role", "alert");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          return morphs;
        },
        statements: [["content", "errorMessage", ["loc", [null, [71, 8], [71, 24]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child6 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 76,
              "column": 2
            },
            "end": {
              "line": 85,
              "column": 2
            }
          },
          "moduleName": "pix-live/templates/components/challenge-item.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "challenge-item-actions");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          dom.setAttribute(el2, "class", "challenge-item-actions__action challenge-item-actions__skip-action");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("span");
          dom.setAttribute(el3, "class", "challenge-item-actions__skip-action-text");
          var el4 = dom.createTextNode("Je passe");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          dom.setAttribute(el2, "class", "challenge-item-actions__action challenge-item-actions__validate-action");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("span");
          dom.setAttribute(el3, "class", "challenge-item-actions__validate-action-text");
          var el4 = dom.createTextNode("Je valide");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [1]);
          var element2 = dom.childAt(element0, [3]);
          var morphs = new Array(2);
          morphs[0] = dom.createElementMorph(element1);
          morphs[1] = dom.createElementMorph(element2);
          return morphs;
        },
        statements: [["element", "action", ["skip"], [], ["loc", [null, [78, 84], [78, 101]]], 0, 0], ["element", "action", ["validate"], [], ["loc", [null, [81, 88], [81, 109]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 86,
            "column": 6
          }
        },
        "moduleName": "pix-live/templates/components/challenge-item.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "challenge-item");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "rounded-panel challenge-statement");
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "rounded-panel challenge-response");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "challenge-proposals");
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element7 = dom.childAt(fragment, [0]);
        var element8 = dom.childAt(element7, [1]);
        var element9 = dom.childAt(element7, [3]);
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(element8, 1, 1);
        morphs[1] = dom.createMorphAt(element8, 3, 3);
        morphs[2] = dom.createMorphAt(element8, 4, 4);
        morphs[3] = dom.createMorphAt(dom.childAt(element9, [1]), 1, 1);
        morphs[4] = dom.createMorphAt(element9, 3, 3);
        morphs[5] = dom.createMorphAt(element7, 5, 5);
        return morphs;
      },
      statements: [["block", "if", [["get", "challenge.instruction", ["loc", [null, [4, 10], [4, 31]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [4, 4], [7, 11]]]], ["block", "if", [["get", "hasIllustration", ["loc", [null, [9, 10], [9, 25]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [9, 4], [14, 11]]]], ["block", "if", [["get", "hasAttachment", ["loc", [null, [15, 10], [15, 23]]], 0, 0, 0, 0]], [], 2, null, ["loc", [null, [15, 4], [25, 11]]]], ["block", "if", [["get", "challengeIsTypeQROC", ["loc", [null, [31, 12], [31, 31]]], 0, 0, 0, 0]], [], 3, 4, ["loc", [null, [31, 6], [65, 13]]]], ["block", "if", [["get", "hasError", ["loc", [null, [68, 10], [68, 18]]], 0, 0, 0, 0]], [], 5, null, ["loc", [null, [68, 4], [73, 11]]]], ["block", "unless", [["get", "isChallengePreviewMode", ["loc", [null, [76, 12], [76, 34]]], 0, 0, 0, 0]], [], 6, null, ["loc", [null, [76, 2], [85, 13]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6]
    };
  })());
});
define("pix-live/templates/components/corner-ribbon", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "pix-live/templates/components/corner-ribbon.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "corner-ribbon top-right sticky yellow");
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "class", "corner-ribbon-text");
        var el3 = dom.createTextNode("BÊTA");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("pix-live/templates/components/course-banner", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 8,
                "column": 6
              },
              "end": {
                "line": 8,
                "column": 85
              }
            },
            "moduleName": "pix-live/templates/components/course-banner.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Retour à la liste des tests");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 4
            },
            "end": {
              "line": 9,
              "column": 4
            }
          },
          "moduleName": "pix-live/templates/components/course-banner.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["block", "link-to", ["index"], ["class", "course-banner-home-link"], 0, null, ["loc", [null, [8, 6], [8, 97]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 14,
            "column": 0
          }
        },
        "moduleName": "pix-live/templates/components/course-banner.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "course-banner row");
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container course-banner-wrapper");
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "course-banner-name");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["content", "course.name", ["loc", [null, [5, 37], [5, 52]]], 0, 0, 0, 0], ["block", "if", [["get", "withHomeLink", ["loc", [null, [7, 10], [7, 22]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [7, 4], [9, 11]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("pix-live/templates/components/first-page", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 27,
                "column": 12
              },
              "end": {
                "line": 29,
                "column": 12
              }
            },
            "moduleName": "pix-live/templates/components/first-page.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("img");
            dom.setAttribute(el1, "class", "course-picture");
            dom.setAttribute(el1, "alt", "Illustration du test");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(1);
            morphs[0] = dom.createAttrMorph(element0, 'src');
            return morphs;
          },
          statements: [["attribute", "src", ["concat", [["get", "course.imageUrl", ["loc", [null, [28, 48], [28, 63]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 29,
                "column": 12
              },
              "end": {
                "line": 31,
                "column": 12
              }
            },
            "moduleName": "pix-live/templates/components/first-page.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("img");
            dom.setAttribute(el1, "class", "course-picture");
            dom.setAttribute(el1, "src", "images/course-default-image.png");
            dom.setAttribute(el1, "alt", "Illustration du test");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 44,
                "column": 14
              },
              "end": {
                "line": 46,
                "column": 14
              }
            },
            "moduleName": "pix-live/templates/components/first-page.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("              Démarrer le test\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 24,
              "column": 8
            },
            "end": {
              "line": 50,
              "column": 8
            }
          },
          "moduleName": "pix-live/templates/components/first-page.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1, "class", "col-md-3 course-item animated fadeIn");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "rounded-panel course");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "course-content");
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("h4");
          dom.setAttribute(el4, "class", "course-name");
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "course-description");
          var el5 = dom.createTextNode("\n                ");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n              ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "course-number-of-challenges");
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" épreuves\n            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "course-actions");
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1, 1]);
          var element2 = dom.childAt(element1, [3]);
          var morphs = new Array(6);
          morphs[0] = dom.createAttrMorph(element1, 'data-id');
          morphs[1] = dom.createMorphAt(element1, 1, 1);
          morphs[2] = dom.createMorphAt(dom.childAt(element2, [1]), 0, 0);
          morphs[3] = dom.createMorphAt(dom.childAt(element2, [3]), 1, 1);
          morphs[4] = dom.createMorphAt(dom.childAt(element1, [5]), 1, 1);
          morphs[5] = dom.createMorphAt(dom.childAt(element1, [7]), 1, 1);
          return morphs;
        },
        statements: [["attribute", "data-id", ["concat", [["get", "course.id", ["loc", [null, [26, 56], [26, 65]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["block", "if", [["get", "course.imageUrl", ["loc", [null, [27, 18], [27, 33]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [27, 12], [31, 19]]]], ["content", "course.name", ["loc", [null, [34, 38], [34, 55]]], 0, 0, 0, 0], ["content", "course.description", ["loc", [null, [36, 16], [36, 40]]], 0, 0, 0, 0], ["content", "course.challenges.length", ["loc", [null, [41, 14], [41, 44]]], 0, 0, 0, 0], ["block", "link-to", ["courses.create-assessment", ["get", "course.id", ["loc", [null, [44, 53], [44, 62]]], 0, 0, 0, 0]], ["class", "button button-primary start-button"], 2, null, ["loc", [null, [44, 14], [46, 26]]]]],
        locals: ["course"],
        templates: [child0, child1, child2]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 124,
            "column": 0
          }
        },
        "moduleName": "pix-live/templates/components/first-page.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "first-page");
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "first-page-hero");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "first-page-hero-box o-sudoku");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "o-sudoku__7");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "first-page-hero__main-value-prop");
        var el6 = dom.createTextNode("\n          Développez vos compétences numériques\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "first-page-hero__sub-value-prop");
        var el6 = dom.createTextNode("\n          PIX est un projet public de plateforme en ligne d’évaluation et de certification des compétences numériques, en cours de développement. \n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "first-page-challenges");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "first-page-challenges__empty");
        var el4 = dom.createTextNode(" ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "first-page-challenges__title");
        var el4 = dom.createTextNode("\n      Découvrez nos épreuves et aidez-nous à les améliorer !\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "first-page-challenges__cards container");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4, "class", "row courses");
        var el5 = dom.createTextNode("\n\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "first-page-email");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "first-page-email__title");
        var el4 = dom.createTextNode("\n      Vous souhaitez devenir beta-testeur ou être informé(e) du développement de Pix ?\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "first-page-email__input-container");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "first-page-features");
        var el3 = dom.createTextNode("\n  \n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "first-page-feature");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "first-page-feature__icon-container");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "class", "first-page-feature__icon");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "first-page-feature__title");
        var el5 = dom.createTextNode("Vivez l’expérience PIX");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "first-page-feature__text");
        var el5 = dom.createTextNode(" Un parcours d’évaluation convivial, accessible et interactif.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  \n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "first-page-feature");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "first-page-feature__icon-container");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "class", "first-page-feature__icon");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "first-page-feature__title");
        var el5 = dom.createTextNode("PIX est pour tout le monde ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "first-page-feature__text");
        var el5 = dom.createTextNode(" Collégiens, lycéens, étudiants, professionnels, citoyens…");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  \n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "first-page-feature");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "first-page-feature__icon-container");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "class", "first-page-feature__icon");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "first-page-feature__title");
        var el5 = dom.createTextNode("PIX est la référence");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "first-page-feature__text");
        var el5 = dom.createTextNode(" La certification nationale de la culture numérique made in France au standard européen.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  \n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "first-page-feature");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "first-page-feature__icon-container");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "class", "first-page-feature__icon");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "first-page-feature__title");
        var el5 = dom.createTextNode("PIX est évolutif");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "first-page-feature__text");
        var el5 = dom.createTextNode(" Le référentiel de compétences s’adapte en permanence aux évolutions du monde numérique.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  \n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "first-page-feature");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "first-page-feature__icon-container");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "class", "first-page-feature__icon");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "first-page-feature__title");
        var el5 = dom.createTextNode("PIX est gratuit");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "first-page-feature__text");
        var el5 = dom.createTextNode(" Entraînez-vous et progressez gratuitement à votre rythme avant d’être certifié.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  \n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "first-page-footer container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "first-page-footer__logo-pix first-page-footer__item");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4, "class", "first-page-footer__logo-pix-img");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "first-page-footer__contact-us first-page-footer__item");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "class", "first-page-footer__mailto");
        dom.setAttribute(el4, "href", "mailto:contact@pix.beta.gouv.fr");
        var el5 = dom.createTextNode("Contactez-nous");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n       | \n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "class", "first-page-footer__mailto");
        dom.setAttribute(el4, "href", "https://github.com/sgmap/pix-live");
        dom.setAttribute(el4, "target", "_blank");
        var el5 = dom.createTextNode("Le code source est libre");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "first-page-footer__logo-marianne first-page-footer__item");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4, "class", "first-page-footer__logo-marianne-img");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element3 = dom.childAt(fragment, [0]);
        var element4 = dom.childAt(element3, [7]);
        var element5 = dom.childAt(element4, [1, 1, 1]);
        var element6 = dom.childAt(element4, [3, 1, 1]);
        var element7 = dom.childAt(element4, [5, 1, 1]);
        var element8 = dom.childAt(element4, [7, 1, 1]);
        var element9 = dom.childAt(element4, [9, 1, 1]);
        var element10 = dom.childAt(element3, [9]);
        var element11 = dom.childAt(element10, [1, 1]);
        var element12 = dom.childAt(element10, [5, 1]);
        var morphs = new Array(9);
        morphs[0] = dom.createMorphAt(dom.childAt(element3, [3, 5, 1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element3, [5, 3]), 1, 1);
        morphs[2] = dom.createAttrMorph(element5, 'src');
        morphs[3] = dom.createAttrMorph(element6, 'src');
        morphs[4] = dom.createAttrMorph(element7, 'src');
        morphs[5] = dom.createAttrMorph(element8, 'src');
        morphs[6] = dom.createAttrMorph(element9, 'src');
        morphs[7] = dom.createAttrMorph(element11, 'src');
        morphs[8] = dom.createAttrMorph(element12, 'src');
        return morphs;
      },
      statements: [["block", "each", [["get", "model", ["loc", [null, [24, 16], [24, 21]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [24, 8], [50, 17]]]], ["content", "load-email", ["loc", [null, [62, 6], [62, 20]]], 0, 0, 0, 0], ["attribute", "src", ["concat", [["get", "rootURL", ["loc", [null, [70, 20], [70, 27]]], 0, 0, 0, 0], "images/icon-cafe.svg"], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "src", ["concat", [["get", "rootURL", ["loc", [null, [77, 20], [77, 27]]], 0, 0, 0, 0], "images/icon-monde.svg"], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "src", ["concat", [["get", "rootURL", ["loc", [null, [84, 20], [84, 27]]], 0, 0, 0, 0], "images/icon-reference.svg"], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "src", ["concat", [["get", "rootURL", ["loc", [null, [91, 20], [91, 27]]], 0, 0, 0, 0], "images/icon-evolutif.svg"], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "src", ["concat", [["get", "rootURL", ["loc", [null, [98, 20], [98, 27]]], 0, 0, 0, 0], "images/icon-gratuit.svg"], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "src", ["concat", [["get", "rootURL", ["loc", [null, [108, 18], [108, 25]]], 0, 0, 0, 0], "images/pix-logo.svg"], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "src", ["concat", [["get", "rootURL", ["loc", [null, [116, 18], [116, 25]]], 0, 0, 0, 0], "images/mnsr.png"], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("pix-live/templates/components/form-element/errors", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "pix-live/templates/components/form-element/errors.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "class", "help-block");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "validationMessages.firstObject", ["loc", [null, [2, 29], [2, 63]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 7
          }
        },
        "moduleName": "pix-live/templates/components/form-element/errors.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
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
      statements: [["block", "if", [["get", "showValidationMessages", ["loc", [null, [1, 6], [1, 28]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("pix-live/templates/components/form-element/feedback-icon", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "pix-live/templates/components/form-element/feedback-icon.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "aria-hidden", "true");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["form-control-feedback ", ["get", "iconName", ["loc", [null, [2, 41], [2, 49]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 7
          }
        },
        "moduleName": "pix-live/templates/components/form-element/feedback-icon.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
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
      statements: [["block", "if", [["get", "hasFeedback", ["loc", [null, [1, 6], [1, 17]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("pix-live/templates/components/form-element/horizontal/checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 6
          }
        },
        "moduleName": "pix-live/templates/components/form-element/horizontal/checkbox.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "checkbox");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1, 1]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(element1, 1, 1);
        morphs[2] = dom.createMorphAt(element1, 3, 3);
        morphs[3] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [1, 14], [1, 38]]], 0, 0, 0, 0], " ", ["get", "horizontalInputOffsetGridClass", ["loc", [null, [1, 43], [1, 73]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "input", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 25], [4, 29]]], 0, 0, 0, 0]], [], [], 0, 0], "type", "checkbox", "checked", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 54], [4, 59]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 69], [4, 77]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 87], [4, 95]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 12], [4, 97]]], 0, 0], ["content", "label", ["loc", [null, [4, 98], [4, 107]]], 0, 0, 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [7, 4], [7, 48]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("pix-live/templates/components/form-element/horizontal/default", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 8
              },
              "end": {
                "line": 6,
                "column": 8
              }
            },
            "moduleName": "pix-live/templates/components/form-element/horizontal/default.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "value", ["loc", [null, [5, 20], [5, 25]]], 0, 0, 0, 0], ["get", "formElementId", ["loc", [null, [5, 26], [5, 39]]], 0, 0, 0, 0], ["get", "validation", ["loc", [null, [5, 40], [5, 50]]], 0, 0, 0, 0]], [], ["loc", [null, [5, 12], [5, 52]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 8
              },
              "end": {
                "line": 8,
                "column": 8
              }
            },
            "moduleName": "pix-live/templates/components/form-element/horizontal/default.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "bs-input", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [7, 26], [7, 39]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [7, 45], [7, 49]]], 0, 0, 0, 0]], [], [], 0, 0], "type", ["subexpr", "@mut", [["get", "controlType", ["loc", [null, [7, 55], [7, 66]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [7, 73], [7, 78]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [7, 91], [7, 102]]], 0, 0, 0, 0]], [], [], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [7, 113], [7, 122]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [7, 132], [7, 140]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [7, 150], [7, 158]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [7, 12], [7, 160]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "pix-live/templates/components/form-element/horizontal/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(fragment, [3]);
          var morphs = new Array(7);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createAttrMorph(element1, 'for');
          morphs[2] = dom.createMorphAt(element1, 0, 0);
          morphs[3] = dom.createAttrMorph(element2, 'class');
          morphs[4] = dom.createMorphAt(element2, 1, 1);
          morphs[5] = dom.createMorphAt(element2, 3, 3);
          morphs[6] = dom.createMorphAt(element2, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["get", "horizontalLabelGridClass", ["loc", [null, [2, 34], [2, 58]]], 0, 0, 0, 0], " ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 66], [2, 80]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 61], [2, 92]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 101], [2, 114]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 118], [2, 127]]], 0, 0, 0, 0], ["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [3, 18], [3, 42]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["block", "if", [["get", "hasBlock", ["loc", [null, [4, 14], [4, 22]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [4, 8], [8, 15]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [9, 8], [9, 59]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [10, 8], [10, 52]]], 0, 0]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 14,
                "column": 8
              },
              "end": {
                "line": 16,
                "column": 8
              }
            },
            "moduleName": "pix-live/templates/components/form-element/horizontal/default.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "value", ["loc", [null, [15, 20], [15, 25]]], 0, 0, 0, 0], ["get", "formElementId", ["loc", [null, [15, 26], [15, 39]]], 0, 0, 0, 0], ["get", "validation", ["loc", [null, [15, 40], [15, 50]]], 0, 0, 0, 0]], [], ["loc", [null, [15, 12], [15, 52]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 16,
                "column": 8
              },
              "end": {
                "line": 18,
                "column": 8
              }
            },
            "moduleName": "pix-live/templates/components/form-element/horizontal/default.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "bs-input", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [17, 28], [17, 32]]], 0, 0, 0, 0]], [], [], 0, 0], "type", ["subexpr", "@mut", [["get", "controlType", ["loc", [null, [17, 38], [17, 49]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [17, 56], [17, 61]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [17, 74], [17, 85]]], 0, 0, 0, 0]], [], [], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [17, 96], [17, 105]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [17, 115], [17, 123]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [17, 133], [17, 141]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [17, 12], [17, 143]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 0
            },
            "end": {
              "line": 22,
              "column": 0
            }
          },
          "moduleName": "pix-live/templates/components/form-element/horizontal/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(element0, 1, 1);
          morphs[2] = dom.createMorphAt(element0, 3, 3);
          morphs[3] = dom.createMorphAt(element0, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [13, 18], [13, 42]]], 0, 0, 0, 0], " ", ["get", "horizontalInputOffsetGridClass", ["loc", [null, [13, 47], [13, 77]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["block", "if", [["get", "hasBlock", ["loc", [null, [14, 14], [14, 22]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [14, 8], [18, 15]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [19, 8], [19, 59]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [20, 8], [20, 52]]], 0, 0]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 23,
            "column": 0
          }
        },
        "moduleName": "pix-live/templates/components/form-element/horizontal/default.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
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
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [22, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("pix-live/templates/components/form-element/horizontal/select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "pix-live/templates/components/form-element/horizontal/select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(fragment, [3]);
          var morphs = new Array(7);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createAttrMorph(element1, 'for');
          morphs[2] = dom.createMorphAt(element1, 0, 0);
          morphs[3] = dom.createAttrMorph(element2, 'class');
          morphs[4] = dom.createMorphAt(element2, 1, 1);
          morphs[5] = dom.createMorphAt(element2, 3, 3);
          morphs[6] = dom.createMorphAt(element2, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["get", "horizontalLabelGridClass", ["loc", [null, [2, 34], [2, 58]]], 0, 0, 0, 0], " ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 66], [2, 80]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 61], [2, 92]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 101], [2, 114]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 118], [2, 127]]], 0, 0, 0, 0], ["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [3, 18], [3, 42]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "bs-select", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 23], [4, 36]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 42], [4, 46]]], 0, 0, 0, 0]], [], [], 0, 0], "content", ["subexpr", "@mut", [["get", "choices", ["loc", [null, [4, 55], [4, 62]]], 0, 0, 0, 0]], [], [], 0, 0], "optionValuePath", ["subexpr", "@mut", [["get", "choiceValueProperty", ["loc", [null, [4, 79], [4, 98]]], 0, 0, 0, 0]], [], [], 0, 0], "optionLabelPath", ["subexpr", "@mut", [["get", "choiceLabelProperty", ["loc", [null, [4, 115], [4, 134]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 141], [4, 146]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 156], [4, 164]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 174], [4, 182]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 8], [4, 184]]], 0, 0], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 8], [5, 59]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 8], [6, 52]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "pix-live/templates/components/form-element/horizontal/select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(element0, 1, 1);
          morphs[2] = dom.createMorphAt(element0, 3, 3);
          morphs[3] = dom.createMorphAt(element0, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [9, 18], [9, 42]]], 0, 0, 0, 0], " ", ["get", "horizontalInputOffsetGridClass", ["loc", [null, [9, 47], [9, 77]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "bs-select", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [10, 25], [10, 29]]], 0, 0, 0, 0]], [], [], 0, 0], "content", ["subexpr", "@mut", [["get", "choices", ["loc", [null, [10, 38], [10, 45]]], 0, 0, 0, 0]], [], [], 0, 0], "optionValuePath", ["subexpr", "@mut", [["get", "choiceValueProperty", ["loc", [null, [10, 62], [10, 81]]], 0, 0, 0, 0]], [], [], 0, 0], "optionLabelPath", ["subexpr", "@mut", [["get", "choiceLabelProperty", ["loc", [null, [10, 98], [10, 117]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [10, 124], [10, 129]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [10, 8], [10, 131]]], 0, 0], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [11, 8], [11, 59]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [12, 8], [12, 52]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "pix-live/templates/components/form-element/horizontal/select.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
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
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [14, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("pix-live/templates/components/form-element/horizontal/textarea", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "pix-live/templates/components/form-element/horizontal/textarea.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(fragment, [3]);
          var morphs = new Array(7);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createAttrMorph(element1, 'for');
          morphs[2] = dom.createMorphAt(element1, 0, 0);
          morphs[3] = dom.createAttrMorph(element2, 'class');
          morphs[4] = dom.createMorphAt(element2, 1, 1);
          morphs[5] = dom.createMorphAt(element2, 3, 3);
          morphs[6] = dom.createMorphAt(element2, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["get", "horizontalLabelGridClass", ["loc", [null, [2, 34], [2, 58]]], 0, 0, 0, 0], " ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 66], [2, 80]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 61], [2, 92]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 101], [2, 114]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 118], [2, 127]]], 0, 0, 0, 0], ["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [3, 18], [3, 42]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "bs-textarea", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 25], [4, 38]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 44], [4, 48]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 55], [4, 60]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [4, 73], [4, 84]]], 0, 0, 0, 0]], [], [], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [4, 95], [4, 104]]], 0, 0, 0, 0]], [], [], 0, 0], "cols", ["subexpr", "@mut", [["get", "cols", ["loc", [null, [4, 110], [4, 114]]], 0, 0, 0, 0]], [], [], 0, 0], "rows", ["subexpr", "@mut", [["get", "rows", ["loc", [null, [4, 120], [4, 124]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 134], [4, 142]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 152], [4, 160]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 8], [4, 162]]], 0, 0], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 8], [5, 59]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 8], [6, 52]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "pix-live/templates/components/form-element/horizontal/textarea.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(element0, 1, 1);
          morphs[2] = dom.createMorphAt(element0, 3, 3);
          morphs[3] = dom.createMorphAt(element0, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [9, 18], [9, 42]]], 0, 0, 0, 0], " ", ["get", "horizontalInputOffsetGridClass", ["loc", [null, [9, 47], [9, 77]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "bs-textarea", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [10, 27], [10, 31]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [10, 38], [10, 43]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [10, 56], [10, 67]]], 0, 0, 0, 0]], [], [], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [10, 78], [10, 87]]], 0, 0, 0, 0]], [], [], 0, 0], "cols", ["subexpr", "@mut", [["get", "cols", ["loc", [null, [10, 93], [10, 97]]], 0, 0, 0, 0]], [], [], 0, 0], "rows", ["subexpr", "@mut", [["get", "rows", ["loc", [null, [10, 103], [10, 107]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [10, 117], [10, 125]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [10, 135], [10, 143]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [10, 8], [10, 145]]], 0, 0], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [11, 8], [11, 59]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [12, 8], [12, 52]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "pix-live/templates/components/form-element/horizontal/textarea.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
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
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [14, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("pix-live/templates/components/form-element/inline/checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 6
          }
        },
        "moduleName": "pix-live/templates/components/form-element/inline/checkbox.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "checkbox");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["inline", "input", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [3, 21], [3, 25]]], 0, 0, 0, 0]], [], [], 0, 0], "type", "checkbox", "checked", ["subexpr", "@mut", [["get", "value", ["loc", [null, [3, 50], [3, 55]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [3, 65], [3, 73]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [3, 83], [3, 91]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [3, 8], [3, 93]]], 0, 0], ["content", "label", ["loc", [null, [3, 94], [3, 103]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("pix-live/templates/components/form-element/inline/default", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "pix-live/templates/components/form-element/inline/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 37], [2, 51]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 32], [2, 63]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 72], [2, 85]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 89], [2, 98]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "pix-live/templates/components/form-element/inline/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "yield", [["get", "value", ["loc", [null, [5, 12], [5, 17]]], 0, 0, 0, 0], ["get", "formElementId", ["loc", [null, [5, 18], [5, 31]]], 0, 0, 0, 0], ["get", "validation", ["loc", [null, [5, 32], [5, 42]]], 0, 0, 0, 0]], [], ["loc", [null, [5, 4], [5, 44]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "pix-live/templates/components/form-element/inline/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "bs-input", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [7, 18], [7, 31]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [7, 37], [7, 41]]], 0, 0, 0, 0]], [], [], 0, 0], "type", ["subexpr", "@mut", [["get", "controlType", ["loc", [null, [7, 47], [7, 58]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [7, 65], [7, 70]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [7, 83], [7, 94]]], 0, 0, 0, 0]], [], [], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [7, 105], [7, 114]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [7, 124], [7, 132]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [7, 142], [7, 150]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [7, 4], [7, 152]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "pix-live/templates/components/form-element/inline/default.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["block", "if", [["get", "hasBlock", ["loc", [null, [4, 6], [4, 14]]], 0, 0, 0, 0]], [], 1, 2, ["loc", [null, [4, 0], [8, 7]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [9, 0], [9, 51]]], 0, 0]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("pix-live/templates/components/form-element/inline/select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "pix-live/templates/components/form-element/inline/select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 37], [2, 51]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 32], [2, 63]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 72], [2, 85]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 89], [2, 98]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "pix-live/templates/components/form-element/inline/select.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["inline", "bs-select", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 15], [4, 28]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 34], [4, 38]]], 0, 0, 0, 0]], [], [], 0, 0], "content", ["subexpr", "@mut", [["get", "choices", ["loc", [null, [4, 47], [4, 54]]], 0, 0, 0, 0]], [], [], 0, 0], "optionValuePath", ["subexpr", "@mut", [["get", "choiceValueProperty", ["loc", [null, [4, 71], [4, 90]]], 0, 0, 0, 0]], [], [], 0, 0], "optionLabelPath", ["subexpr", "@mut", [["get", "choiceLabelProperty", ["loc", [null, [4, 107], [4, 126]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 133], [4, 138]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 148], [4, 156]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 166], [4, 174]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 0], [4, 176]]], 0, 0], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 0], [5, 51]]], 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("pix-live/templates/components/form-element/inline/textarea", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "pix-live/templates/components/form-element/inline/textarea.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 37], [2, 51]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 32], [2, 63]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 72], [2, 85]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 89], [2, 98]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "pix-live/templates/components/form-element/inline/textarea.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 5, 5, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["inline", "bs-textarea", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 17], [4, 30]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 36], [4, 40]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 47], [4, 52]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [4, 65], [4, 76]]], 0, 0, 0, 0]], [], [], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [4, 87], [4, 96]]], 0, 0, 0, 0]], [], [], 0, 0], "cols", ["subexpr", "@mut", [["get", "cols", ["loc", [null, [4, 102], [4, 106]]], 0, 0, 0, 0]], [], [], 0, 0], "rows", ["subexpr", "@mut", [["get", "rows", ["loc", [null, [4, 112], [4, 116]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 126], [4, 134]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 144], [4, 152]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 0], [4, 154]]], 0, 0], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 0], [5, 51]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 0], [6, 44]]], 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("pix-live/templates/components/form-element/vertical/checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 44
          }
        },
        "moduleName": "pix-live/templates/components/form-element/vertical/checkbox.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "checkbox");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "input", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [3, 21], [3, 25]]], 0, 0, 0, 0]], [], [], 0, 0], "type", "checkbox", "checked", ["subexpr", "@mut", [["get", "value", ["loc", [null, [3, 50], [3, 55]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [3, 65], [3, 73]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [3, 83], [3, 91]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [3, 8], [3, 93]]], 0, 0], ["content", "label", ["loc", [null, [3, 94], [3, 103]]], 0, 0, 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 0], [6, 44]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("pix-live/templates/components/form-element/vertical/default", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "pix-live/templates/components/form-element/vertical/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 37], [2, 51]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 32], [2, 63]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 72], [2, 85]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 89], [2, 98]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "pix-live/templates/components/form-element/vertical/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "yield", [["get", "value", ["loc", [null, [5, 12], [5, 17]]], 0, 0, 0, 0], ["get", "formElementId", ["loc", [null, [5, 18], [5, 31]]], 0, 0, 0, 0], ["get", "validation", ["loc", [null, [5, 32], [5, 42]]], 0, 0, 0, 0]], [], ["loc", [null, [5, 4], [5, 44]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "pix-live/templates/components/form-element/vertical/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "bs-input", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [7, 18], [7, 31]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [7, 37], [7, 41]]], 0, 0, 0, 0]], [], [], 0, 0], "type", ["subexpr", "@mut", [["get", "controlType", ["loc", [null, [7, 47], [7, 58]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [7, 65], [7, 70]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [7, 83], [7, 94]]], 0, 0, 0, 0]], [], [], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [7, 105], [7, 114]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [7, 124], [7, 132]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [7, 142], [7, 150]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [7, 4], [7, 152]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "pix-live/templates/components/form-element/vertical/default.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["block", "if", [["get", "hasBlock", ["loc", [null, [4, 6], [4, 14]]], 0, 0, 0, 0]], [], 1, 2, ["loc", [null, [4, 0], [8, 7]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [9, 0], [9, 51]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [10, 0], [10, 44]]], 0, 0]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("pix-live/templates/components/form-element/vertical/select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "pix-live/templates/components/form-element/vertical/select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 37], [2, 51]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 32], [2, 63]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 72], [2, 85]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 89], [2, 98]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "pix-live/templates/components/form-element/vertical/select.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 5, 5, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["inline", "bs-select", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 15], [4, 28]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 34], [4, 38]]], 0, 0, 0, 0]], [], [], 0, 0], "content", ["subexpr", "@mut", [["get", "choices", ["loc", [null, [4, 47], [4, 54]]], 0, 0, 0, 0]], [], [], 0, 0], "optionValuePath", ["subexpr", "@mut", [["get", "choiceValueProperty", ["loc", [null, [4, 71], [4, 90]]], 0, 0, 0, 0]], [], [], 0, 0], "optionLabelPath", ["subexpr", "@mut", [["get", "choiceLabelProperty", ["loc", [null, [4, 107], [4, 126]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 133], [4, 138]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 148], [4, 156]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 166], [4, 174]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 0], [4, 176]]], 0, 0], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 0], [5, 51]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 0], [6, 44]]], 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("pix-live/templates/components/form-element/vertical/textarea", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "pix-live/templates/components/form-element/vertical/textarea.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 37], [2, 51]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 32], [2, 63]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 72], [2, 85]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 89], [2, 98]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "pix-live/templates/components/form-element/vertical/textarea.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 5, 5, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["inline", "bs-textarea", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 17], [4, 30]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 37], [4, 42]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 48], [4, 52]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [4, 65], [4, 76]]], 0, 0, 0, 0]], [], [], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [4, 87], [4, 96]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 106], [4, 114]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 124], [4, 132]]], 0, 0, 0, 0]], [], [], 0, 0], "cols", ["subexpr", "@mut", [["get", "cols", ["loc", [null, [4, 138], [4, 142]]], 0, 0, 0, 0]], [], [], 0, 0], "rows", ["subexpr", "@mut", [["get", "rows", ["loc", [null, [4, 148], [4, 152]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 0], [4, 154]]], 0, 0], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 0], [5, 51]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 0], [6, 44]]], 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("pix-live/templates/components/get-result", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 24,
                "column": 9
              },
              "end": {
                "line": 29,
                "column": 9
              }
            },
            "moduleName": "pix-live/templates/components/get-result.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("         ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "data-toggle", "tooltip");
            dom.setAttribute(el1, "data-placement", "top");
            dom.setAttribute(el1, "title", "Réponse correcte");
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            dom.setNamespace("http://www.w3.org/2000/svg");
            var el2 = dom.createElement("svg");
            dom.setAttribute(el2, "xmlns", "http://www.w3.org/2000/svg");
            dom.setAttribute(el2, "xmlns:xlink", "http://www.w3.org/1999/xlink");
            dom.setAttribute(el2, "version", "1.1");
            dom.setAttribute(el2, "width", "24");
            dom.setAttribute(el2, "height", "24");
            dom.setAttribute(el2, "viewBox", "0 0 24 24");
            var el3 = dom.createElement("path");
            dom.setAttribute(el3, "d", "M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z");
            dom.setAttribute(el3, "fill", "#30d5b0");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n         ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 29,
                  "column": 9
                },
                "end": {
                  "line": 34,
                  "column": 9
                }
              },
              "moduleName": "pix-live/templates/components/get-result.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("         ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "data-toggle", "tooltip");
              dom.setAttribute(el1, "data-placement", "top");
              dom.setAttribute(el1, "title", "Réponse incorrecte");
              var el2 = dom.createTextNode("\n          ");
              dom.appendChild(el1, el2);
              dom.setNamespace("http://www.w3.org/2000/svg");
              var el2 = dom.createElement("svg");
              dom.setAttribute(el2, "xmlns", "http://www.w3.org/2000/svg");
              dom.setAttribute(el2, "xmlns:xlink", "http://www.w3.org/1999/xlink");
              dom.setAttribute(el2, "version", "1.1");
              dom.setAttribute(el2, "width", "24px");
              dom.setAttribute(el2, "height", "24px");
              dom.setAttribute(el2, "viewBox", "0 0 24 24");
              var el3 = dom.createElement("path");
              dom.setAttribute(el3, "d", "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z");
              dom.setAttribute(el3, "fill", "#ff4600");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n         ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.8.3",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 34,
                    "column": 9
                  },
                  "end": {
                    "line": 39,
                    "column": 9
                  }
                },
                "moduleName": "pix-live/templates/components/get-result.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("         ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("div");
                dom.setAttribute(el1, "data-toggle", "tooltip");
                dom.setAttribute(el1, "data-placement", "top");
                dom.setAttribute(el1, "title", "Sans réponse");
                var el2 = dom.createTextNode("\n          ");
                dom.appendChild(el1, el2);
                dom.setNamespace("http://www.w3.org/2000/svg");
                var el2 = dom.createElement("svg");
                dom.setAttribute(el2, "xmlns", "http://www.w3.org/2000/svg");
                dom.setAttribute(el2, "xmlns:xlink", "http://www.w3.org/1999/xlink");
                dom.setAttribute(el2, "version", "1.1");
                dom.setAttribute(el2, "width", "24");
                dom.setAttribute(el2, "height", "24");
                dom.setAttribute(el2, "viewBox", "0 0 24 24");
                var el3 = dom.createElement("path");
                dom.setAttribute(el3, "d", "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M8,8L13,12L8,16M14,8H16V16H14");
                dom.setAttribute(el3, "fill", "#3e4149");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n         ");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes() {
                return [];
              },
              statements: [],
              locals: [],
              templates: []
            };
          })();
          var child1 = (function () {
            return {
              meta: {
                "revision": "Ember@2.8.3",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 39,
                    "column": 9
                  },
                  "end": {
                    "line": 43,
                    "column": 9
                  }
                },
                "moduleName": "pix-live/templates/components/get-result.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("         ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("div");
                dom.setAttribute(el1, "data-toggle", "tooltip");
                dom.setAttribute(el1, "data-placement", "top");
                dom.setAttribute(el1, "title", "Vérification en cours");
                var el2 = dom.createTextNode("\n          ");
                dom.appendChild(el1, el2);
                dom.setNamespace("http://www.w3.org/2000/svg");
                var el2 = dom.createElement("svg");
                dom.setAttribute(el2, "xmlns", "http://www.w3.org/2000/svg");
                dom.setAttribute(el2, "xmlns:xlink", "http://www.w3.org/1999/xlink");
                dom.setAttribute(el2, "version", "1.1");
                dom.setAttribute(el2, "width", "24");
                dom.setAttribute(el2, "height", "24");
                dom.setAttribute(el2, "viewBox", "0 0 24 24");
                var el3 = dom.createElement("path");
                dom.setAttribute(el3, "d", "M20,2V4H18V8.41L14.41,12L18,15.59V20H20V22H4V20H6V15.59L9.59,12L6,8.41V4H4V2H20M16,16.41L13,13.41V10.59L16,7.59V4H8V7.59L11,10.59V13.41L8,16.41V17H10L12,15L14,17H16V16.41M12,9L10,7H14L12,9Z");
                dom.setAttribute(el3, "fill", "#446eff");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n         ");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n         ");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes() {
                return [];
              },
              statements: [],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.8.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 34,
                  "column": 9
                },
                "end": {
                  "line": 43,
                  "column": 9
                }
              },
              "moduleName": "pix-live/templates/components/get-result.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
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
            statements: [["block", "if", [["get", "answer.isResultWithoutAnswer", ["loc", [null, [34, 19], [34, 47]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [34, 9], [43, 9]]]]],
            locals: [],
            templates: [child0, child1]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 29,
                "column": 9
              },
              "end": {
                "line": 43,
                "column": 9
              }
            },
            "moduleName": "pix-live/templates/components/get-result.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
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
          statements: [["block", "if", [["get", "answer.isResultNotOk", ["loc", [null, [29, 19], [29, 39]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [29, 9], [43, 9]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 6
            },
            "end": {
              "line": 48,
              "column": 4
            }
          },
          "moduleName": "pix-live/templates/components/get-result.hbs"
        },
        isEmpty: false,
        arity: 2,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "assessment-results-list-item assessment-results-result");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "assessment-results-result-index");
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "assessment-results-result-line");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "assessment-results-result-instruction");
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "assessment-results-result-img");
          var el3 = dom.createTextNode("\n\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [5]), 1, 1);
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [7]), 1, 1);
          return morphs;
        },
        statements: [["inline", "add", [["get", "index", ["loc", [null, [15, 16], [15, 21]]], 0, 0, 0, 0], 1], [], ["loc", [null, [15, 10], [15, 25]]], 0, 0], ["inline", "strip-instruction", [["subexpr", "convert-to-html", [["get", "answer.challenge.instruction", ["loc", [null, [20, 47], [20, 75]]], 0, 0, 0, 0]], [], ["loc", [null, [20, 30], [20, 76]]], 0, 0]], [], ["loc", [null, [20, 10], [20, 78]]], 0, 0], ["block", "if", [["get", "answer.isResultOk", ["loc", [null, [24, 15], [24, 32]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [24, 9], [43, 16]]]]],
        locals: ["answer", "index"],
        templates: [child0, child1]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 52,
              "column": 4
            },
            "end": {
              "line": 54,
              "column": 4
            }
          },
          "moduleName": "pix-live/templates/components/get-result.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "class", "assessment-results-back");
          var el2 = dom.createTextNode("Revenir à la liste des tests");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 61,
            "column": 0
          }
        },
        "moduleName": "pix-live/templates/components/get-result.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "assessment-results");
        dom.setAttribute(el1, "id", "assessment-results");
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "assessment-results-title");
        var el4 = dom.createTextNode("\n      Vos résultats\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "assessment-results-list");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "assessment-results-link");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var element2 = dom.childAt(element1, [3]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element1, 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element2, [3]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element2, [5]), 1, 1);
        return morphs;
      },
      statements: [["inline", "course-banner", [], ["course", ["subexpr", "@mut", [["get", "model.assessment.course", ["loc", [null, [3, 25], [3, 48]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [3, 2], [3, 50]]], 0, 0], ["block", "each", [["get", "model.assessment.answers", ["loc", [null, [12, 14], [12, 38]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [12, 6], [48, 13]]]], ["block", "link-to", ["index"], ["class", "assessment-results-link-home", "tagName", "button"], 1, null, ["loc", [null, [52, 4], [54, 16]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("pix-live/templates/components/identification-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 18,
              "column": 2
            },
            "end": {
              "line": 22,
              "column": 2
            }
          },
          "moduleName": "pix-live/templates/components/identification-form.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "alert alert-danger");
          dom.setAttribute(el1, "role", "alert");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "errorMessage", ["loc", [null, [20, 6], [20, 22]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 29,
            "column": 0
          }
        },
        "moduleName": "pix-live/templates/components/identification-form.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("form");
        dom.setAttribute(el1, "id", "identification-form");
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "form-group");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        dom.setAttribute(el3, "for", "firstName");
        var el4 = dom.createTextNode("Prénom");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "form-group");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        dom.setAttribute(el3, "for", "lastName");
        var el4 = dom.createTextNode("Nom");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "form-group");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        dom.setAttribute(el3, "for", "email");
        var el4 = dom.createTextNode("Adresse e-mail");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "identification-form-actions pull-right");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "class", "button button-primary");
        dom.setAttribute(el3, "type", "submit");
        var el4 = dom.createTextNode("Identifiez-vous");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(5);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]), 3, 3);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]), 3, 3);
        morphs[3] = dom.createMorphAt(dom.childAt(element0, [5]), 3, 3);
        morphs[4] = dom.createMorphAt(element0, 7, 7);
        return morphs;
      },
      statements: [["element", "action", ["identify"], ["on", "submit"], ["loc", [null, [1, 31], [1, 64]]], 0, 0], ["inline", "input", [], ["id", "firstName", "type", "text", "value", ["subexpr", "@mut", [["get", "user.firstName", ["loc", [null, [5, 45], [5, 59]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control", "autofocus", "true", "autocomplete", "fname"], ["loc", [null, [5, 4], [5, 121]]], 0, 0], ["inline", "input", [], ["id", "lastName", "type", "text", "value", ["subexpr", "@mut", [["get", "user.lastName", ["loc", [null, [10, 44], [10, 57]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control", "autocomplete", "lname"], ["loc", [null, [10, 4], [10, 102]]], 0, 0], ["inline", "input", [], ["id", "email", "type", "email", "value", ["subexpr", "@mut", [["get", "user.email", ["loc", [null, [15, 42], [15, 52]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control", "autocomplete", "email"], ["loc", [null, [15, 4], [15, 96]]], 0, 0], ["block", "if", [["get", "hasError", ["loc", [null, [18, 8], [18, 16]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [18, 2], [22, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("pix-live/templates/components/load-email", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "pix-live/templates/components/load-email.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("form");
        dom.setAttribute(el1, "class", "first-page-email__form");
        dom.setAttribute(el1, "id", "contact-form");
        var el2 = dom.createTextNode("\n  \n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "first-page-email__form-item");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("input");
        dom.setAttribute(el3, "class", "first-page-email-enter");
        dom.setAttribute(el3, "placeholder", "Saisissez votre email");
        dom.setAttribute(el3, "type", "email");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "first-page-email__form-item");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "type", "submit");
        dom.setAttribute(el3, "class", "load-email");
        var el4 = dom.createTextNode("Rejoindre la communauté");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n      \n    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("pix-live/templates/components/progress-bar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "pix-live/templates/components/progress-bar.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "progress pix-progress-bar");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "progress-bar progress-bar-info");
        dom.setAttribute(el2, "role", "progressbar");
        dom.setAttribute(el2, "aria-valuemin", "0");
        dom.setAttribute(el2, "aria-valuemax", "100");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" / ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'aria-valuenow');
        morphs[1] = dom.createAttrMorph(element0, 'style');
        morphs[2] = dom.createMorphAt(element0, 1, 1);
        morphs[3] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["attribute", "aria-valuenow", ["concat", [["get", "progress.currentStep", ["loc", [null, [2, 82], [2, 102]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "style", ["concat", ["width:", ["get", "progress.stepPercentage", ["loc", [null, [3, 55], [3, 78]]], 0, 0, 0, 0], "%"], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "progress.currentStep", ["loc", [null, [4, 4], [4, 28]]], 0, 0, 0, 0], ["content", "progress.maxStep", ["loc", [null, [4, 31], [4, 51]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("pix-live/templates/components/user-menu", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "pix-live/templates/components/user-menu.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("a");
        dom.setAttribute(el1, "href", "#");
        dom.setAttribute(el1, "class", "dropdown-toggle");
        dom.setAttribute(el1, "data-toggle", "dropdown");
        dom.setAttribute(el1, "role", "button");
        dom.setAttribute(el1, "aria-haspopup", "true");
        dom.setAttribute(el1, "aria-expanded", "false");
        var el2 = dom.createTextNode("John ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "class", "caret");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        dom.setAttribute(el1, "class", "dropdown-menu");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createElement("a");
        var el4 = dom.createTextNode("Préférences");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        dom.setAttribute(el2, "role", "separator");
        dom.setAttribute(el2, "class", "divider");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createElement("a");
        var el4 = dom.createTextNode("Déconnexion");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(element0, [1, 0]);
        var element2 = dom.childAt(element0, [5, 0]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element1, 'href');
        morphs[1] = dom.createAttrMorph(element2, 'href');
        return morphs;
      },
      statements: [["attribute", "href", ["concat", [["get", "rootURL", ["loc", [null, [3, 19], [3, 26]]], 0, 0, 0, 0], "preferences"], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "href", ["concat", [["get", "rootURL", ["loc", [null, [5, 19], [5, 26]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("pix-live/templates/courses/get-challenge-preview", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "pix-live/templates/courses/get-challenge-preview.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "challenge-preview");
        dom.setAttribute(el1, "class", "challenge-preview");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element0, 'data-id');
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
        return morphs;
      },
      statements: [["attribute", "data-id", ["concat", [["get", "model.challenge.id", ["loc", [null, [1, 40], [1, 58]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "challenge-item", [["get", "model.challenge", ["loc", [null, [4, 23], [4, 38]]], 0, 0, 0, 0], ["get", "model.assessment", ["loc", [null, [4, 39], [4, 55]]], 0, 0, 0, 0]], ["onValidated", ["subexpr", "action", [["get", "navigate", ["loc", [null, [4, 76], [4, 84]]], 0, 0, 0, 0]], [], ["loc", [null, [4, 68], [4, 85]]], 0, 0]], ["loc", [null, [4, 6], [4, 87]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("pix-live/templates/courses/get-course-preview", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 10
            },
            "end": {
              "line": 12,
              "column": 165
            }
          },
          "moduleName": "pix-live/templates/courses/get-course-preview.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Simuler le test");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 0
          }
        },
        "moduleName": "pix-live/templates/courses/get-course-preview.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "course-preview");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "title");
        var el4 = dom.createTextNode("\n            Prévisualisation du test #");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "rounded-panel course-information");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h3");
        dom.setAttribute(el4, "class", "course-name");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4, "class", "course-description");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n          ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("hr");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n          ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element1, [3]);
        var morphs = new Array(5);
        morphs[0] = dom.createAttrMorph(element0, 'data-id');
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [1]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element2, [1]), 0, 0);
        morphs[3] = dom.createMorphAt(dom.childAt(element2, [3]), 0, 0);
        morphs[4] = dom.createMorphAt(element2, 7, 7);
        return morphs;
      },
      statements: [["attribute", "data-id", ["concat", [["get", "model.course.id", ["loc", [null, [1, 37], [1, 52]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "model.course.id", ["loc", [null, [5, 38], [5, 59]]], 0, 0, 0, 0], ["content", "model.course.name", ["loc", [null, [9, 36], [9, 59]]], 0, 0, 0, 0], ["content", "model.course.description", ["loc", [null, [10, 42], [10, 72]]], 0, 0, 0, 0], ["block", "link-to", ["courses.get-challenge-preview", ["get", "model.course.id", ["loc", [null, [12, 53], [12, 68]]], 0, 0, 0, 0], ["get", "model.nextChallenge.id", ["loc", [null, [12, 69], [12, 91]]], 0, 0, 0, 0]], ["class", "pull-right button button-primary simulate-button"], 0, null, ["loc", [null, [12, 10], [12, 177]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("pix-live/templates/home-loading", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 6
          }
        },
        "moduleName": "pix-live/templates/home-loading.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "home-loading");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "loader-container");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "loader");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "loader-inner ball-zig-zag");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "ball-spinner");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "ball-spinner");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("pix-live/templates/home", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 8,
                "column": 20
              },
              "end": {
                "line": 10,
                "column": 20
              }
            },
            "moduleName": "pix-live/templates/home.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("img");
            dom.setAttribute(el1, "class", "course-picture");
            dom.setAttribute(el1, "alt", "Illustration du test");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(1);
            morphs[0] = dom.createAttrMorph(element0, 'src');
            return morphs;
          },
          statements: [["attribute", "src", ["concat", [["get", "course.imageUrl", ["loc", [null, [9, 60], [9, 75]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 10,
                "column": 20
              },
              "end": {
                "line": 12,
                "column": 20
              }
            },
            "moduleName": "pix-live/templates/home.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("img");
            dom.setAttribute(el1, "class", "course-picture");
            dom.setAttribute(el1, "src", "images/course-default-image.png");
            dom.setAttribute(el1, "alt", "Illustration du test");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 25,
                "column": 24
              },
              "end": {
                "line": 27,
                "column": 24
              }
            },
            "moduleName": "pix-live/templates/home.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                            Démarrer le test\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 10
            },
            "end": {
              "line": 31,
              "column": 10
            }
          },
          "moduleName": "pix-live/templates/home.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("              ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1, "class", "col-md-4 course-item animated fadeIn");
          var el2 = dom.createTextNode("\n                  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "rounded-panel course");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "course-content");
          var el4 = dom.createTextNode("\n                          ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("h4");
          dom.setAttribute(el4, "class", "course-name");
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                          ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "course-description");
          var el5 = dom.createTextNode("\n                            ");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                          ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n                      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "course-number-of-challenges");
          var el4 = dom.createTextNode("\n                        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" épreuves\n                      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "course-actions");
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("                      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n              ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1, 1]);
          var element2 = dom.childAt(element1, [3]);
          var morphs = new Array(6);
          morphs[0] = dom.createAttrMorph(element1, 'data-id');
          morphs[1] = dom.createMorphAt(element1, 1, 1);
          morphs[2] = dom.createMorphAt(dom.childAt(element2, [1]), 0, 0);
          morphs[3] = dom.createMorphAt(dom.childAt(element2, [3]), 1, 1);
          morphs[4] = dom.createMorphAt(dom.childAt(element1, [5]), 1, 1);
          morphs[5] = dom.createMorphAt(dom.childAt(element1, [7]), 1, 1);
          return morphs;
        },
        statements: [["attribute", "data-id", ["concat", [["get", "course.id", ["loc", [null, [7, 64], [7, 73]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["block", "if", [["get", "course.imageUrl", ["loc", [null, [8, 26], [8, 41]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [8, 20], [12, 27]]]], ["content", "course.name", ["loc", [null, [15, 50], [15, 67]]], 0, 0, 0, 0], ["content", "course.description", ["loc", [null, [17, 28], [17, 52]]], 0, 0, 0, 0], ["content", "course.challenges.length", ["loc", [null, [22, 24], [22, 54]]], 0, 0, 0, 0], ["block", "link-to", ["courses.create-assessment", ["get", "course.id", ["loc", [null, [25, 63], [25, 72]]], 0, 0, 0, 0]], ["class", "button button-primary start-button"], 2, null, ["loc", [null, [25, 24], [27, 36]]]]],
        locals: ["course"],
        templates: [child0, child1, child2]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 37,
            "column": 0
          }
        },
        "moduleName": "pix-live/templates/home.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "home");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3, "class", "row courses");
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1, 1]), 1, 1);
        return morphs;
      },
      statements: [["block", "each", [["get", "model", ["loc", [null, [5, 18], [5, 23]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [5, 10], [31, 19]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("pix-live/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "pix-live/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "first-page", [], ["showOnly", "4", "model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [1, 32], [1, 37]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [1, 0], [1, 39]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("pix-live/templates/preferences", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 41,
            "column": 0
          }
        },
        "moduleName": "pix-live/templates/preferences.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "preferences");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "title");
        var el4 = dom.createTextNode("\n            Préférences\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "rounded-panel");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "form-title");
        var el5 = dom.createTextNode("\n                Informations personnelles\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("hr");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("form");
        dom.setAttribute(el4, "class", "form-horizontal");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "form-group");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("label");
        dom.setAttribute(el6, "class", "col-sm-3 control-label text-left");
        dom.setAttribute(el6, "for", "firstName");
        var el7 = dom.createTextNode("Prénom");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-sm-6");
        var el7 = dom.createTextNode("\n                      ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("input");
        dom.setAttribute(el7, "class", "form-control");
        dom.setAttribute(el7, "name", "firstName");
        dom.setAttribute(el7, "autocomplete", "on");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "form-group");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("label");
        dom.setAttribute(el6, "class", "col-sm-3 control-label");
        dom.setAttribute(el6, "for", "lastName");
        var el7 = dom.createTextNode("Nom");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-sm-6");
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("input");
        dom.setAttribute(el7, "class", "form-control");
        dom.setAttribute(el7, "name", "lastName");
        dom.setAttribute(el7, "autocomplete", "on");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "form-group");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("label");
        dom.setAttribute(el6, "class", "col-sm-3 control-label");
        dom.setAttribute(el6, "for", "email");
        var el7 = dom.createTextNode("Adresse email");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-sm-6");
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("input");
        dom.setAttribute(el7, "class", "form-control");
        dom.setAttribute(el7, "name", "email");
        dom.setAttribute(el7, "autocomplete", "on");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "form-group");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-sm-offset-3 col-sm-6");
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("button");
        dom.setAttribute(el7, "class", "button button-primary");
        dom.setAttribute(el7, "type", "submit");
        var el8 = dom.createTextNode("Enregistrer les préférences");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define('pix-live/tests/mirage/mirage/config.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/config.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/config.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/mirage/mirage/data/answers/qcm-answer-ko.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/answers/qcm-answer-ko.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/data/answers/qcm-answer-ko.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/mirage/mirage/data/answers/qcm-answer-ok.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/answers/qcm-answer-ok.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/data/answers/qcm-answer-ok.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/mirage/mirage/data/answers/qcm-answer.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/answers/qcm-answer.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/data/answers/qcm-answer.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/mirage/mirage/data/answers/qcu-answer-aband.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/answers/qcu-answer-aband.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/data/answers/qcu-answer-aband.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/mirage/mirage/data/answers/qcu-answer-with-image.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/answers/qcu-answer-with-image.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/data/answers/qcu-answer-with-image.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/mirage/mirage/data/answers/qcu-answer.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/answers/qcu-answer.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/data/answers/qcu-answer.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/mirage/mirage/data/answers/qroc-answer-ko.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/answers/qroc-answer-ko.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/data/answers/qroc-answer-ko.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/mirage/mirage/data/answers/qroc-answer-ok.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/answers/qroc-answer-ok.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/data/answers/qroc-answer-ok.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/mirage/mirage/data/answers/qroc-answer.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/answers/qroc-answer.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/data/answers/qroc-answer.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/mirage/mirage/data/answers/qrocm-answer.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/answers/qrocm-answer.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/data/answers/qrocm-answer.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/mirage/mirage/data/assessments/completed-assessment-qcm.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/assessments/completed-assessment-qcm.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/data/assessments/completed-assessment-qcm.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/mirage/mirage/data/assessments/completed-assessment-qroc.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/assessments/completed-assessment-qroc.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/data/assessments/completed-assessment-qroc.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/mirage/mirage/data/assessments/completed-assessment.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/assessments/completed-assessment.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/data/assessments/completed-assessment.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/mirage/mirage/data/assessments/in-progress-assessment.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/assessments/in-progress-assessment.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/data/assessments/in-progress-assessment.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/mirage/mirage/data/assessments/new-assessment-of-noimage-course.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/assessments/new-assessment-of-noimage-course.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/data/assessments/new-assessment-of-noimage-course.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/mirage/mirage/data/assessments/new-assessment-of-simple-course.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/assessments/new-assessment-of-simple-course.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/data/assessments/new-assessment-of-simple-course.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/mirage/mirage/data/assessments/new-assessment.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/assessments/new-assessment.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/data/assessments/new-assessment.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/mirage/mirage/data/challenges/qcm-challenge.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/challenges/qcm-challenge.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/data/challenges/qcm-challenge.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/mirage/mirage/data/challenges/qcu-challenge-aband.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/challenges/qcu-challenge-aband.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/data/challenges/qcu-challenge-aband.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/mirage/mirage/data/challenges/qcu-challenge-with-attachment.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/challenges/qcu-challenge-with-attachment.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/data/challenges/qcu-challenge-with-attachment.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/mirage/mirage/data/challenges/qcu-challenge-with-image.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/challenges/qcu-challenge-with-image.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/data/challenges/qcu-challenge-with-image.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/mirage/mirage/data/challenges/qcu-challenge-with-links-in-instruction.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/challenges/qcu-challenge-with-links-in-instruction.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/data/challenges/qcu-challenge-with-links-in-instruction.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/mirage/mirage/data/challenges/qcu-challenge.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/challenges/qcu-challenge.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/data/challenges/qcu-challenge.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/mirage/mirage/data/challenges/qroc-challenge.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/challenges/qroc-challenge.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/data/challenges/qroc-challenge.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/mirage/mirage/data/challenges/qrocm-challenge.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/challenges/qrocm-challenge.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/data/challenges/qrocm-challenge.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/mirage/mirage/data/courses/no-image-course.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/courses/no-image-course.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/data/courses/no-image-course.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/mirage/mirage/data/courses/simple-course.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/data/courses/simple-course.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/data/courses/simple-course.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/mirage/mirage/routes/get-answer.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/routes/get-answer.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/routes/get-answer.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/mirage/mirage/routes/get-assessment.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/routes/get-assessment.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/routes/get-assessment.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/mirage/mirage/routes/get-challenge.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/routes/get-challenge.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/routes/get-challenge.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/mirage/mirage/routes/get-challenges.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/routes/get-challenges.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/routes/get-challenges.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/mirage/mirage/routes/get-course.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/routes/get-course.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/routes/get-course.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/mirage/mirage/routes/get-courses.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/routes/get-courses.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/routes/get-courses.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/mirage/mirage/routes/post-answers.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/routes/post-answers.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/routes/post-answers.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/tests/mirage/mirage/routes/post-assessments.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/routes/post-assessments.js', function () {
    it('should pass ESLint', function () {
      if (!true) {
        var error = new chai.AssertionError('mirage/routes/post-assessments.js should pass ESLint.\n');
        error.stack = undefined;throw error;
      }
    });
  });
});
define('pix-live/utils/can-use-dom', ['exports', 'ember-metrics/utils/can-use-dom'], function (exports, _emberMetricsUtilsCanUseDom) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMetricsUtilsCanUseDom['default'];
    }
  });
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
  require("pix-live/app")["default"].create({"API_HOST":"/","name":"pix-live","version":"1.0.0+1d81898f"});
}

/* jshint ignore:end */
//# sourceMappingURL=pix-live.map
