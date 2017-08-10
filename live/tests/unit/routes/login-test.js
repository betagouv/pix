import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';
import sinon from 'sinon';
import Ember from 'ember';

class SessionStub {
  authenticate() {
    this.callArgs = Array.from(arguments);
    return Promise.resolve();
  }
}

describe('Unit | Route | login page', function() {
  setupTest('route:login', {
    needs: ['service:current-routed-modal', 'service:session']
  });

  const expectedEmail = 'email@example.net';
  const expectedPassword = 'azerty';
  const sessionStub = new SessionStub();

  it('should authenticate the user', function() {
    // Given
    const route = this.subject();
    route.set('session', sessionStub);
    route.transitionTo = () => {
    };

    // When
    const promise = route.actions.signin.call(route, expectedEmail, expectedPassword);

    // Then
    return promise.then(() => {
      expect(sessionStub.callArgs).to.deep.equal(['authenticator:simple', expectedEmail, expectedPassword]);
    });
  });

  describe('Route behavior according to organization belong status (authenticated user)', function() {

    const authenticateStub = sinon.stub();
    const transitionToSpy = sinon.spy();
    const expectedEmail = 'email@example.net';
    const expectedPassword = 'azerty';

    beforeEach(function() {
      this.register('service:session', Ember.Service.extend({
        authenticate: authenticateStub
      }));
      this.inject.service('ajax', { as: 'session' });
    });

    it('should redirect to /compte, when user is not linked to an Organization', function() {
      // given
      const route = this.subject();
      route.transitionTo = transitionToSpy;

      authenticateStub.resolves({
        hasOrganization: false
      });

      // when
      const promise = route.actions.signin.call(route, expectedEmail, expectedPassword);

      // Then
      return promise.then(() => {
        sinon.assert.calledWith(transitionToSpy, '/compte');
      });
    });

    it('should redirect to /board, when user is linked to an Organization', function() {
      // given
      const route = this.subject();
      route.transitionTo = transitionToSpy;

      authenticateStub.resolves({
        hasOrganization: true
      });

      // when
      const promise = route.actions.signin.call(route, expectedEmail, expectedPassword);

      // Then
      return promise.then(() => {
        sinon.assert.calledWith(transitionToSpy, '/board');
      });
    });

  });

});
