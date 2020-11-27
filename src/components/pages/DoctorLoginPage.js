import React, { Component } from 'react';
import DoctorLoginForm from './DoctorLoginForm';
import {Link } from "react-router-dom";


import './LoginPage.css';

class DoctorLoginPage extends Component {


  render() {
    return (
      <div className="LoginPage">

        <DoctorLoginForm />
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

export default DoctorLoginPage;
