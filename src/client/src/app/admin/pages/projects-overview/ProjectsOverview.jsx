import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { ContentLayout } from '../../layouts';

import ProjectTablePage from '../project-table';
import ProjectFormPage from '../project-form';

const tabs = [
	{ id: 'List', 'link': '/admin/projects' },
	{ id: 'Create new Project', 'link': '/admin/projects/create' },
];

class ProjectsOverviewPage extends Component {
	render() {
		const { children } = this.props;

		return (
			<ContentLayout title='Projects Overview' tabs={tabs}>
				{ children }
			</ContentLayout>
		)
	}
}

export default (ProjectsOverviewPage);