#! /usr/bin/env node
/* eslint no-console: ["off"] */
const { Client } = require('pg');

function initialize() {
  const client = new Client(process.env.DATABASE_URL);
  client.connect();

  client.logged_query = function(query) {
    console.log(`query: ${query}`);
    return this.query(query)
      .then((result) => {
        const { command, rowCount, rows } = result;
        console.log(`result: command ${command} (rowCount ${rowCount}) = ${JSON.stringify(rows)}`);
        return result;
      });
  };
  const user_email = process.argv[2];
  return { client, user_email };
}

function terminate(client) {
  client.end();
  console.log('END');
}

function main() {
  const { client, user_email } = initialize();
  const queryBuilder = new ScriptQueryBuilder();
  const clientQueryAdapter = new ClientQueryAdapter();

  let userId;

  Promise.resolve()
    .then(() => client.logged_query('BEGIN'))
    .then(() => queryBuilder.get_user_id_from_email(user_email))
    .then((query) => client.logged_query(query))
    .then((result) => userId = clientQueryAdapter.unpack_user_id(result))
    .then((userId) => queryBuilder.find_assessment_ids_from_user_id(userId))
    .then((query) => client.logged_query(query))
    .then((result) => clientQueryAdapter.unpack_assessment_ids(result))
    .then((assessmentIds) => [
      queryBuilder.delete_feedbacks_from_assessment_ids(assessmentIds),
      queryBuilder.delete_skills_from_assessment_ids(assessmentIds),
      queryBuilder.delete_answers_from_assessment_ids(assessmentIds)
    ])
    .then((queries) => Promise.all(
      queries.map((query) => client.logged_query(query))
    ))
    .then(() => queryBuilder.delete_assessments_from_user_id(userId))
    .then((query) => client.logged_query(query))
    .then(() => queryBuilder.delete_user_from_user_id(userId))
    .then((query) => client.logged_query(query))
    .then(() => client.logged_query('COMMIT'))
    .then(() => console.log('FINISHED'))
    .catch((err) => {
      console.log(`ERROR: ${err}\nRollback...`);
      return client.logged_query('ROLLBACK')
        .then(() => console.log('Rollback finished'));
    })
    // finally
    .then(() => terminate(client))
    .catch(() => terminate(client));
}

class ClientQueryAdapter {

  unpack_user_id(result) {
    return result.rows[0].id;
  }

  unpack_assessment_ids(result) {
    return result.rows.map(({ id }) => id);
  }
}

class ScriptQueryBuilder {
  get_user_id_from_email(email) {
    return `SELECT id FROM users WHERE email = '${email}'`;
  }

  find_assessment_ids_from_user_id(user_id) {
    return `SELECT id FROM assessments WHERE "userId" = '${user_id}'`;
  }

  delete_skills_from_assessment_ids(assessment_ids) {
    if(assessment_ids.length === 0) {
      return 'SELECT 1';
    }
    return `DELETE FROM skills WHERE "assessmentId" IN (${assessment_ids.join(',')})`;
  }

  delete_answers_from_assessment_ids(assessment_ids) {
    if (assessment_ids.length === 0) {
      return 'SELECT 1';
    }
    return `DELETE FROM answers WHERE "assessmentId" IN (${assessment_ids.join(',')})`;
  }

  delete_feedbacks_from_assessment_ids(assessment_ids) {
    if (assessment_ids.length === 0) {
      return 'SELECT 1';
    }
    return `DELETE FROM feedbacks WHERE "assessmentId" IN (${assessment_ids.join(',')})`;
  }

  delete_assessments_from_user_id(user_id) {
    return `DELETE FROM assessments WHERE "userId" = '${user_id}'`;
  }

  delete_user_from_user_id(user_id) {
    return `DELETE FROM users WHERE "id" = '${user_id}'`;
  }
}

/*=================== tests =============================*/

if (!process.env.TEST) {
  main();
} else {
  const { describe, it, beforeEach } = require('mocha');
  const { expect } = require('chai');

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
        const query = subject.delete_feedbacks_from_assessment_ids(assessment_ids);
        // assert
        expect(query).to.equal('SELECT 1');
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
        const query = subject.delete_skills_from_assessment_ids(assessment_ids);
        // assert
        expect(query).to.equal('SELECT 1');
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
        const query = subject.delete_answers_from_assessment_ids(assessment_ids);
        // assert
        expect(query).to.equal('SELECT 1');
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
        const queryResult = { rows: [
          { id: 1 }
        ] };
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
    });
  });
}
