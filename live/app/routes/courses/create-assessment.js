import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({

  sessionAccount: Ember.inject.service('session-account'),
  
  model(params) {

    const store = this.get('store');
    return store.findRecord('course', params.course_id).then((course) => {

      // FIXME : add (route?) tests
      const userName = `${this.get('sessionAccount.account.firstName')} ${this.get('sessionAccount.account.firstName')}`;
      const userEmail = this.get('sessionAccount.account.email');

      return store
        .createRecord('assessment', { course, userName, userEmail })
        .save()
        .then((assessment) => {
          return RSVP.hash({
            assessment,
            challenge: assessment.get('firstChallenge')
          });
        });
    });
  },

  afterModel(model) {
    // FIXME: manage the case when assessment's course has no challenge
    this.transitionTo('assessments.get-challenge', model);
  }

});
