import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { ContentLayout } from '../../layouts';

import ImagesTablePage from '../images-table';
import ImagesFormPage from '../image-form';

const tabs = [
    { id: 'List', link: '/admin/projectimages' },
    { id: 'Create new image', link: '/admin/projectimages/create' },
];

class ImagesOverviewPage extends Component {
    render() {
        const { children } = this.props;

        return (
            <ContentLayout title="Images Overview" tabs={tabs}>
                { children }
                <Route exact path="/admin/projectimages" component={ ImagesTablePage }></Route>
                <Route path="/admin/projectimages/create" component={ ImagesFormPage }></Route>
                <Route path="/admin/projectimages/:id/edit" component={ ImagesFormPage }></Route>
            </ContentLayout>
        )
    }
}

export default (ImagesOverviewPage);