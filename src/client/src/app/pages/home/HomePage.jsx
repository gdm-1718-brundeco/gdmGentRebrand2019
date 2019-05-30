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
    projects: [],
    projectImage: null,
    pagination: {
      limit: 5,
      page: 1,
      pages: 1,
      total: 1
    }
  };

  componentWillMount() {
    this.loadPosts();
  }

  loadPosts = pageIndex => {
    // console.log(pageIndex);
    Api.findAllProjects({ limit: 2, skip: pageIndex })
      .then(data => {
        // console.log(data.docs[0].images);
        const prevProjects = this.state.projects;
        const newProjects = [...prevProjects, ...data.docs];
        this.setState(prevState => ({
          ...prevState,
          projects: newProjects,
          pagination: {
            limit: data.limit,
            page: data.page,
            pages: data.pages,
            total: data.total
          }
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
    const { pagination, projects } = this.state;

    this.items = this.state.projects.map((item, key) => (
      <div key={item.id} className="col-space-between card-wrapper">
        <h2 className="primary-subtitle">{item.title}</h2>
        <div className="card-zoom">
          <img
            src={item.images[0].path}
            className="placeholder"
            href={"/projects/" + item.id}
          />
        </div>
        <p className="card-synopsis">{item.synopsis}</p>
        <br />
      </div>
    ));
    return (
      <ParallaxProvider>
        <React.Fragment>
          <OverlayMenu menustate={this.state.showMenu} />
          <HeaderFullscreen
            src={require("../../assets/images/bg-image-homepage-3.jpg")}
          />
          <GridWrapper style="main-page-wrapper">
            <GeneralNav
              toggleMenu={this.toggleMenu}
              menustate={this.getParentState()}
            />
            <BlankDiv style="blank-div-md" />
            <Title
              style="section-title"
              text="Wat je kan verwachten van onze GDM opleidingen"
            />
            <Parallax className="custom-class" y={[-20, 40]} tagOuter="figure">
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
                  className="primary-subtitle row-center primary-button"
                >
                  Bekijk onze richtingen
                </a>
              </EasyFlexRow>
            </Parallax>
            <BlankDiv style="blank-div-md" />
            <div className="row-space-between">
              <Title style="section-title" text="Door GDM" />
            </div>
            <EasyFlexRow style="row-space-between col-card-width-1 ">
              {this.items}
            </EasyFlexRow>
            <BlankDiv style="blank-div-md" />
            <EasyFlexRow style="row-center">
              <a
                href="/projects"
                className="primary-subtitle row-center primary-button"
              >
                Bekijk meer projecten
              </a>
            </EasyFlexRow>
            <BlankDiv style="blank-div-lg" />
            <Footer />
          </GridWrapper>
        </React.Fragment>
      </ParallaxProvider>
    );
  }
}

export default HomePage;
