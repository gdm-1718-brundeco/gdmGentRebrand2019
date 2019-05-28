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
        projectImage: null,
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
            }).then( ()=> {
                Api.findProjectImage(id)
                .then((imageData) => {
                    this.setState(prevState => ({
                        ...prevState,
                        projectImage: imageData
                    }));
                })
              })
            .catch((error) => {

            });

       
          
    }

    render() {
        const { project } = this.state;
        const { projectImage } = this.state;
      console.log(projectImage);
        if(project != null && projectImage != null){
          return (
            <React.Fragment>
              <h1>{project.title}</h1>
              <h3>{project.slug}</h3>
              <p>{project.body}</p>
              {projectImage.map((value , key) =>{
                  return <img key={key} src={value.path} style={imageStyle}></img>
              })}
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

var imageStyle = {
  width: '300px',
  height:'300px',
  objectFit: 'cover',
};