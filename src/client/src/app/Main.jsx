/*
Import extenal libraries
*/
import React, { Component } from "react";
import { Redirect, Switch } from "react-router-dom";

/*
Utilities
*/
import { RouteWithLayout } from "./utilities";

/*
Layout
*/
import { LoginLayout, PageLayout } from "./layouts";
import { AdminLayout } from "./admin/layouts";

/*
Page components
*/
import AdminPage from './admin/pages/admin';
import LoginPage from './pages/login';
import HomePage from "./pages/home";
import NewsPage from "./pages/news";
import TeamPage from "./pages/team";
import TeamDetailPage from "./pages/team-detail";
import NewsDetailPage from "./pages/news-detail/NewsDetailPage";
import ProjectDetailPage from './pages/project-detail/ProjectDetailPage';
import ProjectsPage from './pages/projects/ProjectsPage';
import EventsPage from './pages/events/EventsPage';
import EventDetailPage from './pages/event-detail/EventDetailPage';
import StatementPage from './pages/statements/StatementPage';
import StatementDetailPage from './pages/statements-detail/StatementDetailPage';
import ServicesPage from './pages/services/ServicesPage'

/*
Import styling
*/
import "./Main.css";
import { homedir } from "os";
import ContactPage from "./pages/contact/ContactPage";

class Main extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <RouteWithLayout
            exact
            path="/"
            layout={PageLayout}
            component={HomePage}
          />
          <Redirect from="/home" to="/" />
          <RouteWithLayout
            exact
            path="/news"
            layout={PageLayout}
            component={NewsPage}
          />
          <RouteWithLayout
            exact
            path="/news/:id"
            layout={PageLayout}
            component={NewsDetailPage}
          />
          <RouteWithLayout
            exact
            path="/projects"
            layout={PageLayout}
            component={ProjectsPage}
          />
          <RouteWithLayout
            exact
            path="/projects/:id"
            layout={PageLayout}
            component={ProjectDetailPage}
          />
          <RouteWithLayout
            exact
            path="/events"
            layout={PageLayout}
            component={EventsPage}
          />
          <RouteWithLayout
            exact
            path="/events/:id"
            layout={PageLayout}
            component={EventDetailPage}
          />
           <RouteWithLayout
            exact
            path="/team"
            layout={PageLayout}
            component={TeamPage}
          />
            <RouteWithLayout
            exact
            path="/team/:id"
            layout={PageLayout}
            component={TeamDetailPage}
          />
            <RouteWithLayout
            exact
            path="/testimonials"
            layout={PageLayout}
            component={StatementPage}
          />
          <RouteWithLayout
            exact
            path="/testimonials/:id"
            layout={PageLayout}
            component={StatementDetailPage}
          />
          <RouteWithLayout
            path="/login"
            layout={LoginLayout}
            component={LoginPage}
          />
          <RouteWithLayout
            path="/admin"
            layout={AdminLayout}
            component={AdminPage}
          />
          <RouteWithLayout
            path="/contact"
            layout={PageLayout}
            component={ContactPage}
          />
          <RouteWithLayout
            path="/courses"
            layout={PageLayout}
            component={ServicesPage}
          />
        </Switch>
      </div>
    );
  }
}

export default Main;
