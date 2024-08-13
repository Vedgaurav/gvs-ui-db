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
import { Typography } from "@mui/material";
import { NAVIGATE_TO_PARENT_DOMAIN,CHECK_AUTHENTICATION_URL } from "../constants/apiConstant";

const NavBar = () => {
  const dispatch = useDispatch();

  const admin =useSelector((state)=> state.admin)
  const logout=useSelector((state)=> state.logout)
  const menus=useSelector((state)=> state.menus)
  const navigate = useNavigate()
  const[dbUserName,setDbUserName]=useState("");

  const fetchData = async () => {
    const response = await fetch(CHECK_AUTHENTICATION_URL, {
      method: "GET",
      credentials: "include",
    }).catch(async(e) => {
      console.warn("failed to load navbar");
      sessionStorage.clear();
       await fetch(LOGOUT,{
        method: 'POST',
        credentials: 'include',
      }).then(()=>{ dispatch({ type: "logout", data: ""}).catch((e)=>{console.error("server is down")});
      dispatch({ type: "admin", data: ""});});
      navigate("/");
    });

    if (response?.ok) {
      const userData = await response.json();
      let { userEmail, roles, userName } = userData;
      if(roles!==null && roles.filter((e) => e.name === "ROLE_ADMIN")){
      dispatch({type:"menus",data:["Profile","Dashboard","MyDependents","Yatra Main Page","Yatra Registration","Admin","logout"]});
      dispatch({ type: "admin", data: "ROLE_ADMIN"})
      dispatch({ type: "logout", data: "logout"});}
      else{
        dispatch({type:"menus",data:["Profile","Dashboard","MyDependents","Yatra Main Page","Yatra Registration","logout"]});
        dispatch({ type: "logout", data: "logout"});
      }
      setDbUserName(userName == null ? userEmail.substr(0, 4) : userName);
    } else {
      console.error("faild to load menu items")
    }
  };


  useEffect(() => {
  fetchData().catch((e)=>console.error("failed to get auth"));
    }, [])

  useEffect(() => {if(admin==="ROLE_ADMIN"){

    dispatch({type:"menus",data:["Profile","Dashboard","MyDependents","Yatra Main Page","Yatra Registration","Admin","logout"]});
  }
  else if(logout==="logout"){
    dispatch({type:"menus",data:["Profile","Dashboard","MyDependents","Yatra Main Page","Yatra Registration","logout"]});
  }
       
      
    }, [admin,logout])

    
  return (<>
  <AppBar  style={{background:' -webkit-linear-gradient(180deg,#eee, #090979)',display:'flex',height:"8vh"}} position="static">
      <Container maxWidth="xxl" >
        <Toolbar disableGutters>
          <Box
          component="img"
          src="../images/HaldiaT4.png"
          style={{ height: "4rem", width: "70px", marginTop:"5px", marginBottom:"5px"}}
          /> <Typography
          variant="h6"
          noWrap
          component="a"
          href={NAVIGATE_TO_PARENT_DOMAIN}
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          GAURANGA VEDIC SOCIETY
        </Typography>
          {logout && sessionStorage.getItem("userFname")?.length!==0 && sessionStorage.getItem("userFname")!==null && <Box sx={{ flexGrow: 0,marginTop: 1, marginRight: 2, position:"absolute",   top:0, right:0 }} >
            
            <CustomizedMenus  menuItems={menus} userName={dbUserName} />
            
            
          </Box>}
        </Toolbar>
      </Container>
    </AppBar>
</>
  );
};

export default NavBar;