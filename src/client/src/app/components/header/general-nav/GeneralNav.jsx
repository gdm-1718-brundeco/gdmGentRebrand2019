import React, { Component } from "react";
import "../../image-components/main-image-component/MainImageComponent";
import Link from "../../text-components/link/Link";
import EasyFlexRow from "../../structural-components/flexbox/easy-flex-row/EasyFlexRow";
import "./GeneralNav.scss";

class GeneralNav extends Component {
  render() {
    return (
      <EasyFlexRow style="row-space-between header-nav-justify-content nav-fixed">
        <Link
          text="arteveldehogeschool"
          style="header-link-to-home bl small-uppercase-title-pos-3"
        />
        <div
          className="nav-burger-box menu-action"
          onClick={this.props.toggleMenu}
        >
          <div className="nav-burger-top" />
          <div className="nav-burger-bottom" />
        </div>
      </EasyFlexRow>
    );
  }
}

export default GeneralNav;
