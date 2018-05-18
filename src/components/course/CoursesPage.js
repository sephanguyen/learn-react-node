import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/coursesActions';
import CourseList from './CourseList';
import { browserHistory } from 'react-router';
class CoursesPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.redirectToAddCoursePage =  this.redirectToAddCoursePage.bind(this);
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {
    const { courses } = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
              value="Add Course"
              className="btn btn-primary"
              onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={courses} />

      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  // return {
  //   createCourses: course => dispatch(courseActions.createCourses(course))
  // };
}

export default connect(mapStateToProps)(CoursesPage);
