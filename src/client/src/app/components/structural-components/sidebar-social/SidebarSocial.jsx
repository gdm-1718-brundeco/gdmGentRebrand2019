import React, { Component } from "react";
import "./SidebarSocial.scss";

class SidebarSocial extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-social-links">{this.props.children}</div>
      </div>
    );
  }
}

export default SidebarSocial;
