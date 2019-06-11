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
import "./StatementDetailPage.scss";

/*
Import components
*/
import HeaderFullscreen from "../../components/header/header-fullscreen/HeaderFullscreen";
import GridWrapper from "../../components/structural-components/grid-wrapper/GridWrapper";
import Title from "../../components/text-components/title/Title";
import Paragraph from "../../components/text-components/paragraph/Paragraph";
import Quote from "../../components/text-components/quote";
import GeneralNav from "../../components/header/general-nav/GeneralNav";
import BlankDiv from "../../components/styled-components/blank-div/BlankDiv";
import Footer from "../../components/footer";
import OverlayMenu from "../../components/structural-components/overlay-menu/OverlayMenu";
import TeacherProfile from "../../components/card-components/teacher-profile/TeacherProfile";
import EasyFlexRow from "../../components/structural-components/flexbox/easy-flex-row/EasyFlexRow";
import EasyFlexCol from "../../components/structural-components/flexbox/easy-flex-col/EasyFlexCol";

class StatementPage extends Component {
  state = {
    testemonials: []
  };

  componentWillMount() {
    this.loadTestemonials(1);
  }

  loadTestemonials = pageIndex => {
    Api.findTestemonials({ limit: 4, skip: pageIndex })
      .then(data => {
        console.log(data.docs);
        const prevTestomial = this.state.testemonials;
        const newTestemonial = [...prevTestomial, ...data.docs];
        this.setState(prevState => ({
          ...prevState,
          testemonials: newTestemonial,
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
    const { testemonials } = this.state;
    this.items = this.state.testemonials.map(item => (
      <div key={item.id} className="col-space-between card-wrapper">
        <h2 className="primary-subtitle">{item.subject}</h2>
        <p className="">{item.body}</p>
        <p className="">{item.name}</p>
        <br />
      </div>
    ));
    return (
      <React.Fragment>
        <GridWrapper style="html-wrapper">
          <GridWrapper style="statement-detail-page-wrapper">
            <EasyFlexCol style="col-space-evenly">
              <Title text="Nomi Van Gool" style="testimonial-person"/>
              <p className="testimonial-quotes">‘’</p>
              <Paragraph style="testimonial-text-paragraph" text="Het is een doorzoekbaar archief gevuld met publicaties van (oud-)studenten, docenten, onderzoekers, diensten of externe partners van de Arteveldehogeschool. Aire streeft naar Open Access, zodat de publicaties zo veel mogelijk vrij toegankelijk zijn."/>
              <div className="testimonial-detail-img-box">
                <div className="testimonial-detail-img"/>
                <div className="testimonial-detail-square"></div>
              </div>
              <a className="close-testimonial" href="/testimonials">
                <div className="testimonial-bar-1"></div>
                <div className="testimonial-bar-2"></div>
              </a>
            </EasyFlexCol>
          </GridWrapper>
        </GridWrapper>
      </React.Fragment>
    );
  }
}

export default StatementPage;
