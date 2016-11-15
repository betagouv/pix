import Ember from 'ember';

export default Ember.Component.extend({  
  didInsertElement: function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
     
      // borrowed from http://codepen.io/dead_seagull/pen/QjPOjq
      var states = ["error","success"],
      curState = 0;
      $(".dsButtonAnim").on('click', function() {
        curState ? curState = 0 : curState = 1;
        var that = $(this);
        if (that.hasClass("success")) {
          that.removeClass("success");
        } else if (that.hasClass("error")) {
          that.removeClass("error");
        } else {
          that.addClass("loading");
          window.setTimeout(function() {
            that.removeClass("loading").addClass( states[ curState ] );
          }, 4000);
        }
      });

    });
  }
});
