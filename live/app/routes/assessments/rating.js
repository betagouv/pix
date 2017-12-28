import Route from '@ember/routing/route';

export default Route.extend({

  afterModel(assessment) {
    assessment.get('type') === 'CERTIFICATION' ?
      this.transitionTo('certifications.results', assessment.get('certificationNumber'))
      : this.transitionTo('assessments.results', assessment.get('id'));
  }

});
