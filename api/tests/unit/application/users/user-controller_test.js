const { describe, it, before, after, expect, sinon } = require('../../../test-helper');
const Hapi = require('hapi');
const Boom = require('boom');

const User = require('../../../../lib/domain/models/data/user');
const faker = require('faker');

const userController = require('../../../../lib/application/users/user-controller');
const validationErrorSerializer = require('../../../../lib/infrastructure/serializers/jsonapi/validation-error-serializer');
const userSerializer = require('../../../../lib/infrastructure/serializers/jsonapi/user-serializer');

describe('Unit | Controller | user-controller', () => {

  let server;

  before(() => {
    server = this.server = new Hapi.Server();
    server.connection({ port: null });
    server.register({ register: require('../../../../lib/application/users') });
  });

  describe('#list', () => {
    let stub;
    const users = [
      new User({ "id": "user_1" }),
      new User({ "id": "user_2" }),
      new User({ "id": "user_3" })
    ];

    before(() => {
      stub = sinon.stub(User, 'fetchAll');
    });

    after(() => {
      stub.restore();
    });

    it('should fetch and return all the users, serialized as JSONAPI', () => {
      // Given
      stub.resolves(users);

      // When
      const promise = server.inject({ method: 'GET', url: '/api/users' });

      // Then
      return promise.then((res) => {
        expect(res.result).to.deep.equal(users);
      });
    });

    it('should return an error 500 when the fetch fails', () => {
      // Given
      stub.rejects(new Error('Fetch error'));

      // When
      const promise = server.inject({ method: 'GET', url: '/api/users' });

      // Then
      return promise.then((res) => {
        expect(res.statusCode).to.equal(500);
      });
    });
  });

  describe('#get', () => {

    let stub;
    const user = new User({ "id": "user_id" });

    before(() => {
      stub = sinon.stub(User.prototype, 'fetch');
    });

    after(() => {
      stub.restore();
    });

    it('should fetch and return the given user, serialized as JSONAPI', () => {
      // Given
      stub.resolves(user);

      // When
      const promise = server.inject({ method: 'GET', url: '/api/users/user_id' });

      // Then
      return promise.then((res) => {
        expect(res.result).to.deep.equal(user);
      });
    });

    it('should reply with error status code 404 if user not found', () => {
      // Given
      const error = {
        "error": {
          "type": "MODEL_ID_NOT_FOUND",
          "message": "Could not find row by id unknown_id"
        }
      };
      stub.rejects(error);

      // When
      const promise = server.inject({ method: 'GET', url: '/api/users/unknown_id' });

      // Then
      return promise.then((res) => {
        expect(res.statusCode).to.equal(404);
      });
    });
  });

  describe('#save', () => {

    let boomBadRequestMock;
    let validationErrorSerializerStub;
    let replyStub;

    beforeEach(() => {
      boomBadRequestMock = sinon.mock(Boom);
      validationErrorSerializerStub = sinon.stub(validationErrorSerializer, 'serialize');
      replyStub = sinon.stub();
    });

    afterEach(() => {
      validationErrorSerializerStub.restore();
      boomBadRequestMock.restore();
    });

    it('should reply with a serialized error', () => {
      // Given
      const codeSpy = sinon.spy();
      const expectedSerializedError = { errors: [] };
      validationErrorSerializerStub.withArgs().returns(expectedSerializedError);
      replyStub.returns({ code: codeSpy });

      const request = {
        payload: {
          data: {
            attributes: {
              firstName: '',
              lastName: ''
            }
          }
        }
      };

      // When
      let promise = userController.save(request, replyStub);

      // Then
      return promise.then(() => {
        sinon.assert.calledWith(replyStub, expectedSerializedError);
        sinon.assert.calledOnce(validationErrorSerializerStub);
        sinon.assert.calledWith(codeSpy, 400);
      });
    });

    describe('should return 400 Bad request', () => {

      it('when there is not payload', () => {
        // Given
        const request = {};
        boomBadRequestMock.expects('badRequest').exactly(1);

        // When
        userController.save(request, replyStub);

        // Then
        boomBadRequestMock.verify();
      });

      it('when there is an empty payload', () => {
        // Given
        const request = {
          payload: {}
        };
        boomBadRequestMock.expects('badRequest').exactly(1);

        // When
        userController.save(request, replyStub);

        // Then
        boomBadRequestMock.verify();
      });

      it('when there is an payload with empty data', () => {
        // Given
        const request = {
          payload: {
            data: {}
          }
        };
        boomBadRequestMock.expects('badRequest').exactly(1);

        // When
        userController.save(request, replyStub);

        // Then
        boomBadRequestMock.verify();
      });


    });

  });

});
