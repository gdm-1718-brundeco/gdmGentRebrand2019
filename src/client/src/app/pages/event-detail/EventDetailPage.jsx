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

class EventDetailPage extends Component {
  state = {
    event: null
  };

  componentWillMount() {
    this.Event(this.props.match.params.id);
  }
  Event = id => {
    Api.findOneEvent(id)
      .then(data => {
        this.setState(prevState => ({
          ...prevState,
          event: data
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
    const { event } = this.state;
    if (event != null) {
      return (
        <React.Fragment>
          <OverlayMenu menustate={this.state.showMenu} />
          <GridWrapper style="html-wrapper">
            <GridWrapper style="main-page-wrapper">
              <div className="provide-white">
                <GeneralNav
                  toggleMenu={this.toggleMenu}
                  menustate={this.getParentState()}
                />
              </div>
              <BlankDiv style="blank-div-md" />
              <h1 className="section-title">{event.title}</h1>
              <h3 className="primary-quote quote-pos-1">{event.slug}</h3>
              <p className="standard-text-paragraph par-pos-1">{event.body}</p>
              {/* {projectImage.map((value, key) => {
                return <img key={key} src={value.path} style={imageStyle} />;
              })} */}
              <BlankDiv style="blank-div-lg" />
              <a
                href="/events"
                className="primary-subtitle row-center primary-button"
              >
                Terug naar alle events
              </a>
              <BlankDiv style='blank-div-md'/>
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

export default EventDetailPage;
