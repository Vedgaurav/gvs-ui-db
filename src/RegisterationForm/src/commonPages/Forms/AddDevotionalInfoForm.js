import { useState,useEffect } from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector,useDispatch } from "react-redux";

const AddDevotionalInfoForm = () => {
  const dispatch = useDispatch();
  const { chantingRounds,yearChantingSince,yearChanting16Rounds,introducedBy,yearOfIntroduction,placeIntroducedIn,previousCounselor,
    preferredServices, servicesRendered,remarks} = useSelector(
    (state) => state
  );
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
   if(true){
     dispatch({ type: 'submitDisable', data: "",valid:false });
   }
   else dispatch({ type: 'submitDisable', data: "",valid:true });
 }

  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div className="container">
        <h2> Devotional Detail</h2>
        <div className="form-group row">
          <div className="form-col col-md-3">
            <label>No. Of Rounds Chanting<a style={{color:'red'}}>*</a></label>
          </div>
          <div className={`form-col col-md-3`}>
            <input type="text" id='chantingRounds'className="form-control" onChange={inputHandler}/>
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col col-md-3">
            <label>Chanting Since<a style={{color:'red'}}>*</a></label>
          </div>
          <div className={`form-col col-md-3`}>
            <input type="month" id='yearChantingSince' className="form-control" onChange={inputHandler}/>
          </div>
          <div className="form-col col-md-3">
            <label>Chanting 16 Rounds Since</label>
          </div>
          <div className={`form-col col-md-3`}>
            <input
              type="month"
              className="form-control"
              id='yearChanting16Rounds'
              onChange={inputHandler}
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col form-check col-md-3">
            <label>Introduced By<a style={{color:'red'}}>*</a></label>
          </div>
          <div className={`form-col col-md-3`}>
            <input type="text" id='introducedBy'className="form-control" onChange={inputHandler}/>
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col form-check col-md-3">
            <label>Year of Introduction<a style={{color:'red'}}>*</a></label>
          </div>
          <div className={`form-date col-md-3`}>
            <DatePicker
            id="yearChantingSince"
              className="form-control"
              selected={startDate}
              onChange={(date) => {setStartDate(date),inputHandler({target:{id:'yearOfIntroduction',value:date.getFullYear().toString()}})}}
              showYearPicker
              dateFormat="yyyy"
              yearItemNumber={9}
              
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col col-md-3">
            <label>Introduced through<a style={{color:'red'}}>*</a></label>
          </div>
          <div className="form-col col-md-5">
            
              <input type="text" id='placeIntroducedIn' className="form-control col-md-5" />
             <p style={{ fontSize: "10px", color: "green" }}> Temple/online/devotee visit/yatra etc.</p>
            
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col col-md-3">
            <label>Previous Counselor</label>
          </div>
          <div className={`form-col col-md-3`}>
            <input type="text" className="form-control" />
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
            <label>Additional Remarks</label>
          </div>
          <div className={`form-col col-md-3`}>
            <textarea className="form-control" />
          </div>
        </div>
      </div>
    </>
  );
};
export default AddDevotionalInfoForm;
