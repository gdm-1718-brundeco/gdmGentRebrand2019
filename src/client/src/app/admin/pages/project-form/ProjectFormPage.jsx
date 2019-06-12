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
import ProjectForm from '../../components/project-form';

class ProjectFormPage extends Component {
  render() {
    const { id } = this.props.match.params;

    return (
      <Grid container spacing={24}>
          <Grid item xs={12}>
              {id ? (
              <ProjectForm postId={id} />
              ) : (
              <ProjectForm />
              )}
          </Grid>
      </Grid>
    )
  }
}

export default (ProjectFormPage);