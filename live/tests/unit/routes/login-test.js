import { beforeEach, describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';
import sinon from 'sinon';
import Ember from 'ember';

describe('Unit | Route | login page', function() {
  setupTest('route:login', {
    needs: ['service:current-routed-modal', 'service:session']
  });

  const authenticatedStub = sinon.stub();
  const expectedEmail = 'email@example.net';
  const expectedPassword = 'azerty';

  beforeEach(function() {
    this.register('service:session', Ember.Service.extend({
      authenticate: authenticatedStub
    }));
    this.inject.service('session', { as: 'session' });
  });

  it('should authenticate the user', function() {
    // Given
    authenticatedStub.resolves();
    const route = this.subject();
    route.transitionTo = () => {
    };

    // When
    const promise = route.actions.signin.call(route, expectedEmail, expectedPassword);

    // Then
    return promise.then(() => {
      sinon.assert.calledWith(authenticatedStub, 'authenticator:simple', expectedEmail, expectedPassword);
    });
  });

  describe('Behavior when error occured', function() {

    it('should redirect to /connexion, when authenticated fails', function() {
      // given
      authenticatedStub.rejects();
      const route = this.subject();
      route.transitionTo = sinon.stub();
      // when
      const promise = route.actions.signin.call(route, expectedEmail, expectedPassword);
      // then
      return promise.then(_ => {
        sinon.assert.calledWith(route.transitionTo, 'connexion');
      });
    });

    const queryRecordStub = sinon.stub().rejects();
    beforeEach(function() {
      this.register('service:store', Ember.Service.extend({
        queryRecord: queryRecordStub
      }));
      this.inject.service('store', { as: 'store' });
    });

    it('should redirect to /connexion , when we’re unable to fetch user profile', function() {
      // given
      authenticatedStub.resolves();
      const route = this.subject();
      route.transitionTo = sinon.stub();
      // when
      const promise = route.actions.signin.call(route, expectedEmail, expectedPassword);
      // then
      return promise.then(_ => {
        sinon.assert.calledWith(route.transitionTo, 'connexion');
      });
    });

  });

  describe('Route behavior according to organization belong status (authenticated user)', function() {

    const queryRecordStub = sinon.stub();
    beforeEach(function() {
      this.register('service:store', Ember.Service.extend({
        queryRecord: queryRecordStub
      }));
      this.inject.service('store', { as: 'store' });
    });

    it('should redirect to /compte, when user is not linked to an Organization', function() {
      //Given
      const route = this.subject();
      authenticatedStub.resolves();

      const foundUser = Ember.Object.create({ id: 12 });
      queryRecordStub.resolves(foundUser);

      route.transitionTo = sinon.stub();

      //When
      const promise = route.actions.signin.call(route, expectedEmail, expectedPassword);

      return promise.then(() => {
        //Then
        sinon.assert.calledWith(route.transitionTo, 'compte');
      });
    });

    it('should redirect to /board, when user is linked to an Organization', function() {
      //Given
      const route = this.subject();
      authenticatedStub.resolves();

      const linkedOrganization = Ember.Object.create({ id: 1 });
      const foundUser = Ember.Object.create({ organizations: [linkedOrganization] });
      queryRecordStub.resolves(foundUser);

      route.transitionTo = sinon.stub();

      //When
      const promise = route.actions.signin.call(route, expectedEmail, expectedPassword);

      return promise.then(() => {
        //Then
        sinon.assert.calledWith(route.transitionTo, 'board');
      });
    });

  });

});
