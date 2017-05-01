import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('user');
  },

  setupController(controller, model) {
    controller.set('user', model);
    this._super(controller, model);
  },

  actions: {
    signup(user){
      user.save()
        .then((success) => {
          Ember.Logger.info(success);
        })
        .catch((err) => {
          Ember.Logger.info('error', err);
        });
    }
  }
});
