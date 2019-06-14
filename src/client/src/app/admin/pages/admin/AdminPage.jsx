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
import EventsOverviewPage from '../events-overview';
import EventFormPage from '../event-form';
import ProjectsOverviewPage from '../projects-overview';
import ProjectFormPage from '../project-form';
import TestimonialsOverviewPage from '../testimonials-overview'
import TestimonialPage from '../testimonial-form';
import TypesOverviewPage from '../types-overview'
import TypePage from '../type-form';
import StudiesOverviewPage from '../studies-overview';
import StudyPage from '../study-form';
import TeamOverviewPage from '../team-overview'
import TeamPage from '../team-form';
import ImageOverviewPage from '../image-overview'
import ImagePage from '../image-form';
import CoursesOverviewPage from '../courses-overview';
import CoursePage from '../course-form';




class AdminPage extends Component {
  render() {
    return (
      <div className="Admin">
        <Route path="/admin/categories" component={ CategoriesOverviewPage }></Route>
        <Route path="/admin/categories/create" component={ CategorieFormPage }></Route>
        <Route path="/admin/posts" component={ PostsOverviewPage }></Route>
        <Route path="/admin/posts/create" component={ PostsFormPage }></Route>
        <Route path="/admin/events" component={ EventsOverviewPage }></Route>
        <Route path="/admin/events/create" component={ EventFormPage }></Route>
        <Route path="/admin/projects" component={ ProjectsOverviewPage }></Route>
        <Route path="/admin/projects/create" component={ ProjectFormPage }></Route>
        <Route path="/admin/testimonials" component={ TestimonialsOverviewPage }></Route>
        <Route path="/admin/testimonials/create" component={ TestimonialPage }></Route>
        <Route path="/admin/types" component={ TypesOverviewPage }></Route>
        <Route path="/admin/types/create" component={ TypePage }></Route>
        <Route path="/admin/studies" component={ StudiesOverviewPage }></Route>
        <Route path="/admin/studies/create" component={ StudyPage }></Route>
        <Route path="/admin/courses" component={ CoursesOverviewPage }></Route>
        <Route path="/admin/courses/create" component={ CoursePage }></Route>
        <Route path="/admin/team" component={ TeamOverviewPage }></Route>
        <Route path="/admin/team/create" component={ TeamPage }></Route>
        <Route path="/admin/projectimages" component={ ImageOverviewPage }></Route>
        <Route path="/admin/projectimages/create" component={ ImagePage }></Route>






				{/* <Route path="/admin/projects" component={ ProjectsOverviewPage }></Route> */}
      </div>
    )
  }
}

export default (AdminPage);