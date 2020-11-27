import React, { Component } from 'react';
import { Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import {Link } from "react-router-dom";

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: -100
};

const panelStyle = {
  backgroundColor: 'rgba(255,255,255,0.5)',
  border: 0,
  paddingLeft: 20,
  paddingRight: 20,
  width: 300,
};


const buttonStyle = {
  marginBottom: 0
};

class DoctorLoginForm extends Component {

  handleFormSubmit(e) {
    e.preventDefault();

    console.log("FORM SUBMIT!");

  }



  render() {

    return (
      <div style={divStyle}>

        <Panel style={panelStyle}>
          <span className="login100-form-title">Doctor Login </span>
          <Form horizontal className="LoginForm" id="loginForm">
            <FormGroup controlId="formEmail">
              <FormControl type="email" placeholder="Email Address" />
            </FormGroup>
            <FormGroup controlId="formPassword">
              <FormControl type="password" placeholder="Password" />
            </FormGroup>
            <FormGroup style={buttonStyle} controlId="formSubmit">
            <div>
                <Link to="/doctorprofile"><button>
                  login
                </button>
                </Link>
              </div>
            </FormGroup>
          </Form>
        </Panel>
      </div>
    )
  }
}

export default DoctorLoginForm;
