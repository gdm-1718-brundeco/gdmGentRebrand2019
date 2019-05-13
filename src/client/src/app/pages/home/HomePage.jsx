/*
Import extenal libraries
*/
import React, { Component } from 'react';
import Header from '../../components/header'
import MainNavigation from '../../components/main-navigation'

/*
Import internal libraries
*/
import Api from '../../services';
import PostsList from '../../components/posts-list';

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
                <Header/>
            </React.Fragment>
        )
    }
}

export default (HomePage);