import React, { Component } from "react";
import "../../image-components/main-image-component/MainImageComponent";
import MainImageComponent from "../../image-components/main-image-component/MainImageComponent";
import Overlay from "../../styled-components/overlay/Overlay";
import GridWrapper from "../../structural-components/grid-wrapper/GridWrapper";
import Title from "../../text-components/title/Title";
import EasyFlexRow from "../../structural-components/flexbox/easy-flex-row/EasyFlexRow";

class HeaderFullscreen extends Component {
  state = {
    headerProjectTitle: 'Cesar',
    headerProjectMaker: 'Victor Gouhie'
  };

  render() {
    return (
      <MainImageComponent style="project-fullscreen-image">
        <Overlay style="header-overlay">
          <GridWrapper style="header-dynamic-grid">
            <Title
              style="header-maintitle-style header-maintitle-pos"
              text={this.state.headerProjectTitle}
            />
            <Title
              style="small-uppercase-title-style color-wh small-uppercase-title-pos-2"
              text={this.state.headerProjectMaker}
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
