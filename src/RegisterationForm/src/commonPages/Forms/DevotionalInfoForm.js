import { facilitators } from "../../utilities/OptionalEntries";
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
const DevotionalInfoForm = () => {
  const dispatch=useDispatch();
  const inputHandler = (e) => {
    const { value, id } = e.target;
    dispatch({ type: id, data: value });
  };
  const [center,setCenter]=useState(true);
  const [counselor,setCounselor]=useState(true);
  const centerHandler=(e)=>{
  document.getElementById('centerConnectedTo').value=e.target.value;
  let a=document.getElementsByName('temple');
  for (let index = 0; index < a.length; index++) {
    
    if(!a[index].value==e.target.value){
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
              <input type="radio" className="form-check-input" name='temple'value='ISKCON Haldia'onClick={centerHandler} onClickCapture={()=>setCenter(true)}/>
              ISKCON HALDIA
            </label>
          </div>
          <div className={`form-col col-md-2`}>
            <label className="form-check-label">
              <input type="radio" className="form-check-input" name='temple' value='' onClick={centerHandler} onClickCapture={()=>setCenter(false)}/>
              OTHERS
            </label>
          </div>
          <div className={`form-col col-md-3`}>
            <input type="text" id='centerConnectedTo' className="form-control" hidden={center} onChangeCapture={inputHandler}/>
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
            <input id='spiritualMaster' type="text" className="form-control" onBlur={inputHandler}/>
          </div>
        </div>
      </div>
    </>
  );
};
export default DevotionalInfoForm;
