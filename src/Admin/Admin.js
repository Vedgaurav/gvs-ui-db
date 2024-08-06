import { useContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { PleaseWaitContext } from "../context/PleaseWaitContextProvider.js"
import { GET_REGISTERED_USERS } from "../constants/apiConstant"
import LoadingSpinner from "../RegisterationForm/src/utilities/loadingSpinner/LoadingSpinner";
import "../RegisterationForm/src/commonPages/Forms/FormInput.css"
import axios from "axios"
import { useSelector,useDispatch } from "react-redux";
import StickyHeadTable from "../reusableComponents/table/StickyHeadTable.js";
import Divider from '@mui/material/Divider';


export default (props) => {
    const dispatch = useDispatch();
    const {admin}=useSelector((state)=>state)
    const { state } = useLocation()
    const { userDetail } = state ? state : ""
    const [dep, setDep] = useState([])
    const [startDate,setStartDate]=useState();
    const [endDate,setEndDate]=useState();
    const navigate = useNavigate()
    const { gWaitOn, setGWaitOn } = useContext(PleaseWaitContext)
    


    useEffect(()=>{

        // console.log(startDate);
        // console.log(endDate)
    },[startDate,endDate])

    useEffect(()=>{

    if (sessionStorage.getItem("userEmail") == null){
            navigate("/");
    }
    else if(admin.length!==0 && admin ==='ROLE_ADMIN'){
        // console.log("welcome to admin pannel")
        
    }
    else{
        navigate("/dashboard");
    }

    },[])


    const getRegisteredMembers = async () => {
        setGWaitOn(true)
        const response = await axios.get(GET_REGISTERED_USERS+`?startDate=${startDate}&endDate=${endDate}`,{
            withCredentials: true,
            
          });
        // console.log(response);
        setDep(response.data);
        setGWaitOn(false)
    }

    const whatsAppNotifier =(primaryPhoneNo,whatsappPhone,id,fname)=>{

        // console.log(primaryPhoneNo);
        // console.log(whatsappPhone);
        // console.log(id);
        // console.log(fname);

        if(whatsappPhone.length==0||whatsappPhone==null)
        window.open(`https://wa.me/91${primaryPhoneNo}?text=Hare%20K%E1%B9%9B%E1%B9%A3%E1%B9%87a%21%0A%0AYour%20information%20has%20been%20successfully%20updated.%20Your%20membership%20id%20is%20%2A${id}%2A.%0APlease%20keep%20this%20ID%20saved.%20It%20would%20be%20needed%20at%20the%20time%20of%20Yatra%20registration%20and%20accommodation%20booking.%0A%0AIn%20your%20service%2C%0AGVS%20Dham%20Yatra%20Committee`)
        else
        window.open(`https://wa.me/91${whatsappPhone}?text=Hare%20K%E1%B9%9B%E1%B9%A3%E1%B9%87a%21%0A%0AYour%20information%20has%20been%20successfully%20updated.%20Your%20membership%20id%20is%20%2A${id}%2A.%0APlease%20keep%20this%20ID%20saved.%20It%20would%20be%20needed%20at%20the%20time%20of%20Yatra%20registration%20and%20accommodation%20booking.%0A%0AIn%20your%20service%2C%0AGVS%20Dham%20Yatra%20Committee`)

    }


      
        
    // useEffect(() => {
       
    //     fun(setDep)
    //     console.log("useEffect ran");
    // }, [])

    useEffect(() => {
        if (sessionStorage.getItem("userEmail") == null)
            navigate("/login")
    }, [])


    const template = <div style={{width:"100%"}}>
        <h4 className="display-5">Manage Registered Members</h4>

        <div className="form-group row container-md">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <div className="form-col col-md-3"><label htmlFor="SatrtDate">Start Date:</label> <input type="date" id="StartDate" className="form-control me-md-2" name="Start Date" onChange={(e)=>setStartDate(e.target.value)}/> </div>
           <div> <label htmlFor="endDate">End Date:</label><input type="date" id="endDate" className="form-control me-md-2" onChange={(e)=>{setEndDate(e.target.value)}}/> </div>
               <div> <button onClick={getRegisteredMembers} className="form-col btn btn-success me-md-2" type="button">Get Registered Members</button></div>
            </div><br />

            <Divider sx={{width:"100%" , margintop:5}}/>
            
            
                {dep.length>0 ? <StickyHeadTable rows={dep}/>:""}

              {gWaitOn?<LoadingSpinner/>:""}

            
        </div>
    </div>
    return <>
            {template}
    </>
}