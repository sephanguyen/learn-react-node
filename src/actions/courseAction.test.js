import expect from 'expect';
import * as courseActions from './coursesActions';
import * as Types from './actionTypes';

describe('Course Actions', () => {
  describe('createCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      const course = { id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: Types.CREATE_COURSE_SUCCESS,
        course
      };

      const action = courseActions.createCourseSuccess(course);

      expect(action).toEqual(expectedAction);
    });
  });
});
