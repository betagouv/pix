const { describe, it, expect } = require('../../test-helper');
const airtable = require('../../../lib/infrastructure/airtable');

describe('Integration | Class | airtable', function() {

  describe('#table', () => {

    it('should return an instance of Airtable client Table object', () => {
      // given

      // when
      const result = airtable.table('Tests');

      // then
      expect(result).to.include({'name': 'Tests'});
    });
  });

});

