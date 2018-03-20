import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  classNames: ['certification-code-validation'],

  store: service(),

  codeSession: '',

  actions: {
    submit() {
      return this.get('store').createRecord('course', { sessionCode: this.get('codeSession') }).save()
        .then((certificationCourse) => {
          this.get('onSubmit')(certificationCourse);
        })
        .catch((error) => {
          if (error.errors[0].status === '404') {
            this.set('displayErrorMessage', true);
          } else {
            this.get('error')(error);
          }
        });
    }
  }
});
