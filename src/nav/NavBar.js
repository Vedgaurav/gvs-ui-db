// import React, { useState } from 'react';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import "./index.css";
import { useNavigate } from "react-router-dom";
import { LOGOUT } from "../constants/apiConstant";


const NavBar = () => {
  const navigate = useNavigate()

  useEffect(() => {
       
      
    }, [sessionStorage.getItem("userRole")])

    const logoutHandler=async()=>{

      sessionStorage.clear();

      await fetch(LOGOUT,{
        method: 'POST',
        credentials: 'include',
      });
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
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:'3.5rem'}}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
           <a className="nav-link active" aria-current="page" href="#" >
               <Link to='/'>Home</Link> 
                </a>
            </li> */}
            {sessionStorage.getItem("userRole")==="ROLE_ADMIN"?<li className="nav-item">
              <a className="nav-link" href="#"><Link to='/admin'>Admin</Link> </a>
            </li>:""}
            <li className="nav-item">
              <button className="nav-link" onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</>
  );
};

export default NavBar;