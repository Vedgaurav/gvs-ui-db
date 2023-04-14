import { useState,useEffect } from "react";

import { useSelector,useDispatch } from "react-redux";

const AddDevotionalInfoForm = () => {
  const dispatch = useDispatch();
  const { chantingRounds,yearChantingSince,yearChanting16Rounds,introducedBy,yearOfIntroduction,placeIntroducedIn,previousCounselor,
    preferredServices, servicesRendered} = useSelector(
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
