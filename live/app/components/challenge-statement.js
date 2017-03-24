import Ember from 'ember';

const ChallengeStatement = Ember.Component.extend({

  selectedAttachmentUrl: Ember.computed('challenge.attachments', function(){
    return this.get('challenge.attachments.firstObject');
  }),

  attachmentsData: Ember.computed('challenge.attachements',function(){
    return this.get('challenge.attachments');
  }),

  actions: {
    selectAttachementUrl(attachementUrl) {
      this.set('selectedAttachmentUrl', attachementUrl);
    }
  }
});

ChallengeStatement.reopenClass({
  positionalParams: ['challenge']
});

export default ChallengeStatement;
