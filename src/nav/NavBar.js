import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import "./index.css";
import { useNavigate } from "react-router-dom";
import { LOGOUT } from "../constants/apiConstant";
import { useSelector,useDispatch  } from "react-redux";
import CustomizedMenus from "./CustomizedMenus";

const NavBar = () => {
  const dispatch = useDispatch();

  const {admin,logout,menus}=useSelector((state)=> state)
  const navigate = useNavigate()

  useEffect(() => {
    if(sessionStorage.getItem("admin")==="ROLE_ADMIN"){

      dispatch({ type: "admin", data: "ROLE_ADMIN"});
      dispatch({type:"menus",data:["Profile","Dashboard","MyDependents","Admin","logout"]});
      dispatch({ type: "logout", data: "logout"});
    }
    else if(sessionStorage.getItem("logout")==="logout"){
      dispatch({type:"menus",data:["Profile","Dashboard","MyDependents","logout"]});
      dispatch({ type: "logout", data: "logout"});
    }
    
       
      
    }, [])

  useEffect(() => {if(sessionStorage.getItem("admin")==="ROLE_ADMIN"){

    dispatch({type:"menus",data:["Profile","Dashboard","MyDependents","Admin","logout"]});
  }
  else if(sessionStorage.getItem("logout")==="logout"){
    dispatch({type:"menus",data:["Profile","Dashboard","MyDependents","logout"]});
  }
       
      
    }, [admin,logout])

    const logoutHandler=async()=>{



      sessionStorage.clear();

      await fetch(LOGOUT,{
        method: 'POST',
        credentials: 'include',
      }).then(()=>{ dispatch({ type: "logout", data: ""});
      dispatch({ type: "admin", data: ""});});
      navigate("/login")

  }
    
  
  // <a className="navbar-brand" href="#"></a>

  return (<>
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container-fluid ">
        <Link to="/">
        <img
                style={{ height: "4rem", width: "80px", marginLeft:"2rem"}}
                src="../images/HaldiaT4.png"
              />
        </Link>

       {logout && <CustomizedMenus menuItems={menus}/>}
        
      </div>
    </nav>
</>
  );
};

export default NavBar;