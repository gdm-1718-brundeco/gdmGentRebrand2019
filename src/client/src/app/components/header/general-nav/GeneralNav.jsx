import React, { Component } from "react";
import "../../image-components/main-image-component/MainImageComponent";
import Link from "../../text-components/link/Link";
import EasyFlexRow from "../../structural-components/flexbox/easy-flex-row/EasyFlexRow";
import "./GeneralNav.scss";

class GeneralNav extends Component {
  state = {
    childElState: "fade-out-menutitle",
    parentElState: "nav-burger-box menu-action",
  };

  constructor(props) {
    super(props);
    this.parentEl = React.createRef();
    this.childEl = React.createRef();
  }

  addClass = () => {
    this.setState({
      childElState: "fade-in-menutitle",
    })
  };

  removeClass = () => {
    this.setState({
      childElState: "fade-out-menutitle"
    })
  };

  fadeInCross = () => {
    this.setState({
      parentElState: "nav-burger-box menu-action fade-in-cross"
    })
  }

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
        {/* <Link
          text="arteveldehogeschool"
          style="header-link-to-home bl small-uppercase-title-pos-3"
        /> */}
        <a href="/home" className="header-link-to-home bl small-uppercase-title-pos-3">arteveldehogeschool</a>
        <div
          className={this.state.parentElState}
          onClick={this.props.toggleMenu}
          menustate={this.props.menustate}
          ref={this.parentEl}
          onMouseOver={this.addClass}
          onMouseOut={this.removeClass}
        >
          <p ref={this.childEl} className={this.state.childElState}>
            menu
          </p>
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
