import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';
import sinon from 'sinon';
import Service from '@ember/service';
import Ember from 'ember';

describe('Unit | Route | certification test', function() {
  setupTest('route:certification-course', {
    needs: ['service:current-routed-modal', 'service:session'],
  });

  let route;
  let findRecordStub;
  let createRecordStub;
  let storeStub;
  let certificationCourse;

  it('exists', function() {
    route = this.subject();
    expect(route).to.be.ok;
  });

  describe('#model', function() {

    beforeEach(function() {
      findRecordStub = sinon.stub().resolves();

      certificationCourse = { id: 1, save: sinon.stub() };
      createRecordStub = sinon.stub().returns(certificationCourse);

      storeStub = Service.extend({
        findRecord: findRecordStub,
        createRecord: createRecordStub
      });

      this.register('service:store', storeStub);
      this.inject.service('store', { as: 'store' });

      route = this.subject();

    });

    it('should verify if the user is logged', function() {
      // when
      const promise = route.model();

      // then
      return promise.then(function() {
        sinon.assert.called(findRecordStub);
      });

    });

    context('when user is logged', function() {

      it('should generate certification test', function() {
        // when
        const promise = route.model();

        // then
        return promise.then(function() {
          sinon.assert.called(createRecordStub);
          sinon.assert.calledWith(createRecordStub, 'certification-course');
        });

      });
      it('should save certification test', function() {
        // when
        const promise = route.model();

        // then
        return promise.then(function() {
          sinon.assert.called(certificationCourse.save);
        });

      });
    });

  });

  describe.skip('#redirect', function() {

    it('should redirect to create.assessment route', function() {
      // given
      route.replaceWith = sinon.stub();
      const certificationCourse = Ember.Object.create({});

      // when
      const promise = route.redirect(certificationCourse);

      // then
      promise.then(() => {
        sinon.assert.called(route.replaceWith);
        sinon.assert.calledWith(route.replaceWith, 'courses.create-assessment', certificationCourse);
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
