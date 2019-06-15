/*
Import extenal libraries
*/
import React, { Component } from "react";

/*
Import internal libraries
*/
import Api from "../../services";
import GeneralNav from "../../components/header/general-nav/GeneralNav";
import GridWrapper from "../../components/structural-components/grid-wrapper/GridWrapper";
import Footer from "../../components/footer";
import BlankDiv from "../../components/styled-components/blank-div/BlankDiv";
import OverlayMenu from "../../components/structural-components/overlay-menu/OverlayMenu";
import HeaderFullscreen from "../../components/header/header-fullscreen/HeaderFullscreen";

import "./ProjectsDetailPage.scss";

class ProjectDetailPage extends Component {
  state = {
    showMenu: false,
    project: null,
    projectImage: null
  };

  componentWillMount() {
    this.Project(this.props.match.params.id);
  }
  Project = id => {
    Api.findOneProject(id)
      .then(data => {
        this.setState(prevState => ({
          ...prevState,
          project: data
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
    const { project } = this.state;
    if (project != null) {
      return (
        <React.Fragment>
          <OverlayMenu menustate={this.state.showMenu} />
          {
            <HeaderFullscreen
              toggleMenu={this.toggleMenu}
              menustate={this.getParentState()}
              src={project.images[0].path}
              title={project.title}
              subtitle={project.slug}
            />
          }
          <GridWrapper style="html-wrapper">
            <GridWrapper style="main-page-wrapper">
              <div className="provide-white">
                <GeneralNav
                  toggleMenu={this.toggleMenu}
                  menustate={this.getParentState()}
                />
              </div>
              <BlankDiv style="blank-div-md" />
              <h1 className="section-title">{project.title}</h1>
              <h3 className="primary-quote quote-pos-1">{project.slug}</h3>
              <p className="standard-text-paragraph par-pos-1">
                {project.body}
              </p>
              <BlankDiv style="blank-div-lg" />
              <a
                href="/projects"
                className="primary-subtitle row-center primary-button float-right"
              >
                Terug naar alle projecten
              </a>
              <BlankDiv style="blank-div-lg" />
              <Footer />
            </GridWrapper>
          </GridWrapper>
        </React.Fragment>
      );
    } else {
      return <React.Fragment />;
    }
  }
}

export default ProjectDetailPage;

var imageStyle = {
  width: "300px",
  height: "300px",
  objectFit: "cover"
};
