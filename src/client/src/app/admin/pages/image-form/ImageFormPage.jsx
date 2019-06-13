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
import ImageForm from '../../components/image-form';

class ImageFormPage extends Component {
  render() {
    const { id } = this.props.match.params;

    return (
      <Grid container spacing={24}>
          <Grid item xs={12}>
              {id ? (
              <ImageForm postId={id} />
              ) : (
              <ImageForm />
              )}
          </Grid>
      </Grid>
    )
  }
}

export default (ImageFormPage);