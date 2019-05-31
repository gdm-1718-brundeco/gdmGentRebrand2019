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
  state = {
    headertitle: `Grafische \n en digitale media`
  };

  render() {
    return (
        <Parallax className="custom-class project-fullscreen-image" y={[20, -20]} tagOuter="figure">
          <img src={this.props.src} className="fullscreen-header-image" />
          <Overlay style="header-overlay">
            <GridWrapper style="header-dynamic-grid">
              <Overlay style="header-overlay" />
              <Title
                style="header-maintitle-style"
                text={this.state.headertitle}
              />
              <Parallax
                className="custom-class"
                y={[50, -100]}
                tagOuter="figure"
              >
                <Title
                  style="primary-subtitle color-wh primary-subtitle-pos-1"
                  text="arteveldehogeschool, mariakerke"
                />
              </Parallax>
              <EasyFlexRow style="flex-row small-uppercase-title-pos-1">
                <Title
                  style="primary-subtitle primary-subtitle-pos-2 color-wh"
                  text="scroll down"
                />
              </EasyFlexRow>
            </GridWrapper>
          </Overlay>
        </Parallax>
    );
  }
}

export default HeaderFullscreen;
