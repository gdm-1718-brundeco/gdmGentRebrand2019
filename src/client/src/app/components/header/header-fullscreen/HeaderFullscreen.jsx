import React, { Component } from "react";
import "../../image-components/main-image-component/MainImageComponent";
import MainImageComponent from "../../image-components/main-image-component/MainImageComponent";
import Overlay from "../../styled-components/overlay/Overlay";
import GridWrapper from "../../structural-components/grid-wrapper/GridWrapper";
import Title from "../../text-components/title/Title";
import EasyFlexRow from "../../structural-components/flexbox/easy-flex-row/EasyFlexRow";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";

import "./HeaderFullscreen.scss";

class HeaderFullscreen extends Component {
  render() {
    return (
        <div className="custom-class project-fullscreen-image">
          <img src={this.props.src} className="fullscreen-header-image" />
          {/* <Overlay style="header-overlay"> */}
            <GridWrapper style="header-dynamic-grid">
              <Overlay style="header-overlay" />
              <Title
                style="header-maintitle-style"
                text={this.props.title}
              />
                <Title
                  style="primary-subtitle color-wh primary-subtitle-pos-1"
                  text={this.props.subtitle}
                />
              <EasyFlexRow style="flex-row small-uppercase-title-pos-1">
                <Title
                  style="primary-subtitle primary-subtitle-pos-2 color-wh"
                  text="scroll down"
                />
              </EasyFlexRow>
            </GridWrapper>
          {/* </Overlay> */}
        </div>
    );
  }
}

export default HeaderFullscreen;
