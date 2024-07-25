import axios, { all } from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosDoesUserExist from "../axios/axiosDoesUserExist";
import axiosIsParent from "../axios/axiosDoesUserExist";
import "./googlelogin.css";
import axiosCheckPermission from "../axios/axiosCheckPermission";
import { PleaseWaitContext } from "../context/PleaseWaitContextProvider.js";
import PleaseWait from "../pleaseWait/PleaseWait";
import {
  CHECK_AUTHENTICATION_URL,
  LOGIN_URL,
  LOGOUT,
  PARENT_DOMAIN,
} from "../constants/apiConstant";
import { DOES_USER_EXIST } from "../constants/apiConstant";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
export default function GLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const { gWaitOn, setGWaitOn } = useContext(PleaseWaitContext);

  const fetchData = async () => {
    const response = await fetch(CHECK_AUTHENTICATION_URL, {
      method: "GET",
      credentials: "include",
    });

    const userData = await response.json();
    console.log("Auth response to json data ", userData);
    return userData;
  };

  const logout = async () => {
    sessionStorage.clear();

    await axios
      .post(LOGOUT, {
        withCredentials: true,
      })
      .then(() => {
        dispatch({ type: "logout", data: "" });
        dispatch({ type: "admin", data: "" });
      });
  };

  const loginRedirection = async (data) => {
    if (data) {
      let { userEmail, roles } = data;

      if (roles && roles[0]?.name.length != 0) {
        let guardianUser = null;
        setGWaitOn(true);
        const res = await axios
          .get(DOES_USER_EXIST, {
            withCredentials: true,
          })
          .catch((e) => {
            setGWaitOn(false);
          });
        console.log("Does user exist ", res.data);
        guardianUser = res.data;
        setGWaitOn(false);
        console.log("Guardian user ", guardianUser);

        if (guardianUser === null || !guardianUser) {
          if (roles.filter((e) => e.name === "ROLE_ADMIN")[0]?.length !== 0) {
            dispatch({ type: "admin", data: "admin" });
            sessionStorage.setItem("admin", "admin");
          }
          dispatch({ type: "logout", data: "logout" });
          sessionStorage.setItem("logout", "logout");
          console.log("registration redirection");
          // to reg
          sessionStorage.setItem("userEmail", userEmail);
          navigate("/registration", {
            state: { connectedTo: "guru", guardianEmail: userEmail },
          });
        } else {
          console.log("dashboard redirection", guardianUser);
          sessionStorage.setItem("userId", guardianUser.id);
          sessionStorage.setItem("userFname", guardianUser.fname);
          sessionStorage.setItem("userEmail", userEmail);
          sessionStorage.setItem("logout", "logout");
          dispatch({ type: "logout", data: "logout" });
          dispatch({
            type: "admin",
            data: roles.filter((e) => e.name === "ROLE_ADMIN")[0]?.name,
          });
          sessionStorage.setItem(
            "admin",
            roles.filter((e) => e.name === "ROLE_ADMIN")[0]?.name
          );

          // to dashboard of dependents
          navigate("/dashboard", { state: { userDetail: guardianUser } });
        }
      } else {
        logout();
        setMessage("Not Authorized. Please contact admin.");
      }
    }
  };

  useEffect(() => {
    sessionStorage.setItem("userEmail", "");
    sessionStorage.setItem("userId", "");
    fetchData()
      .then((data) => loginRedirection(data))
      .catch(async (e) => {
        //logout();
      });
  }, []);

  setTimeout(() => {
    setMessage("");
  }, 2000);
  const handleClick = () => {
    Cookies.set("loginButton", "db", {
      expires: 1,
      domain: PARENT_DOMAIN,
      path: "/",
    });
  };
  const template = (
    <>
      <div className="row pt-5" style={{}}>
        <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-6 offset-sm-3 col-xs-6 offset-xs-3">
          <div className="card text-center mx-auto">
            <h5 style={{ color: "red" }}>{message}</h5>
            <div className="card-body login-card-body">
              <h3>Welcome</h3>
              <p className="mt-4">Login to your Account!!</p>
              <button
                className="google-login-button"
                type="button"
                text="Login"
              >
                <a
                  style={{ color: "white" }}
                  href={LOGIN_URL}
                  onClick={() => handleClick()}
                >
                  Login with Google
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  return <>{gWaitOn ? <PleaseWait /> : template}</>;
}
