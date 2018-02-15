const { expect, sinon } = require('../../../test-helper');
const Organization = require('../../../../lib/domain/models/Organization');

const organizationService = require('../../../../lib/domain/services/organization-service');

describe('Unit | Service | OrganizationService', () => {

  describe('#generateOrganizationCode', () => {

    it('should exist', () => {
      expect(organizationService.generateOrganizationCode).to.exist.and.to.be.a('function');
    });

    it('should generate a code', () => {
      // When
      const code = organizationService.generateOrganizationCode();

      // Then
      expect(code).to.match(/[A-Z]{4}\d{2}/);
    });
  });

  describe('#getOrganizationSharedProfilesAsCsv', () => {

    const organization = new Organization({id: 123, type: 'PRO'});

    let dependencies = {
      organizationRepository: { get: sinon.stub().resolves(organization) },
      snapshotRepository: { getSnapshotsByOrganizationId: sinon.stub().resolves() },
      bookshelfUtils: { mergeModelWithRelationship: sinon.stub().resolves([]) },
      snapshotsCsvConverter: { convertJsonToCsv: sinon.stub().returns() }
    };

    let promise;

    beforeEach(() => {
      promise = organizationService.getOrganizationSharedProfilesAsCsv(dependencies, 123);
    });

    it('should fetch the organization', () => {
      return promise.then(() => {
        expect(dependencies.organizationRepository.get).to.have.been.calledWith(organization.id);
      });
    });

    it('should fetch the shared profiles to the organization', () => {
      return promise.then(() => {
        expect(dependencies.snapshotRepository.getSnapshotsByOrganizationId).to.have.been.calledWith(123);
      });
    });

    it('should load the user of each shared profiles', () => {
      return promise.then(() => {
        expect(dependencies.bookshelfUtils.mergeModelWithRelationship).to.have.been.called;
      });
    });

    it('should convert the profiles into CSV format', () => {
      return promise.then(() => {
        expect(dependencies.snapshotsCsvConverter.convertJsonToCsv).to.have.been.called;
      });
    });

  });

});
