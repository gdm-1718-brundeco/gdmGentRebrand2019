/*
Import extenal libraries
*/
import React, { Component } from "react";

/*
Import internal libraries
*/
import Api from "../../services";
import PostsListPaged from "../../components/posts-list-paged";
import GeneralNav from "../../components/header/general-nav/GeneralNav";
import GridWrapper from "../../components/structural-components/grid-wrapper/GridWrapper";
import Footer from "../../components/footer";
import BlankDiv from "../../components/styled-components/blank-div/BlankDiv";
import Link from "../../components/text-components/link/Link";
import Title from "../../components/text-components/title/Title";
import Paragraph from "../../components/text-components/paragraph/Paragraph";
import EasyFlexCol from "../../components/structural-components/flexbox/easy-flex-col/EasyFlexCol";
import EasyFlexRow from "../../components/structural-components/flexbox/easy-flex-row/EasyFlexRow";
import MainImageComponent from "../../components/image-components/main-image-component/MainImageComponent";

class NewsPage extends Component {
  state = {
    posts: [],
    pagination: {
      limit: 5,
      page: 1,
      pages: 1,
      total: 1
    }
  };

  componentWillMount() {
    this.loadPosts(1);
  }

  loadPosts = pageIndex => {
    console.log(pageIndex);
    Api.findAllPosts({ limit: 3, skip: pageIndex })
      .then(data => {
        const prevPosts = this.state.posts;
        const newPosts = [...prevPosts, ...data.docs];
        this.setState(prevState => ({
          ...prevState,
          posts: newPosts,
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

  goToPostDetailPage = id => {
    this.props.history.push(`/news/${id}`);
  };

  render() {
    const { pagination, posts } = this.state;
    return (
      <React.Fragment>
        {/* <h1 className="hidden">Nieuws</h1>
                <section className="section section--articles">
                    <PostsListPaged posts={posts} pagination={pagination} onReadMore={this.goToPostDetailPage} onLoadMore={this.loadPosts} />
                </section> */}
        <GridWrapper style="main-page-wrapper">
          <GeneralNav />
          <BlankDiv style="blank-div-lg" />
          <EasyFlexCol style="col-space-between">
            <Title
              style="news-title"
              text="Erasmus project: exchange knowledge for future innovation"
            />
            <Paragraph
              style="news-intro"
              text="De creatieve en crossmediale sector veranderd voortdurend. Lesmateriaal wordt daarom ook constant bijgespijkerd. Het EKFI-project bouwt aan een platform om innovatief lesmateriaal te kunnen uitwisselen tussen organisaties in deze sector."
            />
            <Paragraph
              style="news-standard-paragraph"
              text="Gedurende 3 jaar zal de opleiding ‘Grafische en Digitale Media’ van de Arteveldehogeschool samen werken met 5 buitenlandse partners in het kader van Erasmus+ aan het project ‘EKFI’ (Exchange Knowledge for Future Innovation). Dit project heeft als doel om een platform te ontwikkelen om vooral innovatief lesmateriaal uit te wisselen tussen verschillende organisaties in de creatieve en crossmediale sector, zoals bv. secundaire en hogescholen, bedrijven & sectororganisaties. Het EKFI-project is gestart met een kick off meeting begin december 2018 in Schiphol in Nederland. Meer info over dit project is te vinden op EFKI-project.
Het onderzoeksteam is op zoek naar Vlaamse bedrijven en onderwijsinstellingen die interesse hebben in het uitwisselen van digitaal lesmateriaal in het domein van crossmedia (print & multimedia), marketing en design. Heb je interesse, neem dan snel contact met Inge Sintobin mail us."
            />
          </EasyFlexCol>
          <BlankDiv style="blank-div-lg" />
          <EasyFlexRow style="row-space-between">
            <MainImageComponent style="news-detail-image-1" />
            <MainImageComponent style="news-detail-image-2" />
            <MainImageComponent style="news-detail-image-3" />
          </EasyFlexRow>
          <BlankDiv style="blank-div-md" />
          <EasyFlexRow style="row-space-between">
            <Link text="Vorige" style="link-previous-article" />
            <Link text="Volgende" style="link-next-article" />
          </EasyFlexRow>
          <BlankDiv style="blank-div-md" />
          <Footer />
        </GridWrapper>
      </React.Fragment>
    );
  }
}

export default NewsPage;
