import Ember from 'ember';
import moment from 'moment';

export default  Ember.Component.extend({

  classNames: ['rounded-panel', 'challenge-statement'],

  attributeBindings: ['tabindex', 'id'],
  tabindex: -1,

  challenge: null,
  assessment: null,

  init() {
    this._super(...arguments);
    this.id = 'challenge_statement_'  + this.get('challenge.id');

    if(this.get('challenge.instruction')) {
      const instructionWithReplacements = this.get('challenge.instruction')
        .replace('${EMAIL}', this._formattedEmailForInstruction());

      this.set('_instruction', instructionWithReplacements);
    }
  },

  didReceiveAttrs() {
    this._super(...arguments);
    Ember.$('#' + this.id).focus();
  },

  didInsertElement() {
    this._super(...arguments);
    Ember.$('#' + this.id).focus();
  },

  selectedAttachmentUrl: Ember.computed('challenge.attachments', function() {
    return this.get('challenge.attachments.firstObject');
  }),

  attachmentsData: Ember.computed('challenge.attachements', function() {
    return this.get('challenge.attachments');
  }),

  actions: {
    selectAttachementUrl(attachementUrl) {
      this.set('selectedAttachmentUrl', attachementUrl);
    }
  },

  _formattedEmailForInstruction: function() {
    return `${this.get('challenge.id')}-${this.get('assessment.id')}-${moment().format('DDMM')}@pix.beta.gouv.fr`;
  },
});
