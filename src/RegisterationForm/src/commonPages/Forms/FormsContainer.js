import PersonalInfoForm from "./PersonalInfoForm";
import ContactInfoForm from "./ContactInfoForm";
import { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import RegistrationProgressBar from "../RegProgBar/RegistrationProgressBar";
import "./FormInput.css";
import { BsFillFastForwardBtnFill } from "react-icons/bs";
import DevotionalInfoForm from "./DevotionalInfoForm";
import ProfessionalInfoForm from "./ProfessionalInfoForm";
import FamilyDetails from "./FamilyDetailsForm";
import image from "../../images/lordWithDevs.png";
import LoadingSpinner from "../../utilities/loadingSpinner/LoadingSpinner";
import { ADD_DEVOTEE_DATA } from "../../../../constants/apiConstant";
import axios from "axios";
import { PleaseWaitContext } from "../../../../context/PleaseWaitContextProvider.js";
const FormsContainer = (props) => {
  const dispatch = useDispatch();
  const { validations } = useSelector((state) => state);
  useEffect(() => {
    dispatch({ type: "connectedTo", data: props.connectedTo, valid: true });
    dispatch({ type: "email", data: props.guardianEmail, valid: true });
    if (props.connectedTo === "guru") {
      dispatch({ type: "priviledge", data: "GUARDIAN", valid: true });
    } else dispatch({ type: "priviledge", data: "USER", valid: true });
  }, []);
  const data = useSelector((state) => state);
  const [stage, setStage] = useState(1);
  const [back, setBack] = useState(true);
  const [submit, setSubmit] = useState("Save & Proceed");

  const [isLoadingSpinnerActive, setIsLoadingSpinnerActive] = useState(false);
  const [submitResponse, setSubmitResponse] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async () => {
    setIsLoadingSpinnerActive(true);
    props.onHeaderReceive("");
    props.onMessageReceive("");
    const saveData = JSON.parse(JSON.stringify(data));

    delete saveData.validations;
    // console.log(JSON.stringify(saveData));
    try {
      const response = await axios
        .post(ADD_DEVOTEE_DATA, saveData,{
          withCredentials: true
        })
        .catch((e) => {
          props.onHeaderReceive("API ERROR")
          props.onMessageReceive(
            "There is error in submitting the response. Kindly try again later"
          );
        });
      console.log(response);
      if (response.status === 200) {
        //  console.log(response);

        props.onHeaderReceive("Success");
        props.onMessageReceive("Data Successfully Saved");
        dispatch({ type: "submitted" });
        setError(response.status)

        if (props.connectedTo === "guru") {
          sessionStorage.setItem("userId", response.data.id)
      sessionStorage.setItem("userFname", response.data.fname)
        } else {console.log("this person is not guru")};
    
      } else if (response.status === 408) {
        console.log("SOMETHING WENT WRONG");
        props.onHeaderReceive("API ERROR");
        props.onMessageReceive(
          "There is error in submitting the response. Kindly try again later"
        );
        setError(response.status);
      } else if (response.data.status === 400) {
        console.log("SOMETHING WENT WRONG");
        props.onHeaderReceive("API ERROR");
        props.onMessageReceive(
          "There is error in submitting the response. Kindly try again later"
        );
        setError(response.status);
      }  else if (response.data.status === 500) {
        console.log("SOMETHING WENT WRONG");
        props.onHeaderReceive("API ERROR");
        props.onMessageReceive(
          "There is an Internal Server Error"
        );
        setError(response.status);
      }else {
        props.onHeaderReceive("API ERROR");
        props.onMessageReceive(
          "There is error in submitting the response. Kindly try again later"
        );
      }
      props.onResponseData(response.data ? [0] : []);
    } catch (e) {
      props.onHeaderReceive("API ERROR");
      props.onMessageReceive(
        "There is error in submitting the response. Kindly try again later"
      );
    }
    // console.log(error);
    // console.log(submitResponse);
    setIsLoadingSpinnerActive(false);
    props.onShowModal(true);
  };
  let forms = {};
  const formStageHandler = (stage) => {
    switch (stage) {
      case 1:
        setFormStage(forms.stage1);
        setStage(1);
        setBack(true);
        break;
      case 2:
        setIsLoadingSpinnerActive(true);
        setFormStage(forms.stage2);
        setStage(2);
        setBack(false);
        setIsLoadingSpinnerActive(false);
        break;
      case 3:
        setIsLoadingSpinnerActive(true);
        setFormStage(forms.stage3);
        setStage(3);
        setIsLoadingSpinnerActive(false);
        break;
      case 4:
        setFormStage(forms.stage4);
        setStage(4);
        setSubmit("Submit");
        break;

      case 5:
        submitHandler();
        break;
      default:
        setIsLoadingSpinnerActive(true);
        setFormStage(forms.stage1);

        setStage(1);
        setBack(true);
        setIsLoadingSpinnerActive(false);
    }
  };
  forms = {
    stage1: <PersonalInfoForm />,
    stage2: <FamilyDetails />,
    stage3: <DevotionalInfoForm />,
    // stage4: <ProfessionalInfoForm />,
    stage4: <ContactInfoForm />,
  };
  const [jsxFormStage, setFormStage] = useState(<PersonalInfoForm />);

  return (
    <>
      {/* <img 
            src={image}
            alt=''
            className="imgfix rounded float-left"
          />
          </div> */}
      {isLoadingSpinnerActive ? (
        <LoadingSpinner />
      ) : (
        <>
          {" "}
          <RegistrationProgressBar stage={stage} />
          {jsxFormStage}
          <button
            type="button"
            className="btn btn-success col-sm-3"
            onClick={() => formStageHandler(stage - 1)}
            disabled={back}
          >
            {" "}
            Previous
          </button>
          <button
            type="button"
            className="btn btn-success col-sm-3 ms-5"
            onClick={() => formStageHandler(stage + 1)}
            disabled={validations.isSubmitDisabled}
          >
            {submit}
          </button>
        </>
      )}
    </>
  );
};
export default FormsContainer;
