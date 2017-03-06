import Ember from 'ember';

const allowedButtonFor = ['QROC', 'QCM'];

export default Ember.Component.extend({

  hasResponseButton: Ember.computed( 'answer.challenge.type', function(){
    /* eslint-disable no-alert, no-console */
    console.log(this.get('assessment.answer.challenge.type'), 'jgnib');
    /* eslint-enable no-alert, no-console */
    return  allowedButtonFor.indexOf(this.get('answer.challenge.type')) > -1;
  }),

  didRender() {
    this._super(...arguments);
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

});
