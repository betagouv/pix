import Ember from 'ember';
import _ from 'pix-live/utils/lodash-custom';
import ENV from 'pix-live/config/environment';

const get = Ember.get;
const set = Ember.set;
const computed = Ember.computed;
const run = Ember.run;

// see http://stackoverflow.com/a/37770048/2595513
function fmtMSS (s) {return (s-(s%=60))/60+(9<s?':':':0')+s;}


export default Ember.Component.extend({

  // public props, passed from template
  allotedTime: null,

  _totalTime: Ember.computed('allotedTime', function () {
    const actualAllotedTime = get(this, 'allotedTime');
    if (!_.isNumeric(actualAllotedTime)) {
      return 0;
    }
    return 1000 * actualAllotedTime;
  }),

  _tickInterval: 1000,

  _timer: null,
  elapsedTime: null,
  currentTime: Date.now(),

  // Ember Lifecycle Hook
  init() {
    this._super(...arguments);

    // set(this, '_totalTime', 1000 * get(this, 'allotedTime'));
    // set(this, '_tickInterval', 1000);
    // set(this, '_timer', null);
    // this.reset();
    this.start();
  },

  remainingSeconds: computed('elapsedTime', function() {
    return _.round((get(this, '_totalTime') - get(this, 'elapsedTime')) / 1000);
  }),

  remainingTime: computed('remainingSeconds', function() {
    if (get(this, 'remainingSeconds') < 0) {
      return '0:00';
    }
    return fmtMSS(get(this, 'remainingSeconds'));
  }),

  hasFinished: computed('remainingSeconds', function() {
    return get(this, 'remainingSeconds') <= 0;
  }),

  percentageOfTimeout: computed('elapsedTime', function() {
    const actualAllotedTime = get(this, 'allotedTime');
    if (!_.isNumeric(actualAllotedTime) || !_.isStrictlyPositiveInteger(actualAllotedTime.toString())) {
      return 0;
    }
    return 100 - (get(this, 'remainingSeconds') / actualAllotedTime) * 100;
  }),

  // reset: function() {
  //   set(this, 'elapsedTime', 0);
  //   set(this, 'currentTime', Date.now());
  // },

  start: function() {
    this.stop();
    set(this, 'currentTime', Date.now());
    this.tick();
  },

  stop: function() {
    const _timer = get(this, '_timer');

    if (_timer) {
      run.cancel(_timer);
      set(this, '_timer', null);
    }
  },

  tick: function() {
    if (ENV.environment !== 'test') {

      const _tickInterval = get(this, '_tickInterval');
      const currentTime = get(this, 'currentTime');
      const elapsedTime = get(this, 'elapsedTime');
      const now = Date.now();

      set(this, 'elapsedTime', elapsedTime + (now - currentTime));
      set(this, 'currentTime', now);
      set(this, '_timer', run.later(this, this.tick, _tickInterval));
    }

  },

  // Ember Lifecycle Hook
  didInsertElement() {
    if (ENV.environment === 'test') {
      const that = this;
      this.$().on('simulateOneMoreSecond', function() {
        set(that, 'elapsedTime', get(that, 'elapsedTime') + 1000);
      });
      this.$().on('resetElapsedTime', function() {
        set(that, 'elapsedTime', 0);
      });
    }
  },


  // Ember Lifecycle Hook
  willDestroyElement() {
    this.stop();
  }

});
