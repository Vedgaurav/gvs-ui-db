import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./FormInput.css";
import { useEffect } from "react";
import { statesWithCountries } from "../../utilities/IndiaStatesAndCities";
import { countries } from "../../utilities/OptionalEntries";
import { StateWithDistCityPincodes } from "../../utilities/StateWithDistCityPincode";
const ContactInfoForm = (props) => {
  const dispatch = useDispatch();
   const { primaryPhone,whatsappPhone,email,isValidPrimaryNo,isValidEmail,currAddCountry,currAddState,currAddCity,currAddZip } = useSelector(
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
   const [sameAsCurrent,setSameAsCurrent]=useState(false);
  const enableSaveAndProceed=()=>{
    if(isValidPrimaryNo&&isValidEmail){
      dispatch({ type: 'submitDisable', data: "",valid:false });
    }
    else dispatch({ type: 'submitDisable', data: "",valid:true });
  }
 const [currAdd,setCurrAdd]=useState('')
  const currentAddressFiller=(e)=>{
    const addline1=document.getElementById('currAddLine1').value;
    const addLine2=document.getElementById('currAddLine2').value;
    const city=document.getElementById('currAddCity').value;
    const State=document.getElementById('currAddState').value;
    const zip=document.getElementById('currAddZip').value;
    const country=document.getElementById('currAddCountry').value;
    setCurrAdd(addline1+','+addLine2+","+city+","+State+","+zip+","+country);
  }
const permanentAddHandler=(e)=>{
       if(e.target.checked===true){
       setSameAsCurrent(true);
      document.getElementById('permanentAddress').value=  document.getElementById('currentAddress').value;
       }
       else {
        setSameAsCurrent(false);
        const addline1=document.getElementById('perAddLine1').value;
        const addLine2=document.getElementById('perAddLine2').value;
        const city=document.getElementById('perAddCity').value;
        const State=document.getElementById('perAddState').value;
        const zip=document.getElementById('perAddZip').value;
        const country=document.getElementById('perAddCountry').value;
        document.getElementById('permanentAddress').value=addline1+','+addLine2+","+city+","+State+","+zip+","+country;
       }
}
  return (
    <>
      <h3>Contact Details</h3>
      
        <div className="container">
          <div className="form-group row">
            <div className="form-col col-md-3">
              <label>Phone No.<a style={{color:'red'}}>*</a></label>
            </div>
            <div className="form-col col-md-4">
              <input
                
                type="tel"
                id="primaryPhone"
                className="form-control"
                placeholder="Always Reachable"
                maxLength='10'
                value={primaryPhone}
                onChange={inputHandler}
                name="^[0-9]{10}$"
                onBlur={enableSaveAndProceed}
              />
              <p id='primaryPhoneError' style={{color:'red',fontSize:'8px'}}></p>
            </div>
            <div className="form-col col-md-4">
              <input
                id="whatsappPhone"
                className="form-control"
                type="number"
                placeholder="Alternate/whatsapp No."
                
                onChange={inputHandler}
                name="^[0-9]{10}$"
              />
              
              <p id='whatsappPhoneError' style={{color:'red',fontSize:'10px'}}></p>
            </div>
            <div className="form-group row">
              <div className="form-col col-md-3">
                <label>Email Address<a style={{color:'red'}}>*</a></label>
              </div>
              <div className="form-col col-md-4">
                <input
                id='email'
                  className="form-control"
                  type="email"
                  name='[a-z0-9]+@[a-z]+\.[a-z]{2,3}'
                  placeholder="xyz@gmail.com"
                  value={email}
                  onChange={inputHandler}
                  onBlur={enableSaveAndProceed}
                />
                <p id='emailError' style={{color:'red',fontSize:'10px'}}></p>
              </div>
            </div>
            <div className="form-group row">
              <div className="form-col col-md-3">
                <label>
                  {" "}
                  Current Address<a style={{color:'red'}}>*</a>
                </label>
              </div>

              <div className="form-col col-md-5">
                <input
                  id='currAddLine1'
                  type="text"
                  className="form-control"
                  
                  placeholder="Address Line 1"
                  onChange={currentAddressFiller}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="form-col col-md-3"></div>
              <div className="form-col col-md-5">
                <input
                  type="text"
                  className="form-control"
                  id='currAddLine2'
                  placeholder="Address Line 2"
                  onChange={currentAddressFiller}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="form-col col-md-3"></div>
              <div className="form-col col-md-3">
              <select className="form-select col-md-3" id="currAddCity"onChange={inputHandler}>
                  {statesWithCountries.filter(e=>e.admin_name==currAddState).map((e)=>
                    <option value={e.city}>{e.city}</option>
                  )}
                </select>
                {/* <input
                  type="text"
                  className="form-control"
                  id="currAddCity"
                  placeholder="city"
                  onChange={currentAddressFiller}
                /> */}
              </div>

              <div className="form-col col-md-3">
                <select className="form-select col-md-3" id="currAddState" onChange={inputHandler} >
                  {statesWithCountries.filter(e=>e.country==currAddCountry).map(e=> e.admin_name).filter((value, index, self) => self.indexOf(value) === index).map((state)=>
                    <option value={state}>{state}</option>
                  )}
                </select>
                {/* <input
                  type="text"
                  className="form-control"
                  id="currAddState"
                  placeholder="State"
                  onChange={currentAddressFiller}
                /> */}
              </div>
            </div>

            <div className="form-group row">
              <div className="form-col col-md-3"></div>
              
              <div className="form-col col-md-3">
                <select className="form-select col-md-3" id="currAddZip" onChange={inputHandler} >
                  {StateWithDistCityPincodes.filter(e=>e.State==currAddState).map(e=> e.Pincode).filter((value, index, self) => self.indexOf(value) === index).map((state)=>
                    <option value={state}>{state}</option>
                  )}
                </select>
                {/* <input
                  type="tel"
                  className="form-control"
                  id="currAddZip"
                  maxLength='6'
                  placeholder="ZipCode"
                  
                  onChange={currentAddressFiller}
                /> */}
              </div>

              <div className="form-col col-md-3">
              <select className="form-select col-md-3" id="currAddCountry" onChange={inputHandler}>
                  {countries.map((e)=>
                    <option value={e}>{e}</option>
                  )}
                </select>
                {/* <input
                  className="form-control"
                  type="text"
                  id="currAddCountry"
                  placeholder="Country"
                  onChange={currentAddressFiller}
                /> */}
                <input type="hidden" id="currentAddress" value={currAdd} name='[a-z0-9]+\,[a-z]+\,[a-z]+\,[a-z]+\,[a-z]{6}+\,[a-z]' onChange={inputHandler}/>
                <p id='currentAddressError' style={{color:'red',fontSize:'10px'}}></p>
              </div>
            </div>
            <div className="form-group row">
              <div className="form-col col-md-3">
                <label>
                  
                  Permanent Address<a style={{ color: "red" }}>*</a>
                </label>
              </div>

              <div className="form-col col-md-3">
              <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"  onClick={permanentAddHandler} />
  <label className="form-check-label" htmlFor="flexCheckChecked">
    Same as current
  </label>
  <input type='hidden' id='permanentAddress' onChange={inputHandler}/>
</div>
</div>
</div>
<div className="form-group row" hidden={sameAsCurrent}>
<div className="form-col col-md-3"/>
<div className="form-col col-md-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address Line 1"
                  id="perAddLine1"
                  onChange={permanentAddHandler}
                />
              </div>
            </div>
            <div className="form-group row" hidden={sameAsCurrent}>
              <div className="form-col col-md-3"></div>
              <div className="form-col col-md-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address Line 2"
                  id="perAddLine2"
                  onChangeCapture={permanentAddHandler}
                />
              </div>
            </div>
            <div className="form-group row" hidden={sameAsCurrent}>
              <div className="form-col col-md-3"></div>
              <div className="form-col col-md-3">
                <input
                  type="text"
                  className="form-control"
                  id="perAddCity"
                  placeholder="city"
                  onChange={permanentAddHandler}
                />
              </div>

              <div className="form-col col-md-3" hidden={sameAsCurrent}>
                <input
                  type="text"
                  className="form-control"
                  id="perAddState"
                  placeholder="State"
                  onChange={permanentAddHandler}
                />
              </div>
            </div>
            <div className="form-group row" hidden={sameAsCurrent}>
              <div className="form-col col-md-3"></div>
              <div className="form-col col-md-3">
                <input
                  type="tel"
                  className="form-control"
                  id="perAddZip"
                  maxLength='6'
                  placeholder="ZipCode"
                  onChange={permanentAddHandler}
                />
              </div>

              <div className="form-col col-md-3" hidden={sameAsCurrent}>
                <input
                  className="form-control"
                  type="text"
                  id="perAddCountry"
                  placeholder="Country"
                  onChange={permanentAddHandler}
                />
                
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default ContactInfoForm;
