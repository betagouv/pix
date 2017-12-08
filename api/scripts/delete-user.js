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
    // code here....
  }
  finally {
    terminate(client);
    console.log('END');
  }
}

class ScriptUserDelete {
  constructor(client) {
    this.client = client;
  }

  get_user_id_from_email(email) {
    return this.client.query(`SELECT id FROM users WHERE email = '${email}'`);
  }
}

/*=================== tests =============================*/

if (process.env.TEST != null) {

  const { describe, it, afterEach, beforeEach } = require('mocha');
  const { expect } = require('chai');
  const sinon = require('sinon');

  describe('#get_user_id_from_email', () => {
    const email = 'jean.paul@pix.fr';
    const client = { query() {} };
    let subject;

    beforeEach(() => {
      sinon.stub(client, 'query');
      subject = new ScriptUserDelete(client);
    });

    afterEach(() => {
      client.query.restore();
    });

    it('should exists', () => {
      // arrange
      client.query.returns(12);
      // act
      const userId = subject.get_user_id_from_email(email);
      // assert
      expect(Number.isInteger(userId)).to.be.true;
    });

    it('should call client.query with correct arguments', () => {
      // arrange
      const expectedQuery = `SELECT id FROM users WHERE email = '${email}'`;
      // act
      subject.get_user_id_from_email(email);
      // assert
      sinon.assert.calledOnce(client.query);
      sinon.assert.calledWith(client.query, expectedQuery);
    });
  });

} else {
  main();
}
