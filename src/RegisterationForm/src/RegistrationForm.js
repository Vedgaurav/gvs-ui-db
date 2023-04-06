import logo from './logo.svg';
import "./commonPages/Forms/FormInput.css";
import 'bootstrap'
import './App.css';
import NavBar from './commonPages/NavBar';
import FormsContainer from './commonPages/Forms/FormsContainer';
import { useState } from 'react';

function RegistrationForm() {
  const [stage,setStage]=useState(1);
 
  return (
    <div className="body mainpage">
    <NavBar/>
    
    <FormsContainer/>
    
    </div>
  );
}

export default RegistrationForm;
