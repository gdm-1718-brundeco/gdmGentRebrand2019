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
import StudyForm from '../../components/study-form';

class StudyFormPage extends Component {
  render() {
    const { id } = this.props.match.params;

    return (
      <Grid container spacing={24}>
          <Grid item xs={12}>
              {id ? (
              <StudyForm postId={id} />
              ) : (
              <StudyForm />
              )}
          </Grid>
      </Grid>
    )
  }
}

export default (StudyFormPage);