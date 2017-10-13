const { describe, it, expect, sinon, beforeEach, afterEach } = require('../../../test-helper');
const qmailValidationService = require('../../../../lib/domain/services/qmail-validation-service');

describe.only('Unit | Service | QMail Validation', function() {

  describe('#validateEmail', () => {

    const challengeId = 'recigAYl5bl96WGXj';
    const assessmentId = 28672;
    const emailSample = {
      mail:
        {
          attachments: [],
          headers: {},
          text: 'Ouverture du bar le 12 Octobre 2017. Soyez là :)\n',
          textAsHtml: '<p>Ouverture du bar le 12 Octobre 2017. Soyez là :)</p>',
          subject: 'Invitation - Ouverture du bar commun ',
          date: '2017-10-10T15:17:36.000Z',
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
            },
          messageId: '<561863.073703961-sendEmail@octo-asa>',
          html: false
        },
      headers:
        {
          'message-id': '<561863.073703961-sendEmail@octo-asa>',
          from:
            {
              value: [],
              html: '<span class="mp_address_group"><a href="mailto:test@example.net" class="mp_address_email">test@example.net</a></span>',
              text: 'test@example.net'
            },
          to:
            {
              value: [],
              html: `<span class="mp_address_group"><a href="mailto:${challengeId}-${assessmentId}-0609@pix.beta.gouv.fr" class="mp_address_email">${challengeId}-${assessmentId}-0609@pix.beta.gouv.fr</a></span>`,
              text: `${challengeId}-${assessmentId}-0609@pix.beta.gouv.fr`
            },
          subject: 'Invitation - Ouverture du bar commun ',
          date: '2017-10-10T15:17:36.000Z',
          'x-mailer': 'sendEmail-1.56',
          'mime-version': '1.0',
          'content-type': { value: 'multipart/related', params: [] }
        }
    };


    it('should exists', () => {
      expect(qmailValidationService).to.have.property('validateEmail')
        .and.to.be.a('function');
    });

    it('should validate the email when having no rules', () => {
      // When
      const isEmailValid = qmailValidationService.validateEmail(emailSample, '');

      // Then
      expect(isEmailValid).to.be.true;
    });

    it('should invalid the email when the subject is not good', () => {
      // Given
      const rulesInYaml = '--- \n' +
        'ET: \n' +
        '  SUJET: \n' +
        '    EST: "recette de grand mère"\n';

      // When
      const isEmailValid = qmailValidationService.validateEmail(emailSample, rulesInYaml);

      // Then
      expect(isEmailValid).to.equal(false);
    });

    it('should valid the email when both rules are validated', () => {
      // Given
      const rulesInYaml = '--- \n' +
        'ET: \n' +
        '  SUJET: \n' +
        '    CONTIENT: "Invitation"\n' +
        '  CORPS: \n' +
        '    CONTIENT: "Octobre"\n';

      // When
      const isEmailValid = qmailValidationService.validateEmail(emailSample, rulesInYaml);

      // Then
      expect(isEmailValid).to.equal(true);
    });

    it('should work with AND if the ET is missing', () => {
      // Given
      const rulesInYaml = '--- \n' +
        'SUJET: \n' +
        '  CONTIENT: "Invitation"\n' +
        'CORPS: \n' +
        '  CONTIENT: "Octobre"\n';

      // When
      const isEmailValid = qmailValidationService.validateEmail(emailSample, rulesInYaml);

      // Then
      expect(isEmailValid).to.equal(true);
    });

    it('should valid the email when both rules are validated', () => {
      // Given
      const rulesInYaml = '--- \n' +
        'OU: \n' +
        '  SUJET: \n' +
        '    CONTIENT: "Poisson"\n' +
        '  CORPS: \n' +
        '    CONTIENT: "Octobre"\n';

      // When
      const isEmailValid = qmailValidationService.validateEmail(emailSample, rulesInYaml);

      // Then
      expect(isEmailValid).to.equal(true);
    });


    it('should valid the email when the email subject contains the given word', () => {
      // Given
      const rulesInYaml = '--- \n' +
        'SUJET: \n' +
        '  CONTIENT: commun\n';

      // When
      const isEmailValid = qmailValidationService.validateEmail(emailSample, rulesInYaml);

      // Then
      expect(isEmailValid).to.equal(true);
    });

    it('should valid the email when the email is as expected', () => {
      // Given
      const rulesInYaml = '--- \n' +
        'SUJET: \n' +
        '  EST: "Invitation - Ouverture du bar commun"\n';

      // When
      const isEmailValid = qmailValidationService.validateEmail(emailSample, rulesInYaml);

      // Then
      expect(isEmailValid).to.equal(true);
    });

    it('should valid the email when the email content contains the given word', () => {
      // Given
      const rulesInYaml = '--- \n' +
        'CORPS: \n' +
        '  CONTIENT: commun\n';

      // When
      const isEmailValid = qmailValidationService.validateEmail(emailSample, rulesInYaml);

      // Then
      expect(isEmailValid).to.equal(false);
    });

    describe('ET operator', () => {
      it('should valid the email when the email content contains the given word', () => {
        // Given
        const rulesInYaml = '--- \n' +
          'CORPS: \n' +
          '  ET: \n' +
          '    - \n' +
          '      CONTIENT: Jambon\n' +
          '    - \n' +
          '      CONTIENT: Chaussette\n';

        // When
        const isEmailValid = qmailValidationService.validateEmail(emailSample, rulesInYaml);

        // Then
        expect(isEmailValid).to.equal(false);
      });

      it('should valid the email when the email content contains the given word', () => {
        // Given
        const rulesInYaml = '--- \n' +
          'CORPS: \n' +
          '  ET: \n' +
          '    - \n' +
          '      CONTIENT: DHU\n' +
          '    - \n' +
          '      CONTIENT: bar\n';

        // When
        const isEmailValid = qmailValidationService.validateEmail(emailSample, rulesInYaml);

        // Then
        expect(isEmailValid).to.equal(false);
      });

      it('shoud work on a multiple level', () => {
        // Given
        const rulesInYaml = '--- \n' +
          'CORPS: \n' +
          '  ET: \n' +
          '    - \n' +
          '      CONTIENT: Ouverture\n' +
          '    - \n' +
          '      ET: \n' +
          '        - \n' +
          '          CONTIENT: Octobre\n' +
          '        - \n' +
          '          CONTIENT: 12\n';

        // When
        const isEmailValid = qmailValidationService.validateEmail(emailSample, rulesInYaml);

        // Then
        expect(isEmailValid).to.equal(true);
      });
    });

    describe('OR operator', () => {
      it('should valid the email when the email suject contains one of the given words', () => {
        // Given
        const rulesInYaml = '--- \n' +
          'SUJET: \n' +
          '  OU: \n' +
          '    - \n' +
          '      CONTIENT: bar\n' +
          '    - \n' +
          '      CONTIENT: poisson\n';

        // When
        const isEmailValid = qmailValidationService.validateEmail(emailSample, rulesInYaml);

        // Then
        expect(isEmailValid).to.equal(true);
      });

      it('should valid the email when there are one validated rule', () => {
        // Given
        const rulesInYaml = '--- \n' +
          'SUJET: \n' +
          '  OU: \n' +
          '    - \n' +
          '      CONTIENT: Chocolat\n' +
          '    - \n' +
          '      CONTIENT: Café\n' +
          '    - \n' +
          '      OU: \n' +
          '        - \n' +
          '          CONTIENT: Café\n' +
          '        - \n' +
          '          CONTIENT: Ouverture\n';


        // When
        const isEmailValid = qmailValidationService.validateEmail(emailSample, rulesInYaml);

        // Then
        expect(isEmailValid).to.equal(true);
      });
    });

    describe('when the root element is a conditionnal', () => {
      it('should validate the email if the content is valid', () => {
        // Given
        const rulesInYaml = '--- \n' +
          'OU: \n' +
          '  CORPS: \n' +
          '    CONTIENT: "Ouverture du bar"\n' +
          '  SUJET: \n' +
          '    EST: TOTO\n';

        // When
        const isEmailValid = qmailValidationService.validateEmail(emailSample, rulesInYaml);

        // Then
        expect(isEmailValid).to.equal(true);
      });

      it('final form !', () => {
        // Given
        const rulesInYaml = '--- \n' +
          'OU: \n' +
          '  CORPS: \n' +
          '    CONTIENT: Ouverture\n' +
          '  SUJET: \n' +
          '    OU: \n' +
          '      - \n' +
          '        EST: TOTO\n' +
          '      - \n' +
          '        OU: \n' +
          '          - \n' +
          '            CONTIENT:' +
          '             - Jambon\n' +
          '          - \n' +
          '            CONTIENT: Chaussette\n';

        // When
        const isEmailValid = qmailValidationService.validateEmail(emailSample, rulesInYaml);

        // Then
        expect(isEmailValid).to.equal(true);
      });

      it('final form !', () => {
        // Given
        const rulesInYaml = '--- \n' +
          'OU: \n' +
          '  SUJET: \n' +
          '    ET: \n' +
          '      - \n' +
          '        CONTIENT: Invitation\n' +
          '      - \n' +
          '        CONTIENT: Adrien\n' +
          '  CORPS: \n' +
          '    CONTIENT: Octobre\n';

        // When
        const isEmailValid = qmailValidationService.validateEmail(emailSample, rulesInYaml);

        // Then
        expect(isEmailValid).to.equal(true);
      });

      it('WOW WOW WOW', () => {
        // Given
        const rulesInYaml = '--- \n' +
          'OU: \n' +
          '  - \n' +
          '    ET: \n' +
          '      CORPS: \n' +
          '        CONTIENT: Champion\n' +
          '      SUJET: \n' +
          '        ET: \n' +
          '          - \n' +
          '            CONTIENT: Invitation\n' +
          '          - \n' +
          '            CONTIENT: Ouverture\n' +
          '  - \n' +
          '    ET: \n' +
          '      CORPS: \n' +
          '        CONTIENT: "Soyez là"\n';

        // When
        const isEmailValid = qmailValidationService.validateEmail(emailSample, rulesInYaml);

        // Then
        expect(isEmailValid).to.equal(true);
      });
    });
  });

});
