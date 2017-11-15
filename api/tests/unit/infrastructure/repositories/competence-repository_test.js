const { describe, it, beforeEach, afterEach, expect, sinon } = require('../../../test-helper');
const airtable = require('../../../../lib/infrastructure/airtable');
const cache = require('../../../../lib/infrastructure/cache');

const competenceRepository = require('../../../../lib/infrastructure/repositories/competence-repository');

describe('Unit | Repository | competence-repository', function() {

  const competenceRecords = [{
    id: 'recsvLDFHShyfDXXXXX',
    name: '1.1 Mener une recherche d’information',
    areaId: 'recvoGdo0z0z0pXWZ',
    courseId: 'Test de positionnement 1.1'
  },
    {
      id: 'recsvLDFHShyfDXXXXX',
      name: '1.1 Mener une recherche d’information',
      areaId: 'recvoGdo0z0z0pXWZ',
      courseId: 'Test de positionnement 1.2'
    }];

  beforeEach(() => {
    sinon.stub(cache, 'get');
    sinon.stub(cache, 'set');
    sinon.stub(airtable, 'getRecords');
  });

  afterEach(() => {
    cache.get.restore();
    cache.set.restore();
    airtable.getRecords.restore();
  });

  describe('#List', () => {

    context('when record has not been cached', () => {

      beforeEach(() => {
        cache.get.returns();
        cache.set.returns();
      });

      it('should fetch Competences from Airtable', () => {
        // given
        airtable.getRecords.resolves(competenceRecords);

        // when
        const promise = competenceRepository.list();

        // then
        return promise.then((competencesFetched) => {
          expect(competencesFetched).to.deep.equal(competenceRecords);
        });
      });

      it('should set in cache the fetched Competences', () => {
        // given
        airtable.getRecords.resolves(competenceRecords);

        // when
        const promise = competenceRepository.list();

        // then
        return promise.then(() => {
          expect(cache.set).to.have.been.calledWith('competence-repository_list', competenceRecords);
        });
      });

      it('should throw an error when Airtable call fails', (done) => {
        // given
        airtable.getRecords.rejects(new Error('some error'));

        // when
        const promise = competenceRepository.list();

        // then
        promise.catch(err => {
          expect(err).to.exist;
          done();
        });
      });

    });

    context('when record have been cached', () => {

      it('should retrieve records directly from the cache', () => {
        // given
        cache.get.returns(competenceRecords);

        // when
        const promise = competenceRepository.list();

        return promise.then((competencesFetched) => {
          // then
          expect(competencesFetched).to.equal(competenceRecords);
          expect(cache.get).to.have.been.calledWith('competence-repository_list');
        });
      });

    });

  });
})
;
