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
import ProjectHeader from "../../components/header/project-header";
import Link from "../../components/text-components/link/Link";
import EasyFlexRow from "../../components/structural-components/flexbox/easy-flex-row/EasyFlexRow";

class ProjectsPage extends Component {
  state = {
    posts: [],
    pagination: {
      limit: 5,
      page: 1,
      pages: 1,
      total: 1
    }};

  componentWillMount() {
    this.loadProjects(this.props.match.params.id);
  }
  loadProjects = pageIndex => {
    console.log(pageIndex);
    Api.findAllProjects({ limit: 3, skip: pageIndex })
      .then(data => {
        console.log(data.docs)
        const prevPosts = this.state.posts;
        const newPosts = [...prevPosts, ...data.docs];
        this.setState(prevState => ({
          ...prevState,
          posts: newPosts,
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
          <OverlayMenu menuState={this.state.showMenu} />
          <ProjectHeader
            toggleMenu={this.toggleMenu}
            menustate={this.getParentState()}
          />
          <GridWrapper style="main-page-wrapper">
            <GeneralNav
              toggleMenu={this.toggleMenu}
              menustate={this.getParentState()}
            />
            <BlankDiv style="blank-div-md" />
            <Title style="section-title" text={this.state.pageProjectTitle} />
            <Paragraph
              text={this.state.pageProjectContent}
              style="standard-text-paragraph par-pos-1 paragraph-mb-med"
            />
            <Quote
              text={this.state.pageProjectQuote}
              style="primary-quote quote-pos-1"
            />
            <Paragraph style="paragraph-bottomline par-pos-1" />
            <BlankDiv style="blank-div-md" />
            <EasyFlexRow style="row-space-between">
              <Link text="Vorige" style="link-previous-article" />
              <Link text="Volgende" style="link-next-article" />
            </EasyFlexRow>
            <BlankDiv style="blank-div-md" />
            <Footer />
          </GridWrapper>
        </ParallaxProvider>
      </React.Fragment>
    );
  }
}

export default ProjectsPage;
