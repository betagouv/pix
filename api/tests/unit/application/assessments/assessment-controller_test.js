const { describe, it, sinon, expect, beforeEach, afterEach } = require('../../../test-helper');

const assessmentController = require('../../../../lib/application/assessments/assessment-controller');

const assessmentRepository = require('../../../../lib/infrastructure/repositories/assessment-repository');
const assessmentSerializer = require('../../../../lib/infrastructure/serializers/jsonapi/assessment-serializer');

describe('Unit | Controller | findByFilters', function() {

  let sandbox;

  let codeStub;
  let replyStub;

  const assessments = [{ id: 1 }, { id: 2 }];
  const assessmentsInJSONAPI = [
    {
      id: 1,
      type: 'assessments',
      attributes: { pixScore: 12 }
    }, {
      id: 1,
      type: 'assessments',
      attributes: { pixScore: 12 }
    }];

  beforeEach(() => {
    sandbox = sinon.sandbox.create();

    codeStub = sinon.stub();
    replyStub = sinon.stub().returns({ code: codeStub });
    sandbox.stub(assessmentRepository, 'findByFilters').resolves();
    sandbox.stub(assessmentSerializer, 'serialize').resolves();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('GET assessments with filters', function() {

    const filters = { courseId: 'courseId' };
    const request = { query: { filters: filters } };

    it('should call assessment repository with query filters', function() {
      // when
      const promise = assessmentController.findByFilters(request, replyStub);

      // then
      return promise.then(() => {
        expect(assessmentRepository.findByFilters).to.have.been.called;
        expect(assessmentRepository.findByFilters).to.have.been.calledWith(filters);
      });
    });

    it('should serialize assessment to JSON API', function() {
      // given
      assessmentRepository.findByFilters.resolves(assessments);

      // when
      const promise = assessmentController.findByFilters(request, replyStub);

      // then
      return promise.then(() => {
        expect(assessmentSerializer.serialize).to.have.been.called;
        expect(assessmentSerializer.serialize).to.have.been.calledWith(assessments);
      });
    });

    it('should reply the serialized assessments', function() {
      // given
      assessmentSerializer.serialize.returns(assessmentsInJSONAPI);

      // when
      const promise = assessmentController.findByFilters(request, replyStub);

      // then
      return promise.then(() => {
        expect(replyStub).to.have.been.called;
        expect(replyStub).to.have.been.calledWith(assessmentsInJSONAPI);
      });
    });

  });

});
