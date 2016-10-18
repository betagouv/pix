import simpleCourse from '../data/course/simpleCourse';
import anotherCourse from '../data/course/anotherCourse';
import noImageCourse from '../data/course/noImageCourse';

export default function () {
  return {
  	data: [
  	  simpleCourse.data,
  	  anotherCourse.data,
  	  noImageCourse.data
  	]
  }
};
