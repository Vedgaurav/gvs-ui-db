import { facilitators,introductionMedium } from "../../utilities/OptionalEntries";
import { useSelector,useDispatch } from "react-redux";
import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState,useEffect } from "react";
const DevotionalInfoForm = () => {
  const dispatch=useDispatch();
  const { spiritualMaster,chantingRounds,yearChantingSince,yearChanting16Rounds,
    introducedBy,yearOfIntroduction,placeIntroducedIn,
    preferredServices, servicesRendered,facilitator,validations} = useSelector(
    (state) => state
  );
  useEffect(()=>{

  enableSaveAndProceed();
  },[])
  
  const inputHandler = (e) => {
    
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
    }

    
  };

  const enableSaveAndProceed=()=>{
    if(validations.isValidChantingRounds){
      dispatch({ type: 'submitDisable', data: "",valid:false });
    }
    else dispatch({ type: 'submitDisable', data: "",valid:true });
  }
  const [yourCounselor,setYourCounselor]=useState(true);
  const centerHandler=(e)=>{
  
  let a=document.getElementsByClassName('temple');
  for (let index = 0; index < a.length; index++) {
    if(a[index].value!==e.target.value){
      a[index].checked=false;
    }
  }
  }

  return (
    <>
      <div className="container">
        <h2> Devotional Information</h2>
        <div className="form-group row">
          <div className="form-col col-md-3">
            <label>Facilitator/counselor<a style={{color:'red'}}>*</a></label>
          </div>
          <div className='form-col col-md-3'>
            <select type="select" id='facilitator' className="form-select"  onBlur={inputHandler}>
              {facilitators.map((e) => {
                if(e===facilitator)
                return <option value={e} label={e} key={e} selected/>
                else return <option value={e} label={e} key={e} />
              })}
            </select>
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col col-md-3">
            <label>No. Of Rounds Chanting<a style={{color:'red'}}>*</a></label>
          </div>
          <div className={`form-col col-md-3`}>
            <input type="number" id='chantingRounds' value={chantingRounds}className="form-control" onChange={inputHandler}/>
          </div>
        </div>
        
        <div className="form-group row">
        {chantingRounds>0 ?  <><div className="form-col col-md-3">
            <label>Chanting Since</label>
          </div>
         <div className={`form-col col-md-3`}>
            <input type="month" id='yearChantingSince' className="form-control" onChange={inputHandler}/>
          </div></>:""}
         {chantingRounds>=16 ? <><div className="form-col col-md-3">
            <label>Chanting 16 & above Rounds Since</label>
          </div>
          <div className={`form-col col-md-3`}>
            <input
              type="month"
              className="form-control"
              id='yearChanting16Rounds'
              onChange={inputHandler}
            />
          </div></>:""}
        </div>
        <div className="form-group row">
          <div className="form-col form-check col-md-3">
            <label>Introduced By<a style={{color:'red'}}>*</a></label>
          </div>
          <div className={`form-col col-md-3`}>
            <input type="text" id='introducedBy' placeholder="name of person" value={introducedBy}className="form-control" onChange={inputHandler}/>
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col col-md-3">
            <label>Introduction Medium <a style={{color:'red'}}>*</a></label>
          </div>
          <div className="form-col col-md-3">
            
              <select id='placeIntroducedIn' className="form-control col-md-3" onChange={inputHandler} >
               {introductionMedium.map((e)=> {
                if(e===placeIntroducedIn)
                return <option value={e} label={e} key={e} selected/>
                else return <option value={e} label={e} key={e} />
              })}
              </select>
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col form-check col-md-3">
            <label>Rendered Services</label>
          </div>
          <div className={`form-col col-md-3`}>
            <textarea id='servicesRendered' className="form-control" placeholder={"1.\n2.\n3.\n4."} onChange={inputHandler}/>
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col form-check col-md-3">
            <label>Preferred Services</label>
          </div>
          <div className={`form-col col-md-3`}>
            <textarea className="form-control" placeholder={"1.\n2.\n3.\n4."} />
          </div>
        </div>
        
      </div>
    </>
  );
};
export default DevotionalInfoForm;
