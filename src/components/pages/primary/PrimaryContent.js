import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";

const PrimaryContent = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            border: "1px solid green",
            mt: "100px",
            height: "60vh",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              border: "3px solid white",
              mt: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box>
              <Typography
                variant="h3"
                sx={{
                  outline: "1px solid red",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                CAPITAL IMPORTANT TEXT TO GRAB THE ATTTTENNNTIIIOONN!!!!!!!!!!
              </Typography>
            </Box>
            <Box
              sx={{
                outline: "1px solid red",
                color: "white",
                marginTop: "20px",
                fontWeight: "100",
              }}
            >
              <Typography variant="h4">
                SMALL letter text that acts as sub of the important
                text!!!!!!!!!!
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              outline: "2px solid red",
              width: "30%",
              justifyContent: "space-around",
              margin: "auto",
              marginTop: "50px",
            }}
          >
            <Box>
              <Button>
                <img
                  src="data:image/png;base64,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"
                  height={50}
                  style={{ borderRadius: "500px" }}
                  alt="its filecoin logo put according to your need"
                ></img>
              </Button>
            </Box>

            <Box>
              <Button>
                <img
                  src="data:image/png;base64,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"
                  height={50}
                  style={{ borderRadius: "500px" }}
                  alt="its filecoin logo put according to your need"
                ></img>
              </Button>
            </Box>

            <Box>
              <Button>
                <img
                  src="data:image/png;base64,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"
                  height={50}
                  style={{ borderRadius: "500px" }}
                  alt="its filecoin logo put according to your need"
                ></img>
              </Button>
            </Box>

            <Box>
              <Button>
                <img
                  src="data:image/png;base64,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"
                  height={50}
                  style={{ borderRadius: "500px" }}
                  alt="its filecoin logo put according to your need"
                ></img>
              </Button>
            </Box>
          </Box>

          <Box sx={{}}>
            <Button
              sx={{
                color: "white",
                fontWeight: "bold",
                height: "60px",
                border: "1px solid white",
                borderRadius: "100px",
                width: "200px",
                margin: "auto",
                mt: "60px",
                bgcolor: "darkblue",
              }}
            >
              Hey 15% off here !!
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default PrimaryContent;
