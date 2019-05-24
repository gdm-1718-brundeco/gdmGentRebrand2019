import React, { Component } from "react";
import "../../image-components/main-image-component/MainImageComponent";
import Link from "../../text-components/link/Link";
import EasyFlexRow from "../../structural-components/flexbox/easy-flex-row/EasyFlexRow";
import "./GeneralNav.scss";

class GeneralNav extends Component {
  render() {
    const editOverlayButton = {
      overlayTrueTopBorder: "nav-burger-top-wh",
      overlayTrueBottomBorder: "nav-burger-bottom-wh",
      overlayFalseTopBorder: "nav-burger-top",
      overlayFalseBottomBorder: "nav-burger-bottom"
    };
    let menuState = this.props.menustate;
    console.log(menuState);

    return (
      <EasyFlexRow style="row-space-between header-nav-justify-content nav-fixed">
        <Link
          text="arteveldehogeschool"
          style="header-link-to-home bl small-uppercase-title-pos-3"
        />
        <div
          className="nav-burger-box menu-action"
          onClick={this.props.toggleMenu}
          menustate={this.props.menustate}
        >
          <div
            className={
              menuState
                ? editOverlayButton.overlayTrueTopBorder
                : editOverlayButton.overlayFalseTopBorder
            }
          />
          <div
            className={
              menuState
                ? editOverlayButton.overlayTrueBottomBorder
                : editOverlayButton.overlayFalseBottomBorder
            }
          />
        </div>
      </EasyFlexRow>
    );
  }
}

export default GeneralNav;
