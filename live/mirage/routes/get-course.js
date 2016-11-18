import _                  from 'lodash/lodash';
import refFirstCourse from '../data/courses/ref-first-course';



export default function (schema, request) {

  const allCourses = [
    refFirstCourse
  ];

  const courses = _.map(allCourses, function(oneCourse) {
    return {id: oneCourse.data.id, obj: oneCourse}
  });

  const course = _.find(courses, {id:request.params.id});

  if (course) {
    return course.obj;
  } else {
    throw new Error('The course you required in the fake server does not exist ' + request.params.id);
  }


}
