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
import TeacherProfile from "../../components/card-components/teacher-profile/TeacherProfile";

class TeamPage extends Component {
  state = {
    team: [],
    post: null
  };
  async componentWillMount() {
    await this.loadTeam(1);
  }

  loadTeam = pageIndex => {
    // console.log(pageIndex);
    Api.findTeam({ limit: 4, skip: pageIndex })
      .then(data => {
        // console.log(data.docs[0].images);
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
      <div key={item.id} className="col-space-between card-wrapper">
        <h2 className="primary-subtitle">{item.first_name} {item.last_name}</h2>
        <div className="card-zoom">
          <a  href={"/team/" + item.id}>
            <img
              src={item.image_path}
              style={imageStyle}
            />
          </a>
        </div>
        <p className="card-synopsis">{item.job}</p>
       
        <a  href={"/team/" + item.id} >Meer</a>
      </div>
    ));
    return (
      <React.Fragment>
        <OverlayMenu menustate={this.state.showMenu} />
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
          <BlankDiv style="blank-div-lg" />
          {/* <TeacherProfile />
          <TeacherProfile />
          <TeacherProfile /> */}
           {this.items}
          <Footer />

        </GridWrapper>
      </React.Fragment>
    );
  }
}

export default TeamPage;
var imageStyle = {
  width: '300px',
  height:'300px',
  objectFit: 'cover',
};