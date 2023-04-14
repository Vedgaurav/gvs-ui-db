import { useReducer,useEffect } from 'react';
import './RegistrationProgressBar.css';
import 'bootstrap/dist/css/bootstrap.css';
const lables={label1:'active',label2:'',label3:'',label4:'',label5:'',lable6:''}

const stageReducer=(state,action)=>{
  switch (action.type) {
    case 1:
      return{
        label1:'active',label2:'',label3:'',label4:'',label5:''
      }
      case 2:
        return{
          label1:'completed',label2:'active',label3:'',label4:'',label5:''

        }
    case 3:
        return{
          label1:'completed',label2:'completed',label3:'active',label4:'',label5:''

        }
        case 4:
        return{
          label1:'completed',label2:'completed',label3:'completed',label4:'active',label5:''

        }
        case 5:
        return{
          label1:'completed',label2:'completed',label3:'completed',label4:'completed',label5:'active'

        }
        case 6:
        return{
          label1:'completed',label2:'completed',label3:'completed',label4:'completed',label5:'completed'

        }
      
  
    default:
      return{
        label1:'active',label2:'',label3:'',label4:'',label5:''
      };
  }
  
}


function RegistrationProgressBar(props) {
  
  
  const [label, dispatch] = useReducer(stageReducer, lables);
 useEffect(()=>{ 
  switch (props.stage) {
    case 1:
      dispatch({type:1})
      break;
      
      case 2:
      dispatch({type:2})
      break;
      case 3:
      dispatch({type:3})
      break;
      case 4:
      dispatch({type:4})
      break;
      case 5:
      dispatch({type:5})
      break;
      case 6:
      dispatch({type:6})
      break;
    default:
      dispatch({type:1})
  }
},[props.stage]);
const stagevals=[{id:'1',val:'Personal Detail',labelsd:label.label1},{id:'2',val:'Family Details',labelsd:label.label2},{id:'3',val:'Devotional Info.',labelsd:label.label3},
,{id:'4',val:'Professional Info',labelsd:label.label4},{id:'5',val:'Contact Details',labelsd:label.label5}];
  return (<>
  <div className='container'>
  <div className='form-col'>
  <div className="stepper-wrapper">
    {stagevals.map((e)=> 
  <div className={`stepper-item  ${e.labelsd} `} key={e.id}>
    <div className="step-counter">{e.id}</div>
    <div className="step-name">{e.val}</div>
  
  </div>)}
  </div>
  
</div>
</div>
</>);
}

export default RegistrationProgressBar;