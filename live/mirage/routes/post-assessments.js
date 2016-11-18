import _                  from 'lodash/lodash';
import refAssessmentOfFirstCourse from '../data/assessments/ref-assessment-of-first-course';

export default function (schema, request) {

  const answer = JSON.parse(request.requestBody);
  const courseId = answer.data.relationships.course.data.id;

  const allAssessments = [
    refAssessmentOfFirstCourse
  ];

  const assessments = _.map(allAssessments, function(oneAssessment) {
    return {id: oneAssessment.data.relationships.course.data.id, obj: oneAssessment}
  });

  const assessment = _.find(assessments, {id:courseId});

  if (assessment) {
    return assessment.obj;
  } else {
    throw new Error('undefined new assessment, sorry');
  }


}
