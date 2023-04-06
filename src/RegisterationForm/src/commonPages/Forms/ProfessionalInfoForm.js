import { useState } from "react";
import { useDispatch } from "react-redux";
const ProfessionalInfoForm = () => {
  const dispatch=useDispatch();
  const education = [
    "no Degree based Education",
    "Secondary School(9th-10th)",
    " Higher Secondary School(11th-12th)",
    "Diploma",
    "Undergraduate Degree",
    "Postgraduate Degree",
    "Doctrate Degree",
    "Post-Doctoate Degree",
  ];

  const occupation = [
    { id: "1", val: "Employed full-time" },
    { id: "2", val: "Employed part-time" },
    { id: "3", val: "Self-employed" },
    { id: "4", val: "Unemployed(Job Search/preparation)" },
    { id: "5", val: "Unemployed (not looking for work)" },
    { id: "6", val: "Home Maker" },
  ];
  const [collapse, setCollapse] = useState("");
  const collapseHandler = (e) => {
    console.log(e.target.value);
    if (
      e.target.value === "Unemployed (not looking for work)" ||
      e.target.value === "Home Maker"
    ) {
      setCollapse("collapse");
    } else setCollapse("");

  };
  const inputHandler = (e) => {
    const { value, id } = e.target;
    console.log('id==>',id);
    console.log('value ==>',value);
    dispatch({ type: id, data: value });
  };
  return (
    <>
    <h2>Professional Information</h2>
      <div className="container">
        <div className="form-group row">
          <div className="form-col col-md-3">
            <label>Education<a style={{color:'red'}}>*</a></label>
          </div>
          <div className="form-col col-md-3">
            <select className="form-select" id="education" onChange={inputHandler}>
              {education.map((e) => (
                <option value={e} label={e} />
              ))}
            </select>
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col col-md-3">
            <label>Occupation<a style={{color:'red'}}>*</a></label>
          </div>
          <div className="form-col col-md-3">
            <select className="form-select" onChange={collapseHandler} id='occupation' >
              {occupation.map((e) => (
                <option value={e.val} key={e.id} id={e.id} label={e.val} />
              ))}
            </select>
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col form-check col-md-3">
            <label>Awards/Merits</label>
          </div>
          <div className={`form-col col-md-8`}>
            <textarea id='awards'className="form-control" />
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col form-check col-md-3">
            <label>Skills/Job Experience</label>
          </div>
          <div className={`form-col col-md-8`}>
            <textarea className="form-control" />
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col form-check col-md-3">
            <label>Current Company/Business Name</label>
          </div>
          <div className={`form-col col-md-4`}>
            <input
              type="text"
              className="form-control"
              style={{ width: "400px" }}
            />
          </div>
        </div>
        <div className={`form-group row ${collapse}`}>
          <div className="form-col col-md-3">
            <label>
              Occupational Address<a style={{ color: "red" }}>*</a>
            </label>
          </div>

          <div className={`form-col col-md-3 ${collapse}`}>
            <input
              type="text"
              className="form-control"
              style={{ width: "400px" }}
              id="currAdd"
            />
          </div>
        </div>
        <div className={`form-group row ${collapse}`}>
          <div className="form-col col-md-3"></div>
          <div className="form-col col-md-3">
            <input
              type="text"
              className="form-control"
              style={{ width: "400px" }}
              id=""
            />
          </div>
        </div>
        <div className={`form-group row ${collapse}`}>
          <div className="form-col col-md-3"></div>
          <div className="form-col col-md-3">
            <input
              type="text"
              className="form-control"
              id="currAdd"
              placeholder="city"
            />
          </div>

          <div className="form-col col-md-3">
            <input
              type="text"
              className="form-control"
              id=""
              placeholder="State"
            />
          </div>
        </div>
        <div className={`form-group row ${collapse}`}>
          <div className="form-col col-md-3"></div>
          <div className="form-col col-md-3">
            <input
              type="text"
              className="form-control"
              id="currAdd"
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
    </>
  );
};
export default ProfessionalInfoForm;
