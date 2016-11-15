import Ember from 'ember';

// http://stackoverflow.com/a/32686261/2595513
function validateEmail(email) 
{
  let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export default Ember.Component.extend({  
  didInsertElement: function() {
    Ember.run.scheduleOnce('afterRender', this, function() {


      let btn = $('.load-email')[0];
      let $contactForm = $('#contact-form');

      $contactForm.submit(function(e) {
        e.preventDefault();
        let emailValue = $('.first-page-email-enter').val();
        $.ajax({
          url: 'https://formspree.io/1024pix@gmail.com',
          method: 'POST',
          data: {email:emailValue},
          dataType: 'json',
          beforeSend: function() {
            console.log('before send');
          },
          success: function(data) {
            console.log('success');
            btn.classList.add('load-email-is-active');
            $('.first-page-email-enter').attr('disabled', 'disabled');
            $('button.load-email').attr('disabled', 'disabled');
          },
          error: function(err) {
            console.log('error');
            btn.classList.add('load-email-is-error');
            setTimeout(function () {
              $('.first-page-email-enter').val('');
              btn.classList.remove('load-email-is-error');
            }, 3000);
          }
        });
      });


    });
  }
});
