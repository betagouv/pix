const {describe, it, beforeEach, afterEach, expect, sinon} = require('../../../test-helper');
const airtable = require('../../../../lib/infrastructure/airtable');
const cache = require('../../../../lib/infrastructure/cache');

const competenceRepository = require('../../../../lib/infrastructure/repositories/competence-repository');
const competenceSerializer = require('../../../../lib/infrastructure/serializers/airtable/competence-serializer');

describe('Unit | Repository | competence-repository', function() {

  let getRecordsStub;
  const cacheKey = 'competence-repository_list';
  const competenceRecords = [
    {
      id: 'recsvLDFHShyfDXXXXX',
      name: '1.1 Mener une recherche d’information',
      areaId: 'recvoGdo0z0z0pXWZ'
    },
    {
      id: 'recsvLDFHShyfDXXXXX',
      name: '1.1 Mener une recherche d’information',
      areaId: 'recvoGdo0z0z0pXWZ'
    }];

  beforeEach(function() {
    cache.flushAll();
    getRecordsStub = sinon.stub(airtable, 'getRecords');
  });

  afterEach(function() {
    cache.flushAll();
    getRecordsStub.restore();
  });

  describe('#List', () => {

    it('should be a method', function() {
      // then
      expect(competenceRepository.list).to.be.a('function');
    });

    it('should correctly query Airtable', () => {
      // Given
      getRecordsStub.resolves({});
      // When
      const competencesPromise = competenceRepository.list();
      // Then
      return competencesPromise.then(() => {
        expect(getRecordsStub.calledWith('Competences', {}, competenceSerializer)).to.be.true;
      });
    });

    describe('When record has not been cached', () => {

      beforeEach(() => {
        getRecordsStub.resolves(competenceRecords);
      });

      it('should fetch Competences from Airtable', () => {
        // When
        const competencesPromise = competenceRepository.list();
        // Then
        return competencesPromise.then((competencesFetched) => {
          expect(competencesFetched).to.be.equal(competenceRecords);
        });
      });

      it('should cached previously fetched Competences', () => {
        // When
        const competencesPromise = competenceRepository.list();
        // Then
        return competencesPromise.then((competencesFetched) => {
          cache.get('competence-repository_list', (err, list) => {
            expect(list).to.be.deep.equal(competencesFetched);
          });
        });
      });

    });

    describe('When record have been cached', () => {

      it('should retrieve records directly from cache', () => {
        // Given
        const cacheStub = sinon.stub(cache, 'get');
        cacheStub.callsArgWith(1, null, competenceRecords);
        getRecordsStub.resolves(true);
        // When
        const promise = competenceRepository.list();

        return promise.then((competencesFetched) => {
          // Then
          expect(competencesFetched).to.be.equal(competenceRecords);
          sinon.assert.calledOnce(cacheStub);
          sinon.assert.calledWith(cacheStub, cacheKey);
          cacheStub.restore();
        });
      });
    });

    describe('Error occured cases: ', () => {

      it('should throw an error, when something going wrong from cache', () => {
        // Given
        const cacheStub = sinon.stub(cache, 'get');
        cacheStub.callsArgWith(1, new Error('Error on cache recuperation'));

        // When
        const cachedPromise = competenceRepository.list();

        return cachedPromise.catch((err) => {
          // Then
          expect(cachedPromise).to.be.rejectedWith(Error);
          expect(err.message).to.be.equal('Error on cache recuperation');
          cacheStub.restore();
        });

      });

      it('should throw an error, when something going wrong from airtable', () => {
        // Given
        const cacheStub = sinon.stub(cache, 'get');
        cacheStub.callsArgWith(1, null, null);

        getRecordsStub.rejects(new Error('Error on Airtable recuperation'));

        // When
        const cachedPromise = competenceRepository.list();

        return cachedPromise.catch((err) => {
          // Then
          expect(cachedPromise).to.be.rejectedWith(Error);
          expect(err.message).to.be.equal('Error on Airtable recuperation');
          cacheStub.restore();
        });
      });

    });
  });
})
;
