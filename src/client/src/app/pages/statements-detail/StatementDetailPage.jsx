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
import GridWrapper from "../../components/structural-components/grid-wrapper/GridWrapper";
import Title from "../../components/text-components/title/Title";
import Paragraph from "../../components/text-components/paragraph/Paragraph";
import EasyFlexCol from "../../components/structural-components/flexbox/easy-flex-col/EasyFlexCol";

class StatementDetailPage extends Component {
  state = {
    testimonial: null
  };

  componentDidMount() {
    this.Testemonial(this.props.match.params.id);
  }

  Testemonial = id => {
    Api.findOneTestimonial(id)
      .then(data => {
        this.setState(prevState => ({
          ...prevState,
          testimonial: data
        }));
        console.log(this.state.testimonial);
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
    const { testimonial } = this.state;
    if (testimonial != null) {
      console.log(testimonial);
      return (
        <React.Fragment>
          <GridWrapper style="html-wrapper">
            <GridWrapper style="statement-detail-page-wrapper">
              <EasyFlexCol style="col-space-evenly">
                <Title text={testimonial.name} style="testimonial-person" />
                <p className="testimonial-quotes">‘’</p>
                <Paragraph
                  style="testimonial-text-paragraph"
                  text={testimonial.body}
                />
                <div className="testimonial-detail-img-box">
                  <img
                    className="testimonial-detail-img"
                    src={testimonial.image}
                  />
                  <div className="testimonial-detail-square" />
                </div>
                <a className="close-testimonial" href="/testimonials">
                  <div className="testimonial-bar-1" />
                  <div className="testimonial-bar-2" />
                </a>
              </EasyFlexCol>
            </GridWrapper>
          </GridWrapper>
        </React.Fragment>
      );
    } else {
      return <div>No testimonials found</div>;
    }
  }
}

export default StatementDetailPage;
