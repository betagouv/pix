import {expect} from 'chai';
import {describe, it} from 'mocha';
import {setupTest} from 'ember-mocha';

describe('Unit | Component | Navar Header Component', function() {
  setupTest('component:navbar-header', {});

  describe('#isUserLogged', function() {
    [
      {given: '', expected: false},
      {given: ' ', expected: false},
      {given: null, expected: false},
      {given: undefined, expected: false},
      {given: {firstName: 'FHI'}, expected: true}
    ].forEach(({given, expected}) => {
      it(`should return ${expected}, when "${given}" provided`, function() {
        // given
        const component = this.subject();
        // when
        component.set('user', given);
        // then
        expect(component.get('isUserLogged')).to.equal(expected);
      });

    });
  });

  describe('#showMenu', function() {
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
