import PersonalInfoForm from "./PersonalInfoForm";
import ContactInfoForm from "./ContactInfoForm";
import { useState,useEffect } from "react";
import RegistrationProgressBar from "../RegProgBar/RegistrationProgressBar";
import "./FormInput.css";
import DevotionalInfoForm from "./DevotionalInfoForm";
import AddDevotionalInfoForm from "./AddDevotionalInfoForm";
import ProfessionalInfoForm from "./ProfessionalInfoForm";
import FamilyDetails from "./FamilyDetailsForm";
import image from "../../images/lordWithDevs.png";
import SubmitSuccess from "../../SuccessHandler/SubmitSuccess";
import ErrorMessage from "../../SuccessHandler/ErrorMessage";
import { requiredDataAllFields } from "../../utilities/AllFieldsData";
const FormsContainer = () => {
  const [stage, setStage] = useState(1);
  const [back, setBack] = useState(true);
  const [forward, setForward] = useState(false);
  const [submit,setSubmit] = useState('Save & Proceed');
 

const requestData = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(requiredDataAllFields)
};
  
  const [submitResponse,setSubmitResponse]=useState('');
  const [error,setError]=useState('');
   const submitHandler=()=>{
    fetch('https://hlz-global-reg-boot.herokuapp.com/v1/hlzGlobalReg/saveInput/', requestData)
    .then(response => response.json())
    .then(data => {setSubmitResponse(data.fname);
    setFormStage(<><SubmitSuccess/></>)
    }).catch(e=>{setError('there is error in submitting the response',e);
  setFormStage(<>
  <ErrorMessage/>
  </>)});

    console.log(submitResponse);
    console.log(error);
  }
  const [validMandatoryFields,setValidMandatoryFields]=useState(true);
  const moveForward=(e)=>{
    console.log(e);
   if(e===true)
   setValidMandatoryFields(true);
   else    setValidMandatoryFields(false);
   
  }
  let forms={};
  const formStageHandler = (stage) => {
    switch (stage) {
      case 1:
        setFormStage(
          forms.stage1
        );
        setStage(1);
        setBack(true);
        setForward(false);
        break;
      case 2:
        setFormStage(
         forms.stage2
        );
        setStage(2);
        setBack(false);
        break;
      case 3:
        setFormStage(
         forms.stage3
        );
        setStage(3);
        break;
      case 4:
        setFormStage(
          forms.stage4
        );
        setStage(4);
        break;
      case 5:
        setFormStage(
          forms.stage5
        );
        setStage(5);
        break;
      case 6:
        setFormStage(
          forms.sage6
        );
        setStage(6);
        
        setSubmit('Save & Proceed');
        break;
      case 7:
        setStage(7);
        
        setSubmit('Submit');
        break;
      case 8:
         submitHandler();
      break;
      default:
        setFormStage(
          forms.stage1
        );
        
        setStage(1);
        setForward(false);
        setBack(true);
    }
    
  };
  forms={stage1: 
    <PersonalInfoForm satge={stage} onStageChange={moveForward} />,stage2:<ContactInfoForm satge={stage} onStageChange={formStageHandler} />,
    stage3:<DevotionalInfoForm satge={stage}onStageChange={formStageHandler}/>,stage4:<AddDevotionalInfoForm
    satge={stage} onStageChange={formStageHandler}/>,stage5:<ProfessionalInfoForm satge={stage} onStageChange={formStageHandler}/>,
    sage6:<FamilyDetails satge={stage} onStageChange={formStageHandler} />
  }
  const [jsxFormStage, setFormStage] = useState(
    <>
      <PersonalInfoForm satge={stage} onStageChange={formStageHandler} />
    </>
  );

  return (
    <>
      <div className="registration container ">
        {/* <img 
            src={image}
            alt=''
            className="imgfix rounded float-left"
          />
          </div> */}

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
          disabled={validMandatoryFields}
        >
          {submit}
        </button>
      </div>
    </>
  );
};
export default FormsContainer;
