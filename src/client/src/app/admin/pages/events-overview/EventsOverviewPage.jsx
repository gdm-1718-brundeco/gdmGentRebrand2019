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
import EventsTablePage from '../events-table';
import EventFormPage from '../event-form';

const tabs = [
  { id: 'List', link: '/admin/events' },
  { id: 'Create new event', link: '/admin/events/create' },
];

class EventsOverviewPage extends Component {
  render() {
    const { children } = this.props;

    return (
      <ContentLayout title="Events Overview" tabs={tabs}>
        { children }
        <Route exact path="/admin/events" component={ EventsTablePage }></Route>
        <Route path="/admin/events/create" component={ EventFormPage }></Route>
        <Route path="/admin/events/:id/edit" component={ EventFormPage }></Route>
      </ContentLayout>
    )
  }
}

export default (EventsOverviewPage);