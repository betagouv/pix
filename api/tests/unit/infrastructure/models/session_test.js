const { describe, it, expect, sinon, beforeEach } = require('../../../test-helper');

const BookshelfSession = require('../../../../lib/infrastructure/data/session');

describe('Unit | Infrastructure | Models | BookshelfSession', () => {

  describe('validation', () => {

    let rawData;

    beforeEach(() => {
      rawData = {
        certificationCenter: 'Univeristé Sophia Anti-polis',
        address: 'Nice',
        examiner: 'Babar',
        room: '007',
        date: '01/04/2017',
        time: '22:32',
        description: ''
      };
    });

    it('should fail when the certificationCenter is empty', () => {
      // Given
      rawData.certificationCenter = '';
      const session = new BookshelfSession(rawData);

      // When
      const promise = session.save();

      // Then
      return promise
        .catch((err) => {
          const certificationCenterError = err.data['certificationCenter'];
          expect(certificationCenterError).to.exist;

          expect(certificationCenterError).to.deep.equal(['Vous n\'avez pas renseignez de centre de certification.']);
        });
    });

    it('should fail when the address is empty', () => {
      // Given
      rawData.address = '';
      const session = new BookshelfSession(rawData);

      // When
      const promise = session.save();

      // Then
      return promise
        .then(() => {
          sinon.assert.fail();
        })
        .catch((err) => {
          const certificationCenterError = err.data['address'];
          expect(certificationCenterError).to.exist;

          expect(certificationCenterError).to.deep.equal(['Vous n\'avez pas renseignez d\'adresse.']);
        });
    });

    it('should fail when the examiner is empty', () => {
      // Given
      rawData.examiner= '';
      const session = new BookshelfSession(rawData);

      // When
      const promise = session.save();

      // Then
      return promise
        .then(() => {
          sinon.assert.fail();
        })
        .catch((err) => {
          const certificationCenterError = err.data['examiner'];
          expect(certificationCenterError).to.exist;

          expect(certificationCenterError).to.deep.equal(['Vous n\'avez pas renseignez d\'examinateur.']);
        });
    });

    it('should fail when the room is empty', () => {
      // Given
      rawData.room = '';
      const session = new BookshelfSession(rawData);

      // When
      const promise = session.save();

      // Then
      return promise
        .then(() => {
          sinon.assert.fail();
        })
        .catch((err) => {
          const certificationCenterError = err.data['room'];
          expect(certificationCenterError).to.exist;

          expect(certificationCenterError).to.deep.equal(['Vous n\'avez pas renseignez de salle.']);
        });
    });

    it('should fail when the date is empty', () => {
      // Given
      rawData.date = '';
      const session = new BookshelfSession(rawData);

      // When
      const promise = session.save();

      // Then
      return promise
        .then(() => {
          sinon.assert.fail();
        })
        .catch((err) => {
          const certificationCenterError = err.data['date'];
          expect(certificationCenterError).to.exist;

          expect(certificationCenterError).to.deep.equal(['Vous n\'avez pas renseignez de date de session.']);
        });
    });

    it('should fail when the time is empty', () => {
      // Given
      rawData.time = '';
      const session = new BookshelfSession(rawData);

      // When
      const promise = session.save();

      // Then
      return promise
        .then(() => {
          sinon.assert.fail();
        })
        .catch((err) => {
          const certificationCenterError = err.data['time'];
          expect(certificationCenterError).to.exist;

          expect(certificationCenterError).to.deep.equal(['Vous n\'avez pas renseignez d\'heure de session.']);
        });
    });

  });

});
