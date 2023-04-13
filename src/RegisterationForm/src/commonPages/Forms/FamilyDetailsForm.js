import { motherTongue,religion } from "../../utilities/OptionalEntries";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
const FamilyDetails = () => {
  const dispatch = useDispatch();
   const { primaryPhone,whatsappPhone,email,isValidPrimaryNo,isValidEmail } = useSelector(
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
    if(isValidPrimaryNo&&isValidEmail){
      dispatch({ type: 'submitDisable', data: "",valid:false });
    }
    else dispatch({ type: 'submitDisable', data: "",valid:true });
  }

  return (
    <>
      <h2>Family Details</h2>
      <div className="container">
        <div className="form-group row">
          <div className="form-col col-md-3">
            <label>
              Religion<a style={{ color: "red" }}>*</a>
            </label>
          </div>
          <div className="form-col col-md-3">
            <select className="form-select">
              {religion.map((e) => (
                <option value={e} label={e} />
              ))}
            </select>
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col col-md-3">
            <label>
              Father's Name<a style={{ color: "red" }}>*</a>
            </label>
          </div>
          <div className="form-col col-md-3">
            <input
              id="fname"
              type="text"
              className="form-control "
              placeholder="first name"
              value={""}
            />
          </div>
          <div className="form-col col-md-3">
            <input
              id="mname"
              type="text"
              className="form-control "
              placeholder="middle name"
              value={""}
            />
          </div>
          <div className="form-col col-md-3">
            <input
              id="lname"
              type="text"
              className="form-control"
              placeholder="last name"
              value={""}
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col col-md-3">
            <label>
              Mother's Name<a style={{ color: "red" }}>*</a>
            </label>
          </div>
          <div className="form-col col-md-3">
            <input
              id="fname"
              type="text"
              className="form-control "
              placeholder="first name"
              value={""}
            />
          </div>
          <div className="form-col col-md-3">
            <input
              id="mname"
              type="text"
              className="form-control "
              placeholder="middle name"
              value={""}
            />
          </div>
          <div className="form-col col-md-3">
            <input
              id="lname"
              type="text"
              className="form-control"
              placeholder="last name"
              value={""}
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col col-md-3">
            <label>
              Spouse Name<a style={{ color: "red" }}>*</a>
            </label>
          </div>
          <div className="form-col col-md-3">
            <input
              id="fname"
              type="text"
              className="form-control"
              placeholder="first name"
              value={""}
            />
          </div>
          <div className="form-col col-md-3">
            <input
              id="mname"
              type="text"
              className="form-control "
              placeholder="middle name"
              value={""}
            />
          </div>
          <div className="form-col col-md-3">
            <input
              id="lname"
              type="text"
              className="form-control"
              placeholder="last name"
              value={""}
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col col-md-3 ">
            <label>
              {" "}
              Date of Marriage<a style={{ color: "red" }}>*</a>
            </label>
          </div>
          <div className="form-col col-md-3 ">
            <input type="date" className="form-control" onChange={() => {}} />
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col col-md-3">
            <label>
              Mother Tongue<a style={{ color: "red" }}>*</a>
            </label>
          </div>
          <div className="form-col col-md-3">
            <select className="form-select">
              {motherTongue.map((e) => (
                <option value={e} label={e} />
              ))}
            </select>
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col form-check col-md-3">
            <label>Children</label>
          </div>
          <div className={`form-col col-md-3`}>
            <label className="sm" style={{ fontSize: "10px", color: "green" }}>
              <textarea
                className="form-control"
                placeholder={"1.\n2.\n3.\n4."}
              />
              * leave empty if not applicable
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
export default FamilyDetails;
