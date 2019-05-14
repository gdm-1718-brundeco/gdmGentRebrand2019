import React, { Component } from "react";
import "./Header.scss";

class Header extends Component {
  componentDidMount() {
    // Menu animation
    function toggleClassMenu(e) {
      e.preventDefault();
      myMenu.classList.add("menu--animatable");
      if (!myMenu.classList.contains("menu--visible")) {
        myMenu.classList.add("menu--visible");
      } else {
        myMenu.classList.remove("menu--visible");
      }
    }

    function OnTransitionEnd() {
      myMenu.classList.remove("menu--animatable");
    }

    const myMenu = document.querySelector(".menu");
    const oppMenu = document.getElementById("menu");
    myMenu.addEventListener("transitionend", OnTransitionEnd, false);
    oppMenu.addEventListener("click", toggleClassMenu, false);
    myMenu.addEventListener("click", toggleClassMenu, false);
  }

  render() {
    return (
      <React.Fragment>
        <div className="menu">
          <div className="app-menu">
            <div className="row-1">
              <h2 className="menu-h2">Arteveldehogeschool</h2>
              <img src="images/icons/close-menu.svg" alt="" />
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

        <div className="header">
          <div className="grid-wrapper">
            <nav>
              <div className="menu-action">
                <a href="" id="menu">
                  Menu
                </a>
              </div>
            </nav>
            <div className="sidebar">
              <div className="social-links">
                <a href="">
                  <img src="../../assets/icons/social/twitter.svg" alt="" />
                </a>
                <a href="">
                  <img src="" alt="" />
                </a>
                <a href="">
                  <img src="" alt="" />
                </a>
                <a href="">
                  <img src="" alt="" />
                </a>
                <a href="">
                  <img src="" alt="" />
                </a>
              </div>
            </div>
            <div className="align-end-left">
              <div className="orange-circle-left animated fadeIn" />
            </div>
            <div className="align-end-top">
              <p>Arteveldehogeschool</p>
            </div>
            <div className="main-image animated fadeIn" />
            <div className="orange-square animated fadeIn" />
            <p className="gdm-baseline">Grafische en digitale media</p>
            <div className="upcoming-events animated bounceInUp">
              <h2>22 juni - 2d modelling</h2>
              <p>
                Het event word afgetrapt door een korte voorstelling van de
                professionals.
              </p>
              <a href="" id="eventArrow">
                <img src="images/icons/event-arrow.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
