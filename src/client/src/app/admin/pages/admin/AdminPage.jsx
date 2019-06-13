/*
Import extenal libraries
*/
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

/*
Pages
*/
import CategoriesOverviewPage from '../categories-overview';
import CategorieFormPage from '../categorie-form';
import PostsOverviewPage from '../posts-overview';
import PostsFormPage from '../post-form';
import EventFormPage from '../event-form';


class AdminPage extends Component {
  render() {
    return (
      <div className="Admin">
        <Route path="/admin/categories" component={ CategoriesOverviewPage }></Route>
        <Route path="/admin/categories/create" component={ CategorieFormPage }></Route>
        <Route path="/admin/posts" component={ PostsOverviewPage }></Route>
        <Route path="/admin/posts/create" component={ PostsFormPage }></Route>
        <Route path="/admin/event/create" component={ EventFormPage }></Route>

				{/* <Route path="/admin/projects" component={ ProjectsOverviewPage }></Route> */}
      </div>
    )
  }
}

export default (AdminPage);