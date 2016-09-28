import Ember from 'ember';
import _ from 'lodash/lodash';


export default Ember.Mixin.create({

  bindScrolling: function(opts) {

    const onScroll = (e) => {
      // console.log('data.isInTestEnvironment');
      // console.log(data.isInTestEnvironment);
      // console.log(e.originalEvent[0].isInTestEnvironment);
      console.log(e);
      // if (e.originalEvent[0].isInTestEnvironment) {
      //   return this.scrolled();
      // }
      if (this._isEventComeFromTestEnvironment(e)) {
        return this.scrolled();
      } else if (this._isTriggeredByTransition()) {
        return 0;
      } else {
        return this.scrolled();
      }
    };

    $(document).bind('touchmove',  onScroll);
    $(window).bind('scroll', {data:'e'}, onScroll);
  },

  _isScrollFiredByActualUser: function(e) {
    return this._isEventComeFromTestEnvironment || this._isTriggeredOnEachTransition;
  },

  _isEventComeFromTestEnvironment: function(e) {
    return (e && e.originalEvent && e.originalEvent[0] && e.originalEvent[0].isInTestEnvironment);
  },

  _isTriggeredByTransition: function() {
    return $(window).scrollTop() === 0;
  },



  unbindScrolling: function() {
    $(window).unbind('scroll');
    $(document).unbind('touchmove');
  }

});
