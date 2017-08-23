import Ember from 'ember';
import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { setupTest } from 'ember-mocha';
import sinon from 'sinon';

describe('Unit | Service | Store', function() {

  setupTest('service:store', {
    needs: []
  });

  describe('#findRecordLazily', function() {

    let service;

    beforeEach(function() {
      service = this.subject();
      service.peekRecord = sinon.stub().returns(null);
      service.queryRecord = sinon.stub();
    });

    it('should call try to find the record in the store', function() {
      // Given;
      service.peekRecord.returns({});

      // When
      const promise = service.findRecordLazily('model', 1);

      // Then
      return promise.then(() => {
        sinon.assert.calledWith(service.peekRecord, 'model', 1);
      });
    });

    it('should call return the model found in the store', function() {
      // Given;
      const foundObjectInTheStore = Ember.Object.create({});
      service.peekRecord.returns(foundObjectInTheStore);

      // When
      const promise = service.findRecordLazily('model', 1);

      // Then
      return promise.then((result) => {
        expect(result).to.deep.equal(foundObjectInTheStore);
      });
    });

    describe('when the model is not in the store', function() {
      it('should query the record', function() {
        service.queryRecord = sinon.stub().resolves(null);

        // When
        const promise = service.findRecordLazily('model', 1);

        // Then
        return promise.then(() => {
          sinon.assert.calledWith(service.queryRecord);
          sinon.assert.calledWith(service.queryRecord, 'model', 1);
        });
      });

      it('should return the model from backend', function() {
        const foundObjectInBackend = Ember.Object.create({});
        service.queryRecord = sinon.stub().resolves(foundObjectInBackend);

        // When
        const promise = service.findRecordLazily('model', 1);

        // Then
        return promise.then((result) => {
          expect(result).to.be.deep.equal(foundObjectInBackend);
        });
      });
    });
  });
});
