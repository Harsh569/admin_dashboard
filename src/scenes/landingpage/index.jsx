import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Box, Typography, Container } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import TableChartIcon from "@mui/icons-material/TableChart";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import AddchartIcon from "@mui/icons-material/Addchart";
import { useTheme } from "@emotion/react";
import { useSelector } from "react-redux";
import MapIcon from "@mui/icons-material/Map";
import { tokens } from "../../theme";

const LandingPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const mode = "light";
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "20px", // Adjust the vertical position of the dots on the image
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ margin: "0px", padding: "0px", listStyleType: "none" }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "white",
          display: "inline-block",
        }}
      ></div>
    ),
  };

  const handleClick = () => {
    navigate("/signup");
  };

  const handleNavigateToNexus = () => {
    window.open(
      "http://jupiter-power-energy-data-visulasation-map.s3-website-us-east-1.amazonaws.com/",
      "_blank"
    );
    // navigate("/dashboard", { state: { activeButton: "table" } });
  };

  const handleNavigateToChart = () => {
    navigate("/dashboard/chart", { state: { activeButton: "chart" } });
  };

  const handleNavigateTo3dViewer = () => {
    navigate("/dashboard/chargevue", { state: { activeButton: "3dViewer" } });
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxHeight: "calc(100vh - 64px)",
        overflow: "auto",
        overflowX: "hidden",
      }}
    >
      <Slider {...settings}>
        <Box sx={{ position: "relative" }}>
          <img
            src="https://www.google.com/imgres?q=dashboard%20background%20images&imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-vector%2Fgradient-style-abstract-wireframe-background_23-2148993321.jpg&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fdashboard-background&docid=W7Tf-EWUZHukoM&tbnid=z60Ex3RkuvIE_M&vet=12ahUKEwiwyYCdlaCJAxVch68BHc5mGvYQM3oECBYQAA..i&w=626&h=417&hcb=2&ved=2ahUKEwiwyYCdlaCJAxVch68BHc5mGvYQM3oECBYQAA"
            alt="Image_0"
            style={{ width: "100%", height: "480.23px" }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "40%",
              left: "5%",
              color: "white",
            }}
          >
            <Typography variant="h2" sx={{ mb: 2 }}>
              PowerPortal
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, fontSize: 20 }}>
              Your Gateway to Comprehensive Energy Insights
            </Typography>
            <Button
              variant="contained"
              onClick={handleClick}
              sx={{
                backgroundColor: "#FAC300",
                color: "#004E91",
                fontSize: "0.9rem",
                "&:hover": {
                  backgroundColor: "#004E91",
                  color: "#FFFFFF",
                },
              }}
            >
              Get started
            </Button>
          </Box>
        </Box>

        <Box sx={{ position: "relative" }}>
          <img
            src="./assets/bg3.jpg"
            alt="Image_1"
            style={{ width: "100%", height: "480.23px" }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "40%",
              left: "5%",
              color: "white",
            }}
          >
            <Typography variant="h2" sx={{ mb: 2 }}>
              PowerPortal
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, fontSize: 20 }}>
              Your Gateway to Comprehensive Energy Insights
            </Typography>
            <Button
              variant="contained"
              onClick={handleClick}
              sx={{
                backgroundColor: "#FAC300",
                color: "#004E91",
                fontSize: "0.9rem",
                "&:hover": {
                  backgroundColor: "#004E91",
                  color: "#FFFFFF",
                },
              }}
            >
              Get started
            </Button>
          </Box>
        </Box>
        <Box sx={{ position: "relative" }}>
          <img
            src="./assets/bg2.jpg"
            alt="Image_2"
            style={{ width: "100%", height: "480.23px" }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "40%",
              left: "5%",
              color: "white",
            }}
          >
            <Typography variant="h2" sx={{ mb: 2 }}>
              PowerPortal
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, fontSize: 20 }}>
              Your Gateway to Comprehensive Energy Insights
            </Typography>
            <Button
              variant="contained"
              onClick={handleClick}
              sx={{
                backgroundColor: "#FAC300",
                color: "#004E91",
                "&:hover": {
                  backgroundColor: "#004E91",
                  color: "#FFFFFF",
                },
              }}
            >
              Get started
            </Button>
          </Box>
        </Box>
        <Box sx={{ position: "relative" }}>
          <img
            src="./assets/bg1.jpg"
            alt="Image_3"
            style={{ width: "100%", height: "480.23px" }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "40%",
              left: "5%",
              color: "white",
            }}
          >
            <Typography variant="h2" sx={{ mb: 2 }}>
              PowerPortal
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, fontSize: 20 }}>
              Your Gateway to Comprehensive Energy Insights
            </Typography>
            <Button
              variant="contained"
              onClick={handleClick}
              sx={{
                backgroundColor: "#FAC300",
                color: "#004E91",
                "&:hover": {
                  backgroundColor: "#004E91",
                  color: "#FFFFFF",
                },
              }}
            >
              Get started
            </Button>
          </Box>
        </Box>
      </Slider>

      {/* Main Content Section */}
      <Container sx={{ mt: 5, mb: 10 }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ mb: 3, color: mode === "light" ? "#000000" : "#ffffff" }}
        >
          Our Services
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ pb: 0, color: mode === "light" ? "#000000" : "#ffffff" }}
        >
          PowerPortal is an integrated platform designed to provide a
          comprehensive view of energy data, trends, and visualization. It
          offers powerful tools to analyze real-time energy trading trends,
          explore energy storage capacities, and visualize data through detailed
          charts and tables. With PowerPortal, users can seamlessly access and
          interpret complex energy information, making informed decisions and
          optimizing energy strategies.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            textAlign: "center",
            marginTop: "-10px",
          }}
        >
          <Box sx={{ width: "30%" }}>
            <Box
              sx={{
                width: "100%",
                height: "200px",
                backgroundColor: "#E0E0E0",
                position: "relative",
              }}
            >
              <AddchartIcon
                style={{
                  color: "#004E91",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "25px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.cursor = "pointer")}
                onClick={handleNavigateToChart}
              />
              <Link to="/dashboard/chart" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h6"
                  sx={{
                    mt: 10,
                    pt: 12,
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "#004E91",
                    lineHeight: 1.5,
                    textAlign: "center",
                  }}
                >
                  TrendEx
                </Typography>
              </Link>
              <Typography
                variant="body1"
                sx={{
                  mt: 1,
                  pt: 1,
                  fontSize: "1rem",
                  color: "#004E91",
                  textAlign: "center",
                }}
              >
                Track, Analyze, and Act on Energy Trends
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: "30%" }}>
            <Box
              sx={{
                width: "100%",
                height: "200px",
                backgroundColor: "#E0E0E0",
                position: "relative",
              }}
            >
              <MapIcon
                style={{
                  color: "#004E91",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "25px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.cursor = "pointer")}
                onClick={handleNavigateToNexus}
              />
              <Link
                to="http://jupiter-power-energy-data-visulasation-map.s3-website-us-east-1.amazonaws.com/"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mt: 10,
                    pt: 12,
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "#004E91",
                    lineHeight: 1.5,
                    textAlign: "center",
                  }}
                >
                  Nexus
                </Typography>
              </Link>
              <Typography
                variant="body1"
                sx={{
                  mt: 1,
                  pt: 1,
                  fontSize: "1rem",
                  color: "#004E91",
                  textAlign: "center",
                }}
              >
                Connecting the Dots in Energy Infrastructure
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "30%",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "200px",
                backgroundColor: "#E0E0E0",
                position: "relative",
              }}
            >
              <ViewInArIcon
                style={{
                  color: "#004E91",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "25px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.cursor = "pointer")}
                onClick={handleNavigateTo3dViewer}
              />
              <Link
                to="/dashboard/chargevue"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mt: 10,
                    pt: 12,
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "#004E91",
                    lineHeight: 1.5,
                    textAlign: "center",
                  }}
                >
                  ChargeVue
                </Typography>
              </Link>
              <Typography
                variant="body1"
                sx={{
                  mt: 1,
                  pt: 1,
                  fontSize: "1rem",
                  color: "#004E91",
                  textAlign: "center",
                }}
              >
                Explore Battery Storage in 3D Detail
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage;
