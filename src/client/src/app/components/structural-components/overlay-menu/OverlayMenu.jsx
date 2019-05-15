import React, { Component } from "react";
import "./OverlayMenu.scss";

class OverlayMenu extends Component {
  state = {
    translateY: 0
  };

  handleTranslate = e => {
    this.setState({ translateY: this.state.translate + 130 });
  };

  render() {
    return (
      <div className="menu">
        <div className="app-menu">
          <div className="row-1">
            <h2 className="menu-h2">Arteveldehogeschool</h2>
            <img src="../../../assets/icons/general/close-menu.svg" alt="" />
          </div>
          <div className="row-2">
            <h4 className="menu-title">Social</h4>
            <div className="menu-title-decoration" />
          </div>
          <div className="row-3">
            <div>
              <a href="" className="menu-links">
                Github
              </a>
              <a href="" className="menu-links">
                Facebook
              </a>
              <a href="" className="menu-links">
                Twitter
              </a>
              <a href="" className="menu-links">
                Vimeo
              </a>
              <a href="" className="menu-links">
                Instagram
              </a>
            </div>
            <div className="align-right">
              <a href="" className="menu-links">
                Home
              </a>
              <a href="" className="menu-links">
                In de kijker
              </a>
              <a href="" className="menu-links">
                Made by gdm
              </a>
              <a href="" className="menu-links">
                Externe projecten
              </a>
              <a href="" className="menu-links">
                Opendeurdag
              </a>
              <a href="" className="menu-links">
                Arteveldehogeschool
              </a>
            </div>
          </div>
          <div className="row-4">
            <h4 className="menu-title">Contact</h4>
            <div className="menu-title-decoration" />
          </div>
          <div className="row-5">
            <div>
              <p>Industrieweg 232, 9090 Mariakerke</p>
              <p>+32 9 234 86 00</p>
              <p> info.grafische.digitalemedia@arteveldehs.be</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OverlayMenu;
