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
  selectProjects: {
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
            values: { title,path,  projectId, },
            errors,
            touched,
            handleChange,
            handleSubmit,
            isValid,
            setFieldTouched,
            projects,
            classes,
        } = this.props;

        return (
          <form
          action ="/projectimages"
          method="POST"
          onSubmit={(e) => {
            this.props.handleSubmit(e);
          }}
         
      >
          <TextField
            id="title"
            name="title"
            helperText={touched.title ? errors.title : ""}
            error={touched.title && Boolean(errors.title)}
            label="Title"
            value={title}
            onChange={this.change.bind(null, "title")}
            fullWidth
    
          />
          <TextField
            id="path"
            name="path"
            helperText={touched.path ? errors.path : ""}
            error={touched.path && Boolean(errors.path)}
            label="Path"
            fullWidth
            multiline
            rows="4"
            value={path}
            onChange={this.change.bind(null, "path")}
    
          />
          <FormControl>
            <InputLabel htmlFor="projectId">Projects</InputLabel>
            <Select
              className={classes.selectProjects}
              value={projectId}
              onChange={this.change.bind(null, "project")}
              inputProps={{
                name: 'projectId',
                id: 'projectId',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {projects && projects.map((project, index) => (
                <MenuItem key={project.id} value={project.id}>{project.title}</MenuItem>
              ))}
            </Select>
          </FormControl>
    
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