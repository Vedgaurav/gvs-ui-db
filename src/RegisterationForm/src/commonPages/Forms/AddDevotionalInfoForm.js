import { useState } from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddDevotionalInfoForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const dates = startDate;
  return (
    <>
      <div className="container">
        <h2> Devotional Detail</h2>
        <div className="form-group row">
          <div className="form-col form-check col-md-3">
            <label>No. Of Rounds Chanting<a style={{color:'red'}}>*</a></label>
          </div>
          <div className={`form-col col-md-3`}>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col form-check col-md-3">
            <label>Chanting Since<a style={{color:'red'}}>*</a></label>
          </div>
          <div className={`form-col col-md-3`}>
            <input type="month" className="form-control" />
          </div>
          <div className="form-col col-md-3">
            <label>Chanting 16 Rounds Since</label>
          </div>
          <div className={`form-col col-md-3`}>
            <input
              type="month"
              className="form-control"
              value={""}
              defaultValue={""}
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col form-check col-md-3">
            <label>Introduced By<a style={{color:'red'}}>*</a></label>
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col form-check col-md-3">
            <label>Year of Introduction<a style={{color:'red'}}>*</a></label>
          </div>
          <div className={`form-date col-md-3`}>
            <DatePicker
              className="form-control"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showYearPicker
              dateFormat="yyyy"
              yearItemNumber={9}
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col form-check col-md-3">
            <label>Introduced through<a style={{color:'red'}}>*</a></label>
          </div>
          <div className={`form-col col-md-3`}>
            <label className="sm" style={{ fontSize: "10px", color: "green" }}>
              <input type="text" className="form-control" />
              Temple/online/devotee visit/yatra etc.
            </label>
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col form-check col-md-3">
            <label>Previous Counselor</label>
          </div>
          <div className={`form-col col-md-3`}>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col form-check col-md-3">
            <label>Preferred Services</label>
          </div>
          <div className={`form-col col-md-3`}>
            <textarea className="form-control" placeholder={"1.\n2.\n3.\n4."} />
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col form-check col-md-3">
            <label>Rendered Services</label>
          </div>
          <div className={`form-col col-md-3`}>
            <textarea className="form-control" placeholder={"1.\n2.\n3.\n4."} />
          </div>
        </div>
        <div className="form-group row">
          <div className="form-col form-check col-md-3">
            <label>Additional Remarks</label>
          </div>
          <div className={`form-col col-md-3`}>
            <textarea className="form-control" />
          </div>
        </div>
      </div>
    </>
  );
};
export default AddDevotionalInfoForm;
