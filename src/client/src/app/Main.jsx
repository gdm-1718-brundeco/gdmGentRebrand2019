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
import PostDetailPage from './pages/post-detail';
import HomePage from "./pages/home";
import NewsPage from "./pages/news";
import TeamPage from "./pages/team";
import NewsDetail from "./pages/news-detail";

/*
Import styling
*/
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <RouteWithLayout
            exact
            path="/"
            layout={PageLayout}
            component={NewsDetail}
          />
          <Redirect from="/home" to="/" />
          <RouteWithLayout
            exact
            path="/news"
            layout={PageLayout}
            component={TeamPage}
          />
          <RouteWithLayout
            exact
            path="/news/:id"
            layout={PageLayout}
            component={PostDetailPage}
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
