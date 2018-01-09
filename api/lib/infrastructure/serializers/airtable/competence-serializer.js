const _ = require('lodash');

const Competence = require('../../../domain/models/referential/competence');
const Area = require('../../../domain/models/Area');
const AirtableSerializer = require('./airtable-serializer');

class CompetenceSerializer extends AirtableSerializer {

  deserialize(airtableRecord) {

    const competence = new Competence();
    competence.id = airtableRecord.id;

    const fields = airtableRecord.fields;

    competence.name = fields['Titre'];
    competence.index = fields['Sous-domaine'];
    competence.areaId = fields['Domaine'];
    competence.courseId = fields['Tests Record ID'] ? fields['Tests Record ID'][0] : '';
    competence.reference = fields['Référence'];
    competence.skills = fields['Acquis'];

    competence.area = new Area({
      id: _.first(fields['Domaine']),
      name: _.first(fields['Domaine Name'])
    });

    return competence;
  }

}

module.exports = new CompetenceSerializer();
