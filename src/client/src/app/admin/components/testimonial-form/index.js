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
    subject: Yup.string("Enter a subject").required("subject is required").min(10).max(128),
    synopsis: Yup.string("Enter a synopsis").required(false).min(50),
    body: Yup.string("Enter a story").required(false).min(128),
    typeId: Yup.string("Select a type").required(false),
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

class TestimonialForm extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    }
    
    state = {
        types: [],
        post: { subject: "",synopsis: "", body: "",  typeId: "", },
    };

    componentWillMount() {
        this.loadtypes();
        if (this.props.postId) {            
            this.loadPost(this.props.postId);
        }
    }
    loadtypes = async () => {
        try {
            const options = {
                method: 'GET',
                mode: 'cors',
                cache: 'default'
            };

            const response = await fetch('/api/v1/types', options);
            console.log(response);
            const responseJson = await response.json();
            if (responseJson) {
                this.setState(prevState => ({ 
                    ...prevState, 
                    types: responseJson 
                }));
            }
        } catch(error) {
            console.log(error);
        }
    }

    loadPost = async (postId) => {
        try {
            const options = {
                method: 'GET',
                mode: 'cors',
                cache: 'default'
            };

            const response = await fetch(`/api/v1/testimonials/${postId}`, options);
            const responseJson = await response.json();
            if (responseJson) {
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
            this.updatePost(postId, values);          
        } else {
            this.savePost(values);
        }
        
    }

    savePost = async (postData) => {
        try {
            const options = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData),
                mode: 'cors',
                cache: 'default'
            };

            const response = await fetch('/api/v1/testimonials', options);
            const responseJson = await response.json();
            if (responseJson) {
                console.log(responseJson);
            }
        } catch(error) {
            console.log(error);
        }
    }

    updatePost = async (postId, postData) => {
        try {
            const options = {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData),
                mode: 'cors',
                cache: 'default'
            };

            const response = await fetch(`/api/v1/testimonials/${postId}`, options);
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
                            render={props => <Form {...props} types={this.state.types} />}
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

export default withStyles(styles)(TestimonialForm);