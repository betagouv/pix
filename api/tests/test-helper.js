// Chai
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

// Sinon
const sinon = require('sinon');
chai.use(require('sinon-chai'));

// Knex
const knexConfig = require('../db/knexfile');
const knex = require('knex')(knexConfig['test']);

// Nock
const nock = require('nock');
nock.disableNetConnect();

// Security
const tokenService = require('../lib/domain/services/token-service');

/**
 * @returns string
 */
function generateValidRequestAuhorizationHeader(userId = undefined) {
  const user = {
    get(prop) {
      if (prop === 'id') {
        return userId ? userId : 1234;
      }
    }
  };
  const accessToken = tokenService.createTokenFromUser(user);
  return `Bearer ${accessToken}`;
}

module.exports = {
  expect,
  sinon,
  knex,
  nock,
  generateValidRequestAuhorizationHeader,
};
