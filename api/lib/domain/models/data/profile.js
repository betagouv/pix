const _ = require('lodash');

class Profile {
  constructor(user, competences, areas, assessments, courses, organizations) {
    this.user = user;
    this.competences = competences;
    this.areas = areas;
    this.organizations = organizations;
    this._initCompetenceLevel();
    this._setStatusToCompetences(assessments, courses);
    this._setLevelAndPixScoreToCompetences(assessments, courses);
    this._calculateTotalPixScore();
    this._setAssessmentToCompetence(assessments, courses);
  }

  _initCompetenceLevel() {
    if(this.competences) {
      this.competences.forEach((competence) => {
        competence['level'] = -1;
        competence['status'] = 'notEvaluated';
      });
    }
  }

  _setLevelAndPixScoreToCompetences(assessments, courses) {
    assessments.forEach((assessment) => {
      const courseIdFromAssessment = assessment.get('courseId');
      const course = this._getCourseById(courses, courseIdFromAssessment);

      if (assessment.isCompleted()) {
        const competence = this.competences.find(competence => course.competences.includes(competence.id));
        competence.level = assessment.get('estimatedLevel');
        competence.pixScore = assessment.get('pixScore');
        if(competence.status === 'notCompleted') {
          competence.level = -1;
          delete competence.pixScore;
        }
      }
    });
  }

  _setStatusToCompetences(assessments, courses) {
    this.competences.forEach((competence) => {
      const competencesAssesments = this._findAssessmentsByCompetenceId(assessments, courses, competence.id);
      if(competencesAssesments.length === 0) {
        competence.status = 'notEvaluated';
      } else {
        competence.status = this._getCompetenceStatus(competencesAssesments);
      }
  _setAssessmentToCompetence(assessments, courses) {
    assessments.forEach(assessment => {
      const courseIdFromAssessment = assessment.get('courseId');
      const course = this._getCourseById(courses, courseIdFromAssessment);

      const competence = this.competences.find(competence => course.competences.includes(competence.id));
      competence.assessmentId = assessment.get('id');
    });
  }

  _getCompetenceStatus(assessments) {
    let status;
    if(this._hasCompetenceAssessmentInProgress(assessments)) {
      status = 'notCompleted';
    } else if (this._canCompetenceBeReevaluated(assessments)) {
      status = 'evaluated';
    } else {
      status = 'replayed';
    }

    return status;
  }

  _findAssessmentsByCompetenceId(assessments, courses, competenceId) {
    return assessments.filter((assessment) => {
      const courseIdFromAssessment = assessment.get('courseId');
      const course = this._getCourseById(courses, courseIdFromAssessment);
      return course.competences.indexOf(competenceId) > -1;
    });
  }

  _hasCompetenceAssessmentInProgress(assessmentsByCompetence) {
    return assessmentsByCompetence.find((assessment) => !assessment.get('pixScore') && !assessment.get('estimatedLevel'));
  }

  _canCompetenceBeReevaluated(assessmentsByCompetence) {
    return assessmentsByCompetence.length === 1;
  }

  _getCourseById(courses, courseIdFromAssessment) {
    return _.find(courses, (course) => {
      return course.id === courseIdFromAssessment;
    });
  }

  _calculateTotalPixScore() {

    const competencesWithScore = _.filter(this.competences, (competence) => {
      return competence.hasOwnProperty('pixScore');
    });

    if (competencesWithScore.length > 0) {
      let pixScore = 0;

      competencesWithScore.forEach((competence) => {
        pixScore += competence.pixScore;
      });

      this.user.set('pix-score', pixScore);
    }
  }
}

module.exports = Profile;
