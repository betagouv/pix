'use strict';

const JSONAPISerializer = require('./jsonapi-serializer');
const Assessment = require('../models/data/assessment');

class AssessmentSerializer extends JSONAPISerializer {

  constructor() {
    super('assessment');
  }

  deserialize(json) {
    const assessment = new Assessment({
      id: json.data.id,
      courseId: json.data.relationships.course.id,
      userId: json.data.attributes.userId,
      userName: json.data.attributes.userName,
      userEmail: json.data.attributes.userEmail,
    });
    return assessment;
  }

}

module.exports = new AssessmentSerializer();
