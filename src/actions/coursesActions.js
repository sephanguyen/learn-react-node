import * as Types from './actionTypes';

export function createCourses(course) {
  return { type: Types.CREATE_COURSE, course };
}
