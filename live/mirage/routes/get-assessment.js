import _                            from 'lodash/lodash';
import rawAssessment   from '../data/assessments/raw-assessment';
import refAssessmentOfFirstCourse   from '../data/assessments/ref-assessment-of-first-course';

export default function (schema, request) {

  const allAssessments = [
    rawAssessment,
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
