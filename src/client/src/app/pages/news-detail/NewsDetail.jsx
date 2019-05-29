/*
Import extenal libraries
*/
import React, { Component } from "react";

/*
Import internal libraries
*/
import Api from "../../services";

/*
Import internal libraries
*/
import OverlayMenu from "../../components/structural-components/overlay-menu/OverlayMenu";
import GeneralNav from "../../components/header/general-nav/GeneralNav";
import GridWrapper from "../../components/structural-components/grid-wrapper/GridWrapper";
import Footer from "../../components/footer";
import BlankDiv from "../../components/styled-components/blank-div/BlankDiv";
import EasyFlexRow from "../../components/structural-components/flexbox/easy-flex-row/EasyFlexRow";
import SwitchArticlesButton from "../../components/button-components/switch-articles-button/SwitchArticlesButton";

class NewsDetailPage extends Component {
  state = {
    post: null
  };

  componentWillMount() {
    this.loadPost(this.props.match.params.id);
  }

  loadPost = id => {
    Api.findOnePost(id)
      .then(data => {
        this.setState(prevState => ({
          ...prevState,
          post: data
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
    const { post } = this.state;
    console.log(post);
    if (post != null) {
      return (
        <React.Fragment>
          <OverlayMenu menustate={this.state.showMenu} />
          <GridWrapper style="main-page-wrapper">
            <GeneralNav
              toggleMenu={this.toggleMenu}
              menustate={this.getParentState()}
            />
            <BlankDiv style="blank-div-lg" />
            <h1 className="section-title">{post.title}</h1>
            <h3 className="primary-quote">{post.slug}</h3>
            <p className="standard-text-paragraph">{post.body}</p>
            <BlankDiv style="blank-div-sm" />

            <EasyFlexRow style="row-space-between">
              <SwitchArticlesButton text="Vorige" />
              <SwitchArticlesButton text="Volgende" />
            </EasyFlexRow>
            <BlankDiv style="blank-div-lg" />
            <Footer />
          </GridWrapper>
        </React.Fragment>
      );
    } else {
      return <React.Fragment />;
    }
  }
}

export default NewsDetailPage;
