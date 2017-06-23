const JSONAPISerializer = require('./jsonapi-serializer');

class ProfileSerializer extends JSONAPISerializer {

  constructor() {
    super('user');
  }

  serializeAttributes(model, data) {
    data.attributes['first-name'] = model.firstName;
    data.attributes['last-name'] = model.lastName;
  }

  serializeRelationships(model, data) {
    if(model) {
      data.relationships = {
        competences: {
          data: []
        }
      };
      for (const competence of model) {
        data.relationships.competences.data.push({
          'type': 'competences',
          'id': competence.id
        });
      }
    }
  }

  serializeIncluded(model, data) {
    if(!model.competences || !model.areas) {
      return null;
    }

    data.included = [];

    for (const area of model.areas) {
      data.included.push({
        'id': area.id,
        'type': 'areas',
        attributes: {
          'name': area.name
        }
      });
    }

    for (const competence of model.competences) {
      data.included.push({
        'id': competence.id,
        'type': 'competences',
        attributes: {
          'name': competence.name,
          'level': competence.level
        },
        relationships: {
          'area': {
            'type': 'areas',
            'id': competence.areaId
          }
        }
      });
    }
  }

  serializeModelObject(modelObject) {
    if(!modelObject) {
      return null;
    }
    const entity = modelObject.user.toJSON();
    const competencesEntity = modelObject.competences;
    const data = {};
    data.type = this.modelClassName;
    data.id = entity.id;
    data.attributes = {};
    this.serializeAttributes(entity, data);
    this.serializeRelationships(competencesEntity, data);
    this.serializeIncluded(modelObject, data);
    return data;
  }
}

module.exports = new ProfileSerializer();
