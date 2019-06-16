/*
Import extenal libraries
*/
import React, { Component } from "react";

/*
Import stylesheet
*/
import "./ServicesPage.scss";

import Api from "../../services";
/*
Import components
*/
import GridWrapper from "../../components/structural-components/grid-wrapper/GridWrapper";
import Title from "../../components/text-components/title/Title";
import GeneralNav from "../../components/header/general-nav/GeneralNav";
import BlankDiv from "../../components/styled-components/blank-div/BlankDiv";
import Footer from "../../components/footer";
import OverlayMenu from "../../components/structural-components/overlay-menu/OverlayMenu";
import EasyFlexRow from "../../components/structural-components/flexbox/easy-flex-row/EasyFlexRow";

class ServicesPage extends Component {
  state = {
    courses: [],
    pagination: {
      limit: 5,
      page: 1,
      pages: 1,
      total: 1
    }
  };

  async componentWillMount() {
    await this.loadCourses();
  }

  loadCourses = pageIndex => {
    // console.log(pageIndex);
    Api.findAllCourses({ limit: 100, skip: pageIndex })
      .then(data => {
        const prevCourses = this.state.courses;
        const newCourses = [...prevCourses, ...data.docs];
        this.setState(prevState => ({
          ...prevState,
          courses: newCourses,
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
    this.items = this.state.courses.map(item => (
      <a href={"/courses/" + item.id}>
        <div key={item.id} className="course-container">
          <h2 className="course-title">{item.name}</h2>
          <p className="course-description">{item.description}</p>
          <EasyFlexRow style="row-space-between">
            <p className="course-points">{item.points + " studiepunten"}</p>
            <p className="course-year">{"schijf " + item.year}</p>
          </EasyFlexRow>
          <EasyFlexRow style="row-flex-start course-btn-wrapper">
            <a href="/home" className="course-info-btn">
              Lees meer
            </a>
          </EasyFlexRow>
        </div>
      </a>
    ));
    return (
      <React.Fragment>
        <OverlayMenu menustate={this.state.showMenu} />
        <GridWrapper style="html-wrapper">
          <GridWrapper style="main-page-wrapper">
            <BlankDiv style="blank-div-lg" />
            <Title style="section-title" text="GDM richtingen" />
            <GeneralNav
              toggleMenu={this.toggleMenu}
              menustate={this.getParentState()}
            />
            <div>{this.items}</div>
            <Footer />
          </GridWrapper>
        </GridWrapper>
      </React.Fragment>
    );
  }
}

export default ServicesPage;
