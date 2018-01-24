import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';
import sinon from 'sinon';
import Service from '@ember/service';

describe('Unit | Route | certification test', function() {
  setupTest('route:certification-course', {
    needs: ['service:current-routed-modal', 'service:session'],
  });

  let route;
  let createRecordStub;
  let storeStub;
  let certificationCourse;

  it('exists', function() {
    route = this.subject();
    expect(route).to.be.ok;
  });

  describe('#model', function() {

    beforeEach(function() {
      certificationCourse = { id: 1, save: sinon.stub() };
      createRecordStub = sinon.stub().returns(certificationCourse);

      storeStub = Service.extend({
        createRecord: createRecordStub
      });

      this.register('service:store', storeStub);
      this.inject.service('store', { as: 'store' });

      route = this.subject();

    });

    context('when user is logged', function() {

      it('should generate certification test', function() {
        // when
        route.model({ code: '123456' });

        // then
        sinon.assert.called(createRecordStub);
        sinon.assert.calledWithExactly(createRecordStub, 'course', { sessionCode: '123456' });

      });

      it('should save certification test', function() {
        // when
        route.model({ code: '123456' });

        // then
        sinon.assert.called(certificationCourse.save);
      });
    });

  });

  describe('#error', function() {

    it('should redirect to index', function() {
      // given
      route.transitionTo = sinon.stub();

      // when
      route.send('error');

      // then
      sinon.assert.called(route.transitionTo);
      sinon.assert.calledWith(route.transitionTo, 'index');
    });

  });
});
