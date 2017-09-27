import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';
import Ember from 'ember';
import sinon from 'sinon';

describe('Unit | Route | password reset', function() {
  setupTest('route:password-reset', {
    // Specify the other units that are required for this test.
    needs: ['service:current-routed-modal']
  });

  let route;
  const sentEmail = 'dumb@people.com';
  const saveStub = sinon.stub().resolves();
  const createRecordStub = sinon.stub().returns({
    save: saveStub
  });

  beforeEach(function() {
    this.register('service:store', Ember.Service.extend({
      createRecord: createRecordStub
    }));
    route = this.subject();
    route.transitionTo = sinon.stub();
  });

  it('exists', function() {
    expect(route).to.be.ok;
  });

  describe('#passwordResetDemand', function() {

    it('should create a passwordResetDemand Record', function() {
      // when
      const promise = route.actions.passwordResetDemand.call(route, sentEmail);

      // then
      return promise.then(() => {
        sinon.assert.called(createRecordStub);
        sinon.assert.calledWith(createRecordStub, 'passwordReset', { email: sentEmail });
      });

    });

    it('should save the password reset demand', function() {
      // when
      const promise = route.actions.passwordResetDemand.call(route, sentEmail);

      // then
      return promise.then(() => {
        sinon.assert.called(saveStub);
      });
    });

    it('should redirect to /connexion when resetPasswordDemand has been saved', function() {
      // when
      const promise = route.actions.passwordResetDemand.call(route, sentEmail);

      // then
      return promise.then(() => {
        sinon.assert.called(route.transitionTo);
        sinon.assert.calledWith(route.transitionTo, 'login');
      });
    });

  });
});
