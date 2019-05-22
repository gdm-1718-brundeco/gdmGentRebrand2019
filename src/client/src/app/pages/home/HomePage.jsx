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
import HeaderFullscreen from "../../components/header/header-fullscreen/HeaderFullscreen";
import GridWrapper from "../../components/structural-components/grid-wrapper/GridWrapper";
import Title from "../../components/text-components/title/Title";
import Paragraph from "../../components/text-components/paragraph/Paragraph";
import Quote from "../../components/text-components/quote";
import GeneralNav from "../../components/header/general-nav/GeneralNav";
import Featured from "../../components/card-components/featured/Featured";

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
        <HeaderFullscreen />
        <GridWrapper style="main-page-wrapper">
          <GeneralNav />
          <Title
            style="section-title"
            text="Wat je kan verwachten van onze gdm opleidingen"
          />
          <Paragraph
            text="Wat als je drie studententeams in verschillende landen dezelfde briefing geeft? En ze vervolgens parallel aan hun eigen oplossing laat werken? In het initiatief Parkspot besloten docenten van de Hogeschool van Amsterdam, Hochschulde der Medien (Stuttgart) en Arteveldehogeschool om dat eens uit te testen."
            style="standard-text-paragraph par-pos-1 paragraph-mb-med"
          />
          <Quote
            text="“Wij stomen toekomstige talenten klaar voor een bruisende toekomst als audiovisual artist, graphic designer of developer” - Luk 
Bouters, opleidingsdirecteur"
            style="primary-quote quote-pos-1"
          />
          <Paragraph style="paragraph-bottomline par-pos-1" />
          <div className="row-space-between">
            <Featured style="featured-bg-image" />
            <Featured style="featured-bg-image" />
          </div>
        </GridWrapper>
      </React.Fragment>
    );
  }
}

export default HomePage;
