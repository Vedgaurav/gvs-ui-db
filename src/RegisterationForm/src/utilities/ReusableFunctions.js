import { useDispatch,useSelector } from "react-redux";

const useFunction=()=>{
 function inputHandler(e) {   
    const { value, id,name } = e.target;
    console.log(id,name,value)
    if (name==undefined || name==''){
      useDispatch({ type: id, data: value ,valid:true});
    }
    
    else if(value.match(name) !==null) {
      document.getElementById(id+'Error').innerText='';
    useDispatch({ type: id, data: value,valid:true });
    enableSaveAndProceed();
    }
    else {
      document.getElementById(id+'Error').innerText='invalid input';
      useDispatch({ type: id, data: value,valid:false });
      enableSaveAndProceed(false);
    }}
    return(inputHandler);
}
export{ useFunction};

