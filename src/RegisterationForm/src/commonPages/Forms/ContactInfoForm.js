import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./FormInput.css";
import { validatePhoneNo,validateEmail } from "../../RegexExpsValidation/RegexExps";

const ContactInfoForm = (props) => {
  const dispatch = useDispatch();
   const { primaryPhone,whatsappPhone,email,isValidPrimaryNo,isValidEmail } = useSelector(
     (state) => state
   );

  const inputHandler = (e) => {
    const { value, id,name } = e.target;
    if (name==undefined){
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

  const currentAddressFiller=(e)=>{
    const addline1=document.getElementById('currAddLine1').value;
    const addLine2=document.getElementById('currAddLine2').value;
    const city=document.getElementById('currAddCity').value;
    const State=document.getElementById('currAddState').value;
    const zip=document.getElementById('currAddZip').value;
    const country=document.getElementById('currAddCountry').value;
    document.getElementById('currentAddress').value=addline1+','+addLine2+","+city+","+State+","+zip+","+country;
  }
const permanentAddHandler=(e)=>{
       if(e.target.checked===true){
       setSameAsCurrent(true);
      document.getElementById('permanentAddress').value=  document.getElementById('currentAddress').value;
       }
       else {
        setSameAsCurrent(false);
        document.getElementById('permanentAddress').value=  "";
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
                
                type="number"
                id="primaryPhone"
                className="form-control"
                placeholder="Always Reachable"
                maxLength={10}
                value={primaryPhone}
                onChange={inputHandler}
                name="^[0-9]{10}$"
              />
              <p id='primaryPhoneError' style={{color:'red',fontSize:'8px'}}></p>
            </div>
            <div className="form-col col-md-4">
              <input
                id="whatsappPhone"
                className="form-control"
                type="number"
                placeholder="Alternate/whatsapp No."
                maxLength={10}
                onChange={inputHandler}
                name="^\\d{10}$"
              />
              <p id='whatsappError' style={{color:'red',fontSize:'8px'}}></p>
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
                  onChange={inputHandler}
                  
                />
                <p id='emailError' style={{color:'red',fontSize:'8px'}}></p>
              </div>
            </div>
            <div className="form-group row">
              <div className="form-col col-md-3">
                <label>
                  {" "}
                  Current Address<a style={{color:'red'}}>*</a>
                </label>
              </div>

              <div className="form-col col-md-3">
                <input
                  id='currAddLine1'
                  type="text"
                  className="form-control"
                  style={{ width: "400px" }}
                  placeholder="Address Line 1"
                  onChange={currentAddressFiller}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="form-col col-md-3"></div>
              <div className="form-col col-md-3">
                <input
                  type="text"
                  className="form-control"
                  style={{ width: "400px" }}
                  id='currAddLine2'
                  placeholder="Address Line 2"
                  onChange={currentAddressFiller}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="form-col col-md-3"></div>
              <div className="form-col col-md-3">
                <input
                  type="text"
                  className="form-control"
                  id="currAddCity"
                  placeholder="city"
                  onChange={currentAddressFiller}
                />
              </div>

              <div className="form-col col-md-3">
                <input
                  type="text"
                  className="form-control"
                  id="currAddState"
                  placeholder="State"
                  onChange={currentAddressFiller}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="form-col col-md-3"></div>
              <div className="form-col col-md-3">
                <input
                  type="number"
                  className="form-control"
                  id="currAddZip"
                  placeholder="ZipCode"
                  
                  onChange={currentAddressFiller}
                />
              </div>

              <div className="form-col col-md-3">
                <input
                  className="form-control"
                  type="text"
                  id="currAddCountry"
                  placeholder="Country"
                  onChange={currentAddressFiller}
                />
                <input type="hidden" id="currentAddress" onChange={inputHandler}/>
                <p id='currentAddressError' style={{color:'red',fontSize:'8px'}}></p>
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
  <input type='hidden' id='permanentAddress'/>
</div>
</div>
</div>
<div className="form-group row" hidden={sameAsCurrent}>
<div className="form-col col-md-3"/>
<div className="form-col col-md-3">
                <input
                  type="text"
                  className="form-control"
                  style={{ width: "400px" }}
                  id="perAddLine1"
                />
              </div>
            </div>
            <div className="form-group row" hidden={sameAsCurrent}>
              <div className="form-col col-md-3"></div>
              <div className="form-col col-md-3">
                <input
                  type="text"
                  className="form-control"
                  style={{ width: "400px" }}
                  id="perAddLine2"
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
                />
              </div>

              <div className="form-col col-md-3" hidden={sameAsCurrent}>
                <input
                  type="text"
                  className="form-control"
                  id="perAddState"
                  placeholder="State"
                />
              </div>
            </div>
            <div className="form-group row" hidden={sameAsCurrent}>
              <div className="form-col col-md-3"></div>
              <div className="form-col col-md-3">
                <input
                  type="text"
                  className="form-control"
                  id="perAddZip"
                  placeholder="ZipCode"
                />
              </div>

              <div className="form-col col-md-3" hidden={sameAsCurrent}>
                <input
                  className="form-control"
                  type="text"
                  id=""
                  placeholder="Country"
                />
                
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default ContactInfoForm;
