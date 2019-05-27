/*
Import extenal libraries
*/
import React, { Component } from 'react';

/*
Import internal libraries
*/
import Api from '../../services';

class EventDetailPage extends Component {
    state = {
        event: null,
    };

    componentWillMount() {
        this.Event(this.props.match.params.id);
    }
    Event = (id) => {
        Api.findOneEvent(id)
            .then((data) => {
                this.setState(prevState => ({
                    ...prevState,
                    event: data
                }));
            })
            .catch((error) => {

            });
    }

    render() {
        const { event } = this.state;
        if(event != null){
          return (
            <React.Fragment>
              <h1>{event.title}</h1>
              <h3>{event.slug}</h3>
              <p>{event.body}</p>
            </React.Fragment>
        )
        }
        else{
          return(
            <React.Fragment></React.Fragment>
          )
        }
        
    }
}

export default (EventDetailPage);