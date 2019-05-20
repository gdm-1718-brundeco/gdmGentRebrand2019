/*
Import extenal libraries
*/
import React, { Component } from 'react';

/*
Import internal libraries
*/
import Api from '../../services';

class ServicesPage extends Component {
    state = {
        post: null,
    };

   
    

    render() {
        const { post } = this.state;
        console.log(post);
        return (
            <React.Fragment>
            </React.Fragment>
        )
    }
}

export default (ServicesPage);