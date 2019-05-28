/*
Import extenal libraries
*/
import React, { Component, Image } from "react";

/*
Import internal libraries
*/
import Api from "../../services";
// import PostsList from "../../components/start-components/posts-list";

/*
Import css file
*/
import "./HomePage.scss";

/*
Import components
*/
import HeaderFullscreen from "../../components/header/header-fullscreen/HeaderFullscreen";
import GridWrapper from "../../components/structural-components/grid-wrapper/GridWrapper";
import Title from "../../components/text-components/title/Title";
import Paragraph from "../../components/text-components/paragraph/Paragraph";
import Quote from "../../components/text-components/quote";
import GeneralNav from "../../components/header/general-nav/GeneralNav";
import Featured from "../../components/card-components/featured/Featured";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import BlankDiv from "../../components/styled-components/blank-div/BlankDiv";
import Footer from "../../components/footer";
import OverlayMenu from "../../components/structural-components/overlay-menu/OverlayMenu";
import PrimaryButton from "../../components/button-components/primary-button/PrimaryButton";
import EasyFlexRow from "../../components/structural-components/flexbox/easy-flex-row/EasyFlexRow";

class HomePage extends Component {
  state = {
    showMenu: false,
    headerImage: require("../../assets/images/robot.jpeg")
  };

  componentWillMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    Api.findAllPosts()
      .then(data => {
        this.setState(prevState => ({
          ...prevState,
          posts: data
        }));
      })
      .catch(error => {
        console.log(error);
      });
  };

  goToPostDetailPage = id => {
    this.props.history.push(`/news/${id}`);
  };

  toggleMenu = e => {
    e.preventDefault();
    this.setState(state => ({ showMenu: !state.showMenu }));
  };

  getParentState = e => {
    let parentState = this.state.showMenu;
    return parentState;
  };

  render() {
    return (
      <React.Fragment>
        <ParallaxProvider>
          <OverlayMenu menustate={this.state.showMenu} />
          <HeaderFullscreen
            toggleMenu={this.toggleMenu}
            menustate={this.getParentState()}
            src={require("../../assets/images/bg-image-homepage.jpg")}
          />
          <GridWrapper style="main-page-wrapper">
            <GeneralNav
              toggleMenu={this.toggleMenu}
              menustate={this.getParentState()}
            />
            <BlankDiv style="blank-div-md" />
            <Title
              style="section-title"
              text="Wat je kan verwachten van onze gdm opleidingen"
            />
            <Paragraph
              text="Wat als je drie studententeams in verschillende landen dezelfde briefing geeft? En ze vervolgens parallel aan hun eigen oplossing laat werken? In het initiatief Parkspot besloten docenten van de Hogeschool van Amsterdam, Hochschulde der Medien (Stuttgart) en Arteveldehogeschool om dat eens uit te testen."
              style="standard-text-paragraph par-pos-1 paragraph-mb-med"
            />
            <Quote
              text="“Wij stomen toekomstige talenten klaar voor een bruisende toekomst als audiovisual artist, graphic designer of developer” - Luk 
Bouters, opleidingsdirecteur"
              style="primary-quote quote-pos-1"
            />
            <Paragraph style="paragraph-bottomline par-pos-1" />
            <EasyFlexRow style="row-end">
              <a
                href="/"
                className="small-uppercase-title-style row-center primary-button"
              >
                Bekijk onze richtingen
              </a>
            </EasyFlexRow>
            <BlankDiv style="blank-div-md" />
            <div className="row-space-between">
              <Title style="section-title" text="Work" />
            </div>
            <div className="row-space-between">
              <Featured style="featured-bg-image" />
              <Featured style="featured-bg-image" />
            </div>
            <BlankDiv style="blank-div-md" />
            <EasyFlexRow style="row-center">
              <a
                href="/projects"
                className="small-uppercase-title-style row-center primary-button"
              >
                Bekijk alle projecten
              </a>
            </EasyFlexRow>
            <BlankDiv style="blank-div-lg" />
            <Footer />
          </GridWrapper>
        </ParallaxProvider>
      </React.Fragment>
    );
  }
}

export default HomePage;
