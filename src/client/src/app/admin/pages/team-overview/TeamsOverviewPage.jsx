
/*
Import extenal libraries
*/
import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

/*
Layout
*/
import { ContentLayout } from '../../layouts';

/*
Pages
*/
import TeamsTablePage from '../team-table';
import TeamFormPage from '../team-form';

const tabs = [
  { id: 'List', link: '/admin/team' },
  { id: 'Create new member', link: '/admin/team/create' },
];

class ImagesOverviewPage extends Component {
  render() {
    const { children } = this.props;

    return (
      <ContentLayout title="Team Overview" tabs={tabs}>
        { children }
        <Route exact path="/admin/team" component={ TeamsTablePage }></Route>
        <Route path="/admin/team/create" component={ TeamFormPage }></Route>
        <Route path="/admin/team/:id/edit" component={ TeamFormPage }></Route>
      </ContentLayout>
    )
  }
}

export default (ImagesOverviewPage);