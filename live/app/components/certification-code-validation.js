import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  classNames: ['certification-results-page'],

  store: service(),

  codesession: '',

  actions: {
    error(error) {
      if (error.errors[0].status === '403') {
        return true;
      } else {
        this.transitionTo('index');
      }
    },

    submit() {
      console.log(this.get('codesession'));
      return this.get('store').createRecord('course', { sessionCode: this.get('codesession') }).save()
        .then(() => {
          return this.replaceWith('courses.create-assessment', certificationCourse);
        });

    }
  }
});
