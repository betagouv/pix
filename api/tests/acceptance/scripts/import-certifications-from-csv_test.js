const { expect } = require('chai');
const script = require('../../../scripts/import-certifications-from-csv');

describe('Acceptance | Scripts | import-certifications-from-csv.js', () => {

  describe('#assertFileValidity', () => {

    it('should throw an error when file does not exist', () => {
      // given
      const filePath = 'inexistant.file';

      try {
        // when
        script.assertFileValidity(filePath);

        // then
        expect.fail('Expected error to have been thrown');
      } catch (err) {
        expect(err.message).to.equal('File not found inexistant.file');
      }
    });

    it('should throw an error when file extension is not ".csv"', () => {
      // given
      const filePath = `${__dirname}/file_with_bad_extension.html`;

      try {
        // when
        script.assertFileValidity(filePath);

        // then
        expect.fail('Expected error to have been thrown');
      } catch (err) {
        expect(err.message).to.equal('File extension not supported .html');
      }
    });

    it('should return true if file is valid', () => {
      // given
      const filePath = `${__dirname}/valid-certifications-test-file.csv`;

      // when
      const result = script.assertFileValidity(filePath);

      // then
      expect(result).to.be.true;
    });
  });

  describe('#convertDataRowsIntoCertifications', () => {

    it('should return an array of certifications (JSON) object', () => {
      // given
      const csvParsingResult = {
        data: [{
          'ID de certification': '1',
          'ID de session de certification': '1000',
          'Prénom du candidat': 'Tony',
          'Nom du candidat': 'Stark',
          'Date de naissance du candidat': '29/05/1970',
          'Lieu de naissance du candidat': 'Long Island, New York',
          'Statut de la certification': 'Validé',
          'Motif de rejet de la certification': '',
        }, {
          'ID de certification': '2',
          'ID de session de certification': '1000',
          'Prénom du candidat': 'Steven',
          'Nom du candidat': 'Rogers',
          'Date de naissance du candidat': '04/07/1918',
          'Lieu de naissance du candidat': 'New York, New York',
          'Statut de la certification': 'Refusé',
          'Motif de rejet de la certification': 'Trop chétif',
        }, {
          'ID de certification': '3',
          'ID de session de certification': '1000',
          'Prénom du candidat': 'James',
          'Nom du candidat': 'Howlett',
          'Date de naissance du candidat': '17/04/1882',
          'Lieu de naissance du candidat': 'Alberta',
          'Statut de la certification': 'Undefined',
          'Motif de rejet de la certification': '',
        }]
      };

      // when
      const certifications = script.convertDataRowsIntoCertifications(csvParsingResult);

      // then
      const expectedCertifications = [{
        id: 1,
        firstName: 'Tony',
        lastName: 'Stark',
        birthdate: '29/05/1970',
        birthplace: 'Long Island, New York',
        status: 'validated',
        rejectionReason: ''
      }, {
        id: 2,
        firstName: 'Steven',
        lastName: 'Rogers',
        birthdate: '04/07/1918',
        birthplace: 'New York, New York',
        status: 'rejected',
        rejectionReason: 'Trop chétif'
      }, {
        id: 3,
        firstName: 'James',
        lastName: 'Howlett',
        birthdate: '17/04/1882',
        birthplace: 'Alberta',
        status: 'undefined',
        rejectionReason: ''
      }];
      expect(certifications).to.deep.equal(expectedCertifications);
    });
  });

  describe('#createAndStoreCertifications', () => {

    it('should ', () => {
      // given
      const options = {
        baseUrl: 'http://localhost:3000',
        accessToken: 'jwt.access.token',
        certifications: [{
          id: 1,
          firstName: 'Tony',
          lastName: 'Stark',
          birthdate: '29/05/1970',
          birthplace: 'Long Island, New York',
          status: 'validated',
          rejectionReason: ''
        }, {
          id: 2,
          firstName: 'Steven',
          lastName: 'Rogers',
          birthdate: '04/07/1918',
          birthplace: 'New York, New York',
          status: 'rejected',
          rejectionReason: 'Trop chétif'
        }, {
          id: 3,
          firstName: 'James',
          lastName: 'Howlett',
          birthdate: '17/04/1882',
          birthplace: 'Alberta',
          status: 'undefined',
          rejectionReason: ''
        }]
      };

      // when
      const report = script.createAndStoreCertifications(options);

      // then
      expect(report).to.be.not.null;
    });
  });

});
