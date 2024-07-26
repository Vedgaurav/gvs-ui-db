import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import "./index.css";
import { useNavigate } from "react-router-dom";
import { LOGOUT } from "../constants/apiConstant";
import { useSelector,useDispatch  } from "react-redux";
import CustomizedMenus from "./CustomizedMenus";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import { PARENT_DOMAIN } from "../constants/apiConstant";

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

    
  return (<>
  <AppBar  style={{background:' -webkit-linear-gradient(180deg,#eee, #090979)'}}position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
          component="img"
          src="../images/HaldiaT4.png"
          style={{ height: "3rem", width: "70px", marginTop:"5px", marginBottom:"5px"}}
          href={PARENT_DOMAIN}
          />
          {logout && <Box sx={{ flexGrow: 0 }} style={{marginTop: "1rem", marginRight: "2px", position:"absolute",   top:0, right:0}}>
            
            <CustomizedMenus  menuItems={menus} />
            
            
          </Box>}
        </Toolbar>
      </Container>
    </AppBar>
</>
  );
};

export default NavBar;