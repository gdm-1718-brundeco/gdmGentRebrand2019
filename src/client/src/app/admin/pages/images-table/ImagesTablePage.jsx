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
import ImagesTable from '../../components/image-table';

class ImagesTablePage extends Component {
  render() {
    return (
      <Grid container spacing={24}>
          <Grid item xs={12}>
              <ImagesTable />
          </Grid>
      </Grid>
    )
  }
}

export default (ImagesTablePage);