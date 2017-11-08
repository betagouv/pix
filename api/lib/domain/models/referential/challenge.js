const AirtableModel = require('./airtable-model');

class Challenge extends AirtableModel {
  constructor() {
    super();
    this.skills = [];
  }

  hasSkill(searchedSkill) {
    return this.skills.filter((skill) => skill.name === searchedSkill.name).length > 0;
  }
}

module.exports = Challenge;
