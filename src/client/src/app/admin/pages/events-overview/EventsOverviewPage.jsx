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
import EventsFormPage from '../events-form';

const tabs = [
  { id: 'List', link: '/admin/events' },
  { id: 'Create new events', link: '/admin/events/create' },
];

class EventsOverviewPage extends Component {
  render() {
    const { children } = this.props;

    return (
      <ContentLayout title="Events Overview" tabs={tabs}>
        { children }
      </ContentLayout>
    )
  }
}

export default (EventsOverviewPage);