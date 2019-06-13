/*
Import extenal libraries
*/
import React, { Component } from 'react';

/*
Material UI
*/
import Grid from '@material-ui/core/Grid';

/*
Components
*/
import CourseForm from '../../components/course-form';

class CourseFormPage extends Component {
  render() {
    const { id } = this.props.match.params;

    return (
      <Grid container spacing={24}>
          <Grid item xs={12}>
              {id ? (
              <CourseForm postId={id} />
              ) : (
              <CourseForm />
              )}
          </Grid>
      </Grid>
    )
  }
}

export default (CourseFormPage);