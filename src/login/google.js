import axios from "axios";
import { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useLocation, useNavigate } from "react-router-dom";
import axiosDoesUserExist from "../axios/axiosDoesUserExist";
import axiosIsParent from "../axios/axiosDoesUserExist";

export default function GLogin() {
    const navigate = useNavigate();
 

    const googleFail = (e) => {
        console.log("google fial", e);
    };

    const responseGoogle = async (response) => {
        let { email, name, googleId } = response.profileObj;
        let personDetail = {
            email,
            name,
            googleId,
        };

        const res = await axiosDoesUserExist(email)
        const doesUserExist = res.data

        if(doesUserExist==false){
            // to reg
            navigate("/registration", { state: { personDetail: personDetail } })
        }
        else{
            // to dashboard of dependents
            navigate("/dashboard", { state: { personDetail: personDetail } })

        }

    }


    return <>
        <div class="container-md" style={{}}>
            <GoogleLogin
                className="signin-btn"
                clientId="982316181452-h2um7ud51f9e70s6b3obb6bo003bugjs.apps.googleusercontent.com"
                buttonText="Sign in with Google"
                onSuccess={responseGoogle}
                onFailure={googleFail}
                cookiePolicy={"single_host_origin"}
            />
        </div>

    </>

}