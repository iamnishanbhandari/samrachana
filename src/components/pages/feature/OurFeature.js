import { Typography, Box, Container } from "@mui/material";
import React from "react";

import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import RedeemIcon from "@mui/icons-material/Redeem";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import SdStorageIcon from "@mui/icons-material/SdStorage";
import SavingsIcon from "@mui/icons-material/Savings";
import MarginIcon from "@mui/icons-material/Margin";

const OurFeature = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            mt: "100px",
            border: "1px solid white",
            color: "white",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", fontSize: "30px", color: "#0090FF" }}
            >
              {" "}
              Crypto Feature{" "}
            </Typography>
          </Box>

          <Box sx={{ mt: "10px" }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "45px" }}>
              {" "}
              Best Features{" "}
            </Typography>
          </Box>

          <Box>
            <Typography mt={"10px"}>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              euismod ,vitae. Sed quis aliquet libero.
              <br />
              Vestibulum auctor feugiat erat, eu posuere urna semper et. Sed
            </Typography>
          </Box>
        </Box>
      </Container>

      <Box
        sx={{
          border: "2px solid red",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          mt: "15px",
        }}
      >
        <Box sx={{ width: "25%", margin: "10px", border: "1px solid white" }}>
          <Box
            sx={{
              border: "1px solid white",
              color: "white",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            {" "}
            <HealthAndSafetyIcon
              sx={{
                fontSize: "70px",
                display: "flex",
                margin: "auto",
                color: "#1178F2",
              }}
            />
          </Box>
          <Box
            sx={{
              color: "white",
              textAlign: "center",
              mt: "5px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Safe & Secure{" "}
          </Box>
          <Box sx={{ color: "white", textAlign: "center", pt: "5px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            euismod ,vitae. Sed quis aliquet libero.{" "}
          </Box>
        </Box>

        <Box sx={{ width: "25%", margin: "10px", border: "1px solid white" }}>
          <Box
            sx={{
              border: "1px solid white",
              color: "white",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            {" "}
            <RedeemIcon
              sx={{
                fontSize: "70px",
                display: "flex",
                margin: "auto",
                color: "#0090FF",
              }}
            />
          </Box>
          <Box
            sx={{
              color: "white",
              textAlign: "center",
              mt: "5px",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Early Bonuses{" "}
          </Box>
          <Box sx={{ color: "white", textAlign: "center", pt: "5px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            euismod ,vitae. Sed quis aliquet libero.{" "}
          </Box>
        </Box>

        <Box sx={{ width: "25%", margin: "10px", border: "1px solid white" }}>
          <Box
            sx={{
              border: "1px solid white",
              color: "white",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            {" "}
            <LocalAtmIcon
              sx={{
                fontSize: "70px",
                display: "flex",
                margin: "auto",
                color: "#0090FF",
              }}
            />
          </Box>
          <Box
            sx={{
              color: "white",
              textAlign: "center",
              mt: "5px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Universal Access{" "}
          </Box>
          <Box sx={{ color: "white", textAlign: "center", pt: "5px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            euismod ,vitae. Sed quis aliquet libero.{" "}
          </Box>
        </Box>

        <Box sx={{ width: "25%", margin: "10px", border: "1px solid white" }}>
          <Box
            sx={{
              border: "1px solid white",
              color: "white",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            {" "}
            <SdStorageIcon
              sx={{
                fontSize: "70px",
                display: "flex",
                margin: "auto",
                color: "#0090FF",
              }}
            />
          </Box>
          <Box
            sx={{
              color: "white",
              textAlign: "center",
              mt: "5px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Secure Storage
          </Box>
          <Box sx={{ color: "white", textAlign: "center", pt: "5px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            euismod ,vitae. Sed quis aliquet libero.{" "}
          </Box>
        </Box>

        <Box sx={{ width: "25%", margin: "10px", border: "1px solid white" }}>
          <Box
            sx={{
              border: "1px solid white",
              color: "white",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            {" "}
            <SavingsIcon
              sx={{
                fontSize: "70px",
                display: "flex",
                margin: "auto",
                color: "#0090FF",
              }}
            />
          </Box>
          <Box
            sx={{
              color: "white",
              textAlign: "center",
              mt: "5px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Low Cost
          </Box>
          <Box sx={{ color: "white", textAlign: "center", pt: "5px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            euismod ,vitae. Sed quis aliquet libero.{" "}
          </Box>
        </Box>

        <Box sx={{ width: "25%", margin: "10px", border: "1px solid white" }}>
          <Box
            sx={{
              border: "1px solid white",
              color: "white",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            {" "}
            <MarginIcon
              sx={{
                fontSize: "70px",
                display: "flex",
                margin: "auto",
                color: "#0090FF",
              }}
            />
          </Box>
          <Box
            sx={{
              color: "white",
              textAlign: "center",
              mt: "5px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Several Profit{" "}
          </Box>
          <Box sx={{ color: "white", textAlign: "center", pt: "5px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            euismod ,vitae. Sed quis aliquet libero.{" "}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default OurFeature;
