import React, { Component } from "react";
import "../../image-components/main-image-component/MainImageComponent";
import MainImageComponent from "../../image-components/main-image-component/MainImageComponent";
import Overlay from "../../styled-components/overlay/Overlay";
import GridWrapper from "../../structural-components/grid-wrapper/GridWrapper";
import Title from "../../text-components/title/Title";
import EasyFlexRow from "../../structural-components/flexbox/easy-flex-row/EasyFlexRow";

import "./HeaderFullscreen.scss";

class HeaderFullscreen extends Component {
  state = {
    headertitle: `Grafische \n en digitale media`
  };

  render() {
    let imageState = this.props.imagestate;
    return (
      <MainImageComponent style="project-fullscreen-image">
        <Overlay style="header-overlay">
          <GridWrapper style="header-dynamic-grid">
            <img src={this.props.src} className="fullscreen-header-image" />
            <Overlay style="header-overlay" />
              <Title
                style="header-maintitle-style"
                text={this.state.headertitle}
              />
            <Title
              style="small-uppercase-title-style color-wh small-uppercase-title-pos-2"
              text="arteveldehogeschool, mariakerke"
            />
            <EasyFlexRow style="flex-row small-uppercase-title-pos-1">
              <Title
                style="small-uppercase-title-style rotate color-wh"
                text="scroll down"
              />
            </EasyFlexRow>
          </GridWrapper>
        </Overlay>
      </MainImageComponent>
    );
  }
}

export default HeaderFullscreen;
