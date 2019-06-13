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
import TeamForm from '../../components/team-form';

class TeamFormPage extends Component {
  render() {
    const { id } = this.props.match.params;

    return (
      <Grid container spacing={24}>
          <Grid item xs={12}>
              {id ? (
              <TeamForm postId={id} />
              ) : (
              <TeamForm />
              )}
          </Grid>
      </Grid>
    )
  }
}

export default (TeamFormPage);