import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import { handleSignOut } from "../Authentication/Firebase/GoogleAtuh/GoogleAuth";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";
export default function PositionedMenu() {
  const [loggedInUser,
    setLoggedInUser,
    getAllUserData,
    setGetAllUserData,
    getAllEventData,
    setGetAllEventData,
    getAllSupplierData, 
    setGetAllSupplierData] = React.useContext(UserContext);
  const navigate = useNavigate();

  const name =
    loggedInUser.firstName.charAt(0).toUpperCase() +
    "" +
    loggedInUser.lastName.charAt(0).toUpperCase();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    if (event.currentTarget.value === 1) {
      navigate("profile");
      
    } else if (event.currentTarget.value === 2) {
      handleSignOut()
      .then();
      navigate("/");
      
    }

    setAnchorEl(null);
  
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar>{name}</Avatar>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem value="1" onClick={handleClose}>
          Profile
        </MenuItem>

        <MenuItem value="2" onClick={handleClose}>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
