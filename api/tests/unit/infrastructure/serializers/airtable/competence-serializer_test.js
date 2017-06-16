const {describe, it, expect} = require('../../../../test-helper');
const serializer = require('../../../../../lib/infrastructure/serializers/airtable/competence-serializer');

describe('Unit | Serializer | competence-serializer', function() {
  describe('#Deserialize', () => {
    it('should be a function', function() {
      // then
      expect(serializer.deserialize).to.be.a('function');
    });

    describe('Success deserialization', () => {
      const airtableCompetencesRecord = {
        id: 'recsvLDFHShyfDXXXXX',
        fields: {
          'Nom': '1.1 Mener une recherche d\'information',
          'Domaine': [
            'recvoGdo0z0z0pXWZ'
          ],
          'Epreuves': [
            'recsvLz0W2ShyfD00',
            'recsvLz0W2ShyfD01'
          ]
        }
      };

      it('should get a new competence object', () => {
        // When
        const competences = serializer.deserialize(airtableCompetencesRecord);

        // Then
        expect(competences.id).to.be.equal(airtableCompetencesRecord.id);
        expect(competences.name).to.be.equal(airtableCompetencesRecord.fields['Nom']);
        expect(competences.domaineId).to.be.equal(airtableCompetencesRecord.fields['Domaine']);
        expect(competences.Epreuves).to.not.exist;
      });

    });

  });
});
