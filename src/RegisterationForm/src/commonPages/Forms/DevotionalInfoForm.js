import { facilitators } from "../../utilities/OptionalEntries";
import { useSelector,useDispatch } from "react-redux";
import { useState,useEffect } from "react";
const DevotionalInfoForm = () => {
  const dispatch=useDispatch();
  const { centerConnectedTo,isValidCenterConnectedTo} = useSelector(
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
    }
    
    else if(value.match(name) !==null) {
      document.getElementById(id+'Error').innerText='';
    dispatch({ type: id, data: value,valid:true });
    enableSaveAndProceed();
    }
    else {
      document.getElementById(id+'Error').innerText='invalid input';
      dispatch({ type: id, data: value,valid:false });
      enableSaveAndProceed(false);
    }

    
  };

  const enableSaveAndProceed=()=>{
    if(isValidCenterConnectedTo){
      dispatch({ type: 'submitDisable', data: "",valid:false });
    }
    else dispatch({ type: 'submitDisable', data: "",valid:true });
  }
  const [center,setCenter]=useState(true);
  const [counselor,setCounselor]=useState(true);
  const centerHandler=(e)=>{
  
  let a=document.getElementsByClassName('temple');
  for (let index = 0; index < a.length; index++) {
    if(a[index].value!==e.target.value){
      a[index].checked=false;
    }
  }
  }
  const counselorHandler=(e)=>{
    document.getElementById('counselor').value=e.target.value;
    let a=document.getElementsByName('selectCounselor');
    for (let index = 0; index < a.length; index++) {
      
      if(!a[index].value==e.target.value){
        a[index].checked=false;
      }
    }
    }
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
              <input type="radio" className="form-check-input temple"  id='centerConnectedTo'value='ISKCON Haldia' onClickCapture={(e)=>{centerHandler(e),inputHandler(e),setCenter(true)}}/>
              ISKCON HALDIA
            </label>
          </div>
          <div className={`form-col col-md-2`}>
            <label className="form-check-label">
              <input type="radio" className="form-check-input temple"  value='others' onClick={centerHandler} onClickCapture={()=>setCenter(false)}/>
              OTHERS
            </label>
          </div>
          <div className={`form-col col-md-3`}>
            <input type="text" id='connectedTemple' className="form-control" name="^[a-zA-Z][a-zA-Z .,'-]*$" hidden={center} value={centerConnectedTo}  onChange={inputHandler} onBlur={enableSaveAndProceed}/>
            <p id='centerConnectedToError' style={{color:'red',fontSize:'10px'}}/>
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col form-check col-md-3">
            <label>Facilitator<a style={{color:'red'}}>*</a></label>
          </div>
          <div className={`form-col col-md-3`}>
            <select type="select" id='facilitator' className="form-select"  onBlur={inputHandler}>
              {facilitators.map((e) => (
                <option value={e} label={e} />
              ))}
            </select>
            <div className={`form-col col-md-3`}>
            
              <input type="text" name='selectCounselor' className="form-check-input" value='HG Kumar Lila Das'onClick={counselorHandler} onClickCapture={()=>setCounselor(true)}/>
              
          </div>
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col form-check col-md-3">
            <label>Spiritual Councelor<a style={{color:'red'}}>*</a></label>
          </div>
          <div className={`form-col col-md-3`}>
            <label className="form-check-label">
              <input type="radio" name='selectCounselor' className="form-check-input" value='HG Kumar Lila Das'onClick={counselorHandler} onClickCapture={()=>setCounselor(true)}/>
              HG Kumar Lila Das
            </label>
          </div>
          <div className={`form-col col-md-2`}>
            <label className="form-check-label">
              <input type="radio" name='selectCounselor' className="form-check-input" value=''onClick={counselorHandler} onClickCapture={()=>setCounselor(false)}/>
              OTHERS
            </label>
          </div>
          <div className={`form-col col-md-3`}>
            <input type="text" id='counselor'className="form-control" hidden={counselor} onBlur={inputHandler}/>
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col form-check col-md-3">
            <label>Spiritual Master<a style={{color:'red'}}>*</a></label>
          </div>
          <div className={`form-col col-md-5`}>
            <input id='spiritualMaster' type="text" name="^[a-zA-Z][a-zA-Z .,'-]*$" className="form-control" onBlur={inputHandler}/>
            <p id='spiritualMasterError' style={{color:'red',fontSize:'10px'}}/>
          </div>
          
        </div>
      </div>
    </>
  );
};
export default DevotionalInfoForm;
