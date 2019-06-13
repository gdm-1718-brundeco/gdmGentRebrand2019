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
import ProjectFormPage from '../project-form';
import TestimonialPage from '../testimonial-form';
import TypePage from '../type-form';
import StudyPage from '../study-form';
import TeamPage from '../team-form';
import ImagePage from '../image-form';




class AdminPage extends Component {
  render() {
    return (
      <div className="Admin">
        <Route path="/admin/categories" component={ CategoriesOverviewPage }></Route>
        <Route path="/admin/categories/create" component={ CategorieFormPage }></Route>
        <Route path="/admin/posts" component={ PostsOverviewPage }></Route>
        <Route path="/admin/posts/create" component={ PostsFormPage }></Route>
        <Route path="/admin/events/create" component={ EventFormPage }></Route>
        <Route path="/admin/projects/create" component={ ProjectFormPage }></Route>
        <Route path="/admin/testimonials/create" component={ TestimonialPage }></Route>
        <Route path="/admin/types/create" component={ TypePage }></Route>
        <Route path="/admin/studies/create" component={ StudyPage }></Route>
        <Route path="/admin/team/create" component={ TeamPage }></Route>
        <Route path="/admin/projectimages/create" component={ ImagePage }></Route>





				{/* <Route path="/admin/projects" component={ ProjectsOverviewPage }></Route> */}
      </div>
    )
  }
}

export default (AdminPage);