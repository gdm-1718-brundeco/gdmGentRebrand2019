/*
Import extenal libraries
*/
import React, { Component } from "react";

/*
Import internal libraries
*/
import Api from "../../services";
import PostsListPaged from "../../components/posts-list-paged";
import GeneralNav from "../../components/header/general-nav/GeneralNav";
import GridWrapper from "../../components/structural-components/grid-wrapper/GridWrapper";
import Footer from "../../components/footer";
import BlankDiv from "../../components/styled-components/blank-div/BlankDiv";
import Link from "../../components/text-components/link/Link";
import Title from "../../components/text-components/title/Title";
import Overlay from "../../components/styled-components/overlay/Overlay";
import OverlayMenu from "../../components/structural-components/overlay-menu/OverlayMenu";
import HeaderFullscreen from "../../components/header/header-fullscreen/HeaderFullscreen";
import Paragraph from "../../components/text-components/paragraph/Paragraph";
import Quote from "../../components/text-components/quote";
import Featured from "../../components/card-components/featured/Featured";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import PrimaryButton from "../../components/button-components/primary-button/PrimaryButton";
import ProjectHeader from "../../components/header/project-header";
import EasyFlexRow from "../../components/structural-components/flexbox/easy-flex-row/EasyFlexRow";

import MainImageComponent from "../../components/image-components/main-image-component";
import EasyFlexCol from "../../components/structural-components/flexbox/easy-flex-col/EasyFlexCol";

class ProjectsPage extends Component {
  state = {
    projects: [],
    projectImage: null,
    pagination: {
      limit: 5,
      page: 1,
      pages: 1,
      total: 1
    }
  };

  async componentWillMount() {
    await this.loadPosts(1);
  }

  loadPosts = pageIndex => {
    // console.log(pageIndex);
    Api.findAllProjects({ limit: 4, skip: pageIndex })
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

  goToProjectDetailPage = id => {
    this.props.history.push(`/projects/${id}`);
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
    this.items = this.state.projects.map(item => (
      <div key={item.id} className="col-space-between card-wrapper">
        <h2 className="primary-subtitle">{item.title}</h2>
        <div className="card-zoom">
          <a  href={"/projects/" + item.id}>
          <img
            src={item.images[0].path}
            className="placeholder"    
          />
          </a>
        </div>
        <p className="card-synopsis">{item.synopsis}</p>
        <br />
      </div>
    ));
    return (
      <React.Fragment>
        <OverlayMenu menustate={this.state.showMenu} />
        <GridWrapper style="main-page-wrapper">
          <GeneralNav
            toggleMenu={this.toggleMenu}
            menustate={this.getParentState()}
          />
          <BlankDiv style="blank-div-lg" />
          <Title style="section-title" text="Work" />
          <Paragraph
            text="Wat als je drie studententeams in verschillende landen dezelfde briefing geeft? En ze vervolgens parallel aan hun eigen oplossing laat werken? In het initiatief Parkspot besloten docenten van de Hogeschool van Amsterdam, Hochschulde der Medien (Stuttgart) en Arteveldehogeschool om dat eens uit te testen."
            style="standard-text-paragraph par-pos-1 paragraph-mb-med"
          />
          <BlankDiv style="blank-div-lg" />
          <Title style="section-title" text="Projecten" />
          <BlankDiv style="blank-div-lg" />
          <EasyFlexRow style="row-space-between col-card-width-1 ">
            {this.items}
          </EasyFlexRow>
          <BlankDiv style="blank-div-lg" />
          <Footer />
        </GridWrapper>
      </React.Fragment>
    );
  }
}

export default ProjectsPage;
