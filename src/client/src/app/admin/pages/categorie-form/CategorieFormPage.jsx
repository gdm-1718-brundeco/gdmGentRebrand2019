
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
import CategorieForm from '../../components/categorie-form';

class CategorieFormPage extends Component {
  render() {
    const { id } = this.props.match.params;

    return (
      <Grid container spacing={24}>
          <Grid item xs={12}>
              {id ? (
              <CategorieForm postId={id} />
              ) : (
              <CategorieForm />
              )}
          </Grid>
      </Grid>
    )
  }
}

export default (CategorieFormPage);