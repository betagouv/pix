import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.get('store').findRecord('user', this.get('session.data.authenticated.userId'), { reload: true })
      .then(() => {
        return this.get('store').createRecord('certification-course', {}).save();
      });
  },

  actions : {
    error() {
      this.transitionTo('index');
    }
  }

});
