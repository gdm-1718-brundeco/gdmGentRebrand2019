import React, { Component } from "react";
import "../../image-components/main-image-component/MainImageComponent";
import MainImageComponent from "../../image-components/main-image-component/MainImageComponent";
import Overlay from "../../styled-components/overlay/Overlay";
import GridWrapper from "../../structural-components/grid-wrapper/GridWrapper";
import Title from "../../text-components/title/Title";
import HeaderNav from "../header-nav/HeaderNav";
import EasyFlexRow from "../../structural-components/flexbox/easy-flex-row/EasyFlexRow";

class HeaderFullscreen extends Component {
  state = {
    headertitle: `Grafische \n en digitale media`,
  };

  render() {
    return (
      <MainImageComponent style="header-fullscreen-image">
        <Overlay style="header-overlay">
          <GridWrapper style="header-dynamic-grid">
            <HeaderNav />
            <Title
              style="header-maintitle-style header-maintitle-pos"
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
