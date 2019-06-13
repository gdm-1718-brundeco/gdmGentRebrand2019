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
import TestimonialForm from '../../components/testimonial-form';

class TestimonialFormPage extends Component {
  render() {
    const { id } = this.props.match.params;

    return (
      <Grid container spacing={24}>
          <Grid item xs={12}>
              {id ? (
              <TestimonialForm postId={id} />
              ) : (
              <TestimonialForm />
              )}
          </Grid>
      </Grid>
    )
  }
}

export default (TestimonialFormPage);