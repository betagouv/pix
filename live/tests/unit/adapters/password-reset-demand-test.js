import { expect } from 'chai';
import { beforeEach, describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';
import sinon from 'sinon';

describe('Unit | Adapter | password reset demand', function() {
  setupTest('adapter:password-reset-demand', {
    needs: ['service:session']
  });

  // Replace this with your real tests.
  it('should exists', function() {
    const adapter = this.subject();
    expect(adapter).to.be.ok;
  });

  describe('#queryRecord', function() {
    let adapter;
    const query = {
      temporaryKey: 'temporary_key'
    };

    beforeEach(function() {
      adapter = this.subject();
      adapter.ajax = sinon.stub().resolves();
    });

    it('should exist', function() {
      // when
      const adapter = this.subject();
      // then
      return expect(adapter.queryRecord).to.be.a('function');
    });

    it('should return a resolved promise', function() {
      // when
      const promise = adapter.queryRecord({}, {}, query);
      // then
      expect(promise).to.be.an.instanceOf(Promise);
    });

    it('should called GET /api/password-reset-demands/temporaryKey', function() {
      // when
      adapter.queryRecord({}, {}, query);

      // then
      sinon.assert.calledWith(adapter.ajax, 'http://localhost:3000/api/password-reset-demands/temporary_key');
    });
  });
});
