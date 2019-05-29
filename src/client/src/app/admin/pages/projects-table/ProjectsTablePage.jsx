import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import ProjectsTable from '../../components/projects-table';

class ProjectsTablePage extends Component {
	render() {
		return (
			<Grid container spacing={24}>
				<Grid item xs={12}>
					<ProjectsTable />
				</Grid>
			</Grid>
		)
	}
}

export default (ProjectsTablePage);