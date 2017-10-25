const { describe, it, after, beforeEach, afterEach, expect, knex } = require('../../test-helper');
const server = require('../../../server');

describe('Acceptance | Controller | qmail-controller', function() {

  after(function(done) {
    server.stop(done);
  });

  describe('POST /api/qmail', function() {

    const challengeId = 'recLt9uwa2dR3IYpi';
    const assessmentId = '12345';

    const inserted_answer = {
      value: '1,2',
      result: 'pending',
      challengeId,
      assessmentId
    };

    const emailSample = {
      mail:
        {
          attachments: [],
          headers: {},
          text: 'No woman no cry\n',
          textAsHtml: '<p>No woman no cry</p>',
          subject: 'Mail Subject from mail',
          to:
            {
              value: [],
              html: `<span class="mp_address_group"><a href="mailto:${challengeId}-${assessmentId}-0609@pix.beta.gouv.fr" class="mp_address_email">${challengeId}-${assessmentId}-0609@pix.beta.gouv.fr</a></span>`,
              text: `${challengeId}-${assessmentId}-0609@pix.beta.gouv.fr`
            },
          from:
            {
              value: [],
              html: '<span class="mp_address_group"><a href="mailto:test@example.net" class="mp_address_email">test@example.net</a></span>',
              text: 'test@example.net'
            }
        },
      headers:{}
    };

    const options = {
      method: 'POST',
      url: '/api/qmail',
      payload: emailSample
    };

    describe('when the answer exists', () => {
      beforeEach(() => {
        return knex('answers').insert([inserted_answer]);
      });

      afterEach(() => {
        return knex('answers').delete();
      });

      it('should validate an answer', function() {
        // When
        const request = server.injectThen(options);

        // Then
        return request
          .then((response) => {
            expect(response.statusCode).to.equal(200);

            return knex('answers')
              .where('challengeId', challengeId)
              .andWhere('assessmentId', assessmentId)
              .limit(1)
              .select();
          })
          .then(answers => {

            expect(answers).to.have.lengthOf(1);

            const answerThatShouldBeValidated = answers.shift();
            expect(answerThatShouldBeValidated.result).to.equal('ok');
          });
      });
    });

    it('should return 200 even if the answer is not found', function() {
      // When
      const request = server.injectThen(options);

      // Then
      return request.then((response) => {
        expect(response.statusCode).to.equal(200);
      });
    });

  });
});
