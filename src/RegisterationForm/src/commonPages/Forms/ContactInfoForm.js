import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "./FormInput.css";
import { validatePhoneNo,validateEmail } from "../../RegexExpsValidation/RegexExps";

const ContactInfoForm = (props) => {
  const dispatch = useDispatch();
  // const { firstName, middleName, lastName, initiatedName } = useSelector(
  //   (state) => state
  // );

  const inputHandler = (e) => {
    const { value, id } = e.target;
    dispatch({ type: id, data: value });
  };

  const validate=(e)=>{
    const {id,value}=e.target;
    console.log(id);
    switch (id) {
      case 'pno':
        if(validatePhoneNo.test(value)){
            console.log(validatePhoneNo.test(value));
        }
        else console.log(validatePhoneNo.test(value));
        break;
        case 'Altno':
        if(validatePhoneNo.test(value)){
            console.log(validatePhoneNo.test(value));
        }
        else console.log(validatePhoneNo.test(value));
        break;
        case 'email':
        if(validateEmail.test(value)){
            console.log(validateEmail.test(value));
        }
        else console.log(validateEmail.test(value));
        break;
        default:
        break;
    }}
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
                id="pno"
                className="form-control"
                placeholder="Always Reachable"
                maxLength={10}
                onChange={validate}
                onBlur={inputHandler}
              />
            </div>
            <div className="form-col col-md-4">
              <input
                id="Altno"
                className="form-control"
                type="number"
                placeholder="Alternate/whatsapp No."
                maxLength={10}
                onChange={validate}
                onBlur={inputHandler}
              />
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
                  placeholder="xyz@gmail.com"
                  onChange={validate}
                  onBlur={inputHandler}
                />
                
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
                  style={{ width: "400px" }}
                  id='currAddLine2'
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
                  onChange={validate}
                  onBlur={inputHandler}
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
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label className="form-check-label" for="flexCheckChecked">
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
