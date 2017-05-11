import Ember from 'ember';
import callOnlyOnce from '../utils/call-only-once';
import _ from 'pix-live/utils/lodash-custom';
import ENV from 'pix-live/config/environment';

const ChallengeItemGeneric = Ember.Component.extend({

  // attributes

  tagName: 'article',
  classNames: ['challenge-item'],
  attributeBindings: ['challenge.id:data-challenge-id'],

  // public properties

  challenge: null,
  assessment: null,
  answer: null,
  onValidated: null, // action

  // intern properties

  _elapsedTime: null,
  _timer: null,
  _hasUserAknowledgedTimingWarning: false,
  _errorMessage: null,

  // computed properties

  hasError: Ember.computed.notEmpty('_errorMessage'),

  hasUserConfirmWarning: Ember.computed('challenge', function () {
    return false;
  }),

  hasChallengeTimer: Ember.computed('challenge', function () {
    return this.hasTimerDefined();
  }),

  canDisplayFeedbackPanel: Ember.computed('_hasUserAknowledgedTimingWarning', function () {
    return !this.hasTimerDefined() || (this.hasTimerDefined() && this.get('_hasUserAknowledgedTimingWarning'));
  }),

  // component hooks

  init() {
    this._super(...arguments);
    if (!_.isInteger(this.get('challenge.timer'))) {
      this._start();
    }
  },

  didUpdateAttrs() {
    this._super(...arguments);
    if (!this.get('_hasUserAknowledgedTimingWarning')) {
      this.set('hasUserConfirmWarning', false);
      this.set('hasChallengeTimer', this.hasTimerDefined());
    }
  },

  willDestroyElement() {
    this._super(...arguments);
    const timer = this.get('_timer');
    Ember.run.cancel(timer);
  },

  hasTimerDefined(){
    return _.isInteger(this.get('challenge.timer'));
  },

  // private methods

  _getTimeout() {
    return $('.timeout-jauge-remaining').attr('data-spent');
  },

  _getElapsedTime(){
    return this.get('_elapsedTime');
  },

  _start(){
    this.set('_elapsedTime', 0);
    this._tick();
  },

  _resetErrorMessage() {
    this.set('_errorMessage', null);
  },

  isValid() {
    // to be override
  },

  getErrorMessage() {
    // to be override
  },

  _tick(){
    if (ENV.APP.isChallengeTimerEnable) {
      const timer = Ember.run.later(this, function () {
        const elapsedTime = this.get('_elapsedTime');
        this.set('_elapsedTime', elapsedTime + 1);
        this.notifyPropertyChange('_elapsedTime');
        this._tick();
      }, 1000);

      this.set('_timer', timer);
    }
  },

  actions: {

    validate: callOnlyOnce(function () {
      if (!this.isValid()) {
        this.set('_errorMessage', this.getErrorMessage());
        return this.sendAction('onError', this.get('_errorMessage'));
      }
      this.set('_hasUserAknowledgedTimingWarning', false);

      const answer = this.get('answer');
      answer.set('timeout', this._getTimeout());
      answer.set('elapsedTime', this._getElapsedTime());

      this.get('onValidated')(answer);
    }),

    skip: callOnlyOnce(function () {
      this.set('_hasUserAknowledgedTimingWarning', false);

      const answer = this.get('answer');
      answer.set('value', '#ABAND#');
      answer.set('timeout', this._getTimeout());
      answer.set('elapsedTime', this._getElapsedTime());

      this.get('onValidated')(answer);
    }),

    setUserConfirmation() {
      this._start();
      this.toggleProperty('hasUserConfirmWarning');
      this.toggleProperty('hasChallengeTimer');
      this.set('_hasUserAknowledgedTimingWarning', true);
    },

    resetErrorMessage() {
      this._resetErrorMessage();
    }
  }

});

export default ChallengeItemGeneric;
