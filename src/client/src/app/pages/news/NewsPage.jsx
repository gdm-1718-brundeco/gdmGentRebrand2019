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
import Title from "../../components/text-components/title/Title";
import OverlayMenu from "../../components/structural-components/overlay-menu/OverlayMenu";

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
        console.log(data.docs);
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

  toggleMenu = e => {
    e.preventDefault();
    this.setState(state => ({ showMenu: !state.showMenu }));
  };

  getParentState = e => {
    let parentState = this.state.showMenu;
    return parentState;
  };

  render() {
    const { pagination, posts } = this.state;
    console.log(posts);

    this.items = this.state.posts.map((item, key) => (
      <div key={item.id}>
        <h1
          className="news-list-item"
          href={"/news/" + item.id}
          onClick={e => this.goToPostDetailPage(item.id)}
        >
          {item.title}
        </h1>
      </div>
    ));

    return (
      <React.Fragment>
        <OverlayMenu menustate={this.state.showMenu} />
        <GridWrapper style="main-page-wrapper">
          <GeneralNav
            toggleMenu={this.toggleMenu}
            menustate={this.getParentState()}
          />
          <BlankDiv style="blank-div-lg" />
          <Title style="section-title" text="Nieuws" />
          {/* <PostsListPaged
            posts={posts}
            pagination={pagination}
            onReadMore={this.goToPostDetailPage}
            onLoadMore={this.loadPosts}
          /> */}
          {this.items}
          <BlankDiv style="blank-div-lg" />
          <Footer />
        </GridWrapper>
      </React.Fragment>
    );
  }
}

export default NewsPage;
