import PersonalInfoForm from "./PersonalInfoForm";
import ContactInfoForm from "./ContactInfoForm";
import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import RegistrationProgressBar from "../RegProgBar/RegistrationProgressBar";
import "./FormInput.css";
import {BsFillFastForwardBtnFill}from "react-icons/bs";
import DevotionalInfoForm from "./DevotionalInfoForm";
import ProfessionalInfoForm from "./ProfessionalInfoForm";
import FamilyDetails from "./FamilyDetailsForm";
import image from "../../images/lordWithDevs.png";
import LoadingSpinner from "../../utilities/loadingSpinner/LoadingSpinner";
import {ADD_DEVOTEE_DATA} from "../../../../constants/apiConstant";
import axios from "axios";
const FormsContainer = (props) =>{
const dispatch = useDispatch();
const {validations} = useSelector(
    (state) => state
  );
  useEffect(()=>{
    dispatch({type: 'connectedTo', data: props.connectedTo ,valid:true})
    dispatch({type: 'email', data: props.guardianEmail ,valid:true})
  },[]);
  const data=useSelector((state)=>state)
  const [stage, setStage] = useState(1);
  const [back, setBack] = useState(true);
  const [submit,setSubmit] = useState('Save & Proceed');

  const [isLoadingSpinnerActive,setIsLoadingSpinnerActive]=useState(false);
  const [submitResponse,setSubmitResponse]=useState('');
  const [error,setError]=useState('');
  
   const submitHandler=async()=>{
    props.onShowModal(false);
    props.onHeaderReceive("");
    props.onMessageReceive("");
    const saveData = JSON.parse(JSON.stringify(data));
    
    delete saveData.validations
    const requestData = {
      method: 'POST',
      url:ADD_DEVOTEE_DATA,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(saveData),
    };
    console.log(JSON.stringify(saveData));
    const response=await axios.post(ADD_DEVOTEE_DATA,saveData);
    console.log(response);
    if(response.status === 200){
      console.log(response)
      props.onHeaderReceive("Success");
     props.onMessageReceive("Data Successfully Saved");
     setError(response.status);
          
  }else if(response.status === 408){
      console.log("SOMETHING WENT WRONG")
      props.onHeaderReceive("API ERROR")
      props.onMessageReceive('There is error in submitting the response. Kindly try again later');
      setError(response.status);
  }
  else if(response.status === 400){
    console.log("SOMETHING WENT WRONG")
    props.onHeaderReceive("API ERROR")
    props.onMessageReceive('There is error in submitting the response. Kindly try again later');
    setError(response.status);
}
     
     
    console.log(error);
    console.log(submitResponse);
    props.onShowModal(true);
  }
  let forms={};
  const formStageHandler = (stage) => {
    switch (stage) {
      case 1:
        setIsLoadingSpinnerActive(true);
        setFormStage(
          forms.stage1
        );
        setStage(1);
        setBack(true);
        setIsLoadingSpinnerActive(false);
        break;
      case 2:
        setIsLoadingSpinnerActive(true);
        setFormStage(
         forms.stage2
        );
        setStage(2);
        setBack(false);
        setIsLoadingSpinnerActive(false);
        break;
      case 3:
        setIsLoadingSpinnerActive(true)
        setFormStage(
         forms.stage3
        );
        setStage(3);
        setIsLoadingSpinnerActive(false);
        break;
      case 4:
        setIsLoadingSpinnerActive(true);
        setFormStage(
          forms.stage4
        );
        setStage(4);
        setIsLoadingSpinnerActive(false);
        break;
      case 5:
        setIsLoadingSpinnerActive(true);
        setFormStage(
          forms.stage5
        );
        setStage(5);
        setIsLoadingSpinnerActive(false);
        break;
      case 6:
        setStage(6);
        
        setSubmit('Submit');
        break;
      
      case 7:
         submitHandler();
      break;
      default:
        setIsLoadingSpinnerActive(true);
        setFormStage(
          forms.stage1
        );
        
        setStage(1);
        setBack(true);
        setIsLoadingSpinnerActive(false);
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
         
        <RegistrationProgressBar stage={stage} />

        {isLoadingSpinnerActive ? <LoadingSpinner/>:jsxFormStage}

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
  );
};
export default FormsContainer;
