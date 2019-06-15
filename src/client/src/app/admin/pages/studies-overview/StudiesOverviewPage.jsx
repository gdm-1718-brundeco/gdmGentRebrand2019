
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
import StudiesTablePage from '../studies-table';
import StudiesFormPage from '../study-form';

const tabs = [
  { id: 'List', link: '/admin/studies' },
  { id: 'Create new study', link: '/admin/studies/create' },
];

class StudiesOverviewPage extends Component {
  render() {
    const { children } = this.props;

    return (
      <ContentLayout title="Studies Overview" tabs={tabs}>
        { children }
        <Route exact path="/admin/studies" component={ StudiesTablePage }></Route>
        <Route path="/admin/studies/create" component={ StudiesFormPage }></Route>
        <Route path="/admin/studies/:id/edit" component={ StudiesFormPage }></Route>
      </ContentLayout>
    )
  }
}

export default (StudiesOverviewPage);