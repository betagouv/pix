const { expect } = require('chai');
const sinon = require('sinon');

const { ScriptQueryBuilder, ClientQueryAdapter, UserEraser } = require('../../../scripts/delete-user');

describe('Delete User Script', () => {
  describe('ScriptQueryBuilder', () => {
    let subject;

    beforeEach(() => {
      subject = new ScriptQueryBuilder();
    });

    describe('#get_user_id_from_email', () => {
      it('should return the correct query', () => {
        // arrange
        const email = 'jean.paul@pix.fr';
        // act
        const query = subject.get_user_id_from_email(email);
        // assert
        expect(query).to.equal(`SELECT id FROM users WHERE email = '${email}'`);
      });
    });

    describe('#find_assessment_ids_from_user_id', () => {
      it('should return the correct query', () => {
        // arrange
        const user_id = 123;
        // act
        const query = subject.find_assessment_ids_from_user_id(user_id);
        // assert
        expect(query).to.equal(`SELECT id FROM assessments WHERE "userId" = '${user_id}'`);
      });
    });

    describe('#delete_feedbacks_from_assessment_ids', () => {
      it('should return the correct query', () => {
        // arrange
        const assessment_ids = [123];
        // act
        const query = subject.delete_feedbacks_from_assessment_ids(assessment_ids);
        // assert
        expect(query).to.equal('DELETE FROM feedbacks WHERE "assessmentId" IN (123)');
      });

      it('should return the correct query with comma as separator when many assessment ids', () => {
        // arrange
        const assessment_ids = [123, 456];
        // act
        const query = subject.delete_feedbacks_from_assessment_ids(assessment_ids);
        // assert
        expect(query).to.equal('DELETE FROM feedbacks WHERE "assessmentId" IN (123,456)');
      });

      it('should return neutral query when assessmentIds is an empty array', () => {
        // arrange
        const assessment_ids = [];
        // act
        expect(() => subject.delete_feedbacks_from_assessment_ids(assessment_ids)).to.throw(Error);
      });
    });

    describe('#delete_marks_from_assessment_ids', () => {
      it('should return the correct query', () => {
        // arrange
        const assessment_ids = [123];
        // act
        const query = subject.delete_marks_from_assessment_ids(assessment_ids);
        // assert
        expect(query).to.equal('DELETE FROM marks WHERE "assessmentId" IN (123)');
      });

      it('should return the correct query with comma as separator when many assessment ids', () => {
        // arrange
        const assessment_ids = [123, 456];
        // act
        const query = subject.delete_marks_from_assessment_ids(assessment_ids);
        // assert
        expect(query).to.equal('DELETE FROM marks WHERE "assessmentId" IN (123,456)');
      });

      it('should return neutral query when assessmentIds is an empty array', () => {
        // arrange
        const assessment_ids = [];
        // act
        expect(() => subject.delete_marks_from_assessment_ids(assessment_ids)).to.throw(Error);
      });
    });

    describe('#delete_skills_from_assessment_ids', () => {
      it('should return the correct query', () => {
        // arrange
        const assessment_ids = [123];
        // act
        const query = subject.delete_skills_from_assessment_ids(assessment_ids);
        // assert
        expect(query).to.equal('DELETE FROM skills WHERE "assessmentId" IN (123)');
      });

      it('should return the correct query with comma as separator when many assessment ids', () => {
        // arrange
        const assessment_ids = [123, 456];
        // act
        const query = subject.delete_skills_from_assessment_ids(assessment_ids);
        // assert
        expect(query).to.equal('DELETE FROM skills WHERE "assessmentId" IN (123,456)');
      });

      it('should return neutral query when assessmentIds is an empty array', () => {
        // arrange
        const assessment_ids = [];
        // act
        expect(() => subject.delete_skills_from_assessment_ids(assessment_ids)).to.throw(Error);
        // assert
      });
    });

    describe('#delete_answers_from_assessment_ids', () => {
      it('should return the correct query', () => {
        // arrange
        const assessment_ids = [123];
        // act
        const query = subject.delete_answers_from_assessment_ids(assessment_ids);
        // assert
        expect(query).to.equal('DELETE FROM answers WHERE "assessmentId" IN (123)');
      });

      it('should return the correct query with comma as separator when many assessment ids', () => {
        // arrange
        const assessment_ids = [123, 456];
        // act
        const query = subject.delete_answers_from_assessment_ids(assessment_ids);
        // assert
        expect(query).to.equal('DELETE FROM answers WHERE "assessmentId" IN (123,456)');
      });

      it('should return neutral query when assessmentIds is an empty array', () => {
        // arrange
        const assessment_ids = [];
        // act
        expect(() => subject.delete_answers_from_assessment_ids(assessment_ids)).to.throw(Error);
      });
    });

    describe('#delete_assessment_ids_from_user_id', () => {
      it('should return the correct query', () => {
        // arrange
        const user_id = 123;
        // act
        const query = subject.delete_assessments_from_user_id(user_id);
        // assert
        expect(query).to.equal(`DELETE FROM assessments WHERE "userId" = '${user_id}'`);
      });
    });
    describe('#delete_user_from_user_id', () => {
      it('should return the correct query', () => {
        // arrange
        const user_id = 123;
        // act
        const query = subject.delete_user_from_user_id(user_id);
        // assert
        expect(query).to.equal(`DELETE FROM users WHERE "id" = '${user_id}'`);
      });
    });

  });

  describe('ClientQueryAdapter', () => {
    let subject;

    beforeEach(() => {
      subject = new ClientQueryAdapter();
    });

    describe('#unpack_user_id', () => {
      it('should return the user id from result object', () => {
        // arrange
        const queryResult = {
          rows: [
            { id: 1 }
          ]
        };
        // act
        const result = subject.unpack_user_id(queryResult);
        // assert
        expect(result).to.equal(1);
      });

      it('should throw when result has no rows', () => {
        // arrange
        const queryResult = {
          rows: []
        };
        // act
        expect(() => subject.unpack_user_id(queryResult)).to.throw(Error);
      });
    });

    describe('#unpack_assessment_ids', () => {
      it('should return the assessment ids from result object', () => {
        // arrange
        const queryResult = {
          rows: [
            { id: 1 },
            { id: 2 },
            { id: 3 }
          ]
        };
        // act
        const result = subject.unpack_assessment_ids(queryResult);
        // assert
        expect(result).to.deep.equal([1, 2, 3]);
      });

      it('should return empty array when result has no rows', () => {
        // arrange
        const queryResult = {
          rows: []
        };
        // act
        const result = subject.unpack_assessment_ids(queryResult);
        // assert
        expect(result).to.be.empty;
      });

    });
  });

  describe('UserEraser', () => {
    let subject;
    let queryBuilderMock;
    let clientStub;

    beforeEach(() => {
      const queryBuilder = new ScriptQueryBuilder();
      clientStub = { logged_query: sinon.stub() };

      queryBuilderMock = sinon.mock(queryBuilder);
      subject = new UserEraser(clientStub, queryBuilder);
    });

    describe('#delete_dependent_data_from_fetched_assessment_ids', () => {

      it('should delete feedbacks', () => {
        // arrange
        const ids = [123, 456];
        subject.assessmentIds = ids;

        // assert
        queryBuilderMock.expects('delete_feedbacks_from_assessment_ids').once().withArgs(ids);

        // act
        const promise = subject.delete_dependent_data_from_fetched_assessment_ids();

        // assert
        return promise.then(() => {
          queryBuilderMock.verify();
        });
      });

      it('should delete skills for every assessments', () => {
        // arrange
        const ids = [123, 456];
        subject.assessmentIds = ids;

        // assert
        queryBuilderMock.expects('delete_skills_from_assessment_ids').once().withArgs(ids);

        // act
        const promise = subject.delete_dependent_data_from_fetched_assessment_ids();

        // assert
        return promise.then(() => {
          queryBuilderMock.verify();
        });
      });

      it('should delete answer for every assessments', () => {
        // arrange
        const ids = [123, 456];
        subject.assessmentIds = ids;

        // assert
        queryBuilderMock.expects('delete_answers_from_assessment_ids').once().withArgs(ids);

        // act
        const promise = subject.delete_dependent_data_from_fetched_assessment_ids();

        // assert
        return promise.then(() => {
          queryBuilderMock.verify();
        });
      });

      it('should delete marks_ for every assessments', () => {
        // arrange
        const ids = [123, 456];
        subject.assessmentIds = ids;

        // assert
        queryBuilderMock.expects('delete_marks_from_assessment_ids').once().withArgs(ids);

        // act
        const promise = subject.delete_dependent_data_from_fetched_assessment_ids();

        // assert
        return promise.then(() => {
          queryBuilderMock.verify();
        });
      });

      it('should not try to delete anything when no ids given', () => {
        // arrange
        const ids = [];
        subject.assessmentIds = ids;

        // assert
        queryBuilderMock.expects('delete_feedbacks_from_assessment_ids').never();
        queryBuilderMock.expects('delete_skills_from_assessment_ids').never();
        queryBuilderMock.expects('delete_answers_from_assessment_ids').never();
        queryBuilderMock.expects('delete_marks_from_assessment_ids').never();

        // act
        const promise = subject.delete_dependent_data_from_fetched_assessment_ids();

        // assert
        return promise.then(() => {
          queryBuilderMock.verify();
        });
      });

      it('should execute every query', () => {
        // arrange
        const ids = [123, 456];
        subject.assessmentIds = ids;

        // act
        const promise = subject.delete_dependent_data_from_fetched_assessment_ids();

        // assert
        return promise.then(() => {
          sinon.assert.callCount(clientStub.logged_query, 4);
        });
      });
    });
  });
});
