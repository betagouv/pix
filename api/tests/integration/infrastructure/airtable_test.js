const Airtable = require('airtable');
const hash = require('object-hash');
const { expect, sinon } = require('../../test-helper');
const cache = require('../../../lib/infrastructure/cache');
let airtable;

describe('Integration | Class | airtable', function() {

  let findStub = sinon.stub();
  let allStub = sinon.stub();

  before(() => {
    Airtable.prototype.init = () => {
    };
    Airtable.prototype.base = () => {
      return {
        table() {
          return {
            find: findStub,

            select() {
              return {
                all: allStub
              };
            },
          };
        }
      };
    };

    // initialized here because we stub Airtable client
    airtable = require('../../../lib/infrastructure/airtable');
  });

  beforeEach(() => {
    cache.flushAll();
  });

  afterEach(() => {
    cache.flushAll();
  });

  describe('#getRecord', () => {

    const tableName = 'Tests';
    const recordId = 'recNPB7dTNt5krlMA';
    const cacheKey = 'Tests_recNPB7dTNt5krlMA';
    const airtableRecord = { foo: 'bar' };

    context('when the response was previously cached', () => {

      it('should resolve with cached value', () => {
        // given
        cache.set(cacheKey, airtableRecord);

        // when
        const promise = airtable.getRecord(tableName, recordId);

        // then
        return promise.then(record => {
          expect(record).to.deep.equal(airtableRecord);
          expect(findStub).to.have.not.been.called;
        });
      });
    });

    context('when the response was not previously cached', () => {

      it('should resolve Airtable fetched record and store it in cache', () => {
        // given
        findStub.resolves(airtableRecord);

        // when
        const promise = airtable.getRecord(tableName, recordId);

        // then
        return promise.then(record => {
          expect(record).to.deep.equal(airtableRecord);
          expect(cache.get(cacheKey)).to.deep.equal(airtableRecord);
        });
      });
    });

  });

  describe('#findRecords', () => {

    const tableName = 'Tests';
    const query = { view: 'View name' };
    const cacheKey = `Tests_${hash(query)}`;
    const airtableRecords = { foo: 'bar' };

    context('when the response was previously cached', () => {

      it('should resolve with cached value', () => {
        // given
        cache.set(cacheKey, airtableRecords);

        // when
        const promise = airtable.findRecords(tableName, query);

        // then
        return promise.then(record => {
          expect(record).to.deep.equal(airtableRecords);
          expect(allStub).to.have.not.been.called;
        });
      });
    });

    context('when the response was not previously cached', () => {

      it('should resolve Airtable fetched record and store it in cache', () => {
        // given
        allStub.resolves(airtableRecords);

        // when
        const promise = airtable.findRecords(tableName, query);

        // then
        return promise.then(record => {
          expect(record).to.deep.equal(airtableRecords);
          expect(cache.get(cacheKey)).to.deep.equal(airtableRecords);
        });
      });
    });
  });

});

