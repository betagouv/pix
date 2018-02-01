const { describe, it, expect, sinon, beforeEach, afterEach } = require('../../../test-helper');

const sessionController = require('../../../../lib/application/sessions/session-controller');
const Session = require('../../../../lib/domain/models/Session');

const sessionRepository = require('../../../../lib/infrastructure/repositories/session-repository');

describe('Unit | Controller | organizationController', () => {

  let sandbox;
  let codeStub;
  let request;
  let replyStub;

  describe('#create', () => {

    beforeEach(() => {
      codeStub = sinon.stub();
      replyStub = sinon.stub().returns({ code: codeStub });

      sandbox = sinon.sandbox.create();
      sandbox.stub(sessionRepository, 'save').resolves();

      request = {
        payload: {
          data: {
            type: 'sessions',
            attributes: {
              'certification-center': 'Université Nice-Sophia-Antipolis',
              address: 'Nice',
              room: '28D',
              examiner: 'Sophie Rapetti',
              date: '08/12/2017',
              time: '14:30',
              description: ''
            }
          }
        }
      };
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should use reply', () => {
      // Given
      const expectedSession = new Session({
        certificationCenter: 'Université Nice-Sophia-Antipolis',
        address: 'Nice',
        room: '28D',
        examiner: 'Sophie Rapetti',
        date: '08/12/2017',
        time: '14:30',
        description: ''
      });

      // When
      const promise = sessionController.save(request, replyStub);

      // Then
      return promise.then(() => {
        expect(sessionRepository.save).to.have.been.calledWith(expectedSession);
      });
    });
  });
});
