class Course {

  constructor(model = {}) {
    // properties
    this.id = model.id;
    this.name = model.name;
    this.description = model.description;
    this.imageUrl = model.imageUrl;
    this.isAdaptive = model.isAdaptive;
    this.type = model.type;

    // relationships
    this.competence = model.competence;
    this.challenges = model.challenges || [];

    // computed
    this.nbChallenges = this.challenges.length;
  }
}

module.exports = Course;
