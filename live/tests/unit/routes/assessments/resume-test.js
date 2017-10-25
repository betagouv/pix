import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';
import sinon from 'sinon';

describe.only('Unit | Route | resume', function() {
  setupTest('route:assessments.resume', {
    needs: ['service:current-routed-modal']
  });

  let route;
  let StoreStub;
  let challengeAdapterStub;
  let findRecordStub;

  beforeEach(function() {
    // define stubs
    challengeAdapterStub = { queryNext: sinon.stub() };
    findRecordStub = sinon.stub();
    StoreStub = Ember.Service.extend({
      adapterFor: () => challengeAdapterStub,
      findRecord: findRecordStub
    });

    // manage dependency injection context
    this.register('service:store', StoreStub);
    this.inject.service('store', { as: 'store' });

    // instance route object
    route = this.subject();
    route.transitionTo = sinon.stub();
  });

  it('exists', function() {
    const route = this.subject();
    expect(route).to.be.ok;
  });

  describe('#model', function() {

    it('should fetch an assessment', function() {
      // given
      route.get('store').findRecord.resolves();

      // when
      const promise = route.model({ assessment_id: 123 });

      // then
      return promise.then(() => {
        sinon.assert.calledOnce(findRecordStub);
        sinon.assert.calledWith(findRecordStub, 'assessment', 123);
      });
    });
  });

  describe('#afterModel', function() {

    const assessment = Ember.Object.create({ id: 123 });

    it('should get the next challenge of the assessment', function() {
      // given
      challengeAdapterStub.queryNext.resolves();

      // when
      const promise = route.afterModel(assessment);

      // then
      return promise.then(() => {
        sinon.assert.calledOnce(challengeAdapterStub.queryNext);
        sinon.assert.calledWith(challengeAdapterStub.queryNext, route.get('store'), 123);
      });
    });

    context('when the next challenge exists', function() {

      it('should redirect to the challenge view', function() {
        // given
        const nextChallenge = Ember.Object.create();
        challengeAdapterStub.queryNext.resolves(nextChallenge);

        // when
        const promise = route.afterModel(assessment);

        // then
        return promise.then(() => {
          sinon.assert.calledOnce(route.transitionTo);
          sinon.assert.calledWith(route.transitionTo, 'assessments.get-challenge', { assessment, nextChallenge });
        });
      });

    });

    context('when the next challenge does not exist (is null)', function() {

      it('should redirect to assessment results page', function() {
        // given
        challengeAdapterStub.queryNext.rejects();

        // when
        const promise = route.afterModel(assessment);

        // then
        return promise.then(() => {
          sinon.assert.calledOnce(route.transitionTo);
          sinon.assert.calledWith(route.transitionTo, 'assessments.get-results', assessment.get('id'));
        });
      });

    });
  });

  describe('#error', function() {

    it('should redirect to index page', function() {
      // given
      const route = this.subject();
      route.transitionTo = sinon.spy();

      // when
      route.send('error');

      // then
      sinon.assert.calledWith(route.transitionTo, 'index');
    });
  });

});


