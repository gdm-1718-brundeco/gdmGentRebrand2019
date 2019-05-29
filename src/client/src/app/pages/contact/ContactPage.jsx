/*
Import extenal libraries
*/
import React, { Component } from "react";

/*
Import internal libraries
*/
import Api from "../../services";

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
import EasyFlexCol from "../../components/structural-components/flexbox/easy-flex-col/EasyFlexCol";

class ContactPage extends Component {
  state = {
    post: null
  };

  componentWillMount() {
    this.loadPost(this.props.match.params.id);
  }

  loadPost = id => {
    Api.findOnePost(id)
      .then(data => {
        this.setState(prevState => ({
          ...prevState,
          post: data
        }));
      })
      .catch(error => {});
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
    const { post } = this.state;
    console.log(post);
    return (
      <React.Fragment>
        <ParallaxProvider>
          <OverlayMenu menustate={this.state.showMenu} />
          <HeaderFullscreen
            toggleMenu={this.toggleMenu}
            menustate={this.getParentState()}
            src={require("../../assets/images/bg-image-contactpage.jpg")}
          />
          <GridWrapper style="main-page-wrapper">
            <GeneralNav
              toggleMenu={this.toggleMenu}
              menustate={this.getParentState()}
            />
            <BlankDiv style="blank-div-md" />
            <Title
              style="section-title"
              text="De school is op 31 december 2000 ontstaan uit de fusie van vier Gentse katholieke hogescholen"
            />
            <Paragraph
              text="De school is op 31 december 2000 ontstaan uit de fusie van vier Gentse katholieke hogescholen: de Hogeschool voor Economisch en Grafisch Onderwijs (EGON). De Arteveldehogeschool is een katholieke hogeschool. De Arteveldehogeschool in Gent biedt diverse bacheloropleidingen aan, alsook bachelor-na-bacheloropleidingen, postgraduaten en bijscholingen en studiedagen. Op het moment van de fusie in 2000 telden deze hogescholen samen ongeveer 6.700 studenten en bijna 800 medewerkers en was de Arteveldehogeschool de op twee na grootste hogeschool in Vlaanderen. Op 1 januari 2017 telde de school meer dan 14.000 studenten en 1.300 personeelsleden."
              style="standard-text-paragraph par-pos-1 paragraph-mb-med"
            />
            <Quote
              text="“Wij stomen toekomstige talenten klaar voor een bruisende toekomst als audiovisual artist, graphic designer of developer” - Luk Bouters, opleidingsdirecteur"
              style="primary-quote quote-pos-1"
            />
            <Paragraph style="paragraph-bottomline par-pos-1" />
            <BlankDiv style="blank-div-lg" />
            <Footer />
          </GridWrapper>
        </ParallaxProvider>
      </React.Fragment>
    );
  }
}

export default ContactPage;
