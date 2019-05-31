/*
Import extenal libraries
*/
import React, { Component } from 'react';

/*
Import internal libraries
*/
import Api from '../../services';

class TeamDetailPage extends Component {
    state = {
        member: null,
    };

    componentWillMount() {
        this.Member(this.props.match.params.id);
    }
    Member = (id) => {
        Api.findOneMember(id)
            .then((data) => {
                this.setState(prevState => ({
                    ...prevState,
                    member: data
                }));
            })
            .catch((error) => {

            });
    }

    render() {
        const { member } = this.state;
        if(member != null ){
          return (
            <React.Fragment>
               <img src={member.image_path} style={imageStyle}></img>
              <h1>{member.first_name} {member.last_name}</h1>
              <p>Email: </p>
              <p>{member.email}</p>
              <p>Job: </p>
              <p>{member.job}</p>
              <p>Bio: </p>
              <p>
                {member.bio}
                <br></br>
                <q>{member.quote}</q>
              </p>
             
            </React.Fragment>
        )
        }
        else{
          return(
            <React.Fragment>
            </React.Fragment>
          )
        }
        
    }
}

export default (TeamDetailPage);

var imageStyle = {
  width: '300px',
  height:'300px',
  objectFit: 'cover',
};