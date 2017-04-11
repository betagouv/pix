import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('user');
  },

  actions: {
    signup(user){
      user.save()
        .then((success) => {
          console.log(success)
        })
        .catch((err) => {
          console.log('error')
        });
    }
  }
});
