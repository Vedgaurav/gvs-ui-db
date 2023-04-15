import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { occupations,educations } from "../../utilities/OptionalEntries";

const ProfessionalInfoForm = () => {
  const { officeLocation, education ,occupation, currentCompany,isValidEducation,isValidOccupation} = useSelector(
    (state) => state
  );
  const dispatch=useDispatch();
  function inputHandler(e) {   
    const { value, id,name } = e.target;
    console.log(id,name,value)
    if (name==undefined || name==''){
      useDispatch({ type: id, data: value ,valid:true});
    }
    
    else if(value.match(name) !==null) {
      document.getElementById(id+'Error').innerText='';
    useDispatch({ type: id, data: value,valid:true });
    enableSaveAndProceed();
    }
    else {
      document.getElementById(id+'Error').innerText='invalid input';
      useDispatch({ type: id, data: value,valid:false });
      enableSaveAndProceed(false);
    }}
  const [collapse, setCollapse] = useState("");
  const collapseHandler = (e) => {
    console.log(e.target.value);
    if (
      e.target.value === "UNEMPLOYED" ||
      e.target.value === "HOMEMAKER"
    ) {
      setCollapse("collapse");
    } else setCollapse("");

  };
  
  return (
    <>
    <h2>Professional Information</h2>
      <div className="container">
        <div className="form-group row">
          <div className="form-col col-md-3">
            <label>Education<a style={{color:'red'}}>*</a></label>
          </div>
          <div className="form-col col-md-3">
            <select className="form-select" id="education" onChange={inputHandler}>
              {educations.map((e) => {
                if(e===education)
                <option value={e} label={e} selected />
                else <option value={e} label={e}  />
               })}
            </select>
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col col-md-3">
            <label>Occupation<a style={{color:'red'}}>*</a></label>
          </div>
          <div className="form-col col-md-3">
            <select className="form-select"  onChange={(e)=>{inputHandler(e),collapseHandler(e)}} id='occupation' >
              {occupations.map((e) => {
                if (e.val===occupation) {
                 <option value={e.val} key={e.id} id={e.id} label={e.val} selected/>
                }
                else{
                 <option value={e.val} key={e.id} id={e.id} label={e.val} />
                }
                  })}
            </select>
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col col-md-3">
            <label>Skills/Job Experience</label>
          </div>
          <div className={`form-col col-md-8`}>
            <textarea className="form-control" id="skills" value={skills} />
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col col-md-3">
            <label>Current Company/Business Name</label>
          </div>
          <div className={`form-col col-md-5`}>
            <input
              type="text"
              className="form-control"
              id="currentCompany"
              value={currentCompany}
            />
          </div>
        </div>
        <div className={`form-group row ${collapse}`}>
          <div className="form-col col-md-3">
            <label>
              Office location<a style={{ color: "red" }}>*</a>
            </label>
          </div>

          <div className={`form-col col-md-3 ${collapse}`}>
            <input
              type="text"
              className="form-control"
              style={{ width: "400px" }}
              id="officeLocation"
              value={officeLocation}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfessionalInfoForm;
