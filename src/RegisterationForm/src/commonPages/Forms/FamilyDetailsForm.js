import { motherTongue,religion } from "../../utilities/OptionalEntries";
import { useSelector,useDispatch } from "react-redux";
const FamilyDetails = () => {

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
