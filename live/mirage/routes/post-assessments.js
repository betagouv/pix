import newAssessmentOfSimpleCourse from '../data/assessments/new-assessment-of-simple-course';
import newAssessmentOfAnotherCourse from '../data/assessments/new-assessment-of-another-course';
import newAssessmentOfNoImageCourse from '../data/assessments/new-assessment-of-noimage-course';

export default function (schema, request) {

  const answer = JSON.parse(request.requestBody);

  switch (answer.data.relationships.course.data.id) {

    case newAssessmentOfSimpleCourse.data.relationships.course.data.id:
      return newAssessmentOfSimpleCourse;
    case newAssessmentOfAnotherCourse.data.relationships.course.data.id:
      return newAssessmentOfAnotherCourse;
    case newAssessmentOfNoImageCourse.data.relationships.course.data.id:
      return newAssessmentOfNoImageCourse;
    default:
      throw new Error('undefined new assessment, should be derived from either simpleCourse of anotherCourse');
  }

}
