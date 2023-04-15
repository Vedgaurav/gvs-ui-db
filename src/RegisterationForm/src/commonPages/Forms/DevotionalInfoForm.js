import { facilitators } from "../../utilities/OptionalEntries";
import { useSelector,useDispatch } from "react-redux";
import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState,useEffect } from "react";
const DevotionalInfoForm = () => {
  const dispatch=useDispatch();
  const { centerConnectedTo,spiritualMaster,chantingRounds,yearChantingSince,yearChanting16Rounds,
    introducedBy,yearOfIntroduction,placeIntroducedIn,previousCounselor,
    preferredServices, servicesRendered,facilitator,counselor,validations} = useSelector(
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
  const [center,setCenter]=useState(true);
  const [yourCounselor,setYourCounselor]=useState(true);
  const centerHandler=(e)=>{
  
  let a=document.getElementsByClassName('temple');
  for (let index = 0; index < a.length; index++) {
    if(a[index].value!==e.target.value){
      a[index].checked=false;
    }
  }
  }
  const counselorHandler=(e)=>{
    let a=document.getElementsByClassName('selectCounselor');
    for (let index = 0; index < a.length; index++) {
      
      if(a[index].value!==e.target.value){
        a[index].checked=false;
      }
    }
    }
    const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div className="container">
        <h2> Devotional Information</h2>
        <div className="form-group row" >
          <div className="form-col form-check col-md-3">
            <label>Connected Temple<a style={{color:'red'}}>*</a></label>
          </div>
          <div className={`form-col col-md-3`}>
            <label className="form-check-label">
              <input type="radio" className="form-check-input temple"  id='connectedTemple'value='ISKCON Haldia' onClickCapture={(e)=>{centerHandler(e),inputHandler(e),setCenter(true)}}/>
              ISKCON HALDIA
            </label>
          </div>
          <div className={`form-col col-md-2`}>
            <label className="form-check-label">
              <input type="radio" className="form-check-input temple" value='others' onClick={centerHandler} onClickCapture={()=>setCenter(false)}/>
              OTHERS
            </label>
          </div>
          <div className={`form-col col-md-3`}>
            <input type="text" id='connectedTemple' className="form-control" name="^[a-zA-Z][a-zA-Z .,'-]*$" hidden={center} value={centerConnectedTo}  onChange={inputHandler} onBlur={enableSaveAndProceed}/>
            <p id='centerConnectedToError' style={{color:'red',fontSize:'10px'}}/>
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col col-md-3">
            <label>Facilitator<a style={{color:'red'}}>*</a></label>
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
          <div className="form-col form-check col-md-3">
            <label>Spiritual Councelor<a style={{color:'red'}}>*</a></label>
          </div>
          <div className={`form-col col-md-3`}>
            <label className="form-check-label">
              <input type="radio"  id='counselor'className="form-check-input selectCounselor" value='HG Kumar Lila Das'onClick={(e)=>{counselorHandler(e),inputHandler(e)}} onClickCapture={()=>setYourCounselor(true)}/>
              HG Kumar Lila Das
            </label>
          </div>
          <div className={`form-col col-md-2`}>
            <label className="form-check-label">
              <input type="radio"  className="form-check-input selectcounselor" value='' onClick={counselorHandler} onClickCapture={()=>setYourCounselor(false)}/>
              OTHERS
            </label>
          </div>
          <div className={`form-col col-md-3`}>
            <input type="text" id='counselor'className="form-control" value={counselor} hidden={yourCounselor} onChange={inputHandler}/>
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col form-check col-md-3">
            <label>Spiritual Master<a style={{color:'red'}}>*</a></label>
          </div>
          <div className={`form-col col-md-5`}>
            <input id='spiritualMaster' type="text" name="^[a-zA-Z][a-zA-Z .,'-]*$" value={spiritualMaster}className="form-control" onChange={inputHandler}/>
            <p id='spiritualMasterError' style={{color:'red',fontSize:'10px'}}/>
          </div>
          
        </div>
        <div className="form-group row">
          <div className="form-col col-md-3">
            <label>No. Of Rounds Chanting<a style={{color:'red'}}>*</a></label>
          </div>
          <div className={`form-col col-md-3`}>
            <input type="text" id='chantingRounds' value={chantingRounds}className="form-control" onChange={inputHandler}/>
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
            <input type="text" id='introducedBy' value={introducedBy}className="form-control" onChange={inputHandler}/>
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
      </div>
    </>
  );
};
export default DevotionalInfoForm;
