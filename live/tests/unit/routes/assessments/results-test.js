import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';
import sinon from 'sinon';
import Ember from 'ember';

describe('Unit | Route | Assessments.ResultsRoute', function() {

  setupTest('route:assessments.results', {
    needs: ['service:current-routed-modal']
  });

  it('exists', function() {
    const route = this.subject();
    expect(route).to.be.ok;
  });

  describe('#afterModel', function() {

    it('should redirect to home page if assessment is a certification', function() {
      // given
      const route = this.subject();
      route.transitionTo = sinon.spy();

      const certification = Ember.Object.create({ id: 123, isCertification: true });

      // when
      route.afterModel(certification);

      // then
      sinon.assert.calledWith(route.transitionTo, 'index');
    });

    it('should not redirect to home page if assessment is not a certification', function() {
      // given
      const route = this.subject();
      route.transitionTo = sinon.spy();

      const certification = Ember.Object.create({ id: 123, isCertification: false });

      // when
      route.afterModel(certification);

      // then
      sinon.assert.notCalled(route.transitionTo);
    });

  });

});
