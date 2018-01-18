const Mark = require('../../domain/models/Mark');

const skillService = require('../../domain/services/skills-service');
const assessmentService = require('../../domain/services/assessment-service');

const assessmentRepository = require('../../infrastructure/repositories/assessment-repository');
const courseRepository = require('../../infrastructure/repositories/course-repository');
const competenceRepository = require('../../infrastructure/repositories/competence-repository');
const markRepository = require('../../infrastructure/repositories/mark-repository');

async function evaluateFromAssessmentId(assessmentId) {

  let assessmentWithScore;
  let evaluatedSkillsInAssessment;

  const treatmentChain = await assessmentService.fetchAssessment(assessmentId)
    .then(({ assessmentPix, skills }) => {
      assessmentWithScore = assessmentPix;
      evaluatedSkillsInAssessment = skills;
    })
    .then(() => assessmentRepository.save(assessmentWithScore))
    .then(() => skillService.saveAssessmentSkills(evaluatedSkillsInAssessment));

  if(!assessmentService.isPreviewAssessment(assessmentWithScore)
    && !assessmentService.isDemoAssessment(assessmentWithScore)) {
    return courseRepository.get(assessmentWithScore.courseId)
      .then((course) => {
        return competenceRepository.get(course.competences[0]);
      })
      .then(competence => {
        return markRepository.save(new Mark({
          estimatedLevel: assessmentWithScore.estimatedLevel,
          score: assessmentWithScore.pixScore,
          area_code: competence.area.code,
          competence_code: competence.index,
          assessmentId: assessmentWithScore.id
        }));
      });
  }

  return treatmentChain;
}

module.exports = {
  evaluateFromAssessmentId
};

/*
if (err instanceof AssessmentEndedError) {

  return assessmentService
    .fetchAssessment(request.params.id)
    .then(({ assessmentPix, skills }) => {

      let promise = Promise.resolve();
      if (assessmentService.isCertificationAssessment(assessmentPix)) {
        promise = certificationCourseRepository.updateStatus('completed', assessmentPix.courseId);
      }

      return promise
        .then(() => assessmentRepository.save(assessmentPix))
        .then(() => skillsService.saveAssessmentSkills(skills));
    })
    .then(() => {
      throw err;
    });
} else {
  throw err;
}
*/
