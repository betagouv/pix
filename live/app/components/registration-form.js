import Ember from 'ember';
import _ from 'lodash/lodash';

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

      const authenticator = 'authenticator:jwt';
      const user = this.get('user');

      //XXX : I need this shortcut to get shit done
      user.firstName           = $('#inputFirstName').val();
      user.lastName            = $('#inputLastName').val();
      user.email               = $('#inputEmail').val();
      user.password            = $('#inputPassword').val();
      user.passwordConfirm     = $('#inputPasswordConfirm').val();

      let credentials = {
        firstName:       $('#inputFirstName').val(),
        lastName:        $('#inputLastName').val(),
        email:           $('#inputEmail').val(),
        password:        $('#inputPassword').val(),
        passwordConfirm: $('#inputPasswordConfirm').val(),
        hasAcceptedCGU:  $('#inputHasAcceptedCGU').is(":checked")
      }


      this.get('session').authenticate(authenticator, credentials)
      .then(()=>{
          callActionOnUserIdentified(this);
      })
      .catch((reason)=>{
        $(function(){
          
          PNotify.removeAll();

          let arrayOfErrors = JSON.parse(reason.responseText);
          let errorsAsString = '';
          _.each(arrayOfErrors, function(currentError) {
            errorsAsString += '• ' + currentError + '\n';
          });


          new PNotify({
            title: 'Quelque(s) erreur(s)...',
            text: errorsAsString,
            type: 'error',
            hide: false,
            animate_speed: "slow",
            animation: "fade",
            after_init: function(notice){              
              setTimeout(function() {
                notice.attention('tada');
              }, 1200);
            }
          });

        });
      });        

    }

  }

});
