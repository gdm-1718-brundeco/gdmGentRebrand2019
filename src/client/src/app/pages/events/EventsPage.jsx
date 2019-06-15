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

import "./EventsPage.scss";

class EventsPage extends Component {
  state = {
    events: [],
    pagination: {
      limit: 5,
      page: 1,
      pages: 1,
      total: 1
    }
  };

  componentWillMount() {
    this.loeadEvents(this.props.match.params.id);
  }
  loeadEvents = pageIndex => {
    console.log(pageIndex);
    Api.findAllEvents({ limit: 3, skip: pageIndex })
      .then(data => {
        console.log(data.docs);
        const prevElements = this.state.events;
        const newElements = [...prevElements, ...data.docs];
        this.setState(prevState => ({
          ...prevState,
          events: newElements,
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
    this.props.history.push(`/events/${id}`);
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
    const { pagination, events } = this.state;
    this.items = this.state.events.map((item, key) => (
      <div key={item.id} className="event-wrapper">
        <h2 className="primary-subtitle">{item.title}</h2>
        <div className="event-border" />
        <div className="image-wrapper">
          <div className="event-image-color-layer" />
          <a href={"/events/" + item.id}>
            <img src={item.image} alt="" className="event-image" />
          </a>
        </div>
        <a href={"/events/" + item.id} className="view-event-button">
          Bekijk event
        </a>
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
            <BlankDiv style="blank-div-lg" />
            <Title style="section-title" text="Events" />
            <div className="event-row-container">{this.items}</div>
            <BlankDiv style="blank-div-lg" />
            <Footer />
          </GridWrapper>
        </GridWrapper>
      </React.Fragment>
    );
  }
}

export default EventsPage;
