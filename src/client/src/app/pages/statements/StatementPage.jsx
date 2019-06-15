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
import "./StatementPage.scss";

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

class StatementPage extends Component {
  state = {
    testimonials: []
  };

  componentWillMount() {
    this.loadTestimonials(1);
  }

  loadTestimonials = pageIndex => {
    Api.findTestimonials({ limit: 4, skip: pageIndex })
      .then(data => {
        // console.log(data.docs);
        const prevTestomial = this.state.testimonials;
        const newTestemonial = [...prevTestomial, ...data.docs];
        this.setState(prevState => ({
          ...prevState,
          testimonials: newTestemonial,
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
    this.items = this.state.testimonials.map(item => (
      <div key={item.id} className="testimonial-wrapper">
        <Title style="testimonial-title" text={item.name} />
        <div className="testimonial-box">
          <div className="testimonial-box-absolute"></div>
          <a href={"/testimonials/" + item.id}>
            <img src={item.image} alt="" className="testimonial-image" />
          </a>
           <a href={"/testimonials/" + item.id} className="testimonial-link">
          Lees mij
        </a>
        </div>
       
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
            <Title style="section-title" text="Getuigenissen" />
            <Paragraph
              text="Wat als je drie studententeams in verschillende landen dezelfde briefing geeft? En ze vervolgens parallel aan hun eigen oplossing laat werken? In het initiatief Parkspot besloten docenten van de Hogeschool van Amsterdam, Hochschulde der Medien (Stuttgart) en Arteveldehogeschool om dat eens uit te testen."
              style="standard-text-paragraph par-pos-1 paragraph-mb-med"
            />
            <BlankDiv style="blank-div-md" />
            {this.items}
            <Footer />
          </GridWrapper>
        </GridWrapper>
      </React.Fragment>
    );
  }
}

export default StatementPage;
