import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Companies = () => {
  return (
    <>
      <Container>
        <hr color="grey" />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Box>
            <Typography variant="h4" sx={{ color: "white" }}>
              {" "}
              Join The 20,0000+ companies using our platform
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              color: "white",
              alignContent: "center",
              alignItems: "center",
              //   border: "3px solid green",
              //   width: "600px",
              margin: "auto",
              marginTop: "15px",
              justifyContent: "space-around",
              gap: "30px",
              fontSize: "20px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {/* <Box>UIDeck</Box> */}
              <Box>
                <img
                  src="https://s3.envato.com/files/229578783/UIdeck-final-on-dark.png
"
                  height={60}
                  style={{ borderRadius: "120px" }}
                  alt="logo"
                ></img>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {/* <Box>zebec</Box> */}
              <Box>
                <img
                  src="https://s3.envato.com/files/229578783/UIdeck-final-on-dark.png
"
                  height={60}
                  style={{ borderRadius: "120px" }}
                  alt="logo"
                ></img>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {/* <Box>UIDeck</Box> */}
              <Box>
                <img
                  src="https://s3.envato.com/files/229578783/UIdeck-final-on-dark.png
"
                  height={60}
                  style={{ borderRadius: "120px" }}
                  alt="logo"
                ></img>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {/* <Box>UIDeck</Box> */}
              <Box>
                <img
                  src="https://s3.envato.com/files/229578783/UIdeck-final-on-dark.png
"
                  height={60}
                  style={{ borderRadius: "120px" }}
                  alt="logo"
                ></img>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {/* <Box>UIDeck</Box> */}
              <Box>
                <img
                  src="https://s3.envato.com/files/229578783/UIdeck-final-on-dark.png
"
                  height={60}
                  style={{ borderRadius: "120px" }}
                  alt="logo"
                ></img>
              </Box>
            </Box>
          </Box>
        </Box>
        <hr color="grey" />
      </Container>
    </>
  );
};

export default Companies;
