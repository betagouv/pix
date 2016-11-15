import Ember from 'ember';

export default Ember.Component.extend({
   // store: Ember.inject.service(),
  // init() {
  //   this._super(...arguments);
  //   this.get('store').findRecord('assessment', '48').then(function(assessments) {
  //     console.log(assessments);
  //   });
  // },

  didRender() {
    this._super(...arguments);

    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }
});
