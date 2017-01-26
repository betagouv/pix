import Ember from 'ember';
import ModalRouteMixin from 'ember-routable-modal/mixins/route';
import RSVP from 'rsvp';

export default Ember.Route.extend(ModalRouteMixin, {

  _urlForSolution: function (adapter, assessmentId, answerId) {
    return adapter.buildURL('assessment', assessmentId) + '/solutions/' + answerId;
  },

  model(params) {
    const adapter = this.get('store').adapterFor('application');
    const store = this.get('store');

    const assessmentId = params.assessment_id;
    const answerId = params.answer_id;

    return store.findRecord('answer', answerId).then((answer) => {
      return store.findRecord('challenge', answer.get('challenge.id')).then((challenge) => {
        return adapter.ajax(this._urlForSolution(adapter, assessmentId, answerId), 'GET')
          .then(solution => {
            return RSVP.hash({
              answer,
              challenge,
              solution
            });
          });
      });
    });


  },

  // model(params) {

  //   const store = this.get('store');

  //   return store.findRecord('course', params.course_id).then((course) => {

  //     // No auth yet, therefore userName and userEmail are null.
  //     return store
  //     .createRecord('assessment', { course, userName:null, userEmail:null })
  //     .save()
  //     .then((assessment) => {
  //       return RSVP.hash({
  //         assessment
  //       });
  //     });
  //   });
  // },

});
