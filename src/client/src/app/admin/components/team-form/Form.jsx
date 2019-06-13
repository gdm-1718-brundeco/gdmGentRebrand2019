/*
Import external libraries
*/
import React, { Component } from "react";
import PropTypes from 'prop-types';

/*
Material UI
*/
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from "@material-ui/core/TextField";

import RichEditor from "../rich-editor";

const styles = {
  selectCategories: {
      minWidth: 240
  }
};

class Form extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    }

    change = (name, e) => {
        e.persist();
        this.props.handleChange(e);
        this.props.setFieldTouched(name, true, false);
    };

    render() {
        const {
            values: { first_name, last_name, job, email, image_path, bio, quote },
            errors,
            touched,
            handleChange,
            handleSubmit,
            isValid,
            setFieldTouched,
            categories,
            classes
        } = this.props;

        return (
          <form
              action ="/team"
              method="POST"
              onSubmit={(e) => {
                this.props.handleSubmit(e);
              }}
             
          >
              <TextField
                id="first_name"
                name="first_name"
                helperText={touched.first_name ? errors.first_name : ""}
                error={touched.first_name && Boolean(errors.first_name)}
                label="First Name"
                value={first_name}
                onChange={this.change.bind(null, "first_name")}
                fullWidth
        
              />
              <TextField
                id="last_name"
                name="last_name"
                helperText={touched.last_name ? errors.last_name : ""}
                error={touched.last_name && Boolean(errors.last_name)}
                label="Last Name"
                value={last_name}
                onChange={this.change.bind(null, "last_name")}
                fullWidth
        
              />
              <TextField
                type="email"
                id="email"
                name="email"
                helperText={touched.email ? errors.email : ""}
                error={touched.email && Boolean(errors.email)}
                label="Email"
                fullWidth
                multiline
                rows="4"
                value={email}
                onChange={this.change.bind(null, "email")}
              />
              <TextField
                id="job"
                name="job"
                helperText={touched.job ? errors.job : ""}
                error={touched.job && Boolean(errors.job)}
                label="Job"
                fullWidth
                multiline
                rows="4"
                value={job}
                onChange={this.change.bind(null, "job")}
              />
                <TextField
                id="bio"
                name="bio"
                helperText={touched.bio ? errors.bio : ""}
                error={touched.bio && Boolean(errors.bio)}
                label="Bio"
                fullWidth
                multiline
                rows="4"
                value={bio}
                onChange={this.change.bind(null, "bio")}
              />
                <TextField
                id="quote"
                name="quote"
                helperText={touched.quote ? errors.quote : ""}
                error={touched.quote && Boolean(errors.quote)}
                label="Quote"
                fullWidth
                multiline
                rows="4"
                value={quote}
                onChange={this.change.bind(null, "quote")}
              />
               <TextField
                id="image_path"
                name="image_path"
                helperText={touched.image_path ? errors.image_path : ""}
                error={touched.image_path && Boolean(errors.image_path)}
                label="Picture"
                fullWidth
                multiline
                rows="4"
                value={image_path}
                onChange={this.change.bind(null, "image_path")}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={!isValid}
              >
                Submit
              </Button>
          </form>
        );
    }
}

export default withStyles(styles)(Form);