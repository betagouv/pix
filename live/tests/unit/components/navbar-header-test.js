import { expect } from 'chai';
import { beforeEach, describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';
import Ember from 'ember';

describe('Unit | Component | Navbar Header Component', function() {
  setupTest('component:navbar-header', {});
  const sessionStubResolve = Ember.Service.extend({ isAuthenticated: true });
  const sessionStubReject = Ember.Service.extend({ isAuthenticated: false });

  context('When user is logged', function() {
    beforeEach(function() {
      this.register('service:session', sessionStubResolve);
      this.inject.service('session', { as: 'session' });
    });

    describe('#isUserLogged', function() {
      it('should return true', function() {
        // when
        const component = this.subject();

        // then
        expect(component.get('isUserLogged')).to.equal(true);
      });
    });

    describe('#menu', function() {
      it('should only contains value for a logged user', function() {
        // given
        const expectedLoggedUserMenu = [
          { name: 'Projet', link: 'project', class: 'navbar-header-links__link--project', permanent: true },
          { name: 'Compétences', link: 'competences', class: 'navbar-header-links__link--competences', permanent: true }
        ];

        // when
        const component = this.subject();

        // then
        expect(component.get('menu')).to.deep.equal(expectedLoggedUserMenu);
      });
    });
  });

  context('When user is not logged', function() {
    beforeEach(function() {
      this.register('service:session', sessionStubReject);
      this.inject.service('session', { as: 'session' });
    });

    describe('#isUserLogged false case', function() {
      it('should return false, when user is unauthenticated', function() {
        // when
        const component = this.subject();

        // then
        expect(component.get('isUserLogged')).to.equal(false);
      });
    });

    describe('#menu', function() {
      it('should set with default values (including connexion link)', function() {
        // given
        const expectedUnloggedUserMenu = [
          { name: 'Projet', link: 'project', class: 'navbar-header-links__link--project', permanent: true },
          {
            name: 'Compétences',
            link: 'competences',
            class: 'navbar-header-links__link--competences',
            permanent: true
          },
          { name: 'Se connecter', link: 'login', class: 'navbar-header-links__link--connection' },
          { name: 'S’inscrire', link: 'inscription', class: 'navbar-header-links__link--inscription' }
        ];

        // when
        const component = this.subject();

        // then
        expect(component.get('menu')).to.deep.equal(expectedUnloggedUserMenu);
      });
    });
  });
});
