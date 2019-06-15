

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
import TypeTable from '../../components/types-table';

class TypesTablePage extends Component {
  render() {
    return (
      <Grid container spacing={24}>
          <Grid item xs={12}>
              <TypeTable />
          </Grid>
      </Grid>
    )
  }
}

export default (TypesTablePage);