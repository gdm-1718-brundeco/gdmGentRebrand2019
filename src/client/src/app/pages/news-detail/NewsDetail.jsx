/*
Import extenal libraries
*/
import React, { Component } from 'react';

/*
Import internal libraries
*/
import Api from '../../services';

class NewsDetailPage extends Component {
    state = {
        post: null,
    };

    async componentWillMount() {
        await this.loadPost(this.props.match.params.id);
    }

    loadPost = (id) => {
        Api.findOnePost(id)
            .then((data) => {
              console.log(data);
                this.setState(prevState => ({
                    ...prevState,
                    post: data
                }));
            })
            .catch((error) => {
            });
    }

    render() {
          const { post } = this.state;
        if(post != null){
          return (
              <React.Fragment>
                <h1>{post.title}</h1>
                <h3>{post.synopsis}</h3>
                <p>{post.body}</p>
              </React.Fragment>
          )
      }else{
        return (
          <React.Fragment>
          </React.Fragment>
      )
      }
    }
}

export default (NewsDetailPage);