import { React, useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGOUT } from '../constants/apiConstant';
import Avatar from '@mui/material/Avatar'
import { NAVIGATE_TO_PARENT_DOMAIN,NAVIGATE_TO_YATRA_REGISTRATION_DOMAIN } from '../constants/apiConstant';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function CustomizedMenus(properties) {
  const menus = useSelector((state) => state.menus)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  function stringToColor(string) {
    let hash = 0;
    let i;
    if (properties.userName !== "")
      /* eslint-disable no-bitwise */
      for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
      }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    if (properties.userName !== "")
      return {
        sx: {
          bgcolor: stringToColor(name),
          borderWidth: "2px"
        },
        children: `${name.charAt(0)}${name.charAt(1)}`,
      };
  }


  useEffect(() => {


  }, [menus])
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickedMenu = async (e) => {
    switch (e.target.id) {
      case "logout":
        {
          sessionStorage.clear();
          await fetch(LOGOUT, {
            method: 'POST',
            credentials: 'include',
          }).then(() => {
            dispatch({ type: "logout", data: "" });
            dispatch({ type: "admin", data: "" });
          });
          navigate("/")
        }
        break;
      case "Admin":
        {
          navigate("/admin");
        }
        break;
      case "Dashboard":
        {
          navigate("/dashboard")
        }
        break;
      case "MyDependents":
        {
          navigate("/dependents")
        }
        break;
      case "Profile":
        {
          navigate("/profile")
        }
        break;
      case "Yatra Main Page":
        {
          window.location.href = NAVIGATE_TO_PARENT_DOMAIN+'/yatra';
        }
        break;
        case "Yatra Registration":
        {
          window.location.href = NAVIGATE_TO_YATRA_REGISTRATION_DOMAIN;
        }
        break;
      default: {
        console.error("There is some error");
      }

    }

  }

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        onClick={handleClick}
        sx={{ opacity: 0.8, position: 'relative', borderRadius: 12, marginInline: 1 }}
      >
        <Avatar {...stringAvatar(properties.userName)} sx={{ boxShadow: 2, fontSize: 16, marginRight: 1, background: stringToColor(properties.userName) }} />
        {properties.userName}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {menus?.map((menu, index) => (<MenuItem id={menu} key={index} onClick={(e) => { handleClickedMenu(e); handleClose() }} disableRipple>
          {menu}
        </MenuItem>))}

      </StyledMenu>
    </div>
  );
}