import React, { Component } from "react";
import "./MainImageComponent.scss";

class MainImageComponent extends Component {
  state = {
    text: this.props.text,
    style: this.props.style,
    children: this.props.children
  };
  render() {
    return <div className={this.state.style}>{this.state.children}</div>;
  }
}

export default MainImageComponent;
