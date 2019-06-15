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
import GridWrapper from "../../components/structural-components/grid-wrapper/GridWrapper";
import Title from "../../components/text-components/title/Title";
import GeneralNav from "../../components/header/general-nav/GeneralNav";
import BlankDiv from "../../components/styled-components/blank-div/BlankDiv";
import Footer from "../../components/footer";
import OverlayMenu from "../../components/structural-components/overlay-menu/OverlayMenu";
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
                </EasyFlexCol>
              </EasyFlexRow>
              <EasyFlexCol style="col-flex-space-between">
                <div className="team-detail-block-pos">
                  <p className="primary-quote-team">
                    {member.quote}
                  </p>
                </div>
              </EasyFlexCol>
              <EasyFlexCol style="col-flex-space-between">
                <div className="team-detail-block-pos-2">
                  <p className="standard-text-paragraph fw-paragraph">
                    {member.bio}
                  </p>
                </div>
                <a
                href={"mailto:"+ member.email}
                  className="team-detail-email"
                >
                {member.email}
                </a>
                <a
                href="/team"
                  className="primary-button back-to-team"
                >
                Terug naar teamleden
                </a>
              </EasyFlexCol>
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
