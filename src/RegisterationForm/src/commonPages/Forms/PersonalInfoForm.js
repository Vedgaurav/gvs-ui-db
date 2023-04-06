import "bootstrap/dist/css/bootstrap.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import "./FormInput.css";
import { validateFname } from "../../RegexExpsValidation/RegexExps";
import { languages,bloodGroup,ashrama,gender } from "../../utilities/OptionalEntries";
import { fnameError } from "../../utilities/ErrorMessages";


const PersonalInfoForm = (props) => {
  const dispatch = useDispatch();
  const { fname, mname, lname, initiatedName } = useSelector(
    (state) => state
  );

  useEffect(()=>{

    return ()=>{

    }
  },[]);
  const inputHandler = (e) => {
    const { value, id } = e.target;
    dispatch({ type: id, data: value });
  };

  // const saveDataHandler = (e) => {
  //   const { value, id } = e.target;
  //   console.log("id: ", id, "data: ", value);
  // };
  
  
  let validations={vFname:false,vMname:false,vlname:false,vIname:false,vOdob:false,vCdob:false,caste:false,subcaste:false,gotra:false}
  
  
  const validate=(e)=>{
    const {id,value}=e.target;
    console.log(id);
    switch (id) {
      case 'fname':
        if(validateFname.test(value))
       { validations={...validations,vFname:true};
        props.onStageChange(false);}
        else {validations.vFname=false;
          props.onStageChange(true);
         }
        break;
        case 'mname':
        if(validateFname.test(value))
        validations={...validations,vMname:true};
        break;
        case 'lname':
        if(validateFname.test(value))
        validations={...validations,vLname:true};
        break;
        case 'iname':
        if(validateFname.test(value))
        validations={...validations,vLname:true};
        break;
        case 'odob':
        if(validateFname.test(value))
        validations={...validations,oDob:true};
        break;
        case 'cdob':
        if(validateFname.test(value))
        validations={...validations,oCdob:true};
        break;
        case 'cast':
        if(validateFname.test(value))
        validations={...validations,caste:true};
        break;
        case 'subcast':
        if(validateFname.test(value))
        validations={...validations,subcaste:true};
        break;
        case 'gotra':
        if(validateFname.test(value))
        validations={...validations,gotra:true};
        break;
      default:
        break;
    }
    // console.log(validateFname.test(firstName))
  }
  const genderChangeHandler=(e)=>{
    let a=document.getElementsByName('gen');
    for (let index = 0; index < a.length; index++) {
      
      if(!a[index].value==e.target.value){
        a[index].checked=false;
      }
    }
  }
  const ashramaChangeHandle=(e)=>{
    document.getElementById('aspiringAshram').value=e.target.value;
  let a=document.getElementsByName('ashramaHandle');
  for (let index = 0; index < a.length; index++) {
    
    if(!a[index].value==e.target.value){
      a[index].checked=false;
    }
  }
  }
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
                defaultValue={fname}
                onChange={validate}
              //   onChange={(e) => {
              //     inputHandler(e);
              //     saveDataHandler(e);
              //   }
              // }
              onBlur={inputHandler}
              />
            {/* { validations.vFname ? <alert >{fnameError}</alert>:<alert>firstName</alert>} */}
            </div>
            <div className="form-col col-md-3">
              <input
                id="mname"
                type="text"
                
                className="form-control "
                placeholder="middle name"
                value={mname}
                onChange={validate}
                onBlur={inputHandler}
              />
            </div>
            <div className="form-col col-md-3">
              <input
                id="lname"
                type="text"
                className="form-control"
                placeholder="last name"
                value={lname}
                onChange={validate}
              />
            </div>
            <div className="form-col col-md-3"></div>
            <div className="form-col col-md-3">
              <input
                id="iname"
                type="text"
                className="form-control"
                value={initiatedName}
                placeholder="Initiated Name if any"
                onChange={validate}
                onBlur={initiatedName}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="form-col form-check col-md-3">
              <label>Gender<a style={{color:'red'}}>*</a></label>
            </div>
            {gender.map((e) => (
              <div className={`form-col col-md-${e.col}`} key={e.id} style={{marginRight:'30px'}}>
                <label className="form-check-label">
                  <input type="radio" className="form-check-input ashram" id={e.id} name='gen' value={e.value} onChange={genderChangeHandler}/>
                  {e.value}
                </label>
              </div>
            ))}
            
          </div>
          <div className="form-group row">
            <div className="form-col col-md-3 ">
              <label> Date of Birth<a style={{color:'red'}}>*</a></label>
            </div>
            <div className="form-col col-md-3 ">
              <label>Original<a style={{color:'red'}}>*</a></label>
              <input
                id='odob'
                type="datetime-local"
                className="form-control"
                min="2019-01-01 0HH:0MM:0SS"
                max="2022-12-31 0HH:0MM:0SS"
                onChange={validate}
              />
            </div>
            <div className="form-col col-md-3">
              <label>Certificate<a style={{color:'red'}}>*</a></label>
              <input
                id='cdob'
                type="datetime-local"
                className="form-control"
                min="2019-01-01"
                max="2022-12-31"
                onChange={validate}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="form-col col-md-3">
              <label>Ancestors Info.<a style={{color:'red'}}>*</a></label>
            </div>
            <div className="form-col col-md-3">
              <input
              id='cast'
                type="text"
                className="form-control"
                placeholder="caste"
              />
            </div>
            <div className="form-col col-md-3">
              <input
              id='subcast'
                type="text"
                className="form-control"
                placeholder="sub caste"
              />
            </div>
            <div className="form-col col-md-3">
              <input
              id='gotra'
                type="text"
                className="form-control"
                placeholder="gotra"
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="form-col form-check col-md-3">
              <label>Ashrama<a style={{color:'red'}}>*</a></label>
            </div>
            {ashrama.map((e) => (
              <div className={`form-col col-md-${e.col}`} key={e.id} style={{marginRight:'30px'}}>
                <label className="form-check-label">
                  <input type="radio" className="form-check-input" name='ashramaHandle'id={e.id} value={e.value} onClick={ashramaChangeHandle}/>
                  {e.value}
                </label>
              </div>
            ))}
            <input type="text" id='aspiringAshram' onChangeCapture={inputHandler} hidden/>
          </div>
          <div className="form-group row">
            <div className="form-col col-md-3" onChange={validate}>
              <label>Blood Group<a style={{color:'red'}}>*</a></label>
            </div>
            <div className="form-col col-md-3">
              <select className="form-select" onChange={validate}>
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
              <select className="form-select">
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
