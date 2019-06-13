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
import TypeForm from '../../components/type-form';

class TypeFormPage extends Component {
  render() {
    const { id } = this.props.match.params;

    return (
      <Grid container spacing={24}>
          <Grid item xs={12}>
              {id ? (
              <TypeForm postId={id} />
              ) : (
              <TypeForm />
              )}
          </Grid>
      </Grid>
    )
  }
}

export default (TypeFormPage);