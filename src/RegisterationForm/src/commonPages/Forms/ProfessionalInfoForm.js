import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { occupations,educations } from "../../utilities/OptionalEntries";
import { validateName,validateAddress } from "../../RegexExpsValidation/RegexExps";

const ProfessionalInfoForm = () => {
  const { occupationLocation, education ,occupation,presentDesignation,degreeSpecification, currentCompany,skills,validations} = useSelector(
    (state) => state
  );
  const dispatch=useDispatch();
  useEffect(()=>{
    enableSaveAndProceed();
  },[])
  useEffect(()=>{
    enableSaveAndProceed();
  },[validations.isValidEducation,validations.isValidOccupation,validations.isValidEducationSpecification,validations.isValidCurrentCompany
  ,validations.isValidOccupationLocation,validations.isValidDesignation,education])
  function inputHandler(e) {   
    const { value, id,name } = e.target;
    //console.log(id,name,value)
    if (name==undefined || name==''){
      dispatch({ type: id, data: value ,valid:true});
      enableSaveAndProceed();
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
    }}
 
  const enableSaveAndProceed=()=>{
    if((education!=="NO_EDUCATION"&&education!=="UPTO_5th_STD"&&education!=="UPTO_10th_STD"&&education!=="UPTO_12th_STD")
    &&(occupation!=="UNEMPLOYED"&&occupation!=="HOMEMAKER")){
      if(validations.isValidEducation&&validations.isValidOccupation&&validations.isValidEducationSpecification
        &&degreeSpecification.length>0&&validations.isValidOccupationLocation&&validations.isValidCurrentCompany&&occupationLocation.length>0
        &&presentDesignation.length>0&&currentCompany.length>0&&validations.isValidDesignation){
        dispatch({ type: 'submitDisable', data: "",valid:false });
      }
      else dispatch({ type: 'submitDisable', data: "",valid:true });
    }
    else if((education!=="NO_EDUCATION"&&education!=="UPTO_5th_STD"&&education!=="UPTO_10th_STD"&&education!=="UPTO_12th_STD")
    &&(occupation=="UNEMPLOYED"||occupation=="HOMEMAKER")){
      if(validations.isValidEducation&&validations.isValidOccupation&&validations.isValidEducationSpecification
        &&degreeSpecification.length>0){
        dispatch({ type: 'submitDisable', data: "",valid:false });
      }
      else dispatch({ type: 'submitDisable', data: "",valid:true });
    }
    else if((education=="NO_EDUCATION"||education=="UPTO_5th_STD"||education=="UPTO_10th_STD"||education=="UPTO_12th_STD")
    &&(occupation!=="UNEMPLOYED"&&occupation!=="HOMEMAKER")){
      if(validations.isValidEducation&&validations.isValidOccupation&&
        validations.isValidOccupationLocation&&validations.isValidCurrentCompany&&occupationLocation.length>0
        &&presentDesignation.length>0&&currentCompany.length>0&&validations.isValidDesignation){
        dispatch({ type: 'submitDisable', data: "",valid:false });
      }
      else dispatch({ type: 'submitDisable', data: "",valid:true });
    }
    else {
      if(validations.isValidEducation&&validations.isValidOccupation){
      dispatch({ type: 'submitDisable', data: "",valid:false });
    }
    else dispatch({ type: 'submitDisable', data: "",valid:true });

    }
    
  }
  const clearDegreeSpecification=()=>{
    dispatch({ type: 'educationSpecification', data: "",valid:false });

  }
  const clearOccupationDetails=()=>{
    dispatch({ type: 'occupationLocation', data: "",valid:false });
    dispatch({ type: 'presentDesignation', data: "",valid:false });
    dispatch({ type: 'currentCompany', data: "",valid:false });
  }
  return (
    <>
    <h2>Professional Information</h2>
      <div className="container" onChange={enableSaveAndProceed}>
        <div className="form-group row">
          <div className="form-col col-md-3">
            <label>Highest Education<a style={{color:'red'}}>*</a></label>
          </div>
          <div className="form-col col-md-3">
            <select className="form-select" id="education" value={education} onChange={(e)=>{inputHandler(e),clearDegreeSpecification}} >
              {educations?.map((e) => <option value={e} label={e} key={e} />
               )}
            </select>
            <p/>
          </div>
         {education=="NO_EDUCATION" ||education=="UPTO_5th_STD"||education=="UPTO_10th_STD"||education=="UPTO_12th_STD" 
            ? "":<><div className="form-col col-md-3">
            <label>Degree Specification<a style={{color:'red'}}>*</a></label>
          </div>
          <div className="form-col col-md-3">
           <input type="text"className="form-control" name={validateName} id="educationSpecification"value={degreeSpecification} placeholder="B.tech Computer Science" onChange={inputHandler}/>
           <p id="educationSpecificationError" style={{color:'red',fontSize:"10px"}}></p>
          </div>
          
          </>}
        </div>
        <div className="form-group row">
          <div className="form-col col-md-3">
            <label>Occupation<a style={{color:'red'}}>*</a></label>
          </div>
          <div className="form-col col-md-3">
            <select className="form-select"  value={occupation} onChange={(e)=>{inputHandler(e),clearOccupationDetails}} onClick={(e)=>{inputHandler(e)}}id='occupation' >
              {occupations.map((e) => 
                <option value={e} key={e} id={e} label={e} />
                  )}
            </select>
            <p/>
          </div>
         {occupation === "UNEMPLOYED" ||
      occupation === "HOMEMAKER" ? "":<><div className="form-col col-md-3">
            <label>{occupation === "STUDENT" ? "Course Duration":(occupation === "RETIRED") ?"Last held Designation":"Designation"}<a style={{color:'red'}}>*</a></label>
          </div>
          <div className="form-col col-md-3">
           <input type="text" className="form-control"name={validateName} id="presentDesignation" placeholder="words only"value={presentDesignation} onChange={(e)=>{inputHandler(e)}}/>
           <p id="presentDesignationError" style={{color:'red',fontSize:"10px"}}></p>
          </div>
          </>}
        </div>
        {occupation === "UNEMPLOYED" ||
      occupation === "HOMEMAKER" ? "":<> <div className={`form-group row `}>
          <div className="form-col col-md-3">
            <label>{occupation === "STUDENT" ? "College Name":"Current Company/Business Name"}<a style={{color:'red'}}>*</a></label>
          </div>
          <div className={`form-col col-md-5`}>
            <input
              type="text"
              className="form-control"
              name={validateName}
              placeholder="Eg. XYZ Organization"
              id="currentCompany"
              value={currentCompany}
              onChange={inputHandler}
            />
            <p id="currentCompanyError" style={{color:"red" ,fontSize:"10px"}}/>
          </div>
        </div>
        <div className={`form-group row `}>
          <div className="form-col col-md-3">
            <label>
            {occupation === "STUDENT" ? "College Location": "Office/Business location"}<a style={{ color: "red" }}>*</a>
            </label>
          </div>

          <div className={`form-col col-md-5 `}>
            <input
              type="text"
              className="form-control"
              id="occupationLocation"
              name={validateAddress}
              placeholder="Eg. Twin Tower, kalynai nagar, pune"
              value={occupationLocation}
              onChange={inputHandler}
            />
            <p id="occupationLocationError" style={{color:"red" ,fontSize:"10px"}}/>
          </div>
        </div></>}
        <div className="form-group row">
          <div className="form-col col-md-3">
            <label>Skills/Job Experience</label>
          </div>
          <div className={`form-col col-md-5`}>
            <textarea className="form-control" id="skills" placeholder="Eg. Java, React, cooking, drawing, carpenting etc.." value={skills} onChange={inputHandler}/>
             <p/>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfessionalInfoForm;
