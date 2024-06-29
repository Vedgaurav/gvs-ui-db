import axios, { all } from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosDoesUserExist from "../axios/axiosDoesUserExist";
import axiosIsParent from "../axios/axiosDoesUserExist";
import './googlelogin.css';
import axiosCheckPermission from "../axios/axiosCheckPermission";
import { PleaseWaitContext } from "../context/PleaseWaitContextProvider.js";
import PleaseWait from "../pleaseWait/PleaseWait";
import { CHECK_AUTHENTICATION_URL,LOGIN_URL,LOGOUT } from "../constants/apiConstant";
import { DOES_USER_EXIST } from "../constants/apiConstant";

export default function GLogin(props) {
    const navigate = useNavigate();
    const [message, setMessage] = useState("")
    const { gWaitOn, setGWaitOn } = useContext(PleaseWaitContext)
    
    const fetchData = async()=>{
        const response = await fetch(CHECK_AUTHENTICATION_URL,{
          method: 'GET',
          credentials: 'include',
        });
        
        const userData= await response.json();
        console.log("Auth response to json data ")
        console.log(userData)
        return userData;
    }

    const loginRedirection=async(data)=>{
        
        
        if(data){
          let { userEmail,roles } = data;
          console.log(userEmail)
          console.log(roles)
          sessionStorage.setItem("userRole", roles)
          console.log((roles?.filter((e)=>e.name==='ROLE_ADMIN'))[0].name)
          

          if (roles[0].name!=null || roles[0].name.length!=0) {
            let guardianUser = null;
              setGWaitOn(true)
              const res = await axios.get(DOES_USER_EXIST,{
                withCredentials:true
              }).catch(e=>{setGWaitOn(false)})
            console.log("Does user exist ",res.data);
            guardianUser = res.data;
              setGWaitOn(false)
              console.log("Guardian user ",guardianUser)
              
              if (guardianUser===null || !guardianUser) {
                props.onSetNavBarProps((roles.filter((e)=>e.name==='ROLE_ADMIN'))[0].name,"logout");
                console.log("registration redirection");
                  // to reg
                  sessionStorage.setItem("userEmail", userEmail)
                  navigate("/registration", { state: { connectedTo: "guru", guardianEmail: userEmail } })
              }
              else {
                console.log("dashboard redirection",guardianUser);
                  sessionStorage.setItem("userId", guardianUser.id)
                  sessionStorage.setItem("userFname", guardianUser.fname)
                  sessionStorage.setItem("userEmail", userEmail)
                  props.onSetNavBarProps((roles.filter((e)=>e.name==='ROLE_ADMIN'))[0].name,"logout");
                  // to dashboard of dependents
                  navigate("/dashboard", { state: { userDetail: guardianUser } })
              }
          }
          else {
            await fetch(LOGOUT,{
                method: 'POST',
                credentials: 'include',
              });
  
              setMessage("Not Authorized. Please contact admin.")
          }
          setGWaitOn(false)
  
  
     }
          
        }
      
        
       
        useEffect(() => {
          sessionStorage.setItem("userEmail", "");
          sessionStorage.setItem("userId", "");
                fetchData().then(data=> loginRedirection(data)).catch((e)=> {
                    console.log("Auth error ",e)
                    setMessage("")
                
                });
            
        }, [])

    setTimeout(() => {
        setMessage("")
    }, 2000)

    const template = <>
        <div className="row pt-5" style={{}}>
            <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-6 offset-sm-3 col-xs-6 offset-xs-3">
                <div className="card text-center mx-auto" >
                    <h5 style={{ color: "red" }}>{message}</h5>
                    <div className="card-body login-card-body">
                        <h3>Welcome</h3>
                        <p className="mt-4">Login to your Account!!</p>
                        <button type='button' text='Login'><a href={LOGIN_URL}>Login</a></button>
                    </div>
                </div>
            </div>
        </div>
    </>
    return <>
        {gWaitOn?<PleaseWait/>:template}
    </>

}