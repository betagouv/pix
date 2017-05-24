import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['g-recaptcha'],
  siteKey: '6LdPdiIUAAAAADhuSc8524XPDWVynfmcmHjaoSRO',

  didInsertElement() {
    this._super(...arguments);
    Ember.run.next(() => {
      //this.renderReCaptcha();
    });
  },
});
