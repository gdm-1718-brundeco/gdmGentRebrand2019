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

class HomePage extends Component {
  state = {
    posts: []
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

  render() {
    const { posts } = this.state;

    return (
      <React.Fragment>
        {/* <OverlayMenu/> */}
        <ParallaxProvider>
          <Parallax className="custom-class" y={[20, -20]} tagOuter="figure">
            <HeaderFullscreen />
          </Parallax>
          <GridWrapper style="main-page-wrapper">
            <GeneralNav />
            <BlankDiv style="blank-div-md" />
            <Parallax className="custom-class" y={[70, -40]} tagOuter="figure">
            <Title
              style="section-title"
              text="Wat je kan verwachten van onze gdm opleidingen"
            />
            </Parallax>
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
            <BlankDiv style="blank-div-md" />
            <Parallax className="custom-class" y={[70, -40]} tagOuter="figure">
              <div className="row-space-between">
                <Title style="section-title" text="Work" />
              </div>
            </Parallax>
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

export default HomePage;
