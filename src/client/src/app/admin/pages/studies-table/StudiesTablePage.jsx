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
import StudiesTable from '../../components/studies-table';

class StudiesTablePage extends Component {
  render() {
    return (
      <Grid container spacing={24}>
          <Grid item xs={12}>
              <StudiesTable />
          </Grid>
      </Grid>
    )
  }
}

export default (StudiesTablePage);