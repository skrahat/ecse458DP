import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import SignUpPage from './components/pages/SignUpPage';

import CustomerSignUp from './components/pages/CustomerSignUp';
import PharmacySignUp from './components/pages/PharmacySignUp';
import PharmacyLoginPage from './components/pages/PharmacyLoginPage';
import PatientLoginPage from './components/pages/PatientLoginPage';
import DoctorLoginPage from './components/pages/DoctorLoginPage';
import PatientProfile from './components/pages/PatientProfile';
import DoctorProfile from './components/pages/DoctorProfile';
import PharmacyProfile from './components/pages/PharmacyProfile';

import UploadFile from './components/pages/UploadFile';




function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' exact component={Services} />
          <Route path='/products' exact component={Products} />
          <Route path='/customer_signup' component={CustomerSignUp} />
          <Route path='/pharmacy_signup' component={PharmacySignUp} />
          <Route path='/pharmacylogin' component={PharmacyLoginPage} />
          <Route path='/patientlogin' component={PatientLoginPage} />
          <Route path='/doctorlogin' component={DoctorLoginPage} />
          <Route path='/patientprofile' component={PatientProfile} />
          <Route path='/doctorprofile' component={DoctorProfile} />
          <Route path='/pharmacyprofile' component={PharmacyProfile} />
          <Route path='/uploadfile' component={UploadFile} />
          <Route path='/signuppage' component={SignUpPage} />


        </Switch>
      </Router>
    </>
  );
}

export default App;
