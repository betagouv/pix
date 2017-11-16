const { describe, it, before, expect, sinon } = require('../../../test-helper');
const Hapi = require('hapi');
const CertificationCourseController = require('../../../../lib/application/certificationCourses/certification-course-controller');
const CertificationCourseRepository = require('../../../../lib/infrastructure/repositories/certification-course-repository');
const AssessmentRepository = require('../../../../lib/infrastructure/repositories/assessment-repository');
const CertificationCourseSerializer = require('../../../../lib/infrastructure/serializers/jsonapi/certification-course-serializer');
const UserService = require('../../../../lib/domain/services/user-service');
const CertificationCourseService = require ('../../../../lib/domain/services/certification-course-service');

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
  const certificationCourse = { id: 'CertificationCourseId' };
  const userProfile = [{id: 'competence1', challenges: []}];
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
      sandbox.stub(CertificationCourseRepository, 'save').resolves(certificationCourse);
      sandbox.stub(UserService, 'getCertificationProfile').resolves(userProfile);
      sandbox.stub(CertificationCourseService, 'saveChallenges').resolves({});
      sandbox.stub(CertificationCourseSerializer, 'serialize').resolves({});

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

    it('should call user Service to get User Certification Profile', function() {
      // when
      const promise = CertificationCourseController.save(request, replyStub);

      // then
      return promise.then(() => {
        sinon.assert.calledOnce(UserService.getCertificationProfile);
      })
    });

    it('should call Certification Course Service to save challenges', function() {
      // when
      const promise = CertificationCourseController.save(request, replyStub);

      // then
      return promise.then(() => {
        sinon.assert.calledOnce(CertificationCourseService.saveChallenges);
        sinon.assert.calledWith(CertificationCourseService.saveChallenges, userProfile, certificationCourse);
      })
    });

    it('should reply the certification course serialized', function() {
      // given
      const savedAssessment = { id: 'assessmentId', courseId: 'CertificationCourseId' };
      AssessmentRepository.save.resolves(savedAssessment);

      // when
      const promise = CertificationCourseController.save(request, replyStub);

      // then
      return promise.then(() => {
        sinon.assert.calledOnce(CertificationCourseSerializer.serialize);
        sinon.assert.calledWith(CertificationCourseSerializer.serialize, {id: 'CertificationCourseId'})
        sinon.assert.calledOnce(replyStub);
        sinon.assert.calledOnce(codeStub);
        sinon.assert.calledWith(codeStub, 201);
      })
    });

  });

});
