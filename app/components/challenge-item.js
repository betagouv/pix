import Ember from 'ember';

const ChallengeItem = Ember.Component.extend({

  tagName: 'article',
  classNames: ['challenge-item'],
  attributeBindings: ['challenge.id:data-challenge-id'],

  assessmentService: Ember.inject.service('assessment'),
  router: Ember.inject.service('router'),

  hasIllustration: Ember.computed.notEmpty('challenge.illustrationUrl'),
  challenge: null,
  assessment: null,
  previewedCourse: null,

  isLiveMode: Ember.computed.notEmpty('assessment'),
  isCoursePreviewMode: Ember.computed.notEmpty('course'),
  isChallengePreviewMode: Ember.computed('isLiveMode', 'isCoursePreviewMode', function () {
    return !this.get('isLiveMode') && !this.get('isCoursePreviewMode');
  }),
  nextChallenge: Ember.computed('challenge', 'assessment', 'course', function () {
    const challenge = this.get('challenge');
    const assessment = this.get('assessment');
    const course = this.get('course');

    if (assessment) {
      return this.get('assessmentService').getNextChallenge(challenge, assessment);
    }
    if (course) {
      return this.get('assessmentService').getCourseNextChallenge(challenge, course);
    }
  }),

  actions: {
    validate(challenge, assessment) {
      Ember.Logger.info('coucou');
      return true;
    }
  }
});

/*
 * Notice that the positionalParams property is added to the class as a static variable via reopenClass.
 * Positional params are always declared on the component class and cannot be changed while an application runs.
 * – https://guides.emberjs.com/v2.7.0/components/passing-properties-to-a-component/#toc_positional-params
 */
ChallengeItem.reopenClass({
  positionalParams: ['challenge', 'assessment', 'course']
});

export default ChallengeItem;
