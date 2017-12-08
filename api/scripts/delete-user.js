const { Client } = require('pg');

function initialize() {
  const client = new Client({
    user: 'pix_production',
    host: 'pg-master.pix-infra.ovh',
    database: 'pix_production',
    password: 'pix_production'
  });

  client.connect();

  return client;
}

function terminate(client) {
  client.end();
}

function main() {
  let client;
  try {
    client = initialize();
    // let queryBuilder = new ScriptQueryBuilder();
    // Promise.resolve()
    //   .then(() => client.query(queryBuilder.get_user_id_from_email(user_email)))
    //   .then(({ rows }) => client.query(queryBuilder.find_assessment_ids_from_user_id(rows[0].id)))
    //   .then(({ rows }) => client.query(queryBuilder.delete_skills_of_assessment_ids(rows[0])))
  }
  finally {
    terminate(client);
    console.log('END');
  }
}

class ScriptQueryBuilder {
  constructor(client) {
    this.client = client;
  }

  get_user_id_from_email(email) {
    return `SELECT id FROM users WHERE email = '${email}'`;
  }

  find_assessment_ids_from_user_id(user_id) {
    return `SELECT id FROM assessments WHERE "userId" = '${user_id}'`;
  }

  delete_skills_of_assessment_ids(assessment_ids) {
    return `DELETE FROM skills WHERE "assessmentId" IN (${assessment_ids.join(',')})`;
  }

  delete_feedbacks_of_assessment_ids(assessment_ids) {
    return `DELETE FROM feedbacks WHERE "assessmentId" IN (${assessment_ids.join(',')})`;
  }

  delete_assessments_of_user_id(user_id) {
    return `DELETE FROM assessments WHERE "userId" = '${user_id}'`;
  }
}

/*=================== tests =============================*/

if (process.env.TEST != null) {

  const { describe, it, beforeEach } = require('mocha');
  const { expect } = require('chai');
  // const sinon = require('sinon');

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

    describe('#delete_feedbacks_of_assessment_ids', () => {
      it('should return the correct query', () => {
        // arrange
        const assessment_ids = [123];
        // act
        const query = subject.delete_feedbacks_of_assessment_ids(assessment_ids);
        // assert
        expect(query).to.equal('DELETE FROM feedbacks WHERE "assessmentId" IN (123)');
      });

      it('should return the correct query with comma as separator when many assessment ids', () => {
        // arrange
        const assessment_ids = [123, 456];
        // act
        const query = subject.delete_feedbacks_of_assessment_ids(assessment_ids);
        // assert
        expect(query).to.equal('DELETE FROM feedbacks WHERE "assessmentId" IN (123,456)');
      });
    });

    describe('#delete_skills_of_assessment_ids', () => {
      it('should return the correct query', () => {
        // arrange
        const assessment_ids = [123];
        // act
        const query = subject.delete_skills_of_assessment_ids(assessment_ids);
        // assert
        expect(query).to.equal('DELETE FROM skills WHERE "assessmentId" IN (123)');
      });

      it('should return the correct query with comma as separator when many assessment ids', () => {
        // arrange
        const assessment_ids = [123, 456];
        // act
        const query = subject.delete_skills_of_assessment_ids(assessment_ids);
        // assert
        expect(query).to.equal('DELETE FROM skills WHERE "assessmentId" IN (123,456)');
      });
    });

    describe('#delete_assessment_ids_from_user_id', () => {
      it('should return the correct query', () => {
        // arrange
        const user_id = 123;
        // act
        const query = subject.delete_assessments_of_user_id(user_id);
        // assert
        expect(query).to.equal(`DELETE FROM assessments WHERE "userId" = '${user_id}'`);
      });
    });
  });

} else {
  main();
}
