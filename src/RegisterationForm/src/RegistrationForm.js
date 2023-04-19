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

function RegistrationForm(props) {

  const navigate = useNavigate()
  const [isShowModal,setIsShowModal]=useState(false);
  const [showModalHeader,setShowModalHeader]=useState("");
  const [showModalMessage,setShowModalMessage]=useState("");
  const[responseData,setResponseData]=useState([]);
  const { state } = useLocation()
    const { connectedTo,guardianEmail } = state?state:""
  // useEffect(() => {
  //   if (sessionStorage.getItem("userId") == null)
  //     navigate("/login")
  // },[])
  const onCloseModal=()=>{
    setIsShowModal(false);
    navigate("/dashboard", { state: { userDetail:responseData} })
  }

  return (
    <div className="body mainpage">
      <NavBar />
     {isShowModal? <Modal open={isShowModal} header={showModalHeader} message={showModalMessage} onClose={onCloseModal}/>:<FormsContainer onHeaderReceive={(msg)=>setShowModalHeader(msg)} guardianEmail={guardianEmail}connectedTo={connectedTo} onMessageReceive={(msg)=>setShowModalMessage(msg)} onResponseData={(obj)=>setResponseData(obj)}isLoading={(e)=>setIsLoading(e)} onShowModal={()=>setIsShowModal(true)} />
}
    </div>
  );
}

export default RegistrationForm;
