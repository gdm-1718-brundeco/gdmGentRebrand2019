/*
Import external libraries
*/
import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Formik } from "formik";
import * as Yup from 'yup';
import { EditorState } from 'draft-js';

/*
Material UI
*/
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";

/*
Custom Form
*/
import Form from "./Form";

/*
Validation
*/
const validationSchema = Yup.object(
{
    first_name: Yup.string("Enter a name").required("Name is required").max(30),
    last_name: Yup.string("Enter a name").required("Name is required").max(30),
    job: Yup.string("Enter a job").required("job is required").max(100),
    email: Yup.string("Enter a name").required("email is required").min(10).max(100),
    bio: Yup.string("Enter a bio").required("bio is required").min(20).max(1024),
    quote: Yup.string("Enter a quote"),
    image_path: Yup.string("Enter an image").required("Image is required").max(1024),
   
});

/*
Styling
*/
const styles = theme => ({
 paper: {
   marginTop: theme.spacing.unit * 8,
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme
     .spacing.unit * 5}px`
 },
 container: {
   
 }
});

class TeamForm extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    }
    
    state = {
        post: { first_name: "", last_name: "", job: "", email: "", image_path: "", bio: "", quote: "", },
    };

    componentWillMount() {
        console.log(this.props.postId);
        if (this.props.postId) {            
            this.loadMember(this.props.postId);
        }
    }

    loadMember = async (postId) => {
        try {
            const options = {
                method: 'GET',
                mode: 'cors',
                cache: 'default'
            };

            const response = await fetch(`/api/v1/team/${postId}`, options);
            const responseJson = await response.json();
            if (responseJson) {
                console.log(responseJson);
                this.setState(prevState => ({ 
                    ...prevState, 
                    post: responseJson 
                }));
            }
        } catch(error) {
            console.log(error);
        }
    }

    submit = (values, actions) => {
        const { postId } = this.props;

        if (postId) {  
            this.updateMember(postId, values);          
        } else {
            this.saveMember(values);
        }
        
    }

    saveMember = async (memberData) => {
        try {
            const options = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(memberData),
                mode: 'cors',
                cache: 'default'
            };

            const response = await fetch('/api/v1/team', options);
            const responseJson = await response.json();
            if (responseJson) {
                console.log(responseJson);
            }
        } catch(error) {
            console.log(error);
        }
    }

    updateMember = async (postId, memberData) => {
        try {
            const options = {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(memberData),
                mode: 'cors',
                cache: 'default'
            };

            const response = await fetch(`/api/v1/team/${postId}`, options);
            const responseJson = await response.json();
            if (responseJson) {
                console.log(responseJson);
            }
        } catch(error) {
            console.log(error);
        }
    }

    render() {
        const { classes } = this.props;
        const { post:values } = this.state;

        console.log(values);

        return (
            <React.Fragment>
                <div className={classes.container}>
                    <Paper className={classes.paper}>
                        <Formik
                            render={props => <Form {...props} categories={this.state.categories} />}
                            initialValues={values}
                            validationSchema={validationSchema}
                            onSubmit={(values, actions) => this.submit(values, actions)}
                            enableReinitialize={true}
                        />
                    </Paper>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(TeamForm);