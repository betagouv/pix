const { expect, sinon } = require('../../../test-helper');
const useCase = require('../../../../lib/application/usecases/checkUserIsAuthenticated');
const tokenService = require('../../../../lib/domain/services/token-service');
const { InvalidTemporaryKeyError } = require('../../../../lib/domain/errors');

describe('Unit | Application | Use Case | CheckUserIsAuthenticated', () => {

  const accessToken = 'jwt.access.token';

  beforeEach(() => {
    sinon.stub(tokenService, 'verifyValidity');
  });

  afterEach(() => {
    tokenService.verifyValidity.restore();
  });

  it('should resolve "true" when JWT access token is valid', () => {
    // given
    tokenService.verifyValidity.resolves({ user_id: 1234 });

    // when
    const promise = useCase.execute(accessToken);

    // then
    return promise.then((result) => {
      expect(result).to.deep.equal(true);
    });
  });

  it('should resolve "false" when JWT access token is not valid', () => {
    // given
    tokenService.verifyValidity.resolves(null);

    // when
    const promise = useCase.execute(accessToken);

    // then
    return promise.then((result) => {
      expect(result).to.deep.equal(false);
    });
  });

  it('should reject when an error is thrown during access token verification', () => {
    // given
    tokenService.verifyValidity.rejects(new InvalidTemporaryKeyError());

    // when
    const promise = useCase.execute(accessToken);

    // then
    return promise.then((result) => {
      expect(result).to.deep.equal(false);
    });
  });

});
