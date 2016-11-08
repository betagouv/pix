import Ember from 'ember';
import RSVP from 'rsvp';

function listPropsOf(obj) {
  var methods = [];
  for (var m in obj) {
    if (typeof obj[m] == "function" ) {
      methods.push(m);
    }
  }
  console.log(methods.join(","));
}


export default Ember.Route.extend({

  session: Ember.inject.service(),

  beforeModel: function(){
    // const token = this.get('session.data.authenticated.token');
    // let session = this.get('session');
    // listPropsOf(session.data);
    // console.log(token);
  },


  delay: Ember.inject.service(),

  model() {
    return RSVP.all([
      this.store.findAll('course'),
      this.get('delay').ms(500)
    ]).then((arr) => arr[0]);
  }
});
