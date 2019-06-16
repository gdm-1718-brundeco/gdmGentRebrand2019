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
            values: { title, body, event_date, image, },
            errors,
            touched,
            handleChange,
            handleSubmit,
            isValid,
            setFieldTouched,
            categories,
            classes,
        } = this.props;

        return (
          <form
              action ="/events"
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
                label="title"
                value={title}
                onChange={this.change.bind(null, "title")}
                fullWidth
        
              />
              <TextField
                id="body"
                name="body"
                helperText={touched.body ? errors.body : ""}
                error={touched.body && Boolean(errors.body)}
                label="Body"
                fullWidth
                multiline
                rows="10"
                value={body}
                onChange={this.change.bind(null, "body")}
              />
              <TextField
                id="image"
                name="image"
                label="image"
                helperText={touched.image ? errors.image : ""}
                error={touched.image && Boolean(errors.image)}
                value={image}
                onChange={this.change.bind(null, "image")}
                fullWidth
              />

              <TextField
                id="event_date"
                name="event_date"
                helperText={touched.event_date ? errors.event_date : ""}
                error={touched.event_date && Boolean(errors.event_date)}
                value={event_date}
                type="date"
                onChange={this.change.bind(null, "event_date")}
                fullWidth
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