import React, { Component } from 'react';
import SignUpPageForm from './SignUpPageForm';
import {Link } from "react-router-dom";


import './LoginPage.css';

class SignUpPage extends Component {


  render() {
    return (
      <div className="LoginPage">

        <SignUpPageForm />
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

export default SignUpPage;
