import React, { Component, useState,useEffect } from 'react';
import {TbCapture,TbReload} from "react-icons/tb";
import { Dialog,DialogTitle,DialogActions,DialogContent,Button,DialogContentText } from "@mui/material";
import { PROFILE_PIC_UPLOAD } from "../../../../constants/apiConstant";
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import Modal from '../modal/Modal';
import Webcam from "react-webcam";
import "./ImagePreview.css";
import LoadingSpinner from '../loadingSpinner/LoadingSpinner';
const videoConstraints = {
  width: 300,
  height: 300,
  facingMode: "user"
};
const WebcamCapture = (props) => {
  const {profileImgUrl}=useSelector((state)=>state);
  const dispatch=useDispatch();
  const [isModalOpen,setIsModalOpen]=useState(false);
  const [modalHeader,setModalHeader]=useState("")
  const [modalMessage,setModalMessage]=useState("")
    const [image,setImage]=useState(props.imageSrc);  
    const [imageSrc,setImageSrc]=useState(props.fileImageSrc)
    const [isLoading,setIsLoading]=useState(false);
const webcamRef = React.useRef(null);

  // const capture = React.useCallback(
  //   () => {
  //     const imageSrc = webcamRef.current.getScreenshot();
  //     const imageFileSrc=webcamRef.current;
  //     console.log(document.getElementById("CapturedImage"));
      
  //     setImageSrc(imageSrc.replace("data:image/jpeg;base64",""));
  //     setImage(imageSrc);
  //   },

  //   [webcamRef]
  // );
  const uploadHandler = async () => {
    setIsLoading(true);
    let formData=new FormData()
    formData.append("file",imageSrc);
    // console.log("imageSource",imageSrc);
    // console.log("image",image);
    
    try{
    const response = await axios.post(PROFILE_PIC_UPLOAD, formData,{
      headers: {
        "Content-Type": "multipart/form-data",
      }})
     response.data? dispatch({type:"profileImgUrl",data:response.data,valid:true}):"";
    // console.log(profileImgUrl)
    if (response.status === 200) {
      // console.log("uploaded");
      setModalHeader("Success");
      setModalMessage("Image Successfully Uploaded");
      setIsModalOpen(true);
      dispatch({type:"profileImgUrl",data:response.data,valid:true})
      dispatch({type:"imageSource",data:image})
      
    } else if (response.status === 408) {
    //  console.log("SOMETHING WENT WRONG");
      setModalHeader("An Error Occured");
      setModalMessage("Try uploading a correct image format less than 500kb");
      setIsModalOpen(true);
      dispatch({type:"profileImgUrl",data:response.data,valid:false})
    } else if (response.data.status === 400) {
   //   console.log("SOMETHING WENT WRONG");
      setModalHeader("An Error Occured");
      setModalMessage("Try uploading a correct image format less than 500kb");
      setIsModalOpen(true);
      dispatch({type:"profileImgUrl",data:response.data,valid:false})
    }
    else{
      // console.log("SOMETHING WENT WRONG");
      setModalHeader("An Error Occured");
      setModalMessage("Try uploading a correct image format less than 500kb");
      setIsModalOpen(true);
      dispatch({type:"profileImgUrl",data:response.data,valid:false})
    }
   } 
   catch(e){
    
    console.log(e);
    setModalHeader("An Error Occured");
      setModalMessage("Try uploading a correct image format less than 500kb");
      setIsModalOpen(true);
      dispatch({type:"profileImgUrl",data:response.data,valid:false})
   }
  setIsLoading(false);
  }
  
  const [open,setOpen]=useState(props.onOpen)
  const closeAction=()=>{
    dispatch({type:"isShowPreviewOn",data:"",valid:false})
    setOpen(false);
    setImage("");
    setImageSrc("");
    setIsModalOpen(false);
   props.onClose;
  //  console.log("closing");
  }
  
  return (
    <>
    {isModalOpen ? <Modal open={isModalOpen} header={modalHeader} message={modalMessage} onClose={closeAction}/>:<>
    {isLoading ? <LoadingSpinner/>: <Dialog open={props.onOpen} onClose={closeAction} >
    <div className="webcam-container">
    {image==''? ""
    //  <Webcam
    //     audio={false}
    //     height={300}
    //     ref={webcamRef}
    //     screenshotFormat="image/jpeg"
    //     width={300}
    //     videoConstraints={videoConstraints}
        
    //   />:
    :<div className="image-preview-container"><img src={image}/></div>}
      <div>
{image!=''?
<>
<DialogActions>
<Button style={{background:"lightBlue"}} onClick={uploadHandler} 
color="success" >
UPLOAD
</Button>

<Button style={{background:"lightBlue"}} onClick={closeAction} 
color="success" >
Close
</Button>
</DialogActions></>:""
}
</div>

</div>

</Dialog>}</>}
</>
  );
};
export default WebcamCapture;