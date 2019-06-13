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
import CategorieTablePage from '../categories-table';

*/
import CategorieFormPage from '../categorie-form';

const tabs = [
  { id: 'List', link: '/admin/categories' },
  { id: 'Create new category', link: '/admin/categories/create' },
];

class CategoriesOverviewPage extends Component {
  render() {
    const { children } = this.props;

    return (
      <ContentLayout title="Categories Overview" tabs={tabs}>
        { children }
      </ContentLayout>
    )
  }
}

export default (CategoriesOverviewPage);