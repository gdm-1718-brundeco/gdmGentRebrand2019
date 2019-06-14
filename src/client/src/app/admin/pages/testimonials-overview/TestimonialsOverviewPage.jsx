
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
import TestimonialsTablePage from '../testimonials-table';
import TestimonialFormPage from '../testimonial-form';

const tabs = [
  { id: 'List', link: '/admin/testimonials' },
  { id: 'Create new testimonial', link: '/admin/testimonials/create' },
];

class TestimonialsOverviewPage extends Component {
  render() {
    const { children } = this.props;

    return (
      <ContentLayout title="Testimonial Overview" tabs={tabs}>
        { children }
        <Route exact path="/admin/testimonials" component={ TestimonialsTablePage }></Route>
        <Route path="/admin/testimonials/create" component={ TestimonialFormPage }></Route>
        <Route path="/admin/testimonials/:id/edit" component={ TestimonialFormPage }></Route>
      </ContentLayout>
    )
  }
}

export default (TestimonialsOverviewPage);