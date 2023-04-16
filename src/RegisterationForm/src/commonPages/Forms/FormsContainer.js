import PersonalInfoForm from "./PersonalInfoForm";
import ContactInfoForm from "./ContactInfoForm";
import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import RegistrationProgressBar from "../RegProgBar/RegistrationProgressBar";
import "./FormInput.css";
import DevotionalInfoForm from "./DevotionalInfoForm";
import ProfessionalInfoForm from "./ProfessionalInfoForm";
import FamilyDetails from "./FamilyDetailsForm";
import image from "../../images/lordWithDevs.png";
import SubmitSuccess from "../../SuccessHandler/SubmitSuccess";
import LoadingSpinner from "../../utilities/loadingSpinner/LoadingSpinner";
import ErrorMessage from "../../SuccessHandler/ErrorMessage";
import {ADD_DEVOTEE_DATA} from "../../../../constants/apiConstant";
import { requiredDataAllFields } from "../../utilities/AllFieldsData";
const FormsContainer = () =>{
const dispatch = useDispatch();
const {validations} = useSelector(
    (state) => state
  );
  const data=useSelector((state)=>state)
  const [stage, setStage] = useState(1);
  const [back, setBack] = useState(true);
  const [forward, setForward] = useState(false);
  const [submit,setSubmit] = useState('Save & Proceed');
  const [isLoading, setIsLoading] = useState(false);
  

  
  const [submitResponse,setSubmitResponse]=useState('');
  const [error,setError]=useState('');
   const submitHandler=()=>{
    setIsLoading(true);
    const saveData = JSON.parse(JSON.stringify(data));
    delete saveData.validations
    const requestData = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(saveData),
    };
    console.log(saveData);
    fetch(ADD_DEVOTEE_DATA, requestData)
    .then(response => response.json())
    .then(data => {setSubmitResponse(response.status);
    setFormStage(<><SubmitSuccess/></>)
    setIsLoading(false);
    }).catch(e=>{
      setIsLoading(false);
      setError('there is error in submitting the response',e);
  setFormStage(<>
  <ErrorMessage/>
  </>)});
  
    console.log(submitResponse);
    console.log(error);
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
        setStage(6);
        
        setSubmit('Submit');
        break;
      
      case 7:
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
  forms={stage1: <PersonalInfoForm />,stage2:<FamilyDetails/>,
    stage3:<DevotionalInfoForm />,
    stage4:<ProfessionalInfoForm />,
    stage5:<ContactInfoForm />
  }
  const [jsxFormStage, setFormStage] = useState(
      <PersonalInfoForm/>
  );

  return (
    <>
      
        {/* <img 
            src={image}
            alt=''
            className="imgfix rounded float-left"
          />
          </div> */}
         {isLoading ? <LoadingSpinner/>:<>
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
        
         }
      
    </>
  );
};
export default FormsContainer;
