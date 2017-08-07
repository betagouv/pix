import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.get('store').queryRecord('user', {})
      .then((user) => {
      console.log(user);
      console.log(user.get('organizations'));
        return user.get('organizations.firstObject');
      })
      .catch(_ => {
        this.transitionTo('index');
      });
  }
});
