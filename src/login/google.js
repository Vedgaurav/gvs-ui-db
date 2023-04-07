import axios from "axios";
import { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useLocation, useNavigate } from "react-router-dom";
import axiosDoesUserExist from "../axios/axiosDoesUserExist";
import axiosIsParent from "../axios/axiosDoesUserExist";
import './googlelogin.css';

export default function GLogin() {
    const navigate = useNavigate();
 

    const googleFail = (e) => {
        console.log("google fial", e);
    };

    const responseGoogle = async (response) => {
        let { email, name, googleId } = response.profileObj;

        const res = await axiosDoesUserExist(email)
        const userId = res.data.id

        if(res.data==""){ 
            // to reg
            navigate("/registration")
        }
        else{
            sessionStorage.setItem("userId",userId)
            // to dashboard of dependents
            navigate("/dashboard", { state: { userId: userId } })
        }

    }


    return <>
{/*     
    <div class="bg-image">
        
        </div> */}

        <div className="row pt-5" style={{}}>
            <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-6 offset-sm-3 col-xs-6 offset-xs-3">
                <div className="card text-center mx-auto" >
                    <div className="card-body login-card-body">
                        <h3>Welcome</h3>
                        <p className="mt-4">Login to your Account!!</p>
                        <GoogleLogin
                            className="signin-btn google-login-btn"
                            clientId="982316181452-h2um7ud51f9e70s6b3obb6bo003bugjs.apps.googleusercontent.com"
                            buttonText="Sign in with Google"
                            onSuccess={responseGoogle}
                            onFailure={googleFail}
                            cookiePolicy={"single_host_origin"}
                        />
                    </div>
                </div>
            </div>
        </div>
        

    </>

}