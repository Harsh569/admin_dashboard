import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Snackbar,
  Alert,
  Box,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
// import { signup, clearError } from "../redux/slices/userSlice";
import { signup, clearError } from "../../redux/slices/userSlice";
import { tokens } from "../../theme";

const SignUp = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const { error, isAuthenticated } = useSelector((state) => state.user);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !password) {
      setSnackbarMessage("All fields are required");
      setSnackbarOpen(true);
      return;
    }
    dispatch(signup({ name, email, password }));
  };

  React.useEffect(() => {
    if (error) {
      if (error.includes("already exists")) {
        setSnackbarMessage("An account with this email already exists");
        setSnackbarOpen(true);
      } else {
        setSnackbarMessage(error);
        setSnackbarOpen(true);
      }
      dispatch(clearError());
    } else if (
      !error &&
      snackbarMessage !== "All fields are required" &&
      isAuthenticated
    ) {
      setSnackbarMessage("Sign Up Successful");
      setSnackbarOpen(true);
      navigate("/dashboard");
    }
  }, [error, dispatch, navigate, snackbarMessage, isAuthenticated]);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const url =
    "https://www.google.com/imgres?q=dashboard%20background%20images&imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-vector%2Fgradient-style-abstract-wireframe-background_23-2148993321.jpg&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fdashboard-background&docid=W7Tf-EWUZHukoM&tbnid=z60Ex3RkuvIE_M&vet=12ahUKEwiwyYCdlaCJAxVch68BHc5mGvYQM3oECBYQAA..i&w=626&h=417&hcb=2&ved=2ahUKEwiwyYCdlaCJAxVch68BHc5mGvYQM3oECBYQAAg";

  const bgImageStyle = {
    backgroundImage: `url(${url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Box sx={bgImageStyle}>
      <Container component="main" maxWidth="md">
        <Grid
          container
          spacing={2}
          sx={{
            backgroundColor: theme.palette.background.paper,
            borderRadius: 1,
            boxShadow: 3,
            padding: "26px",
            opacity: 0.95,
          }}
        >
          {/* Image and Heading Container */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              justifyContent: "start",
            }}
          >
            <Box>
              <img
                alt="Jupiter Logo"
                src="/assets/admin.png"
                style={{ height: 52, marginBottom: 16, cursor: "pointer" }}
                onClick={() => navigate("/dashboard")}
              />
              <Typography
                component="h1"
                variant="h4"
                color={colors.primary[100]}
              >
                Sign up
              </Typography>
              <Typography
                component="p"
                variant="h6"
                color={colors.primary[100]}
              >
                to create your account for Jupiter Power Portal.
              </Typography>
            </Box>
          </Grid>
          {/* Sign Up Form Container */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ width: "100%" }}
              >
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={!!error && !name}
                  helperText={!!error && !name ? "Name is required" : ""}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!!error && !email}
                  helperText={!!error && !email ? "Email is required" : ""}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={!!error && !password}
                  helperText={
                    !!error && !password ? "Password is required" : ""
                  }
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Box sx={{ mt: 2 }}>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    align="center"
                  >
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      style={{
                        textDecoration: "none",
                        color: theme.palette.secondary.main,
                      }}
                    >
                      Sign in
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="info"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SignUp;
