import Ember from 'ember';

function _urlForNextChallenge(adapter, assessmentId) {
  return adapter.buildURL('assessment', assessmentId) + '/next';
}

export default Ember.Route.extend({

  model(params) {
    const store = this.get('store');
    return store.findRecord('course', params.course_id);
  },

  afterModel(course) {
    const store = this.get('store');
    const assessment = store.createRecord('assessment', { course });
    assessment.save().then(() => {
      const adapter = store.adapterFor('application');
      // TODO replace with a real & better challenge adapter
      adapter.ajax(_urlForNextChallenge(adapter, assessment.get('id') /* no current challenge */), 'GET')
        .then(challenge => {
          if (challenge) {
            store.findRecord('challenge', challenge.data.id).then(challenge => {
              this.transitionTo('assessments.get-challenge', { assessment, challenge });
            });
          } else {
            this.transitionTo('assessments.get-results', { assessment });
          }
        });
    });
  }

});
