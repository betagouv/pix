import Ember from 'ember';
import _ from 'lodash/lodash';


export default Ember.Mixin.create({

  bindScrolling: function(opts) {

    const onScrollFiltered = (e) => {
      if (this._isEventComeFromTestEnvironment(e) || this._isEventTriggeredByUser()) {
        return this.scrolled();
      }
    };

    $(document).bind('touchmove',  onScrollFiltered);
    $(window).bind('scroll', onScrollFiltered);
  },

  _isScrollFiredByActualUser: function(e) {
    return this._isEventComeFromTestEnvironment || this._isTriggeredOnEachTransition;
  },

  //XXX : tech debt, as of now only way to simulate a user-triggered event (other than click)
  _isEventComeFromTestEnvironment: function(e) {
    return (e && e.originalEvent && e.originalEvent[0] && e.originalEvent[0].isInTestEnvironment);
  },

  _isEventTriggeredByUser: function() {
    //XXX : quick win : the only case where system scrolls and not the user
    // is when new a challenge is displayed, window is scrolled to top,
    // in this case $(window).scrollTop() === 0
    return $(window).scrollTop() > 0;
  },



  unbindScrolling: function() {
    $(window).unbind('scroll');
    $(document).unbind('touchmove');
  }

});
