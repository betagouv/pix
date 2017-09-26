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
  const passwordResetDemand = Ember.Object.create({ sentEmail });
  const saveStub = sinon.stub().resolves();
  const createRecordStub = sinon.stub().returns({
    passwordResetDemand,
    save: saveStub
  });

  beforeEach(function() {
    this.register('service:store', Ember.Service.extend({
      createRecord: createRecordStub
    }));
    route = this.subject();
  });

  it('exists', function() {
    expect(route).to.be.ok;
  });

  describe('#passwordResetDemand', function() {

    it('should create a passwordResetDemand Record', function() {
      // when
      const promise = route.actions.passwordResetDemand.call(route, sentEmail);

      // then
      promise.then(() => {
        sinon.assert.called(createRecordStub);
        sinon.assert.calledWith(createRecordStub, 'passwordReset', { sentEmail });
      });

    });

    it('should save the password reset demand', function() {
      // when
      const promise = route.actions.passwordResetDemand.call(route, sentEmail);

      // then
      promise.then(() => {
        sinon.assert.called(saveStub);
      });
    });

  });
});
