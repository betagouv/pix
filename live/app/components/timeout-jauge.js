import Ember from 'ember';
import _ from 'pix-live/utils/lodash-custom';

const get = Ember.get;
const set = Ember.set;
const computed = Ember.computed;
const run = Ember.run;

export default Ember.Component.extend({
  init() {
    this._super(...arguments);

    set(this, 'totalTime', 10000);
    set(this, 'tickInterval', 1000);
    set(this, 'timer', null);
    this.reset();
    this.start();
  },

  remainingTime: computed('elapsedTime', function() {
    const remainingTime = _.round((get(this, 'totalTime') - get(this, 'elapsedTime')) / 1000);
    return (remainingTime > 0) ? remainingTime : 0;
  }),

  hasFinished: computed('remainingTime', function() {
    return get(this, 'remainingTime') === 0;
  }),

  reset: function() {
    set(this, 'elapsedTime', 0);
    set(this, 'currentTime', Date.now());
  },

  start: function() {
    this.stop();
    set(this, 'currentTime', Date.now());
    this.tick();
  },

  stop: function() {
    const timer = get(this, 'timer');

    if (timer) {
      run.cancel(timer);
      set(this, 'timer', null);
    }
  },

  tick: function() {
    if (get(this, 'hasFinished')) {
      return;
    }

    const tickInterval = get(this, 'tickInterval');
    const currentTime = get(this, 'currentTime');
    const elapsedTime = get(this, 'elapsedTime');
    const now = Date.now();

    set(this, 'elapsedTime', elapsedTime + (now - currentTime));
    set(this, 'currentTime', now);
    set(this, 'timer', run.later(this, this.tick, tickInterval));
  }
});
