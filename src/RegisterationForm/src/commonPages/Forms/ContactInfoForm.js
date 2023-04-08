import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "./FormInput.css";
import { validatePhoneNo,validateEmail } from "../../RegexExpsValidation/RegexExps";

const ContactInfoForm = (props) => {
  const dispatch = useDispatch();
   const { primaryPhone,whatsappPhone,email, } = useSelector(
     (state) => state
   );

  const inputHandler = (e) => {
    const { value, id,name } = e.target;
    if (name==undefined){
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
    if(isValidCaste && isValidFname&& isValidGotra){
      dispatch({ type: 'submitDisable', data: "",valid:false });
    }
    else dispatch({ type: 'submitDisable', data: "",valid:true });
  }

const permanentAddHandler=()=>{
       
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
                name="^\\d{10}$"
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
                  onChange={inputHandler}
                />
                <p id='currentError' style={{color:'red',fontSize:'8px'}}></p>
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
                  onBlur={inputHandler}
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
                  onChange={inputHandler}
                />
              </div>

              <div className="form-col col-md-3">
                <input
                  type="text"
                  className="form-control"
                  id="currAddState"
                  placeholder="State"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="form-col col-md-3"></div>
              <div className="form-col col-md-3">
                <input
                  type="text"
                  className="form-control"
                  id="currAddZip"
                  placeholder="ZipCode"
                />
              </div>

              <div className="form-col col-md-3">
                <input
                  className="form-control"
                  type="text"
                  id="currAddCountry"
                  placeholder="Country"
                />
                <input type="hidden" id="currentAddress" />
                <p id='currentAddress' style={{color:'red',fontSize:'8px'}}></p>
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
<div className="form-group row">
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
            <div className="form-group row">
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
            <div className="form-group row">
              <div className="form-col col-md-3"></div>
              <div className="form-col col-md-3">
                <input
                  type="text"
                  className="form-control"
                  id="perAddCity"
                  placeholder="city"
                />
              </div>

              <div className="form-col col-md-3">
                <input
                  type="text"
                  className="form-control"
                  id="perAddState"
                  placeholder="State"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="form-col col-md-3"></div>
              <div className="form-col col-md-3">
                <input
                  type="text"
                  className="form-control"
                  id="perAddZip"
                  placeholder="ZipCode"
                />
              </div>

              <div className="form-col col-md-3">
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
