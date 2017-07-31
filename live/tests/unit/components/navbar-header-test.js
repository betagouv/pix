import { expect } from 'chai';
import { beforeEach, describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';
import Ember from 'ember';

describe('Unit | Component | Navbar Header Component', function() {
  setupTest('component:navbar-header', {});
  const sessionStubResolve = Ember.Service.extend({ isAuthenticated: true });
  const sessionStubReject = Ember.Service.extend({ isAuthenticated: false });

  describe('#isUserLogged true case', function() {

    beforeEach(function() {
      this.register('service:session', sessionStubResolve);

      this.inject.service('session', { as: 'session' });
    });

    it('should return true, when user is authenticated', function() {
      // when
      const component = this.subject();

      // then
      expect(component.get('isUserLogged')).to.equal(true);
    });

  });

  describe('#isUserLogged false case', function() {

    beforeEach(function() {
      this.register('service:session', sessionStubReject);

      this.inject.service('session', { as: 'session' });
    });

    it('should return false, when user is unauthenticated', function() {
      // when
      const component = this.subject();

      // then
      expect(component.get('isUserLogged')).to.equal(false);
    });
  });

  describe('#showMenu', function() {
    beforeEach(function() {
      this.register('service:session', sessionStubResolve);

      this.inject.service('session', { as: 'session' });
    });

    it('should return true, when user details is clicked', function() {
      // given
      const component = this.subject();
      // when
      component.set('user', {});
      component.send('toggleUserMenu');
      // then
      expect(component.get('_canDisplayMenu')).to.equal(true);
    });

    it('should return false as default value', function() {
      // given
      const component = this.subject();
      // when
      component.set('user', {});
      // then
      expect(component.get('_canDisplayMenu')).to.equal(false);
    });

    it('should return false, when _canDisplayMenu was previously true', function() {
      // given
      const component = this.subject();
      // when
      component.set('user', {});
      component.send('toggleUserMenu');
      component.send('toggleUserMenu');
      // then
      expect(component.get('_canDisplayMenu')).to.equal(false);
    });
  });
});
