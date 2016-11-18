import _                            from 'lodash/lodash';
import completedAssessment          from '../data/assessments/completed-assessment';
import completedAssessmentQcm       from '../data/assessments/completed-assessment-qcm';
import completedAssessmentQroc      from '../data/assessments/completed-assessment-qroc';
import inProgressAssessment         from '../data/assessments/in-progress-assessment';
import newAssessmentOfNoImageCourse from '../data/assessments/new-assessment-of-noimage-course';
import newAssessment                from '../data/assessments/new-assessment';
import refAssessmentOfFirstCourse   from '../data/assessments/ref-assessment-of-first-course';

export default function (schema, request) {

  const allAssessments = [
    completedAssessment,
    completedAssessmentQcm,
    completedAssessmentQroc,
    newAssessmentOfNoImageCourse,
    newAssessment,
    inProgressAssessment,
    refAssessmentOfFirstCourse
  ];

  const assessments = _.map(allAssessments, function(oneAssessment) {
    return {id: oneAssessment.data.id, obj: oneAssessment}
  });

  const assessment = _.find(assessments, {id:request.params.id});

  if (assessment) {
    return assessment.obj;
  } else {
    throw new Error('The assessment you required in the fake server does not exist ' + request.params.id);
  }

}
