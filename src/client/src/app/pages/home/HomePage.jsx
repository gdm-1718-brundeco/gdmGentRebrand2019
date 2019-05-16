/*
Import extenal libraries
*/
import React, { Component } from "react";

/*
Import internal libraries
*/
import Api from "../../services";
// import PostsList from "../../components/start-components/posts-list";

/*
Import components
*/
import GridWrapper from "../../components/structural-components/grid-wrapper/GridWrapper";
import Nav from "../../components/structural-components/nav/Nav";
import Link from "../../components/text-components/link/Link";
import Sidebar from "../../components/structural-components/sidebar-social/SidebarSocial";
import OverlayMenu from "../../components/structural-components/overlay-menu/OverlayMenu";
import StyledSquare from "../../components/styled-components/square/StyledSquare";
import StyledCircle from "../../components/styled-components/circle/StyledCircle";
import MainImageComponent from "../../components/image-components/main-image-component/MainImageComponent";
import Title from "../../components/text-components/title/Title";
import EasyFlexGrid from "../../components/structural-components/flexbox/easy-flex-grid/EasyFlexGrid";
import FooterHomepage from "../../components/footer/footer-homepage/FooterHomepage";
import EventBlockHeader from "../../components/structural-components/event-block-header/EventBlockHeader";
import Featured from "../../components/card-components/featured/Featured";
import EasyFlexCol from "../../components/structural-components/flexbox/easy-flex-col/EasyFlexCol";

class HomePage extends Component {
  state = {
    posts: []
  };

  componentWillMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    Api.findAllPosts()
      .then(data => {
        this.setState(prevState => ({
          ...prevState,
          posts: data
        }));
      })
      .catch(error => {
        console.log(error);
      });
  };

  goToPostDetailPage = id => {
    this.props.history.push(`/news/${id}`);
  };

  render() {
    const { posts } = this.state;
    return (
      <React.Fragment>
        {/* <OverlayMenu /> */}
        <GridWrapper>
          <Nav>
            <Link text="Menu" style="overlay-menu-link" />
          </Nav>
          <Sidebar>
            <Link style="oml oml-1" />
            <Link style="oml oml-2" />
            <Link style="oml oml-3" />
            <Link style="oml oml-4" />
            <Link style="oml oml-5" />
          </Sidebar>
          <StyledSquare style="styled-square-header" />
          <EasyFlexGrid style="header-left-bottom">
            <StyledCircle style="styled-circle-header-left" />
          </EasyFlexGrid>
          <EventBlockHeader />
          <MainImageComponent style="header-main-image" />
          <Title style="header-company-title" text="Arteveldehogeschool" />
          <Title
            style="header-company-baseline"
            text="Grafische en digitale media"
          />
        </GridWrapper>
        <EasyFlexCol style="row-general-page-wrapper">
          <Featured />
          <Featured />
          <Featured />
          <Featured />
        </EasyFlexCol>
        <FooterHomepage />
      </React.Fragment>
    );
  }
}

export default HomePage;
