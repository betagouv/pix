import { afterEach, beforeEach, describe, it } from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

describe('Acceptance | o1 - board organization', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  function seedDatabase() {
    server.create('organization', {
      id: 1,
      name: 'LexCorp',
      email: 'lex@lexcorp.com',
      type: 'PRO',
      code: 'ABCD66'
    });
  }

  it('can visit /board', async function() {
    // given
    seedDatabase();

    // when
    await visit('/board');

    // then
    return andThen(() => {
      expect(currentURL()).to.equal('/board');
    });
  });

});
