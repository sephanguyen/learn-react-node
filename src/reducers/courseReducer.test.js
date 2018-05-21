import expect from 'expect';
import courseReducer from './courseReducer';
import * as courseActions from '../actions/coursesActions';
import * as Types from '../actions/actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Course Reducer', () => {
  it('should add course when passed ', () => {
    const initialState = [
      {title: 'A'},
      {title: 'B'}
    ];

    const newCourse = {title: 'C'};

    const action = courseActions.createCourseSuccess(newCourse);

    const newState = courseReducer(initialState, action);

    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('B');
    expect(newState[2].title).toEqual('C');
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach (() => {
    nock.cleanAll();
  });
  it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done)=> {

    //call api
    //nock('http://example.com/')
    //  .get('/courses')
    //  .reply(200, body : {courses: [{id: 'clean-code', title: 'Clean Code'}]})
    const expectedActions = [
      {type: Types.BEGIN_AJAX_CALL},
      {type: Types.LOAD_COURSES_SUCCESS, body : {courses: [{id: 'clean-code', title: 'Clean Code'}]}}
    ];
    const store = mockStore({courses: {}}, expectedActions);

    store.dispatch(courseActions.loadCourses()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(Types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(Types.LOAD_COURSES_SUCCESS);
      done();
    });
  });
});
