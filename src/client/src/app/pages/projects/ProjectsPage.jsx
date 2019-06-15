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
import Title from "../../components/text-components/title/Title";
import OverlayMenu from "../../components/structural-components/overlay-menu/OverlayMenu";
import PrimaryButton from "../../components/button-components/primary-button/PrimaryButton";
import EasyFlexRow from "../../components/structural-components/flexbox/easy-flex-row/EasyFlexRow";
import "./ProjectsPage.scss";

class ProjectsPage extends Component {
  state = {
    quote: `Join GDM. \n Let's build cool things together.`,
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
          <a href={"/projects/" + item.id}>
            <img src={item.images[0].path} className="placeholder" />
          </a>
        </div>
        <p className="card-synopsis">{item.synopsis}</p>
        <br />
      </div>
    ));
    return (
      <React.Fragment>
        <OverlayMenu menustate={this.state.showMenu} />
        <GridWrapper style="html-wrapper">
          <GridWrapper style="main-page-wrapper">
            <GeneralNav
              toggleMenu={this.toggleMenu}
              menustate={this.getParentState()}
            />
          </GridWrapper>
          <BlankDiv style="blank-div-md" />
          <GridWrapper style="main-page-wrapper">
            <Title style="section-title" text="Projecten" />
            <EasyFlexRow style="row-space-between col-card-width-1 ">
              {this.items}
            </EasyFlexRow>
            <BlankDiv style="blank-div-lg" />
          </GridWrapper>
          <EasyFlexRow style="row-space-between-passion-block">
            <div className="passion-block">
              <h2 className="passion-quote">{this.state.quote}</h2>
              <BlankDiv style="blank-div-sm" />
            </div>
          </EasyFlexRow>
          <BlankDiv style="blank-div-lg" />
          <GridWrapper style="main-page-wrapper">
            <a
              href="/events"
              className="primary-subtitle row-center primary-button link-to-events"
            >
              GDM events
            </a>
            <BlankDiv style="blank-div-lg" />

            <Footer />
          </GridWrapper>
        </GridWrapper>
      </React.Fragment>
    );
  }
}

export default ProjectsPage;
