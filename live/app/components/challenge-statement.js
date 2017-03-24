import Ember from 'ember';

const ChallengeStatement = Ember.Component.extend({

  selectedAttachmentUrl: Ember.computed('challenge.attachments', function(){
    return this.get('challenge.attachments.firstObject');
  }),


  didRender() {
    this._super(...arguments);
    const selectedRadio = this.$(`.challenge-statement__file-option-input[value="${this.selectedAttachmentUrl}"]`);
    selectedRadio.attr('checked', 'checked');
  },

  actions: {
    selectAttachementUrl(attachementUrl) {
      this.set('selectedAttachmentUrl', attachementUrl);
    },

    checkState(){
      /* eslint-disable no-alert, no-console */
      console.log('brm');

      /* eslint-enable no-alert, no-console */
    }
  }
});

ChallengeStatement.reopenClass({
  positionalParams: ['challenge']
});

export default ChallengeStatement;
