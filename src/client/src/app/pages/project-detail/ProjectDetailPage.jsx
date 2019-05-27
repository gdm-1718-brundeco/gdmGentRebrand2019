/*
Import extenal libraries
*/
import React, { Component } from 'react';

/*
Import internal libraries
*/
import Api from '../../services';

class ProjectDetailPage extends Component {
    state = {
        project: null,
    };

    componentWillMount() {
        this.Project(this.props.match.params.id);
    }
    Project = (id) => {
        Api.findOneProject(id)
            .then((data) => {
                this.setState(prevState => ({
                    ...prevState,
                    project: data
                }));
            })
            .catch((error) => {

            });
    }

    render() {
        const { project } = this.state;
        if(project != null){
          return (
            <React.Fragment>
              <h1>{project.title}</h1>
              <h3>{project.slug}</h3>
              <p>{project.body}</p>
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

export default (ProjectDetailPage);