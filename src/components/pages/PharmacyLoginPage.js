import React, { Component } from 'react';
import PharmacyLoginForm from './PharmacyLoginForm';
import {Link } from "react-router-dom";


import './LoginPage.css';

class PharmacyLoginPage extends Component {


  render() {
    return (
      <div className="LoginPage">

        <PharmacyLoginForm />
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

export default PharmacyLoginPage;
