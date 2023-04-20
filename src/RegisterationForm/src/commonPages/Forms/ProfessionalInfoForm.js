import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { occupations,educations } from "../../utilities/OptionalEntries";
import { validateName } from "../../RegexExpsValidation/RegexExps";

const ProfessionalInfoForm = () => {
  const { officeLocation, education ,occupation,presentDesignation,degreeSpecification, currentCompany,skills,validations} = useSelector(
    (state) => state
  );
  const dispatch=useDispatch();
  useEffect(()=>{},[])
  function inputHandler(e) {   
    const { value, id,name } = e.target;
    console.log(id,name,value)
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
    if(validations.isValidEducation&&validations.isValidOccupation){
      dispatch({ type: 'submitDisable', data: "",valid:false });
    }
    else dispatch({ type: 'submitDisable', data: "",valid:true });
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
            <select className="form-select" id="education" value={education} onChange={(e)=>inputHandler(e)} >
              {educations?.map((e) => <option value={e} label={e} key={e} />
               )}
            </select>
          </div>
         {education=="NO_EDUCATION"? "":<><div className="form-col col-md-3">
            <label>Degree/Education Specification<a style={{color:'red'}}>*</a></label>
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
            <select className="form-select"  value={occupation} onChange={(e)=>{inputHandler(e)}} onClick={(e)=>{inputHandler(e)}}id='occupation' >
              {occupations.map((e) => 
                <option value={e} key={e} id={e} label={e} />
                  )}
            </select>
          </div>
         {occupation === "UNEMPLOYED" ||
      occupation === "HOMEMAKER" || occupation === "STUDENT" ? "":<><div className="form-col col-md-3">
            <label>Designation<a style={{color:'red'}}>*</a></label>
          </div>
          <div className="form-col col-md-3">
           <input type="text" className="form-control"name={validateName} id="presentDesignation" placeholder="Eg. Assistant Software Engineer"value={presentDesignation} onChange={inputHandler}/>
           <p id="presentDesignationError" style={{color:'red',fontSize:"10px"}}></p>
          </div>
          </>}
        </div>
        <div className="form-group row">
          <div className="form-col col-md-3">
            <label>Skills/Job Experience</label>
          </div>
          <div className={`form-col col-md-5`}>
            <textarea className="form-control" id="skills" placeholder="Eg. Java, React,Python, cooking, drawing, painting, carpenting etc.." value={skills} onChange={inputHandler}/>
          </div>
        </div>
        {occupation === "UNEMPLOYED" ||
      occupation === "HOMEMAKER" || occupation === "STUDENT" ? "":<> <div className={`form-group row `}>
          <div className="form-col col-md-3">
            <label>Current Company/Business Name<a style={{color:'red'}}>*</a></label>
          </div>
          <div className={`form-col col-md-5`}>
            <input
              type="text"
              className="form-control"
              placeholder="Eg. Infosys"
              id="currentCompany"
              value={currentCompany}
              onChange={inputHandler}
            />
          </div>
        </div>
        <div className={`form-group row `}>
          <div className="form-col col-md-3">
            <label>
              Office/Business location<a style={{ color: "red" }}>*</a>
            </label>
          </div>

          <div className={`form-col col-md-5 `}>
            <input
              type="text"
              className="form-control"
              id="officeLocation"
              placeholder="Eg. Twin Tower, kalynai nagar, pune"
              value={officeLocation}
              onChange={inputHandler}
            />
          </div>
        </div></>}
      </div>
    </>
  );
};
export default ProfessionalInfoForm;
