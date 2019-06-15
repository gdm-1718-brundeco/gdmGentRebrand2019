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
import EventsTable from '../../components/event-table';

class EventsTablePage extends Component {
  render() {
    return (
      <Grid container spacing={24}>
          <Grid item xs={12}>
              <EventsTable />
          </Grid>
      </Grid>
    )
  }
}

export default (EventsTablePage);