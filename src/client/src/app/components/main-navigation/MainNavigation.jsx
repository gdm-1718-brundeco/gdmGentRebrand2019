import React, { Component } from "react";
import "./MainNavigation.scss";

class MainNavigation extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="grid-wrapper-navigation">
          <nav>
            <div className="menu-action">
              <a href="" id="menu">
                Menu
              </a>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default MainNavigation;
