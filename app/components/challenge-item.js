import Ember from 'ember';

const ChallengeItem = Ember.Component.extend({

  tagName: 'article',
  classNames: ['challenge-item'],
  attributeBindings: ['challenge.id:data-challenge-id'],

  assessmentService: Ember.inject.service('assessment'),
  router: Ember.inject.service('router'),

  challenge: null,
  assessment: null,
  selectedProposal: null,
  error: null,

  hasIllustration: Ember.computed.notEmpty('challenge.illustrationUrl'),
  isChallengePreviewMode: Ember.computed.empty('assessment'),
  hasError: Ember.computed.notEmpty('error'),

  onSelectedProposalChanged: Ember.observer('selectedProposal', function() {
      this.set('error', null);
  }),

  /*
   * A didUpdateAttrs is called prior to rerender, you can use this hook to execute code when specific attributes are
   * changed. This hook can be an effective alternative to an observer, as it will run prior to a re-render, but after
   * an attribute has changed.
   * – https://guides.emberjs.com/v2.7.0/components/the-component-lifecycle/#toc_resetting-presentation-state-on-attribute-change-with-code-didupdateattrs-code
   */
  didUpdateAttrs() {
    this._super(...arguments);
    this.set('selectedProposal', null);
  },

  actions: {
    validate(challenge, assessment) {
      if (Ember.isEmpty(this.get('selectedProposal'))) {
        this.set('error', 'Vous devez sélectionner une réponse.');
        return;
      }
      const value = String(this.get('selectedProposal') + 1);
      this.sendAction('onValidated', challenge, assessment, value);
    }
  }
});

/*
 * Notice that the positionalParams property is added to the class as a static variable via reopenClass.
 * Positional params are always declared on the component class and cannot be changed while an application runs.
 * – https://guides.emberjs.com/v2.7.0/components/passing-properties-to-a-component/#toc_positional-params
 */
ChallengeItem.reopenClass({
  positionalParams: ['challenge', 'assessment']
});

export default ChallengeItem;
