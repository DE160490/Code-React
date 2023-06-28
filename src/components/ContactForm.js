import React, { Component } from "react";
import { LocalForm, Control, Errors } from "react-redux-form";

class ContactForm extends Component {
  handleSubmit = (values) => {
    console.log(values);
  };

  require = (val) => val && val.length;

  render() {
    return (
      <LocalForm model="user" onSubmit={this.handleSubmit}>
        <label>Name: </label>
        <Control.text model=".name" validators={{ required: this.required }} />
        <span className="error">
          <Errors
            model=".name"
            show="touched"
            messages={{ required: "Name is required" }}
          ></Errors>
        </span>
        <button type="submit">Submit</button>
      </LocalForm>
    );
  }
}

export default ContactForm;
