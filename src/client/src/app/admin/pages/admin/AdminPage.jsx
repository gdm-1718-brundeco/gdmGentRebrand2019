/*
Import extenal libraries
*/
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

/*
Pages
*/
import BlogsOverviewPage from '../blogs-overview';
import CategoriesOverviewPage from '../categories-overview';
import PostsOverviewPage from '../posts-overview';

class AdminPage extends Component {
  render() {
    return (
      <div className="Admin">
        <Route path="/admin/categories" component={ CategoriesOverviewPage }></Route>
        <Route path="/admin/posts" component={ PostsOverviewPage }></Route>
				<Route path="/admin/projects" component={ ProjectsOverviewPage }></Route>
      </div>
    )
  }
}

export default (AdminPage);