import Ember from 'ember';

export default Ember.Route.extend({

  _urlForNextChallenge: function (adapter, assessmentId) {
    return adapter.buildURL('assessment', assessmentId) + '/next';
  },

  model(params) {
    const store = this.get('store');
    return store.findRecord('course', params.course_id);
  },

  afterModel(course) {
    // FIXME: manage the case when assessment's course has no challenge
    const store = this.get('store');

    const assessment = store.createRecord('assessment', { course, userName: null, userEmail: null });
    assessment.save().then(() => {
      const adapter = store.adapterFor('application');
      adapter.ajax(this._urlForNextChallenge(adapter, assessment.get('id') /* no current challenge */), 'GET')
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
