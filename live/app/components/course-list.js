import Ember from 'ember';
import ENV from 'pix-live/config/environment';

const CourseList = Ember.Component.extend({

  // private
  courses: null,
  selectedCourse: null,

  didInsertElement () {
    const that = this;
    Ember.run.scheduleOnce('afterRender', this, function () {
      $('button[data-confirm]').click(function () {
        $('#js-modal-mobile').modal('hide');
        that.sendAction('startCourse', that.get('selectedCourse'));
      });
    });

    if (ENV.environment === 'test') {
      this.$().on('simulateMobileScreen', function () {
        that.set('isSimulatedMobileScreen', 'true');
      });
    }
  },

  _isMobile () {
    if (ENV.environment !== 'test') {
      return $(window).width() < 767;
    } else {
      return this.get('isSimulatedMobileScreen');
    }
  },

  actions: {
    startCourse(course) {
      if (this._isMobile() && !localStorage.getItem('pix-mobile-warning')) {
        localStorage.setItem('pix-mobile-warning', 'true');
        this.set('selectedCourse', course);
        $('#js-modal-mobile').modal();
      } else {
        this.sendAction('startCourse', course);
      }
    }
  }

});

export default CourseList;
