import Ember from 'ember';
import { expect } from 'chai';
import { beforeEach, describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';
import sinon from 'sinon';

describe('Unit | Route | changer mot de passe', function() {
  setupTest('route:reset-password', {
    needs: ['service:session', 'service:current-routed-modal']
  });

  describe('Route behavior', function() {

    let storeStub;
    let queryRecordStub;
    const params = {
      temporaryKey: 'pwd-reset-demand-token'
    };
    const transitionToStub = sinon.stub();

    beforeEach(function() {
      queryRecordStub = sinon.stub();
      storeStub = Ember.Service.extend({
        queryRecord: queryRecordStub
      });

      this.register('service:store', storeStub);
      this.inject.service('store', { as: 'store' });
    });

    it('should exists', function() {
      // when
      const route = this.subject();

      // then
      expect(route).to.be.ok;
    });

    it('should ask password reset demand validity', function() {
      // given
      queryRecordStub.resolves();
      const route = this.subject();

      // when
      const promise = route.model(params);

      // then
      return promise.then(() => {
        sinon.assert.calledOnce(queryRecordStub);
        sinon.assert.calledWith(queryRecordStub, 'password-reset-demand', { temporaryKey: params.temporaryKey });
      });
    });

    describe('when password reset demand is valid', function() {

      it('should create a new ember user model with fetched data', function() {
        // given
        const fetchedOwnerDetails = {
          data: {
            id: 7,
            attributes: {
              email: 'pix@qmail.fr'
            }
          }
        };
        const expectedUser = {
          user: {
            data: {
              id: 7,
              attributes: {
                email: 'pix@qmail.fr'
              }
            }
          }
        };

        queryRecordStub.resolves(fetchedOwnerDetails);
        const route = this.subject();

        // when
        const promise = route.model(params);

        // then
        return promise.then((user) => {
          expect(user).to.eql(expectedUser);
        });
      });
    });

    describe('When password reset demand is not valid', function() {

      it('should redirect to home', function() {
        // given
        queryRecordStub.rejects();
        const route = this.subject();
        route.set('transitionTo', transitionToStub);

        // when
        const promise = route.model(params);

        // then
        return promise.then(() => {
          sinon.assert.calledOnce(transitionToStub);
          sinon.assert.calledWith(transitionToStub, 'index');
        });
      });
    });
  });
});
