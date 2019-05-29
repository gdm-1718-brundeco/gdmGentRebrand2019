import React, { Component } from "react";
import "./OverlayMenu.scss";
import EasyFlexCol from "../flexbox/easy-flex-col/EasyFlexCol";
import EasyFlexRow from "../flexbox/easy-flex-row/EasyFlexRow";
import Title from "../../text-components/title/Title";
import Link from "../../text-components/link/Link";
import Paragraph from "../../text-components/paragraph/Paragraph";
import BlankDiv from "../../styled-components/blank-div/BlankDiv";
import { Route } from "react-router-dom";

/*
Layout
*/
import { LoginLayout, PageLayout } from "../../../layouts";
import { AdminLayout } from "../../../admin/layouts";

class OverlayMenu extends Component {
  render() {
    const showHide = {
      showMenu: "overlay-menu-wrapper bg-color-dark overlay-menu-wrapper",
      hideMenu: "overlay-menu-wrapper overlay-menu-wrapper display-none"
    };
    let menuState = this.props.menustate;

    return (
      <EasyFlexCol style={menuState ? showHide.showMenu : showHide.hideMenu}>
        <EasyFlexRow style="row-space-between" />
        <BlankDiv style="blank-div-md" />
        <EasyFlexRow style="row-space-between">
          <EasyFlexCol style="col-space-between">
            <a href="/projects" className="overlay-menu-links">
              Work
            </a>
            <a href="/services" className="overlay-menu-links">
              Diensten
            </a>
            <a href="/team" className="overlay-menu-links">
              Team
            </a>
            <a href="/statements" className="overlay-menu-links">
              Getuigenissen
            </a>
            <a href="/news" className="overlay-menu-links">
              Nieuws
            </a>
            <a href="/events" className="overlay-menu-links">
              Events
            </a>
            <a href="/contact" className="overlay-menu-links">
              Contact
            </a>
          </EasyFlexCol>
          <EasyFlexCol style="col-flex-start text-align-right">
            <Link
              style="overlay-menu-link"
              text="Github"
              style="overlay-menu-links-social"
            />
            <Link
              style="overlay-menu-link"
              text="Facebook"
              style="overlay-menu-links-social"
            />
            <Link
              style="overlay-menu-link"
              text="Twitter"
              style="overlay-menu-links-social"
            />
            <Link
              style="overlay-menu-link"
              text="Vimeo"
              style="overlay-menu-links-social"
            />
            <Link
              style="overlay-menu-link"
              text="Instagram"
              style="overlay-menu-links-social"
            />
          </EasyFlexCol>
        </EasyFlexRow>
        <BlankDiv style="blank-div-sm" />
        <EasyFlexRow style="row-flex-start">
          <div>
            <Paragraph
              text="Industrieweg 232, 9090 Mariakerke"
              style="overlay-menu-text"
            />
            <Paragraph text="+32 9 234 86 00" style="overlay-menu-text" />
            <Paragraph
              text="Info.grafische.digitalemedia@arteveldehs.be"
              style="overlay-menu-text"
            />
          </div>
        </EasyFlexRow>
      </EasyFlexCol>
    );
  }
}

export default OverlayMenu;
