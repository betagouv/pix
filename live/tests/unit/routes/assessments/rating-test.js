import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';
import EmberObject from '@ember/object';
import sinon from 'sinon';

describe('Unit | Route | assessments.rating', function() {
  setupTest('route:assessments.rating', {
    needs: ['service:current-routed-modal']
  });

  it('exists', function() {
    const route = this.subject();
    expect(route).to.be.ok;
  });

  let route;

  beforeEach(function() {
    route = this.subject();
    route.transitionTo = sinon.stub();
  });

  describe('#afterModel', function() {

    const challengeOne = EmberObject.create({ id: 'recChallengeOne' });
    const answerToChallengeOne = EmberObject.create({ challenge: challengeOne });

    context('when the assessment is a certification', function() {
      it('should redirect to the certification end page', function() {
        // given

        const assessment = EmberObject.create({ type: 'CERTIFICATION', answers: [answerToChallengeOne] });

        // when
        route.afterModel(assessment);

        // then
        sinon.assert.calledWith(route.transitionTo, 'certifications.results');
      });
    });

    context('when the assessment is not certification', function() {
      it('should redirect to the assessment results page', function() {
        // given
        const assessment = EmberObject.create({ answers: [answerToChallengeOne] });

        // when
        route.afterModel(assessment);

        // then
        sinon.assert.calledWith(route.transitionTo, 'assessments.results', assessment.get('id'));
      });
    });
  });
});
