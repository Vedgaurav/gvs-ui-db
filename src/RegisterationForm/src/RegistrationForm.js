import logo from './logo.svg';
import "./commonPages/Forms/FormInput.css";
import 'bootstrap'
import './App.css';
import NavBar from './commonPages/NavBar';
import FormsContainer from './commonPages/Forms/FormsContainer';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
  const [stage, setStage] = useState(1);
  const navigate = useNavigate()


  // useEffect(() => {
  //   if (sessionStorage.getItem("userId") == null)
  //     navigate("/login")
  // })

  return (
    <div className="body mainpage">
      <NavBar />
      <FormsContainer />

    </div>
  );
}

export default RegistrationForm;
