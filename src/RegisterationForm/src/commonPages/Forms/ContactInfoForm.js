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
   const { primaryPhone,whatsappPhone,email,validations,currentAddress,permanentAddress } = useSelector(
     (state) => state
   );
   
   const [currAddState,setCurrAddState]=useState([]);
   const [currAddCity,setCurrAddCity]=useState([]);
   const [currAddPincode,setCurrAddPincode]=useState([]);
   const [currAddDistrict,setCurrAddDistrict]=useState([]);
   
   const [perAddState,setPerAddState]=useState([]);
   const [perAddCity,setPerAddCity]=useState([]);
   const [perAddPincode,setPerAddPincode]=useState([]);
   const [perAddDistrict,setPerAddDistrict]=useState([]);
useEffect(()=>{
enableSaveAndProceed();
setCurrAddState(StateWithDistCityPincodes.map(e=> e.State).filter((value, index, self) => self.indexOf(value) === index));
setCurrAddCity(StateWithDistCityPincodes.filter(e=>e.State==currentAddress.state).map(e=>e.City).filter((value, index, self) => self.indexOf(value) === index));
setCurrAddDistrict(StateWithDistCityPincodes.filter(e=>e.City==currentAddress.city).map(e=>e.District).filter((value, index, self) => self.indexOf(value) === index));
setCurrAddPincode(StateWithDistCityPincodes.filter(e=>e.District==currentAddress.district).map(e=> e.Pincode).filter((value, index, self) => self.indexOf(value) === index));

setPerAddState(StateWithDistCityPincodes.map(e=> e.State).filter((value, index, self) => self.indexOf(value) === index));
setPerAddCity(StateWithDistCityPincodes.filter(e=>e.State==permanentAddress.state).map(e=>e.City).filter((value, index, self) => self.indexOf(value) === index));
setPerAddDistrict(StateWithDistCityPincodes.filter(e=>e.City==permanentAddress.city).map(e=>e.District).filter((value, index, self) => self.indexOf(value) === index));
setPerAddPincode(StateWithDistCityPincodes.filter(e=>e.District==permanentAddress.district).map(e=> e.Pincode).filter((value, index, self) => self.indexOf(value) === index));
},[])
// useEffect(()=>{
//   //enableSaveAndProceed();
//   setCurrAddState(StateWithDistCityPincodes.map(e=> e.State).filter((value, index, self) => self.indexOf(value) === index));

//   setCurrAddCity(StateWithDistCityPincodes.filter(e=>e.State==currentAddress.state).map(e=>e.City).filter((value, index, self) => self.indexOf(value) === index));
//   setCurrAddDistrict(StateWithDistCityPincodes.filter(e=>e.City==currentAddress.city).map(e=>e.District).filter((value, index, self) => self.indexOf(value) === index));

//   setCurrAddPincode(StateWithDistCityPincodes.filter(e=>e.District==currentAddress.district).map(e=> e.Pincode).filter((value, index, self) => self.indexOf(value) === index));
//  },[currentAddress.state,currentAddress.city,currentAddress.district])
// useEffect(()=>{
//   //enableSaveAndProceed();
//   setPerAddCity(StateWithDistCityPincodes.filter(e=>e.State==permanentAddress.state).map(e=>e.City).filter((value, index, self) => self.indexOf(value) === index));
//   setPerAddDistrict(StateWithDistCityPincodes.filter(e=>e.City==permanentAddress.city).map(e=>e.District).filter((value, index, self) => self.indexOf(value) === index));
// setPerAddPincode(StateWithDistCityPincodes.filter(e=>e.District==permanentAddress.district).map(e=> e.Pincode).filter((value, index, self) => self.indexOf(value) === index));
// },[permanentAddress.city,permanentAddress.state, permanentAddress.district])
  const inputHandler = (e) => {
    const { value, id,name } = e.target;
    console.log(name,id,value)
    if (name==undefined || name==''){
      dispatch({ type: id, data: value ,valid:true});
      enableSaveAndProceed();
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
    if(validations.isValidPrimaryNo&&validations.isValidCurrentAddress){
      dispatch({ type: 'submitDisable', data: "",valid:false });
    }
    else dispatch({ type: 'submitDisable', data: "",valid:true });
  }
  const addressSelectionHandler=(e)=>{
    const{id,value}=e.target;
    switch (id) {
      case "currentAddressState":
        return   setCurrAddCity(StateWithDistCityPincodes.filter(e=>e.State==value).map(e=>e.City).filter((value, index, self) => self.indexOf(value) === index));
        break;
      case "currentAddressCity":
        return  setCurrAddDistrict(StateWithDistCityPincodes.filter(e=>e.City==value).map(e=>e.District).filter((value, index, self) => self.indexOf(value) === index)),
        setCurrAddPincode(StateWithDistCityPincodes.filter(e=>e.City==value).map(e=> e.Pincode).filter((value, index, self) => self.indexOf(value) === index));

    
      case "permanentAddressState":
        return setPerAddCity(StateWithDistCityPincodes.filter(e=>e.State==value).map(e=>e.City).filter((value, index, self) => self.indexOf(value) === index));
        case "permanentAddressCity":
          return  setPerAddDistrict(StateWithDistCityPincodes.filter(e=>e.City==value).map(e=>e.District).filter((value, index, self) => self.indexOf(value) === index)),
          setPerAddPincode(StateWithDistCityPincodes.filter(e=>e.City==value).map(e=> e.Pincode).filter((value, index, self) => self.indexOf(value) === index));
  
      default:
        break;
    }
  }
const permanentAddHandler=(e)=>{
       if(e.target.checked===true){
       setSameAsCurrent(true);
       }
       else {
        setSameAsCurrent(false);
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
                value={whatsappPhone}
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
                  
                  Current Address<a style={{color:'red'}}>*</a>
                </label>
              </div>

              <div className="form-col col-md-5">
                <input
                  id='currentAddressLine1'
                  type="text"
                  name="^[#.0-9a-zA-Z\s,-]+$"
                  className="form-control"
                  value={currentAddress.line1}
                  placeholder="House No./Care of"
                  onChange={inputHandler}
                />
                <p id='currentAddressLine1Error' style={{color:'red',fontSize:'10px'}}></p>
              </div>
            </div>
            <div className="form-group row">
              <div className="form-col col-md-3"></div>
              <div className="form-col col-md-5">
                <input
                  type="text"
                  className="form-control"
                  id='currentAddressLine2'
                  name="^[#.0-9a-zA-Z\s,-]+$"
                  placeholder="street/village"
                  value={currentAddress.line2}
                  onChange={inputHandler}
                />
                <p id='currentAddressLine2Error' style={{color:'red',fontSize:'10px'}}></p>
              </div>
            </div>
            <div className="form-group row">
              <div className="form-col col-md-3"></div>
              <div className="form-col col-md-3">
                <select className="form-select col-md-3" id="currentAddressState" onChange={(e)=>{inputHandler(e),addressSelectionHandler(e)}} >
                  {currAddState.map((state)=>
                    <option value={state} key={state} label={state}/>
                  )}
                </select>
                <p style={{color:"green",fontSize:"10px"}}>state</p>
              </div>
              <div className="form-col col-md-3">
              <select className="form-select col-md-3" id="currentAddressCity"  onChange={(e)=>{inputHandler(e),addressSelectionHandler(e)}}  >
                  {currAddCity.map((e)=>
                    <option key={e}value={e} label={e}/>
                  )}
                </select>
                <p style={{color:"green",fontSize:"10px"}}>city</p>
              </div>
              <div className="form-col col-md-3">
              <select className="form-select col-md-3" id="currentAddressDistrict" onChange={inputHandler}  >
                  {currAddDistrict.map((e)=>
                    <option key={e}value={e} label={e}/>
                  )}
                </select>
                <p style={{color:"green",fontSize:"10px"}}>District</p>
              </div>
            </div>

            <div className="form-group row">
              <div className="form-col col-md-3"></div>
              
              <div className="form-col col-md-3">
                <select className="form-select col-md-3" id="currentAddressPincode" onChange={inputHandler} >
                  {currAddPincode.map((pincode)=>
                    <option value={pincode} key={pincode}label={pincode}/>
                  )}
                </select>
                <p style={{color:"green",fontSize:"10px"}}>pincode</p>
              </div>

              <div className="form-col col-md-3">
              <select className="form-select col-md-3" id="currentAddressCountry" >
                  
                    <option  value="India" label="India"/>
                  
                </select>
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
</div>
</div>
</div>
<div className="form-group row" hidden={sameAsCurrent}>
<div className="form-col col-md-3"/>
<div className="form-col col-md-5">
                <input
                  id='permanentAddressLine1'
                  name="^[#.0-9a-zA-Z\s,-]+$"
                  type="text"
                  className="form-control"
                  value={permanentAddress.line1}
                  placeholder="House No./care of"
                  onChange={inputHandler}
                />
                <p id='permanentAddressLine1Error' style={{color:'red',fontSize:'10px'}}></p>
              </div>
            </div>
            <div className="form-group row" hidden={sameAsCurrent}>
              <div className="form-col col-md-3"></div>
              <div className="form-col col-md-5">
              <input
                  id='permanentAddressLine2'
                  type="text"
                  name="^[#.0-9a-zA-Z\s,-]+$"
                  className="form-control"
                  value={permanentAddress.line2}
                  placeholder="street/village"
                  onChange={inputHandler}
                />
                <p id='permanentAddressLine2Error' style={{color:'red',fontSize:'10px'}}></p>
              </div>
            </div>
            <div className="form-group row" hidden={sameAsCurrent}>
              <div className="form-col col-md-3"></div>
              <div className="form-col col-md-3" >
              <select className="form-select col-md-3" id="permanentAddressState" onChange={(e)=>{inputHandler(e),addressSelectionHandler(e)}}>
                  {perAddState.map((e)=>
                    <option key={e}value={e} label={e}/>
                  )}
                </select>
                <p style={{color:"green",fontSize:"10px"}}>state</p>
              </div>
              <div className="form-col col-md-3">
              <select className="form-select col-md-3" id="permanentAddressCity" onChange={(e)=>{inputHandler(e),addressSelectionHandler(e)}}>
                  {perAddCity.map((e)=>
                    <option key={e}value={e} label={e}/>
                  )}
                </select>
                <p style={{color:"green",fontSize:"10px"}}>city</p>
              </div>
              <div className="form-col col-md-3">
              <select className="form-select col-md-3" id="permanentAddressDistrict" onChange={inputHandler} >
                  {perAddDistrict.map((e)=>
                    <option key={e}value={e} label={e}/>
                  )}
                </select>
                <p style={{color:"green",fontSize:"10px"}}>District</p>
              </div>
            </div>
            <div className="form-group row" hidden={sameAsCurrent}>
              <div className="form-col col-md-3"></div>
              <div className="form-col col-md-3">
              <select className="form-select col-md-3" id="permanentAddressPincode" onChange={inputHandler}>
                  {perAddPincode.map((e)=>
                    <option key={e}value={e} label={e}/>
                  )}
                </select>
                <p style={{color:"green",fontSize:"10px"}}>pincode</p>
              </div>
              <div className="form-col col-md-3" hidden={sameAsCurrent}>
              <select className="form-select col-md-3" id="permanentAddressCountry" onChange={inputHandler}>   
                    <option value="India" label="India"/>   
                </select>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default ContactInfoForm;
