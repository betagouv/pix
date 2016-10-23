import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({

  model(params) {
    const store = this.get('store');
    const challengePromise = store.findRecord('challenge', params.challenge_id);

    return RSVP.hash({
      challenge: challengePromise
    });
  },

  setupController: function(controller, model) {
    this._super(controller, model);


    const challengeType =  model.challenge.get('type').toLowerCase();
    console.log('!challengeType is ' + challengeType);
    controller.set('challengeItemType', 'challenge-item-' + challengeType);

  }

});
