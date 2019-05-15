import React, { Component } from "react";
import "./nav.scss";

class Nav extends Component {
  render() {
    return <nav>{this.props.children}</nav>;
  }
}

export default Nav;
