class Mark {
  constructor(model) {
    this.id = model.id;
    this.estimatedLevel = model.estimatedLevel;
    this.score = model.score;
    this.area_code = model.area_code;
    this.competence_code = model.competence_code;
    this.assessmentId = model.assessmentId;
  }
}

module.exports = Mark;
