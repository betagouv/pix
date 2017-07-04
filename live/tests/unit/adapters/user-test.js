import Ember from 'ember';
import {expect} from 'chai';
import {it, describe} from 'mocha';
import sinon from 'sinon';
import {setupTest} from 'ember-mocha';

describe('Unit | Route | subscribers', function() {
  setupTest('adapter:user', {
    needs: ['service:session']
  });

  describe('#getAuthenticatedUserProfile', () => {

    beforeEach(() => {
      sinon.stub(Ember.$, 'getJSON').callsArgWith(1, null);
    });

    afterEach(() => {
      Ember.$.getJSON.restore();
    });

    it('should exist', function() {
      // when
      const adapter = this.subject();
      // then
      return expect(adapter.getAuthenticatedUserProfile).to.be.ok;
    });

    it('should return a resolved promise', function(done) {
      // given
      const adapter = this.subject();
      // when
      const promise = adapter.getAuthenticatedUserProfile();
      // then
      promise.then(done);
    });

    it('should called GET /api/users/me', function() {
      // given
      const adapter = this.subject();

      // when
      adapter.getAuthenticatedUserProfile();

      // then
      sinon.assert.calledWith(Ember.$.getJSON, 'http://localhost:3000/api/users/me');
    });

  });

});
