const { describe, it, expect } = require('../../../test-helper');
const snapshotsConverter = require('../../../../lib/infrastructure/converter/snapshots-csv-converter');

describe('Unit | Serializer | CSV | snapshots-converter', () => {

  const profile1WithEmptyCompentece = '{"included":[{"type":"areas","attributes":{"name":"4. Protection et sécurité"}},{"type":"competences","attributes":{"name":"Sécuriser l\'environnement numérique","index":"4.1","level": 3}},{"type":"competences","attributes":{"name":"Interagir","index":"2.1","level": 4,"course-id":""}},{"type": "competences","attributes":{"name": "", "index": "", "level": -1, "course-id": "" }}]}';
  const profile2 = {
    'included': [{
      'type': 'areas',
      'attributes': { 'name': '4. Protection et sécurité' }
    }, {
      'type': 'competences',
      'attributes': { 'name': 'Sécuriser l\'environnement numérique', 'index': '4.1', 'level': -1 }
    }, {
      'type': 'competences',
      'attributes': { 'name': 'Interagir', 'index': '2.1', 'level': 2, 'course-id': '' }
    }]
  };

  const jsonSnapshots = [{
    id: 2,
    score: '22',
    profile: profile1WithEmptyCompentece,
    createdAt: '2017-10-13 09:00:59',
    idPix: 'UNIV123',
    campaignCode: 'CAMPAIGN123',
    testsFinished: 2,
    user: {
      firstName: 'PrenomUser',
      lastName: 'NomUser',
    }
  },
  {
    id: 1,
    score: null,
    profile: profile2,
    createdAt: '2017-10-12 16:55:50',
    idPix: 'AAA',
    campaignCode: 'EEE',
    testsFinished: 1,
    user: {
      firstName: 'PrenomUser',
      lastName: 'NomUser',
    }
  }];

  const expectedTextHeadersCSVForPRO = '"Nom";"Prenom";"ID Pix";"Code Campagne";"Date";"Score Pix";"Tests Realises";"Interagir";"Securiser l\'environnement numerique"\n';
  const expectedTextHeadersCSVForSUP = '"Nom";"Prenom";"Numero Etudiant";"Code Campagne";"Date";"Score Pix";"Tests Realises";"Interagir";"Securiser l\'environnement numerique"\n';
  const expectedTextHeadersCSVForSCO = '"Nom";"Prenom";"Numero INE";"Code Campagne";"Date";"Score Pix";"Tests Realises";"Interagir";"Securiser l\'environnement numerique"\n';
  const expectedTextCSVFirstUser = '"NomUser";"PrenomUser";"UNIV123";"CAMPAIGN123";13/10/2017;22;="2/2";4;3\n';
  const expectedTextCSVSecondUser = '"NomUser";"PrenomUser";"AAA";"EEE";12/10/2017;;="1/2";2;\n';

  describe('#convertJsonToCsv()', () => {

    it('should convert an JSON object to a String Object', () => {
      // when
      const result = snapshotsConverter.convertJsonToCsv({},'SUP');

      // then
      expect(result).to.be.a('string');
      expect(result).to.equal('');

    });

    it('should set first line with headers informations for SUP organization', () => {
      // when
      const result = snapshotsConverter.convertJsonToCsv(jsonSnapshots, 'SUP');

      // then
      expect(result).to.contains(expectedTextHeadersCSVForSUP);
    });
    it('should set first line with headers informations for SCO organization', () => {
      // when
      const result = snapshotsConverter.convertJsonToCsv(jsonSnapshots, 'SCO');

      // then
      expect(result).to.contains(expectedTextHeadersCSVForSCO);
    });
    it('should set first line with headers informations for PRO organization', () => {
      // when
      const result = snapshotsConverter.convertJsonToCsv(jsonSnapshots, 'PRO');

      // then
      expect(result).to.contains(expectedTextHeadersCSVForPRO);
    });

    it('should set informations for users', () => {
      // when
      const result = snapshotsConverter.convertJsonToCsv(jsonSnapshots,'SUP');

      // then
      expect(result).to.contains(expectedTextCSVFirstUser);
      expect(result).to.contains(expectedTextCSVSecondUser);
    });

    it('should return string with headers and users informations in this exact order', () => {
      // when
      const result = snapshotsConverter.convertJsonToCsv(jsonSnapshots,'SUP');

      // then
      expect(result).to.contains(expectedTextHeadersCSVForSUP + expectedTextCSVFirstUser + expectedTextCSVSecondUser);
    });


  });
});
