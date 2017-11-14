const { describe, it, before, expect, sinon } = require('../../../test-helper');
const Hapi = require('hapi');
const CertificationCourseController = require('../../../../lib/application/certificationCourses/certification-course-controller');
const CertificationCourseRepository = require('../../../../lib/infrastructure/repositories/certification-course-repository');
const AssessmentRepository = require('../../../../lib/infrastructure/repositories/assessment-repository');

describe('Unit | Controller | certification-course-controller', function() {

  let server;
  let sandbox;
  let replyStub;
  let codeStub;
  const request = {
    pre: {
      userId: 'userId'
    }
  };
  before(function() {
    server = this.server = new Hapi.Server();
    server.connection({ port: null });
    server.register({ register: require('../../../../lib/application/certificationCourses') });
  });

  describe('#save', function() {

    beforeEach(() => {
      codeStub = sinon.stub();
      replyStub = sinon.stub().returns({ code: codeStub });

      sandbox = sinon.sandbox.create();
      sandbox.stub(AssessmentRepository, 'save');
      sandbox.stub(CertificationCourseRepository, 'save').resolves({ id: 'CertificationCourseId' });
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should call repository to create certification-course', function() {
      // when
      const promise = CertificationCourseController.save(request, replyStub);

      // then
      return promise.then(() => {
        sinon.assert.calledOnce(CertificationCourseRepository.save);
      })
    });

    it('should call repository to create assessment for certification-course with correct assessment', function() {
      // when
      const promise = CertificationCourseController.save(request, replyStub);

      // then
      return promise.then(() => {
        sinon.assert.calledOnce(AssessmentRepository.save);
        sinon.assert.calledWith(AssessmentRepository.save, {
          type: 'CERTIFICATION',
          courseId: 'CertificationCourseId',
          userId: 'userId'
        });
      })

    });

    it('should reply the certification-course id and assessment id', function() {
      // given
      const savedAssessment = { id: 'assessmentId', courseId: 'CertificationCourseId' };
      AssessmentRepository.save.resolves(savedAssessment);

      // when
      const promise = CertificationCourseController.save(request, replyStub);

      // then
      return promise.then(() => {
        sinon.assert.calledOnce(replyStub);
        sinon.assert.calledWith(replyStub, { id: 'assessmentId', courseId: 'CertificationCourseId' });
        sinon.assert.calledOnce(codeStub);
        sinon.assert.calledWith(codeStub, 201);
      })
    });

  });

});
