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
import CoursesTablePage from '../courses-table';
import CourseFormPage from '../course-form';

const tabs = [
  { id: 'List', link: '/admin/courses' },
  { id: 'Create new event', link: '/admin/courses/create' },
];

class CoursesOverviewPage extends Component {
  render() {
    const { children } = this.props;

    return (
      <ContentLayout title="Events Overview" tabs={tabs}>
        { children }
        <Route exact path="/admin/courses" component={ CoursesTablePage }></Route>
        <Route path="/admin/courses/create" component={ CourseFormPage }></Route>
        <Route path="/admin/courses/:id/edit" component={ CourseFormPage }></Route>
      </ContentLayout>
    )
  }
}

export default (CoursesOverviewPage);