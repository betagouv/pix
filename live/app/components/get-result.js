import Ember from 'ember';

export default Ember.Component.extend({

  didRender() {
    this._super(...arguments);
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }
  // ,
  // actions: {

  //   blablaAction: function () {
  //     // this.transitionTo();
  //     this.get('router').transitionTo('example');
  //   }
  // }

});
