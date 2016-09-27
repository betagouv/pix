import Ember from 'ember';
import _ from 'lodash/lodash';


export default Ember.Mixin.create({

  bindScrolling: function(opts) {

    const onScroll = (e, a) => {

      if ($(window).scrollTop() === 0) {
        return 0;
      } else {
        return this.scrolled();
      }
    };

    $(document).bind('touchmove',  onScroll);
    $(window).bind('scroll', onScroll);
  },

  unbindScrolling: function() {
    $(window).unbind('scroll');
    $(document).unbind('touchmove');
  }

});
