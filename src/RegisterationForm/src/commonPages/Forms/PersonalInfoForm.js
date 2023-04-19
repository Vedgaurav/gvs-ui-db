import "bootstrap/dist/css/bootstrap.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import "./FormInput.css"; 
import WebcamCapture from "../../utilities/webCamCapture/WebCamComponent";
import {bloodGroup,Gender } from "../../utilities/OptionalEntries";
import { validateName } from "../../RegexExpsValidation/RegexExps";
import {FcCamera} from "react-icons/fc";
import CameraAltIcon from '@mui/material';


const PersonalInfoForm = (props) => {
  const dispatch = useDispatch();
  const { fname, mname, lname, initiatedName, gender,birthCity,birthState, spiritualMaster,dateOfBirth ,validations} = useSelector(
    (state) => state
  );
const [takePic,setTakePic]=useState(false);
  const inputHandler = (e) => {
    
    const { value, id,name } = e.target;
    console.log(id,name,value)
    if (name==undefined || name==''){
      dispatch({ type: id, data: value ,valid:true});
    }
    
    else if(value.match(name) !==null) {
      document.getElementById(id+'Error').innerText='';
    dispatch({ type: id, data: value,valid:true });
    enableSaveAndProceed();
    }
    else {
      document.getElementById(id+'Error').innerText='invalid input';
      dispatch({ type: id, data: value,valid:false });
      enableSaveAndProceed();
    }

    
  };
  const[spMaster,setSpMaster]=useState(true);
  const enableSaveAndProceed=()=>{
    if(validations.isValidFname){
      dispatch({ type: 'submitDisable', data: "",valid:false });
    }
    else dispatch({ type: 'submitDisable', data: "",valid:true });
  }
  const initiatedNameHandler=(e)=>{
    if(e.target.value.length>0){
       setSpMaster(false);
    }
    else setSpMaster(true);
  }
  const genderChangeHandler=(e)=>{
    let a=document.getElementsByClassName('gender');
    for (let index = 0; index < a.length; index++) {
      
      if(a[index].value!==e.target.value){
        a[index].checked=false;
      }
    }
  }

  const previewImage = (event) => {
   {
    const{files}=event.target;
    
    // const imageFiles = event.target.files;

    // const imageFilesLength = imageFiles.length;
    if (files!==undefined && files!==null && files.length > 0  ) {

        const imageSrc = URL.createObjectURL(files[0]);
        const imagePreviewElement = document.querySelector("#preview-selected-image");
        imagePreviewElement.src = imageSrc;
        imagePreviewElement.style.display = "block";
    }
    else {
      const imageUploadElement = document.querySelector("#profileImageUrl")
        const imagePreviewElement = document.querySelector("#preview-selected-image");
        imageUploadElement.value="";
      imagePreviewElement.src = "";
        imagePreviewElement.style.display = "none"
    }}
};
  useEffect(()=>{
  enableSaveAndProceed();
  },[])

  return (
    <>
      <h3>Personal Information</h3>
      
        <div className="container">
          <div className="form-group row">
            <div className="form-col col-md-3">
              <label>Legal Name<a style={{color:'red'}}>*</a></label>
            </div>
            <div className="form-col col-md-3">
              <input
                id="fname"
                type="text"
                className="form-control "
                placeholder="first name"
                name={validateName}
                onChange={inputHandler}
                value={fname}
                onBlur={enableSaveAndProceed}
              />
            <p id='fnameError' style={{color:'red',fontSize:'10px'}}></p>
            </div>
            <div className="form-col col-md-3">
              <input
                id="mname"
                type="text"
                name={validateName}
                className="form-control "
                placeholder="middle name"
                value={mname}
                onChange={inputHandler}
                
              />
              <p id='mnameError' style={{color:'red',fontSize:'10px'}}></p>
            </div>
            <div className="form-col col-md-3">
              <input
                id="lname"
                type="text"
                className="form-control"
                placeholder="last name"
                name={validateName}
                value={lname}
                onChange={inputHandler}
              />
              <p id='lnameError' style={{color:'red',fontSize:'10px'}}></p>
            </div>
            <div className="form-col col-md-3"></div>
            <div className="form-col col-md-3">
              <input
                id="iname"
                type="text"
                name={validateName}
                className="form-control"
                value={initiatedName}
                placeholder="Initiated Name"
                onChange={(e)=>{inputHandler(e),initiatedNameHandler(e)}}
              />
              <p id='inameError' style={{color:'red',fontSize:'10px'}}></p>
            </div>
            <div className="form-col col-md-3" hidden={spMaster}>
              <label>Spiritual Master<a style={{color:'red'}}>*</a></label>
            </div>
            <div className="form-col col-md-3" hidden={spMaster}>
              <input
                id="spiritualMaster"
                type="text"
                className="form-control "
                placeholder="HH ..name"
                name={validateName}
                onChange={inputHandler}
                value={spiritualMaster}
                hidden={initiatedName.length>0 ? false:true}
                onBlur={enableSaveAndProceed}
              />
            <p id='spiritualMasterError' style={{color:'red',fontSize:'10px'}}></p>
            </div>
          </div>
          <div className="form-group row">
            <div className="form-col form-check col-md-3">
              <label>Gender<a style={{color:'red'}}>*</a></label>
            </div>
           
            {Gender.map((e) => {if(e.value==gender)
            { return (
              <div className={`form-col col-md`} key={e.value}  style={{marginRight:'30px'}}>
                <label className="form-check-label">
                  <input type="radio" className="form-check-input gender" id="gender"  checked value={e.value} onChange={(e)=>{genderChangeHandler(e),inputHandler(e)}}/>
                  {e.value}
                </label>
                </div>)}
                
              else { return (
                <div className={`form-col col-md`} key={e.value}  style={{marginRight:'30px'}}>
                  <label className="form-check-label">
                    <input type="radio" className="form-check-input gender" id="gender" value={e.value} onChange={(e)=>{genderChangeHandler(e),inputHandler(e)}}/>
                    {e.value}
                  </label>
                  </div>)};
            }
            )}
           
            <p id='genderError' name='' style={{color:'red',fontSize:'10px'}}></p>
          </div>
          <div className="form-group row">
            <div className="form-col col-md-3 ">
              <label> Date of Birth<a style={{color:'red'}}>*</a></label>
            </div>
            <div className="form-col col-md-3 ">
              <input
                id='dateOfBirth'
                type="date"
                className="form-control"
                min="1900-01-01"
                max="2023-12-31"
                onChange={inputHandler}
                value={dateOfBirth}
              />
          </div>
          <div className="form-col col-md-3 ">
              <input
                id='birthCity'
                type="text"
                className="form-control"
                value={birthCity}
                onChange={inputHandler}
                placeholder="birth city"
              />
            </div>
            <div className="form-col col-md-3 ">
              <input
                id='birthState'
                type="text"
                className="form-control"
                onChange={inputHandler}
                value={birthState}
                placeholder="birth state"
              />
            </div>
          
          </div>
          <div className="form-group row">
            <div className="form-col col-md-3" >
              <label>Blood Group</label>
            </div>
            <div className="form-col col-md-3">
              <select className="form-select" id='bloodGroup'onChange={inputHandler}>
                {bloodGroup.map((e) => (
                  <option value={e} label={e} key={e} />
                ))}
              </select>
            </div>
          </div>
          {/* <div className="form-group row">
            <div className="form-col col-md-3">
              <label className="form-label">Upload Self Photo<a style={{color:'red'}}>*</a></label>
            </div>
            <div className="form-col col-md-4">
              <input type="file" className="form-file" id="profileImageUrl" accept="image/*" capture
               onClick={()=>setTakePic(false)}onChange={(e)=>{inputHandler(e),previewImage(e)}}/>
              
            </div>
            <div className="form-col col-md-2">
            <FcCamera className="form-icon" style={{marginRight:'10px'}} size={30} onClick={(e)=>{setTakePic(true),previewImage(e)}}/>
            </div>
           {takePic ? <WebcamCapture/>:
            <div className="form-col image-preview-container" >
              <img className="form-control img-thumbnail" id="preview-selected-image" />
              </div>}
          </div> */}
          
          
        </div>
    </>
  );


};
export default PersonalInfoForm;
