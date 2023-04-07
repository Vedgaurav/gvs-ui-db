// import React, { useState } from 'react';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import "./index.css";


const NavBar = () => {
  
  // <a className="navbar-brand" href="#"></a>

  return (<>
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container-fluid ">
        <Link to="/">
        <img
                style={{ height: "5rem", width: "90px", marginLeft:"2rem"}}
                src="../images/HaldiaT4.png"
              />
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:'3.5rem'}}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
           <a className="nav-link active" aria-current="page" href="#" >
               <Link to='/'>Home</Link> 
                </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</>
  );
};

export default NavBar;