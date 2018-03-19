import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  classNames: ['certification-results-page'],

  store: service(),

  codeSession: '',

  actions: {
    error(error) {
      if (error.errors[0].status === '403') {
        return true;
      } else {
        this.transitionTo('index');
      }
    },

    submit() {
      return this.get('store').createRecord('course', { sessionCode: this.get('codeSession') }).save()
        .then((certificationCourse) => {
          this.get('onSubmit')(certificationCourse);
        })
        .catch(() => {
          this.set('displayErrorMessage', true);
        });
    }
  }
});
