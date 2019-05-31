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
import TeacherProfile from "../../components/card-components/teacher-profile/TeacherProfile";
import EasyFlexRow from "../../components/structural-components/flexbox/easy-flex-row/EasyFlexRow";
import EasyFlexCol from "../../components/structural-components/flexbox/easy-flex-col/EasyFlexCol";

import "./TeamDetailPage.scss";

class TeamDetailPage extends Component {
  state = {
    member: null
  };

  componentWillMount() {
    this.Member(this.props.match.params.id);
  }
  Member = id => {
    Api.findOneMember(id)
      .then(data => {
        this.setState(prevState => ({
          ...prevState,
          member: data
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
    const { member } = this.state;
    if (member != null) {
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
              <EasyFlexRow style="row-space-between">
                <EasyFlexCol style="team-detail-left-div">
                  <Title
                    style="team-name-title-detail"
                    text={member.first_name + " " + member.last_name}
                  />
                  <p className="standard-text-paragraph">{member.job}</p>
                </EasyFlexCol>
                <EasyFlexCol style="col-flex-end team-detail-right-div">
                  <img
                    src={member.image_path}
                    className="team-detail-full-img"
                  />
                  <div className="team-detail-block-pos">
                    <p className="primary-quote-team">{'"' + member.quote + '"'}</p>
                    <p className="standard-text-paragraph-team">{member.bio}</p>
                    <BlankDiv style="blank-div-sm" />
                  </div>
                  <BlankDiv style="blank-div-sm" />
                  <div className="team-detail-block-pos-2">
                    <p className="team-detail-email">{member.email}</p>
                  </div>
                </EasyFlexCol>
              </EasyFlexRow>
              <EasyFlexRow style="team-general-page-wrapper" />
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

export default TeamDetailPage;

var imageStyle = {
  width: "300px",
  height: "300px",
  objectFit: "cover"
};
