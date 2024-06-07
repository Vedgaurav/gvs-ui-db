import axios, { all } from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosDoesUserExist from "../axios/axiosDoesUserExist";
import axiosIsParent from "../axios/axiosDoesUserExist";
import './googlelogin.css';
import axiosCheckPermission from "../axios/axiosCheckPermission";
import { PleaseWaitContext } from "../context/PleaseWaitContextProvider.js";
import PleaseWait from "../pleaseWait/PleaseWait";

export default function GLogin() {
    const navigate = useNavigate();
    const [message, setMessage] = useState("")
    const { gWaitOn, setGWaitOn } = useContext(PleaseWaitContext)

    const fetchData = async()=>{
        const url1 = 'https://api.gaurangavedic.org.in:8443/auth';
        const url2 = 'https://localhost:8443/auth'
        const response = await fetch(url1,{
          method: 'GET',
          credentials: 'include',
        });
        const userData= await response.json();
        return userData;
    }

    const loginRedirection=async(data)=>{
        
        
        if(data){
          let { userEmail,roles } = data;
          //console.log(userEmail)

          
          if (roles!=null && roles.length!=0) {
  
              setGWaitOn(true)
              const res = await axiosDoesUserExist()
              const guardianUser = res.data
  
              if (guardianUser.length == 0) {
                  // to reg
                  sessionStorage.setItem("userEmail", userEmail)
                  navigate("/registration", { state: { connectedTo: "guru", guardianEmail: userEmail } })
              }
              else {
                  sessionStorage.setItem("userId", guardianUser[0].id)
                  sessionStorage.setItem("userFname", guardianUser[0].fname)
                  sessionStorage.setItem("userEmail", userEmail)
                  // to dashboard of dependents
                  navigate("/dashboard", { state: { userDetail: guardianUser[0] } })
              }
          }
          else {
            await fetch('https://api.gaurangavedic.org.in:8443/logout',{
                method: 'POST',
                credentials: 'include',
              });
  
              setMessage("Not Authorized. Please contact admin.")
          }
          setGWaitOn(false)
  
  
     }
          
        }
      
        
       
        useEffect(() => {
         fetchData().then(data=> loginRedirection(data)).catch((e)=> setMessage("Server is down"));
        }, [])

    // const auth = async ()=>{

    //     const AuthRes = await axios.get(CHECK_AUTHENTICATION_URL,{
    //         withCredentials: true ,
    //         crossdomain: true,
    //         cookie: document.cookies
            
    //       }).catch((e)=>{console.log('There is an auth api error')})
    //       console.log(AuthRes);
    //       console.log('we are now redirected to registration page');

    //     const detail = {
    //         id: sessionStorage.getItem("userId"),
    //         fname: sessionStorage.getItem("userFname")
    //     }
    //     if (sessionStorage.getItem("userEmail") != null)
    //         navigate("/dashboard", { state: { userDetail: detail } })}

    // useEffect(() => {

    //     auth();
    // }, [])

    // const googleFail = (e) => {
    //     console.log("google fial", e);
    // };

    setTimeout(() => {
        setMessage("")
    }, 2000)

//     const responseGoogle = async (response) => {
//         let { email, name, googleId } = response.profileObj;

//         const permissionRes = await axiosCheckPermission(email)
//         const isPermitted = permissionRes.data
//         if (isPermitted) {

//             setGWaitOn(true)
//             const res = await axiosDoesUserExist(email)
//             const allMatchedEmails = res.data
//             const guardianUser = allMatchedEmails.filter((one) => one.connectedTo == "guru")

//             if (guardianUser.length == 0) {
//                 // to reg
//                 sessionStorage.setItem("userEmail", email)
//                 navigate("/registration", { state: { connectedTo: "guru", guardianEmail: email } })
//             }
//             else {
//                 sessionStorage.setItem("userId", guardianUser[0].id)
//                 sessionStorage.setItem("userFname", guardianUser[0].fname)
//                 sessionStorage.setItem("userEmail", email)
//                 // to dashboard of dependents
//                 navigate("/dashboard", { state: { userDetail: guardianUser[0] } })
//             }
//         }
//         else {

//             setMessage("Not Authorized. Please contact admin.")
//         }
//         setGWaitOn(false)


//    }

    const template = <>
        <div className="row pt-5" style={{}}>
            <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-6 offset-sm-3 col-xs-6 offset-xs-3">
                <div className="card text-center mx-auto" >
                    <h5 style={{ color: "red" }}>{message}</h5>
                    <div className="card-body login-card-body">
                        <h3>Welcome</h3>
                        <p className="mt-4">Login to your Account!!</p>
                        <button type='button' text='Login'><a href="https://api.gaurangavedic.org.in:8443/oauth2/authorization/google">Login</a></button>
                    </div>
                </div>
            </div>
        </div>
    </>
    return <>
        {gWaitOn?<PleaseWait/>:template}
    </>

}