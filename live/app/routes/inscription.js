import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('user', {
      lastName: '',
      firstName: '',
      email: '',
      password: '',
      cgu: false
    });
  },

  setupController(controller, model) {
    controller.set('user', model);
    this._super(controller, model);
  },

  actions:{
    refresh(){
      this.refresh();
    }
  }
});
