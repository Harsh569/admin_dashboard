import React from "react";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { useContext } from "react";
// import { colorModeContext, tokens } from "../../theme";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const handleClick = (e) => {
    console.log("User Profile Clicked");
    setAnchor(e.currentTarget);
  };
  const handleClose = () => {
    setAnchor(null);
  };
  const userInfo = {
    name: "Harshad Sonawane",
    age: 29,
    email: "harshads569@gmail.com",
  };
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex">
        <Box>
          <img
            src="/assets/admin.png"
            alt="logo"
            style={{ height: 40, cursor: "pointer" }}
            onClick={() => navigate("/dashboard")}
          />
        </Box>
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
          marginLeft="20px"
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton
          onClick={handleClick}
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <PersonOutlinedIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchor}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <Tooltip
            disableFocusListener
            PopperProps={{
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [0, -5],
                  },
                },
              ],
            }}
            componentsProps={{
              tooltip: {
                sx: {
                  backgroundColor: colors.primary[400], // Custom background color
                  color: "#ffffff", // Text color
                  fontSize: "14px",
                  padding: "10px",
                  borderRadius: "4px",
                },
              },
            }}
            title={
              <Box sx={{ textAlign: "left" }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: colors.greenAccent[500] }}
                >
                  {userInfo.name}
                </Typography>
                <Typography
                  sx={{ fontWeight: "bold", color: colors.greenAccent[500] }}
                  variant="h6"
                >
                  Age: {userInfo.age}
                </Typography>
                <Typography
                  sx={{ fontWeight: "bold", color: colors.greenAccent[500] }}
                  variant="h6"
                >
                  Email: {userInfo.email}
                </Typography>
              </Box>
            }
            placement="left-start"
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
          </Tooltip>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};
export default Topbar;
