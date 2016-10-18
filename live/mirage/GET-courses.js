import simpleCourse from './data-course-simple';
import anotherCourse from './data-course-another';
import courseWithNoImage from './data-course-no-image';

export default function () {
  return {
  	data: [
  	simpleCourse.data,
  	anotherCourse.data,
  	courseWithNoImage.data
  	]
  }
};