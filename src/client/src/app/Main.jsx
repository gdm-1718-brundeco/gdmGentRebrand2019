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
import NewsDetail from "./pages/news-detail";
import ProjectDetailPage from './pages/project-detail/ProjectDetailPage';
import ProjectsPage from './pages/projects/ProjectsPage';



/*
Import styling
*/
import "./Main.css";
import { homedir } from "os";

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
            component={NewsDetail}
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
            path="/team"
            layout={PageLayout}
            component={TeamPage}
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
        </Switch>
      </div>
    );
  }
}

export default Main;
