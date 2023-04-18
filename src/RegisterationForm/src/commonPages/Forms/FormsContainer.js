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
import LoadingSpinner from "../../utilities/loadingSpinner/LoadingSpinner";
import {ADD_DEVOTEE_DATA} from "../../../../constants/apiConstant";
const FormsContainer = (props) =>{
const dispatch = useDispatch();
const {validations} = useSelector(
    (state) => state
  );
  const data=useSelector((state)=>state)
  const [stage, setStage] = useState(1);
  const [back, setBack] = useState(true);
  const [forward, setForward] = useState(false);
  const [submit,setSubmit] = useState('Save & Proceed');

  
  const [submitResponse,setSubmitResponse]=useState('');
  const [error,setError]=useState('');
  const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/shazam-events/list',
    params: {artistId: '73406786', l: 'en-US', from: '2022-12-31', limit: '50', offset: '0'},
    headers: {
      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  };
  
   const submitHandler=()=>{
    props.onShowModal(false);
    props.onHeaderReceive("");
    props.onMessageReceive("");
    const saveData = JSON.parse(JSON.stringify(data));
    
    delete saveData.validations
    const requestData = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(saveData),
    };
    console.log(saveData);
    fetch(options)
    .then(response =>{ if(response.status === 200){
      console.log("SUCCESSS")
      props.onHeaderReceive("Success");
     props.onMessageReceive("Data Successfully Saved");
     setError(response.status);
      return response.json();     
  }else if(response.status === 408){
      console.log("SOMETHING WENT WRONG")
      props.onHeaderReceive("API ERROR")
      props.onMessageReceive('There is error in submitting the response. Kindly try again later');
      setError(response.status);
      return response.json();
  }
  else if(response.status === 400){
    console.log("SOMETHING WENT WRONG")
    props.onHeaderReceive("API ERROR")
    props.onMessageReceive('There is error in submitting the response. Kindly try again later');
    setError(response.status);
    return response.json();
}
     })
    .then(data => {
    
    console.log(data);
    }).catch(e=>{
      
      props.onHeaderReceive("API ERROR")
      props.onMessageReceive('There is error in submitting the response. Kindly try again later');
      
     } )
    
     
    console.log(error);
    console.log(submitResponse);
    props.onShowModal(true);
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
  );
};
export default FormsContainer;
