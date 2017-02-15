import Ember from 'ember';
import ENV from 'pix-live/config/environment';

const CourseItem = Ember.Component.extend({

  // Inject
  routing: Ember.inject.service('-routing'),

  // Private
  course: null,
  clickAction: null,

  imageUrl: Ember.computed('course', function () {
    const imageUrl = this.get('course.imageUrl');
    return imageUrl ? imageUrl : '/assets/images/course-default-image.png';
  }),

  didInsertElement () {
    const that = this;
    Ember.run.scheduleOnce('afterRender', this, function () {
      $('button[data-confirm]').click(function () {
        $('#js-modal-mobile').modal('hide');
        that.get('routing').transitionTo('courses', this.get('course.id'));
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
    startCourse() {
      if (this._isMobile() && !localStorage.getItem('pix-mobile-warning')) {
        localStorage.setItem('pix-mobile-warning', 'true');
        $('#js-modal-mobile').modal();
      } else {
        const course = this.get('course');
        this.get('startCourse')(course);
      }
    }
  }

});

export default CourseItem;
