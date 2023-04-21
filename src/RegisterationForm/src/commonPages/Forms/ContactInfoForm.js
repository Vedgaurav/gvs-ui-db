import { useSelector, useDispatch } from "react-redux";
import { useState, useRef,useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./FormInput.css";
import { useEffect } from "react";
import { addressData } from "../../utilities/statesAndPincodes/GovtAuthorisedStatesandPincodes";
import {
  validatePhoneNo,
  validateEmail,
} from "../../RegexExpsValidation/RegexExps";
import { PleaseWaitContext } from "../../../../context/PleaseWaitContextProvider.js";
const ContactInfoForm = (props) => {
  const dispatch = useDispatch();
  const {
    primaryPhone,
    whatsAppPhone,
    email,
    validations,
    currentAddress,
    permanentAddress,
    connectedTo,
  } = useSelector((state) => state);
  const { gWaitOn, setGWaitOn } = useContext(PleaseWaitContext);
  const [currAddState, setCurrAddState] = useState([]);
  const [currAddCity, setCurrAddCity] = useState([]);
  const [currAddPincode, setCurrAddPincode] = useState([]);
  const [currAddDistrict, setCurrAddDistrict] = useState([]);

  const [perAddState, setPerAddState] = useState([]);
  const [perAddCity, setPerAddCity] = useState([]);
  const [perAddPincode, setPerAddPincode] = useState([]);
  const [perAddDistrict, setPerAddDistrict] = useState([]);
  const curraddLine1 = useRef();
  const curraddLine2 = useRef();
  const curraddState = useRef();
  const curraddCity = useRef();
  const curraddDistrict = useRef();
  const curraddPincode = useRef();
  useEffect(() => {
    enableSaveAndProceed();
    
    
    
  }, []);

  useEffect(() => {
    enableSaveAndProceed();
  }, [validations.isValidCurrentAddress, validations.isValidPrimaryNo]);

  const inputHandler = (e) => {
    const { value, id, name } = e.target;
    //console.log(name,id,value)
    if (name == undefined || name == "") {
      dispatch({ type: id, data: value, valid: true });
    } else if (value.match(name) !== null) {
      //console.log("matched with regex");
      document.getElementById(id + "Error").innerText = "";
      dispatch({ type: id, data: value, valid: true });
    } else {
      document.getElementById(id + "Error").innerText = "invalid input";
      dispatch({ type: id, data: value, valid: false });
    }
    enableSaveAndProceed();
  };
  const [sameAsCurrent, setSameAsCurrent] = useState(false);
  const enableSaveAndProceed = () => {
    if (validations.isValidPrimaryNo && validations.isValidCurrentAddress) {
      dispatch({ type: "submitDisable", data: "", valid: false });
    } else dispatch({ type: "submitDisable", data: "", valid: true });
  };
  const addressSelectionHandler = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "currentAddressState":
        setCurrAddState(
          addressData
            .map((e) => e.statename)
            .filter((value, index, self) => self.indexOf(value) === index)
        );
        
        break;
      case "currentAddressCity": {
        setCurrAddCity(
          addressData
            .filter((e) => e.statename == value)
            .map((e) => e.Districtname)
            .filter((value, index, self) => self.indexOf(value) === index)
        );
        setCurrAddDistrict(
          addressData
            .filter((e) => e.Districtname == value)
            .map((e) => e.Taluk)
            .filter((value, index, self) => self.indexOf(value) === index)
        );
        setCurrAddPincode(
          addressData
            .filter((e) => e.Districtname == value)
            .map((e) => e.pincode)
            .filter((value, index, self) => self.indexOf(value) === index)
        );
        break;
      }
      case "permanentAddressState":
        setPerAddState(
          addressData
            .map((e) => e.statename)
            .filter((value, index, self) => self.indexOf(value) === index)
        );
        
        break;
      case "permanentAddressCity": 
        setPerAddCity(
          addressData
            .filter((e) => e.statename == value)
            .map((e) => e.Districtname)
            .filter((value, index, self) => self.indexOf(value) === index)
        );
        break;
        case "permanentAddressDistrict":
        setPerAddDistrict(
          addressData
            .filter((e) => e.Districtname == value)
            .map((e) => e.Taluk)
            .filter((value, index, self) => self.indexOf(value) === index)
        );
        setPerAddPincode(
          addressData
            .filter((e) => e.Districtname == value)
            .map((e) => e.pincode)
            .filter((value, index, self) => self.indexOf(value) === index)
        );
        break;
      default:
        break;
    }
  };
  const permanentAddHandler = (e) => {
    if (e.target.checked === true) {
      dispatch({ type: "isSameAddress", data: "", valid: true });
      dispatch({
        type: "permanentAddressLine1",
        data: curraddLine1.current.value,
        valid: true,
      });
      dispatch({
        type: "permanentAddressLine2",
        data: curraddLine2.current.value,
        valid: true,
      });
      dispatch({
        type: "permanentAddressState",
        data: curraddState.current.value,
        valid: true,
      });
      dispatch({
        type: "permanentAddressCity",
        data: curraddCity.current.value,
        valid: true,
      });
      dispatch({
        type: "permanentAddressDistrict",
        data: curraddDistrict.current.value,
        valid: true,
      });
      dispatch({
        type: "permanentAddressPincode",
        data: curraddPincode.current.value,
        valid: true,
      });
    } else {
      dispatch({ type: "isSameAddress", data: "", valid: false });
    }
  };

  return (
    <>
      <h3>Contact Details</h3>

      <div className="container">
        <div className="form-group row">
          <div className="form-col col-md-3">
            <label>
              Phone No.<a style={{ color: "red" }}>*</a>
            </label>
          </div>
          <div className="form-col col-md-4">
            <input
              type="number"
              id="primaryPhone"
              className="form-control"
              placeholder="Always Reachable"
              maxLength="10"
              value={primaryPhone}
              onInput={inputHandler}
              name={validatePhoneNo}
              onBlur={enableSaveAndProceed}
            />
            <p
              id="primaryPhoneError"
              style={{ color: "red", fontSize: "10px" }}
            ></p>
          </div>
          <div className="form-col col-md-4">
            <input
              id="whatsAppPhone"
              className="form-control"
              type="number"
              placeholder="Alternate/whatsapp No."
              value={whatsAppPhone}
              onChange={inputHandler}
              name={validatePhoneNo}
            />
            <p
              id="whatsAppPhoneError"
              style={{ color: "red", fontSize: "10px" }}
            ></p>
          </div>
          <div className="form-group row">
            <div className="form-col col-md-3">
              <label>Email Address</label>
            </div>
            <div className="form-col col-md-4">
              <input
                id="email"
                className="form-control"
                type="email"
                name={validateEmail}
                placeholder="xyz@gmail.com"
                value={email}
                disabled={connectedTo == "guru" ? true : false}
                onChange={inputHandler}
                onBlur={enableSaveAndProceed}
              />
              <p id="emailError" style={{ color: "red", fontSize: "10px" }}></p>
            </div>
          </div>
          <div className="form-group row">
            <div className="form-col col-md-3">
              <label>
                Current Address<a style={{ color: "red" }}>*</a>
              </label>
            </div>

            <div className="form-col col-md-5">
              <input
                id="currentAddressLine1"
                type="text"
                ref={curraddLine1}
                name="^[#.0-9a-zA-Z\s,-]+$"
                className="form-control"
                value={currentAddress.line1}
                placeholder="House No./Care of"
                onChange={inputHandler}
              />
              <p
                id="currentAddressLine1Error"
                style={{ color: "red", fontSize: "10px" }}
              ></p>
            </div>
          </div>
          <div className="form-group row">
            <div className="form-col col-md-3"></div>
            <div className="form-col col-md-5">
              <input
                type="text"
                ref={curraddLine2}
                className="form-control"
                id="currentAddressLine2"
                name="^[#.0-9a-zA-Z\s,-]+$"
                placeholder="street/village"
                value={currentAddress.line2}
                onChange={inputHandler}
              />
              <p
                id="currentAddressLine2Error"
                style={{ color: "red", fontSize: "10px" }}
              ></p>
            </div>
          </div>
          <div className="form-group row">
            <div className="form-col col-md-3"></div>
            <div className="form-col col-md-3">
              <select
                className="form-select col-md-3"
                ref={curraddState}
                value={currentAddress.state}
                id="currentAddressState"
                onChange={(e) => {
                  inputHandler(e), addressSelectionHandler(e);
                }}
                onClick={(e) => {
                  inputHandler(e), addressSelectionHandler(e);
                }}
              >
                {currAddState!==0? currAddState?.map((state) => (
                  <option value={state} key={state} label={state} />
                )):<option
                value={currentAddress.state}
                label={currentAddress.state}
              />}
              </select>
              <p style={{ color: "green", fontSize: "10px" }}>state</p>
            </div>
            <div className="form-col col-md-3">
              <select
                className="form-select col-md-3"
                ref={curraddCity}
                id="currentAddressCity"
                onChange={(e) => {
                  inputHandler(e), addressSelectionHandler(e);
                }}
                onClick={(e) => {
                  inputHandler(e), addressSelectionHandler(e);
                }}
              >
                {currAddCity.length !== 0 ? (
                  <>
                    {currAddCity.map((e) => (
                      <option key={e} value={e} label={e} />
                    ))}
                  </>
                ) : (
                  <option
                    value={currentAddress.city}
                    label={currentAddress.city}
                  />
                )}
              </select>
              <p style={{ color: "green", fontSize: "10px" }}>District</p>
            </div>
            <div className="form-col col-md-3">
              <select
                className="form-select col-md-3"
                id="currentAddressDistrict"
                ref={curraddDistrict}
                onChange={(e) => {
                  inputHandler(e), addressSelectionHandler(e);
                }}
                onClick={(e) => {
                  inputHandler(e), addressSelectionHandler(e);
                }}
              >
                {currAddDistrict.length !== 0 ? (
                  currAddDistrict.map((e) => (
                    <option key={e} value={e} label={e} />
                  ))
                ) : (
                  <option
                    value={currentAddress.district}
                    label={currentAddress.district}
                  />
                )}
              </select>
              <p style={{ color: "green", fontSize: "10px" }}>City/village</p>
            </div>
          </div>

          <div className="form-group row">
            <div className="form-col col-md-3"></div>

            <div className="form-col col-md-3">
              <select
                className="form-select col-md-3"
                id="currentAddressPincode"
                ref={curraddPincode}
                onChange={inputHandler}
                onClick={inputHandler}
              >
                {currAddPincode.length !== 0 ? (
                  currAddPincode.map((pincode) => (
                    <option value={pincode} key={pincode} label={pincode} />
                  ))
                ) : (
                  <option
                    value={currentAddress.pinCode}
                    label={currentAddress.pinCode}
                  />
                )}
              </select>
              <p style={{ color: "green", fontSize: "10px" }}>Pincode</p>
            </div>

            <div className="form-col col-md-3">
              <select
                className="form-select col-md-3"
                id="currentAddressCountry"
              >
                <option value="India" label="India" />
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
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  defaultChecked={validations.isSameAddress}
                  onClick={permanentAddHandler}
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Same as current
                </label>
              </div>
            </div>
          </div>
          {validations.isSameAddress ? (
            ""
          ) : (
            <>
              <div className="form-group row" hidden={sameAsCurrent}>
                <div className="form-col col-md-3" />
                <div className="form-col col-md-5">
                  <input
                    id="permanentAddressLine1"
                    name="^[#.0-9a-zA-Z\s,-]+$"
                    type="text"
                    className="form-control"
                    value={permanentAddress.line1}
                    placeholder="House No./care of"
                    onChange={inputHandler}
                  />
                  <p
                    id="permanentAddressLine1Error"
                    style={{ color: "red", fontSize: "10px" }}
                  ></p>
                </div>
              </div>
              <div className="form-group row" hidden={sameAsCurrent}>
                <div className="form-col col-md-3"></div>
                <div className="form-col col-md-5">
                  <input
                    id="permanentAddressLine2"
                    type="text"
                    name="^[#.0-9a-zA-Z\s,-]+$"
                    className="form-control"
                    value={permanentAddress.line2}
                    placeholder="street/village"
                    onChange={inputHandler}
                  />
                  <p
                    id="permanentAddressLine2Error"
                    style={{ color: "red", fontSize: "10px" }}
                  ></p>
                </div>
              </div>
              <div className="form-group row" hidden={sameAsCurrent}>
                <div className="form-col col-md-3"></div>
                <div className="form-col col-md-3">
                  <select
                    className="form-select col-md-3"
                    id="permanentAddressState"
                    value={permanentAddress.state}
                    onChange={(e) => {
                      inputHandler(e), addressSelectionHandler(e);
                    }}
                    onClick={(e) => {
                      inputHandler(e), addressSelectionHandler(e);
                    }}
                  >
                    {perAddState.length!==0 ? perAddState?.map((e) => (
                      <option key={e} value={e} label={e} />
                    )):<option value={permanentAddress.state} label={permanentAddress.state} />}
                  </select>
                  <p style={{ color: "green", fontSize: "10px" }}>state</p>
                </div>
                <div className="form-col col-md-3">
                  <select
                    className="form-select col-md-3"
                    id="permanentAddressCity"
                    onChange={(e) => {
                      inputHandler(e), addressSelectionHandler(e);
                    }}
                    onClick={(e) => {
                      inputHandler(e), addressSelectionHandler(e);
                    }}
                  >
                    {perAddCity.length !== 0 ? (
                      perAddCity?.map((e) => (
                        <option key={e} value={e} label={e} />
                      ))
                    ) : (
                      <option
                        value={permanentAddress.city}
                        label={permanentAddress.city}
                      />
                    )}
                  </select>
                  <p style={{ color: "green", fontSize: "10px" }}>District</p>
                </div>
                <div className="form-col col-md-3">
                  <select
                    className="form-select col-md-3"
                    id="permanentAddressDistrict"
                    onChange={(e) => {
                      inputHandler(e), addressSelectionHandler(e);
                    }}
                    onClick={(e) => {
                      inputHandler(e), addressSelectionHandler(e);
                    }}
                  >
                    {perAddDistrict.length !== 0 ? (
                      perAddDistrict.map((e) => (
                        <option key={e} value={e} label={e} />
                      ))
                    ) : (
                      <option
                        value={permanentAddress.district}
                        label={permanentAddress.district}
                      />
                    )}
                  </select>
                  <p style={{ color: "green", fontSize: "10px" }}>
                    city/Village
                  </p>
                </div>
              </div>
              <div className="form-group row" hidden={sameAsCurrent}>
                <div className="form-col col-md-3"></div>
                <div className="form-col col-md-3">
                  <select
                    className="form-select col-md-3"
                    id="permanentAddressPincode"
                    onChange={(e) => {
                      inputHandler(e);
                    }}
                    onClick={(e) => {
                      inputHandler(e);
                    }}
                  >
                    {perAddPincode.length !== 0 ? (
                      perAddPincode.map((e) => (
                        <option key={e} value={e} label={e} />
                      ))
                    ) : (
                      <option
                        value={permanentAddress.pinCode}
                        label={permanentAddress.pinCode}
                      />
                    )}
                  </select>
                  <p style={{ color: "green", fontSize: "10px" }}>Pincode</p>
                </div>
                <div className="form-col col-md-3" hidden={sameAsCurrent}>
                  <select
                    className="form-select col-md-3"
                    id="permanentAddressCountry"
                  >
                    <option value="INDIA" label="INDIA" />
                  </select>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactInfoForm;
