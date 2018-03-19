const { expect, knex } = require('../../../test-helper');

const Session = require('../../../../lib/domain/models/Session');
const sessionRepository = require('../../../../lib/infrastructure/repositories/session-repository');

describe('Integration | Repository | Session', function() {

  describe('#save', () => {

    afterEach(() => knex('sessions').delete());

    it('should persist the session in db', () => {
      // given
      const sessionToBeSaved = new Session({
        certificationCenter: 'Université de dressage de loutres',
        address: 'Nice',
        room: '28D',
        examiner: 'Antoine Toutvenant',
        date: '2017-12-08',
        time: '14:30',
        description: 'Premiere certification EVER !!!'
      });

      // when
      const promise = sessionRepository.save(sessionToBeSaved);

      // then
      return promise.then(() => knex('sessions').select())
        .then((sessionSaved) => {
          expect(sessionSaved).to.have.lengthOf(1);
        });
    });

    it('should return the saved Session', () => {
      // given
      const session = new Session({
        certificationCenter: 'Université de dressage de loutres',
        address: 'Nice',
        room: '28D',
        examiner: 'Antoine Toutvenant',
        date: '2017-12-08',
        time: '14:30',
        description: 'Premiere certification EVER !!!'
      });

      // when
      const promise = sessionRepository.save(session);

      // then
      return promise.then(savedSession => {
        expect(savedSession).to.be.an.instanceOf(Session);

        expect(savedSession).to.have.property('id').and.not.null;
        expect(savedSession.certificationCenter).to.equal('Université de dressage de loutres');
      });
    });
  });

  describe('#isSessionCodeAvailable', () => {
    beforeEach(() => knex('sessions').insert({
      certificationCenter: 'Paris',
      address: 'Paris',
      room: 'The lost room',
      examiner: 'Bernard',
      date: '23/02/2018',
      time: '12:00',
      description: 'The lost examen',
      codeStarter: 'ABC123'
    }));

    afterEach(() => knex('sessions').delete());

    it('should return true if the codeStarter is not in database', () => {
      // given
      const newCodeStarter = 'DEF123';

      // when
      const promise = sessionRepository.isSessionCodeAvailable(newCodeStarter);

      // then
      return promise.then((result) => {
        expect(result).to.be.equal(true);
      });
    });

    it('should return false if the codeStarter is in database', () => {
      // given
      const oldCodeStarter = 'ABC123';

      // when
      const promise = sessionRepository.isSessionCodeAvailable(oldCodeStarter);

      // then
      return promise.then((result) => {
        expect(result).to.be.equal(false);
      });

    });
  });

  describe('#getByCodeStarter', () => {
    const session = {
      certificationCenter: 'Paris',
      address: 'Paris',
      room: 'The lost room',
      examiner: 'Bernard',
      date: '23/02/2018',
      time: '12:00',
      description: 'The lost examen',
      codeStarter: 'ABC123'
    };

    beforeEach(() => knex('sessions').insert(session));

    afterEach(() => knex('sessions').delete());

    it('should return the object by codeStarter', () => {
      // given
      const newCodeStarter = 'ABC123';

      // when
      const promise = sessionRepository.getByCodeStarter(newCodeStarter);

      // then
      return promise.then((result) => {
        expect(result.description).to.be.equal(session.description);
        expect(result.codeStarter).to.be.equal(session.codeStarter);
      });
    });

    it('should return null when the codeStarter do not correspond to a session', () => {
      // given
      const oldCodeStarter = 'DEE123';

      // when
      const promise = sessionRepository.getByCodeStarter(oldCodeStarter);

      // then
      return promise.then((result) => {
        expect(result).to.be.equal(null);
      });

    });
  });

});

