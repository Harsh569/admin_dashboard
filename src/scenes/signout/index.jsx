import React from "react";
import { Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { useDispatch } from "react-redux";
// import { logout } from "../redux/slices/userSlice";
import { logout } from "../../redux/slices/userSlice";

const Logout = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  dispatch(logout());
  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 8,
          p: 4,
          borderRadius: 1,
          boxShadow: 3,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Typography component="h1" variant="h5">
          You have been logged out
        </Typography>
        <Button
          onClick={handleLoginRedirect}
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
        >
          Login Again
        </Button>
      </Box>
    </Container>
  );
};

export default Logout;
