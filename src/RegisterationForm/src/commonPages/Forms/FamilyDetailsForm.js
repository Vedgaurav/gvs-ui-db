import { mothersTongue,marritalStatus } from "../../utilities/OptionalEntries";
import { useSelector,useDispatch } from "react-redux";
import { useEffect,useState } from "react";
const FamilyDetails = () => {
  const dispatch = useDispatch();
   const { fathersName,mothersName,motherTongue,language,children,spouseName,dateOfMarriage,maritalStatus,validations } = useSelector(
     (state) => state
   );
useEffect(()=>{
enableSaveAndProceed();
},[])
useEffect(()=>{
  enableSaveAndProceed();
  },[maritalStatus,validations.isValidFathersName,validations.isValidMothersName,validations.isValidMaritalStatus,validations.isValidDateOfMarriage])

  const inputHandler = (e) => {
    const { value, id,name } = e.target;
    //console.log(name,id,value)
    if (name==undefined || name==''){
      dispatch({ type: id, data: value ,valid:true});
    }
    
    else if(value.match(name) !==null) {
     // console.log('matched with regex');
      document.getElementById(id+'Error').innerText='';
    dispatch({ type: id, data: value,valid:true });
    }
    else {
      document.getElementById(id+'Error').innerText='invalid input';
      dispatch({ type: id, data: value,valid:false });
    }
    enableSaveAndProceed();
  };
   
  const enableSaveAndProceed=()=>{
    if(maritalStatus==="MARRIED"){
      if(validations.isValidFathersName&&validations.isValidMothersName && validations.isValidMaritalStatus && validations.isValidSpouseName&& validations.isValidDateOfMarriage){
        dispatch({ type: 'submitDisable', data: "",valid:false });}
        else {
         dispatch({ type: 'submitDisable', data: "",valid:true });
        }
    }
    else if(validations.isValidFathersName&&validations.isValidMothersName && validations.isValidMaritalStatus&&maritalStatus!=="MARRIED"){
      dispatch({ type: 'submitDisable', data: "",valid:false });
      dispatch({ type: 'spouseName', data: "",valid:false });
      dispatch({ type: 'dateOfMarriage', data: "",valid:false });
      dispatch({ type: 'children', data: "",valid:false });
    }
    else dispatch({ type: 'submitDisable', data: "",valid:true });
  }
  const maritalStatusHandle=(e)=>{
    let a=document.getElementsByClassName('maritalstatushandle');
    for (let index = 0; index < a.length; index++) {
      
      if(a[index].value!==e.target.value){
        a[index].checked=false;
      }
    }
  }
  return (
    <>
      <h2>Family Details</h2>
      <div className="container">
        <div className="form-group row">
          <div className="form-col col-md-3">
            <label>
              Father's Name<a style={{ color: "red" }}>*</a>
            </label>
          </div>
          <div className="form-col col-md-3">
            <input
              id="fathersName"
              type="text"
              name="^[a-zA-Z][a-zA-Z .,'-]*$"
              className="form-control "
              placeholder="Enter full name"
              value={fathersName}
              onChange={inputHandler}
            />
            <p id="fathersNameError" style={{color:'red',fontSize:'10px'}}></p>
          </div>
          <div className="form-col col-md-3">
            <label>
              Mother's Name<a style={{ color: "red" }}>*</a>
            </label>
          </div>
          <div className="form-col col-md-3">
            <input
              id="mothersName"
              type="text"
              name="^[a-zA-Z][a-zA-Z .,'-]*$"
              className="form-control "
              placeholder="Enter full name"
              value={mothersName}
              onChange={inputHandler}
            />
            <p id="mothersNameError" style={{color:'red',fontSize:'10px'}}></p>
          </div>
        </div>
        
          <div className="form-group row">
          <div className="form-col col-md-3">
            <label>
              Mother Tongue<a style={{ color: "red" }}>*</a>
            </label>
          </div>
          <div className="form-col col-md-3">
            <select className="form-select" id="motherTongue" value={motherTongue}onChange={inputHandler}>
              {mothersTongue.map((e) => {
                
               return <option value={e} label={e} key={e} />
               
              })}
            </select>
            </div>
            <div className="form-col col-md-3">
            <label>
              Languages Known
            </label>
          </div>
          <div className="form-col col-md-3">
            <input
              id="language"
              type="text"
              name="^[a-zA-Z][a-zA-Z .,'-]*$"
              className="form-control "
              placeholder="Enter known languages"
              value={language}
              onChange={inputHandler}
            />
            <p id="languageError" style={{color:'red',fontSize:'10px'}}></p>
          </div>
          </div>
          <div className="form-group row">
            <div className="form-col form-check col-md-3">
              <label>Marital Status<a style={{color:'red'}}>*</a></label>
            </div>
            {marritalStatus.map((e) => {
              if(e===maritalStatus)
             return( <div className="form-col col-md-1" key={e} style={{marginRight:'60px'}}>
                <label className="form-check-label">
                  <input type="radio" className="form-check-input maritalstatushandle" id="maritalStatus" value={e} defaultChecked onClick={(e)=>{inputHandler(e),maritalStatusHandle(e)}}/>
                  {e}
                </label>
              </div>)
              else
              return(<div className="form-col col-md-1" key={e} style={{marginRight:'60px'}}>
                <label className="form-check-label">
                  <input type="radio" className="form-check-input maritalstatushandle" id="maritalStatus" value={e} onClick={(e)=>{inputHandler(e),maritalStatusHandle(e)}}/>
                  {e}
                </label>
              </div>)
              })}
            
          </div>
       {maritalStatus==='MARRIED'? <><div className="form-group row" >
          <div className="form-col col-md-3">
            <label>
              Spouse Name<a style={{ color: "red" }}>*</a>
            </label>
          </div>
          <div className="form-col col-md-3">
            <input
              id="spouseName"
              type="text"
              className="form-control"
              placeholder="Enter full name"
              value={spouseName}
              onChange={inputHandler}
            />
          </div>
          <div className="form-col col-md-3 ">
            <label>
              {" "}
              Date of Marriage<a style={{ color: "red" }}>*</a>
            </label>
          </div>
          <div className="form-col col-md-3 ">
            <input type="date" id="dateOfMarriage" className="form-control" value={dateOfMarriage} onChange={inputHandler} />
          </div>
        </div>
        <div className="form-group row" >
          <div className="form-col form-check col-md-3">
            <label>Children</label>
          </div>
          <div className={`form-col col-md-3`}>
              <textarea
                className="form-control"
                id="children"
                placeholder={"1.\n2.\n3.\n4."}
                value={children}
                onChange={inputHandler}
              />
              <p style={{ fontSize: "10px", color: "green" }}>* leave empty if not applicable</p>
          </div>
        </div></>:""}
      </div>
    </>
  );
};
export default FamilyDetails;
