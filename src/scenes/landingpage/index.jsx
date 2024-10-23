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
            src="./assets/bg3.jpg"
            alt="Image_1"
            style={{ width: "100%", height: "580.23px" }}
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
              Admin Portal
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, fontSize: 20 }}>
              Control Panel for Admin Efficiency and Analytics
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
            style={{ width: "100%", height: "580.23px" }}
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
              Admin Portal
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, fontSize: 20 }}>
              Control Panel for Admin Efficiency and Analytics
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
            style={{ width: "100%", height: "580.23px" }}
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
              Admin Portal
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, fontSize: 20 }}>
              Control Panel for Admin Efficiency and Analytics
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
          sx={{ mb: 3, color: colors.primary[100] }}
        >
          Our Services
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ pb: 0, color: colors.primary[100] }}
        >
          Our web application features an intuitive Admin Dashboard designed for
          streamlined management and insights. The dashboard is divided into
          three main sections: Data, which allows for efficient team and contact
          management; Charts, offering visual analytics through bar, pie, line,
          and geography charts; and Pages, including tools like calendars,
          profile forms, and FAQs. This setup enables administrators to
          seamlessly manage operations, view performance, and access key
          resources in one central location.
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
                  Data
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
                Efficiently Manage Teams, Contacts, and Financial Data
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
                  Pages
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
                Essential Tools for Daily Operations and User Management
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
              <Link to="/" style={{ textDecoration: "none" }}>
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
                  Charts
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
                Visualize Key Metrics with Interactive Graphs and Analytics
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage;
