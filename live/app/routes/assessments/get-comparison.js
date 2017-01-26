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
        return store.queryRecord('solution', {assessmentId, answerId}).then(function(solution) {
          console.log('solution- - - - - - - - - - - - - - - - - - - - ', solution);
          console.log('challenge- - - - - - - - - - - - - - - - - - - - ', challenge);
          console.log('answer- - - - - - - - - - - - - - - - - - - - ', answer);
          return RSVP.hash({
            answer,
            challenge,
            solution
          });
        });



        // return adapter.ajax(this._urlForSolution(adapter, assessmentId, answerId), 'GET').then((solution) => {
        //     console.log('solution- - - - - - - - - - - - - - - - - - - - ', solution);
        //     console.log('challenge- - - - - - - - - - - - - - - - - - - - ', challenge);
        //     console.log('answer- - - - - - - - - - - - - - - - - - - - ', answer);
        //     return RSVP.hash({
        //       answer,
        //       challenge,
        //       solution
        //     });
        //   });
      });
    });

  },


});
