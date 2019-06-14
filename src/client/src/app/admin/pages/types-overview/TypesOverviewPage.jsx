
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
import TypesTablePage from '../types-table';
import TypeFormPage from '../type-form';

const tabs = [
  { id: 'List', link: '/admin/types' },
  { id: 'Create new Type', link: '/admin/types/create' },
];

class TypesOverviewPage extends Component {
  render() {
    const { children } = this.props;

    return (
      <ContentLayout title="Type Overview" tabs={tabs}>
        { children }
        <Route exact path="/admin/types" component={ TypesTablePage }></Route>
        <Route path="/admin/types/create" component={ TypeFormPage }></Route>
        <Route path="/admin/types/:id/edit" component={ TypeFormPage }></Route>
      </ContentLayout>
    )
  }
}

export default (TypesOverviewPage);