'use strict';

/*
 Global variables used int tests.
 */

global.nock = require('nock');
nock.disableNetConnect();

global.sinon = require('sinon');
require('sinon-as-promised');

global.chai = require('chai');
global.expect = chai.expect;

/*
 Setup Test database (generate api/db/test.sqlite3)
 */

const knexConfig = require('../db/knexfile');
global.knex = require('knex')(knexConfig['test']);

global.defineProp = function ( obj, key, value ) {
  var config = {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true
  };
  Object.defineProperty( obj, key, config );
  return obj;
};

