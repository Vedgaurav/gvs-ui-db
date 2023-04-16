import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { occupations,educations } from "../../utilities/OptionalEntries";

const ProfessionalInfoForm = () => {
  const { officeLocation, education ,occupation, currentCompany,skills,validations} = useSelector(
    (state) => state
  );
  const dispatch=useDispatch();
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
  const enableSaveAndProceed=()=>{
    if(true){
      dispatch({ type: 'submitDisable', data: "",valid:false });
    }
    else dispatch({ type: 'submitDisable', data: "",valid:true });
  }
  
  return (
    <>
    <h2>Professional Information</h2>
      <div className="container">
        <div className="form-group row">
          <div className="form-col col-md-3">
            <label>Highest Education<a style={{color:'red'}}>*</a></label>
          </div>
          <div className="form-col col-md-3">
            <select className="form-select" id="education" onChange={inputHandler}>
              {educations.map((e) => {
                if(e===education)
                return (<option value={e} label={e} key={e}selected={true} />)
                else return (<option value={e} key={e}label={e}  />)
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
                if (e===occupation) {
                return (<option value={e} key={e} id={e} label={e} selected={true}/>)
                }
                else{
                return (<option value={e} key={e} id={e} label={e} />)
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
            <textarea className="form-control" id="skills" value={skills} onChange={inputHandler}/>
          </div>
        </div>
        <div className={`form-group row ${collapse}`}>
          <div className="form-col col-md-3">
            <label>Current Company/Business Name</label>
          </div>
          <div className={`form-col col-md-5`}>
            <input
              type="text"
              className="form-control"
              id="currentCompany"
              value={currentCompany}
              onChange={inputHandler}
            />
          </div>
        </div>
        <div className={`form-group row ${collapse}`}>
          <div className="form-col col-md-3">
            <label>
              Office/Business location<a style={{ color: "red" }}>*</a>
            </label>
          </div>

          <div className={`form-col col-md-5 ${collapse}`}>
            <input
              type="text"
              className="form-control"
              id="officeLocation"
              value={officeLocation}
              onChange={inputHandler}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfessionalInfoForm;
