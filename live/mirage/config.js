import simpleCourse from './data/course/simpleCourse';
import anotherCourse from './data/course/anotherCourse';
import noImageCourse from './data/course/noImageCourse';
import challengeQcu from './data/challenges/challenge-qcu';
import challengeQcm from './data/challenges/challenge-qcm';
import challengeQrocm from './data/challenges/challenge-qrocm';
import completedAssessment from './data/assessments/completed-assessment';
import newAssessment from './data/assessments/new-assessment';
import getCourses from './route/get-courses';


export default function () {

  this.namespace = 'http://localhost:3000/api';

  this.get('/courses', getCourses);

  this.get('/courses/:id', function (schema, request) {

    const courseId = request.params.id;
    if (courseId === 'course_with_no_image') {
      return noImageCourse;
    }
    return simpleCourse;
  });

  this.get('/challenges', function () {
    return {
      data: [
        challengeQcu.data,
        challengeQcm.data,
        challengeQrocm.data
      ]
    }
  });

  this.get('/challenges/:id', function (schema, request) {
    switch (request.params.id) {
      case 'challenge_qrocm_id':
        return challengeQrocm;
      case 'challenge_qcm_id':
        return challengeQcm;
      case 'challenge_qcu_id':
      default:
        return challengeQcu;
    }
  });

  this.post('/assessments', function () {
    return newAssessment;
  });

  this.get('/assessments/:id', function () {
    return completedAssessment;
  });
}
