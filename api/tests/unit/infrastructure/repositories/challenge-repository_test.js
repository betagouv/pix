const Airtable = require('../../../../lib/infrastructure/airtable');
const cache = require('../../../../lib/infrastructure/cache');
const Challenge = require('../../../../lib/domain/models/referential/challenge');

const ChallengeRepository = require('../../../../lib/infrastructure/repositories/challenge-repository');

describe('Unit | Repository | ChallengeRepository', function () {

  /*
   * #get(id)
   */

  describe('#get(id)', function () {

    describe('when the challenge has been previously fetched and cached', function () {

      let stub;

      before(function () {
        stub = sinon.stub(Airtable, 'base');
      });

      after(function () {
        stub.restore();
      });

      it('should return the challenge directly retrieved from the cache', function () {
        // given
        const challengeId = 'challengeId';
        const cacheKey = `challenge-repository_get_${challengeId}`;
        const cachedValue = { foo: 'bar' };
        cache.set(cacheKey, cachedValue);

        // when
        const result = ChallengeRepository.get(challengeId);

        // then
        return expect(result).to.eventually.deep.equal(cachedValue);
      });

      it('should not make call to Airtable', function () {
        expect(stub.called).to.be.false;
      });

    });

    describe('when the challenge has not been previously cached', function () {

      let record = {
        "id": "challenge_id",
        "fields": {
          "Consigne": "Citez jusqu'à 3 moteurs de recherche généralistes.",
          "Propositions": "${moteur 1}\n${moteur 2}\n${moteur 3}",
          "Type d'épreuve": "QROCM",
          "Bonnes réponses": "${moteur 1} ou ${moteur 2} ou ${moteur 3} = \nGoogle\nBing\nQwant\nDuckduckgo\nYahoo\nYahoo Search\nLycos\nAltavista\nHotbot"
        }
      };

      before(function (done) {
        sinon.stub(Airtable, 'base', function () {
          return {
            find(id, callback) {
              if (record.id !== id) callback(new Error());
              return callback(null, record);
            }
          }
        });
        done();
      });

      after(function (done) {
        Airtable.base.restore();
        done();
      });

      it('should return the challenge fetched from Airtable', function () {
        // given
        const challenge = new Challenge(record);

        // when
        const result = ChallengeRepository.get(challenge.id);

        // then
        return expect(result).to.eventually.deep.equal(challenge);
      });

      it('should store the challenge in the cache', function (done) {
        cache.get(`challenge-repository_get_${record.id}`, (err, cachedValue) => {
          expect(cachedValue).to.exist;
          done();
        });
      });
    });
  });

  /*
   * #get(id)
   */

  describe.only('#list()', function () {

    describe('when the challenges have been previously fetched and cached', function () {

      let stub;

      before(function () {
        stub = sinon.stub(Airtable, 'base');
      });

      after(function () {
        stub.restore();
      });

      it('should return the challenges directly retrieved from the cache', function () {
        // given
        const cacheKey = `challenge-repository_list`;
        const cachedValue = [{ challenge: '1' }, { challenge: '2' }, { challenge: '3' }];
        cache.set(cacheKey, cachedValue);

        // when
        const result = ChallengeRepository.list();

        // then
        return expect(result).to.eventually.deep.equal(cachedValue);
      });

      it('should not make call to Airtable', function () {
        expect(stub.called).to.be.false;
      });

    });

    describe('when the challenges have not been previously cached', function () {

      const record_1 = { "id": "challenge_1" };
      const record_2 = { "id": "challenge_2" };
      const record_3 = { "id": "challenge_3" };
      const records = { "records": [record_1, record_2, record_3] };

      before(function () {
        sinon.stub(Airtable, 'base', function () {
          return {
            select() {
              return {
                eachPage(pageCallback, done) {
                  pageCallback(records);
                  done();
                }
              }
            }
          };
        });
      });

      after(function () {
        Airtable.base.restore();
      });

      it('should return the challenges fetched from Airtable', function () {
        // given
        const challenges = [new Challenge(record_1), new Challenge(record_2), new Challenge(record_3)];

        // when
        const result = ChallengeRepository.list();

        // then
        return expect(result).to.eventually.deep.equal(challenges);
      });

      it('should store the challenge in the cache', function (done) {
        cache.get(`challenge-repository_list`, (err, cachedValue) => {
          expect(cachedValue).to.exist;
          done();
        });
      });
    });

  });

})
;
