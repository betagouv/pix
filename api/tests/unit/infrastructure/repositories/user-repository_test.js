const { expect, sinon } = require('../../../test-helper');

const User = require('../../../../lib/infrastructure/data/user');
const UserRepository = require('../../../../lib/infrastructure/repositories/user-repository');

describe('Unit | Repository | UserRepository', function() {

  describe('#updatePassword', () => {

    let sandbox;
    let saveStub;

    beforeEach(() => {
      sandbox = sinon.sandbox.create();
      saveStub = sinon.stub().resolves();
      sandbox.stub(User, 'where').returns({
        save: saveStub
      });
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should be a function', () => {
      // then
      expect(UserRepository.updatePassword).to.be.a('function');
    });

    it('should save a new reset password demand', () => {
      // given
      const userId = 7;
      const userPassword = 'Pix2017!';

      // when
      const promise = UserRepository.updatePassword(userId, userPassword);

      // then
      return promise.then(() => {
        sinon.assert.calledOnce(User.where);
        sinon.assert.calledOnce(saveStub);
        sinon.assert.calledWith(User.where, { id: userId });
        expect(saveStub.getCalls()[0].args[0]).to.eql({ password: userPassword, cgu: true });
        expect(saveStub.getCalls()[0].args[1]).to.eql({ patch: true, require: false });
      });
    });
  });
});
