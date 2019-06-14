
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
import TestimonialTable from '../../components/testimonials-table';

class TestimonialsTablePage extends Component {
  render() {
    return (
      <Grid container spacing={24}>
          <Grid item xs={12}>
              <TestimonialTable />
          </Grid>
      </Grid>
    )
  }
}

export default (TestimonialsTablePage);