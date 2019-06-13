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
import EventForm from '../../components/event-form';

class EventFormPage extends Component {
  render() {
    const { id } = this.props.match.params;

    return (
      <Grid container spacing={24}>
          <Grid item xs={12}>
              {id ? (
              <EventForm postId={id} />
              ) : (
              <EventForm />
              )}
          </Grid>
      </Grid>
    )
  }
}

export default (EventFormPage);