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

class User {
  constructor(client) {
    this.client = client;
  }

  get_user_id_from_email(email) {
    this.client.query();
  }
}

/*=================== tests =============================*/

if (process.env.TEST != null) {

  const { describe, it } = require('mocha');
  const { expect } = require('chai');
  const sinon = require('sinon');

  describe('#get_user_id_from_email', () => {
    const email = 'jean.paul@pix.fr';
    const client = { query() {} };

    it('should exists', () => {
      // arrange

      // act
      const userId = get_user_id_from_email(email);
      // assert
      expect(Number.isInteger(userId)).to.be.true;
    });

    it('should call client.query with correct arguments', () => {
      // arrange
      sinon.stub(client, 'query').returns();
      // act
      get_user_id_from_email(email);
      // assert
      sinon.assert.calledOnce(client.query);
    });
  });

} else {
  main();
}
