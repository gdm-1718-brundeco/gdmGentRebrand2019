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
            values: { name,description, points,year, parentCourseId, },
            errors,
            touched,
            handleChange,
            handleSubmit,
            isValid,
            setFieldTouched,
            courses,
            classes,
        } = this.props;

        return (
          <form
          action ="/courses"
          method="POST"
          onSubmit={(e) => {
            this.props.handleSubmit(e);
          }}
         
      >
          <TextField
            id="name"
            name="name"
            helperText={touched.name ? errors.name : ""}
            error={touched.name && Boolean(errors.name)}
            label="Name"
            value={name}
            onChange={this.change.bind(null, "name")}
            fullWidth
    
          />
          <TextField
            id="description"
            name="description"
            helperText={touched.description ? errors.description : ""}
            error={touched.description && Boolean(errors.description)}
            label="Description"
            fullWidth
            multiline
            rows="4"
            value={description}
            onChange={this.change.bind(null, "description")}
    
          />
    
          <TextField
            stype="number"
            id="points"
            name="points"
            helperText={touched.points ? errors.points : ""}
            error={touched.points && Boolean(errors.points)}
            label="Points"
            fullWidth
            multiline
            value={points}
            onChange={this.change.bind(null, "points")}
    
          />
           <TextField
           type="number"
            id="year"
            name="year"
            helperText={touched.year ? errors.year : ""}
            error={touched.year && Boolean(errors.year)}
            label="Year"
            fullWidth
            multiline
            rows="10"
            value={year}
            onChange={this.change.bind(null, "year")}
    
          />
    
          <FormControl>
            <InputLabel htmlFor="parentCourseId">OLOD ( optioneel )</InputLabel>
            <Select
              className={classes.selectCategories}
              value={parentCourseId}
              onChange={this.change.bind(null, "course")}
              inputProps={{
                name: 'parentCourseId',
                id: 'parentCourseId',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {courses && courses.map((course, index) => (
                <MenuItem key={course.id} value={course.id}>{course.name}</MenuItem>
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