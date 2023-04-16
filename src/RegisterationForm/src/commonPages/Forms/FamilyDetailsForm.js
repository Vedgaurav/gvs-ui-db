import { mothersTongue,marritalStatus } from "../../utilities/OptionalEntries";
import { useSelector,useDispatch } from "react-redux";
import { useEffect,useState } from "react";
const FamilyDetails = () => {
  const dispatch = useDispatch();
   const { fathersName,mothersName,motherTongue,spouseName,maritalStatus,validations } = useSelector(
     (state) => state
   );
  const[hidden,setHidden]= useState(true);
useEffect(()=>{
enableSaveAndProceed();
},[])

  const inputHandler = (e) => {
    const { value, id,name } = e.target;
    console.log(name,id,value)
    if (name==undefined || name==''){
      dispatch({ type: id, data: value ,valid:true});
    }
    
    else if(value.match(name) !==null) {
      console.log('matched with regex');
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
   
  const enableSaveAndProceed=()=>{
    if(validations.isValidFathersName&&validations.isValidMothersName){
      dispatch({ type: 'submitDisable', data: "",valid:false });
    }
    else dispatch({ type: 'submitDisable', data: "",valid:true });
  }
  const maritalStatusHandle=(e)=>{
    let a=document.getElementsByClassName('maritalstatushandle');
    if(e.target.value==='MARRIED')
     setHidden(false);
     else setHidden(true);
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
            <select className="form-select" id="motherTongue"onChange={inputHandler}>
              {mothersTongue.map((e) => {
                if(e===motherTongue)
               return <option value={e} label={e} key={e} selected/>
                else 
               return <option value={e} label={e} key={e} />
              })}
            </select>
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
        <div className="form-group row" hidden={hidden}>
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
            <input type="date" id="dateOfMarriage" className="form-control" onChange={inputHandler} />
          </div>
        </div>
        <div className="form-group row" hidden={hidden}>
          <div className="form-col form-check col-md-3">
            <label>Children</label>
          </div>
          <div className={`form-col col-md-3`}>
              <textarea
                className="form-control"
                
                placeholder={"1.\n2.\n3.\n4."}
              />
              <p style={{ fontSize: "10px", color: "green" }}>* leave empty if not applicable</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default FamilyDetails;
