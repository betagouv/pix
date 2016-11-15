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
        $.ajax({
          url: 'https://formspree.io/1024pix@gmail.com',
          method: 'POST',
          data: $(this).serialize(),
          dataType: 'json',
          beforeSend: function() {
            console.log('before send');
          },
          success: function(data) {
            console.log('success');
            btn.classList.add('load-email-is-active');
          },
          error: function(err) {
            console.log('error');
            btn.classList.add('load-email-is-error');

          }
        });
      });


      // $('.load-email').on('click', function () {
      //   let btn = $('.load-email')[0];
      //   btn.classList.add('load-email-is-active');
      // });

      // setTimeout(function () {
      //   btn.classList.remove('load-email-is-active');
      // }, 2500)

    });
  }
});
