import logo from './logo.svg';
import "./commonPages/Forms/FormInput.css";
import 'bootstrap'
import './App.css';
import NavBar from './commonPages/NavBar';
import FormsContainer from './commonPages/Forms/FormsContainer';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './utilities/modal/Modal';

function RegistrationForm() {

  const navigate = useNavigate()
  const [isLoading,setIsLoading]=useState(false);
  const [isShowModal,setIsShowModal]=useState(false);
  const [showModalHeader,setShowModalHeader]=useState("");
  const [showModalMessage,setShowModalMessage]=useState("");
  useEffect(() => {
    if (sessionStorage.getItem("userId") == null)
      navigate("/login")
  })

  return (
    <div className="body mainpage">
      <NavBar />
     {isShowModal? <Modal open={isShowModal} header={showModalHeader} message={showModalMessage} onClose={()=>setIsShowModal(false)}/>:<FormsContainer onHeaderReceive={(msg)=>setShowModalHeader(msg)} onMessageReceive={(msg)=>setShowModalMessage(msg)} isLoading={(e)=>setIsLoading(e)} onShowModal={()=>setIsShowModal(true)} />
}
    </div>
  );
}

export default RegistrationForm;
