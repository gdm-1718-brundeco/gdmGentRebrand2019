/*
Import extenal libraries
*/
import React, { Component } from 'react';

/*
Import internal libraries
*/
import Api from '../../services';
import PostsList from '../../components/posts-list';

/*
Import components
*/
import Header from '../../components/header/Header'



class HomePage extends Component {
    state = {
        posts: [],
    };

    componentWillMount() {
        this.loadPosts();
    }

    loadPosts = () => {
        Api.findAllPosts()
            .then((data) => {
                this.setState(prevState => ({
                    ...prevState,
                    posts: data
                }));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    goToPostDetailPage = (id) => {
        this.props.history.push(`/news/${id}`);
    }

    render() {
        const { posts } = this.state;
        return (
            <React.Fragment>
                <section className="section section--articles">
                    {/* <header className="section__header">
                        <h2 className="section__title">Nieuws</h2>
                    </header> */}
                    {/* <div className="section__content section__content--articles">
                        <PostsList posts={posts} onReadMore={this.goToPostDetailPage} />
                    </div> */}
                    {/* <footer className="section__footer">
                        READ MORE
                    </footer> */}
                    <Header/>
                </section>
            </React.Fragment>
        )
    }
}

export default (HomePage);