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
import CoursesTable from '../../components/course-table';

class CoursesTablePage extends Component {
  render() {
    return (
      <Grid container spacing={24}>
          <Grid item xs={12}>
              <CoursesTable />
          </Grid>
      </Grid>
    )
  }
}

export default (CoursesTablePage);