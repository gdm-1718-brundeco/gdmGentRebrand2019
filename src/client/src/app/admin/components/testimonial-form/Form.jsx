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
  selectTypes: {
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
            values: { subject,name, body, typeId, image, },
            errors,
            touched,
            handleChange,
            handleSubmit,
            isValid,
            setFieldTouched,
            types,
            classes,
        } = this.props;

        return (
          <form
          action ="/testimonials"
          method="POST"
          onSubmit={(e) => {
            this.props.handleSubmit(e);
          }}
         
      >
          <TextField
            id="subject"
            name="subject"
            helperText={touched.subject ? errors.subject : ""}
            error={touched.subject && Boolean(errors.subject)}
            label="Subject"
            value={subject}
            onChange={this.change.bind(null, "subject")}
            fullWidth
    
          />
          <TextField
            id="name"
            name="name"
            helperText={touched.name ? errors.name : ""}
            error={touched.name && Boolean(errors.name)}
            label="Name"
            fullWidth
            multiline
            rows="4"
            value={name}
            onChange={this.change.bind(null, "name")}
    
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
          <FormControl>
            <InputLabel htmlFor="typeId">Type</InputLabel>
            <Select
              className={classes.selectTypes}
              value={typeId}
              onChange={this.change.bind(null, "type")}
              inputProps={{
                name: 'typeId',
                id: 'typeId',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {types && types.map((type, index) => (
                <MenuItem key={type.id} value={type.id}>{type .name}</MenuItem>
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