import axios, { all } from "axios";
import logo from './logo.svg';
import "./commonPages/Forms/FormInput.css";
import 'bootstrap'
import './App.css';
import NavBar from './commonPages/NavBar';
import FormsContainer from './commonPages/Forms/FormsContainer';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './utilities/modal/Modal';
import { useLocation } from 'react-router-dom';
import axiosDoesUserExist from '../../axios/axiosDoesUserExist';
import { CHECK_AUTHENTICATION_URL } from '../../constants/apiConstant';

function RegistrationForm(props) {

  const navigate = useNavigate()
  const [isShowModal, setIsShowModal] = useState(false);
  const [showModalHeader, setShowModalHeader] = useState("");
  const [showModalMessage, setShowModalMessage] = useState("");
  const [responseData, setResponseData] = useState([]);
  const { state } = useLocation()
  const { connectedTo, guardianEmail } = state ? state : ""

  

    
    
    
  useEffect(() => {

     if (sessionStorage.getItem("userEmail") == null)
      navigate("/")
    
    
  }, [])

  const onCloseModal = async () => {
    setIsShowModal(false);
    if (sessionStorage.getItem("userId") == null) {
      const email = sessionStorage.getItem("userEmail")
      const res = await axiosDoesUserExist()
      const guardianUser = res.data;
      // console.log("on close modal",res.data)
      sessionStorage.setItem("userId", guardianUser.id)
      sessionStorage.setItem("userFname", guardianUser.fname)
    }
    const detail = {
      id:sessionStorage.getItem("userId"),
      fname: sessionStorage.getItem("userFname")
    }
    navigate("/dashboard", { state: { userDetail: detail } })
  }
  return (
    <div className="body mainpage">
      <NavBar />

    {isShowModal ? <Modal open={isShowModal} header={showModalHeader} message={showModalMessage} onClose={onCloseModal} /> : <FormsContainer onHeaderReceive={(msg) => setShowModalHeader(msg)} guardianEmail={guardianEmail} connectedTo={connectedTo} onMessageReceive={(msg) => setShowModalMessage(msg)} onResponseData={(obj) => setResponseData(obj)} isLoading={(e) => setIsLoading(e)} onShowModal={(val) => setIsShowModal(val)} />}

{/* <h4 style={{"color":"red"}}>Registration has been closed.</h4> */}
    </div>
  );
}

export default RegistrationForm;
