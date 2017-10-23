import { expect, assert } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';
import sinon from 'sinon';
import Ember from 'ember';
import _ from 'lodash';

describe.only('Unit | Route | resume', function() {
  setupTest('route:assessments.resume', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  it('exists', function() {
    const route = this.subject();
    expect(route).to.be.ok;
  });


  class StoreStub {
    constructor(storeContent) {
      this.storeContent = storeContent;
    }

    findRecord(model, id) {

      if (!_(this.storeContent).has(model)) {
        return Promise.reject("Unknown model");
      }

      let result = _(this.storeContent[model]).find({ id });

      if (!!result) {
        return Promise.resolve(result);
      } else {
        return Promise.reject("Model not found");
      }
    }
  }

  describe('Class StoreStub', function() {
    it('can be instancied', function() {
      // given
      // when
      let store = new StoreStub({});
      // then
      expect(store).to.be.instanceOf(StoreStub);
    });

    describe('#findRecord', function() {

      it('returns a promise', function() {
        // given
        let store = new StoreStub({});
        // when
        let result = store.findRecord('aModel', 0);
        // then
        return expect(result).to.be.instanceOf(Promise);
      });

      it('rejects when the store doesnt have the given model class', function() {
        // given
        let store = new StoreStub({
          assessment: [{ id: 12 }]
        });
        // when
        let result = store.findRecord('aModel', 12);
        // then
        return expect(result).to.be.rejected;
      });

      it('rejects when the model instance isnt in store', function() {
        // given
        let store = new StoreStub({
          assessment: [{ id: 12 }]
        });
        // when
        let result = store.findRecord('assessment', 41);
        // then
        return expect(result).to.be.rejected;
      });

      it('resolve with the right model when OK', function() {
        let store = new StoreStub({
          assessment: [{ id: 12 }]
        });
        // when
        let result = store.findRecord('assessment', 12);
        // then
        return expect(result).to.be.resolved;
      });
    });
  });


  describe('given a non-existing assessment', function() {

    describe('#model', function() {

      it('should return a rejected promise', function() {
        // arrange
        const route = this.subject();
        route.set('store', new StoreStub({}));

        // act
        const promise = route.model({ assessment_id: 'unexisting id' });

        // assert
        return expect(promise).to.be.rejected;
      });
    });

    describe('actions #error', function() {

      it('should redirect to compte', function() {
        // given
        const route = this.subject();
        route.transitionTo = sinon.spy();

        // when
        route.send('error');

        // then
        sinon.assert.calledWith(route.transitionTo, 'compte')
      });
    });
  });

  describe('given an existing assessment', function() {

    describe('#model', function() {

      it('should get the current assessment informations', function() {
        // given
        const route = this.subject();
        const assessment = { id: 12 };
        route.set('store', new StoreStub({ assessment: [assessment] }));

        // when
        const promise = route.model({ assessment_id: assessment.id });

        // then
        return expect(promise).to.become({ id: 12 });
      });

      it.skip('should get the next challengeId for the found assessment', function() {
        // given
        const route = this.subject();
        const assessment = { id: 53 };
        route.set('store', new StoreStub({
          assessment: [assessment]
        }));

        // when
        let result = route.model({ assessment_id: assessment.id });

        // then
        return expect(result).to.eventually.have.property('nextChallenge');
      });
    });
  });
})
;
