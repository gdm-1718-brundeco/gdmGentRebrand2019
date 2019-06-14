
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
import TeamsTable from '../../components/team-table';

class TeamsTablePage extends Component {
  render() {
    return (
      <Grid container spacing={24}>
          <Grid item xs={12}>
              <TeamsTable />
          </Grid>
      </Grid>
    )
  }
}

export default (TeamsTablePage);