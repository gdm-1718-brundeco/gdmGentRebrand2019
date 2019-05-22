import React, { Component } from "react";
import "./OverlayMenu.scss";
import EasyFlexCol from "../flexbox/easy-flex-col/EasyFlexCol";
import EasyFlexRow from "../flexbox/easy-flex-row/EasyFlexRow";
import Title from "../../text-components/title/Title";
import Link from "../../text-components/link/Link";
import Paragraph from "../../text-components/paragraph/Paragraph";

class OverlayMenu extends Component {
  state = {
    translateY: 0
  };

  handleTranslate = e => {
    this.setState({ translateY: this.state.translate + 130 });
  };

  render() {
    return (
      <EasyFlexCol style="overlay-menu-wrapper bg-color-dark overlay-menu-wrapper">
        <EasyFlexRow style="row-space-between-no-margin">
          <Title
            style="small-uppercase-title-style color-wh"
            text="Arteveldehogeschool"
          />
          <Title style="small-uppercase-title-style" text="Sluiten" style="small-uppercase-title-style color-wh"/>
        </EasyFlexRow>
        <EasyFlexRow style="row-align-right">
          <div className="overlay-menu-title-div">
            <Title style="overlay-menu-section-title" text="Social" style="color-wh"/>
          </div>
        </EasyFlexRow>
        <EasyFlexRow style="row-space-between-no-margin">
          <EasyFlexCol style="col-space-between">
            <Link style="overlay-menu-link" text="Nieuws" style="overlay-menu-links"/>
            <Link style="overlay-menu-link" text="Work" style="overlay-menu-links"/>
            <Link style="overlay-menu-link" text="Events" style="overlay-menu-links"/>
            <Link style="overlay-menu-link" text="Diensten" style="overlay-menu-links"/>
            <Link style="overlay-menu-link" text="Team" style="overlay-menu-links"/>
            <Link style="overlay-menu-link" text="Getuigenissen" style="overlay-menu-links"/>
            <Link style="overlay-menu-link" text="Contact" style="overlay-menu-links"/>
          </EasyFlexCol>
          <EasyFlexCol style="col-space-between text-align-right">
            <Link style="overlay-menu-link" text="Github" style="overlay-menu-links-social"/>
            <Link style="overlay-menu-link" text="Facebook" style="overlay-menu-links-social"/>
            <Link style="overlay-menu-link" text="Twitter" style="overlay-menu-links-social"/>
            <Link style="overlay-menu-link" text="Vimeo" style="overlay-menu-links-social"/>
            <Link style="overlay-menu-link" text="Instagram" style="overlay-menu-links-social"/>
          </EasyFlexCol>
        </EasyFlexRow>
        <EasyFlexRow style="row-align-right">
          <div className="overlay-menu-title-div">
            <Title style="overlay-menu-section-title" text="Contact" style="overlay-menu-links"/>
          </div>
        </EasyFlexRow>
        <EasyFlexRow style="row-align-right text-align-right">
          <div>
            <Paragraph text="Industrieweg 232, 9090 Mariakerke" style="color-wh"/>
            <Paragraph text="+32 9 234 86 00" style="overlay-menu-links-social"/>
            <Paragraph text="Info.grafische.digitalemedia@arteveldehs.be" style="overlay-menu-links-social"/>
          </div>
        </EasyFlexRow>
      </EasyFlexCol>
    );
  }
}

export default OverlayMenu;
