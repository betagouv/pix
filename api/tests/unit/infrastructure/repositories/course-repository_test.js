const { describe, it, before, after, beforeEach, afterEach, expect, sinon } = require('../../../test-helper');

const Airtable = require('../../../../lib/infrastructure/airtable');
const cache = require('../../../../lib/infrastructure/cache');
const CourseRepository = require('../../../../lib/infrastructure/repositories/course-repository');
const courseSerializer = require('../../../../lib/infrastructure/serializers/airtable/course-serializer');

describe('Unit | Repository | course-repository', function () {

  let airtableBaseStub;

  beforeEach(function () {
    cache.flushAll();
    airtableBaseStub = sinon.stub(Airtable, 'base');
  });

  afterEach(function () {
    cache.flushAll();
    airtableBaseStub.restore();
  });

  /*
   * #getProgressionTests()
   */

  describe('#getProgressionTests()', function () {

    const cacheKey = 'course-repository_getProgressionTests';
    let err;
    let cachedValue;

    before(function () {
      sinon.stub(cache, 'get', (key, callback) => {
        if (key !== cacheKey) {
          throw new Error(`Wrong cache key (expected ${cacheKey})`);
        }
        callback(err, cachedValue);
      });
    });

    after(function () {
      cache.get.restore();
    });

    it('should reject with an error when the cache throw an error', function () {
      // given
      const cacheErrorMessage = 'Cache error';
      err = new Error(cacheErrorMessage);
      cachedValue = null;

      // when
      const result = CourseRepository.getProgressionTests();

      // then
      return expect(result).to.eventually.be.rejectedWith(cacheErrorMessage);
    });

    it('should resolve with the courses retrieved from the cache without calling the Airtable API when the courses have been previously fetched and cached', function () {
      // given
      err = null;
      cachedValue = [{ course: '1' }, { course: '2' }, { course: '3' }];

      // when
      const result = CourseRepository.getProgressionTests();

      // then
      expect(airtableBaseStub.called).to.be.false;
      return expect(result).to.eventually.deep.equal(cachedValue);
    });

    it('should resolve with the courses fetched from Airtable when the cache entry is empty', function () {
      // given
      err = null;
      cachedValue = null;

      const record_1 = { id: 'course_1' };
      const record_2 = { id: 'course_2' };
      const record_3 = { id: 'course_3' };
      const records = [record_1, record_2, record_3];
      airtableBaseStub.returns({
        select() {
          return {
            eachPage(pageCallback, cb) {
              pageCallback(records, cb);
            }
          };
        }
      });

      // when
      const result = CourseRepository.getProgressionTests();

      // then
      const courses = [
        courseSerializer.deserialize(record_1),
        courseSerializer.deserialize(record_2),
        courseSerializer.deserialize(record_3)
      ];
      return expect(result).to.eventually.deep.equal(courses);
    });

  });

  /*
   * #get(id)
   */

  describe('#get(id)', function () {

    describe('when the course has been previously fetched and cached', function () {

      const courseId = 'courseId';
      const cacheKey = `course-repository_get_${courseId}`;
      const cachedValue = { foo: 'bar' };

      beforeEach(function () {
        // given
        cache.set(cacheKey, cachedValue);
      });

      it('should return the course directly retrieved from the cache', function () {
        // when
        const result = CourseRepository.get(courseId);

        // then
        return expect(result).to.eventually.deep.equal(cachedValue);
      });

      it('should not make call to Airtable', function () {
        // when
        CourseRepository.get(courseId);

        // then
        expect(airtableBaseStub.called).to.be.false;
      });

    });

    describe('when the cache throw an error', function () {

      const cacheErrorMessage = 'Cache error';

      before(function () {
        sinon.stub(cache, 'get', (key, callback) => {
          callback(new Error(cacheErrorMessage));
        });
      });

      after(function () {
        cache.get.restore();
      });

      it('should reject with thrown error', function () {
        // when
        const result = CourseRepository.get('course_id');

        // then
        return expect(result).to.eventually.be.rejectedWith(cacheErrorMessage);
      });

    });

    describe('when the course has not been previously cached', function () {

      const record = { id: 'course_id' };

      beforeEach(function () {
        airtableBaseStub.returns({
          find(id, callback) {
            if (record.id !== id) callback(new Error());
            return callback(null, record);
          }
        });
      });

      it('should return the course fetched from Airtable', function () {
        // given
        const course = courseSerializer.deserialize(record);

        // when
        const result = CourseRepository.get(course.id);

        // then
        return expect(result).to.eventually.deep.equal(course);
      });

      it('should store the course in the cache', function () {
        // given
        const courseId = 'course_id';

        // when
        CourseRepository.get(courseId);

        cache.get(`course-repository_get_${courseId}`, (err, cachedValue) => {
          expect(cachedValue).to.exist;
        });
      });
    });
  });

  /*
   * #refresh(id)
   */

  describe('#refresh(id)', function () {

    const record = {
      id: 'course_id',
      'fields': {
        'Consigne': 'Citez jusqu\'à 3 moteurs de recherche généralistes.',
        'Propositions': '${moteur 1}\n${moteur 2}\n${moteur 3}',
        'Type d\'épreuve': 'QROCM',
        'Bonnes réponses': '${moteur 1} ou ${moteur 2} ou ${moteur 3} = \nGoogle\nBing\nQwant\nDuckduckgo\nYahoo\nYahoo Search\nLycos\nAltavista\nHotbot'
      }
    };

    beforeEach(function () {
      airtableBaseStub.returns({
        find(id, callback) {
          if (record.id !== id) callback(new Error());
          return callback(null, record);
        }
      });
    });

    it('should return the course fetched from Airtable', function () {
      // given
      const course = courseSerializer.deserialize(record);

      // when
      const result = CourseRepository.refresh(course.id);

      // then
      return expect(result).to.eventually.deep.equal(course);
    });

    it('should store the course in the cache', function () {
      // given
      const courseId = 'course_id';

      // when
      CourseRepository.refresh(courseId);

      // then
      cache.get(`course-repository_get_${courseId}`, (err, cachedValue) => {
        expect(cachedValue).to.exist;
      });
    });

    describe('when the cache throw an error', function () {

      const cacheErrorMessage = 'Cache error';

      before(function () {
        sinon.stub(cache, 'del', (key, callback) => {
          callback(new Error(cacheErrorMessage));
        });
      });

      after(function () {
        cache.del.restore();
      });

      it('should reject with thrown error', function () {
        // when
        const result = CourseRepository.refresh('course_id');

        // then
        return expect(result).to.eventually.be.rejectedWith(cacheErrorMessage);
      });

    });

  });

})
;
