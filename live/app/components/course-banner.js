import Ember from 'ember';

const CourseBanner = Ember.Component.extend({

  course: null,
  withHomeLink: false

});

CourseBanner.reopenClass({
  positionalParams: ['course', 'withHomeLink']
});

export default CourseBanner;
