import Ember from 'ember';

function setUserInSession(component, user) {

  const session = component.get('session');
  session.set('user', user);
  session.save();
}

function callActionOnUserIdentified(component) {

  component.sendAction('onUserIdentified');
}

export default Ember.Component.extend({

  session: Ember.inject.service('session'),

  user: Ember.Object.create(),

  actions: {

    identify() {

      const user = this.get('user');
      const authenticator = 'authenticator:jwt';

      //XXX : I need this shortcut to get shit done
      user.firstName = $('#inputFirstName').val();
      user.lastName  = $('#inputLastName').val();
      user.email     = $('#inputEmail').val();
      user.password  = $('#inputPassword').val();

      // console.log('this.get("session.isAuthenticated") ' + this.get('session.isAuthenticated'));      

      this.get('session').authenticate(authenticator, user)
        .then(()=>{
          // setUserInSession(this, user);
          callActionOnUserIdentified(this);
        })
        .catch((reason)=>{
          this.set('errorMessage', [{detail: "incorrect email or password"}]);
        });



    }

  }

});
