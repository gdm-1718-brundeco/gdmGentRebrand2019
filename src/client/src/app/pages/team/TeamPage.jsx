/*
Import extenal libraries
*/
import React, { Component } from "react";

/*
Import internal libraries
*/
import Api from "../../services";

/*
Import css file
*/
import "./TeamPage.scss";

/*
Import components
*/
import GridWrapper from "../../components/structural-components/grid-wrapper/GridWrapper";
import Title from "../../components/text-components/title/Title";
import Paragraph from "../../components/text-components/paragraph/Paragraph";
import GeneralNav from "../../components/header/general-nav/GeneralNav";
import BlankDiv from "../../components/styled-components/blank-div/BlankDiv";
import Footer from "../../components/footer";
import OverlayMenu from "../../components/structural-components/overlay-menu/OverlayMenu";
import EasyFlexRow from "../../components/structural-components/flexbox/easy-flex-row/EasyFlexRow";

class TeamPage extends Component {
  state = {
    team: [],
    post: null
  };
  async componentWillMount() {
    await this.loadTeam(1);
  }

  loadTeam = pageIndex => {
    Api.findTeam({ limit: 4, skip: pageIndex })
      .then(data => {
        const prevMember = this.state.team;
        const newMember = [...prevMember, ...data.docs];
        this.setState(prevState => ({
          ...prevState,
          team: newMember,
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
    const { team } = this.state;
    this.items = team.map(item => (
      <div key={item.id} className="col-space-between team-card-wrapper">
        <h2 className="team-name-title">
          {item.first_name} {item.last_name}
        </h2>
        <p className="team-jobsubscription">{item.job}</p>
        <div className="card-zoom">
          <a href={"/team/" + item.id}>
            <img src={item.image_path} className="team-thumbnail" />
          </a>
        </div>
        <a href={"/team/" + item.id} className="team-read-more-button">
          i
        </a>
      </div>
    ));
    return (
      <React.Fragment>
        <OverlayMenu menustate={this.state.showMenu} />
        <GridWrapper style="html-wrapper">
          <GridWrapper style="main-page-wrapper">
            <BlankDiv style="blank-div-lg" />
            <GeneralNav
              toggleMenu={this.toggleMenu}
              menustate={this.getParentState()}
            />
            <Title style="section-title" text="Team" />
            <Paragraph
              text="Wat als je drie studententeams in verschillende landen dezelfde briefing geeft? En ze vervolgens parallel aan hun eigen oplossing laat werken? In het initiatief Parkspot besloten docenten van de Hogeschool van Amsterdam, Hochschulde der Medien (Stuttgart) en Arteveldehogeschool om dat eens uit te testen."
              style="standard-text-paragraph par-pos-1 paragraph-mb-med"
            />
            <EasyFlexRow style="team-general-page-wrapper">
              {this.items}
            </EasyFlexRow>
            <Footer />
          </GridWrapper>
        </GridWrapper>
      </React.Fragment>
    );
  }
}

export default TeamPage;
var imageStyle = {
  width: "300px",
  height: "300px",
  objectFit: "cover"
};
