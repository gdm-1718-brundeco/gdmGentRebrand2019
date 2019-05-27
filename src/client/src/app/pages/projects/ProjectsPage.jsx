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

class ProjectsPage extends Component {
    state = {
      showMenu: false
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
            <OverlayMenu menuState={this.state.showMenu} />
            <GridWrapper style="main-page-wrapper">
            <BlankDiv style="blank-div-lg" />
              <GeneralNav
                toggleMenu={this.toggleMenu}
                menustate={this.getParentState()
                }
              />
              <BlankDiv style="blank-div-md" />
              <Title
                style="section-title"
                text="Work"
              />
              <Paragraph
                text="Projecten van onze GDM studenten"
                style="standard-text-paragraph par-pos-1 paragraph-mb-med"
              />
              <Quote
                text="“Neem een kijkje"
                style="primary-quote quote-pos-1"
              />
              <Paragraph style="paragraph-bottomline par-pos-1" />
              <BlankDiv style="blank-div-md" />
              <div className="row-space-between">
                <Featured style="featured-bg-image" />
                <Featured style="featured-bg-image" />
              </div>
              <BlankDiv style="blank-div-lg" />
              <Footer />
            </GridWrapper>
          </ParallaxProvider>
        </React.Fragment>
      );
    }
  }
  
  export default ProjectsPage;