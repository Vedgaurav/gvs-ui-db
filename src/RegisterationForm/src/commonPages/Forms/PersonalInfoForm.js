import "bootstrap/dist/css/bootstrap.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import "./FormInput.css"; 
import { languages,bloodGroup,ashrama,Gender,maritalStatus } from "../../utilities/OptionalEntries";



const PersonalInfoForm = (props) => {
  const dispatch = useDispatch();
  const { fname, mname, lname, initiatedName, gender, caste,gotra,dob ,isValidFname,isValidCaste,isValidGotra} = useSelector(
    (state) => state
  );
   
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
      enableSaveAndProceed(false);
    }

    
  };

  const enableSaveAndProceed=()=>{
    if(isValidCaste && isValidFname&& isValidGotra){
      dispatch({ type: 'submitDisable', data: "",valid:false });
    }
    else dispatch({ type: 'submitDisable', data: "",valid:true });
  }
  const genderChangeHandler=(e)=>{
    let a=document.getElementsByClassName('gender');
    for (let index = 0; index < a.length; index++) {
      
      if(a[index].value!==e.target.value){
        a[index].checked=false;
      }
    }
  }
  const maritalStatusHandle=(e)=>{
    let a=document.getElementsByClassName('maritalstatushandle');
    for (let index = 0; index < a.length; index++) {
      
      if(a[index].value!==e.target.value){
        a[index].checked=false;
      }
    }
  }
  const ashramaChangeHandle=(e)=>{
    
  let a=document.getElementsByClassName('ashramahandle');
  for (let index = 0; index < a.length; index++) {
    
    if(a[index].value!==e.target.value){
      a[index].checked=false;
    }
  }
  }

  useEffect(()=>{
  enableSaveAndProceed();
  },[])

  return (
    <>
      <h3>Personal Information</h3>
      
        <div className="container">
          <div className="form-group row">
            <div className="form-col col-md-3">
              <label>Name<a style={{color:'red'}}>*</a></label>
            </div>
            <div className="form-col col-md-3">
              <input
                id="fname"
                type="text"
                className="form-control "
                placeholder="first name"
                name="^[a-zA-Z][a-zA-Z .,'-]*$"
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
                name="^[a-zA-Z][a-zA-Z .,'-]*$"
                className="form-control "
                placeholder="middle name"
                value={mname}
                onChange={inputHandler}
                
              />
              <p id='mnameError' style={{color:'red',fontSize:'8px'}}></p>
            </div>
            <div className="form-col col-md-3">
              <input
                id="lname"
                type="text"
                className="form-control"
                placeholder="last name"
                name="^[a-zA-Z][a-zA-Z .,'-]*$"
                value={lname}
                onChange={inputHandler}
              />
              <p id='lnameError' style={{color:'red',fontSize:'8px'}}></p>
            </div>
            <div className="form-col col-md-3"></div>
            <div className="form-col col-md-3">
              <input
                id="iname"
                type="text"
                name="^[a-zA-Z][a-zA-Z .,'-]*$"
                className="form-control"
                value={initiatedName}
                placeholder="Initiated Name if any"
                onChange={inputHandler}
              />
              <p id='inameError' style={{color:'red',fontSize:'8px'}}></p>
            </div>
          </div>
          <div className="form-group row">
            <div className="form-col form-check col-md-3">
              <label>Gender<a style={{color:'red'}}>*</a></label>
            </div>
            {Gender.map((e) => (
              <div className={`form-col col-md-${e.col}`} key={e.id} style={{marginRight:'30px'}}>
                <label className="form-check-label">
                  <input type="radio" className="form-check-input gender" id="gender"  value={e.value} onChange={(e)=>{genderChangeHandler(e),inputHandler(e)}}/>
                  {e.value}
                </label>
              </div>
            ))}
            <p id='genderError' name='' style={{color:'red',fontSize:'10px'}}></p>
          </div>
          <div className="form-group row">
            <div className="form-col col-md-3 ">
              <label> Date of Birth<a style={{color:'red'}}>*</a></label>
            </div>
            <div className="form-col col-md-3 ">
              <label>Original<a style={{color:'red'}}>*</a></label>
              <input
                id='odob'
                type="date"
                className="form-control"
                min="1900-01-01 0HH:0MM:0SS"
                max="2023-12-31 0HH:0MM:0SS"
                onChange={inputHandler}
                defaultValue={dob}
              />
            </div>
            <div className="form-col col-md-3">
              <label>Certificate<a style={{color:'red'}}>*</a></label>
              <input
                id='cdob'
                type="date"
                className="form-control"
                min="1900-01-01"
                max="2023-12-31"
                onChange={inputHandler}
                defaultValue={dob}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="form-col col-md-3">
              <label>Ancestors Info.<a style={{color:'red'}}>*</a></label>
            </div>
            <div className="form-col col-md-3">
              <input
              id='caste'
                type="text"
                className="form-control"
                name="^[a-zA-Z][a-zA-Z .,'-]*$"
                placeholder="caste"
                onChange={inputHandler}
                value={caste}
                onBlur={enableSaveAndProceed}
              />
              <p id='casteError' style={{color:'red',fontSize:'8px'}}></p>
            </div>
            <div className="form-col col-md-3">
              <input
              id='subcast'
                type="text"
                className="form-control"
                placeholder="sub caste"
                // onChange={inputHandler}
              />
            </div>
            <div className="form-col col-md-3">
              <input
              id='gotra'
              name="^[a-zA-Z][a-zA-Z .,'-]*$"
                type="text"
                className="form-control"
                placeholder="gotra"
                value={gotra}
                onInput={inputHandler}
                
                onBlur={enableSaveAndProceed}
              />
              <p id='gotraError' style={{color:'red',fontSize:'8px'}}></p>
            </div>
          </div>
          <div className="form-group row">
            <div className="form-col form-check col-md-3">
              <label>Marital Status<a style={{color:'red'}}>*</a></label>
            </div>
            {maritalStatus.map((e) => (
              <div className={`form-col col-md-1`} key={e} style={{marginRight:'30px'}}>
                <label className="form-check-label">
                  <input type="radio" className="form-check-input maritalstatushandle" name=''id="maritalStatus" value={e} onClick={(e)=>{inputHandler(e),maritalStatusHandle(e)}}/>
                  {e}
                </label>
              </div>
            ))}
            
          </div>
          <div className="form-group row">
            <div className="form-col form-check col-md-3">
              <label>Aspiring Ashrama<a style={{color:'red'}}>*</a></label>
            </div>
            {ashrama.map((e) => (
              <div className={`form-col col-md-${e.col}`} key={e.id} style={{marginRight:'30px'}}>
                <label className="form-check-label">
                  <input type="radio" className="form-check-input ashramahandle" name=''id="aspiringAshram" value={e.value} onClick={(e)=>{inputHandler(e),ashramaChangeHandle(e)}}/>
                  {e.value}
                </label>
              </div>
            ))}
            
          </div>
          <div className="form-group row">
            <div className="form-col col-md-3" >
              <label>Blood Group<a style={{color:'red'}}>*</a></label>
            </div>
            <div className="form-col col-md-3">
              <select className="form-select" id='bloodGroup'onChange={inputHandler}>
                {bloodGroup.map((e) => (
                  <option value={e} label={e} key={e} />
                ))}
              </select>
            </div>
          </div>
          <div className="form-group row">
            <div className="form-col col-md-3">
              <label>languages Known<a style={{color:'red'}}>*</a></label>
            </div>
            <div className="form-col col-md-3">
              <select className="form-select" id='language' onChange={inputHandler}>
                {languages.map((e) => (
                  <option value={e} label={e} key={e} />
                ))}
              </select>
            </div>
          </div>
          <div className="form-group row">
            <div className="form-col col-md-3">
              <label className="form-label">Upload Profile Picture<a style={{color:'red'}}>*</a></label>
            </div>
            <div className="form-col col-md-3">
              <input type="file" className="form-file" accept="image/*" />
            </div>
          </div>
        </div>
    </>
  );
};
export default PersonalInfoForm;
