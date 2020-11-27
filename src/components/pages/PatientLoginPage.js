import React, { Component } from 'react';
import PatientLoginForm from './PatientLoginForm';
import {Link } from "react-router-dom";


import './LoginPage.css';

class PatientLoginPage extends Component {


  render() {
    return (
      <div className="LoginPage">

        <PatientLoginForm />
        <div>
            <Link to="/"><button>
              Return home
            </button>
            </Link>
          </div>


      </div>
    );
  }
}

export default PatientLoginPage;
